# Catalog Menu Component

The Catalog Menu component provides a vertical navigation menu with expandable content areas. 
It's designed for displaying categorized content with icons and hover-activated content panels, making it ideal for e-commerce catalogs, product categories, or hierarchical navigation systems.

## Usage

### Basic Usage

```html
<nav data-role="catalog-menu">
    <ul class="catalog-list">
        <li class="catalog-item">
            <a href="#category1">
                <img src="icon1.svg" class="icon" loading="lazy">
                Category 1
            </a>
            <div class="catalog-item-content">
                Content for Category 1
            </div>
        </li>
        <li class="catalog-item">
            <a href="#category2">
                <img src="icon2.svg" class="icon" loading="lazy">
                Category 2
            </a>
            <div class="catalog-item-content">
                Content for Category 2
            </div>
        </li>
    </ul>
</nav>
```

### Programmatic Initialization

```javascript
const catalogMenu = Metro.makePlugin("#myCatalogMenu", "catalog-menu");
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `onCatalogCreate` | function | Metro.noop | Callback function triggered when the catalog menu is created |

## API Methods

### destroy()
Removes the catalog menu element from the DOM and cleans up event listeners.

```javascript
const catalogMenu = Metro.getPlugin('#myCatalogMenu', 'catalog-menu');
catalogMenu.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `catalog-create` | Triggered when the catalog menu component is created |

### Event Usage Example

```javascript
Metro.catalogMenuSetup({
    onCatalogCreate: function() {
        console.log('Catalog menu has been created');
    }
});
```

## Global Configuration

You can set up global configuration for all catalog menu components:

```javascript
Metro.catalogMenuSetup({
    toggle: ".default-toggle",
    onCatalogCreate: function() {
        console.log('Catalog menu created');
    }
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--catalog-menu-width` | 272px | 272px | Width of the catalog menu |
| `--catalog-menu-background` | #ffffff | #2b2d30 | Background color of the menu |
| `--catalog-menu-color` | #191919 | #f3fcff | Text color of the menu |
| `--catalog-menu-border-color` | #c5c5c5 | #2b2d30 | Border color of the menu |
| `--catalog-menu-item-background-hover` | #e8e8e8 | #1e1f22 | Background color of menu items on hover |
| `--catalog-menu-item-color-hover` | #000000 | #ffffff | Text color of menu items on hover |
| `--catalog-menu-chevron` | SVG chevron (gray) | SVG chevron (light gray) | Chevron icon for menu items |

### Example of Custom Styling

```css
/* Custom styling example */
#my-catalog-menu {
    --catalog-menu-width: 300px;
    --catalog-menu-background: #f8f9fa;
    --catalog-menu-color: #333333;
    --catalog-menu-item-background-hover: #007bff;
    --catalog-menu-item-color-hover: #ffffff;
}
```

## Available CSS Classes

### Base Classes
- `.catalog-menu` - Main container class (automatically applied)
- `.catalog-list` - List container for catalog items
- `.catalog-item` - Individual catalog item
- `.catalog-item-content` - Content area that appears on hover

### Modifiers
- `.menu-active` - Applied when menu is toggled active (when using toggle functionality)

## HTML Structure

The catalog menu expects a specific HTML structure:

```html
<nav data-role="catalog-menu">
    <ul class="catalog-list">
        <li class="catalog-item">
            <a href="#">
                <img src="icon.svg" class="icon" loading="lazy">
                <!-- or use Metro icons -->
                <span class="icon mif-icon-name"></span>
                Item Text
            </a>
            <div class="catalog-item-content">
                <!-- Content that appears on hover -->
                <p>Additional content goes here</p>
            </div>
        </li>
    </ul>
</nav>
```

## Features

- **Responsive Design**: Automatically adjusts content width based on parent container
- **Hover Activation**: Content panels appear on hover (on devices that support hover)
- **Toggle Functionality**: Optional toggle button to show/hide the entire menu
- **Icon Support**: Supports both image icons and Metro icon fonts
- **Theme Support**: Built-in support for light and dark themes
- **Accessibility**: Proper semantic HTML structure with navigation elements

## Best Practices

- Use semantic HTML with `<nav>` element for better accessibility
- Include meaningful `href` attributes in anchor tags for proper navigation
- Use appropriate `alt` attributes for image icons
- Consider using `loading="lazy"` for image icons to improve performance
- Ensure content in `.catalog-item-content` is meaningful and provides value to users
- Test hover functionality on touch devices and provide alternative interaction methods if needed

## Additional Notes

- The component automatically calculates and adjusts the content width based on the parent container size
- Window resize events are handled automatically to maintain proper responsive behavior
- The chevron indicator is purely decorative and implemented via CSS
- Content panels are positioned absolutely and may require container positioning context for proper display