# Gauge

A customizable analog gauge component that displays a value within a specified range using a needle and scale.

## Dependencies

- Metro UI Core
- DOM

## Usage

### Basic Usage

```html
<div data-role="gauge" data-min="0" data-max="100" data-label="Value"></div>
```

### Additional Configurations

```html
<!-- Gauge with custom labels and theme -->
<div data-role="gauge" 
     data-label-min="Low" 
     data-label-max="High" 
     data-min="0" 
     data-max="100" 
     data-label="Energy" 
     data-suffix="%" 
     data-segments="10" 
     data-theme="battery" 
     data-values="11">
</div>

<!-- Gauge with custom angles and text values -->
<div data-role="gauge" 
     data-start-angle="270" 
     data-range="220" 
     data-min="0" 
     data-max="100" 
     data-label="Humidity" 
     data-suffix="%" 
     data-segments="100" 
     data-theme="sky" 
     data-values="Arid,Dry,Crisp,Low,Fair,Mild,Moist,Damp,Wet,Soggy">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `min` | number | 0 | Minimum value of the gauge |
| `max` | number | 100 | Maximum value of the gauge |
| `value` | number | 0 | Current value of the gauge |
| `size` | number | 0 | Size of the gauge in pixels (0 means auto) |
| `labelMin` | string | "" | Label for the minimum value |
| `labelMax` | string | "" | Label for the maximum value |
| `label` | string | "" | Main label for the gauge |
| `suffix` | string | "" | Suffix to append to the value (e.g., "%", "°") |
| `values` | number/string | 10 | Number of value marks or comma-separated list of custom values |
| `segments` | number | 10 | Number of segments in the gauge |
| `startAngle` | number | 235 | Start angle of the gauge in degrees |
| `range` | number | 250 | Range of the gauge in degrees |
| `theme` | string | "" | Theme for the gauge (see available themes below) |

## Gauge Themes
+ `load` - Green to red gradient for load monitoring
+ `sky` - Blue gradient for atmospheric conditions
+ `temp` - Blue to red gradient for temperature readings
+ `speed` - Blue to green gradient for speed measurements
+ `battery` - Red to green gradient for battery levels
+ `rainbow` - Multi-color segments for a vibrant display


## API Methods

+ val(value) - Get the current value if no argument is provided, or set a new value
+ update() - Update the gauge display
+ destroy() - Remove the gauge element

### Example of Method Usage
```javascript
const gauge = Metro.getPlugin('#myGauge', 'gauge');
gauge.val(75); // Set value to 75
const currentValue = gauge.val(); // Get current value
```

## Events

| Event | Description |
| ----- | ----------- |
| `onGaugeCreate` | Triggered when the gauge is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--analog-gauge-start-angle` | 235deg | - | Start angle of the gauge |
| `--analog-gauge-range` | 250deg | - | Range of the gauge in degrees |
| `--analog-gauge-needle-height` | 10cqi | - | Height of the needle |
| `--analog-gauge-needle-color` | #4b4b4b | #e3e3e3 | Color of the needle |
| `--analog-gauge-segment-color` | #ddd | #222 | Color of the segments |
| `--analog-gauge-marks-color` | #191919 | #cfcfcf | Color of the value marks |
| `--analog-gauge-value-color` | #191919 | #FFF | Color of the value text |
| `--analog-gauge-label-color` | #191919 | #FFF | Color of the labels |
| `--analog-gauge-values-bg` | transparent | - | Background color of the value marks |
| `--analog-gauge-bdw` | 10cqi | - | Width of the gauge border |
| `--analog-gauge-value-mark-w` | 6ch | - | Width of the value marks |
| `--analog-gauge-segments-w` | 1deg | - | Width of the segments |
| `--analog-gauge-segments` | 10 | - | Number of segments |

### Example of Custom Styling

```css
#myCustomGauge {
    --analog-gauge-needle-color: #ff5722;
    --analog-gauge-segment-color: #e0e0e0;
    --analog-gauge-marks-color: #2196f3;
    --analog-gauge-value-color: #4caf50;
    --analog-gauge-label-color: #9c27b0;
    --analog-gauge-bdw: 15cqi;
}
```

## Available CSS Classes

### Base Classes
- `.analog-gauge` - Main container class
- `.gauge` - The gauge background
- `.needle` - The gauge needle
- `.value-marks` - Container for value marks
- `.mark` - Individual value mark
- `.value` - The current value display
- `.label` - The main label
- `.label-min` - The minimum value label
- `.label-max` - The maximum value label

### Theme Classes
- `.theme-load` - Load-themed gauge with a gradient from green to red
- `.theme-sky` - Sky-themed gauge with blue gradient
- `.theme-temp` - Temperature-themed gauge with blue to red gradient
- `.theme-speed` - Speed-themed gauge with blue to green gradient
- `.theme-battery` - Battery-themed gauge with red to green gradient
- `.theme-rainbow` - Rainbow-themed gauge with multiple color segments