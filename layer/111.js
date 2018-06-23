var Dmset = (function () {
    //定义构造器
    var Dmset = function (options={}) {
        this.init(options.btn);//初始化操作
        this.bind(options.btn);//绑定监听
        this.spd = options.speed||1;
        this.f_size = options.font_size||20;
    };
    //原型上拓展功能
    Dmset.prototype = {
        init:function(op){   
            for (let i = 0; i <op.length; i++) {
                var near = document.querySelector(op[i]);
                op.splice(i,1,near);
            }
            return op; 
        },
        bind:function(ary){
            var _this = this;
            ary[0].addEventListener('click',function () {
                _this.shut();
            });
            ary[1].addEventListener('click',function () {
                _this.clear();
            });
        },
        shut:function () {
            this.style(this.spd,this.f_size);
        },
        clear:function () {
            //删除节点
            var spp = document.querySelectorAll("main span")||[];
            var aspp = spp.length;
            for (var i=aspp;i--;){
                document.querySelector('main').removeChild(spp[i]);
            }
        },
        ran: (t) => (Math.floor(Math.random()*t)),
        // ran:function (t) {
        //     return Math.floor(Math.random()*t);
        // },
        color:function (ar) {
            for (let i=0;i<3;i++){
                ar.push(this.ran(100));
                var narr=ar.join('');
            }
            return '#'+narr;
        },
        style:function (sp,fs) {
            var cmain = document.querySelector('main');
            cmain.style.overflow='hidden';
            cmain.style.position='relative';
            //生成节点
            var span = document.createElement('span');
            cmain.appendChild(span);
            //设置节点
            span.innerHTML=document.querySelector('input[type="text"]').value;
            //设置样式
            span.style.position='absolute';
            span.style.fontSize=fs+'px';
            span.style.whiteSpace='pre';
            //随机位置
            var index = 0;
            var y = this.ran(380);
            var arr=[y];
            span.style.right=index+'px';
            span.style.top=arr[index]+'px';
            // span.style.transform = 'translateY('+arr[index]+'px'+')';
            // span.style.transform = 'translateY('+arr[index]+'px'+')';
            // span.style.transform = 'translate('+index+'px'+','+arr[index]+'px'+')';
            //随机颜色
            span.style.color=this.color([]);
            //定时器
            var timer = setInterval(function() {
                if(index<=300){
                    index+=sp;
                }else if(index>300&&index<=600){
                    index+=sp*1.2;
                }else if(index>600&&index<=800){
                    index+=sp*1.5;
                }else if(index>800){
                    clearInterval(timer);
                    document.querySelector('main').removeChild(span);
                }
                span.style.right=index+'px';


            },10);
        }
    };
    return Dmset;
})();