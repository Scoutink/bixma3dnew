# Sidenav Simple

Sidenav Simple is a minimalist sidebar navigation component with icons and titles. It provides a collapsible navigation menu that can be expanded or collapsed, with support for icons and text labels for each menu item.

## Usage

### Basic Usage

```html
<ul data-role="sidenav-simple" id="sidenav-simple">
    <li class="active">
        <a href="#">
            <span class="icon mif-home"></span>
            <span class="title">Home</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            <span class="title">Profile</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            <span class="title">Settings</span>
        </a>
    </li>
</ul>
```

### With Toggle Button

```html
<button id="toggle-sidenav">Toggle Sidenav</button>
<ul data-role="sidenav-simple" data-toggle="#toggle-sidenav">
    <!-- Menu items -->
</ul>
```

### Right-to-Left Support

```html
<ul data-role="sidenav-simple" dir="rtl">
    <!-- Menu items -->
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `compacted` | boolean | `false` | Initial state of the sidenav (compacted or expanded) |
| `toggle` | string | `null` | Selector for the toggle button that will expand/collapse the sidenav |
| `expandPoint` | string | `"fs"` | Media breakpoint at which the sidenav will automatically expand (fs, xl, lg, md, sm, xs) |
| `onMenuItemClick` | function | `Metro.noop` | Callback function that is called when a menu item is clicked |
| `onCollapse` | function | `Metro.noop` | Callback function that is called when the sidenav is collapsed |
| `onExpand` | function | `Metro.noop` | Callback function that is called when the sidenav is expanded |
| `onSidenavCreate` | function | `Metro.noop` | Callback function that is called when the sidenav is created |

## Events

| Event | Description |
| ----- | ----------- |
| `onMenuItemClick` | Triggered when a menu item is clicked |
| `onCollapse` | Triggered when the sidenav is collapsed |
| `onExpand` | Triggered when the sidenav is expanded |
| `onSidenavCreate` | Triggered when the sidenav is created |

## Styling with CSS Variables

### Layout Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--sidenav-simple-width` | 220px | 220px | Width of the expanded sidenav |
| `--sidenav-simple-border-radius` | 4px | 4px | Border radius of menu items |

### Color Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--sidenav-simple-background` | #f6f6f6 | #2b2d30 | Background color of the sidenav |
| `--sidenav-simple-color` | #191919 | #dfe1e5 | Text color of menu items |
| `--sidenav-simple-icon-color` | #191919 | #dfe1e5 | Color of menu item icons |
| `--sidenav-simple-counter-color` | #191919 | #dfe1e5 | Color of counter text |
| `--sidenav-simple-background-hover` | #cecece | #43454a | Background color of menu items on hover |
| `--sidenav-simple-color-hover` | #0a0a0a | #ffffff | Text color of menu items on hover |
| `--sidenav-simple-background-active` | #68a3ff | #468cff | Background color of active menu items |
| `--sidenav-simple-color-active` | #ffffff | #ffffff | Text color of active menu items |

### Example of Custom Styling

```css
#my-sidenav {
    --sidenav-simple-width: 250px;
    --sidenav-simple-background: #e0e0e0;
    --sidenav-simple-background-active: #1ba1e2;
}
```

## Available CSS Classes

### Base Classes
- `.sidenav-simple` - Main component class
- `.sidenav-simple.expanded` - Applied when the sidenav is expanded
- `.sidenav-simple[dir=rtl]` - Applied for right-to-left support

### Element Classes
- `.icon` - Applied to the icon element
- `.title` - Applied to the title element

### State Classes
- `.active` - Applied to the active menu item

## Best Practices

- Use meaningful icons that clearly represent the menu item's purpose
- Keep titles short and descriptive
- Consider using the expandPoint parameter to automatically expand the menu on larger screens
- Provide a toggle button for users to manually expand/collapse the menu
- Use the active class to indicate the current page or section
- Ensure that the collapsed state (icons only) is still understandable to users