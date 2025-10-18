# Template Component

**Note: This component is marked as Deprecated.**

Template component provides a simple templating mechanism for Metro UI. It allows using a template syntax similar to EJS for creating dynamic HTML content based on the provided data.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<div data-role="template" data-template-data='{"name": "Metro", "version": "4.0"}'>
  <h1><%=name%></h1>
  <p>Version: <%=version%></p>
</div>
```

### With JavaScript Variables

```html
<div class="example" data-role="template" data-template-data="webSkills">
    <h3>My skills</h3>
    <% if(this.showSkills) { %>
    <ul>
        <% for(var i = 0; i < this.skills.length; i++) { %>
        <li><% this.skills[i] %></li>
        <% } %>
    </ul>
    <% } else { %>
    <span>Nothing to show</span>
    <% } %>
</div>

<script>
    var webSkills = {
        skills: ["javascript", "html", "css"],
        showSkills: true
    };
</script>
```

### Updating Template Data

You can update the template data in several ways:

```javascript
// Using attribute
$('.example').attr('data-template-data', 'otherSkills');

// Using API method with string reference to a variable
Metro.getPlugin('.example', 'template').buildWith('otherSkills2');

// Using API method with direct object
Metro.getPlugin('.example', 'template').buildWith({
    skills: ["guitar", "shooting", "dog", "fishing"],
    showSkills: true
});
```

## Template Syntax

Templates use the `<% %>` syntax for embedding JavaScript code:

- `<%= value %>` - output a value
- `<% if (condition) { %>` ... `<% } %>` - conditional statements
- `<% for(var i = 0; i < items.length; i++) { %>` ... `<% } %>` - loops

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `templateData` | Object | `null` | Data for populating the template |
| `onTemplateCompile` | Function | `Metro.noop` | Function called after template compilation |
| `onTemplateCreate` | Function | `Metro.noop` | Function called after template component creation |

## API Methods

+ `buildWith(obj)` - Rebuilds the template with new data. The parameter can be either an object or a string reference to a global variable.
+ `destroy()` - Destroys the component and returns a reference to the DOM element.

### Example of Method Usage

```javascript
// Get component reference
const template = Metro.getPlugin('#myTemplate', 'template');

// Update template with new data
template.buildWith({
    name: "New Name",
    version: "5.0"
});

// Destroy component
const element = template.destroy();
```

## Events

| Event | Arguments | Description |
| --- | --- | --- |
| `template-compile` | `{ template, compiled, element }` | Triggered after template compilation |
| `template-create` | `{ element }` | Triggered after template component creation |

### Example of Event Handling

```javascript
$("#myTemplate").on("template-compile", function(e){
    console.log(e.detail.template);  // Original template
    console.log(e.detail.compiled);  // Compiled HTML
});
```

## Global Configuration

You can globally configure the template component using the `Metro.templateSetup` method:

```javascript
Metro.templateSetup({
    templateData: { /* default values */ },
    onTemplateCompile: function(){ /* handler */ },
    onTemplateCreate: function(){ /* handler */ }
});
```

## Global Template Function

Metro UI also provides a global template function that can be used independently of the component:

```javascript
var template = '<div>Hello, <%=name%>!</div>';
var compiled = Metro.template(template, {name: "World"});
// Result: "<div>Hello, World!</div>"
```

## Customizing Template Tokens

You can change the default tokens `<%` and `%>` when using the global function:

```javascript
var template = '<div>Hello, {{name}}!</div>';
var compiled = Metro.template(template, {name: "World"}, {
    beginToken: "{{",
    endToken: "}}"
});
// Result: "<div>Hello, World!</div>"
```

## Styling with CSS Variables

This component does not use any specific CSS variables for styling.

## Available CSS Classes

This component does not define any specific CSS classes for styling.