# Reactive Model

Class `Model` provides a simple way to create reactive two-way binding data model.
Using this class, you can create truly reactive sites on the Metro UI.
The model allows you to bind HTML elements to JavaScript variables in such a way that any changes to the data model are immediately reflected in the HTML.

To access to a reactive model in Metro UI, use global class `Model`.

## Usage

```html title="index.html"
<div id="root">
    <div>{{ name }}</div>
    <div>{{ age }}</div>
</div>  
```

```js title="index.js"
import { Model } from "@olton/model";

const model = new Model({
    name: "John",
    age: 30
});

model.init("#root");

model.data.name = "Mike";
model.data.age = 31;
```

## Binding model to HTML

You can bind model to HTML elements.

```html
<div>{{ age }}</div>
<input type="text" data-model="name">
<button :disabled="isDisabled">Click me</button>
<div data-bind='{"title": "User Counter"}'>Counter: {{ counter }}</div>
```


```js
const model = new Model({
    name: "John",
    age: 30,
    isDisabled: false
});
```

## Loops (for, in)
You can use model in loops.

### data-for

Directive `data-for` is used to create a loop by array.

```html
<ul>
    <li data-for="item in items">{{ item }}</li>
</ul>
```

```js
const model = new Model({
    items: ["Item 1", "Item 2", "Item 3"]
});
```

### data-in
Directive `data-in` is used to create a loop by object.

```html
<ul>
    <li data-in="key in obj">{{ key }} : {{ obj[key] }}</li>
</ul>
```

```js
const model = new Model({
    obj: {
        name: "Serhii",
        age: 52,
        address: "Kyiv, Ukraine"
    }
});
```

## Conditionals (if-else)
You can use conditionals in a model with directives `data-if`, `data-else`, and `data-else-if`.

### data-if

Directive `data-if` is used to create a conditional block.

```html
<div data-if="isVisible">Hello</div>
```

### data-else

Directive `data-else` is used to create an else block after `data-if` or `data-else-if`.

```html
<div data-if="isVisible">Visible</div>
<div data-else>Invisible</div>
```

### data-else-if

Directive `data-else-if` is used to create an else if block after `data-if`.

```html
<div data-if="counter < 0">Negative</div>
<div data-else-if="counter > 0">Positive</div>
<div data-else>Zero</div>
```

## Nested objects
You can use nested objects in model.

```html
<div>{{ user.name }}</div>
```

```js
const model = new Model({
    user: {
        name: "John",
        age: 30
    }
});
```

## Arrays
You can use arrays in the model.

```html
<ul>
    <li data-for="item in items">{{ item }}</li>
</ul>
```

```js   
const model = new Model({
    items: ["Item 1", "Item 2", "Item 3"]
});
```

### Mutation methods

Model is able to detect when a reactive array's mutation methods are called and trigger necessary updates. These mutation methods are:

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

```js
model.data.items.push("Item 4");
```

### applyArrayMethod()

```js
const model = new Model({
    items: ["Item 1", "Item 2", "Item 3"]
});


model.store.applyArrayMethod('items', 'push', 'Item 4');
```

### applyArrayChanges()

```js
model.store.applyArrayChanges('items', (items) => items.push("Item 4"));
```

### diffArrays()
You can use `diffArrays(newArray, oldArray)` method to compare two arrays.

```js
model.diffArrays([1, 2, 3], [1, 2, 4]); // {added: [3], removed: [4], changed: [2]}
```

## Computed properties
You can use computed properties in the model. The computed property must be a function, and calculated based on other properties.

```html
<div>{{ fullName }}</div>
```

```js
const model = new Model({
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
});
```

### Asynchronous computed properties

You can use asynchronous computed properties in the model.

```html
<ul>
    <li data-for="post in posts">{{ post.title }}</li>
</ul>
```

```js
const model = new Model({
    posts: [],
    async getPosts() {
        this.posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
    }
});
```

:::caution
All calculated properties must be defined as methods on the first level of model.
:::

## Binding Attributes

### data-bind

You can bind attributes to elements with directive `data-bind`.
This directive allows you to set multiple element attributes at once, based on model properties.

```html
<div data-bind='{"class": "counter >= 0 ? \"positive\" : \"negative\"", "title": "new_title"}'>Counter: {{ counter }}</div>
```

```js
const model = new Model({
    counter: 10,
    new_title: "New title"
});
```

### :attribute

You can use special syntax `:attribute` to bind specified attribute to elements.

```html
<div :class="counter >= 0 ? 'positive' : 'negative'">Counter: {{ counter }}</div>
<img :src="path_to_image" alt="Image"/>
```

```js
const model = new Model({
    counter: 10,
    path_to_image: "https://example.com/image.jpg"
});
```

