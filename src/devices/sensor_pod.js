const { batteryService } = require("./_shared");

const isLeakSensor = (state, device, config) =>
  config.leak_ids.indexOf(device.object_id) !== -1;

const isContactSensor = (state, device, config) =>
  config.leak_ids.indexOf(device.object_id) === -1 &&
  state.opened !== undefined;

module.exports = ({ Characteristic, Service }) => {
  const {
    ContactSensorState,
    LeakDetected,
    OccupancyDetected,
    StatusTampered
  } = Characteristic;

  return {
    type: "sensor_pod",
    group: "sensor_pods",
    services: [
      {
        service: Service.OccupancySensor,
        supported: state => state.occupied !== undefined,
        characteristics: [
          {
            characteristic: OccupancyDetected,
            get: state =>
              state.occupied
                ? OccupancyDetected.OCCUPANCY_DETECTED
                : OccupancyDetected.OCCUPANCY_NOT_DETECTED
          },
          {
            characteristic: StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state =>
              state.tamper_detected
                ? StatusTampered.TAMPERED
                : StatusTampered.NOT_TAMPERED
          }
        ]
      },
      {
        service: Service.MotionSensor,
        supported: state => state.motion !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.MotionDetected,
            get: state => state.motion
          },
          {
            characteristic: StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state =>
              state.tamper_detected
                ? StatusTampered.TAMPERED
                : StatusTampered.NOT_TAMPERED
          }
        ]
      },
      {
        service: Service.HumiditySensor,
        supported: state => state.humidity !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.CurrentRelativeHumidity,
            get: state => Math.round(state.humidity * 100)
          }
        ]
      },
      {
        service: Service.LeakSensor,
        supported: isLeakSensor,
        characteristics: [
          {
            characteristic: LeakDetected,
            get: state => {
              if (isLeakSensor) {
                return state.opened
                  ? LeakDetected.LEAK_DETECTED
                  : LeakDetected.LEAK_NOT_DETECTED;
              } else {
                return state.liquid_detected
                  ? LeakDetected.LEAK_DETECTED
                  : LeakDetected.LEAK_NOT_DETECTED;
              }
            }
          }
        ]
      },
      {
        service: Service.TemperatureSensor,
        supported: state => state.temperature !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.CurrentTemperature,
            get: state => state.temperature
          }
        ]
      },
      {
        service: Service.ContactSensor,
        supported: isContactSensor,
        characteristics: [
          {
            characteristic: ContactSensorState,
            get: state =>
              state.opened
                ? ContactSensorState.CONTACT_NOT_DETECTED
                : ContactSensorState.CONTACT_DETECTED
          },
          {
            characteristic: StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state =>
              state.tamper_detected
                ? StatusTampered.TAMPERED
                : StatusTampered.NOT_TAMPERED
          }
        ]
      },
      batteryService({
        Characteristic,
        Service
      })
    ]
  };
};
