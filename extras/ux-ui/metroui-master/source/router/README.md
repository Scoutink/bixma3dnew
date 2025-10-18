# Router

The `Router` class provides a simple way to create a router for your SPA application.

To access to a router functionality in Metro UI, use global class `Router`.


## Usage

```js
import { Router } from "@olton/router";

const router = new Router()

router.addRoute("/", () => { console.log("Home page")})
router.addRoute("/product/:id", (params) => { console.log(`Product page for product ${params.id}`)})

router.listen()
```

## API

### Options
| Option | Type | Description |
|--------|------|-------------|
| `base` | `string` | Base URL for the router. Default is `/`. |
| `fallback` | `string` | Fallback route. Default is `/` |
| `maxRedirects` | `number` | Maximum redirects. Default is `5`. |
| `useCache` | `boolean` | Enabling cache. |
| `cahceLimit` | `number` | Cache size. Default is `50`. |
| `enableSwipeNavigation` | `boolean` | Enable swipe left/right for history navigation. Default is `false`. |
| `routes` | `object` | Create routes in constructor. Default is `null`. |
| `plugins` | `array` | Registering plugins in constructor. Default is `null`. |

```js
const router = new Router({
    base: "/",
    fallback: "/",
    maxRedirects: 5,
    cacheLimit: 50,
    enableSwipeNavigation: false,
    routes: {
        "/": () => { },
        "/product/:id": (params) => { }
    }
})
```

### Routes

#### Add routes

To add routes, you can use methods:
+ `addRoute(path, callback)` - add a new route
+ `addNestedRoute(parentPath, path, callback)` - add a nested route
+ `addLazyRoute(path, callback)` - add a lazy route
+ `addLazyNestedRoute(parentPath, path, importFunc)` - add a lazy nested route
+ `addFallbackRoute(path)` - add a fallback route
+ `add404Route(path)` - add a 404 route
+ `addErrorRoute(path)` - add a error route
+ `addProtectedRoute(path, callback, guardFunction, fallback = '/login')` - add a protected route

```js
router.addRoute("/", () => { })
router.addRoute("/product/:id", (params) => { })
```

#### Remove routes

To remove a route, use the `removeRoute(path)` method:

```js
router.removeRoute("/product/:id")
```

#### Update routes
To update a route, use the `updateRoute(path, callback)` method:

```js
router.updateRoute("/product/:id", (params) => { })
```

### Manual navigation

Router uses method `navigate(path)` to navigate to a matched route.

For manual navigation, you can use the `navigateTo(path, replaceState = false)`

```js
router.navigateTo("/product/1")
```

### Listen for routes
To listen for routes, use the `listen()` method:

```js
router.listen()
```

### Get current route
To get the current route, use the `current` property:

```js
const currentRoute = router.current
```

### Get routes
To get all routes, use the `routes` property or `getRoutes()` method:

```js
const allRoutes = router.routes
const allRoutes = router.getRoutes()
```

### Middleware
You can use middleware to intercept requests and perform actions before the route is processed. To add middleware, use the `use(middleware)` method:

```js
router.use((route) => {
    console.log(`Navigating to ${route.path}`)
})
```

### Hooks

You can use hooks to perform actions before and after the route is processed. To add hooks, use the `beforeEach(hook)` and `afterEach(hook)` methods:

#### Before each hook
```js
router.beforeEach((route) => {
    console.log(`Before navigating to ${route.path}`)
})
```

#### After each hook
```js

router.afterEach((route) => {
    console.log(`After navigating to ${route.path}`)
})
```

### Redirects
You can use redirects to redirect from one route to another. To add a redirect, use the `addRedirect(from, to)` method:

```js
router.addRedirect("/old-path", "/new-path")
```

### Test path
You can test a path, with a `test(path)` method. This method returns object:

```json
{
    "original": string, // original path
    "sanitized": string, // sanitized path
    "isBlocked": boolean, // must blocked
    "isModified": boolean, // was modified
}
```

```js
router.test("/product/1") 
```

### Cache

You can use cache to store routes. To enable cache, use the `useCache` option in the constructor:

```js
const router = new Router({
    useCache: true
})
```
To set the cache limit, use the `cacheLimit` option in the constructor:

```js
const router = new Router({
    cacheLimit: 100
})
```
To clear the cache, use the `clearCache()` method:

```js
router.clearCache()
```


### Debug
You can enable debug mode with `debug` option. This will log all routes and navigation events to the console:

```js
const router = new Router({
    debug: true
})
```

## Plugins

You can use plugins to extend the functionality of the router.

```js
// Пример плагина логирования
const loggerPlugin = {
    install(router, options = {}) {
        const prefix = options.prefix || '[Router]';
        const level = options.level || 'info';
        
        // Подписываемся на события роутера
        router.on('beforeNavigate', (route) => {
            console[level](`${prefix} Переход на: ${route.path}`);
        });
        
        router.on('error', (error) => {
            console.error(`${prefix} Ошибка:`, error);
        });
    },
    
    onInit(router) {
        console.log('Logger plugin initialized');
    },
    
    onDestroy() {
        console.log('Logger plugin destroyed');
    }
};

// Использование
const router = new Router({
    plugins: [
        loggerPlugin, 
    ]
});

// or
router.usePlugin(loggerPlugin, { prefix: '[MyApp Router]', level: 'debug' });
```