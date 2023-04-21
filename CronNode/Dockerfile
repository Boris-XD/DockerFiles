# /app /usr /lib
FROM node:19.2-alpine3.16

# cd app
WORKDIR /app

# Dest /app copy all content 
COPY . .

#copy configuration - readme
# Copia el contenido de la carpeta Configuration en la Carpeta configurationApp
COPY Configuration  ConfigurationApp

# instalar las dependencias
RUN npm install

# Correr todos los test
RUN npm run test

#Comando run de la imagen
CMD ["node", "app.js"]
