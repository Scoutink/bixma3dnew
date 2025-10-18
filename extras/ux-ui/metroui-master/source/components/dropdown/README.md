# Dropdown

The Dropdown component provides a flexible way to create dropdown menus and lists that can be toggled to show or hide content. It supports various positioning options and can be customized through configuration options and CSS variables.

## Dependencies

- Metro UI Core
- DOM Library

## Usage

### Basic Usage

```html
<!-- Basic dropdown -->
<div class="dropdown-toggle">Click me
    <div class="dropdown" data-role="dropdown">
        <div>Dropdown content here</div>
    </div>
</div>

<!-- Using with a button -->
<button class="button dropdown-toggle">
    Options
    <div class="dropdown" data-role="dropdown">
        <ul>
            <li><a href="#">Option 1</a></li>
            <li><a href="#">Option 2</a></li>
            <li><a href="#">Option 3</a></li>
        </ul>
    </div>
</button>
```

### Additional Configurations

#### Dropdown Positioning

```html
<!-- Dropdown that opens upward -->
<div class="dropdown-toggle">
    Click me
    <div class="dropdown drop-up" data-role="dropdown">
        <div>Content appears above the toggle</div>
    </div>
</div>

<!-- Dropdown aligned to the right -->
<div class="dropdown-toggle">
    Click me
    <div class="dropdown drop-down-right" data-role="dropdown">
        <div>Content aligned to the right</div>
    </div>
</div>
```

#### Dropdown with No Auto-Close

```html
<!-- Dropdown that stays open when clicking outside -->
<div class="dropdown-toggle">
    Click me
    <div class="dropdown keep-open" data-role="dropdown" data-no-close="true">
        <div>This dropdown won't close when clicking elsewhere</div>
    </div>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `dropdownDeferred` | Number | 0 | Delay in milliseconds before the dropdown appears |
| `dropFilter` | String | null | CSS selector to filter which dropdowns should be closed when another is opened |
| `toggleElement` | String | null | CSS selector for the toggle element (if not automatically detected) |
| `align` | String | "left" | Alignment of the dropdown ("left" or "right") |
| `noClose` | Boolean | false | If true, the dropdown won't close when clicking outside |
| `duration` | Number | 50 | Animation duration in milliseconds |
| `openMode` | String | "auto" | How the dropdown opens ("auto", "up") |
| `openFunc` | String | "show" | Function to use for opening animation |
| `closeFunc` | String | "hide" | Function to use for closing animation |
| `height` | String | "auto" | Height of the dropdown |

### Example of Configuration

```javascript
// Global configuration
Metro.dropdownSetup({
    duration: 100,
    noClose: true,
    openMode: "up"
});

// Component-specific configuration using Metro.makePlugin
const dropdown = Metro.makePlugin("#myDropdown", "dropdown", {
    align: "right",
    height: "300px",
    onDrop: function() {
        console.log("Dropdown opened");
    }
});
```

## API Methods

+ open(immediate, el) - Opens the dropdown. If `immediate` is true, opens without animation. `el` is optional element to open.
+ close(immediate, el) - Closes the dropdown. If `immediate` is true, closes without animation. `el` is optional element to close.
+ toggle() - Toggles the dropdown between open and closed states.

### Example of Method Usage

```javascript
// Get the dropdown component instance
const dropdown = Metro.getPlugin("#myDropdown", "dropdown");

// Open the dropdown
dropdown.open();

// Close the dropdown immediately (without animation)
dropdown.close(true);

// Toggle the dropdown state
dropdown.toggle();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDrop` | Triggered when the dropdown is opened |
| `onUp` | Triggered when the dropdown is closed |
| `onDropdownCreate` | Triggered when the dropdown component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--drop-menu-toggle-color` | #191919 | #ffffff | Color of the dropdown toggle icon |

### Example of Custom Styling

```css
/* Custom styling for dropdown */
.custom-dropdown {
    --drop-menu-toggle-color: #2196F3;
}
```

## Available CSS Classes

### Base Classes
- `.dropdown` - The main class for the dropdown component
- `.dropdown-toggle` - The class for the toggle element

### Positioning Classes
- `.drop-left` - Positions the dropdown to the left of the toggle
- `.drop-right` - Positions the dropdown to the right of the toggle
- `.drop-up` - Positions the dropdown above the toggle
- `.drop-up-left` - Positions the dropdown above and to the left of the toggle
- `.drop-up-right` - Positions the dropdown above and to the right of the toggle
- `.drop-down` - Positions the dropdown below the toggle (default)
- `.drop-down-left` - Positions the dropdown below and to the left of the toggle
- `.drop-down-right` - Positions the dropdown below and to the right of the toggle

### State Classes
- `.keep-open` - Prevents the dropdown from closing when clicking outside
- `.active-toggle` - Applied to the toggle element when the dropdown is open