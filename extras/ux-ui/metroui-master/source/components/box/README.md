# Box Component

The Box component provides a simple, styled container with a border, background, and padding. It's useful for grouping related content and creating visual separation between different sections of a page.

## Usage

### Basic Usage

```html
<div class="box">
    <div class="box-title">Box Title</div>
    <p>Content inside the box...</p>
    <div class="box-title-secondary">Secondary Title</div>
    <p>More content...</p>
</div>
```

### Additional Configurations

```html
<!-- Box with custom styling -->
<div class="box" style="--box-border-color: #2196F3; --box-background: #E3F2FD;">
    <div class="box-title">Custom Styled Box</div>
    <p>This box has custom border color and background.</p>
</div>

<!-- Multiple boxes with automatic spacing -->
<div class="box">
    <div class="box-title">First Box</div>
    <p>Content for the first box...</p>
</div>
<div class="box">
    <div class="box-title">Second Box</div>
    <p>Content for the second box...</p>
</div>
```

## CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--box-border-radius` | 10px | 10px | Border radius of the box |
| `--box-border-color` | var(--border-color) | var(--border-color) | Border color of the box |
| `--box-background` | #ffffff | var(--default-background) | Background color of the box |
| `--box-color` | #191919 | var(--default-color) | Text color inside the box |

### Example of Custom Styling

```css
/* Custom styling for a specific box */
.custom-box {
    --box-border-radius: 4px;
    --box-border-color: #2196F3;
    --box-background: #E3F2FD;
    --box-color: #0D47A1;
}
```

## Available CSS Classes

### Base Classes
- `.box` - The main container with padding, border, and rounded corners

### Elements
- `.box-title` - Primary title with bottom border
- `.box-title-secondary` - Secondary title (smaller than primary)

## Additional Information

The Box component:
- Is purely CSS-based with no JavaScript functionality
- Automatically adapts to both light and dark themes
- Has internal padding of 1.5rem
- Creates automatic spacing between multiple boxes (1rem margin)
- Provides proper spacing for titles (0.5rem margin at the bottom)
- Adds 2rem top margin to secondary titles that follow other elements