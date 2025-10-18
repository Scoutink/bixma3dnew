# JavaScript & Babylon.js Architecture

## JavaScript Loading Structure

### Initialization Scripts (loadInitJSData)
1. **Configuration Variables**: Domain, protocol, version info
2. **Scene Settings**: JSON-encoded scene configuration 
3. **Translation Data**: Multi-language support
4. **Socket.io**: Real-time communication
5. **Core Constructor**: `/core/scripts/prime/wtw_constructor.js`

### Browse Mode Scripts (loadJSBrowseData)
1. **Core Scripts** (`/core/scripts/prime/`):
   - `wtw_common.js` - Common utilities
   - `wtw_utilities.js` - Utility functions
   - `wtw_dynamicscripts.js` - Dynamic loading
   - `wtw_login.js` - Authentication
   - `wtw_uploads.js` - File upload handling
   - `wtw_analytics.js` - Analytics tracking
   - `wtw_cameras.js` - 3D camera management

2. **Avatar Scripts** (`/core/scripts/avatars/`):
   - `wtw_basicavatars.js` - Basic avatar functionality
   - `wtw_addavatarlist.js` - Avatar selection
   - `wtw_transitionsavatars.js` - Avatar transitions

## Key Technical Details

### Babylon.js Version Management
- **Default Version**: v7.x.x (configurable via wtw_babylonversion)
- **Dynamic Loading**: Scripts loaded with version parameters for cache busting
- **Development Mode**: Timestamp-based versioning for development

### Real-time Communication
- **Socket.io**: Used for real-time features
- **Server**: `3dnet.walktheweb.network` for socket connections
- **Features**: Voice chat, movement synchronization, live interactions

### Scene Configuration
- **Scene Settings**: JSON-encoded configuration passed to JavaScript
- **Dynamic Loading**: Scenes loaded based on current location (community/building/thing)
- **State Management**: Current location tracked (communityid, buildingid, thingid)

## Analysis Status
- ✅ JavaScript loading structure mapped
- ✅ Babylon.js integration identified
- ✅ Real-time communication architecture
- 🔄 Individual script analysis needed
- ⏳ 3D scene loading patterns