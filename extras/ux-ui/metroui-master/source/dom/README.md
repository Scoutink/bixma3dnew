# Dom

`DOM` (@olton/dom) is a lightweight JavaScript library for DOM manipulation. It provides a convenient and intuitive API similar to jQuery for simplifying work with DOM elements, event handling, animations, and AJAX requests.


## Population

The main object has the name `Dom`. Library may capture and relinquish `$` with methods `Dom.global()` and `Dom.noConflict()`. Library automatic capture `$` if it free.

:::caution[Important!]
Further in the documentation `$` will be used to specify the reference to the Dom object.
:::

## Constructor

The `Dom` has a fabric function `$` or `Dom` that creates a new instance of the `Dom` object.

```js
const el1 = Dom("div");
const el2 = $("div");
```

### Create a new instance
You can use a different context to create a new instance of the `Dom` object.

+ `$( "div" )` - select by tag name
+ `$( ".div" )` - select by class name
+ `$( "#div" )` - select by id
+ `$( "<div>" )` - create by tag name
+ `$( "<div>", context )` - create in context
+ `$( "<div>any_text_or_html</div>" )` - create by HTML
+ `$( "<div>...</div><div>...</div>" )` - create by tags
+ `$( "<div>", {...} )` - create by tag with attributes
+ `$.meta(name)` - get meta tag content (`$("meta[name='$name']")`)
+ `$.metaBy(name)` - get meta tag content (`$("meta[$name]")`)
+ `$.doctype()` - get doctype as Dom object
+ `$.html()` - get HTML element as Dom object
+ `$.head()` - get a head element as a Dom object
+ `$.body()` - get a body element as a Dom object
+ `$.document()` - get document element as Dom object
+ `$.window()` - get a window element as a Dom object

## Methods

`Dom` contains many methods to make it easier to work with HTML elements and their properties.

### Loops

+ `$.each(array_or_object, callback)` - iterate over an array or object
+ `$(...).each(callback)` - iterate over a collection of elements

### Ajax

+ `$.ajax({...})` - send an HTTP request
+ `$.get(url, data, options)` - send a GET request
+ `$.post(url, data, options)` - send a POST request
+ `$.put(url, data, options)` - send a PUT request
+ `$.patch(url, data, options)` - send a PATCH request
+ `$.delete(url, data, options)` - send a DELETE request
+ `$.json(url, data, options)` - send a JSON request
+ `$(...).load(url, data, options)` - load data from the server and place the returned HTML into the matched element

### Animation

You can animate elements using the `Dom` library.

#### Animation object

```
{
     draw: {} | function,
     dur: 1000,
     ease: "linear",
     loop: 0,
     pause: 0,
     dir: "normal",
     defer: 0,
     onFrame: function,
     onDone: function
}
```

#### Methods

+ `$.animate({...})` - animate a set of CSS properties for an element
+ `$.chain([...])` - chain animations
+ `$.stop(id, done)` - stop animation
+ `$.stopAll(done, filter)` - stop all animations
+ `$.resume(id)` - resume animation
+ `$.resumeAll(filter)` - resume all animations
+ `$.pause(id)` - pause animation
+ `$.pauseAll(filter)` - pause all animations
+ `$(...).animate(...)` - animate a set of CSS properties for an element
+ `$(...).chain(...)` - chain animations
+ `$(...).stop(...)` - stop animation
+ `$(...).pause(...)` - pause animation
+ `$(...).resume(...)` - resume animation

#### Effects

+ `$(...).fadeIn()` - fade in an element
+ `$(...).fadeOut()` - fade out an element
+ `$(...).slideUp()` - slide up an element
+ `$(...).slideDown()` - slide down an element
+ `$(...).moveTo()` - move an element
+ `$(...).centerTo()` - center an element
+ `$(...).colorTo()` - change the color of an element
+ `$(...).backgroundTo()` - change the background color of an element
+ `$(...).zoomIn()` - zoom in an element
+ `$(...).zoomOut()` - zoom out an element

### Attributes

