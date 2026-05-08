<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <header class="bg-white border-b border-slate-200">
      <nav class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold">nieruchomości.pl</NuxtLink>

        <div class="hidden md:flex items-center gap-10 text-sm font-medium">
          <NuxtLink to="/" class="text-amber-600">Strona główna</NuxtLink>
          <a href="#oferty">Oferty</a>
          <a href="#onas">O nas</a>
          <NuxtLink to="/contact">Kontakt</NuxtLink>
        </div>

        <a
          href="tel:+48600123456"
          class="hidden md:inline-flex bg-slate-950 text-white px-5 py-3 rounded-xl text-sm font-semibold"
        >
          Zadzwoń
        </a>

        <NuxtLink to="/contact" class="md:hidden text-2xl">☰</NuxtLink>
      </nav>
    </header>

    <section class="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Znajdź swoje<br />
          wymarzone<br />
          <span class="text-amber-600">miejsce</span>
        </h1>

        <p class="mt-8 text-lg md:text-2xl text-slate-700 max-w-xl">
          Nowoczesne nieruchomości w najlepszych lokalizacjach.
          Sprawdź nasze oferty i znajdź idealny dom dla siebie.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-5">
          <a
            href="#oferty"
            class="bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold text-center"
          >
            Przeglądaj oferty
          </a>

          <NuxtLink
            to="/contact"
            class="text-amber-600 px-8 py-4 font-bold text-center"
          >
            Skontaktuj się →
          </NuxtLink>
        </div>
      </div>

      <div class="bg-slate-200 rounded-[32px] p-8 min-h-[380px] flex items-center justify-center">
        <div class="bg-white rounded-3xl w-full h-72 p-8 shadow-sm">
          <div class="grid grid-cols-2 gap-6 h-full">
            <div class="bg-slate-400 rounded-2xl"></div>
            <div class="space-y-6">
              <div class="bg-slate-600 rounded-2xl h-28"></div>
              <div class="bg-slate-300 rounded-2xl h-24"></div>
            </div>
          </div>
          <p class="mt-5 text-center text-slate-600">wizualizacja nieruchomości</p>
        </div>
      </div>
    </section>

    <section id="oferty" class="max-w-7xl mx-auto px-6 pb-20">
      <h2 class="text-3xl md:text-4xl font-bold mb-10">Polecane nieruchomości</h2>

      <div class="grid md:grid-cols-3 gap-8">
        <article
          v-for="property in properties"
          :key="property.title"
          class="bg-white rounded-3xl overflow-hidden shadow-sm"
        >
          <div class="h-36 bg-slate-300"></div>
          <div class="p-6">
            <h3 class="text-xl font-bold">{{ property.title }}</h3>
            <p class="mt-3 text-slate-500">{{ property.location }}</p>
            <p class="mt-4 text-xl font-bold text-amber-600">{{ property.price }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const properties = [
  {
    title: 'Luksusowa willa',
    location: 'Warszawa, Wilanów',
    price: '2 950 000 zł',
  },
  {
    title: 'Nowoczesny apartament',
    location: 'Kraków, Zabłocie',
    price: '1 250 000 zł',
  },
  {
    title: 'Dom jednorodzinny',
    location: 'Gdańsk, Osowa',
    price: '1 890 000 zł',
  },
]
</script>