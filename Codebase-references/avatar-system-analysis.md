# Avatar System Architecture

## Core Avatar Concepts

### Avatar Types
1. **User Avatar** (`WTW.myAvatar`) - Current user's 3D representation
2. **Multiplayer Avatars** - Other users in the scene
3. **Avatar Placeholders** - Temporary representations before avatar selection
4. **Anonymous Avatars** - Guest user representations

### Avatar Components
- **3D Model**: Babylon.js mesh with animations
- **Position**: X, Y, Z coordinates in 3D space
- **Rotation**: Orientation in 3D space
- **Scaling**: Size adjustments
- **Animations**: Movement, gestures, interactions

## Avatar System Files

### Core Avatar Scripts (`/core/scripts/avatars/`)
1. **`wtw_basicavatars.js`** (Line 292330) - Core avatar functions
2. **`wtw_addavatarlist.js`** (Line 291472) - Avatar selection
3. **`wtw_avatarfunctions.js`** (Line 291522) - Avatar utilities
4. **`wtw_loadavatar.js`** (Line 293576) - Avatar loading system
5. **`wtw_transitionsavatars.js`** (Line 294829) - Avatar transitions

### Avatar Plugin (`/content/plugins/wtw-avatars/`)
- **Designer Interface**: Avatar customization UI
- **Custom Scripts**: Molds, coverings, action zones
- **3D Assets**: Avatar models and textures

## Avatar Management

### Avatar Creation Process
1. **Placeholder Creation**: `WTW.addAvatarPlaceholder()`
2. **Position Validation**: Start position and rotation
3. **Model Loading**: 3D asset loading from .babylon files
4. **Animation Setup**: Movement and gesture animations
5. **Physics Integration**: Collision detection and movement

### Avatar Properties
```javascript
// Position and Transform
zavatardef.start.position.{x,y,z}    // Initial spawn position
zavatardef.start.rotation.{x,y,z}    // Initial orientation
zavatardef.position.{x,y,z}          // Current position
zavatardef.scaling.{x,y,z}           // Size scaling

// Avatar State
WTW.avatarid                         // Current avatar ID
WTW.myAvatar                         // User's avatar object
WTW.avatars[]                        // All avatars in scene
```

## Multiplayer Avatar System

### Real-time Features (from wtw-3dinternet plugin)
- **Movement Tracking**: `masterMove` - Real-time position sync
- **Voice Chat**: `masterVoiceChat` - Spatial audio communication
- **Chat System**: `masterChat` - Text communication
- **Avatar Limit**: `multiPlayer = 20` - Max avatars per scene

### Multiplayer Variables
```javascript
wtw3dinternet.multiPlayer = 20;           // Max multiplayer count
wtw3dinternet.multiPlayerOn = 1;          // Multiplayer toggle
wtw3dinternet.avatarParameterSize = 800;  // Avatar parameter scaling
wtw3dinternet.avatars = [];               // Multiplayer avatar tracking
wtw3dinternet.AvatarIDs = 1;              // Show avatar name tags
```

### Voice Chat Integration
- **Audio Context**: WebAudio API integration
- **WebRTC**: Real-time voice communication
- **Spatial Audio**: 3D positioned audio
- **Mute Controls**: User audio controls

## Avatar Animation System

### Animation Types
- **Movement**: Walking, running, jumping
- **Gestures**: Hand movements, expressions
- **Interactions**: Object manipulation
- **Idle**: Standing animations

### Animation Management
- **Event-driven**: Triggered by user actions
- **State-based**: Different animations for different states
- **Transition System**: Smooth animation blending
- **Performance**: Optimized for real-time rendering

## Avatar Customization

### Customization Features (wtw-avatars plugin)
- **Molds**: Basic avatar shapes and structures
- **Coverings**: Textures, colors, materials
- **Action Zones**: Interactive avatar areas
- **Designer Interface**: Visual customization tools

### Asset Management
- **3D Models**: Avatar base meshes
- **Textures**: Skin, clothing, accessories
- **Animations**: Movement and gesture libraries
- **Snapshots**: Avatar preview images

## Analysis Status
- ✅ Avatar system architecture mapped
- ✅ Multiplayer integration understood
- ✅ Voice chat system identified
- 🔄 Animation system deep dive needed
- ⏳ Customization workflow analysis