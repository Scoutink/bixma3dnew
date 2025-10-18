# Table

The Table component is a powerful and flexible data grid that allows you to display, sort, filter, and manipulate tabular data. It supports various features like pagination, searching, row selection, custom cell rendering, and more.

## Dependencies

- Metro UI Core
- DOM library

## Usage

### Basic Usage

```html
<table data-role="table">
    <thead>
        <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Tiger Nixon</td>
            <td>System Architect</td>
            <td>Edinburgh</td>
            <td>61</td>
            <td>2011/04/25</td>
            <td>$320,800</td>
        </tr>
        <!-- More rows... -->
    </tbody>
</table>
```

### Loading Data from JSON

```html
<table class="table striped row-hover" 
       data-role="table"
       data-source="data/table.json">
    <thead></thead>
    <tbody></tbody>
</table>
```

### Advanced Configuration

```html
<table class="table striped row-hover border responsive-md fixed-header"
       data-role="table"
       data-caption="Table caption"
       data-rows="10"
       data-rows-steps="5, 10, 50, 100"
       data-show-activity="false"
       data-source="data/table.json"
       data-show-skip="true"
       data-pagination-wrapper="#pagination"
       data-check="true"
       data-show-inspector-button="true"
       data-horizontal-scroll="true"
       data-cell-wrapper="true">
    <thead></thead>
    <tbody></tbody>
</table>
<div id="pagination"></div>
```

### Custom Cell Rendering

