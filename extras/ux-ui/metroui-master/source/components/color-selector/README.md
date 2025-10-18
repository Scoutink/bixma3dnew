# Color Selector

The Color Selector is a comprehensive color picking component that allows users to select colors in various formats (HEX, RGB, RGBA, HSL, HSLA, HSV, CMYK). It provides a visual interface with color maps, hue and alpha sliders, and predefined color swatches.

## Dependencies

The Color Selector component depends on the following components:
- Input
- Radio
- Farbe (color manipulation library)

## Usage

### Basic Usage

```html
<div data-role="color-selector"></div>
```

### Additional Configurations

```html
<div data-role="color-selector" 
     data-return-value-type="hex"
     data-show-alpha-channel="true"
     data-init-color="#3498db"
     data-show-values="hex, rgb, rgba, hsl, hsla, hsv, cmyk"
     data-user-colors="#FF0000,#00FF00,#0000FF">
</div>
```

### With Controller Input

```html
<input type="text" data-role="input" id="color-controller">
<div data-role="color-selector" 
     data-controller="#color-controller"
     data-init-color="#9c27b0">
</div>
```

### Setting Values Programmatically

```html
<button class="button" onclick="Metro.getPlugin('#myColorSelector', 'color-selector').val('#aa00ff')">Set to Violet</button>
<button class="button" onclick="alert(Metro.getPlugin('#myColorSelector', 'color-selector').val())">Get color</button>
<div id="myColorSelector" data-role="color-selector"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| defaultSwatches | String | "#FFFFFF,#000000,#FFFB0D,#0532FF,#FF9300,#00F91A,#FF2700,#686868,#EE5464,#D27AEE,#5BA8C4,#E64AA9,#1ba1e2,#6a00ff,#bebebe,#f8f8f8" | Comma-separated list of default color swatches |
| userColors | String | null | Comma-separated list of user-defined colors |
| returnValueType | String | "hex" | Format of the returned color value (hex, rgb, rgba, hsl, hsla, hsv, cmyk) |
| returnAsString | Boolean | true | If true, returns color as a string; if false, returns a color object |
| showValues | String | "hex, rgb, rgba, hsl, hsla, hsv, cmyk" | Comma-separated list of color formats to display |
| showAsString | String | null | Comma-separated list of color formats to display as strings |
| showUserColors | Boolean | true | If true, shows the user colors section |
| controller | String | null | Selector for an input element to be used as a controller |
| addUserColorTitle | String | null | Title for the "Add User Color" button |
| userColorsTitle | String | null | Title for the user colors section |
| hslMode | String | "percent" | Mode for HSL values display ("percent" or numeric) |
| showAlphaChannel | Boolean | true | If true, shows the alpha channel slider |
| inputThreshold | Number | 300 | Debounce threshold for input changes in milliseconds |
| initColor | String | null | Initial color value |
| readonlyInput | Boolean | false | If true, makes color value inputs readonly |
| clsSelector | String | "" | Additional CSS class for the selector element |
| clsSwatches | String | "" | Additional CSS class for the swatches container |
| clsSwatch | String | "" | Additional CSS class for individual swatches |
| clsValue | String | "" | Additional CSS class for color value elements |
| clsLabel | String | "" | Additional CSS class for labels |
| clsInput | String | "" | Additional CSS class for input elements |
| clsUserColorButton | String | "" | Additional CSS class for the user color button |
| clsUserColors | String | "" | Additional CSS class for the user colors container |
| clsUserColorsTitle | String | "" | Additional CSS class for the user colors title |
| clsUserColor | String | "" | Additional CSS class for user color elements |

## API Methods

+ val(value) - Gets or sets the current color value.

#### Example of Method Usage
```javascript
// Get current color value
const color = Metro.getPlugin('#myColorSelector', 'color-selector').val();

// Set color value
Metro.getPlugin('#myColorSelector', 'color-selector').val('#FF0000');
```

+ user(colors) - Gets or sets the user colors.

#### Example of Method Usage
```javascript
// Get user colors
const userColors = Metro.getPlugin('#myColorSelector', 'color-selector').user();

// Set user colors as string
Metro.getPlugin('#myColorSelector', 'color-selector').user('#FF0000,#00FF00,#0000FF');

// Set user colors as array
Metro.getPlugin('#myColorSelector', 'color-selector').user(['#FF0000', '#00FF00', '#0000FF']);
```

+ getVal() - Gets the current color value in the format specified by `returnValueType`.

#### Example of Method Usage
```javascript
const color = Metro.getPlugin('#myColorSelector', 'color-selector').getVal();
```

+ destroy() - Destroy the color selector component and remove it from the DOM.

#### Example of Method Usage
```javascript
Metro.getPlugin('#myColorSelector', 'color-selector').destroy();
```

## Events

| Event | Description |
| --- | --- |
| onSelectColor | Triggered when a color is selected |
| onColorSelectorCreate | Triggered when the color selector is created |

#### Example of Event Usage
```javascript
<div id="myColorSelector" data-role="color-selector" data-on-select-color="handleColorSelect"></div>

<script>
function handleColorSelect(color, primitive) {
    console.log("Selected color:", color);
    console.log("Color primitives:", primitive);
}
</script>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| --color-selector-background | var(--default-background) | var(--default-background) | Background color of the color selector |

### Example of Custom Styling

```css
:root {
  --color-selector-background: #f8f8f8;
}

.dark-side {
  --color-selector-background: #333333;
}
```

## Available CSS Classes

### Base Classes
- `.color-selector` - Main container class
- `.color-box` - Container for the color picker elements
- `.default-swatches` - Container for default color swatches
- `.user-colors` - Container for user-defined colors
- `.color-map` - Container for the color shade map
- `.hue-map` - Container for the hue slider
- `.alpha-map` - Container for the alpha slider
- `.color-values-block` - Container for color value inputs

### Modifiers
- `.no-alpha-channel` - Applied when alpha channel is hidden
- `.dragging` - Applied when a cursor is being dragged

### Example of Complete Implementation

```html
<div id="colorSelector" data-role="color-selector" 
     data-return-value-type="hex"
     data-show-alpha-channel="true"
     data-init-color="#3498db">
</div>

<script>
    // Get the selected color
    const color = Metro.getPlugin('#colorSelector', 'color-selector').val();
    
    // Set a new color
    Metro.getPlugin('#colorSelector', 'color-selector').val('#FF5733');
    
    // Listen for color selection events
    $('#colorSelector').on('select-color', function(e, data) {
        console.log("Selected color:", data.color);
        console.log("Color primitives:", data.primitive);
    });
</script>
```