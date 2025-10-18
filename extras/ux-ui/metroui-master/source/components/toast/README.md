# Toast

Brief notification messages that appear temporarily on the screen and automatically disappear after a specified time.

## Dependencies

None

## Usage

### Basic Usage

```html
<!-- No HTML markup required for toast -->
```

```javascript
// Basic usage
Metro.toast.create("Your message here");

// With options
Metro.toast.create("Task completed successfully", {
    timeout: 5000,
    position: "top"
});

// With callback
Metro.toast.create("Operation completed", function(){
    console.log("Toast was closed");
});
```

### Additional Configurations

```javascript
// Using the shorthand method
Metro.createToast("Hello World!");

// With custom styling
Metro.toast.create("Custom styled toast", {
    clsToast: "alert"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `callback` | Function | `Metro.noop` | Function called after toast is closed |
| `timeout` | Number | `3000` | Time in milliseconds before toast auto-closes |
| `distance` | Number | `20` | Distance from the edge of the screen in pixels |
| `position` | String | `"bottom"` | Position of the toast: "bottom", "top", or "center" |
| `clsToast` | String | `""` | Additional CSS class(es) for toast element |

## API Methods

+ `Metro.toast.create(message, options)` - Creates and displays a toast notification.
+ `Metro.createToast(message, options)` - Alias for `Metro.toast.create()`.
+ `Metro.toast.remove(toast, callback)` - Manually remove a toast element (generally used internally).

### Example of Method Usage

```javascript
// Create a toast with options
Metro.toast.create("Hello World!", {
    timeout: 3000,
    position: "center",
    clsToast: "primary"
});

// Create a toast with callback function
Metro.toast.create("Hello World!", function(){
    console.log("Toast closed");
});

// Manually remove a toast
const toastElement = $(".toast");
Metro.toast.remove(toastElement, function(){
    console.log("Toast manually removed");
});
```

## Global Configuration

You can globally configure default toast options using the `Metro.toastSetup` method:

```javascript
Metro.toastSetup({
    position: "top",
    timeout: 10000,
    distance: 50,
    clsToast: "info-toast"
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--toast-background` | `#323232` | `#2b2d30` | Toast background color |
| `--toast-color` | `#ffffff` | `#ffffff` | Toast text color |
| `--toast-border-radius` | `6px` | `6px` | Toast border radius |
| `--toast-closer-background` | `inherit` | `inherit` | Close button background |
| `--toast-closer-color` | `inherit` | `inherit` | Close button color |
| `--toast-closer-background-hover` | `var(--color-alert)` | `var(--color-alert)` | Close button background on hover |
| `--toast-closer-color-hover` | `var(--color-light)` | `var(--color-light)` | Close button text color on hover |

### Example of Custom Styling

```css
:root {
    --toast-background: rgba(0, 0, 0, 0.8);
    --toast-color: #ffffff;
    --toast-border-radius: 10px;
}
```

## Available CSS Classes

### Base Classes
- `.toast` - The main toast container

### Modifiers
- `.show-top` - Positions the toast at the top of the screen
- `.show-center` - Positions the toast in the center of the screen

### Example of Position Classes

```javascript
// Bottom (default)
Metro.toast.create("Toast at the bottom", {
    position: "bottom"
});

// Top
Metro.toast.create("Toast at the top", {
    position: "top"
});

// Center
Metro.toast.create("Toast in the center", {
    position: "center"
});
```

### Custom Styling with Classes

You can add custom styles to your toast notifications using the `clsToast` option:

```javascript
Metro.toast.create("Custom styled toast", {
    clsToast: "my-custom-toast bg-red fg-white"
});
```

Make sure to define the corresponding CSS classes in your stylesheet.