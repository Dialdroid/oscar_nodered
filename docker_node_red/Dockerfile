# Usar imagen oficial de Node-RED
FROM nodered/node-red

# Definir el directorio de trabajo en el contenedor Docker
WORKDIR /usr/src/node-red

# Instalar flujos Node-RED adicionales
RUN npm install node-red-contrib-string && \
    npm install node-red-node-base64 && \
    npm install node-red-contrib-time_interval && \
    npm install node-red-contrib-image-output && \
    npm install node-red-contrib-exec-queue && \
    npm install node-red-contrib-minio-all && \
    npm install node-red-dashboard && \
    npm install node-red-contrib-play-audio

# Instalar git para clonar el repositorio
USER root
RUN apk update && \
    apk add git

# Clonar el repositorio en el directorio actual
RUN git clone https://github.com/grycap/oscar_nodered.git

# Copiar los flujos personalizados a /data
COPY flows.json /data/flows.json
#   cp oscar_nodered/examples/example_workflows_dashboard/workflow_all_services.json /data/flows.json 
#   cp oscar_nodered/examples/example_nodered_flow/oscar_cowsay_services/flows.json /data/flows.json && \
#   cp oscar_nodered/examples/example_nodered_flow/oscar_grayifyplants_services/flows.json /data/flows.json && \
#   cp oscar_nodered/examples/example_nodered_flow/oscar_info/flows.json /data/flows.json && \
#   cp oscar_nodered/examples/example_nodered_flow/oscar_plantsync_services/flows.json /data/flows.json && \
#   cp oscar_nodered/examples/example_nodered_flow/oscar_services/flows.json /data/flows.json && \
#   cp oscar_nodered/examples/example_nodered_flow/oscar_textspeech_services/flows.json /data/flows.json 


# Copiar el script de combinación de flujos al contenedor
# COPY combineFlows.js ./combineFlows.js

# Cambiar al usuario de node-red para ejecutar el servicio
USER node-red

# Indicar que el contenedor está escuchando en el puerto 1880
EXPOSE 1880

# Ejecutar Node-RED
CMD ["npm", "start"]
