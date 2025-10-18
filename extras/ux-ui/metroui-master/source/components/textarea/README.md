# Textarea

The Textarea component provides an enhanced textarea field with additional features like auto-sizing, character counting, clear button, and custom styling options.

## Dependencies

- Metro UI Core
- DOM utilities

## Usage

### Basic Usage

```html
<textarea data-role="textarea"></textarea>
```

### With Maximum Height

```html
<textarea data-role="textarea" data-max-height="300"></textarea>
```

### With Label

```html
<textarea data-role="textarea" data-label="Text"></textarea>
```

### With Character Counter

```html
<textarea data-role="textarea" data-chars-counter="#counter"></textarea>
<span id="counter">0</span>
```

### With Prepend and Append

```html
<textarea data-role="textarea" data-prepend="<span class='mif-pencil'></span>" data-append="<span class='mif-checkmark'></span>"></textarea>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `label` | String | `""` | Label text for textarea |
| `textareaDeferred` | Number | `0` | Defer initialization of component |
| `charsCounter` | String | `null` | Selector for element to display character count |
| `charsCounterTemplate` | String | `"$1"` | Template for character counter, where $1 is replaced with the count |
| `defaultValue` | String | `""` | Default value for the textarea |
| `prepend` | String | `""` | Content to prepend before textarea |
| `append` | String | `""` | Content to append after textarea |
| `clearButton` | Boolean | `true` | Show clear button |
| `clearButtonIcon` | String | `"❌"` | Icon for clear button |
| `autoSize` | Boolean | `true` | Auto-resize textarea based on content |
| `maxHeight` | Number | `0` | Maximum height for textarea (0 = no limit) |
| `clsPrepend` | String | `""` | Additional class for prepend element |
| `clsAppend` | String | `""` | Additional class for append element |
| `clsComponent` | String | `""` | Additional class for component element |
| `clsTextarea` | String | `""` | Additional class for textarea element |
| `clsLabel` | String | `""` | Additional class for label element |

## API Methods

+ `resize()` - Recalculates the height of the textarea based on its content.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.resize();
```

+ `clear()` - Clears the textarea.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.clear();
```

+ `toDefault()` - Resets the textarea to its default value.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.toDefault();
```

+ `length()` - Returns the number of characters in the textarea.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
const charCount = textarea.length();
```

+ `disable()` - Disables the textarea.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.disable();
```

+ `enable()` - Enables the textarea.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.enable();
```

+ `toggleState()` - Toggles between enabled and disabled states.

```javascript
const textarea = Metro.getPlugin('#my-textarea', 'textarea');
textarea.toggleState();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onChange` | Triggered when textarea value changes, provides `{val, length}` |
| `onTextareaCreate` | Triggered after textarea component creation, provides `{element}` |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--textarea-color` | `#191919` | `#dbdfe7` | Text color |
| `--textarea-border-color` | `var(--border-color)` | `#444444` | Border color |
| `--textarea-font-size` | `14px` | `14px` | Font size |
| `--textarea-border-radius` | `4px` | `4px` | Border radius |

### Example of Custom Styling

```css
#my-textarea {
    --textarea-color: #0066cc;
    --textarea-border-color: #99ccff;
    --textarea-font-size: 16px;
    --textarea-border-radius: 8px;
}
```

## Available CSS Classes

### Base Classes
- `.textarea` - Main container class
- `.fake-textarea` - Hidden textarea used for auto-sizing calculations

### Modifiers
- `.no-scroll-vertical` - Hides vertical scrollbar when auto-sizing is enabled
- `.disabled` - Applied when the textarea is disabled
- `.rtl` - Applied for right-to-left text direction

### Child Elements
- `.prepend` - Container for prepended content
- `.append` - Container for appended content
- `.input-clear-button` - Clear button