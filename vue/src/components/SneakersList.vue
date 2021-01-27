<template>
    <div>
        <b-table
                hover v-if="sneakers.length"
                sticky-header="800px"
                :items="sneakers"
                :fields="fields"
                head-variant="light"
                @row-clicked="EditSneakers">

        </b-table>
        <h1 v-else>No Sneakers</h1>
    </div>
</template>

<script>
    import router from "@/router";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "SneakersList",
        computed: {
            ...mapState(['sneakers'])
        },
        data() {
            return {
                fields: [
                    { key: 'naziv' },
                    { key: 'model' },
                    { key: 'opis' },
                    { key: 'velicina' },
                    { key: 'cena' }
                ]
            }
        },
        methods: {
            ...mapActions(['delete_sneakers']),

            EditSneakers: function (item, index, event) {
                router.push({path: `/edit/${item.id}`})
            }
        }
    }
</script>

<style>
    tr:hover td{
        background: lightblue;
    }
</style>
