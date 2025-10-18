# Keypad Component

The Keypad component provides a customizable numeric or custom keypad for input fields. It's useful for applications requiring secure PIN entry, custom character input, or specialized input interfaces. The component supports various configurations including custom keys, key shuffling for security, and different positioning options.

## Dependencies

This component requires:
- Metro UI core
- LESS variables and mixins

## Usage

### Basic Usage

```html
<!-- Basic numeric keypad -->
<input type="text" data-role="keypad">
```

### Custom Keys

```html
<!-- Custom keys with separator -->
<input type="text" 
       data-role="keypad" 
       data-keys="1,2,3,4,5,6,7,8,9,0,ok" 
       data-except-keys="ok"
       data-key-separator="-">
```

### Alphabetic Keypad

```html
<!-- Alphabetic keypad -->
<input type="text" 
       data-role="keypad" 
       data-keys="q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m">
```

### With Label

```html
<!-- Keypad with label -->
<input type="text" data-role="keypad" data-label="Enter PIN:">
```

### Security Features

```html
<!-- Keypad with shuffled keys for security -->
<input type="text" 
       data-role="keypad" 
       data-shuffle="true" 
       data-shuffle-count="5">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `keypadDeferred` | number | 0 | Deferred initialization time in milliseconds |
| `label` | string | "" | Label text for the keypad |
| `keySize` | number | 36 | Size of each key in pixels |
| `keys` | string | "1, 2, 3, 4, 5, 6, 7, 8, 9, 0" | Keys to display, separated by delimiter |
| `exceptKeys` | string | "" | Keys to exclude from input value |
| `keySeparator` | string | "" | Separator between keys in the input value |
| `trimSeparator` | boolean | false | If true, trims separators from the value |
| `keyDelimiter` | string | "," | Delimiter for the keys parameter |
| `copyInlineStyles` | boolean | false | If true, copies inline styles from the input to the keypad |
| `target` | string | null | Target element to receive the keypad value |
| `keyLength` | number | 0 | Maximum length of the input value (0 = unlimited) |
| `shuffle` | boolean | false | If true, shuffles the keys on initialization |
| `shuffleCount` | number | 3 | Number of times to shuffle the keys |
| `serviceButtons` | boolean | true | If true, shows backspace and clear buttons |
| `showValue` | boolean | true | If true, shows the value in the input field |
| `open` | boolean | false | If true, the keypad is open by default |
| `useElementSizeForKeys` | boolean | false | If true, uses the element size for the keypad width |
| `openMode` | string | "auto" | Mode for opening the keypad ("auto" or "up") |
| `clsKeypad` | string | "" | Additional CSS class for the keypad |
| `clsInput` | string | "" | Additional CSS class for the input |
| `clsKeys` | string | "" | Additional CSS class for the keys container |
| `clsKey` | string | "" | Additional CSS class for each key |
| `clsServiceKey` | string | "" | Additional CSS class for service keys |
| `clsBackspace` | string | "" | Additional CSS class for the backspace key |
| `clsClear` | string | "" | Additional CSS class for the clear key |
| `clsLabel` | string | "" | Additional CSS class for the label |

## API Methods

### `shuffle()`

Shuffles the keys for security purposes.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.shuffle();
```

### `shuffleKeys(count)`

Shuffles the keys a specified number of times.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.shuffleKeys(5); // Shuffle 5 times
```

### `val([value])`

Gets or sets the value of the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
// Get value
var value = keypad.val();
// Set value
keypad.val("1234");
```

### `open()`

Opens the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.open();
```

### `close()`

Closes the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.close();
```

### `disable()`

Disables the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.disable();
```

### `enable()`

Enables the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.enable();
```

### `toggleState()`

Toggles the enabled/disabled state of the keypad.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.toggleState();
```

### `setPosition(position)`

Sets the position of the keypad keys.

```javascript
var keypad = Metro.getPlugin('#my-keypad', 'keypad');
keypad.setPosition("top-left");
```

## Events

| Event | Description |
| ----- | ----------- |
| `onKeypadCreate` | Triggered when the keypad is created |
| `onChange` | Triggered when the keypad value changes |
| `onClear` | Triggered when the keypad is cleared |
| `onBackspace` | Triggered when the backspace key is pressed |
| `onShuffle` | Triggered when the keys are shuffled |
| `onKey` | Triggered when a key is pressed |

### Example of Event Usage

```html
<input type="text" 
       data-role="keypad" 
       data-on-key="onKeyPressed" 
       data-on-change="onValueChanged">
```

```javascript
function onKeyPressed(key, value, element) {
    console.log("Key pressed:", key);
    console.log("Current value:", value);
}

function onValueChanged(value) {
    console.log("Value changed to:", value);
}
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--keypad-background` | var(--input-background) | var(--input-background) | Background color of the keypad |
| `--keypad-color` | var(--input-color) | var(--input-color) | Text color of the keypad |
| `--keypad-border-color` | #E8E8E8 | #4A4D51 | Border color of the keypad |
| `--keypad-border-radius` | 4px | 4px | Border radius of the keypad |

### Example of Custom Styling

```css
/* Custom styling for a specific keypad */
#my-keypad {
    --keypad-background: #f0f7ff;
    --keypad-color: #0d47a1;
    --keypad-border-color: #90caf9;
    --keypad-border-radius: 8px;
}
```

## Available CSS Classes

### Base Classes
- `.keypad` - Base class for the keypad component
- `.keys` - Container for the keypad keys
- `.key` - Individual key
- `.service-key` - Service keys (backspace, clear)

### Position Classes
- `.keys.right` - Positions the keypad to the right of the input
- `.keys.bottom` - Positions the keypad below the input
- `.keys.top` - Positions the keypad above the input
- `.keys.left` - Positions the keypad to the left of the input
- `.keys.bottom-left` - Positions the keypad below and to the left of the input
- `.keys.bottom-right` - Positions the keypad below and to the right of the input
- `.keys.top-left` - Positions the keypad above and to the left of the input
- `.keys.top-right` - Positions the keypad above and to the right of the input

### State Classes
- `.open` - Applied when the keypad is open
- `.focused` - Applied when the input is focused
- `.disabled` - Applied when the keypad is disabled

## Best Practices

1. For security-sensitive applications (like PIN entry), use the shuffle feature to prevent pattern recognition
2. Provide clear labels for keypad inputs to improve accessibility
3. Consider using custom keys for specialized input requirements
4. For mobile applications, adjust the key size for better touch interaction
5. Use the positioning options to ensure the keypad is visible on all screen sizes