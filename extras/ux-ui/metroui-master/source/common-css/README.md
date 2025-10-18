# Common CSS Utilities

This directory contains comprehensive CSS utility classes for Metro UI that provide styling solutions for common design patterns and layout needs.

## Overview

The common CSS utilities in Metro UI are organized into several categories, each addressing specific styling needs:

- **Animation Utilities** - CSS animations and transitions
- **Base Theme** - Core theme variables and styling foundation
- **Border Utilities** - Border styling, radius, and animated effects
- **Cursor Utilities** - Cursor appearance control
- **Debug Utilities** - Development debugging tools
- **Display Utilities** - Element visibility and display properties
- **Embed Utilities** - Responsive embedded content containers
- **Flexbox Utilities** - Comprehensive flexbox layout system
- **Float Utilities** - Element floating and clearing
- **Font Base** - Typography foundation and font settings
- **Image Utilities** - Image styling and manipulation
- **List Utilities** - Various list styles and layouts
- **Media Breakpoints** - Responsive design breakpoint variables
- **Position Utilities** - Basic and advanced element positioning
- **Print Utilities** - Print-specific styling controls
- **Sizing Utilities** - Width and height control
- **Spacing Utilities** - Margin and padding management

## Animation Utilities (ani.less)

Provides a comprehensive set of CSS animation utilities for Metro UI components and elements.

### CSS Variables

#### Duration Variables
| Variable | Value |
|----------|-------|
| `--base-duration-0` | 0ms |
| `--base-duration-100` | 100ms |
| `--base-duration-200` | 200ms |
| `--base-duration-300` | 300ms |
| `--base-duration-400` | 400ms |
| `--base-duration-500` | 500ms |
| `--base-duration-600` | 600ms |
| `--base-duration-700` | 700ms |
| `--base-duration-800` | 800ms |
| `--base-duration-900` | 900ms |
| `--base-duration-1000` | 1s |

#### Easing Variables
| Variable | Value |
|----------|-------|
| `--base-easing-linear` | cubic-bezier(0, 0, 1, 1) |
| `--base-easing-easeIn` | cubic-bezier(0.7, 0.1, 0.75, 0.9) |
| `--base-easing-easeOut` | cubic-bezier(0.3, 0.8, 0.6, 1) |
| `--base-easing-easeInOut` | cubic-bezier(0.6, 0, 0.2, 1) |

### Animation Classes

| Class | Description |
|-------|-------------|
| `.ani-spin`, `.ani-hover-spin:hover` | Rotates element 360 degrees continuously |
| `.ani-spin-reverse`, `.ani-hover-spin-reverse:hover` | Rotates element counter-clockwise continuously |
| `.ani-pulse`, `.ani-hover-pulse:hover` | Pulses the element with rotation |
| `.ani-spanner`, `.ani-hover-spanner:hover` | Applies a wrench-like rotation animation |
| `.ani-ring`, `.ani-hover-ring:hover` | Applies a bell-ringing animation |
| `.ani-vertical`, `.ani-hover-vertical:hover` | Moves element up and down |
| `.ani-horizontal`, `.ani-hover-horizontal:hover` | Moves element left and right |
| `.ani-flash`, `.ani-hover-flash:hover` | Makes element flash by changing opacity |
| `.ani-bounce`, `.ani-hover-bounce:hover` | Makes element bounce up and down |
| `.ani-float`, `.ani-hover-float:hover` | Makes element float up and down smoothly |
| `.ani-heartbeat`, `.ani-hover-heartbeat:hover` | Simulates a heartbeat by scaling element |
| `.ani-shake`, `.ani-hover-shake:hover` | Shakes element back and forth |
| `.ani-shuttle`, `.ani-hover-shuttle:hover` | Applies a shuttle-like rotation and scaling |
| `.ani-pass`, `.ani-hover-pass:hover` | Makes element pass from left to right |
| `.ani-ripple`, `.ani-hover-ripple:hover` | Creates a ripple effect by scaling and fading |

### Usage Examples

```html
<!-- Spinning element -->
<div class="ani-spin">This element will spin continuously</div>

<!-- Element that spins on hover -->
<div class="ani-hover-spin">This element will spin when hovered</div>

<!-- Bouncing element -->
<button class="ani-bounce">Bouncing Button</button>
```

## Base Theme (base-theme.less)

Defines the core theme variables and basic styling for Metro UI components.

### CSS Variables

#### Layout Size Variables
| Variable | Description |
|----------|-------------|
| `--layout-fs` | Fullscreen size |
| `--layout-xs` | Extra small size |
| `--layout-sm` | Small size |
| `--layout-ld` | Low-density size |
| `--layout-md` | Medium size |
| `--layout-lg` | Large size |
| `--layout-xl` | Extra large size |
| `--layout-xxl` | Double extra large size |
| `--layout-xxxl` | Triple extra large size |

