# Checkbox

The Checkbox component provides a customizable checkbox input with support for three states: checked, unchecked, and indeterminate.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage
Metro UI rewrites the default appearance of checkboxes to provide a consistent look and feel across different browsers. 

```html
<input type="checkbox" />
```

You can use checkbox with additional features. 
To get extended checkbox, the component can be initialized using the `data-role` attribute.

```html
<input type="checkbox" data-role="checkbox">
```

### Checkbox caption
You can add a caption to the checkbox using the `data-caption` attribute. The caption will be displayed next to the checkbox.

```html
<input type="checkbox" data-role="checkbox" data-caption="Checkbox with Caption">
```

### Checked State
To change the state of the checkbox to checked, you can use the standard `checked` attribute.
```html
<input type="checkbox" data-role="checkbox" data-caption="Checkbox" checked>
```

### Disabled State
To disable the checkbox, use the `disabled` attribute. The checkbox will be visually styled to indicate that it is disabled.

```html
<input type="checkbox" data-role="checkbox" data-caption="Checkbox" disabled>
```

### Three-State Checkbox
To create a three-state checkbox (checked, unchecked, indeterminate), you can use the `data-three-state` attribute. This allows the checkbox to toggle between three states.

```html
<input type="checkbox" data-role="checkbox" data-three-state="true" data-caption="Three-state Checkbox">
```

Alternatively, you can use the `data-role="checkbox-three-state"` attribute and set the initial state with `data-state`:

```html
<input type="checkbox" data-role="checkbox-three-state" data-caption="Checked" data-state="checked">
<input type="checkbox" data-role="checkbox-three-state" data-caption="Unchecked" data-state="unchecked">
<input type="checkbox" data-role="checkbox-three-state" data-caption="Indeterminate" data-state="indeterminate">
```

### With Prepend and Append
You can add text or HTML content before (prepend) or after (append) the checkbox using the `data-prepend` and `data-append` attributes.

```html
<input type="checkbox" data-role="checkbox" data-prepend="Before" data-append="After">
```

### With Custom Classes

```html
<input type="checkbox" data-role="checkbox" data-caption="Custom Classes" data-cls-checkbox="custom-checkbox" data-cls-caption="custom-caption">
```

### Custom Styling with CSS Variables
You can customize the appearance of the checkbox using CSS variables:

```html
<div style="--checkbox-color: red;">
    <input type="checkbox" data-role="checkbox" data-caption="Red Checkbox">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `checkboxDeferred` | number | 0 | Delay for initialization in milliseconds |
| `state` | number/string | -1 (UNCHECKED) | Initial state of the checkbox. Possible values: -1/unchecked, 0/indeterminate, 1/checked |
| `threeState` | boolean | false | Whether the checkbox supports three states |
| `prepend` | string | "" | Content to prepend to the checkbox |
| `append` | string | "" | Content to append to the checkbox |
| `caption` | string | "" | Caption for the checkbox (alternative to append) |
| `clsCheckbox` | string | "" | Additional CSS class for the checkbox container |
| `clsCaption` | string | "" | Additional CSS class for the caption |
| `clsPrepend` | string | "" | Additional CSS class for prepended content |
| `clsAppend` | string | "" | Additional CSS class for appended content |

## API Methods

+ `check()` - Sets the checkbox to checked state.
+ `uncheck()` - Sets the checkbox to unchecked state.
+ `indeterminate()` - Sets the checkbox to indeterminate state.
+ `setCheckState(state)` - Sets the checkbox to a specific state. Possible values: -1/unchecked, 0/indeterminate, 1/checked.
+ `getCheckState(asString)` - Gets the current state of the checkbox. If `asString` is true, returns the state as a string ('checked', 'unchecked', or 'indeterminate').
+ `toggle()` - Toggles the checkbox state.

### Example of Method Usage

```javascript
const checkbox = Metro.getPlugin('#myCheckbox', 'checkbox');

// Check the checkbox
checkbox.check();

// Uncheck the checkbox
checkbox.uncheck();

// Set to indeterminate state
checkbox.indeterminate();

// Toggle the state
checkbox.toggle();

// Get the current state
const state = checkbox.getCheckState();
const stateAsString = checkbox.getCheckState(true);
```

## Events

| Event | Description |
| ----- | ----------- |
| `onCheckboxCreate` | Triggered when the checkbox is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--checkbox-height` | 36px | 36px | Height of the checkbox |
| `--checkbox-border-radius` | 4px | 4px | Border radius of the checkbox |
| `--checkbox-color` | #575757 | #a6a8a7 | Color of the checkbox |
| `--checkbox-color-disabled` | #c3c3c3 | #505050 | Color of the disabled checkbox |
| `--checkbox-background-disabled` | #efefef | #323030 | Background color of the disabled checkbox |
| `--checkbox-focus-color` | #e8e8e8 | #191919 | Focus color of the checkbox |

### Example of Custom Styling

```css
/* Custom styling example */
#my-checkbox {
    --checkbox-color: #0078d7;
    --checkbox-border-radius: 2px;
    --checkbox-focus-color: rgba(0, 120, 215, 0.3);
}
```

## Available CSS Classes

### Base Classes
- `.checkbox` - The main container class for the checkbox component

### Modifiers
- `.caption-prepend` - Class for prepended content
- `.caption-append` - Class for appended content
- `.checkbox-{color}` - Color variants for the checkbox (using the normalColors variable)

### Example with Color Modifier

```html
<input type="checkbox" data-role="checkbox" class="checkbox-primary" data-caption="Primary Color">
```