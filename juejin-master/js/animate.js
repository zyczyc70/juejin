function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 到达目标位置，如果有传进来回调函数，则调用函数
            if(callback){
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 15)
}