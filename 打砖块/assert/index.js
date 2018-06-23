window.onload = function () {
    var log = console.log.bind(console);
    
    var GuaGame = function () {
        var g = {
            canvas : document.getElementById('canvas'),
            context : this.canvas.getContext('2d'),
            leftDown : false,
            rightDown : false,
            actions : {
    
            },
        };
    
        setInterval(function () {
            //update
            g.update();
            //clear
            g.context.clearRect(0, 0, g.canvas.width, g.canvas.height);
            //draw
            g.draw();
        },1000/30);
        return g;
    };
    var Paddle = function () {
        var o = {
            image: imageFromPath('band.PNG'),
            x: 400,
            y: 300,
            speed: 10,
        };
        o.moveLeft = function () {
            o.x -= o.speed;
        };
        o.moveRight = function () {
            o.x += o.speed;
        };
        return o;
    };
    var imageFromPath = function (path) {
        var img = new Image();
        img.src = path;
        return img;
    };
    
    var __main = function () {
        var game = GuaGame();
        var paddle = Paddle();
        game.update = function () {
            if ( game.leftDown ){
                paddle.moveLeft();
            } else if ( game.rightDown ){
                paddle.moveRight();
            }
        };
        game.draw = function () {
            game.context.drawImage(paddle.image, paddle.x, paddle.y);
        };
    
    
        paddle.image.onload = function() {
            game.context.drawImage(paddle.image, paddle.x,paddle.y)
        };
        //event
        window.addEventListener('keydown',function (ev) {
            var k = ev.key;
            if ( k == 'a'){
                game.leftDown = true
            } else if ( k == 'd'){
                game.rightDown = true
            }
    
        });
        window.addEventListener('keyup',function (ev) {
            var k = ev.key;
            if ( k == 'a'){
                game.leftDown = false
            } else if ( k == 'd'){
                game.rightDown = false
            }
    
        });
    
    };
    
    __main();


    var log = console.log.bind(console);
    var Img = function () {
        var g = {
            image: imgUrl('band.PNG'),
            x: 300,
            y: 300,
            speed: 5,
            ctx: document.getElementById('canvas').getContext('2d'),
        };

        g.image.onload = function () {
            g.ctx.drawImage(g.image, g.x, g.y);
        }

    };
    window.addEventListener('keydown',function (ev) {
        if (ev.key === 'a') {
            ev.x -= ev.speed;
        } else if ( ev.key === 'd' ){
            ev.x += ev.speed;
        }
    });
    // window.addEventListener('keyup', function (ev) {
    //
    // });

    //PATH IMG
    var imgUrl = ( path ) => {
        var img = new Image();
        img.src = path;
        return img;
    };

    var ban = new  Img();
    // ban.bind = function () {
    //
    // };


};