#### Control Height Variables
| Variable | Description |
|----------|-------------|
| `--control-height-mini` | Mini control height (20px) |
| `--control-height-small` | Small control height (26px) |
| `--control-height-medium` | Medium control height (30px) |
| `--control-height-normal` | Normal control height (36px) |
| `--control-height-large` | Large control height (54px) |

#### Light Theme Variables (Default)
| Variable | Description |
|----------|-------------|
| `--default-background` | Default background color (#fff) |
| `--default-color` | Default text color (#191919) |
| `--default-color-hover` | Default hover text color (#000000) |
| `--default-background-disabled` | Default disabled background color (#f7f8fa) |
| `--default-color-disabled` | Default disabled text color (#c9ccd6) |
| `--body-background` | Body background color |
| `--body-color` | Body text color |
| `--body-color-secondary` | Secondary body text color (#a2a5b1) |
| `--border-color` | Border color for elements (#e8e8e8) |
| `--link-color` | Link text color (#5a87cb) |
| `--link-color-hover` | Link hover text color (#0056B3FF) |
| `--selected-color` | Selected item highlight color (#1FB1F8FF) |
| `--selected-row-background` | Background for selected rows (#f5f8fe) |
| `--selected-item-background` | Background for selected items (#d4e2ff) |

#### Dark Theme Variables
| Variable | Description |
|----------|-------------|
| `--default-background` | Default background color (#1e1f22) |
| `--default-color` | Default text color (#dbdfe7) |
| `--default-color-hover` | Default hover text color (#dbdfe7) |
| `--default-background-disabled` | Default disabled background color (#343637) |
| `--default-color-disabled` | Default disabled text color (#54565a) |
| `--body-background` | Body background color |
| `--body-color` | Body text color |
| `--body-color-secondary` | Secondary body text color (#c0c0c0) |
| `--border-color` | Border color for elements (#4a4d51) |
| `--link-color` | Link text color (#5a87cb) |
| `--link-color-hover` | Link hover text color (#0056B3FF) |
| `--selected-row-background` | Background for selected rows (#26282e) |
| `--selected-item-background` | Background for selected items (#2e436e) |

### Usage Example

```css
.my-custom-component {
    background-color: var(--default-background);
    color: var(--default-color);
    border: 1px solid var(--border-color);
}

.my-custom-component.selected {
    background-color: var(--selected-item-background);
}
```

### Switching to Dark Theme

```html
<body class="dark-side">
    <!-- Your content here -->
</body>
```

## Border Utilities (border.less)

Provides comprehensive border styling, radius, and animated border effects.

### CSS Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--border-radius` | 6px | Default border radius |
| `--animated-border-speed` | 3s | Duration of the border animation |
| `--animated-border-size` | 2px | Width of the animated border |
| `--animated-border-color` | #50a8ff | Default color for animated borders |

### Border Removal Classes

| Class | Description |
|-------|-------------|
| `.no-border` | Removes all borders |
| `.no-border-left` | Removes left border |
| `.no-border-right` | Removes right border |
| `.no-border-top` | Removes top border |
| `.no-border-bottom` | Removes bottom border |
| `.no-border-visible` | Makes borders transparent |

### Border Addition Classes

| Class | Description |
|-------|-------------|
| `.border` | Adds a 1px transparent border on all sides |
| `.border-left` | Adds a 1px transparent border on the left |
| `.border-right` | Adds a 1px transparent border on the right |
| `.border-top` | Adds a 1px transparent border on the top |
| `.border-bottom` | Adds a 1px transparent border on the bottom |

### Border Radius Classes

| Class | Description |
|-------|-------------|
| `.border-radius`, `.rounded` | Applies the default border radius (6px) |
| `.border-radius-half`, `.to-cycle` | Makes the element circular (border-radius: 50%) |
| `.border-radius-1` through `.border-radius-20` | Sets specific border radius from 1px to 20px |

### Border Style Classes

| Class | Description |
|-------|-------------|
| `.border-solid` | Sets solid border style |
| `.border-dashed` | Sets dashed border style |
| `.border-dotted` | Sets dotted border style |
| `.border-double` | Sets double border style |

### Animated Border Classes

| Class | Description |
|-------|-------------|
| `.rainbow-border` | Applies a colorful animated rainbow border effect |
| `.rainbow-border-hover` | Applies the rainbow border effect only on hover |
| `.animated-border` | Applies an animated rotating border effect |
| `.animated-border-hover` | Applies the animated border effect only on hover |

### Usage Examples

```html
<!-- Basic borders -->
<div class="border border-solid">Element with a 1px solid border</div>
<div class="rounded">Element with default border radius</div>
<div class="to-cycle">Circular element</div>

<!-- Animated borders -->
<div class="rainbow-border p-4">Element with animated rainbow border</div>
<div class="animated-border-hover p-4">Element with animated border on hover</div>
```

## Cursor Utilities (cursors.less)

Provides utility classes for controlling cursor styles.

### Available Cursor Classes

| Class | CSS Property | Description |
|-------|-------------|-------------|
| `.c-auto` | `cursor: auto;` | Default cursor, determined by the current context |
| `.c-default` | `cursor: default;` | Standard arrow cursor |
| `.c-none` | `cursor: none;` | No cursor is rendered |
| `.c-help` | `cursor: help;` | Question mark cursor indicating help is available |
| `.c-pointer` | `cursor: pointer;` | Hand cursor indicating a link or clickable element |
| `.c-progress` | `cursor: progress;` | Progress cursor indicating something is loading |
| `.c-wait` | `cursor: wait;` | Wait cursor (usually an hourglass) |
| `.c-text` | `cursor: text;` | Text cursor (I-beam) for text selection |
| `.c-move` | `cursor: move;` | Move cursor indicating something can be moved |
| `.c-not-allowed` | `cursor: not-allowed;` | Not-allowed cursor indicating an action is not allowed |
| `.c-grab` | `cursor: grab;` | Grab cursor indicating something can be grabbed |
| `.c-grabbing` | `cursor: grabbing;` | Grabbing cursor indicating something is being grabbed |

### Resize Cursors

| Class | Description |
|-------|-------------|
| `.c-col-resize` | Column-resize cursor for horizontal resizing |
| `.c-row-resize` | Row-resize cursor for vertical resizing |
| `.c-n-resize` | North resize cursor |
| `.c-e-resize` | East resize cursor |
| `.c-s-resize` | South resize cursor |
| `.c-w-resize` | West resize cursor |
| `.c-ne-resize` | Northeast resize cursor |
| `.c-nw-resize` | Northwest resize cursor |
| `.c-se-resize` | Southeast resize cursor |
| `.c-sw-resize` | Southwest resize cursor |

### Usage Examples

```html
<div class="c-pointer">This element has a pointer cursor (hand)</div>
<div class="c-text">This element has a text cursor (I-beam)</div>
<div class="c-not-allowed">This element has a not-allowed cursor</div>
<div class="c-grab">Grabbable Element</div>
```

## Debug Utilities (debug.less)

Provides a simple utility class for debugging element boundaries.

### Available Classes

| Class | Description |
|-------|-------------|
| `.debug` | Adds a red dotted outline to elements and ensures minimum dimensions |

### Usage Examples

```html
<!-- Add the debug class to any element to visualize its boundaries -->
<div class="debug">This element has a red dotted outline</div>

<!-- Useful for debugging layout issues -->
<div class="row debug">
    <div class="cell debug">Cell 1</div>
    <div class="cell debug">Cell 2</div>
</div>
```

## Display Utilities (display.less)

Provides utility classes for controlling element visibility and display properties.

### Visibility Classes

| Class | Description |
|-------|-------------|
| `.visible` | Makes an element visible (`visibility: visible !important`) |
| `.no-visible` | Hides an element but preserves its space in the layout (`visibility: hidden !important`) |

### Display Classes

| Class | Description |
|-------|-------------|
| `.d-none` | Hides an element completely (`display: none !important`) |
| `.d-block` | Displays an element as a block-level element (`display: block !important`) |
| `.d-inline` | Displays an element as an inline element (`display: inline !important`) |
| `.d-inline-block` | Displays an element as an inline-block element (`display: inline-block !important`) |
| `.d-table` | Displays an element as a table (`display: table !important`) |
| `.d-table-row` | Displays an element as a table row (`display: table-row !important`) |
| `.d-table-cell` | Displays an element as a table cell (`display: table-cell !important`) |

### Responsive Variants

All classes have responsive variants that apply at specific breakpoints using the pattern `.{class}-{breakpoint}` where `{breakpoint}` can be: xs, sm, md, lg, xl, xxl, xxxl.

### Usage Examples

```html
<!-- Hide an element -->
<div class="d-none">This element is not displayed</div>

<!-- Display as block -->
<span class="d-block">This span is displayed as a block element</span>

<!-- Responsive display -->
<div class="d-none d-block-md">
    This content is hidden on small screens but visible on medium screens and above
</div>
```

## Embed Utilities (embed.less)

Provides utility classes for creating responsive embedded content containers.

### Available Classes

| Class | Description | Aspect Ratio |
|-------|-------------|--------------|
| `.embed-container` | Creates a responsive container for embedded content | 16:9 (default) |
| `.size-21x9` | Ultra-widescreen aspect ratio | 21:9 |
| `.size-16x9` | Standard widescreen aspect ratio | 16:9 |
| `.size-4x3` | Standard fullscreen aspect ratio | 4:3 |
| `.size-1x1` | Square aspect ratio | 1:1 |

### Usage Examples

```html
<!-- Default 16:9 aspect ratio container -->
<div class="embed-container">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-container size-4x3">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>

<!-- Square aspect ratio -->
<div class="embed-container size-1x1">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
</div>
```

## Flexbox Utilities (flex.less)

Provides comprehensive flexbox layout utilities.

### Display Classes

| Class | Description |
|-------|-------------|
| `.d-flex` | Creates a block-level flex container |
| `.d-inline-flex` | Creates an inline-level flex container |

### Flex Direction

| Class | Description |
|-------|-------------|
| `.flex-row` | Items are placed in a row (default) |
| `.flex-row-reverse` | Items are placed in a row in reverse order |
| `.flex-column` | Items are placed in a column |
| `.flex-column-reverse` | Items are placed in a column in reverse order |

### Flex Wrap

| Class | Description |
|-------|-------------|
| `.flex-nowrap` | Items will not wrap (default) |
| `.flex-wrap` | Items will wrap onto multiple lines if needed |
| `.flex-wrap-reverse` | Items will wrap onto multiple lines in reverse order |

### Justify Content

| Class | Description |
|-------|-------------|
| `.flex-justify-start` | Items are packed at the start of the container |
| `.flex-justify-end` | Items are packed at the end of the container |
| `.flex-justify-center` | Items are centered along the line |
| `.flex-justify-between` | Items are evenly distributed with the first item at the start and the last at the end |
| `.flex-justify-around` | Items are evenly distributed with equal space around them |
| `.flex-justify-evenly` | Items are evenly distributed with equal space between them |

### Align Items

| Class | Description |
|-------|-------------|
| `.flex-align-start` | Items are aligned at the start of the cross axis |
| `.flex-align-end` | Items are aligned at the end of the cross axis |
| `.flex-align-center` | Items are centered along the cross axis |
| `.flex-align-baseline` | Items are aligned by their baselines |
| `.flex-align-stretch` | Items are stretched to fill the container (default) |

### Gap

| Class | Description |
|-------|-------------|
| `.gap-0` through `.gap-12` | Sets gap between items from 0px to 48px (in increments of 4px) |

### Usage Examples

```html
<!-- Basic flex container -->
<div class="d-flex">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>

<!-- Centered flex container -->
<div class="d-flex flex-justify-center flex-align-center">
    <div>Centered content</div>
</div>

<!-- Column layout with gap -->
<div class="d-flex flex-column gap-4">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
</div>
```

## Float Utilities (float.less)

Provides utility classes for controlling float behavior.

### Float Direction

| Class | Alternative | Description |
|-------|-------------|-------------|
| `.float-left` | `.place-left` | Floats an element to the left |
| `.float-right` | `.place-right` | Floats an element to the right |
| `.float-none` | `.place-none`, `.no-float` | Removes float from an element |

### Clearing Floats

| Class | Description |
|-------|-------------|
| `.clear-float` | Clears floats (applies the clearfix technique) |

### Responsive Variants

All float classes have responsive variants using the pattern `.{class}-{breakpoint}`.

### Usage Examples

```html
<!-- Float elements left and right -->
<div class="clear-float">
    <div class="float-left">Floated left</div>
    <div class="float-right">Floated right</div>
</div>

<!-- Responsive float -->
<div class="float-left float-right-md">
    This element floats left on small screens and right on medium screens and above
</div>
```

## Font Base Settings (font.less)

Defines the base font settings and typography foundation.

### CSS Variables

| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--font-name` | -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", sans-serif | The primary font stack |
| `--font-symbol` | ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" | Font stack for symbols and emoji |
| `--font-size` | 1rem | Base font size |
| `--line-height` | 1.5 | Base line height |
| `--font-style` | normal | Base font style |
| `--font-weight` | 400 | Base font weight (normal) |

### Custom Fonts

| Font | Description |
|------|-------------|
| `digital` | A digital-style font embedded as a data URI, useful for displays that mimic digital readouts |

### Usage Examples

```css
/* Customize typography */
:root {
    --font-name: 'Your Custom Font', sans-serif;
    --font-size: 1.1rem;
    --line-height: 1.6;
    --font-weight: 300;
}

/* Use the digital font */
.digital-display {
    font-family: "digital", monospace;
}
```

## Image Utilities (images.less)

Provides comprehensive image styling and manipulation utilities.

### CSS Variables

| Variable | Light Theme | Dark Theme | Description |
|----------|-------------|------------|-------------|
| `--thumb-background` | rgba(255,255,255,.8) | rgba(0,0,0,.8) | Background color for thumbnails |
| `--img-overlay-background` | rgba(70, 140, 255, .7) | rgba(70, 140, 255, .7) | Background color for image overlays |
| `--img-overlay-color` | #ffffff | #ffffff | Text color for image overlays |
| `--img-border-radius` | 6px | 6px | Border radius for images |

### Basic Image Classes

| Class | Description |
|-------|-------------|
| `.img-fluid` | Makes an image responsive (100% width, auto height) |
| `.img-thumbnail` | Adds padding, border, and background to an image |
| `.img-container` | Creates a container for images with additional features |

### Image Transformations

| Class | Description |
|-------|-------------|
| `.flip-image-horizontal` | Flips an image horizontally (mirror effect) |
| `.flip-image-vertical` | Flips an image vertically (upside down) |
| `.flip-image` | Flips an image both horizontally and vertically |

### Object-Fit Utilities

| Class | Description |
|-------|-------------|
| `.fit-cover` | Image covers the entire container while maintaining aspect ratio (may crop) |
| `.fit-contain` | Image is scaled to fit entirely within the container (may leave empty space) |
| `.fit-fill` | Image is stretched to fill the container (may distort) |
| `.fit-scale-down` | Image is scaled down to fit the container (like contain, but never scales up) |
| `.fit-none` | Image is not resized |

### Usage Examples

```html
<!-- Responsive image -->
<img src="image.jpg" alt="Description" class="img-fluid">

<!-- Image with overlay -->
<div class="img-container">
    <img src="image.jpg" alt="Description">
    <div class="image-overlay">
        <h3>Image Title</h3>
        <p>Image description</p>
    </div>
</div>

<!-- Flipped image -->
<img src="image.jpg" alt="Description" class="flip-image-horizontal">

<!-- Object-fit example -->
<div style="width: 300px; height: 200px;">
    <img src="image.jpg" alt="Description" class="fit-cover">
</div>
```

## List Utilities (lists.less)

Provides comprehensive list styling and formatting utilities.

### CSS Variables

| Variable | Light Theme | Dark Theme | Description |
|----------|-------------|------------|-------------|
| `--step-list-number-color` | #757575 | #ffedbc | Color of the numbers in step lists |

### List Types

#### Step List
```html
<ol class="step-list">
    <li>First step in the process</li>
    <li>Second step in the process</li>
    <li>Third step in the process</li>
</ol>
```

#### Custom List Marker
```html
<ul class="custom-list-marker">
    <li data-marker="→">Item with arrow marker</li>
    <li data-marker="✓">Item with checkmark marker</li>
    <li data-marker="•">Item with bullet marker</li>
</ul>
```

#### Items List
```html
<ul class="items-list">
    <li>
        <img class="avatar" src="avatar.jpg" alt="User Avatar">
        <span class="label">Primary Text</span>
        <span class="second-label">Secondary Text</span>
        <span class="second-action">⋮</span>
    </li>
</ul>
```

#### Group List
```html
<!-- Vertical Group List -->
<ul class="group-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

<!-- Horizontal Group List -->
<ul class="group-list horizontal">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

#### Inline List
```html
<ul class="inline-list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

## Media Breakpoint Variables (media.less)

Defines CSS variables for responsive design breakpoints.

### CSS Variables

| Variable | Description |
|----------|-------------|
| `--media-fs` | Fullscreen breakpoint |
| `--media-xs` | Extra small screens breakpoint |
| `--media-sm` | Small screens breakpoint |
| `--media-ld` | Low-density screens breakpoint |
| `--media-md` | Medium screens breakpoint |
| `--media-lg` | Large screens breakpoint |
| `--media-xl` | Extra large screens breakpoint |
| `--media-xxl` | Double extra large screens breakpoint |
| `--media-xxxl` | Triple extra large screens breakpoint |

### Usage Examples

```css
@media (min-width: var(--media-md)) {
    .my-element {
        display: flex;
    }
}

@media (max-width: calc(var(--media-md) - 1px)) {
    .my-element {
        display: block;
    }
}
```

## Position Utilities (position.less)

Provides basic positioning utility classes.

### Basic Position Classes

| Class | Description |
|-------|-------------|
| `.pos-relative` | Sets `position: relative` |
| `.pos-absolute` | Sets `position: absolute` |
| `.pos-static` | Sets `position: static` |
| `.pos-fixed` | Sets `position: fixed` |
| `.pos-sticky` | Sets `position: sticky` with `top: 0` and `align-self: flex-start` |

### Fixed Position Utilities

| Class | Description |
|-------|-------------|
| `.fixed-top` | Creates a fixed element at the top of the viewport |
| `.fixed-bottom` | Creates a fixed element at the bottom of the viewport |

### Responsive Variants

Most position classes have responsive variants using the pattern `.{class}-{breakpoint}`.

### Usage Examples

```html
<!-- Basic positioning -->
<div class="pos-relative">
    <div class="pos-absolute">This element is positioned absolutely</div>
</div>

<!-- Fixed header and footer -->
<header class="fixed-top">This header stays at the top of the viewport</header>
<footer class="fixed-bottom">This footer stays at the bottom of the viewport</footer>

<!-- Responsive positioning -->
<div class="pos-static pos-relative-md pos-absolute-lg">
    This element changes its positioning behavior at different screen sizes
</div>
```

## Extended Position Utilities (position-ext.less)

Provides advanced positioning utility classes for precise element placement.

### Directional Positioning (put-*)

| Class | Description |
|-------|-------------|
| `.put-n` | Positions element at the top center, outside the container |
| `.put-nw` | Positions element at the top left corner, outside the container |
| `.put-ne` | Positions element at the top right corner, outside the container |
| `.put-e` | Positions element at the middle right, outside the container |
| `.put-s` | Positions element at the bottom left, inside the container |
| `.put-w` | Positions element at the middle left, outside the container |

### Container Positioning (pos-*)

| Class | Description |
|-------|-------------|
| `.pos-top-left` | Positions element at the top left corner of the container |
| `.pos-top-center` | Positions element at the top center of the container |
| `.pos-top-right` | Positions element at the top right corner of the container |
| `.pos-bottom-left` | Positions element at the bottom left corner of the container |
| `.pos-bottom-center` | Positions element at the bottom center of the container |
| `.pos-bottom-right` | Positions element at the bottom right corner of the container |
| `.pos-center` | Positions element at the center of the container |

### Usage Examples

```html
<!-- Tooltip positioning -->
<div class="pos-relative">
    Hover me
    <div class="tooltip put-n">Tooltip appears above</div>
</div>

<!-- Dropdown menu positioning -->
<div class="dropdown pos-relative">
    <button class="dropdown-toggle">Dropdown</button>
    <ul class="dropdown-menu put-s">
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
    </ul>
</div>

<!-- Centered modal -->
<div class="modal-backdrop">
    <div class="modal-dialog pos-center">
        Modal content centered in the viewport
    </div>
</div>
```

## Print Utilities (print.less)

Provides utility classes for controlling how elements appear when printed.

### Display Utilities

| Class | Description |
|-------|-------------|
| `.d-none-print` | Hides an element when printing |
| `.d-block-print` | Displays an element as a block when printing |
| `.d-inline-print` | Displays an element as inline when printing |
| `.d-inline-block-print` | Displays an element as inline-block when printing |
| `.d-table-print` | Displays an element as a table when printing |
| `.d-flex-print` | Displays an element as a flex container when printing |

### Visibility Utilities

| Class | Description |
|-------|-------------|
| `.visible-print` | Makes an element visible when printing |
| `.no-visible-print` | Hides an element (but preserves its space) when printing |

### Text Wrapping Utilities

| Class | Description |
|-------|-------------|
| `.wrap-print` | Sets `white-space: normal` when printing |
| `.no-wrap-print` | Sets `white-space: nowrap` when printing |

### Usage Examples

```html
<!-- Hide navigation when printing -->
<nav class="d-none-print">
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</nav>

<!-- Show only in print -->
<div class="d-none d-block-print">
    <p>Printed on: <script>document.write(new Date().toLocaleDateString())</script></p>
</div>

<!-- Change display mode for print -->
<div class="d-flex d-block-print">
    <div>Column 1</div>
    <div>Column 2</div>
</div>
```

## Sizing Utilities (sizing.less)

Provides utility classes for controlling width and height of elements.

### Auto Sizing

| Class | Description |
|-------|-------------|
| `.w-auto` | Sets `width: auto` |
| `.h-auto` | Sets `height: auto` |

### Percentage-Based Sizing

| Class | Description |
|-------|-------------|
| `.w-0` | Sets `width: 0%` |
| `.w-25` | Sets `width: 25%` |
| `.w-50` | Sets `width: 50%` |
| `.w-75` | Sets `width: 75%` |
| `.w-100` | Sets `width: 100%` |
| `.h-0` | Sets `height: 0%` |
| `.h-25` | Sets `height: 25%` |
| `.h-50` | Sets `height: 50%` |
| `.h-75` | Sets `height: 75%` |
| `.h-100` | Sets `height: 100%` |

### Viewport-Based Sizing

| Class | Description |
|-------|-------------|
| `.w-25-vw` | Sets `width: 25vw` (25% of viewport width) |
| `.w-50-vw` | Sets `width: 50vw` (50% of viewport width) |
| `.w-75-vw` | Sets `width: 75vw` (75% of viewport width) |
| `.w-100-vw` | Sets `width: 100vw` (100% of viewport width) |
| `.h-25-vh` | Sets `height: 25vh` (25% of viewport height) |
| `.h-50-vh` | Sets `height: 50vh` (50% of viewport height) |
| `.h-75-vh` | Sets `height: 75vh` (75% of viewport height) |
| `.h-100-vh` | Sets `height: 100vh` (100% of viewport height) |

### Min and Max Constraints

| Class | Description |
|-------|-------------|
| `.w-min-0` through `.w-min-100` | Sets `min-width` from 0% to 100% |
| `.h-min-0` through `.h-min-100` | Sets `min-height` from 0% to 100% |
| `.w-max-0` through `.w-max-100` | Sets `max-width` from 0% to 100% |
| `.h-max-0` through `.h-max-100` | Sets `max-height` from 0% to 100% |

### Responsive Variants

All sizing classes have responsive variants using the pattern `.{class}-{breakpoint}`.

### Usage Examples

```html
<!-- Basic width and height -->
<div class="w-100">This element is 100% wide</div>
<div class="w-50">This element is 50% wide</div>
<div class="h-100">This element is 100% tall</div>

<!-- Viewport-based sizing -->
<div class="w-100-vw">This element is as wide as the viewport</div>
<div class="h-50-vh">This element is half as tall as the viewport</div>

<!-- Min and max constraints -->
<div class="w-max-75">This element will be at most 75% wide</div>
<div class="h-min-50">This element will be at least 50% tall</div>

<!-- Responsive sizing -->
<div class="w-100 w-50-md">
    This element adapts its width based on screen size
</div>
```

## Spacing Utilities (spacing.less)

Provides utility classes for controlling margins and padding.

### Naming Convention

The spacing utilities follow this pattern: `{property}{sides}-{size}`

Where:
- `{property}` is either `m` (margin) or `p` (padding)
- `{sides}` is either empty (all sides), `t` (top), `r` (right), `b` (bottom), `l` (left), `x` (horizontal), or `y` (vertical)
- `{size}` is a number from 0 to 20, or `auto` for automatic margins

### Auto Margin Utilities

| Class | Description |
|-------|-------------|
| `.mx-auto` | Centers an element horizontally (sets left and right margins to auto) |
| `.my-auto` | Centers an element vertically (sets top and bottom margins to auto) |
| `.ml-auto` | Pushes an element to the right (sets left margin to auto) |
| `.mr-auto` | Pushes an element to the left (sets right margin to auto) |
| `.mt-auto` | Pushes an element to the bottom (sets top margin to auto) |
| `.mb-auto` | Pushes an element to the top (sets bottom margin to auto) |

### Zero Spacing Utilities

| Class | Description |
|-------|-------------|
| `.m-0` | Removes margin on all sides |
| `.mt-0` | Removes top margin |
| `.mr-0` | Removes right margin |
| `.mb-0` | Removes bottom margin |
| `.ml-0` | Removes left margin |
| `.mx-0` | Removes horizontal margins (left and right) |
| `.my-0` | Removes vertical margins (top and bottom) |
| `.p-0` | Removes padding on all sides |
| `.pt-0` | Removes top padding |
| `.pr-0` | Removes right padding |
| `.pb-0` | Removes bottom padding |
| `.pl-0` | Removes left padding |
| `.px-0` | Removes horizontal padding (left and right) |
| `.py-0` | Removes vertical padding (top and bottom) |

### Positive Spacing Utilities

#### Margin Utilities
| Class | Description |
|-------|-------------|
| `.m-1` through `.m-20` | Adds margin on all sides (from smallest to largest) |
| `.mt-1` through `.mt-20` | Adds top margin |
| `.mr-1` through `.mr-20` | Adds right margin |
| `.mb-1` through `.mb-20` | Adds bottom margin |
| `.ml-1` through `.ml-20` | Adds left margin |
| `.mx-1` through `.mx-20` | Adds horizontal margins (left and right) |
| `.my-1` through `.my-20` | Adds vertical margins (top and bottom) |

#### Padding Utilities
| Class | Description |
|-------|-------------|
| `.p-1` through `.p-20` | Adds padding on all sides (from smallest to largest) |
| `.pt-1` through `.pt-20` | Adds top padding |
| `.pr-1` through `.pr-20` | Adds right padding |
| `.pb-1` through `.pb-20` | Adds bottom padding |
| `.pl-1` through `.pl-20` | Adds left padding |
| `.px-1` through `.px-20` | Adds horizontal padding (left and right) |
| `.py-1` through `.py-20` | Adds vertical padding (top and bottom) |

### Negative Margin Utilities

| Class | Description |
|-------|-------------|
| `.mt-1-minus` through `.mt-20-minus` | Adds negative top margin |
| `.mr-1-minus` through `.mr-20-minus` | Adds negative right margin |
| `.mb-1-minus` through `.mb-20-minus` | Adds negative bottom margin |
| `.ml-1-minus` through `.ml-20-minus` | Adds negative left margin |

### Responsive Variants

All spacing classes have responsive variants using the pattern `.{class}-{breakpoint}`.

### Usage Examples

```html
<!-- Auto margins for centering -->
<div class="mx-auto">This element is centered horizontally</div>

<!-- Basic spacing -->
<div class="m-4">This element has margin on all sides</div>
<div class="p-2">This element has padding on all sides</div>

<!-- Directional spacing -->
<div class="mt-3 mb-2">This element has top and bottom margins</div>
<div class="px-4 py-2">This element has horizontal and vertical padding</div>

<!-- Responsive spacing -->
<div class="p-2 p-4-md p-6-lg">
    This element has different padding at different screen sizes
</div>

<!-- Negative margins -->
<div class="mt-4-minus">This element has negative top margin</div>
```

## Typography Utilities (typography.less)

Provides comprehensive typography styling and utility classes.

### CSS Variables

#### Heading Sizes
| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--h1-size` | 2rem | Font size for h1 headings |
| `--h2-size` | 1.5rem | Font size for h2 headings |
| `--h3-size` | 1.25rem | Font size for h3 headings |
| `--h4-size` | 1rem | Font size for h4 headings |
| `--h5-size` | 0.875rem | Font size for h5 headings |
| `--h6-size` | 0.75rem | Font size for h6 headings |

#### Font Weights
| Variable | Default Value | Description |
|----------|---------------|-------------|
| `--base-text-weight-ultralight` | 100 | Ultralight font weight |
| `--base-text-weight-light` | 300 | Light font weight |
| `--base-text-weight-normal` | 400 | Normal font weight |
| `--base-text-weight-medium` | 500 | Medium font weight |
| `--base-text-weight-semibold` | 600 | Semibold font weight |

### Font Weight Utilities

#### Named Weight Classes
| Class | Description |
|-------|-------------|
| `.text-ultralight` | Sets font weight to ultralight (100) |
| `.text-light` | Sets font weight to light (300) |
| `.text-normal` | Sets font weight to normal (400) |
| `.text-medium` | Sets font weight to medium (500) |
| `.text-bold` | Sets font weight to semibold (600) |

#### Numeric Weight Classes
| Class | Description |
|-------|-------------|
| `.text-weight-1` | Sets font weight to 100 |
| `.text-weight-2` | Sets font weight to 200 |
| `.text-weight-3` | Sets font weight to 300 |
| `.text-weight-4` | Sets font weight to 400 |
| `.text-weight-5` | Sets font weight to 500 |
| `.text-weight-6` | Sets font weight to 600 |
| `.text-weight-7` | Sets font weight to 700 |
| `.text-weight-8` | Sets font weight to 800 |
| `.text-weight-9` | Sets font weight to 900 |
| `.text-weight-10` | Sets font weight to 1000 |

### Display Classes

Large, eye-catching text styles for hero sections and major headings:

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.display4` | 112px | 200 |
| `.display3` | 56px | 400 |
| `.display2` | 48px | 400 |
| `.display1` | 36px | 400 |

### Heading Classes

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.h1`, `h1` | 2rem | 600 |
| `.h2`, `h2` | 1.5rem | 600 |
| `.h3`, `h3` | 1.25rem | 600 |
| `.h4`, `h4` | 1rem | 600 |
| `.h5`, `h5` | 0.875rem | 600 |
| `.h6`, `h6` | 0.75rem | 600 |

### Alternative Heading Classes

| Class | Font Size | Font Weight |
|-------|-----------|-------------|
| `.leader` | 48px | 300 |
| `.sub-leader` | 38px | 400 |
| `.header` | 30px | 500 |
| `.sub-header` | 24px | 500 |
| `.alt-header` | 20px | 500 |
| `.sub-alt-header` | 16px | 500 |

### Usage Examples

```html
<!-- Display text -->
<h1 class="display1">Hero Heading</h1>
<h2 class="display2">Large Display Text</h2>

<!-- Standard headings -->
<h1 class="h1">Main Heading</h1>
<h2 class="h2">Subheading</h2>

<!-- Alternative headings -->
<div class="leader">Leader Text</div>
<div class="header">Header Text</div>

<!-- Font weights -->
<p class="text-light">Light text</p>
<p class="text-normal">Normal text</p>
<p class="text-bold">Bold text</p>
<p class="text-weight-7">Weight 700 text</p>
```

## Best Practices

1. **Consistent Usage**: Use these utilities consistently throughout your application to maintain a cohesive design system.

2. **Responsive Design**: Take advantage of the responsive variants to create layouts that work well on all screen sizes.

3. **Performance**: These utility classes are optimized for performance and help reduce custom CSS.

4. **Combining Utilities**: These utilities are designed to work together. Combine them to create complex layouts without writing custom CSS.

5. **Customization**: Use the CSS variables to customize the appearance while maintaining the utility class structure.

6. **Testing**: Always test your layouts across different screen sizes and browsers to ensure proper functionality.

## Browser Compatibility

These utilities are designed to work with modern browsers and follow current web standards. Some advanced features like CSS Grid and Flexbox utilities require modern browser support.

## Contributing

When adding new utilities, follow the established naming conventions and ensure responsive variants are included where appropriate. All utilities should use CSS variables where possible to support theming.