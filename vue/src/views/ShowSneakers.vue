<template>
    <div>
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div>
                        <ShowSneakers v-if="sneakers.length" :sneakers="sneakers"/>
                    </div>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>

    import Header from "@/components/Header";
    import ShowSneakers from "@/components/ShowSneakers";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "Sneakers",
        components: {
            Header,
            ShowSneakers
        },
        data() {
            return {
                edit: false
            }
        },
        computed: {
            ...mapState(['sneakers']),

            message: function () {
                for (let i = 0; i < this.sneakers.length; i++)
                    if (this.sneakers[i].id === parseInt(this.$route.params.id))
                        return this.sneakers[i];
            }
        },
        methods: {
            ...mapActions(['load_sneakers']),

            
        }
    }
</script>

<style scoped>

</style>
