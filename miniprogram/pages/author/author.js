// miniprogram/pages/login/login.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

    identity:[
      {"name":"老师","tag":"teacher"},
      {"name":"学生","tag":"students"},
    ],

    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    identityname:"",
    identitytag:"",
  },

  identity(e){
    let that = this
    console.log(e)
    var idx=e.detail.value;
    var name=that.data.identity[idx].name;
    var tag=that.data.identity[idx].tag;
    console.log(idx,name,tag)
    app.globalData.identitytag=tag;
   that.setData({
     identityname:name,
     identitytag:tag,
   })
   wx.setStorageSync('identity',{identityname:that.data.identityname,identitytag:that.data.identitytag})
},



  getUserProfile(e) {
    var that=this;
    wx.getUserProfile({
      desc: '用于完善资料',
      success: (res) => {
        console.log(res)
        wx.setStorageSync('userInfo', {userInfo:res.userInfo,hasUserInfo: true});
        app.globalData.hasUserInfo=true;
        that.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
   
  },

  Publish(){
   wx.navigateTo({
     url: '../TmyPublish/Publish',
   })
  },
  Semaphore(){
    wx.navigateTo({
      url: '../TmySemaphore/semaphore',
    })
  },
  tm(){
    wx.navigateTo({
      url: '../TInformation/tInformation',
    })
  },
  mystudents(){
  wx.navigateTo({
    url: '../TmyStudent/students',
  })
  },
  StudentInfo(){
   wx.navigateTo({
     url: '../StudentInfo/sInformation',
   })
  },
  mySelect(){
    wx.navigateTo({
      url: '../SmySelect/mySelect',
    })
   },
   beSelect(){
    wx.navigateTo({
      url: '../SBeSelect/BeSelect',
    })
   },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var login=wx.getStorageSync('userInfo');
      var identity=wx.getStorageSync('identity')
      this.setData({
          userInfo:login.userInfo,
          hasUserInfo:login.hasUserInfo,
          identityname:identity.identityname,
          identitytag:identity.identitytag,
      })
      app.globalData.identitytag=identity.identitytag;
      app.globalData.userInfo=login.userInfo;
      app.globalData.hasUserInfo=login.hasUserInfo;
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