# Function & Class Notes

## `wtw` (core/functions/class_wtw-initsession.php)
- Singleton accessor via `instance()`; globals like `$wtw` reference this object after `require_once`.
- Constructor defines `wtw_rootpath`, conditionally loads `/config/wtw_config.php`, and pulls in the `wtwuser` helper so authentication helpers are ready immediately.
- Public properties cache environment metadata: protocol, domain, content paths, current community/building/thing IDs, and BabylonJS version numbers.
- `checkHost()` normalizes HTTPS state, sets cookie parameters, opens the PHP session, resolves IP addresses (including load balancer headers), and stores user IDs/tokens in the instance.
- `serror()` writes to the `errorlog` table and, when invoked from the admin portal, can surface messages in the browser console.

## `wtwdb` (core/functions/class_wtwdb.php)
- Implements connection pooling with `getConnection()`, recycling connections every hour and tracking reuse metrics.
- `query($sql)` wraps result iteration, converts rows into associative arrays, frees result sets immediately, and records slow queries (>100ms) for later diagnostics.
- Automatic fallback to a direct `mysqli` connection ensures queries still execute if the pooled connection is unavailable.
- `serror()` pushes database issues into the `errorlog` table and triggers admin-page notifications when applicable.
- `getConnectionStats()` returns a diagnostic bundle (query counts, connection attempts, average latency) that can be surfaced in monitoring tools or admin views.

## `wtwconnect` (core/functions/class_wtwconnect.php)
- Mirrors environment setup for `/connect` endpoints: determines protocol/domain, content paths, and session user context.
- `initClass()` registers a shutdown handler, enforces HTTPS, exposes domain-level constants, and syncs session identifiers with the shared `wtwuser` instance.
- Helper methods like `getClientIP()` and `getVal()` simplify request parsing and IP detection while hiding raw `$_SERVER` access.
- Common workflow inside `/connect/*.php`: call `initClass()`, validate access with `isUserInRole()`, run queries through the shared `wtwdb` instance, and `json_encode` the response.

## `wtwpluginloader` (core/functions/class_wtwpluginloader.php)
- `getAllPlugins($contentPath, $load)` scans `/content/plugins`, inspects each plugin’s header comments, and builds a metadata array that includes activation status and dependency flags.
- When `$load` is true and a plugin is marked active in the database, the loader immediately `require`s the plugin’s root PHP file so it can register hooks or assets.
- Dependencies are retrieved from the `pluginsrequired` table and enriched with resolved names (community/building/thing) so the admin UI can surface installation requirements.
- `getPluginPHP()` gracefully falls back to bundled icon assets if a plugin omits its own artwork, ensuring consistent visuals in the plugin manager.

## `wtwmenus` (core/functions/class_wtwmenus.php)
- Builds the main browse menu (`getMainMenu()`) by querying `menuitems`, applying alignment rules, and emitting both desktop and mobile markup in one pass.
- Menu actions are wired to JavaScript helpers (`WTW.showSettingsMenu`, `WTW.openWebpage`, etc.), centralizing navigation behavior.
- Supports runtime extensions through `addSettingsMenuItem()`, which appends developer-defined menu blocks with custom access control and JS callbacks.

## `/connect` Endpoint Pattern
- Endpoints include the shared bootstrap (`class_wtwconnect.php`), run analytics tracking when enabled, and typically gate logic behind role checks (e.g., only admins can fetch full user records).
- Query helpers return associative arrays; endpoints assemble minimal payloads (IDs, names, tokens, timestamps) before encoding to JSON.
- Error handling consistently funnels through `$wtwconnect->serror()` to avoid leaking stack traces while still capturing diagnostics server-side.

## Plugin Layouts
- Plugin root file matches the folder name and exposes metadata fields (`pluginname`, `title`, `description`, `author`, `version`, `releasedate`).
- Functional code lives under each plugin’s `functions/` directory, allowing class autoloads or manual `require_once` during activation.
- Plugins use the same global singletons (`$wtw`, `$wtwdb`, `$wtwplugins`) as the core, so they should be careful to guard against missing constants when run outside the full bootstrap.
