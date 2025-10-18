# Cookie Disclaimer

The Cookie Disclaimer component displays a notification at the bottom of the page informing users about cookie usage on the website. It allows users to accept or decline cookies, and stores their preference in a browser cookie.

## Dependencies

- Cookie component (automatically imported)

## Usage

### Basic Usage

```javascript
// Initialize with default options
Metro.cookieDisclaimer.init();
```

### Additional Configurations

```javascript
// Initialize with custom options
Metro.cookieDisclaimer.init({
    name: "my_cookies_accepted",
    title: "We use cookies",
    message: "This website uses cookies to ensure you get the best experience on our website.",
    duration: "30days",
    onAccept: function() {
        console.log("Cookies accepted");
    },
    onDecline: function() {
        console.log("Cookies declined");
    }
});

// With custom buttons
Metro.cookieDisclaimer.init({
    duration: "1day",
    clsAcceptButton: "success",
    customButtons: [
        {
            text: `<span class="mif-info mr-2"></span>View details`,
            cls: "info ml-auto",
            onclick: () => {
                alert("Details");
            }
        }
    ],
});

// Remove the cookie to show the disclaimer again
Metro.cookie.delCookie('cookies_accepted');
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `name` | string | "cookies_accepted" | The name of the cookie that will be set when user accepts cookies |
| `templateUrl` | string | null | URL to a custom template for the disclaimer. If not provided, the default template will be used |
| `title` | string | "" | The title of the disclaimer. If empty, a localized default will be used |
| `message` | string | "" | The message of the disclaimer. If empty, a localized default will be used |
| `duration` | string | "30days" | The duration for which the cookie will be valid. Format: "Xdays", "Xhours", "Xmin", "Xsec" |
| `clsContainer` | string | "" | Additional CSS class(es) for the disclaimer container |
| `clsMessage` | string | "" | Additional CSS class(es) for the message container |
| `clsButtons` | string | "" | Additional CSS class(es) for the buttons container |
| `clsAcceptButton` | string | "" | Additional CSS class(es) for the accept button |
| `clsCancelButton` | string | "" | Additional CSS class(es) for the cancel button |
| `customButtons` | array | undefined | Array of custom button objects with properties: text, cls, onclick |
| `onAccept` | function | Metro.noop | Callback function that is called when the user accepts cookies |
| `onDecline` | function | Metro.noop | Callback function that is called when the user declines cookies |

## API Methods

+ init(options) - Initializes the cookie disclaimer component with the specified options.

#### Example of Method Usage
```javascript
Metro.cookieDisclaimer.init({
    name: "my_cookies_accepted",
    duration: "7days"
});
```

+ create(html) - Creates the disclaimer UI. This method is called internally by the `init` method and typically doesn't need to be called directly.
  - `html` (optional): Custom HTML content for the disclaimer

## Events

| Event | Description |
| ----- | ----------- |
| `onAccept` | Triggered when the user accepts cookies |
| `onDecline` | Triggered when the user declines cookies |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--disclaimer-background` | #f5f5f5 | #343637 | Background color of the disclaimer |
| `--disclaimer-color` | #191919 | #dbdfe7 | Text color of the disclaimer |

The component also uses the `--border-color` variable for borders, which is defined in the global CSS variables.

### Example of Custom Styling

```css
:root {
    --disclaimer-background: #e0f7fa;
    --disclaimer-color: #006064;
}

/* For dark mode */
.dark-side {
    --disclaimer-background: #263238;
    --disclaimer-color: #b0bec5;
}
```

## Available CSS Classes

### Base Classes
- `.cookie-disclaimer` - Main container for the disclaimer
- `.disclaimer-message` - Container for the title and text
- `.disclaimer-title` - Title element
- `.disclaimer-text` - Text content element
- `.disclaimer-actions` - Container for buttons

### Button Classes
- `.cookie-accept-button` - Accept button
- `.cookie-cancel-button` - Cancel button
- `.cookie-custom-button` - Custom buttons

## HTML Structure

The component creates the following HTML structure:

```html
<div class="cookie-disclaimer">
    <div class="disclaimer-message">
        <div class="disclaimer-title">...</div>
        <div class="disclaimer-text">...</div>
    </div>
    <div class="disclaimer-actions">
        <button class="button cookie-accept-button">Accept</button>
        <button class="button cookie-cancel-button">Cancel</button>
        <!-- Custom buttons if defined -->
    </div>
</div>
```