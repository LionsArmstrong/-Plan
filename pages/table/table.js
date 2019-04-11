Page({
  data: {
    array: [],
  },
  onLoad: function (options) {
    var txt = this;
    for (var i = 1; i < 10; i++) {
      for (var j = 1; j < 10; j++) {
        if (i * j < 10) {
          txt.setData({
            ['array[' + (i - 1) + '][' + (j - 1) + ']']: '0' + i * j//十位补零
          })
        }
        else {
          txt.setData({
            ['array[' + (i - 1) + '][' + (j - 1) + ']']: '' + i * j
          })
        }
      }
    }
    console.log(txt.data.array)
  },
})