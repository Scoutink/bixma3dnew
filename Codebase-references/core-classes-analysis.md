# WalkTheWeb Core Classes Analysis

## Core Class Structure (from /core/functions/)

### Primary Classes
1. **class_wtw-initsession.php** (Line 229757) - Main initialization and session management
2. **class_wtwactionzones.php** (Line 232784) - Interactive 3D zones
3. **class_wtwadmin.php** (Line 233488) - Admin interface management
4. **class_wtwadminmenu.php** (Line 234830) - Admin menu system
5. **class_wtwanimations.php** (Line 237618) - Animation management
6. **class_wtwapi.php** (Line 237870) - API layer
7. **class_wtwavatars.php** (Line 238244) - Avatar system
8. **class_wtwbuildingmolds.php** (Line 240582) - Building templates
9. **class_wtwbuildings.php** (Line 240996) - Building management
10. **class_wtwcommunities.php** (Line 242829) - Community spaces
11. **class_wtwcommunitymolds.php** (Line 244702) - Community templates
12. **class_wtwconnect.php** (Line 245118) - Database connectivity
13. **class_wtwconnectinggrids.php** (Line 245696) - Grid connections
14. **class_wtwdb.php** (Line 246113) - Database operations
15. **class_wtwdownloads.php** (Line 248676) - Download management

### Key Patterns Observed
- **Molds System**: Template-based creation (buildings, communities, things)
- **Multi-level Architecture**: Admin, API, Core functionality separation
- **3D-Specific Classes**: Avatars, animations, action zones
- **CMS Features**: Downloads, uploads, user management

## Class Relationships (Initial)
- `class_wtw-initsession.php` → Core bootstrap
- `class_wtwmenus.php` → 3D menu generation
- `class_wtwplugins.php` → Plugin architecture
- `class_wtwdb.php` → Data persistence layer

## Analysis Status
- ✅ Directory structure mapped
- ✅ Core classes identified
- 🔄 Individual class analysis in progress
- ⏳ Class relationships mapping
- ⏳ 3D integration patterns