// 引用公共模块，并将其声明为全局变量
var common = require("../../utils/subjectUtil.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 这是第二种获取传来的电影id的方法
    this.loadMovie(options.id);
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
  loadMovie: function (movieId) {
    var page = this;
    // 获取点击时同步储存的电影id,这是第一种获取传来的电影id的方法
    // var movieId=wx.getStorageSync('movieId');
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/'+movieId,
      header: {
        'Content-Type': 'application/xml'
      },
      success: function (res) {
        var subject = res.data;
        common.processSubject(subject);
        page.setData({ movie: subject});
      }
    })
  }
})