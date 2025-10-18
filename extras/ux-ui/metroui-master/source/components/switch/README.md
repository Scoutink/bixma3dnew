# Switch Component

The Switch component provides a toggle switch control that can be used as an alternative to checkbox inputs. It offers a more visual way to toggle between two states (on/off).

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<!-- Basic switch -->
<input type="checkbox" data-role="switch">

<!-- Switch with labels -->
<input type="checkbox" data-role="switch" data-prepend="Off" data-append="On">

<!-- Material design switch -->
<input type="checkbox" data-role="switch" data-material="true">
```

### Switch with On/Off Text

```html
<!-- Switch with on/off text -->
<input type="checkbox" data-role="switch" data-onoff="true">

<!-- Switch with custom on/off text -->
<input type="checkbox" data-role="switch" data-onoff="true" data-on="YES" data-off="NO">
```

### Switch States

```html
<!-- Checked switch -->
<input type="checkbox" data-role="switch" checked>

<!-- Disabled switch -->
<input type="checkbox" data-role="switch" disabled>
```

### Colored Switches

```html
<!-- Red switch -->
<input type="checkbox" data-role="switch" class="switch-red">

<!-- Teal switch -->
<input type="checkbox" data-role="switch" class="switch-teal">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `switchDeferred` | number | 0 | Deferred initialization time in milliseconds |
| `material` | boolean | false | Use material design style for the switch |
| `prepend` | string | "" | Text to display before the switch |
| `append` | string | "" | Text to display after the switch |
| `clsSwitch` | string | "" | Additional CSS class for the switch container |
| `clsCheck` | string | "" | Additional CSS class for the checkbox element |
| `clsCaption` | string | "" | Additional CSS class for the caption elements |
| `onoff` | boolean | false | Show on/off text inside the switch |
| `on` | string | "" | Custom text for the "on" state (when `onoff` is true) |
| `off` | string | "" | Custom text for the "off" state (when `onoff` is true) |

## API Methods

### Getting the component instance

```javascript
const switchComponent = Metro.getPlugin('#mySwitch', 'switch');
```

### Methods

+ `toggle(v)` - Toggle the switch state. If `v` is provided, sets the switch to checked (v=1) or unchecked (v≠1).

#### Example of Method Usage
```javascript
const switchComponent = Metro.getPlugin('#mySwitch', 'switch');
switchComponent.toggle(); // Toggle the switch state
switchComponent.toggle(1); // Set the switch to checked
switchComponent.toggle(0); // Set the switch to unchecked
```

## Events

| Event | Description |
| ----- | ----------- |
| `onSwitchCreate` | Triggered when the switch component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--switch-background` | #e9e9e9 | #232527 | Background color of the switch |
| `--switch-background-checked` | #191919 | #474748 | Background color when the switch is checked |
| `--switch-background-disabled` | #e8e8e8 | - | Background color when the switch is disabled |
| `--switch-toggle-color` | #fff | #fff | Color of the toggle button |
| `--switch-toggle-disabled` | #ccc | #3e4145 | Color of the toggle button when disabled |
| `--switch-text-color` | #000 | #efefef | Color of the text in the switch |
| `--switch-text-color-checked` | #fff | #fff | Color of the text when the switch is checked |
| `--switch-focus-color` | #e8e8e8 | #191919 | Color of the focus outline |

### Example of Custom Styling

```css
/* Custom styling example */
#my-switch {
    --switch-background: #3498db;
    --switch-background-checked: #2980b9;
    --switch-toggle-color: #ecf0f1;
}
```

## Available CSS Classes

### Base Classes
- `.switch` - The main container class for the switch component

### Modifiers
- `.switch.material` - Applies material design style to the switch
- `.switch-[color]` - Color variants (e.g., `.switch-red`, `.switch-teal`, etc.)
- `.caption-prepend` - Styling for text before the switch
- `.caption-append` - Styling for text after the switch