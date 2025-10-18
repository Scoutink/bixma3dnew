# Database Schema Analysis

## Table Prefix System
- **Prefix**: `wtw_tableprefix` (configurable)
- **Pattern**: All tables use consistent prefix for multi-tenant support

## Core Tables (Identified from SQL Queries)

### Content Management Tables
1. **`actionzones`** - Interactive 3D areas
   - `actionzoneid` (Primary Key)
   - `actionzonetype` - Type of interaction
   - `communityid`, `buildingid`, `thingid` - Hierarchy relationships
   - `deleted` - Soft delete flag

2. **`communities`** - Large 3D spaces
   - `communityid` (Primary Key)
   - `communityname`
   - `analyticsid` - Analytics tracking
   - `snapshotid` - Preview image reference
   - `deleted` - Soft delete flag

3. **`buildings`** - Structures within communities
   - `buildingid` (Primary Key)
   - `buildingname`
   - `analyticsid` - Analytics tracking
   - `snapshotid` - Preview image reference
   - `deleted` - Soft delete flag

4. **`things`** - 3D objects within spaces
   - `thingid` (Primary Key)
   - `thingname`
   - `analyticsid` - Analytics tracking
   - `snapshotid` - Preview image reference
   - `deleted` - Soft delete flag

### Supporting Tables
5. **`scripts`** - JavaScript code management
   - `scriptid` (Primary Key)
   - `scriptname`, `scriptpath`
   - `actionzoneid` - Associated with action zones
   - `deleted` - Soft delete flag

6. **`uploads`** - File management
   - `uploadid` (Primary Key)
   - `filepath` - File location
   - Used for snapshots and 3D assets

7. **`errorlog`** - Error tracking
   - `message` - Error details
   - `logdate` - Timestamp

## Schema Patterns

### Hierarchical Relationships
- **Community → Building → Thing** hierarchy
- Foreign key relationships maintain structure
- Soft deletes preserve referential integrity

### Asset Management
- **Upload System**: Centralized file storage
- **Snapshot System**: Preview images for 3D content
- **Script Association**: Dynamic JavaScript loading

### Analytics Integration
- **Analytics IDs**: Tracking for all major entities
- **Performance Monitoring**: Built-in analytics system

## Analysis Status
- ✅ Core table structure identified
- ✅ Relationship patterns understood
- 🔄 Complete schema mapping needed
- ⏳ Index and performance analysis
- ⏳ Data migration patterns