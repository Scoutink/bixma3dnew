# Hover Box Component

The Hover Box component creates an interactive hover effect that follows the mouse cursor within an element. It adds a subtle radial gradient effect that moves with the cursor, enhancing the visual feedback for interactive elements.

## Dependencies

This component has no additional dependencies beyond the Metro UI core.

## Usage

### Basic Usage

```html
<div data-role="hover-box">
    <!-- Your content here -->
</div>
```

### Example with Custom Dimensions

```html
<div data-role="hover-box" style="width: 400px; height: 300px;">
    <h3>Box Header</h3>
    <p>Some text inside the box</p>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `onHoverBoxCreate` | function | Metro.noop | Callback function triggered when the hover box is created |

## API Methods

+ `destroy()` - Removes the hover box component and its associated elements.

#### Example of Method Usage

```javascript
const hoverBox = Metro.getPlugin('#myHoverBox', 'hoverbox');
hoverBox.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onHoverBoxCreate` | Triggered when the hover box component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--hover-box-effect-color` | hsla(0,0%,80%,56%) | hsla(234,78%,62%,26%) | Color of the hover effect gradient |
| `--x` | 0 | 0 | X-coordinate for the hover effect (set automatically) |
| `--y` | 0 | 0 | Y-coordinate for the hover effect (set automatically) |
| `--size` | 0 | 0 | Size of the hover effect (set automatically based on element height) |

### Example of Custom Styling

```css
/* Custom styling for a specific hover box */
#myCustomHoverBox {
    --hover-box-effect-color: hsla(180, 100%, 50%, 0.5);
}
```

## Available CSS Classes

### Base Classes
- `.hover-box` - The main class applied to the element that creates the hover effect

## Additional Information

The Hover Box component:
- Only shows the hover effect on devices that support hover (using the `@media (hover: hover)` CSS media query)
- Creates a radial gradient that follows the mouse cursor
- Automatically calculates the size of the effect based on the element's height
- Works best with elements that have a defined height and width