# Remote Table

A powerful component for displaying remote data in a table format with built-in pagination, search, sorting, and customizable rendering. The Remote Table component fetches data from remote APIs and provides a flexible interface for displaying tabular data with full control over pagination modes.

## Dependencies

- Table component (for base table styles)
- Pagination component
- Input component (for search functionality)
- Select component (for rows count selection)

## Usage

### Basic Usage

```html
<div data-role="remote-table"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-fields="id, name, email">
</div>
```

### Page-based Pagination (pageMode="page")

:::caution
The `pageMode` parameter is crucial for determining how pagination works with your API.
When using `pageMode="page"`, the component sends page numbers (1, 2, 3...) to your API instead of offset values.
When using `pageMode="offset"`, it sends offset values (0, 10, 20...) based on the current page and limit.
:::

```html
<div data-role="remote-table"
     data-page-mode="page"
     data-offset="1"
     data-key-offset="page"
     data-key-data="data"
     data-key-limit="perPage"
     data-key-total="totalProducts"
     data-fields="id, title, price"
     data-url="https://api.example.com/products">
</div>
```

### Offset-based Pagination (pageMode="offset" - default)

```html
<div data-role="remote-table"
     data-page-mode="offset"
     data-key-offset="skip"
     data-key-limit="limit"
     data-key-data="products"
     data-key-total="total"
     data-fields="id, title, price"
     data-url="https://api.example.com/products">
</div>
```

### Advanced Configuration

```html
<div data-role="remote-table"
     data-caption="Products"
     data-url="https://dummyjson.com/products"
     data-url-search="https://dummyjson.com/products/search"
     data-key-offset="skip"
     data-key-limit="limit"
     data-key-data="products"
     data-key-total="total"
     data-key-sort="sortBy"
     data-key-order="order"
     data-key-search="q"
     data-fields="id, title, price, discountPercentage"
     data-sortable-fields="id, title, price, discountPercentage"
     data-col-size="30,,150,150"
     data-captions="ID, Title, Price, Discount"
     data-sort="id"
     data-rows="10"
     data-rows-steps="10,25,50,100"
     data-page-mode="offset"
     data-on-draw-cell="drawCell"
     data-cls-table="table-border striped row-hover responsive-sm"
     data-cls-pagination="mt-4 d-flex flex-justify-center">
</div>
```

### Using External Controls

```html
<div class="d-flex flex-row gap-2">
    <input type="text" id="search" placeholder="Search...">
    <select id="rows"></select>
</div>

<div data-role="remote-table"
     data-url="https://api.example.com/data"
     data-search-control="#search"
     data-rows-count-control="#rows"
     data-key-data="items">
</div>
```

### JavaScript Initialization

```javascript
const table = Metro.makePlugin("#myTable", "remote-table", {
    url: "https://api.example.com/data",
    pageMode: "page",
    keyData: "items",
    fields: "id, name, email"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Table caption text |
| `url` | string | "" | Primary URL for data fetching |
| `urlSearch` | string | "" | Alternative URL for search requests |
| `method` | string | "GET" | HTTP method for requests |
| `limit` | number | 10 | Number of records per page |
| `offset` | number | null | Starting offset/page (auto-calculated based on pageMode) |
| `fields` | string | "" | Comma-separated list of fields to display |
| `sortableFields` | string | "" | Comma-separated list of sortable fields |
| `colSize` | string | "" | Comma-separated list of column widths |
| `sort` | string | "" | Default sort field |
| `sortOrder` | string | "asc" | Default sort order (asc/desc) |
| `captions` | string | null | Comma-separated list of column headers |
| `keyLimit` | string | "" | API parameter name for limit |
| `keyOffset` | string | "" | API parameter name for offset/page |
| `keyTotal` | string | "" | API response key for total count |
| `keyData` | string | "" | API response key for data array |
| `keySort` | string | "" | API parameter name for sort field |
| `keyOrder` | string | "" | API parameter name for sort order |
| `keySearch` | string | "q" | API parameter name for search query |
| `shortPagination` | boolean | false | Use simple prev/next pagination |
| `rows` | number | 10 | Initial rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available rows per page options |
| `showServiceBlock` | boolean | true | Show search and controls block |
| `quickSearch` | boolean | true | Show search input |
| `selectOrder` | boolean | true | Show sort controls |
| `selectCount` | boolean | true | Show rows count selector |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional parameters to send with requests |
| `searchControl` | string | null | Selector for external search control |
| `rowsCountControl` | string | null | Selector for external rows count control |
| `searchThreshold` | number | 3 | Minimum characters to trigger search |
| `rowsLabel` | string | "" | Label for rows count selector |
| `searchLabel` | string | "" | Label for search input |
| **`pageMode`** | **string** | **"offset"** | **Pagination mode: "offset" or "page"** |
| `clsTable` | string | "" | CSS classes for table element |
| `clsRow` | string | "" | CSS classes for table rows |
| `clsCell` | string | "" | CSS classes for table cells |
| `clsHead` | string | "" | CSS classes for table header |
| `clsPagination` | string | "" | CSS classes for pagination |

### Understanding pageMode Parameter

The `pageMode` parameter is crucial for API compatibility and determines how pagination values are calculated and sent to your server:

#### pageMode="offset" (Default)
- **Offset Calculation**: Starts from 0, increments by `limit` value
- **API Requests**: Sends offset values (0, 10, 20, 30...)
- **Use Case**: APIs that expect offset-based pagination
- **Example**: `?limit=10&skip=20` (for page 3 with 10 items per page)

#### pageMode="page"
- **Page Calculation**: Starts from 1, increments by 1
- **API Requests**: Sends page numbers (1, 2, 3, 4...)
- **Use Case**: APIs that expect page-based pagination
- **Example**: `?perPage=10&page=3` (for page 3 with 10 items per page)

**Important**: When using `pageMode="page"`, make sure to:
1. Set `data-offset="1"` to start from page 1
2. Use appropriate `keyOffset` parameter name (e.g., "page")
3. Ensure your API expects page numbers, not offset values

## API Methods

+ `addParam(key, value)` - Add a single parameter to API requests.
+ `addParams(params)` - Add multiple parameters to API requests.
+ `clearParams()` - Clear all additional parameters.
+ `load(append)` - Reload data from the API.
+ `destroy()` - Remove the component and clean up.

#### Example of Method Usage

```javascript
const table = Metro.getPlugin('#myTable', 'remote-table');

