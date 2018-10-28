// 引用公共模块，并将其声明为全局变量
var common=require("../../utils/subjectUtil.js");
Page({

  /**
   * 页面的初始数据
   * '/'代表读取图片从根目录开始
   */
  data: {
    imgUrls: [

      '/assets/img/001.jpg',
      '/assets/img/002.jpg',
      '/assets/img/003.jpg'
    ],
    // 是否显示面板指示点
    indicatorDots: true,
    // 是否自动切换
    autoplay: true,
    // 自动切换时间间隔
    interval: 3000,
    // 滑动动画时长
    duration: 1000,
    movies:[],
    hidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMovie();
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
    
  },
  /**
   * 加载电影数据
   */
  loadMovie:function(){
    var page=this
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters',
      header:{
        'Content-Type':'application/xml'
      },
      success:function(res){
        var subjects=res.data.subjects;
        common.processSubjects(subjects);
        page.setData({movies:subjects,hidden:true});
      }
    })
  },
  detail: function (e) {
    getApp().detail(e);
  }
  

})