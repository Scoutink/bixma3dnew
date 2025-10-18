# Input

The Input component is a versatile and feature-rich text input field that extends the standard HTML input element with additional functionality including autocomplete, history, custom buttons, prepend/append options, and various styling options.

## Dependencies

The Input component requires the following dependencies:
- `input-common` - Common input functionality
- `button` - Button component for action buttons
- `select` - Select component for prepend/append options

## Usage

### Basic Usage

```html
<!-- Simple input -->
<input type="text" data-role="input" data-label="Enter text:">

<!-- Input with placeholder -->
<input type="text" data-role="input" data-label="Username:" placeholder="Enter username">
```

### Input with Buttons

```html
<!-- Input with clear button -->
<input type="text" data-role="input" data-clear-button="true" data-label="Search:">

<!-- Password input with reveal button -->
<input type="password" data-role="input" data-reveal-button="true" data-label="Password:">

<!-- Input with search button -->
<input type="text" data-role="input" data-search-button="true" data-label="Search:">

<!-- Input with random generator button -->
<input type="text" data-role="input" data-random-button="true" data-label="Generate:">
```

### Input with Autocomplete

```html
<!-- Static autocomplete list -->
<input type="text" data-role="input" 
       data-autocomplete="apple,banana,cherry,date,elderberry"
       data-label="Fruit:">

<!-- Autocomplete from URL -->
<input type="text" data-role="input" 
       data-autocomplete-url="/api/suggestions"
       data-autocomplete-url-method="GET"
       data-label="Search:">
```

### Input with History

```html
<!-- Input with history support -->
<input type="text" data-role="input" 
       data-history="true"
       data-history-preset="previous search|another search|third search"
       data-label="Search with history:">
```

### Input with Prepend/Append

```html
<!-- Input with prepend text -->
<input type="text" data-role="input" 
       data-prepend="$" 
       data-label="Price:">

<!-- Input with append text -->
<input type="text" data-role="input" 
       data-append=".00" 
       data-label="Amount:">

<!-- Input with prepend/append options -->
<input type="text" data-role="input" 
       data-prepend-options="http://,https://,ftp://"
       data-append-options=".com,.org,.net"
       data-label="URL:">
```

### Custom Buttons

```html
<input type="text" data-role="input" 
       data-custom-buttons='[{"text":"📋","onclick":"copyToClipboard","cls":"copy-btn"}]'
       data-label="Text to copy:">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `inputDeferred` | number | 0 | Delay in milliseconds before initializing the component |
| `label` | string | "" | Label text for the input |
| `autocomplete` | string/array | null | Static autocomplete data (comma-separated string or array) |
| `autocompleteUrl` | string | null | URL to fetch autocomplete data |
| `autocompleteUrlMethod` | string | "GET" | HTTP method for autocomplete URL |
| `autocompleteUrlKey` | string | null | Key to extract data from JSON response |
| `autocompleteDivider` | string | "," | Divider for autocomplete string data |
| `autocompleteListHeight` | number | 200 | Maximum height of autocomplete dropdown |
| `history` | boolean | false | Enable input history functionality |
| `historyPreset` | string | "" | Preset history items (pipe-separated) |
| `historyDivider` | string | "\|" | Divider for history preset string |
| `preventSubmit` | boolean | false | Prevent form submission on Enter key |
| `defaultValue` | string | "" | Default value for the input |
| `size` | string | "default" | Custom width for the input |
| `prepend` | string | "" | Text to prepend to the input |
| `append` | string | "" | Text to append to the input |
| `prependOptions` | string | "" | Dropdown options to prepend (comma-separated) |
| `prependOptionsSep` | string | "," | Separator for prepend options |
| `appendOptions` | string | "" | Dropdown options to append (comma-separated) |
| `appendOptionsSep` | string | "," | Separator for append options |
| `searchButton` | boolean | false | Show search button |
| `clearButton` | boolean | true | Show clear button |
| `revealButton` | boolean | true | Show reveal button for password inputs |
| `randomButton` | boolean | false | Show random generator button |
| `clearButtonIcon` | string | "❌" | Icon for clear button |
| `revealButtonIcon` | string | "👀" | Icon for reveal button |
| `searchButtonIcon` | string | "🔍" | Icon for search button |
| `randomButtonIcon` | string | "🎲" | Icon for random button |
| `customButtons` | array | [] | Array of custom button configurations |
| `searchButtonClick` | string | "submit" | Action for search button ("submit" or custom) |
| `randomSymbols` | string | "0123456789;abcdefghijklmnopqrstuvwxyz;ABCDEFGHIJKLMNOPQRSTUVWXYZ;<>!?@#$%^&*()_+" | Symbol groups for random generation |
| `randomLength` | number | 12 | Length of generated random string |
| `badge` | string | null | Badge text to display |
| `clsComponent` | string | "" | Additional CSS class for component container |
| `clsInput` | string | "" | Additional CSS class for input element |
| `clsPrepend` | string | "" | Additional CSS class for prepend element |
| `clsAppend` | string | "" | Additional CSS class for append element |
| `clsClearButton` | string | "" | Additional CSS class for clear button |
| `clsRevealButton` | string | "" | Additional CSS class for reveal button |
| `clsCustomButton` | string | "" | Additional CSS class for custom buttons |
| `clsSearchButton` | string | "" | Additional CSS class for search button |
| `clsRandomButton` | string | "" | Additional CSS class for random button |
| `clsLabel` | string | "" | Additional CSS class for label |

## API Methods

+ `getHistory()` - Returns the input history array.
+ `getHistoryIndex()` - Returns the current history index.
+ `setHistoryIndex(val)` - Sets the current history index.
+ `setHistory(history, append)` - Sets the history array. If append is true, adds to existing history.
+ `clear()` - Clears the input value.
+ `toDefault()` - Resets input to default value.
+ `disable()` - Disables the input component.
+ `enable()` - Enables the input component.
+ `toggleState()` - Toggles the enabled/disabled state.
+ `setAutocompleteList(list)` - Sets the autocomplete data list.
+ `val(value, splitter)` - Gets or sets the input value. For inputs with prepend/append options, uses splitter to separate values.
+ `prependOptionsVal(value)` - Gets or sets the prepend options value.
+ `appendOptionsVal(value)` - Gets or sets the append options value.
+ `destroy()` - Destroys the component and removes all event listeners.

#### Example of Method Usage

```javascript
const input = Metro.getPlugin('#myInput', 'input');

