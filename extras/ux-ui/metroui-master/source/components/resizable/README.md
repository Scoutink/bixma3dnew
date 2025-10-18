# Resizable Component

The Resizable component allows elements to be resized by the user through a draggable handle. It provides a simple way to make any element resizable with customizable constraints and events.

## Dependencies

- Metro UI Core
- DOM module

## Usage

### Basic Usage

```html
<!-- Basic resizable element -->
<div data-role="resizable" style="width: 300px; height: 200px; background-color: #f0f0f0; position: relative;">
    Drag the bottom-right corner to resize this element
</div>
```

### Additional Configurations

```html
<!-- Resizable with constraints -->
<div data-role="resizable" 
     data-min-width="200" 
     data-min-height="100"
     data-max-width="500"
     data-max-height="400"
     style="width: 300px; height: 200px; background-color: #f0f0f0; position: relative;">
    Resizable with min/max constraints
</div>

<!-- Resizable with custom resize handle -->
<div data-role="resizable" data-resize-element=".custom-handle" style="width: 300px; height: 200px; background-color: #f0f0f0; position: relative;">
    <div class="custom-handle" style="position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; background-color: #007bff; cursor: nwse-resize;"></div>
    Resizable with custom handle
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `resizableDeferred` | number | 0 | Deferred initialization time in milliseconds |
| `canResize` | boolean | true | Whether the element can be resized |
| `resizeElement` | string | ".resize-element" | Selector for the resize handle element |
| `minWidth` | number | 0 | Minimum width of the element (0 for no limit) |
| `minHeight` | number | 0 | Minimum height of the element (0 for no limit) |
| `maxWidth` | number | 0 | Maximum width of the element (0 for no limit) |
| `maxHeight` | number | 0 | Maximum height of the element (0 for no limit) |
| `preserveRatio` | boolean | false | Whether to preserve the aspect ratio when resizing |

## API Methods

+ `on()` - Enables resizing for the element.
+ `off()` - Disables resizing for the element.
+ `destroy()` - Destroys the resizable component and removes event listeners.

### Example of Method Usage

```javascript
const resizable = Metro.getPlugin('#myElement', 'resizable');
resizable.on();  // Enable resizing
resizable.off(); // Disable resizing
```

## Events

| Event | Description |
| --- | --- |
| `onResizeStart` | Triggered when resizing starts |
| `onResizeStop` | Triggered when resizing stops |
| `onResize` | Triggered during resizing |
| `onResizableCreate` | Triggered when the resizable component is created |

## Styling with CSS Variables

The Resizable component uses the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| `@green` | Green color | - | Color of the resize handle |
| `@gray` | Gray color | - | Color of the disabled resize handle |

## Available CSS Classes

### Base Classes
- `.resizable-element` - Applied to the element that is made resizable
- `.resize-element` - The default resize handle element
- `.resize-element-disabled` - Applied to the resize handle when resizing is disabled

### Default Resize Handle Styling

The default resize handle is a small triangle in the bottom-right corner of the element:

```css
.resize-element {
    display: block;
    position: absolute;
    right: -1px;
    bottom: -1px;
    z-index: 101;
    cursor: nwse-resize;
    width: 12px;
    height: 12px;
}

.resize-element::after {
    position: absolute;
    display: block;
    border-bottom: 12px solid green;
    border-left: 12px solid transparent;
    content: "";
    right: -2px;
    bottom: -2px;
}

.resize-element.resize-element-disabled {
    cursor: default;
}

.resize-element.resize-element-disabled::after {
    border-bottom-color: gray;
}
```

### Custom Resize Handle

You can create a custom resize handle by specifying the `resizeElement` parameter and styling your custom element:

```html
<div data-role="resizable" data-resize-element=".my-handle" style="position: relative;">
    <div class="my-handle"></div>
    Content here
</div>
```

```css
.my-handle {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: #007bff;
    cursor: nwse-resize;
    border-radius: 0 0 4px 0;
}
```

## Complete Example

```html
<div id="resizableBox" data-role="resizable" 
     data-min-width="200" 
     data-min-height="150"
     style="width: 400px; height: 300px; background-color: #e0f7fa; border: 1px solid #00bcd4; padding: 16px; position: relative;">
    <h3>Resizable Content</h3>
    <p>Drag the bottom-right corner to resize this box.</p>
    <div id="sizeInfo" style="position: absolute; bottom: 20px; left: 16px; font-size: 12px;"></div>
</div>

<script>
    Metro.init(function(){
        const box = Metro.getPlugin('#resizableBox', 'resizable');
        const sizeInfo = $('#sizeInfo');
        
        box.options.onResize = function(e){
            sizeInfo.html('Width: ' + e.size.width + 'px, Height: ' + e.size.height + 'px');
        };
        
        box.options.onResizeStop = function(e){
            console.log('Final size:', e.size);
        };
    });
</script>
```

## Best Practices

1. Always set `position: relative` (or absolute/fixed) on the resizable element to ensure proper positioning of the resize handle
2. Consider setting minimum dimensions to prevent elements from becoming too small to be usable
3. Use the `onResize` event to update content or perform calculations based on the new size
4. For performance reasons, avoid heavy operations during the `onResize` event; consider using `onResizeStop` instead
5. When creating custom resize handles, ensure they have appropriate cursor styles to indicate resizability
6. If your element contains interactive elements near the bottom-right corner, consider using a custom resize handle in a different position