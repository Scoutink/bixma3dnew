# Html

`Html` is a lightweight JavaScript library for creating HTML elements with ease.
It provides a simple and intuitive API for building HTML structures programmatically.

The `Html` namespace contains a set of functions to create HTML elements.


## Basic Usage

Html.js allows you to create HTML elements using JavaScript functions:

```javascript
// Create elements
const title = h1("Hello, World!");
const container = div(
    { class: "container" },
    h1("Welcome to Html.js"),
    p("Create HTML elements with JavaScript")
);

// Render to DOM
render([title, container], document.body);
```

## API Reference

### Core Classes

Html.js is built around three core classes:

#### BaseElement

The base class for all HTML elements providing common functionality for attributes, classes, and styles.

#### Tag

Extends `BaseElement` for standard HTML elements that can have children.

#### SingleTag

Extends `BaseElement` for self-closing HTML elements (like `<img>`, `<input>`, etc.).

### Element Creation

Html.js provides way to create HTML elements with fabric functions.


```javascript
const div1 = div(element || "static content", ...,  {...options});
```

:::tip
Fabric functions are available for all HTML elements.
:::

#### Element Options

All elements accept an options object with the following properties:

- `class`: String or Array of classes
- `style`: String or Object of styles
- `data`: Object of data attributes
- `aria`: Object of aria attributes
- `events`: Object of event handlers
- Any valid HTML attribute for the element

```javascript
const button1 = button(
    { 
        class: ["btn", "btn-primary"],
        style: { 
            backgroundColor: "#007bff", 
            color: "white",
            padding: "10px 15px"
        },
        data: {
            id: 123,
            toggle: "modal"
        },
        aria: {
            label: "Submit form"
        },
        events: {
            onclick: "submitForm()"
        },
        disabled: true
    },
    "Submit"
);
```

### Rendering

To render the created elements to the DOM, use the `render` function:

```javascript
render(element, targetElement, options);
```

Options:
- `clear`: Boolean (default: true) - clear target element before rendering
- `where`: String (default: "beforeend") - position to insert content ("beforebegin", "afterbegin", "beforeend", "afterend")

Example:
```javascript
render(div("Hello"), document.getElementById("app"), { clear: false });
```

### Styles

Html.js provides several methods for working with styles:

#### addStyle

Add CSS styles to the document:

```javascript
addStyle({
    ".container": {
        maxWidth: "1200px",
        margin: "0 auto"
    },
    ".btn": {
        padding: "10px 15px",
        borderRadius: 4
    }
});
```

Or as a string:

```javascript
addStyle(`
    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
    .btn {
        padding: 10px 15px;
        border-radius: 4px;
    }
`);
```

#### createStyleElement

Create a style element with optional media query:

```javascript
const styleElement = createStyleElement(`
    .container { max-width: 800px; }
`, "screen and (max-width: 768px)");
```

#### createStyleSheet

Create a CSSStyleSheet object:

```javascript
const sheet = createStyleSheet();
```

#### addCssRule

Add a CSS rule to a stylesheet:

```javascript
const sheet = createStyleSheet();
addCssRule(sheet, ".container", "max-width: 1200px; margin: 0 auto;");
```


## Examples

### Creating a Simple Form

```javascript
const loginForm = form(
    { class: "login-form", action: "/login", method: "post" },
    h2("Login"),
    div(
        { class: "form-group" },
        label({ for: "username" }, "Username:"),
        input({ 
            id: "username", 
            name: "username", 
            type: "text", 
            placeholder: "Enter username" 
        })
    ),
    div(
        { class: "form-group" },
        label({ for: "password" }, "Password:"),
        input({ 
            id: "password", 
            name: "password", 
            type: "password", 
            placeholder: "Enter password" 
        })
    ),
    div(
        { class: "form-actions" },
        button({ type: "submit" }, "Login")
    )
);

render(loginForm, document.getElementById("app"));
```

### Creating a Table

```javascript
const users = [
    { id: 1, name: "John", email: "john@example.com" },
    { id: 2, name: "Jane", email: "jane@example.com" },
    { id: 3, name: "Bob", email: "bob@example.com" }
];

const usersTable = table(
    { class: "users-table" },
    thead(
        tr(
            th("ID"),
            th("Name"),
            th("Email"),
            th("Actions")
        )
    ),
    tbody(
        users.map(user => 
            tr(
                td(user.id),
                td(user.name),
                td(user.email),
                td(
                    button(
                        { 
                            class: "btn-edit",
                            events: { 
                                onclick: `editUser(${user.id})` 
                            }
                        },
                        "Edit"
                    ),
                    button(
                        { 
                            class: "btn-delete",
                            events: { 
                                onclick: `deleteUser(${user.id})` 
                            }
                        },
                        "Delete"
                    )
                )
            )
        )
    )
);

render(usersTable, document.getElementById("table-container"));
```

## Extraction

Html.js provides methods to extract all HTML element functions to the context and restore them:

```javascript
// Extract all HTML element functions to global scope
HTML.extract();

// Now you can use them directly
document.body.appendChild(
    div(
        h1("Title"),
        p("Content")
    ).toElement()
);

// Restore the global scope to its original state
HTML.restore();
```

You can also extract to a specific context:

```javascript
const ctx = {};
HTML.extract(ctx);

// Now use HTML elements through ctx
ctx.div(ctx.h1("Hello"));
```
or

```javascript
function createDocument(){
    HTML.extract(this);
    document.body.appendChild(
    div(
           h1("Title"),
           p("Content")
        ).toElement()
    );
}
```