var app = getApp();
Page({
    data:{
        videoIndexInAlbum: 0,
        videoUrl: '',
        videoTitle: ''
    },
    onLoad: function(options){
        var currentAlbum = app.globalData.albums[app.globalData.current].videos;
        var index = parseInt(options.index);
        var currentVideo = currentAlbum[index];

        this.setData({
            videoIndexInAlbum: index,
            videoUrl: currentVideo.play_url,
            videoTitle: currentVideo.title
        })
        // console.log("选中的片子编号：" + this.data.videoIndexInAlbum)
    },
    //上一集
    prevVideo: function(){
        var index = this.data.videoIndexInAlbum;
        if (index == 0){
            wx.showToast({
                title: "没有上一集啦",
                icon: "loading",
                duration: 2000
            });
            setTimeout(function(){
                wx.hideToast()
            }, 2000);
        }else{
            index = index - 1;
            var currentAlbum = app.globalData.albums[app.globalData.current].videos;
            var currentVideo = currentAlbum[index];
            this.setData({
                videoIndexInAlbum: index,
                videoUrl: currentVideo.play_url,
                videoTitle: currentVideo.title
            })     
        }
    },
    //下一集
    nextVideo: function(){
        var index = this.data.videoIndexInAlbum;
        var currentAlbum = app.globalData.albums[app.globalData.current].videos;
        if (index == currentAlbum.length - 1){
            wx.showToast({
                title: "没有下一集啦",
                icon: "loading",
                duration: 2000
            });
            setTimeout(function(){
                wx.hideToast()
            }, 2000);
        } else {
            index = index + 1;
            var currentVideo = currentAlbum[index];
            this.setData({
                videoIndexInAlbum: index,
                videoUrl: currentVideo.play_url,
                videoTitle: currentVideo.title
            })
        }
    },

    //停止播放视频
    closeVideo: function(){
        wx.navigateBack({
          delta: 1
        })
    }
})