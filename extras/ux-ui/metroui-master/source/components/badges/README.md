# Badges

The Badges component provides a simple way to add small, customizable badges to your UI elements. Badges can be used to display counts, status indicators, or labels.

## Usage

### Basic Usage

```html
<!-- Basic usage -->
<span class="badge">New</span>
```

### Additional Configurations

```html
<!-- Badge in corner position -->
<div style="position: relative; width: 100px; height: 100px; background-color: #f0f0f0;">
    <span class="badge corner">8</span>
</div>

<!-- Badge outside corner position -->
<div style="position: relative; width: 100px; height: 100px; background-color: #f0f0f0;">
    <span class="badge corner-outside">12</span>
</div>
```

## CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--badge-background` | #F8F8F8 | #2b2d30 | Background color of the badge |
| `--badge-color` | #191919 | #F8F8F8 | Text color of the badge |
| `--badge-border-radius` | 4px | 4px | Border radius of the badge |

### Example of Custom Styling

```css
/* Custom styling for badges */
.custom-badge {
    --badge-background: #2196F3;
    --badge-color: white;
    --badge-border-radius: 12px;
}
```

## Available CSS Classes

### Base Classes
- `.badge` - The main class for creating a badge

### Modifiers
- `.corner` - Positions the badge in the top-right corner of a relative-positioned parent
- `.corner-outside` - Positions the badge outside the parent element in the top-right corner

## Additional Information

The Badges component:
- Is purely CSS-based with no JavaScript functionality
- Automatically adapts to both light and dark themes
- Uses flexbox for proper text alignment and centering
- Has a default small font size (10px) and padding for compact display
- Can be positioned relative to parent elements using the corner classes
