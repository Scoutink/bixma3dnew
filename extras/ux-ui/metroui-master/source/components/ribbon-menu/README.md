# Ribbon Menu

The Ribbon Menu component provides a Microsoft Office-style ribbon interface for organizing commands and controls into logical groups. It features a tabbed interface with sections containing various button types and controls.

## Dependencies

- Metro UI Core
- Metro UI Button Group component

## Usage

### Basic Usage

```html
<div data-role="ribbon-menu">
    <!-- Tabs -->
    <ul class="tabs-holder">
        <li class="active"><a href="#section-home">Home</a></li>
        <li><a href="#section-edit">Edit</a></li>
        <li><a href="#section-view">View</a></li>
        <li class="static"><a href="help.html">Help</a></li>
    </ul>
    
    <!-- Content -->
    <div class="content-holder">
        <!-- Home section -->
        <div class="section" id="section-home">
            <!-- Group 1 -->
            <div class="group">
                <button class="ribbon-button">
                    <span class="icon">
                        <span class="mif-file-empty"></span>
                    </span>
                    <span class="caption">New</span>
                </button>
                <button class="ribbon-button">
                    <span class="icon">
                        <span class="mif-folder"></span>
                    </span>
                    <span class="caption">Open</span>
                </button>
                <span class="title">File</span>
            </div>
            
            <!-- Group 2 -->
            <div class="group">
                <div class="ribbon-toggle-group">
                    <button class="ribbon-icon-button">
                        <span class="icon"><span class="mif-bold"></span></span>
                        <span class="caption">Bold</span>
                    </button>
                    <button class="ribbon-icon-button">
                        <span class="icon"><span class="mif-italic"></span></span>
                        <span class="caption">Italic</span>
                    </button>
                    <button class="ribbon-icon-button">
                        <span class="icon"><span class="mif-underline"></span></span>
                        <span class="caption">Underline</span>
                    </button>
                </div>
                <span class="title">Format</span>
            </div>
        </div>
        
        <!-- Edit section -->
        <div class="section" id="section-edit">
            <!-- Edit section content -->
        </div>
    </div>
</div>
```

### Dropdown Buttons

```html
<button class="ribbon-button dropdown-toggle">
    <span class="icon">
        <span class="mif-file-zip"></span>
    </span>
    <span class="caption">Compress</span>
</button>
<ul class="ribbon-dropdown" data-role="dropmenu">
    <li><a href="#">Option 1</a></li>
    <li><a href="#">Option 2</a></li>
    <li class="divider"></li>
    <li><a href="#">More options...</a></li>
</ul>
```

### Split Buttons

```html
<div class="ribbon-split-button">
    <button class="ribbon-main">
        <span class="icon">
            <span class="mif-cogs"></span>
        </span>
    </button>
    <span class="ribbon-split dropdown-toggle">Options</span>
    <ul class="ribbon-dropdown" data-role="dropmenu">
        <li><a href="#">Option 1</a></li>
        <li><a href="#">Option 2</a></li>
    </ul>
</div>
```

### Toggle Groups

```html
<div class="ribbon-toggle-group">
    <button class="ribbon-icon-button">
        <span class="icon"><span class="mif-list-bulleted"></span></span>
        <span class="caption">List</span>
    </button>
    <button class="ribbon-icon-button">
        <span class="icon"><span class="mif-apps"></span></span>
        <span class="caption">Content</span>
    </button>
    <button class="ribbon-icon-button">
        <span class="icon"><span class="mif-table"></span></span>
        <span class="caption">Icons</span>
    </button>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `ribbonMenuDeferred` | number | 0 | Delay before initialization in milliseconds |
| `onStatic` | function | Metro.noop | Callback function triggered when a static tab is clicked |
| `onBeforeTab` | function | Metro.noop_true | Callback function triggered before a tab is opened. Return false to prevent tab opening |
| `onTab` | function | Metro.noop | Callback function triggered when a tab is opened |
| `onRibbonMenuCreate` | function | Metro.noop | Callback function triggered when the ribbon menu is created |

## API Methods

+ `open(tab)` - Opens a specific tab. The tab parameter can be a CSS selector, a DOM element, or a jQuery object.

### Example of Method Usage

```javascript
// Get the ribbon menu component
const ribbonMenu = Metro.getPlugin('#ribbon-menu', 'ribbon-menu');

// Open a specific tab
ribbonMenu.open('#section-edit');

// Alternative using jQuery
$('#ribbon-menu').data('ribbonmenu').open('#section-edit');
```

## Events

| Event | Description |
| ----- | ----------- |
| `onStatic` | Triggered when a static tab is clicked |
| `onBeforeTab` | Triggered before a tab is opened. Return false to prevent tab opening |
| `onTab` | Triggered when a tab is opened |
| `onRibbonMenuCreate` | Triggered when the ribbon menu is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--ribbon-menu-border-color` | #dadbdc | #4a4d51 | Border color for the ribbon menu |
| `--ribbon-menu-background` | #ffffff | #1e1f22 | Background color for the ribbon menu |
| `--ribbon-menu-color` | #191919 | #dbdfe7 | Text color for the ribbon menu |
| `--ribbon-menu-tab-background` | #f5f6f7 | #343637 | Background color for tabs |
| `--ribbon-menu-tab-color` | #191919 | #ffffff | Text color for tabs |
| `--ribbon-menu-tab-background-active` | #f5f6f7 | #26282e | Background color for active tabs |
| `--ribbon-menu-tab-color-active` | #191919 | #ffffff | Text color for active tabs |
| `--ribbon-menu-tab-background-static` | #1979ca | #1979ca | Background color for static tabs |
| `--ribbon-menu-tab-color-static` | #ffffff | #ffffff | Text color for static tabs |
| `--ribbon-menu-button-background` | #f5f6f7 | #26282e | Background color for buttons |
| `--ribbon-menu-button-color` | #191919 | #dbdfe7 | Text color for buttons |
| `--ribbon-menu-button-background-hover` | rgba(...) | rgba(...) | Background color for buttons on hover |
| `--ribbon-menu-button-background-active` | rgba(...) | rgba(...) | Background color for active buttons |

### Example of Custom Styling

```css
#my-ribbon-menu {
    --ribbon-menu-border-color: #c0c0c0;
    --ribbon-menu-background: #f0f0f0;
    --ribbon-menu-tab-background-static: #007acc;
}
```

## Available CSS Classes

### Base Classes
- `.ribbon-menu` - The main container class (automatically added)
- `.tabs-holder` - Container for tabs
- `.content-holder` - Container for content sections
- `.section` - Individual content sections
- `.group` - Groups within sections
- `.title` - Title for groups

### Button Types
- `.ribbon-button` - Large buttons with icon and text
- `.ribbon-icon-button` - Small buttons with icon and text
- `.ribbon-tool-button` - Small buttons with only icon
- `.ribbon-split-button` - Buttons with dropdown
- `.ribbon-toggle-group` - Group of toggle buttons

### State Classes
- `.active` - For active tabs or buttons
- `.static` - For static tabs (e.g., File menu)
- `.disabled` - For disabled buttons (can also use the `disabled` attribute)
- `.checked` - For checked items in dropdown menus (shows a checkmark)
- `.checked-one` - For radio-style checked items in dropdown menus (shows a dot)

### Dropdown Classes
- `.dropdown-toggle` - For elements that trigger dropdowns
- `.ribbon-dropdown` - For dropdown menus
- `.divider` - For dividers in dropdown menus