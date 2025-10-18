# Command Button

The Command Button component is a styled button that includes an icon and a caption with optional description text. It's designed to provide a more visually prominent button option with additional information.

## Dependencies

This component has no dependencies on other components, as it's purely CSS-based.

## Usage

### Basic Usage

```html
<button class="command-button">
    <span class="mif-share icon"></span>
    <span class="caption">
        Yes, share and connect
        <small>Use this option for home or work</small>
    </span>
</button>
```

### Additional Configurations

#### Command Button with Icon on Right

```html
<button class="command-button icon-right">
    <span class="mif-share icon"></span>
    <span class="caption">
        Yes, share and connect
        <small>Use this option for home or work</small>
    </span>
</button>
```

#### Outlined Command Button

```html
<button class="command-button outline">
    <span class="mif-share icon"></span>
    <span class="caption">
        Yes, share and connect
        <small>Use this option for home or work</small>
    </span>
</button>
```

#### Colored Command Button

```html
<button class="command-button alert">
    <span class="mif-alarm icon"></span>
    <span class="caption">
        Alarm!
        <small>Use this option for home or work</small>
    </span>
</button>
```

## Structure

The Command Button consists of the following elements:

1. A container element (typically a `<button>`) with the class `command-button`
2. An icon element with the class `icon`
3. A caption element with the class `caption`, which can include:
   - Main text (directly inside the caption)
   - Optional description text inside a `<small>` element

## Integration with Other Components

The Command Button can be integrated with other Metro UI components:

### With Ripple Effect

```html
<button class="command-button" data-role="ripple" data-ripple-color="gray">
    <span class="mif-share icon"></span>
    <span class="caption">
        Yes, share and connect
        <small>Use this option for home or work</small>
    </span>
</button>
```

### With Shadow Effect

```html
<button class="command-button shadowed">
    <span class="mif-share icon"></span>
    <span class="caption">
        Yes, share and connect
        <small>Use this option for home or work</small>
    </span>
</button>
```

## Styling with CSS Variables

The Command Button component can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
|----------|----------------|----------------|-------------|
| `--command-button-border-radius` | `6px` | `6px` | Border radius of the button |
| `--command-button-background` | `#F8F8F8` | `#2e2e2e` | Background color of the button |
| `--command-button-color` | `#191919` | `#F8F8F8` | Text color of the button |
| `--command-button-background-hover` | `#eaeaea` | `#4b4b4b` | Background color when hovered |
| `--command-button-color-hover` | `#000000` | `#F8F8F8` | Text color when hovered |

### Example of Custom Styling

```css
:root {
    --command-button-border-radius: 10px;
    --command-button-background: #e3f2fd;
    --command-button-color: #0d47a1;
    --command-button-background-hover: #bbdefb;
    --command-button-color-hover: #1565c0;
}

.dark-side {
    --command-button-background: #263238;
    --command-button-color: #eceff1;
    --command-button-background-hover: #37474f;
    --command-button-color-hover: #ffffff;
}
```

## Available CSS Classes

### Base Classes
- `.command-button` - Main container class for the button
- `.icon` - Class for the icon element within the button
- `.caption` - Class for the text content container

### Modifiers
- `.icon-right` - Places the icon on the right side of the caption
- `.outline` - Creates an outlined version of the button
- `.shadow` - Adds a 3D shadow effect to the button
- `.shift` - Adds a slight shift effect when the button is clicked
- `.primary`, `.secondary`, `.success`, `.alert`, `.warning`, `.info`, `.dark`, `.light`, `.yellow` - Color variations for the button

### Example of Complete Implementation

```html
<button class="command-button alert shadow">
    <span class="mif-alarm icon"></span>
    <span class="caption">
        Alarm!
        <small>Important notification</small>
    </span>
</button>

<script>
    // No JavaScript is required for basic functionality
    // For integration with other components like ripple:
    Metro.makePlugin("#myButton", "ripple", {
        rippleColor: "gray"
    });
</script>
```