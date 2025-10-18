# Tabs

The Tabs component provides a tabbed interface for organizing content into separate tabs. It supports various styles, positions, and interactive features including expandable mobile-friendly layouts, linked tabs, and customizable styling.

## Dependencies

The Tabs component requires the following dependencies:
- Farbe (color handling)
- Hamburger component (for mobile menu functionality)

## Usage

### Basic Usage

```html
<!-- Basic tabs with content targets -->
<ul data-role="tabs" data-expand="true">
    <li><a href="#home">Home</a></li>
    <li><a href="#profile">Profile</a></li>
    <li><a href="#links">Links</a></li>
</ul>

<div class="tabs-targets">
    <div id="home">Home content</div>
    <div id="profile">Profile content</div>
    <div id="links">Links content</div>
</div>
```

### Different Tab Types

```html
<!-- Text style tabs -->
<ul data-role="tabs" data-expand="true" data-type="text">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>

<!-- Group style tabs -->
<ul data-role="tabs" data-expand="true" data-type="group">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>

<!-- Pills style tabs -->
<ul data-role="tabs" data-expand="true" data-type="pills">
    <li><a href="#tab1">Tab 1</a></li>
    <li><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
```

### Linked Tabs

```html
<!-- Multiple tab sets that synchronize with each other -->
<ul data-role="tabs" data-link="engine" data-expand="true">
    <li><a href="#npm1">npm</a></li>
    <li><a href="#pnpm1">pnpm</a></li>
    <li><a href="#yarn1">yarn</a></li>
</ul>

<ul data-role="tabs" data-link="engine" data-expand="true">
    <li><a href="#npm2">npm</a></li>
    <li><a href="#pnpm2">pnpm</a></li>
    <li><a href="#yarn2">yarn</a></li>
</ul>
```

### Programmatic Initialization

```javascript
const tabs = Metro.makePlugin("#myTabs", "tabs", {
    type: "pills",
    expand: true,
    updateUri: true,
    onTabOpen: function(tab, target) {
        console.log("Tab opened:", target);
    }
});
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `tabsDeferred` | number | `0` | Delay in milliseconds before initializing the component |
| `expand` | boolean | `false` | Whether tabs should expand to full width |
| `expandPoint` | string | `null` | Media query breakpoint for responsive expansion |
| `type` | string | `"default"` | Tab style type ("default", "text", "group", "pills", "n8n") |
| `updateUri` | boolean | `false` | Whether to update browser URL hash when switching tabs |
| `position` | string | `"top"` | Position of tabs ("top", "bottom", "left", "right") |
| `align` | string | `"left"` | Alignment of tabs ("left", "center", "right") |
| `link` | string | `""` | Link identifier for synchronizing multiple tab sets |
| `clsTabs` | string | `""` | Additional CSS class for the tabs container |
| `clsTabsList` | string | `""` | Additional CSS class for the tabs list |
| `clsTabsListItem` | string | `""` | Additional CSS class for tab items |
| `clsTabsListItemActive` | string | `""` | Additional CSS class for active tab items |

## API Methods

+ `next()` - Switch to the next tab
+ `prev()` - Switch to the previous tab
+ `openByTarget(target)` - Open tab by its target href (e.g., "#home")
+ `openByIndex(index)` - Open tab by its zero-based index
+ `open(tab)` - Open tab by index (1-based) or target string
+ `destroy()` - Destroy the component and remove event listeners

#### Example of Method Usage

```javascript
const tabs = Metro.getPlugin('#myTabs', 'tabs');

// Navigate to next/previous tabs
tabs.next();
tabs.prev();

// Open specific tabs
tabs.openByTarget('#profile');
tabs.openByIndex(1);
tabs.open(2); // Opens second tab (1-based)
tabs.open('#home'); // Opens tab with href="#home"
```

## Events

| Event | Description |
| ----- | ----------- |
| `onTab` | Fired when a tab is clicked |
| `onTabOpen` | Fired when a tab is opened |
| `onTabClose` | Fired when a tab is closed (previous active tab) |
| `onBeforeTab` | Fired before tab switch (return false to prevent) |
| `onTabsCreate` | Fired when the tabs component is created |

#### Example Event Usage

```html
<ul data-role="tabs" 
    data-on-tab="onTabClick"
    data-on-tab-open="onTabOpen"
    data-on-tab-close="onTabClose">
    <li><a href="#home">Home</a></li>
    <li><a href="#profile">Profile</a></li>
