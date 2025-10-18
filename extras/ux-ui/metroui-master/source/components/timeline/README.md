# Timeline Component

The Timeline component provides a vertical timeline display for chronological events or activities. It's a simple, CSS-based component that creates a visual representation of a sequence of events with timestamps.

## Dependencies

This component has no external dependencies beyond the core Metro UI CSS framework.

## Usage

### Basic Usage

```html
<ul class="timeline">
    <li>
        <span class="time">10:00</span>
        <span class="data">Event description</span>
    </li>
    <li>
        <span class="time">11:30</span>
        <span class="data">Another event description</span>
    </li>
    <li class="timeline-end">
        <span class="time">14:45</span>
        <span class="data">Final event description</span>
    </li>
</ul>
```

### Example with Different Content Types

```html
<ul class="timeline">
    <li>
        <span class="time">Yesterday</span>
        <p class="data">
            Longer event description that spans multiple lines.
            This can include any HTML content within the data element.
        </p>
    </li>
    <li>
        <span class="time">13:00</span>
        <p class="data">
            <strong>Important event</strong> with formatted text.
        </p>
    </li>
    <li class="no-marker">
        <span class="time">14:00</span>
        <p class="data">
            This event has no marker dot.
        </p>
    </li>
    <li class="timeline-end">
        <a href="#" class="time">View more →</a>
    </li>
</ul>
```

## CSS Classes

### Base Classes
- `.timeline` - The main container class for the timeline component

### Item Classes
- `.time` - Used for displaying the time or date of an event
- `.data` - Used for displaying the event description or content

### Modifier Classes
- `.no-marker` - Add to a list item to hide its marker dot
- `.timeline-end` - Add to the last list item to hide the connecting line after it

## Styling with CSS Variables

The Timeline component can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
|----------|----------------|-----------|-------------|
| `--timeline-marker-color` | `#e8e8e8` | `#3d444d` | Controls the color of timeline markers and lines |
| `--timeline-time-color` | `#59636e` | `#9198a1` | Controls the color of the time text |
| `--timeline-color` | `#191919` | `#efefef` | Controls the color of the main content text |

### Example of Custom Styling

```css
/* Custom styling example */
.my-custom-timeline {
    --timeline-marker-color: #007bff;
    --timeline-time-color: #6c757d;
    --timeline-color: #212529;
}
```

## HTML Structure

The timeline component uses a simple HTML structure:

1. An unordered list with the class `.timeline`
2. List items (`<li>`) for each event in the timeline
3. Within each list item:
   - An element with class `.time` for the timestamp
   - An element with class `.data` for the event content

The component automatically creates the visual elements (connecting lines and marker dots) using CSS pseudo-elements.

## Accessibility Considerations

When implementing the timeline component, consider the following accessibility best practices:

- Use semantic HTML elements within the `.data` section
- Ensure sufficient color contrast between text and background
- Consider adding ARIA attributes if the timeline contains interactive elements