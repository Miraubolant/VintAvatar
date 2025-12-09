FROM node:20-alpine

WORKDIR /app

# Copier les fichiers package
COPY package*.json ./

# Installer les dépendances (toutes les dépendances pour le build)
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application
RUN npm run build

# Exposer le port
EXPOSE 4173

# Commande de démarrage
CMD ["npm", "run", "serve"]
