# Metro UI Library: A Comprehensive Guide for Beginner Programmers

## Introduction

Metro UI is a sleek, intuitive, and powerful front-end framework designed to make web development faster and easier. It's the first front-end component library built in the Metro Style design language (originally popularized by Microsoft), offering a clean, modern aesthetic for your web applications. This library is perfect for building responsive, mobile-first projects on the web.

## What Makes Metro UI Special?

- **No Dependencies**: Metro UI works without requiring other libraries like jQuery
- **Comprehensive Component Library**: Over 150 ready-to-use UI components
- **Responsive Design**: Built with mobile-first principles for all screen sizes
- **Modern Styling**: Clean, flat design based on the Metro design language
- **Customizable**: Extensive theming options with CSS variables
- **Lightweight**: Optimized file sizes for better performance

## Getting Started

### Installation

You can add Metro UI to your project in several ways:

1. **NPM (recommended)**:
   ```bash
   npm install @olton/metroui
   ```

2**CDN**:
   ```html
   <link rel="stylesheet" href="https://cdn.metroui.org.ua/current/metro.css">
   <script src="https://cdn.metroui.org.ua/current/metro.js"></script>
   ```

### Basic Setup

Here's a minimal HTML template to get started:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Metro UI Project</title>

    <!-- Metro UI CSS -->
    <link rel="stylesheet" href="path/to/metro.css">
</head>
<body>
    <!-- Your content here -->

    <!-- Metro UI JavaScript -->
    <script src="path/to/metro.js"></script>
</body>
</html>
```

## Core Concepts

### Component Structure

Metro UI is organized into components, each serving a specific purpose in your interface. Components can be:

1. **CSS-only components**: Styled purely with CSS classes (like buttons, typography)
2. **JavaScript components**: Require JavaScript for functionality (like datepickers, dialogs)
3. **Combined components**: Use both CSS and JavaScript (like accordions, tabs)

### Using Components

#### CSS-only Components

For CSS-only components, you simply add the appropriate classes to your HTML elements:

```html
<!-- A primary button -->
<button class="button primary">Click Me</button>

<!-- A card component -->
<div class="card">
    <div class="card-header">Card Title</div>
    <div class="card-content">Card content goes here</div>
