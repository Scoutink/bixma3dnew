# Hooks

In Metro UI all functions to create user hooks collected in the global namespace named `Hooks`.

## About

The `Hooks` namespace includes functions to create user hooks:
+ `useClickOutside` - perform the effect when the user clicks outside the element
+ `useCompose` - create a composed function
+ `useCookie` - manage a cookie
+ `useCurry` - create a curried function
+ `useDebounce` - create a debounced function
+ `useEvent` - create an event listener
+ `useId` - create id for the element
+ `useInterval` - create an interval
+ `useMediaQuery` - check a media query
+ `useMemo` - memoization function
+ `usePipe` - create a piped function
+ `useQueue` - create a queue
+ `useState` - create a state variable and a function to change it
+ `useThrottle` - create a throttled function
+ `useToggle` - create a toggle function

## Hooks

### useClickOutside()

`useClickOutside` is a hook to detect when a click occurs outside of a given DOM element.
The function accepts a target `element` and a `callback` function.
If a click event happens outside of the specified element, the `callback` will be executed.

```typescript
const myDiv = document.getElementById('my-div');
const handleOutsideClick = () => {
    console.log('Clicked outside the div!');
};

const { attach, detach } = useClickOutside(myDiv, handleOutsideClick);

// Attach the click listener
attach();

// Later, if you need to remove the listener
detach();
```

### useCompose()

`useCompose` is a hook for the composition of functions (performance from right to left)
`f(g(h(x))) => compose(f, g, h)(x)`

```typescript
const add = (x: number) => x + 1;
const multiply = (x: number) => x * 2;
const subtract = (x: number) => x - 3;

// f(g(h(x))) => subtract(multiply(add(x)))
const composedMath = useCompose(subtract, multiply, add);
const result = composedMath(5); // ((5 + 1) * 2) - 3 = 9
console.log(result); // Output: 9
```

```typescript
const trim = (str: string) => str.trim();
const toUpperCase = (str: string) => str.toUpperCase();
const exclaim = (str: string) => str + '!';

const composedString = useCompose(exclaim, toUpperCase, trim);
const message = composedString(" hello world ");
console.log(message); // Output: "HELLO WORLD!"
```

```typescript
// Example 3: No-op (when no functions are provided)
const identity = useCompose();
console.log(identity(42)); // Output: 42
```

### useCookie()

The `useCookie` hook is a simple utility to manage browser cookies.
It allows getting, setting, and deleting cookies in a straightforward way.

**Functions Provided:**
- `get`: Retrieves the value of the cookie by its name.
- `set`: Sets a new value for the cookie with additional options (such as expiration or path).
- `delete`: Deletes the cookie by setting a negative `max-age`.

#### Retrieving a Cookie
```typescript
const { get } = useCookie('user-token');
const token = get();
console.log(token); // Prints the cookie value if exists, otherwise null
```

#### Setting a Cookie
```typescript
const { set } = useCookie('user-token');
set('abc123', { path: '/', expires: new Date(Date.now() + 3600 * 1000) }); // Expires in 1 hour
```

#### Deleting a Cookie
```typescript
const { delete: deleteCookie } = useCookie('user-token');
deleteCookie();
console.log(document.cookie); // The 'user-token' cookie is now deleted
```

:::note
- The options parameter in `set()` accepts cookie attributes (e.g., `path`, `max-age`, `expires`, `secure`, etc.).
- Use `name` as the cookie's key and manage the value using the functions of the hook.
  :::

### useCurry()

Hook for currying a function `f(x, y, z) => f(x)(y)(z)`

```typescript
// Example 1: Basic currying
const add = (x: number, y: number) => x + y;
const curriedAdd = useCurry(add);
console.log(curriedAdd(2)(3)); // Output: 5
```

```typescript
// Example 2: String concatenation
const concat = (a: string, b: string, c: string) => a + b + c;
const curriedConcat = useCurry(concat);
console.log(curriedConcat('Hello')(' ')('World!')); // Output: "Hello World!"
```

```typescript
// Example 3: No-op (when no arguments are provided)
const noop = useCurry();
console.log(noop()); // Output: undefined
```

### useDebounce()

Hook for debouncing a function `f(x) => useDebounce(f, 1000)(x)`

```typescript
// Example 1: Basic debouncing
const log = (message: string) => console.log(message);
const debouncedLog = useDebounce(log, 1000);
debouncedLog('Hello'); // Will log "Hello" after 1 second
```

