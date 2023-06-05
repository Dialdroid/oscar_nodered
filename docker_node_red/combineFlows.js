const fs = require('fs');
const path = require('path');

// Define los archivos de flujo que quieres combinar
const flowFiles = [
    'oscar_cowsay_services/flows.json',
    'oscar_grayifyplants_services/flows.json',
    'oscar_info/flows.json',
    'oscar_plantsync_services/flows.json',
    'oscar_services/flows.json',
    'oscar_textspeech_services/flows.json',
];

// Lee y combina todos los flujos
let combinedFlows = [];
flowFiles.forEach((file) => {
    const flow = JSON.parse(fs.readFileSync(path.join(__dirname, file)));
    combinedFlows = [...combinedFlows, ...flow];
});

// Escribe los flujos combinados a /data/flows.json
fs.writeFileSync('/data/flows.json', JSON.stringify(combinedFlows, null, 2));
