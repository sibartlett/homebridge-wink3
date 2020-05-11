const isFan = (state, device, config) =>
  config.fan_ids.indexOf(device.object_id) !== -1;

const isOutlet = (state, device, config) =>
  state.consumption !== undefined ||
  config.outlet_ids.indexOf(device.object_id) !== -1;

const isSwitch = (state, device, config) =>
  config.switch_ids.indexOf(device.object_id) !== -1;

const isValve = (state) => state.opened !== undefined;

const isLightBulb = (state, device, config) =>
  !isFan(state, device, config) &&
  !isOutlet(state, device, config) &&
  !isSwitch(state, device, config) &&
  !isValve(state, device, config);

module.exports = ({ Characteristic, Service }) => {
  return {
    type: "binary_switch",
    group: "binary_switches",
    services: [
      {
        service: Service.Fan,
        supported: isFan,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: (state) => state.powered,
            set: (value) => ({ powered: !!value }),
          },
        ],
      },
      {
        service: Service.Lightbulb,
        supported: isLightBulb,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: (state) => state.powered,
            set: (value) => ({ powered: !!value }),
          },
        ],
      },
      {
        service: Service.Outlet,
        supported: isOutlet,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: (state) => state.powered,
            set: (value) => ({ powered: !!value }),
          },
          {
            characteristic: Characteristic.OutletInUse,
            get: (state) =>
              state.consumption ? state.consumption > 0.1 : state.powered,
          },
        ],
      },
      {
        service: Service.Switch,
        supported: isSwitch,
        characteristics: [
          {
            characteristic: Characteristic.On,
            get: (state) => state.powered,
            set: (value) => ({ powered: !!value }),
          },
        ],
      },
      {
        service: Service.Valve,
        supported: isValve,
        characteristics: [
          {
            characteristic: Characteristic.Active,
            get: (state) => state.opened,
            set: (value) => ({ opened: !!value }),
          },
          {
            characteristic: Characteristic.InUse,
            get: (state) => state.opened,
          },
        ],
      },
    ],
  };
};
