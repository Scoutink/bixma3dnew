# Tile Component

The Tile component provides a versatile way to create interactive, animated tiles in various sizes with different effects. Tiles can be used to create a Windows-style tile interface or any grid-based layout with interactive elements.

## Dependencies

- Metro UI Core
- DOM Library

## Usage

### Basic Usage

```html
<div data-role="tile"></div>
```

### With Size and Effect

```html
<div data-role="tile" data-size="wide" data-effect="slide-up"></div>
```

### With Icon and Branding Bar

```html
<div data-role="tile">
    <span class="mif-facebook icon"></span>
    <span class="branding-bar">Facebook</span>
</div>
```

### With Badges

```html
<div data-role="tile" class="bg-red">
    <span class="badge-top">10</span>
    <span class="badge-bottom">5</span>
</div>
```

### Creating a Grid of Tiles

```html
<div class="tiles-grid">
    <div data-role="tile" data-size="small">Tile 1</div>
    <div data-role="tile" data-size="medium">Tile 2</div>
    <div data-role="tile" data-size="wide">Tile 3</div>
    <div data-role="tile" data-size="large">Tile 4</div>
</div>
```

### With Slide Effect

```html
<div data-role="tile" data-effect="slide-up" data-size="wide">
    <div class="slide" data-cover="./images/image1.jpg"></div>
    <div class="slide" data-cover="./images/image2.jpg"></div>
    <div class="slide" data-cover="./images/image3.jpg"></div>
</div>
```

### With Image Set Effect

```html
<div data-role="tile" data-size="wide" data-effect="image-set">
    <img src="./images/image1.jpg" alt="">
    <img src="./images/image2.jpg" alt="">
    <img src="./images/image3.jpg" alt="">
    <img src="./images/image4.jpg" alt="">
    <img src="./images/image5.jpg" alt="">
</div>
```

### With Hover Effect

```html
<div data-role="tile" class="effect-hover-slide-up">
    <div class="slide-front" data-cover="./images/image1.jpg"></div>
    <div class="slide-back" data-cover="./images/image2.jpg"></div>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `tileDeferred` | number | 0 | Delay before initialization |
| `size` | string | "medium" | Size of the tile. Possible values: "small", "medium", "wide", "large", "app" |
| `cover` | string | "" | URL to the background image |
| `coverPosition` | string | "center" | Position of the background image |
| `effect` | string | "" | Animation effect for the tile. Possible values: "slide-up", "slide-down", "slide-left", "slide-right", "fade", "zoom", "swirl", "switch", "image-set" |
| `effectInterval` | number | 3000 | Interval between animation effects in milliseconds |
| `effectDuration` | number | 500 | Duration of the animation effect in milliseconds |
| `target` | string | null | URL to navigate to when the tile is clicked |
| `canTransform` | boolean | true | Whether the tile can transform when clicked |
| `onTileClick` | function | Metro.noop | Callback function when the tile is clicked |
| `onTileCreate` | function | Metro.noop | Callback function when the tile is created |

## API Methods

+ `_runEffects()` - Starts the animation effects for the tile
+ `_stopEffects()` - Stops the animation effects for the tile
+ `_setCover(element, src, position)` - Sets the background image for the tile
+ `destroy()` - Removes the tile and its event handlers

### Example of Method Usage

```javascript
const tile = Metro.getPlugin('#myTile', 'tile');
tile.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTileClick` | Triggered when the tile is clicked |
| `onTileCreate` | Triggered when the tile is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--tile-background` | #ededed | #26282e | Background color of the tile |
| `--tile-color` | #191919 | #ffffff | Text color of the tile |
| `--tile-border-color` | var(--border-color) | var(--border-color) | Border color of the tile |
| `--tile-border-radius` | 6px | 6px | Border radius of the tile |
| `--tile-badge-background` | rgba(25, 25, 25, 0.1) | rgba(25, 25, 25, 0.1) | Background color of the badge |
| `--tile-badge-color` | #191919 | #ffffff | Text color of the badge |
| `--tile-grid-gap` | 10px | 10px | Gap between tiles in a grid |

### Example of Custom Styling

```css
.my-custom-tile {
    --tile-background: #3498db;
    --tile-color: #ffffff;
    --tile-border-radius: 10px;
}
```

## Available CSS Classes

### Base Classes
- `.tile-small` - Small tile (70px x 70px)
- `.tile-medium` - Medium tile (150px x 150px)
- `.tile-wide` - Wide tile (310px x 150px)
- `.tile-large` - Large tile (310px x 310px)
- `.tile-app` - App tile (44px x 44px)

### Element Classes
- `.icon` - Icon inside the tile
- `.branding-bar` - Bar at the bottom of the tile
- `.badge-top` - Badge at the top right of the tile
- `.badge-bottom` - Badge at the bottom right of the tile
- `.slide` - Slide for animation effects
- `.slide-front` - Front slide for hover effects
- `.slide-back` - Back slide for hover effects

### Effect Classes
- `.transform-right` - Transformation effect when clicked on the right side
- `.transform-left` - Transformation effect when clicked on the left side
- `.transform-top` - Transformation effect when clicked on the top side
- `.transform-bottom` - Transformation effect when clicked on the bottom side
- `.effect-hover-slide-up` - Slide up effect on hover
- `.effect-hover-slide-down` - Slide down effect on hover
- `.effect-hover-slide-left` - Slide left effect on hover
- `.effect-hover-slide-right` - Slide right effect on hover
- `.effect-hover-zoom-up` - Zoom up effect on hover
- `.effect-hover-zoom-down` - Zoom down effect on hover
- `.effect-hover-zoom-left` - Zoom left effect on hover
- `.effect-hover-zoom-right` - Zoom right effect on hover
- `.image-set` - Special effect for displaying multiple images in a tile

### Layout Classes
- `.tiles-grid` - Grid layout for tiles
- `.tiles-group` - Group of tiles with a title