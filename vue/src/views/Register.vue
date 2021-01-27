<template>
    <div class="home">
        <Header/>
        <b-container>
            <b-row>
                <b-col cm="6" >
                    <Register/>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import Register from "@/components/Register";
    import Header from "@/components/Header";

    export default {
        name: "NewRegister",
        components: {
            Header,
            Register
        }
    }
</script>

<style scoped>

</style>
