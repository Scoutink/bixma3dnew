# WalkTheWeb (WTW) 3D CMS - Architectural Overview

## Platform Identity
- **Name**: WalkTheWeb (WTW)
- **Type**: 3D Internet/Web CMS Platform
- **Technology Stack**: PHP Backend + Babylon.js 3D Frontend
- **Concept**: WordPress-like CMS but for 3D environments instead of 2D posts

## High-Level Architecture

### Core Components
1. **Entry Point**: `index.php` - Main application entry
2. **Core System**: `/core/` - Core platform functionality
3. **Content Management**: `/content/` - Plugin system and 3D content
4. **API Layer**: `/connect/` - RESTful API endpoints
5. **Configuration**: `/config/` - Platform configuration

### Key Architectural Patterns
- **Plugin-Based Architecture**: Modular system similar to WordPress
- **3D Content Management**: Babylon.js integration for 3D environments
- **Multi-tenant**: Support for multiple "webs" (3D spaces)
- **Avatar System**: User representation in 3D space
- **Real-time Features**: Voice chat, movement, interactions

## Initial Analysis Notes
- Platform loads plugins dynamically via `$wtwpluginloader->getAllPlugins()`
- Menu system generates 3D interface elements
- Heavy use of Babylon.js for 3D rendering
- RESTful API structure for data management
- Multi-language support evident in plugin structure

## Next Analysis Areas
1. Core class structure and initialization
2. 3D scene management and Babylon.js integration
3. User/Avatar system
4. Content/Environment management
5. Plugin architecture deep dive