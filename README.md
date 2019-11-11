# [`Luminy.org`](https://test.luminy.org)
Ce dépot contient les sources du site [`luminy.org`](https://test.luminy.org)
géré par le Centre Culturel de Luminy.

# Contribuez !

## Aidez-nous à tenir à jour luminy.org

Si vous voyez une coquille, ou que vous avez envie de créer ou de modifier des
pages sur le site, c'est possible !

## Comment ?

- Par mail :
  [centre-culturel@luminy.org](mailto:centre-culturel@luminy.org)
- [En vrai](https://test.luminy.org/contacts/#en-vrai)
- Ici, via [pull requests](https://github.com/perelo/CCL-site/pulls)


# Fonctionnement du site, pour les plus motivés
[![Netlify Status](https://api.netlify.com/api/v1/badges/2d1ae5b1-d8bf-444a-8a73-39fe71dd4207/deploy-status)](https://app.netlify.com/sites/friendly-lovelace-c98437/deploys)

`luminy.org` est un site statique, c'est à dire qu'il n'y a pas d'intéraction
complexe avec le client.
- Le contenu est écrit en [`markdown`](https://commonmark.org/help/)
- puis les fichiers html,css,etc. sont générés par [Jekyll](https://jekyllrb.com/) 
- avec le thème [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) simplifié
- le tout hébergé par [Netlify](https://netlify.com) par son CDN
- et [Github](https://github.com/) pour le versioning
- et enfin, rendu accessible par DNS via [Gandi.net](https://www.gandi.net/fr)

Autrement dit,
- nous possédons le nom de domaine `luminy.org` depuis 2002
- il n'y a pas de serveur dédié
- pas de bases de données.
- À chaque modification, il faut redéployer le site.

Pour plus d'infos sur le fonctionnement : [webmasters@luminy.org](mailto:webmasters@luminy.org)

## Pour tester localement

- [Installer ruby](https://jekyllrb.com/docs/installation/)

- Installer les gemmes `jekyll` et `bundler`
  ```
  gem install jekyll bundler
  ```

- Cloner le dépot
  ```
  git clone https://github.com/perelo/CCL-site.git
  cd CCL-site
  ```

- Installer les dépendances et prier
  ```
  bundle install
  ```

- Prier encore en compilant et en démarrant le serveur local
  ```
  jekyll serve
  ```

- [Tester](http://localhost:4000/)

