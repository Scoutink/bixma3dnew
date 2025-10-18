# Repository Map

High-level overview of the major directories and entry points in the WalkTheWeb project.

| Path | Description |
| --- | --- |
| `/index.php` | Public runtime entry point; bootstraps the session, plugin loader, and UI menus before emitting the main scene shell. |
| `/admin.php` | Admin dashboard entry point; loads administrative menus and management panels. |
| `/core/functions/` | Core PHP classes powering initialization, data access, plugin loading, UI menus, content management, and admin tooling. |
| `/core/handlers/` | AJAX/service handlers that serve JSON or HTML fragments for scenes, avatars, assets, and admin tools. |
| `/core/pages/` | Auxiliary pages (registration, invoices, help, loaders) rendered outside of the Babylon scene canvas. |
| `/core/scripts/` | JavaScript helpers that are bundled with the platform (front-end logic, admin UI scripts). |
| `/core/styles/` | CSS stylesheets for runtime and admin portals. |
| `/connect/` | Public-facing JSON endpoints for sharing content and metadata across WalkTheWeb instances (buildings, communities, avatars, etc.). |
| `/config/` | Deployment-specific configuration (sample file provided; real config created during install). |
| `/content/plugins/` | Built-in plugin packages (3D Internet integration, avatar library, commerce, coins, swiftmailer). |
| `/content/system/` | System-managed uploads, textures, and templates created during runtime. |
| `/content/uploads/` | User-generated uploads (media, geometry, textures). |
| `/htaccess`, `/web.config` | Server rewrite configurations for Apache and IIS. |
| `/LICENSE`, `/license.txt` | GPL licensing notices. |
| `/README.md` | Upstream project overview and installation instructions. |

## Core Class Highlights

- `core/functions/class_wtw-initsession.php` defines the `wtw` singleton that detects protocol/host, loads configuration, manages sessions, and exposes helper methods used everywhere.
- `core/functions/class_wtwdb.php` wraps MySQL access with pooled connections, query helpers, and error logging.
- `core/functions/class_wtwconnect.php` exposes a trimmed-down bootstrap for `/connect` endpoints with role checks and request utilities.
- `core/functions/class_wtwpluginloader.php` discovers plugin descriptors and registers their scripts/styles into runtime registries.

These classes are the foundation of most other modules and should be referenced before working deeper into handler or plugin logic.
