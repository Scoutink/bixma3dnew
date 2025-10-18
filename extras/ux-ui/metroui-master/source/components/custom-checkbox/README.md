# Custom Checkbox

The Custom Checkbox component provides a highly customizable checkbox that allows you to define custom icons and captions for checked and unchecked states. It's designed to be flexible and easy to style.

## Dependencies

- Metro UI Core
- Dom

## Usage

### Basic Usage

```html
<input type="checkbox" data-role="custom-checkbox">
```

### With Custom States

```html
<input type="checkbox" data-role="custom-checkbox" 
       data-state-on="✓" 
       data-state-off="✗">
```

### With Custom Captions

```html
<input type="checkbox" data-role="custom-checkbox" 
       data-caption-on="Enabled" 
       data-caption-off="Disabled">
```

### With Caption Position

```html
<input type="checkbox" data-role="custom-checkbox" 
       data-caption-on="Enabled" 
       data-caption-off="Disabled"
       data-caption-position="left">
```

### With Custom Icons

```html
<input type="checkbox" data-role="custom-checkbox" 
       data-state-on="<span class='mif-star-full fg-orange'>" 
       data-state-off="<span class='mif-star-empty'>">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `stateOn` | String | "✓" | Symbol or HTML for the checked state |
| `stateOff` | String | "✗" | Symbol or HTML for the unchecked state |
| `captionOn` | String | "" | Text displayed when checkbox is checked |
| `captionOff` | String | "" | Text displayed when checkbox is unchecked |
| `captionPosition` | String | "right" | Position of the caption ("right" or "left") |
| `clsCustomCheckbox` | String | "" | Additional CSS class for the checkbox container |
| `clsIcon` | String | "" | Additional CSS class for the icon element |
| `clsIconOn` | String | "" | Additional CSS class for the checked state icon |
| `clsIconOff` | String | "" | Additional CSS class for the unchecked state icon |
| `clsCaption` | String | "" | Additional CSS class for the caption element |
| `clsCaptionOn` | String | "" | Additional CSS class for the checked state caption |
| `clsCaptionOff` | String | "" | Additional CSS class for the unchecked state caption |

## Events

| Event | Description |
| ----- | ----------- |
| `onCustomCheckboxCreate` | Triggered after the custom checkbox is created |

## API Methods

+ `disable()` - Disables the checkbox.
+ `enable()` - Enables the checkbox.
+ `toggleState()` - Toggles between enabled and disabled states.
+ `toggle([value])` - Toggles the checked state. If `value` is provided (0 or 1), sets the state accordingly.

### Example of Method Usage

```javascript
// Get the component instance
const checkbox = Metro.getPlugin('#myCheckbox', 'custom-checkbox');

// Disable the checkbox
checkbox.disable();

// Enable the checkbox
checkbox.enable();

// Toggle the checked state
checkbox.toggle();

// Set to checked state
checkbox.toggle(1);

// Set to unchecked state
checkbox.toggle(0);
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--custom-checkbox-size` | 36px | 36px | Size of the checkbox |
| `--custom-checkbox-icon-size` | 16px | 16px | Size of the icon |
| `--custom-checkbox-color` | #575757 | rgb(166, 166, 166) | Color of the checkbox |
| `--custom-checkbox-background` | transparent | transparent | Background of the checkbox |
| `--custom-checkbox-caption-color` | #191919 | #e8e8e8 | Color of the caption |
| `--custom-checkbox-background-disabled` | #e8e8e8 | #353535 | Background when disabled |
| `--custom-checkbox-color-disabled` | #c3c3c3 | #6c6c6c | Color when disabled |

### Example of Custom Styling

```css
/* Custom styling for a specific checkbox */
#myCustomCheckbox {
    --custom-checkbox-size: 42px;
    --custom-checkbox-icon-size: 20px;
    --custom-checkbox-color: #2196F3;
    --custom-checkbox-caption-color: #0D47A1;
}
```

## Available CSS Classes

### Base Classes
- `.custom-checkbox` - Main container class for the custom checkbox
- `.icon` - Container for the checkbox icon
- `.caption` - Container for the checkbox caption

### Modifiers
- `.caption-left` - Positions the caption to the left of the checkbox
- `.disabled` - Applied when the checkbox is disabled

### State Classes
- `.state-on` - Element shown when checkbox is checked
- `.state-off` - Element shown when checkbox is unchecked
- `.caption-state-on` - Caption element shown when checkbox is checked
- `.caption-state-off` - Caption element shown when checkbox is unchecked

## Global Configuration

You can set global defaults for all Custom Checkbox components using:

```javascript
Metro.customCheckboxSetup({
    stateOn: "✓",
    stateOff: "✗",
    captionPosition: "left"
});
```

## Accessibility

The Custom Checkbox component maintains the native checkbox element's accessibility features:
- It preserves the native checkbox's functionality while enhancing its appearance
- It respects the disabled state of the checkbox
- It uses proper label elements for better screen reader support

## Best Practices

1. Use meaningful icons that clearly indicate the checked and unchecked states
2. Provide clear captions when the checkbox's purpose might not be obvious from context
3. Maintain sufficient contrast between the checkbox and its background for better visibility
4. Consider using the left caption position when checkboxes are aligned to the right side of a form