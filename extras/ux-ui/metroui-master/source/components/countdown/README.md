# Countdown

A component that displays a countdown timer with days, hours, minutes, and seconds. The countdown can be set to a specific date or a duration in days, hours, minutes, and seconds.

## Dependencies

- Metro UI Core
- Dom

## Usage

### Basic Usage

```html
<div data-role="countdown"></div>
```

### With Animation

```html
<div data-role="countdown" data-animate="slide"></div>
```

### With Custom Font Size

```html
<div data-role="countdown" data-font-size="96"></div>
```

### With Specific Date

```html
<div data-role="countdown" data-date="2025/05/15"></div>
```

### With Duration

```html
<div data-role="countdown" data-days="2" data-hours="12" data-minutes="30" data-seconds="15"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `countdownDeferred` | number | 0 | Deferred start of countdown in milliseconds |
| `stopOnBlur` | boolean | true | Stop countdown when window loses focus |
| `animate` | string | "none" | Animation type: "none", "slide", "fade", "zoom" |
| `ease` | string | "linear" | Animation easing function |
| `duration` | number | 600 | Animation duration in milliseconds |
| `inputFormat` | string | null | Format for parsing the date string |
| `days` | number | 0 | Number of days for countdown |
| `hours` | number | 0 | Number of hours for countdown |
| `minutes` | number | 0 | Number of minutes for countdown |
| `seconds` | number | 0 | Number of seconds for countdown |
| `date` | string | null | Target date for countdown (e.g., "2025/05/15") |
| `start` | boolean | true | Start countdown automatically |
| `fontSize` | number | 24 | Font size in pixels |
| `clsCountdown` | string | "" | Additional CSS class for countdown element |
| `clsPart` | string | "" | Additional CSS class for part elements |
| `clsZero` | string | "" | Additional CSS class for zero value |
| `clsAlarm` | string | "" | Additional CSS class for alarm state |
| `clsDays` | string | "" | Additional CSS class for days part |
| `clsHours` | string | "" | Additional CSS class for hours part |
| `clsMinutes` | string | "" | Additional CSS class for minutes part |
| `clsSeconds` | string | "" | Additional CSS class for seconds part |
| `onAlarm` | function | Metro.noop | Callback function when countdown reaches zero |
| `onTick` | function | Metro.noop | Callback function on each tick |
| `onZero` | function | Metro.noop | Callback function when a part reaches zero |
| `onBlink` | function | Metro.noop | Callback function on blink |
| `onCountdownCreate` | function | Metro.noop | Callback function when countdown is created |

## API Methods

+ `start()` - Start the countdown.
+ `stop()` - Stop the countdown and reset values to zero.
+ `pause()` - Pause the countdown.
+ `resume()` - Resume the countdown after pause.
+ `reset()` - Reset the countdown with the same parameters.
+ `resetWith(val)` - Reset the countdown with new parameters. `val` can be a date string or an object with days, hours, minutes, seconds.
+ `togglePlay()` - Toggle between play and pause states.
+ `isPaused()` - Check if the countdown is paused.
+ `getBreakpoint(asDate)` - Get the target time. If `asDate` is true, returns a Date object.
+ `getLeft()` - Get the remaining time in days, hours, minutes, and seconds.
+ `blink()` - Trigger the blink effect.
+ `tick()` - Manually trigger a tick.

### Example of Method Usage

```javascript
const countdown = Metro.getPlugin('#myCountdown', 'countdown');

// Reset with a specific date
countdown.resetWith("2025/05/15");

// Reset with duration
countdown.resetWith({
    days: 2,
    hours: 12,
    minutes: 30,
    seconds: 15
});

// Pause the countdown
countdown.pause();

// Resume the countdown
countdown.resume();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onAlarm` | Triggered when countdown reaches zero |
| `onTick` | Triggered on each tick (every second) |
| `onZero` | Triggered when a part (days, hours, minutes, seconds) reaches zero |
| `onBlink` | Triggered on blink effect |
| `onCountdownCreate` | Triggered when countdown is created |

## Styling with CSS Variables

| Variable | Description |
| -------- | ----------- |
| `--border-color` | Color for borders and dividers between parts |

### Example of Custom Styling

```css
#myCountdown {
    --border-color: #ff5722;
    font-size: 48px;
}
```

## Available CSS Classes

### Base Classes
- `.countdown` - Main container class
- `.part` - Container for each part of the countdown
- `.digit` - Container for each digit
- `.digit-placeholder` - Placeholder for the digit
- `.digit-value` - Actual value of the digit

### Part Classes
- `.days` - Class for days part
- `.hours` - Class for hours part
- `.minutes` - Class for minutes part
- `.seconds` - Class for seconds part

### Animation Classes
- `.blink` - Class for blinking effect
- `.animate-slide` - Class for slide animation
- `.animate-fade` - Class for fade animation
- `.animate-zoom` - Class for zoom animation

### Modifier Classes
- `.no-divider` - Removes the divider before a part
- `.d-none` - Hides a part