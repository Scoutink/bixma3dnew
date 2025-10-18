# Typer

The Typer component creates a typing animation effect that types out text, deletes it, and then types the next segment, with a blinking cursor. It's perfect for creating dynamic, attention-grabbing text elements on your website.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<span data-role="typer">Metro UI, Impressive Components Library, First in Metro Style</span>
```

### With Custom Colors

```html
<span data-role="typer" data-colors="#ed426d,#6d67c6,#b74033">Metro UI, Impressive Components Library, First in Metro Style</span>
```

### With Custom Typing Parameters

```html
<span data-role="typer" 
      data-splitter="|" 
      data-delay="200" 
      data-delete-delay="1000" 
      data-cursor="|">
    First phrase|Second phrase|Third phrase
</span>
```

### With Event Handler

```html
<span data-role="typer" data-on-type="onType">Metro UI, Impressive Components Library, First in Metro Style</span>

<script>
    function onType({word, char}) {
        console.log(`Currently typing word ${word}, character ${char}`);
    }
</script>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `splitter` | string | "," | Character used to split the text into segments |
| `variance` | number | 0 | Randomness in typing speed (0 means consistent speed) |
| `delay` | number | 100 | Delay in milliseconds between typing characters |
| `blinkDelay` | number | 400 | Delay in milliseconds for cursor blink |
| `deleteDelay` | number | 800 | Delay in milliseconds before deleting text |
| `loop` | boolean | true | Whether to loop through the text segments |
| `cursor` | string | "_" | Character used for the cursor |
| `colors` | string | "" | Comma-separated list of colors for text segments |
| `onType` | function | Metro.noop | Event handler called during typing |
| `onTyperCreate` | function | Metro.noop | Event handler called when the component is created |

## API Methods

+ `start()` - Starts the typing animation.
+ `stop()` - Stops the typing animation.
+ `destroy()` - Removes the element from the DOM.

### Example of Method Usage

```javascript
const typer = Metro.getPlugin('#myTyper', 'typer');
typer.stop(); // Stop the typing animation
typer.start(); // Start the typing animation again
```

## Events

| Event | Description |
| ----- | ----------- |
| `onType` | Triggered during typing with current word and character information |
| `onTyperCreate` | Triggered when the typer component is created |

## Styling with CSS Variables

This component doesn't use CSS variables for styling. You can customize its appearance using the available CSS classes.

## Available CSS Classes

### Base Classes
- `.typer` - The main container class for the typer component
- `.typer-text` - Class for the text being typed
- `.typer-cursor` - Class for the blinking cursor

### Example of Custom Styling

```css
/* Custom styling example */
.typer {
    font-size: 24px;
    font-weight: bold;
}

.typer-cursor {
    color: #ff0000;
}
```

## Additional Notes

The typer component can be used within any HTML element, not just span elements. For example, you can use it within heading elements for more prominent display:

```html
<h1>
    <span>Welcome to</span>
    <span data-role="typer" data-colors="#ed426d,#6d67c6,#b74033">Metro UI, Impressive Components Library, First in Metro Style</span>
</h1>
```

## Best Practices

- Use short, impactful phrases for better visual effect
- Consider using custom colors to match your website's theme
- Adjust typing speed and delays based on the content length and desired effect
- For longer text segments, consider using a larger delay to give users time to read