</ul>

<script>
function onTabClick(tab, href, element) {
    console.log('Tab clicked:', href);
}

function onTabOpen(tab, target) {
    console.log('Tab opened:', target);
}

function onTabClose(tab, target) {
    console.log('Tab closed:', target);
}
</script>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--tabs-border-radius` | `6px` | `6px` | Border radius for tab corners |
| `--tabs-border-radius-pills` | `16px` | `16px` | Border radius for pills-style tabs |
| `--tabs-background` | `var(--default-background)` | `var(--default-background)` | Background color of tabs container |
| `--tabs-color` | `var(--default-color)` | `var(--default-color)` | Text color of tabs container |
| `--tabs-hamburger-background` | `transparent` | `transparent` | Background color of hamburger menu |
| `--tabs-hamburger-color` | `#000000` | `#ffffff` | Color of hamburger menu icon |
| `--tabs-item-background` | `var(--default-background)` | `var(--default-background)` | Background color of tab items |
| `--tabs-item-color` | `var(--default-color)` | `var(--default-color)` | Text color of tab items |
| `--tabs-item-background-hover` | `#f5f8fe` | `#26282e` | Background color on hover |
| `--tabs-item-color-hover` | `var(--default-color)` | `var(--default-color)` | Text color on hover |
| `--tabs-item-background-active` | `#eaeaea` | `#4a4d51` | Background color of active tab |
| `--tabs-item-color-active` | `var(--default-color)` | `var(--default-color)` | Text color of active tab |
| `--tabs-item-marker` | `var(--color-primary)` | `var(--color-primary)` | Color of active tab marker |
| `--tabs-item-marker-height` | `2px` | `2px` | Height of active tab marker |
| `--tabs-item-icon-background` | `#ffffff` | `#343637` | Background color of tab icons |
| `--tabs-item-icon-color` | `#000000` | `#ffffff` | Color of tab icons |

### Example of Custom Styling

```css
/* Custom tab styling */
#myTabs {
    --tabs-item-marker: #ff6b35;
    --tabs-item-background-active: #fff3f0;
    --tabs-border-radius: 12px;
}

/* Custom color scheme */
.tabs-custom {
    --tabs-item-marker: #28a745;
    --tabs-item-background-hover: #e8f5e8;
    --tabs-item-background-active: #d4edda;
}
```

## Available CSS Classes

### Base Classes
- `.tabs` - Main tabs container (automatically applied)
- `.tabs-list` - Tabs list container (automatically applied)
- `.tabs-expand` - Expanded tabs layout (applied based on `expand` option)

### Position Classes
- `.tabs-top` - Tabs positioned at top (default)
- `.tabs-bottom` - Tabs positioned at bottom
- `.tabs-left` - Tabs positioned at left
- `.tabs-right` - Tabs positioned at right

### Type Classes
- `.tabs-default` - Default tab style
- `.tabs-text` - Text-only tab style
- `.tabs-group` - Grouped tab style
- `.tabs-pills` - Pills tab style

### Alignment Classes
- `.align-left` - Left-aligned tabs (default)
- `.align-center` - Center-aligned tabs
- `.align-right` - Right-aligned tabs

### State Classes
- `.active` - Active tab item
- `.expand` - Expanded state for mobile view

### Color Classes
The component supports color variations using the pattern `.tabs-{color}`:
- `.tabs-primary` - Primary color scheme
- `.tabs-secondary` - Secondary color scheme
- `.tabs-success` - Success color scheme
- `.tabs-danger` - Danger color scheme
- `.tabs-warning` - Warning color scheme
- `.tabs-info` - Info color scheme
- `.tabs-light` - Light color scheme
- `.tabs-dark` - Dark color scheme

## Additional Notes

- The component automatically creates a hamburger menu for mobile devices when tabs don't fit
- Tabs can contain icons using Metro UI icon classes or custom icon elements
- The `expand-title` element shows the active tab title in collapsed mobile view
- Linked tabs allow synchronization between multiple tab sets using the `link` parameter
- The component supports keyboard navigation and accessibility features
- Tab content targets are automatically shown/hidden based on the active tab

## Best Practices

- Use meaningful href attributes for tab links to enable deep linking
- Provide appropriate ARIA labels for accessibility
- Keep tab labels concise and descriptive
- Use consistent tab types within the same interface
- Consider using `expand="true"` for better mobile experience
- Test tab functionality across different screen sizes
- Use the `updateUri` option when you want bookmarkable tab states