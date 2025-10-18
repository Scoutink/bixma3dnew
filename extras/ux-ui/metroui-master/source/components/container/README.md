# Container

The Container component provides responsive layout containers that help center and horizontally pad your content. It's a fundamental building block for creating responsive layouts in Metro UI.

## Dependencies

This component has no external dependencies beyond the core Metro UI framework.

## Usage

### Basic Usage

```html
<div class="container">
    <!-- Your content here -->
</div>
```

### Additional Configurations

#### Fluid Container

For a full-width container that spans the entire viewport width:

```html
<div class="container-fluid">
    <!-- Your content here -->
</div>
```

#### Fixed-Width Containers

For containers with specific maximum widths:

```html
<div class="container-xs"><!-- Max-width based on xs breakpoint --></div>
<div class="container-sm"><!-- Max-width based on sm breakpoint --></div>
<div class="container-md"><!-- Max-width based on md breakpoint --></div>
<div class="container-lg"><!-- Max-width based on lg breakpoint --></div>
<div class="container-xl"><!-- Max-width based on xl breakpoint --></div>
<div class="container-xxl"><!-- Max-width based on xxl breakpoint --></div>
```

#### Maximum Width Container

For a container that takes 100% width:

```html
<div class="container-max">
    <!-- Your content here -->
</div>
```

#### Container Query Support

For containers that support CSS container queries:

```html
<div class="container-query">
    <!-- Content that can respond to container size -->
</div>

<div class="responsive-container">
    <!-- Content that can respond to container size -->
</div>
```

#### HTML Semantic Elements

The container styles are also applied to the following semantic HTML elements:

```html
<header><!-- Header content --></header>
<section><!-- Section content --></section>
<footer><!-- Footer content --></footer>
<aside><!-- Sidebar content --></aside>
```

## Styling with CSS Variables

The Container component doesn't use CSS variables for styling. Its behavior is controlled through media queries and fixed values.

### Example of Custom Styling

You can customize the container's padding:

```css
.container {
    padding-left: 20px;
    padding-right: 20px;
}
```

## Available CSS Classes

### Base Classes
- `.container` - Standard responsive container with adaptive max-width
- `.container-fluid` - Full-width container with no max-width
- `.container-max` - Full-width container (100%)
- `.container-query`, `.responsive-container` - Containers with CSS container query support

### Breakpoint-Specific Classes
- `.container-xs` - Container with max-width set to xs breakpoint
- `.container-sm` - Container with max-width set to sm breakpoint
- `.container-md` - Container with max-width set to md breakpoint
- `.container-lg` - Container with max-width set to lg breakpoint
- `.container-xl` - Container with max-width set to xl breakpoint
- `.container-xxl` - Container with max-width set to xxl breakpoint

## Responsive Behavior

The standard `.container` class has the following responsive behavior:

| Viewport Width | Container Max Width |
| -------------- | ------------------ |
| < 360px        | 100% |
| 360px - 576px  | 98% |
| 577px - 768px  | 95% |
| 769px - 992px  | 90% |
| 993px - 1200px | 90% |
| > 1200px       | 80% |

## Container Queries

The `.container-query` and `.responsive-container` classes enable CSS container queries, allowing child elements to respond to the container's size rather than the viewport size:

```css
/* Example of using container queries */
@container container-query (min-width: 400px) {
    .responsive-element {
        font-size: 1.2rem;
    }
}
```

## Features

- Responsive containers that adapt to different screen sizes
- Fluid container option for full-width layouts
- Fixed-width container options for specific breakpoints
- Container query support for component-level responsiveness
- Consistent padding on left and right sides (12px by default)
- Automatic centering with `margin: 0 auto`
- Relative positioning, allowing absolute positioning of child elements