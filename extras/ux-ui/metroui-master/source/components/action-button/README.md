# Action Button

The Action Button component creates a floating action button with expandable sub-actions. When the main button is clicked, it reveals a set of additional action buttons arranged in a circular pattern around the main button.

## Usage

### Basic Usage

```html
<div data-role="action-button">
    <button class="main-action">
        <span class="icon"><span class="mif-plus"></span></span>
    </button>
    <ul class="actions">
        <li><a href="#"><span class="mif-home"></span></a></li>
        <li><a href="#"><span class="mif-user"></span></a></li>
        <li><a href="#"><span class="mif-cog"></span></a></li>
        <li><a href="#"><span class="mif-search"></span></a></li>
    </ul>
</div>
```

### With Rotation Effect

```html
<div data-role="action-button">
    <button class="main-action rotate">
        <span class="icon"><span class="mif-plus"></span></span>
    </button>
    <ul class="actions">
        <li><a href="#"><span class="mif-home"></span></a></li>
        <li><a href="#"><span class="mif-user"></span></a></li>
        <li><a href="#"><span class="mif-cog"></span></a></li>
        <li><a href="#"><span class="mif-search"></span></a></li>
    </ul>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `onClick` | function | Metro.noop | Callback function triggered when the main button is clicked |
| `onActionClick` | function | Metro.noop | Callback function triggered when a sub-action is clicked |
| `onActionButtonCreate` | function | Metro.noop | Callback function triggered when the action button is created |

## API Methods

### destroy()

Removes the action button component and its associated elements from the DOM.

```javascript
// Example of method usage
$('#element').data('action-button').destroy();
```
or
```javascript
const comp = Metro.getPlugin('#element', 'action-button');
comp.destroy();
```
or
```javascript
const comp = $('#element').data('action-button');
comp.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onActionButtonCreate` | Triggered when the action button component is created |
| `onClick` | Triggered when the main button is clicked |
| `onActionClick` | Triggered when a sub-action is clicked |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--action-button-background` | #ebebeb | #2b2d30 | Background color of the buttons |
| `--action-button-color` | #191919 | #f3fcff | Text/icon color of the buttons |

### Example of Custom Styling

```css
/* Custom styling example */
#my-action-button {
    --action-button-background: #2196F3;
    --action-button-color: #ffffff;
}
```

## Available CSS Classes

### Base Classes
- `.action-button` - Main container class
- `.main-action` - Class for the main button
- `.actions` - Container for sub-actions
- `.sub-action` - Class for each sub-action item

### Modifiers
- `.rotate` - When applied to the main button, it will rotate 45 degrees when activated

## Additional Information

The Action Button component:
- Creates a circular main button (56px × 56px) with expandable sub-actions (40px × 40px)
- Supports up to 8 sub-actions by default, but can accommodate more (with automatic adjustment)
- Can rotate the main button icon when activated by adding the "rotate" class
- Automatically calculates the position of each sub-action based on the total number of actions
- Closes when clicking outside the component