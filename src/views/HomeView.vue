<template>
  <div class="home">
    <img src="/src/assets/logo.png" alt="" width="15%" />
    <h1>Välkommen till Luceria</h1>
    <h2>
      Din partner för äkta employer branding som talar direkt till Gen Z. Här får du en snabb
      översikt av hur vi bygger förtroende med kortformat-­innehåll, matchar rätt talanger och
      stöttar unga kreatörer. Scrolla vidare för att se våra tjänster, case och hur du kan boka en
      workshop.
    </h2>

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
  align-items: center;
}
.home h1 {
  font-weight: var(--font-extrabold);
  text-align: center;
  font-size: var(--text-4xl);
  background: -webkit-linear-gradient(#eee, #757575);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 40px;
}
.home h2 {
  font-weight: var(--font-extrabold);
  text-align: center;
  font-size: var(--text-lg);
  padding: 0 40px 0 40px;
  color: var(--text-color);
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
