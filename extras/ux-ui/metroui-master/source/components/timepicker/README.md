# Time Picker Component

Time Picker component allows users to select time values (hours, minutes, seconds) using wheel-based interface with customizable steps and formats.

## Dependencies

- Metro UI Core
- Dom library

## Usage

### Basic Usage

```html
<!-- Basic usage -->
<input data-role="time-picker">

<!-- With custom options -->
<input data-role="time-picker" data-hours-step="2" data-minutes-step="5" data-seconds="false">
```

### Additional Configurations

```html
<!-- With label -->
<input data-role="time-picker" data-label="Select time">

<!-- Hours and minutes only -->
<input data-role="time-picker" data-seconds="false">

<!-- With custom steps -->
<input data-role="time-picker" data-hours-step="2" data-minutes-step="15" data-seconds-step="30">

<!-- With initial value -->
<input data-role="time-picker" data-value="14:30:00">

<!-- Dialog mode (useful for mobile) -->
<input data-role="time-picker" data-open-mode="dialog">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `label` | String | `""` | Label text for the time picker |
| `timepickerDeferred` | Number | `0` | Defer initialization of component in milliseconds |
| `hoursStep` | Number | `1` | Step value for hours (1-23) |
| `minutesStep` | Number | `1` | Step value for minutes (1-59) |
| `secondsStep` | Number | `1` | Step value for seconds (1-59) |
| `value` | String/Object | `null` | Initial value for time picker |
| `distance` | Number | `3` | Number of visible elements before and after selection |
| `hours` | Boolean | `true` | Display hours |
| `minutes` | Boolean | `true` | Display minutes |
| `seconds` | Boolean | `true` | Display seconds |
| `showLabels` | Boolean | `true` | Show labels for hours, minutes and seconds |
| `scrollSpeed` | Number | `4` | Scroll speed for wheel selection |
| `copyInlineStyles` | Boolean | `false` | Copy inline styles from original input to component |
| `openMode` | String | `"auto"` | Mode for opening dropdown: "auto", "dialog" or "up" |
| `clsPicker` | String | `""` | Additional class for time picker element |
| `clsPart` | String | `""` | Additional class for each time part |
| `clsHours` | String | `""` | Additional class for hours element |
| `clsMinutes` | String | `""` | Additional class for minutes element |
| `clsSeconds` | String | `""` | Additional class for seconds element |
| `clsLabel` | String | `""` | Additional class for label element |
| `clsButton` | String | `""` | Additional class for buttons |
| `clsOkButton` | String | `""` | Additional class for OK button |
| `clsCancelButton` | String | `""` | Additional class for Cancel button |
| `okButtonIcon` | String | `"✓"` | Icon for OK button |
| `cancelButtonIcon` | String | `"𐄂"` | Icon for Cancel button |

## API Methods

+ `val([value])` - Gets or sets the current time as string (format: "HH:MM:SS").
+ `time([value])` - Gets or sets the current time as object with h, m, s properties.
+ `date([value])` - Gets or sets the current time using Date object.
+ `open()` - Opens the time picker dropdown.
+ `close()` - Closes the time picker dropdown.
+ `disable()` - Disables the time picker component.
+ `enable()` - Enables the time picker component.
+ `toggleState()` - Toggles between enabled and disabled states.
+ `destroy()` - Destroys the component and returns the element to its original state.

### Example of Method Usage

```javascript
// Get plugin instance
const timepicker = Metro.getPlugin('#my-timepicker', 'time-picker');

// Get current value
const currentValue = timepicker.val();

// Set new value
timepicker.val("14:30:00");

// Get time as object
const timeObj = timepicker.time();  // returns {h: 14, m: 30, s: 0}

// Set time from object
timepicker.time({h: 15, m: 45, s: 30});

// Get time as Date object
const dateObj = timepicker.date();

// Set time from Date object
const date = new Date();
date.setHours(10);
date.setMinutes(20);
timepicker.date(date);

// Open/close the picker
timepicker.open();
timepicker.close();

// Enable/disable the picker
timepicker.enable();
timepicker.disable();
```

## Events

| Event | Arguments | Description |
| --- | --- | --- |
| `onSet` | `{val, elementVal}` | Triggered when time is set |
| `onOpen` | `{val}` | Triggered when time picker is opened |
| `onClose` | `{val}` | Triggered when time picker is closed |
| `onScroll` | `{target, list, picker}` | Triggered when scrolling time lists |
| `onTimePickerCreate` | `{element}` | Triggered after time picker component creation |

## Global Configuration

You can globally configure the time picker component using the `Metro.timePickerSetup` method:

```javascript
Metro.timePickerSetup({
    hoursStep: 2,
    minutesStep: 5,
    seconds: false,
    showLabels: true
});
```

## Styling with CSS Variables

| Variable | Default | Description |
| --- | --- | --- |
| `--border-color` | Depends on theme | Border color for various elements |
| `--wheel-picker-border-radius` | `4px` | Border radius for the time picker |
| `--picker-font-size` | Depends on theme | Font size for time elements |
| `--datepicker-border-radius` | `4px` | Border radius for action block |

### Example of Custom Styling

```css
.my-custom-timepicker {
    --wheel-picker-border-radius: 8px;
    --picker-font-size: 1.2rem;
}
```

## Available CSS Classes

### Base Classes
- `.time-picker` - Main container class
- `.time-wrapper` - Wrapper for time elements
- `.hours`, `.minutes`, `.seconds` - Time part elements
- `.action-block` - Container for action buttons
- `.button` - Style for buttons

### Modifiers
- `.show-labels` - Shows labels for hours, minutes, seconds
- `.small`, `.medium`, `.large` - Size modifiers affecting label positioning
- `.disabled` - Disabled state for the time picker