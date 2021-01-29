<template>

    <b-container fluid>
      <div  v-for="sneaker in sneakers" :key="sneaker.id">
        <b-row>
            <b-col sm="2">
                <label for="naziv">Naziv:{{ sneaker.naziv }}</label>
            </b-col>

        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="model">Model:</label>
            </b-col>
            <b-col sm="10">
                <p id="model" style="text-align: left">{{ sneaker.model }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="opis">Opis:</label>
            </b-col>
            <b-col sm="10">
                <p id="opis" style="text-align: left">{{ sneaker.opis }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="velicina">Velicina:</label>
            </b-col>
            <b-col sm="10">
                <p id="velicina" style="text-align: left">{{ sneaker.velicina }}</p>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col sm="2">
                <label for="pat">Cena:</label>
            </b-col>
            <b-col sm="10">
                <p id="pat" style="text-align: left">{{ sneaker.cena }}</p>
            </b-col>
        </b-row>
        <b-col sm="1">
            <b-button variant="primary" size="lg" @click="kupiPat(sneaker.id)">Kupi</b-button>
        </b-col>

      </div>


    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: "ShowSneak",
        props: {
            sneakers: Object
        },
        data:{
          checkedNames: []
        },
        methods: {
          ...mapActions(['kupi']),

            kupiPat: function(id){

              const ids = JSON.stringify({idPatike: id});

              this.kupi(ids);


            }
      }
    }
</script>
