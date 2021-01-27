<template>
  <div class="home">
      <Header/>
      <b-container>
          <b-row>
              <b-col cm="6" >
                  <SneakersList/>
              </b-col>
          </b-row>
      </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import SneakersList from "@/components/SneakersList";

export default {
    name: 'home',
    components: {
        Header,
        SneakersList
    }
}
</script>
