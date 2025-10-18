# Working Tree

The Working Tree component provides a visual representation of processes or tasks with status indicators. It displays a hierarchical structure with nodes that can have different states (pending, success, fail) and child items.

## Dependencies

This component has no additional dependencies beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<!-- Basic usage -->
<ul data-role="working-tree" id="my-tree"></ul>
```

### Programmatic Creation

```javascript
// Get component reference
const workingTree = Metro.getPlugin("#my-tree", "working-tree");

// Add a node with children
const nodeId = workingTree.addNode({
    title: "Installation process",
    value: "0%",
    items: [
        {title: "Download files", value: "Pending"},
        {title: "Extract archive", value: "Waiting"},
        {title: "Install components", value: "Waiting"}
    ]
});

// Change node state
workingTree.setState(nodeId, "pending");

// Later update to success
setTimeout(function() {
    workingTree.setState(nodeId, "success");
}, 3000);
```

### Manual HTML Structure

You can also create the working tree structure manually:

```html
<ul class="working-tree">
    <li class="work-pending">
        <div class="bull"><span data-role="bull" data-type="pending"></span></div>
        <div class="node">
            <div class="title">Node Title</div>
            <div class="value">Value Text</div>
        </div>
        <ul class="leaves">
            <li>
                <div class="title">Item Title</div>
                <div class="value">Item Value</div>
            </li>
            <!-- More items... -->
        </ul>
    </li>
    <!-- More nodes... -->
</ul>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --- | --- | --- | --- |
| `onStateChange` | Function | `Metro.noop` | Triggered when node state changes |
| `onWorkingTreeCreate` | Function | `Metro.noop` | Triggered after working tree component creation |

## API Methods

### addNode(options)

Adds a new node to the working tree.

```javascript
const nodeId = workingTree.addNode({
    id: "optional-id", // Optional - auto-generated if not provided
    title: "Process Title",
    value: "In Progress",
    items: [ // Optional child items
        {title: "Sub-step 1", value: "Pending"},
        {title: "Sub-step 2", value: "Waiting"}
    ]
});
```

Returns the ID of the newly created node.

### setState(id, state)

Updates the state of a node.

```javascript
workingTree.setState("node-id", "pending"); // Set to pending state
workingTree.setState("node-id", "success"); // Set to success state
workingTree.setState("node-id", "fail");    // Set to fail state
```

Valid states:
- `"pending"` - In progress (orange indicator)
- `"success"` - Completed successfully (green indicator)
- `"fail"` - Failed (red indicator)

### destroy()

Removes the component from the DOM.

```javascript
workingTree.destroy();
```

## Events

| Event | Arguments | Description |
| --- | --- | --- |
| `onStateChange` | `{id, state, node}` | Triggered when a node changes state |
| `onWorkingTreeCreate` | `{element}` | Triggered after component creation |

## Global Configuration

You can globally configure the working tree component using the `Metro.workingTreeSetup` method:

```javascript
Metro.workingTreeSetup({
    onStateChange: function(data) {
        console.log("Node " + data.id + " changed to state: " + data.state);
    }
});
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| --- | --- | --- | --- |
| `--working-tree-marker-color` | `#e8e8e8` | `#3d444d` | Color for connection lines and default markers |
| `--working-tree-marker-success` | `#219707` | `#81e06c` | Color for success state markers |
| `--working-tree-marker-fail` | `#fb3838` | `#fb3838` | Color for failure state markers |
| `--working-tree-marker-pending` | `#ff9c17` | `#ff9c17` | Color for pending state markers |
| `--working-tree-color` | `#191919` | `#efefef` | Text color |

### Example of Custom Styling

```css
:root {
    --working-tree-marker-success: #00a300;
    --working-tree-marker-fail: #ce352c;
    --working-tree-marker-pending: #fa6800;
}
```

## Available CSS Classes

### Base Classes
- `.working-tree` - Main container class
- `.working-tree > li` - Node container
- `.working-tree > li .node` - Node content container
- `.working-tree .bull` - Bullet point container
- `.working-tree .title` - Title text styling
- `.working-tree .value` - Value text styling
- `.working-tree .leaves` - Container for child nodes
- `.working-tree .leaves li` - Child node styling

### Modifiers
- `.work-success` - Success state styling (green)
- `.work-pending` - Pending state styling (orange)
- `.work-fail` - Failure state styling (red)