+ `$(...).attr()` - get the value of an attributes for the first element in the set of matched elements
+ `$(...).attr(name)` - get the value of an attribute for the first element in the set of matched elements
+ `$(...).attr(name, value)` - set attribute for the set of matched elements
+ `$(...).attr({...})` - set attributes for the set of matched elements
+ `$(...).removeAttr(name)` - remove an attribute from each element in the set of matched elements
+ `$(...).toggleAttr(name, value)` - toggle attribute for the set of matched elements
+ `$(...).id(value?)` - get or set the id attribute
+ `$(...).title(value?)` - get or set the title attribute
+ `$(...).name(value?)` - get or set the name attribute
+ `$(...).href(value?)` - get or set the href attribute
+ `$(...).src(value?)` - get or set the src attribute
+ `$.charset(val?)` - get or set charset
+ `$.lang(val?)` - get or set land attribute for HTML tag
+ `$.title(val?)` - get or set document title

### Classes & Styles

+ `$(...).addClass(...)` - add one or more classes to the set of matched elements
+ `$(...).removeClass(...)` - remove class(es) from the set of matched elements
+ `$(...).toggleClass(...)` - toggle class for matched elements
+ `$(...).hasClass(...)` - check if an element has class
+ `$(...).clearClasses()` - remove all classes from the set of matched elements
+ `$(...).cls(returTypeArray)` - get classes of the first element in a set
+ `$(...).removeClassBy(...)` - remove classes by filter
+ `$(...).classNames(string|object, ...)` - set classes names
+ `$(...).style(name?, pseudo?)` - get style properties
+ `$(...).removeStyle(names)` - remove style properties
+ `$(...).removeStyleProperty(name)` - remove style property
+ `$(...).css(name, value)` - set style property
+ `$(...).css({...})` - set style properties
+ `$(...).cssVar(...)` - get or set CSS variable

### Properties

+ `$(...).html()` - get the HTML contents of the first element in the set of matched elements
+ `$(...).html(value)` - set the HTML contents of each element in the set of matched elements
+ `$(...).text()` - get the combined text contents of each element in the set of matched elements
+ `$(...).text(value)` - set the text contents of the set of matched elements
+ `$(...).innerText()` - get the inner text of the first element in the set of matched elements
+ `$(...).innerText(value)` - set the inner text of the first element in the set of matched elements
+ `$(...).outerHTML()` - get the outer HTML of the first element in the set of matched elements
+ `$(...).empty()` - remove all child nodes of the set of matched elements
+ `$(...).clear()` - remove all child nodes of the set of matched elements
+ `$(...).val()` - get the current value of the first element in the set of matched elements
+ `$(...).val(value)` - set the value or innerHtml of each element in the set of matched elements
+ `$(...).prop(property, value?)` - set the value of each element in the set of matched elements

### Manipulation

+ `$(...).appendText(text)` - append text to the element
+ `$(...).prependText(text)` - prepend text to the element
+ `$(...).append(...)` - insert content to the end of each element in the set of matched elements
+ `$(...).appendTo(...)` - insert content to the end of each element in the set of matched elements
+ `$(...).prepend(...)` - insert content to the beginning of each element in the set of matched elements
+ `$(...).prependTo(...)` - insert content to the beginning of each element in the set of matched elements
+ `$(...).insertBefore(elements)` - insert content before each element in the set of matched elements
+ `$(...).insertAfter(elements)` - insert content after each element in the set of matched elements
+ `$(...).before(html|elements)`  - insert content before each element in the set of matched elements
+ `$(...).after(html|elements)` - insert content after each element in the set of matched elements
+ `$(...).clone(deep, withData)` - clone the set of matched elements
+ `$(...).import(html)` - import HTML content with `importNode`
+ `$(...).adopt(html)` - adopt HTML content with `adoptNode`
+ `$(...).remove(filterSelector)` - remove the set of matched elements from the DOM
+ `$(...).wrap( el )` - wrap the set of matched elements
+ `$(...).wrapAll( el )` - wrap the set of matched elements
+ `$(...).wrapInner( el )` - put el content into each element in the set

### Contains

