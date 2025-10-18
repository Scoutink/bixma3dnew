# Chat Component

The Chat component provides a flexible and interactive messaging interface for applications. It supports both incoming and outgoing messages with avatars, sender names, timestamps, and a message input area with a send button.

## Dependencies

- Textarea component (imported from "../textarea/index.js")
- Button component (imported from "../button/index.js")

## Usage

### Basic Usage

```html
<div data-role="chat"></div>
```

### With Configuration Options

```html
<div data-role="chat" 
     data-name="John Smith"
     data-avatar="<span>👨</span>"
     data-welcome="Welcome to our chat! How can I help you today?"
     data-welcome-avatar="<span>🤖</span>"
     data-title="Customer Support"
     data-width="100%"
     data-height="400px">
</div>
```

### Programmatic Initialization

```javascript
const chat = Metro.makePlugin("#myChatElement", "chat", {
    name: "John Smith",
    avatar: "<span>👨</span>",
    welcome: "Welcome to our chat! How can I help you today?",
    welcomeAvatar: "<span>🤖</span>",
    title: "Customer Support",
    width: "100%",
    height: "400px"
});
```

## Plugin Parameters

| Parameter           | Type    | Default           | Description                                                  |
|---------------------|---------|-------------------|--------------------------------------------------------------|
| `chatDeferred`      | number  | 0                 | Deferred initialization time in milliseconds                 |
| `inputTimeFormat`   | string  | null              | Format for parsing input time strings                        |
| `timeFormat`        | string  | "D MMM hh:mm A"   | Format for displaying message timestamps                     |
| `name`              | string  | "John Doe"        | Default name for outgoing messages                           |
| `avatar`            | string  | "<span>👦</span>" | HTML for the avatar of outgoing messages                     |
| `welcome`           | string  | null              | Welcome message text (displayed when chat initializes)       |
| `welcomeAvatar`     | string  | "<span>👽</span>" | HTML for the avatar of the welcome message                   |
| `title`             | string  | null              | Title for the chat component                                 |
| `width`             | string  | "100%"            | Width of the chat component                                  |
| `height`            | string  | "auto"            | Height of the chat component                                 |
| `initialHeight`     | number  | 100               | Initial Height of the chat component                         |
| `messages`          | object  | null              | Initial messages to display                                  |
| `attachAccept`      | string  | "*"               | Attach file types                                            |
| `readonly`          | boolean | false             | Whether the chat is in read-only mode                        |
| `sendMode`          | string  | "enter"           | Trigger for message send: `enter`, `control+enter`, `button` |
| `useEmoji`          | boolean | true              | Use emoji in message                                         |
| `useLink`           | boolean | true              | Use link in message                                          |
| `useCode`           | boolean | true              | Use code blocks in message                                   |
| `buttons`           | string  | "send attach"     | Buttons to use                                               |
| `clsChat`           | string  | ""                | Additional CSS class for the chat container                  |
| `clsName`           | string  | ""                | Additional CSS class for the sender name                     |
| `clsTime`           | string  | ""                | Additional CSS class for the message time                    |
| `clsInput`          | string  | ""                | Additional CSS class for the input field                     |
| `clsSendButton`     | string  | ""                | Additional CSS class for the send button                     |
| `clsMessageLeft`    | string  | "default"         | CSS class for left-aligned messages                          |
| `clsMessageRight`   | string  | "default"         | CSS class for right-aligned messages                         |

## Message Structure
Each message object should contain the following properties:
- `text` - Message text
- `time` - Message timestamp
- `position` - "left" or "right"
- `name` - Sender name
- `avatar` - Sender avatar HTML
- `id` (optional) - Unique message ID
- `attach` (optional) - Attachment, must be a file object


## API Methods

To access the Chat API methods, use:

```javascript
const chat = Metro.getPlugin("#myChatElement", "chat");
```

+ `add(msg)` - Adds a message to the chat. The message object should contain:

```javascript
chat.add({
    id: "msg-1", // Optional unique ID for the message
    name: "User Name",
    avatar: "<span>👨</span>", // Can be HTML, image URL, or data URL
    text: "Hello, world!",
    position: "left", // "left" or "right"
    time: new Date() // Date object or string
});
```

```js
const attach = new File(["content"], "file.txt", { type: "text/plain" });
chat.add({
    name: "User Name",
    avatar: "<span>👨</span>",
    position: "right",
    time: new Date(),
    attach: attach // File object for attachment
});
```

+ `addMessages(messages)` - Adds multiple messages to the chat.

```javascript
chat.addMessages([
    {
        name: "User 1",
        avatar: "<span>👨</span>",
        text: "Hello!",
        position: "left",
        time: new Date()
    },
    {
        name: "User 2",
        avatar: "<span>👩</span>",
        text: "Hi there!",
        position: "right",
        time: new Date()
    }
]);
```

+ `delMessage(id)` - Deletes a message by ID.

+ `updMessage(msg)` - Updates a message. The message object should contain:
  - `id` - Message ID to update
  - `text` - New message text
  - `time` - New message timestamp

+ `clear()` - Clears all messages from the chat.

+ `toggleReadonly(readonly)` - Toggles the read-only state of the chat.

## Events

| Event | Description |
| ----- | ----------- |
| `onMessage` | Triggered when a message is added to the chat |
| `onSend` | Triggered when a message is sent |
| `onSendButtonClick` | Triggered when the send button is clicked |
| `onChatCreate` | Triggered when the chat component is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--chat-border-color` | var(--border-color) | var(--border-color) | Border color for the chat component |
| `--chat-background` | #ffffff | #343637 | Background color for the chat component |
| `--chat-color` | #191919 | #dbdfe7 | Text color for the chat component |
| `--chat-message-background` | #f5f5f5 | #4a4d51 | Background color for chat messages |
| `--chat-message-color` | #191919 | #dbdfe7 | Text color for chat messages |

### Example of Custom Styling

```css
/* Custom styling for chat */
.custom-chat {
    --chat-border-color: #2196F3;
    --chat-background: #E3F2FD;
    --chat-color: #0D47A1;
    --chat-message-background: #BBDEFB;
    --chat-message-color: #0D47A1;
}
```

## Available CSS Classes

### Base Classes
- `.chat` - Main container class
- `.title` - Chat title
- `.messages` - Messages container
- `.message-input` - Input area container
- `.chat-input` - Text input field

### Message Classes
- `.message` - Message container
- `.message.left` - Left-aligned message (incoming)
- `.message.right` - Right-aligned message (outgoing)
- `.message-item` - Message item container
- `.message-avatar` - Message avatar
- `.message-text` - Message text container
- `.message-text-inner` - Message text content
- `.message-sender` - Message sender name
- `.message-time` - Message timestamp
- `.--next` - Modifier for consecutive messages from the same side

## Best Practices

1. Use appropriate avatars to distinguish between different users
2. Keep message texts concise for better readability
3. Use the welcome message to provide initial instructions or greeting
4. Consider using custom styling to match your application's theme
5. Use the readonly mode for displaying chat history without allowing new messages
