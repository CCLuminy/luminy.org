---
title: Staff
---
Staff
=====

{% for author in site.authors %}
  [{{ author.name }}]({{ site.baseurl }}{{ author.url }})
  {{ author.position }}
  {{ author.content | markdownify }}

{% endfor %}
