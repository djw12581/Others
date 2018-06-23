var log = console.log.bind(log)
var A = {
    init: function (width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null
    },

    insert: function ($where) {
        if (this.$elem) {
            this.$elem.css({
                width: this.width + `px`,
                height: this.height + `px`
            }).appendTo($where)
        }
    },
    aaa: function () {
        alert('a')
    }
}
var Button = Object.create(A)

Button.setup = function (width, height, label) {
    this.init(width, height)
    this.label = label || 'default'
    this.$elem = $('<button>').text(this.label)
}

Button.onClick = function (ev) {
    console.log(this.label)
}
Button.build = function ($where) {
    this.insert($where)
    this.$elem.click(
        this.onClick.bind(this)
    )    
}
$(document).ready(function () {
    var $body = $(document.body)
    var btn1 = Object.create(Button)
    btn1.setup(125, 35, 'hello')
    var btn2 = Object.create(Button)
    btn2.setup(150, 35, 'world')
    btn1.build($body)
    btn2.build($body)
})
