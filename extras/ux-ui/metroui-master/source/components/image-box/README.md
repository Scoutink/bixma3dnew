# Image Box Component

The Image Box component provides a simple way to display images with various background properties. It automatically detects whether an image is portrait or landscape and applies appropriate classes.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<div data-role="image-box" data-image="path/to/image.jpg"></div>
```

### Image Box with Custom Options

```html
<div data-role="image-box" 
     data-image="path/to/image.jpg"
     data-size="contain"
     data-repeat="true"
     data-color="#f0f0f0"
     data-attachment="fixed"
     data-origin="content-box">
</div>
```

### Image Box with JavaScript Initialization

```javascript
Metro.makePlugin("#myImageBox", "image-box", {
    image: "path/to/image.jpg",
    size: "contain",
    repeat: true,
    color: "#f0f0f0",
    attachment: "fixed",
    origin: "content-box"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `image` | String | null | The URL of the image to display |
| `size` | String | "cover" | Background size property (cover, contain, auto, or specific dimensions) |
| `repeat` | Boolean | false | Whether to repeat the background image |
| `color` | String | "transparent" | Background color behind the image |
| `attachment` | String | "scroll" | Background attachment property (scroll, fixed, local) |
| `origin` | String | "border" | Background origin property (border-box, padding-box, content-box) |
| `onImageBoxCreate` | Function | Metro.noop | Callback function triggered after the image box is created |

## API Methods

+ `changeAttribute(attr, newValue)` - Changes an attribute of the image box and redraws the image.
+ `destroy()` - Destroys the component and returns the element.

#### Example of Method Usage

```javascript
// Get the component instance
const imageBox = Metro.getPlugin("#myImageBox", "image-box");

// Change the image
imageBox.changeAttribute("data-image", "path/to/new-image.jpg");

// Change the size
imageBox.changeAttribute("data-size", "contain");

// Destroy the component
imageBox.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onImageBoxCreate` | Triggered after the image box component is created |

## Available CSS Classes

### Base Classes
- `.image-box` - Base class for all image boxes

### Modifiers
- `.image-box__portrait` - Added when the image is taller than it is wide
- `.image-box__landscape` - Added when the image is wider than it is tall

## Global Configuration

You can set global defaults for all Image Box components using:

```javascript
Metro.imageBoxSetup({
    size: "contain",
    repeat: true,
    // other default options
});
```

## Best Practices

1. Always specify the image URL either through the `data-image` attribute or the `image` option
2. Choose the appropriate `size` value based on your layout needs:
   - Use "cover" when you want the image to fill the container (may crop parts of the image)
   - Use "contain" when you want to show the entire image (may leave empty space)
3. Set a background color that complements the image for areas where the image doesn't cover
4. Consider using "fixed" attachment for parallax-like effects
5. Use the automatically added portrait/landscape classes for responsive styling