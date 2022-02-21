
/* 获取元素 */

var main = document.getElementById('main');
var bg = document.querySelector('.bg');
var image = document.querySelector('.image');
var select = document.querySelector('.select');
var dian = document.getElementsByClassName('dian');
var left = document.querySelector('.left');
var right = document.querySelector('.right');

/* 设置数组，里面放图片的地址 */

var picture = ['./h1.png', './h2.png', './h3.png', './h4.png', './h5.png', './h6.png', './h7.png', './h8.png'];

/* 设置index为0，这个变量后面就一直用来充当图片数组的下标 */
var index = 0;

/* 从图片数组的长度，动态添加小圆点 */

for (let i = 0; i < picture.length; i++) {
    let dot = document.createElement('div');
    dot.classList.add('dian');
    select.appendChild(dot);
    /* 添加自定义属性index，对应每张图片的下标 */
    dot.bianhao = i;
}

/* 排他思想，清除所有小圆点check样式，后面要引用这个封装函数 */

function qingchu() {
    for (let i = 0; i < dian.length; i++) {
        dian[i].classList.remove('check');

    }
}


/* 切下一张图的封装函数，后面也是要引用 */

function yunxing() {
       /* index加1 */
    index = index + 1;
    if (index == picture.length) {
        index = 0;
    }
     /* 显示图片，显示图片数组下标为目前index那张 */
    image.src = picture[index];
     /* 虚化背景也要换 */
    bg.style.cssText = ` background-image: url(${picture[index]});`

    /* 小圆点的显示 */
    qingchu();
      /* 显示那张图就显示对于的圆点，给他.check的样式 */
    dian[index].classList.add('check');

    /* 若index超过，回到-1 */
    if (index == picture.length - 1) {
        index = -1;
    }

}



/* 点击向右按钮时的操作 */

right.addEventListener('click', function () {
    /* 直接用上面的切图封装函数 */
    yunxing();
})

/* 点击向左按钮时的操作，跟上面的切下张图封装函数异曲同工 */

left.addEventListener('click', function () {

    index = index - 1;
    if (index == -1) {
        index = picture.length - 1;
    }
    image.src = picture[index];
    bg.style.cssText = ` background-image: url(${picture[index]});`

    /* 向左时小圆点的显示 */
    qingchu();
    dian[index].classList.add('check');

})


/* 进入main这个底层盒子时，停止自动轮播和.yun类的动画效果，自动轮播的定时器我写在最后面 */

main.addEventListener('mouseover', function () {

    clearInterval(lunbo);

    image.classList.remove('yun');

})

/*  离开main这个底层盒子时，开始自动轮播和.yun类的动画效果，自动轮播的定时器我写在最后面 */

main.addEventListener('mouseout', function () {

    lunbo = setInterval(yunxing, 5000);

    image.classList.add('yun');
    image.style.animationDelay = '5s';
})


/*  点击小圆点时的切图操作 */
for (let i = 0; i < picture.length; i++) {
    dian[i].addEventListener('click', function () {
        qingchu();
        this.classList.add('check');
        index = i;
        image.src = picture[index];
    bg.style.cssText = ` background-image: url(${picture[index]});`

    })
}

/* 自动轮播定时器与初始状态 */

lunbo = setInterval(yunxing, 5000);
image.classList.add('yun');
dian[0].classList.add('check');
// 引用北极光之夜

// 版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
// 本文链接：https://blog.csdn.net/SAKURE2210866448/article/details/102645428
window.onload = function () {
    var btnPre = document.getElementById('btpre');
    var btnNext = document.getElementById('next');
    var list = document.getElementById('list');
    var aud = document.getElementById('aud');
    var li = list.getElementsByTagName('li');
    var mymusic = ['./汪苏泷 - 第十二夜.mp3', './萧忆情Alex 洛绯烟 - 悬崖·海棠.mp3', './周深 - 化身孤岛的鲸.mp3'];
    for (var i = 0; i < li.length; i++) {
      li[i].onclick = function () {
        for (var i = 0; i < li.length; i++) {
          if (this == li[i]) {
            li[i].className = 'play';
            aud.src = mymusic[i];
            aud.play();
          } else {
            li[i].className = '';
  
          }
        }
      }
    }
    function getPlay() {
      for (var r = 0; r < li.length; r++) {
        if (li[r].getAttribute('class') == 'play') {
          return r;
  
        }
      }
    }
    aud.onended = function () {
      var a = getPlay();
      a++;
      if (a > li.length - 1) {
        a = 0;
      }
      for (var j = 0; j < li.length; j++) {
        li[j].className = '';
      }
      aud.src = mymusic[a];
      aud.play();
      li[a].className = 'play';
    }
    
    btnNext.onclick = function () {
      var musicIndex = getPlay();
      if (musicIndex == li.length - 1) {
        musicIndex = -1;
      }
      aud.src = mymusic[musicIndex + 1];
      aud.play();
      for (var j = 0; j < li.length; ++j) {
        li[j].className = '';
      }
      li[musicIndex + 1].className = 'play';
    }
    
    btnPre.onclick = function () {
      var musicIndex = getPlay();
      if (musicIndex == 0) {
        musicIndex = li.length;
      }
      aud.src = mymusic[musicIndex - 1];
      aud.play();
      for (var j = 0; j < li.length; ++j) {
        li[j].className = '';
      }
      li[musicIndex - 1].className = 'play';
    }
  }
 





// 版权声明：本文为CSDN博主「Mine_希冀」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_41659488/article/details/84944029
    //    选择点击事件
            var $staffSelectt_Ul_li = document.querySelectorAll(".like li");
     
            $staffSelectt_Ul_li[0].onclick = function(){
                //获取小箭头对象
                var $imgLabel = document.querySelector(".like li:first-child img");
                //获取下标为 2 的li标签的display 状态，如果是 block ，说明 li 标签已经显示了
                //所以点击事件， 执行的是 关闭 li 标签列表的功能。  反之亦然
                var $tempFlag = $staffSelectt_Ul_li[1].style.display;
                if($tempFlag ==="block" ){
                    //  小箭头旋转,回位
                    $imgLabel.style.transform = 'rotate(0deg)';
                    for(var $i=1;$i<$staffSelectt_Ul_li.length;$i++){
                        $staffSelectt_Ul_li[$i].style.display = "none";
                    }
                }else{
                    //  小箭头旋转,90du
                    $imgLabel.style.transform = 'rotate(90deg)';
     
                    for(var $i=1;$i<$staffSelectt_Ul_li.length;$i++){
                        $staffSelectt_Ul_li[$i].style.display = "block";
                    }
                }
            };


