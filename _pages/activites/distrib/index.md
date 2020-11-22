---
layout: single
title: Distributions de pain
---


<button class="collapsible"
        id="form-distrib">cacher/voir</button>
<div class="content"
     id="form-distribdata" markdown="1"
     style="display: block">
{% include forms/distrib.html %}
</div>


<button class="collapsible"
        id="form-distrib-telephone">formulaire téléphone uniquement</button>
<div class="content"
     id="form-distrib-telephonedata" markdown="1"
     style="display: none">
{% include forms/distrib-telephone.html %}
</div>

{%- include collapse.html -%}
