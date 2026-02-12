FROM node:20-alpine

# Ce n'est pas le dossier "app" de notre projet Angular, il s'agit du dossier "app" du serveur Node ! En effet, c'est comme ça qu'il s'appelle. Sur Apache par exemple on a plutôt /var/www/html, sur nginx on peut avoir /htdocs...
WORKDIR /app

# On installe Angular CLI dans le conteneur
RUN npm install -g @angular/cli

# Dépendances seulement
COPY package*.json ./
RUN npm install


EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0", "--poll=2000"]
