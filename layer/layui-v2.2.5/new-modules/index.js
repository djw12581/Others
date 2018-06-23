// 定义模块
layui.define(['layer', 'form'], function(exports){
    var layer = layui.layer
    ,form = layui.form;
    
    layer.msg('Hello World');
    
    exports('index', {}); //注意，这里是模块输出的核心，模块名必须和use时的模块名一致
  }); 
  layui.use(['layer', 'laypage', 'laydate'], function(){
    var layer = layui.layer //获得layer模块
    ,laypage = layui.laypage //获得laypage模块
    ,laydate = layui.laydate; //获得laydate模块
    
    //使用模块
  });  