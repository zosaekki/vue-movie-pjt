<template>
    <tr>
        <td>{{ item.rank }}</td>
        <td>{{ item.movieNm }}</td>
        <td>{{ item.openDt }}</td>
        <td>{{ audiAccComma }}</td>
        <td>{{ salesAccComma }}</td>
    </tr>
</template>

<script>
export default {
    props: {
        item: Object
    },
    computed: {
        audiAccComma() {
            return this.numberComma(this.item.audiAcc);
        },
        salesAccComma() {
            return this.numberComma(this.item.salesAcc);
        }
        
    },
    methods: {
        numberComma(num) {
            return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

<style>
</style>