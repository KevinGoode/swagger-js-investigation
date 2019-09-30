var inventory = require('./inventory-client-node.js').Inventory;
var swaggerValidator = require('swagger-object-validator');
var validator = new swaggerValidator.Handler('inventory.json');
 
var device =  {name: "dev1", serial_number: "sn1", status_time: "2014-12-09T13:06:08.260Z", status: "DEVICE_STATUS_DEVICE_AVAILABLk"};
validator.validateModel(device, 'inventory.v1beta1.StorageDevice', function (err, result) {

    if (result != undefined) {
        console.log(result.humanReadable());
    }else{
        console.log(err);
    }
});
