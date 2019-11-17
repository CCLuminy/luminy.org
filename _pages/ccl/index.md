---
title: Le CCL
no_title: true
header:
  image: assets/images/banniere-ccl-intime.png
---

## Le CCL, c'est nous ! C'est vous ! C'est tous ceux qui ont envie de faire, de partager et de proposer pour que bouge ce campus !

Passez nous voir !

On a un local dans l'hexagone, on y est souvent entre midi et 2.

On est tous les jeudis soirs (sauf exceptions) à la cafèt' pour [les
jeudis du CCL](/activites/jeudis/) de 19h à 23h !

Ou bien apprenez à nous connaitre en surfant et découvrez nos activités
- [activités](/activites/){: .btn .btn--inverse}
- [<i class='fab fa-fw fa-facebook-square'></i> CCLuminy][facebook]{: .btn .btn--inverse}
- [<i class='fas fa-fw fa-calendar-alt'></i> Agenda][agenda]{: .btn .btn--inverse}

[agenda]: /agenda/
[facebook]: {{ site.data.extlinks.fb-ccl }}

[Voir le plan de Luminy](/assets/images/plan-luminy-ccl.png)

{% include_relative l-asso/devenir-benevole.md %}

## En savoir plus
{% assign section_pages = site.pages | where: 'section', 'ccl' %}
{% for page in section_pages %}
  [{{ page.title }}]({{ page.url }})
{% endfor %}
