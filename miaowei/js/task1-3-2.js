window.onload=function () {
    
    var two = document.getElementById('two');
    var one =document.getElementById('one');
    var li = one.getElementsByTagName('li');
    var img =document.getElementById('img');
    var imgUrl = ['../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg'];
    var index = 0;
    function taba() {
        img.src=imgUrl[index];
        two.innerHTML=1+index+'/'+imgUrl.length;
        for(var i=0;i<=li.length;i++){
            li[i].className='';
            li[index].className='c';
        }
    }

    // oli=li[0];
    for(var i=0;i<li.length;i++){
        li[i].sy=i;
        li[i].onclick=function () {
            index=this.sy;
            taba();
            // // 第二种
            // oli.className='';
            // this.className='c';
            // oli=this;
        };
    }
    taba();
};