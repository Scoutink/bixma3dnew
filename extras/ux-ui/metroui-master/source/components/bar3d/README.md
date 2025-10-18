# Bar3d

Bar3d is a component that creates a 3D bar chart visualization. It displays a value as a growing bar in a 3D perspective, with customizable colors and animations.

## Dependencies

No additional dependencies required.

## Usage

### Basic Usage

```html
<div data-role="bar3d"></div>
```

### Additional Configurations

```html
<div data-role="bar3d" 
     data-value="30" 
     data-bar-color="#00d153" 
     data-value-suffix="%" 
     data-value-color="#fff">
</div>
```

### JavaScript Initialization

```javascript
// Initialize with Metro.makePlugin
const bar3d = Metro.makePlugin("#myBar", "bar3d", {
    value: 60,
    barColor: "#22ec1a",
    valueSuffix: "%"
});

// Or globally configure defaults
Metro.bar3dSetup({
    barColor: "#22ec1a",
    animationDuration: 500
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `height` | number | 200 | The height of the bar |
| `barColor` | string | "#22ec1a" | The color of the growing bar |
| `valueColor` | string | "#191919" | The color of the displayed value text |
| `total` | number | 100 | The total value (maximum) |
| `value` | number | 60 | The current value to display |
| `valueSuffix` | string | "" | A suffix to append to the displayed value (e.g., "%") |
| `animationDuration` | number | 300 | The duration of the animation in milliseconds |
| `onBar3dCreate` | function | Metro.noop | Callback function triggered when the component is created |

## API Methods

+ `changeAttribute(attr, newValue)` - Changes a component attribute. Currently supports changing the `data-value` attribute.
+ `destroy()` - Removes the component from the DOM.

#### Example of Method Usage

```javascript
const bar3d = Metro.getPlugin('#myBar', 'bar3d');
bar3d.changeAttribute('data-value', 75);
```

## Events

| Event | Description |
| ----- | ----------- |
| `onBar3dCreate` | Triggered when the component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--chart-height` | 160px | - | The height of the chart |
| `--bar-height` | 160px | - | The height of the bar |
| `--bar-width` | 32px | - | The width of the bar |
| `--bar-value-color` | #191919 | - | The color of the displayed value text |
| `--bar-bottom-color` | rgba(194, 157, 11, 0.2) | - | The color of the bottom side of the bar |
| `--bar-top-color` | rgba(254, 254, 254, 0.8) | - | The color of the top side of the bar |
| `--bar-left-color` | rgba(241, 241, 241, 0.8) | - | The color of the left side of the bar |
| `--bar-right-color` | rgba(216, 216, 216, 0.8) | - | The color of the right side of the bar |

### Example of Custom Styling

```css
#myBar {
    --bar-height: 200px;
    --bar-width: 40px;
    --bar-value-color: #ffffff;
    --bar-top-color: rgba(200, 200, 200, 0.8);
}
```

## Available CSS Classes

### Base Classes
- `.bar3d` - The main container class for the component
- `.side` - Applied to all sides of the 3D bar
- `.left-side` - The left side of the 3D bar
- `.right-side` - The right side of the 3D bar
- `.top-side` - The top side of the 3D bar
- `.bottom-side` - The bottom side of the 3D bar
- `.growing-bar` - The animated bar that grows to represent the value

## Additional Notes

- The component uses CSS 3D transformations to create the 3D effect.
- The value is displayed on the growing bar using the `::before` pseudo-element.
- The component automatically updates when the `data-value` attribute is changed.

## Best Practices

- Use the component in a container with sufficient space to accommodate the 3D perspective.
- For multiple bars, use a flex container with appropriate gap spacing.
- When dynamically updating values, consider using a reasonable interval to avoid excessive animations.
- For better visual appearance, consider using contrasting colors for the bar and value text.