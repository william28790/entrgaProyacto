# Usa una imagen base de Node.js
FROM node:alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu aplicación al directorio de trabajo
COPY package*.json .

# Instala las dependencias
RUN npm install

COPY . .

# Construye tu aplicación
RUN npm run build

EXPOSE 3000

# Comando para servir tu aplicación con un servidor web ligero (por ejemplo, serve)
CMD ["npm", "start"]
