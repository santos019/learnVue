<template>
   <div class="bookmark-container">
        <div class="bookmark-whole-container">
            <div class="bookmark-title-container">
                <i class="fa-solid fa-star"></i>
                호칭
                <input v-model="title" placeholder="호칭을 입력해주세요." class="bookmark-title-input">
            </div>
            <div class="bookmark-select-container">
            <select v-model="selectedRegion" @change="changeSelect" class="bookmark-select-first">
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
            <select v-model="selectedDetailRegion" @change="changeDetailSelect" class="bookmark-select-second">
                <option :key="i" :value="value.value" v-for="(value, i) in arr[selectedRegion]">{{value.name}}</option>
            </select>
            <!-- {{this.selectedDetailRegion}} -->
            </div>
            <div class="bookmark-addBtn-container" @click="addBtnEvnt">등록하기</div>
        </div>
        <div class="bookmark-img-container">
            <img src="../assets/map.png" class="BookmarkMap" ref="BookmarkMapRef">
        </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    created () {
        this.selectedRegion = '0'
        this.selectedDetailRegion = '108'
    },
    data () {
        return {
            selectedRegion:'',
            selectedDetailRegion:'',
            title:'',
            arr:{
            0: [{
                value: "108", name: "--"}
            ],
            1:[{
                value: "159", name: "--"}
            ],
            2:[{
                value: "143", name: "--"}
            ],
            3:[
                {value: "102", name: "백령도"},
                {value: "112", name: "인천"},
                {value: "201", name: "강화"},
            ], 
            4:[
                {value: "156", name: "--"},
            ],
            5:[
                {value: "133", name: "대전"},
                {value: "232", name: "천안"},
                {value: "235", name: "보령"},
                {value: "236", name: "부여"},
                {value: "238", name: "금산"},

            ],
            6:[
                {value: "152", name: "--"},
            ],
            7:[
                {value: "239", name: "--"},
            ],
            8:[
                {value: "98", name: "동두천"},
                {value: "99", name: "파주"},
                {value: "119", name: "수원"},
                {value: "202", name: "양평"},
                {value: "203", name: "이천"},

            ],
            9:[
                {value: "90", name: "속초"},
                {value: "93", name: "북춘천"},
                {value: "95", name: "철원"},
                {value: "100", name: "대관령"},
                {value: "101", name: "춘천"},
                {value: "104", name: "북강릉"},
                {value: "105", name: "강릉"},
                {value: "106", name: "동해"},
                {value: "114", name: "원주"},
                {value: "212", name: "홍천"},
                {value: "216", name: "태백"},
                {value: "217", name: "정선군"},
                {value: "121", name: "영월"},
                {value: "211", name: "인제"},
            ],
            10:[
                {value: "221", name: "제천"},
                {value: "226", name: "보은"},
                {value: "127", name: "충주"},
                {value: "131", name: "청주"},
                {value: "135", name: "추풍령"},

            ],
            11:[
                {value: "129", name: "서산 "},
                {value: "177", name: "홍성 "},
            ],
            12:[
                {value: "243", name: "부안"},
                {value: "244", name: "임실"},
                {value: "245", name: "정읍"},
                {value: "247", name: "남원"},
                {value: "248", name: "장수"},
                {value: "140", name: "군산"},
                {value: "146", name: "전주"},
                {value: "251", name: "고창군"},
                {value: "254", name: "순창군"},
                {value: "173", name: "고창"},
            ],
            13:[
                {value: "252", name: "영광운"},
                {value: "258", name: "보성군"},
                {value: "259", name: "강진군"},
                {value: "260", name: "장흥"},
                {value: "261", name: "해남"},
                {value: "262", name: "고흥"},
                {value: "266", name: "광양시"},
                {value: "268", name: "진도군"},
                {value: "165", name: "목포"},
                {value: "168", name: "여수"},
                {value: "169", name: "흑산도"},
                {value: "170", name: "완도"},
                {value: "174", name: "순천"},
            ],
            14:[
                {value: "115", name: "영광운"},
                {value: "130", name: "보성군"},
                {value: "136", name: "강진군"},
                {value: "138", name: "장흥"},
                {value: "271", name: "해남"},
                {value: "272", name: "고흥"},
                {value: "273", name: "광양시"},
                {value: "276", name: "진도군"},
                {value: "277", name: "목포"},
                {value: "278", name: "여수"},
                {value: "279", name: "흑산도"},
                {value: "281", name: "완도"},
                {value: "283", name: "순천"},
                {value: "137", name: "상주"},
            ],
            15:[
                {value: "155", name: "창원"},
                {value: "253", name: "김해시"},
                {value: "255", name: "북창원"},
                {value: "257", name: "양산시"},
                {value: "263", name: "의령군"},
                {value: "264", name: "함양군"},
                {value: "162", name: "통영"},
                {value: "192", name: "진주"},
                {value: "284", name: "거창"},
                {value: "285", name: "합천"},
                {value: "288", name: "밀양"},
                {value: "289", name: "산청"},
                {value: "294", name: "거제"},
                {value: "295", name: "남해"},
            ],
            16:[
                {value: "184", name: "제주"},
                {value: "185", name: "고산"},
                {value: "188", name: "성산"},
                {value: "189", name: "서귀포"},
            ],
            }
        }
    },
      computed: {
        ...mapGetters(['fetchedUserdata'])
    },
    methods:{
        positioning(e) {
            const datas = {
                0: {
                    transformOrigin: '60px 50px',
                    animation: 'six 1s linear 0s 1 normal forwards'
                },
                1: {
                    transformOrigin: '170px 200px',
                    animation: 'five 1s linear 0s 1 normal forwards'
                },
                2: {
                    transformOrigin: '140px 160px',
                    animation: 'five 1s linear 0s 1 normal forwards'
                },
                3: {
                    transformOrigin: '40px 50px',
                    animation: 'five 1s linear 0s 1 normal forwards'
                },
                4: {
                    transformOrigin: '50px 200px',
                    animation: 'five 1s linear 0s 1 normal forwards'
                },
                5: {
                    transformOrigin: '80px 130px',
                    animation: 'six 1s linear 0s 1 normal forwards'
                },
                6: {
                    transformOrigin: '170px 175px',
                    animation: 'six 1s linear 0s 1 normal forwards'
                },
                7: {
                    transformOrigin: '72px 110px',
                    animation: 'six 1s linear 0s 1 normal forwards'
                },
                8: {
                    transformOrigin: '60px 30px',
                    animation: 'three 1s linear 0s 1 normal forwards'
                },
                9: {
                    transformOrigin: '140px 10px',
                    animation: 'second 1s linear 0s 1 normal forwards'
                },
                10: {
                    transformOrigin: '100px 100px',
                    animation: 'three 1s linear 0s 1 normal forwards'
                },
                11: {
                    transformOrigin: '30px 100px',
                    animation: 'three 1s linear 0s 1 normal forwards'
                },
                12: {
                    transformOrigin: '60px 170px',
                    animation: 'three 1s linear 0s 1 normal forwards'
                },
                13: {
                    transformOrigin: '42px 230px',
                    animation: 'second 1s linear 0s 1 normal forwards'
                },
                14: {
                    transformOrigin: '150px 130px',
                    animation: 'second 1s linear 0s 1 normal forwards'
                },
                15: {
                    transformOrigin: '140px 200px',
                    animation: 'second 1s linear 0s 1 normal forwards'
                }
                
            }
            this.$refs.BookmarkMapRef.style.transformOrigin = datas[e]['transformOrigin'];
            this.$refs.BookmarkMapRef.style.animation = datas[e]['animation'];
            
        },
        changeSelect (e) {
            
            this.selectedRegion = e.target.value;
            let position = this.$refs.BookmarkMapRef.style.transformOrigin;
            if (position !== '') {
                this.$refs.BookmarkMapRef.style.animation = 'back 1s linear 0s 1 reverse forwards';
                setTimeout(()=>{this.positioning(e.target.value)},1000) 
    
            } else {
                this.positioning(e.target.value);
            }         
            this.selectedDetailRegion = this.arr[this.selectedRegion][0].value;
        },
        changeDetailSelect (e) {
            this.selectedDetailRegion = e.target.value;
        },
        addBtnEvnt () {
            if (this.title === '') {
                alert('호칭을 입력해주세요.');
                return;
            }
            let cnt = false;
            let getArr = this.fetchedUserdata;
            console.log(getArr)
            for(const element of getArr) {
                if (element.title === this.title) {
                    alert('동일 호칭이 있습니다. 다시 입력해주세요.');
                    cnt = true;
                    return;
                }
            }
            if (cnt === true) return;
            getArr.push({title: this.title, value: this.selectedDetailRegion});
            this.$store.dispatch('FETCH_USERDATA', getArr)
            this.title = '';
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
    width: 87%;
    margin-top: 40px;
    height: 150px;
    border-radius: 15px 15px 15px 15px;
    background: darkgoldenrod;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bookmark-title-container{
    display: inline;
    height: 50px;

    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 900;
}
.bookmark-title-input{
    height: 45px;
    width: 220px;
    margin-left: 13px;
    }
.BookmarkMap{
    width: 100%;
}
.bookmark-img-container{
    width: 200px;
    height: 250px;
    overflow:hidden;
    border-radius: 15px 15px 15px 15px;
}
.bookmark-select-container{
    display: flex;
    height: auto;
    background: rgb(48, 141, 56);
    margin-bottom: 10px;
}
.bookmark-select-first{
    width: 150px;
    height: 40px;
    text-align: center;
    margin-right: 10px;
}
.bookmark-select-second{
    width: 150px;
    height: 40px;
    text-align: center;
}

.bookmark-addBtn-container{
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 3;
    border-radius: 15px 15px 15px 15px;
    background: chartreuse;
    cursor: pointer;
}
@keyframes second{
    10% {transform : scale(1.0);}
    50% {transform : scale(1.5);}
    100% {
        transform : scale(2.5);}
}
@keyframes three{
    10% {transform : scale(1.0);}
    50% {transform : scale(2.0);}
    100% {
        transform : scale(3.0);}
}
@keyframes four{
    10% {transform : scale(1.0);}
    50% {transform : scale(2.0);}
    100% {
        transform : scale(4.0);}
}
@keyframes five{
    10% {transform : scale(1.0);}
    50% {transform : scale(2.0);}
    100% {
        transform : scale(5.0);}
}
@keyframes six{
    10% {transform : scale(1.0);}
    50% {transform : scale(2.0);}
    100% {
        transform : scale(6.0);}
}
@keyframes back{
    10% {transform : scale(1.0);}
    50% {
        transform : scale(2.0);}
    100% {
        transform : scale(3.0);}
}

</style>