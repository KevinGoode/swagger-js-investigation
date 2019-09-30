This code demonstrates 2 tools that use swagger REST file spec:  
1.) swagger-js-codegen  
2.) swagger-object-validator  

# Before You Start  
To download dependencies: npm install

# To run code generator
npm run build  

# To validate a json object  
npm run validate  

NOTE:  
By default validation fails because the json object being validated should have  
a valid status. Change status to be  "DEVICE_STATUS_DEVICE_AVAILABLE" to fix.  

