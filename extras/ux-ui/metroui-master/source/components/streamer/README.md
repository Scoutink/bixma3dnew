# Streamer

The Streamer Component is a timeline-based UI element for displaying events in streams. It allows you to create interactive timelines with events organized in different streams.

## Dependencies

- Metro UI Core
- DOM module

## Usage

### Basic Usage

```html
<div id="streamer" data-role="streamer" 
     data-source="data/streamer.json">
</div>
```

### Additional Configurations

```html
<div id="streamer" data-role="streamer" 
     data-source="data/streamer.json"
     data-start-from="10:00"
     data-slide-to-start="true"
     data-stream-select="true">
</div>
```

## Plugin Parameters

| Parameter | Type | Default | Description |
| --------- | ---- | ------- | ----------- |
| `streamerDeferred` | Number | 0 | Deferred initialization time in milliseconds |
| `wheel` | Boolean | true | Enable mouse wheel scrolling |
| `wheelStep` | Number | 20 | Scroll step for mouse wheel |
| `duration` | Number | 200 | Animation duration |
| `defaultClosedIcon` | String | "" | Default icon for closed state |
| `defaultOpenIcon` | String | "" | Default icon for open state |
| `changeUri` | Boolean | true | Change URI when selecting events |
| `encodeLink` | Boolean | true | Encode links in URI |
| `closed` | Boolean | false | Initial state (closed or open) |
| `chromeNotice` | Boolean | false | Show Chrome browser notice |
| `startFrom` | String | null | Start time point |
| `slideToStart` | Boolean | true | Slide to start position |
| `startSlideSleep` | Number | 1000 | Delay before sliding to start position |
| `source` | String | null | Data source URL |
| `data` | Object | null | Data object |
| `eventClick` | String | "select" | Event click behavior |
| `selectGlobal` | Boolean | true | Global event selection |
| `streamSelect` | Boolean | false | Enable stream selection |
| `excludeSelectElement` | String | null | Selector for elements to exclude from selection |
| `excludeClickElement` | String | null | Selector for elements to exclude from click |
| `excludeElement` | String | null | Selector for elements to exclude from both selection and click |
| `excludeSelectClass` | String | "" | Class for elements to exclude from selection |
| `excludeClickClass` | String | "" | Class for elements to exclude from click |
| `excludeClass` | String | "" | Class for elements to exclude from both selection and click |

## API Methods

+ `slideTo(time)` - Slides the streamer to the specified time point.
+ `enableStream(stream)` - Enables a stream.
+ `disableStream(stream)` - Disables a stream.
+ `toggleStream(stream)` - Toggles a stream between enabled and disabled states.
+ `getLink()` - Gets the link with selected events.
+ `getTimes()` - Gets all time points in the timeline.
+ `getEvents(eventType, includeGlobal)` - Gets events of the specified type.
+ `source(s)` - Gets or sets the data source URL.
+ `dataSet(s)` - Gets or sets the data object.
+ `getStreamerData()` - Gets the current streamer data.
+ `toggleEvent(event)` - Toggles an event's selected state.
+ `selectEvent(event, state)` - Selects or deselects an event.
+ `build()` - Rebuilds the entire streamer.

### Example of Method Usage

```javascript
const streamer = Metro.getPlugin('#streamer', 'streamer');
streamer.slideTo('10:00');
```

```javascript
const streamer = Metro.getPlugin('#streamer', 'streamer');
streamer.source('data/streamer.json');
```

```javascript
const streamer = Metro.getPlugin('#streamer', 'streamer');
streamer.dataSet({
  timeline: {
    start: "09:00",
    stop: "18:00",
    step: 20
  },
  streams: [
    // Stream data
  ]
});
```

## Events

| Event | Description |
| ----- | ----------- |
| `onDataLoad` | Triggered when data loading starts |
| `onDataLoaded` | Triggered when data is loaded |
| `onDataLoadError` | Triggered when data loading fails |
| `onDrawEvent` | Triggered when an event is drawn |
| `onDrawGlobalEvent` | Triggered when a global event is drawn |
| `onDrawStream` | Triggered when a stream is drawn |
| `onStreamClick` | Triggered when a stream is clicked |
| `onStreamSelect` | Triggered when a stream is selected |
| `onEventClick` | Triggered when an event is clicked |
| `onEventSelect` | Triggered when an event is selected |
| `onEventsScroll` | Triggered when events are scrolled |
| `onStreamerCreate` | Triggered when the streamer is created |