```typescript
// Example 2: Immediate
const immediateLog = useDebounce(log, 1000, { immediate: true });
immediateLog('Immediate Hello'); // Will log "Immediate Hello" immediately
```

```typescript
 // Example 3: Canceling
 const cancelableLog = useDebounce(log, 1000);
 cancelableLog('Cancel me'); // Will log "Cancel me" after 1 second
 cancelableLog.cancel(); // Cancels the debounced function
```

```typescript
// Example 4: No-op (when no arguments are provided)
const noop = useDebounce();
console.log(noop()); // Output: undefined
```

:::note
- The `immediate` option allows the function to be executed immediately on the leading edge of the timeout.
- The `cancel` method can be used to cancel the debounced function if needed.
- The function will not execute if the wait time is negative.
- The function will not execute if the first argument is not a function.
  :::

### useEvent()

The `useEvent` hook is a utility for handling various events and mutations on DOM elements.
It allows you to specify an event type, a target element, and a callback function that will be executed when the event occurs.

#### Events
+ `load` - Triggered when the element is loaded.
+ `viewport` - Triggered when the element enters or exits the viewport.
+ `attribute` - Triggered when an attribute of the element changes.
+ `children` - Triggered when the children of the element change.
+ `data` - Triggered when the data of the element changes.

```typescript
export enum EVENTS {
    LOAD = 'load',
    VIEWPORT = 'viewport',
    ATTRIBUTE = 'attribute',
    CHILDREN = 'children',
    DATA = 'data',
}
```

```typescript
useEvent({
    event: EVENTS.LOAD,
    target: '#myElement',
    effect: (el) => console.log('Element loaded:', el),
});
```

### useId()

The hook `useId` generates a unique ID associated with a given key, utilizing options for customization.
The IDs are stored internally to ensure they are reused unless `forceNew` is set in the `options`.

**Params:**
+ `key` - A string or symbol or HTMLElement used to generate the ID.
+ `options` - Options to customize the generated ID. An object containing:
    - `prefix` - A string prefix for the ID.
    - `divider` - A string used to separate parts of the ID.
    - `forceNew` - A boolean indicating whether to force a new ID. If `true`, forces the generation of a new ID even if one already exists for the key.

```typescript
// Generate an ID for a string key
const id1 = useId("my-key");
console.log(id1); // Outputs: "id-my_key-0" (depends on current counter)
```

```typescript
// Generate an ID with customization options
const id2 = useId("customElement", { 
    prefix: "custom", 
    divider: "-", 
    forceNew: true 
});
// Outputs: "custom-customElement-0" (depends on current counter)
console.log(id2); 
```

```typescript
// Reuse an existing ID for the same key
const id1 = useId("my-key");
const id3 = useId("my-key");
console.log(id3 === id1); // true
```

```typescript
// Generate IDs for different key types
const id4 = useId(symbolKey);
const id5 = useId(domElement);
console.log(id4); // Example: "id-symbol-1"
console.log(id5); // Example: "id-div-2"
```

### useInterval()

The `useInterval` hook is a utility for creating and managing intervals in JavaScript.

```typescript
const { start, stop } = useInterval(() => {
    console.log('Interval triggered');
}, 1000);

start(); // Starts the interval
stop();  // Stops the interval
```

### useMediaQuery()

`useMediaQuery` - a custom hook that listens to changes in a specified media query and returns
whether the media query currently matches.

```typescript
// Check if the viewport width is 600px or less
const isSmallScreen = useMediaQuery("(max-width: 600px)");
console.log(isSmallScreen); // true or false depending on the screen size
```

```typescript
// Check for a dark mode preference
const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
console.log(prefersDarkMode); // true if user prefers dark mode
```

### useMemo()
`useMemo` - a hook to memoize the result of a function, with an optional maximum cache size.

```typescript
const add = (a: number, b: number): number => a + b;
const memoizedAdd = useMemo(add, { maxSize: 3 });

// Memoized function calls
console.log(memoizedAdd(1, 2)); // 3, computed
console.log(memoizedAdd(1, 2)); // 3, from cache

// Clear the cache
memoizedAdd.clearCache();
console.log(memoizedAdd(1, 2)); // 3, computed again after cache clear
```

### usePipe()
`usePipe` - creates a pipeline of functions where the output of one function is passed as the input to the next.

