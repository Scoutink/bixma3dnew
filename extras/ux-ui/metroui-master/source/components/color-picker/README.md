# Color Picker

The Color Picker component provides an interactive interface for selecting colors. It integrates with the Color Selector component to offer a comprehensive color selection experience with various formats and options.

## Dependencies

The Color Picker component depends on the following components:
- Input
- Radio
- Button
- Color Selector

## Usage

### Basic Usage

```html
<input type="text" data-role="color-picker">
```

### Additional Configurations

```html
<input type="text" 
       data-role="color-picker"
       data-show-values="hex, rgb, hsl, hsv, rgba, hsla, cmyk"
       data-return-value-type="rgba"
       data-clear-button="true"
       data-label="Select color:">
```

### Setting Value Programmatically

```html
<button class="button" onclick="Metro.getPlugin('#cp', 'color-picker').val('#ff00ff');">Set value</button>
<input type="text" id="cp" data-role="color-picker">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| defaultSwatches | String | "#FFFFFF,#000000,#FFFB0D,#0532FF,#FF9300,#00F91A,#FF2700,#686868,#EE5464,#D27AEE,#5BA8C4,#E64AA9,#1ba1e2,#6a00ff,#bebebe,#f8f8f8" | Comma-separated list of predefined color swatches |
| duration | Number | 100 | Animation duration for dropdown in milliseconds |
| prepend | String | "" | Content to prepend to the color picker |
| append | String | "" | Content to append to the color picker |
| label | String | "" | Label text for the color picker |
| clearButton | Boolean | false | Whether to show a clear button |
| clearButtonIcon | String | "❌" | Icon for the clear button |
| pickerButtonIcon | String | "🎨" | Icon for the color picker button |
| defaultValue | String | "rgba(0, 0, 0, 0)" | Default color value |
| openMode | String | "auto" | Mode for opening the color picker dropdown |
| resultType | String | "hex" | Format of the color result (hex, rgb, rgba, hsl, hsla) |
| inputThreshold | Number | 500 | Threshold for input in milliseconds |

## API Methods

+ val(value) - Get or set the color value.

#### Example of Method Usage
```javascript
// Get current color value
const color = Metro.getPlugin('#my-color-picker', 'color-picker').val();

// Set color value
Metro.getPlugin('#my-color-picker', 'color-picker').val('#FF0000');
```

+ destroy() - Destroy the color picker component and remove it from the DOM.

#### Example of Method Usage
```javascript
Metro.getPlugin('#my-color-picker', 'color-picker').destroy();
```

## Events

| Event | Description |
| --- | --- |
| onColorSelected | Triggered when a color is selected |
| onColorPickerCreate | Triggered when the color picker is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| --input-box-shadow | rgba(0, 123, 255, 0.25) | - | Shadow for the focused state |
| --input-color | #333 | - | Text color for buttons |
| --input-border-color | #ccc | - | Border color for buttons |
| --input-font-size | 14px | - | Font size for buttons |
| --input-disabled-color | #888 | - | Text color for disabled state |
| --border-color | #ddd | - | Border color for the color example box |
| --d-menu-shadow-color | rgba(0, 0, 0, 0.2) | - | Shadow color for the dropdown |

### Example of Custom Styling

```css
:root {
  --input-box-shadow: rgba(0, 123, 255, 0.25);
  --input-color: #333;
  --input-border-color: #ccc;
  --input-font-size: 14px;
  --input-disabled-color: #888;
  --border-color: #ddd;
  --d-menu-shadow-color: rgba(0, 0, 0, 0.2);
}
```

## Available CSS Classes

### Base Classes
- `.color-picker` - Main container class
- `.color-example-box` - Box displaying the selected color
- `.color-selector-box` - Container for the color selector dropdown
- `.buttons` - Container for the picker and clear buttons

### Modifiers
- `.focused` - Applied when the color picker is focused
- `.disabled` - Applied when the color picker is disabled
- `.open` - Applied when the color selector dropdown is open