window.onload = function () {


    var img = document.getElementById('img');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var a = document.getElementById('link');
    var imgurl = ['../image/1.jpg', '../image/2.jpg'];
    var num = 0;
    img.src = imgurl[num];


    a.addEventListener('click',
        function () {
            num++;
            if (num == imgurl.length) {
                num = 0;
            }
            img.src = imgurl[num];
        }
    )
    two.addEventListener('click', function own() {
        var div = document.createElement('div');
        var span = document.createElement('span');
        var span1 = document.createElement('span');
        var img1 = document.createElement('img');
        document.body.appendChild(div);
        span1.appendChild(img1);
        span.innerText = one.value;
        img1.src = imgurl[num];
        if (num == 0) {
            img1.style.marginLeft = '-5px';
            div.style.textAlign = 'right';
            span.style.backgroundColor = '#58AA53 ';
            div.appendChild(span);
            div.appendChild(span1);
        } else {
            img1.style.marginRight = '-5px';
            div.style.textAlign = 'left';
            span.style.backgroundColor = '#aa773f';
            div.appendChild(span1);
            div.appendChild(span);
        }
    })
}