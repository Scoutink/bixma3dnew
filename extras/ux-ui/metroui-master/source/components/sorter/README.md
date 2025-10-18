# Sorter

The Sorter component provides functionality to sort HTML elements based on their content. It can sort elements in ascending or descending order and supports various data formats including text, numbers, dates, and more.

## Dependencies

This component has no external dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<!-- Sort list items -->
<ul data-role="sorter">
    <li>Banana</li>
    <li>Apple</li>
    <li>Orange</li>
    <li>Grape</li>
</ul>
```

### Sorting Table Rows

```html
<!-- Sort table rows -->
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody data-role="sorter" data-sort-target="tr">
        <tr>
            <td>Product A</td>
            <td>$10.00</td>
        </tr>
        <tr>
            <td>Product B</td>
            <td>$5.00</td>
        </tr>
        <tr>
            <td>Product C</td>
            <td>$15.00</td>
        </tr>
    </tbody>
</table>
```

### Sorting with Data Formats

```html
<!-- Sort numbers -->
<ul data-role="sorter">
    <li data-format="number">10</li>
    <li data-format="number">2</li>
    <li data-format="number">5</li>
</ul>

<!-- Sort dates -->
<ul data-role="sorter">
    <li data-format="date">2023-01-15</li>
    <li data-format="date">2022-12-25</li>
    <li data-format="date">2023-03-01</li>
</ul>

<!-- Sort money values -->
<ul data-role="sorter">
    <li data-format="money">$10.50</li>
    <li data-format="money">$5.25</li>
    <li data-format="money">$15.75</li>
</ul>
```

### Sorting by Specific Content

```html
<!-- Sort by specific element content -->
<div data-role="sorter" data-sort-source="span.price">
    <div>
        <h3>Product A</h3>
        <span class="price" data-format="money">$10.00</span>
    </div>
    <div>
        <h3>Product B</h3>
        <span class="price" data-format="money">$5.00</span>
    </div>
    <div>
        <h3>Product C</h3>
        <span class="price" data-format="money">$15.00</span>
    </div>
</div>
```

### Sorting Direction

```html
<!-- Sort in descending order -->
<ul data-role="sorter" data-sort-dir="desc">
    <li>Banana</li>
    <li>Apple</li>
    <li>Orange</li>
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `sorterDeferred` | number | 0 | Delay before initialization (in milliseconds) |
| `thousandSeparator` | string | "," | Character used as thousand separator for number parsing |
| `decimalSeparator` | string | "," | Character used as decimal separator for number parsing |
| `sortTarget` | string | null | Selector for elements to be sorted. If null, uses the first child element's tag name |
| `sortSource` | string | null | Selector for the element within each item that contains the content to sort by |
| `sortDir` | string | "asc" | Initial sort direction ("asc" or "desc") |
| `sortStart` | boolean | true | Whether to sort items on initialization |
| `saveInitial` | boolean | true | Whether to save the initial order for reset functionality |
| `onSortStart` | function | Metro.noop | Callback function when sorting starts |
| `onSortStop` | function | Metro.noop | Callback function when sorting ends |
| `onSortItemSwitch` | function | Metro.noop | Callback function when items are switched during sorting |
| `onSorterCreate` | function | Metro.noop | Callback function when the sorter is created |

## API Methods

### Global Configuration

```javascript
// Configure global default options for all sorter components
Metro.sorterSetup({
    sortDir: "desc",
    thousandSeparator: ".",
    decimalSeparator: ","
});
```

### Instance Methods

+ `sort(dir)` - Sorts the elements in the specified direction ("asc" or "desc").
+ `reset()` - Resets the elements to their initial order.

#### Example of Method Usage

```javascript
// Get sorter instance
const sorter = Metro.getPlugin('#mySorter', 'sorter');

// Sort in ascending order
sorter.sort("asc");

// Sort in descending order
sorter.sort("desc");

// Reset to initial order
sorter.reset();
```

### Static Methods

Metro.sorter namespace provides several utility methods:

+ `create(el, op)` - Creates a new sorter on the specified element with the given options.
+ `isSorter(el)` - Checks if the specified element is a sorter.
+ `sort(el, dir)` - Sorts the specified sorter element in the given direction.
+ `reset(el)` - Resets the specified sorter element to its initial order.

```javascript
// Sort in ascending order
Metro.sorter.sort('#mySorter', 'asc');

// Reset to initial order
Metro.sorter.reset('#mySorter');

// Check if element is a sorter
const isSorter = Metro.sorter.isSorter('#mySorter');
```

## Events

| Event | Description |
| ----- | ----------- |
| `onSortStart` | Triggered when sorting begins |
| `onSortStop` | Triggered when sorting is complete |
| `onSortItemSwitch` | Triggered when two items are switched during sorting |
| `onSorterCreate` | Triggered when the sorter component is created |

## Supported Data Formats

The sorter component can handle various data formats by specifying the `data-format` attribute on the elements being sorted:

| Format | Description | Example |
| ------ | ----------- | ------- |
| `date` | Date values | `<li data-format="date">2023-01-15</li>` |
| `number` | General numbers | `<li data-format="number">42</li>` |
| `int` | Integer numbers | `<li data-format="int">42</li>` |
| `float` | Floating point numbers | `<li data-format="float">42.5</li>` |
| `money` | Currency values | `<li data-format="money">$42.50</li>` |
| `card` | Credit card numbers | `<li data-format="card">4111 1111 1111 1111</li>` |
| `phone` | Phone numbers | `<li data-format="phone">(123) 456-7890</li>` |

## HTML Attributes

| Attribute | Description |
| --------- | ----------- |
| `data-role="sorter"` | Identifies the element as a sorter component |
| `data-sort-dir` | Sets the sort direction ("asc" or "desc") |
| `data-sort-target` | Specifies the elements to be sorted |
| `data-sort-source` | Specifies the element containing the content to sort by |
| `data-format` | Specifies the data format for proper sorting |

## Best Practices

1. Always specify the appropriate `data-format` for non-text content to ensure proper sorting
2. Use `sortSource` when you need to sort by a specific part of complex elements
3. Consider setting `sortStart: false` if you want to display items in their original order initially
4. Provide custom thousand and decimal separators if your data uses different formats
5. Use the `reset()` method to allow users to return to the original order
6. For large collections, consider adding loading indicators during sorting operations
7. When sorting tables, apply the sorter to the `tbody` element and set `sortTarget` to "tr"
8. For better user experience, provide visual indicators of the current sort direction