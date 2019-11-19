---
title: Les paniers bio !
last_modified_at: 2019-11-18T14:16:10.453Z
overlay_image: assets/images/banniere-bulles.png
menu:
  footer:
    weight: 3
    title: Les paniers bio
  jardin:
    weight: 1

---
Tous les jeudis, les paniers marseillais proposent des produits bio en direct de chez les producteurs ; légumes, fruits, œufs, pain, jus, vin, huile, olives, fruits secs, vinaigre, viande, fromages, ...

# Nous trouver
La distribution se fait tout les jeudis (sauf exceptions, par exemple en période de vacances scolaires) de 16h45 à 19h sur le terrain du jardin, juste à droite.
# Distribution paniers bio
[Cagette.net]({{ site.data.extlinks.cagette }})

header
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

jardin
<ul>
{% for item in site.menus.jardin %}
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