const isFan = (state, device, config) => 	config.fan_ids.indexOf(device.object_id) !== -1;

const isOutlet = (state, device, config) => 	config.outlet_ids.indexOf(device.object_id) !== -1 ||
						state.consumption !== undefined;

const isSwitch = (state, device, config) => 	config.switch_ids.indexOf(device.object_id) !== -1;

const isValve = (state, device, config) => 	state.opened != undefined;

const isLightBulb = (state, device, config) => 	!isFan(state, device, config) &&
						!isOutlet(state, device, config) &&
						!isSwitch(state, device, config) &&
						!isValve(state, device, config);

exports.default = ({ Characteristic, Service }) => {
  return {
    type: "binary_switch",
    group: "binary_switches",
    services: [{
      service: Service.Fan,
      supported: isFan,
      characteristics: [{
        characteristic: Characteristic.On,
        get: state => state.powered,
        set: value => ({ powered: !!value })
      }]
    }, {
      service: Service.Lightbulb,
      supported: isLightBulb,
      characteristics: [{
        characteristic: Characteristic.On,
        get: state => state.powered,
        set: value => ({ powered: !!value })
      }]
    }, {
      service: Service.Switch,
      supported: isSwitch,
      characteristics: [{
        characteristic: Characteristic.On,
        get: state => state.powered,
        set: value => ({ powered: !!value })
      }]
    }, {
      service: Service.Switch,
      supported: isValve,
      characteristics: [{
        characteristic: Characteristic.On,
        get: state => state.opened,
        set: value => ({ opened: !!value })
      }]
    }, {
      service: Service.Outlet,
      supported: isOutlet,
      characteristics: [{
        characteristic: Characteristic.On,
        get: state => state.powered,
        set: value => ({ powered: !!value })
      }, {
        characteristic: Characteristic.OutletInUse,
//        get: state => state.consumption > 0.1
	get: state => {
		if (state.consumption == undefined)
			return state.consumption > 0.1;
		else
			return state.powered;
	}
      }]
    }]
  };
};
