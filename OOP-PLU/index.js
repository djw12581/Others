// //jq插件
// var factory = (function (_this_, factory, plug) {
//     return factory({
//         number: 5
//     }, _this_, plug)
// })('window', function (options, _this_, plug) {
//     // console.log(plug, options, _this_)
//     options.number++;
//     console.log(plug, options.number, _this_)
//     return factory;
// }, `D1`);

//用户配置插件
// var Ocreat = (function ( factory,global, plug) {
//     console.log(global,plug)
//     return factory(global,plug)
// })(function () {
//     var Ocreat = function (options) { 
//         this.age = options.age
//      }
//     return Ocreat
//   },'this','aaa')
// var o = new Ocreat({
//     age: 5
// })
// console.log(o)

// //es6       
// ((_this_, factory, plug) => {
//     factory({}, plug)
// })(
//     'window', (options, plug) => {
//         console.log(plug, )
//     }, 'D2'
// )

// //原型 可配置 插件
// var O = (function (i) {
//     var O = function () {
//         i++;
//         console.log(i)
//     }
//     return O;
// })(5);
// var a = new O();
// var A = (
//     function (options) {
//         var A = function (options) {
//             // var a = JSON.stringify(options)
//             this.ran(options.age);
//             console.log(options.age)
//         }
//         A.prototype = {
//             ran: function (t) {
//                 return Math.floor(Math.random() * t)
//             }
//         }
//         return A
//     }
// )()
// var o = new A({
//     age: 5
// })


//最简单的用户配置插件
// var Obj = function (options) {
//     (function (i) {
//         i++;
//         console.log(i)
//     })({
//         options
//     })
// }
// return Obj