# Task Bar Component

The Task Bar component provides a Windows-like taskbar interface with tasks, system tray items, and widgets. It allows you to create a taskbar at the bottom of the screen with application icons, system tray items, and widgets.

## Dependencies

No additional dependencies required beyond the core Metro UI library.

## Usage

### Basic Usage

```html
<div data-role="task-bar"></div>
```

### With Custom Options

```html
<div data-role="task-bar" id="my-taskbar" data-on-task-click="myTaskClickHandler"></div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `onTaskClick` | function | `Metro.noop` | Callback function triggered when a task is clicked |
| `onMyObjectCreate` | function | `Metro.noop` | Callback function triggered when the component is created |

## API Methods

### addTask(task, active)
Adds a task to the task bar.

**Parameters:**
- `task` - Object containing task properties:
  - `title` - Task title
  - `description` - Task description
  - `icon` - HTML for the task icon
  - `ref` - Reference to the element in the DOM
- `active` (optional) - Boolean indicating if the task should be active (default: false)

#### Example of Method Usage
```javascript
var taskBar = Metro.getPlugin('#my-task-bar', 'task-bar');
taskBar.addTask({
    title: "File Explorer",
    description: "Browse files and folders",
    icon: "<span class='mif-folder'></span>",
    ref: document.getElementById("file-explorer")
}, true);
```

### removeTask(task)
Removes a task from the task bar.

**Parameters:**
- `task` - Reference to the task element to remove

#### Example of Method Usage
```javascript
var taskBar = Metro.getPlugin('#my-task-bar', 'task-bar');
taskBar.removeTask(document.getElementById("file-explorer"));
```

### activateTask(ref)
Activates a specific task.

**Parameters:**
- `ref` - Reference to the task element to activate

#### Example of Method Usage
```javascript
var taskBar = Metro.getPlugin('#my-task-bar', 'task-bar');
taskBar.activateTask(document.getElementById("file-explorer"));
```

### addToSystemTray(item)
Adds an item to the system tray.

**Parameters:**
- `item` - HTML element to add to the system tray

#### Example of Method Usage
```javascript
var taskBar = Metro.getPlugin('#my-task-bar', 'task-bar');
var clockElement = document.createElement("div");
clockElement.innerHTML = "<span class='mif-alarm'></span>";
taskBar.addToSystemTray(clockElement);
```

### addWidget(widget)
Adds a widget to the task bar.

**Parameters:**
- `widget` - HTML element to add as a widget

#### Example of Method Usage
```javascript
var taskBar = Metro.getPlugin('#my-task-bar', 'task-bar');
var searchWidget = document.createElement("div");
searchWidget.innerHTML = "<span class='mif-search'></span>";
taskBar.addWidget(searchWidget);
```

## Events

| Event | Description |
|-------|-------------|
| `task-bar-create` | Triggered when the task bar component is created |
| `task-click` | Triggered when a task is clicked |
| `system-tray-click` | Triggered when a system tray item is clicked |
| `widget-click` | Triggered when a widget is clicked |

## Styling with CSS Variables

The Task Bar component can be customized using the following CSS variables:

| Variable | Default (Light) | Dark Mode | Description |
|----------|-----------------|-----------|-------------|
| `--task-bar-background` | `#f5f5f5` | `#2b2d30` | Controls the background color of the task bar |
| `--task-bar-color` | `#191919` | `#dbdfe7` | Controls the text color of the task bar |
| `--task-bar-task-background` | `transparent` | `transparent` | Controls the background color of tasks |
| `--task-bar-task-color` | `inherit` | `inherit` | Controls the text color of tasks |
| `--task-bar-task-background-hover` | `#e8e8e8` | `#37393e` | Controls the background color of tasks on hover |
| `--task-bar-task-color-hover` | `#000000` | `#ffffff` | Controls the text color of tasks on hover |
| `--task-bar-task-background-active` | `#e8e8e8` | `#37393e` | Controls the background color of active tasks |
| `--task-bar-task-color-active` | `#000000` | `#ffffff` | Controls the text color of active tasks |

### Example of Custom Styling

```css
#my-task-bar {
    --task-bar-background: #2b579a;
    --task-bar-color: #ffffff;
    --task-bar-task-background-hover: #3b67aa;
    --task-bar-task-color-hover: #ffffff;
    --task-bar-task-background-active: #3b67aa;
    --task-bar-task-color-active: #ffffff;
}
```

## Available CSS Classes

### Base Classes
- `.task-bar` - The main container class
- `.task-bar .tasks` - Container for task items
- `.task-bar .system-tray` - Container for system tray items
- `.task-bar .widgets` - Container for widgets

### Element Classes
- `.task-bar .task` - Individual task item
- `.task-bar .task.active` - Active task item
- `.task-bar .system-tray-item` - Individual system tray item
- `.task-bar .widget` - Individual widget item