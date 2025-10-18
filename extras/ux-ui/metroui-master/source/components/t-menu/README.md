# Tile Menu

The Tile Menu (t-menu) component provides a tile-based navigation menu with support for both vertical and horizontal layouts, as well as dropdown submenus. It's designed for icon-based navigation.

## Dependencies

This component relies on the following:
- Metro UI CSS base styles
- Metro UI icons (for menu icons)
- Metro UI dropdown component (for dropdown functionality)

## Usage

### Basic Usage

```html
<ul class="t-menu open">
    <li>
        <a href="#">
            <span class="mif-home"></span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="mif-cog"></span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="mif-bell"></span>
        </a>
    </li>
</ul>
```

### Horizontal Layout

```html
<ul class="t-menu horizontal open">
    <li><a href="#"><span class="mif-home"></span></a></li>
    <li><a href="#"><span class="mif-cog"></span></a></li>
    <li><a href="#"><span class="mif-bell"></span></a></li>
</ul>
```

### Compact Size

```html
<ul class="t-menu compact open">
    <li><a href="#"><span class="mif-home"></span></a></li>
    <li><a href="#"><span class="mif-cog"></span></a></li>
    <li><a href="#"><span class="mif-bell"></span></a></li>
</ul>
```

### Dropdown Menus

```html
<ul class="t-menu open">
    <li><a href="#"><span class="mif-home"></span></a></li>
    <li>
        <a href="#" class="dropdown-toggle">
            <span class="mif-cog"></span>
        </a>
        <ul class="t-menu" data-role="dropdown">
            <li><a href="#"><span class="mif-wrench"></span></a></li>
            <li><a href="#"><span class="mif-user"></span></a></li>
            <li><a href="#"><span class="mif-lock"></span></a></li>
        </ul>
    </li>
    <li><a href="#"><span class="mif-bell"></span></a></li>
</ul>
```

## Plugin Parameters

The t-menu component is primarily CSS-based and doesn't have its own JavaScript plugin. However, when using dropdown functionality, you'll need to initialize the dropdown plugin for the menu items:

```javascript
Metro.makePlugin(document.querySelectorAll('.t-menu .dropdown-toggle'), 'dropdown', {
    dropFilter: '.t-menu'
});
```

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `dropFilter` | string | null | Selector for the dropdown container (used to properly position nested menus) |

## API Methods

Since the t-menu component is primarily CSS-based, it doesn't have specific API methods. However, you can use standard DOM methods to manipulate the menu:

```javascript
// To show the menu
document.querySelector('.t-menu').classList.add('open');

// To hide the menu
document.querySelector('.t-menu').classList.remove('open');
```

## Events

The t-menu component doesn't have specific events, but you can use the dropdown component's events when working with dropdown menus.

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--t-menu-border-radius` | `6px` | `6px` | Border radius of the menu |
| `--t-menu-border-color` | `#ececec` | `#484b4c` | Border color of the menu |
| `--t-menu-background` | `#fefefe` | `#343637` | Background color of the menu |
| `--t-menu-color` | `#191919` | `#dbdfe7` | Text color of the menu |

### Example of Custom Styling

```css
.custom-t-menu {
    --t-menu-border-radius: 8px;
    --t-menu-border-color: #3b5998;
    --t-menu-background: #4c70ba;
    --t-menu-color: #ffffff;
}

.custom-t-menu > li:hover {
    background-color: #3b5998;
}
```

```html
<ul class="t-menu open custom-t-menu">
    <!-- Menu items -->
</ul>
```

## Available CSS Classes

### Base Classes
- `.t-menu` - The main menu container
- `.t-menu.open` - Makes the menu visible (by default it's hidden)

### Modifiers
- `.horizontal` - Changes the menu orientation to horizontal
- `.compact` - Creates a smaller version of the menu (40px instead of 60px)
- `.dropdown-toggle` - Applied to links that have dropdown submenus

## Nesting Menus

You can create complex navigation structures by nesting t-menus:

```html
<ul class="t-menu open">
    <li>
        <a href="#" class="dropdown-toggle">
            <span class="mif-cog"></span>
        </a>
        <ul class="t-menu" data-role="dropdown">
            <li><a href="#"><span class="mif-wrench"></span></a></li>
            <li>
                <a href="#" class="dropdown-toggle">
                    <span class="mif-user"></span>
                </a>
                <ul class="t-menu" data-role="dropdown">
                    <li><a href="#"><span class="mif-profile"></span></a></li>
                    <li><a href="#"><span class="mif-security"></span></a></li>
                </ul>
            </li>
            <li><a href="#"><span class="mif-lock"></span></a></li>
        </ul>
    </li>
</ul>
```