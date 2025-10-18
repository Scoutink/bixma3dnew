# Data Layer & Database Architecture

## Database Architecture

### Core Database Classes
1. **`wtwdb`** (Line 236304) - Main database operations class
2. **`wtwconnect`** (Line 245118) - Connection management and API base
3. **`wtwtables`** - Table management and schema operations

### Database Configuration
- **Server**: `wtw_dbserver` (from config)
- **Database**: `wtw_dbname` 
- **User**: `wtw_dbusername`
- **Password**: `base64_decode(wtw_dbpassword)` (encrypted storage)
- **Table Prefix**: `wtw_tableprefix` (configurable for multi-tenant)

## Data Access Patterns

### Database Connection Pattern
```php
$conn = new mysqli(wtw_dbserver, wtw_dbusername, 
                   base64_decode(wtw_dbpassword), wtw_dbname);
```

### Query Execution Pattern
```php
public function query($zsql) {
    // Connection management
    // Result processing
    // Error handling
    // Connection cleanup
}
```

### Error Handling
- **Centralized Logging**: All errors go to `errorlog` table
- **Admin Notifications**: JavaScript alerts in admin mode
- **Graceful Degradation**: Continue operation on non-critical errors

## Core Database Tables (Inferred from Code)

### Content Hierarchy Tables
1. **`communities`** - Large 3D spaces
   - `communityid`, `communityname`, `communitydescription`
   - `analyticsid`, `snapshotid`, `createdate`, `updatedate`
   - `deleted` (soft delete), `userid` (owner)

2. **`buildings`** - Structures within communities
   - `buildingid`, `buildingname`, `buildingdescription`
   - `communityid` (foreign key), `analyticsid`, `snapshotid`
   - `gravity` (physics setting), `versionid`, `version`

3. **`things`** - 3D objects within spaces
   - `thingid`, `thingname`, `thingdescription`
   - `buildingid` (foreign key), `analyticsid`, `snapshotid`

### Interactive Content Tables
4. **`actionzones`** - Interactive 3D areas
   - `actionzoneid`, `actionzonetype`
   - `communityid`, `buildingid`, `thingid` (hierarchy)
   - Position, rotation, scaling data

5. **`scripts`** - Dynamic JavaScript code
   - `scriptid`, `scriptname`, `scriptpath`
   - `actionzoneid` (association with zones)

### User & Avatar Tables
6. **`users`** - Platform users
   - User authentication and profile data
   - Access control and permissions

7. **`avatars`** - Avatar definitions
   - 3D avatar models and configurations
   - User associations

### Asset Management Tables
8. **`uploads`** - File management
   - `uploadid`, `filepath`
   - Used for 3D assets, textures, snapshots

9. **`errorlog`** - System monitoring
   - `message`, `logdate`
   - Centralized error tracking

## API Layer Architecture

### Connect Files Pattern
All `/connect/` files follow consistent patterns:
1. **Authentication**: Require `class_wtwconnect.php`
2. **Analytics**: Track page views
3. **Input Validation**: Get and validate parameters
4. **Database Queries**: Fetch/update data
5. **JSON Response**: Return standardized JSON

### Example API Structure (`connect/building.php`)
```php
// Input validation
$zbuildingid = $wtwconnect->getVal('buildingid','');

// Complex query with joins
$zresults = $wtwconnect->query("
    select a1.*, c1.communityname, b1.buildingname
    from buildings a1
    left join communities c1 on a1.communityid=c1.communityid
    where a1.buildingid='".$zbuildingid."' and a1.deleted=0
");

// JSON response formatting
echo json_encode($zresponse);
```

## Data Relationships

### Hierarchical Structure
```
Communities (1:N) Buildings (1:N) Things
     ↓              ↓              ↓
Action Zones ←→ Scripts ←→ Automations
     ↓
Avatars & Users
```

### Asset Relationships
- **Snapshots**: Preview images via `uploads` table
- **3D Assets**: .babylon files linked to content
- **Textures**: Material assets for 3D objects

## Performance & Optimization

### Database Optimization
- **Soft Deletes**: Preserve data integrity
- **Indexed Queries**: Performance optimization
- **Connection Pooling**: Efficient connection management
- **Query Caching**: Reduce database load

### Data Recovery
- **Version Control**: Multiple versions of content
- **Recovery APIs**: Restore deleted content
- **Backup Integration**: Data preservation
- **Schema Migration**: `renameFieldIfExists()` for updates

## Analysis Status
- ✅ Database architecture mapped
- ✅ API patterns identified
- ✅ Data relationships understood
- ✅ Performance patterns documented
- ✅ Error handling system analyzed