# Lightbox Component

The Lightbox component provides an elegant way to display images in a fullscreen overlay. It includes navigation controls for browsing through multiple images, with support for image titles and responsive sizing to ensure optimal viewing on any device.

## Dependencies

This component requires:
- Metro UI core
- DOM library

## Usage

### Basic Usage

```html
<div data-role="lightbox">
    <img src="image1-thumb.jpg" data-original="image1-full.jpg" alt="Image Title 1">
    <img src="image2-thumb.jpg" data-original="image2-full.jpg" alt="Image Title 2">
    <img src="image3-thumb.jpg" data-original="image3-full.jpg" alt="Image Title 3">
</div>
```

### Custom Controls

```html
<div data-role="lightbox" 
     data-icon-close="✖" 
     data-icon-prev="◀" 
     data-icon-next="▶"
     data-cls-close="bg-red fg-white"
     data-cls-prev="bg-blue fg-white"
     data-cls-next="bg-blue fg-white">
    <img src="image1-thumb.jpg" data-original="image1-full.jpg" alt="Image Title 1">
    <img src="image2-thumb.jpg" data-original="image2-full.jpg" alt="Image Title 2">
</div>
```

### Programmatic Initialization

```javascript
Metro.makePlugin('#my-gallery', 'lightbox', {
    loop: true,
    iconClose: '✖',
    iconPrev: '◀',
    iconNext: '▶'
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `loop` | boolean | `true` | Whether to loop back to the first image after reaching the last one |
| `source` | string | `"img"` | Selector for items to include in the lightbox |
| `iconClose` | string | `"❌"` | HTML content for the close button |
| `iconPrev` | string | `"🡐"` | HTML content for the previous button |
| `iconNext` | string | `"🡒"` | HTML content for the next button |
| `clsNext` | string | `""` | Additional CSS class for the next button |
| `clsPrev` | string | `""` | Additional CSS class for the previous button |
| `clsClose` | string | `""` | Additional CSS class for the close button |
| `clsImage` | string | `""` | Additional CSS class for the image |
| `clsImageContainer` | string | `""` | Additional CSS class for the image container |
| `clsImageWrapper` | string | `""` | Additional CSS class for the image wrapper |
| `clsLightbox` | string | `""` | Additional CSS class for the lightbox container |
| `onDrawImage` | function | `Metro.noop` | Callback function triggered when an image is drawn in the lightbox |
| `onLightboxCreate` | function | `Metro.noop` | Callback function triggered when the lightbox is created |

## API Methods

### open(element)

Opens the lightbox with the specified element.

```javascript
var lightbox = Metro.getPlugin('#my-lightbox', 'lightbox');
lightbox.open(document.querySelector('#my-lightbox img:first-child'));
```

### close()

Closes the lightbox.

```javascript
var lightbox = Metro.getPlugin('#my-lightbox', 'lightbox');
lightbox.close();
```

### next()

Shows the next image in the lightbox.

```javascript
var lightbox = Metro.getPlugin('#my-lightbox', 'lightbox');
lightbox.next();
```

### prev()

Shows the previous image in the lightbox.

```javascript
var lightbox = Metro.getPlugin('#my-lightbox', 'lightbox');
lightbox.prev();
```

### destroy()

Destroys the lightbox component.

```javascript
var lightbox = Metro.getPlugin('#my-lightbox', 'lightbox');
lightbox.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDrawImage` | Triggered when an image is drawn in the lightbox |
| `onLightboxCreate` | Triggered when the lightbox is created |

## Styling with CSS

The Lightbox component uses the following CSS classes for styling:

### Base Classes
- `.lightbox-overlay` - The overlay background
- `.lightbox` - The main lightbox container
- `.lightbox__image` - The image container
- `.lightbox__image-wrapper` - The wrapper for the image
- `.lightbox__image-portrait` - Applied to portrait orientation images
- `.lightbox__image-landscape` - Applied to landscape orientation images

### Control Classes
- `.lightbox__closer` - The close button
- `.lightbox__prev` - The previous button
- `.lightbox__next` - The next button

## Examples

### Basic Lightbox

```html
<div data-role="lightbox">
    <img src="image1-thumb.jpg" data-original="image1-full.jpg" alt="Image Title 1">
    <img src="image2-thumb.jpg" data-original="image2-full.jpg" alt="Image Title 2">
    <img src="image3-thumb.jpg" data-original="image3-full.jpg" alt="Image Title 3">
</div>
```

### Lightbox with Custom Icons

```html
<div data-role="lightbox" data-icon-close="✖" data-icon-prev="◀" data-icon-next="▶">
    <img src="image1-thumb.jpg" data-original="image1-full.jpg" alt="Image Title 1">
    <img src="image2-thumb.jpg" data-original="image2-full.jpg" alt="Image Title 2">
</div>
```

### Lightbox with Custom Styling

```html
<div data-role="lightbox" 
     data-cls-close="bg-red fg-white" 
     data-cls-prev="bg-blue fg-white" 
     data-cls-next="bg-blue fg-white"
     data-cls-lightbox="custom-lightbox">
    <img src="image1-thumb.jpg" data-original="image1-full.jpg" alt="Image Title 1">
    <img src="image2-thumb.jpg" data-original="image2-full.jpg" alt="Image Title 2">
</div>
```

## Best Practices

1. Always provide `alt` attributes for images to serve as titles in the lightbox
2. Use `data-original` to specify high-resolution images for the lightbox view
3. For better performance with many images, consider using thumbnails for the gallery view
4. Use custom icons and styling to match your application's design language
5. Consider accessibility by ensuring navigation controls are clearly visible