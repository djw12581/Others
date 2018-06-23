var log = console.log.bind(log)
class A {
    constructor(width,height){
        this.width = width ||50
        this.height = height||50
        this.lebal = null
    }
    render($where){
        if (this.$elem) {
            this.$elem.css({
                width: this.width + `px`,
                height: this.height + `px`
            }).appendTo($where)
        } 
    }
}
class B extends A {
    constructor(width,height,label){
        super(width,height)
        this.label = label || 'dafult'
        this.$elem = $('<button>').text(this.label)
    }
    render($where){
        super.render($where)
        this.$elem.click(this.onClick.bind(this))
    }
    onClick(ev){
        console.log(this.label)
    }
}
$(document).ready(function () {
    var $body = $(document.body)
    var btn1 = new B(125,30,'hello')
    var btn2 = new B(150,30,'aaa')
    btn1.render($body)
    btn2.render($body)
})
// extends 继承constructor constructor内super继承constructor内属性 super作为对象调用父类方法
// 原型模式注意问题之引用类型共享