```javascript
function drawCell(td, val, index, head, cells) {
    if (head.name === 'name') {
        td.html('').append(
            $('<a>').attr('href', '#'+val).html(val)
        )
    }
    
    if (head.name === 'age') {
        var pb = $("<div>");
        pb.attr("data-role", "progress")
          .attr("data-value", val);
        td.html('').append(pb);
    }
}
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Table caption text |
| `cardMode` | string | "" | Card mode for responsive tables |
| `useCurrentSlice` | boolean | false | Use current slice for operations |
| `showInspectorButton` | boolean | false | Show inspector button |
| `inspectorButtonIcon` | string | "🔧" | Icon for inspector button |
| `templateBeginToken` | string | `<%` | Begin token for templates |
| `templateEndToken` | string | `%>` | End token for templates |
| `paginationDistance` | number | 5 | Distance between pagination buttons |
| `paginationIslandSize` | number | 3 | Size of pagination islands |
| `paginationShortTrack` | number | 10 | Short track for pagination |
| `horizontalScroll` | boolean | false | Enable horizontal scrolling |
| `horizontalScrollStop` | string | null | Media query to stop horizontal scrolling |
| `check` | boolean | false | Show checkboxes for row selection |
| `checkType` | string | "checkbox" | Type of check control (checkbox or radio) |
| `checkColIndex` | number | 0 | Column index for check control |
| `checkName` | string | null | Name for check controls |
| `checkStoreKey` | string | "TABLE:$1:KEYS" | Key for storing checked items |
| `rownum` | boolean | false | Show row numbers |
| `rownumTitle` | string | "#" | Title for rownum column |
| `filters` | string | null | Filters for data |
| `filtersOperator` | string | "and" | Operator for filters (and/or) |
| `head` | object | null | Head data |
| `body` | object | null | Body data |
| `source` | string | null | Data source URL |
| `static` | boolean | false | Static table mode |
| `searchMinLength` | number | 1 | Minimum length for search |
| `searchThreshold` | number | 500 | Threshold for search |
| `searchFields` | string | null | Fields to search in |
| `showRowsSteps` | boolean | true | Show rows steps control |
| `showSearch` | boolean | true | Show search control |
| `showTableInfo` | boolean | true | Show table info |
| `showPagination` | boolean | true | Show pagination |
| `paginationShortMode` | boolean | true | Use short pagination mode |
| `showActivity` | boolean | true | Show activity indicator |
| `muteTable` | boolean | true | Mute table during operations |
| `showSkip` | boolean | false | Show skip control |
| `rows` | number | 10 | Number of rows per page |
| `rowsSteps` | string | "10,25,50,100" | Steps for rows control |
| `staticView` | boolean | false | Static view mode |
| `viewSaveMode` | string | "client" | Mode for saving view (client/server) |
| `viewSavePath` | string | "TABLE:$1:OPTIONS" | Path for saving view |
| `sortDir` | string | "asc" | Default sort direction |
| `decimalSeparator` | string | "." | Decimal separator |
| `thousandSeparator` | string | "," | Thousand separator |
| `activityType` | string | "atom" | Type of activity indicator |
| `activityStyle` | string | "color" | Style of activity indicator |
| `activityTimeout` | number | 100 | Timeout for activity indicator |
| `searchWrapper` | string | null | Wrapper for search control |
| `rowsWrapper` | string | null | Wrapper for rows control |
| `infoWrapper` | string | null | Wrapper for info |
| `paginationWrapper` | string | null | Wrapper for pagination |
| `skipWrapper` | string | null | Wrapper for skip control |
| `cellWrapper` | boolean | true | Wrap cell content |

## API Methods

+ `addItem(item, redraw)` - Add an item to the table
+ `addItems(items, redraw)` - Add multiple items to the table
+ `updateItem(key, field, value)` - Update an item in the table
+ `getItem(key)` - Get an item by key
+ `deleteItem(fieldIndex, value)` - Delete an item by field index and value
+ `deleteItemByName(fieldName, value)` - Delete an item by field name and value
+ `draw()` - Draw the table
+ `sorting(dir)` - Sort the table
+ `search(val)` - Search in the table
+ `setHeads(data)` - Set table headers
+ `setHeadItem(name, data)` - Set a specific header item
+ `setItems(data)` - Set table items
+ `setData(data)` - Set table data
+ `loadData(source, review)` - Load data from source
+ `reload(review)` - Reload data
+ `clear()` - Clear the table
+ `next()` - Go to next page
+ `prev()` - Go to previous page
+ `first()` - Go to first page
+ `last()` - Go to last page
+ `page(num)` - Go to specific page
+ `addFilter(f, redraw)` - Add a filter
+ `removeFilter(key, redraw)` - Remove a filter
+ `removeFilters(redraw)` - Remove all filters
+ `getItems()` - Get all items
+ `getHeads()` - Get all headers
+ `getView()` - Get current view
+ `getFilteredItems()` - Get filtered items
+ `getSelectedItems()` - Get selected items
+ `getStoredKeys()` - Get stored keys

### Example of Method Usage
```javascript
const table = Metro.getPlugin("#myTable", "table");
table.search("John");
table.page(2);
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDraw` | Triggered when table is drawn |
| `onDrawRow` | Triggered when a row is drawn |
| `onDrawCell` | Triggered when a cell is drawn |
| `onAppendRow` | Triggered when a row is appended |
| `onAppendCell` | Triggered when a cell is appended |
| `onSortStart` | Triggered when sorting starts |
| `onSortStop` | Triggered when sorting stops |
| `onSortItemSwitch` | Triggered when items are switched during sorting |
| `onSearch` | Triggered when search is performed |
| `onRowsCountChange` | Triggered when rows count changes |
| `onDataLoad` | Triggered when data loading starts |
| `onDataLoadError` | Triggered when data loading fails |
| `onDataLoaded` | Triggered when data is loaded |
| `onDataLoadEnd` | Triggered when data loading ends |
| `onDataSaveError` | Triggered when data saving fails |
| `onFilterRowAccepted` | Triggered when a row passes filter |
| `onFilterRowDeclined` | Triggered when a row is filtered out |
| `onCheckClick` | Triggered when a check is clicked |
| `onCheckClickAll` | Triggered when check all is clicked |
| `onCheckDraw` | Triggered when checks are drawn |
| `onViewSave` | Triggered when view is saved |
| `onViewGet` | Triggered when view is retrieved |
| `onViewCreated` | Triggered when view is created |
| `onTableCreate` | Triggered when table is created |
| `onSkip` | Triggered when skip is used |
| `onDrawHead` | Triggered when head is drawn |
| `onDrawFoot` | Triggered when foot is drawn |
| `onDrawBody` | Triggered when body is drawn |
| `onInspectorOpen` | Triggered when inspector is opened |
| `onInspectorClose` | Triggered when inspector is closed |
| `onFieldShow` | Triggered when a field is shown |
| `onFieldHide` | Triggered when a field is hidden |
| `onFieldToggle` | Triggered when a field is toggled |
| `onFieldMove` | Triggered when a field is moved |
| `onSort` | Triggered when table is sorted |
| `onPageChange` | Triggered when page changes |
| `onRowClick` | Triggered when a row is clicked |
| `onRowDblClick` | Triggered when a row is double-clicked |
| `onCellClick` | Triggered when a cell is clicked |
| `onCellDblClick` | Triggered when a cell is double-clicked |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--table-inspector-border-radius` | 10px | 10px | Border radius for inspector |
| `--table-head-font-size` | 14px | 14px | Font size for table header |
| `--table-caption-font-size` | 16px | 16px | Font size for table caption |
| `--table-footer-font-size` | 14px | 14px | Font size for table footer |
| `--table-body-font-size` | 16px | 16px | Font size for table body |
| `--table-border-radius` | 6px | 6px | Border radius for table |
| `--table-border-color` | #e8e8e8 | #4a4d51 | Border color for table |
| `--table-color` | #191919 | #dbdfe7 | Text color for table |
| `--table-background` | transparent | transparent | Background color for table |
| `--table-header-background` | #fafafa | #1b1b1e | Background color for header |
| `--table-header-color` | #191919 | #efefef | Text color for header |
| `--table-sortable-background` | #e8e8e8 | #26282e | Background color for sortable columns |
| `--table-sortable-color` | #000000 | #ffffff | Text color for sortable columns |
| `--table-selected-background` | #d4e2ff | #2e436e | Background color for selected rows/cells |
| `--table-selected-color` | #000000 | #ffffff | Text color for selected rows/cells |
| `--table-striped-background` | #f8f8f8 | #26282e | Background color for striped rows |
| `--table-hover-background` | #eaeaea | #323437 | Background color for hover |
| `--table-hover-color` | #191919 | #ffffff | Text color for hover |
| `--table-inspector-background` | #ffffff | #26282e | Background color for inspector |
| `--table-inspector-border-color` | #e8e8e8 | #4a4d51 | Border color for inspector |
| `--table-inspector-color` | #191919 | #dbdfe7 | Text color for inspector |

