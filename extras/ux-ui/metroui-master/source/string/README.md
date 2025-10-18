# String

The `String` library provides a set of methods and properties for working with strings.

Metro UI includes the `String` library as global class `Str` and fabric method `str()`.

## Constructor

The `Str` class is a wrapper around the native `String` object, but provides an additional methods and properties for working with strings.
With the `Str` you can create mutable or immutable strings.

### Mutable strings <Badge text="default" variant="tip"/>

To create a mutable string, you can use the `str()` function or `Str` class with the `mutable` option set to `true`.
`Mutable` string is a default type of string, created with class `Str`.

```js
const str1 = new Str('Hello, World!', {mutable: true}); // immutable string
const str2 = str('Hello, World!', true); // mutable string
```

### Immutable strings

To create an immutable string, you can use the `str()` function or `Str` class with the `mutable` option set to `false`.

```js
const str1 = new Str('Hello, World!', {mutable: false}); // immutable string
const str2 = str('Hello, World!', false); // immutable string
```

### Primitive

You can use class `Str` as a primitive type. By default it is `string`, but you be used as a `Numeric` with hint `number`.

```js
const str1 = new Str('100');
console.log(""+str1); // "100"

const str2 = str('100');
console.log(+str2); // 100
```

## Properties

### `length`

Property, returns the length of the string `length`.

```js
const str = str('Hello, World!');
console.log( str.length ); // 13
```

### `Symbol.toStringTag`

Return `Str`.

## Methods

### `val()`

Set or get the value of the object `Str`.

```js
const str = str('Hello, World!');
console.log( str.val() ); // Hello, World!

str.val("New value")
console.log( str.val() ); // New value
```

### `append()`

Appends a string to the end of the current string `append(str, times = 1)`.

```js
const str = str('Hello');
str.append(', World!'); // Hello, World!

const str2 = str('More');
str.append('.', 3); // More...
```

### `camelCase()`

Converts a string to camelCase `camelCase()`.

```js
const str = str('Hello, World!');
str.camelCase(); // helloWorld
```

### `capitalize()`

Capitalizes the first letter of a string `capitalize()`.

```js
const str = str('hello, world!');
str.capitalize(); // Hello, world!
```

### `chars()`

Returns an array of characters in the string: `chars(str, ignore = [])`.

```js
const str = str('Hello', ['o']);
str.chars(); // ['H', 'e', 'l', 'l']
```

### `count()`

Counts the number of chars in the string `count()`.

```js
const str = str('Hello, World!');
str.count(); // 13
```

### `countChars()`

Counts the number of chars in the string `countChars(str, ignore = [])`.

```js
const str = str('Hello, World!');
str.countChars(['l']); // 10
```

### `countUniqueChars()`

Counts the number of unique chars in the string `countUniqueChars(str, ignore = [])`.

```js
const str = str('Hello, World!');
str.countUniqueChars(); // 10
```

### `countSubstr()`

Counts the number of substrings in the string `countSubstr(substr, ignore = [])`.

```js
const str = str('Lorem ipsum dolor sit amet.');
str.countSubstr('or'); // 2
```

### `countWords()`

Counts the number of words in the string `countWords()`.

```js   
const str = str('Lorem ipsum dolor sit amet.');
str.countWords(); // 5
```

### `countUniqueWords()`

Counts the number of unique words in the string `countUniqueWords()`.

```js
const str = str('Lorem ipsum dolor sit amet.');
str.countUniqueWords(); // 5
```

### `dashedName()`

Converts a string to dashed name `dashedName()`.

```js   
const str = str('Hello, World!');
str.dashedName(); // hello-world
```

### `decapitalize()`

Decapitalizes the first letter of a string `decapitalize()`.

```js
const str = str('Hello, World!');
str.decapitalize(); // hello, World!
```

### `endsWith()`

Checks if the string ends with a substring `endsWith(substr)`.

```js
const str = str('Hello, World!');
str.endsWith('World!'); // true
```

### `escapeHtml()`

Escapes HTML characters in the string `escapeHtml()`.

```js
const str = str('<div>Hello, World!</div>');
str.escapeHtml(); // &lt;div&gt;Hello, World!&lt;/div&gt;
```

### `first()`

Get `N` first chars of the string `first(n)`.

```js
const str = str('Hello, World!');
str.first(5); // Hello
```

### `includes()`

Checks if the string includes a substring `includes(substr)`.

```js
const str = str('Hello, World!');
str.includes('World!'); // true
```

### `insert()`

