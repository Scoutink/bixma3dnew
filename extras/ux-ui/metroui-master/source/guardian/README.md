# Guardian

The idea of `Guardian` is as follows: the user, using guardians,
specifies a schema that the object must match and then uses parsers to check the content of the object.


```js
const schema = G.object({
    name: G.string(), // <-- guard
    email: G.email("Please, enter a valid email address") // <-- guard
})
const objectToBeParsed = {...}
const value = G.safeParse(schema, objectToBeParsed) // <-- parser
if (value.ok) { // <-- check result boolean
    console.log(`Object correct`, value.output) // <-- parsed object
} else {
    console.error(value.error) // <-- parsed error
}
```

## Population

The `Guardian` functions stored in the global namespace named `G`.

```js
const schema = G.string()
try {
    G.parse(schema, 123)  
} catch (e) {
    console.error(e.message)
}
```

## Guardians

The `Guardian` provides a set of functions – `guardians`, to create a schema for validation user input or other data.

### `array()`

Check if the value is an array of specified type: `array(guard_type, err_message?)`. As `guard_type` you can use any guardian.

```js
const schema_array_of_strings = G.array(G.string())
const schema_array_of_numbers = G.array(G.number())
const schema_array_of_dates = G.array(G.date(), "Use only dates")
```

### `base64()`

Check if the value is a base64 string: `base64(err_message)`.

```js
const schema = G.base64()
```

### `between()`

Check if the value is between two numbers or dates: `between(min, max, err_message)`.

```js
const schema = G.between(1, 10)
```

### `bigint()`

Check if the value is a bigint: `bigint(err_message)`.

```js
const schema = G.bigint()
```

### `boolean()`

Check if the value is a boolean: `boolean(err_message)`.

```js
const schema = G.boolean()
```

### `bytes()`

Check if the value is a bytes: `bytes(err_message)`.

```js
const schema = G.bytes()
```

### `creditCard()`

Check if the value is a credit card: `creditCard(err_message)`. Also you can use specified CC guardians: `visa()`, `mastercard()`, `amex()`, `discover()`, `diners()`, `jcb()`, and `union()`.

```js
const schema = G.creditCard()
```

### `date()`

Check if the value is a date object or valid date string: `date(err_message)`.

```js
const schema = G.date()
```

### `digits()`

Check if the value contains only digits: `digits(err_message)`.

```js
const schema = G.digits()
```

### `domain()`

Check if the value is a domain: `domain(err_message)`.

```js
const schema = G.domain()
```

### `email()`

Check if the value is an email: `email(err_message)`.

```js
const schema = G.email()
```

### `empty()`

Check if the value is empty: `empty(err_message)`.

```js
const schema = G.empty()
```

### `endsWith()`

Check if the value ends with a specified string: `endsWith(str, err_message)`.

```js
const schema = G.endsWith("com")
```

### `finite()`

Check if the value is a finite: `finite(err_message)`.

```js
const schema = G.finite()
```

### `float()`

Check if the value is a float: `float(err_message)`.

```js
const schema = G.float()
```

### `func()`

Check if the value is a function: `func(err_message)`.

```js
const schema = G.func()
```

### `color()`

Check if the value is a:

+ `color(err_message)` - hex, rgb, rgba, hsl, or hsla.
+ `hexColor(err_message)` - hex.
+ `rgbColor(err_message)` - rgb or rgba.
+ `hslColor(err_message)` - hsl or hsla.

```js
const schema = G.color()
const schema = G.hexColor()
const schema = G.rgbColor()
const schema = G.hslColor()
```

### `imei()`

Check if the value is an IMEI: `imei(err_message)`.

```js
const schema = G.imei()
```

### `instance()`

Check if the value is an instance of a specified class: `instance(class, err_message)`.

```js
const schema = G.instance(Date)
```

### `integer()`

Check if the value is an integer: `integer(err_message)`.

```js
const schema = G.integer()
```

### `ip()`

Check if the value is an IP: `ip(err_message)`.

```js
const schema = G.ip()
```

### `length()`

Check if the value has a specified length: `length(val, err_message)`.

+ `length(val, err_message)` - check if the value has a specified length.
+ `minLength(min, err_message)` - check if the value has a minimum length.
+ `maxLength(max, err_message)` - check if the value has a maximum length.

