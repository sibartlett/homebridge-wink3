const { batteryService } = require("./_shared");

module.exports = ({ Characteristic, Service }) => {
  return {
    type: "propane_tank",
    group: "propane_tanks",
    services: [
      batteryService({
        Characteristic,
        Service,
        field: "remaining"
      })
    ]
  };
};
