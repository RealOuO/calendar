'use strict';
//index.js
//获取应用实例
var app = getApp();
var csv = require('../../utils/csvjson');
var util = require('../../utils/util');
Page({
  data: {
    height: 20,
    focus: false,
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  bindButtonTap: function () {
    this.setData({
      focus: true
    })
  },
  bindTextAreaBlur: function (e) {
    var result = csv.parsecsv(e.detail.value, {
      delim: ",",
      textdelim: "\"",
      header:false
    })
    var rows = result.rows
    rows.shift()
    var schedule = [];
    for(var ele of rows){
      schedule.push(util.objToArry(ele));
    }

   var keyMonth = util.getYearMonth()
    wx.setStorage({
      key:keyMonth,
      data: schedule});
    console.log(schedule)
  },
  bindFormSubmit: function (e) {
    console.log(e.detail.value.textarea)
  }
})
