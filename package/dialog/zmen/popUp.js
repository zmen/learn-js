function dialog(option) {
    var clickBtn = document.querySelectorAll(option.trigger)[0];
    var popUp = document.querySelectorAll(option.popUp)[0];
    var close = document.querySelectorAll(option.closeBtn)[0];
    var content = document.querySelectorAll(option.contentArea)[0];
    if(option.content) {
        content.innerHTML = option.content;
    }
    clickBtn.onclick = function () {
        option.effectShow(popUp);
    }
    close.onclick = function () {
        option.effectHide(popUp);
    }
}

document.onkeydown = function(event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 27) {
        var popUp = document.querySelectorAll(".zmen-popup")[0];
        popUp.style.opacity = 0;
    }
}

window.onload = dialog
(
    {
        trigger: '.zmen-click',
        popUp: '.zmen-popup',
        closeBtn: '.zmen-close',
        contentArea: '.zmen-content',
        content: '<p>Something new</p>',
        effectShow: function (element) {
            element.style.opacity = 1;
        },
        effectHide: function (element) {
            element.style.opacity = 0;
        }
    }
)
