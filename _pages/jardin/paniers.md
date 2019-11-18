---
title: Les paniers bio !
overlay_image: assets/images/banniere-bulles.png
menus: jardin
---

Tous les jeudis, les paniers marseillais proposent des produits bio en direct de chez les producteurs ; légumes, fruits, œufs, pain, jus, vin, huile, olives, fruits secs, vinaigre, viande, fromages, ...

# Distribution paniers bio
[Cagette.net]({{ site.data.extlinks.cagette }})

icoucou
<ul>
{% for item in site.menus.header %}
  <li class="menu-item-{{ loop.index }}">
    <a href="{{ item.url }}" title="Go to {{ item.title }}">{{ item.title }}</a>
    {% if item.children %}
      <ul class="sub-menu">
      {% for item in item.children %}
  {{ item.identifier | inspect }}
        <li class="menu-item-{{ loop.index }}">
          <a href="{{ item.url }}" title="Go to {{ item.title }}">{{ item.title }}</a>
        </li>
      {% endfor %}
      </ul>
    {% endif %}
  </li>
{% endfor %}
</ul>