</div>
```

#### JavaScript Components

JavaScript components can be initialized in two ways:

1. **Declarative** (using data attributes):
   ```html
   <div data-role="datepicker"></div>
   ```

2. **Programmatic** (using JavaScript):
   ```javascript
   const datepicker = Metro.makePlugin("#myDatepicker", "datepicker", {
       format: "YYYY-MM-DD"
   });
   ```

### Component Configuration

Most components accept configuration options that can be specified in several ways:

1. **Via data attributes**:
   ```html
   <div data-role="datepicker" 
        data-format="YYYY-MM-DD"
        data-min-year="2000">
   </div>
   ```

2. **Via JavaScript**:
   ```javascript
   Metro.makePlugin("#myDatepicker", "datepicker", {
       format: "YYYY-MM-DD",
       minYear: 2000
   });
   ```

3. **Globally** (for all instances of a component):
   ```javascript
   Metro.datePickerSetup({
       format: "YYYY-MM-DD"
   });
   ```

## Components Overview

Metro UI offers a wide range of components. Here are some of the most commonly used ones:

### Layout Components

- **Grid**: A responsive 12-column grid system
- **Container**: Centered content container with responsive widths
- **Splitter**: Resizable split panels
- **Panel**: Simple content containers with optional headers and footers
- **Box**: Basic container for content
- **Cube**: 3D cube container with rotating sides
- **Flip Card**: Two-sided card that can be flipped
- **Hero**: Large banner-like container for featured content
- **Hover Box**: Container that changes appearance on hover
- **Resizable**: Elements that can be resized by the user
- **Resizer**: Component for resizing elements
- **Window**: Draggable and resizable window-like container

### Navigation Components

- **App Bar**: Top navigation bar for applications
- **Nav View**: Side navigation panel
- **Tabs**: Tabbed interface for content organization
- **Tabs Material**: Material design styled tabs
- **Menus**: Various menu styles (dropdown, context, etc.)
- **Breadcrumbs**: Navigation path indicator
- **Button Group**: Group of related buttons
- **Command Button**: Button with icon and text
- **Context Menu**: Right-click menu
- **D-Menu**: Dropdown menu
- **Drop Menu**: Customizable dropdown menu
- **Dropdown**: Dropdown selection component
- **Dropdown Button**: Button with dropdown menu
- **H-Menu**: Horizontal menu
- **Hamburger**: Mobile menu toggle button
- **Page Control**: Multi-page navigation control
- **Pagination**: Page navigation controls
- **Ribbon**: Office-style ribbon interface
- **Ribbon Menu**: Menu in ribbon style
- **Sidebar**: Side panel for navigation or content
- **Sidenav Counter**: Side navigation with counters
- **Sidenav M3**: Metro 3 style side navigation
- **Sidenav Simple**: Simple side navigation
- **Split Button**: Button with primary and dropdown actions
- **T-Menu**: Tabbed menu
- **Task Bar**: Windows-like taskbar
- **V-Menu**: Vertical menu
- **Wizard**: Step-by-step navigation interface
- **Wizard Classic**: Classic style wizard interface

### Form Components

- **Input**: Text input fields with various styles and validations
- **Input Common**: Common input field styles
- **Input Material**: Material design styled inputs
- **Input Mask**: Input with formatting mask
- **Select**: Dropdown selection fields
- **Checkbox**: Selection control for multiple choices
- **Radio**: Selection control for single choice
- **Radio Buttons**: Group of radio buttons
- **Custom Checkbox**: Styled checkbox controls
- **Datepicker**: Date selection control
- **Timepicker**: Time selection control
- **Calendarpicker**: Calendar date selection
- **Wheelpicker**: Wheel-style picker control
- **Color Picker**: Color selection control
- **Color Selector**: Alternative color selection interface
- **Double Select Box**: Two-column selection interface
- **Double Slider**: Range slider with two handles
- **File Input**: File upload control
- **Form**: Container for form elements
- **Keypad**: Numeric or custom keypad input
- **Rating**: Star rating input
- **Slider**: Range selection control
- **Switch**: Toggle switch control
- **Tag Input**: Input for creating tags
- **Textarea**: Multi-line text input
- **Tokenizer**: Token-based input field
- **Validator**: Form validation component

### Feedback Components

- **Dialog**: Modal dialog boxes
- **Toast**: Brief notifications
- **Notify**: More prominent notifications
- **Progress**: Progress indicators
- **Activity**: Loading animation
- **Adblock**: Adblock detection notification
- **Cookie Disclaimer**: Cookie usage notification
- **Hint**: Tooltip-style help text
- **Info Box**: Information display box
- **Info Button**: Button with information popup
- **Info Panel**: Panel for displaying information
- **Overlay**: Screen overlay for modals
- **Popover**: Popup information container
- **Remark**: Highlighted remarks or notes
- **Ripple**: Material design ripple effect
- **Spinner**: Loading spinner animation

### Data Display

- **Table**: Enhanced data tables with sorting and filtering
- **List**: Simple list display
- **List View**: List displays with various formatting options
- **Cards**: Content containers with flexible layouts
- **Timeline**: Chronological content display
- **Accordion**: Collapsible content panels
- **Badges**: Small count or status indicators
- **Calendar**: Month view calendar display
- **Carousel**: Slideshow for cycling through elements
- **Chart Card**: Card with embedded charts
- **Chips**: Compact elements representing attributes
- **Collapse**: Expandable/collapsible content
- **Countdown**: Timer counting down to a date
- **Counter**: Animated number counter
- **Donut**: Donut chart visualization
- **Gauge**: Gauge chart visualization
- **Gravatar**: Globally recognized avatar
- **Image Box**: Container for images with effects
- **Image Compare**: Before/after image comparison
- **Image Grid**: Grid layout for images
- **Image Magnifier**: Image zoom functionality
- **Lightbox**: Image gallery with lightbox effect
- **Marquee**: Scrolling text display
- **Remote Table**: Table with remote data source
- **Skill Box**: Skill level visualization
- **Social Box**: Social media links display
- **Sorter**: Sortable list or grid
- **Streamer**: Stream of content items
- **Tag**: Label or category indicator
- **Tile**: Metro-style tile display
- **Treeview**: Hierarchical data display
- **Working Tree**: Tree structure with checkboxes

### Media Components

- **Audio Button**: Button with audio playback
- **Audio Player**: Audio playback control
- **Image Button**: Button with image
- **Media Player**: Generic media playback control
- **Video Player**: Video playback control
- **Vegas**: Fullscreen background slideshow

### Utility Components

- **Action Button**: Floating action button
- **Analog Clock**: Clock with analog display
- **Bulls**: Bullet point indicators
- **Charms**: Windows 8 style charms bar
- **Clock**: Digital clock display
- **Cloak**: Element visibility control
- **Cookie**: Cookie management
- **Directive**: Custom directive implementation
- **Drag Items**: Drag and drop functionality
- **Draggable**: Make elements draggable
- **Eval**: JavaScript evaluation component
- **Export**: Data export functionality
- **Gradient Box**: Box with gradient background
- **Hotkey**: Keyboard shortcut handling
- **HTML Container**: Container for HTML content
- **Icon Box**: Container with icon
- **Image Placeholder**: Placeholder for images
- **Master**: Master-detail interface
- **MD5**: MD5 hash generation
- **Package Manager**: Package management interface
- **Remote Dataset**: Remote data handling
- **Shortcut**: Keyboard shortcut display
- **Storage**: Local storage management
- **Swipe**: Touch swipe detection
- **Template**: Template rendering
- **Theme Switcher**: Theme selection control
- **Typer**: Typewriter text effect
- **Viewport Check**: Viewport detection

## Theming and Customization

Metro UI supports both light and dark themes out of the box and offers extensive customization options through CSS variables.

### Switching Between Light and Dark Themes

```html
<!-- Light theme (default) -->
<body>
    <!-- Content -->
