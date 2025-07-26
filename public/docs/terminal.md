# Terminal Component Documentation

This document provides details on how to use the `Terminal` component in different modes:

## Props

| Prop              | Type                                     | Default              | Description |
|-------------------|------------------------------------------|----------------------|-------------|
| websocketUrl      | string                                   | "ws://localhost:12345/ws" | WebSocket endpoint |
| sseUrl            | string                                   | "http://localhost:12345/sse" | SSE endpoint |
| sseMethod         | string                                   | "GET"                | HTTP method for SSE |
| sseCommandParam   | string                                   | "cmd"                | Parameter key for commands |
| sseContentType    | string                                   | "application/json"   | Content-Type for POST |
| initialContent    | string                                   | ""                   | Initial terminal output |
| initialCommands   | string[]                                 | []                   | Commands to auto-run |
| initialReturns    | (string \| null)[]                       | []                   | Return values for each command |
| onInput           | (input: string) => Promise<string>       | undefined            | Input callback |
| mode              | "controlled" \| "standard" \| "websocket" \| "sse" | "standard" | Terminal mode |
| controlledOutput  | { prefix?: string, content: string }[]   | []                   | For controlled mode |
| typingDelay       | number                                   | 100                  | Delay between keystrokes |
| commandDelay      | number                                   | 500                  | Delay between commands |
| websocketDelay    | number                                   | 0                    | Delay before connecting WebSocket |
| theme             | "standard" \| "material" \| "desktop"    | "standard"           | Terminal visual theme |
| onconnect         | () => void                               | undefined            | WebSocket connect callback |
| onclose           | () => void                               | undefined            | WebSocket close callback |
| textColor         | string                                   | "#FFF"               | Terminal text color |
| backgroundColor   | string                                   | "#000"               | Terminal background color |

## Modes

### Standard
- Accepts typed input
- Calls `onInput` callback

### Controlled
- Fully driven via `controlledOutput`
- Input is hidden, only output is displayed

### WebSocket
- Sends commands over WebSocket
- Receives output via messages

### SSE
- Sends commands via HTTP (GET or POST)
- Receives streaming output via EventSource

## Usage Example

```jsx
<Terminal
  mode="websocket"
  websocketUrl="ws://localhost:8080"
  initialContent="Connecting..."
  theme="desktop"
/>
```