Inserts a string at the specified position `insert(substr, pos)`.

```js
const str = str('Hello, World!');
str.insert('Beautiful ', 7); // Hello, Beautiful World!
```

### `isAlpha()`

Checks if the string contains only letters `isAlpha()`.

```js
const str = str('Hello, World!');
str.isAlpha(); // false
```

### `isAlphaDigit()`, `isAlphaNum()`

Checks if the string contains only letters and digits `isAlphaDigit()`.

```js
const str = str('Hello, World!');
str.isAlphaDigit(); // false

const str = str('Hello5');
str.isAlphaDigit(); // true
```

### `isBlank()`

Checks if the string is blank `isBlank(strong)`.

```js
const str = str('Hello, World!');
str.isBlank(); // false
const str = str('   ');
str.isBlank(); // true
const str = str('   ');
str.isBlank(false); // false
```

### `isDigit()`

Checks if the string contains only digits `isDigit()`.

```js
const str = str('Hello, World!');
str.isDigit(); // false
const str = str('12345');
str.isDigit(); // true
```

### `isEmpty()`

Checks if the string is empty `isEmpty()`.

```js
const str = str('Hello, World!');
str.isEmpty(); // false
const str = str('');
str.isEmpty(); // true
const str = str('  ');
str.isEmpty(); // true
```

### `isLower()`

Checks if the string is lower case `isLower()`.

```js
const str = str('Hello, World!');
str.isLower(); // false
const str = str('hello, world!');
str.isLower(); // true
```

### `isString()`
Checks if the string is a string `isString()`.

```js
const str = str('Hello, World!');
str.isString(); // true
const str = str(123);
str.isString(); // false
```

### `isUpper()`
Checks if the string is upper case `isUpper()`.

```js
const str = str('Hello, World!');
str.isUpper(); // false
const str = str('HELLO, WORLD!');
str.isUpper(); // true
```

### `kebabCase()`

Converts a string to kebab-case `kebabCase()`.

```js
const str = str('Hello, World!');
str.kebabCase(); // hello-world
```

### `last()`

Get `N` last chars of the string `last(n)`.

```js
const str = str('Hello, World!');
str.last(6); // World!
```

### `lower()`

Converts a string to lower case `lower()`.

```js
const str = str('Hello, World!');
str.lower(); // hello, world!
```

### `matches()`
Checks if the string matches a regular expression `matches(regexp, flags = '')`.

```js
const str = str('Hello, World!');
str.matches(/Hello/); // true
```

### `pad()`

Pads the string with a character to the left or right `pad(char = ' ', len)`.

```js
const str = str('Hello');
str.pad(' ', 5); // '     Hello     '
```

### `lpad()`

Pads the string with a character to the left `lpad(char = ' ', len)`.

```js
const str = str('Hello');
str.lpad(' ', 5); // '     Hello'
```

### `rpad()`
Pads the string with a character to the right `rpad(char = ' ', len)`.

```js
const str = str('Hello');
str.rpad(' ', 5); // 'Hello     '
```

### `prepend()`

Prepends a string to the beginning of the current string `prepend(str)`.

```js
const str = str('World!');
str.prepend('Hello, '); // Hello, World!
```

### `prune()`

Truncates `subject` to a new `length` and doesn't break the words with specified ending. `prune(len, end = '...')`.

```js
const str = str('Hello, World!');
str.prune(5); // Hello...
```

### `repeat()`

Repeats the string `repeat(times)`.

```js
const str = str('Hello');
str.repeat(3); // HelloHelloHello
```

### `reverse()`

Reverses the string `reverse()`.

```js
const str = str('Hello, World!');
str.reverse(); // !dlroW ,olleH
```

### `shorten()`

Shortens the string to a specified length `shorten(len, end = '...')`.

```js
const str = str('Hello, World!');
str.shorten(5); // Hello...
```

### `shuffle()`

Shuffles the string `shuffle()`.

```js
const str = str('Hello, World!');
str.shuffle(); // !dlroW ,olleH
```

### `slice()`

Slices the string to `N` parts `slice(parts)`.

```js
const str = str('Hello World');
str.slice(2); // ["Hello", "World"]
```

### `snakeCase()`

Converts a string to snake_case `snakeCase()`.

```js
const str = str('Hello, World!');
str.snakeCase(); // hello_world
```

### `split()`

Splits the string into an array of strings `split(separator, limit, trim)`.

```js
const str = str('Hello, World!');
str.split(','); // ['Hello', ' World!']
str.split(',', undefined, true); // ['Hello', 'World!']
str.split(',', 1, true); // ['Hello']
```