### Example of Custom Styling

```css
#my-table {
    --table-border-color: #007bff;
    --table-header-background: #0056b3;
    --table-header-color: white;
    --table-hover-background: #e6f2ff;
}
```

## Available CSS Classes

### Base Classes
- `.table` - Base class for tables
- `.table-component` - Container for the table component
- `.table-container` - Container for the table
- `.table-top` - Top section of the table (search, rows selector)
- `.table-bottom` - Bottom section of the table (pagination, info)
- `.table-info` - Table information section
- `.table-pagination` - Pagination section
- `.table-skip` - Skip section
- `.table-inspector` - Inspector panel

### Table Structure Classes
- `.thead`, `.tbody`, `.tfoot` - Table sections
- `.tr` - Table row
- `.th`, `.td` - Table cells

### Modifiers
- `.fixed-layout` - Fixed table layout
- `.striped` - Striped rows
- `.inverse-striped` - Inverse striped rows
- `.row-hover` - Row hover effect
- `.cell-hover` - Cell hover effect
- `.table-border` - Border around the table
- `.cell-border` - Border around cells
- `.row-border` - Border between rows
- `.subcompact` - Smaller padding and font size
- `.compact` - Small padding and font size
- `.responsive-*` - Responsive tables (xs, sm, md, lg, xl, xxl)
- `.fixed-header` - Fixed header
- `.sortable-column` - Sortable column
- `.sort-asc`, `.sort-desc` - Sort direction indicators
- `.selected` - Selected row or cell

## Additional Notes

- The table component can load data from various sources: HTML, JSON, or AJAX.
- For large datasets, consider using pagination and limiting the number of rows per page.
- Custom cell rendering can be achieved using the `onDrawCell` event.
- The inspector allows users to customize the table view by showing/hiding columns and changing their order.
- For responsive tables, use the appropriate responsive class based on your needs.

## Best Practices

- Always provide meaningful column headers to improve usability.
- Use appropriate styling classes based on the data being displayed.
- For tables with many columns, consider enabling horizontal scrolling.
- Implement custom cell rendering for complex data types.
- Use the inspector for tables with many columns to allow users to customize their view.
- For better performance with large datasets, consider using server-side pagination and filtering.
- Set appropriate search fields to improve search functionality.
- Use the `cellWrapper` option to improve the display of long text in cells.