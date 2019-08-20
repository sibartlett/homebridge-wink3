# ![](https://raw.githubusercontent.com/hoobs-org/homebridge-wink/master/branding/logo.png)

This is a plugin for HOOBS, that enables you to expose your Wink devices as Apple Home accessories.

## Features
* Uses Wink API v2, and local control.
* Subscribes to Wink push notifications.
* Accessory services and characteristics are defined declaratively.

## Accessory Support

**Air Conditioners**
Wink Aros

- Change between cool, auto and off.
- Set temperature.

> Limitations:
> Direct fan control is not yet available.

**Binary Switches**
Z-Wave non-dimming switches, Wink Outlink, Wink Relay

- On/Off Functions.
 - For the Outlink, uses the power usage to determine if on or off.
- Can be added to HomeKit as a fan, using fan_ids optional configuration field

> Limitations:
> Does not report actual power usage due to limitation in HomeKit Interface.

**Cameras**
Arlo, Canary, Nest Cam

- Added to HomeKit as motion detector.
- Canary is added to HomeKit as security system:
- Allows user to set the operating mode (armed, disarmed, etc).

> Limitations:
> Can not view video feed.
> Cameras other than Canary are not added as a security system (as I'm not sure which modes each camera supports and how they map to HomeKit states).

**Door Bells**
Ring

> Added to HomeKit as motion detector.

**Fans**
Home Decorators Collection fans

- On/Off, rotation direction and speed.

> Limitations:
> Can not control Comfort Breeze / auto mode.

**Garage Doors**
Open/Close Wink-connected garage doors.

- Reports Battery Level (where available).

> Limitations:
> Does not identify blocked doors due to limitation in Wink Interface.
> Chamberlain garage openers are only controllable when using a Client ID and Secret obtained from one of the official Wink apps.
> HOOBS has a certified plugin that works with myQ devices.

**Light Bulbs**
Light Bulbs and dimmable switches

- On/Off and Dimming.
- Bulbs with support allow Hue and Saturation.
- Bulbs with support allow Colour Temperature.

**Locks**
Lock/Unlock and report current status.

- Reports Battery Level (where available).

> Limitations:
> Does not support tamper detection due to limitation in developer's locks and/or Wink API.

**Propane Tank**

- Reports as a battery

**Sensors**
Spotter, Tripper and other PIR and Door/Window Sensors

The following sensors are supported:

- Door and Window sensors
- Humidity sensor
- Motion sensor (PIR reports as Motion Detector)
- Occupancy sensor
- Temperature sensor
- Water sensor (leak detector)
- Reports Battery Level (where available).

> Limitations:
>Spotter does not report brightness, vibration or loudness to HomeKit. Apple expects values and these are simply reported as yes/no concerning if it changed.

**Shades**

- Open and close.
- Reports Battery Level (where available).

**Siren**
GoControl Siren

- Enable/disable siren and strobe independently of each other.

**Smoke Detectors**
Reports CO and Smoke Alarms as available by the detector

- Reports Battery Level.

> Limitations:
> Only Kiddie detectors are supported?
> HOOBS has a certified plugin for Nest Protect devices.

**Thermostats**

- Reports Battery Level (where available).

## Credits

This the HOOBS certified version of the [homebridge-wink](https://github.com/sibartlett/homebridge-wink3) by [Simon Bartlett](https://github.com/sibartlett).  
Based on [homebridge-wink](https://github.com/KraigM/homebridge-wink) by [KraigM](https://github.com/KraigM).  

Apple, HomeKit and the Apple Home icon are registered trademarks of Apple Inc.  
Wink and the Wink logo are registered trademarks of Wink Labs Inc.  
Nest, Nest Protect and the Nest logo are registered trademarks of Google LLC.
