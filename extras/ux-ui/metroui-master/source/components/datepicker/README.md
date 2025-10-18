# DatePicker Component

The DatePicker component is a wheel-based date picker that allows users to select a date by scrolling through months, days, and years.

## Dependencies

The DatePicker component depends on:
- WheelPicker component
- Metro UI CSS framework

## Usage

### Basic Usage

```html
<input data-role="date-picker">
```

### With Label

```html
<input data-role="date-picker" data-label="Select date">
```

### With Specific Locale

```html
<input data-role="date-picker" data-locale="uk-UA">
```

### Disable Day Selection

```html
<input data-role="date-picker" data-day="false">
```

### Disabled DatePicker

```html
<input data-role="date-picker" disabled data-label="Select date" id="my-datepicker">
```

You can enable or disable the datepicker programmatically:

```javascript
// Enable
$('#my-datepicker').prop('disabled', false);

// Disable
$('#my-datepicker').prop('disabled', true);
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| label | string | "" | Label for the datepicker |
| datepickerDeferred | number | 0 | Deferred initialization time in milliseconds |
| gmt | number | 0 | GMT timezone adjustment |
| format | string | "YYYY-MM-DD" | Output date format |
| inputFormat | string | null | Input date format (if different from output format) |
| value | string | null | Initial value for the datepicker |
| distance | number | 3 | Number of visible items before and after the selected item |
| month | boolean | true | Show month selector |
| day | boolean | true | Show day selector |
| year | boolean | true | Show year selector |
| minYear | number | null | Minimum selectable year (defaults to current year - 100) |
| maxYear | number | null | Maximum selectable year (defaults to current year + 100) |
| defaultYearDistance | number | 100 | Default distance for min/max year calculation |
| scrollSpeed | number | 4 | Scrolling speed for the wheel picker |
| copyInlineStyles | boolean | false | Copy inline styles from the input element to the picker |
| openMode | string | "auto" | Mode for opening the picker: "auto", "dialog", or "up" |
| clsPicker | string | "" | Additional CSS class for the picker |
| clsPart | string | "" | Additional CSS class for the date parts |
| clsMonth | string | "" | Additional CSS class for the month element |
| clsDay | string | "" | Additional CSS class for the day element |
| clsYear | string | "" | Additional CSS class for the year element |
| clsLabel | string | "" | Additional CSS class for the label |
| clsButton | string | "" | Additional CSS class for buttons |
| clsOkButton | string | "" | Additional CSS class for the OK button |
| clsCancelButton | string | "" | Additional CSS class for the Cancel button |
| okButtonIcon | string | "✓" | Icon for the OK button |
| cancelButtonIcon | string | "𐄂" | Icon for the Cancel button |

## API Methods

### open()
Opens the datepicker dropdown.

```javascript
Metro.getPlugin('#my-datepicker', 'date-picker').open();
```

### close()
Closes the datepicker dropdown.

```javascript
Metro.getPlugin('#my-datepicker', 'date-picker').close();
```

### val(value)
Gets or sets the current value of the datepicker.

```javascript
// Get value
const value = Metro.getPlugin('#my-datepicker', 'date-picker').val();

// Set value
Metro.getPlugin('#my-datepicker', 'date-picker').val('2023-01-15');
```

### date(value, format)
Gets or sets the date value with optional format.

```javascript
// Get date
const date = Metro.getPlugin('#my-datepicker', 'date-picker').date();

// Set date with specific format
Metro.getPlugin('#my-datepicker', 'date-picker').date('15/01/2023', 'DD/MM/YYYY');
```

### disable()
Disables the datepicker.

```javascript
Metro.getPlugin('#my-datepicker', 'date-picker').disable();
```

### enable()
Enables the datepicker.

```javascript
Metro.getPlugin('#my-datepicker', 'date-picker').enable();
```

### toggleState()
Toggles the enabled/disabled state of the datepicker.

```javascript
Metro.getPlugin('#my-datepicker', 'date-picker').toggleState();
```

## Events

| Event | Description |
| --- | --- |
| onSet | Triggered when a date is set |
| onOpen | Triggered when the picker is opened |
| onClose | Triggered when the picker is closed |
| onScroll | Triggered when scrolling through the date options |
| onDatePickerCreate | Triggered when the datepicker is created |

### Example with Events

```html
<input data-role="date-picker" 
       data-on-set="console.log('Date set:', arguments[0])" 
       data-on-open="console.log('Picker opened')"
       data-on-close="console.log('Picker closed')">
```

## Styling with CSS Variables

The DatePicker component uses the following CSS variables for styling:

| Variable | Default (Light) | Description |
| --- | --- | --- |
| --border-color | Depends on theme | Border color for the datepicker elements |
| --wheel-picker-border-radius | Depends on theme | Border radius for the date wrapper |
| --datepicker-border-radius | Depends on theme | Border radius for the action block |

### Example of Custom Styling

```css
:root {
  --border-color: #ccc;
  --wheel-picker-border-radius: 4px;
  --datepicker-border-radius: 4px;
}

/* Dark theme customization */
.dark-side {
  --border-color: #555;
}
```

## Available CSS Classes

### Base Classes
- `.date-picker` - Main container class
- `.date-wrapper` - Container for the date parts
- `.month`, `.day`, `.year` - Classes for the individual date parts
- `.sel-month` - Class for the selected month
- `.action-block` - Container for action buttons
- `.button` - Style for buttons
- `.icon` - Style for icons within buttons

### Customizing with CSS Classes

Additional styling can be applied using the provided class options (clsPicker, clsPart, etc.) or by targeting the component's CSS classes:

```css
.date-picker .date-wrapper {
  /* Custom styles for the date wrapper */
}

.date-picker .month {
  /* Custom styles for the month display */
}

.date-picker .day {
  /* Custom styles for the day display */
}

.date-picker .year {
  /* Custom styles for the year display */
}

.date-picker .action-block {
  /* Custom styles for the action buttons area */
}
```