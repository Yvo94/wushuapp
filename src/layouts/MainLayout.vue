<template>
  <q-layout view="lHh Lpr lFf">
<!--
    <q-img
      src="background.jpg"
      class="fit absolute"
    />
  -->
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Logiciel d'arbitrage technique WUSHU
        </q-toolbar-title>

        <div>Wushu App v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Menu
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

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
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Accueil',
    caption: '',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Gérer une compétion',
    caption: 'Administration / configuration',
    icon: 'school',
    link: 'administration'
  },
  {
    title: 'Arbitrer une compétion',
    caption: 'Juge / Chronométreur / Ecran',
    icon: 'record_voice_over',
    link: 'arbitrage'
  },
  {
    title: 'A propos de nous',
    caption: 'Qui sommes-nous?',
    icon: 'chat',
    link: '/apropos'
  },
  {
    title: 'Dons',
    caption: 'Soutenir l\'AMI à travers un don',
    icon: 'code',
    link: '/dons'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
