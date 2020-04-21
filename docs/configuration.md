# configuration

Example `config.json`

```json
{
  "platforms": [
    {
      "platform": "Wink",
      "name": "Wink",
      "client_id": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      "client_secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    }
  ]
}
```

#### `platform`

Required. Must always be "Wink".

#### `name`

Required. Recommended value: "Wink".

#### `client_id`

Your Client ID obtained from [developer.wink.com](https://developer.wink.com)

#### `client_secret`

Your Client Secret obtained from [developer.wink.com](https://developer.wink.com)

#### `hide_groups`

Allows you to hide groups of devices.

```json
{
  "hide_groups": [
    "air_conditioner",
    "binary_switch",
    "camera",
    "door_bell",
    "fan",
    "garage_door",
    "light_bulb",
    "lock",
    "propane_tank",
    "sensor_pod",
    "shade",
    "siren",
    "smoke_detector",
    "thermostat"
  ]
}
```

#### `hide_ids`

Allows you to hide devices by their ID.

```json
{
  "hide_ids": [
    217402,
    365820
  ]
}
```

#### `fan_ids`

Allows you to expose devices (binary_switch/light_bulb) as fans, instead of light bulbs.

```json
{
  "fan_ids": [
    248563
  ]
}
```

#### `outlet_ids`

Allows you to expose devices (binary_switch/light_bulb) as outlets, instead of light bulbs.

```json
{
  "outlet_ids": [
    248563
  ]
}
```

#### `switch_ids`

Allows you to expose devices (binary_switch/light_bulb) as switches, instead of light bulbs.

```json
{
  "switch_ids": [
    248563
  ]
}
```

#### `vent_ids`

Allows you to expose devices (binary_switch/light_bulb) as vents (currently window coverings until HomeKit supports vents), instead of light bulbs.

```json
{
  "vent_ids": [
    248563
  ]
}
```

#### `direct_access`

Default to true. Enable/disable local control.

```json
{
  "direct_access": false
}
```
