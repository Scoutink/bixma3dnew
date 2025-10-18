# TreeView

A hierarchical component that displays data in a tree-like structure, allowing users to navigate through different levels of information.

## Dependencies

- Button
- Dropdown
- Dropdown-button

## Usage

### Basic Usage

```html
<ul data-role="treeview">
    <li data-caption="Item 1"></li>
    <li data-caption="Folder 1">
        <ul>
            <li data-caption="Sub Item 1"></li>
            <li data-caption="Sub Item 2" data-icon="<span class='mif-file'></span>"></li>
        </ul>
    </li>
</ul>
```

### With Icons

```html
<ul data-role="treeview">
    <li data-icon="<span class='mif-star-full fg-red'>" data-caption="Favorites">
        <ul>
            <li data-icon="<span class='mif-library fg-green'>" data-caption="Projects"></li>
            <li data-icon="<span class='mif-download fg-cyan'>" data-caption="Downloads"></li>
            <li data-icon="<span class='mif-apps'>" data-caption="Desktop"></li>
        </ul>
    </li>
</ul>
```

### With Checkboxes

```html
<ul data-role="treeview">
    <li>
        <input type="checkbox" data-role="checkbox" data-append="Play video" title="" data-three-state="true">
        <ul>
            <li><input type="checkbox" data-role="checkbox" data-append="AVI" title=""></li>
            <li><input type="checkbox" data-role="checkbox" data-append="MPEG" title=""></li>
            <li><input checked type="checkbox" data-role="checkbox" data-append="VIDX" title=""></li>
        </ul>
    </li>
</ul>
```

### With Custom Content

```html
<ul data-role="treeview">
    <li class="w-100 expanded">
        <div class="d-flex flex-align-center">
            <input type="text" data-role="materialinput" value="Custom item">
            <a id="btmMore-1" class="button">
                <span class="mif-more-horiz"></span>
            </a>
            <ul class="d-menu drop-down-right" data-role="dropdown" data-toggle-element="#btmMore-1">
                <li><a href="#"><span class="mif-user icon"></span> Profile</a></li>
                <li><a href="#">Calendar</a></li>
            </ul>
        </div>
    </li>
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `treeviewDeferred` | Number | `0` | Defer initialization of component in milliseconds |
| `showChildCount` | Boolean | `false` | Show count of child nodes |
| `duration` | Number | `100` | Duration of animation in milliseconds |
| `hideActionsOnLeave` | Boolean | `true` | Hide action menu when mouse leaves node |
| `recheckTimeout` | Number | `100` | Timeout for rechecking state of tree checkboxes |
| `leaves` | Array/Object | `[]` | Data to create tree structure |
| `onNodeClick` | Function | `Metro.noop` | Triggered when a node is clicked |
| `onNodeDblClick` | Function | `Metro.noop` | Triggered when a node is double-clicked |
| `onNodeDelete` | Function | `Metro.noop` | Triggered when a node is deleted |
| `onNodeInsert` | Function | `Metro.noop` | Triggered when a node is inserted |
| `onNodeClean` | Function | `Metro.noop` | Triggered when a node is cleaned (children removed) |
| `onCheckClick` | Function | `Metro.noop` | Triggered when a checkbox is clicked |
| `onRadioClick` | Function | `Metro.noop` | Triggered when a radio button is clicked |
| `onExpandNode` | Function | `Metro.noop` | Triggered when a node is expanded |
| `onCollapseNode` | Function | `Metro.noop` | Triggered when a node is collapsed |
| `onTreeViewCreate` | Function | `Metro.noop` | Triggered after tree view component creation |

## API Methods

+ `current([node])` - Gets or sets the current node. If node is not specified, returns the current node.
+ `toggleNode(node)` - Toggles a node's expanded/collapsed state.
+ `expandNode(node)` - Expands a specific node.
+ `collapseNode(node)` - Collapses a specific node.
+ `expandAll()` - Expands all nodes in the tree.
+ `collapseAll()` - Collapses all nodes in the tree.
+ `addTo(targetNode, data)` - Adds a new node to the target node or to the root if targetNode is not specified.
+ `insertBefore(targetNode, data)` - Inserts a node before the specified target node.
+ `insertAfter(targetNode, data)` - Inserts a node after the specified target node.
+ `del(targetNode)` - Deletes the specified node.
+ `clean(targetNode)` - Removes all children from the specified node.
+ `fillTree(leaves, [node])` - Fills the tree with data.

### Example of Method Usage

```javascript
// Get the treeview component
const treeview = Metro.getPlugin('#myTreeview', 'treeview');

