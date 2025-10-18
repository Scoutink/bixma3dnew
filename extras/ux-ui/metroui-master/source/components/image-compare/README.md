# Image Compare

The Image Compare component provides an interactive way to compare two images by sliding a divider between them. This is useful for before/after comparisons, showing differences between images, or highlighting changes.

## Dependencies

This component has no additional dependencies beyond the Metro UI core.

## Usage

### Basic Usage

```html
<div class="image-compare" data-role="image-compare">
    <img src="image1.jpg" alt="Before">
    <img src="image2.jpg" alt="After">
</div>
```

### JavaScript Initialization

```javascript
// Initialize with default options
Metro.makePlugin("#myImageCompare", "image-compare");

// Initialize with custom options
Metro.makePlugin("#myImageCompare", "image-compare", {
    width: "100%",
    height: "16/9",
    onSliderMove: function(e) {
        console.log("Slider moved to position:", e.x);
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `imageCompareDeferred` | number | 0 | Delay before initialization (milliseconds) |
| `width` | string | "100%" | Width of the component (CSS value or percentage) |
| `height` | string | "auto" | Height of the component (CSS value, percentage, or aspect ratio like "16/9", "21/9", "4/3") |
| `onSliderMove` | function | Metro.noop | Callback function triggered when the slider is moved |
| `onImageCompareCreate` | function | Metro.noop | Callback function triggered when the component is created |

## API Methods

+ `changeAttribute(attr, val)` - Changes the specified attribute of the component.
+ `destroy()` - Removes the component and its event handlers.

#### Example of Method Usage
```javascript
const imageCompare = Metro.getPlugin('#myImageCompare', 'image-compare');
imageCompare.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onSliderMove` | Triggered when the slider is moved. The event object contains the x-coordinate and left position of the slider. |
| `onImageCompareCreate` | Triggered when the component is created. The event object contains a reference to the element. |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `@orange` | Orange color | Same | Background color of the slider |

### Example of Custom Styling

```css
/* Custom styling for a specific image compare component */
#myImageCompare .image-slider {
    background-color: #ff0000; /* Red slider */
    opacity: 1;
}
```

## Available CSS Classes

### Base Classes
- `.image-compare` - The main container class for the component
- `.image-container` - Container for the first image
- `.image-container-overlay` - Container for the second image (overlay)
- `.image-slider` - The slider element that divides the two images
- `.image-wrapper` - Wrapper for each image

### Component Structure

The component creates the following structure:

```html
<div class="image-compare">
    <div class="image-container">
        <div class="image-wrapper" style="background-image: url(image1.jpg)"></div>
    </div>
    <div class="image-container-overlay">
        <div class="image-wrapper" style="background-image: url(image2.jpg)"></div>
    </div>
    <div class="image-slider"></div>
</div>
```

## Best Practices

1. Use high-quality images with the same dimensions for best results
2. Ensure the images being compared are aligned properly
3. Consider adding descriptive text near the component to explain what is being compared
4. Use appropriate image formats (JPEG for photos, PNG for graphics with transparency)