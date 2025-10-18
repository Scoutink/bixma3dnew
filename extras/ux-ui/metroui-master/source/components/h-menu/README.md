# Horizontal Menu (h-menu)

A simple, flexible horizontal menu component that provides a clean navigation bar with support for dropdown submenus.

## Dependencies

- Requires the d-menu component for dropdown functionality

## Usage

### Basic Usage

```html
<ul class="h-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Products</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contacts</a></li>
</ul>
```

### With Dropdown Submenus

```html
<ul class="h-menu">
    <li><a href="#">Home</a></li>
    <li>
        <a href="#" class="dropdown-toggle">Products</a>
        <ul class="d-menu" data-role="dropdown">
            <li><a href="#">Product 1</a></li>
            <li><a href="#">Product 2</a></li>
            <li><a href="#">Product 3</a></li>
        </ul>
    </li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contacts</a></li>
</ul>
```

### With Icons, Captions, and Hotkeys

```html
<ul class="h-menu">
    <li><a href="#">
        <span class="icon mif-home"></span>
        <span class="caption">Home</span>
    </a></li>
    <li>
        <a href="#" class="dropdown-toggle">
            <span class="icon mif-products"></span>
            <span class="caption">Products</span>
        </a>
        <ul class="d-menu" data-role="dropdown">
            <li><a href="#">
                <span class="icon mif-codepen"></span>
                <span class="caption">Product 1</span>
                <span class="hotkey">Ctrl+1</span>
            </a></li>
            <li><a href="#">Product 2</a></li>
            <li class="disabled"><a href="#">Product 3</a></li>
            <li class="divider"></li>
            <li><a href="#">More Products</a></li>
        </ul>
    </li>
</ul>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--h-menu-gap` | 0 | 0 | Gap between menu items |
| `--h-menu-font-size` | 13px | 13px | Font size for menu items |
| `--h-menu-border-radius` | 4px | 4px | Border radius for menu items |
| `--h-menu-background` | #ffffff | #1e1f22 | Background color of the menu |
| `--h-menu-color` | #191919 | #dbdfe7 | Text color of menu items |
| `--h-menu-item-hover-background` | #e8e8e8 | #2b2d30 | Background color of menu items on hover |
| `--h-menu-item-hover-color` | #191919 | #ffffff | Text color of menu items on hover |

### Example of Custom Styling

```css
.custom-menu {
    --h-menu-gap: 4px;
    --h-menu-background: #f0f0f0;
    --h-menu-color: #333333;
    --h-menu-item-hover-background: #d0d0d0;
    --h-menu-item-hover-color: #000000;
}
```

## Available CSS Classes

### Base Classes
- `.h-menu` - The main container class for the horizontal menu

### Additional Elements
- `.dropdown-toggle` - Applied to links that have dropdown menus
- `.dropdown-caret` - Optional element for indicating dropdown menus
- `.divider` - Creates a divider line between menu items in dropdown menus
- `.disabled` - Makes a menu item appear disabled and non-interactive

## Best Practices

- Use the h-menu component for primary navigation in your application
- Combine with d-menu for dropdown functionality
- Keep menu items concise and descriptive
- Use icons to enhance visual recognition
- Group related items in dropdown menus
- Use dividers to separate logical groups of menu items
- Provide hotkeys for frequently used actions
- Ensure proper contrast between text and background colors for accessibility
- Consider mobile users by ensuring menu items are large enough for touch interaction