App({
  globalData: {
    albums: [],
    current: 0
  },

  onLaunch: function () {
    // //调用API从本地缓存中获取key为logs的数据
    // var logs = wx.getStorageSync('logs') || []   //Sync：同步
    // logs.unshift(Date.now())
    // //向本地缓存存储key为'logs'的数据对象logs
    // wx.setStorageSync('logs', logs)

        var that = this;
        wx.request({
          url: 'https://api.idarex.com/www/index',
          data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function(res){
            console.log(res);
            that.globalData.albums = res.data.columns
            that.globalData.current = 0
            console.log(that.globalData.albums[that.globalData.current])
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