# WheelPicker

The WheelPicker component provides a wheel-based selection mechanism that allows users to scroll through a list of options. It is primarily used as a dependency for other components like DatePicker and TimePicker.

## Dependencies

- Metro UI Core
- Metro CSS Utilities

## Usage

The WheelPicker is typically not used directly but is integrated into other components like DatePicker and TimePicker. These components extend the WheelPicker's functionality by adding specific implementation for date and time selection.

### Component Structure

The WheelPicker has the following HTML structure:

```html
<div class="wheel-picker">
  <div class="select-wrapper">
    <div class="select-block">
      <ul>
        <!-- Options go here -->
        <li>Option 1</li>
        <li class="active">Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
    <div class="action-block">
      <!-- Action buttons go here -->
    </div>
  </div>
</div>
```

## Plugin Parameters

While the WheelPicker itself doesn't have direct plugin parameters, components that use it (like DatePicker and TimePicker) implement parameters such as:

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `distance` | number | 3 | The number of items visible above and below the selected item |
| `scrollSpeed` | number | 4 | The speed of scrolling when dragging |
| `openMode` | string | "auto" | How the picker opens. Options: "auto", "up", "dialog" |

## API Methods

Components that use WheelPicker typically implement the following methods:

+ `open()` - Opens the wheel picker dropdown
+ `close()` - Closes the wheel picker dropdown

## Events

Components that use WheelPicker typically implement the following events:

| Event | Description |
| ----- | ----------- |
| `onOpen` | Triggered when the picker is opened |
| `onClose` | Triggered when the picker is closed |
| `onScroll` | Triggered when scrolling through options |

## Styling with CSS Variables

The WheelPicker component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--wheel-picker-border-radius` | 4px | 4px | Border radius for the wheel picker |
| `--wheel-picker-color` | #191919 | #dbdfe7 | Text color for the wheel picker options |
| `--wheel-picker-selected-background` | rgba(175, 175, 175, 0.5) | rgba(78, 81, 88, 0.5) | Background color for the selected option |
| `--picker-height` | var(--control-height, 36px) | var(--control-height, 36px) | Height of the picker |
| `--picker-font-size` | 16px | 16px | Font size of the picker options |

### Example of Custom Styling

```css
.my-custom-picker {
  --wheel-picker-border-radius: 6px;
  --wheel-picker-color: #333;
  --wheel-picker-selected-background: rgba(0, 123, 255, 0.3);
  --picker-height: 42px;
  --picker-font-size: 18px;
}
```

## Available CSS Classes

### Base Classes
- `.wheel-picker` - The main container class
- `.select-wrapper` - Container for the selection dropdown
- `.select-block` - Container for the selection lists
- `.action-block` - Container for action buttons

### Size Modifiers
- `.small` - Small size picker (height: var(--control-height-small), font-size: 12px)
- `.medium` - Medium size picker (height: var(--control-height-medium), font-size: 14px)
- `.large` - Large size picker (height: var(--control-height-large), font-size: 20px)

### Position Modifiers
- `.drop-up-select` - Positions the dropdown above the input
- `.drop-as-dialog` - Displays the picker as a dialog

## Integration Examples

The WheelPicker is used by the following components:

### DatePicker

```html
<input data-role="date-picker" data-label="Select date">
```

### TimePicker

```html
<input data-role="time-picker" data-label="Select time">
```

## Implementation Notes

The WheelPicker is primarily a CSS component that provides the visual structure and styling for wheel-based selection. The actual functionality (scrolling, selection, etc.) is implemented by the components that use it, such as DatePicker and TimePicker.
