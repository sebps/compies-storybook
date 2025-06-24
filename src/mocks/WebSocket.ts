export class MockWebSocket {
  private events: { [key: string]: Array<(event: any) => void> } = {};
  private _onopen: ((event: Event) => void) | null = null;
  private _onclose: ((event: CloseEvent) => void) | null = null;
  private _onmessage: ((event: MessageEvent) => void) | null = null;
  private _onerror: ((event: Event) => void) | null = null;
  private isOpen = false;

  constructor(url: string) {
    console.log(`Mock WebSocket created for URL: ${url}`);

    // Simulate connection open
    setTimeout(() => {
      this.isOpen = true;
      this.triggerEvent("open", {});
      if (this._onopen) this._onopen(new Event("open")); // Trigger `onopen`

      // Simulate an initial message 1 second after the connection opens
      setTimeout(() => {
        const initialMessage = "$";
        this.triggerEvent("message", { data: initialMessage });
        if (this._onmessage) this._onmessage(new MessageEvent("message", { data: initialMessage }));
      }, 1000); // 1 second delay
    }, 500); // Simulate connection delay
  }

  // Simulate sending a message
  send(message: string) {
    if (this.isOpen) {
      console.log("Mock WebSocket sent:", message);
      setTimeout(() => {
        const response = `Echo: ${message.trim()} \n$`;
        this.triggerEvent("message", { data: response });
        if (this._onmessage) this._onmessage(new MessageEvent("message", { data: response }));
      }, 1000); // Simulate response delay
    } else {
      console.error("WebSocket is not open, cannot send message.");
    }
  }

  // Explicitly close the WebSocket
  close() {
    if (!this.isOpen) {
      console.warn("WebSocket is already closed.");
      return;
    }
    this.isOpen = false;
    console.log("Mock WebSocket closed.");
    this.triggerEvent("close", {});
    if (this._onclose) this._onclose(new CloseEvent("close"));
  }

  // Add an event listener
  addEventListener(event: string, callback: (event: any) => void) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // Remove an event listener
  removeEventListener(event: string, callback: (event: any) => void) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }

  // Trigger an event
  private triggerEvent(event: string, eventData: any) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(eventData));
    }
  }

  // onopen property
  set onopen(callback: ((event: Event) => void) | null) {
    this._onopen = callback;
    if (this.isOpen && this._onopen) {
      this._onopen(new Event("open")); // Immediately trigger if already open
    }
  }

  get onopen() {
    return this._onopen;
  }

  // onclose property
  set onclose(callback: ((event: CloseEvent) => void) | null) {
    this._onclose = callback;
  }

  get onclose() {
    return this._onclose;
  }

  // onmessage property
  set onmessage(callback: ((event: MessageEvent) => void) | null) {
    this._onmessage = callback;
  }

  get onmessage() {
    return this._onmessage;
  }

  // onerror property
  set onerror(callback: ((event: Event) => void) | null) {
    this._onerror = callback;
  }

  get onerror() {
    return this._onerror;
  }
}