+ `$(...).index(selector|element)` - get the index of the element in child nodes of parent
+ `$(...).indexOf(selector|element)` - get the index of element in the set
+ `$(...).get(index)` - get the HTML element at the specified index
+ `$(...).eq(index)` - get the element as Dom an object at the specified index
+ `$(...).is(element|selector|arrayLike)` - check if the set of matched elements contains the given element
+ `$(...).is(":selected")` - check if the element is selected
+ `$(...).is(":checked")` - check if the element is checked
+ `$(...).is(":visible")` - check if the element is visible
+ `$(...).is(":hidden")` - check if the element is hidden
+ `$(...).same(element|selector)` - check if the set of matched elements is the same as the set of matched elements in the object
+ `$(...).last()` - get the last element in the set of matched elements
+ `$(...).first()` - get the first element in the set of matched elements
+ `$(...).odd()` - get the odd elements in the set of matched elements
+ `$(...).even()` - get the even elements in the set of matched elements
+ `$(...).filter(fn)` - filter elements by function
+ `$(...).find(selector)` - get the descendants of each element in the current set of matched elements, filtered by a selector
+ `$(...).contains(selector)` - check if the element contains another element
+ `$(...).children(selector)` - get the children of each element in the set of matched elements
+ `$(...).parent(selector)` - get the parent of each element in the set of matched elements
+ `$(...).parents(selector)` - get the ancestors of each element in the set of matched elements
+ `$(...).closest(selector)` - get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree
+ `$(...).siblings(selector)` - get the siblings of each element in the set of matched elements
+ `$(...).prev()` - get the immediately preceding sibling of each element in the set of matched elements
+ `$(...).next()` - get the immediately following sibling of each element in the set of matched elements
+ `$(...).prevAll()` - get the immediately preceding sibling of each element in the set of matched elements
+ `$(...).nextAll()` - get the immediately following sibling of each element in the set of matched elements
+ `$(...).has(selector)` - reduce the set of matched elements to those that have a descendant that matches the selector or DOM element
+ `$(...).back(returnToStart)` - return to the previous set of matched elements
+ `$(...).items()` - get the array of elements

### Position & Size

+ `$(...).offset()` - get the current coordinates of the first element in the set of matched elements, relative to the document
+ `$(...).offset(value)` - set the current coordinates for elements in the set, value must be an object with `top` and `left` properties
+ `$(...).position(includeMargin = false)` - get the current coordinates of the first element in the set of matched elements, relative to the offset parent
+ `$(...).left(value, includeMargin = false)` - get or set the left position of the element
+ `$(...).top(value, includeMargin = false)` - get or set the top position of the element
+ `$(...).rect()` - get the size and position of the element
+ `$(...).pos()` - get the position `{top, left}` of the element from computed CSS
+ `$(...).height()` - get the current computed height for the first element in the set of matched elements
+ `$(...).height(value)` - set the height of each element in the set of matched elements
+ `$(...).width()` - get the current computed width for the first element in the set of matched elements
+ `$(...).width(value)` - set the width of each element in the set of matched elements
+ `$(...).outerHeight(val?)` - get the current computed height for the first element in the set of matched elements, including padding, border, and optionally margin
+ `$(...).outerWidth(val?)` - get the current computed width for the first element in the set of matched elements, including padding, border, and optionally margin
+ `$(...).padding()` - get the paddings of the first element in the set of matched elements
+ `$(...).margin()` - get the margins of the first element in the set of matched elements
+ `$(...).border()` - get the borders of the first element in the set of matched elements

### Visibility

+ `$(...).hidden(mode, callback)` - set the hidden property for elements in a set
+ `$(...).hide(callbacl)` - hide the matched elements
+ `$(...).show(callback)` - show the matched elements
+ `$(...).toggle(callback)` - display or hide the matched elements
+ `$(...).visible(mode, callback)` - set the visibility property for elements in a set

### Scroll

+ `$.scrollTop(value)` - get or set the vertical scrollbar position for the window
+ `$.scrollLeft(value)` - get or set the horizontal scrollbar position for the window
+ `$.scrollTop(left, top)` - set the scrollbar position for the window
+ `$.scrollToElement(el)` - scroll to the element
+ `$(...).scrollTop()` - get the vertical scrollbar position for the first element in the set
+ `$(...).scrollTop(value)` - set the vertical scrollbar position for elements
+ `$(...).scrollLeft()` - get the horizontal scrollbar position for the first element in the set
+ `$(...).scrollLeft(value)` - set the horizontal scrollbar position for elements
+ `$(...).scrollTo(relativeToViewport)` - scroll to the element


### Events

