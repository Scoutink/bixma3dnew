# Architecture Notes

## Bootstrap Flow
1. `index.php` requires the session bootstrap (`class_wtw-initsession.php`), plugin manager, and menu helpers, then requests the plugin loader to register all packages before rendering HTML.  The resulting page is composed by echoing out meta, CSS, JS, and menu fragments in order.  This file is the default visitor entry point.
2. `admin.php` mirrors that flow but layers in admin-specific classes (`class_wtwadmin.php`, `class_wtwadminmenu.php`) before outputting the management shell that wraps the same menu system.
3. Both entry points rely on singletons exposed as globals (`$wtw`, `$wtwmenus`, `$wtwpluginloader`, `$wtwadmin`, etc.), ensuring that once the bootstrap is complete any later include can reference shared services.

## Core Runtime Services
- **Session & Environment (`class_wtw-initsession.php`)**: resolves `wtw_rootpath`, loads `config/wtw_config.php` if present, and immediately instantiates the `wtwuser` class.  It exposes public properties covering versions, host/URL metadata, and the active context (community, building, thing).  Helper methods manage error logging, IP detection, HTTPS enforcement, and session persistence.
- **Database Layer (`class_wtwdb.php`)**: provides a reusable `mysqli` connection pool with age-based recycling, query counting, and slow-query logging.  The `query` method automatically falls back to a direct connection if pooling fails, always returning associative arrays for convenience.  Error logging writes into the `errorlog` table and can push messages into the admin UI if the request originated from `admin.php`.
- **Connect Runtime (`class_wtwconnect.php`)**: a lighter bootstrap used by `/connect/*` scripts.  It mirrors the environment checks, sets protocol/domain variables, ensures session tokens are loaded, and exposes helper methods like `getClientIP`, `initClass`, and `getVal` wrappers so each endpoint can focus on assembling JSON.
- **Plugin Loader (`class_wtwpluginloader.php`)**: scans `/content/plugins`, parses the metadata headers at the top of each plugin’s main PHP file, toggles active status based on database records, and conditionally `require`s the plugin when the entry point requests `getAllPlugins`.  The loader also enriches plugin metadata with dependency records from the `pluginsrequired` table.

## Runtime Request Types
- **Scene Rendering**: After bootstrap, the menus and hidden fields emit a BabylonJS-ready shell.  Most scene data is lazily fetched via JavaScript hitting the `/core/handlers/*` endpoints for communities, buildings, avatars, HUD elements, etc.
- **Admin Operations**: Admin shell loads additional JS/CSS and exposes modal forms driven by handlers like `core/handlers/uploads.php`, `core/handlers/molds.php`, and dashboard logic.  These handlers leverage the same core classes for DB access and plugin awareness.
- **Connect Services**: Files in `/connect` (e.g., `user.php`, `buildings.php`, `communities.php`) expose JSON payloads for sharing assets across servers.  They boot `wtwconnect`, validate permissions/roles, build result arrays, and `json_encode` the response.

## Content & Extensions
- **Content Storage**: `content/system` holds runtime-generated assets (e.g., default textures, plugin icons) while `content/uploads` is reserved for user uploads and media.  Paths and URLs are centrally computed by the `wtw` and `wtwconnect` classes so deployments can relocate the content directory if needed.
- **Plugins**: Bundled plugins (3D Internet, Avatars, Coins, Shopping, SwiftMailer) live under `content/plugins/<plugin>/<plugin>.php`.  Metadata headers feed the loader, and additional PHP/JS/CSS lives in each plugin’s `functions`, `handlers`, or asset subdirectories.

## Global Patterns
- **Singleton Access**: Almost every class uses a static `instance()` method and stores the object in `protected static $_instance`, enabling global `$wtw...` references after the initial `require_once`.
- **Safety Guards**: Many methods wrap logic in `try/catch` blocks and call `serror()` to persist issues in the database rather than exposing errors to the client.
- **Configuration**: Installation writes `/config/wtw_config.php` defining database credentials, default domain, FTP details, and optional third-party keys; the application checks for constants before use to support both installed and development environments.
