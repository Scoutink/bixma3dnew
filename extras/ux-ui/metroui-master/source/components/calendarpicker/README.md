# Calendar Picker

A date picker component that combines an input field with a calendar popup for easy date selection. The component supports various date formats, time selection, dialog mode for mobile devices, and extensive customization options.

## Dependencies

- Calendar component (automatically included)
- DateTime utilities
- Farbe color utilities

## Usage

### Basic Usage

```html
<!-- Simple date picker -->
<input data-role="calendar-picker">

<!-- With initial value -->
<input data-role="calendar-picker" value="2024/01/15">

<!-- With label -->
<input data-role="calendar-picker" data-label="Select date:">
```

### Advanced Configurations

```html
<!-- Custom date format -->
<input data-role="calendar-picker" 
       data-format="DD, MMM YYYY" 
       data-input-format="DD/MM/YYYY">

<!-- With time selection -->
<input data-role="calendar-picker" 
       data-show-time="true" 
       data-initial-time="14:30">

<!-- Dialog mode for mobile -->
<input data-role="calendar-picker" 
       data-dialog-mode="true" 
       data-dialog-point="640">

<!-- With date restrictions -->
<input data-role="calendar-picker" 
       data-min-date="2024/01/01" 
       data-max-date="2024/12/31">

<!-- With clear button -->
<input data-role="calendar-picker" 
       data-clear-button="true">
```

### Programmatic Usage

```javascript
// Initialize programmatically
const picker = Metro.makePlugin('#myInput', 'calendar-picker', {
    format: 'DD/MM/YYYY',
    showTime: true,
    clearButton: true
});

// Get component instance
const picker = Metro.getPlugin('#myInput', 'calendar-picker');
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `label` | string | "" | Label text displayed above the input |
| `value` | string | "" | Initial date value |
| `calendarPickerDeferred` | number | 0 | Deferred initialization delay |
| `nullValue` | boolean | true | Allow null/empty values |
| `useNow` | boolean | false | Use current date as default |
| `prepend` | string | "" | HTML content to prepend to input |
| `dialogMode` | boolean | false | Force dialog mode |
| `dialogPoint` | number | 640 | Screen width breakpoint for dialog mode |
| `dialogOverlay` | boolean | true | Show overlay in dialog mode |
| `overlayColor` | string | "#000000" | Overlay background color |
| `overlayAlpha` | number | 0.5 | Overlay transparency |
| `size` | string | "100%" | Input width |
| `format` | string | METRO_DATE_FORMAT | Display date format |
| `inputFormat` | string | null | Input parsing format |
| `clearButton` | boolean | false | Show clear button |
| `calendarButtonIcon` | string | "📅" | Calendar button icon |
| `clearButtonIcon` | string | "❌" | Clear button icon |
| `prevMonthIcon` | string | "⯇" | Previous month icon |
| `nextMonthIcon` | string | "⯈" | Next month icon |
| `prevYearIcon` | string | "⯇" | Previous year icon |
| `nextYearIcon` | string | "⯈" | Next year icon |
| `copyInlineStyles` | boolean | false | Copy inline styles to container |
| `openMode` | string | "auto" | Calendar open direction ("auto", "up", "down") |
| `wide` | boolean | false | Use wide calendar layout |
| `widePoint` | number | 640 | Screen width for wide layout |
| `showTime` | boolean | false | Enable time selection |
| `outside` | boolean | true | Show dates outside current month |
| `weekStart` | number | 0 | First day of week (0=Sunday, 1=Monday) |
| `events` | array | [] | Calendar events |
| `initialTime` | string | null | Initial time value (HH:MM) |
| `initialHours` | number | null | Initial hours |
| `initialMinutes` | number | null | Initial minutes |
| `headerFormat` | string | "dddd, MMM DD" | Calendar header format |
| `showWeekNumber` | boolean | false | Show week numbers |
| `ripple` | boolean | false | Enable ripple effect |
| `rippleColor` | string | "#000000" | Ripple effect color |
| `special` | array | [] | Special dates array |
| `exclude` | array | [] | Excluded dates array |
| `minDate` | string | null | Minimum selectable date |
| `maxDate` | string | null | Maximum selectable date |
| `yearsBefore` | number | 100 | Years before current year |
| `yearsAfter` | number | 100 | Years after current year |

### CSS Class Parameters

| Parameter | Description |
| --------- | ----------- |
| `clsCalendar` | Calendar container classes |
| `clsCalendarHeader` | Calendar header classes |
| `clsCalendarContent` | Calendar content classes |
| `clsCalendarMonths` | Month view classes |
| `clsCalendarYears` | Year view classes |
| `clsCalendarTime` | Time picker classes |
| `clsTime` | Time container classes |
| `clsTimeHours` | Hours input classes |
| `clsTimeMinutes` | Minutes input classes |
| `clsTimeButton` | Time button classes |
| `clsTimeButtonPlus` | Plus button classes |
| `clsTimeButtonMinus` | Minus button classes |
| `clsToday` | Today date classes |
| `clsSelected` | Selected date classes |
| `clsExcluded` | Excluded date classes |
| `clsOverlay` | Overlay classes |
| `clsPicker` | Picker container classes |
| `clsInput` | Input field classes |
| `clsPrepend` | Prepend content classes |
| `clsLabel` | Label classes |

## API Methods

+ `clear()` - Clear the selected date and reset to empty value.
+ `val(value, format)` - Get or set the picker value. Returns object with date and time if no arguments provided.
+ `disable()` - Disable the calendar picker.
+ `enable()` - Enable the calendar picker.
+ `toggleState()` - Toggle between enabled and disabled states.
+ `getTime(asString)` - Get the selected time. Returns array [hours, minutes] or string "HH:MM" if asString is true.
+ `changeAttribute(attributeName, newValue)` - Change component attribute dynamically.
+ `destroy()` - Destroy the component and clean up event listeners.

#### Example of Method Usage

```javascript
const picker = Metro.getPlugin('#myPicker', 'calendar-picker');

