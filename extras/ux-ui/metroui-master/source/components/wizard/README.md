# Wizard Component

The Wizard component provides a step-by-step interface for guiding users through multi-step processes or forms. It features navigation buttons, progress tracking, and customizable styling options.


## Usage

### Basic Usage

```html
<div data-role="wizard">
    <section>
        <div class="page-content">Page 1 Content</div>
    </section>
    <section>
        <div class="page-content">Page 2 Content</div>
    </section>
    <section>
        <div class="page-content">Page 3 Content</div>
    </section>
</div>
```

### With Responsive Width

```html
<div data-role="wizard" class="wizard-wide-sm">
    <section>
        <div class="page-content">Page 1 Content</div>
    </section>
    <section>
        <div class="page-content">Page 2 Content</div>
    </section>
    <section>
        <div class="page-content">Page 3 Content</div>
    </section>
</div>
```

### With Custom Button Style

```html
<div data-role="wizard" data-button-mode="square" data-button-outline="false">
    <section>
        <div class="page-content">Page 1 Content</div>
    </section>
    <section>
        <div class="page-content">Page 2 Content</div>
    </section>
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `start` | number | `1` | The starting page index |
| `finish` | number | `0` | The index of the finish page (0 means the last page) |
| `iconHelp` | string | `💡` | Icon for the help button |
| `iconPrev` | string | `←` | Icon for the previous button |
| `iconNext` | string | `→` | Icon for the next button |
| `iconFinish` | string | `✔` | Icon for the finish button |
| `buttonMode` | string | `cycle` | Button style mode: `cycle`, `square`, or `default` |
| `buttonOutline` | boolean | `true` | Whether to use outline style for buttons |
| `duration` | number | `300` | Animation duration in milliseconds |
| `clsWizard` | string | `""` | Additional CSS class for the wizard container |
| `clsActions` | string | `""` | Additional CSS class for the actions bar |
| `clsHelp` | string | `""` | Additional CSS class for the help button |
| `clsPrev` | string | `""` | Additional CSS class for the previous button |
| `clsNext` | string | `""` | Additional CSS class for the next button |
| `clsFinish` | string | `""` | Additional CSS class for the finish button |

## API Methods

+ `next()` - Navigate to the next page.
+ `prev()` - Navigate to the previous page.
+ `first()` - Navigate to the first page.
+ `last()` - Navigate to the last page.
+ `toPage(pageIndex)` - Navigate to a specific page by index.
+ `destroy()` - Remove the wizard component and clean up event handlers.

### Example of Method Usage

```javascript
const wizard = Metro.getPlugin('#myWizard', 'wizard');
wizard.next(); // Go to next page
wizard.prev(); // Go to previous page
wizard.toPage(3); // Go to page 3
```

## Events

| Event | Description |
| ----- | ----------- |
| `onPage` | Triggered when a page is displayed |
| `onNextPage` | Triggered when navigating to the next page |
| `onPrevPage` | Triggered when navigating to the previous page |
| `onFirstPage` | Triggered when navigating to the first page |
| `onLastPage` | Triggered when navigating to the last page |
| `onFinishPage` | Triggered when reaching the finish page |
| `onHelpClick` | Triggered when the help button is clicked |
| `onPrevClick` | Triggered when the previous button is clicked |
| `onNextClick` | Triggered when the next button is clicked |
| `onFinishClick` | Triggered when the finish button is clicked |
| `onBeforePrev` | Triggered before navigating to the previous page (return false to prevent navigation) |
| `onBeforeNext` | Triggered before navigating to the next page (return false to prevent navigation) |
| `onWizardCreate` | Triggered when the wizard component is created |

### Example of Event Usage

```html
<div data-role="wizard" 
     data-on-next-page="onNextPageHandler" 
     data-on-finish-click="onFinishClickHandler">
    <!-- Wizard content -->
</div>
```

```javascript
function onNextPageHandler(event) {
    console.log('Moving to page:', event.detail.index);
}

function onFinishClickHandler(event) {
    console.log('Wizard completed!');
    // Process form data or navigate away
}
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--wizard-height` | `200px` | `200px` | Minimum height of the wizard |
| `--wizard-background` | `#ffffff` | `#1e1f22` | Background color of the wizard |
| `--wizard-color` | `#191919` | `#dbdfe7` | Text color of the wizard |
| `--wizard-border-color` | `#f3f3f3` | `#484b4c` | Border color of the wizard |
| `--wizard-number-color` | `#a8a8a8` | `#a8a8a8` | Color of the step numbers |

### Example of Custom Styling

```css
#my-wizard {
    --wizard-height: 300px;
    --wizard-background: #f0f0f0;
    --wizard-color: #333333;
    --wizard-border-color: #cccccc;
    --wizard-number-color: #666666;
}
```

## Available CSS Classes

### Base Classes
- `.wizard` - The main container class (automatically added)
- `.page-content` - Container for page content
- `.action-bar` - Container for navigation buttons
- `.wizard-btn-help` - Help button
- `.wizard-btn-prev` - Previous button
- `.wizard-btn-next` - Next button
- `.wizard-btn-finish` - Finish button

### State Classes
- `.current` - Applied to the current active section
- `.complete` - Applied to completed sections

### Width Modifiers
- `.wizard-wide-fs` - Full-screen width
- `.wizard-wide-xs` - Extra small width
- `.wizard-wide-sm` - Small width
- `.wizard-wide-md` - Medium width
- `.wizard-wide-lg` - Large width
- `.wizard-wide-xl` - Extra large width
- `.wizard-wide-xxl` - Extra extra large width
- `.wizard-wide-xxxl` - Extra extra extra large width