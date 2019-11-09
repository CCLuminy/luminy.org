---
title: Staff
---
Staff
=====

{% for author in site.authors %}
  [{{ author.display_name }}]({{ site.baseurl }}{{ author.url }})
  {{ author.position }}
  {{ author.content | markdownify }}

{% endfor %}
