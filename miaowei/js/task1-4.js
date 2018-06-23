window.onload=function(){
    var img=document.getElementById('img');
    var prep=document.getElementById('prep');
    var next=document.getElementById('next');
    var ul=document.getElementById('ul');
    var li = ul.getElementsByTagName('li');
    var oimg=document.getElementsByClassName('slv');
    var imgUrl=['../image/1.jpg','../image/2.jpg','../image/3.jpg','../image/4.jpg'];
    var num=0;
    function tab() {
        img.src=imgUrl[num];
        for(var i=0;i<imgUrl.length;i++){
            oimg[i].src=imgUrl[i];
            li[i].className='';
        }
        li[num].className='hover';
    }
    prep.onclick=function () {
        num++;
        if(num==imgUrl.length){
            num=0;
        }
        tab();
    };
    for(var i=0;i<li.length;i++){
        li[i].index=i;
        li[i].onclick=function () {
            num=this.index;
            tab();
        }
    }
    tab();
};