+ `$.events[]` - list of current registered events
+ `$.eventHooks{}` - list of event hooks
+ `$.setEventHandler(event_obj)` - set event handler
+ `$.getEventHandler(index)` - get event handler
+ `$.off()` - remove all registered events
+ `$.getEvents()` - get all registered events
+ `$.getEventHooks()` - get all event hooks
+ `$.addEventHook(event, handler, type)` - add event hook, where type is `before` or `after`
+ `$.removeEventHook(event, type)` - remove event hook
+ `$.removeEventHooks(event)` - remove event hooks
+ `$.load(fn)` - add a function to the load event
+ `$.unload(fn)` - add a function to the unload event
+ `$.beforeunload(fn)` - add a function to the beforeunload event
+ `$.ready(fn)` - add a function to the DOMContentLoaded event
+ `$(...).on(events, selector, handler, options)` - attach an event handler function for one or more events to the selected elements
+ `$(...).one(events, selector, handler, options)` - attach an event handler function for one or more events to the selected elements
+ `$(...).off(events, selector, options)` - remove events
+ `$(...).trigger(event, data)` - trigger an event
+ `$(...).fire(event, data)` - trigger an event
+ `$(...).blur()` - trigger blur event
+ `$(...).resize()` - trigger resize event
+ `$(...).scroll()` - trigger scroll event
+ `$(...).focus()` - trigger focus event
+ `$(...).click()` - trigger click event
+ `$(...).dblclick()` - trigger dblclick event
+ `$(...).change()` - trigger change event
+ `$(...).submit()` - trigger submit event
+ `$(...).keydown()` - trigger keydown event
+ `$(...).keyup()` - trigger keyup event
+ `$(...).keypress()` - trigger keypress event
+ `$(...).mousedown()` - trigger mousedown event
+ `$(...).mouseup()` - trigger mouseup event
+ `$(...).mouseover()` - trigger mouseover event
+ `$(...).mouseout()` - trigger mouseout event
+ `$(...).mouseenter()` - trigger mouseenter event
+ `$(...).mouseleave()` - trigger mouseleave event
+ `$(...).select()` - trigger select event
+ `$(...).contextmenu()` - trigger contextmenu event
+ `$(...).touchstart()` - trigger touchstart event
+ `$(...).touchend()` - trigger touchend event
+ `$(...).touchmove()` - trigger touchmove event
+ `$(...).touchcancel()` - trigger touchcancel event


### Scripts

+ `$.script(el, context)` - create a script element in the context
+ `$.loadScript(url, context, callback)` - create a script element in the context
+ `$(...).script(context)` - create a script element in the context


### Data

+ `$.dataset(ns)` - create a Dataset object
+ `$.hasData(el)` - check if the element has data
+ `$.data(el, name, data)` - store arbitrary data associated with the matched elements
+ `$.removeData(el, name)` - remove data from the matched elements
+ `$(...).data()` - get the value of a data attribute for the first element in the set
+ `$(...).data(key)` - get the value of a data attribute for the first element in the set for the key
+ `$(...).data(key, value)` - set the value of a data attribute for the first element in the set for the key
+ `$(...).removeData(key)` - remove data from the matched elements

### Utils

+ `$.dark` - true, if the browser is in dark mode
+ `$.device` - true, if the device is a mobile device
+ `$.touchable` - true, if the device supports touch events
+ `$.localhost` - true, if the host is localhost
+ `$.isLocalhost(host)` - check, if the host is localhost
+ `$.isPrivateAddress(address)` - check, if the address is in private network
+ `$.uniqueId(prefix)` - generate a unique id in format `prefix-xxxx-xxxx-yxxx-xxxxxxxxxxxx`
+ `$.toArray(arrayLike)` - convert an array-like object to array
+ `$.import(arrayLike|object)` - convert array-like object or object to the Dom object
+ `$.merge(one, two)` - merge two objects into one
+ `$.type(obj)` - get the type of the object
+ `$.remove(selector)` - remove elements from the DOM
+ `$.isPlainObject(obj)` - check if the object is a plain object
+ `$.isEmptyObject(obj)` - check if the object is empty
+ `$.isArrayLike(obj)` - check if the object is array-like
+ `$.not(value)` - check if the value is not null or undefined
+ `$.parseUnit(value)` - parse the value with unit, return tuple [value, unit]
+ `$.getUnit(value)` - get the unit of the value
+ `$.isVisible(el)` - check if the element is visible
+ `$.isHidden(el)` - check if the element is hidden
+ `$.random(min, max)` - generate a random number
+ `$.hasProp(obj, prop)` - check if the object has a property
+ `$.serializeToArray(form)` - serialize form to array
+ `$.serialize(form)` - serialize form to string with `&` delimiter
+ `$.viewport()` - get the viewport size


### Timeout & Interval

`Dom` overrides the `setTimeout`, `setInterval` functions using `Workers`, which allows intervals to work even when the browser tab is inactive.
You can still use setTimeout, setInterval as before.