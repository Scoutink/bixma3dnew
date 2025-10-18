# Skill Box

A card-like component for displaying a person's skills, expertise, or other information with a header containing an avatar, title, and subtitle.

## Dependencies

This component has no JavaScript dependencies as it's purely CSS-based. It only requires the LESS stylesheet to be included in your project.

## Usage

### Basic Usage

```html
<div class="skill-box">
    <div class="header">
        <div class="avatar">
            <img src="avatar.jpg" alt="User Avatar">
        </div>
        <div class="title">John Doe</div>
        <div class="subtitle">Senior Developer</div>
    </div>
    <div class="content">
        <ul class="skills">
            <li>
                JavaScript <span class="badge bg-green fg-white">Expert</span>
            </li>
            <li>
                HTML/CSS <span class="badge bg-blue fg-white">Advanced</span>
            </li>
            <li>
                React <span class="badge bg-cyan fg-white">Intermediate</span>
            </li>
            <li>
                Node.js <span class="badge bg-yellow fg-dark">Beginner</span>
            </li>
        </ul>
    </div>
</div>
```

### With Icon Avatar

```html
<div class="skill-box">
    <div class="header">
        <div class="avatar">
            <span class="mif-user"></span>
        </div>
        <div class="title">Jane Smith</div>
        <div class="subtitle">UX Designer</div>
    </div>
    <div class="content">
        <ul class="skills">
            <li>
                UI Design <span class="badge bg-green fg-white">Expert</span>
            </li>
            <li>
                Wireframing <span class="badge bg-blue fg-white">Advanced</span>
            </li>
        </ul>
    </div>
</div>
```

### With Dark Mode

```html
<div class="dark-side">
    <div class="skill-box">
        <!-- Skill box content -->
    </div>
</div>
```

## Component Structure

The Skill Box component consists of the following parts:

### Header

The header section contains:

- **Avatar**: A circular image or icon representing the person
- **Title**: The main title (typically a person's name)
- **Subtitle**: A secondary title (typically a job title or description)

```html
<div class="header">
    <div class="avatar">
        <!-- Avatar content (image or icon) -->
    </div>
    <div class="title">Title Text</div>
    <div class="subtitle">Subtitle Text</div>
</div>
```

### Content

The content section can contain any content, but is typically used with a skills list:

```html
<div class="content">
    <ul class="skills">
        <li>
            Skill Name <span class="badge">Level</span>
        </li>
        <!-- More skills -->
    </ul>
</div>
```

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--skill-box-border-radius` | `6px` | `6px` | Border radius of the box |
| `--skill-box-border-color` | `var(--border-color)` | `var(--border-color)` | Border color of the box |
| `--skill-box-background` | `#ffffff` | `#2b2d30` | Background color of the box |
| `--skill-box-color` | `#191919` | `#dbdfe7` | Text color of the box |
| `--skill-box-header-background` | `#fbfbfb` | `#282c35` | Background color of the header |
| `--skill-box-header-color` | `#191919` | `#fbfbfb` | Text color of the header |
| `--skill-box-avatar-background` | `#e6e6e6` | `#3b414e` | Background color of the avatar |
| `--skill-box-avatar-color` | `#191919` | `#fbfbfb` | Text color of the avatar |

### Example of Custom Styling

```css
.custom-skill-box {
    --skill-box-border-radius: 10px;
    --skill-box-border-color: #dcdcdc;
    --skill-box-background: #f8f9fa;
    --skill-box-color: #333333;
    --skill-box-header-background: #e9ecef;
    --skill-box-header-color: #212529;
    --skill-box-avatar-background: #dee2e6;
    --skill-box-avatar-color: #212529;
}
```

```html
<div class="skill-box custom-skill-box">
    <!-- Skill box content -->
</div>
```

## Available CSS Classes

### Base Classes
- `.skill-box` - The main container class for the skill box component
- `.header` - Container for the header section
- `.content` - Container for the content section

### Header Elements
- `.avatar` - Container for the avatar (image or icon)
- `.title` - Element for the main title
- `.subtitle` - Element for the subtitle

### Content Elements
- `.skills` - Unordered list for skills
- `.skills li` - List item for each skill
- `.badge` - Badge element for skill level indication

## Example with Complete Custom Styling

```html
<style>
    .custom-skill-box {
        --skill-box-border-radius: 10px;
        --skill-box-border-color: #dcdcdc;
        --skill-box-background: #f8f9fa;
        --skill-box-color: #333333;
        --skill-box-header-background: #e9ecef;
        --skill-box-header-color: #212529;
        --skill-box-avatar-background: #dee2e6;
        --skill-box-avatar-color: #212529;
    }
</style>

<div class="skill-box custom-skill-box">
    <div class="header">
        <div class="avatar">
            <span class="mif-user"></span>
        </div>
        <div class="title">Jane Smith</div>
        <div class="subtitle">UX Designer</div>
    </div>
    <div class="content">
        <ul class="skills">
            <li>
                UI Design <span class="badge bg-green fg-white">Expert</span>
            </li>
            <li>
                Wireframing <span class="badge bg-blue fg-white">Advanced</span>
            </li>
            <li>
                User Research <span class="badge bg-cyan fg-white">Advanced</span>
            </li>
            <li>
                Prototyping <span class="badge bg-violet fg-white">Intermediate</span>
            </li>
        </ul>
    </div>
</div>
```

This example creates a skill box with custom styling for a UX designer's profile.

## Best Practices

- Use the skill-box component for displaying professional profiles, team member information, or skill sets.
- Keep the title and subtitle concise for better readability.
- Use appropriate badges with contrasting colors to highlight skill levels.
- Consider using icons instead of images for the avatar when a user photo is not available.
- For better accessibility, ensure there's sufficient color contrast between text and background.
- When using custom styling, maintain the component's structure to ensure proper layout.
- In responsive designs, consider how the skill-box will display on smaller screens.

## Additional Notes

- The skill-box component is designed to be simple and lightweight, focusing on presenting information clearly.
- While the examples show skills with badges, the content section can contain any HTML content you need.
- The component works well in both light and dark modes without requiring additional configuration.
- You can combine this component with other Metro UI components like buttons or progress bars in the content section for more interactive displays.