// Add search parameter
table.addParam('category', 'electronics');

// Add multiple parameters
table.addParams({
    minPrice: 100,
    maxPrice: 500
});

// Reload data
table.load();

// Clear parameters
table.clearParams();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Fired before data loading, allows URL modification |
| `onLoad` | Fired after data is loaded, allows data transformation |
| `onDrawRow` | Fired when drawing each table row |
| `onDrawCell` | Fired when drawing each table cell |
| `onDrawHeadCell` | Fired when drawing each header cell |
| `onTableCreate` | Fired when the table component is created |

### Event Usage Examples

```javascript
function beforeLoad(url, table) {
    console.log('Loading from:', url);
    return url; // Return modified URL if needed
}

function onLoad(data, table) {
    console.log('Data loaded:', data);
    return data; // Return transformed data if needed
}

function drawCell(cell, value, fieldName, record, index) {
    if (fieldName === 'price') {
        cell.innerHTML = `$${value}`;
    }
}
```

```html
<div data-role="remote-table"
     data-on-before-load="beforeLoad"
     data-on-load="onLoad"
     data-on-draw-cell="drawCell">
</div>
```

## Styling with CSS Variables

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `--remote-table-order-block-size` | 200px | Width of the sort controls block |
| `--remote-table-count-block-size` | 140px | Width of the rows count selector block |

### Example of Custom Styling

```css
#my-table {
    --remote-table-order-block-size: 250px;
    --remote-table-count-block-size: 160px;
}
```

## Available CSS Classes

### Base Classes
- `.remote-table` - Main component container
- `.table-component` - Applied to the main element
- `.service-block` - Container for search and controls
- `.search-block` - Container for search input
- `.count-block` - Container for rows count selector
- `.order-block` - Container for sort controls
- `.table-pagination` - Pagination container

### Data Cell Classes
- `.data-cell-{fieldName}` - Applied to each data cell based on field name
- `.head-cell-{fieldName}` - Applied to each header cell based on field name

### Modifier Classes
- `.sortable-column` - Applied to sortable column headers
- `.sort-asc` - Applied to ascending sorted columns
- `.sort-desc` - Applied to descending sorted columns

## pageMode Usage Examples

### Example 1: Page-based API (like many REST APIs)

```html
<!-- For APIs that expect: /api/products?page=1&perPage=10 -->
<div data-role="remote-table"
     data-page-mode="page"
     data-offset="1"
     data-key-offset="page"
     data-key-limit="perPage"
     data-url="/api/products">
</div>
```

### Example 2: Offset-based API (like DummyJSON)

```html
<!-- For APIs that expect: /api/products?skip=0&limit=10 -->
<div data-role="remote-table"
     data-page-mode="offset"
     data-key-offset="skip"
     data-key-limit="limit"
     data-url="/api/products">
</div>
```

### Example 3: Dynamic pageMode switching

```javascript
const table = Metro.getPlugin('#myTable', 'remote-table');

// Switch to page mode
table.options.pageMode = 'page';
table.options.keyOffset = 'page';
table.offset = 1;
table.load();

// Switch to offset mode
table.options.pageMode = 'offset';
table.options.keyOffset = 'skip';
table.offset = 0;
table.load();
```

## Best Practices

### pageMode Selection
- **Use `pageMode="page"`** when your API expects page numbers (1, 2, 3...)
- **Use `pageMode="offset"`** when your API expects offset values (0, 10, 20...)
- Always verify your API documentation to choose the correct mode
- Test pagination with your API to ensure correct behavior

### General Best Practices
- Always specify `keyData` to tell the component where to find the data array in the API response
- Use `keyTotal` for proper pagination when your API provides total count
- Implement `onDrawCell` for custom cell formatting
- Use external controls for better UX when integrating with existing forms
- Set appropriate `searchThreshold` to avoid excessive API calls
- Use `shortPagination` for mobile-friendly interfaces
- Always handle loading states and errors in your `onBeforeLoad` and `onLoad` callbacks

## Additional Notes

- The component automatically handles debounced search to prevent excessive API calls
- Sorting is handled client-side by sending sort parameters to the API
- The component supports both simple prev/next pagination and full page number pagination
- All API parameters are URL-encoded automatically
- The component integrates seamlessly with Metro UI's theming system
- Custom cell rendering allows for complex data presentation including HTML content