// Set a new date
picker.val('2024/12/25');

// Get current value
const currentValue = picker.val(); // Returns {date: Date, time: [hours, minutes]}

// Clear the picker
picker.clear();

// Get time as string
const timeString = picker.getTime(true); // Returns "14:30"

// Disable the picker
picker.disable();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDayClick` | Fired when a day is clicked in the calendar |
| `onCalendarPickerCreate` | Fired when the calendar picker is created |
| `onCalendarShow` | Fired when the calendar popup is shown |
| `onCalendarHide` | Fired when the calendar popup is hidden |
| `onChange` | Fired when the selected date changes |
| `onPickerChange` | Fired when the picker value changes |
| `onMonthChange` | Fired when the calendar month changes |
| `onYearChange` | Fired when the calendar year changes |

### Event Usage Example

```html
<input data-role="calendar-picker" 
       data-on-change="handleDateChange"
       data-on-calendar-show="handleCalendarShow">

<script>
function handleDateChange(date) {
    console.log('Date changed to:', date);
}

function handleCalendarShow(calendar) {
    console.log('Calendar shown');
}
</script>
```

## Available CSS Classes

### Base Classes
- `.calendar-picker` - Main container class
- `.calendar-for-picker` - Calendar popup container
- `.input-calendar-button` - Calendar button
- `.input-clear-button` - Clear button

### State Classes
- `.open` - Calendar is open
- `.open-up` - Calendar opens upward
- `.dialog-mode` - Dialog mode active
- `.disabled` - Component is disabled
- `.focused` - Input is focused

### Layout Classes
- `.calendar-wide` - Wide calendar layout
- `.compact` - Compact calendar layout

## Additional Notes

- The component automatically switches to dialog mode on mobile devices based on the `dialogPoint` setting
- Date formats follow the Metro UI date formatting conventions
- The component integrates with the Metro UI theming system
- Time selection is optional and can be enabled with the `showTime` parameter
- The calendar popup automatically positions itself to stay within the viewport

## Best Practices

- Use appropriate date formats for your locale and user expectations
- Enable dialog mode for better mobile experience
- Set reasonable min/max date ranges to guide user selection
- Use clear button for optional date fields
- Consider time selection only when necessary to avoid interface complexity
- Test the component across different screen sizes to ensure proper responsive behavior