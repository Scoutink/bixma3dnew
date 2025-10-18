# Viewport Check

A utility component that monitors whether an element is in the viewport and triggers events accordingly. This component is useful for implementing features like lazy loading, animations that trigger when elements come into view, or tracking when users see specific content.

## Dependencies

- Metro UI Core
- Metro Utils (for `inViewport` function)

## Usage

### Basic Usage

```html
<div data-role="viewport-check" id="my-element">
    Content to monitor
</div>
```

### With Event Handlers

```html
<div data-role="viewport-check"
     data-on-viewport="onViewport"
     data-on-viewport-enter="onViewportEnter"
     data-on-viewport-leave="onViewportLeave">
    Content to monitor
</div>
```

```javascript
function onViewport(event, data) {
    console.log("Viewport state changed:", data.state);
}

function onViewportEnter() {
    console.log("Element entered the viewport");
}

function onViewportLeave() {
    console.log("Element left the viewport");
}
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `onViewport` | function | `Metro.noop` | Callback when viewport state changes. Receives event object and data with current state. |
| `onViewportEnter` | function | `Metro.noop` | Callback when element enters the viewport. |
| `onViewportLeave` | function | `Metro.noop` | Callback when element leaves the viewport. |
| `onViewportCheckCreate` | function | `Metro.noop` | Callback when component is created. |

## Events

| Event | Data | Description |
| ----- | ---- | ----------- |
| `viewport-check-create` | `{}` | Fired after component creation |
| `viewport` | `{state: boolean}` | Fired when viewport state changes |
| `viewport-enter` | `{}` | Fired when element enters the viewport |
| `viewport-leave` | `{}` | Fired when element leaves the viewport |

## API Methods

### Accessing the Component API

```javascript
var check = $("#my-element").data("viewport-check");
```

### Methods

+ `state()` - Returns a boolean indicating whether the element is currently in the viewport.

#### Example of Method Usage

```javascript
var check = $("#my-element").data("viewport-check");
if (check.state()) {
    console.log("Element is in viewport");
}
```

## Global Configuration

You can globally configure the viewport-check component using the `Metro.viewportCheckSetup` method:

```javascript
Metro.viewportCheckSetup({
    onViewport: function() {
        console.log("Default behavior for all viewport-check components");
    }
});
```

## Use Cases

### Lazy Loading Images

```html
<img data-role="viewport-check"
     data-on-viewport-enter="loadImage"
     data-src="path/to/image.jpg"
     src="placeholder.jpg">
```

```javascript
function loadImage(event) {
    var img = $(event.target);
    var src = img.attr("data-src");
    if (src) {
        img.attr("src", src);
        img.removeAttr("data-src");
    }
}
```

### Triggering Animations

```html
<div class="animated-element"
     data-role="viewport-check"
     data-on-viewport-enter="startAnimation">
    Content to animate
</div>
```

```javascript
function startAnimation(event) {
    $(event.target).addClass("animate");
}
```

### Analytics Tracking

```html
<section id="important-content" data-role="viewport-check" data-on-viewport-enter="trackView">
    Important content
</section>
```

```javascript
function trackView(event) {
    var elementId = $(event.target).attr("id");
    // Send analytics event
    analytics.track("Content Viewed", {
        elementId: elementId
    });
    
    // Optional: Remove the tracking after first view
    var component = $(event.target).data("viewport-check");
    component.destroy();
}
```