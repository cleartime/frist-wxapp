//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    account:{
      balance_:12,
      available_amount_:32424,
      frozen_amount_:79
    },
    planBidCount:123223,
    disBidCount:234
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../dome/dome'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
