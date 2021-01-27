<template>



    <div>
  <b-jumbotron bg-variant="info"  text-variant="white" border-variant="dark" >
    <template #header>Buzz sneakers</template>

    <div id="app">
        <img :src="require('@/assets/buzz.png')"/>
    </div>

    <template #lead>
      Find your perfect shoes and clothing at BUZZ! ✓ Newest trends ✓ Lots of brands
      
      Korisnik: {{korisnik.Ime}}
    </template>


  </b-jumbotron>
</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Header",
        computed: {
            ...mapState(['sneakers','korisnik'])
        }
    }
</script>

<style scoped>

</style>