### `sprintf()`
### `vsprintf()`

### `startsWith()`

Checks if the string starts with a substring `startsWith(substr)`.

```js
const str = str('Hello, World!');
str.startsWith('Hello'); // true
```

### `strip()`

Strips the string of HTML tags `strip(search, replace = '')`.

```js
const str = str('Hello, World!');
str.strip("Hello,", "New"); // New World!
```

### `stripBom()`

Strips the BOM (Byte Order Mark) from the string `stripBom()`.

```js
const str = str('\uFEFFHello, World!');
str.stripBom(); // Hello, World!
```

### `stripTags()`

Strips the string of HTML tags `stripTags(allowed = [])`.

```js
const str = str('<div>Hello, <b>World!</b></div>');
str.stripTags(); // Hello, World!
str.stripTags(['b']); // <b>Hello, World!</b>
```

### `stripTagsAll()`

Strips the string of HTML tags `stripTagsAll()`.

```js
const str = str('<div>Hello, <b>World!</b></div>');
str.stripTagsAll(); // Hello, World!
```

### `substring()`

Returns a substring of the string `substring(start, len)`.

```js
const str = str('Hello, World!');
str.substring(0, 5); // Hello
```

### `swap()`

Swaps the case of the string `swap()`.

```js
const str = str('Hello, World!');
str.swap(); // hELLO, wORLD!
```

### `title()`

Converts a string to title case, optionally allowing customization for splitting and ignoring certain characters. `title(noSplit, sep = "")`.

+ `noSplit` - string | string[] | boolean. A string, an array of characters, or a boolean indicating the characters to skip capitalization.
+ `sep` - string The separator to split the `noSplit` string (if `noSplit` is a string).

```js
const str = str('Hello, World!');
str.title(); 
```

### `trim()`

Trims the string of whitespace `trim()`.

```js
const str = str('   Hello, World!   ');
str.trim(); // Hello, World!
```

### `ltrim()`
Trims the string of whitespace from the left `ltrim()`.

```js
const str = str('   Hello, World!   ');
str.ltrim(); // 'Hello, World!    '   
```

### `rtrim()`
Trims the string of whitespace from the right `rtrim()`.

```js
const str = str('   Hello, World!   ');
str.rtrim(); // '   Hello, World!'
```

### `truncate()`

Truncates the string to a specified length `truncate(len, end = '...')`.

```js
const str = str('Hello, World!');
str.truncate(5); // Hello...
```

### `truncateWithAlign()`

Truncates the string to a specified length and aligns it with the specified character `truncateWithAlign(len, char = ' ', end = '...')`.

```js
const str = str('Hello, World!');
str.truncateWithAlign(5); // Hello...
str.truncateWithAlign(5, '-'); // Hello-
```

### `unescapeHtml()`

Unescapes HTML characters in the string `unescapeHtml()`.

```js
const str = str('&lt;div&gt;Hello, World!&lt;/div&gt;');
str.unescapeHtml(); // <div>Hello, World!</div>
```

### `unique()`

Removes duplicate characters from the string `unique()`.

```js
const str = str('Hello, World!');
str.unique(); // Helo, Wrd!
```

### `uniqueWords()`

Removes duplicate words from the string `uniqueWords()`.

```js
const str = str('Hello, World! Hello, World!');
str.uniqueWords(); // Hello, World!
```

### `upper()`

Converts a string to upper case `upper()`.

```js
const str = str('Hello, World!');
str.upper(); // HELLO, WORLD!
```

### `words()`

Returns an array of words in the string, you can set specified patter to split `words(pattern, flags)`.

```js
const str = str('Hello, World!');
str.words(); // ['Hello', 'World!']
```

### `wrap()`

Wraps the string with a specified character `wrap(before, after)`.

```js
const str = str('Hello, World!');
str.wrap('<b>', '</b>'); // <b>Hello, World!</b>
```

### `wrapTag()`

Wraps the string with a specified HTML tag `wrapTag(tag, attr = {})`.

```js
const str = str('Hello, World!');
str.wrapTag('b', {class: 'bold'}); // <b class="bold">Hello, World!</b>
```

### `nvl()`
Returns the first non-null value from the list of arguments `nvl(val, ...args)`.

```js
const str = str('Hello, World!');
str.nvl('Hello', 'World!'); // Hello
str.nvl(null, 'World!'); // World
str.nvl(null, null, 'Third!'); // Third
```
