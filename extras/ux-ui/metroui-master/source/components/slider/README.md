# Slider

A customizable slider component that allows users to select a value from a range by dragging a handle along a track. The slider can be configured in various ways, including horizontal or vertical orientation, with or without hints, and with different visual styles.

## Dependencies

This component has no external dependencies beyond the Metro UI core.

## Usage

### Basic Usage

```html
<input data-role="slider">
```

### Vertical Slider

```html
<input data-role="slider" data-vertical="true">
```

### With Min/Max Labels

```html
<input data-role="slider" data-show-min-max="true" data-min="0" data-max="100">
```

### With Value Hint

```html
<input data-role="slider" data-hint="true" data-hint-always="true" data-hint-position="top">
```

### With Custom Range

```html
<input data-role="slider" data-min="-100" data-max="100" data-value="0">
```

### With Accuracy

```html
<input data-role="slider" data-accuracy="5" data-min="0" data-max="100">
```

### With Buffer

```html
<input data-role="slider" data-buffer="25">
```

### Styling Variations

```html
<!-- Thin slider -->
<input data-role="slider" class="thin">

<!-- Ultra-thin slider -->
<input data-role="slider" class="ultra-thin">

<!-- Rounded slider -->
<input data-role="slider" class="rounded">

<!-- Hidden button (shows on hover) -->
<input data-role="slider" data-hide-button="true">

<!-- Circular marker -->
<input data-role="slider" class="cycle-marker">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `min` | number | 0 | Minimum value of the slider |
| `max` | number | 100 | Maximum value of the slider |
| `accuracy` | number | 0 | Step size for the slider value (0 means no stepping) |
| `value` | number | 0 | Initial value of the slider |
| `buffer` | number | 0 | Initial buffer value (0-100) |
| `roundValue` | boolean | true | Whether to round the value according to accuracy |
| `showMinMax` | boolean | false | Whether to show min and max labels |
| `minMaxPosition` | string | "top" | Position of min/max labels ("top" or "bottom") |
| `hint` | boolean | false | Whether to show a hint with the current value |
| `hintAlways` | boolean | false | Whether to always show the hint (not just during interaction) |
| `hintPosition` | string | "top" | Position of the hint ("top", "bottom", "left", or "right") |
| `hintMask` | string | "$1" | Mask for the hint text ($1 = value, $2 = percent) |
| `vertical` | boolean | false | Whether the slider is vertical |
| `target` | string | null | Selector for target element(s) to update with the slider value |
| `returnType` | string | "value" | Type of value to return ("value" or "percent") |
| `size` | number | 0 | Size of the slider (width for horizontal, height for vertical) |
| `label` | string | null | Label text for the slider |
| `hideButton` | boolean | false | Whether to hide the slider button (shows on hover) |
| `clsSlider` | string | "" | Additional CSS class for the slider |
| `clsBackside` | string | "" | Additional CSS class for the backside element |
| `clsComplete` | string | "" | Additional CSS class for the complete element |
| `clsBuffer` | string | "" | Additional CSS class for the buffer element |
| `clsMarker` | string | "" | Additional CSS class for the marker element |
| `clsHint` | string | "" | Additional CSS class for the hint element |
| `clsMinMax` | string | "" | Additional CSS class for the min/max wrapper |
| `clsMin` | string | "" | Additional CSS class for the min label |
| `clsMax` | string | "" | Additional CSS class for the max label |

## API Methods

+ `val(v)` - Get or set the slider value. If `v` is undefined, returns the current value.
+ `buff(v)` - Get or set the buffer value (0-100). If `v` is undefined, returns the current buffer value.
+ `changeValue()` - Change the slider value based on the `data-value` attribute.
+ `changeBuffer()` - Change the buffer value based on the `data-buffer` attribute.
+ `disable()` - Disable the slider.
+ `enable()` - Enable the slider.
+ `toggleState()` - Toggle between enabled and disabled states.
+ `destroy()` - Remove the slider and clean up events.

### Example of Method Usage
```javascript
const slider = Metro.getPlugin('#mySlider', 'slider');
slider.val(50); // Set value to 50
slider.buff(25); // Set buffer to 25%
slider.disable(); // Disable the slider
```

## Events

| Event | Description |
| ----- | ----------- |
| `onStart` | Triggered when the user starts dragging the slider |
| `onStop` | Triggered when the user stops dragging the slider |
| `onMove` | Triggered when the slider is being moved |
| `onSliderClick` | Triggered when the slider track is clicked |
| `onChange` | Triggered when the slider value or buffer changes |
| `onChangeValue` | Triggered when the slider value changes |
| `onChangeBuffer` | Triggered when the buffer value changes |
| `onFocus` | Triggered when the slider receives focus |
| `onBlur` | Triggered when the slider loses focus |
| `onSliderCreate` | Triggered when the slider is created |

### Example of Event Usage
```html
<input data-role="slider" 
       data-on-change="console.log('Value changed to: ' + arguments[0].val)"
       data-on-start="console.log('Started dragging')">
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--slider-thumb-size` | 18px | 18px | Size of the slider thumb |
| `--slider-thumb-color` | var(--color-blue) | var(--color-crimson) | Color of the slider thumb |
| `--slider-bar-color` | #191919 | #191919 | Color of the slider bar |
| `--slider-buffer-color` | #fefefe | #fefefe | Color of the buffer |
| `--slider-back-color` | #d5d5d5 | #4e5055 | Background color of the slider |
| `--slider-fill-color` | var(--color-cyan) | #ff145c | Color of the filled part |
| `--slider-thumb-border-color` | var(--color-light-cyan) | #ffffff | Border color of the thumb |

### Example of Custom Styling

```css
#my-slider {
    --slider-thumb-size: 24px;
    --slider-thumb-color: #ff5722;
    --slider-fill-color: #ff9800;
    --slider-back-color: #f5f5f5;
}
```

## Available CSS Classes

### Base Classes
- `.slider` - The main container class (automatically added)

### Modifiers
- `.thin` - Creates a thinner slider (6px height)
- `.ultra-thin` - Creates an ultra-thin slider (4px height)
- `.cycle-marker` - Makes the marker circular
- `.vertical-slider` - Vertical orientation (automatically added when `vertical=true`)
- `.rounded` - Adds rounded corners to the slider elements
- `.hidden-button` - Hides the marker button until hover (automatically added when `hideButton=true`)
- `.disabled` - Disabled state (automatically added when the slider is disabled)

### Element Classes
- `.backside` - The background track of the slider
- `.complete` - The filled part of the slider
- `.buffer` - The buffer indicator
- `.marker` - The draggable handle
- `.hint` - The tooltip showing the current value
- `.slider-min-max` - Container for min/max labels
- `.slider-text-min` - The minimum value label
- `.slider-text-max` - The maximum value label

## Component Structure

The slider has the following structure:

```
div.slider
  ├── div.backside
  ├── div.complete
  ├── div.buffer
  └── button.marker
       └── div.hint
```

When min/max labels are enabled:

```
div.slider-min-max
  ├── span.slider-text-min
  └── span.slider-text-max
div.slider
  ...
```

## Complete Example

```html
<div class="example">
    <input id="mySlider" data-role="slider" 
           data-min="0" 
           data-max="100" 
           data-value="50" 
           data-buffer="75" 
           data-hint="true" 
           data-hint-always="true" 
           data-hint-mask="Value: $1 ($2%)" 
           data-show-min-max="true" 
           data-accuracy="5" 
           class="thin rounded" 
           data-on-change="console.log('Value: ' + arguments[0].val + ', Buffer: ' + arguments[0].buffer)">
</div>

<script>
    // Access the slider via JavaScript
    const slider = Metro.getPlugin('#mySlider', 'slider');
    
    // Change the value programmatically
    slider.val(25);
    
    // Change the buffer programmatically
    slider.buff(50);
</script>
```

This example creates a slider with a range of 0-100, an initial value of 50, a buffer of 75%, a permanent hint showing the current value, min/max labels, and a step size of 5. The slider has a thin, rounded style and logs changes to the console.