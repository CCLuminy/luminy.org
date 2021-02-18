---
layout: home
title: Club de Science Luminy
has_header: true
header:
  type: overlay
  overlay_image: assets/images/banniere-club-science.png
  actions:
    - label: "<i class='fa fa-facebook'></i> Suivez-nous"
      url: "https://www.facebook.com/Club-de-Science-Luminy-114357542612098/"
  show_text: description
description: >
  Organisation de conférences, de cours d'histoire et de philosophie des
  sciences, du tutorat, ...
feature_row:
  - image_path: assets/images/distrib-pain-flou.jpg
    alt: "distributions pain"
    title: "Distributions de Pain"
    excerpt: "Distributions de Pain"
    url: "/activites/distrib/"
    btn_class: "btn--primary"
    btn_label: "Plus"
  - image_path: assets/images/illustrations/rock-n-roll.png
    alt: "danse"
    title: "Danse"
    excerpt: "Atelier danse"
    url: "/activites/danse/"
    btn_class: "btn--primary"
    btn_label: "Plus"
  - image_path: assets/images/illustrations/jongle-transparent.png
    alt: "jongle"
    title: "Arts du Cirque"
    excerpt: "jongle jongle jongle"
    url: "/activites/jongle/"
    btn_class: "btn--warning"
    btn_label: "<i class='fas fa-music'></i> Infos"
---

<div class="page__related">
  <h4 class="page__related-title">{{ site.data.ui-text[site.locale].related_label | default: "You May Also Enjoy" }}</h4>
  <div class="grid__wrapper">
    {% for post in site.posts limit:4 %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</div>

{% include feature_row %}

{% include category-list.html %}
