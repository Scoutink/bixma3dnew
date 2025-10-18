# Counter

A component that displays an animated numerical counter that counts up to a specified value. It's useful for displaying statistics, achievements, or any numerical data in an engaging way.

## Dependencies

- Metro UI Core
- Dom

## Usage

### Basic Usage

```html
<!-- Basic counter that counts from 0 to 100 -->
<div data-role="counter" data-value="100">0</div>
```

### With Custom Starting Value

```html
<!-- Counter with custom starting value -->
<div data-role="counter" data-value="100" data-from="50">50</div>
```

### With Prefix and Suffix

```html
<!-- Counter with prefix and suffix -->
<div data-role="counter" data-value="100" data-prefix="$" data-suffix="+">0</div>
```

### With Custom Duration

```html
<!-- Counter with 5 second animation duration -->
<div data-role="counter" data-value="1000" data-duration="5000">0</div>
```

### Counter that Starts When Visible

```html
<!-- Counter that starts when it enters the viewport -->
<div data-role="counter" data-value="500" data-start-on-viewport="true">0</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `startOnViewport` | boolean | false | When `true`, the counter starts when it enters the viewport |
| `counterDeferred` | number | 0 | Delay in milliseconds before the counter starts |
| `duration` | number | 2000 | Duration of the counting animation in milliseconds |
| `value` | number | 0 | The target value to count to |
| `from` | number | 0 | The starting value to count from |
| `timeout` | number | 0 | Additional timeout before starting the animation |
| `delimiter` | string | "," | Character used as the thousands separator |
| `prefix` | string | "" | Text to display before the number |
| `suffix` | string | "" | Text to display after the number |
| `size` | number | 16 | Font size in pixels |
| `onStart` | function | Metro.noop | Callback function when counter animation starts |
| `onStop` | function | Metro.noop | Callback function when counter animation completes |
| `onTick` | function | Metro.noop | Callback function on each frame of the animation with the current value |
| `onCounterCreate` | function | Metro.noop | Callback function when counter is created |

## API Methods

+ `start(val, from)` - Starts the counter animation. Optional parameters: `val` (target value), `from` (starting value).
+ `reset()` - Resets the counter to its initial state.
+ `changeAttribute(attr, val)` - Changes the specified attribute with the given value.
+ `destroy()` - Removes the counter element from the DOM.

### Example of Method Usage

```javascript
const counter = Metro.getPlugin('#myCounter', 'counter');

// Start counting to the value specified in the options
counter.start();

// Start counting to a specific value
counter.start(200);

// Start counting from a specific value to a target value
counter.start(200, 50);

// Reset the counter
counter.reset();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onStart` | Triggered when the counter animation starts |
| `onStop` | Triggered when the counter animation completes |
| `onTick` | Triggered on each frame of the animation with the current value |
| `onCounterCreate` | Triggered when the counter is created |

## Styling with CSS Variables

The Counter component primarily uses the `size` parameter to control the font size. You can also style the counter using standard CSS properties.

### Example of Custom Styling

```css
/* Custom styling for a counter */
#myCounter {
    font-weight: bold;
    color: #0078D7;
    font-family: 'Segoe UI', sans-serif;
}
```

## Available CSS Classes

The Counter component doesn't add specific CSS classes to the element. It directly manipulates the font size of the element based on the `size` parameter.

## Global Configuration

You can set global defaults for all counter components:

```javascript
Metro.counterSetup({
    duration: 3000,
    delimiter: ' ',
    prefix: '# '
});
```

## Complete Example

```html
<div id="statsCounter"
     data-role="counter"
     data-value="1000"
     data-from="0"
     data-duration="3000"
     data-start-on-viewport="true"
     data-prefix="$"
     data-suffix=" USD"
     data-delimiter=","
     data-size="24">
    0
</div>
```

## JavaScript Initialization

You can also initialize the counter component via JavaScript:

```javascript
Metro.makePlugin(element, 'counter', {
    value: 1000,
    duration: 3000,
    prefix: '$',
    suffix: ' USD',
    onStop: function() {
        console.log('Counter finished!');
    }
});
```