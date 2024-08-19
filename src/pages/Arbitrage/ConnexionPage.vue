<template>
  <q-page class="flex flex-center">
    <q-img
      src="Arbitrage_background2.jpg"
      class="fit absolute"
    />
    <div class="q-pa-md" style="max-width: 700px">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          style="width: 300px;"
          color="blue"
          bg-color="white"
          filled
          v-model="competitionid"
          label="Competition ID *"
          hint="Identifiant de la compétition"
          lazy-rules
          >
          <template v-slot:prepend>
            <q-icon name="event" color="primary"/>
          </template>
        </q-input>

        <q-input
          color="blue"
          bg-color="white"
          filled
          v-model="comp_password"
          label="Code d'accès *"
          lazy-rules
        >
          <template v-slot:prepend>
              <q-icon name="key" color="primary"/>
            </template>
        </q-input>

        <q-select
          filled
          bg-color="white"
          v-model="model"
          :options="options"
          label="Rôle"
          color="primary"
          >
        <template v-slot:selected-item="scope">
          <q-chip
            removable
            dense
            @remove="scope.removeAtIndex(scope.index)"
            :tabindex="scope.tabindex"
            color="white"
            text-color="primary"
            class="q-ma-none"
          >
            <q-avatar color="primary" text-color="white" :icon="scope.opt.icon" />
            {{ scope.opt.label }}
          </q-chip>
        </template>
      </q-select>

        <div class="">
          <q-btn label="Connexion" type="submit" color="primary" to="arbitrage/chrono" />
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        {
          label: 'Juge A',
          value: 'JugeA',
          icon: 'gavel'
        },
        {
          label: 'Juge B',
          value: 'JugeB',
          icon: 'gavel'
        },
        {
          label: 'Juge C',
          value: 'JugeC',
          icon: 'gavel'
        },
        {
          label: 'Ecran',
          value: 'Ecran',
          icon: 'tv'
        },
        {
          label: 'Chronométeur',
          value: 'Chrono',
          icon: 'timer'
        }
      ],
      competitionid: ref(''),
      comp_password: ref('')
    }
  }
}
</script>
