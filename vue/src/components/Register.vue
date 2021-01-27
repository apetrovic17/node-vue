<template>
    <b-container fluid>
        <b-form>
            <b-row align-v="center">
                <b-col sm="2" >
                    <b-input v-model="newIme" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Ime"></b-input>
                </b-col>

                <b-col sm="2" >
                    <b-input v-model="newUsername" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username"></b-input>
                </b-col>

                <b-col sm="2" >
                    <b-input v-model="newSifra" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Sifra"></b-input>
                </b-col>

                <b-col sm="1">
                    <b-button variant="primary" size="lg" @click="addNew">Registruj</b-button>
                </b-col>


                <div v-if="errIme" class="alert alert-danger" role="alert">
                    Mora da postoji Ime!
                </div>
                <div v-if="errUsername" class="alert alert-danger" role="alert">
                    Mora da postoji Username!
                </div>
                <div v-if="errSifra" class="alert alert-danger" role="alert">
                    Mora da postoji Sifra!
                </div>



            </b-row>
        </b-form>
    </b-container>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "Register",
        props: {
            Ime: {
                type: String,
                default: ''
            },
            Username: {
                type: String,
                default: ''
            },
            Sifra: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                newIme: '',
                newUsername: '',
                newSifra: '',
                errIme: false,
                errUsername: false,
                errSifra: false
            }
        },
        mounted: function () {
            this.newIme = this.Ime;
            this.newUsername = this.Username;
            this.newSifra = this.Sifra;
        },
        methods: {
            ...mapActions(['new_korisnik']),

            addNew: function() {

              alert('PROBAAAAA');

              if(!this.newIme){
                this.errIme=true;
              }

              if(!this.newUsername){
                this.errUsername=true;
              }

              if(!this.newSifra){
                this.errSifra=true;
              }


                const pat = JSON.stringify({Ime: this.newIme, Username: this.newUsername, Sifra: this.newSifra});

                this.new_korisnik(pat);

                this.newIme = '';
                this.newUsername = '';
                this.newSifra = '';
                this.$route.push("/home");
                //alert("Uspesno dodato");

            },


        }
    }
</script>

<style scoped>

</style>
