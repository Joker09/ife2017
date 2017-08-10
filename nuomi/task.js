// 网页抓取分析服务系列之一（基础分析）
// phantomjs不支持es6

var page = require('webpage').create();
var system = require('system');
phantom.outputEncoding="gbk";
var keywd = encodeURI(system.args[1]);
var result = {
  word: keywd,
  time: Date.now()
};

page.open('http://www.baidu.com/s?wd=' + keywd, function(status) {
  if (status === 'success') {
    result.code = 1;
    result.msg = '抓取成功';
    page.includeJs('https://cdn.bootcss.com/jquery/2.2.4/jquery.js', function () {
      var dataList = page.evaluate(function () {
        var dataList = [];
        $('.c-container').each(function (index, item) {
          var obj = {};
          obj.title = $(item).find('.t a').text().trim();
          obj.link = $(item).find('.t a').attr('href');
          obj.info = $(item).find('.c-abstract').text().trim();
          obj.pic = $(item).find('.c-img').attr('src');
          dataList.push(obj);
        })

        return dataList;
      })
      result.dataList = dataList;
      result.time = Date.now() - result.time;
      console.log(JSON.stringify(result));
      
      phantom.exit();
    })
   
  } else { 
    result.code = 0;
    result.msg = '抓取失败';
    console.log(JSON.stringify(result));
  }
   
});