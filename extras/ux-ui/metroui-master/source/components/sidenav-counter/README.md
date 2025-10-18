# Sidenav Counter

Sidenav Counter is a sidebar navigation component with icons and counters. It provides a collapsible navigation menu that can be expanded or collapsed, with support for icons and numerical counters for each menu item.

## Usage

### Basic Usage

```html
<ul data-role="sidenav-counter" id="sidenav-counter">
    <li class="active">
        <a href="#">
            <span class="icon mif-home"></span>
            <span class="title">Home</span>
            <span class="counter">5</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-user"></span>
            <span class="title">Profile</span>
            <span class="counter">3</span>
        </a>
    </li>
    <li>
        <a href="#">
            <span class="icon mif-cog"></span>
            <span class="title">Settings</span>
            <span class="counter">12</span>
        </a>
    </li>
</ul>
```

### With Toggle Button

```html
<button id="toggle-sidenav">Toggle Sidenav</button>
<ul data-role="sidenav-counter" data-toggle="#toggle-sidenav">
    <!-- Menu items -->
</ul>
```

### Right-to-Left Support

```html
<ul data-role="sidenav-counter" dir="rtl">
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

## API Methods

+ `setValue(index, value)` - Sets the counter value for a menu item at the specified index.

### Example of Method Usage

```javascript
const sidenav = Metro.getPlugin('#sidenav-counter', 'sidenav-counter');
sidenav.setValue(0, 10); // Set counter value to 10 for the first menu item
```

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
| `--sidenav-counter-width` | 220px | 220px | Width of the expanded sidenav |
| `--sidenav-counter-border-radius` | 4px | 4px | Border radius of menu items |

### Color Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--sidenav-counter-background` | #f6f6f6 | #2b2d30 | Background color of the sidenav |
| `--sidenav-counter-color` | #191919 | #dfe1e5 | Text color of menu items |
| `--sidenav-counter-icon-color` | #191919 | #dfe1e5 | Color of menu item icons |
| `--sidenav-counter-counter-color` | #191919 | #dfe1e5 | Color of counter text |
| `--sidenav-counter-background-hover` | #cecece | #43454a | Background color of menu items on hover |
| `--sidenav-counter-color-hover` | #0a0a0a | #ffffff | Text color of menu items on hover |
| `--sidenav-counter-background-active` | #68a3ff | #468cff | Background color of active menu items |
| `--sidenav-counter-color-active` | #ffffff | #ffffff | Text color of active menu items |

### Example of Custom Styling

```css
#my-sidenav {
    --sidenav-counter-width: 250px;
    --sidenav-counter-background: #e0e0e0;
    --sidenav-counter-background-active: #1ba1e2;
}
```

## Available CSS Classes

### Base Classes
- `.sidenav-counter` - Main component class
- `.sidenav-counter.expanded` - Applied when the sidenav is expanded
- `.sidenav-counter[dir=rtl]` - Applied for right-to-left support

### Element Classes
- `.icon` - Applied to the icon element
- `.title` - Applied to the title element
- `.counter` - Applied to the counter element

### State Classes
- `.active` - Applied to the active menu item

## Best Practices

- Use meaningful icons that clearly represent the menu item's purpose
- Keep counter values concise (preferably single or double digits)
- Consider using the expandPoint parameter to automatically expand the menu on larger screens
- Provide a toggle button for users to manually expand/collapse the menu
- Use the active class to indicate the current page or section