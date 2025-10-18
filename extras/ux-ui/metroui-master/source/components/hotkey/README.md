# Hotkey Component

The Hotkey component provides functionality for handling keyboard shortcuts (hotkeys) in your Metro UI application. It allows you to bind specific key combinations to elements or functions, making your application more accessible and user-friendly.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage with Data Attributes

```html
<!-- Simple hotkey -->
<button class="button" data-hotkey="ctrl+alt+1" onclick="alert('Button clicked!')">Save</button>

<!-- Hotkey with repeat enabled -->
<button class="button" data-hotkey="alt+2" data-repeat="true" onclick="alert('Button clicked!')">Repeat Action</button>

<!-- Chord key (sequence of keys) -->
<button class="button" data-hotkey="alt+3 4" onclick="alert('Button clicked!')">Chord Key</button>
```

### Using JavaScript API

```javascript
// Bind a hotkey to an element
$("#myButton").hotkey("ctrl+s", function(e, pressedKey, definedKey) {
    console.log("Ctrl+S was pressed!");
    // Your action here
});

// Bind a hotkey to a link (will follow the href when hotkey is pressed)
$("a.save-link").hotkey("ctrl+s");

// Bind a hotkey to an input field
$("#myInput").hotkey("alt+1", function() {
    this.value = this.value.toUpperCase();
});
```

### Global Hotkeys

```javascript
// Define a global hotkey
Metro.hotkeys["ctrl+g"] = ["#globalAction", function() {
    console.log("Global hotkey Ctrl+G was triggered");
}];
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `data-hotkey` | String | - | The key combination to bind (e.g., "ctrl+s", "alt+shift+f") |
| `data-repeat` | Boolean | false | When true, allows the hotkey to trigger repeatedly when the key is held down |
| `data-hotkey-func` | String | - | Name of a function to execute when the hotkey is triggered |

## API Methods

+ `$.fn.hotkey(key, callback)` - Binds a keyboard shortcut to an element.
  - `key` (String): The key combination to bind (e.g., "ctrl+s", "alt+shift+f")
  - `callback` (Function, optional): The function to execute when the hotkey is triggered
    - Parameters passed to callback:
      - `event`: The original keyboard event
      - `pressedKey`: The actual key combination that was pressed
      - `definedKey`: The key combination that was defined in the binding

#### Example of Method Usage
```javascript
const button = $("#saveButton").hotkey("ctrl+s", function(e, pressedKey, definedKey) {
    // Save action
    console.log("Hotkey pressed:", pressedKey);
    e.preventDefault(); // Prevent default browser behavior if needed
});
```

## Events

The Hotkey component doesn't define specific events, but it uses the standard keyboard events.

## Supported Keys

### Special Keys
The component supports various special keys including:
- Navigation: up, down, left, right, home, end, pageup, pagedown
- Function keys: f1-f12
- Control keys: backspace, tab, return/enter, shift, ctrl, alt, esc, space, insert, del
- Others: capslock, numlock, scroll, meta (Windows/Command key)

### Key Combinations
You can combine keys using the "+" symbol:
- `ctrl+s`
- `alt+shift+f`
- `ctrl+alt+delete`

### Chord Keys (Key Sequences)
You can define a sequence of keys using a space:
- `alt+1 2` (press Alt+1, then press 2)

## Notes

1. When binding hotkeys to anchor (`<a>`) elements:
   - If the anchor has an href attribute, clicking the hotkey will navigate to that URL
   - If no callback is provided, the default behavior is to follow the href or trigger a click

2. The component automatically filters hotkey events when typing in form elements to prevent interference with normal typing.

3. By default, the component prevents repeated triggering when a key is held down. For global hotkeys, you can enable repeat by adding the `data-repeat` attribute to the target element.