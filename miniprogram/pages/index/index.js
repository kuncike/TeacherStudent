const app=getApp();
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
         tag:"",
         name:"text",
         Tmessage:{},
         Smessage:{},
  },
part(res){
   console.log(res)
   var that=this;
   this.setData({
     name:res.currentTarget.dataset.name,
   })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.showLoading({
      title: '数据加载中',
    })

     wx.cloud.callFunction({
       name:"Student"
     }).then(res=>{
       wx.hideLoading()
       that.setData({
         Smessage:res.result.data,
       })
     })

     wx.cloud.callFunction({
      name:"Teacher"
    }).then(res=>{
      wx.hideLoading()
      console.log("teaxher",res)
      that.setData({
        //Tmessage:res.result.data,
      })
    })

    wx.cloud.callFunction({
      name:"Topic"
    }).then(res=>{
      wx.hideLoading()
      console.log("教师发布",res)
      that.setData({
       // Tmessage:res.result.data,
      })
    })
       this.setData({
         tag:app.globalData.identitytag
       })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      tag:app.globalData.identitytag
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})