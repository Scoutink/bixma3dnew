# Input Material Component

The Input Material component provides a material design styled input field with floating labels, animations, and various interactive elements. It enhances standard HTML inputs with material design aesthetics and behavior, including animated labels, underline effects, and helper elements.

## Dependencies

This component requires:
- Metro UI core
- Input Common component
- LESS variables and mixins

## Usage

### Basic Usage

```html
<!-- Basic material input with label -->
<input type="text" data-role="material-input" data-label="Username">

<!-- Material input with informer text -->
<input type="text" data-role="material-input" data-label="Email" data-informer="We'll never share your email">

<!-- Material input with icon -->
<input type="text" data-role="material-input" data-label="Search" data-icon="🔍">

<!-- Password input with reveal button -->
<input type="password" data-role="material-input" data-label="Password">
```

### Additional Configurations

```html
<!-- Material input with permanent label -->
<input type="text" data-role="material-input" data-label="Username" data-permanent-label="true">

<!-- Material input with search button -->
<input type="text" data-role="material-input" data-label="Search" data-search-button="true">

<!-- Material input without clear button -->
<input type="text" data-role="material-input" data-label="Read-only" data-clear-button="false">

<!-- Material input with custom styling -->
<input type="text" data-role="material-input" data-label="Custom Style" 
       data-cls-component="custom-material" data-cls-label="custom-label">
```

### JavaScript Initialization

```javascript
// Initialize with Metro.makePlugin
const materialInput = Metro.makePlugin("#my-input", "material-input", {
    label: "Username",
    informer: "Enter your username",
    icon: "👤"
});

// Access API after initialization
const inputComponent = Metro.getPlugin("#my-input", "material-input");
inputComponent.clear();
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `label` | string | "" | Text for the floating label |
| `informer` | string | "" | Helper text displayed below the input |
| `icon` | string | "" | Icon displayed to the left of the input |
| `permanentLabel` | boolean | false | When true, the label is always visible |
| `searchButton` | boolean | false | When true, displays a search button |
| `clearButton` | boolean | true | When true, displays a clear button |
| `revealButton` | boolean | true | When true, displays a reveal button for password inputs |
| `clearButtonIcon` | string | "❌" | Icon for the clear button |
| `revealButtonIcon` | string | "👀" | Icon for the reveal button |
| `searchButtonIcon` | string | "🔍" | Icon for the search button |
| `searchButtonClick` | string | "submit" | Action for search button click ("submit" or "custom") |
| `customButtons` | array | [] | Array of custom button objects |
| `clsComponent` | string | "" | Additional CSS class for the component container |
| `clsInput` | string | "" | Additional CSS class for the input element |
| `clsLabel` | string | "" | Additional CSS class for the label |
| `clsInformer` | string | "" | Additional CSS class for the informer |
| `clsIcon` | string | "" | Additional CSS class for the icon |
| `clsLine` | string | "" | Additional CSS class for the underline |

## API Methods

+ `clear()` - Clears the input value.
+ `disable()` - Disables the input.
+ `enable()` - Enables the input.
+ `toggleState()` - Toggles between enabled and disabled states.

### Example of Method Usage

```javascript
const input = Metro.getPlugin('#my-input', 'material-input');
input.clear();
input.disable();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onInputCreate` | Triggered when the input component is created |
| `clear-click` | Triggered when the clear button is clicked |
| `reveal-click` | Triggered when the reveal button is clicked |
| `search-button-click` | Triggered when the search button is clicked (if searchButtonClick is not "submit") |
| `enter-click` | Triggered when Enter key is pressed in the input |

### Example of Event Handling

```javascript
Metro.makePlugin("#my-input", "material-input", {
    onInputCreate: function(e){
        console.log("Material input created:", e.element);
    }
});

// Using event listeners
$("#my-input").on("clear-click", function(e){
    console.log("Input cleared, previous value:", e.detail.prev);
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--material-input-border-color` | var(--border-color) | var(--border-color) | Border color of the input |
| `--material-input-border-color-hover` | #cacaca | #686c71 | Border color on hover/focus |
| `--material-input-color` | #191919 | #dbdfe7 | Text color of the input |
| `--material-input-placeholder-color` | #bdbdbd | #dbdfe7 | Placeholder text color |

### Example of Custom Styling

```css
/* Custom styling for material inputs */
.custom-material-inputs {
    --material-input-border-color: #2196F3;
    --material-input-border-color-hover: #1976D2;
    --material-input-color: #0D47A1;
    --material-input-placeholder-color: #64B5F6;
}
```

## Available CSS Classes

### Base Classes
- `.input-material` - Main component class
- `.with-icon` - Applied when the input has an icon
- `.full-size` - Makes the input take full width
- `.permanent-label` - Applied when the label is always visible

### State Classes
- `.focused` - Applied when the input is focused
- `.disabled` - Applied when the input is disabled
- `.invalid` - Applied for invalid inputs
- `.valid` - Applied for valid inputs

### Structure Classes
- `.label` - The floating label element
- `.informer` - The helper text element
- `.icon` - The icon element
- `.buttons` - Container for action buttons
- `.input-clear-button` - Clear button
- `.input-reveal-button` - Reveal button for password inputs
- `.input-search-button` - Search button

## Best Practices

1. Always provide meaningful labels for better accessibility
2. Use informer text to provide additional context or instructions
3. Consider using permanent labels for forms with pre-filled values
4. Use validation classes (valid/invalid) to provide clear feedback
5. Customize button icons to match your application's design language
6. Use custom CSS variables to maintain consistent styling across your application