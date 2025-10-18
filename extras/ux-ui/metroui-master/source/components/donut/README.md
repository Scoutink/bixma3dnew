# Donut

Donut is a circular progress indicator component that displays a value as a filled arc. It can be used to show progress, percentages, or any other numerical value in a visually appealing way.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<div data-role="donut" data-value="35"></div>
```

### Additional Configurations

```html
<!-- With custom colors -->
<div data-role="donut" data-value="35" data-stroke="#f5f5f5" data-fill="#9C27B0"></div>

<!-- With no hole (solid circle) -->
<div data-role="donut" data-value="35" data-hole="0"></div>

<!-- With animation -->
<div data-role="donut" data-value="35" data-animate="500"></div>

<!-- Showing actual value instead of percentage -->
<div data-role="donut" data-value="35" data-show-value="true"></div>

<!-- With custom background and text color -->
<div data-role="donut" data-value="35" data-background="#4fc3f7" data-color="#FFFFFF"></div>

<!-- With custom font size -->
<div data-role="donut" data-value="35" data-font-size="32"></div>

<!-- With custom cap (suffix) -->
<div data-role="donut" data-value="35" data-cap="°C"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `size` | number | 100 | Size of the donut in pixels |
| `hole` | number | 0.8 | Size of the hole (0 to 1, where 0.8 means 80% of the radius) |
| `value` | number | 0 | Initial value |
| `background` | string | "transparent" | Background color of the element |
| `color` | string | "" | Text color (defaults to fill color if empty) |
| `stroke` | string | "#d1d8e7" | Color of the background circle |
| `fill` | string | "#49649f" | Color of the value circle |
| `fontSize` | number | 0 | Font size (0 means auto-calculated) |
| `total` | number | 100 | Total value (for percentage calculation) |
| `cap` | string | "%" | Suffix for the displayed value |
| `showText` | boolean | true | Whether to show text |
| `showValue` | boolean | false | Whether to show the actual value instead of percentage |
| `animate` | number | 0 | Animation duration in milliseconds |

## API Methods

+ `val(value)` - Gets the current value when called without arguments, or sets a new value when called with a value argument.

#### Example of Method Usage
```javascript
const donut = Metro.getPlugin('#myDonut', 'donut');
// Get current value
const currentValue = donut.val();
// Set new value
donut.val(75);
```

+ `setColor(options)` - Sets colors for the donut. The options object can contain any of these properties: background, fill, stroke, color.

#### Example of Method Usage
```javascript
const donut = Metro.getPlugin('#myDonut', 'donut');
donut.setColor({
    stroke: "#000000",
    fill: "#FF0000",
    color: "#FFFFFF",
    background: "#333333"
});
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDonutCreate` | Triggered when the donut is created |
| `onChange` | Triggered when the donut value changes |
| `onDrawValue` | Callback for custom formatting of the displayed value |

## Styling with CSS Variables

The donut component doesn't use CSS variables directly, but it can be styled using the parameters described above.

## Available CSS Classes

### Base Classes
- `.donut` - The main container class for the donut component

### Color Classes
- `.donut-{color}` - Color variants where {color} can be any of the Metro UI color names (e.g., `.donut-red`, `.donut-blue`, etc.)

#### Example of Custom Styling

```html
<!-- Using a predefined color class -->
<div data-role="donut" data-value="35" class="donut-red"></div>

<!-- Using custom colors via data attributes -->
<div data-role="donut" data-value="35" data-stroke="#f5f5f5" data-fill="#9C27B0" data-color="#FFFFFF"></div>
```

## JavaScript Example

```javascript
// Initialize a donut programmatically
Metro.makePlugin('#myElement', 'donut', {
    value: 75,
    fill: "#9C27B0",
    stroke: "#f5f5f5",
    animate: 500,
    showValue: true,
    cap: "°C"
});

// Get a reference to an existing donut
const donut = Metro.getPlugin('#myDonut', 'donut');

// Change the value
donut.val(50);

// Change colors
donut.setColor({
    fill: "#FF0000",
    stroke: "#000000"
});

// Update value periodically
setInterval(function() {
    const randomValue = Math.floor(Math.random() * 100);
    donut.val(randomValue);
}, 2000);
```