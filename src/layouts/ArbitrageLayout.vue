<template>
  <q-layout view="lHh Lpr lFf">
<!--
    <q-img
      src="Arbitrage_background2.jpg"
      class="fit absolute"
    />
-->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Arbitrer une compétion
        </q-toolbar-title>

        <div>Wushu App v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title>Association Mante Ivoirienne - Version 2024</q-toolbar-title>
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script setup>

defineOptions({
  name: 'ArbitrageLayout'
})

</script>
