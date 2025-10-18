# Input Mask

The Input Mask component provides input field masking functionality, allowing users to enter data in a predefined format. It enforces input patterns and provides visual guidance through placeholder characters.

## Dependencies

This component requires the Metro UI core library and extends the input component functionality.

## Usage

### Basic Usage

```html
<!-- Phone number mask -->
<input type="text" 
       data-role="input, input-mask"
       data-mask="+38 (___) ___-____"
       data-mask-pattern="\d"
       data-label="Phone number:">

<!-- Date mask -->
<input type="text"
       data-role="input, input-mask"
       data-mask="DD/MM/YYYY"
       data-mask-pattern="\d"
       data-mask-placeholder="DMY"
       data-label="Date:">

<!-- Time mask -->
<input type="text"
       data-role="input, input-mask"
       data-mask="hh:mm"
       data-mask-pattern="\d"
       data-mask-placeholder="hm"
       data-label="Time:">
```

### Advanced Configurations

```html
<!-- Credit card mask -->
<input type="text"
       data-role="input, input-mask"
       data-mask="**** **** **** ****"
       data-mask-placeholder="*"
       data-mask-pattern="\d"
       data-label="Credit card:">

<!-- Custom mask with editable start position -->
<input type="text"
       data-role="input, input-mask"
       data-mask="+38 (___) ___-____"
       data-mask-editable-start="5"
       data-mask-pattern="\d"
       data-label="Phone number:">

<!-- Custom mask with character transformation -->
<input type="text"
       data-role="input, input-mask"
       data-mask="____-_AB_-_CD_-____"
       data-mask-pattern="\w"
       data-on-char="transformChar"
       data-label="Custom:">
```

### JavaScript Initialization

```javascript
const inputMask = Metro.makePlugin("#myInput", "input-mask", {
    mask: "DD/MM/YYYY",
    maskPattern: "\\d",
    maskPlaceholder: "DMY"
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `mask` | string | null | The mask pattern defining the input format. Use underscore (_) or custom placeholder characters for editable positions |
| `maskPattern` | string | "." | Regular expression pattern that defines which characters are allowed in editable positions |
| `maskPlaceholder` | string | "_" | Character(s) used as placeholders in the mask for editable positions |
| `maskEditableStart` | number | 0 | Starting position from which the user can edit (useful for prefixed masks) |
| `thresholdInterval` | number | 300 | Time in milliseconds for cursor positioning threshold |
| `onChar` | function | Metro.noop | Callback function to transform characters before they are inserted |
| `onInputMaskCreate` | function | Metro.noop | Callback function executed when the input mask is created |

## API Methods

+ `destroy()` - Removes the input mask functionality and cleans up event listeners.

#### Example of Method Usage

```javascript
const inputMask = Metro.getPlugin('#myInput', 'input-mask');
inputMask.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onChar` | Fired when a character is being entered, allows transformation of the character |
| `onInputMaskCreate` | Fired when the input mask component is created |

### Event Usage Example

```javascript
function transformChar(char) {
    if (char.toLowerCase() === "x") {
        return "Y";
    } else {
        return "Z";
    }
}
```

## Mask Patterns

The input mask uses specific characters to define the mask pattern:

- **Underscore (_)** - Default placeholder for editable positions
- **Fixed characters** - Any character that is not a placeholder will be treated as a fixed character in the mask
- **Custom placeholders** - You can define custom placeholder characters using the `maskPlaceholder` parameter

### Common Mask Examples

```html
<!-- Phone numbers -->
data-mask="+1 (___) ___-____"
data-mask="(___) ___-____"

<!-- Dates -->
data-mask="DD/MM/YYYY"
data-mask="MM-DD-YYYY"

<!-- Time -->
data-mask="hh:mm"
data-mask="hh:mm:ss"

<!-- Credit cards -->
data-mask="**** **** **** ****"

<!-- Custom formats -->
data-mask="___-___-___"
data-mask="AA-####-BB"
```

## Pattern Validation

Use the `maskPattern` parameter to define which characters are allowed:

- `\d` - Only digits (0-9)
- `\w` - Word characters (letters, digits, underscore)
- `[A-Z]` - Only uppercase letters
- `[a-z]` - Only lowercase letters
- `[A-Za-z]` - Only letters
- `.` - Any character (default)

## Keyboard Navigation

The input mask provides enhanced keyboard navigation:

- **Arrow keys** - Navigate through editable positions
- **Home/Arrow Up** - Jump to the first editable position
- **End** - Move to the end of the mask
- **Backspace** - Delete character and move to previous position
- **Tab** - Move to next form element
- **Space** - Skip to next editable position

## Styling

The input mask component inherits all styling from the base input component. No additional CSS variables are specific to the input mask functionality.

Refer to the input component documentation for available styling options.

## Additional Notes

- The mask must be provided; the component will throw an error if no mask is specified
- The component automatically positions the cursor to the first editable position when focused
- Fixed characters in the mask cannot be edited or deleted
- The component prevents input of characters that don't match the specified pattern
- When the input is cleared, it automatically restores the mask template

## Best Practices

- Use clear and intuitive mask patterns that match user expectations
- Provide appropriate labels to indicate the expected format
- Use the `maskEditableStart` parameter for masks with fixed prefixes
- Implement the `onChar` callback for custom character transformations when needed
- Test masks with various input methods (keyboard, paste, etc.)
- Consider accessibility when designing mask patterns