**IMPORTANT!** This project is no longer being maintained, as I no longer use Wink. This plugin should still function as long as Wink supports their exisitng API.

![Wink and HomeKit](https://i.imgur.com/JGy2QiM.png)

**homebridge-wink3**
|
[Documentation](https://sibartlett.github.io/homebridge-wink3)
|
[Slack](https://homebridgeteam.slack.com/messages/C0FPLQW8J)
|
[GitHub](https://github.com/sibartlett/homebridge-wink3)
|
[NPM](https://www.npmjs.com/package/homebridge-wink3)

Yet another Wink plugin for [homebridge](https://github.com/nfarina/homebridge).

* Uses Wink API v2, and local control.
* Subscribes to Wink push notifications, instead of polling for device updates.
* Written in ES2018 (arrow functions, async/await, classes, etc).
* Accessory services and characteristics are defined declaratively.
* Supports API tokens obtained from [developer.wink.com](https://developer.wink.com)

This plugin is a rewrite of two plugins that came before:

* The original [homebridge-wink](https://github.com/KraigM/homebridge-wink) plugin, maintained by [KraigM](https://github.com/KraigM)
* A [fork](https://github.com/pdlove/homebridge-wink), maintained by [pdlove](https://github.com/pdlove)
