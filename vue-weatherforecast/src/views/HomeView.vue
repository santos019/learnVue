<template>
  <div class="home-container">
      <div class="home-weather-container" v-for="(datas, index) in userData" :key="index">
        <div class="home-weather-text" @click="clickAdd" :class="{'home-weather-text-click': add === true}" style="homeWeatherTextStyle"><i class="fa-solid fa-star"></i> {{datas.title}}
        </div>
        <div v-if="index === 0" class="home-add-text" @click="clickAdd" :class="{'home-add-text-click': add === true}"><i class="fa-solid fa-plus"></i> 추가하기
        </div>
        <div v-show="!add || index!==0">
            <ContentsSlider></ContentsSlider>
        </div>
        <div v-if="index === 0" v-show="add">
            <AddBookmark></AddBookmark>
        </div>
      </div>
      <div class="home-weather-container">
        <div class="home-weather-text"><i class="fa-solid fa-location-dot"></i> 현재 지역
        </div>
        <ContentsSlider></ContentsSlider>
      </div>
  </div>
</template>

<script>
import ContentsSlider from '../components/ContentsSlider.vue'
import AddBookmark from '../components/AddBookmark.vue'
export default {
    data(){
        return {
            add:false,
            homeWeatherTextStyle:{
            background: 'darkcyan'
            },
            userData:{}

        }
    },
    created() {
         this.userData = JSON.parse(localStorage.getItem('userData')) || [];
    },
    components: {
        ContentsSlider,
        AddBookmark,
    },
    methods: {
        clickAdd(){
            this.add = !this.add
            console.log(this.add)
        }
    }
}
</script>

<style>
.home-container{
    display: inline;
    background: darkgray;
    width: 200px;
    height: auto;
}
.home-weather-container{
    width: 90%;
    margin: auto;
    margin-top: 40px;
    background: gray;
}
.home-weather-text{
     display: inline;
    font-size: 18px;
    font-weight: 600;
    width: 120px;
    background: darkcyan;
    margin-left: 10px;
    padding: 10px 15px 6px 15px;
    border-radius: 15px 15px 0px 0px;
    line-height: 2;
    cursor: pointer;
}
.home-add-text{
    display: inline;
    font-size: 18px;
    font-weight: 600;
    width: 120px;
    background: rgb(149, 174, 174);
    justify-content: right;
    padding: 10px 15px 6px 15px;
    border-radius: 15px 15px 0px 0px;
    line-height: 2;
    cursor: pointer;
}
.home-weather-text-click{
    background: rgb(149, 174, 174);
}
.home-add-text-click{
    background: darkcyan;
}
</style>