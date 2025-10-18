# Bulls Component

Bulls is a component that displays different types of status indicators as SVG icons. It's useful for showing success, failure, pending, warning, or informational states in your application.

## Usage

```html
<div data-role="bull" data-type="success" data-size="24"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| type | string | "success" | Type of bull icon. Possible values: "success", "fail", "pending", "warning", "bulb", "default" |
| size | number | 16 | Size of the bull icon in pixels |
| onBullCreate | function | Metro.noop | Callback function triggered when the bull is created |
| onBullChange | function | Metro.noop | Callback function triggered when the bull type is changed |

## API Methods

### setType(type)
Changes the type of the bull component.

```javascript
var bull = Metro.getPlugin('#myBull', 'bull');
bull.setType('warning');
```

### changeAttribute(attr, value)
Changes the attribute of the bull component.

```javascript
var bull = Metro.getPlugin('#myBull', 'bull');
bull.changeAttribute('data-type', 'warning');
```

### destroy()
Removes the bull element from the DOM.

```javascript
var bull = Metro.getPlugin('#myBull', 'bull');
bull.destroy();
```

## Global Configuration

You can set up global configuration for all bull components using:

```javascript
Metro.bullSetup({
    type: "warning",
    size: 32
});
```

## Bull types

- `success`: Indicates a successful operation.
- `fail`: Indicates a failed operation.
- `pending`: Indicates an operation that is still in progress.
- `warning`: Indicates a warning or caution.
- `bulb`: Represents an informational state.
- `star`: Represents a star icon, often used for favorites or highlights.
- `badge`: Represents a badge icon, often used for notifications or counts.
- `chat`: Represents a chat icon, often used for messaging or communication.
- `tree`: Represents a tree icon, often used for hierarchical data or navigation.

### Success Bull
```html
<div data-role="bull" data-type="success"></div>
```

### Failure Bull
```html
<div data-role="bull" data-type="fail"></div>
```

### Pending Bull
```html
<div data-role="bull" data-type="pending"></div>
```

### Warning Bull
```html
<div data-role="bull" data-type="warning"></div>
```

### Bulb (Information) Bull
```html
<div data-role="bull" data-type="bulb"></div>
```

### Custom Size
```html
<div data-role="bull" data-type="success" data-size="32"></div>
```

## Events

| Event | Description |
| --- | --- |
| bull-create | Triggered when the bull component is created |
| bull-change | Triggered when the bull type is changed |

## Styling

The Bulls component uses SVG with inline styling, so there are no specific CSS variables to customize. The colors are defined within the SVG paths:

- Success: Green (#57ab5a)
- Fail: Red (#e5534b)
- Pending: Yellow (#DBAB0A)
- Warning: Orange (#ff4d00)
- Bulb: Yellow (#ffde21)
