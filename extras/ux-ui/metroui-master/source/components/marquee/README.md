# Marquee Component

The Marquee component provides a modern implementation of scrolling text or content, similar to the classic HTML marquee element but with more features and control options. It supports multiple directions, easing functions, and animation modes.

## Dependencies

- @olton/farbe - Color utility library

## Usage

### Basic Usage

```html
<div data-role="marquee">
    Item 1
    Item 2
    Item 3
</div>
```

### Additional Configurations

```html
<div data-role="marquee"
     data-duration="4000"
     data-direction="left"
     data-height="100"
     data-mode="accent"
     data-ease="easeOutBounce easeInElastic">
    <div>Hi Guys!</div>
    <div>This is a demo of Marquee component</div>
    <div>Marquee support different directions</div>
    <div>You can define colors for marquee</div>
    <div>Use <code>accent</code> mode to accenting</div>
</div>
```

### Using JavaScript Array for Items

```html
<div id="my-marquee" data-role="marquee"></div>

<script>
    var items = [
        'Item 1',
        'Item 2',
        'Item 3'
    ];
    
    $(function(){
        var marquee = Metro.getPlugin('#my-marquee', 'marquee');
        marquee.setItems(items);
    });
</script>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `items` | array | null | Items to display in the marquee (alternative to HTML content) |
| `loop` | boolean | true | Whether to loop the marquee animation |
| `height` | string | "auto" | Height of the marquee container |
| `width` | string | "100%" | Width of the marquee container |
| `duration` | number | 10000 | Duration of the animation in milliseconds |
| `direction` | string | "left" | Direction of the marquee ("left", "right", "up", "down") |
| `ease` | string | "linear" | Easing function for the animation |
| `mode` | string | "default" | Mode of the marquee ("default" or "accent") |
| `accentPause` | number | 2000 | Pause time for accent mode in milliseconds |
| `firstPause` | number | 1000 | Pause time before the first item in milliseconds |
| `stopOnHover` | boolean | true | Whether to stop the marquee on hover |
| `splitBy` | string | "\n" | Character to split text content by when using plain text |
| `clsMarquee` | string | "" | Additional CSS class for the marquee container |
| `clsMarqueeItem` | string | "" | Additional CSS class for marquee items |

## API Methods

+ `setItems(items, replace)` - Sets the items for the marquee. If `replace` is true (default), replaces all existing items.
+ `setItem(index, value)` - Sets a specific item at the given index.
+ `addItem(item, index)` - Adds an item to the marquee. If index is provided, inserts at that position, otherwise appends to the end.
+ `start()` - Starts the marquee animation.
+ `stop()` - Stops the marquee animation.
+ `destroy()` - Destroys the marquee component.

### Example of Method Usage

```javascript
const marquee = Metro.getPlugin('#my-marquee', 'marquee');

// Set new items
marquee.setItems(['New Item 1', 'New Item 2'], true);

// Update a specific item
marquee.setItem(0, 'Updated Item');

// Add a new item
marquee.addItem('Additional Item');

// Stop and start the animation
marquee.stop();
marquee.start();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onMarqueeItem` | Triggered when a marquee item is shown |
| `onMarqueeItemComplete` | Triggered when a marquee item animation is complete |
| `onMarqueeComplete` | Triggered when the marquee animation is complete |
| `onMarqueeCreate` | Triggered when the marquee is created |

## Styling with CSS Classes

### Base Classes
- `.marquee` - Base class for the component
- `.marquee__item` - Class for each marquee item
- `.moveLeftRight` - Class for items moving left or right
- `.moveUpDown` - Class for items moving up or down

### Example of Custom Styling

```css
/* Custom styling example */
.my-custom-marquee {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    height: 100px;
}

.my-custom-marquee .marquee__item {
    font-weight: bold;
    color: #0366d6;
}
```

## Best Practices

1. Use appropriate duration values based on the length of your content
2. Consider using the `stopOnHover` option to improve user experience
3. For vertical scrolling, set an explicit height for the marquee container
4. Use the accent mode for important announcements that need user attention
5. For responsive designs, consider adjusting the duration based on screen size