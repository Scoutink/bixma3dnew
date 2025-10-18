# Context Menu

The Context Menu component provides a customizable right-click menu for elements on your page. It allows you to create hierarchical menus with icons, links, and custom actions.

## Dependencies

The Context Menu component depends on the following components:
- D-Menu
- Dropdown (for sub-menus)

## Usage

### Basic Usage

```html
<script>
Metro.contextMenu([
    {
        text: "Home",
        href: "index.html",
        icon: "<span class='mif-home'>"
    },
    {
        text: "About",
        href: "about.html",
        icon: "<span class='mif-person'>"
    },
    {
        type: "divider"
    },
    {
        text: "Click",
        onclick: "alert('Click!')"
    }
]);
</script>
```

### Additional Configurations

#### Context Menu for Specific Element

```html
<div id="myElement">Right-click on me</div>

<script>
Metro.contextMenu([
    {
        text: "Element Menu",
        href: "index.html",
        icon: "<span class='mif-home'>"
    }
], document.getElementById("myElement"));
</script>
```

#### Sub-Menus

```html
<script>
Metro.contextMenu([
    {
        text: "Menu",
        icon: "<span class='mif-menu'>",
        items: [
            {
                text: "Sub-Item 1",
                onclick: "alert('Sub-Item 1')"
            },
            {
                text: "Sub-Item 2",
                onclick: "alert('Sub-Item 2')"
            }
        ]
    }
]);
</script>
```

## Plugin Parameters

The `Metro.contextMenu()` function accepts the following parameters:

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| items | Array | [] | Array of menu item objects |
| element | DOM Element | document | The element to attach the context menu to |

### Menu Item Properties

| Property | Type | Description |
| --- | --- | --- |
| text | String | The text to display in the menu item |
| href | String | Optional URL for the menu item |
| icon | String | Optional HTML for an icon |
| onclick | Function/String | Function or string to execute when the item is clicked |
| items | Array | Optional array of sub-menu items |
| type | String | Set to "divider" to create a divider line |
| disabled | Boolean | Set to true to disable the menu item |
| attributes | Object | Additional HTML attributes to add to the menu item |

## API Methods

The Context Menu component doesn't expose specific API methods beyond its initialization function.

## Events

The Context Menu component doesn't have specific events, but you can define custom click handlers for each menu item using the `onclick` property.

## Styling with CSS Variables

The Context Menu component inherits styling from the D-Menu component and uses the following z-index variable:

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| --zindex-fixed | 1030 | 1030 | Base z-index for fixed elements |

The context menu's z-index is set to `var(--zindex-fixed) + 1` to ensure it appears above other fixed elements.

## Available CSS Classes

### Base Classes
- `.context-menu` - The main context menu class
- `.d-menu` - Inherited from the D-Menu component

### Inherited Classes from D-Menu
- `.divider` - Class for menu dividers
- `.dropdown-toggle` - Class for items with sub-menus

## Behavior

- The context menu appears at the cursor position when right-clicking on the target element
- The menu automatically hides when clicking anywhere else on the page
- Sub-menus are displayed as dropdown menus
- Menu items can be disabled by setting the `disabled` property to true