// Add a new node
treeview.addTo(null, {
    caption: "New Item",
    icon: "<span class='mif-file'></span>"
});

// Expand all nodes
treeview.expandAll();

// Delete a node
const nodeToDelete = document.querySelector('#myTreeview li:nth-child(2)');
treeview.del(nodeToDelete);
```

## Events

| Event | Description |
| --- | --- |
| `onNodeClick` | Triggered when a node is clicked |
| `onNodeDblClick` | Triggered when a node is double-clicked |
| `onNodeDelete` | Triggered when a node is deleted |
| `onNodeInsert` | Triggered when a node is inserted |
| `onNodeClean` | Triggered when a node is cleaned (children removed) |
| `onCheckClick` | Triggered when a checkbox is clicked |
| `onRadioClick` | Triggered when a radio button is clicked |
| `onExpandNode` | Triggered when a node is expanded |
| `onCollapseNode` | Triggered when a node is collapsed |
| `onTreeViewCreate` | Triggered after tree view component creation |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| `--treeview-background` | `#ffffff` | `#1e1f22` | Background color |
| `--treeview-color` | `#43454a` | `#dfe1e5` | Text color |
| `--treeview-selected-row-background` | `#d4e2ff` | `#43454a` | Selected node background |
| `--treeview-selected-row-color` | `#2b2d30` | `#ffffff` | Selected node text color |
| `--treeview-node-toggle-color` | `#191919` | `#ffffff` | Toggle icon color |

### Example of Custom Styling

```css
#myTreeview {
    --treeview-background: #f0f0f0;
    --treeview-selected-row-background: #0078d7;
    --treeview-selected-row-color: white;
}
```

## Available CSS Classes

### Base Classes
- `.treeview` - The main container class
- `.tree-node` - Applied to nodes that have children
- `.expanded` - Applied to nodes that are expanded
- `.current` - Applied to the currently selected node

### Element Classes
- `.node-toggle` - The toggle button for expanding/collapsing nodes
- `.icon` - For node icons
- `.caption` - For node text
- `.badge` - For badges in nodes
- `.secondary-text` - For secondary text in nodes
- `.actions-holder` - Container for node actions
- `.actions-list` - List of actions
- `.actions-list-trigger` - Trigger for actions list

## Node Data Structure

When creating nodes programmatically, you can use the following properties:

```javascript
{
    caption: "Node Title",              // Node text
    icon: "<span class='mif-file'></span>", // Icon HTML or image URL
    html: "<div>Custom content</div>",  // Custom HTML content
    link: "https://example.com",        // URL for node
    badge: "99:bg-red",                 // Badge with text and optional class
    badges: ["New:bg-green", "Hot:bg-orange"], // Multiple badges
    current: true,                      // Mark as current node
    type: "node",                       // "node" for expandable nodes
    collapsed: true,                    // Initial collapse state
    secondary: "Details:text-muted",    // Secondary text with optional class
    style: "color: red",                // Custom CSS style
    attributes: {                       // Custom attributes
        "data-custom": "value"
    },
    actions: [                          // Custom actions menu
        {
            caption: "Edit",
            icon: "<span class='mif-pencil'></span>",
            onclick: function() { console.log("Edit clicked"); }
        },
        { type: "divider" },
        {
            caption: "Delete",
            icon: "<span class='mif-bin'></span>",
            cls: "alert",
            onclick: function() { console.log("Delete clicked"); }
        }
    ]
}
```

### Special Node Types

#### Checkbox and Radio Nodes

```javascript
// Checkbox node
{
    type: "checkbox",
    caption: "Option 1",
    name: "options[]",
    value: "1",
    checked: true
}

// Radio node
{
    type: "radio",
    caption: "Option A",
    name: "radio-group",
    value: "a",
    checked: false
}
```

#### Input Nodes

```javascript
// Input node
{
    type: "input",
    caption: "Search",
    name: "search",
    placeholder: "Enter search term",
    value: ""
}
```

## Global Configuration

You can globally configure the treeview component using the `Metro.treeViewSetup` method:

```javascript
Metro.treeViewSetup({
    duration: 300,
    hideActionsOnLeave: false,
    // other options
});
```