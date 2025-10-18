# Dialog

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

## Usage

### Basic Usage

```html
<div data-role="dialog" id="myDialog"></div>
```

### Creating a Dialog with JavaScript

```javascript
// Create a dialog dynamically
Metro.dialog.create({
    title: "Dialog Title",
    content: "This is the dialog content.",
    closeButton: true,
    defaultActions: true
});

// Use an existing dialog element
const dialog = Metro.getPlugin('#myDialog', 'dialog');
dialog.setTitle('My Dialog Title');
dialog.setContent('This is the dialog content.');
dialog.open();
```

### Dialog with Custom Buttons

```javascript
const customButtons = [
    {
        text: "Yes, proceed",
        cls: "js-dialog-close success",
        onclick: function(){
            console.log("User clicked Yes");
        }
    },
    {
        text: "No, cancel",
        cls: "js-dialog-close",
        onclick: function(){
            console.log("User clicked No");
        }
    }
];

Metro.dialog.create({
    title: "Confirmation",
    content: "Do you want to continue?",
    closeButton: true,
    defaultActions: false,
    customButtons: customButtons
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `dialogDeferred` | number | 0 | Delay before dialog initialization |
| `closeButton` | boolean | false | Show close button in the top-right corner |
| `leaveOverlayOnClose` | boolean | false | Keep overlay when dialog is closed |
| `toTop` | boolean | false | Position dialog at the top of the screen |
| `toBottom` | boolean | false | Position dialog at the bottom of the screen |
| `title` | string | "" | Dialog title |
| `content` | string | "" | Dialog content |
| `customButtons` | array | null | Array of custom button objects |
| `actionsAlign` | string | "right" | Alignment of action buttons ("left", "center", "right") |
| `defaultActions` | boolean | true | Show default action buttons |
| `defaultActionButtons` | string | "ok,cancel,help" | Comma-separated list of default buttons to show |
| `overlay` | boolean | true | Show overlay behind dialog |
| `overlayColor` | string | "#000000" | Color of the overlay |
| `overlayAlpha` | number | 0.5 | Opacity of the overlay |
| `overlayClickClose` | boolean | false | Close dialog when clicking on overlay |
| `width` | string | "auto" | Width of the dialog |
| `height` | string | "auto" | Height of the dialog |
| `closeAction` | boolean | true | Enable close action for elements with class js-dialog-close |
| `clsDialog` | string | "" | Additional CSS class for dialog element |
| `clsTitle` | string | "" | Additional CSS class for title element |
| `clsContent` | string | "" | Additional CSS class for content element |
| `clsAction` | string | "" | Additional CSS class for actions element |
| `clsDefaultAction` | string | "" | Additional CSS class for default action buttons |
| `clsOverlay` | string | "" | Additional CSS class for overlay element |
| `autoHide` | number | 0 | Auto hide dialog after specified milliseconds (0 = disabled) |
| `removeOnClose` | boolean | false | Remove dialog element from DOM when closed |
| `show` | boolean | false | Show dialog immediately after initialization |

## API Methods

+ `setTitle(title)` - Set the dialog title.
+ `setContent(content)` - Set the dialog content.
+ `open()` - Open the dialog.
+ `close()` - Close the dialog.
+ `toggle()` - Toggle the dialog between open and closed states.
+ `isOpen()` - Check if the dialog is open.
+ `hide(callback)` - Hide the dialog with optional callback.
+ `show(callback)` - Show the dialog with optional callback.
+ `setPosition()` - Set the position of the dialog.

### Metro.dialog Namespace Methods

+ `Metro.dialog.isDialog(el)` - Check if element is a dialog.
+ `Metro.dialog.open(el, content, title)` - Open a dialog with optional content and title.
+ `Metro.dialog.close(el)` - Close a dialog.
+ `Metro.dialog.toggle(el)` - Toggle a dialog.
+ `Metro.dialog.isOpen(el)` - Check if a dialog is open.
+ `Metro.dialog.remove(el)` - Remove a dialog from the DOM.
+ `Metro.dialog.create(options)` - Create a new dialog with options.

### Example of Method Usage

```javascript
const dialog = Metro.getPlugin('#myDialog', 'dialog');
dialog.setTitle('Updated Title');
dialog.setContent('Updated content text');
dialog.open();

// Later, close the dialog
dialog.close();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onOk` | Triggered when the OK button is clicked |
| `onCancel` | Triggered when the Cancel button is clicked |
| `onHelp` | Triggered when the Help button is clicked |
| `onShow` | Triggered when the dialog is shown |
| `onHide` | Triggered when the dialog is hidden |
| `onOpen` | Triggered when the dialog is opened |
| `onClose` | Triggered when the dialog is closed |
| `onDialogCreate` | Triggered when the dialog is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--dialog-border-radius` | 6px | 6px | Border radius of the dialog |
| `--dialog-background` | #f7f8fa | #2b2d30 | Background color of the dialog |
| `--dialog-color` | #191919 | #dbdfe7 | Text color of the dialog |
| `--dialog-border-color` | #aaaaaa | #414245 | Border color of the dialog |
| `--dialog-closer-background` | inherit | inherit | Background color of the close button |
| `--dialog-closer-color` | inherit | inherit | Color of the close button |
| `--dialog-closer-background-hover` | var(--color-alert) | var(--color-alert) | Background color of the close button on hover |
| `--dialog-closer-color-hover` | var(--color-light) | var(--color-light) | Color of the close button on hover |

### Example of Custom Styling

```css
#myDialog {
    --dialog-background: #e0f0ff;
    --dialog-color: #003366;
    --dialog-border-color: #0066cc;
    --dialog-border-radius: 10px;
}
```

## Available CSS Classes

### Base Classes
- `.dialog` - Main dialog container
- `.dialog-title` - Dialog title container
- `.dialog-content` - Dialog content container
- `.dialog-actions` - Dialog actions container
- `.closer` - Close button

### Modifiers
- `.text-left` - Align action buttons to the left
- `.text-center` - Align action buttons to the center
- `.text-right` - Align action buttons to the right
- `.js-dialog-close` - Elements with this class will close the dialog when clicked

### Color Classes
The dialog supports all Metro UI accent colors:
- `.primary`, `.secondary`, `.success`, `.alert`, `.warning`, `.yellow`, `.info`, `.light`, etc.

## Additional Notes

- The dialog is positioned in the center of the screen by default, but can be positioned at the top or bottom using the `toTop` and `toBottom` options.
- The dialog can be closed by clicking on the close button, clicking on elements with the `.js-dialog-close` class, or by clicking on the overlay if `overlayClickClose` is set to true.
- Custom buttons can be added to the dialog using the `customButtons` option, which takes an array of button objects with `text`, `cls`, and `onclick` properties.
- The dialog can be automatically hidden after a specified time using the `autoHide` option.

## Best Practices

- Use dialogs sparingly, as they interrupt the user's workflow.
- Keep dialog content concise and focused on a single task or decision.
- Provide clear and descriptive button labels that indicate the action that will be taken.
- Use appropriate color classes to indicate the type of dialog (e.g., `.alert` for warnings, `.success` for confirmations).
- Consider using the `removeOnClose` option for dynamically created dialogs to prevent memory leaks.
- For complex forms or large content, consider using a different component like a sidebar or panel instead of a dialog.