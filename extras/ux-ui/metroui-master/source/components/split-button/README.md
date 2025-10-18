# Split Button Component

The Split Button component provides a button with two parts: a main button and a dropdown toggle. It's useful for actions that have multiple options.

## Dependencies

The Split Button component depends on:
- Dropdown component (for the dropdown functionality)

## Usage

### Basic Usage

```html
<div class="split-button">
  <button class="button">Main Action</button>
  <button class="split dropdown-toggle" data-role="dropdown">
    <span class="mif-chevron-down"></span>
  </button>
  <ul class="d-menu" data-role="dropdown">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>
```

### No Gap

You can remove the gap between the main button and the dropdown toggle by adding the `no-gap` class:

```html
<div class="split-button no-gap">
  <button class="button">Main Action</button>
  <button class="split dropdown-toggle" data-role="dropdown">
    <span class="mif-chevron-down"></span>
  </button>
  <ul class="d-menu" data-role="dropdown">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>
```

### Outline

You can use the outline style for the split button by adding the `outline` class to both button elements:

```html
<div class="split-button">
  <button class="button outline">Main Action</button>
  <button class="split outline dropdown-toggle" data-role="dropdown">
    <span class="mif-chevron-down"></span>
  </button>
  <ul class="d-menu" data-role="dropdown">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li><a href="#">Option 3</a></li>
  </ul>
</div>
```

### Sizes

The Split Button component supports different sizes:

```html
<!-- Mini size -->
<div class="split-button mini">
  <button class="button">Action</button>
  <button class="split"></button>
</div>

<!-- Small size -->
<div class="split-button small">
  <button class="button">Action</button>
  <button class="split"></button>
</div>

<!-- Medium size (default) -->
<div class="split-button medium">
  <button class="button">Action</button>
  <button class="split"></button>
</div>

<!-- Large size -->
<div class="split-button large">
  <button class="button">Action</button>
  <button class="split"></button>
</div>
```

### Color Variants

You can apply Metro UI color classes to the buttons:

```html
<div class="split-button">
  <button class="button primary">Action</button>
  <button class="split info"></button>
</div>

<div class="split-button">
  <button class="button warning">Action</button>
  <button class="split alert"></button>
</div>

<div class="split-button">
  <button class="button success">Action</button>
  <button class="split"></button>
</div>
```

### Rounded Corners

Add the `rounded` class to buttons for rounded corners:

```html
<div class="split-button">
  <button class="button warning rounded">Action</button>
  <button class="split info rounded"></button>
</div>
```

### Light Toggle

For better visibility on dark backgrounds, add the `light-toggle` class to the split button:

```html
<div class="split-button">
  <button class="button">Action</button>
  <button class="split light-toggle"></button>
</div>
```

### Event Handling

You can add event handlers to the buttons:

```html
<div class="split-button">
  <button class="button" onclick="alert('Main button clicked!')">Action</button>
  <button class="split" onclick="alert('Split button clicked!')"></button>
</div>
```

## CSS Variables

The Split Button component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| --split-button-font-size | 14px | 14px | Font size of the split button |
| --split-button-border-radius | 4px | 4px | Border radius for the split button |
| --split-button-background | #ebebeb | #2e2e2e | Background color of the split button |
| --split-button-color | #191919 | #F8F8F8 | Text color of the split button |
| --split-button-background-hover | #dcdcdc | #373737 | Background color on hover |
| --split-button-color-hover | #474747 | #bfbfbf | Text color on hover |
| --split-button-border-color | #E8E8E8 | #4A4D51 | Border color of the split button |

## Styling with CSS

You can customize the appearance of the Split Button by overriding the CSS variables:

```css
:root {
  --split-button-border-radius: 8px;
  --split-button-background: #007bff;
  --split-button-color: #ffffff;
  --split-button-background-hover: #0069d9;
  --split-button-color-hover: #ffffff;
  --split-button-border-color: #0062cc;
}
```

## Available CSS Classes

### Base Classes
- `.split-button` - The main container class
- `.button` - The main button class
- `.split` - The dropdown toggle button class

### Size Modifiers
- `.mini` - Mini size
- `.small` - Small size
- `.medium` - Medium size (default)
- `.large` - Large size

### Layout Modifiers
- `.no-gap` - Removes the gap between the main button and the dropdown toggle

### Style Modifiers
- `.outline` - Outline style for buttons
- `.rounded` - Rounded corners for buttons
- `.light-toggle` - Light-colored dropdown toggle icon for dark backgrounds

### State Classes
- `.disabled` - Disabled state for buttons
- `.active-toggle` - Active state for the dropdown toggle