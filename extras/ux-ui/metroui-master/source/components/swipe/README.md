# Swipe Component

The Swipe Component adds touch and mouse swipe gesture detection to elements. It allows you to detect swipe gestures in four directions: left, right, up, and down.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<div id="swipeElement" data-role="swipe">
    <div class="p-4">
        Swipe me in any direction
    </div>
</div>
```

### With Event Handler

```html
<div data-role="swipe" data-on-swipe="mySwipeHandler">
    <div class="p-4">
        Swipe me in any direction
    </div>
</div>

<script>
    function mySwipeHandler(start, swipe, direction) {
        console.log('Swiped in direction:', direction);
    }
</script>
```

### JavaScript Initialization

```javascript
// Initialize with JavaScript
Metro.makePlugin('#swipeElement', 'swipe', {
    swipeThreshold: 50,
    onSwipe: function(event, data) {
        console.log('Swipe detected in direction:', data.direction);
    },
    onSwipeLeft: function(event, data) {
        console.log('Swiped left!');
    },
    onSwipeRight: function(event, data) {
        console.log('Swiped right!');
    },
    onSwipeUp: function(event, data) {
        console.log('Swiped up!');
    },
    onSwipeDown: function(event, data) {
        console.log('Swiped down!');
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `swipeThreshold` | Number | 32 | The minimum distance (in pixels) required for a swipe to be detected |

## API Methods

+ `destroy()` - Removes the element from the DOM.

#### Example of Method Usage

```javascript
const swipeComponent = Metro.getPlugin('#swipeElement', 'swipe');
swipeComponent.destroy();
```

## Events

| Event | Description |
|-------|-------------|
| `onSwipe` | Triggered for any swipe direction with direction information |
| `onSwipeRight` | Triggered specifically for right swipes |
| `onSwipeLeft` | Triggered specifically for left swipes |
| `onSwipeUp` | Triggered specifically for upward swipes |
| `onSwipeDown` | Triggered specifically for downward swipes |
| `onSwipeCreate` | Triggered when the swipe component is created |

### Event Data

The event callbacks receive data with the following properties:

#### For onSwipe:

```javascript
{
    start: {x: Number, y: Number}, // Starting coordinates of the swipe
    swipe: {x: Number, y: Number}, // Swipe distance in x and y directions
    direction: String // Direction of the swipe: "left", "right", "up", or "down"
}
```

#### For direction-specific events (onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown):

```javascript
{
    start: {x: Number, y: Number}, // Starting coordinates of the swipe
    swipe: {x: Number, y: Number}  // Swipe distance in x and y directions
}
```

## Styling with CSS Variables

This component does not have specific CSS variables for styling as it's primarily a behavior component that adds gesture detection functionality.

## Available CSS Classes

This component does not add any specific CSS classes beyond setting `user-select: none` on the element to prevent text selection during swipe gestures.

## Notes

- The component automatically adds `user-select: none` to the element to prevent text selection during swipe gestures.
- The component works with both touch events (for mobile devices) and mouse events (for desktop).
- Swipe detection is based on the distance moved in pixels compared to the swipeThreshold value.