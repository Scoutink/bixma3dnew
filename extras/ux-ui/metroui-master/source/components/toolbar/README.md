# Toolbar

The Toolbar component provides a container for action buttons (tool buttons) that can be arranged horizontally or vertically. It's a versatile UI element for grouping related actions in a compact, organized manner.

## Dependencies

This component has no external dependencies beyond the Metro UI core CSS.

## Usage

### Basic Usage

```html
<!-- Basic horizontal toolbar -->
<div class="toolbar">
    <button class="tool-button"><span class="mif-home"></span></button>
    <button class="tool-button"><span class="mif-pencil"></span></button>
    <button class="tool-button"><span class="mif-search"></span></button>
</div>
```

### Additional Configurations

```html
<!-- Vertical toolbar -->
<div class="toolbar vertical">
    <button class="tool-button"><span class="mif-home"></span></button>
    <button class="tool-button"><span class="mif-pencil"></span></button>
    <button class="tool-button"><span class="mif-search"></span></button>
</div>

<!-- Movable toolbar with caption -->
<div class="toolbar movable" data-caption="Tools">
    <button class="tool-button"><span class="mif-home"></span></button>
    <button class="tool-button"><span class="mif-pencil"></span></button>
    <button class="tool-button"><span class="mif-search"></span></button>
</div>
```

## Plugin Parameters

The toolbar is a CSS-only component and doesn't have JavaScript plugin parameters.

## API Methods

The toolbar is a CSS-only component and doesn't have JavaScript API methods.

## Events

The toolbar is a CSS-only component and doesn't have JavaScript events.

## Styling with CSS Variables

The toolbar component uses the following CSS variables that you can customize:

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| `--tool-button-border-radius` | `4px` | `4px` | Border radius for tool buttons |
| `--tool-button-background` | `#F8F8F8` | `#2e2e2e` | Background color for tool buttons |
| `--tool-button-color` | `#191919` | `#F8F8F8` | Text color for tool buttons |
| `--tool-button-background-hover` | `#dcdcdc` | `#373737` | Background color for tool buttons on hover |
| `--tool-button-color-hover` | `#474747` | `#bfbfbf` | Text color for tool buttons on hover |
| `--tool-button-border-color` | `#E8E8E8` | `#4A4D51` | Border color for outline tool buttons |

### Example of Custom Styling

```css
:root {
    --tool-button-background: #0078d7;
    --tool-button-color: white;
    --tool-button-background-hover: #106ebe;
    --tool-button-color-hover: white;
    --tool-button-border-radius: 2px;
}
```

## Available CSS Classes

### Base Classes
- `.toolbar` - The main container class for the toolbar
- `.tool-button` - Class for individual action buttons within the toolbar

### Modifiers
- `.toolbar.vertical` - Arranges buttons in a vertical column
- `.toolbar.movable` - Adds a draggable handle to the toolbar
- `.toolbar.no-divider` - Removes the divider (handle) from the toolbar

### Tool Button Modifiers
- `.tool-button.text-button` - Creates a button with text (auto-width)
- `.tool-button.outline` - Creates a button with an outline style
- `.tool-button.w-auto` - Creates a button with automatic width
- `.tool-button.disabled` - Styles for disabled buttons

## Tool Button Types

### Standard Tool Button

```html
<button class="tool-button">
    <span class="mif-home"></span>
</button>
```

### Text Button

```html
<button class="tool-button text-button">
    Save
</button>
```

### Outline Button

```html
<button class="tool-button outline">
    <span class="mif-pencil"></span>
</button>
```

### Auto-width Button

```html
<button class="tool-button w-auto">
    <span class="mif-cog"></span> Settings
</button>
```

### Disabled Button

```html
<button class="tool-button disabled">
    <span class="mif-block"></span>
</button>
<!-- or -->
<button class="tool-button" disabled>
    <span class="mif-block"></span>
</button>
```

## Toolbar with Caption

You can add a caption to your toolbar using the `data-caption` attribute:

```html
<div class="toolbar" data-caption="Editor tools">
    <!-- Tool buttons -->
</div>
```

## Using Icons

Tool buttons support various icon formats:

```html
<!-- Metro Icon Font -->
<button class="tool-button">
    <span class="mif-file-text"></span>
</button>

<!-- Custom Icon Class -->
<button class="tool-button">
    <span class="icon custom-icon"></span>
</button>

<!-- Image -->
<button class="tool-button">
    <img src="icon.png" alt="Icon">
</button>
```

## Customizing Appearance

### Button Size

By default, tool buttons are 32x32 pixels. You can customize their size using CSS:

```css
.my-custom-toolbar .tool-button {
    width: 48px;
    height: 48px;
}

.my-custom-toolbar .tool-button [class*=mif], 
.my-custom-toolbar .tool-button .icon, 
.my-custom-toolbar .tool-button img {
    height: 24px;
    width: 24px;
    font-size: 24px;
}
```

### Button Spacing

Tool buttons have a default margin of 0 2px in horizontal toolbars and 2px 0 in vertical toolbars. You can adjust this with custom CSS:

```css
.toolbar .tool-button {
    margin: 0 5px;  /* Horizontal spacing */
}

.toolbar.vertical .tool-button {
    margin: 5px 0;  /* Vertical spacing */
}
```
