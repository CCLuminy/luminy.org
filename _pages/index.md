---
layout: splash
title: Accueil
has_header: true
header:
  type: image
  overlay_image: assets/images/puget-fleuri.png
  fixed_image: "/assets/images/banniere-puget-orange.jpg"
description: 'Le CCL porte de nombreuses initiatives et se propose d''aider à en monter
  de nouvelles ! Son but : remettre les notions de créativité, de connaissance, de
  collectivité, de partage et d''entraide au coeur de la vie de notre campus universitaire
  en proposant à toutes les bonnes volontés de participer à construire leur lieu d''étude,
  de travail ou encore de vie.

'
last_modified_at: 2019-12-01 00:00:00 +0100

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


<style type="text/css" media="screen">
/* Add style rules here */
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card {
  margin: 30px auto;
  width: 300px;
  height: 300px;
  border-radius: 40px;
  box-shadow: 5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22);
  cursor: pointer;
  transition: 0.4s;
}

.card .card_image {
  width: inherit;
  height: inherit;
  border-radius: 40px;
}

.card .card_image img {
  width: inherit;
  height: inherit;
  border-radius: 40px;
  object-fit: cover;
}

.card .card_title {
  text-align: center;
  border-radius: 0px 0px 40px 40px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: -80px;
  height: 40px;
}

.card:hover {
  transform: scale(0.9, 0.9);
  box-shadow: 5px 5px 30px 15px rgba(0,0,0,0.25), 
    -5px -5px 30px 15px rgba(0,0,0,0.22);
}

.title-white {
  color: white;
}

.title-black {
  color: black;
}

@media all and (max-width: 500px) {
  .card-list {
    /* On small screens, we are no longer using row direction but column */
    flex-direction: column;
  }
}
</style>

<div class="cards-list">

<a href="luminy.org">
  <div class="card">
    <div class="card_image"><img src="assets/images/authors-logo/logo-ccl-nb.png" /></div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/logo-jardin.png" />
    </div>
    <div class="card_title title-black">
      <p>Jardin Universitaire</p>
    </div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/logo-club-sciences.jpeg" />
    </div>
    <div class="card_title title-white">
      <p>Club de Science</p>
    </div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/allie.png" />
    </div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/fse-transparent.png" />
    </div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/logo-com.png" />
    </div>
  </div>
</a>

<a href="">
  <div class="card">
    <div class="card_image">
      <img src="assets/images/authors-logo/cafe-des-langues.png" />
    </div>
  </div>
</a>

</div>