## Styling with CSS Variables

| Variable | Default (Light) | Dark Mode | Description |
| -------- | --------------- | --------- | ----------- |
| `--streamer-item-width` | 224px | 224px | Width of timeline items |
| `--streamer-background` | #ffffff | #343637 | Background color of the streamer |
| `--streamer-color` | #191919 | #dbdfe7 | Text color of the streamer |
| `--streamer-stream-border-color` | #fefefe | #2b2d30 | Border color of streams |
| `--stream-event-group-background` | #f7f8fa | #272729 | Background color of event groups |
| `--stream-event-group-color` | #191919 | #191919 | Text color of event groups |
| `--stream-event-background` | #fefefe | #343637 | Background color of events |
| `--stream-event-color` | #191919 | #dbdfe7 | Text color of events |
| `--stream-event-border-color` | #fefefe | #484b4c | Border color of events |
| `--stream-event-border-color-hover` | #fefefe | #616567 | Border color of events on hover |
| `--stream-event-border-radius` | 6px | 6px | Border radius of events |
| `--stream-event-shadow-color` | #b5b5b5 | #191919 | Shadow color of events |
| `--streamer-scrollbar-size` | 10px | 10px | Size of scrollbar |
| `--streamer-scrollbar-color` | #000 | #000 | Color of scrollbar |
| `--streamer-scrollbar-thumb-color` | #2e9fff | #ff6211 | Color of scrollbar thumb |

### Example of Custom Styling

```css
#my-streamer {
    --streamer-item-width: 300px;
    --streamer-background: #f0f0f0;
    --stream-event-border-radius: 10px;
}
```

## Available CSS Classes

### Base Classes
- `.streamer` - Main container class
- `.streams` - Container for streams
- `.stream` - Individual stream
- `.events-area` - Container for events area
- `.streamer-timeline` - Timeline container
- `.streamer-events` - Events container
- `.stream-events` - Container for stream events
- `.stream-event` - Individual event

### Modifiers
- `.streamer-expand-sm` - Expands streams on small screens
- `.streamer-expand-md` - Expands streams on medium screens
- `.streamer-expand-lg` - Expands streams on large screens
- `.streamer-expand-xl` - Expands streams on extra large screens
- `.stream-event.selected` - Selected event
- `.stream-event.disabled` - Disabled event
- `.stream-event.size-1x` to `.stream-event.size-20x` - Event size modifiers
- `.stream-event.shift-1x` to `.stream-event.shift-20x` - Event position modifiers

## Data Format

The Streamer Component expects data in the following format:

```javascript
{
  "actions": [
    {
      "html": "<span class='mif-print'></span>",
      "onclick": "alert('Printed!!!')",
      "cls": "fg-darkCyan"
    }
  ],
  "timeline": {
    "start": "09:00",
    "stop": "18:00",
    "step": 20
  },
  "streams": [
    {
      "title": "Stream 1",
      "secondary": "Secondary text",
      "icon": "<span class='mif-apps'></span>",
      "cls": "bg-cyan fg-white",
      "events": [
        {
          "time": "10:00",
          "title": "Event 1",
          "subtitle": "Subtitle",
          "desc": "Description",
          "icon": "images/icon.png",
          "cls": "bg-green fg-white",
          "size": 1,
          "selected": false,
          "closed": false,
          "closedIcon": "<span class='mif-video-camera'></span>",
          "openIcon": "<span class='mif-apps'></span>",
          "target": "https://example.com",
          "clsClosedIcon": "fg-red",
          "clsOpenIcon": "fg-green",
          "row": 1
        }
      ]
    }
  ],
  "global": {
    "before": [
      {
        "time": "08:40",
        "size": 1,
        "cls": "p-2",
        "title": "Registration",
        "subtitle": "08:40 - 09:00"
      }
    ],
    "after": [
      {
        "time": "12:00",
        "size": 2,
        "cls": "p-2",
        "title": "Closing ceremony"
      }
    ]
  }
}
```