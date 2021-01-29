<template>

  <div id="app">
    <div id="nav">
      <router-link to="/">Buzz</router-link> |
      <router-link to="/edit">New Sneakers</router-link> |
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/show">Cart</router-link>
    </div>
    <router-view/>
  </div>

</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: "App",
        methods: {
            ...mapActions(['load_sneakers'])
        },
        mounted: function() {
            this.load_sneakers();
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
