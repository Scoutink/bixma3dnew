# Clock Component

The Clock component provides a simple and customizable way to display the current date and time on your web page. It automatically updates and can be configured to show various date and time formats.

## Dependencies

- Datetime module (imported from "../../datetime/index.js")

## Usage

### Basic Usage

```html
<!-- Basic clock with default settings -->
<div data-role="clock"></div>

<!-- Clock showing only time -->
<div data-role="clock" data-show-date="false"></div>

<!-- Clock showing only date -->
<div data-role="clock" data-show-time="false"></div>
```

### Display Modes

```html
<!-- Clock in row mode (default) -->
<div data-role="clock" data-show="row"></div>

<!-- Clock in column mode -->
<div data-role="clock" data-show="column"></div>
```

### Custom Formats

```html
<!-- Clock with custom date format -->
<div data-role="clock" data-date-format="YYYY-MM-DD"></div>

<!-- Clock with custom time format -->
<div data-role="clock" data-time-format="HH:mm:ss"></div>

<!-- Clock with custom date and time formats -->
<div data-role="clock" data-date-format="dddd, MMMM D, YYYY" data-time-format="h:mm:ss a"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `clockDeferred` | number | 0 | Delay before initialization (in milliseconds) |
| `show` | string | "row" | Display mode: "row" (horizontal) or "column" (vertical) |
| `showTime` | boolean | true | Whether to display the time |
| `showDate` | boolean | true | Whether to display the date |
| `dateFormat` | string | "DD.MM.YYYY" | Format for displaying the date |
| `timeFormat` | string | "HH:mm" | Format for displaying the time |
| `divider` | string | "&nbsp;&nbsp;" | HTML content to use as divider between date and time |
| `twoLines` | boolean | false | Whether to display date and time on separate lines |

## Events

| Event | Description |
| ----- | ----------- |
| `onTick` | Triggered every 500ms when the clock updates |
| `onSecond` | Triggered every second |
| `onClockCreate` | Triggered when the clock component is created |

## API Methods

### changeAttribute(attr, val)

Changes a component attribute dynamically.

```javascript
// Get the clock component
const clock = Metro.getPlugin('#myClock', 'clock');

// Change the date format
clock.changeAttribute('data-date-format', 'YYYY-MM-DD');

// Change the time format
clock.changeAttribute('data-time-format', 'HH:mm:ss');

// Show/hide date
clock.changeAttribute('data-show-date', 'true');

// Show/hide time
clock.changeAttribute('data-show-time', 'false');

// Change the divider
clock.changeAttribute('data-divider', ' | ');

// Enable/disable two lines mode
clock.changeAttribute('data-two-lines', 'true');
```

### destroy()

Removes the clock component and cleans up resources.

```javascript
// Get the clock component
const clock = Metro.getPlugin('#myClock', 'clock');

// Destroy the component
clock.destroy();
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--clock-background` | transparent | transparent | Background color of the clock |
| `--clock-color` | #191919 | #dbdfe7 | Text color of the clock |
| `--clock-font-size` | 14px | 14px | Font size of the clock text |

### Example of Custom Styling

```css
/* Custom styling for a specific clock */
#myClock {
    --clock-background: #f0f8ff;
    --clock-color: #0066cc;
    --clock-font-size: 18px;
}
```

## Available CSS Classes

### Base Classes
- `.clock` - The main clock container
- `.clock.show-column` - Clock with vertical layout

### Element Classes
- `.clock-time` - The time display element
- `.clock-date` - The date display element

## Best Practices

1. Use appropriate date and time formats for your target audience's locale
2. Consider using the column display mode for narrow containers
3. For better accessibility, ensure sufficient contrast between the clock text and background
4. Use the `onTick` event for custom functionality that needs to run with clock updates