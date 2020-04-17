<template>
  <div class="q-pa-md row items-start q-gutter-md">

    <q-card class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Kutaisi</div>
            <div class="text-subtitle2">Kutaisi's Central Tower</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-card-section>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX1</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX2</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX3</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
      </q-card-section>

<!--      <q-card-actions vertical>-->
<!--        <q-btn flat>Action 1</q-btn>-->
<!--        <q-btn flat>Action 2</q-btn>-->
<!--      </q-card-actions>-->

      <q-separator />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Kutaisi</div>
            <div class="text-subtitle2">Kutaisi's Central Tower</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-card-section>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX1</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX2</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX3</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
      </q-card-section>

      <!--      <q-card-actions vertical>-->
      <!--        <q-btn flat>Action 1</q-btn>-->
      <!--        <q-btn flat>Action 2</q-btn>-->
      <!--      </q-card-actions>-->

      <q-separator />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>

    <div>
    <q-card class="my-card">
      <q-card-section>
        <div class="row items-center no-wrap">
          <div class="col">
            <div class="text-h6">Kutaisi</div>
            <div class="text-subtitle2">Kutaisi's Central Tower</div>
          </div>

          <div class="col-auto">
            <q-btn color="grey-7" round flat icon="more_vert">
              <q-menu cover auto-close>
                <q-list>
                  <q-item clickable>
                    <q-item-section>Remove Card</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Send Feedback</q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section>Share</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-card-section>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX1</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX2</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
        <div class="row items-center">
          <div class="col-6">Kutaisi</div>
          <div class="col-3">MUX3</div>
          <div class="col-3">
            <q-toggle v-model="value" color="green"/>
          </div>
        </div>
      </q-card-section>

      <!--      <q-card-actions vertical>-->
      <!--        <q-btn flat>Action 1</q-btn>-->
      <!--        <q-btn flat>Action 2</q-btn>-->
      <!--      </q-card-actions>-->

<!--      <q-separator />-->

      <q-card-actions>
        <q-btn v-on:click="sendMessage('test')" flat>Action Test</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    </div>



  </div>
</template>

<script>
    export default {
        name: "Optic.vue",
        data () {
            return {
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmoda alud t.',
                value: true,
                // socket: {}
            }
        },

        methods: {
            sendMessage(data){
                return this.$socket.emit('notice', data)
            }
        }
    }
</script>



<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 350px
</style>
