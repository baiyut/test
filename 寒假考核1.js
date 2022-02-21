var sousuo= new Vue({
    el:"#top",
    data:{
        query:"",
        musicList:[],
        
    },
    methods:{
        searchMusic:function(){
            var that =this;
            axios.get("http://redrock.udday.cn:2022/search?keywords="+this.query)
            .then(function(response){
                // console.log(response);
                that.musicList=response.data.result.songs;
                console.log(response.data.result.songs)
            },function(err){})
        },
        playMusic:function(musicId) {
            console.log(musicId);
        }
    },
});
var liebia= new Vue({
    el:"#liebiao",
    data:{
        lb:false
    },
    methods:{
        haveLb:function(){
            this.lb=!this.lb;
        }
    }
});




