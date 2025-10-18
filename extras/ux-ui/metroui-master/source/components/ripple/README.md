# Ripple Component

The Ripple component adds a material design-inspired ripple effect to elements when they are clicked. This provides visual feedback to user interactions, enhancing the user experience.

## Dependencies

- Metro UI Core
- Farbe (for color manipulation)

## Usage

### Basic Usage

```html
<!-- Add ripple effect to a button -->
<button class="button" data-role="ripple">Button with Ripple</button>

<!-- Add ripple effect to any element -->
<div class="card" data-role="ripple">
    <div class="card-content">
        Card with Ripple Effect
    </div>
</div>
```

### Customizing Ripple Color

```html
<!-- Custom ripple color -->
<button class="button" data-role="ripple" data-ripple-color="#ff5252">
    Red Ripple
</button>

<!-- Custom ripple with opacity -->
<div class="card" data-role="ripple" data-ripple-color="#0078d7" data-ripple-alpha="0.6">
    Card with Blue Ripple
</div>
```

### Targeting Child Elements

```html
<!-- Ripple effect on specific child elements -->
<div data-role="ripple" data-ripple-target=".ripple-target">
    <div class="ripple-target">This will have ripple effect</div>
    <div>This will not have ripple effect</div>
    <div class="ripple-target">This will have ripple effect</div>
</div>
```

### Programmatic Usage

```javascript
// Trigger ripple on an element with default settings
Metro.ripple("#myElement");

// Trigger ripple with custom color and opacity
Metro.ripple("#myElement", "#ff5252", 0.6);

// Trigger ripple at a specific position (using an event object)
element.addEventListener("mousedown", function(e) {
    Metro.ripple(this, "#0078d7", 0.5, e);
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `rippleDeferred` | Number | 0 | Delay before the ripple effect starts (in milliseconds) |
| `rippleColor` | String | "#fff" | Color of the ripple effect |
| `rippleAlpha` | Number | 0.4 | Opacity of the ripple effect (0-1) |
| `rippleTarget` | String | "default" | Selector for child elements that should receive the ripple effect. If "default", the effect applies to the element itself |
| `onRippleCreate` | Function | Metro.noop | Callback function triggered when the ripple is created |

## API Methods

+ `Metro.rippleSetup(options)` - Configure global default options for all ripple components.
+ `Metro.ripple(target, color, alpha, event)` - Manually trigger a ripple effect on an element.

### Example of Method Usage

```javascript
// Configure global defaults
Metro.rippleSetup({
    rippleColor: "#0078d7",
    rippleAlpha: 0.5
});

// Get the ripple component instance
const ripple = Metro.getPlugin("#myElement", "ripple");

// Manually trigger ripple effect
Metro.ripple("#myElement");
```

## Events

| Event | Description |
| ----- | ----------- |
| `onRippleCreate` | Triggered when the ripple effect is created |

## Styling with CSS Variables

The ripple component doesn't use CSS variables directly, but you can customize its appearance through the plugin parameters.

## Available CSS Classes

### Base Classes
- `.ripple` - The base ripple element that creates the circular effect
- `.rippleEffect` - Applied to the ripple when the animation is active

### Animation
The component uses a keyframe animation called `rippleDrop` that scales the ripple and fades it out over 0.5 seconds.

```css
@keyframes rippleDrop {
    100% {
        transform: scale(2.5);
        opacity: 0;
    }
}
```

## HTML Attributes

| Attribute | Description |
| --------- | ----------- |
| `data-role="ripple"` | Initializes the ripple component on an element |
| `data-ripple-color` | Sets the color of the ripple effect |
| `data-ripple-alpha` | Sets the opacity of the ripple effect (0-1) |
| `data-ripple-target` | Selector for child elements that should receive the ripple effect |

## Accessibility

The ripple effect is purely visual and doesn't affect the accessibility of the elements it's applied to. It provides additional visual feedback for interactions but doesn't change the semantic meaning or keyboard accessibility of the elements.

## Best Practices

1. Use ripple effects on interactive elements like buttons, cards, and list items
2. Choose ripple colors that provide good contrast against the background
3. Consider using a slightly lower alpha value (0.2-0.3) for subtle effects
4. Avoid using ripple effects on elements that aren't interactive, as this may confuse users