# Tag Component

The Tag component provides a styled label element that can include an optional action button. It's commonly used for displaying categories, labels, or keywords in a visually distinct way.

## Dependencies

This component has no external dependencies beyond the core Metro UI CSS framework.

## Usage

### Basic Usage

```html
<span class="tag">
    <span class="title">Tag Label</span>
    <span class="action">×</span>
</span>
```

### Static Tag (without action button)

```html
<span class="tag static">
    <span class="title">Static Tag</span>
</span>
```

### Size Variants

```html
<!-- Small tag -->
<span class="tag small">
    <span class="title">Small Tag</span>
    <span class="action">×</span>
</span>

<!-- Default size tag -->
<span class="tag">
    <span class="title">Default Tag</span>
    <span class="action">×</span>
</span>

<!-- Large tag -->
<span class="tag large">
    <span class="title">Large Tag</span>
    <span class="action">×</span>
</span>
```

### Color Variants

```html
<!-- Accent color -->
<span class="tag primary">
    <span class="title">Primary Tag</span>
    <span class="action">×</span>
</span>

<!-- Soft color -->
<span class="tag soft-blue">
    <span class="title">Soft Blue Tag</span>
    <span class="action">×</span>
</span>

<!-- Normal color -->
<span class="tag normal-red">
    <span class="title">Normal Red Tag</span>
    <span class="action">×</span>
</span>
```

### Short Tag (with limited width)

```html
<span class="tag short-tag">
    <span class="title">This is a very long tag text that will be truncated with ellipsis</span>
    <span class="action">×</span>
</span>
```

## CSS Classes

### Main Classes
- `.tag` - The main container class for the tag component
- `.title` - Used for displaying the tag text
- `.action` - Used for the action button (typically for removing the tag)

### Size Modifiers
- `.small` - Creates a smaller tag
- `.large` - Creates a larger tag

### Behavior Modifiers
- `.static` - Removes the action button and applies a specific style
- `.short-tag` - Limits the title width to 120px with text ellipsis

### Color Modifiers
The tag component supports various color schemes:

- Accent colors: Add class with the color name (e.g., `.primary`, `.secondary`, etc.)
- Soft colors: Add class with `.soft-` prefix (e.g., `.soft-blue`, `.soft-red`, etc.)
- Normal colors: Add class with `.normal-` prefix (e.g., `.normal-blue`, `.normal-red`, etc.)

## Styling with CSS Variables

The Tag component can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
|----------|----------------|-----------|-------------|
| `--tag-background` | `#f8f8f8` | `#53575c` | Controls the background color of the tag |
| `--tag-color` | `#191919` | `#f3fcff` | Controls the text color of the tag |
| `--tag-action-background` | `#dcdcdc` | `#2b2d30` | Controls the background color of the action button |
| `--tag-action-color` | `#191919` | `#ffffff` | Controls the text color of the action button |

### Example of Custom Styling

```css
/* Custom styling example */
.my-custom-tag {
    --tag-background: #e3f2fd;
    --tag-color: #0d47a1;
    --tag-action-background: #bbdefb;
    --tag-action-color: #1976d2;
}
```

## Implementation Notes

The Tag component is a purely CSS-based component without JavaScript functionality. It's often used in conjunction with other components like Tag Input, which provides interactive functionality for managing tags.