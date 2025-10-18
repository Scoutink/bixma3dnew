# Tag Input Component

The Tag Input component allows users to enter multiple tags or keywords in a single input field. It supports autocomplete, custom tag separators, and various styling options.

## Dependencies

- input-common: Common input functionality
- tag: The Tag component for individual tag styling
- button: The Button component for action buttons

## Usage

### Basic Usage

```html
<input data-role="tag-input" data-tag-separator="," value="tag1, tag2, tag3">
```

### With Autocomplete

```html
<input data-role="tag-input" data-autocomplete="Ukraine, USA, Canada, Singapore, Morocco">
```

### With Random Colors

```html
<input data-role="tag-input" data-random-color="true" value="tag1, tag2, tag3">
```

### With Label

```html
<input data-role="tag-input" data-label="Tags:" value="tag1, tag2, tag3">
```

### Different Sizes

```html
<input data-role="tag-input" class="input-small" value="tag1, tag2, tag3">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `autocomplete` | Array/Object/String | `null` | Array or object of autocomplete values |
| `autocompleteUnique` | Boolean | `true` | When true, only shows unique values in autocomplete list |
| `autocompleteUrl` | String | `null` | URL to fetch autocomplete data |
| `autocompleteUrlMethod` | String | `"GET"` | HTTP method for autocomplete URL request |
| `autocompleteUrlKey` | String | `null` | Key to extract data from JSON response |
| `autocompleteDivider` | String | `","` | Divider for autocomplete values |
| `autocompleteListHeight` | Number | `200` | Maximum height of autocomplete list in pixels |
| `label` | String | `""` | Label text for the input |
| `size` | String | `"normal"` | Size of the input: "small", "normal", or "large" |
| `tagInputDeferred` | Number | `0` | Delay before initialization (milliseconds) |
| `static` | Boolean | `false` | When true, makes the component read-only |
| `clearButton` | Boolean | `true` | When true, shows a clear button |
| `clearButtonIcon` | String | `"❌"` | Icon for the clear button |
| `randomColor` | Boolean | `false` | When true, assigns random colors to tags |
| `maxTags` | Number | `0` | Maximum number of tags (0 for unlimited) |
| `tagSeparator` | String | `","` | Character used to separate tags in the value |
| `tagTrigger` | String | `"Enter, Space, Comma"` | Keys that trigger tag creation |
| `backspace` | Boolean | `true` | When true, allows removing last tag with backspace |
| `clsComponent` | String | `""` | Additional CSS class for the component |
| `clsInput` | String | `""` | Additional CSS class for the input |
| `clsClearButton` | String | `""` | Additional CSS class for the clear button |
| `clsTag` | String | `""` | Additional CSS class for tags |
| `clsTagTitle` | String | `""` | Additional CSS class for tag titles |
| `clsTagAction` | String | `""` | Additional CSS class for tag action buttons |
| `clsLabel` | String | `""` | Additional CSS class for the label |

## Events

| Event | Description |
|-------|-------------|
| `onBeforeTagAdd` | Triggered before a tag is added. Return `false` to prevent adding |
| `onTagAdd` | Triggered when a tag is added |
| `onBeforeTagRemove` | Triggered before a tag is removed. Return `false` to prevent removing |
| `onTagRemove` | Triggered when a tag is removed |
| `onTag` | Triggered when a tag is added or removed |
| `onClear` | Triggered when all tags are cleared |
| `onTagTrigger` | Triggered when a tag trigger key is pressed |
| `onTagInputCreate` | Triggered when the component is created |

## API Methods

### tags()
Returns an array of the current tags.

```javascript
const tagInput = Metro.getPlugin('#my-tag-input', 'tag-input');
const tags = tagInput.tags();
```

### val(v)
Gets or sets the value of the tag input.

**Parameters:**
- `v` (optional) - String or array of tags to set

```javascript
// Get current tags
const tags = tagInput.val();

// Set new tags
tagInput.val("tag1, tag2, tag3");
// or
tagInput.val(["tag1", "tag2", "tag3"]);
```

### append(v)
Appends new tags to the existing ones.

**Parameters:**
- `v` - String or array of tags to append

```javascript
tagInput.append("tag4, tag5");
// or
tagInput.append(["tag4", "tag5"]);
```

### clear()
Removes all tags.

```javascript
tagInput.clear();
```

### disable()
Disables the tag input.

```javascript
tagInput.disable();
```

### enable()
Enables the tag input.

```javascript
tagInput.enable();
```

### toggleState()
Toggles between enabled and disabled states.

```javascript
tagInput.toggleState();
```

### toggleStatic(val)
Toggles between static and editable modes.

**Parameters:**
- `val` (optional) - Boolean to set static mode

```javascript
// Toggle static mode
tagInput.toggleStatic();

// Set specific static mode
tagInput.toggleStatic(true); // Enable static mode
tagInput.toggleStatic(false); // Disable static mode
```

### setAutocompleteList(l)
Sets the autocomplete list.

**Parameters:**
- `l` - String or array/object of autocomplete values

```javascript
tagInput.setAutocompleteList("value1, value2, value3");
// or
tagInput.setAutocompleteList(["value1", "value2", "value3"]);
```

## Styling with CSS Variables

### Tag Input Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--taginput-border-radius` | `4px` | Controls the border radius of the tag input |
| `--taginput-color` | `var(--input-color)` | Controls the text color of the tag input |

### Tag Variables (from Tag component)

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--tag-background` | `#f8f8f8` | Background color for tags |
| `--tag-color` | `#191919` | Text color for tags |
| `--tag-action-background` | `#dcdcdc` | Background color for tag action buttons |
| `--tag-action-color` | `#191919` | Text color for tag action buttons |

### Example of Custom Styling

```css
.tag-input {
    --taginput-border-radius: 8px;
    --taginput-color: #0066cc;
}

.tag {
    --tag-background: #e6f2ff;
    --tag-color: #0066cc;
    --tag-action-background: #0066cc;
    --tag-action-color: #ffffff;
}
```

## Available CSS Classes

### Tag Input Classes
- `.tag-input` - The main container class
- `.original-input` - The original input element
- `.input-wrapper` - The visible input field
- `.input-clear-button` - The clear button
- `.padding-for-clear` - Applied when clear button is present
- `.static-mode` - Applied when the component is in static mode
- `.autocomplete-list` - Autocomplete dropdown
- `.item` - Autocomplete item

### Tag Classes (from Tag component)
- `.tag` - Individual tag elements
- `.title` - Tag text
- `.action` - Tag remove button
- `.small` - Small tag size
- `.large` - Large tag size
- `.static` - Applied to non-removable tags

### Color Classes for Tags
- Accent colors: `.primary`, `.secondary`, `.tertiary`, etc.
- Soft colors: `.soft-red`, `.soft-green`, `.soft-blue`, etc.
- Normal colors: `.normal-red`, `.normal-green`, `.normal-blue`, etc.