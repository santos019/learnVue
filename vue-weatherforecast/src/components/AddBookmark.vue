<template>
   <div class="bookmark-container">
        <div class="bookmark-whole-container">
            <select v-model="selectedRegion" @change="changeSelect">
                <option :value='0'>서울</option>
                <option :value='1'>부산</option>
                <option :value='2'>대구</option>
                <option :value='3'>인천</option>
                <option :value='4'>광주</option>
                <option :value='5'>대전</option>
                <option :value='6'>울산</option>
                <option :value='7'>세종</option>
                <option :value='8'>경기도</option>
                <option :value='9'>강원도</option>
                <option :value='10'>충청북도</option>
                <option :value='11'>충청남도</option>
                <option :value='12'> 전라북도</option>
                <option :value='13'>전라남도</option>
                <option :value='14'>경상북도</option>
                <option :value='15'>경상남도</option>
                <option :value='16'>제주도</option>
            </select>
            {{this.selectedRegion}}
        </div>
   </div>
</template>

<script>
export default {
    created () {
        this.selectedRegion = 0 
    },
    data () {
        return {
            selectedRegion:'',
        }
    },
    methods:{
        changeSelect(e) {
            this.selectedRegion = e.target.value;
            // this.$set(this.selectedRegion,'selectedRegion', e.target.value)
            console.log(this.selectedRegion)
        }
    },
}
</script>

<style>
.bookmark-container{
    width: 100%;
    border-radius: 15px 15px 15px 15px;
    background: darkcyan;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
}
.bookmark-whole-container{
    width: 100%;
    height: 150px;
    border-radius: 15px 15px 15px 15px;
    background: darkgoldenrod;
}
</style>