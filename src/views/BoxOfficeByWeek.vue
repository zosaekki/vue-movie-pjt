<template>
    <div>
        <h1>BoxOfficeByWeek</h1>
        <div>
            <input type="date" v-model="selectedDate">
            <button @click="search">검색</button>
            <rank-table :list="list" />
        </div>
    </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable';

export default {
    components: {
        RankTable
    },
    data() {
        return {
            selectedDate: '',
            list: []
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        },
        async getData(targetDt) {
            const data = await this.getBoxOfficeByWeek(targetDt)
            this.list = data.boxOfficeResult.weeklyBoxOfficeList;
            // console.log(data);
        },
    },
    created() {
        const d = new Date();
        d.setDate(d.getDate() - 1);
        this.selectedDate = this.getOnlyDateStr(d);
    }
}
</script>