</body>

<!-- Dark theme -->
<body class="dark-side">
    <!-- Content -->
</body>
```

### Customizing Components

You can customize components by overriding CSS variables:

```css
:root {
    /* Customize primary color */
    --primary: #3498db;

    /* Customize button appearance */
    --button-background: #f0f0f0;
    --button-color: #333333;
    --button-border-radius: 8px;
}
```

## Advanced Usage

### Working with Component APIs

Once a component is initialized, you can access its API methods:

```javascript
// Initialize a component
const datepicker = Metro.makePlugin("#myDatepicker", "datepicker");

// Use its API methods
datepicker.val("2023-06-15");  // Set date
const selectedDate = datepicker.val();  // Get date
```

### Event Handling

Most components emit events that you can listen for:

```javascript
Metro.makePlugin("#myDatepicker", "datepicker", {
    onSet: function(date) {
        console.log("Date selected:", date);
    },
    onOpen: function() {
        console.log("Datepicker opened");
    }
});
```

## Best Practices

1. **Mobile-First Approach**: Design for mobile screens first, then enhance for larger screens
2. **Consistent Styling**: Use the same component variants and colors throughout your application
3. **Accessibility**: Use semantic HTML elements and ARIA attributes where appropriate
4. **Performance**: Load only the components you need to keep your application fast

## Common Patterns

### Creating a Basic Form

```html
<form class="form">
    <div class="form-group">
        <label>Name</label>
        <input type="text" data-role="input">
    </div>

    <div class="form-group">
        <label>Birth Date</label>
        <input type="text" data-role="datepicker">
    </div>

    <div class="form-group">
        <label>Country</label>
        <select data-role="select">
            <option value="us">United States</option>
            <option value="ca">Canada</option>
            <option value="uk">United Kingdom</option>
        </select>
    </div>

    <div class="form-group">
        <button class="button primary">Submit</button>
        <button class="button" type="reset">Reset</button>
    </div>
</form>
```

### Creating a Dashboard Layout

```html
<div class="container">
    <div class="app-bar">
        <div class="app-bar-item">Dashboard</div>
        <div class="app-bar-menu">
            <a href="#" class="app-bar-item">Home</a>
            <a href="#" class="app-bar-item">Reports</a>
            <a href="#" class="app-bar-item">Settings</a>
        </div>
    </div>

    <div class="grid">
        <div class="row">
            <div class="cell-md-4">
                <div class="card">
                    <div class="card-header">Statistics</div>
                    <div class="card-content">
                        <!-- Statistics content -->
                    </div>
                </div>
            </div>

            <div class="cell-md-8">
                <div class="card">
                    <div class="card-header">Recent Activity</div>
                    <div class="card-content">
                        <!-- Activity content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

## Related Libraries and Components

Metro UI integrates with several companion libraries to provide enhanced functionality across different aspects of web development. These libraries are seamlessly incorporated into the framework and are available globally when you include Metro UI in your project.

### Companion Libraries

#### datetime
The datetime library provides comprehensive date and time manipulation capabilities. It's based on the @olton/datetime package and offers functions for parsing, formatting, and manipulating dates with localization support.

```javascript
// Examples of datetime usage
const now = datetime(); // Current date and time
const formatted = now.format("YYYY-MM-DD HH:mm"); // Format date
const nextWeek = now.addDay(7); // Date arithmetic
```

#### dom
The dom library provides jQuery-like DOM manipulation capabilities without jQuery dependencies. It's based on the @olton/dom package and is available globally as both `$` and `Dom`.

