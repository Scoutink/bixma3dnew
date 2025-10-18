# Panel Component

The Panel component provides a flexible container with optional title, collapsible functionality, and draggable capabilities. It's useful for organizing content into distinct sections with a consistent visual style.

## Dependencies

- Metro UI Core
- DOM library

## Usage

### Basic Panel

```html
<div data-role="panel">
    <div class="panel-content">
        Panel content goes here
    </div>
</div>
```

### Panel with Title

```html
<div data-role="panel" data-title-caption="Panel Title">
    <div class="panel-content">
        Panel content with a title
    </div>
</div>
```

### Collapsible Panel

```html
<div data-role="panel" data-title-caption="Collapsible Panel" data-collapsible="true">
    <div class="panel-content">
        This panel can be collapsed
    </div>
</div>
```

### Draggable Panel

```html
<div data-role="panel" data-title-caption="Draggable Panel" data-draggable="true">
    <div class="panel-content">
        This panel can be dragged
    </div>
</div>
```

### Panel with Custom Buttons

```html
<div data-role="panel" 
     data-title-caption="Panel with Custom Buttons"
     data-custom-buttons='[
        {
            "html": "<span class=\"mif-cog\"></span>",
            "cls": "bg-transparent",
            "onclick": "alert(\'Settings clicked\')"
        },
        {
            "html": "<span class=\"mif-cross\"></span>",
            "cls": "bg-transparent",
            "onclick": "$(this).closest(\'.panel\').hide()"
        }
     ]'>
    <div class="panel-content">
        Panel with custom buttons in the title
    </div>
</div>
```

### Programmatic Control

```javascript
// Get panel plugin instance
const panel = Metro.getPlugin('#myPanel', 'panel');

// Open/expand the panel
panel.open();

// Close/collapse the panel
panel.close();
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| panelDeferred | number | 0 | Deferred initialization time in milliseconds |
| id | string | null | Panel ID (auto-generated if not provided) |
| titleCaption | string | "" | Caption for the panel title |
| titleIcon | string | "" | Icon for the panel title (HTML string) |
| collapsible | boolean | false | Whether the panel can be collapsed |
| collapsed | boolean | false | Whether the panel is initially collapsed |
| collapseDuration | number | 100 | Duration of collapse/expand animation in milliseconds |
| width | string | "auto" | Panel width |
| height | string | "auto" | Panel height |
| draggable | boolean | false | Whether the panel can be dragged |
| customButtons | object | null | Custom buttons for the panel title |
| clsPanel | string | "" | Additional CSS class for the panel |
| clsTitle | string | "" | Additional CSS class for the panel title |
| clsTitleCaption | string | "" | Additional CSS class for the title caption |
| clsTitleIcon | string | "" | Additional CSS class for the title icon |
| clsContent | string | "" | Additional CSS class for the panel content |
| clsCollapseToggle | string | "" | Additional CSS class for the collapse toggle |
| clsCustomButton | string | "" | Additional CSS class for custom buttons |

## API Methods

| Method | Description |
| --- | --- |
| `customButtons(buttons)` | Adds custom buttons to the panel title |
| `collapse()` | Collapses the panel |
| `expand()` | Expands the panel |
| `open()` | Alias for expand() |
| `close()` | Alias for collapse() |
| `destroy()` | Destroys the panel component |

### Example of Method Usage

```javascript
// Get panel plugin instance
const panel = Metro.getPlugin('#myPanel', 'panel');

// Add custom buttons
panel.customButtons([
    {
        html: "<span class='mif-cog'></span>",
        cls: "bg-transparent",
        onclick: function() {
            alert('Settings clicked');
        }
    }
]);

// Collapse the panel
panel.collapse();

// Expand the panel
panel.expand();
```

## Events

| Event | Description |
| --- | --- |
| onCollapse | Triggered when panel is collapsed |
| onExpand | Triggered when panel is expanded |
| onDragStart | Triggered when panel drag starts |
| onDragStop | Triggered when panel drag stops |
| onDragMove | Triggered when panel is being dragged |
| onPanelCreate | Triggered when panel is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| --panel-header-background | #fbfbfb | #282c35 | Background color of the panel header |
| --panel-header-color | #191919 | #fbfbfb | Text color of the panel header |
| --panel-header-icon-background | #fbfbfb | #282c35 | Background color of the icon in the panel header |
| --panel-header-icon-color | #191919 | #fbfbfb | Color of the icon in the panel header |
| --panel-background | #ffffff | #2b2d30 | Background color of the panel |
| --panel-color | #191919 | #dbdfe7 | Text color of the panel content |
| --panel-border-color | #e8e8e8 | #4a4d51 | Color of the panel border |
| --panel-border-radius | 6px | 6px | Border radius of the panel |
| --panel-dropdown-toogle-color | #191919 | #ffffff | Color of the dropdown toggle in the panel header |

### Example of Custom Styling

```css
/* Custom styling for panels */
.custom-panel {
    --panel-header-background: #3498db;
    --panel-header-color: #ffffff;
    --panel-background: #ecf0f1;
    --panel-color: #2c3e50;
    --panel-border-color: #bdc3c7;
    --panel-border-radius: 10px;
}
```

```html
<div data-role="panel" class="custom-panel" data-title-caption="Custom Styled Panel">
    <div class="panel-content">
        This panel has custom styling
    </div>
</div>
```

## Available CSS Classes

### Base Classes
- `.panel` - Main container for the panel (automatically added)
- `.panel-title` - Title section of the panel
- `.panel-content` - Content section of the panel

### Title Elements
- `.icon` - Icon in the panel title
- `.caption` - Text caption in the panel title
- `.dropdown-toggle` - Toggle for collapsible functionality
- `.custom-buttons` - Container for custom buttons
- `.btn-custom` - Custom button in the title

## Best Practices

1. Use panels to group related content and provide a clear visual hierarchy
2. Add titles to panels to clearly indicate their purpose
3. Use collapsible panels for content that doesn't need to be visible all the time
4. Consider making panels draggable in dashboard-like interfaces where users might want to rearrange content
5. Use custom buttons sparingly and with clear icons to avoid cluttering the panel title
6. Apply consistent styling to panels throughout your application for a cohesive look and feel