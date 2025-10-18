# Input Common Component

The Input Common component provides base styling and functionality for all input-related components in Metro UI. It establishes consistent appearance and behavior for various input types including text inputs, textareas, selects, and custom input components.

## Dependencies

This component requires:
- Metro UI core
- LESS variables and mixins

## Usage

The Input Common component is not used directly but is imported by other input-related components. It provides base styling for standard HTML inputs as well as Metro UI custom input components.

### Basic HTML Inputs

```html
<!-- Standard HTML inputs automatically receive styling -->
<input type="text" placeholder="Text input">
<input type="password" placeholder="Password input">
<input type="email" placeholder="Email input">
<textarea placeholder="Textarea"></textarea>
<select>
    <option>Select option</option>
</select>
```

### Metro UI Input Components

```html
<!-- Metro UI components that use input-common styling -->
<input type="text" data-role="input" placeholder="Metro UI Input">
<textarea data-role="textarea" placeholder="Metro UI Textarea"></textarea>
<select data-role="select">
    <option>Metro UI Select</option>
</select>
<div data-role="spinner"></div>
<div data-role="tag-input"></div>
<div data-role="file-input"></div>
```

## Styling with CSS Variables

The Input Common component defines CSS variables for consistent styling across all input types:

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--input-background` | #ffffff | #2b2d30 | Background color of inputs |
| `--input-background-disabled` | #f7f8fa | #2b2d30 | Background color of disabled inputs |
| `--input-color-disabled` | #c9ccd6 | #333437 | Text color of disabled inputs |
| `--input-border-color` | #c9ccd6 | #4e5157 | Border color of inputs |
| `--input-border-color-hover` | #adb0b8 | #71757e | Border color of inputs on hover |
| `--input-color` | #161316 | #dfe1e5 | Text color of inputs |
| `--input-box-shadow` | rgba(201, 204, 214, 0.42) | rgba(78, 81, 87, 0.43) | Box shadow color for focused inputs |
| `--input-prepend-background` | #f8f8f8 | #4e5157 | Background color of prepended elements |
| `--input-prepend-color` | #191919 | #bac1cf | Text color of prepended elements |
| `--input-append-background` | #f8f8f8 | #4e5157 | Background color of appended elements |
| `--input-append-color` | #191919 | #bac1cf | Text color of appended elements |
| `--input-required-color` | #468cff | #468cff | Color for required inputs |
| `--input-invalid-color` | #ad2a14 | #ad2a14 | Color for invalid inputs |
| `--input-valid-color` | #4cad14 | #4cad14 | Color for valid inputs |
| `--input-border-radius` | 6px | 6px | Border radius of inputs |
| `--input-font-size` | 14px | 14px | Font size of inputs (used in some components) |

### Example of Custom Styling

```css
/* Custom styling for all inputs in a specific container */
.custom-form {
    --input-background: #f0f7ff;
    --input-border-color: #90caf9;
    --input-border-color-hover: #42a5f5;
    --input-color: #0d47a1;
    --input-border-radius: 8px;
}
```

## Available CSS Classes

### Base Classes
- Applied to various input elements (`input`, `textarea`, `select`, etc.) and Metro UI input components:
  - `.metro-input` - Base class for Metro UI inputs
  - `.input` - Base class for custom input components
  - `.textarea` - Base class for textarea components
  - `.select` - Base class for select components
  - `.file` - Base class for file input components
  - `.tag-input` - Base class for tag input components
  - `.spinner` - Base class for spinner components
  - `.color-picker` - Base class for color picker components

### State Classes
- `.focused` - Applied when input is focused
- `.disabled` - Applied when input is disabled
- `.required` - Applied to required inputs
- `.invalid` - Applied to invalid inputs
- `.valid` - Applied to valid inputs
- `.hide-cursor` - Hides the cursor in the input
- `.rtl` - Right-to-left text direction

### Structure Classes
- `.prepend` - Container for prepended content
- `.append` - Container for appended content
- `.input-clear-button` - Clear button
- `.input-reveal-button` - Reveal button for password inputs
- `.hidden-input` - Visually hidden input
- `.invalid_feedback` - Container for validation error messages
- `.label-for-input` - Style for input label

## Validation

The Input Common component provides styling for validation states:

```html
<!-- Required input -->
<input type="text" data-role="input" class="required" placeholder="Required field">

<!-- Valid input -->
<input type="text" data-role="input" class="valid" placeholder="Valid input">

<!-- Invalid input -->
<input type="text" data-role="input" class="invalid" placeholder="Invalid input">

<!-- Input with validation feedback -->
<div>
    <input type="text" data-role="input" class="invalid" placeholder="Invalid input">
    <span class="invalid_feedback">Please enter a valid value</span>
</div>

<!-- Custom validation using HTML5 validation -->
<form class="custom-validation">
    <input type="email" required placeholder="Email (required)">
    <span class="invalid_feedback">Please enter a valid email address</span>
</form>
```

## Best Practices

1. Use appropriate input types (text, password, email, etc.) for better mobile keyboard support
2. Provide clear labels for inputs to improve accessibility
3. Use validation classes consistently to provide clear feedback to users
4. Consider using the RTL class for right-to-left languages
5. Use the custom-validation class on forms to enable HTML5 validation styling