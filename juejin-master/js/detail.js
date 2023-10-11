window.addEventListener('load', function () {
    var aside_lis = this.document.querySelector('aside').querySelectorAll('li');
    var yuedu = this.document.querySelector('.yuedu');
    var sanjiao = this.document.querySelector('aside').querySelector('.yuesj');
    var bg = this.document.querySelector('.bg');
    // 点赞按钮触发的事件
    aside_lis[0].addEventListener('click', function () {
        if (this.style.color != 'rgb(30, 128, 255)') {
            this.style.color = '#1e80ff';
        } else {
            this.style.color = '#8a919f';
        }
    })
    // 沉浸阅读按钮触发的事件
    aside_lis[5].addEventListener('click', function () {
        if (this.style.color != 'rgb(30, 128, 255)') {
            for (var i = 0; i < aside_lis.length; i++) {
                aside_lis[i].style.display = 'none';
            }
            this.style.display = 'block';
            this.style.color = '#1e80ff';
            yuedu.style.top = '-53px';
            sanjiao.style.top = '-11px';
        } else {
            for (var i = 0; i < aside_lis.length; i++) {
                aside_lis[i].style.display = 'block';
            }
            this.style.color = '#8a919f';
            yuedu.style.top = '307px';
            sanjiao.style.top = '349px';
        }
    })
    aside_lis[5].addEventListener('mouseenter', function () {
        yuedu.style.display = 'block';
        sanjiao.style.display = 'block';
    })
    aside_lis[5].addEventListener('mouseleave', function () {
        yuedu.style.display = 'none';
        sanjiao.style.display = 'none';
    })
    // 收藏按钮触发的事件
    var box_sc = this.document.querySelector('.box-sc');
    var sc_close = box_sc.querySelector('.close');
    aside_lis[2].addEventListener('click', function () {
        bg.style.display = 'block';
        box_sc.style.display = 'block';
    })
    sc_close.addEventListener('click', function () {
        bg.style.display = 'none';
        box_sc.style.display = 'none';
    })
    // 举报按钮触发的事件
    var box_jb = this.document.querySelector('.box-jb');
    var jb_close = box_jb.querySelector('.close');
    aside_lis[4].addEventListener('click', function () {
        bg.style.display = 'block';
        box_jb.style.display = 'block';
    })
    jb_close.addEventListener('click', function () {
        bg.style.display = 'none';
        box_jb.style.display = 'none';
    })
    // 分享按钮触发的事件
    var share = this.document.querySelector('.share');
    var zuosj = share.querySelector('span');
    aside_lis[3].addEventListener('mouseenter', function () {
        share.style.display = 'block';
        zuosj.style.display = 'block';
        share.addEventListener('mouseleave', function () {
            share.style.display = 'none';
            zuosj.style.display = 'none';
        })
    })
    // 评论按钮触发的事件
    var article = this.document.querySelector('.article');
    aside_lis[1].addEventListener('click', function () {
        window.scroll(0, article.offsetHeight);
    })

    // 评论区
    var criticism_title = this.document.querySelector('.criticism-title');
    var criticism_input = this.document.querySelector('.criticism').querySelector('input');
    var publish = this.document.querySelector('.publish');
    var publish_btn = publish.querySelector('.publish_btn')
    criticism_input.addEventListener('focus', function () {
        criticism_input.removeEventListener('blur', input_blur);
        this.style.backgroundColor = 'white';
        this.style.border = '1px solid #1e80ff';
        publish.style.display = 'flex';
        if (criticism_input.value===''){
            publish_btn.style.backgroundColor = '#ABCDFF';
        }else {
            publish_btn.style.backgroundColor = '#1171ee';
        }
        publish_btn.addEventListener('mouseenter', function () {
            if (criticism_input.value!==''){
                publish_btn.style.backgroundColor = '#388EFF';
                publish_btn.style.cursor = 'pointer';
            }
        })
        publish_btn.addEventListener('mouseleave', function () {
            publish_btn.style.backgroundColor = '#1171ee';
        })
    })
    publish_btn.addEventListener('click',function () {
        let value = criticism_input.value;
        console.log(value)
        criticism_input.value = ''
    })

    function input_blur() {
        criticism_input.style.backgroundColor = '#f3f3f3';
        criticism_input.style.border = 'none';
        publish.style.display = 'none';
    }

    criticism_title.addEventListener('mouseleave', function () {
        criticism_input.addEventListener('blur', input_blur)
    })

    // 查看全部评论
    var look_all_criticism = this.document.querySelector('.look-all-criticism');
    var all_content = this.document.querySelector('.all-content');
    look_all_criticism.addEventListener('click', function () {
        all_content.style.height = 'auto';
        all_content.style.overflow = 'visible';
        this.style.display = 'none';
    })

    // 相关推荐
    var see_good_say = this.document.querySelectorAll('.see-good-say');
    var sgs_lis;
    // var goodNum;
    for (var i = 0; i < see_good_say.length; i++) {
        sgs_lis = see_good_say[i].querySelectorAll('li');
        sgs_lis[0].addEventListener('click', function () {
            window.open("detail.html");
        })
        sgs_lis[2].addEventListener('click', function () {
            window.open("detail.html");
        })
        sgs_lis[1].addEventListener('click', function () {
            if (this.style.color != 'rgb(30, 128, 255)') {
                this.style.color = '#1e80FF';
                this.querySelector('span').innerHTML = Number(this.querySelector('span').innerHTML) + 1;
            } else {
                this.style.color = '#515767';
                this.querySelector('span').innerHTML = Number(this.querySelector('span').innerHTML) - 1;
            }
        })
    }

    // 标题目录盒子
    var h3_lis = this.document.querySelector('.h3-lis')
    // h3
    var h3_num = this.document.querySelector('.article').querySelectorAll('h3');
    // h3导航
    let h3_nav_li = this.document.querySelector('.h3-nav').querySelectorAll('li');
    var h3_nav_a = this.document.querySelector('.h3-nav').querySelectorAll('a');
    function scrollClick() {
        if (window.pageYOffset >= 840) {
            h3_lis.style.position = 'fixed';
            h3_lis.style.top = 20 + 'px';
            back_top.style.display = 'block';
        } else {
            h3_lis.style.position = 'absolute';
            h3_lis.style.top = 860 + 'px';
            back_top.style.display = 'none';
        }
        for (let i = 0; i < h3_num.length; i++) {
            if (0 <= h3_num[i].getBoundingClientRect().top && h3_num[i].getBoundingClientRect().top <= 140) {
                for (var j = 0; j < h3_nav_a.length; j++) {
                    h3_nav_a[j].className = '';
                }
                h3_nav_a[i].className = 'here';
                break;
            } else if (h3_num[i].getBoundingClientRect().top > 140 && h3_nav_a[i].className === 'here' && i != 0) {
                h3_nav_a[i].className = '';
                h3_nav_a[i - 1].className = 'here';
                break;
            }
        }
    }

    document.addEventListener('scroll', scrollClick);
    //实现点击滑动效果
    let titles = document.querySelectorAll('h3');
    let article_child = article.children;
    function getHeight(obj){
        let height = 0;
        let computedStyle = getComputedStyle(obj, null);
        while (obj!==null){
            height = height + obj.offsetHeight+parseInt(computedStyle.marginTop);
            // console.log(obj.tagName)
            if (obj.tagName==='IMG'){
                console.log(obj.offsetHeight)
                console.log(parseInt(computedStyle.margin))
            }
            obj = obj.previousElementSibling;
        }
        return height;
    }
    function getOffsetTop(obj) {
        let offsetTop = 0;
        while (obj!== window.document.body && obj!=null){
            offsetTop += offsetTop;
            obj = obj.offsetParent;
        }
        return offsetTop;
    }

    for (let i=0;i<h3_nav_li.length;i++){
        h3_nav_a[i].setAttribute('href', '#' + titles[i].getAttribute('id'));
    }
    //实现点击变色效果
    for (let i=0;i<h3_nav_li.length;i++){
        h3_nav_li[i].addEventListener('click', function (e) {
            document.removeEventListener('scroll', scrollClick);
            for (let j = 0; j < h3_nav_li.length; j++) {
                h3_nav_a[j].className = '';
            }
            let header = document.querySelector('.main-header-box');
            let headerHeight = header.clientHeight + parseInt(getComputedStyle(header, null).marginBottom);
            let articleHeight = parseInt(getComputedStyle(article, null).paddingTop);
            let height = getHeight(titles[i]) - headerHeight - articleHeight;
            window.scrollTo({
                top: height - titles[i].offsetHeight - 500,
                behavior: "smooth"
            })
            h3_nav_a[i].className = 'here';
            document.addEventListener('click', scrollClick);
        });
    }


    // 右下角
    var back_top = this.document.querySelector('.back-top');
    var suggest = this.document.querySelector('.suggest');
    back_top.addEventListener('click', function () {
        window.scroll(0, 0);
    })
    suggest.addEventListener('click', function () {
        window.open('suggest.html');
    })
    // 头部
    let search = document.querySelector("input");
    let addGroup = document.querySelector('.add-group');
    let triangle = document.querySelector('.icon-xiasanjiaoxing');
    let more = document.querySelector('.more');
    let flag = 0;
    let light = document.querySelector('.notification');
    search.addEventListener('focus', function () {
        this.setAttribute('placeholder', '搜索文章/小册/标签/用户');
        addGroup.style.visibility = 'hidden';
        light.style.left = '110%';
    })
    search.addEventListener("blur", function () {
        this.setAttribute('placeholder', '探索稀土掘金');
        addGroup.style.visibility = 'visible';
        light.style.left = '120%';
    })
    more.addEventListener('click', function () {
        if (flag === 0) {
            triangle.style.transform = 'rotate(180deg)';
            // triangle.style.transform-origin = 'center center';
            flag = 1;
        } else {
            triangle.style.transform = 'rotate(0deg)';
            flag = 0;
        }
        triangle.style.transition = 'transform .1s';
    })
    // 实现无限滚动
    let recommend_lis = document.querySelector('.recommend-lis');
    let footer = document.querySelector('#footer');
    function infinityScroll(footerNode,callback){
        let observer = new IntersectionObserver(function (changes) {
            if (changes[0].intersectionRatio<=0) return;
            callback();
        });
        console.log(footerNode)
        observer.observe(footerNode);
    }
    infinityScroll(footer,function () {
        console.log(recommend_lis)
        let clone = recommend_lis.firstElementChild.cloneNode(true);
        console.log(clone)
        for (let i=0;i<5;i++){
            recommend_lis.insertBefore(clone, footer);
        }
        console.log(recommend_lis.insertBefore(clone,footer))
    })
})

