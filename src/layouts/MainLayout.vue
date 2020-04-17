<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-dark">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Stereo App
        </q-toolbar-title>

        <div>Stereo Portal v{{ $q.version }}</div>
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
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>

      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          icon="add"
          direction="up"
          color="primary"
        >
          <q-fab-action  color="primary" icon="person_add" />
          <q-fab-action  color="primary" icon="mail" />
        </q-fab>
      </q-page-sticky>

    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Dashboard',
          caption: 'Indicators and Levels',
          icon: 'dashboard',
          link: '#/'
        },
        {
          title: 'Optic Control',
          caption: 'Optic network controller',
          icon: 'device_hub',
          link: '#/optic'
        },
        {
          title: 'Transcoder',
          caption: 'Transcoder management',
          icon: 'settings_input_component',
          link: '#/transcoder'
        },
        {
          title: 'Settings',
          caption: 'System global settings',
          icon: 'settings',
          link: '#/settings'
        },
      ]
    }
  }
}
</script>
