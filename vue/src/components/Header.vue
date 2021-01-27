<template>
    <!--<div>
        <b-jumbotron header="Buzz sneakers" :lead="'Num sneakers: ' + sneakers.length">
        </b-jumbotron>
    </div> -->

    <div>
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
    <template #header>Buzz sneakers</template>

    <div id="app">
        <img :src="require('@/assets/buzz.png')"/>
    </div>

    <template #lead>
      Find your perfect shoes and clothing at BUZZ! ✓ Newest trends ✓ Lots of brands
    </template>


  </b-jumbotron>
</div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: "Header",
        computed: {
            ...mapState(['sneakers'])
        }
    }
</script>

<style scoped>

</style>
