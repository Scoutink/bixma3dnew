# Validator

The Validator component provides form validation functionality with a variety of validation rules. It allows you to validate form inputs using custom data attributes and handles form submission based on validation results. The component automatically validates form inputs before submission and prevents the form from being submitted if validation fails.

## Dependencies

- Farbe - Used for color validation

## Usage

### Basic Usage

```html
<form data-role="validator">
    <input type="text" data-validate="required">
    <input type="email" data-validate="required email">
    <input type="number" data-validate="required number min=0 max=100">
    <button type="submit">Submit</button>
</form>
```

### Additional Configurations

```html
<form data-role="validator" data-interactive-check="true" data-clear-invalid="2000">
    <div class="form-group">
        <label>Email</label>
        <input type="email" data-validate="required email">
    </div>
    <button type="submit">Submit</button>
</form>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `validatorDeferred` | Number | `0` | Defer initialization of component in milliseconds |
| `submitTimeout` | Number | `200` | Timeout before form submission in milliseconds |
| `interactiveCheck` | Boolean | `false` | If true, validation occurs on input change |
| `clearInvalid` | Number | `0` | Time in milliseconds to automatically clear invalid state (0 = disabled) |
| `requiredMode` | Boolean | `true` | If true, all validation rules are applied; if false, empty fields bypass non-required validations |
| `useRequiredClass` | Boolean | `true` | If true, adds "required" class to elements with required validation |
| `onBeforeSubmit` | Function | `Metro.noop_true` | Triggered before form submission, return false to prevent submission |
| `onSubmit` | Function | `Metro.noop` | Triggered on successful form submission |
| `onError` | Function | `Metro.noop` | Triggered when an input validation fails |
| `onValidate` | Function | `Metro.noop` | Triggered when an input validation passes |
| `onErrorForm` | Function | `Metro.noop` | Triggered when form validation fails |
| `onValidateForm` | Function | `Metro.noop` | Triggered when form validation passes |
| `onValidatorCreate` | Function | `Metro.noop` | Triggered after validator component creation |

## API Methods

The validator component exposes its functionality through the global `Metro.validator` object:

+ `validate(element, result, onOk, onError, requiredMode)` - Validates a specific element with optional result object, callbacks, and required mode.
+ `reset(form)` - Resets validation state for all elements in a form.
+ `reset_state(element)` - Resets the validation state of a specific element.
+ `set_valid_state(element)` - Sets the valid state for a specific element.
+ `set_invalid_state(element)` - Sets the invalid state for a specific element.

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeSubmit` | Triggered before form submission, return false to prevent submission |
| `onSubmit` | Triggered on successful form submission |
| `onError` | Triggered when an input validation fails |
| `onValidate` | Triggered when an input validation passes |
| `onErrorForm` | Triggered when form validation fails |
| `onValidateForm` | Triggered when form validation passes |
| `onValidatorCreate` | Triggered after validator component creation |

## Validation Rules

Add validation rules to form elements using the `data-validate` attribute. Multiple rules can be combined with spaces.

| Rule | Format | Description |
| ---- | ------ | ----------- |
| `required` | `required` | Field cannot be empty |
| `length` | `length=n` | Field must be exactly n characters long |
| `minlength` | `minlength=n` | Field must be at least n characters long |
| `maxlength` | `maxlength=n` | Field must be at most n characters long |
| `min` | `min=n` | Minimum numeric value |
| `max` | `max=n` | Maximum numeric value |
| `email` | `email` | Field must be a valid email address |
| `domain` | `domain` | Field must be a valid domain name |
| `url` | `url` | Field must be a valid URL |
| `date` | `date` | Field must be a valid date. Use `data-value-format` and `data-value-locale` for formatting |
| `number` | `number` | Field must be a number |
| `integer` | `integer` | Field must be an integer |
| `safeInteger` | `safeInteger` | Field must be a safe integer |
| `float` | `float` | Field must be a float number |
| `digits` | `digits` | Field must contain only digits |
| `hexcolor` | `hexcolor` | Field must be a valid hex color code |
| `color` | `color` | Field must be a valid color |
| `pattern` | `pattern=regex` | Field must match the specified regex pattern |
| `compare` | `compare=field_name` | Field value must be equal to the referenced field value |
| `not` | `not=field_name` | Field value must not be equal to the referenced field value |
| `notequals` | `notequals=field_name` | Field value must not be strictly equal to the referenced field value |
| `equals` | `equals=field_name` | Field value must be strictly equal to the referenced field value |
| `custom` | `custom=func_name` | Custom validation function |

## Global Validation Methods

You can use the validator functions directly:

```javascript
// Validate a specific element with a result object
Metro.validator.validate(element, result, onOk, onError, requiredMode);

// Reset validation state for all elements in a form
Metro.validator.reset(form);
```

## Global Configuration

You can globally configure the validator component using the `Metro.validatorSetup` method:

```javascript
Metro.validatorSetup({
    interactiveCheck: true,
    clearInvalid: 2000,
    requiredMode: false,
    useRequiredClass: false
});
```

## Styling with CSS Variables

The validator component doesn't use specific CSS variables for styling, but it adds CSS classes to elements for styling purposes.

## Available CSS Classes

### Base Classes
- `.required` - Added to elements with required validation (if useRequiredClass is true)
- `.invalid` - Added to elements that fail validation
- `.valid` - Added to elements that pass validation

For controls with `data-role` attributes (like select or input), these classes are added to the parent element.

### Example of Custom Styling

```css
/* Custom styling for validation states */
.invalid {
    border-color: #ff0000;
    background-color: #ffeeee;
}

.valid {
    border-color: #00ff00;
    background-color: #eeffee;
}

.required::after {
    content: "*";
    color: #ff0000;
}
```

## Examples

### Basic Form Validation

```html
<form data-role="validator">
    <div class="form-group">
        <label>Name</label>
        <input type="text" data-validate="required">
    </div>
    <div class="form-group">
        <label>Email</label>
        <input type="email" data-validate="required email">
    </div>
    <div class="form-group">
        <label>Age</label>
        <input type="number" data-validate="required number min=18 max=100">
    </div>
    <button type="submit">Submit</button>
</form>
```

### Comparing Fields

```html
<form data-role="validator">
    <div class="form-group">
        <label>Password</label>
        <input type="password" name="password" data-validate="required minlength=6">
    </div>
    <div class="form-group">
        <label>Confirm Password</label>
        <input type="password" data-validate="required compare=password">
    </div>
    <button type="submit">Submit</button>
</form>
```

### Interactive Validation

```html
<form data-role="validator" data-interactive-check="true">
    <div class="form-group">
        <label>Email</label>
        <input type="email" data-validate="required email">
    </div>
    <button type="submit">Submit</button>
</form>
```

### Custom Validation Function

```html
<script>
function validateCustomField(val) {
    // Your custom validation logic
    return val === "correct value";
}
</script>

<form data-role="validator">
    <div class="form-group">
        <label>Custom Field</label>
        <input type="text" data-validate="required custom=validateCustomField">
    </div>
    <button type="submit">Submit</button>
</form>
```
