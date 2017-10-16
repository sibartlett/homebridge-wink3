import { batteryService } from "./_shared";

export default ({ Characteristic, Service }) => {
  return {
    type: "sensor_pod",
    group: "sensor_pods",
    services: [
      {
        service: Service.OccupancySensor,
        supported: state => state.occupied !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.OccupancyDetected,
            get: state => state.occupied
          },
          {
            characteristic: Characteristic.StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state => state.tamper_detected
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
            characteristic: Characteristic.StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state => state.tamper_detected
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
        supported: state => state.liquid_detected !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.LeakDetected,
            get: state => state.liquid_detected
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
        supported: state => state.opened !== undefined,
        characteristics: [
          {
            characteristic: Characteristic.ContactSensorState,
            get: state => (state.opened ? 1 : 0)
          },
          {
            characteristic: Characteristic.StatusTampered,
            supported: state => state.tamper_detected !== undefined,
            get: state => state.tamper_detected
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
