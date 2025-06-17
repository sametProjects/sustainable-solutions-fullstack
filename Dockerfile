FROM node:18-alpine

WORKDIR /app

# Package.json dosyalarını kopyala
COPY package*.json ./

# Dependencies'leri yükle
RUN npm install

# Uygulama kodunu kopyala
COPY . .

# Next.js'i build et
RUN npm run build

# Port'u expose et
EXPOSE 3000

# Uygulamayı başlat
CMD ["npm", "start"]