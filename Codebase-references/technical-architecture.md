# WalkTheWeb - Technical Architecture Deep Dive

## Core Technology Stack

### Backend (PHP)
- **Main Class**: `wtw` (Singleton pattern)
- **Version**: 3.8.1 (DB: 1.2.26)
- **Database**: MySQL with custom ORM layer
- **Architecture**: Plugin-based, similar to WordPress

### Frontend (JavaScript + Babylon.js)
- **Main Class**: `WTWJS()` → `WTW` global object
- **3D Engine**: Babylon.js v7.x.x
- **Physics**: Havok (preferred), Cannon, Oimo, or none
- **Real-time**: Socket.io for multiplayer features

### Key Global Variables (JavaScript)
```javascript
let scene;           // Main Babylon.js scene
let engine;          // Babylon.js engine
let canvas;          // HTML5 canvas element
let havokInstance;   // Physics engine instance
```

## Initialization Flow

### 1. PHP Bootstrap (`index.php`)
1. Load core classes: `class_wtw-initsession.php`
2. Initialize plugins: `$wtwpluginloader->getAllPlugins()`
3. Generate HTML structure with embedded JavaScript
4. Load menus and UI components

### 2. JavaScript Initialization (`wtw_init.js`)
```javascript
window.onload → WTW.initLoadSequence()
                ↓
              WTW.loadSequence()
                ↓
              WTW.continueLoadSequence()
```

### 3. 3D Engine Setup (`wtw_core.js`)
1. Check Babylon.js support
2. Load user settings and login state
3. Initialize 3D environment
4. Load scene components (grids, action zones, molds)

## Core Architecture Patterns

### 1. Multi-Mode Operation
- **Browse Mode**: Regular 3D browsing (`index.php`)
- **Admin Mode**: Content management (`admin.php`)
- **Shared Components**: Both modes use same core engine

### 2. Scene Hierarchy
```
Community (Large 3D space)
├── Buildings (Structures within community)
│   └── Things (Objects within buildings)
└── Action Zones (Interactive areas)
```

### 3. Real-time Features
- **Socket.io Server**: `3dnet.walktheweb.network`
- **Voice Chat**: WebRTC integration
- **Movement Sync**: Real-time avatar positions
- **Multiplayer**: Shared 3D experiences

### 4. XR Support
- **VR/AR Ready**: WebXR integration
- **Environment**: Default XR environment setup
- **Camera Systems**: Multiple camera modes

## Key Components Analysis

### Avatar System
- **3D Representation**: Babylon.js avatars
- **Movement**: Physics-based navigation
- **Customization**: Plugin-based avatar designer
- **Animation**: Avatar animation system

### Content Management
- **Molds**: Template system for 3D content
- **Action Zones**: Interactive 3D areas
- **Coverings**: Surface/texture system
- **Upload System**: 3D asset management

### Plugin Architecture
- **Dynamic Loading**: Runtime plugin registration
- **3D Integration**: Custom molds, zones, coverings
- **API Endpoints**: RESTful services in `/connect/`
- **Asset Management**: 3D models, textures, scripts

## Performance & Optimization
- **Activity Timer**: Pauses rendering when inactive
- **Mobile Detection**: Optimized for mobile devices
- **Load Balancer Support**: Server health checks
- **Asset Caching**: Version-based cache busting

## Security Features
- **User Authentication**: Token-based system
- **Access Control**: Role-based permissions
- **Content Rating**: Age-appropriate content filtering
- **Input Validation**: XSS and injection protection