// Get/set value
const currentValue = input.val();
input.val('new value');

// Work with history
input.setHistory(['item1', 'item2', 'item3']);
const history = input.getHistory();

// Control state
input.disable();
input.enable();
input.clear();

// Set autocomplete data
input.setAutocompleteList(['option1', 'option2', 'option3']);
```

## Events

| Event | Description |
| ----- | ----------- |
| `onInputCreate` | Fired when the input component is created |
| `onAutocompleteSelect` | Fired when an autocomplete item is selected |
| `onHistoryChange` | Fired when history changes (new item added) |
| `onHistoryUp` | Fired when navigating up in history |
| `onHistoryDown` | Fired when navigating down in history |
| `onClearClick` | Fired when the clear button is clicked |
| `onRevealClick` | Fired when the reveal button is clicked |
| `onSearchButtonClick` | Fired when the search button is clicked |
| `onEnterClick` | Fired when Enter key is pressed |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--input-autocomplete-background` | #ffffff | #2b2d30 | Background color of autocomplete dropdown |
| `--input-autocomplete-color` | #191919 | #dbdfe7 | Text color of autocomplete items |
| `--input-autocomplete-selected-color` | #468cff | #ffc351 | Color of selected text in autocomplete |
| `--input-autocomplete-selected-background` | transparent | transparent | Background of selected text in autocomplete |
| `--input-border-radius` | 4px | 4px | Border radius of the input |

### Example of Custom Styling

```css
/* Custom input styling */
#my-input {
    --input-border-radius: 8px;
    --input-autocomplete-background: #f5f5f5;
    --input-autocomplete-selected-color: #ff6b6b;
}

/* Pill-shaped input */
.my-pill-input {
    --input-border-radius: calc(var(--input-height) * 0.44);
}
```

## Available CSS Classes

### Base Classes
- `.input` - Main container class for the input component
- `.input.focused` - Applied when input is focused
- `.input.disabled` - Applied when input is disabled

### Modifiers
- `.pill-input` - Creates a pill-shaped input with rounded borders
- `.rtl` - Right-to-left text direction support

### Element Classes
- `.button-group` - Container for action buttons
- `.input-clear-button` - Clear button
- `.input-reveal-button` - Password reveal button
- `.input-search-button` - Search button
- `.input-random-button` - Random generator button
- `.input-custom-button` - Custom buttons
- `.prepend` - Prepend text container
- `.append` - Append text container
- `.prepend-options` - Prepend dropdown container
- `.append-options` - Append dropdown container
- `.autocomplete-list` - Autocomplete dropdown container
- `.autocomplete-list .item` - Individual autocomplete items
- `.badge` - Badge element
- `.label-for-input` - Label styling

## Additional Notes

- The input component automatically handles keyboard navigation for history (Up/Down arrows)
- Autocomplete supports both static data and dynamic loading from URLs
- The component supports RTL (right-to-left) text direction
- Custom buttons can be configured with their own click handlers and styling
- The random generator creates passwords using configurable symbol groups
- History functionality stores previous input values for easy recall

## Best Practices

- Use appropriate input types (text, password, email, etc.) for better accessibility
- Provide meaningful labels for screen readers
- Consider using autocomplete for frequently entered data
- Use the clear button for better user experience on mobile devices
- Configure appropriate autocomplete list height for your use case
- Use custom buttons sparingly to avoid cluttering the interface
- Test with both light and dark themes when customizing colors