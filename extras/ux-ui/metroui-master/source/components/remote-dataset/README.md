# Remote Dataset

A powerful component for displaying remote data with built-in pagination, search, sorting, and customizable entry rendering. The Remote Dataset component fetches data from remote APIs and provides a flexible interface for displaying and interacting with the data.

## Dependencies

- Hooks (for debounced search)
- Pagination component
- Input component
- Select component

## Usage

### Basic Usage

```html
<div data-role="remote-dataset"
     data-url="https://api.example.com/data"
     data-key-data="items"
     data-on-draw-entry="drawEntry">
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
<div data-role="remote-dataset"
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
     data-sort="rating:desc"
     data-sort-rules="price:asc:Price Asc,price:desc:Price Desc,rating:desc:By rating"
     data-rows="10"
     data-rows-steps="10,25,50,100"
     data-page-mode="offset"
     data-on-draw-entry="drawEntry"
     data-cls-body="d-flex flex-row flex-wrap gap-1 mt-4"
     data-cls-pagination="mt-4 d-flex flex-justify-center">
</div>
```

### Using External Controls

```html
<div class="d-flex flex-row gap-2">
    <input type="text" id="search" placeholder="Search...">
    <select id="sorting"></select>
    <select id="rows"></select>
</div>

<div data-role="remote-dataset"
     data-url="https://api.example.com/data"
     data-search-control="#search"
     data-sorting-control="#sorting"
     data-rows-count-control="#rows"
     data-on-draw-entry="drawEntry">
</div>
```

### JavaScript Initialization

```javascript
const dataset = Metro.makePlugin('#myDataset', 'remote-dataset', {
    url: 'https://api.example.com/data',
    keyData: 'items',
    onDrawEntry: function(entry, index) {
        return `<div class="item">${entry.title}</div>`;
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `caption` | string | "" | Caption text displayed above the dataset |
| `url` | string | "" | Primary URL for fetching data |
| `urlSearch` | string | "" | Alternative URL for search requests |
| `method` | string | "GET" | HTTP method for requests |
| `limit` | number | 10 | Number of items per page |
| `offset` | number | null | Starting offset (auto-calculated based on pageMode) |
| `sort` | string | "" | Default sort field and order (format: "field:order") |
| `keyLimit` | string | "" | Query parameter name for limit |
| `keyOffset` | string | "" | Query parameter name for offset |
| `keyTotal` | string | "" | Response key containing total items count |
| `keyData` | string | "" | Response key containing data array |
| `keySort` | string | "" | Query parameter name for sort field |
| `keyOrder` | string | "" | Query parameter name for sort order |
| `keySearch` | string | "q" | Query parameter name for search |
| `shortPagination` | boolean | false | Use simple prev/next pagination |
| `rows` | number | 10 | Initial number of rows per page |
| `rowsSteps` | string | "10,25,50,100" | Available rows per page options |
| `sortRules` | string | "" | Available sorting options (format: "field:order:label:icon") |
| `showServiceBlock` | boolean | true | Show the service block with controls |
| `quickSearch` | boolean | true | Show built-in search input |
| `selectOrder` | boolean | true | Show sorting dropdown |
| `selectCount` | boolean | true | Show rows count dropdown |
| `showMore` | boolean | true | Show "Load More" button |
| `showPagination` | boolean | true | Show pagination controls |
| `params` | object | null | Additional query parameters |
| `searchControl` | string | null | Selector for external search control |
| `sortingControl` | string | null | Selector for external sorting control |
| `rowsCountControl` | string | null | Selector for external rows count control |
| `searchThreshold` | number | 3 | Minimum characters to trigger search |
| `sortLabel` | string | "" | Label for sorting dropdown |
| `rowsLabel` | string | "" | Label for rows count dropdown |
| `searchLabel` | string | "" | Label for search input |
| `pageMode` | string | "offset" | Pagination mode: "offset" or "page" |
| `clsBody` | string | "" | CSS classes for dataset body |
| `clsPagination` | string | "" | CSS classes for pagination |
| `clsSearchBlock` | string | "" | CSS classes for search block |
| `clsOrderBlock` | string | "" | CSS classes for order block |
| `clsRowsCountBlock` | string | "" | CSS classes for rows count block |
| `clsServiceBlock` | string | "" | CSS classes for service block |

## API Methods

+ `addParam(key, value)` - Adds a single query parameter to requests.
+ `addParams(params)` - Adds multiple query parameters to requests.
+ `clearParams()` - Clears all additional query parameters.
+ `load(append)` - Manually triggers data loading. Set append to true to append data instead of replacing.
+ `destroy()` - Destroys the component and removes it from DOM.

#### Example of Method Usage

```javascript
const dataset = Metro.getPlugin('#myDataset', 'remote-dataset');

