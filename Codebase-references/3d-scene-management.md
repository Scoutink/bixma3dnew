# 3D Scene Management System

## Core 3D Architecture

### Scene Hierarchy
```
WTW.mainParent (Connecting Grid)
├── Communities (Large 3D spaces)
│   ├── Buildings (Structures)
│   │   └── Things (3D objects)
│   └── Action Zones (Interactive areas)
├── Avatars (User representations)
└── Environment (Sky, ground, water, lighting)
```

### Key Global Objects

#### Scene Management
- **`scene`** - Main Babylon.js scene
- **`engine`** - Babylon.js engine instance
- **`canvas`** - HTML5 canvas element ('wtw_renderCanvas')
- **`WTW.mainParent`** - Root scene object (connecting grid)

#### Physics & XR
- **`havokInstance`** - Havok physics engine
- **`WTW.environment`** - XR environment helper
- **`WTW.xrHelper`** - VR/AR experience helper

#### Lighting System
- **`WTW.sun`** - Primary directional light
- **`WTW.backLight`** - Ambient/indirect lighting
- **`WTW.shadows`** - Shadow generator (BABYLON.ShadowGenerator)

#### Environment Elements
- **`WTW.extraGround`** - Infinite ground plane (conveyor belt effect)
- **`WTW.water`** - Water plane with reflections/refractions
- **`WTW.sky`** - Sky sphere with procedural textures

## Content Arrays (Dynamic Loading)

### Spatial Content
- **`WTW.communities[]`** - Community definitions
- **`WTW.buildings[]`** - Building definitions  
- **`WTW.things[]`** - Thing/object definitions
- **`WTW.connectingGrids[]`** - Positioning grids

### Interactive Content
- **`WTW.actionZones[]`** - Interactive areas
- **`WTW.spawnZones[]`** - Avatar entry points
- **`WTW.automations[]`** - Automated sequences
- **`WTW.moldEvents[]`** - Object interaction events

### Template System
- **`WTW.communitiesMolds[]`** - Community templates
- **`WTW.buildingMolds[]`** - Building templates
- **`WTW.thingMolds[]`** - Object templates
- **`WTW.moldList[]`** - Basic shape library

## Performance & Optimization

### Rendering Optimization
- **Activity Timer**: Pauses rendering when inactive
- **FPS Monitoring**: Real-time performance tracking
- **Octree**: Spatial optimization for large scenes
- **Load Queues**: Staged content loading

### Memory Management
- **Offline Support**: Configurable asset caching
- **Context Loss Handling**: WebGL recovery
- **Texture Buffer Cleaning**: Memory optimization
- **Dynamic Script Loading**: On-demand JavaScript

### Mobile Optimization
- **Device Detection**: `WTW.isMobile`
- **Reduced Timeouts**: Shorter activity timers
- **Touch Controls**: Mobile input handling

## Scene Loading Process

### 1. Initialization
1. Check Babylon.js support
2. Initialize environment and lighting
3. Load user settings and authentication
4. Set up cameras and controls

### 2. Content Loading
1. Load connecting grids (positioning)
2. Load action zones (interactions)
3. Load molds (3D content) via queue system
4. Load automations (animations)

### 3. Real-time Features
1. Initialize multiplayer systems
2. Set up voice chat
3. Enable avatar movement sync
4. Start render loop

## Advanced Features

### XR (VR/AR) Support
- **WebXR Integration**: Native VR/AR support
- **Environment Setup**: XR-optimized scenes
- **Camera Management**: Multiple view modes

### Physics Integration
- **Multiple Engines**: Havok (preferred), Cannon, Oimo
- **Gravity System**: Per-building gravity settings
- **Collision Detection**: Avatar and object interactions
- **Physics Debug**: Visual physics debugging