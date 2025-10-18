# Spinner Component

The Spinner component provides a numeric input field with increment and decrement buttons, allowing users to easily adjust numeric values.

## Dependencies

The Spinner component depends on:
- Input Common component
- Button component

## Usage

### Basic Usage

```html
<input data-role="spinner">
```

### With Custom Configuration

```html
<input data-role="spinner" data-default-value="10" data-step="5" data-min-value="0" data-max-value="100">
```

### With Label

```html
<input data-role="spinner" data-label="Quantity">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| spinnerDeferred | number | 0 | Deferred initialization time in milliseconds |
| label | string | "" | Label for the spinner |
| step | number | 1 | Step value for increment/decrement |
| plusIcon | string | "+" | Icon for the increment button |
| minusIcon | string | "-" | Icon for the decrement button |
| buttonsPosition | string | "default" | Position of the buttons: "default", "left", or "right" |
| defaultValue | number | 0 | Default value for the spinner |
| minValue | number | null | Minimum allowed value |
| maxValue | number | null | Maximum allowed value |
| fixed | number | 0 | Number of decimal places |
| repeatThreshold | number | 2000 | Threshold for repeating increment/decrement when button is held |
| hideCursor | boolean | false | Whether to hide the cursor in the input field |
| clsSpinner | string | "" | Additional CSS class for the spinner container |
| clsSpinnerInput | string | "" | Additional CSS class for the input element |
| clsSpinnerButton | string | "" | Additional CSS class for both buttons |
| clsSpinnerButtonPlus | string | "" | Additional CSS class for the increment button |
| clsSpinnerButtonMinus | string | "" | Additional CSS class for the decrement button |
| clsLabel | string | "" | Additional CSS class for the label |

## API Methods

+ `val(value)` - Gets or sets the current value of the spinner.
+ `toDefault()` - Resets the spinner to its default value.
+ `disable()` - Disables the spinner.
+ `enable()` - Enables the spinner.
+ `toggleState()` - Toggles the enabled/disabled state of the spinner.

### Example of Method Usage

```javascript
// Get the spinner instance
const spinner = Metro.getPlugin('#my-spinner', 'spinner');

// Get current value
const value = spinner.val();

// Set value
spinner.val(10);

// Reset to default value
spinner.toDefault();

// Disable spinner
spinner.disable();

// Enable spinner
spinner.enable();

// Toggle state
spinner.toggleState();
```

## Events

| Event | Description |
| --- | --- |
| onBeforeChange | Triggered before the value changes (return false to cancel) |
| onChange | Triggered when the value changes |
| onPlusClick | Triggered when the plus button is clicked |
| onMinusClick | Triggered when the minus button is clicked |
| onArrowUp | Triggered when the up arrow key is pressed |
| onArrowDown | Triggered when the down arrow key is pressed |
| onButtonClick | Triggered when any button is clicked |
| onArrowClick | Triggered when any arrow key is pressed |
| onSpinnerCreate | Triggered when the spinner is created |

### Example of Event Handling

```javascript
// Using jQuery-style event binding
$("@spinner").on("arrow-click", function(e){
    console.log("Arrow " + (e.detail.button === "plus" ? "up" : "down") + " pressed");
});

// Using data attributes
<input data-role="spinner" data-on-change="console.log('Value changed to: ' + arguments[0].detail.val)">
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| `--spinner-border-radius` | 4px | 4px | Border radius for the spinner |

### Example of Custom Styling

```css
/* Custom styling example */
#my-spinner {
    --spinner-border-radius: 8px;
}
```

## Available CSS Classes

### Base Classes
- `.spinner` - Main container class (automatically added)
- `.spinner-button` - Base class for buttons
- `.spinner-button-plus` - Plus button
- `.spinner-button-minus` - Minus button

### Modifiers
- `.buttons-left` - Positions both buttons on the left
- `.buttons-right` - Positions both buttons on the right
- `.pill-input` - Makes the spinner and buttons rounded (pill-shaped)
- `.input-small` - Small size variant
- `.input-large` - Large size variant

## Size Variants

The Spinner component supports different sizes:

```html
<input data-role="spinner" class="input-large">
<input data-role="spinner">
<input data-role="spinner" class="input-small">
```

## Button Positions

You can change the position of the buttons:

```html
<input data-role="spinner" data-buttons-position="default">
<input data-role="spinner" data-buttons-position="left">
<input data-role="spinner" data-buttons-position="right">
```