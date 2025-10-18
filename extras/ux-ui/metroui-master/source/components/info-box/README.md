# Info Box Component

The Info Box component provides a versatile modal dialog for displaying information, alerts, warnings, and success messages to users. It supports customizable content, overlay, and automatic closing.

## Dependencies

This component requires:
- Metro UI core
- Farbe module for color handling
- Colors CSS module

## Usage

### Basic Usage

```html
<!-- Basic info box -->
<div data-role="info-box">
    <div class="info-box-content">
        This is a basic info box with default settings.
    </div>
</div>

<!-- Info box with specific type -->
<div data-role="info-box" data-type="success">
    <div class="info-box-content">
        Operation completed successfully!
    </div>
</div>
```

### JavaScript Initialization

```javascript
// Initialize with default options
$("#myInfoBox").infobox();

// Initialize with custom options
$("#myInfoBox").infobox({
    type: "alert",
    width: 400,
    overlay: true,
    overlayClickClose: true,
    autoHide: 5000
});

// Create info box dynamically
Metro.infobox.create(
    "Your message here", 
    "success", 
    {
        overlayClickClose: true,
        autoHide: 3000
    }
);
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `infoboxDeferred` | number | 0 | Delay in milliseconds before initializing the component |
| `type` | string | "" | Type of info box (success, info, alert, warning) |
| `width` | number | 480 | Width of the info box in pixels |
| `height` | string/number | "auto" | Height of the info box |
| `overlay` | boolean | true | Whether to show an overlay behind the info box |
| `overlayColor` | string | "#000000" | Color of the overlay |
| `overlayAlpha` | number | 0.5 | Opacity of the overlay (0-1) |
| `overlayClickClose` | boolean | false | Whether clicking the overlay closes the info box |
| `autoHide` | number | 0 | Time in milliseconds after which the info box auto-closes (0 = no auto-hide) |
| `removeOnClose` | boolean | false | Whether to remove the info box from the DOM when closed |
| `closeButton` | boolean | true | Whether to show a close button |
| `clsBox` | string | "" | Additional CSS class for the info box |
| `clsBoxContent` | string | "" | Additional CSS class for the info box content |
| `clsOverlay` | string | "" | Additional CSS class for the overlay |

## Events

| Event | Description |
| ----- | ----------- |
| `onOpen` | Triggered when the info box is opened |
| `onClose` | Triggered when the info box is closed |
| `onInfoBoxCreate` | Triggered after the info box is created |

## API Methods

### Component Methods

| Method | Description |
| ------ | ----------- |
| `open()` | Opens the info box |
| `close()` | Closes the info box |
| `setContent(content)` | Sets the content of the info box |
| `setType(type)` | Sets the type of the info box (success, info, alert, warning) |
| `reposition()` | Repositions the info box in the center of the screen |
| `isOpen()` | Returns whether the info box is open |

### Static Methods

| Method | Description |
| ------ | ----------- |
| `Metro.infobox.open(element, content, type)` | Opens an info box with optional content and type |
| `Metro.infobox.close(element)` | Closes an info box |
| `Metro.infobox.setContent(element, content)` | Sets the content of an info box |
| `Metro.infobox.setType(element, type)` | Sets the type of an info box |
| `Metro.infobox.isOpen(element)` | Returns whether an info box is open |
| `Metro.infobox.create(content, type, options, open)` | Creates a new info box with content, type, options, and open state |

## Global Configuration

You can set global defaults for all Info Box components using:

```javascript
Metro.infoBoxSetup({
    width: 400,
    overlayClickClose: true,
    // other options
});
```

## Styling with CSS Variables

The Info Box component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--info-box-border-radius` | 6px | 6px | Border radius of the info box |
| `--info-box-background` | var(--default-background) | var(--default-background) | Background color of the info box |
| `--info-box-color` | var(--default-color) | var(--default-color) | Text color of the info box |
| `--info-box-border-color` | var(--border-color) | var(--border-color) | Border color of the info box |

### More Info Box Variant

The More Info Box variant can be styled using these additional CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--more-info-box-border-radius` | 6px | 6px | Border radius of the more info box |
| `--more-info-box-background` | var(--default-background) | gradient | Background of the more info box |
| `--more-info-box-color` | var(--default-color) | var(--default-color) | Text color of the more info box |
| `--more-info-box-icon-color` | rgba(0,0,0,0.15) | rgba(0,0,0,0.15) | Icon color in the more info box |
| `--more-info-box-more-background` | rgba(0,0,0,0.1) | rgba(0,0,0,0.1) | Background of the "more" section |
| `--more-info-box-more-color` | rgba(255,255,255,0.8) | rgba(255,255,255,0.8) | Text color of the "more" section |
| `--more-info-box-border-color` | var(--border-color) | var(--border-color) | Border color of the more info box |

### Example of Custom Styling

```css
/* Custom styling for a specific info box */
#myCustomInfoBox {
    --info-box-background: #e3f2fd;
    --info-box-color: #0d47a1;
    --info-box-border-color: #bbdefb;
    --info-box-border-radius: 10px;
}
```

## Available CSS Classes

### Base Classes
- `.info-box` - The main info box container
- `.info-box-content` - The content container within the info box
- `.closer` - The close button element

### Type Modifiers
- `.success` - Success message style
- `.info` - Information message style
- `.alert` - Alert message style
- `.warning` - Warning message style

### Additional Info Box Variants
- `.info-box2` - A simpler variant with title and value sections
- `.more-info-box` - A variant with icon and "more" section

## Example Use Cases

### Alert Messages

```javascript
// Show a warning message
Metro.infobox.create(
    "<h4>Warning</h4><p>Your session will expire in 5 minutes.</p>", 
    "warning", 
    {
        autoHide: 10000,
        closeButton: true
    }
);
```

### Confirmation Dialogs

```html
<div id="confirmDialog" data-role="info-box" data-overlay-click-close="false">
    <div class="info-box-content">
        <h4>Confirm Action</h4>
        <p>Are you sure you want to delete this item?</p>
        <div class="actions">
            <button class="button js-dialog-close">Cancel</button>
            <button class="button alert js-confirm-action">Delete</button>
        </div>
    </div>
</div>

<script>
    $(".js-confirm-action").on("click", function(){
        // Perform delete action
        Metro.infobox.close("#confirmDialog");
    });
</script>
```

## Best Practices

1. Use appropriate types (success, info, alert, warning) to convey the right message context
2. Keep messages concise and clear
3. For critical messages, disable auto-hide and require user interaction
4. Consider using overlayClickClose: false for important messages to ensure user attention
5. For mobile devices, adjust the width to ensure proper display on smaller screens