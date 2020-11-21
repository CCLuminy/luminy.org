---
layout: splash
title: Jardin Luminyen
has_header: true
header:
  type: overlay
  overlay_image: assets/images/banniere-jardin.jpg
  actions:
    - label: "<i class='fas fa-users'></i> Adhérez"
      url: "/l-asso/adherer/"
    - label: "<i class='fab fa-fw fa-facebook-square'></i> Suivez-nous"
      url: "https://www.facebook.com/jardinluminy/"
  show_text: description
description: >
  Le Jardin Luminyen a pour but de promouvoir l'agroécologie et la permaculture au plus grand nombre de personnes. Pour celà, nous gérons jardin universitaire de Luminy, qui se veut à terme être une modeste vitrine expérimentale de ce genre de pratiques. Tout le monde est le bienvenu !
feature_row:
  - image_path: assets/images/panier.png
    alt: "paniers"
    title: "Paniers bio"
    excerpt: "Paniers bio"
    url: "/activites/paniers/"
    btn_class: "btn--primary"
    btn_label: "Plus"
  - image_path: assets/images/authors-logo/logo-touk-transparent.png
    alt: ""
    title: "Toukouleur"
    excerpt: "jongle jongle jongle"
    url: "/activites/toukouleur/"
    btn_class: "btn--info"
    btn_label: "Plus"
  - image_path: assets/images/renard-touk.jpg
    alt: "renard"
    title: "Renard"
    excerpt: "des renards"
    url: "/activites/ateliers/"
    btn_class: "btn--warning"
    btn_label: "<i class='fas fa-music'></i> Infos"
---
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/lepuget/";
        });
      }
    });
  }
</script>

{% include feature_row %}

{% include formulaire-newsletter-jardin.html %}

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v5.0"></script>

<div class="fb-page" data-href="{{ data.extlinks.fb-jardin }}"
data-tabs="" data-width="" data-height="" data-small-header="false"
data-adapt-container-width="true" data-hide-cover="false"
data-show-facepile="false"><blockquote
cite="{{ data.extlinks.fb-jardin }}" class="fb-xfbml-parse-ignore"><a
href="{{ data.extlinks.fb-jardin }}">Jardin Luminyen</a></blockquote></div>

