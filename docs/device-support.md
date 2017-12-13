# Device support

| Category                              | Device Type       | Device Group       |
|---------------------------------------|-------------------|--------------------|
| [Air Conditioners](#air-conditioners) | `air_conditioner` | `air_conditioners` |
| [Binary Switches](#binary-switches)   | `binary_switch`   | `binary_switches`  |
| [Cameras](#cameras)                   | `camera`          | `cameras`          |
| [Door Bells](#door-bells)             | `door_bell`       | `door_bells`       |
| [Fans](#fans)                         | `fan`             | `fans`             |
| [Garage Doors](#garage-doors)         | `garage_door`     | `garage_doors`     |
| [Light Bulbs](#light-bulbs)           | `light_bulb`      | `light_bulbs`      |
| [Locks](#locks)                       | `lock`            | `locks`            |
| [Propane Tanks](#propane-tanks)       | `propane_tank`    | `propane_tanks`    |
| [Sensors](#sensors)                   | `sensor_pod`      | `sensor_pods`      |
| [Shades](#shades)                     | `shade`           | `shades`           |
| [Sirens](#sirens)                     | `siren`           | `sirens`           |
| [Smoke Detectors](#smoke-detectors)   | `smoke_detector`  | `smoke_detectors`  |
| [Thermostats](#thermostats)           | `thermostat`      | `thermostats`      |

## Air Conditioners

_Wink Aros_

* Change between cool, auto and off.
* Set temperature.

Limitations:

* Direct fan control is not yet available.

## Binary Switches

_Z-Wave non-dimming switches, Wink Outlink, Wink Relay_

* On/Off Functions.
* For the Outlink, uses the power usage to determine if on or off.
* Can be added to HomeKit as a fan, using `fan_ids` optional configuration field

Limitations:

* Does not report actual power usage due to limitation in HomeKit Interface.

## Cameras

_Arlo, Canary, Nest Cam_

* Added to HomeKit as motion detector.
* Canary is added to HomeKit as security system:
  * Allows user to set the operating mode (armed, disarmed, etc).

Limitations:

* Can not view video feed.
* Cameras other than Canary are not added as a security system (as I'm not sure which modes each camera supports and how they map to HomeKit states).

## Door Bells

_Ring_

* Added to HomeKit as motion detector.

## Fans

_Home Decorators Collection fans_

* On/Off, rotation direction and speed.

Limitations:

* Can not control Comfort Breeze / auto mode.

## Garage Doors

* Open/Close Wink-connected garage doors.
* Reports Battery Level (where available).

Limitations:

* Does not identify blocked doors due to limitation in Wink Interface.
* Chamberlain garage openers are only controllable when using a Client ID and Secret obtained from one of the official Wink apps. ([Source](https://github.com/python-wink/python-wink/issues/23#issuecomment-197431701))

Chamberlain now offer official HomeKit support using the [MyQ® Home Bridge](https://www.chamberlain.com/apple-partnership).

## Light Bulbs

_Light Bulbs and dimmable switches_

* On/Off and Dimming.
* Bulbs with support allow Hue and Saturation.
* Can be added to HomeKit as a fan, using `fan_ids` optional configuration field

## Locks

* Lock/Unlock and report current status.
* Reports Battery Level (where available).

Limitations:

* Does not support tamper detection due to limitation in developer's locks and/or Wink API.

## Propane Tank

  * Reports as a battery

## Sensors

_Spotter, Tripper and other PIR and Door/Window Sensors_

* The following sensors are supported:
  * Door and Window sensors
  * Humidity sensor
  * Motion sensor (PIR reports as Motion Detector)
  * Occupancy sensor
  * Temperature sensor
  * Water sensor (leak detector)
* Reports Battery Level (where available).

Limitations:

* Spotter does not report brightness, vibration or loudness to HomeKit. Apple expects values and these are simply reported as yes/no concerning if it changed.

## Shades

* Open and close.
* Reports Battery Level (where available).

## Siren

_GoControl Siren_

* Enable/disable siren and strobe independently of each other.

## Smoke Detectors

* Reports CO and Smoke Alarms as available by the detector
* Reports Battery Level.

Limitations:

* Only Kiddie detectors are supported?

## Thermostats

* Should be fully functional.
* Reports Battery Level (where available).
