var app = getApp();
Page({
    data:{
        albums:[],
        videoList:[],
        autoplay: false,
        scrollTop: 0
    },

    onReady: function( ){
        this.setData({
            albums: app.globalData.albums,
            videoList: app.globalData.albums[app.globalData.current].videos
        })
        // var that = this;
        // wx.request({
        //   url: 'https://api.idarex.com/www/index',
        //   data: {},
        //   method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        //   // header: {}, // 设置请求的 header
        //   success: function(res){
        //     console.log(res);
        //     that.setData({
        //         albums: res.data.columns,
        //         videoList: res.data.columns[0].videos
        //     })
        //   },
        //   fail: function() {
        //     // fail
        //   },
        //   complete: function() {
        //     // complete
        //   }
        // })

    },
    //滑块动画切换时时，执行changeAlbum
    changeAlbum: function(event){
        // console.log("当前的影片组序号：" + event.detail.current)
        app.globalData.current = event.detail.current;
        this.setData({
            videoList: this.data.albums[event.detail.current].videos,
            scrollTop: 0
        })
    },

    playVideo:function(event){
        var videoIndex = event.currentTarget.dataset.id
        console.log("播放第" + videoIndex + "条片子...")
        wx.navigateTo({
            //url使用的是showVideo.js文件路径，不是showVideo文件夹路径
          url: '../showVideo/showVideo?index=' + videoIndex,
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
    }
})
