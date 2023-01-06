// miniprogram/pages/teachersemaphore/semaphore.js
const app=getApp();
const db=wx.cloud.database();
Page({
  data: {
    term:[
      "第一学期",
      "第二学期",
    ],
    termname:"哪个学期",
    CourseType:[
      {"name":"理论教学","type":"1"},
      {"name":"实践教学-实验教学","type":"2"},
      {"name":"实践教学-实习教学","type":"3"},
      {"name":"实践教学-指导课程","type":"4"},
      {"name":"实践教学-指导毕业论文","type":"5"},
      {"name":"辅助教学","type":"6"},
    ],
    CouseObject:[],
     num:"1",

    ////////////////////////////// 分割新参数

    term:[
      "第一学期",
      "第二学期",
    ],
    termname:"哪个学期",
    G1:[],
    G1Profession:"",
    G1class:"",
    P1:[],
     K11:[
       {"name":"通识教育课程","co":"1"},
       {"name":"音乐专业小课","co":"0.6"},
       {"name":"体育系专业技能","co":"2"},
       {"name":"外语试听课程","co":"0.7"},
       {"name":"双语教学课程","co":"1.5"},
       {"name":"新开课程","co":"1.2"},
     ],
     K11name:[],
     K11co:[],
     K12:[],
     K13:[
      {"name":"首次授课","co":"1"},
      {"name":"重复授课","co":"0.8"},
     ],
     K13name:[],
     K13co:[],
     G2:[],
     G2Profession:"",
     G2class:"",
     P2:[],
     K21:[
      {"name":"一般型实验","co":"1"},
      {"name":"综合型，设计型实验","co":"1.2"}
     ],
     K21name:[],
     K21co:[],
     K22:[
      {"name":"第一组","co":"1"},
      {"name":"重复组","co":"0.8"},
     ],
     K22name:[],
     K22co:[],
     G3:[],
     R3:[],
     K3:[
      {"name":"教育实习、见习","co":"0.5"},
      {"name":"一般专业实习","co":"0.5"},
      {"name":"美术学、艺术设计野外写生","co":"1"},
      {"name":"综合实习、毕业实习","co":"0.2"},
      {"name":"专业技能训练","co":"0.5"},
      {"name":"专业考察、社会调查","co":"0.2"},
     ],
     K3name:[],
     K3co:[],
     Z3:[],
     G4:[],
     F4:[],
     R4:[],
     K4:[
      {"name":"单列课程设计","co":"0.5"},
      {"name":"课程组成的课程设计","co":"0.2"},
     ],
     K4name:[],
     K4co:[],
     G5:[],
     F5:[],
     R5:[],
     G6:[],
     total:"",

  },
  term(e)
  {
     var term=this.data.term;
     this.setData({
       termname:term[e.detail.value]
     })
  },
  CT(e){
    var CourseType=this.data.CourseType;
    var id=e.currentTarget.dataset.id;
    var object={};
    object["coursename"]=CourseType[e.detail.value].name;
    object["coursetype"]=CourseType[e.detail.value].type;
    var CO=this.data.CouseObject;
    CO[id]=object;
    console.log(id,CO)
    this.setData({
      CouseObject:CO,
    })
  },
  bindinc(e){
    var that=this;
    
    that.setData({
      num:Number(that.data.num)+1,
    })
    console.log("num",that.data.num)
  },
  bindpop(e){

    this.data.CouseObject.pop( );
    var that=this;
    that.setData({
      num:Number(that.data.num)-1,
    })
   console.log("num",that.data.num)
  },

//////////////////////////////////////////////////////////分割新功能

  term(e)
  {
     var term=this.data.term;
     this.setData({
       termname:term[e.detail.value]
     })
  },
  //第一组参数
  G1Profession(res){
  //console.log(res.detail.value)
   this.data.G1Profession=res.detail.value;
  },
  G1class(res){
  // console.log(res.detail.value)
    this.data.G1class=res.detail.value;
  },
  P1(res){
    var idx=Number(res.currentTarget.dataset.id);
    var  thatd=this.data;
    thatd.P1[idx]=res.detail.value;
    console.log("参数",thatd.P1)
  },
  select11(e){
    //over
      let that = this
      var index=Number(e.currentTarget.dataset.id);
      var  thatd=this.data;
      console.log("index",index)
      var idx=e.detail.value;
      console.log("idx",idx)
      thatd.K11name[index]=that.data.K11[idx].name;
      thatd.K11co[index]=that.data.K11[idx].co;
      console.log(thatd.K11name, thatd.K11co)
     that.setData({
       K11name:thatd.K11name,
       K11co:thatd.K11co,
     })
  },
  K12(res){
    console.log(res);
       var idx=Number(res.currentTarget.dataset.id);
       console.log(idx);
        var  thatd=this.data;
        console.log(res.detail.value)
        var students=res.detail.value;
       
        if(students<=100)
          thatd.K12[idx]=1+(students-50)*0.01;
        if(students>100)
          thatd.K12[idx]=1.5+(students-100)*0.005;
       
        console.log("参数",thatd.K12)
        this.setData({
          //K12:K12,
        })
  },
  select13(e){
    //over
    var that = this
    var index=Number(e.currentTarget.dataset.id);
    var  thatd=this.data;
    console.log(e)
    var idx=e.detail.value;
    thatd.K13name[index]=that.data.K13[idx].name;
    thatd.K13co[index]=that.data.K13[idx].co;
    console.log(thatd.K13name,thatd.K13co)
   that.setData({
     K13name:thatd.K13name,
     K13co:thatd.K13co,
   })
  },
  //第二组参数
  G2Profession(res){
    // console.log(res)
     this.data.G1Profession=res.detail.value;
    },
  G2class(res){
      //console.log(res)
      this.data.G1class=res.detail.value;
    },
  P2(res){
    var idx=Number(res.currentTarget.dataset.id);
    var  thatd=this.data;
    thatd.P2[idx]=res.detail.value;
    console.log(thatd.P2)
  },
  select21(e){
    //over
    var that = this
    var index=Number(e.currentTarget.dataset.id);
    var  thatd=this.data;
    var idx=e.detail.value;
    thatd.K21name[index]=that.data.K21[idx].name;
    thatd.K21co[index]=that.data.K21[idx].co;
   that.setData({
     K21name:thatd.K21name,
     K21co:thatd.K21co,
   })
   console.log(thatd.K21co)
},
select22(e){
  //over
  var that = this
  var index=Number(e.currentTarget.dataset.id);
  var  thatd=this.data;
  var idx=e.detail.value;
  thatd.K22name[index]=that.data.K22[idx].name;
  thatd.K22co[index]=that.data.K22[idx].co;
 that.setData({
   K22name:thatd.K22name,
   K22co:thatd.K22co,
 })
 console.log(thatd.K22co)
},
//第三组参数
R3(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.R3[idx]=res.detail.value;
},
select3(e){
  //over
  var that = this
  var index=Number(e.currentTarget.dataset.id);
  var  thatd=this.data;
  var idx=e.detail.value;
  thatd.K3name[index]=that.data.K3[idx].name;
  thatd.K3co[index]=that.data.K3[idx].co;
 that.setData({
   K3name:thatd.K3name,
   K3co:thatd.K3co,
 })
},
Z3(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.Z3[idx]=res.detail.value;
},
//第四组参数
F4(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.F4[idx]=res.detail.value;
},
R4(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.R4[idx]=res.detail.value;
},
select4(e){
  //over
  var that = this
  var index=Number(e.currentTarget.dataset.id);
  var  thatd=this.data;
  var idx=e.detail.value;
  thatd.K4name[index]=that.data.K4[idx].name;
  thatd.K4co[index]=that.data.K4[idx].co;
 that.setData({
   K4name:thatd.K4name,
   K4co:thatd.K4co,
 })
},
//第五组参数
F5(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.F5[idx]=res.detail.value;
},
R5(res){
  var idx=Number(res.currentTarget.dataset.id);
  var  thatd=this.data;
  thatd.R5[idx]=res.detail.value;
},
//第六组参数
yongteacher(e){
  //over
  var that = this
  var index=Number(e.currentTarget.dataset.id);
  var  thatd=this.data;
 console.log(e.detail.value*10)
 thatd.G6[index]=e.detail.value*10;
 this.setData({
   G6:thatd.G6
 })
},
//提交数据
submit(res)
{
  var thatd=this.data;
  var P1=thatd.P1;
  var P2=thatd.P2;
  var Z3=thatd.Z3;
  var R3=thatd.R3;
  var F4=thatd.F4;
  var R4=thatd.R4;
  var F5=thatd.F5;
  var R5=thatd.R5;

  for(var i=0;i<10;i++)
  {
    thatd.G1[i]=Number(P1[i])*Number(thatd.K11co[i])*Number(thatd.K13co[i])*Number(thatd.K12[i]);
    thatd.G2[i]=Number(P2[i])*Number(thatd.K21co[i])*Number(thatd.K22co[i]);
    thatd.G3[i]=Number(Z3[i])*Number(R3[i])*Number(thatd.K3co[i]);
    thatd.G4[i]=Number(F4[i])*Number(R4[i])*Number(thatd.K4co[i]);
    thatd.G5[i]=Number(F5[i])*Number(R5[i]);
    thatd.G6[i]=Number(thatd.G6[i]);
    thatd.total=Number(thatd.total)+Number(thatd.G1[i])+Number(thatd.G2[i])+Number(thatd.G3[i])+Number(thatd.G4[i])+Number(thatd.G5[i])+Number(thatd.G6[i]);

  }

  this.setData({
      G1:thatd.G1,G2:thatd.G2,G3:thatd.G3,G4:thatd.G4,G5:thatd.G5,G6:thatd.G6,total:thatd.total,
  })
  //console.log(thatd.G1,thatd.G2,thatd.G3,thatd.G4,thatd.G5,thatd.G6)
},

init()
{
  var thatd=this.data;
  //参数初始化
     for(var i=0;i<10;i++)
     {
       thatd.G1[i]=0;thatd.P1[i]=0;thatd.K11co[i]=0;thatd.K12[i]=0;thatd.K13co[i]=0;
       thatd.G2[i]=0;thatd.P2[i]=0;thatd.K21co[i]=0;thatd.K22co[i]=0;
       thatd.G3[i]=0;thatd.R3[i]=0;thatd.K3co[i]=0;thatd.Z3[i]=0;
       thatd.G4[i]=0;thatd.F4[i]=0;thatd.R4[i]=0;thatd.K4co[i]=0;
       thatd.G5[i]=0;thatd.F5[i]=0;thatd.R5[i]=0;
       thatd.G6[i]=0;
     }
},
reset()
{
  var thatd=this.data;
  this.init();
  this.setData({
    G1:thatd.G1,G2:thatd.G2,G3:thatd.G3,G4:thatd.G4,G5:thatd.G5,G6:thatd.G6,total:0,
})
},

upload(res){
  var that=this.data;
  var page = getCurrentPages().pop(); //当前页面
  wx.showLoading({
    title: '数据上传中',
  })
  db.collection("Semaphore").add({
    data:{
      termname:that.termname,
      G1Profession:that.G1Profession,
      G1class:that.G1class,
      P1:that.P1,
      K11name:that.K11name,
      K13name:that.K13name,
      G1:that.G1,
      G2Profession:that.G2Profession,
      G2class:that.G2class,
      P2:that.P2,
      K21name:that.K21name,
      K22name:that.K22name,
      G2:that.G2,
      K3name:that.K3name,
      R3:that.R3,
      Z3:that.Z3,
      G3:that.G3,
      K4name:that.K4name,
      R4:that.R4,
      G4:that.G4,
      R5:that.R5,
      G5:that.G5,
      G6:that.G6,
      Tname:that.Tname,
    }
  }).then(res=>{
    wx.hideLoading({});
    wx.showToast({
      title: '上传成功',
    })
  })
},





  onLoad() {
    var message=wx.getStorageSync('Tmessage');
    console.log("缓存",message.name)
     this.init();
     this.setData({
      tag:app.globalData.identitytag,
      Tname:message.name
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
    var message=wx.getStorageSync('Tmessage');
    this.setData({
      tag:app.globalData.identitytag,
      Tname:message.name
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