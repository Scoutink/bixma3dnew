# Form Component

The Form component provides styling for HTML forms in Metro UI. It's a CSS-only component that offers various layout options and styling for form elements.

## Dependencies

This component has no dependencies other than the core Metro UI CSS variables.

## Usage

### Basic Usage

```html
<form class="form">
  <!-- Form content -->
</form>
```

Or use the `.form` class on any element:

```html
<div class="form">
  <!-- Form content -->
</div>
```

### Form with Groups and Actions

```html
<form class="form">
  <div class="form-group">
    <label>Username:</label>
    <input type="text">
  </div>
  <div class="form-group">
    <label>Password:</label>
    <input type="password">
  </div>
  <div class="form-actions">
    <button type="submit">Login</button>
    <button type="button">Cancel</button>
  </div>
</form>
```

### Inline Form

Create horizontal form layouts:

```html
<form class="inline-form">
  <div class="form-group">
    <label>Name:</label>
    <input type="text">
  </div>
  <div class="form-group">
    <label>Email:</label>
    <input type="email">
  </div>
  <div class="form-actions">
    <button type="submit">Submit</button>
  </div>
</form>
```

### Grid Form

Create responsive grid layouts for forms:

```html
<form class="grid-form">
  <div class="form-group">
    <label>First Name:</label>
    <input type="text">
  </div>
  <div class="form-group">
    <label>Last Name:</label>
    <input type="text">
  </div>
  <div class="form-group">
    <label>Email:</label>
    <input type="email">
  </div>
  <div class="form-group">
    <label>Phone:</label>
    <input type="tel">
  </div>
  <div class="form-actions">
    <button type="submit">Submit</button>
  </div>
</form>
```

## Plugin Parameters

This component is CSS-only and does not have JavaScript plugin parameters.

## API Methods

This component is CSS-only and does not have JavaScript API methods.

## Events

This component is CSS-only and does not have JavaScript events.

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
|----------|---------------|-------------|-------------|
| `--form-column-min-width` | `200px` | Same | Minimum width for columns in grid forms |
| `--form-gap-size` | `1rem` | Same | Gap size between form elements in grid forms |
| `--border-color` | Inherited from theme | Inherited from theme | Color for borders in form elements |

### Example of Custom Styling

```css
:root {
  --form-column-min-width: 250px;
  --form-gap-size: 1.5rem;
  --border-color: #ccc;
}
```

## Available CSS Classes

### Base Classes
- `.form` - The main container class for form styling
- `.form-group` - Container for form elements with labels
- `.form-actions` - Container for form buttons and controls

### Modifiers
- `.inline-form` - Creates a horizontal form layout
- `.grid-form` - Creates a responsive grid layout for forms

## Notes

- Form groups are stacked vertically by default with a margin between them
- Form actions have a top border by default
- Inline forms remove the top margin from form groups and align elements horizontally
- Grid forms use CSS Grid to create responsive layouts
- The grid form's column width and gap size can be customized using CSS variables
