<template>
    <div>
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <div v-if="edit">
                        <EditSneakers :naziv="sneakers.naziv" :cena="sneakers.cena"/>
                    </div>
                    <div v-else>
                        <ShowSneakers v-if="sneakers.length" :sneakers="sneakers"/>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cm="2" style="margin-top: 10px">
                    <b-button variant="primary" size="lg" @click="toggleEdit" v-html="edit ? 'Cancel' : 'Edit'"/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditSneakers from "@/components/EditSneakers";
    import Header from "@/components/Header";
    import ShowSneakers from "@/components/ShowSneakers";
    import { mapState, mapActions } from 'vuex';

    export default {
        name: "Sneakers",
        components: {
            Header,
            EditSneakers,
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

            toggleEdit: function () {
                this.edit = !this.edit
            }
        }
    }
</script>

<style scoped>

</style>
