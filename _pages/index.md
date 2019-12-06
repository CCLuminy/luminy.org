---
layout: splash
title: Centre Culturel de Luminy
has_header: true
overlay_image: assets/images/puget-fleuri.png
header:
  type: default
  overlay_image: assets/images/banniere-ccl-intime.png
  actions:
    - label: "<i class='fas fa-users'></i> Adhérez"
      url: "/ccl/adherer/"
    - label: "<i class='fab fa-fw fa-facebook-square'></i> Suivez-nous"
      url: "https://www.facebook.com/CCLuminy/"
    - label: "<i class='fas fa-fw fa-calendar-alt'></i> Agenda"
      url: "/agenda/"
  show_overlay_excerpt: true
description: >
  Le CCL porte de nombreuses initiatives et se propose d'aider à en monter de nouvelles ! Son but : remettre les notions de créativité, de connaissance, de collectivité, de partage et d'entraide au coeur de la vie de notre campus universitaire en proposant à toutes les bonnes volontés de participer à construire leur lieu d'étude, de travail ou encore de vie.
feature_row:
  - image_path: assets/images/panier.png
    alt: "paniers"
    title: "Des paniers bio"
    excerpt: "Livrés chaque jeudi, des légumes d'Arles à commander! Contrats de
    solidarité avec en producteur."
    url: "/jardin/paniers/"
    btn_class: "btn--primary"
    btn_label: "Plus"
  - image_path: assets/images/logo-jardin-grand.png
    alt: "jardin"
    title: "Jardin"
    excerpt: "Découvrez le jardin! Projet lancé par le CCL en 2014, désormais indépendant"
    url: "/jardin/"
    btn_class: "btn--info"
    btn_label: "Plus"
  - image_path: assets/images/theatre-rouge.jpg
    alt: "ateliers"
    title: "Ateliers"
    excerpt: "Des ateliers à gogo"
    url: "/ccl/activites/ateliers/"
    btn_class: "btn--warning"
    btn_label: "Plus"
---
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>

{% include feature_row %}

<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v5.0"></script>

<div class="fb-page" data-href="https://www.facebook.com/CCLuminy/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/CCLuminy/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/CCLuminy/">Centre Culturel de Luminy - CCL</a></blockquote></div>

