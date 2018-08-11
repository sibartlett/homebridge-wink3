const isFan = (state, device, config) =>
  config.fan_ids.indexOf(device.object_id) !== -1;

const isVent = (state, device, config) =>
  config.vent_ids.indexOf(device.object_id) !== -1;

const isOutlet = (state, device, config) =>
  config.outlet_ids.indexOf(device.object_id) !== -1;

const isSwitch = (state, device, config) =>
  config.switch_ids.indexOf(device.object_id) !== -1;

const isLightBulb = (state, device, config) =>
  !isFan(state, device, config) &&
  !isOutlet(state, device, config) &&
  !isVent(state, device, config) &&
  !isSwitch(state, device, config);

module.exports = ({ Characteristic, Service }) => {
  return {
    type: "light_bulb",
    group: "light_bulbs",
    services: [
      {
        service: Service.WindowCovering,
        supported: isVent,
        characteristics: [
          {
            characteristic: Characteristic.TargetPosition,
            get: (state, desired_state) => desired_state.brightness * 100,
            set: value => ({ brightness: value / 100 })
          },
          {
            characteristic: Characteristic.CurrentPosition,
            get: state => state.brightness * 100
          },
          {
            characteristic: Characteristic.PositionState,
            value: Characteristic.PositionState.STOPPED
          }
        ]
      },
      {
        service: Service.Lightbulb,
        supported: isLightBulb,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: state => state.powered,
            set: value => ({ powered: !!value })
          },
          {
            characteristic: Characteristic.Brightness,
            supported: state => state.brightness !== undefined,
            get: state => Math.floor(state.brightness * 100),
            set: value => ({ brightness: value / 100 })
          },
          {
            characteristic: Characteristic.ColorTemperature,
            supported: state =>
              state.color_temperature !== undefined &&
              state.hue === undefined &&
              state.saturation === undefined,
            get: state => Math.floor(1000000 / state.color_temperature),
            set: value => ({
              color_model: "color_temperature",
              color_temperature: 1000000 / value
            })
          },
          {
            characteristic: Characteristic.Hue,
            supported: state => state.hue !== undefined,
            get: state => Math.floor(state.hue * 360),
            set: (value, accessory) => {
              const state = accessory.merged_state;
              return {
                brightness: state.brightness,
                color_model: "hsb",
                hue: value / 360,
                saturation: state.saturation
              };
            }
          },
          {
            characteristic: Characteristic.Saturation,
            supported: state => state.saturation !== undefined,
            get: state => Math.floor(state.saturation * 100),
            set: (value, accessory) => {
              const state = accessory.merged_state;
              return {
                brightness: state.brightness,
                color_model: "hsb",
                hue: state.hue,
                saturation: value / 360
              };
            }
          }
        ]
      },
      {
        service: Service.Fan,
        supported: isFan,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: state => state.powered,
            set: value => ({ powered: !!value })
          },
          {
            characteristic: Characteristic.RotationSpeed,
            supported: state => state.brightness !== undefined,
            get: state => Math.floor(state.brightness * 100),
            set: value => ({ brightness: value / 100 })
          }
        ]
      },
      {
        service: Service.Outlet,
        supported: isOutlet,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: state => state.powered,
            set: value => ({ powered: !!value })
          },
          {
            characteristic: Characteristic.OutletInUse,
            get: state => state.powered
          }
        ]
      },
      {
        service: Service.Switch,
        supported: isSwitch,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: state => state.powered,
            set: value => ({ powered: !!value })
          },
          {
            characteristic: Characteristic.On,
            get: state => state.opened,
            set: value => ({ opened: !!value })
          }
        ]
      }
    ]
  };
};
