window.onload = function () {
    var data = {
        dat: ['img', 'next', 'prep', 'xh', 'sx', 'aa'],
        darr: [],
        imgUrl: ['../image/1.jpg', '../image/2.jpg', '../image/3.jpg', '../image/4.jpg'],
        arr: ['图片可以循环切换', '图片只能从第一张到最后一张切换'],
        index: 0,
        // dom方法
        dm: function () {
            // 数组深拷贝 抽象全局变量
            this.darr = this.dat.concat();
            for (let i = 0; i < data.dat.length; i++) {
                data.darr[i] = document.getElementById(data.dat[i]);
            }
        },
        // 监听函数
        lis: function (ind, fname) {
            data.darr[ind].addEventListener('click', fname);
            // return this;
        }
    }

    function za() {
        data.darr[1].onclick = function xhh() {
            data.index++;
            if (data.index == data.imgUrl.length) {
                data.index = 0;
            }
            data.darr[0].src = data.imgUrl[data.index];
        };
        data.darr[2].onclick = function xhq() {
            if (data.index == 0) {
                data.index = data.imgUrl.length;
            }
            data.index--;
            data.darr[0].src = data.imgUrl[data.index];
        };
        data.darr[5].innerText = data.arr[0];
    }

    function zb() {
        data.darr[1].onclick = function sxh() {
            if (data.index < data.imgUrl.length - 1) {
                data.index++;
            } else {
                data.index = data.imgUrl.length - 1;
                alert('到头了');
            }
            data.darr[0].src = data.imgUrl[data.index];
        };
        data.darr[2].onclick = function shq() {
            if (data.index < data.imgUrl.length) {
                data.index--;
            }
            if (data.index + 1 == 0) {
                alert('到头了');
                data.index = 0;
            }
            data.darr[0].src = data.imgUrl[data.index];
        }
        data.darr[5].innerText = data.arr[data.arr.length - 1];
    }

    function _main_() {
        data.dm(data.dat);
        data.darr[0].src = data.imgUrl[data.index];
        data.lis(3, za);
        data.lis(4, zb);
    }
    _main_();
}