---
title: Blog
---
Latest Posts
============

{% for post in site.posts %}
 - [{{ post.title }}]({{ post.url }})
     {{ post.excerpt }}
  {% endfor %}
