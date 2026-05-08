<template>
  <main class="min-h-screen bg-slate-50 text-slate-900">
    <header class="bg-slate-950 text-white">
      <nav class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-bold">nieruchomości.pl</NuxtLink>
        <NuxtLink to="/" class="text-sm font-semibold">← Strona główna</NuxtLink>
      </nav>
    </header>

    <section class="max-w-4xl mx-auto px-6 py-16">
      <h1 class="text-4xl md:text-6xl font-bold">Skontaktuj się z nami</h1>

      <p class="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl">
        Masz pytania? Napisz do nas, chętnie pomożemy znaleźć idealną nieruchomość.
      </p>

      <form class="mt-10 bg-white rounded-3xl p-6 md:p-10 shadow-sm space-y-5">
        <input
          type="text"
          placeholder="Imię i nazwisko"
          class="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-amber-600"
        />

        <input
          type="email"
          placeholder="Email"
          class="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-amber-600"
        />

        <textarea
          placeholder="Wiadomość"
          rows="6"
          class="w-full border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-amber-600 resize-none"
        ></textarea>

        <button
          type="button"
          class="w-full bg-amber-600 text-white py-4 rounded-xl font-bold"
        >
          Wyślij wiadomość
        </button>
      </form>

      <div class="mt-10 bg-slate-950 text-white rounded-3xl p-8 space-y-4">
        <h2 class="text-2xl font-bold">Kontakt</h2>
        <p class="text-slate-300">Warszawa, Polska</p>
        <p class="text-slate-300">+48 600 123 456</p>
        <p class="text-slate-300">kontakt@nieruchomosci.pl</p>
      </div>
    </section>
  </main>
</template>