# Cutter

The Cutter component is a visual separator that creates a zigzag pattern border with content in the center. It's useful for creating visually distinct sections in your layout.

## Dependencies

This is a CSS-only component with no JavaScript dependencies.

## Usage

### Basic Usage

```html
<div class="cutter"></div>
```

### Example with Text Content

```html
<div class="cutter">
    <div class="content">
        Section Separator
    </div>
</div>
```

### Example with Icon and Text

```html
<div class="cutter">
    <div class="content">
        <span class="mif-scissors"></span>
        Cut Here
    </div>
</div>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--cutter-image` | SVG zigzag pattern (light) | SVG zigzag pattern (dark) | The background image that creates the zigzag pattern |
| `--cutter-border-color` | #3a3b3d | #e4e5e9 | The border color for the content container |

### Example of Custom Styling

```css
/* Custom styling example */
.my-custom-cutter {
    --cutter-image: url('path-to-custom-pattern.svg');
    --cutter-border-color: #ff5722;
}
```

## Available CSS Classes

### Base Classes
- `.cutter` - The main container that creates the zigzag pattern background
- `.content` - The inner container that holds the content with a solid background and border

## Best Practices

- Use the cutter component to create visual separation between different sections of your page
- Keep the content inside the `.content` container brief and concise
- You can customize the appearance by modifying the CSS variables
- The component works well in both light and dark themes