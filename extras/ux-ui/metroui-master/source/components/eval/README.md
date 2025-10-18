# Eval Component

The Eval component provides a powerful way to evaluate JavaScript expressions within HTML content. It allows you to embed dynamic expressions in your markup that will be evaluated at runtime.

## Dependencies

None

## Usage

### Basic Usage

```html
<!-- Basic usage with default delimiters -->
<div data-role="eval">
  The result of 2 + 2 is: {{2 + 2}}
</div>

<!-- Using with variables from context -->
<div data-role="eval" data-eval-context="myContext">
  Hello, {{name}}! Today is {{new Date().toLocaleDateString()}}.
</div>
```

### Examples from HTML

```html
<!-- Display the current year -->
<div data-role="eval">{{ new Date().getFullYear() }}</div>

<!-- Evaluate a mathematical expression -->
<div data-role="eval">{{ 2 + 2 * 5 }}</div>

<!-- Use conditional expressions -->
<div data-role="eval">{{ new Date().getHours() < 12 ? 'Good morning' : 'Good day' }}</div>

<!-- Enable error logging -->
<div data-role="eval" data-log-errors="true">{{ someNonExistentVariable }}</div>

<!-- Process child nodes -->
<div data-role="eval" data-process-child="true">
    <div>Today is {{ new Date().toLocaleDateString() }}</div>
    <div>Time is {{ new Date().toLocaleTimeString() }}</div>
</div>
```

### Global Text Evaluation

```javascript
// Evaluate expressions in a string without creating a component
const result = Metro.evalText("The sum is: {{5 + 10}}");
console.log(result); // "The sum is: 15"

// With custom options
const customResult = Metro.evalText("The value is: [[x + y]]", {
  delimiterStart: "[[",
  delimiterEnd: "]]",
  context: { x: 10, y: 20 }
});
console.log(customResult); // "The value is: 30"
```

### Global Configuration

```javascript
// Set global configuration for all eval components
Metro.evalSetup({
  delimiterStart: "<%",
  delimiterEnd: "%>",
  logErrors: true
});

// Now all eval components will use these delimiters
<div data-role="eval">
  The result is: <% 10 * 5 %>
</div>
```

## Plugin Parameters

The Eval component accepts the following configuration options:

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `enabled` | Boolean | `true` | Enables or disables the evaluation of expressions |
| `logErrors` | Boolean | `false` | When true, logs evaluation errors to the console |
| `delimiterStart` | String | `{{` | The starting delimiter for expressions |
| `delimiterEnd` | String | `}}` | The ending delimiter for expressions |
| `context` | Object | `null` | The execution context for variables in expressions |
| `processChild` | Boolean | `true` | When true, processes all child elements recursively |

## API Methods

+ eval(str) - Evaluates expressions within a string using the configured delimiters.

#### Example of Method Usage
```javascript
const evalComponent = Metro.getPlugin("#myEvalElement", "eval");
const result = evalComponent.eval("The answer is {{40 + 2}}");
console.log(result); // "The answer is 42"
```

+ reset() - Resets the element to its original content before evaluation.

#### Example of Method Usage
```javascript
const evalComponent = Metro.getPlugin("#myEvalElement", "eval");
evalComponent.reset();
```

+ destroy() - Destroys the component instance and restores the original content.

#### Example of Method Usage
```javascript
const evalComponent = Metro.getPlugin("#myEvalElement", "eval");
evalComponent.destroy();
```

## Global Methods

### Metro.evalSetup(options)

Configures global defaults for all eval components.

```javascript
Metro.evalSetup({
  delimiterStart: "${",
  delimiterEnd: "}",
  logErrors: true
});
```

### Metro.evalText(text, options)

Evaluates expressions in a text string without creating a component instance.

```javascript
const result = Metro.evalText("Hello, {{name}}!", {
  context: { name: "World" }
});
console.log(result); // "Hello, World!"
```

## Best Practices

1. **Security Considerations**: Be cautious when evaluating user-provided content, as it can lead to security vulnerabilities.

2. **Performance**: Avoid complex expressions that might impact performance, especially in components that update frequently.

3. **Error Handling**: Enable `logErrors` during development to catch and fix evaluation issues.

4. **Context Usage**: Use the `context` parameter to provide variables to expressions rather than relying on global variables.

5. **Custom Delimiters**: Consider using custom delimiters if your content might contain text that looks like the default delimiters.