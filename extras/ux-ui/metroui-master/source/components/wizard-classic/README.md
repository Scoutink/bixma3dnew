# Wizard Classic Component

The Wizard Classic component provides a step-by-step interface for guiding users through multi-step processes or forms. It features customizable navigation buttons, page transitions, and various styling options.

## Usage

### Basic Usage

```html
<div data-role="wizard-classic">
    <div class="page">Page 1 Content</div>
    <div class="page">Page 2 Content</div>
    <div class="page">Page 3 Content</div>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `buttons` | string | `"next, prev, finish, cancel, help"` | Comma-separated list of buttons to display |
| `startPage` | number | `1` | The initial page to show (1-based index) |
| `height` | number | `300` | Height of the wizard in pixels |
| `labelNext` | string | `""` | Custom label for the Next button |
| `labelPrev` | string | `""` | Custom label for the Previous button |
| `labelHelp` | string | `""` | Custom label for the Help button |
| `labelFinish` | string | `""` | Custom label for the Finish button |
| `labelCancel` | string | `""` | Custom label for the Cancel button |
| `iconNext` | string | `""` | HTML for the Next button icon |
| `iconPrev` | string | `""` | HTML for the Previous button icon |
| `iconHelp` | string | `""` | HTML for the Help button icon |
| `iconFinish` | string | `""` | HTML for the Finish button icon |
| `iconCancel` | string | `""` | HTML for the Cancel button icon |
| `clsWizard` | string | `""` | Additional CSS class for the wizard container |
| `clsPage` | string | `""` | Additional CSS class for wizard pages |
| `clsActions` | string | `""` | Additional CSS class for the actions container |
| `clsActionHelp` | string | `""` | Additional CSS class for the Help button |
| `clsActionPrev` | string | `""` | Additional CSS class for the Previous button |
| `clsActionNext` | string | `""` | Additional CSS class for the Next button |
| `clsActionFinish` | string | `""` | Additional CSS class for the Finish button |
| `clsActionCancel` | string | `""` | Additional CSS class for the Cancel button |

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforePage` | Fires before changing the page. Return `false` to prevent page change. |
| `onPage` | Fires when the page changes |
| `onNext` | Fires when the Next button is clicked |
| `onPrev` | Fires when the Previous button is clicked |
| `onFinish` | Fires when the Finish button is clicked |
| `onCancel` | Fires when the Cancel button is clicked |
| `onHelp` | Fires when the Help button is clicked |
| `onWizardCreate` | Fires when the component is created |

## API Methods

+ `next()` - Navigate to the next page.
+ `prev()` - Navigate to the previous page.
+ `destroy()` - Destroy the component and remove it from the DOM.

### Example of Method Usage

```javascript
const wizard = Metro.getPlugin('#myWizard', 'wizard-classic');
wizard.next();
```

You can also use jQuery-style access:

```javascript
$(element).data('wizard-classic').next();
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--wizard-classic-border-color` | `#f3f3f3` | - | Border color of the wizard |
| `--wizard-classic-background` | `#ffffff` | - | Background color of the wizard |
| `--wizard-classic-color` | `#191919` | - | Text color of the wizard |

### Example of Custom Styling

```css
#my-wizard {
    --wizard-classic-border-color: #dcdcdc;
    --wizard-classic-background: #f8f8f8;
    --wizard-classic-color: #333333;
}
```

## Available CSS Classes

### Base Classes
- `.wizard-classic` - Main container class (automatically added)
- `.wizard-pages` - Container for pages
- `.page` - Individual page class

### State Classes
- `.active` - Applied to the currently visible page
- `.out` - Applied to a page that's being moved out
- `.disabled` - Applied to buttons that are disabled in the current state

### Button Classes
- `.wizard-actions` - Container for action buttons
- `.wizard-help` - Help button
- `.wizard-prev` - Previous button
- `.wizard-next` - Next button
- `.wizard-finish` - Finish button
- `.wizard-cancel` - Cancel button

## Example

```html
<div data-role="wizard-classic"
     data-cls-page="d-flex flex-center"
     data-on-help="alert('Help Pressed!')"
     data-on-cancel="alert('Cancel Pressed!')"
     data-on-finish="alert('Finish Pressed!')"
     data-icon-help="<span class='mif-help'>">
    <div class="page">Page 1</div>
    <div class="page">Page 2</div>
    <div class="page">Page 3</div>
    <div class="page">Page 4</div>
</div>
```
