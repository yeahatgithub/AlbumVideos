//获取应用实例
var app = getApp()
Page({
  data: {
    albums: [],       //相册
    videoList: [],    //当前相册里的照片
    scrollTop: 0,
    indicatorDots: true,    //滑块帧的逗号标记
    autoplay: false,        //自动播放？否
    duration: 1000,         //停顿1s
    playerShow: false,
    videoUrl: '',
    videoTitle: '',
    videoIndex: 0
  },
  //滑块帧变动时，执行changeAlbum
  changeAlbum: function (e) {
    this.setData({
      videoList: this.data.albums[e.detail.current].videos,  //e.datail.current是当前滑块的编号
      scrollTop: 0
    })
  },
  playVideo: function (e) {
    //e.currentTarget是响应事件e的当前组件（可能是冒泡上来的事件）。
    //e.currentTarget.dataset包含组件内的自定义属性（键值对）
    //e.currentTarget.dataset.id是当前组件内名为"data-id"的属性
    let index = e.currentTarget.dataset.id   //页面数据中的视频列表的下标
    this.setData({
      videoTitle: this.data.videoList[index].title,
      videoUrl: this.data.videoList[index].play_url,
      playerShow: true,
      videoIndex: index
    })
  },
  closeVideo: function () {
    this.setData({
      videoUrl: '',
      playerShow: false
    })
  },
  preVideo: function () {
    let index = this.data.videoIndex
    if (index === 0) {
      wx.showToast({
        title: '前面没有啦！',
        icon: 'loading',
        duration: 10000
      })
      setTimeout(function(){
        wx.hideToast()
      },1000)
    } else {
      this.setData({
        videoTitle: this.data.videoList[index - 1].title,
        videoUrl: this.data.videoList[index - 1].play_url,
        videoIndex: index - 1
      })
    }
  },
  nextVideo: function () {
    let index = this.data.videoIndex
    if (index === this.data.videoList.length - 1) {
      wx.showToast({
        title: '后面没有啦！',
        icon: 'loading',
        duration: 10000
      })
      setTimeout(function(){
        wx.hideToast()
      },1000)
    } else {
      this.setData({
        videoTitle: this.data.videoList[index + 1].title,
        videoUrl: this.data.videoList[index + 1].play_url,
        videoIndex: index + 1
      })
    }
  },
  onReady: function () {
    var that = this
    //下载相册数据，存为页面数据
    wx.request({
      url: 'https://api.idarex.com/www/index',
      success (res) {
        that.setData({
          albums: res.data.columns,     //相册数组
          videoList: res.data.columns[0].videos //第一个相册的视频列表
        })
      }
    })
  }
})