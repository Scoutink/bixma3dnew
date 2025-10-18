# Stepper Component

The Stepper component displays a sequence of steps, highlighting the current step and marking completed steps. It's useful for multi-step processes like wizards, forms, or checkout flows.

## Dependencies

No additional dependencies required.

## Usage

### Basic Usage

```html
<div data-role="stepper" data-steps="5" data-step="2"></div>
```

### Additional Configurations

```html
<!-- Circular steps with step 2 active -->
<div data-role="stepper" data-view="cycle" data-step="2"></div>

<!-- Diamond-shaped steps with step 3 active -->
<div data-role="stepper" data-view="diamond" data-step="3"></div>

<!-- Vertical stepper -->
<div data-role="stepper" class="vertical" data-steps="5"></div>

<!-- Interactive stepper (clickable steps) -->
<div data-role="stepper" data-steps="4" data-step="1" data-step-click="true"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| stepperDeferred | number | 0 | Deferred initialization time in milliseconds |
| view | string | "square" | Visual style of the stepper: "square", "cycle", or "diamond" |
| steps | number | 3 | Number of steps to display |
| step | number | 1 | Initial active step |
| stepClick | boolean | false | Whether clicking on a step changes the active step |
| clsStepper | string | "" | Additional CSS class for the stepper container |
| clsStep | string | "" | Additional CSS class for each step |
| clsComplete | string | "" | Additional CSS class for completed steps |
| clsCurrent | string | "" | Additional CSS class for the current step |

## API Methods

+ `next()` - Moves to the next step.
+ `prev()` - Moves to the previous step.
+ `first()` - Moves to the first step.
+ `last()` - Moves to the last step.
+ `toStep(step)` - Moves to a specific step.

### Example of Method Usage

```javascript
const stepper = Metro.getPlugin('#myStepper', 'stepper');

// Move to the next step
stepper.next();

// Move to the previous step
stepper.prev();

// Move to the first step
stepper.first();

// Move to the last step
stepper.last();

// Move to step 3
stepper.toStep(3);
```

## Events

| Event | Description |
| --- | --- |
| onStep | Triggered when the active step changes |
| onStepClick | Triggered when a step is clicked |
| onStepperCreate | Triggered when the stepper is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| --stepper-step-background | #515151 | #515151 | Background color of the step |
| --stepper-step-color | #FFFFFF | #FFFFFF | Text color of the step |
| --stepper-step-background-complete | #00B500 | #00B500 | Background color of completed steps |
| --stepper-step-color-complete | #FFFFFF | #FFFFFF | Text color of completed steps |
| --stepper-step-background-current | #94B6FF | #94B6FF | Background color of the current step |
| --stepper-step-color-current | #FFFFFF | #FFFFFF | Text color of the current step |
| --stepper-line-color | #e3e3e3 | #2b2d30 | Color of the line connecting the steps |

### Example of Custom Styling

```css
#my-stepper {
  --stepper-step-background: #757575;
  --stepper-step-color: #ffffff;
  --stepper-step-background-complete: #4caf50;
  --stepper-step-color-complete: #ffffff;
  --stepper-step-background-current: #2196f3;
  --stepper-step-color-current: #ffffff;
  --stepper-line-color: #e0e0e0;
}
```

## Available CSS Classes

### Base Classes
- `.stepper` - Main container class (automatically added)
- `.stepper.vertical` - For vertical orientation
- `.step` - Individual step element
- `.step.complete` - Completed step
- `.step.current` - Current step

### Modifiers
- `.stepper.cycle` - For circular steps
- `.stepper.diamond` - For diamond-shaped steps

## Examples

### Basic Stepper

```html
<div data-role="stepper" data-steps="5" data-step="2"></div>
```

### Interactive Stepper

```html
<div data-role="stepper" data-steps="4" data-step="1" data-step-click="true"></div>
```

### Stepper with Custom Classes

```html
<div data-role="stepper" 
     data-steps="3" 
     data-cls-stepper="custom-stepper" 
     data-cls-step="custom-step" 
     data-cls-complete="custom-complete" 
     data-cls-current="custom-current">
</div>
```

### Programmatic Creation and Control

```javascript
// Initialize the stepper
const element = document.getElementById('myStepper');
Metro.makePlugin(element, 'stepper', {
    steps: 5,
    step: 1,
    view: 'cycle',
    stepClick: true
});

// Get the stepper instance
const stepper = Metro.getPlugin('#myStepper', 'stepper');

// Add navigation buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    stepper.next();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    stepper.prev();
});
```