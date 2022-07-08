<template>
  <div class="contents-container">
      <div class="contents-pre" >
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="contents-whole-container" >
          <div class="contents-whole-carousel-container" ref="contentsCarousel">
            <div v-for="(data,index) in props.data" :key="index" class="contents-weather-container">
                <div class="contents-temperature-container">
                    {{data.TMP}}
                </div>
                <div class="contents-image-container">
                    해
                </div>
                <div class="contents-data-container">
                    25 / 30
                </div>
            </div>
        </div>
      </div>
       <div class="contents-aft" @click="rignhtMove">
            <i class="fa-solid fa-angle-right"></i>
      </div>
  </div>
</template>

<script>
export default {
    props:['props'],
    data(){
        return {
            rightOffset:1,
            leftOffset:1                                                                                                                                                                                                                                                                                                            
        }
    },
    methods: {
        rignhtMove(){
            this.rightOffset = this.rightOffset+1;
            this.$refs.contentsCarousel.style.transform = `translateX(${-150 * this.rightOffset}px)`;
            console.log('move');
        },
        leftMove(){
            this.leftOffset = this.leftOffset+1;
            this.$refs.contentsCarousel.style.transform = `translateX(${+150 * this.leftOffset}px)`;
            console.log('move');
        }
    }
}
</script>

<style>
.contents-container{
    width: 100%;
    border-radius: 15px 15px 15px 15px;
    background: darkcyan;
    padding-top: 15px;
    padding-bottom: 15px;
    display: flex;
    
}
.contents-whole-container{
    width: 100%;
    height: 150px;
    background: darkkhaki;
    overflow-x: hidden;
   
}
.contents-whole-carousel-container{
    width: 100%;
    height: 150px;
    background: darkkhaki;
    display: flex;

}
.contents-weather-container{
    width: 200px;
    height: 150px;
    border-radius: 15px 15px 15px 15px;
    background: darkgoldenrod;
    border: 1px solid black;

}
.contents-temperature-container{
    width: 150px;
    height: 35px;
    background: darkgray;
    text-align: center;    
    
}
.contents-image-container{
    background: bisque;
    width: 100%;
    height: 80px;
}
.contents-data-container{
    width: 100%;
    height: 35px;
    text-align: center;
    background: yellow;
}
.contents-pre{
    background: wheat;
    width: 1%;
    display: flex;
    height: 150px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
}
.contents-aft{
    background: wheat;
    display: flex;
    width: 1%;
    height: 150px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
    
}

</style>