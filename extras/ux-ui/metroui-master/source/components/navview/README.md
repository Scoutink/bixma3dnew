# NavView Component

The NavView component provides a responsive navigation panel that can be expanded or collapsed. It's commonly used for application navigation, offering a sidebar with menu items that can be organized into categories. The component supports both expanded and compact modes, making it suitable for various screen sizes.

## Dependencies

- Metro UI Core
- Dom

## Usage

### Basic Usage

```html
<div data-role="navview" data-expand-point="md">
    <div class="navview-pane">
        <!-- Toggle button -->
        <div class="logo-container">
            <button class="pull-button">
                <span class="mif-menu"></span>
            </button>
        </div>
        
        <!-- Search box -->
        <div class="suggest-box">
            <input type="text" data-role="input" data-clear-button="false" data-search-button="true">
            <button class="holder">
                <span class="mif-search"></span>
            </button>
        </div>
        
        <!-- Navigation menu -->
        <ul class="navview-menu">
            <li class="item-header">General</li>
            <li>
                <a href="#">
                    <span class="icon"><span class="mif-home"></span></span>
                    <span class="caption">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" class="dropdown-toggle">
                    <span class="icon"><span class="mif-cog"></span></span>
                    <span class="caption">Settings</span>
                </a>
                <ul class="navview-menu" data-role="collapse">
                    <li><a href="#"><span class="caption">Profile</span></a></li>
                    <li><a href="#"><span class="caption">Security</span></a></li>
                </ul>
            </li>
        </ul>
    </div>
    
    <div class="navview-content">
        <!-- Your page content goes here -->
        <div class="p-4">
            <h1>Content Area</h1>
            <p>This is the main content area of your application.</p>
        </div>
    </div>
</div>
```

### Responsive Navigation

The NavView component can automatically switch between expanded and compact modes based on screen size:

```html
<div data-role="navview" data-expand-point="lg">
    <!-- NavView content as in the basic example -->
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `navViewDeferred` | number | 0 | Deferred initialization time in milliseconds |
| `expandPoint` | string | null | Media query point at which the navview expands (e.g., "md") |
| `toggle` | string | null | Selector for an external toggle button |
| `animate` | boolean | true | Whether to animate transitions between expanded and compact states |
| `activeState` | boolean | true | Whether to show active state for menu items |
| `initialView` | string | "expand" | Initial view mode ("expand" or "compact") |
| `onMenuItemClick` | function | Metro.noop | Event handler for menu item clicks |
| `onPaneClose` | function | Metro.noop | Event handler for when the pane is closed |
| `onBeforePaneClose` | function | Metro.noop | Event handler before the pane is closed |
| `onPaneOpen` | function | Metro.noop | Event handler for when the pane is opened |
| `onBeforePaneOpen` | function | Metro.noop | Event handler before the pane is opened |
| `onNavviewCreate` | function | Metro.noop | Event handler for navview creation |

## API Methods

### `toggle()`

Toggles the NavView between expanded and compact modes.

```javascript
var navview = Metro.getPlugin('#my-navview', 'nav-view');
navview.toggle();
```

### `compact()`

Forces the NavView into compact mode.

```javascript
var navview = Metro.getPlugin('#my-navview', 'nav-view');
navview.compact();
```

### `expand()`

Forces the NavView into expanded mode.

```javascript
var navview = Metro.getPlugin('#my-navview', 'nav-view');
navview.expand();
```

### `state()`

Returns the current state of the NavView ("expand" or "compact").

```javascript
var navview = Metro.getPlugin('#my-navview', 'nav-view');
var currentState = navview.state();
```

### `destroy()`

Removes the NavView component and cleans up event handlers.

```javascript
var navview = Metro.getPlugin('#my-navview', 'nav-view');
navview.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onMenuItemClick` | Triggered when a menu item is clicked |
| `onPaneClose` | Triggered when the navigation pane is closed |
| `onBeforePaneClose` | Triggered before the navigation pane is closed |
| `onPaneOpen` | Triggered when the navigation pane is opened |
| `onBeforePaneOpen` | Triggered before the navigation pane is opened |
| `onNavviewCreate` | Triggered when the navview is created |

## Styling with CSS Variables

The NavView component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--navview-pane-width` | 280px | 280px | Width of the expanded navigation pane |
| `--navview-pane-width-compact` | 50px | 50px | Width of the compact navigation pane |
| `--navview-item-border-radius` | 4px | 4px | Border radius for navigation items |
| `--navview-background` | #f8f8f8 | #1e1f22 | Background color for the navview |
| `--navview-color` | #191919 | #dbdfe7 | Text color for the navview |
| `--navview-pane-background` | #ececec | #2b2d30 | Background color for the navigation pane |
| `--navview-pane-color` | #191919 | #dfe1e5 | Text color for the navigation pane |
| `--navview-item-background` | transparent | transparent | Background color for navigation items |
| `--navview-item-color` | #191919 | #dfe1e5 | Text color for navigation items |
| `--navview-item-background-hover` | #cecece | #43454a | Background color for hovered navigation items |
| `--navview-item-color-hover` | #0a0a0a | #ffffff | Text color for hovered navigation items |
| `--navview-item-background-active` | #cecece | #43454a | Background color for active navigation items |
| `--navview-item-color-active` | #0a0a0a | #ffffff | Text color for active navigation items |
| `--navview-item-color-disabled` | #ccc | #43454a | Text color for disabled navigation items |
| `--navview-item-marker-color` | #468cff | #468cff | Color for the active item marker |
| `--navview-dropdown-toggle-color` | #191919 | #ffffff | Color for dropdown toggle indicators |
| `--navview-item-header-color` | #191919 | #dfe1e5 | Color for section headers |
| `--navview-item-header-border-color` | #cccccc | #5d5e60 | Color for section header borders |
| `--navview-scrollbar-width` | 6px | 6px | Width of the scrollbar |
| `--navview-scrollbar-thumb-color` | #cccccc | #5d5e60 | Color of the scrollbar thumb |
| `--navview-scrollbar-background-color` | #ececec | #2b2d30 | Background color of the scrollbar |
| `--navview-icon-color` | #191919 | #dfe1e5 | Color for icons |
| `--navview-icon-color-hover` | #191919 | #dfe1e5 | Color for hovered icons |
| `--navview-icon-color-active` | #191919 | #dfe1e5 | Color for active icons |

### Example of Custom Styling

```css
#my-navview {
    --navview-pane-width: 320px;
    --navview-item-background-hover: #2196f3;
    --navview-item-color-hover: #ffffff;
    --navview-item-marker-color: #ff4081;
}
```

## Available CSS Classes

### Base Classes
- `.navview` - Main container class
- `.navview-pane` - Container for the navigation pane
- `.navview-content` - Container for the content area
- `.navview-menu` - Container for menu items
- `.navview-menu-container` - Container for the menu with scrolling support

### State Classes
- `.expanded` - Applied when the navview is in expanded mode
- `.compacted` - Applied when the navview is in compact mode
- `.handmade` - Applied when the state was changed manually
- `.animate-panes` - Applied when animations are enabled

### Menu Item Classes
- `.item-header` - Section header in the menu
- `.active` - Applied to active menu items
- `.disabled` - Applied to disabled menu items
- `.dropdown-toggle` - Applied to menu items with dropdown submenus

### Element Classes
- `.pull-button` - Toggle button for expanding/collapsing the pane
- `.holder` - Container for the search icon in compact mode
- `.icon` - Container for menu item icons
- `.caption` - Container for menu item text
- `.badges` - Container for badges
- `.hotkey` - Container for keyboard shortcut hints