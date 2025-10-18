# Button Component

The Button component provides a versatile and customizable way to create buttons with various styles, sizes, and behaviors. It supports standard HTML button elements as well as styled links and inputs.

## Usage

### Basic Buttons

To create a button, you must add class `button` to an element.
Elements `BUTTON`, `INPUT[TYPE=button]`, `INPUT[TYPE=submit]`, and `INPUT[TYPE=reset]` styled by default and don't require a class `button`.

```html
<!-- Standard button -->
<button>Standard Button</button>

<!-- Link styled as button -->
<a href="#" class="button">Link Button</a>

<!-- Input buttons -->
<input type="button" value="Input Button">
<input type="submit" value="Submit Button">
<input type="reset" value="Reset Button">
```

### Button Variants

+ `default` - Standard button with default styling
+ `flat-button` - Button with flat appearance
+ `outline` - Button with transparent background and colored border
+ `link` - Button that looks like a link

```html
<!-- Flat button -->
<button class="flat-button">Flat Button</button>

<!-- Outline button -->
<button class="outline">Outline Button</button>

<!-- Link style button -->
<button class="link">Link Button</button>
```

### Button Sizes

+ `mini` - Very small button (height: 20px)
+ `small` - Small button (height: 26px)
+ `medium` - Medium button (height: 30px)
+ `default` - Default size button (height: 36px)
+ `large` - Large button (height: 54px)

```html
<!-- Mini button -->
<button class="mini">Mini</button>

<!-- Small button -->
<button class="small">Small</button>

<!-- Medium button -->
<button class="medium">Medium</button>

<!-- Default size button -->
<button>Default</button>

<!-- Large button -->
<button class="button large">Large</button>
```

### Button Shapes

```html
<!-- Pill button (rounded edges) -->
<button class="button pill-button">Pill Button</button>

<!-- Square button -->
<button class="button square">
    <span class="icon mif-home"></span>
</button>

<!-- Circular button -->
<button class="button cycle">
    <span class="icon mif-plus"></span>
</button>
```

### Button States

```html
<!-- Disabled button -->
<button class="button" disabled>Disabled Button</button>

<!-- Loading button -->
<button class="button loading">
    <span class="loader"><span class="mif-spinner"></span></span>
    <span class="caption">Loading</span>
</button>
```

### Button Effects

```html
<!-- Shadow effect -->
<button class="button shadow">Shadow Button</button>

<!-- Shift effect (moves when clicked) -->
<button class="button shift">Shift Button</button>
```

### Color Variants

#### Accent Buttons
To create buttons with specific color accents, you can use the following classes:
+ `primary` - Blue accent
+ `secondary` - Gray accent
+ `success` - Green accent
+ `warning` - Yellow accent
+ `alert` - Red accent
+ `info` - Light blue accent

```html
<button class="button primary">Primary</button>
<button class="button secondary">Secondary</button>
<button class="button success">Success</button>
<button class="button warning">Warning</button>
<button class="button alert">Alert</button>
<button class="button info">Info</button>
```

#### Colored Buttons
You can also create buttons with specific colors using the `button-soft-{color}` and `button-{color}` classes.

```html
<button class="button button-red">Soft Primary</button>
<button class="button button-soft-red">Soft Primary</button>
```

## Styling with CSS Variables

The Button component can be styled using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| --button-border-radius | 4px | 4px | Border radius for standard buttons |
| --button-pill-radius | 36px | 36px | Border radius for pill buttons |
| --button-size | 36px | 36px | Height of the button |
| --button-font-size | 14px | 14px | Font size of the button text |
| --button-background | #ebebeb | #2b2d30 | Background color of the button |
| --button-background-hover | #dadada | #333439 | Background color on hover |
| --button-color | #191919 | #f3fcff | Text color of the button |
| --button-border-color | #ebebeb | #4e5157 | Border color of the button |
| --button-disabled-opacity | .65 | .25 | Opacity for disabled buttons |

### Example of Custom Styling

```css
/* Custom styling for a specific button */
#myCustomButton {
    --button-background: #e0f7fa;
    --button-background-hover: #b2ebf2;
    --button-color: #006064;
    --button-border-color: #00838f;
}
```

## Available CSS Classes

### Base Classes
- `.button` - Standard button
- `.flat-button` - Button with flat appearance

### Size Modifiers
- `.mini` - Very small button
- `.small` - Small button
- `.medium` - Medium-sized button
- `.large` - Large button
- `.mini-{breakpoint}`, `.small-{breakpoint}`, `.large-{breakpoint}` - Responsive size variants

### Shape Modifiers
- `.pill-button` - Button with fully rounded sides
- `.square` - Square button (equal width and height)
- `.cycle` - Circular button

### Style Modifiers
- `.outline` - Button with transparent background and colored border
- `.flat` - Button with transparent background and border
- `.link` - Button that looks like a link
- `.shadow` - Button with shadow effect
- `.shift` - Button that shifts position when clicked

### State Classes
- `.disabled` - Visually disabled button
- `.loading` - Button in loading state

### Color Classes
- Color classes can be applied directly (e.g., `.primary`, `.success`)
- `.button-soft-{color}` - Button with soft color variant

## Accessibility

The Button component includes proper semantics for improved accessibility:
- Native button elements (`<button>`) are used when possible for proper keyboard and screen reader support
- Disabled state is properly conveyed with the `disabled` attribute
- Loading state includes appropriate ARIA attributes
- When using links as buttons, proper roles are applied

## Best Practices

1. Use native `<button>` elements when the action will trigger functionality within the page
2. Use `<a>` elements styled as buttons when the action navigates to a new page
3. Always provide descriptive text for buttons to improve accessibility
4. Consider using icons alongside text for better visual recognition
5. Use color variants consistently throughout your application