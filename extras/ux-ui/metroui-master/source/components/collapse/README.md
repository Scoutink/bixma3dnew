# Collapse Component

The Collapse component provides a way to toggle the visibility of content with smooth animations. It's commonly used for accordion-style interfaces, expandable panels, and other UI elements that need to show or hide content.

## Usage

### Basic Collapse

```html
<!-- Basic collapse structure -->
<div class="collapse-toggle">Toggle Content</div>
<div data-role="collapse">
    <p>This content can be collapsed or expanded.</p>
</div>
```

### Custom Toggle Element

```html
<!-- Using a custom toggle element -->
<button id="customToggle">Toggle Content</button>
<div data-role="collapse" data-toggle-element="#customToggle">
    <p>This content is toggled by a custom element.</p>
</div>
```

### Initially Collapsed

```html
<!-- Initially collapsed content -->
<div class="collapse-toggle">Toggle Content</div>
<div data-role="collapse" data-collapsed="true">
    <p>This content is initially hidden.</p>
</div>
```

## Plugin Parameters

The Collapse component can be configured with the following options:

| Parameter | Type | Default | Description |
| ------ | ------- | ------- | ----------- |
| `collapseDeferred` | number | 0 | Delay in milliseconds before the collapse action starts |
| `collapsed` | boolean | false | Whether the element should be initially collapsed |
| `toggleElement` | string/boolean | false | Selector for a custom toggle element (if not using the default adjacent toggle) |
| `duration` | number | 100 | Duration of the collapse/expand animation in milliseconds |

### Event Callbacks

| Callback | Description |
| -------- | ----------- |
| `onExpand` | Triggered when the element is expanded |
| `onCollapse` | Triggered when the element is collapsed |
| `onCollapseCreate` | Triggered when the collapse component is created |

### Example of Configuration

```javascript
// Global setup
Metro.collapseSetup({
    duration: 300,
    collapsed: true
});

// Individual element setup via JavaScript
const collapseElement = Metro.makePlugin("#myCollapse", "collapse", {
    duration: 500,
    collapsed: true
});
```

## API Methods

The Collapse component provides the following API methods:

### collapse(immediate)

Collapses the element. If `immediate` is true, collapses without animation.

```javascript
// Get the collapse component
const collapse = Metro.getPlugin('#myCollapse', 'collapse');

// Collapse with animation
collapse.collapse();

// Collapse immediately without animation
collapse.collapse(true);
```

### expand(immediate)

Expands the element. If `immediate` is true, expands without animation.

```javascript
// Expand with animation
collapse.expand();

// Expand immediately without animation
collapse.expand(true);
```

### close(immediate)

Alias for `collapse()`.

### open(immediate)

Alias for `expand()`.

### isCollapsed()

Returns true if the element is currently collapsed.

```javascript
// Check if element is collapsed
if (collapse.isCollapsed()) {
    console.log("Element is collapsed");
}
```

### toggleState()

Toggles between collapsed and expanded states.

```javascript
// Toggle collapse state
collapse.toggleState();
```

## Styling

The Collapse component uses CSS transitions for its animations. The collapse effect is achieved by manipulating the `max-height` property with a transition duration of 0.3 seconds.

### Available CSS Classes

- `.collapse` - The main class for the collapsible content
- `.collapse-toggle` - Class for the toggle element
- `.active-toggle` - Applied to the toggle element when the content is expanded
- `.collapsed` - Applied to the collapse element when it's collapsed

## Accessibility

For better accessibility:
- Use semantic HTML elements for your toggle (like `<button>`)
- Add appropriate ARIA attributes to indicate the expanded/collapsed state
- Ensure keyboard navigation works properly with your toggle elements

## Best Practices

1. Use clear visual indicators for the toggle element to show it's interactive
2. Consider using icons (like arrows or plus/minus) to indicate the current state
3. Keep animations short for better user experience
4. Group related collapse elements in accordion-style interfaces when appropriate
5. Ensure the toggle element is easily clickable on mobile devices