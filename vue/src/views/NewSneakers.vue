<template>
    <div class="home">
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <EditSneakers/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import EditSneakers from "@/components/EditSneakers";
    import Header from "@/components/Header";

    export default {
        name: "NewSneakers",
        components: {
            Header,
            EditSneakers
        }
    }
</script>

<style scoped>

</style>
