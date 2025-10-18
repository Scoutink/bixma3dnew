# Image Carousel

The Image Carousel component provides an interactive image gallery with thumbnail navigation and smooth slide transitions. It automatically creates a carousel interface from a collection of images, featuring navigation buttons, clickable thumbnails, and customizable animations.

## Dependencies

This component requires the Metro UI core framework. No additional dependencies are needed.

## Usage

### Basic Usage

```html
<div data-role="image-carousel">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
    <img src="image4.jpg" alt="Image 4">
</div>
```

### With Custom Configuration

```html
<div data-role="image-carousel" 
     data-thumbnail-size="80" 
     data-animation-duration="500" 
     data-animation-easing="ease-in-out">
    <img src="image1.jpg" alt="Image 1">
    <img src="image2.jpg" alt="Image 2">
    <img src="image3.jpg" alt="Image 3">
</div>
```

### Programmatic Initialization

```javascript
const carousel = Metro.makePlugin("#my-carousel", "image-carousel", {
    thumbnailSize: 60,
    animationDuration: 400,
    onSlideChange: function(data) {
        console.log("Slide changed to index:", data.index);
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `thumbnailSize` | number | null | Size of thumbnail images in pixels. If not set, uses CSS default (54px) |
| `animationDuration` | number | 300 | Duration of slide transition animation in milliseconds |
| `animationEasing` | string | "linear" | Easing function for slide transitions |
| `onSlideChange` | function | Metro.noop | Callback function triggered when slide changes |
| `onCarouselCreate` | function | Metro.noop | Callback function triggered when carousel is created |

## API Methods

+ `goto(index, direction)` - Navigate to a specific slide by index. The direction parameter can be "next" or "prev" to control animation direction.

#### Example of Method Usage

```javascript
const carousel = Metro.getPlugin('#my-carousel', 'image-carousel');

// Navigate to the third slide (index 2) with next animation
carousel.goto(2, 'next');

// Navigate to the first slide (index 0) with previous animation
carousel.goto(0, 'prev');
```

## Events

| Event | Description |
| ----- | ----------- |
| `onCarouselCreate` | Fired when the carousel component is initialized and created |
| `onSlideChange` | Fired when the active slide changes. Receives data object with index, direction, currentSlide, and newSlide properties |

### Event Data Structure

The `onSlideChange` event provides the following data:

```json
{
    "index": 2,
    "direction": "next",
    "currentSlide": "[DOM Element]",
    "newSlide": "[DOM Element]"
}
```

- `index`: The index of the new active slide
- `direction`: Animation direction ("next" or "prev")
- `currentSlide`: The previous slide DOM element
- `newSlide`: The new active slide DOM element

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--image-carousel-switch-button` | SVG arrow icon | Same | Background image for navigation buttons |
| `--image-carousel-thumbnail-size` | 54px | Same | Default size for thumbnail images |
| `--image-carousel-background` | var(--default-background) | var(--default-background) | Background color of the carousel |
| `--image-carousel-scene-border-color` | var(--border-color) | var(--border-color) | Border color of the main scene area |
| `--image-carousel-thumbnail-border-color` | var(--border-color) | var(--border-color) | Border color of thumbnail images |
| `--image-carousel-thumbnail-active-border-color` | var(--color-emerald) | var(--color-emerald) | Border color of the active thumbnail |

### Example of Custom Styling

```css
#my-carousel {
    --image-carousel-thumbnail-size: 80px;
    --image-carousel-thumbnail-active-border-color: #ff6b6b;
    --image-carousel-background: #f8f9fa;
}
```

## Available CSS Classes

### Base Classes
- `.image-carousel` - Main container class applied automatically
- `.scene` - The main display area for the current image
- `.slide` - Individual slide container for each image
- `.thumbnails` - Container for all thumbnail images
- `.thumbnail` - Individual thumbnail container

### Navigation Classes
- `.prev-button` - Previous navigation button
- `.next-button` - Next navigation button
- `.cycle` - Applied to both navigation buttons

### State Classes
- `.current` - Applied to the currently active slide
- `.active` - Applied to the currently active thumbnail

## Additional Notes

- The component automatically hides the original `<img>` elements and creates its own structure
- The scene height is automatically set to match its width for a square aspect ratio
- Images are displayed with `object-fit: contain` to maintain aspect ratio
- Navigation buttons are only functional when there are multiple images
- Thumbnail clicking allows direct navigation to any slide
- The component prevents rapid clicking during animations to ensure smooth transitions

## Best Practices

- Use images with consistent aspect ratios for the best visual experience
- Provide meaningful `alt` attributes for accessibility
- Consider the thumbnail size in relation to the number of images to avoid overcrowding
- Test animation duration and easing with your specific use case
- Use the `onSlideChange` event to sync with other UI elements if needed
- Ensure images are optimized for web to improve loading performance
- Consider using lazy loading for carousels with many images