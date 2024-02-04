
const accessbluetooth = async ()=>{

    // const device = await navigator.bluetooth.requestDevice({
    //     optionalServices: ["battery_service", "device_information"],
    //     acceptAllDevices: true,
    //   });
    //   let deviceName = device.gatt.device.name;
    // const server = await device.gatt.connect(); 
    // const batteryService = await server.getPrimaryService("battery_service");
    // const infoService = await server.getPrimaryService("device_information");
    // const batteryLevelCharacteristic = await batteryService.getCharacteristic(
    //   "battery_level"
    // );
    // // Convert recieved buffer to number
    // const batteryLevel = await batteryLevelCharacteristic.readValue();
    // const batteryPercent = await batteryLevel.getUint8(0);
    // console.log(batteryPercent);

   const devices = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
          })
          console.log(devices)
          try {
            const server = await devices.gatt.connect();
            const service = await server.getPrimaryService('0000180d-0000-1000-8000-00805f9b34fb');
            // const characteristic = await service.getCharacteristic('heart_rate_measurement');
          } catch (error) {
            console.log(error)
          }
         
          console.log("monu")
         
          //  console.log(characteristic)

}
const getBluetooth = async ()=>{
    console.log("first")
    const button = document.getElementById("monu")
    button.addEventListener("click",accessbluetooth)

}
getBluetooth()

