# Directive Component

The Directive component creates styled directive boxes for displaying notes, warnings, tips, and other informational content in your application.

## Dependencies

None

## Usage

### Basic Usage

```html
<div data-role="directive" 
     data-directive="note"
     data-show-icon="true"
     data-title="Note"
     data-style="1">
    This is a note directive.
</div>
```

### Additional Configurations

```html
<!-- Warning directive with custom title -->
<div data-role="directive" 
     data-directive="warning" 
     data-title="Attention!">
    This is a warning directive with a custom title.
</div>

<!-- Info directive with style 2 -->
<div data-role="directive" 
     data-directive="info" 
     data-style="2">
    This is an info directive with style 2.
</div>

<!-- Success directive without icon -->
<div data-role="directive" 
     data-directive="success" 
     data-show-icon="false">
    This is a success directive without an icon.
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| directive | string | "note" | Type of directive. Options: note, info, warning, caution, tip, success, important, bug, shit, air, fuck |
| showIcon | boolean | true | Whether to show an icon |
| title | string | "default" | Title of the directive. If set to "default", it will use the localized label for the directive type |
| style | number | 1 | Style of the directive. Options: 1, 2, 3 |
| onDirectiveCreate | function | Metro.noop | Event fired when directive is created |

## API Methods

+ Metro.directiveSetup(options) - Configure global defaults for all directive components.

#### Example of Method Usage
```javascript
Metro.directiveSetup({
    directive: "info",
    showIcon: false,
    style: 2
});
```

+ destroy() - Remove the directive component.

#### Example of Method Usage
```javascript
const directive = Metro.getPlugin('#myDirective', 'directive');
directive.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| onDirectiveCreate | Fired when the directive component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| --directive-background | #f9f9f9 | Varies by type | Background color |
| --directive-color | #191919 | #ffffff | Text color |
| --directive-border-color | #3c3c3c1a | Varies by type | Border color |
| --directive-title-color | #3c3c3c | Varies by type | Title color |
| --directive-border-radius | 10px | Same | Border radius |
| --directive-code-background | #f5f5f5 | Same | Code background color |
| --directive-icon-background | #f5f5f5 | Same | Icon background color |
| --directive-icon-color | #7a7a7a | Varies by type | Icon color |
| --directive-icon-size | 3rem | Same | Icon size |

### Example of Custom Styling

```css
/* Custom styling for info directives */
.directive.directive-info {
    --directive-background: #e6f7ff;
    --directive-border-color: #91d5ff;
    --directive-title-color: #1890ff;
}

/* Dark mode styling */
.dark-side .directive-note {
    --directive-background: #292e37!important;
    --directive-border-color: #5454547a!important;
    --directive-title-color: #ffffff!important;
}
```

## Available CSS Classes

### Base Classes
- `.directive` - Main container class
- `.directive-title` - Title element class
- `.directive-style-1` - Default style (icon on right)
- `.directive-style-2` - Alternative style with icon on left and thicker border
- `.directive-style-3` - Alternative style with icon on left and padding

### Modifiers
- `.directive-note` - Default note style
- `.directive-info` - Blue styling for informational content
- `.directive-tip`, `.directive-success` - Green styling for tips and success messages
- `.directive-warning` - Yellow styling for warnings
- `.directive-caution`, `.directive-alert`, `.directive-error` - Red styling for errors and important cautions
- `.directive-important` - Orange styling for important information
- `.directive-bug` - Styling for bug notes
- `.directive-air` - Light styling for less important notes
- `.directive-shit` - Brown styling for negative notes
- `.directive-fuck` - Neutral styling with specific icon