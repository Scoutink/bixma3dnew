# Double Slider Component

The Double Slider component provides a range slider with two markers that allow users to select a range of values between a minimum and maximum. It's ideal for filtering data based on ranges like prices, dates, or any numeric values.

## Dependencies

The Double Slider component depends on:
- Slider component (for styling and base functionality)

## Usage

### Basic Double Slider

```html
<!-- Basic double slider -->
<input data-role="double-slider">

<!-- Double slider with min and max values -->
<input data-role="double-slider" data-min="0" data-max="100">

<!-- Double slider with initial values -->
<input data-role="double-slider" data-value-min="25" data-value-max="75">
```

### Double Slider with Hints

```html
<!-- Double slider with hints -->
<input data-role="double-slider" data-hint="true">

<!-- Double slider with permanent hints -->
<input data-role="double-slider" data-hint="true" data-hint-always="true">

<!-- Double slider with custom hint masks -->
<input data-role="double-slider" 
       data-hint="true" 
       data-hint-mask-min="Min: $1" 
       data-hint-mask-max="Max: $1">
```

### Double Slider with Min/Max Display

```html
<!-- Double slider with min/max values displayed -->
<input data-role="double-slider" data-show-min-max="true">

<!-- Double slider with min/max values at the top -->
<input data-role="double-slider" 
       data-show-min-max="true" 
       data-min-max-position="top">
```

### Double Slider with Target

```html
<!-- Double slider with target element to display values -->
<input data-role="double-slider" data-target="#rangeValue">
<div id="rangeValue"></div>
```

### More Examples

For more examples, see the [double-slider.html](__html__/double-slider.html) example file in the project.

## Plugin Parameters

The Double Slider component supports the following configuration options:

| Parameter | Type | Default | Description |
| ------ | ------- | ------- | ----------- |
| `min` | number | 0 | Minimum value of the slider |
| `max` | number | 100 | Maximum value of the slider |
| `accuracy` | number | 0 | Decimal precision for values (0 = integers only) |
| `roundValue` | boolean | true | Whether to round values according to accuracy |
| `valueMin` | number | null | Initial minimum value (defaults to min if not specified) |
| `valueMax` | number | null | Initial maximum value (defaults to max if not specified) |
| `hint` | boolean | false | Show hints when dragging markers |
| `hintAlways` | boolean | false | Always show hints, not just when dragging |
| `hintPositionMin` | string | "top" | Position of the minimum value hint ("top" or "bottom") |
| `hintPositionMax` | string | "top" | Position of the maximum value hint ("top" or "bottom") |
| `hintMaskMin` | string | "$1" | Format for minimum value hint ($1 is replaced with the value) |
| `hintMaskMax` | string | "$1" | Format for maximum value hint ($1 is replaced with the value) |
| `showMinMax` | boolean | false | Show min and max values below/above the slider |
| `minMaxPosition` | string | "bottom" | Position of min/max labels ("top" or "bottom") |
| `target` | string | null | Target element to display selected values (selector or DOM element) |
| `size` | number | 0 | Width of the slider in pixels (0 = auto/100%) |
| `clsSlider` | string | "" | Custom class for the slider container |
| `clsBackside` | string | "" | Custom class for the background track |
| `clsComplete` | string | "" | Custom class for the filled portion |
| `clsMarker` | string | "" | Custom class for both markers |
| `clsMarkerMin` | string | "" | Custom class for the minimum marker |
| `clsMarkerMax` | string | "" | Custom class for the maximum marker |
| `clsHint` | string | "" | Custom class for both hints |
| `clsHintMin` | string | "" | Custom class for the minimum hint |
| `clsHintMax` | string | "" | Custom class for the maximum hint |
| `clsMinMax` | string | "" | Custom class for the min/max labels container |
| `clsMin` | string | "" | Custom class for the minimum label |
| `clsMax` | string | "" | Custom class for the maximum label |

## Events

The Double Slider component provides the following events:

| Event | Description |
| ----- | ----------- |
| `onStart` | Triggered when the user starts dragging a marker |
| `onStop` | Triggered when the user stops dragging a marker |
| `onMove` | Triggered continuously while dragging a marker |
| `onChange` | Triggered when the slider value changes |
| `onChangeValue` | Triggered when the slider value changes (alias for onChange) |
| `onFocus` | Triggered when a marker receives focus |
| `onBlur` | Triggered when a marker loses focus |
| `onDoubleSliderCreate` | Triggered when the double slider is created |

## API Methods

The Double Slider component provides the following API methods:

### val(vMin, vMax)

Gets or sets the current values of the double slider.

```javascript
// Get current values
const slider = Metro.getPlugin('#mySlider', 'double-slider');
const values = slider.val();
console.log(values); // Returns [minValue, maxValue]

// Set new values
slider.val(20, 80);
```

### changeValue()

Updates the slider values based on the `data-value-min` and `data-value-max` attributes.

```javascript
// Update the data attributes
$('#mySlider').attr('data-value-min', 30);
$('#mySlider').attr('data-value-max', 70);

// Apply the new values
const slider = Metro.getPlugin('#mySlider', 'double-slider');
slider.changeValue();
```

### disable()

Disables the double slider.

```javascript
const slider = Metro.getPlugin('#mySlider', 'double-slider');
slider.disable();
```

### enable()

Enables the double slider.

```javascript
const slider = Metro.getPlugin('#mySlider', 'double-slider');
slider.enable();
```

### toggleState()

Toggles between enabled and disabled states.

```javascript
const slider = Metro.getPlugin('#mySlider', 'double-slider');
slider.toggleState();
```

## Styling with CSS Variables

The Double Slider component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--slider-thumb-size` | 18px | 18px | Size of the slider markers |
| `--slider-thumb-color` | var(--color-blue) | var(--color-crimson) | Color of the slider markers |
| `--slider-bar-color` | #191919 | #191919 | Color of the slider bar |
| `--slider-back-color` | #d5d5d5 | #4e5055 | Background color of the slider track |
| `--slider-fill-color` | var(--color-cyan) | #ff145c | Color of the selected range between markers |
| `--slider-thumb-border-color` | var(--color-light-cyan) | #ffffff | Border color of the slider markers |

### Example of Custom Styling

```css
/* Custom styling for a specific double slider */
#myCustomDoubleSlider {
    --slider-back-color: #e0f7fa;
    --slider-fill-color: #00acc1;
    --slider-thumb-color: #0097a7;
    --slider-thumb-border-color: #006064;
}
```

## Available CSS Classes

### Base Classes
- `.slider` - The main slider container
- `.backside` - The background track of the slider
- `.complete` - The filled portion between the two markers
- `.marker` - The draggable markers
- `.marker-min` - The minimum value marker
- `.marker-max` - The maximum value marker
- `.hint` - The value hint that appears when dragging
- `.hint-min` - The minimum value hint
- `.hint-max` - The maximum value hint
- `.slider-min-max` - Container for min/max labels
- `.slider-text-min` - The minimum value label
- `.slider-text-max` - The maximum value label

## Accessibility

The Double Slider component includes proper semantics for improved accessibility:
- Markers are implemented as `<button>` elements for proper keyboard focus
- Appropriate ARIA attributes are applied
- Disabled state is properly conveyed

## Best Practices

1. Always provide clear min and max values that make sense for your data range
2. Consider using hints to show the exact values when precision is important
3. Use appropriate accuracy settings based on your data type (e.g., 0 for integers, 0.01 for currency)
4. Provide visual feedback through custom styling to make the selected range clear
5. Consider using the target option to display the selected range values in a more prominent location
