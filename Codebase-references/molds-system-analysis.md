# Molds System - 3D Template Architecture

## Core Concept
**Molds** are the template system for creating 3D content in WalkTheWeb. They're like "blueprints" that define how 3D objects, buildings, and communities are constructed.

## Molds vs Meshes
- **Meshes**: Actual 3D objects loaded in the scene
- **Molds**: Definitions/templates that create meshes on demand
- **Dynamic Creation**: Molds create meshes as needed for performance

## Mold Categories

### 1. Basic Shape Molds (`wtw_basicmolds.js`)
- **Box**: `WTW.addMoldBox()` - Basic rectangular shapes
- **Cylinder**: `WTW.addMoldCylinder()` - Cylindrical objects
- **Cone**: `WTW.addMoldCone()` - Conical shapes
- **Polygon**: `WTW.addMoldPolygon()` - Multi-sided shapes
- **Spot Light**: `WTW.addMoldSpotLight()` - Lighting objects

### 2. Community Molds
- **Templates**: Pre-built community layouts
- **Recovery System**: `buildingmoldsrecover.php`
- **Database**: `WTW.communitiesMolds[]` array

### 3. Building Molds
- **Templates**: Pre-built building structures
- **Recovery System**: `communitymoldsrecover.php`
- **Database**: `WTW.buildingMolds[]` array

### 4. Thing Molds
- **Templates**: Pre-built 3D objects
- **Recovery System**: `thingmoldsrecover.php`
- **Database**: `WTW.thingMolds[]` array

## Mold Creation Process

### Basic Mold Properties
```javascript
// Geometry
zlenx, zleny, zlenz     // Scaling dimensions
zsubdivisions           // Mesh detail level
zspecial1, zspecial2    // Shape-specific parameters

// Babylon.js Properties
zsideorientation        // Mesh side rendering
renderingGroupId        // Rendering layer (1 or 2)
convertToUnIndexedMesh  // Performance optimization
```

### Rendering Groups
- **Group 1**: Standard 3D objects
- **Group 2**: Special effects, UI elements
- **Admin Mode**: Action zones use DOUBLESIDE rendering

## Advanced Mold Features

### 3D Content Types (`wtw_3d*.js`)
1. **3D Blog** (`wtw_3dblog.js`) - Blog content in 3D space
2. **3D Forms** (`wtw_3dforms.js`) - Interactive 3D forms
3. **3D HTML** (`wtw_3dhtml.js`) - HTML content in 3D

### Plugin Integration
- **Custom Molds**: Plugins can define their own mold types
- **Mold Definitions**: `WTW.pluginMoldDefs[]` array
- **Dynamic Loading**: Molds loaded based on action zones

## Mold Loading System

### Queue-based Loading
```javascript
WTW.loadMoldQueue = [];      // Staged loading queue
WTW.checkLoadQueue = 0;      // Loading state flag
WTW.checkShownMolds = 0;     // Visibility check flag
```

### Performance Optimization
- **Staged Loading**: Molds loaded gradually across frames
- **Queue Management**: Prevents loading bottlenecks
- **Visibility Culling**: Only load visible molds
- **Memory Management**: Unload distant molds

## Mold Recovery System

### Data Recovery Features
- **Soft Deletes**: Molds marked as deleted, not removed
- **Recovery APIs**: Dedicated endpoints for mold recovery
- **Version Control**: Multiple versions of molds
- **Backup System**: Mold definitions preserved

### Recovery Endpoints
- `/connect/buildingmoldsrecover.php`
- `/connect/communitymoldsrecover.php`
- `/connect/thingmoldsrecover.php`

## Database Integration

### Mold Storage
- **Definitions**: JSON-encoded mold parameters
- **Relationships**: Linked to communities/buildings/things
- **Versioning**: Multiple mold versions supported
- **Metadata**: Creation dates, user IDs, descriptions

### Template Sharing
- **Master Templates**: Reusable across multiple instances
- **Franchising**: Share building templates between servers
- **Community Templates**: Shared community layouts

## Analysis Status
- ✅ Mold system architecture understood
- ✅ Basic shape creation mapped
- ✅ Loading queue system identified
- 🔄 Advanced mold types analysis needed
- ⏳ Plugin mold integration patterns