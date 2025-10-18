# Tabs Material

A material design styled tabs component that provides a tabbed interface with smooth animations and a sliding indicator.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<ul data-role="materialtabs">
    <li><a href="#tab1">Tab 1</a></li>
    <li class="active"><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>

<div id="tab1">Content for Tab 1</div>
<div id="tab2">Content for Tab 2</div>
<div id="tab3">Content for Tab 3</div>
```

### Fixed Tabs

Fixed tabs distribute evenly across the available width.

```html
<ul data-role="materialtabs" data-fixed-tabs="true">
    <li><a href="#tab1">Tab 1</a></li>
    <li class="active"><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
```

### With App Bar Integration

```html
<ul data-role="materialtabs" data-app-bar="true">
    <li><a href="#tab1">Tab 1</a></li>
    <li class="active"><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
```

### Deep Mode

```html
<ul data-role="materialtabs" data-deep="true">
    <li><a href="#tab1">Tab 1</a></li>
    <li class="active"><a href="#tab2">Tab 2</a></li>
    <li><a href="#tab3">Tab 3</a></li>
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `wheelStep` | number | 20 | The number of pixels to scroll when using the mouse wheel |
| `materialTabsDeferred` | number | 0 | Delay in milliseconds before initialization |
| `deep` | boolean | false | When true, sets a lower z-index for the tabs |
| `fixedTabs` | boolean | false | When true, tabs are distributed evenly across the available width |
| `duration` | number | 300 | Animation duration in milliseconds |
| `appBar` | boolean\|string | false | Indicates if an app bar is present. Use "more" for additional spacing |
| `clsComponent` | string | "" | Additional CSS class for the component wrapper |
| `clsTabs` | string | "" | Additional CSS class for the tabs container |
| `clsTab` | string | "" | Additional CSS class for each tab |
| `clsTabActive` | string | "" | Additional CSS class for the active tab |
| `clsMarker` | string | "" | Additional CSS class for the tab marker |

## API Methods

+ `open(tab_num)` - Opens the tab at the specified index (1-based).
  
  ```javascript
  const tabs = Metro.getPlugin('#my-tabs', 'material-tabs');
  tabs.open(2); // Opens the second tab
  ```

+ `openTab(tab_to_open, tab_next)` - Opens the specified tab element.
  
  ```javascript
  const tabs = Metro.getPlugin('#my-tabs', 'material-tabs');
  const tabElement = document.querySelector('#my-tabs li:nth-child(2)');
  tabs.openTab(tabElement, true);
  ```

## Events

| Event | Description |
| ----- | ----------- |
| `onBeforeTabOpen` | Triggered before a tab is opened. Return false to prevent the tab from opening. |
| `onTabOpen` | Triggered after a tab is opened. |
| `onTabsScroll` | Triggered when the tabs are scrolled. |
| `onTabsCreate` | Triggered when the tabs component is created. |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--tabs-material-background` | `#ffffff` | `#343637` | Controls the background color of the tabs |
| `--tabs-material-color` | `#191919` | `#dbdfe7` | Controls the text color of the tabs |
| `--tabs-material-marker-color` | `#000000` | `#ff6211` | Controls the color of the active tab marker |

### Example of Custom Styling

```css
#my-tabs {
    --tabs-material-background: #f5f5f5;
    --tabs-material-color: #424242;
    --tabs-material-marker-color: #2196F3;
}
```

## Available CSS Classes

### Base Classes
- `.tabs-material-wrapper` - The wrapper for the tabs component
- `.tabs-material` - The main container class for the tabs

### Modifiers
- `.deep` - Lowers the z-index of the tabs
- `.fixed-tabs` - Makes tabs distribute evenly across the available width
- `.with-icons` - Adjusts the height for tabs with icons
- `.app-bar-present` - Adjusts positioning when an app bar is present
- `.app-bar-present-more` - Adjusts positioning when an app bar with more content is present

### Child Elements
- `.tab-marker` - The sliding indicator that shows the active tab
- `.tab-badge` - Used for badges within tabs