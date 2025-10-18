# Activity Component

The Activity component creates animated loading indicators in various styles. It can be used to show that an operation is in progress or that content is loading.

## Usage

### Basic Usage

```html
<!-- Basic usage with default ring type -->
<div data-role="activity"></div>

<!-- With specific type and style -->
<div data-role="activity" data-type="metro" data-style="color"></div>

<!-- Different activity types -->
<div data-role="activity" data-type="ring"></div>
<div data-role="activity" data-type="metro"></div>
<div data-role="activity" data-type="square"></div>
<div data-role="activity" data-type="cycle"></div>
<div data-role="activity" data-type="simple"></div>
<div data-role="activity" data-type="atom"></div>
<div data-role="activity" data-type="bars"></div>
```

### Programmatic Creation

```javascript
// Initialize activity on an existing element
Metro.makePlugin("#myActivity", "activity", {
    type: "cycle",
    style: "color"
});

// Access the activity object
const activity = $("#myActivity").data("activity");
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `activityDeferred` | number | 0 | Deferred initialization time in milliseconds |
| `type` | string | "ring" | Type of activity indicator. Options: "ring", "metro", "square", "cycle", "simple", "atom", "bars" |
| `style` | string | "" | Style of the activity indicator. Options: "", "dark", "color" |
| `size` | number | 64 | Size of the activity indicator in pixels |
| `radius` | number | 20 | Radius for the "simple" type activity indicator |
| `onActivityCreate` | function | Metro.noop | Callback function triggered when the activity indicator is created |

## Events

| Event | Description |
| ----- | ----------- |
| `onActivityCreate` | Triggered when the activity indicator is created |

## API Methods

### destroy()

Removes the activity component and its associated elements.

```javascript
Metro.getPlugin('#myActivity', 'activity').destroy();
```

### Metro.activity.open(options)

Creates and shows a global activity indicator with optional text.

```javascript
Metro.activity.open({
    type: "cycle",
    style: "color",
    text: "Loading...",
    autoHide: 5000,
    overlayClickClose: true,
    overlayColor: "#000000",
    overlayAlpha: 0.5
});
```

Options:
- **type**: Type of activity indicator
- **style**: Style of the activity indicator
- **text**: Optional text to display below the indicator
- **autoHide**: Time in milliseconds to automatically hide the indicator (0 = don't auto-hide)
- **overlayClickClose**: Whether clicking the overlay closes the indicator
- **overlayColor**: Color of the overlay
- **overlayAlpha**: Opacity of the overlay

### Metro.activity.close(dialog)

Closes the global activity indicator.

```javascript
const dialog = Metro.activity.open();
// Later:
Metro.activity.close(dialog);
```

## Styling with CSS Variables

The Activity component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--activity-color` | #191919 | #ffffff | Color of the activity indicator |
| `--activity-ring-time` | 1.5s | 1.5s | Animation time for the ring type |
| `--activity-ring-time-mute` | 4 | 4 | Animation time divider for ring elements |
| `--activity-ring-size` | 64px | 64px | Size of the ring |
| `--activity-ring-rotate` | 45deg | 45deg | Rotation angle for ring elements |

### Example of Custom Styling

```css
/* Custom styling for a specific activity indicator */
#myCustomActivity {
    --activity-color: #2196F3;
    --activity-ring-time: 2s;
}
```

## Activity Types

The Activity component provides several animation types:

### Ring
The default type with five rotating circles.

### Metro
A horizontal sliding animation with five circles.

### Square
A square animation with four squares that drop into place.

### Cycle
A circular spinning animation with concentric circles.

### Simple
A circular path animation.

### Atom
Three rotating elliptical orbits.

### Bars
Six vertical bars that animate up and down.

## Style Options

Each activity type supports three style options:

### Default
Uses the `--activity-color` variable (dark in light mode, light in dark mode).

### Dark
Forces dark styling regardless of the current theme.

### Color
Uses predefined colors (cyan, orange, green, red, yellow, etc.) for a multi-colored animation.

## Accessibility

The Activity component is designed to indicate loading states visually. For better accessibility:

- Consider adding appropriate ARIA attributes when using activity indicators
- Provide text descriptions for loading states when possible
- Use the `text` option with `Metro.activity.open()` to describe what's loading

## Additional Information

The Activity component:
- Provides multiple animation types for different visual effects
- Can be used inline within content or as a global overlay
- Supports color styling for multi-colored animations
- Automatically adapts to light and dark themes