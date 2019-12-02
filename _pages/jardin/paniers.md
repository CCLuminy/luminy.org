---
title: Les paniers bio !
last_modified_at: 2019-11-18 14:16:00
has_header: true
header:
  type: default
author: marin
share: false
---

Tous les jeudis, les paniers marseillais proposent des produits bio en direct de chez les producteurs ; l&eacute;gumes, fruits, œufs, pain, jus, vin, huile, olives, fruits secs, vinaigre, viande, fromages, …

# Nous trouver

La distribution se fait tout les jeudis (sauf exceptions, par exemple en p&eacute;riode de vacances scolaires) de 16h45 &agrave; 19h sur le terrain du jardin, juste &agrave; droite. \# Distribution paniers bio [Cagette.net]({{ site.data.extlinks.cagette }})

header

plop

* {% for item in site.menus.header %}
* [{{ item.title }}]({{ item.url }} "Go to {{ item.title }}") {% if item.children %}
  * {% for item in item.children %} {{ item.identifier | inspect }}
  * [{{ item.title }}]({{ item.url }} "Go to {{ item.title }}"){: .menu-item-{{ loop.index }}}
  * {% endfor %}
  {: .sub-menu} {% endif %}{: .menu-item-{{ loop.index }}}
* {% endfor %}

jardin

* {% for item in site.menus.jardin %}
* [{{ item.title }}]({{ item.url }} "Go to {{ item.title }}") {% if item.children %}
  * {% for item in item.children %} {{ item.identifier | inspect }}
  * [{{ item.title }}]({{ item.url }} "Go to {{ item.title }}"){: .menu-item-{{ loop.index }}}
  * {% endfor %}
  {: .sub-menu} {% endif %}{: .menu-item-{{ loop.index }}}
* {% endfor %}