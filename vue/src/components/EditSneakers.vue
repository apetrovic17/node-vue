<template>
    <b-container fluid>
        <b-form>
            <b-row align-v="center">
                <b-col sm="2" >
                    <b-input v-model="newNaziv" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Naziv"></b-input>
                </b-col>

                <b-col sm="2" >
                    <b-input v-model="newModel" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Model"></b-input>
                </b-col>

                <b-col sm="2" >
                    <b-input v-model="newOpis" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Opis"></b-input>
                </b-col>

                <b-col sm="2" >
                    <b-input v-model="newVelicina" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Velicina"></b-input>
                </b-col>

                <b-col sm="2">
                    <b-input v-model="newCena" placeholder="Cena"></b-input>
                </b-col>
                <b-col sm="1">
                    <b-button variant="primary" size="lg" @click="addNew">Save</b-button>
                </b-col>
                <b-col v-if="this.$route.params.id" sm="1">
                    <b-button variant="danger" size="lg" @click="izbrisi">Delete</b-button>
                </b-col>
                <div v-if="errNaz" class="alert alert-danger" role="alert">
                    Mora da postoji naziv!
                </div>
                <div v-if="errMod" class="alert alert-danger" role="alert">
                    Mora da postoji model!
                </div>
                <div v-if="errOpis" class="alert alert-danger" role="alert">
                    Mora da postoji opis!
                </div>
                <div v-if="errVel" class="alert alert-danger" role="alert">
                    Mora da postoji velicina!
                </div>
                <div v-if="errCena" class="alert alert-danger" role="alert">
                    Mora da postoji cena!
                </div>

            </b-row>
        </b-form>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "EditSneakers",
        props: {
            naziv: {
                type: String,
                default: ''
            },
            model: {
                type: String,
                default: ''
            },
            opis: {
                type: String,
                default: ''
            },
            velicina: {
                type: Number,
                default: 0
            },
            cena: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                newNaziv: '',
                newModel: '',
                newOpis: '',
                newVelicina: 0,
                newCena: 0,
                errNaz: false,
                errMod: false,
                errOpis: false,
                errVel: false,
                errCena: false
            }
        },
        mounted: function () {
            this.newNaziv = this.naziv;
            this.newModel = this.model;
            this.newOpis = this.opis;
            this.newVelicina = this.velicina;
            this.newCena = this.cena;
        },
        methods: {
            ...mapActions(['new_sneakers', 'change_sneakers','delete_sneakers']),

            addNew: function() {

              if(!this.newNaziv){
                this.errNaz=true;
              }

              if(!this.newModel){
                this.errMod=true;
              }

              if(!this.newOpis){
                this.errOpis=true;
              }
              if(!this.newVelicina){
                this.errVel=true;
              }

              if(!this.newCena){
                this.errCena=true;
              }

                const pat = JSON.stringify({naziv: this.newNaziv, model: this.newModel, opis: this.newOpis, velicina: this.newVelicina, cena: this.newCena});

                if (!this.$route.params.id)
                    this.new_sneakers(pat);
                else
                    this.change_sneakers({id: this.$route.params.id, pat: pat});

                this.newNaziv = '';
                this.newModel = '';
                this.newOpis = '';
                this.newVelicina = 0;
                this.newCena = 0;
                this.$route.push("/home");
                //alert("Uspesno dodato");

            },

            izbrisi: function(){
                this.delete_sneakers(this.$route.params.id);
            }
        }
    }
</script>

<style scoped>

</style>
