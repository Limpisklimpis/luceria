<template>
  <div class="home">
    <h1>Luceria</h1>
    <h2>Vi hjälper företag att sticka ut som arbetsgivare med kreativ, autentisk och strategisk contentproduktion – anpassad för sociala medier och dagens talanger.</h2>

   <!-- 
    <div class="read-more">
      <h2 class="read-more-title">Framtidens talanger väntar inte - vi hjälper dig nå dem idag.</h2>
      <RouterLink to="/about" class="btn-outlined">Läs mer</RouterLink>
    </div>
      -->
  </div>
</template>

<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
}
.home h1 {
  font-weight: var(--font-extrabold);
  text-align: center;
  font-size: var(--text-6xl);
  background: -webkit-linear-gradient(#eee, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-bottom: 40px;
}
.home h2 {
  font-weight: var(--font-extrabold);
  text-align: center;
  font-size: var(--text-lg);

}

.read-more {
  width: 100%;
  height: 50%;
  background-image: url('/src/assets/bg_dark.JPG');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.read-more h2 {
  color: var(--text-color);
  font-weight: var(--font-bold);
  font-size: var(--text-3xl);
}
</style>
