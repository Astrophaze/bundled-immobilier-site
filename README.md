# Récupérer le projet 

Premièrement, placez vous dans votre répertoire projet et effectuez la commande suivante : 

```
git clone https://github.com/Astrophaze/bundled-immobilier-site.git
```

Ensuite, se rendre dans le dossier qui a été créé : 

```
cd bundled-immobilier-site
```

## Initialiser la partie Angular

Dans ce dossier, se rendre dans la partie Angular : 

```
cd site-immobilier
```

et effectuer la commande 

```
npm install
```

## Initialiser la partie PHP / API

Se rendre dans le dossier /api/public avec la commande suivante : 

```
cd ../api/public
```

Puis faire les installations de composer 

```
composer install
```

Enfin on remonte dans le dossier principal avec 

```
cd ../../
```

Et on fait 

```
code .
```

Pour l'ouvrir dans VSCode. 
Ici, on va enfin créer un fichier .env dans le dossier /api (pas dans PUBLIC) et y mettre ce contenu : 
```
DB_HOST=db
DB_USER=api_immobilier_user
DB_PASS=root
DB_NAME=api_immobilier

SMTP_HOST=mailpit
SMTP_PORT=1025
SMTP_AUTH=false
SMTP_USER=
SMTP_PASS=
SMTP_SECURE=

JWT_SECRET=Mettez un token sécurisé ici

```

Ça y est, vous pouvez maintenant exécuter la commande

```
docker compose up --build 
```

Dans le dossier bundled-immobilier-site 