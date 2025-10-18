# GitHub Box

GitHub Box is a component that displays information in a GitHub-style box format. It provides a clean, structured way to present content with a header containing author information, timestamps, and status labels.

## Usage

### Basic Usage

```html
<div class="github-box">
    <div class="box-header">
        <div class="author">olton</div>
        <div class="time-left">opened last week</div>
        <div class="prc">Owner</div>
    </div>
    <div class="box-content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </div>
</div>
```

### Color Variations

You can use predefined color variations by adding color classes:

```html
<!-- Cyan variation -->
<div class="github-box box-cyan">
    <!-- Content -->
</div>

<!-- Red variation -->
<div class="github-box box-red">
    <!-- Content -->
</div>
```

The component supports all standard Metro UI colors (cyan, red, green, orange, etc.).

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--github-box-border-radius` | 6px | - | Border radius of the box |
| `--github-box-border-color` | #d1d9e0 | - | Border color of the box |
| `--github-box-background` | #ffffff | - | Background color of the box |
| `--github-box-color` | #191919 | - | Text color of the box |
| `--github-box-header-background` | #f7f8fa | - | Background color of the header |
| `--github-box-header-color` | #191919 | - | Text color of the header |

### Example of Custom Styling

```css
.my-custom-github-box {
    --github-box-border-radius: 10px;
    --github-box-border-color: #007bff;
    --github-box-header-background: #e6f2ff;
}
```

## Available CSS Classes

### Base Classes
- `.github-box` - Main container class
- `.box-header` - Header section of the box
- `.box-content` - Content section of the box

### Header Elements
- `.author` - Author information in the header
- `.time-left` - Time information in the header
- `.prc` - Label for role/status in the header (positioned on the right)

### Color Modifiers
- `.box-[color]` - Color variations (e.g., `.box-cyan`, `.box-red`, etc.)
- `.-default` - Default styling with blue accents

## Best Practices

- Use the GitHub Box component for displaying user-generated content, comments, or status updates.
- The header should contain concise information about the author and timing.
- The content section is flexible and can contain various types of content, including text, lists, and other HTML elements.
- For consistent styling across your application, stick to the predefined color variations or create custom CSS variables.