# Progress Component

The Progress component provides a visual indicator of an operation's progress. It supports various styles, types, and customization options to fit different UI requirements.

## Dependencies

- Metro UI Core
- DOM library

## Usage

### Basic Progress Bar

```html
<!-- Basic progress bar -->
<div data-role="progress" data-value="50"></div>

<!-- Progress bar with label and value -->
<div data-role="progress" data-value="75" data-show-label="true" data-show-value="true"></div>

<!-- Small progress bar -->
<div data-role="progress" data-value="25" data-small="true"></div>
```

### Progress Types

```html
<!-- Standard progress bar (default) -->
<div data-role="progress" data-type="bar" data-value="60"></div>

<!-- Buffer progress bar -->
<div data-role="progress" data-type="buffer" data-value="40" data-buffer="70"></div>

<!-- Loading animation -->
<div data-role="progress" data-type="load"></div>

<!-- Line progress animation -->
<div data-role="progress" data-type="line"></div>

<!-- Segmented progress bar -->
<div data-role="progress" data-type="segment" data-value="50" data-segment-size="15"></div>
```

### Colored Progress Bars

```html
<!-- Primary colored progress bar -->
<div data-role="progress" data-value="65" class="progress-primary"></div>

<!-- Success colored progress bar -->
<div data-role="progress" data-value="80" class="progress-success"></div>

<!-- Warning colored progress bar -->
<div data-role="progress" data-value="45" class="progress-warning"></div>

<!-- Alert colored progress bar -->
<div data-role="progress" data-value="30" class="progress-alert"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `progressDeferred` | number | `0` | Delay before progress animation starts |
| `showValue` | boolean | `false` | Whether to show the progress value |
| `showLabel` | boolean | `false` | Whether to show the progress label |
| `label` | string | `"Progress:"` | Text for the progress label |
| `value` | number | `0` | Initial progress value (0-100) |
| `buffer` | number | `0` | Initial buffer value (0-100) for buffer type |
| `type` | string | `"bar"` | Progress type: "bar", "buffer", "load", "line", or "segment" |
| `small` | boolean | `false` | Whether to use the small variant |
| `segmentSize` | number | `10` | Size of segments for segment type |
| `clsProgress` | string | `""` | Additional CSS class for the progress component |
| `clsBack` | string | `""` | Additional CSS class for the background |
| `clsBar` | string | `""` | Additional CSS class for the progress bar |
| `clsBuffer` | string | `""` | Additional CSS class for the buffer bar |
| `clsValue` | string | `""` | Additional CSS class for the value display |
| `clsLabel` | string | `""` | Additional CSS class for the label |
| `clsData` | string | `""` | Additional CSS class for the data container |

## Events

| Event | Description |
| ----- | ----------- |
| `onValueChange` | Triggered when the progress value changes |
| `onBufferChange` | Triggered when the buffer value changes |
| `onComplete` | Triggered when the progress value reaches 100% |
| `onBuffered` | Triggered when the buffer value reaches 100% |
| `onProgressCreate` | Triggered when the progress component is created |

## API Methods

The Progress component provides the following methods:

+ `val(v)` - Get or set the progress value. If `v` is provided, sets the progress value (0-100). If not, returns the current value.
+ `buff(v)` - Get or set the buffer value. If `v` is provided, sets the buffer value (0-100). If not, returns the current buffer value.
+ `changeValue()` - Update the progress value from the `data-value` attribute.
+ `changeBuffer()` - Update the buffer value from the `data-buffer` attribute.

### Example of Method Usage

```javascript
// Get the progress component
const progress = Metro.getPlugin('#myProgress', 'progress');

// Set progress value to 75%
progress.val(75);

// Get current progress value
const currentValue = progress.val();

// Set buffer value to 90%
progress.buff(90);
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--progress-bar-height` | `12px` | `12px` | Height of the progress bar (6px for small variant) |
| `--progress-bar-radius` | `8px` | `8px` | Border radius of the progress bar (4px for small variant) |
| `--progress-bar-back-color` | `#eeeeee` | `#363942` | Background color of the progress bar |
| `--progress-bar-color` | `#60A917` | `#60A917` | Color of the progress bar |
| `--progress-bar-buffer-color` | `#CE352C` | `#CE352C` | Color of the buffer indicator |
| `--progress-bar-line-color` | `#b3d4fc` | `#b3d4fc` | Color of the line animation |
| `--progress-bar-line-back-color` | `#004D6F` | `#004D6F` | Background color of the line animation |
| `--progress-bar-load-color` | radial gradient | radial gradient | Color of the loading animation |
| `--progress-bar-value-color` | `#191919` | `#ffffff` | Color of the value text |

### Example of Custom Styling

```css
/* Custom styling for progress bar */
#custom-progress {
    --progress-bar-height: 16px;
    --progress-bar-radius: 10px;
    --progress-bar-color: #2196f3;
    --progress-bar-back-color: #e3f2fd;
    --progress-bar-buffer-color: #ff9800;
}
```

## Available CSS Classes

### Base Classes
- `.progress-component` - Main container for the progress component
- `.progress` - Progress bar container
- `.progress-data` - Container for label and value
- `.progress-label` - Label text
- `.progress-value` - Value text
- `.small` - Small variant of the progress bar

### Progress Type Classes
- `.with-load` - Applied to load type progress
- `.line` - Applied to line type progress
- `.segments` - Applied to segment type progress

### Element Classes
- `.bar` - Main progress bar
- `.buffer` - Buffer indicator
- `.load` - Loading animation
- `.segment` - Individual segment in segmented progress

### Color Classes
- `.progress-[color]` - Sets both progress bar color and background color
- `.bar-[color]` - Sets only the progress bar color

Available colors include: primary, secondary, success, alert, warning, yellow, orange, red, pink, purple, violet, blue, cyan, green, lime, teal, brown, gray, dark.

## Best Practices

1. Choose the appropriate progress type for your use case:
   - Use "bar" for simple progress indication
   - Use "buffer" when showing both progress and buffering (like in media players)
   - Use "load" or "line" for indeterminate operations
   - Use "segment" for step-based processes

2. Consider using the small variant for less prominent UI elements

3. Add labels and values for important progress indicators to provide context

4. Use color classes to match your application's color scheme and to indicate different types of operations

5. For accessibility, ensure sufficient contrast between the progress bar and its background

6. Update progress values programmatically for dynamic operations:
   ```javascript
   const progress = Metro.getPlugin('#downloadProgress', 'progress');
   
   // Update progress as download progresses
   function updateDownloadProgress(percent) {
       progress.val(percent);
   }
   ```