# Flip Card Component

The Flip Card component is a purely CSS-based component that creates a card with front and back sides that can be flipped either horizontally or vertically. The flip effect can be triggered on hover or when the card has an "active" class.

## Dependencies

This component has no dependencies other than the core Metro UI CSS variables.

## Usage

### Basic Usage

```html
<div class="flip-card">
    <div class="front">
        <!-- Front content goes here -->
    </div>
    <div class="back">
        <!-- Back content goes here -->
    </div>
</div>
```

### Vertical Flip on Hover

```html
<div class="flip-card effect-on-hover">
    <div class="front">
        <h3>Front Side</h3>
        <p>This is the front content of the card.</p>
    </div>
    <div class="back">
        <h3>Back Side</h3>
        <p>This is the back content of the card.</p>
    </div>
</div>
```

### Horizontal Flip with Active State

```html
<div class="flip-card flip-horizontal effect-on-active">
    <div class="front">
        <h3>Front Side</h3>
        <p>Click a button to activate the flip.</p>
    </div>
    <div class="back">
        <h3>Back Side</h3>
        <p>This is the back content of the card.</p>
    </div>
</div>
```

To trigger the flip effect with JavaScript:

```javascript
// Select the flip card
const flipCard = document.querySelector('.flip-card.effect-on-active');

// Toggle the active class to flip the card
flipCard.classList.toggle('active');
```

## Plugin Parameters

This component is CSS-only and does not have JavaScript plugin parameters.

## API Methods

This component is CSS-only and does not have JavaScript API methods.

## Events

This component is CSS-only and does not have JavaScript events.

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `@defaultAnimationSpeed` | `.3s` | Same | The duration of the flip animation |
| `@defaultPerspective` | `600px` | Same | The perspective value for the 3D effect |

### Example of Custom Styling

```css
:root {
    --defaultAnimationSpeed: 0.5s; /* Slower animation */
    --defaultPerspective: 1000px; /* More dramatic perspective */
}
```

## Available CSS Classes

### Base Classes
- `.flip-card` - The main container class for the flip card component
- `.front` - The front side of the card
- `.back` - The back side of the card

### Modifiers
- `.flip-horizontal` - Makes the card flip horizontally (by default, the card flips vertically)
- `.effect-on-hover` - Triggers the flip effect when the user hovers over the card
- `.effect-on-active` - Triggers the flip effect when the card has the `active` class

## Notes

- The flip card requires a defined width and height to work properly
- Both the front and back sides are absolutely positioned within the container
- The component uses CSS 3D transforms for the flip effect
- The flip effect is triggered either on hover or by adding/removing the `active` class