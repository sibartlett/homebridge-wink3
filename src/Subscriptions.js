const EventEmitter = require("events");
const PubNub = require("pubnub");

module.exports = class Subscriptions extends EventEmitter {
  constructor() {
    super();
    this.subscribers = {};
  }

  getOrAddSubscriber(origin, subscribeKey) {
    const key = `${origin}:${subscribeKey}`;

    if (!this.subscribers[key]) {
      this.subscribers[key] = new PubNub({
        origin,
        ssl: true,
        subscribeKey
      });

      this.subscribers[key].addListener({
        message: this.onMessage.bind(this)
      });
    }

    return this.subscribers[key];
  }

  subscribe(subscription) {
    const {
      pubnub: { channel, origin, subscribe_key }
    } = subscription;
    const subscriber = this.getOrAddSubscriber(origin, subscribe_key);
    subscriber.subscribe({
      channels: [channel]
    });
  }

  unsubscribe(subscription) {
    const {
      pubnub: { channel, origin, subscribe_key }
    } = subscription;
    const subscriber = this.getOrAddSubscriber(origin, subscribe_key);
    subscriber.unsubscribe({
      channels: [channel]
    });
  }

  onMessage(message) {
    const msg =
      typeof message.message !== "string"
        ? message.message
        : JSON.parse(message.message);

    this.emit("message", msg);

    if (
      msg.uuid &&
      msg.name &&
      msg.object_type &&
      msg.object_id &&
      msg.last_reading
    ) {
      return this.emit("device-update", msg);
    }

    if (msg.data && Array.isArray(msg.data)) {
      return this.emit("device-list", msg);
    }

    this.emit("unknown-message", msg);
  }
};