```js
const schema = G.length(10)
```

### `maxValue()`

Check if the value is less than a specified number: `maxValue(max, err_message)`.

```js
const schema = G.max(10)
```

### `minValue()`

Check if the value is greater than a specified number: `minValue(min, err_message)`.

```js
const schema = G.min(1)
```

### `notNull()`

Check if the value is not null: `notNull(err_message)`.

```js
const schema = G.notNull()
```

### `notNumber()`

Check if the value is not a number: `notNumber(err_message)`.

```js
const schema = G.notNumber()
```

### `number()`

Check if the value is a number: `number(err_message)`.

```js
const schema = G.number()
```

### `pattern()`

Check if the value matches a specified pattern: `pattern(regexp, err_message)`.

```js
const schema = G.pattern(/^[a-z]+$/)
```

### `promise()`

Check if the value is a promise: `promise(err_message)`.

```js
const schema = G.promise()
```

### `required()`

Check if the value is required: `required(err_message)`.

```js
const schema = G.required()
```

### `safeInteger()`

Check if the value is a safe integer: `safeInteger(err_message)`.

```js
const schema = G.safeInteger()
```

### `startsWith()`

Check if the value starts with a specified string: `startsWith(str, err_message)`.

```js
const schema = G.startsWith("https://")
```

### `string()`

Check if the value is a string: `string(err_message)`.

```js
const schema = G.string()
```

### `symbol()`

Check if the value is a symbol: `symbol(err_message)`.

```js
const schema = G.symbol()
```

### `unknown()`

Check if the value is unknown: `unknown(err_message)`.

```js
const schema = G.unknown()
```

### `url()`

Check if the value is a URL: `url(err_message)`.

```js
const schema = G.url()
```

### `contains()`

Check if the value contains a specified value: `contains(str, err_message)`. This guardian is used only for arrays and strings.

```js
const schema = G.contains("https://")
```

### `type()`

Check if the value is a specified type: `type(type, err_message)`. The `type` can be: `string`, `number`, `array`, `object`, `null`, `undefined`, `date`, `function`, or `boolean`.

```js
const schema = G.type("string")
```

### `equal()`

Check if the value is equal to a specified value: `equal(val, err_message)`. This guard used `===` operator.

```js
const schema = G.equal(10)
```

### `similar()`

Check if the value is similar to a specified value: `similar(val, err_message)`. This guard used `==` operator.

```js
const schema = G.similar("10")
```

### `great()`

Check if the value is a great of specified value: `great(val, err_message)`.

```js
const schema = G.great(10)
```

### `greatOrEqual()`

Check if the value is a great or equal to specified value: `greatOrEqual(val, err_message)`.

```js
const schema = G.greatOrEqual(10)
```

### `less()`

Check if the value is a less of specified value: `less(val, err_message)`.

```js
const schema = G.less(10)
```

### `lessOrEqual()`

Check if the value is a less or equal to specified value: `lessOrEqual(val, err_message)`.

```js
const schema = G.lessOrEqual(10)
```

### `object()`

Create object schema: `object({...}, err_message)`.

```js
const schema = G.object({
    name: G.string(),
    email: G.email(),
})
```

## Combinators

The `Guardian` provides a set of functions – `combinators`, to combine guardians.

### `pipe()`

Run guardians left to right: `pipe(guard1, guard2, ..., guardN)`.

```js
const schema = G.object({
    name: G.pipe(G.required(), G.string()),
})
```

### `compose()`

Run guardians right to left: `compose(guard1, guard2, ..., guardN)`.

```js
const schema = G.object({
    name: G.compose(G.string(), G.required()),
})
```

## Parsers

The `Guardian` provides a set of functions – `parsers`, to check the content of the object.

### `parse()`

Check the content of the object and throw an error if it is invalid: `parse(schema, object)`.

```js
const schema = G.string()
G.parse(schema, 123) // throw error
```

### `safeParse()`

Check the content of the object and return a special object with `.output` when all ok, and `.error` when invalid data: `safeParse(schema, object)`.

```js
const schema = G.string()
const result = G.safeParse(schema, 123)

if (result.ok) {
    console.log(result.output)
} else {
    console.error(result.error)
}
```


