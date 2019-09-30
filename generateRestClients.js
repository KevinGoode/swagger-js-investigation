var fs = require('fs');
var CodeGen = require('swagger-js-codegen').CodeGen;
 
var file = 'inventory.json';
var swagger = JSON.parse(fs.readFileSync(file, 'UTF-8'));
var reactjsSourceCode = CodeGen.getReactCode({ className: 'Inventory', swagger: swagger });
var nodeCode = CodeGen.getNodeCode({ className: 'Inventory', swagger: swagger });
fs.writeFile('inventory-client-react.js', reactjsSourceCode, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.writeFile('inventory-client-node.js', nodeCode, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
