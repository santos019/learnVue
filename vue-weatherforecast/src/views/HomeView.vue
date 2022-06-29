<template>
  <div class="home-container"> {{fetchedUserdata.length}}
        <div class="home-weather-container" v-if="fetchedUserdata.length === 0">
            <div class="home-add-text" @click="clickAdd" :class="'home-add-text-click-init'">
                <i class="fa-solid fa-plus"></i> 추가하기
            </div>
            <div>
                <AddBookmark></AddBookmark>
            </div>
      </div>
      <div class="home-weather-container" v-else v-for="(datas, index) in fetchedUserdata" :key="index">
        <div class="hone-weather-menu-container">
            <div class="home-weather-text" @click="clickAdd" :class="{'home-weather-text-click': (add && index === 0) === true}" style="homeWeatherTextStyle">
                <i class="fa-solid fa-star"></i> {{datas.title}}
            </div>
            <div v-if="index === 0" class="home-add-text" @click="clickAdd" :class="{'home-add-text-click': add === true}">
                <i class="fa-solid fa-plus"></i> 추가하기
            </div>
            <div class="home-remove-text" @click="clickRemove(datas)" id>
                <i class="fa-solid fa-x"></i>
            </div>
            <div v-show="!add || index!==0">
                <ContentsSlider></ContentsSlider>
            </div>
            <div v-if="index === 0" v-show="add">
                <AddBookmark></AddBookmark>
            </div>
        </div>
      </div>
      <div class="home-weather-container">
        <div class="home-weather-text">
            <i class="fa-solid fa-location-dot"></i> 현재 지역
        </div>
        <ContentsSlider></ContentsSlider>
      </div>
  </div>
</template>

<script>
import ContentsSlider from '../components/ContentsSlider.vue'
import AddBookmark from '../components/AddBookmark.vue'
import { mapGetters, mapState } from 'vuex'
export default {
    data(){
        return {
            add:false,
            homeWeatherTextStyle:{
            background: 'darkcyan'
            },
         

        }
    },
    created() {
        this.$store.dispatch('FETCH_USERDATA_INIT')
    },
    components: {
        ContentsSlider,
        AddBookmark,
    },
    methods: {
        clickAdd () {
            this.add = !this.add
            console.log(this.add)
        },
        clickRemove (data) {
            console.log(data)
            console.log(this.$store.state.userData);
            const index = this.userData.findIndex(el=> el.title === data.title);
            this.userData.splice(index, 1);
            
            console.log(this.userData)
            this.$store.dispatch('FETCH_USERDATA', this.userData);
        }
    },
    computed: {
        ...mapGetters(['fetchedUserdata']),
        ...mapState(['userData'])
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
    float: left;
    font-size: 18px;
    font-weight: 600;
    width: auto;
    background: darkcyan;
    margin-left: 15px;
    margin-top: 12px;
    padding: 10px 15px 0px 15px;
    border-radius: 15px 15px 0px 0px;
    line-height: 1.5;
    height: 30px;
    cursor: pointer;
}
.home-add-text{
    display: inline;
    float: left;
    font-size: 18px;
    font-weight: 600;
    width: auto;
    background: rgb(149, 174, 174);
    margin-top: 12px;
    padding: 10px 15px 0px 15px;
    border-radius: 15px 15px 0px 0px;
    line-height: 1.5;
    height: 30px;
    cursor: pointer;
}
.home-remove-text{
    display: inline;
    font-size: 18px;
    font-weight: 600;
    width: auto;
    background: rgb(149, 174, 174);
    margin-top: 12px;
    padding: 10px 15px 0px 15px;
    border-radius: 15px 15px 0px 0px;
    line-height: 1.5;
    height: 30px;
    cursor: pointer;
    float: right;
    margin-right: 15px;
}
.hone-weather-menu-container{
    width: 100%;
}
.home-weather-text-click{
    background: rgb(149, 174, 174);
}
.home-add-text-click{
    background: darkcyan;
}
.home-add-text-click-init{
    background: darkcyan;
    margin-left: 15px;
}

</style>