## Binding Events

You can bind events to elements with directive `@event`.

```html
<button @click="this.counter++">Click me</button>
<button @click="onClick()">Click me</button>
```

### Access to Model

```html
<button @click="onClick($model)">Get Model</button>
```

### Access to Event

```html
<button @click="onClick($event)">Get Event</button>
```

### Access to Model data

```html
<button @click="onClick($data)">Get Data</button>
```

### Pass custom arguments

```html
<button @click="onClick('text', 123)">Custom Arguments</button>
```


## Middleware
You can use middleware in a model.

```js
const model = new Model({
    name: "John",
    age: 30,
    counter: 10,
});

model.use(async (context, next) => {
     if (context.property === 'counter' && context.newValue < 0) {
         context.preventDefault = true;
         return;
     }
     await next();
});
```

## Model Events
You can use events in a model.

```js
const model = new Model({
    name: "John",
    age: 30,
});

model.on("change", (property, newValue, oldValue) => {
    console.log(`Property ${property} changed from ${oldValue} to ${newValue}`);
});
```

You can use next events in model:

### General
- `init` - when model initialized
- `destroy` - when model destroyed

### Changes
- `change` - when property changed
- `arrayChange` - when array property changed
- `batchComplete` - when batch complete
- `compute` - when computed property changed

### State
- `saveState` - when model state saved
- `saveStateError` - when model state not saved
- `restoreState` - when model state restored
- `restoreStateError` - when model state restored with error
- `createSnapshot` - when snapshot created
- `restoreSnapshot` - when snapshot restored

### Plugins
- `pluginRegistered` - when plugin registered
- `pluginUnregistered` - when plugin removed


## Watchers
You can use watchers in model.

```js   
const model = new Model({
    name: "John",
    age: 30,
});

model.watch("name", (newValue, oldValue) => {
    console.log(`Name changed from ${oldValue} to ${newValue}`);
});
```

## Validation
You can add validators to the model to validate user input.

```js
const model = new Model({
    name: "John",
    age: 30,
});

model.addValidator('name', value => value.length >= 3);
```

## Formatting
You can add formatters to the model to format user input.

```js
const model = new Model({
    name: "John",
    age: 30,
});

model.addFormatter('name', value => value.toUpperCase());
```

## State
You can save and restore model state from localstorage.

### Load state

```js
var model

document.addEventListener('DOMContentLoaded', () => {
    model = new Metro.Model(null, {
        id: 'model-state'
    });

   model.loadState()
   model.init("#root")
})
```

### Save state

To save model state to localStorage, you can use method `save()`.

```js
window.addEventListener('beforeunload', () => {
     model.save();
})
```

### Restore state

To restore model state from localStorage, you can use method `restore()`.

```js
model.restore();
```

### Auto save state

```js
model.autoSave(5000); // save every 5 seconds
```

```js
model.autoSave(false); // disable auto save
```

### Snapshots

You can create model snapshots to save model state.

#### Create snapshot

```js
const snapshot = model.snapshot();
```

#### Restore snapshot

```js
model.snapshot(snapshot);
```

## Batch updates
You can use batch updates in model. Batch updates are useful when you want to update multiple properties at once without triggering the change event for each property.

```js
const model = new Model({
    name: "John",
    age: 30,
});

model.batch(() => {
    model.data.name = "Mike";
    model.data.age = 31;
});
```

## DevTools

You can activate DevTools for a model. DevTools is useful when you want to debug your model.

```js
const model = new Model({});

model.runDevTools({
    enabled: true,
    timeTravel: true,
    maxSnapshots: 50
});
```

## Validating Model

To validate model, you can use methods:

+ `validate()` - validate model for cycling dependencies and missing properties
+ `validPath(path)` - check if path is valid

```js
const model = new Model({
    name: "John",
    age: 30,
});

model.validate();
model.validatePath('name'); // true
model.validatePath('lastname'); // false
```

## Plugins
You can use plugins in model. Plugins are useful when you want to extend model functionality.

### Register plugin

To register plugin, you must use static method `Model.registerPlugin(name, class)`.

```js
class MyPlugin {
    constructor(model, options) {
        this.model = model;
    }

    init() {
        console.log('Plugin initialized');
    }
}

Model.registerPlugin('my-plugin', MyPlugin);
```

### Use plugin

After registering plugin, you can use it in model.

```js
const model = new Model({
    name: "John",
    age: 30,
})

const pluginOptions = {
    ...
}
model.usePlugin("my-plugin", pluginOptions);
```

### Unregister plugin
To unregister plugin, you can use method `Model.removePlugin(name)`.

```js
Model.removePlugin('my-plugin');
```
