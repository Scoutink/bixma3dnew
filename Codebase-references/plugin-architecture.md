# Plugin Architecture Analysis

## Core Plugin System

### Plugin Structure
Each plugin follows a standardized structure:
```
content/plugins/[plugin-name]/
├── [plugin-name].php          # Main plugin file
├── [plugin-name].png          # Plugin icon
├── assets/                    # 3D assets and media
│   ├── 3dobjects/            # Babylon.js models
│   ├── images/               # Textures and UI images
│   └── css/                  # Stylesheets
├── connect/                   # API endpoints
├── functions/                 # PHP classes
│   ├── class_functions.php   # Core functionality
│   └── class_plugin.php      # Plugin interface
├── handlers/                  # Request handlers
├── languages/                 # Internationalization
├── scripts/                   # JavaScript files
│   └── class_main.js         # Main plugin JS
└── styles/                    # CSS files
```

## Current Plugins

### 1. WTW-3DInternet (Core 3D Functionality)
- **Purpose**: Core 3D internet features
- **Key Files**:
  - `main.js` - Core 3D functionality
  - `class_main.js` - Main plugin class
  - `chat.js` - Chat system
  - `move.js` - Movement controls
  - `voicechat*.js` - Voice communication
- **3D Assets**: Text prompts, UI elements

### 2. WTW-Avatars (Avatar System)
- **Purpose**: Avatar creation and management
- **Key Files**:
  - `designer.php` - Avatar designer interface
  - `wtwavatars_designer.js` - Designer functionality
  - `custom_*.js` - Customization scripts
- **Features**: Avatar customization, coverings, molds

### 3. WTW-Coins (Virtual Currency)
- **Purpose**: Virtual economy system
- **3D Assets**: Coin models, platforms, interactive elements
- **Features**: Coin collection, display, transactions

### 4. WTW-Shopping (E-commerce)
- **Purpose**: 3D shopping experiences
- **3D Assets**: Product displays, shopping UI, buttons
- **Features**: Product catalogs, cart system, checkout

### 5. WTW-SwiftMailer (Email System)
- **Purpose**: Email functionality
- **Dependencies**: SwiftMailer library, email validation

## Plugin Loading System
- **Dynamic Loading**: `$wtwpluginloader->getAllPlugins()`
- **Script Integration**: `$wtwplugins->getPluginScripts()`
- **Style Integration**: `$wtwplugins->getPluginStylesheets()`
- **Function Registration**: `$wtwplugins->getScriptFunctions()`

## Plugin API Patterns
- **Standardized Classes**: `class_functions.php`, `class_plugin.php`
- **Connect Endpoints**: RESTful API in connect/ folder
- **3D Integration**: Custom molds, action zones, coverings
- **Localization**: JSON language files

## Analysis Status
- ✅ Plugin structure identified
- ✅ Core plugins mapped
- 🔄 Plugin API interface analysis needed
- ⏳ 3D asset integration patterns
- ⏳ Plugin communication mechanisms