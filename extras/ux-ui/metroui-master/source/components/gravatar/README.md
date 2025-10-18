# Gravatar Component

The Gravatar component provides an easy way to display Globally Recognized Avatars (Gravatars) in your application. It automatically fetches profile images based on email addresses using the Gravatar service.

## Dependencies

This component requires:
- Metro UI core
- Metro.md5 function for email hashing

## Usage

### Basic Usage

```html
<!-- Basic usage with an img tag -->
<img data-role="gravatar" data-email="user@example.com">

<!-- Usage with a container element -->
<div data-role="gravatar" data-email="user@example.com">
    <img>
</div>
```

### Additional Configurations

```html
<!-- Gravatar with custom size -->
<img data-role="gravatar" data-email="user@example.com" data-size="150">

<!-- Gravatar with custom default image -->
<img data-role="gravatar" data-email="user@example.com" data-default="identicon">
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `gravatarDeferred` | number | 0 | Delay in milliseconds before initializing the component |
| `email` | string | "" | The email address to generate the Gravatar for |
| `size` | number | 80 | The size of the Gravatar image in pixels |
| `default` | string | "mp" | The default image to display if no Gravatar is found. Options include: 404, mp, identicon, monsterid, wavatar, retro, robohash, blank |
| `onGravatarCreate` | function | Metro.noop | Callback function triggered when the Gravatar is created |

## API Methods

+ `getImage(email, size, def, is_object)` - Gets a Gravatar image element for the specified email.
+ `getImageSrc(email, size, def)` - Gets the URL for a Gravatar image based on the email.
+ `get()` - Updates the Gravatar image based on the current component options.
+ `resize(new_size)` - Changes the size of the Gravatar image.
+ `email(new_email)` - Changes the email address for the Gravatar.

#### Example of Method Usage

```javascript
// Get Gravatar image as DOM element
const gravatarElement = Metro.getPlugin('#myGravatar', 'gravatar').getImage('user@example.com', 100, 'identicon', false);

// Get Gravatar image as jQuery object
const gravatarObject = Metro.getPlugin('#myGravatar', 'gravatar').getImage('user@example.com', 100, 'identicon', true);

// Get Gravatar image URL
const gravatarUrl = Metro.getPlugin('#myGravatar', 'gravatar').getImageSrc('user@example.com', 100, 'identicon');

// Update the Gravatar image
Metro.getPlugin('#myGravatar', 'gravatar').get();

// Resize the Gravatar to 120px
Metro.getPlugin('#myGravatar', 'gravatar').resize(120);

// Resize the Gravatar based on the data-size attribute
Metro.getPlugin('#myGravatar', 'gravatar').resize();

// Change the email address
Metro.getPlugin('#myGravatar', 'gravatar').email('newemail@example.com');

// Update the email based on the data-email attribute
Metro.getPlugin('#myGravatar', 'gravatar').email();
```

## Events

| Event | Description |
| ----- | ----------- |
| `onGravatarCreate` | Triggered when the Gravatar component is created |

## Global Configuration

You can set global defaults for all Gravatar components using:

```javascript
Metro.gravatarSetup({
    size: 100,
    default: 'identicon',
    // other options
});
```

## Default Images

Gravatar provides several default image options when an email doesn't have a registered Gravatar:

- `404`: Return a 404 error when no image is found
- `mp`: A simple, cartoon-style silhouetted outline of a person (Mystery Person)
- `identicon`: A geometric pattern based on the email
- `monsterid`: A generated 'monster' with different colors, faces, etc
- `wavatar`: Generated faces with differing features and backgrounds
- `retro`: Awesome 8-bit arcade-style pixelated faces
- `robohash`: A generated robot with different colors, faces, etc
- `blank`: A transparent PNG image

## Best Practices

1. Always provide a valid email address for the best results
2. Choose an appropriate size for your UI design (recommended: 80-150px)
3. Select a suitable default image that matches your application's style
4. Consider privacy implications when using email addresses to fetch Gravatars
5. Use the component's API methods to dynamically update Gravatars when needed