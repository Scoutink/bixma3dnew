# Breadcrumbs Component

The Breadcrumbs component provides a simple way to show the current page location within a navigational hierarchy. It helps users understand where they are in the website structure and navigate back to previous levels.

## Usage

### Basic Usage

```html
<!-- Default style -->
<ul class="breadcrumbs">
    <li><a href="#"><span class="icon mif-home"></span>Home</a></li>
    <li><a href="#">Library</a></li>
    <li><a href="#">Data</a></li>
    <li class="active"><a href="#">Bootstrap</a></li>
</ul>
```

### Additional Configurations

```html
<!-- Arrow style with counters -->
<ul class="breadcrumbs arrow">
    <li><a href="#"><span class="icon mif-home"></span></a></li>
    <li><a href="#">Library</a></li>
    <li><a href="#">Data</a></li>
    <li class="active"><a href="#">Bootstrap</a></li>
</ul>

<!-- Custom styled breadcrumbs -->
<ul class="breadcrumbs" style="--breadcrumbs-background: #f0f0f0; --breadcrumbs-color: #333333;">
    <li data-divider="›"><a href="#"><span class="icon mif-home"></span>Home</a></li>
    <li data-divider="›"><a href="#">Library</a></li>
    <li class="active"><a href="#">Data</a></li>
</ul>
```

## Available CSS Classes

### Base Classes
- `.breadcrumbs` - The main container class for breadcrumbs
- `.breadcrumbs.arrow` - Creates arrow-shaped breadcrumbs with automatic counters

### Modifier Classes
- `.active` - Marks the current/active item in the breadcrumb trail

### Element Classes
- `.icon` - For including icons within breadcrumb items
- `.caption` - For styling text within breadcrumb items (optional)

## Styling with CSS Variables

### Default Style Variables

The default breadcrumbs style can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--breadcrumbs-background` | transparent | #1e1f22 | Background color of the breadcrumbs |
| `--breadcrumbs-color` | #191919 | #dbdfe7 | Text color of the breadcrumbs |
| `--breadcrumbs-background-hover` | #ffffff | #1e1f22 | Background color on hover |
| `--breadcrumbs-color-hover` | #000000 | #ffffff | Text color on hover |

### Arrow Style Variables

The arrow style breadcrumbs can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--breadcrumbs-arrow-item-background` | rgba(251, 251, 251, 1) | #2b2d30 | Background color of arrow items |
| `--breadcrumbs-arrow-item-color` | #191919 | #ffffff | Text color of arrow items |
| `--breadcrumbs-arrow-counter-background` | #ffffff | #ffffff | Background color of the counter |
| `--breadcrumbs-arrow-counter-color` | #000000 | #000000 | Text color of the counter |
| `--breadcrumbs-arrow-item-background-active` | #959595 | #959595 | Background color of active arrow item |
| `--breadcrumbs-arrow-item-color-active` | #ffffff | #000 | Text color of active arrow item |
| `--breadcrumbs-arrow-border-color` | #c6c6c6 | #4a4d51 | Border color of arrow items |
| `--breadcrumbs-arrow-item-shadow` | rgba(133, 133, 133, 0.1) | rgba(255, 255, 255, 0.1) | Shadow color for arrow items |

### Example of Custom Styling

```css
/* Custom styling for default breadcrumbs */
.custom-breadcrumbs {
    --breadcrumbs-background: #f0f0f0;
    --breadcrumbs-color: #333333;
    --breadcrumbs-background-hover: #e0e0e0;
    --breadcrumbs-color-hover: #000000;
}

/* Custom styling for arrow breadcrumbs */
.custom-arrow-breadcrumbs {
    --breadcrumbs-arrow-item-background: #2196F3;
    --breadcrumbs-arrow-item-color: white;
    --breadcrumbs-arrow-item-background-active: #0d47a1;
    --breadcrumbs-arrow-item-color-active: white;
}
```

## HTML Structure

The breadcrumbs component uses a simple unordered list structure:

```html
<ul class="breadcrumbs [style]">
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li class="active"><a href="#">Current Item</a></li>
</ul>
```

Where:
- `[style]` is either `default` or `arrow`
- Each item is a list item with an anchor tag
- The current/active item should have the class `active`
- Icons can be included using `<span class="icon [icon-class]"></span>`

## Additional Information

The Breadcrumbs component:
- Is purely CSS-based with no JavaScript functionality
- Automatically adapts to both light and dark themes
- Supports icons (using the Metro UI icon system)
- Provides two distinct visual styles (default and arrow)
- Uses flexbox for proper alignment
- The last item in the breadcrumb trail is automatically styled differently (bold in default style)
- Arrow style includes automatic counters for each item