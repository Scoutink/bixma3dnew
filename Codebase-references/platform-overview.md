# WalkTheWeb Platform Overview

## Platform Details
- **Version**: 3.8.1
- **Database Version**: 1.2.26
- **Last Updated**: 2024-11-11
- **Babylon.js Version**: v7.x.x (latest)

## Core Concepts

### "Webs" - 3D Spaces
- Each "web" is a 3D environment/world
- Multi-tenant architecture supporting multiple webs
- Domain-based routing to different 3D spaces

### Content Hierarchy
1. **Communities** - Large 3D spaces (like cities/regions)
2. **Buildings** - Structures within communities
3. **Things** - 3D objects within buildings/spaces
4. **Action Zones** - Interactive areas

### Template System ("Molds")
- **Building Molds**: Templates for creating buildings
- **Community Molds**: Templates for creating communities  
- **Thing Molds**: Templates for creating 3D objects
- Allows rapid creation of 3D content using predefined templates

### User System
- **Users**: Platform members
- **Avatars**: 3D representation of users
- **Roles**: Permission-based access control
- **Authentication**: Secure login system

## Key Features

### 3D Functionality
- **Real-time 3D environments** using Babylon.js
- **Avatar movement** and interaction
- **Voice chat** integration
- **3D object manipulation**
- **Scene loading** and management

### CMS Features
- **Content management** for 3D assets
- **Plugin architecture** for extensibility
- **Multi-language support**
- **File upload** system
- **Admin interface**

### Advanced Features
- **Virtual currency** (WTW Coins)
- **E-commerce** in 3D spaces
- **Social features** (communities, sharing)
- **Real-time collaboration**

## Technical Architecture
- **Singleton Pattern**: Main WTW class
- **Plugin System**: Modular functionality
- **API Layer**: RESTful endpoints in /connect/
- **Database Abstraction**: Custom DB layer
- **3D Asset Management**: Babylon.js integration