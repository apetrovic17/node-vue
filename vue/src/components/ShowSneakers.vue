<template>

    <b-container fluid>
        <b-row>
            <b-col sm="2">
                <label for="naziv">Naziv:</label>
            </b-col>
            <b-col sm="10">
                <p id="naziv" style="text-align: left">{{ sneakers.naziv }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="model">Model:</label>
            </b-col>
            <b-col sm="10">
                <p id="model" style="text-align: left">{{ sneakers.model }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="opis">Opis:</label>
            </b-col>
            <b-col sm="10">
                <p id="opis" style="text-align: left">{{ sneakers.opis }}</p>
            </b-col>
        </b-row>

        <b-row>
            <b-col sm="2">
                <label for="velicina">Velicina:</label>
            </b-col>
            <b-col sm="10">
                <p id="velicina" style="text-align: left">{{ sneakers.velicina }}</p>
            </b-col>
        </b-row>

        <b-row class="mt-2">
            <b-col sm="2">
                <label for="pat">Cena:</label>
            </b-col>
            <b-col sm="10">
                <p id="pat" style="text-align: left">{{ sneakers.cena }}</p>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: "ShowSneakers",
        props: {
            sneakers: Object
        }
    }
</script>
