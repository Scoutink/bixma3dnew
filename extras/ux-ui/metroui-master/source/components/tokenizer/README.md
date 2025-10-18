# Tokenizer

The Tokenizer component splits text content into individual tokens (words, characters, or custom defined fragments) and applies styling and functionality to each token separately. This allows for precise control over the appearance and behavior of each text element.

## Dependencies

This component has no external dependencies beyond the Metro UI core.

## Usage

### Basic Usage

```html
<!-- Basic usage with element content -->
<div data-role="tokenizer">This text will be tokenized</div>
```

### Additional Configurations

```html
<!-- With custom options -->
<div data-role="tokenizer" 
     data-splitter=" " 
     data-cls-token-odd="bg-red" 
     data-cls-token-even="bg-green">
    This text will be tokenized with colored words
</div>
```

Or initialize with JavaScript:

```javascript
// Using element content
$("#tokenizer").tokenizer({
    splitter: ""  // Split by character
});

// Using provided text
$("#tokenizer").tokenizer({
    textToTokenize: "Hello world!",
    splitter: " "  // Split by word
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `textToTokenize` | String | `""` | Text to tokenize. If empty, element's text content will be used |
| `spaceSymbol` | String | `""` | Symbol to replace spaces with |
| `spaceClass` | String | `"space"` | CSS class for space tokens |
| `tokenClass` | String | `""` | CSS class for all tokens |
| `splitter` | String | `""` | Character(s) to split text by. Empty string splits by character |
| `tokenElement` | String | `"span"` | HTML element to create for each token |
| `useTokenSymbol` | Boolean | `true` | Add class with token symbol (ts-X) to each token |
| `useTokenIndex` | Boolean | `true` | Add class with token index (ti-X) to each token |
| `clsTokenizer` | String | `""` | Additional class for tokenizer container |
| `clsToken` | String | `""` | Additional class for each token |
| `clsTokenOdd` | String | `""` | Additional class for odd tokens |
| `clsTokenEven` | String | `""` | Additional class for even tokens |
| `prepend` | String | `""` | Content to prepend to each token. Can be selector or HTML |
| `append` | String | `""` | Content to append to each token. Can be selector or HTML |

## API Methods

+ `tokenize(text)` - Tokenizes the provided text.
+ `destroy()` - Destroys the component and removes it from the DOM.

#### Example of Method Usage

```javascript
const tokenizer = Metro.getPlugin('#my-tokenizer', 'tokenizer');
tokenizer.tokenize("New text to tokenize");
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTokenCreate` | Triggered when each token is created with `{token}` argument |
| `onTokenize` | Triggered after all text is tokenized with `{tokens, originalText}` arguments |
| `onTokenizerCreate` | Triggered after tokenizer component creation with `{element}` argument |

## Styling with CSS Variables

The tokenizer component doesn't use specific CSS variables, but relies on classes for styling.

## Available CSS Classes

### Base Classes
- No default base class is added, but you can specify one using the `clsTokenizer` option

### Token Classes
- `space` - For space tokens (customizable with `spaceClass` option)
- `ts-X` - Token symbol class, where X is the token content with spaces replaced by underscores (if `useTokenSymbol` is true)
- `ti-X` - Token index class, where X is the token position (if `useTokenIndex` is true)
- `te-odd` or `te-even` - For odd/even tokens
- Classes specified in `clsToken`, `clsTokenOdd`, and `clsTokenEven` options

### Example of Custom Styling

```css
/* Style all tokens */
.tokenizer .ts-important { 
    color: red; 
    font-weight: bold; 
}

/* Style tokens by index */
.tokenizer .ti-1 { 
    animation-delay: 0.1s; 
}

/* Style odd/even tokens */
.tokenizer .te-odd {
    background-color: var(--light);
}
```

## Global Configuration

You can globally configure the tokenizer component using the `Metro.tokenizerSetup` method:

```javascript
Metro.tokenizerSetup({
    tokenElement: "div",
    clsToken: "my-token",
    splitter: " "
});
```

## Example Use Cases

### Character-by-character animation

```html
<div data-role="tokenizer" data-splitter="" class="animate-characters">
    Animated text
</div>

<style>
    .animate-characters .ti-1 { animation-delay: 0.1s; }
    .animate-characters .ti-2 { animation-delay: 0.2s; }
    /* ... and so on */
</style>
```

### Word highlighting

```html
<div data-role="tokenizer" data-splitter=" ">
    This is a sample text with important keywords to highlight
</div>

<style>
    .ts-important { color: red; font-weight: bold; }
    .ts-keywords { color: blue; font-weight: bold; }
</style>
```

### Nested tokenizers (words and characters)

```html
<div id="nested-example">
    Metro UI is awesome!
</div>

<script>
    $('#nested-example').tokenizer({
        splitter: ' ',
        clsToken: "word",
        tokenElement: "div"
    }).children().tokenizer({
        clsToken: "char"
    });
</script>
```

### Custom token styling

```html
<div data-role="tokenizer" 
     data-splitter=" "
     data-cls-token-odd="bg-cyan fg-white"
     data-cls-token-even="bg-orange fg-white">
    Alternating colored words in this sentence
</div>
```