This utility supports `0`, `1`, `2`, or `more` functions as input:
- If no functions are provided, it returns an identity function.
- If one function is provided, it returns that function.
- If two functions are provided, it optimizes the pipeline for two functions.
- For more than two functions, it chains all functions in order.

```typescript
// Piping two functions: adding 1 and doubling the result
const addOne = (x: number) => x + 1;
const double = (x: number) => x * 2;
const piped = usePipe(addOne, double);
console.log(piped(2)); // Output: 6
```

```typescript
// Using a function pipeline with strings
const toUpperCase = (str: string) => str.toUpperCase();
const appendExclamation = (str: string) => `${str}!`;
const piped = usePipe(toUpperCase, appendExclamation);
console.log(piped('hello')); // Output: 'HELLO!'
```

```typescript
// With no functions passed
const piped = usePipe();
console.log(piped('unchanged')); // Output: 'unchanged'
```

```typescript
// Chaining multiple functions
const increment = (x: number) => x + 1;
const square = (x: number) => x * x;
const half = (x: number) => x / 2;
const piped = usePipe(increment, square, half);
console.log(piped(2)); // Output: 4.5
```

### useQueue()

`useQueue` - A utility hook for managing a queue of items.
Provides methods to add, remove, and inspect items in the queue.

The hook returns {Object}. The methods to interact with the queue:
- `enqueue(item: T): number` - Adds an item to the queue and returns the new size of the queue.
- `dequeue(): T | undefined` - Removes and returns the item at the front of the queue. Returns `undefined` if the queue is empty.
- `peek(): T | null` - Returns the item at the front of the queue without removing it. Returns `null` if the queue is empty.
- `size(): number` - Returns the number of items in the queue.
- `isEmpty(): boolean` - Checks if the queue is empty and returns a boolean value.
- `clear(): void` - Clears all items in the queue.

```typescript
// Create a new queue
const { enqueue, dequeue, peek, size, isEmpty, clear } = useQueue<number>();

// Add items to the queue
enqueue(1);  // Queue: [1], returns 1
enqueue(2);  // Queue: [1, 2], returns 2

// Check the first item
console.log(peek());  // Output: 1

// Remove the first item
console.log(dequeue());  // Output: 1, Queue: [2]

// Check the size of the queue
console.log(size());  // Output: 1

// Check if the queue is empty
console.log(isEmpty());  // Output: false

// Clear the queue
clear();  // Queue: []
console.log(isEmpty());  // Output: true
```

### useState()
`useState` - A custom hook that manages state, similar to React's useState.
It allows tracking of state values and processes an optional callback when the state changes.

**Params:**
- `initialValue` - The initial value of the state.
- `onChange` - An optional callback function that is called when the state changes. It receives the new and old values as arguments.

```typescript
const onStateChange = (newValue: number, oldValue: number) => {
    console.log(`State changed from ${oldValue} to ${newValue}`);
};

const [count, setCount] = useState(0, onStateChange);

console.log(+count); // Logs: 0

setCount(5); // Logs: "State changed from 0 to 5"

setCount(prev => prev + 1); // Logs: "State changed from 5 to 6"
console.log(+count); // Logs: 6

console.log(String(count)); // Logs: "6"
```

### useThrottle()

`useThrottle` - Creates a throttled version of a given function that limits its execution to at most once every `wait` milliseconds.
Supports options to control whether the function executes on the leading and/or trailing edge of the timeout.

```typescript
// Throttle a function that logs a message
const throttledLog = useThrottle((message) => console.log(message), 1000, { leading: true });
throttledLog("Hello"); // Logs "Hello" immediately
throttledLog("World"); // Ignored, as it's within the 1000ms wait period

setTimeout(() => {
  throttledLog("Goodbye"); // Logs "Goodbye" after 1000ms
}, 1500);
```

```typescript
// Cancel pending execution
const throttledFn = useThrottle(() => console.log("Executed"), 2000);
throttledFn();
throttledFn.cancel(); // Prevents the execution of the trailing call
```

### useToggle()
`useToggle` - A custom hook that provides a simple way to toggle a boolean state value.
It returns the current state and a function to toggle it.

```typescript
// Basic usage
const toggle = useToggle();
console.log(toggle.get()); // false
toggle.toggle(); // true
toggle.set(false); // false
```

```typescript
// Initialize with a custom starting value
const toggle = useToggle(true);
console.log(toggle.get()); // true
toggle.toggle(); // false
toggle.set(true); // true
```


