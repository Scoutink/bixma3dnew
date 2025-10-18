# Cube

A 3D cube visualization component with animated cells that can be used for decorative or interactive purposes. The cube displays a three-sided 3D object with cells that can flash according to predefined or custom rules.

## Dependencies

- Metro UI Core
- Dom
- Farbe (for color manipulation)

## Usage

### Basic Usage

```html
<!-- Basic cube with default settings -->
<div data-role="cube"></div>
```

### With Custom Flash Color

```html
<!-- Cube with orange flash color -->
<div data-role="cube" data-flash-color="orange"></div>
```

### With Custom Cell Count and Margin

```html
<!-- Cube with 5x5 cells grid and smaller margins -->
<div data-role="cube" data-cells="5" data-margin="4"></div>
```

### With Visible Axes

```html
<!-- Cube with visible axes -->
<div data-role="cube" data-show-axis="true" data-axis-style="arrow"></div>
```

### With Custom Rules

```html
<!-- Cube with custom animation rules -->
<div data-role="cube" data-rules='[
  {
    "on": { "top": [1, 5, 9], "left": [4, 8, 12], "right": [3, 7, 11] },
    "off": { "top": [13, 16], "left": [1, 2], "right": [14, 15] }
  }
]'></div>
```

### With Cell Numbers

```html
<!-- Cube with numbered cells -->
<div data-role="cube" data-numbers="true"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `cubeDeferred` | number | 0 | Delay in milliseconds before the cube initialization |
| `rules` | object/array | null | Custom rules for cell animation. If null, default rules are used |
| `color` | string | null | Custom color for cells (CSS color or class name) |
| `flashColor` | string | null | Custom color for flashing cells |
| `flashInterval` | number | 1000 | Interval in milliseconds between flashes |
| `numbers` | boolean | false | When true, displays numbers in cells |
| `offBefore` | boolean | true | When true, turns off all cells before starting a new animation |
| `attenuation` | number | 0.3 | Attenuation factor for the pulsing effect (0-1) |
| `stopOnBlur` | boolean | false | When true, stops animation when window loses focus |
| `cells` | number | 4 | Number of cells per side (creates a cells×cells grid) |
| `margin` | number | 8 | Margin between cells in pixels |
| `showAxis` | boolean | false | When true, displays coordinate axes |
| `axisStyle` | string | "arrow" | Style of the axes ("arrow", "line", or "no-style") |
| `cellClick` | boolean | false | When true, allows toggling cell state by clicking |
| `autoRestart` | number | 5000 | Time in milliseconds before auto-restarting animation after toRule() |
| `clsCube` | string | "" | Additional CSS class for the cube container |
| `clsCell` | string | "" | Additional CSS class for cells |
| `clsSide` | string | "" | Additional CSS class for cube sides |
| `clsSideLeft` | string | "" | Additional CSS class for the left side |
| `clsSideRight` | string | "" | Additional CSS class for the right side |
| `clsSideTop` | string | "" | Additional CSS class for the top side |
| `clsSideLeftCell` | string | "" | Additional CSS class for cells on the left side |
| `clsSideRightCell` | string | "" | Additional CSS class for cells on the right side |
| `clsSideTopCell` | string | "" | Additional CSS class for cells on the top side |
| `clsAxis` | string | "" | Additional CSS class for axes |
| `clsAxisX` | string | "" | Additional CSS class for X axis |
| `clsAxisY` | string | "" | Additional CSS class for Y axis |
| `clsAxisZ` | string | "" | Additional CSS class for Z axis |
| `custom` | function | Metro.noop | Custom function for animation instead of default rules |
| `onTick` | function | Metro.noop | Callback function triggered on each animation step |
| `onCubeCreate` | function | Metro.noop | Callback function triggered when cube is created |

## API Methods

+ `start()` - Starts the cube animation.
+ `stop()` - Stops the cube animation.
+ `toRule(index, speed)` - Executes rules up to the specified index. Optional `speed` parameter controls animation speed.
+ `rule(r)` - Gets current rules when called without arguments, or sets new rules when provided with rules object/array.
+ `axis(show)` - Shows or hides the coordinate axes based on the boolean `show` parameter.
+ `changeRules()` - Updates rules from the `data-rules` attribute.
+ `changeAxisVisibility()` - Updates axis visibility from the `data-show-axis` attribute.
+ `changeAxisStyle()` - Updates axis style from the `data-axis-style` attribute.
+ `changeAttribute(attributeName)` - Updates component based on changed attribute.
+ `destroy()` - Removes the cube component and cleans up event handlers.

### Example of Method Usage

```javascript
// Get the cube component
const cube = Metro.getPlugin('#myCube', 'cube');

// Start the animation
cube.start();

// Stop the animation
cube.stop();

// Execute rules up to index 2
cube.toRule(2);

// Show the axes
cube.axis(true);

// Set custom rules
cube.rule([
  {
    on: { top: [1, 5, 9], left: [4, 8, 12], right: [3, 7, 11] },
    off: { top: [13, 16], left: [1, 2], right: [14, 15] }
  }
]);
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTick` | Triggered on each animation step with the current rule index |
| `onCubeCreate` | Triggered when the cube is created |

## Styling with CSS Variables

The Cube component uses several LESS variables for styling that can be customized:

| Variable | Default | Description |
| -------- | ------- | ----------- |
| `@cubeCellBackground` | #231F20 | Background color of cube cells |
| `@cubeCellBorder` | #303030 | Border color of cube cells |
| `@cubeCellColor` | #767676 | Color for cube cell shadows |
| `@cubeCellFlash` | #c4122f | Color for flashing cells and axes |

### Example of Custom Styling

```css
/* Custom styling for a cube */
#myCube {
    --cube-cell-background: #1a1a1a;
    --cube-cell-border: #2a2a2a;
    --cube-cell-color: #555555;
    --cube-cell-flash: #00a1e4;
}
```

## Available CSS Classes

### Base Classes
- `.cube` - Main container class
- `.side` - Class for cube sides
- `.cube-cell` - Class for individual cells
- `.axis` - Class for coordinate axes

### Side Classes
- `.left-side` - Left side of the cube
- `.right-side` - Right side of the cube
- `.top-side` - Top side of the cube

### State Classes
- `.light` - Applied to cells when they are illuminated

### Axis Style Classes
- `.arrow` - Arrow style for axes
- `.line` - Line style for axes
- `.no-style` - No decorations for axes
- `.axis-x` - X axis
- `.axis-y` - Y axis
- `.axis-z` - Z axis

## Global Configuration

You can set global defaults for all cube components:

```javascript
Metro.cubeSetup({
    cells: 5,
    margin: 4,
    flashInterval: 800,
    showAxis: true
});
```

## Complete Example

```html
<div id="animatedCube"
     data-role="cube"
     data-cells="5"
     data-margin="4"
     data-flash-color="#00a1e4"
     data-show-axis="true"
     data-axis-style="arrow"
     data-numbers="true"
     data-stop-on-blur="true">
</div>

<script>
    // Access the cube component
    const cube = Metro.getPlugin('#animatedCube', 'cube');
    
    // Add a custom event handler
    cube.element.on(Metro.events.click, function() {
        cube.stop();
        setTimeout(function() {
            cube.start();
        }, 1000);
    });
</script>
```

## JavaScript Initialization

You can also initialize the cube component via JavaScript:

```javascript
Metro.makePlugin('#myCube', 'cube', {
    cells: 5,
    margin: 4,
    flashColor: '#00a1e4',
    showAxis: true,
    axisStyle: 'arrow',
    numbers: true,
    onTick: function(index) {
        console.log('Animation step:', index);
    }
});
```