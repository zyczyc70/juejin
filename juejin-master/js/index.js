window.onload = function () {
    {
        // 首页隐藏菜单栏及图标变化
        var hiddenindex = document.querySelector('#hidden-index');
        var hiddensvg = document.querySelector('.hiddensvg');
        var indexmenu = document.querySelector('#index-menu');
        hiddenindex.addEventListener('click', togglesvg, false);
        function togglesvg() {
            let disp = indexmenu.style.display;
            indexmenu.style.display = disp == 'block' ? 'none' : 'block';
            hiddensvg.classList.toggle('activemenusvg');
        }
    }
    {
        // 创作者中心svg图标变化以及隐藏菜单栏
        var moresvg = document.querySelector("#more-svg");
        var morelist = document.querySelector('#more-list');
        moresvg.addEventListener('click', togglesvg, false);
        function togglesvg() {
            this.classList.toggle("show-svg");
            let disp = morelist.style.display;
            morelist.style.display = disp == 'block' ? 'none' : 'block';
        };
    }

    {
        // 搜索框获取焦点时的动画
        var winWidth = document.body.clientWidth || document.documentElement.clientWidth;
        var searchinput = document.querySelector('.search-input');
        var searchicon = document.querySelector('.search-icon');
        var searchimg = document.querySelector('#search-img');
        var loginbtn = document.querySelector('#login-btn');
        searchinput.onfocus = function () {
            // addgroup.style.display = 'none';
            this.setAttribute('placeholder', '搜索文章/小册/标签/用户');
            this.classList.add('input-inputfocused');
            this.parentElement.classList.add('searchform-inputfocused');
            searchicon.classList.add('icon-inputfocused');
            searchimg.setAttribute("src", 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/6dbcdb42ffe8d518a318a5e26efade18.svg');
            if (winWidth <= 800) {
                loginbtn.style.display = 'none';
            }
        }
        searchinput.onblur = function () {
            // addgroup.style.display = 'flex';
            this.setAttribute('placeholder', '探索稀土掘金');
            this.classList.remove('input-inputfocused');
            this.parentElement.classList.remove('searchform-inputfocused');
            searchicon.classList.remove('icon-inputfocused');
            searchimg.setAttribute("src", 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg');
            if (winWidth <= 800) {
                loginbtn.style.display = 'block';
            }
        }
    }
    {
        // 鼠标滚轮事件控制导航栏和右边内容区1635变化
        var navbar = document.querySelector('#nav-bar');
        var navlist = document.querySelector('#nav-list');
        var hiddenimgbox = document.querySelector('.hiddenimgbox');
        var sign = 250;
        windowAddMouseWheel();
        function windowAddMouseWheel() {
            window.onscroll = function () {
                var oScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (oScrollTop > sign && oScrollTop > 250) {
                    sign = oScrollTop;
                    navbar.style.top = -2 + "rem";
                    navlist.style.top = -1 + "rem";
                }
                if (oScrollTop < sign && oScrollTop > 250) {
                    sign = oScrollTop
                    navbar.style.top = 0 + 'rem';
                    navlist.style.top = 1 + "rem";
                }
                if (oScrollTop > 1680) {
                    hiddenimgbox.classList.add('showimgbox');
                } else {
                    hiddenimgbox.classList.remove('showimgbox');
                }
            }
        }
    }

    {
        //鼠标悬浮显示tag内容
        var om1 = document.getElementById('1');
        var ob1 = document.getElementById("backend");
        ob1.style.display = "none";
        ob1.onmouseover = om1.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob1.style.display = "block";
        }
        ob1.onmouseout = om1.onmouseout = function () {
            timer = setTimeout(() => {
                ob1.style.display = "none";
            }, 10);
        }

        var om2 = document.getElementById('2');
        var ob2 = document.getElementById("fontend");
        ob2.style.display = "none";
        ob2.onmouseover = om2.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob2.style.display = "block";
        }
        ob2.onmouseout = om2.onmouseout = function () {
            timer = setTimeout(() => {
                ob2.style.display = "none";
            }, 10);
        }

        var om3 = document.getElementById('3');
        var ob3 = document.getElementById("android");
        ob3.style.display = "none";
        ob3.onmouseover = om3.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob3.style.display = "block";
        }
        ob3.onmouseout = om3.onmouseout = function () {
            timer = setTimeout(() => {
                ob3.style.display = "none";
            }, 10);
        }

        var om4 = document.getElementById('4');
        var ob4 = document.getElementById("ios");
        ob4.style.display = "none";
        ob4.onmouseover = om4.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob4.style.display = "block";
        }
        ob4.onmouseout = om4.onmouseout = function () {
            timer = setTimeout(() => {
                ob4.style.display = "none";
            }, 10);
        }

        var om5 = document.getElementById('5');
        var ob5 = document.getElementById("ai");
        ob5.style.display = "none";
        ob5.onmouseover = om5.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob5.style.display = "block";
        }
        ob5.onmouseout = om5.onmouseout = function () {
            timer = setTimeout(() => {
                ob5.style.display = "none";
            }, 10);
        }

        var om6 = document.getElementById('6');
        var ob6 = document.getElementById("freebie");
        ob6.style.display = "none";
        ob6.onmouseover = om6.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob6.style.display = "block";
        }
        ob6.onmouseout = om6.onmouseout = function () {
            timer = setTimeout(() => {
                ob6.style.display = "none";
            }, 10);
        }

        var om7 = document.getElementById('7');
        var ob7 = document.getElementById("career");
        ob7.style.display = "none";
        ob7.onmouseover = om7.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob7.style.display = "block";
        }
        ob7.onmouseout = om7.onmouseout = function () {
            timer = setTimeout(() => {
                ob7.style.display = "none";
            }, 10);
        }

        var om8 = document.getElementById('8');
        var ob8 = document.getElementById("article");
        ob8.style.display = "none";
        ob8.onmouseover = om8.onmouseover = function () {
            if (timer) clearTimeout(timer)
            ob8.style.display = "block";
        }
        ob8.onmouseout = om8.onmouseout = function () {
            timer = setTimeout(() => {
                ob8.style.display = "none";
            }, 10);
        }

    }

    {
        // 回到顶部
        function toTop() {
            var getDiv4 = document.querySelector(".to-top-btn");
            getDiv4.onclick = function () {
                window.scrollTo(0, 0);
            }
            window.addEventListener("scroll", function () {
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                if (osTop >= 900) {
                    getDiv4.style.display = 'block';
                } else {
                    getDiv4.style.display = 'none';
                }
            })
        }
        toTop();

        // 反馈
        var getDiv5 = document.querySelector(".meiqia-btn");
        getDiv5.onclick = function () {
            window.open('https://juejin.cn/pin/club/6824710202692993037?sort=newest');
        }
    }

    {


    }
}


