# Image Grid

The Image Grid component provides a responsive way to display a collection of images in a grid layout. It automatically classifies images as portrait or landscape based on their dimensions and arranges them accordingly.

## Dependencies

None

## Usage

### Basic Usage

```html
<div class="image-grid">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
</div>
```

### Half-Size Grid

```html
<div class="image-grid half-size">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
</div>
```

### JavaScript Initialization

```javascript
// Initialize with default options
Metro.makePlugin(element, "image-grid");

// Initialize with custom options
Metro.makePlugin(element, "image-grid", {
    useBackground: true,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    onItemClick: function(e) {
        console.log("Item clicked:", e.item);
    }
});
```

### With Data Attributes

```html
<div data-role="image-grid" 
     data-use-background="true"
     data-cls-image-grid-item="border bd-white border-1">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `useBackground` | boolean | false | If true, images are displayed as background images of their containers |
| `backgroundSize` | string | "cover" | CSS background-size property when useBackground is true |
| `backgroundPosition` | string | "top left" | CSS background-position property when useBackground is true |
| `clsImageGrid` | string | "" | Additional CSS class for the grid container |
| `clsImageGridItem` | string | "" | Additional CSS class for grid items |
| `clsImageGridImage` | string | "" | Additional CSS class for images |

## API Methods

+ `changeAttribute(attr, val)` - Changes the specified attribute of the component. Supported attributes: data-use-background, data-background-size, data-background-position.
+ `destroy()` - Removes the component and its event handlers.

#### Example of Method Usage
```javascript
const imageGrid = Metro.getPlugin('#myImageGrid', 'image-grid');
imageGrid.changeAttribute('data-use-background', 'true');
```

## Events

| Event | Description |
| ----- | ----------- |
| `onItemClick` | Triggered when a grid item is clicked |
| `onDrawItem` | Triggered when a grid item is drawn |
| `onImageGridCreate` | Triggered when the component is created |

## Available CSS Classes

### Base Classes
- `.image-grid` - Main container class with flex display
- `.image-grid__item` - Container for each image
- `.image-grid__item-landscape` - Applied to landscape-oriented images (320px × 180px)
- `.image-grid__item-portrait` - Applied to portrait-oriented images (160px × 180px)

### Modifiers
- `.half-size` - Makes grid items half their normal size (landscape: 160px × 90px, portrait: 80px × 90px)

## Component Structure

The component creates the following structure:

```html
<div class="image-grid">
    <div class="image-grid__item image-grid__item-landscape">
        <img src="image1.jpg" alt="Image 1">
    </div>
    <div class="image-grid__item image-grid__item-portrait">
        <img src="image2.jpg" alt="Image 2">
    </div>
    <!-- More items... -->
</div>
```

When `useBackground` is set to `true`:

```html
<div class="image-grid">
    <div class="image-grid__item image-grid__item-landscape" 
         style="background: url(image1.jpg); background-repeat: no-repeat; background-size: cover; background-position: top left;"
         data-original="image1.jpg" data-title="Image 1">
        <img src="image1.jpg" alt="Image 1" style="display: none;">
    </div>
    <!-- More items... -->
</div>
```

## Best Practices

1. Use images with good quality but optimized for web to ensure fast loading
2. Consider using the `half-size` class for grids with many images or on smaller screens
3. Use the `useBackground` option when you need more control over how images are displayed
4. Provide meaningful `alt` attributes for all images for better accessibility
5. Use the `onItemClick` callback to implement lightbox or detailed view functionality