// Add custom parameters
dataset.addParam('category', 'electronics');
dataset.addParams({
    minPrice: 100,
    maxPrice: 500
});

// Reload data
dataset.load();

// Load more data (append)
dataset.load(true);

// Clear parameters and reload
dataset.clearParams();
dataset.load();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeLoad` | Fired before data loading. Receives URL and component instance. Should return modified URL. |
| `onLoad` | Fired after data is loaded. Receives response data and component instance. Should return processed data. |
| `onDrawEntry` | Fired for each data entry to render custom HTML. Receives entry data and index. Should return HTML string. |
| `onDatasetCreate` | Fired when the component is created |

### Event Usage Examples

```javascript
// Using data attributes
<div data-role="remote-dataset"
     data-on-before-load="beforeLoadHandler"
     data-on-load="loadHandler"
     data-on-draw-entry="drawEntryHandler">
</div>

// JavaScript functions
function beforeLoadHandler(url, component) {
    console.log('Loading from:', url);
    return url + '&timestamp=' + Date.now();
}

function loadHandler(data, component) {
    console.log('Data loaded:', data);
    return data; // Return processed data
}

function drawEntryHandler(entry, index) {
    return `
        <div class="data-entry">
            <h3>${entry.title}</h3>
            <p>${entry.description}</p>
        </div>
    `;
}
```

## Styling with CSS Variables

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `--remote-dataset-gap` | 10px | Gap between service block elements |
| `--remote-dataset-order-block-size` | 200px | Width of the sorting dropdown block |
| `--remote-dataset-count-block-size` | 140px | Width of the rows count dropdown block |

### Example of Custom Styling

```css
#my-dataset {
    --remote-dataset-gap: 20px;
    --remote-dataset-order-block-size: 250px;
    --remote-dataset-count-block-size: 160px;
}
```

## Available CSS Classes

### Base Classes
- `.remote-dataset` - Main component container
- `.dataset-caption` - Caption text styling
- `.dataset-body` - Container for data entries
- `.dataset-load-more` - Load more button container
- `.dataset-pagination` - Pagination container

### Service Block Classes
- `.service-block` - Container for search, sorting, and count controls
- `.search-block` - Search input container
- `.order-block` - Sorting dropdown container
- `.count-block` - Rows count dropdown container

### Utility Classes
- `.short-pagination` - Simple prev/next pagination style
- `.product-card` - Example styling for product entries (from examples)

## Additional Notes

- The component automatically handles URL construction with query parameters
- Search functionality includes debouncing to prevent excessive API calls
- Supports both offset-based and page-based pagination
- The `onDrawEntry` callback is required for rendering data entries
- External controls can be used instead of built-in service block controls
- The component supports both GET and other HTTP methods for data fetching

## Best Practices

- Always provide the `onDrawEntry` callback to render your data entries
- Use appropriate `keyData`, `keyTotal`, and other key parameters to match your API response structure
- Consider using `urlSearch` for search-specific endpoints that may have different response formats
- Use external controls when you need more complex UI layouts
- Implement proper error handling in your `onLoad` callback
- Use CSS variables to maintain consistent styling across your application
- Test pagination with different `pageMode` settings to match your API expectations