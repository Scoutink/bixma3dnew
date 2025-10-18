# File

The File component provides a customizable file input interface with multiple modes of operation: standard input, button, and drop zone. It enhances the native HTML file input with better styling and additional functionality.

## Usage

### Basic Usage

```html
<input type="file" data-role="file">
```

### With Custom Label

```html
<input type="file" data-role="file" data-label="Select a file:">
```

### With Icon Prepend

```html
<input type="file" data-role="file" data-prepend="<span class='mif-folder mif-2x'>">
```

### Disabled State

```html
<input type="file" data-role="file" disabled>
```

### Drop Zone Mode

```html
<input type="file" data-role="file" data-mode="drop">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `fileDeferred` | number | 0 | Delay before initialization in milliseconds |
| `label` | string | "" | Label text for the file input |
| `mode` | string | "input" | Mode of operation: "input", "button", or "drop" |
| `buttonTitle` | string | "" | Text for the select files button (defaults to localized "Choose file") |
| `filesSelectedTitle` | string | "" | Text for displaying selected files count (defaults to localized "Files selected: {n}") |
| `dropTitle` | string | "" | Text for the drop zone (defaults to localized "Drop file here") |
| `dropIcon` | string | "📥" | Icon for the drop zone |
| `clearButtonIcon` | string | "❌" | Icon for the clear button in drop zone mode |
| `prepend` | string | "" | HTML content to prepend to the input |
| `clsComponent` | string | "" | Additional CSS class for the component container |
| `clsPrepend` | string | "" | Additional CSS class for the prepend element |
| `clsButton` | string | "" | Additional CSS class for the button |
| `clsCaption` | string | "" | Additional CSS class for the caption |
| `clsLabel` | string | "" | Additional CSS class for the label |
| `onSelect` | function | Metro.noop | Callback function triggered when files are selected |
| `onFileCreate` | function | Metro.noop | Callback function triggered when the component is created |

## API Methods

+ `clear()` - Clears the selected file(s) and resets the input.
+ `disable()` - Disables the file input.
+ `enable()` - Enables the file input.
+ `toggleState()` - Toggles between enabled and disabled states.
+ `toggleDir()` - Toggles between LTR and RTL text directions.

### Example of Method Usage

```javascript
// Get the file component
const fileInput = Metro.getPlugin('#my-file-input', 'file');

// Clear the selected file(s)
fileInput.clear();

// Disable the file input
fileInput.disable();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onSelect` | Triggered when files are selected |
| `onFileCreate` | Triggered when the component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--file-height` | 36px | 36px | Height of the file input |
| `--file-button-background` | #ebebeb | #3a3b40 | Background color for the button |
| `--file-button-background-hover` | #dadada | #484850 | Background color for the button on hover |
| `--file-button-color` | #191919 | #f3fcff | Text color for the button |
| `--file-drop-zone-border-size` | 4px | 4px | Border size for the drop zone |
| `--file-drop-zone-border-type` | dashed | dashed | Border type for the drop zone |
| `--file-drop-zone-border-color` | #858585 | #858585 | Border color for the drop zone |
| `--file-drop-zone-background` | #f5f5f5 | #2b2d30 | Background color for the drop zone |
| `--file-drop-zone-color` | #191919 | #dbdfe7 | Text color for the drop zone |
| `--file-drop-zone-hover-color` | darken(#3A3A3A, 20%) | #dbdfe7 | Border color for the drop zone on hover |
| `--file-drop-zone-drop-color` | #94ff6a | #94ff6a | Border color for the drop zone when a file is being dragged over it |

### Example of Custom Styling

```css
#my-file-input {
    --file-button-background: #007bff;
    --file-button-color: #ffffff;
    --file-button-background-hover: #0069d9;
}
```

## Available CSS Classes

### Base Classes
- `.file` - The main container class for input mode (automatically added)
- `.file-button` - The main container class for button mode (automatically added)
- `.drop-zone` - The main container class for drop zone mode (automatically added)
- `.caption` - The caption element that displays the selected file name
- `.files` - The element that displays the number of selected files in drop zone mode
- `.button` - The button element for selecting files
- `.clear-button` - The button for clearing selected files in drop zone mode

### Modifier Classes
- `.disabled` - Applied when the file input is disabled
- `.focused` - Applied when the file input has focus
- `.drop-on` - Applied to the drop zone when a file is being dragged over it
- `.rtl` - Applied for right-to-left text direction
- `.input-small` - Applied for small-sized file inputs
- `.pill-input` - Applied for pill-shaped file inputs

## Additional Notes

- The component automatically handles form resets, clearing the file input when the form is reset.
- In drop zone mode, the clear button appears when hovering over the drop zone.
- The component supports multiple file selection if the `multiple` attribute is added to the input element.
- For accessibility, the component maintains focus states and supports keyboard navigation.