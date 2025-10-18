# Toggle Button

Toggle Button is a component that creates a group of buttons where only one can be active at a time, similar to radio buttons but with a different visual style. It's also known as `n8n radio buttons` in some contexts.

## Usage

### Basic Usage

```html
<div data-role="toggle-button">
    <button class="button active" data-value="1">Editor</button>
    <button class="button" data-value="2">Executions</button>
    <button class="button" data-value="3">Evaluations</button>
</div>
```

The component automatically adds the class `toggle-button` to the container element.
The button with the `active` class will be selected by default. If no button has the `active` class, the first button will be selected by default.

### Initialization via JavaScript

```javascript
const element = Metro.makePlugin("#myToggleButton", "toggle-button");
```

## Plugin Parameters

| Parameter              | Type | Default | Description                                                    |
|------------------------| ---- | ------- |----------------------------------------------------------------|
| `onChange`             | function | `Metro.noop` | Callback is called then active button changed         |
| `onButtonClick`        | function | `Metro.noop` | Callback is called when the button is clicked         |
| `onToggleButtonCreate` | function | `Metro.noop` | Callback is called when the toggle button is created  |

## API Methods

+ `destroy()` - Removes the element from the DOM.

### Example of Method Usage

```javascript
const toggleButton = Metro.getPlugin('#myToggleButton', 'toggle-button');
toggleButton.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onToggleButtonCreate` | Triggered when the toggle button is created |
| `onChange` | Triggered when active button changed. The event handler receives an object with a `button` |
| `onButtonClick` | Triggered when a button is clicked. The event handler receives an object with a `button` |

### Example of Event Handling

```javascript
// Using data attribute
<div data-role="toggle-button" data-on-change="console.log('Button changed:', arguments[0].button.data('value'))">
    <!-- buttons here -->
</div>

// Using JavaScript
const toggleButton = Metro.getPlugin('#myToggleButton', 'toggle-button');
toggleButton.element.on("change", function(e, data) {
    console.log('Button changed:', data.button.data('value'));
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--toggle-button-background` | `#dadee9` | `#545957` | Background color of the toggle button container |
| `--toggle-button-color` | `#7e7e77` | `#bdc5d2` | Text color of inactive buttons |
| `--toggle-button-item-background` | `#ffffff` | `#2c2f2e` | Background color of the active button |
| `--toggle-button-item-color` | `#191919` | `#ffffff` | Text color of the active button |
| `--toggle-button-item-hover-color` | `hsl(7, 100%, 68%)` | `hsl(7, 100%, 68%)` | Text color of buttons on hover |

### Example of Custom Styling

```css
#myToggleButton {
    --toggle-button-background: #f0f0f0;
    --toggle-button-color: #333333;
    --toggle-button-item-background: #007bff;
    --toggle-button-item-color: #ffffff;
    --toggle-button-item-hover-color: #ff9900;
}
```

## Available CSS Classes

### Base Classes
- `.toggle-button` - The main container class (added automatically)

### States
- `.active` - Applied to the currently selected button

## Best Practices

- Always include at least one button with the `active` class to ensure a default selection
- Use the `data-value` attribute to store values for each button
- Keep button labels concise to maintain a clean appearance
- Consider using the toggle button component for options that are mutually exclusive
- For accessibility, ensure that the toggle button has appropriate ARIA attributes if needed