<template>
  <div class="contents-container">
      <div class="contents-pre">
        <i class="fa-solid fa-angle-left"></i>
      </div>
      <div class="contents-whole-container">
      <div class="contents-weather-container">
          <div class="contents-temperature-container">
              25도
          </div>
          <div class="contents-image-container">
              해
          </div>
          <div class="contents-data-container">
              25 / 30
          </div>
      </div>
      </div>
       <div class="contents-aft">
            <i class="fa-solid fa-angle-right"></i>
      </div>
  </div>
</template>

<script>
export default {

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
.contents-weather-container{
    width: 150px;
    height: 150px;
    border-radius: 15px 15px 15px 15px;
    background: darkgoldenrod;

}
.contents-temperature-container{
    width: 100%;
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
    display: flex;
    height: 150px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
}
.contents-aft{
    background: wheat;
    display: flex;
    height: 150px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    margin-right: 15px;
    margin-left: 15px;
    
}
.contents-whole-container{
    width: 100%;
    background: darkkhaki;
}
</style>