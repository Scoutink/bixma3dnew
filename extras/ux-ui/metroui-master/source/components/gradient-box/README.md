# Gradient Box

A customizable component that applies gradient backgrounds to elements, supporting both linear and radial gradients with various configuration options.

## Dependencies

- Metro UI Core
- DOM

## Usage

### Basic Usage

```html
<div data-role="gradient-box"></div>
```

### Additional Configurations

```html
<!-- Linear gradient with custom direction and colors -->
<div data-role="gradient-box" 
     data-gradient-type="linear" 
     data-gradient-position="to right" 
     data-gradient-colors="red, yellow">
</div>

<!-- Radial gradient with custom shape and position -->
<div data-role="gradient-box" 
     data-gradient-type="radial" 
     data-gradient-shape="circle" 
     data-gradient-position="center" 
     data-gradient-colors="#55ddff, #0076a5">
</div>

<!-- Repeating gradient -->
<div data-role="gradient-box" 
     data-gradient-type="linear" 
     data-gradient-position="45deg" 
     data-gradient-colors="#e66465, #9198e5 20%" 
     data-gradient-repeat="true">
</div>

<!-- Applied to a button -->
<button class="button border-none fg-white" 
        data-role="gradient-box" 
        data-gradient-position="45deg" 
        data-gradient-colors="red, yellow">
    Button
</button>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `gradientType` | string | "linear" | Type of gradient. Possible values: "linear", "radial" |
| `gradientShape` | string | "" | Shape of the radial gradient. Possible values: "circle", "ellipse" |
| `gradientPosition` | string | "" | Position of the gradient. For linear gradients, it can be a direction like "to bottom", "to right", or an angle like "45deg". For radial gradients, it specifies the center position like "center" or "top left" |
| `gradientSize` | string | "" | Size of the radial gradient. Possible values: "closest-side", "closest-corner", "farthest-side", "farthest-corner" |
| `gradientColors` | string | "#000, #fff" | Comma-separated list of colors for the gradient |
| `gradientRepeat` | boolean | false | Whether to repeat the gradient |

## API Methods

+ `changeAttribute(attr, newValue)` - Updates the gradient according to the new attribute value. This method is called automatically when you change any of the component's data attributes.
+ `destroy()` - Destroys the component and returns the element.

### Example of Method Usage
```javascript
const gradientBox = Metro.getPlugin('#myGradientBox', 'gradient-box');
gradientBox.destroy();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onGradientBoxCreate` | Triggered when the gradient box is created |

## Styling with CSS Variables

The Gradient Box component applies the gradient directly to the background property of the element. There are no specific CSS variables for this component, but you can customize the appearance with standard CSS properties.

### Example of Custom Styling

```css
.my-gradient-box {
    width: 200px;
    height: 100px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* For circular gradients */
.my-circular-gradient {
    border-radius: 50%;
}
```

## Available CSS Classes

### Base Classes
- `.gradient-box` - Main container class that is automatically added to the element

### Usage with Other Classes
The gradient-box component can be combined with other Metro UI classes for enhanced styling:

```html
<div class="p-4 shadow-1" data-role="gradient-box" data-gradient-colors="red, blue">
    Content with padding and shadow
</div>

<div class="rounded" data-role="gradient-box" data-gradient-type="radial">
    Content with rounded corners
</div>
```