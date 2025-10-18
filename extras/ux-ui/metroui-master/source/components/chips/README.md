# Chips

Chips are compact elements that represent an input, attribute, or action.

## Usage

### Basic Usage

```html
<div class="chip">
    <div class="label">Chip Example</div>
</div>
```

### With Icon

```html
<div class="chip">
    <div class="icon">
        <span class="mif-rocket"></span>
    </div>
    <div class="label">Chip Example</div>
</div>
```

### With Action (Close Button)

```html
<div class="chip">
    <div class="icon">
        <span class="mif-rocket"></span>
    </div>
    <div class="label">Chip Example</div>
    <div class="action"></div>
</div>
```

### Pill-shaped Chip

```html
<div class="chip pill-chip">
    <div class="icon">
        <span class="mif-rocket"></span>
    </div>
    <div class="label">Chip Example</div>
    <div class="action"></div>
</div>
```

### Colored Chips

```html
<!-- Red chip -->
<div class="chip red">
    <div class="label">Red Chip</div>
    <div class="action"></div>
</div>

<!-- Soft-red chip -->
<div class="chip soft-red">
    <div class="label">Soft Red Chip</div>
    <div class="action"></div>
</div>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--chip-background` | #F4F4F4 | #2b2d30 | Background color of the chip |
| `--chip-color` | #191919 | #f3fcff | Text color of the chip |
| `--chip-background-hover` | #dadada | #333439 | Background color when hovering over the chip |
| `--chip-color-hover` | #191919 | #f3fcff | Text color when hovering over the chip |
| `--chip-action-background` | #c1c1c1 | #43444a | Background color of the action button |
| `--chip-action-color` | #191919 | #f3fcff | Text color of the action button |

### Example of Custom Styling

```css
.my-custom-chip {
    --chip-background: #e0f7fa;
    --chip-color: #006064;
    --chip-action-background: #00838f;
    --chip-action-color: white;
}
```

## Available CSS Classes

### Base Classes
- `.chip` - The base class for a chip component
- `.label` - Class for the text label inside a chip
- `.icon` - Class for the icon container inside a chip
- `.action` - Class for the action (close) button inside a chip

### Modifiers
- `.pill-chip` - Makes the chip pill-shaped (rounded corners)
- `.readonly`, `.disabled` - Hides the action button
- `.red`, `.blue`, `.green`, etc. - Applies predefined color schemes (all standard Metro UI colors are supported)
- `.soft-red`, `.soft-blue`, `.soft-green`, etc. - Applies soft color schemes with lighter backgrounds

### Structure
The chip component has a specific structure with elements in a specific order:
1. `.icon` (optional)
2. `.label` (required)
3. `.action` (optional)

## Notes
- Chips are displayed as inline-flex elements
- Multiple chips placed next to each other will have automatic spacing (8px margin)
- The action button displays an "×" symbol by default
- Icons inside chips can be either font icons or images