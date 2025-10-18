# Handlers & Endpoint Reference

## Entry Points
- **`index.php`** — loads the visitor experience.  After bootstrapping sessions and plugins it emits the HTML shell that JavaScript uses to build the 3D scene.
- **`admin.php`** — loads the admin dashboard.  Adds management classes and renders the control panels, but reuses the shared menu components so the UI feels consistent.

## Core Handlers (`core/handlers/*`)
Handlers expect JSON payloads (usually via `fetch`/`XMLHttpRequest`) and respond with JSON.  They always include `class_wtwhandlers.php`, optionally include a domain-specific class, and then switch on a `function` field to route commands.  Common patterns include:

| Handler | Responsibilities |
| --- | --- |
| `communities.php` | Manages scene metadata such as spawn zones, gravity, water/sky parameters, and first-building placements.  Reads dozens of environmental fields from the request, delegates persistence to `wtwcommunities`, and returns minimal JSON responses. |
| `buildings.php` | Handles CRUD for buildings, versioning, placements, and mold associations. |
| `things.php` | Similar to `buildings.php`, but for reusable “things” assets that can be inserted into communities. |
| `avatars.php` | Maintains avatar definitions, animations, and personalizations. |
| `hud.php` | Loads HUD configuration and user interface overlays for the Babylon scene. |
| `uploads.php` / `uploadedfiles.php` | Manage asset uploads, storage paths, and metadata updates. |
| `pluginloader.php` | Surfaces plugin metadata for the admin UI (enabled, required, versions). |
| `users.php` | Administrative user management operations (roles, profile updates, password resets). |

All handlers finish by echoing CORS-limited headers (`addHandlerHeader`) and `json_encode`ing the response array.

## Connect APIs (`connect/*`)
- Designed for cross-site sharing of data (buildings, communities, things, avatars) so other WalkTheWeb instances can embed your content.
- Each script boots `wtwconnect`, tracks analytics (if configured), gathers request parameters via helper methods like `getVal`, checks roles (`isUserInRole`), and emits JSON payloads.
- Example: `connect/user.php` only allows admins to fetch detailed user profiles; it assembles the dataset with metadata such as tokens, timestamps, and assigned roles.

## Plugin Hooks
- Plugins add their own handlers under `content/plugins/<plugin>/handlers` or `functions`.  They rely on the same core helpers and can register menu items or UI panels during bootstrap.
- The plugin loader exposes dependencies so handlers know whether extra assets (communities/buildings/things) must be present before enabling a plugin.

## Pages (`core/pages/*`)
- Lightweight PHP scripts render standalone HTML (registration, password reset, invoice viewer, model viewer).  They generally include the bootstrap and then echo templates tailored for non-scene tasks.

## Supporting Utilities
- `core/functions/class_wtwhandlers.php` provides utility methods for sanitizing request values, decoding base64 payloads, logging, and assembling handler headers.  Every handler depends on this class for consistent behavior.
- JavaScript clients (under `core/scripts`) house the `WTW` namespace referenced throughout menu actions and handler calls, providing a unified API for making AJAX requests and manipulating the Babylon scene.