```javascript
// Examples of dom usage
const element = $("#myElement"); // Select element by ID
element.addClass("active"); // Add class
element.on("click", function() { /* handle click */ }); // Add event listener
```

#### farbe
The farbe library provides color manipulation and conversion utilities. It's based on the @olton/farbe package and offers functions for working with colors in different formats (RGB, HSL, HEX, etc.).

```javascript
// Examples of farbe usage
const color = farbe("#3498db"); // Create color from hex
const darkerColor = color.darken(20); // Darken color by 20%
const rgbValue = color.rgb; // Get RGB values
```

#### guardian
The guardian library provides data validation utilities. It's based on the @olton/guardian package and offers functions for validating various types of data.

```javascript
// Examples of guardian usage
G.isEmail("user@example.com"); // Check if string is valid email
G.isUrl("https://metroui.org.ua"); // Check if string is valid URL
G.isNumber("123"); // Check if string is a number
```

#### hooks
The hooks library provides React-like hooks functionality for state management and side effects in non-React applications. It's based on the @olton/hooks package.

```javascript
// Examples of hooks usage
const [count, setCount] = Hooks.useState(0); // Create state
Hooks.useEffect(() => { /* side effect */ }, [count]); // Run effect when count changes
```

#### html
The html library provides utilities for creating and manipulating HTML elements programmatically. It's based on the @olton/html package and offers functions for rendering HTML, loading CSS and JavaScript resources.

```javascript
// Examples of html usage
const div = HTML.div({ class: "container" }, "Content"); // Create div element
HTML.render(div, document.body); // Render element to DOM
```

#### model
The model library provides functionality for creating and managing data models with reactivity. It's based on the @olton/model package.

```javascript
// Examples of model usage
const userModel = new Model({ name: "John", age: 30 }); // Create model
userModel.on("change", (prop, val) => { /* handle change */ }); // Listen for changes
userModel.name = "Jane"; // Update property (triggers change event)
```

#### router
The router library provides client-side routing functionality for single-page applications. It's based on the @olton/router package.

```javascript
// Examples of router usage
const router = new Router(); // Create router
router.add("/home", () => { /* render home page */ }); // Add route
router.start(); // Start routing
```

#### string
The string library provides enhanced string manipulation functionality. It's based on the @olton/string package and offers functions for working with strings.

```javascript
// Examples of string usage
const s = str("Hello, World!"); // Create string object
s.capitalize(); // "Hello, world!"
s.truncate(5); // "Hello..."
```

### Core Components

#### common-css
The common-css component provides a comprehensive set of CSS utilities for common styling needs. It includes utilities for animations, borders, typography, flexbox layouts, positioning, spacing, and more.

```html
<!-- Examples of common-css usage -->
<div class="border bd-default p-2 m-2"><!-- Element with border, padding, and margin --></div>
<div class="d-flex flex-justify-between"><!-- Flexbox container with space-between --></div>
<div class="text-center text-bold"><!-- Centered, bold text --></div>
```

#### common-js
The common-js component provides a comprehensive set of JavaScript utility functions for Metro UI applications. These utilities help with common tasks such as type checking, DOM manipulation, object handling, and more.

```javascript
// Examples of common-js usage
Metro.utils.isFunc(myValue); // Check if value is a function
Metro.utils.coords(element); // Get element coordinates
Metro.utils.secondsToTime(3600); // Convert seconds to time object
```

## Troubleshooting

### Common Issues

1. **Components not initializing**: Make sure Metro UI JavaScript is loaded and check for console errors
2. **Styling issues**: Check for CSS conflicts with other libraries
3. **Responsive layout problems**: Verify you're using the grid system correctly

### Debugging Tips

1. Use browser developer tools to inspect elements and check for errors
2. Enable Metro UI debug mode: `Metro.debug = true;`
3. Check the official documentation for component-specific issues

## Resources

- [Documentation](https://v5.metroui.org.ua/)
- [GitHub Repository](https://github.com/olton/metroui)
- [Demo Site](https://panda.metroui.org.ua/)
- [Community Discord](https://discord.gg/cxrhV7pGG8)

## Conclusion

Metro UI provides a comprehensive toolkit for building modern web interfaces with minimal effort. Its component-based architecture, responsive design capabilities, and clean aesthetic make it an excellent choice for beginners looking to create professional-looking web applications.

By mastering the basics outlined in this guide, you'll be well on your way to creating beautiful, functional web interfaces using Metro UI. As you grow more comfortable with the library, explore the more advanced components and customization options to create truly unique user experiences.
