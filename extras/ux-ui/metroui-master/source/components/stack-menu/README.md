# Stack Menu Component

The Stack Menu component provides a hierarchical navigation menu with stack-based navigation. It's designed as a slide-in menu that allows users to navigate through nested menu levels with smooth animations and a breadcrumb-style back navigation system. Perfect for mobile-first applications, product catalogs, or any hierarchical navigation structure.

## Usage

### Basic Usage

```html
<div data-role="stack-menu">
    <div class="title">Main Menu</div>
    <ul>
        <li>
            <a href="#">
                <img src="icon1.svg" class="icon" loading="lazy">
                Category 1
            </a>
            <ul>
                <li><a href="#">Subcategory 1.1</a></li>
                <li><a href="#">Subcategory 1.2</a></li>
            </ul>
        </li>
        <li>
            <a href="#">
                <span class="icon mif-home"></span>
                Category 2
            </a>
        </li>
    </ul>
</div>
```

### Advanced Configuration

```html
<div data-role="stack-menu" 
     data-root-title="Product Catalog"
     data-back-button-icon="<span class='mif-chevron-left'></span>"
     data-size="320"
     class="open">
    <div class="title">Custom Title</div>
    <ul>
        <li>
            <a href="#">
                <img src="category-icon.svg" class="icon" loading="lazy">
                Electronics
            </a>
            <ul>
                <li>
                    <a href="#">Smartphones</a>
                    <ul>
                        <li><a href="#">iPhone</a></li>
                        <li><a href="#">Samsung</a></li>
                        <li><a href="#">Xiaomi</a></li>
                    </ul>
                </li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Tablets</a></li>
            </ul>
        </li>
    </ul>
</div>
```

### Programmatic Initialization

```javascript
const stackMenu = Metro.makePlugin("#myStackMenu", "stack-menu", {
    rootTitle: "Custom Root Title",
    backButtonIcon: "←",
    size: "400px"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `rootTitle` | string | "Root Menu" | Title displayed at the root level of the menu |
| `backButtonIcon` | string | "←" | Icon or HTML content for the back navigation button |
| `size` | string | "default" | Width of the menu. Use "default" for full width or specify custom width (e.g., "320px") |
| `onStackMenuCreate` | function | Metro.noop | Callback function triggered when the stack menu is created |

## API Methods

### destroy()
Removes the stack menu element from the DOM and cleans up event listeners.

```javascript
const stackMenu = Metro.getPlugin('#myStackMenu', 'stack-menu');
stackMenu.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `menu-create` | Triggered when the stack menu component is created |

### Event Usage Example

```javascript
Metro.stackMenuSetup({
    onStackMenuCreate: function() {
        console.log('Stack menu has been created');
    }
});
```

## Global Configuration

You can set up global configuration for all stack menu components:

```javascript
Metro.stackMenuSetup({
    rootTitle: "Global Menu Title",
    backButtonIcon: "<span class='mif-arrow-left'></span>",
    size: "350px",
    onStackMenuCreate: function() {
        console.log('Stack menu created globally');
    }
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--stack-menu-icon-size` | 18px | 18px | Size of icons in menu items |
| `--stack-menu-chevron` | SVG chevron (gray) | SVG chevron (light gray) | Chevron icon for items with submenus |
| `--stack-menu-background` | #ffffff | #343637 | Background color of the menu |
| `--stack-menu-color` | #191919 | #dbdfe7 | Text color of menu items |
| `--stack-menu-title-color` | #303030 | #dbdfe7 | Color of the menu title |
| `--stack-menu-border-color` | #e7e7e7 | #2b2d30 | Border color between menu items |
| `--stack-menu-item-background-hover` | #e8e8e8 | #1e1f22 | Background color of menu items on hover |
| `--stack-menu-item-color-hover` | #000000 | #ffffff | Text color of menu items on hover |

### Example of Custom Styling

```css
/* Custom styling example */
#my-stack-menu {
    --stack-menu-background: #f8f9fa;
    --stack-menu-color: #333333;
    --stack-menu-title-color: #007bff;
    --stack-menu-item-background-hover: #007bff;
    --stack-menu-item-color-hover: #ffffff;
    --stack-menu-icon-size: 20px;
}
```

## Available CSS Classes

### Base Classes
- `.stack-menu` - Main container class (automatically applied)
- `.title` - Title area of the menu
- `.icon` - Icon elements within menu items
- `.back-menu-button` - Back navigation button

### State Classes
- `.open` - Makes the menu visible (slides in from left)
- `.-initial` - Applied to menu items during entrance animation

### Internal Classes
- `.--menu` - Internal class for the active menu container (automatically managed)

## HTML Structure

The stack menu expects a specific nested HTML structure:

```html
<div data-role="stack-menu">
    <!-- Optional title element -->
    <div class="title">Menu Title</div>
    
    <!-- Root level menu -->
    <ul>
        <li>
            <a href="#">
                <!-- Optional icon (image or Metro icon) -->
                <img src="icon.svg" class="icon" loading="lazy">
                <!-- or -->
                <span class="icon mif-icon-name"></span>
                
                Menu Item Text
            </a>
            
            <!-- Optional submenu -->
            <ul>
                <li><a href="#">Submenu Item 1</a></li>
                <li>
                    <a href="#">Submenu Item 2</a>
                    <!-- Nested submenus are supported -->
                    <ul>
                        <li><a href="#">Deep Item 1</a></li>
                        <li><a href="#">Deep Item 2</a></li>
                    </ul>
                </li>
            </ul>
        </li>
        
        <!-- Items without submenus -->
        <li>
            <a href="#">Simple Menu Item</a>
        </li>
    </ul>
</div>
```

## Features

- **Stack-based Navigation**: Navigate through menu levels with automatic breadcrumb tracking
- **Smooth Animations**: Slide-in menu with staggered item animations
- **Responsive Design**: Adapts to different screen sizes and supports custom widths
- **Icon Support**: Supports both image icons and Metro icon fonts
- **Theme Support**: Built-in support for light and dark themes
- **Touch-friendly**: Optimized for mobile and touch interactions
- **Hierarchical Structure**: Supports unlimited nesting levels
- **Back Navigation**: Automatic back button with customizable icon

## Navigation Behavior

- **Forward Navigation**: Click on any menu item with a submenu to navigate deeper
- **Back Navigation**: Use the back button to return to the previous menu level
- **Stack Management**: The component maintains a navigation stack for proper breadcrumb behavior
- **Animation**: Items animate in with a staggered effect for smooth visual transitions

## Best Practices

- Use semantic HTML structure with proper nesting of `<ul>` and `<li>` elements
- Include meaningful `href` attributes for accessibility and SEO
- Use appropriate `alt` attributes for image icons
- Consider using `loading="lazy"` for image icons to improve performance
- Ensure menu items have clear, descriptive text
- Test navigation flow on touch devices
- Use the `.open` class to control menu visibility
- Provide fallback navigation for users with JavaScript disabled

## Additional Notes

- The component is positioned as a fixed element that slides in from the left
- Menu items without submenus will not show chevron indicators
- The navigation stack is automatically managed and cleared when the component is destroyed
- Window resize events are handled automatically for responsive behavior
- The component supports unlimited nesting depth
- Animation timing is optimized for smooth user experience with 30ms stagger between items