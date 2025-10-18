# Theme Switcher

A component that provides a convenient way to toggle between light and dark themes in your Metro UI application.

## Dependencies

None

## Usage

### Basic Usage

```html
<!-- Basic usage -->
<input type="checkbox" data-role="theme-switcher">
```

### Additional Configurations

```html
<!-- With custom options -->
<input type="checkbox" data-role="theme-switcher" 
       data-mode="button" 
       data-dark-symbol="🌚" 
       data-light-symbol="🌝"
       data-state="dark">

<!-- Disabled state -->
<input type="checkbox" data-role="theme-switcher" disabled>
```

### JavaScript Initialization

```javascript
// Initialize with Metro.makePlugin
const themeSwitcher = Metro.makePlugin("#myThemeSwitcher", "theme-switcher", {
    mode: "button",
    darkSymbol: "🌚",
    lightSymbol: "🌝"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `state` | String | `Metro.theme.LIGHT` | Initial state of the theme switcher |
| `target` | String | `"html"` | Selector for the element to apply theme classes to |
| `saveState` | Boolean | `true` | Whether to save the selected theme in localStorage |
| `saveStateKey` | String | `"THEME:SWITCHER"` | Key used for storing theme preference in localStorage |
| `clsDark` | String | `""` | Additional class to add to the target when dark theme is active |
| `darkSymbol` | String | `"🌙"` | Symbol displayed when dark theme is active |
| `lightSymbol` | String | `"🌞"` | Symbol displayed when light theme is active |
| `mode` | String | `"switch"` | Display mode: "switch" (toggle switch) or "button" (circular button) |

## API Methods

+ `val([value])` - Gets or sets the current theme value. Returns `Metro.theme.DARK` or `Metro.theme.LIGHT` if called without arguments.
+ `destroy()` - Destroys the component and removes it from the DOM.

### Example of Method Usage

```javascript
// Get current theme
const themeSwitcher = Metro.getPlugin('#myThemeSwitcher', 'theme-switcher');
const currentTheme = themeSwitcher.val(); // Returns "dark" or "light"

// Set theme
themeSwitcher.val(Metro.theme.DARK); // Switch to dark theme
// or
themeSwitcher.val(true); // Same as above
```

## Events

| Event | Description |
| ----- | ----------- |
| `onThemeSwitcherCreate` | Triggered after theme switcher component creation |
| `onChangeTheme` | Triggered when theme is changed (receives an object with `state` property: true for dark, false for light) |

### Example of Event Usage

```javascript
// Initialize with event handlers
Metro.makePlugin("#myThemeSwitcher", "theme-switcher", {
    onThemeSwitcherCreate: function() {
        console.log("Theme switcher created");
    },
    onChangeTheme: function(e) {
        console.log("Theme changed to:", e.state ? "dark" : "light");
    }
});
```

## Global Configuration

You can globally configure the theme-switcher component using the `Metro.themeSwitcherSetup` method:

```javascript
Metro.themeSwitcherSetup({
    saveState: false,
    darkSymbol: "🌚",
    lightSymbol: "🌝",
    mode: "button"
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--theme-switcher-background` | `#e9e9e9` | `#232527` | Background color of the switcher track |
| `--theme-switcher-background-button` | `#ffffff` | `#232527` | Background color in button mode |
| `--theme-switcher-background-checked` | `#191919` | `#474748` | Background color when checked (dark mode) |
| `--theme-switcher-background-disabled` | `#e8e8e8` | `#e8e8e8` | Background color when disabled |
| `--theme-switcher-toggle-color` | `#fff` | `#232527` | Toggle button color |
| `--theme-switcher-toggle-disabled` | `#ccc` | `#3e4145` | Toggle color when disabled |
| `--theme-switcher-text-color` | `#000` | `#efefef` | Text color |
| `--theme-switcher-text-color-checked` | `#fff` | `#fff` | Text color when checked (dark mode) |
| `--theme-switcher-focus-color` | `#e8e8e8` | `#191919` | Focus outline color |
| `--theme-switcher-border-color` | `#e8e8e8` | `#474748` | Border color |

### Example of Custom Styling

```css
/* Custom styling example */
#myThemeSwitcher {
    --theme-switcher-background: #f0f0f0;
    --theme-switcher-background-checked: #333;
    --theme-switcher-toggle-color: #ffd700;
}
```

## Available CSS Classes

### Base Classes
- `.theme-switcher` - Base class for the component (automatically added)

### Modifiers
- `.mode-switch` - Applied when mode is set to "switch" (default)
- `.mode-button` - Applied when mode is set to "button"

## Theme Implementation

When activated, the component adds the class `dark-side` to the target element (default is `html`). You can use this class to define your dark theme styles:

```css
:root {
    --background-color: #ffffff;
    --text-color: #000000;
}

.dark-side {
    --background-color: #232527;
    --text-color: #ffffff;
}
```

This allows you to define different CSS variable values for light and dark themes, which your components can then use for styling.