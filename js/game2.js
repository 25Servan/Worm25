window.detectLog = null;
const _wrmxt = {
    'BETAisSkinCustom'(_0x59c271) {
        var _0x287095 = /[a-zA-Z]/;
        return "string" === typeof _0x59c271 && _0x287095.test(_0x59c271)
    },
    'testSkinCustom': function(_0x3078c0) {
        return _wrmxt.BETAisSkinCustom(_0x3078c0) ? 0x22 || 0x21 : _0x3078c0
    },
    'testSkinMod': function(_0x20265e) {
        return 0x18f <= _0x20265e && 0x3e7 > _0x20265e
    },
    'testWear': function(_0x506ce6) {
        return 0x18f <= _0x506ce6 && 0x3e7 > _0x506ce6
    },
    'isNumberValid': function(_0x464977) {
        return '' !== _0x464977 && null !== _0x464977 && undefined !== _0x464977 && !isNaN(_0x464977)
    },
    'validInput': function(_0x482bbb) {
        if (!(0x18f <= _0x482bbb && 0x3e7 > _0x482bbb) && !_wrmxt.BETAisSkinCustom(_0x482bbb)) {
            return _0x482bbb
        }
        try {
            let _0x3298be = $("#inputReplaceSkin").val();
            return encodeURI('' !== _0x3298be && null !== _0x3298be && undefined !== _0x3298be && !isNaN(_0x3298be) ? _0x3298be : 0x23)
        } catch (_0x479e8a) {
            return encodeURI(0x23)
        }
    },
    'aload': !1,
    'aId': 0x0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = !1;
var pwrups = {};
window.keyMove = 0x51;
var theoEvents = {
    'eventoPrincipal': null,
    'joystick': {
        'positionMode': 'L',
        'checked': !0,
        'size': 0x5a,
        'mode': "dynamic",
        'position': {
            'left': "110px",
            'bottom': "110px"
        },
        'color': "#FF3B3B",
        'pxy': 0x6e
    }
};
var theoKzObjects = {
    'FB_UserID': '',
    'smoothCamera': 0.5,
    'eat_animation': 0.0025,
    'flag': "https://i.imgur.com/EkbSd65.png",
    'PortionSize': localStorage.PotenciadorSize || 0x2,
    'PortionAura': localStorage.PotenciadorAura || 1.2,
    'PortionTransparent': 0.8,
    'FoodTransparent': 0.3,
    'ModeStremer': !1,
    'ModeStremerbatop': !1,
    'ModeStremeremoj': !1,
    'ModeStremerheadshot': !1,
    'ModeStremersaveheadshot': !1,
    'arrow': !1,
    'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
    'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
    'AbilityZ': !1,
    'FoodShadow': localStorage.ComidaShadow || 0x2,
    'FoodSize': localStorage.ComidaSize || 0x2,
    'headshot': 0x0,
    'visibleSkin': [],
    'pL': [],
    'gamePad': theoEvents.joystick,
    'mobile': !1,
    'loading': !1,
    'kill': 0x0,
    'totalKills': 0x0,
    'totalHeadshots': 0x0,
    'adblock': !1,
    'CLIENTE_ADMIN': 0x1,
    'CLIENTE_ACTIVO': 0x3,
    'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && "null" !== saveGameLocal) {
    let t = JSON.parse(saveGameLocal);
    for (let e in t)
        theoKzObjects[e] = t[e]
}
theoKzObjects.loading = !0;
const PhoneChecked = function() {
    let _0x52e7ce = !1;
    theoKzObjects.mobile = !1;
    var _0x2ac00d = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x2ac00d) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x2ac00d.substr(0x0, 0x4))) {
        theoKzObjects.mobile = !0;
        _0x52e7ce = !0
    }
    return _0x52e7ce
};
const RechekingPhone = function() {
    let _0x527a1c = !1;
    var _0x486265 = navigator.userAgent || navigator.vendor || window.opera;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x486265) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x486265.substr(0x0, 0x4))) {
        _0x527a1c = !0
    }
    return _0x527a1c
};
const loadJoy = function(_0x2d04ed) {
    let _0x18129c;
    try {
        console.log(_0x2d04ed);
        if (!theoKzObjects.gamePad) {
            theoKzObjects.gamePad = theoEvents.joystick
        }
        if (RechekingPhone() && (_0x2d04ed || theoKzObjects.gamePad.checked)) {
            _0x18129c = nipplejs.create(theoKzObjects.gamePad);
            _0x18129c.on("move", function(_0x5e9dcb, _0x159a8b) {
                null.sk = _0x159a8b.angle.radian <= Math.PI ? -0x1 * _0x159a8b.angle.radian : Math.PI - (_0x159a8b.angle.radian - Math.PI);
                console.log(_0x159a8b)
            })
        }
        return _0x18129c
    } catch (_0x12ff0b) {
        console.log(_0x12ff0b)
    }
};
let clientes = {
    'clientesVencidos': [],
    'clientesActivos': []
};
let servers = {
    'Api_listServer': []
};
async function loadUsers() {
    await fetch("https://haylamday.com/api/users.php").then(_0x548d17 => _0x548d17.json()).then(_0x2d8575 => {
        if (_0x2d8575.success) {
            let _0x41147c = _0x2d8575.Users;
            clientes.clientesActivos = _0x41147c.filter(_0x5147b2 => {
                return _0x5147b2.cliente_ID
            }
            )
        } else {
            clientes = {
                'clientesVencidos': [],
                'clientesActivos': []
            };
            alert("An error occurred while loading clients")
        }
    }
    )
}
async function loadServers() {
    await fetch("https://haylamday.com/api/server.php").then(_0x55aef3 => _0x55aef3.json()).then(_0x551e93 => {
        if (_0x551e93.success) {
            let _0x3898cc = _0x551e93.servers;
            servers.Api_listServer = _0x3898cc.filter(_0x4123d3 => {
                return _0x4123d3.serverUrl
            }
            )
        } else {
            servers = {
                'Api_listServer': []
            };
            alert("An error occurred while loading the servers")
        }
    }
    )
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $("#idReplaceSkin");
const ctx = {
    'fontStyle': {
        'name': new PIXI.TextStyle({
            'fill': '#FFFF00',
            'fontSize': 0xc,
            'lineJoin': "round",
            'stroke': "#EFFA45",
            'fontFamily': "vuonghiep",
            'fontWeight': "bold"
        }),
        'blanco': new PIXI.TextStyle({
            'align': 'center',
            'fill': '#FFF',
            'fontSize': 0xc,
            'lineJoin': "round",
            'stroke': "#FFF",
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontWeight': 'bold',
            'wordWrap': !0
        }),
        'morado': new PIXI.TextStyle({
            'align': "center",
            'fill': "#FFFF00",
            'fontSize': 0xa,
            'lineJoin': "round",
            'stroke': "#FAA845",
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': 'vuonghiep',
            'fontWeight': "bold",
            'wordWrap': !0
        }),
        'morado1': new PIXI.TextStyle({
            'align': "center",
            'fill': "#FFF",
            'fontSize': 0xa,
            'lineJoin': "round",
            'stroke': '#FAA845',
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': "vuonghiep",
            'fontWeight': 'bold',
            'wordWrap': !0
        }),
        'amarillo': new PIXI.TextStyle({
            'align': 'center',
            'fill': '#FFFF00',
            'fontSize': 0xa,
            'lineJoin': "round",
            'stroke': "#FAA845",
            'strokeThickness': 0x1,
            'whiteSpace': "normal",
            'fontFamily': "vuonghiep",
            'fontWeight': "bold",
            'wordWrap': !0
        }),
        'amarillo1': new PIXI.TextStyle({
            'align': 'center',
            'fill': "#FFF",
            'fontSize': 0xa,
            'lineJoin': 'round',
            'stroke': "#FAA845",
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': "vuonghiep",
            'fontWeight': "bold",
            'wordWrap': !0
        }),
        'anheadshot': new PIXI.TextStyle({
            'align': 'center',
            'fill': "#FFF",
            'fontSize': 0x0,
            'lineJoin': 'round',
            'stroke': "#FAA845",
            'strokeThickness': 0x1,
            'whiteSpace': 'normal',
            'fontFamily': 'vuonghiep',
            'fontWeight': "bold",
            'wordWrap': !0
        }),
        'keysColor': new PIXI.TextStyle({
            'align': "center",
            'fill': "#fff009",
            'fontSize': 0xa,
            'lineJoin': "round",
            'stroke': '#fff009',
            'strokeThickness': 0x1,
            'whiteSpace': "normal",
            'fontWeight': "bold",
            'fontFamily': "vuonghiep",
            'wordWrap': !0
        })
    }
};
ctx.clock = PIXI.Sprite.fromImage("https://i.imgur.com/v6szE9c.png");
ctx.clock.width = 0x64;
ctx.clock.height = 0x64;
ctx.clock.x = -0x32;
ctx.clock.y = -0x32;
ctx.value_server = new PIXI.Text('WFC',ctx.fontStyle.name);
ctx.value_server.x = 0x19;
ctx.value_server.y = -0x12;
ctx.label_hs = new PIXI.Text('HS',ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text('0',ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text('KL',ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text('0',ctx.fontStyle.morado);
ctx.value2_hs = new PIXI.Text('',ctx.fontStyle.amarillo1);
ctx.value2_kill = new PIXI.Text('',ctx.fontStyle.morado1);
ctx.label_hs.x = 0x41;
ctx.label_hs.y = 0x64;
ctx.label_kill.x = 0xf;
ctx.label_kill.y = 0x64;
ctx.value1_hs.x = 0x41;
ctx.value1_hs.y = 0x74;
ctx.value1_kill.x = 0xf;
ctx.value1_kill.y = 0x74;
ctx.value2_hs.x = 0x41;
ctx.value2_hs.y = 0x85;
ctx.value2_kill.x = 0xf;
ctx.value2_kill.y = 0x85;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -0x2d;
ctx.containerCountInfo.y = -0x34;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0x0;
ctx.containerImgS.y = -0xa;
ctx.containerImgS.width = 0x19;
ctx.containerImgS.height = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -0x2;
ctx.borderImg.y = 0x4e;
ctx.borderImg.width = 0x6e;
ctx.borderImg.height = 0x3c;
ctx.setServer = function(_0x3317ec) {
    ctx.value_server.text = _0x3317ec || "WFC"
}
;
ctx.setCountGame = function(_0xf30bcf, _0x35d243, _0x3111c5, _0x5ad36c) {
    ctx.value1_hs.text = _0x35d243;
    ctx.value1_kill.text = _0xf30bcf
}
;
"use strict";
var _typeof = 'function' == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(_0x41c6f8) {
    return typeof _0x41c6f8
}
: function(_0x2d5f06) {
    return _0x2d5f06 && "function" == typeof Symbol && _0x2d5f06.constructor === Symbol && _0x2d5f06 !== Symbol.prototype ? 'symbol' : typeof _0x2d5f06
}
;
var GoogleAuth;
!function() {
    try {
        console.log(function(_0x536dd2, _0x52bd69) {
            for (var _0x316f16 = 0x0; _0x316f16 < _0x52bd69.length; _0x316f16 += 0x2) {
                _0x536dd2 = _0x536dd2.replaceAll(_0x52bd69[_0x316f16], _0x52bd69[_0x316f16 + 0x1])
            }
            return _0x536dd2
        }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', "hhhh", 'Q', 'ssss', 'M', 'mmm', 'Y', 'yyy', 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]))
    } catch (_0x3fb030) {}
}();
window.addEventListener("load", function() {
    function _0x22b666() {
        (function(_0x1f412d, _0x5dcf38, _0x57e58b) {
            var _0x42d6b0 = [];
            var _0x38582e = [];
            var _0x4302b3 = {
                '_version': "3.3.1",
                '_config': {
                    'classPrefix': '',
                    'enableClasses': !0,
                    'enableJSClass': !0,
                    'usePrefixes': !0
                },
                '_q': [],
                'on': function(_0x45b05e, _0x3298cd) {
                    var _0x43896c = this;
                    setTimeout(function() {
                        _0x3298cd(_0x43896c[_0x45b05e])
                    }, 0x0)
                },
                'addTest': function(_0x2ca4cf, _0x4b8d03, _0x482657) {
                    _0x38582e.push({
                        'name': _0x2ca4cf,
                        'fn': _0x4b8d03,
                        'options': _0x482657
                    })
                },
                'addAsyncTest': function(_0x59d101) {
                    _0x38582e.push({
                        'name': null,
                        'fn': _0x59d101
                    })
                }
            };
                 function ModernizrProto() {}
      ModernizrProto.prototype = Modernizr;
      ModernizrProto = new ModernizrProto();
      var supportsWebSocket = false;
      try {
        supportsWebSocket = "WebSocket" in window && window.WebSocket.CLOSING === 2;
      } catch (error) {}
      ModernizrProto.addTest("websockets", supportsWebSocket);
      var documentElement = document.documentElement;
      var isSVG = documentElement.nodeName.toLowerCase() === "svg";
      ModernizrProto.addTest("canvas", function () {
        var canvas = createElement("canvas");
        return !!canvas.getContext && !!canvas.getContext("2d", {
          willReadFrequently: true
        });
      });
            (function() {
                var _0x29c038;
                var _0x2914b5;
                var _0x29586c;
                var _0x3952b8;
                var _0x50b201;
                var _0x1d1ff5;
                var _0x4cd520;
                for (var _0x1ddbb0 in _0x38582e)
                    if (_0x38582e.hasOwnProperty(_0x1ddbb0)) {
                        _0x29c038 = [];
                        _0x2914b5 = _0x38582e[_0x1ddbb0];
                        if (_0x2914b5.name && (_0x29c038.push(_0x2914b5.name.toLowerCase()),
                        _0x2914b5.options && _0x2914b5.options.aliases && _0x2914b5.options.aliases.length)) {
                            for (_0x29586c = 0x0; _0x29586c < _0x2914b5.options.aliases.length; _0x29586c++) {
                                _0x29c038.push(_0x2914b5.options.aliases[_0x29586c].toLowerCase())
                            }
                        }
                        _0x3952b8 = (undefined === _0x2914b5.fn ? "undefined" : _typeof(_0x2914b5.fn)) === 'function' ? _0x2914b5.fn() : _0x2914b5.fn;
                        for (_0x50b201 = 0x0; _0x50b201 < _0x29c038.length; _0x50b201++) {
                            _0x1d1ff5 = _0x29c038[_0x50b201];
                            _0x4cd520 = _0x1d1ff5.split('.');
                            if (0x1 === _0x4cd520.length) {
                                _0x1420d2[_0x4cd520[0x0]] = _0x3952b8
                            } else {
                                if (!(!_0x1420d2[_0x4cd520[0x0]] || _0x1420d2[_0x4cd520[0x0]]instanceof Boolean)) {
                                    _0x1420d2[_0x4cd520[0x0]] = new Boolean(_0x1420d2[_0x4cd520[0x0]])
                                }
                                _0x1420d2[_0x4cd520[0x0]][_0x4cd520[0x1]] = _0x3952b8
                            }
                            _0x42d6b0.push((_0x3952b8 ? '' : 'no-') + _0x4cd520.join('-'))
                        }
                    }
            }
            )();
            (function(_0xbbbfa6) {
                var _0x4a644b = _0x1e4703.className;
                var _0x1193ed = _0x1420d2._config.classPrefix || '';
                if (_0x4de755) {
                    _0x4a644b = _0x4a644b.baseVal
                }
                if (_0x1420d2._config.enableJSClass) {
                    var _0x154e36 = new RegExp("(^|\\s)" + _0x1193ed + "no-js(\\s|$)");
                    _0x4a644b = _0x4a644b.replace(_0x154e36, '$1' + _0x1193ed + "js$2")
                }
                if (_0x1420d2._config.enableClasses) {
                    _0x4a644b += " " + _0x1193ed + _0xbbbfa6.join(" " + _0x1193ed);
                    if (_0x4de755) {
                        _0x1e4703.className.baseVal = _0x4a644b
                    } else {
                        _0x1e4703.className = _0x4a644b
                    }
                }
            }
            )(_0x42d6b0);
            delete _0x4302b3.addTest;
            delete _0x4302b3.addAsyncTest;
            for (var _0x10e28b = 0x0; _0x10e28b < _0x1420d2._q.length; _0x10e28b++) {
                _0x1420d2._q[_0x10e28b]()
            }
            _0x1f412d.Modernizr = _0x1420d2
        }
        )(window, document);
        return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
    }
    function _0x1a8724(_0x4f4155, _0x3a2263, _0x1320dc) {
        const _0x3305be = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
        const _0x238974 = ['#FFD500', '#FFC75A', "#00B2ED", "#FF4544", "#0094D7", '#CCCF81', "#ff0999"];
        let _0x1f005c = _0x3305be[_0x3a2263] - parseInt((0.99 == _0x1320dc ? 0x1 : _0x1320dc) * _0x3305be[_0x3a2263] / 0x1);
        const _0x563c51 = new PIXI.TextStyle({
            'align': 'center',
            'fill': _0x238974[_0x3a2263],
            'fontSize': 0x19,
            'lineJoin': "round",
            'whiteSpace': "normal",
            'wordWrap': !0,
            'fontFamily': "vuonghiep",
            'fontWeight': 'bold'
        });
        let _0x4d5c25 = "pwr_clock" + _0x3a2263;
        if (!pwrups[_0x4d5c25] && _0x3305be[_0x3a2263] === _0x1f005c) {
            pwrups[_0x4d5c25] = new PIXI.Text(_0x1f005c,_0x563c51);
            pwrups[_0x4d5c25].y = 0x3d;
            _0x4f4155.Tf[_0x3a2263].addChild(pwrups[_0x4d5c25])
        }
        if (pwrups[_0x4d5c25]) {
            pwrups[_0x4d5c25].x = _0x1f005c >= 0x64 ? 0xb : _0x1f005c >= 0xa ? 0x12 : 0x1a;
            pwrups[_0x4d5c25].text = _0x1f005c;
            if (_0x1f005c === 0x0) {
                delete pwrups[_0x4d5c25]
            }
        }
    }
    document.getElementById("game-wrap").style.display = "block";
    if (!_0x22b666()) {
        return void (document.getElementById("error-view").style.display = "block")
    }
    !function() {
        function _0x2294f9(_0x248405) {
            const _0x586a1a = _0x248405 + '=';
            const _0x2dc417 = document.cookie.split(';');
            for (let _0x137b7c = 0x0; _0x137b7c < _0x2dc417.length; _0x137b7c++) {
                let _0x4d751b = _0x2dc417[_0x137b7c];
                while (_0x4d751b.charAt(0x0) === " ") {
                    _0x4d751b = _0x4d751b.substring(0x1)
                }
                if (_0x4d751b.indexOf(_0x586a1a) === 0x0) {
                    return _0x4d751b.substring(_0x586a1a.length, _0x4d751b.length)
                }
            }
            return ''
        }
        function _0x2240ce(_0x57e604, _0x4c0976, _0x1e9565) {
            var _0xf8cf2f = new Date();
            _0xf8cf2f.setTime(_0xf8cf2f.getTime() + 0x5265c00 * _0x1e9565);
            var _0x451261 = "expires=" + _0xf8cf2f.toUTCString();
            document.cookie = _0x57e604 + '=' + _0x4c0976 + "; " + _0x451261 + "; path=/"
        }
        function _0x4bf7fd(_0x3f85f4) {
            var _0x3c449f = (Math.floor(_0x3f85f4) % 0x3c).toString();
            var _0x295f4a = (Math.floor(_0x3f85f4 / 0x3c) % 0x3c).toString();
            var _0x153698 = (Math.floor(_0x3f85f4 / 0xe10) % 0x18).toString();
            var _0xa72d7d = Math.floor(_0x3f85f4 / 0x15180).toString();
            var _0x37251e = window.I18N_MESSAGES["util.time.days"];
            var _0x6163c2 = window.I18N_MESSAGES["util.time.hours"];
            var _0x812217 = window.I18N_MESSAGES["util.time.min"];
            var _0x590be0 = window.I18N_MESSAGES["util.time.sec"];
            return _0xa72d7d > 0x0 ? _0xa72d7d + " " + _0x37251e + " " + _0x153698 + " " + _0x6163c2 + " " + _0x295f4a + " " + _0x812217 + " " + _0x3c449f + " " + _0x590be0 : _0x153698 > 0x0 ? _0x153698 + " " + _0x6163c2 + " " + _0x295f4a + " " + _0x812217 + " " + _0x3c449f + " " + _0x590be0 : _0x295f4a > 0x0 ? _0x295f4a + " " + _0x812217 + " " + _0x3c449f + " " + _0x590be0 : _0x3c449f + " " + _0x590be0
        }
        function _0x73d206(_0x53b549, _0x13ca7d, _0x305c12) {
            var _0x31e051 = document.createElement('script');
            var _0x489731 = !0;
            if (_0x13ca7d) {
                _0x31e051.id = _0x13ca7d
            }
            _0x31e051.async = "async";
            _0x31e051.type = "text/javascript";
            _0x31e051.src = _0x53b549;
            if (_0x305c12) {
                _0x31e051.onload = _0x31e051.onreadystatechange = function() {
                    _0x489731 = !1;
                    try {
                        _0x305c12()
                    } catch (_0x228b6f) {
                        console.log(_0x228b6f)
                    }
                    _0x31e051.onload = _0x31e051.onreadystatechange = null
                }
            }
            (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x31e051)
        }
        function _0x357dff(_0x18b57d, _0x56eaf0) {
            _0x56eaf0.prototype = Object.create(_0x18b57d.prototype);
            _0x56eaf0.prototype.constructor = _0x56eaf0;
            _0x56eaf0.parent = _0x18b57d;
            return _0x56eaf0
        }
        function _0x30b6a2(_0x56726e) {
            _0x56726e %= _0x2e5df6;
            return _0x56726e < 0x0 ? _0x56726e + _0x2e5df6 : _0x56726e
        }
        function _0x156f47(_0xf5e236, _0x1d1e19, _0x443c3f, _0x2c250b) {
            var _0x2222a6 = _0x1d1e19 + _0x2c250b;
            if (null == _0xf5e236) {
                throw new TypeError("this is null or not defined")
            }
            var _0x478c53 = _0xf5e236.length >>> 0x0;
            var _0x3f1a21 = _0x443c3f >> 0x0;
            var _0x1cf3fe = _0x3f1a21 < 0x0 ? Math.max(_0x478c53 + _0x3f1a21, 0x0) : Math.min(_0x3f1a21, _0x478c53);
            var _0x6e69b9 = _0x1d1e19 >> 0x0;
            var _0x408775 = _0x6e69b9 < 0x0 ? Math.max(_0x478c53 + _0x6e69b9, 0x0) : Math.min(_0x6e69b9, _0x478c53);
            var _0x5686e4 = undefined === _0x2222a6 ? _0x478c53 : _0x2222a6 >> 0x0;
            var _0x4b8448 = _0x5686e4 < 0x0 ? Math.max(_0x478c53 + _0x5686e4, 0x0) : Math.min(_0x5686e4, _0x478c53);
            var _0x45a94f = Math.min(_0x4b8448 - _0x408775, _0x478c53 - _0x1cf3fe);
            var _0x433731 = 0x1;
            for (_0x408775 < _0x1cf3fe && _0x1cf3fe < _0x408775 + _0x45a94f && (_0x433731 = -0x1,
            _0x408775 += _0x45a94f - 0x1,
            _0x1cf3fe += _0x45a94f - 0x1); _0x45a94f > 0x0; ) {
                if (_0x408775 in _0xf5e236) {
                    _0xf5e236[_0x1cf3fe] = _0xf5e236[_0x408775]
                } else {
                    delete _0xf5e236[_0x1cf3fe]
                }
                _0x408775 += _0x433731;
                _0x1cf3fe += _0x433731;
                _0x45a94f--
            }
            return _0xf5e236
        }
        function _0x146ef5(_0x499718) {
            if (null != _0x499718.parent) {
                _0x499718.parent.removeChild(_0x499718)
            }
        }
        function _0x396102(_0x221461, _0x588ed7, _0x2a6b0a) {
            var _0x35b467 = (0x1 - Math.abs(0x2 * _0x2a6b0a - 0x1)) * _0x588ed7;
            var _0x3199c2 = _0x35b467 * (0x1 - Math.abs(_0x221461 / 0x3c % 0x2 - 0x1));
            var _0x372af7 = _0x2a6b0a - _0x35b467 / 0x2;
            return 0x0 <= _0x221461 && _0x221461 < 0x3c ? [_0x372af7 + _0x35b467, _0x372af7 + _0x3199c2, _0x372af7 + 0x0] : 0x3c <= _0x221461 && _0x221461 < 0x78 ? [_0x372af7 + _0x3199c2, _0x372af7 + _0x35b467, _0x372af7 + 0x0] : 0x78 <= _0x221461 && _0x221461 < 0xb4 ? [_0x372af7 + 0x0, _0x372af7 + _0x35b467, _0x372af7 + _0x3199c2] : 0xb4 <= _0x221461 && _0x221461 < 0xf0 ? [_0x372af7 + 0x0, _0x372af7 + _0x3199c2, _0x372af7 + _0x35b467] : 0xf0 <= _0x221461 && _0x221461 < 0x12c ? [_0x372af7 + _0x3199c2, _0x372af7 + 0x0, _0x372af7 + _0x35b467] : [_0x372af7 + _0x35b467, _0x372af7 + 0x0, _0x372af7 + _0x3199c2]
        }
        function _0x4931f2() {
            function _0x3579ef() {
                $('#adbl-1').text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
                $("#adbl-2").text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
                $("#adbl-3").text(window.I18N_MESSAGES["index.game.antiadblocker.msg3"]);
                $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', 0xa));
                $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
                $("#adbl-continue").hide();
                $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
                var _0x1e6c08 = 0x5;
                for (var _0xca7053 = 0x0; _0xca7053 < 0x5; _0xca7053++) {
                    setTimeout(function() {
                        _0x1e6c08--;
                        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x1e6c08));
                        if (0x0 === _0x1e6c08) {
                            console.log('aipAABC');
                            try {
                                ga('send', "event", "antiadblocker", window.runtimeHash + "_complete")
                            } catch (_0x15cfb7) {}
                            $("#adbl-continue").fadeIn(0xc8)
                        }
                    }, 0x3e8 * (_0xca7053 + 0x1))
                }
            }
            var _0x143d93 = !1;
            var _0x81cafd = function() {};
            var _0x6b8910 = {};
            $("#adbl-continue").click(function() {
                $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
                _0x81cafd(!1)
            });
            _0x6b8910.a = function(_0x24eca0) {
                _0x81cafd = _0x24eca0;
                if (!_0x143d93) {
                    try {
                        aiptag.cmd.player.push(function() {
                            aiptag.adplayer = new aipPlayer({
                                'AD_WIDTH': 0x3c0,
                                'AD_HEIGHT': 0x21c,
                                'AD_FULLSCREEN': !0,
                                'AD_CENTERPLAYER': !1,
                                'LOADING_TEXT': "loading advertisement",
                                'PREROLL_ELEM': function() {
                                    return document.getElementById("1eaom01c3pxu9wd3")
                                },
                                'AIP_COMPLETE': function(_0x551474) {
                                    console.log("aipC");
                                    _0x81cafd(!0);
                                    $("#1eaom01c3pxu9wd3").hide();
                                    $("#JDHnkHtYwyXyVgG9").hide();
                                    try {
                                        ga('send', "event", 'preroll', window.runtimeHash + "_complete")
                                    } catch (_0x31edc5) {}
                                },
                                'AIP_REMOVE': function() {}
                            })
                        });
                        _0x143d93 = !0
                    } catch (_0xd415cf) {}
                }
            }
            ;
            _0x6b8910.b = function() {
                if (undefined !== aiptag.adplayer) {
                    console.log("aipS");
                    try {
                        ga("send", 'event', 'preroll', window.runtimeHash + '_request')
                    } catch (_0x342501) {}
                    _0x3579ef()
                } else {
                    console.log("aipAABS");
                    try {
                        ga("send", 'event', "antiadblocker", window.runtimeHash + "_start")
                    } catch (_0x467d7e) {}
                    _0x3579ef()
                }
            }
            ;
            return _0x6b8910
        }
        function _0xbc859(_0x5c7872, _0x35a389) {
            var _0x1caa94 = $('#' + _0x5c7872);
            var _0x1707d0 = {};
            var _0x15ccc5 = !1;
            _0x1707d0.a = function() {
                if (!_0x15ccc5) {
                    _0x1caa94.empty();
                    _0x1caa94.append("<div id='" + _0x35a389 + "'></div>");
                    try {
                        try {
                            ga("send", 'event', "banner", window.runtimeHash + "_display")
                        } catch (_0x1d9d12) {}
                        aiptag.cmd.display.push(function() {
                            aipDisplayTag.display(_0x35a389)
                        });
                        _0x15ccc5 = !0
                    } catch (_0x50c536) {}
                }
            }
            ;
            _0x1707d0.c = function() {
                try {
                    try {
                        ga("send", 'event', "banner", window.runtimeHash + "_refresh")
                    } catch (_0x136041) {}
                    aiptag.cmd.display.push(function() {
                        aipDisplayTag.display(_0x35a389)
                    })
                } catch (_0x505d5a) {}
            }
            ;
            return _0x1707d0
        }
        function _0x28a040() {
            function _0x2e3c0c(_0x3b5acb) {
                var _0x4d00db = _0x3b5acb + 0x25 * Math.floor(0xffff * Math.random());
                _0x2240ce(_0x409a8c.d, _0x4d00db, 0x1e)
            }
            return function() {
                var _0x2f8369 = parseInt(_0x2294f9(_0x409a8c.d)) % 0x25;
                console.log("init1 pSC: " + _0x2f8369);
                if (!(_0x2f8369 >= 0x0 && _0x2f8369 < _0xce1435.e)) {
                    _0x2f8369 = Math.max(0x0, _0xce1435.e - 0x2);
                    console.log("init2 pSC: " + _0x2f8369)
                }
                var _0x4ee8e0 = {};
                _0x1d2f59 = _0x4ee8e0;
                _0x4ee8e0.f = _0xce1435;
                _0x4ee8e0.g = !1;
                _0x4ee8e0.i = Date.now();
                _0x4ee8e0.j = 0x0;
                _0x4ee8e0.k = 0x0;
                _0x4ee8e0.l = null;
                _0x4ee8e0.m = _0x2e9381;
                _0x4ee8e0.n = _0x52a5ef;
                _0x4ee8e0.o = null;
                _0x4ee8e0.p = null;
                _0x4ee8e0.q = null;
                _0x4ee8e0.r = null;
                _0x4ee8e0.s = null;
                _0x4ee8e0.t = null;
                _0x4ee8e0.u = null;
                try {
                    if (navigator && navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(_0x54f73e) {
                            if (undefined !== _0x54f73e.coords) {
                                var _0x51992c = _0x54f73e.coords;
                                if (undefined !== _0x51992c.latitude && undefined !== _0x51992c.longitude) {
                                    _0x4ee8e0.l = _0x54f73e
                                }
                            }
                        }, function(_0x4f87da) {})
                    }
                } catch (_0x3c2268) {}
                _0x4ee8e0.v = function() {
                    _0x4ee8e0.p = new _0xe69664();
                    _0x4ee8e0.q = new _0x668d12();
                    _0x4ee8e0.r = new _0xdc46a6();
                    _0x4ee8e0.s = new _0x5dc209();
                    _0x4ee8e0.t = new _0xf5e704();
                    _0x4ee8e0.u = new _0x3556f1();
                    _0x4ee8e0.o = new _0x5e8a85();
                    _0x4ee8e0.o.z = new _0x315874(_0x4ee8e0.o);
                    _0x4ee8e0.a()
                }
                ;
                _0x4ee8e0.a = function() {
                    try {
                        ga('send', "event", "app", window.runtimeHash + "_init")
                    } catch (_0x1868af) {}
                    _0x4ee8e0.o.A = function() {
                        _0x4ee8e0.o.B()
                    }
                    ;
                    _0x4ee8e0.o.C = function() {
                        var _0xc1f2cc = _0x4ee8e0.s.F.D();
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_start", _0xc1f2cc)
                        } catch (_0x193887) {}
                        _0x4ee8e0.r.G(_0xdc46a6.AudioState.H);
                        _0x4ee8e0.s.I(_0x4ee8e0.s.H.J())
                    }
                    ;
                    _0x4ee8e0.o.B = function() {
                        try {
                            ga("send", "event", "game", window.runtimeHash + "_end")
                        } catch (_0xbf44f6) {}
                        if ($("body").height() >= 0x1ae) {
                            _0x4ee8e0.f.K.c()
                        }
                        _0x4ee8e0.p.L();
                        (function() {
                            var _0x26f914 = Math.floor(_0x4ee8e0.o.N.M);
                            var _0x185a17 = _0x4ee8e0.o.O;
                            if (_0x4ee8e0.u.P()) {
                                _0x4ee8e0.u.Q(function() {
                                    _0x4ee8e0.R(_0x26f914, _0x185a17)
                                })
                            } else {
                                _0x4ee8e0.R(_0x26f914, _0x185a17)
                            }
                        }
                        )()
                    }
                    ;
                    _0x4ee8e0.o.S = function(_0x4250b4) {
                        _0x4250b4(_0x4ee8e0.s.H.T(), _0x4ee8e0.s.H.U())
                    }
                    ;
                    _0x4ee8e0.u.V(function() {
                        if (_0x4ee8e0.p.W) {
                            _0x4ee8e0.r.G(_0xdc46a6.AudioState.F);
                            _0x4ee8e0.s.I(_0x4ee8e0.s.F)
                        }
                        if (_0x4ee8e0.u.P()) {
                            try {
                                var _0x461c93 = _0x4ee8e0.u.X();
                                ga("set", "userId", _0x461c93)
                            } catch (_0x27a83b) {}
                        }
                        if (_0x4ee8e0.Y() && _0x4ee8e0.u.P() && !_0x4ee8e0.u.Z()) {
                            _0x4ee8e0.$(!1, !1);
                            _0x4ee8e0.s.aa._(new _0x23d3b4())
                        } else {
                            _0x4ee8e0.ba(!0)
                        }
                    });
                    _0x4ee8e0.p.ca(function() {
                        _0x4ee8e0.r.G(_0xdc46a6.AudioState.F);
                        _0x4ee8e0.s.I(_0x4ee8e0.s.F)
                    });
                    _0x4ee8e0.q.a(function() {
                        _0x4ee8e0.o.a();
                        _0x4ee8e0.r.a();
                        _0x4ee8e0.s.a();
                        _0x4ee8e0.t.a();
                        _0x4ee8e0.p.a();
                        _0x4ee8e0.u.a();
                        if (_0x4ee8e0.Y() && !_0x4ee8e0.Z()) {
                            _0x4ee8e0.s.aa._(new _0x23d3b4())
                        } else {
                            _0x4ee8e0.ba(!0)
                        }
                    })
                }
                ;
                _0x4ee8e0.da = function(_0x58686e) {
                    if (_0x4ee8e0.u.P()) {
                        var _0x246c7b = _0x4ee8e0.u.ea();
                        $.get(_0x14b47a + "/pub/wuid/" + _0x246c7b + "/consent/change?value=" + encodeURI(_0x58686e), function(_0x298b5a) {})
                    }
                }
                ;
                _0x4ee8e0.fa = function(_0x19979a) {
                    var _0x3c5b11 = _0x4ee8e0.u.ea();
                    var _0x451b4b = _0x4ee8e0.s.F.D();
                    var _0x1b95d3 = _0x4ee8e0.s.F.ga();
                    var _0x3648fa = _0x4ee8e0.t.ha(_0x2b3509.ia);
                    var _0x2f2fa9 = _0x4ee8e0.t.ha(_0x2b3509.ja);
                    var _0xd94f64 = _0x4ee8e0.t.ha(_0x2b3509.ka);
                    var _0x54141a = _0x4ee8e0.t.ha(_0x2b3509.la);
                    var _0xf152c0 = _0x4ee8e0.t.ha(_0x2b3509.ma);
                    var _0x3d2068 = 0x0;
                    if (null != _0x4ee8e0.l) {
                        var _0x499b14 = _0x4ee8e0.l.coords.latitude;
                        var _0x1ab160 = _0x4ee8e0.l.coords.longitude;
                        _0x3d2068 = 0x1 | Math.max(0x0, Math.min(0x7fff, (_0x499b14 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | Math.max(0x0, Math.min(0xffff, (_0x1ab160 + 0xb4) / 0x168 * 0x10000)) << 0x10
                    }
                    if (_wrmxt.BETAisSkinCustom(_0x3648fa)) {} else {
                        _0x3648fa
                    }
                    let _0x4a3872 = 'x' + (0x270f < _0x3648fa ? "0000" : _0x3648fa.toString().padStart(0x4, 0x0)) + (0x3e7 < _0xf152c0 ? "000" : _0xf152c0.toString().padStart(0x3, 0x0)) + (0x3e7 < _0x2f2fa9 ? "000" : _0x2f2fa9.toString().padStart(0x3, 0x0)) + (0x3e7 < _0xd94f64 ? "000" : _0xd94f64.toString().padStart(0x3, 0x0));
                    _0x1b95d3 = (0x20 <= _0x1b95d3.length ? _0x1b95d3.substr(0x0, 0x10) : _0x1b95d3.substr(0x0, 0x10).padEnd(0x10, '_')) + _0x4a3872;
                    _0x1b95d3 = _0x1b95d3.trim();
                    console.log(_0x1b95d3);
                    var _0x40b8ef = _0x14b47a + "/pub/wuid/" + _0x3c5b11 + "/start?gameMode=" + encodeURI(_0x451b4b) + "&gh=" + _0x3d2068 + '&nickname=' + encodeURI(_0x1b95d3) + '&skinId=' + _wrmxt.validInput(_0x3648fa) + "&eyesId=" + encodeURI(_0x2f2fa9) + "&mouthId=" + encodeURI(_0xd94f64) + '&glassesId=' + encodeURI(_0x54141a) + '&hatId=' + encodeURI(_0xf152c0);
                    console.log("urlRequest: " + _0x40b8ef);
                    $.get(_0x40b8ef, function(_0x44730d) {
                        var _0x443fe0 = _0x44730d.server_url;
                        _0x19979a(_0x443fe0)
                    })
                }
                ;
                _0x4ee8e0.na = function() {
                    _0x2f8369++;
                    console.log("start pSC: " + _0x2f8369);
                    if (!_0x4ee8e0.f.oa && _0x2f8369 >= _0x4ee8e0.f.e) {
                        _0x4ee8e0.s.I(_0x4ee8e0.s.pa);
                        _0x4ee8e0.r.G(_0xdc46a6.AudioState.qa);
                        _0x4ee8e0.f.ra.b()
                    } else {
                        _0x2e3c0c(_0x2f8369);
                        _0x4ee8e0.sa()
                    }
                }
                ;
                _0x4ee8e0.sa = function(_0x466ef2) {
                    if (_0x4ee8e0.o.ta()) {
                        _0x4ee8e0.s.I(_0x4ee8e0.s.ua);
                        _0x4ee8e0.r.G(_0xdc46a6.AudioState.ua);
                        var _0x2f7e6e = _0x4ee8e0.s.F.D();
                        _0x2240ce(_0x409a8c.va, _0x2f7e6e, 0x1e);
                        console.log("save gm: " + _0x2f7e6e);
                        var _0x3fda7c = _0x4ee8e0.s.xa.wa();
                        _0x2240ce(_0x409a8c.ya, _0x3fda7c, 0x1e);
                        console.log("save sPN: " + _0x3fda7c);
                        if (_0x4ee8e0.u.P()) {
                            _0x4ee8e0.fa(function(_0x383c57) {
                                hoisinhnhanh = _0x466ef2 ? _0x466ef2 : _0x383c57;
                                _0x4ee8e0.o.za(window.server_url || _0x383c57, _0x4ee8e0.u.ea())
                            })
                        } else {
                            var _0x19f32f = _0x4ee8e0.s.F.ga();
                            _0x2240ce(_0x409a8c.Aa, _0x19f32f, 0x1e);
                            var _0x2e3fa4 = _0x4ee8e0.t.ha(_0x2b3509.ia);
                            _0x2240ce(_0x409a8c.Ba, _0x2e3fa4, 0x1e);
                            _0x4ee8e0.fa(function(_0x23e237) {
                                hoisinhnhanh = _0x466ef2 ? _0x466ef2 : _0x23e237;
                                _0x4ee8e0.o.Ca(_0x23e237, _0x19f32f, _0x2e3fa4)
                            })
                        }
                    }
                }
                ;
                _0x4ee8e0.R = function(_0x44298d, _0x1ab34f) {
                    var _0x49bc6d = _0x4ee8e0.s.F.ga();
                    _0x4ee8e0.s.H.Da(_0x44298d, _0x1ab34f, _0x49bc6d);
                    _0x4ee8e0.r.G(_0xdc46a6.AudioState.Ea);
                    _0x4ee8e0.s.I(_0x4ee8e0.s.H.Fa())
                }
                ;
                _0x4ee8e0.Ga = function() {
                    if (!_0x4ee8e0.Ha()) {
                        return _0x4ee8e0.t.Ia()
                    }
                    var _0x5340e3 = parseInt(_0x2294f9(_0x409a8c.Ba));
                    return null != _0x5340e3 && _0x4ee8e0.t.Ja(_0x5340e3, _0x2b3509.ia) ? _0x5340e3 : _0x4ee8e0.t.Ia()
                }
                ;
                _0x4ee8e0.Ka = function(_0x2bce12) {
                    _0x2240ce(_0x409a8c.La, !!_0x2bce12, 0x708)
                }
                ;
                _0x4ee8e0.Ha = function() {
                    return "true" === _0x2294f9(_0x409a8c.La)
                }
                ;
                _0x4ee8e0.ba = function(_0x1485e6) {
                    if (_0x1485e6 != _0x4ee8e0.g) {
                        _0x4ee8e0.g = _0x1485e6;
                        var _0x3f8fda = _0x3f8fda || {};
                        _0x3f8fda.consented = _0x1485e6;
                        _0x3f8fda.gdprConsent = _0x1485e6;
                        _0x4ee8e0.f.Ma.a();
                        _0x4ee8e0.f.K.a();
                        _0x4ee8e0.f.ra.a(function(_0x2bc650) {
                            if (_0x2bc650) {
                                _0x2e3c0c(_0x2f8369 = 0x0)
                            }
                            _0x4ee8e0.sa()
                        })
                    }
                }
                ;
                _0x4ee8e0.$ = function(_0x128507, _0x339f9c) {
                    _0x2240ce(_0x409a8c.Na, _0x128507 ? 'true' : "false");
                    if (_0x339f9c) {
                        _0x4ee8e0.da(_0x128507)
                    }
                    _0x4ee8e0.ba(_0x128507)
                }
                ;
                _0x4ee8e0.Z = function() {
                    switch (_0x2294f9(_0x409a8c.Na)) {
                    case "true":
                        return !0;
                    default:
                        return !1
                    }
                }
                ;
                _0x4ee8e0.Y = function() {
                    try {
                        return !!window.isIPInEEA || !(null == _0x4ee8e0.l || !_0x144365.Oa(_0x4ee8e0.l.coords.latitude, _0x4ee8e0.l.coords.longitude))
                    } catch (_0x281c55) {
                        return !0
                    }
                }
                ;
                _0x4ee8e0.Pa = function() {
                    _0x4ee8e0.j = Date.now();
                    _0x4ee8e0.k = _0x4ee8e0.j - _0x4ee8e0.i;
                    _0x4ee8e0.o.Qa(_0x4ee8e0.j, _0x4ee8e0.k);
                    _0x4ee8e0.s.Qa(_0x4ee8e0.j, _0x4ee8e0.k);
                    _0x4ee8e0.i = _0x4ee8e0.j
                }
                ;
                _0x4ee8e0.Ra = function() {
                    _0x4ee8e0.s.Ra()
                }
                ;
                return _0x4ee8e0
            }()
        }
        function _0x5e8a85() {
            var _0x56862b = {
                Wa: 0x1e,
                Xa: new Float32Array(0x64),
                Ya: 0x0,
                Za: 0x0,
                $a: 0x0,
                _a: 0x0,
                ab: 0x0,
                bb: 0x0,
                cb: 0x0,
                db: null,
                eb: 0x12c,
                C: function() {},
                B: function() {},
                S: function() {},
                A: function() {},
                fb: new _0x590495(),
                z: null,
                N: null,
                gb: {},
                hb: {},
                ib: 12.5,
                jb: 0x28,
                kb: 0x1,
                lb: -0x1,
                mb: 0x1,
                nb: 0x1,
                ob: -0x1,
                pb: -0x1,
                qb: 0x1,
                rb: 0x1,
                sb: -0x1,
                O: 0x1f4,
                tb: 0x1f4
            };
            _0x56862b.fb.ub = 0x1f4;
            _0x56862b.N = new _0x154501(_0x56862b.fb);
            _0x56862b.a = function() {
                null.vb((window.anApp = _0x1d2f59).s.H.wb);
                setInterval(function() {
                    _0x56862b.S(function(_0x3c52d9, _0x5dc32e) {
                        _0x56862b.xb(_0x3c52d9, _0x5dc32e)
                    })
                }, 0xa)
            }
            ;
            _0x56862b.yb = function(_0x48c634, _0x580764, _0x17dd50, _0x9778f2) {
                _0x56862b.lb = _0x48c634;
                _0x56862b.mb = _0x580764;
                _0x56862b.nb = _0x17dd50;
                _0x56862b.ob = _0x9778f2;
                _0x56862b.zb()
            }
            ;
            _0x56862b.Ab = function(_0x221a39) {
                _0x56862b.kb = _0x221a39;
                _0x56862b.zb()
            }
            ;
            _0x56862b.zb = function() {
                _0x56862b.pb = _0x56862b.lb - 0x1;
                _0x56862b.qb = 2;
                _0x56862b.rb = 0;
                _0x56862b.sb = _0x56862b.ob + 0x1
            }
            ;
            _0x56862b.Qa = function(_0x16d7fd, _0x4f007d) {
                _0x56862b.$a += _0x4f007d;
                _0x56862b.Za -= 0 * _0x4f007d;
                null.Bb();
                if (!(!0 || !0 && !0)) {
                    _0x56862b.Cb(_0x16d7fd, _0x4f007d);
                    _0x56862b.jb = 0x4 + 12.5 * null.Db
                }
                var _0x564a31 = 0x3e8 / Math.max(0x1, _0x4f007d);
                var _0x3e4ee6 = 0x0;
                var _0x3d10fb = 0x0;
                for (; _0x3d10fb < _0x56862b.Xa.length - 0x1; _0x3d10fb++) {
                    _0x3e4ee6 = _0x3e4ee6 + _0x56862b.Xa[_0x3d10fb];
                    _0x56862b.Xa[_0x3d10fb] = _0x56862b.Xa[_0x3d10fb + 0x1]
                }
                _0x56862b.Xa[_0x56862b.Xa.length - 0x1] = _0x564a31;
                _0x56862b.Wa = (_0x3e4ee6 + _0x564a31) / _0x56862b.Xa.length
            }
            ;
            _0x56862b.Eb = function(_0x19146d, _0x21424a) {
                return _0x19146d > _0x56862b.pb && _0x19146d < 0x1 && _0x21424a > 0x1 && _0x21424a < _0x56862b.sb
            }
            ;
            _0x56862b.Cb = function(_0x2862cc, _0x81ae39) {
                var _0x345621 = -NaN;
                null.Fb(_0x2862cc, _0x81ae39);
                null.Gb(_0x2862cc, _0x81ae39, _0x345621, _0x56862b.Eb);
                var _0x4bab53 = 0x0;
                var _0x3daba3;
                for (_0x3daba3 in _0x56862b.hb) {
                    var _0x1968c2 = _0x56862b.hb[_0x3daba3];
                    _0x1968c2.Fb(_0x2862cc, _0x81ae39);
                    _0x1968c2.Gb(_0x2862cc, _0x81ae39, _0x345621, _0x56862b.Eb);
                    if (_0x1968c2.Hb && _0x1968c2.Db > _0x4bab53) {
                        _0x4bab53 = _0x1968c2.Db
                    }
                    if (!(_0x1968c2.Ib || !(_0x1968c2.Jb < 0.005) && _0x1968c2.Hb)) {
                        _0x1968c2.Kb();
                        delete _0x56862b.hb[_0x1968c2.Mb.Lb]
                    }
                }
                _0x56862b.Ab(0x3 * _0x4bab53);
                var _0x568af0;
                for (_0x568af0 in _0x56862b.gb) {
                    var _0x533e96 = _0x56862b.gb[_0x568af0];
                    _0x533e96.Fb(_0x2862cc, _0x81ae39);
                    _0x533e96.Gb(_0x2862cc, _0x81ae39, _0x56862b.Eb);
                    if (_0x533e96.Nb && (_0x533e96.Jb < 0.005 || !_0x56862b.Eb(_0x533e96.Ob, _0x533e96.Pb))) {
                        _0x533e96.Kb();
                        delete _0x56862b.gb[_0x533e96.Mb.Lb]
                    }
                }
            }
            ;
            _0x56862b.Qb = function(_0x188d25, _0xb88fbe) {
                var _0x5a4e03 = (window.anApp = _0x1d2f59).j;
                _0x56862b.bb = _0x188d25;
                if (0x0 === _0x188d25) {
                    _0x56862b._a = _0x5a4e03 - 0x5f;
                    _0x56862b.ab = _0x5a4e03;
                    _0x56862b.$a = 0x0;
                    _0x56862b.Za = 0x0
                } else {
                    _0x56862b._a = 0x0;
                    _0x56862b.ab = 0x0 + _0xb88fbe
                }
                _0x56862b.Ya = -NaN
            }
            ;
            _0x56862b.Rb = function() {
                if (!1 || !1) {
                    _0x56862b.cb = 0x3;
                    setTimeout(function() {
                        if (!1 && !0) {
                            null.close();
                            _0x56862b.db = null
                        }
                    }, 0x1388);
                    _0x56862b.B()
                }
            }
            ;
            _0x56862b.ta = function() {
                return !0 && (_0x56862b.cb = 0x1,
                null.Sb(),
                _0x56862b.gb = {},
                _0x56862b.hb = {},
                null.Tb(),
                !1 && (null.close(),
                _0x56862b.db = null),
                !0)
            }
            ;
            _0x56862b.Ub = function() {
                _0x56862b.db = null;
                null.Sb();
                _0x56862b.A();
                _0x56862b.cb = 0x0
            }
            ;
            _0x56862b.za = function(_0x12320e, _0x3b68e0) {
                _0x56862b.Vb(_0x12320e, function() {
                    var _0x20fd18 = Math.min(0x800, _0x3b68e0.length);
                    var _0xe73532 = new ArrayBuffer(0x6 + 0x2 * _0x20fd18);
                    var _0x4ab0e = new DataView(_0xe73532);
                    var _0x3ce5f7 = 0x0;
                    _0x4ab0e.setInt8(_0x3ce5f7, 0x81);
                    _0x3ce5f7 = _0x3ce5f7 + 0x1;
                    _0x4ab0e.setInt16(_0x3ce5f7, 0xaf0);
                    _0x3ce5f7 = _0x3ce5f7 + 0x2;
                    _0x4ab0e.setInt8(_0x3ce5f7, 0x1);
                    _0x3ce5f7 = _0x3ce5f7 + 0x1;
                    _0x4ab0e.setInt16(_0x3ce5f7, _0x20fd18);
                    _0x3ce5f7 = _0x3ce5f7 + 0x2;
                    var _0x58b986 = 0x0;
                    for (; _0x58b986 < _0x20fd18; _0x58b986++) {
                        _0x4ab0e.setInt16(_0x3ce5f7, _0x3b68e0.charCodeAt(_0x58b986));
                        _0x3ce5f7 = _0x3ce5f7 + 0x2
                    }
                    _0x56862b.Wb(_0xe73532)
                })
            }
            ;
            _0x56862b.Ca = function(_0x28210a, _0x30dc52, _0x4ddd76) {
                _0x56862b.Vb(_0x28210a, function() {
                    var _0x436021 = Math.min(0x20, _0x30dc52.length);
                    var _0x3783c2 = new ArrayBuffer(0x7 + 0x2 * _0x436021);
                    var _0x39d277 = new DataView(_0x3783c2);
                    var _0x1e973e = 0x0;
                    _0x39d277.setInt8(_0x1e973e, 0x81);
                    _0x1e973e = _0x1e973e + 0x1;
                    _0x39d277.setInt16(_0x1e973e, 0xaf0);
                    _0x1e973e = _0x1e973e + 0x2;
                    _0x39d277.setInt8(_0x1e973e, 0x0);
                    _0x1e973e = _0x1e973e + 0x1;
                    _0x39d277.setInt16(_0x1e973e, _0x4ddd76);
                    _0x1e973e = _0x1e973e + 0x2;
                    _0x39d277.setInt8(_0x1e973e, _0x436021);
                    _0x1e973e++;
                    var _0x45a431 = 0x0;
                    for (; _0x45a431 < _0x436021; _0x45a431++) {
                        _0x39d277.setInt16(_0x1e973e, _0x30dc52.charCodeAt(_0x45a431));
                        _0x1e973e = _0x1e973e + 0x2
                    }
                    _0x56862b.Wb(_0x3783c2)
                })
            }
            ;
            _0x56862b.Wb = function(_0x3de353) {
                try {
                    if (!1 && null.readyState === WebSocket.OPEN) {
                        null.send(_0x3de353)
                    }
                } catch (_0x26983e) {
                    console.log("Socket send error: " + _0x26983e);
                    _0x56862b.Ub()
                }
            }
            ;
            _0x56862b.xb = function(_0x2f70f2, _0x1be35a) {
                var _0x32fce7 = _0x1be35a ? 0x80 : 0x0;
                var _0x3e5eb9 = _0x30b6a2(_0x2f70f2) / _0x2e5df6 * 0x80 & 0x7f;
                var _0x5ea3c1 = 0xff & (_0x32fce7 | _0x3e5eb9);
                if (0x12c !== _0x5ea3c1) {
                    var _0xb049b7 = new ArrayBuffer(0x1);
                    new DataView(_0xb049b7).setInt8(0x0, _0x5ea3c1);
                    _0x56862b.Wb(_0xb049b7);
                    _0x56862b.eb = _0x5ea3c1
                }
            }
            ;
            _0x56862b.Vb = function(_0x445162, _0x13dd5c) {
                let _0x227ea0 = loadJoy(!0);
                var _0x47e75e = _0x56862b.db = new WebSocket(_0x445162);
                _0x47e75e.binaryType = "arraybuffer";
                window.onOpen = _0x47e75e.onopen = function() {
                    _0x54a5df("open");
                    if (null === _0x47e75e) {
                        console.log("Socket opened");
                        _0x13dd5c()
                    }
                    isPlaying = !0
                }
                ;
                window.onclose = _0x47e75e.onclose = function() {
                    _0x54a5df("closed");
                    _wrmxt.aload = !1;
                    if (null === _0x47e75e) {
                        console.log("Socket closed");
                        _0x56862b.Ub()
                    }
                    isPlaying = !1;
                    if (_0x227ea0) {
                        _0x227ea0.destroy()
                    }
                }
                ;
                _0x47e75e.onerror = function(_0x429e73) {
                    if (null === _0x47e75e) {
                        console.log("Socket error");
                        _0x56862b.Ub()
                    }
                    isPlaying = !1;
                    if (_0x227ea0) {
                        _0x227ea0.destroy()
                    }
                }
                ;
                _0x47e75e.onmessage = function(_0x13fa0d) {
                    if (null === _0x47e75e) {
                        null.Xb(_0x13fa0d.data)
                    }
                }
            }
            ;
            return _0x56862b
        }
        var _0x14b47a = atob("aHR0cHM6Ly9nYXRld2F5Lndvcm1hdGUuaW8=");
        var _0x3073b7 = atob("aHR0cHM6Ly9yZXNvdXJjZXMud29ybWF0ZS5pbw==");
        var _0x52a5ef = window.I18N_LANG;
        if (!_0x52a5ef) {
            _0x52a5ef = 'en'
        }
        var _0x2e9381 = undefined;
        switch (_0x52a5ef) {
        case 'uk':
            _0x2e9381 = "uk_UA";
            break;
        case 'de':
            _0x2e9381 = "de_DE";
            break;
        case 'fr':
            _0x2e9381 = "fr_FR";
            break;
        case 'ru':
            _0x2e9381 = 'ru_RU';
            break;
        case 'es':
            _0x2e9381 = 'es_ES';
            break;
        default:
            _0x2e9381 = "en_US"
        }
        moment.locale(_0x2e9381);
        var _0x1d2f59 = undefined;
        var _0x3092b0 = function() {
            var _0x3b4292 = {
                'Yb': eval(atob('UElYSQ=='))
            };
            var _0x1bdd48 = _0x3b4292.Yb[atob("QkxFTkRfTU9ERVM=")];
            var _0x3e504b = _0x3b4292.Yb[atob("V1JBUF9NT0RFUw==")];
            return {
                'Zb': _0x3b4292.Yb[atob("Q29udGFpbmVy")],
                '$b': _0x3b4292.Yb[atob("QmFzZVRleHR1cmU=")],
                '_b': _0x3b4292.Yb[atob("VGV4dHVyZQ==")],
                'ac': _0x3b4292.Yb[atob("UmVuZGVyZXI=")],
                'bc': _0x3b4292.Yb[atob("R3JhcGhpY3M=")],
                'cc': _0x3b4292.Yb[atob("U2hhZGVy")],
                'dc': _0x3b4292.Yb[atob("UmVjdGFuZ2xl")],
                'ec': _0x3b4292.Yb[atob("U3ByaXRl")],
                'fc': _0x3b4292.Yb[atob('VGV4dA==')],
                'gc': _0x3b4292.Yb[atob("R2VvbWV0cnk=")],
                'hc': _0x3b4292.Yb[atob("TWVzaA==")],
                'ic': {
                    'jc': _0x1bdd48[atob('QURE')]
                },
                'kc': {
                    'lc': _0x3e504b[atob('UkVQRUFU')]
                }
            }
        }();
        var _0x2e5df6 = 0x2 * Math.PI;
        !function() {
            var _0x465864 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
            DataView.prototype.mc = function(_0x4d9e5a) {
                return this[_0x465864[0x0]](_0x4d9e5a)
            }
            ;
            DataView.prototype.nc = function(_0xfd44a2) {
                return this[_0x465864[0x1]](_0xfd44a2)
            }
            ;
            DataView.prototype.oc = function(_0x3f17ab) {
                return this[_0x465864[0x2]](_0x3f17ab)
            }
            ;
            DataView.prototype.pc = function(_0x580945) {
                return this[_0x465864[0x3]](_0x580945)
            }
            ;
            DataView.prototype.qc = function(_0x20e989) {
                return this[_0x465864[0x4]](_0x20e989)
            }
        }();
        var _0x58495a = function() {
            function _0x295181(_0x13f63b) {
                this.rc = _0x13f63b;
                this.sc = !1;
                this.tc = 0x1
            }
            _0x295181.VELOCITY_TYPE = 0x0;
            _0x295181.FLEXIBLE_TYPE = 0x1;
            _0x295181.MAGNETIC_TYPE = 0x2;
            _0x295181.ZOOM_TYPE = 0x6;
            _0x295181.X2_TYPE = 0x3;
            _0x295181.X5_TYPE = 0x4;
            _0x295181.X10_TYPE = 0x5;
            return _0x295181
        }();
        var _0xe69664 = function() {
            function _0x25786c() {
                this.uc = [];
                this.vc = {};
                this.wc = null;
                this.xc = _0x216969.yc()
            }
            function _0x2d828d(_0x394f1f, _0x1cf6c4) {
                for (var _0x70bfca in _0x394f1f)
                    if (_0x394f1f.hasOwnProperty(_0x70bfca)) {
                        _0x1cf6c4(_0x70bfca, _0x394f1f[_0x70bfca])
                    }
            }
            _0x25786c.prototype.a = function() {
                this.L()
            }
            ;
            _0x25786c.prototype.W = function() {
                return null != this.wc
            }
            ;
            _0x25786c.prototype.zc = function() {
                return null != this.wc ? this.wc.revision : -0x1
            }
            ;
            _0x25786c.prototype.Ac = function() {
                return this.wc
            }
            ;
            _0x25786c.prototype.L = function() {
                var _0x346d75 = this;
                $.get(_0x3073b7 + "/dynamic/assets/revision.json", function(_0x125a69) {
                    if (_0x125a69 > _0x346d75.zc()) {
                        _0x346d75.Bc()
                    }
                })
            }
            ;
            _0x25786c.prototype.Bc = function() {
                var _0x39381f = this;
                $.get(_0x3073b7 + "/dynamic/assets/registry.json", function(_0x5210a7) {
                    if (_0x5210a7.revision > _0x39381f.zc()) {
                        _0x39381f.Cc(_0x5210a7)
                    }
                })
            }
            ;
            _0x25786c.prototype.ca = function(_0x26609f) {
                this.uc.push(_0x26609f)
            }
            ;
            _0x25786c.prototype.Dc = function() {
                return this.xc
            }
            ;
            _0x25786c.prototype.Ec = function() {
                for (var _0x4579c3 = 0x0; _0x4579c3 < this.uc.length; _0x4579c3++) {
                    this.uc[_0x4579c3]()
                }
            }
            ;
            _0x25786c.prototype.Fc = function(_0x433192, _0xe2261f) {
                if (!(_0x433192.revision <= this.zc())) {
                    _0x2d828d(this.vc, function(_0x3be303, _0x410823) {
                        var _0x3c2402 = _0xe2261f[_0x3be303];
                        if (!(null != _0x3c2402 && _0x410823.Gc === _0x3c2402.Gc)) {
                            print("disposing prev texture: " + _0x3be303 + " at " + _0x410823.Gc);
                            _0x410823.Hc.destroy()
                        }
                    });
                    this.vc = _0xe2261f;
                    this.wc = _0x433192;
                    this.xc = _0x216969.Ic(this.wc, this.vc);
                    this.Ec()
                }
            }
            ;
            _0x25786c.prototype.Cc = function(_0xf156f) {
                var _0x562391 = {};
                (function(_0x2622f0, _0x39acc9) {
                    for (var _0x46587e in _0x2622f0)
                        if (_0x2622f0.hasOwnProperty(_0x46587e)) {
                            _0x39acc9(_0x46587e, _0x2622f0[_0x46587e])
                        }
                }
                )(_0xf156f.textureDict, function(_0x205adc, _0x5ab92a) {
                    var _0x22c135 = "https://haylamday.com" + _0x5ab92a.relativePath;
                    if (!_0x5ab92a.custom) {
                        _0x22c135 = _0x3073b7 + _0x5ab92a.relativePath
                    }
                    try {
                        _0x562391[_0x205adc] = new _0x18e9a5(_0x22c135,_0x3092b0.$b.from(_0x5ab92a.file || _0x22c135))
                    } catch (_0x3a1b8f) {
                        console.log(_0x22c135)
                    }
                });
                this.Fc(_0xf156f, _0x562391)
            }
            ;
            return _0x25786c
        }();
        var _0x216969 = function() {
            function _0x5a04c6() {
                this.Jc = null;
                this.Kc = null;
                this.Lc = null;
                this.Mc = null;
                this.Nc = null;
                this.Oc = null;
                this.Pc = null;
                this.Qc = null;
                this.Rc = null;
                this.Sc = null;
                this.Tc = null;
                this.Uc = null;
                this.Vc = null;
                this.Wc = null;
                this.Xc = null;
                this.Yc = null
            }
            function _0x1905dd(_0x267355, _0x3fc665) {
                for (var _0x3114c1 in _0x267355)
                    if (_0x267355.hasOwnProperty(_0x3114c1)) {
                        _0x3fc665(_0x3114c1, _0x267355[_0x3114c1])
                    }
            }
            _0x5a04c6.yc = function() {
                var _0x3ec04f = new _0x216969();
                _0x3ec04f.Jc = {};
                _0x3ec04f.Kc = {
                    'Zc': null,
                    '$c': null
                };
                _0x3ec04f.Lc = {};
                _0x3ec04f.Mc = {
                    'Zc': null
                };
                _0x3ec04f.Nc = {};
                _0x3ec04f.Oc = {
                    '_c': "#FFFFFF",
                    'Zc': [],
                    '$c': []
                };
                _0x3ec04f.Pc = {};
                _0x3ec04f.Qc = {
                    'ad': {},
                    'bd': _0x3ec04f.Oc,
                    'cd': _0x3ec04f.Kc
                };
                _0x3ec04f.Rc = {};
                _0x3ec04f.Sc = {
                    'Zc': []
                };
                _0x3ec04f.Tc = {};
                _0x3ec04f.Uc = {
                    'Zc': []
                };
                _0x3ec04f.Vc = {};
                _0x3ec04f.Wc = {
                    'Zc': []
                };
                _0x3ec04f.Xc = {};
                _0x3ec04f.Yc = {
                    'Zc': []
                };
                return _0x3ec04f
            }
            ;
            _0x5a04c6.Ic = function(_0x36cb0b, _0x393f39) {
                var _0x32a909 = new _0x216969();
                var _0x402478 = {};
                _0x1905dd(_0x36cb0b.colorDict, function(_0x191438, _0x2e1752) {
                    _0x402478[_0x191438] = _0x2e1752
                });
                var _0x48e236 = {};
                _0x1905dd(_0x36cb0b.regionDict, function(_0x45178f, _0x1d413b) {
                    _0x48e236[_0x45178f] = new _0x4197f6(_0x393f39[_0x1d413b.texture].Hc,_0x1d413b.x,_0x1d413b.y,_0x1d413b.w,_0x1d413b.h,_0x1d413b.px,_0x1d413b.py,_0x1d413b.pw,_0x1d413b.ph)
                });
                _0x32a909.Nc = {};
                for (var _0x3e2c67 = 0x0; _0x3e2c67 < _0x36cb0b.skinArrayDict.length; _0x3e2c67++) {
                    var _0x2743df = _0x36cb0b.skinArrayDict[_0x3e2c67];
                    _0x32a909.Nc[_0x2743df.id] = new _0x216969.WormSkinData('#' + _0x402478[_0x2743df.prime],_0x2743df.base.map(function(_0x4541d8) {
                        return _0x48e236[_0x4541d8]
                    }),_0x2743df.glow.map(function(_0x1b4af1) {
                        return _0x48e236[_0x1b4af1]
                    }))
                }
                var _0x17225f = _0x36cb0b.skinUnknown;
                _0x32a909.Oc = new _0x216969.WormSkinData('#' + _0x402478[_0x17225f.prime],_0x17225f.base.map(function(_0x540602) {
                    return _0x48e236[_0x540602]
                }),_0x17225f.glow.map(function(_0x3b806f) {
                    return _0x48e236[_0x3b806f]
                }));
                _0x32a909.Rc = {};
                _0x1905dd(_0x36cb0b.eyesDict, function(_0x3a2ae2, _0x1235b1) {
                    _0x3a2ae2 = parseInt(_0x3a2ae2);
                    _0x32a909.Rc[_0x3a2ae2] = new _0x216969.WearSkinData(_0x1235b1.base.map(function(_0x35d4aa) {
                        return _0x48e236[_0x35d4aa.region]
                    }))
                });
                _0x32a909.Sc = new _0x216969.WearSkinData(_0x36cb0b.eyesUnknown.base.map(function(_0x3caf91) {
                    return _0x48e236[_0x3caf91.region]
                }));
                _0x32a909.Tc = {};
                _0x1905dd(_0x36cb0b.mouthDict, function(_0x5ddb9e, _0xd80fd3) {
                    _0x5ddb9e = parseInt(_0x5ddb9e);
                    _0x32a909.Tc[_0x5ddb9e] = new _0x216969.WearSkinData(_0xd80fd3.base.map(function(_0x3d9f21) {
                        return _0x48e236[_0x3d9f21.region]
                    }))
                });
                _0x32a909.Uc = new _0x216969.WearSkinData(_0x36cb0b.mouthUnknown.base.map(function(_0x10d310) {
                    return _0x48e236[_0x10d310.region]
                }));
                _0x32a909.Vc = {};
                _0x1905dd(_0x36cb0b.glassesDict, function(_0x4ef5b7, _0x30c44c) {
                    _0x4ef5b7 = parseInt(_0x4ef5b7);
                    _0x32a909.Vc[_0x4ef5b7] = new _0x216969.WearSkinData(_0x30c44c.base.map(function(_0x5c7da8) {
                        return _0x48e236[_0x5c7da8.region]
                    }))
                });
                _0x32a909.Wc = new _0x216969.WearSkinData(_0x36cb0b.glassesUnknown.base.map(function(_0x430ec3) {
                    return _0x48e236[_0x430ec3.region]
                }));
                _0x32a909.Xc = {};
                _0x1905dd(_0x36cb0b.hatDict, function(_0x1184e5, _0x153656) {
                    _0x1184e5 = parseInt(_0x1184e5);
                    _0x32a909.Xc[_0x1184e5] = new _0x216969.WearSkinData(_0x153656.base.map(function(_0xd77006) {
                        return _0x48e236[_0xd77006.region]
                    }))
                });
                _0x32a909.Yc = new _0x216969.WearSkinData(_0x36cb0b.hatUnknown.base.map(function(_0x187c3d) {
                    return _0x48e236[_0x187c3d.region]
                }));
                _0x32a909.Jc = {};
                _0x1905dd(_0x36cb0b.portionDict, function(_0x34bcc5, _0x44e2d1) {
                    _0x34bcc5 = parseInt(_0x34bcc5);
                    _0x32a909.Jc[_0x34bcc5] = new _0x216969.PortionSkinData(_0x48e236[_0x44e2d1.base],_0x48e236[_0x44e2d1.glow])
                });
                var _0x52ba01 = _0x36cb0b.portionUnknown;
                _0x32a909.Kc = new _0x216969.PortionSkinData(_0x48e236[_0x52ba01.base],_0x48e236[_0x52ba01.glow]);
                _0x32a909.Lc = {};
                _0x1905dd(_0x36cb0b.abilityDict, function(_0x348da0, _0x7cd33e) {
                    _0x348da0 = parseInt(_0x348da0);
                    _0x32a909.Lc[_0x348da0] = new _0x216969.AbilitySkinData(_0x48e236[_0x7cd33e.base])
                });
                var _0x367117 = _0x36cb0b.abilityUnknown;
                _0x32a909.Mc = new _0x216969.AbilitySkinData(_0x48e236[_0x367117.base]);
                _0x32a909.Pc = {};
                _0x1905dd(_0x36cb0b.teamDict, function(_0x308079, _0x41aea6) {
                    _0x308079 = parseInt(_0x308079);
                    _0x32a909.Pc[_0x308079] = new _0x216969.TeamSkinData(_0x41aea6.name,new _0x216969.WormSkinData('#' + _0x402478[_0x41aea6.skin.prime],[],_0x41aea6.skin.glow.map(function(_0x13374f) {
                        return _0x48e236[_0x13374f]
                    })),new _0x216969.PortionSkinData([],_0x48e236[_0x41aea6.portion.glow]))
                });
                _0x32a909.Qc = new _0x216969.TeamSkinData({},_0x32a909.Oc,_0x32a909.Kc);
                return _0x32a909
            }
            ;
            _0x5a04c6.prototype.dd = function(_0x1c523d) {
                var _0x239bae = this.Nc[_0x1c523d];
                return _0x239bae || this.Oc
            }
            ;
            _0x5a04c6.prototype.ed = function(_0x187508) {
                var _0x37ab65 = this.Pc[_0x187508];
                return _0x37ab65 || this.Qc
            }
            ;
            _0x5a04c6.prototype.fd = function(_0x3a76c8) {
                var _0x3732de = this.Rc[_0x3a76c8];
                return _0x3732de || this.Sc
            }
            ;
            _0x5a04c6.prototype.gd = function(_0x3e418b) {
                var _0x12cc48 = this.Tc[_0x3e418b];
                return _0x12cc48 || this.Uc
            }
            ;
            _0x5a04c6.prototype.hd = function(_0x4601a9) {
                var _0x160374 = this.Vc[_0x4601a9];
                return _0x160374 || this.Wc
            }
            ;
            _0x5a04c6.prototype.jd = function(_0x4352dd) {
                var _0x360059 = this.Xc[_0x4352dd];
                return _0x360059 || this.Yc
            }
            ;
            _0x5a04c6.prototype.kd = function(_0x12b6a8) {
                var _0x28aa10 = this.Jc[_0x12b6a8];
                return _0x28aa10 || this.Kc
            }
            ;
            _0x5a04c6.prototype.ld = function(_0x530ace) {
                var _0x42c3cf = this.Lc[_0x530ace];
                return _0x42c3cf || this.Mc
            }
            ;
            _0x5a04c6.TeamSkinData = function() {
                function _0x1e0ca7(_0x514bfb, _0x49cdff, _0x3a5e0b) {
                    this.ad = _0x514bfb;
                    this.bd = _0x49cdff;
                    this.cd = _0x3a5e0b
                }
                return _0x1e0ca7
            }();
            _0x5a04c6.WormSkinData = function() {
                function _0x18e454(_0x45ce2e, _0x54fbf4, _0x2b47fa) {
                    this._c = _0x45ce2e;
                    this.Zc = _0x54fbf4;
                    this.$c = _0x2b47fa
                }
                return _0x18e454
            }();
            _0x5a04c6.WearSkinData = function() {
                function _0x2e86c8(_0x56ef9c) {
                    this.Zc = _0x56ef9c
                }
                return _0x2e86c8
            }();
            _0x5a04c6.PortionSkinData = function() {
                function _0xc45d3(_0x229f97, _0x5ab451) {
                    this.Zc = _0x229f97;
                    this.$c = _0x5ab451
                }
                return _0xc45d3
            }();
            _0x5a04c6.AbilitySkinData = function() {
                function _0x3c34ba(_0x52b452) {
                    this.Zc = _0x52b452
                }
                return _0x3c34ba
            }();
            return _0x5a04c6
        }();
        var _0xdc46a6 = function() {
            function _0x270489() {
                this.md = _0xdc46a6.AudioState.ua;
                this.nd = !1;
                this.od = !1;
                this.pd = null;
                this.qd = null
            }
            _0x270489.prototype.a = function() {}
            ;
            _0x270489.prototype.rd = function(_0x1faf05) {
                this.od = _0x1faf05
            }
            ;
            _0x270489.prototype.G = function(_0x2f8f18) {
                this.md = _0x2f8f18;
                this.sd()
            }
            ;
            _0x270489.prototype.td = function(_0x35d7d2) {
                this.nd = _0x35d7d2;
                this.sd()
            }
            ;
            _0x270489.prototype.sd = function() {}
            ;
            _0x270489.prototype.ud = function(_0x275dfb, _0x573fde) {
                if (!(window.anApp = _0x1d2f59).p.W) {
                    return null
                }
                var _0x95db83 = _0x275dfb[_0x573fde];
                return null == _0x95db83 || 0x0 == _0x95db83.length ? null : _0x95db83[Math.floor(Math.random() * _0x95db83.length)].cloneNode()
            }
            ;
            _0x270489.prototype.vd = function(_0x534315, _0x310d87, _0x224af3) {
                if (this.od && !(_0x224af3 <= 0x0)) {
                    var _0x3007ad = this.ud(_0x534315, _0x310d87);
                    if (null != _0x3007ad) {
                        _0x3007ad.volume = Math.min(0x1, _0x224af3);
                        _0x3007ad.play()
                    }
                }
            }
            ;
            _0x270489.prototype.wd = function(_0x2b5fd7, _0x3a091e) {
                if (this.md.xd) {
                    this.vd(app.q.yd, _0x2b5fd7, _0x3a091e)
                }
            }
            ;
            _0x270489.prototype.zd = function(_0x10c09f, _0x2354a0) {
                if (this.md.Ad) {
                    this.vd(app.q.Bd, _0x10c09f, _0x2354a0)
                }
            }
            ;
            _0x270489.prototype.Cd = function() {}
            ;
            _0x270489.prototype.Dd = function() {}
            ;
            _0x270489.prototype.Ed = function() {}
            ;
            _0x270489.prototype.Fd = function() {}
            ;
            _0x270489.prototype.Gd = function() {}
            ;
            _0x270489.prototype.Hd = function() {}
            ;
            _0x270489.prototype.Id = function(_0x28edbf, _0x3addce, _0x48e391) {}
            ;
            _0x270489.prototype.Jd = function(_0x1ec5d7) {}
            ;
            _0x270489.prototype.Kd = function(_0xae215) {}
            ;
            _0x270489.prototype.Ld = function(_0x1b822e) {}
            ;
            _0x270489.prototype.Md = function(_0x397301) {}
            ;
            _0x270489.prototype.Nd = function(_0x35375c) {}
            ;
            _0x270489.prototype.Od = function(_0x43d9ab) {}
            ;
            _0x270489.prototype.Pd = function(_0x3ecdb2) {}
            ;
            _0x270489.prototype.Qd = function(_0x273f2c) {}
            ;
            _0x270489.prototype.Rd = function(_0x352880) {}
            ;
            _0x270489.prototype.Sd = function(_0xd79440) {}
            ;
            _0x270489.prototype.Td = function(_0x42166d) {}
            ;
            _0x270489.prototype.Ud = function(_0x756d08) {}
            ;
            _0x270489.prototype.Vd = function(_0xd0edab) {}
            ;
            _0x270489.prototype.Wd = function(_0x4c50e0) {}
            ;
            _0x270489.prototype.Xd = function(_0x3f98ce, _0x29020c) {}
            ;
            _0x270489.prototype.Yd = function(_0x18a6bc) {}
            ;
            _0x270489.prototype.Zd = function(_0xa7ac3, _0x301793, _0xbfb13d) {}
            ;
            (function() {
                function _0x33730c(_0x12aae6) {
                    this.$d = new _0x4fa035(_0x12aae6,0.5);
                    this.$d._d.loop = !0;
                    this.ae = !1
                }
                _0x33730c.prototype.be = function(_0x13259d) {
                    if (_0x13259d) {
                        this.b()
                    } else {
                        this.ce()
                    }
                }
                ;
                _0x33730c.prototype.b = function() {
                    if (!this.ae) {
                        this.ae = !0;
                        this.$d.de = 0x0;
                        this.$d.ee(0x5dc, 0x64)
                    }
                }
                ;
                _0x33730c.prototype.ce = function() {
                    if (this.ae) {
                        this.ae = !1;
                        this.$d.fe(0x5dc, 0x64)
                    }
                }
            }
            )();
            (function() {
                function _0x1e6856(_0x16fe57) {
                    this.ge = _0x16fe57.map(function(_0x3902c2) {
                        return new _0x4fa035(_0x3902c2,0.4)
                    });
                    _0x3e6272(this.ge, 0x0, this.ge.length);
                    this.he = null;
                    this.ie = 0x0;
                    this.ae = !1;
                    this.je = 0x2710
                }
                function _0x3e6272(_0x146b44, _0xfc5df4, _0x477cf1) {
                    for (var _0x1ca043 = _0x477cf1 - 0x1; _0x1ca043 > _0xfc5df4; _0x1ca043--) {
                        var _0x5c3ae8 = _0xfc5df4 + Math.floor(Math.random() * (_0x1ca043 - _0xfc5df4 + 0x1));
                        var _0x5e99fb = _0x146b44[_0x1ca043];
                        _0x146b44[_0x1ca043] = _0x146b44[_0x5c3ae8];
                        _0x146b44[_0x5c3ae8] = _0x5e99fb
                    }
                }
                _0x1e6856.prototype.be = function(_0x2f8ade) {
                    if (_0x2f8ade) {
                        this.b()
                    } else {
                        this.ce()
                    }
                }
                ;
                _0x1e6856.prototype.b = function() {
                    if (!this.ae) {
                        this.ae = !0;
                        this.ke(0x5dc)
                    }
                }
                ;
                _0x1e6856.prototype.ce = function() {
                    if (this.ae) {
                        this.ae = !1;
                        if (null != this.he) {
                            this.he.fe(0x320, 0x32)
                        }
                    }
                }
                ;
                _0x1e6856.prototype.ke = function(_0x4a1bc4) {
                    if (this.ae) {
                        if (null == this.he) {
                            this.he = this.le()
                        }
                        if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
                            this.he = this.le();
                            this.he._d.currentTime = 0x0
                        }
                        console.log("Current track '" + this.he._d.src + "', change in (ms) " + (0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je));
                        this.he.de = 0x0;
                        this.he.ee(_0x4a1bc4, 0x64);
                        var _0x98a1d5 = 0x3e8 * (this.he._d.duration - this.he._d.currentTime) - this.je;
                        var _0x1ea07f = this;
                        var _0x20b1e9 = setTimeout(function() {
                            if (_0x1ea07f.ae && _0x20b1e9 == _0x1ea07f.ie) {
                                _0x1ea07f.he.fe(_0x1ea07f.je, 0x64);
                                _0x1ea07f.he = _0x1ea07f.le();
                                _0x1ea07f.he._d.currentTime = 0x0;
                                _0x1ea07f.ke(_0x1ea07f.je)
                            }
                        }, _0x98a1d5);
                        this.ie = _0x20b1e9
                    }
                }
                ;
                _0x1e6856.prototype.le = function() {
                    var _0x3290a4 = this.ge[0x0];
                    var _0x1c04c1 = Math.max(0x1, this.ge.length / 0x2);
                    _0x3e6272(this.ge, _0x1c04c1, this.ge.length);
                    this.ge.push(this.ge.shift());
                    return _0x3290a4
                }
            }
            )();
            var _0x4fa035 = function() {
                function _0x301fde(_0x409e50, _0x36c8a9) {
                    this._d = _0x409e50;
                    this.me = _0x36c8a9;
                    this.de = 0x0;
                    _0x409e50.volume = 0x0;
                    this.ne = 0x0;
                    this.oe = !1
                }
                _0x301fde.prototype.ee = function(_0x5b7454, _0xa51ecd) {
                    console.log("fade IN " + this._d.src);
                    this.pe(!0, _0x5b7454, _0xa51ecd)
                }
                ;
                _0x301fde.prototype.fe = function(_0x460d79, _0x3773d7) {
                    console.log("fade OUT " + this._d.src);
                    this.pe(!1, _0x460d79, _0x3773d7)
                }
                ;
                _0x301fde.prototype.pe = function(_0x520a52, _0x598002, _0x3fc7ec) {
                    if (this.oe) {
                        clearInterval(this.ne)
                    }
                    var _0xbbfc8c = this;
                    var _0x23ac6b = 0x1 / (_0x598002 / _0x3fc7ec);
                    var _0x10cf58 = setInterval(function() {
                        if (_0xbbfc8c.oe && _0x10cf58 != _0xbbfc8c.ne) {
                            return void clearInterval(_0x10cf58)
                        }
                        if (_0x520a52) {
                            _0xbbfc8c.de = Math.min(0x1, _0xbbfc8c.de + _0x23ac6b);
                            _0xbbfc8c._d.volume = _0xbbfc8c.de * _0xbbfc8c.me;
                            if (_0xbbfc8c.de >= 0x1) {
                                _0xbbfc8c.oe = !1;
                                clearInterval(_0x10cf58)
                            }
                        } else {
                            _0xbbfc8c.de = Math.max(0x0, _0xbbfc8c.de - _0x23ac6b);
                            _0xbbfc8c._d.volume = _0xbbfc8c.de * _0xbbfc8c.me;
                            if (_0xbbfc8c.de <= 0x0) {
                                _0xbbfc8c._d.pause();
                                _0xbbfc8c.oe = !1;
                                clearInterval(_0x10cf58)
                            }
                        }
                    }, _0x3fc7ec);
                    this.oe = !0;
                    this.ne = _0x10cf58;
                    this._d.play()
                }
                ;
                return _0x301fde
            }();
            _0x270489.AudioState = {
                'ua': {
                    'qe': !1,
                    're': !1,
                    'Ad': !0,
                    'xd': !1
                },
                'F': {
                    'qe': !1,
                    're': !0,
                    'Ad': !0,
                    'xd': !1
                },
                'H': {
                    'qe': !0,
                    're': !1,
                    'Ad': !1,
                    'xd': !0
                },
                'Ea': {
                    'qe': !1,
                    're': !1,
                    'Ad': !0,
                    'xd': !1
                },
                'qa': {
                    'qe': !1,
                    're': !1,
                    'Ad': !1,
                    'xd': !1
                }
            };
            return _0x270489
        }();
        var _0xda1c24 = function() {
            function _0x26aa91(_0x4e1bb6) {
                this.se = _0x4e1bb6;
                this.te = _0x4e1bb6.get()[0x0];
                this.ue = new _0x3092b0.ac({
                    'view': this.te,
                    'backgroundColor': 0x0,
                    'antialias': !0
                });
                this.ve = new _0x3092b0.Zb();
                this.ve.sortableChildren = !0;
                this.we = [];
                this.xe = [];
                this.ye = [];
                this.a()
            }
            var _0x4a4f81 = [{
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x1,
                'De': 0x2,
                'Ee': 0xff66aa
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 1.5,
                'De': 1.5,
                'Ee': 0xff8888
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x2,
                'De': 0x1,
                'Ee': 0xffaa66
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x3,
                'De': 0x2,
                'Ee': 0xaaff66
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 2.5,
                'De': 2.5,
                'Ee': 0x88ff88
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x2,
                'De': 0x3,
                'Ee': 0x66ffaa
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x5,
                'De': 0x4,
                'Ee': 0x66aaff
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 4.5,
                'De': 4.5,
                'Ee': 0x8888ff
            }, {
                'ze': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Ae': 0x0 + Math.random(_0x2e5df6 - 0x0),
                'Be': 0.1 + Math.random(0.4),
                'Ce': 0x4,
                'De': 0x5,
                'Ee': 0xaa66ff
            }];
            _0x26aa91.prototype.a = function() {
                var _0x10c9f6 = window.anApp = _0x1d2f59;
                this.ue.backgroundColor = 0x0;
                this.we = new Array(_0x4a4f81.length);
                for (var _0x17178a = 0x0; _0x17178a < this.we.length; _0x17178a++) {
                    this.we[_0x17178a] = new _0x3092b0.ec();
                    this.we[_0x17178a].texture = _0x10c9f6.q.Fe;
                    this.we[_0x17178a].anchor.set(0.5);
                    this.we[_0x17178a].zIndex = 0x1;
                    this.ve.addChild(this.we[_0x17178a])
                }
                this.xe = new Array(_0x10c9f6.q.Ge.length);
                for (var _0x48b4f6 = 0x0; _0x48b4f6 < this.xe.length; _0x48b4f6++) {
                    this.xe[_0x48b4f6] = new _0x3092b0.ec();
                    this.xe[_0x48b4f6].texture = _0x10c9f6.q.Ge[_0x48b4f6];
                    this.xe[_0x48b4f6].anchor.set(0.5);
                    this.xe[_0x48b4f6].zIndex = 0x2;
                    this.ve.addChild(this.xe[_0x48b4f6])
                }
                this.ye = new Array(this.xe.length);
                for (var _0x785898 = 0x0; _0x785898 < this.ye.length; _0x785898++) {
                    this.ye[_0x785898] = {
                        'He': Math.random(),
                        'Ie': Math.random(),
                        'Je': Math.random(),
                        'Ke': Math.random()
                    }
                }
                this.Ra()
            }
            ;
            _0x26aa91.sc = !1;
            _0x26aa91.Le = function(_0x53388a) {
                _0x26aa91.sc = _0x53388a
            }
            ;
            _0x26aa91.prototype.Ra = function() {
                var _0x3d50dc = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
                var _0x2d2831 = this.se.width();
                var _0x480e50 = this.se.height();
                this.ue.resize(_0x2d2831, _0x480e50);
                this.ue.resolution = _0x3d50dc;
                this.te.width = _0x3d50dc * _0x2d2831;
                this.te.height = _0x3d50dc * _0x480e50;
                var _0x1822f0 = 0.8 * Math.max(_0x2d2831, _0x480e50);
                for (var _0x4551c5 = 0x0; _0x4551c5 < this.we.length; _0x4551c5++) {
                    this.we[_0x4551c5].width = _0x1822f0;
                    this.we[_0x4551c5].height = _0x1822f0
                }
            }
            ;
            _0x26aa91.prototype.Pa = function(_0x5cc81c, _0x3da789) {
                if (_0x26aa91.sc) {
                    var _0x2e3c5e = _0x5cc81c / 0x3e8;
                    var _0x4d83f2 = _0x3da789 / 0x3e8;
                    var _0x3baa4d = this.se.width();
                    var _0x47b0b0 = this.se.height();
                    for (var _0x39b3e2 = 0x0; _0x39b3e2 < this.we.length; _0x39b3e2++) {
                        var _0x457985 = _0x4a4f81[_0x39b3e2 % _0x4a4f81.length];
                        var _0x12fbe9 = this.we[_0x39b3e2];
                        var _0x1937d2 = _0x457985.Ce * (0.08 * _0x2e3c5e) + _0x457985.Ae >= 0x0 ? Math.cos((_0x457985.Ce * (0.08 * _0x2e3c5e) + _0x457985.Ae) % _0x2e5df6) : Math.cos((_0x457985.Ce * (0.08 * _0x2e3c5e) + _0x457985.Ae) % _0x2e5df6 + _0x2e5df6);
                        var _0x20bb94 = _0x457985.De * (0.08 * _0x2e3c5e) >= 0x0 ? Math.sin(_0x457985.De * (0.08 * _0x2e3c5e) % _0x2e5df6) : Math.sin(_0x457985.De * (0.08 * _0x2e3c5e) % _0x2e5df6 + _0x2e5df6);
                        var _0x356a53 = 0.2 + 0.2 * (_0x457985.Ae + _0x457985.Be * _0x2e3c5e >= 0x0 ? Math.cos((_0x457985.Ae + _0x457985.Be * _0x2e3c5e) % _0x2e5df6) : Math.cos((_0x457985.Ae + _0x457985.Be * _0x2e3c5e) % _0x2e5df6 + _0x2e5df6));
                        _0x12fbe9.tint = _0x457985.Ee;
                        _0x12fbe9.alpha = _0x356a53;
                        _0x12fbe9.position.set(_0x3baa4d * (0.2 + 0.5 * (_0x1937d2 + 0x1) * 0.6), _0x47b0b0 * (0.1 + 0.5 * (_0x20bb94 + 0x1) * 0.8))
                    }
                    var _0x537959 = 0.05 * Math.max(_0x3baa4d, _0x47b0b0);
                    for (var _0x45a824 = 0x0; _0x45a824 < this.xe.length; _0x45a824++) {
                        var _0xe00995 = this.ye[_0x45a824];
                        var _0x3ff9f2 = this.xe[_0x45a824];
                        var _0x2d84da = _0x2e5df6 * _0x45a824 / this.xe.length + _0xe00995.He;
                        _0xe00995.Ke += _0xe00995.Ie * _0x4d83f2;
                        if (_0xe00995.Ke > 1.3) {
                            _0xe00995.He = Math.random() * _0x2e5df6;
                            _0xe00995.Ie = 0.66 * (0.09 + 0.07 * Math.random());
                            _0xe00995.Je = 0.15 + 0.7 * Math.random();
                            _0xe00995.Ke = -0.3
                        }
                        var _0x1c6c33 = _0xe00995.Je + 0.03 * Math.sin(0x6 * Math.sin(_0x2d84da + 0.48 * _0x2e3c5e));
                        var _0x21a59c = _0xe00995.Ke;
                        var _0x31db5e = Math.sin(Math.PI * _0x21a59c) > 0x1 ? 0x1 : Math.sin(Math.PI * _0x21a59c) < 0.1 ? 0.1 : Number.isFinite(Math.sin(Math.PI * _0x21a59c)) ? Math.sin(Math.PI * _0x21a59c) : 0.55;
                        var _0x118b0c = 0.5 * (0.4 + 0.5 * (0x1 + Math.sin(_0x2d84da + 0.12 * _0x2e3c5e)) * 1.2);
                        var _0x4de814 = _0x2d84da + 0x2 * _0xe00995.Ie * _0x2e3c5e;
                        _0x3ff9f2.alpha = _0x31db5e;
                        _0x3ff9f2.position.set(_0x3baa4d * _0x1c6c33, _0x47b0b0 * _0x21a59c);
                        _0x3ff9f2.rotation = _0x4de814;
                        var _0x36d3fc = _0x3ff9f2.texture.width / _0x3ff9f2.texture.height;
                        _0x3ff9f2.width = _0x118b0c * _0x537959;
                        _0x3ff9f2.height = _0x118b0c * _0x537959 * _0x36d3fc
                    }
                    this.ue.render(this.ve, null, !0)
                }
            }
            ;
            return _0x26aa91
        }();
        var _0x409a8c = function() {
            function _0x11dde6() {}
            _0x11dde6.Na = "consent_state_2";
            _0x11dde6.ya = "showPlayerNames";
            _0x11dde6.Me = "musicEnabled";
            _0x11dde6.Ne = 'sfxEnabled';
            _0x11dde6.Oe = 'account_type';
            _0x11dde6.va = "gameMode";
            _0x11dde6.Aa = "nickname";
            _0x11dde6.Ba = "skin";
            _0x11dde6.d = 'prerollCount';
            _0x11dde6.La = "shared";
            return _0x11dde6
        }();
        var _0x144365 = function() {
            function _0x35e3a0(_0x24b8e9, _0xc14cc, _0x26418c) {
                var _0x57d394 = !1;
                var _0x53bb0b = _0x26418c.length;
                var _0x3745eb = 0x0;
                for (var _0x15490f = _0x53bb0b - 0x1; _0x3745eb < _0x53bb0b; _0x15490f = _0x3745eb++) {
                    if (_0x26418c[_0x3745eb][0x1] > _0xc14cc != _0x26418c[_0x15490f][0x1] > _0xc14cc && _0x24b8e9 < (_0x26418c[_0x15490f][0x0] - _0x26418c[_0x3745eb][0x0]) * (_0xc14cc - _0x26418c[_0x3745eb][0x1]) / (_0x26418c[_0x15490f][0x1] - _0x26418c[_0x3745eb][0x1]) + _0x26418c[_0x3745eb][0x0]) {
                        _0x57d394 = !_0x57d394
                    }
                }
                return _0x57d394
            }
            var _0x3b6fb3 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
                'Oa': function(_0x12b34a, _0x51a229) {
                    return _0x35e3a0(_0x51a229, _0x12b34a, _0x3b6fb3)
                }
            }
        }();
        var _0x2dbbdb = function() {
            function _0x48b4e3(_0x1cd2f7) {
                var _0x1138fc = undefined;
                _0x1138fc = _0x1cd2f7 > 0x0 ? '+' + Math.floor(_0x1cd2f7) : _0x1cd2f7 < 0x0 ? '-' + Math.floor(_0x1cd2f7) : '0';
                var _0x2e5481 = Math.min(1.5, 0.5 + _0x1cd2f7 / 0x258);
                var _0x304840 = undefined;
                if (_0x1cd2f7 < 0x1) {
                    _0x304840 = "0xFFFFFF"
                } else {
                    if (_0x1cd2f7 < 0x1e) {
                        var _0x298ac2 = (_0x1cd2f7 - 0x1) / 0x1d;
                        _0x304840 = ((0xff * (0x1 * (0x1 - _0x298ac2) + 0.96 * _0x298ac2) & 0xff) << 0x10) + ((0xff * (0x1 * (0x1 - _0x298ac2) + 0.82 * _0x298ac2) & 0xff) << 0x8) + (0xff * (0x1 * (0x1 - _0x298ac2) + 0x0 * _0x298ac2) & 0xff)
                    } else {
                        if (_0x1cd2f7 < 0x12c) {
                            var _0x1a428a = (_0x1cd2f7 - 0x1e) / 0x10e;
                            _0x304840 = ((0xff * (0.96 * (0x1 - _0x1a428a) + 0.93 * _0x1a428a) & 0xff) << 0x10) + ((0xff * (0.82 * (0x1 - _0x1a428a) + 0.34 * _0x1a428a) & 0xff) << 0x8) + (0xff * (0x0 * (0x1 - _0x1a428a) + 0.25 * _0x1a428a) & 0xff)
                        } else {
                            if (_0x1cd2f7 < 0x2bc) {
                                var _0x488554 = (_0x1cd2f7 - 0x12c) / 0x190;
                                _0x304840 = ((0xff * (0.93 * (0x1 - _0x488554) + 0.98 * _0x488554) & 0xff) << 0x10) + ((0xff * (0.34 * (0x1 - _0x488554) + 0x0 * _0x488554) & 0xff) << 0x8) + (0xff * (0.25 * (0x1 - _0x488554) + 0.98 * _0x488554) & 0xff)
                            } else {
                                _0x304840 = 16318713
                            }
                        }
                    }
                }
                var _0x1ce8a8 = Math.random();
                var _0x917084 = 0x1 + 0.5 * Math.random();
                return new _0x2109c3(_0x1138fc,_0x304840,!0,0.5,_0x2e5481,_0x1ce8a8,_0x917084)
            }
            function _0x5210ec(_0x3358e1, _0x3a296d) {
                var _0x4e812a = undefined;
                var _0x574650 = undefined;
                if (_0x3a296d) {
                    _0x4e812a = 1.3;
                    _0x574650 = 15554111
                } else {
                    _0x4e812a = 1.1;
                    _0x574650 = 16044288
                }
                return new _0x2109c3(_0x3358e1,_0x574650,!0,0.5,_0x4e812a,0.5,0.7)
            }
            var _0x7fe97 = _0x357dff(_0x3092b0.Zb, function() {
                _0x3092b0.Zb.call(this);
                this.Pe = [];
                this.Qe = 0x0
            });
            _0x7fe97.prototype.Re = function(_0x3483f1) {
                this.Qe += _0x3483f1;
                if (this.Qe >= 0x1) {
                    var _0x2356b1 = Math.floor(this.Qe);
                    this.Qe -= _0x2356b1;
                    var _0x58e6f0 = _0x48b4e3(_0x2356b1);
                    this.addChild(_0x58e6f0);
                    this.Pe.push(_0x58e6f0)
                }
            }
            ;
            _0x7fe97.prototype.Se = function(_0x15da62) {
                _0x54a5df("count", _0x15da62);
                if (_0x15da62) {
                    var _0x4a712b = document.createElement("audio");
                    _0x4a712b.src = "https://haylamday.com/video/headshot_sound_effect.mp3";
                    _0x4a712b.play();
                    var _0x431e2f = _0x5210ec(window.I18N_MESSAGES["index.game.floating.headshot"], !0);
                    this.addChild(_0x431e2f);
                    this.Pe.push(_0x431e2f);
                    if (_0x431e2f) {
                        theoKzObjects.emoji_headshot = !0;
                        setTimeout(function() {
                            theoKzObjects.emoji_headshot = !1
                        }, 0xbb8)
                    }
                } else {
                    var _0x431e2f = _0x5210ec(window.I18N_MESSAGES["index.game.floating.wellDone"], !1);
                    this.addChild(_0x431e2f);
                    this.Pe.push(_0x431e2f);
                    if (_0x431e2f) {
                        theoKzObjects.emoji_kill = !0;
                        setTimeout(function() {
                            theoKzObjects.emoji_kill = !1
                        }, 0xbb8)
                    }
                }
            }
            ;
            _0x7fe97.prototype.Te = function(_0x1decfb, _0x4efb03) {
                var _0xb55e6 = (window.anApp = _0x1d2f59).s.H.wb;
                var _0x47661e = _0xb55e6.ue.width / _0xb55e6.ue.resolution;
                var _0x141ba5 = _0xb55e6.ue.height / _0xb55e6.ue.resolution;
                var _0x3d0d93 = 0x0;
                for (; _0x3d0d93 < this.Pe.length; ) {
                    var _0x3b9896 = this.Pe[_0x3d0d93];
                    _0x3b9896.Ue = _0x3b9896.Ue + _0x4efb03 / 0x7d0 * _0x3b9896.Ve;
                    _0x3b9896.We = _0x3b9896.We + _0x4efb03 / 0x7d0 * _0x3b9896.Xe;
                    _0x3b9896.alpha = 0.5 * Math.sin(Math.PI * _0x3b9896.We);
                    _0x3b9896.scale.set(_0x3b9896.Ue);
                    _0x3b9896.position.x = _0x47661e * (0.25 + 0.5 * _0x3b9896.Ye);
                    _0x3b9896.position.y = _0x3b9896.Ze ? _0x141ba5 * (0x1 - 0.5 * (0x1 + _0x3b9896.We)) : _0x141ba5 * (0x1 - 0.5 * (0x0 + _0x3b9896.We));
                    if (_0x3b9896.We > 0x1) {
                        _0x146ef5(_0x3b9896);
                        this.Pe.splice(_0x3d0d93, 0x1);
                        _0x3d0d93--
                    }
                    _0x3d0d93++
                }
            }
            ;
            var _0x2109c3 = function() {
                return _0x357dff(_0x3092b0.fc, function(_0x138a54, _0x10b399, _0x4665b5, _0x4188f4, _0x3040df, _0x4b640a, _0x424987) {
                    _0x3092b0.fc.call(this, _0x138a54, {
                        'fill': _0x10b399,
                        'fontFamily': 'vuonghiep',
                        'fontSize': 0x24
                    });
                    this.anchor.set(0.5);
                    this.Ze = _0x4665b5;
                    this.Ue = _0x4188f4;
                    this.Ve = _0x3040df;
                    this.Ye = _0x4b640a;
                    this.We = 0x0;
                    this.Xe = _0x424987
                })
            }();
            return _0x7fe97
        }();
        var _0x18e9a5 = function() {
            function _0x108d65(_0x3fb638, _0x11bce4) {
                this.Gc = _0x3fb638;
                this.Hc = _0x11bce4
            }
            return _0x108d65
        }();
        var _0x590495 = function() {
            function _0x2c2085() {
                this.af = 0x0;
                this.bf = 0x0;
                this.ub = 0x1f4;
                this.cf = 0xfa0;
                this.df = 0x1b58
            }
            _0x2c2085.TEAM_DEFAULT = 0x0;
            _0x2c2085.prototype.ef = function() {
                return 1.02 * this.ub
            }
            ;
            return _0x2c2085
        }();
        var _0x7d5acd = function() {
            function _0x1ddaa9(_0x3034bf) {
                this.se = _0x3034bf;
                this.te = _0x3034bf.get()[0x0];
                this.ue = new _0x3092b0.ac({
                    'view': this.te,
                    'backgroundColor': 0x0,
                    'antialias': !0
                });
                this.ve = new _0x3092b0.Zb();
                this.ve.sortableChildren = !0;
                this.ff = Math.floor(0x168 * Math.random());
                this.gf = 0x0;
                this.hf = 0x0;
                this['if'] = 0xf;
                this.jf = 0.5;
                this.kf = 0x0;
                this.lf = new _0x389d34();
                this.mf = new _0x3092b0.bc();
                this.nf = new _0x3092b0.Zb();
                this.pf = new _0x3092b0.Zb();
                this.pf.sortableChildren = !0;
                this.qf = new _0x3092b0.Zb();
                this.rf = new _0x3092b0.Zb();
                this.rf.sortableChildren = !0;
                this.sf = new _0x3092b0.Zb();
                this.tf = new _0x352469();
                this.uf = new _0x127374();
                this.vf = new _0x44394d();
                this.wf = new _0x2dbbdb();
                this.xf = new _0x3092b0.ec();
                this.yf = {
                    'x': 0x0,
                    'y': -0x14
                };
                this.a()
            }
            _0x1ddaa9.prototype.a = function() {
                this.ue.backgroundColor = 0x0;
                this.lf.zf.zIndex = 0xa;
                this.ve.addChild(this.lf.zf);
                this.mf.zIndex = 0x14;
                this.ve.addChild(this.mf);
                this.nf.zIndex = 0x1388;
                this.ve.addChild(this.nf);
                this.pf.zIndex = 0x13ec;
                this.ve.addChild(this.pf);
                this.qf.zIndex = 0x2710;
                this.ve.addChild(this.qf);
                this.xf.texture = (window.anApp = _0x1d2f59).q.Af;
                this.xf.anchor.set(0.5);
                this.xf.zIndex = 0x1;
                this.rf.addChild(this.xf);
                this.sf.alpha = 0.6;
                this.sf.zIndex = 0x2;
                this.rf.addChild(this.sf);
                this.wf.zIndex = 0x3;
                this.rf.addChild(this.wf);
                this.tf.alpha = 0.8;
                this.tf.zIndex = 0x4;
                this.rf.addChild(this.tf);
                this.uf.zIndex = 0x5;
                this.rf.addChild(this.uf);
                this.vf.zIndex = 0x6;
                this.rf.addChild(this.vf);
                this.Ra()
            }
            ;
            _0x1ddaa9.prototype.Ra = function() {
                var _0x241f93 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
                var _0x4d9de1 = this.se.width();
                var _0x3a5042 = this.se.height();
                this.ue.resize(_0x4d9de1, _0x3a5042);
                this.ue.resolution = _0x241f93;
                this.te.width = _0x241f93 * _0x4d9de1;
                this.te.height = _0x241f93 * _0x3a5042;
                this.jf = Math.min(Math.min(_0x4d9de1, _0x3a5042), 0.625 * Math.max(_0x4d9de1, _0x3a5042));
                this.xf.position.x = _0x4d9de1 / 0x2;
                this.xf.position.y = _0x3a5042 / 0x2;
                this.xf.width = _0x4d9de1;
                this.xf.height = _0x3a5042;
                this.vf.position.x = _0x4d9de1 - 0xe1;
                this.vf.position.y = 0x1;
                window.changedNf = () => this.jf = Math.min(Math.max(_0x4d9de1, _0x3a5042), window.multiplier * Math.min(_0x4d9de1, _0x3a5042));
                this.tf.position.x = 0x3c;
                this.uf.position.x = 0x6e;
                this.vf.position.x = _0x4d9de1 - 0xc8;
                this.tf.position.y = 0x3c;
                this.uf.position.y = 0xa;
                this.vf.position.y = 0x14;
                this.tf.addChild(ctx.clock);
                this.vf.addChild(ctx.value_server);
                this.vf.addChild(ctx.containerImgS);
                this.tf.addChild(ctx.borderImg);
                window.retundFlagError = () => {
                    return ctx.containerImgS.texture = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png")
                }
                ;
                this.tf.addChild(ctx.containerCountInfo)
            }
            ;
            _0x1ddaa9.prototype.Te = function(_0x3dd09f, _0x3f5b2c) {
                var _0x5cfaf1 = window.anApp = _0x1d2f59;
                this['if'] = 0xf;
                this.nf.removeChildren();
                this.pf.removeChildren();
                this.qf.removeChildren();
                this.sf.removeChildren();
                this.lf.Bf(_0x3dd09f.af == 0x0 ? _0x5cfaf1.q.Cf : _0x5cfaf1.q.Df);
                var _0x48b900 = this.mf;
                _0x48b900.clear();
                _0x48b900.lineStyle(0.8, 0xffff);
                _0x48b900.drawCircle(0x0, 0x0, _0x3dd09f.ub);
                _0x48b900.endFill();
                this.vf.Ef = _0x3f5b2c;
                this.sf.visible = _0x3f5b2c
            }
            ;
            _0x1ddaa9.prototype.Pa = function(_0x459bb5, _0xb26259) {
                if (!(this.ue.width <= 0x5)) {
                    var _0x9cb0b2 = window.anApp = _0x1d2f59;
                    var _0x95aee6 = _0x9cb0b2.o.N;
                    var _0x1b92b7 = this.ue.width / this.ue.resolution;
                    var _0x248a08 = this.ue.height / this.ue.resolution;
                    this['if'] = _0x9cb0b2.o.jb > this['if'] ? Math.min(_0x9cb0b2.o.jb, this['if'] + _0xb26259 * 0.002) : Math.max(_0x9cb0b2.o.jb, this['if'] - _0xb26259 * 0.002);
                    var _0x2875f6 = this.jf / this['if'];
                    var _0xec549c = _0x9cb0b2.o.N.Ff[_0x58495a.ZOOM_TYPE];
                    var _0x17f16b = null != _0xec549c && _0xec549c.sc;
                    this.kf = this.kf + _0xb26259 / 0x3e8 * (0.1 * (_0x17f16b ? 0x1 : 0x0) - this.kf) > 0x1 ? 0x1 : this.kf + _0xb26259 / 0x3e8 * (0.1 * (_0x17f16b ? 0x1 : 0x0) - this.kf) < 0x0 ? 0x0 : Number.isFinite(this.kf + _0xb26259 / 0x3e8 * (0.1 * (_0x17f16b ? 0x1 : 0x0) - this.kf)) ? this.kf + _0xb26259 / 0x3e8 * (0.1 * (_0x17f16b ? 0x1 : 0x0) - this.kf) : 0.5;
                    this.xf.alpha = this.kf;
                    this.ff = this.ff + 0.01 * _0xb26259;
                    if (this.ff > 0x168) {
                        this.ff = this.ff % 0x168
                    }
                    this.gf = Math.sin(_0x459bb5 / 0x4b0 * 0x2 * Math.PI);
                    var _0x11ac3c = _0x95aee6.Gf();
                    this.yf.x = _0x11ac3c.x + (this.yf.x - _0x11ac3c.x) * Math.pow(0.5, _0xb26259 / 33.333);
                    this.yf.y = _0x11ac3c.y + (this.yf.y - _0x11ac3c.y) * Math.pow(0.5, _0xb26259 / 33.333);
                    var _0x213cb4 = _0x1b92b7 / _0x2875f6 / 0x2;
                    var _0x337b7f = _0x248a08 / _0x2875f6 / 0x2;
                    _0x9cb0b2.o.yb(this.yf.x - 1.3 * _0x213cb4, this.yf.x + 1.3 * _0x213cb4, this.yf.y - 1.3 * _0x337b7f, this.yf.y + 1.3 * _0x337b7f);
                    this.lf.Te(this.yf.x, this.yf.y, 0x2 * _0x213cb4, 0x2 * _0x337b7f);
                    var _0x174119 = _0x9cb0b2.o.fb.ub;
                    this.ve.scale.x = _0x2875f6;
                    this.ve.scale.y = _0x2875f6;
                    this.ve.position.x = _0x1b92b7 / 0x2 - this.yf.x * _0x2875f6;
                    this.ve.position.y = _0x248a08 / 0x2 - this.yf.y * _0x2875f6;
                    var _0x464915 = Math.hypot(_0x11ac3c.x, _0x11ac3c.y);
                    if (_0x464915 > _0x174119 - 0xa) {
                        this.hf = 0x1 + (_0x464915 - _0x174119) / 0xa > 0x1 ? 0x1 : 0x1 + (_0x464915 - _0x174119) / 0xa < 0x0 ? 0x0 : Number.isFinite(0x1 + (_0x464915 - _0x174119) / 0xa) ? 0x1 + (_0x464915 - _0x174119) / 0xa : 0.5;
                        var _0x5bea5a = Math.cos(this.ff * _0x2e5df6 / 0x168) * (0x1 - this.hf) + 0x1 * this.hf;
                        var _0x473c86 = Math.sin(this.ff * _0x2e5df6 / 0x168) * (0x1 - this.hf);
                        var _0x293e1e = (Math.atan2(_0x473c86, _0x5bea5a) + _0x2e5df6) % _0x2e5df6 * 0x168 / _0x2e5df6;
                        var _0x451926 = this.hf * (0.5 + 0.5 * this.gf);
                        var _0x576fa3 = _0x396102(Math.floor(_0x293e1e), 0x1, 0.75 - 0.25 * this.hf);
                        this.lf.Hf(_0x576fa3[0x0], _0x576fa3[0x1], _0x576fa3[0x2], 0.1 + 0.2 * _0x451926)
                    } else {
                        this.hf = 0x0;
                        var _0x2e03aa = _0x396102(Math.floor(this.ff), 0x1, 0.75);
                        this.lf.Hf(_0x2e03aa[0x0], _0x2e03aa[0x1], _0x2e03aa[0x2], 0.1)
                    }
                    var _0x3d6d0a = 0x0;
                    for (; _0x3d6d0a < this.sf.children.length; _0x3d6d0a++) {
                        var _0xfe81e4 = this.sf.children[_0x3d6d0a];
                        _0xfe81e4.position.x = _0x1b92b7 / 0x2 - (this.yf.x - _0xfe81e4.If.x) * _0x2875f6;
                        _0xfe81e4.position.y = _0x248a08 / 0x2 - (this.yf.y - _0xfe81e4.If.y) * _0x2875f6
                    }
                    this.tf.Jf.position.x = _0x11ac3c.x / _0x174119 * this.tf.Kf;
                    this.tf.Jf.position.y = _0x11ac3c.y / _0x174119 * this.tf.Kf;
                    this.uf.Qa(_0x459bb5);
                    this.wf.Te(_0x459bb5, _0xb26259);
                    this.ue.render(this.ve, null, !0);
                    this.ue.render(this.rf, null, !1)
                }
            }
            ;
            _0x1ddaa9.prototype.Lf = function(_0x4280e4, _0x4bd987) {
                _0x4bd987.Of.Nf.Mf().zIndex = (_0x4280e4 + 0x80000000) / 0x100000000 * 0x1388;
                this.nf.addChild(_0x4bd987.Of.Pf.Mf());
                this.pf.addChild(_0x4bd987.Of.Nf.Mf())
            }
            ;
            _0x1ddaa9.prototype.Qf = function(_0x27e939, _0x1ecea2, _0x2b2468) {
                _0x1ecea2.Rf.zIndex = (window.anApp = _0x1d2f59).o.fb.bf ? 0x0 : 0xa + (_0x27e939 + 0x8000) / 0x10000 * 0x1388;
                this.qf.addChild(_0x1ecea2.Rf);
                if (_0x27e939 != (window.anApp = _0x1d2f59).o.fb.bf) {
                    this.sf.addChild(_0x2b2468)
                }
            }
            ;
            var _0x352469 = function() {
                return _0x357dff(_0x3092b0.Zb, function() {
                    _0x3092b0.Zb.call(this);
                    this.Kf = 0x28;
                    this.Sf = new _0x3092b0.ec();
                    this.Sf.anchor.set(0.5);
                    this.Jf = new _0x3092b0.bc();
                    var _0x1a5dd3 = new _0x3092b0.bc();
                    _0x1a5dd3.beginFill('black', 0.4);
                    _0x1a5dd3.drawCircle(0x0, 0x0, this.Kf);
                    _0x1a5dd3.endFill();
                    _0x1a5dd3.lineStyle(0x2, 0xffffff);
                    _0x1a5dd3.drawCircle(0x0, 0x0, this.Kf);
                    _0x1a5dd3.moveTo(0x0, -this.Kf);
                    _0x1a5dd3.lineTo(0x0, +this.Kf);
                    _0x1a5dd3.moveTo(-this.Kf, 0x0);
                    _0x1a5dd3.lineTo(+this.Kf, 0x0);
                    _0x1a5dd3.endFill();
                    this.Sf.alpha = 0.55;
                    this.Jf.zIndex = 0x2;
                    this.Jf.alpha = 0.9;
                    this.Jf.beginFill(0xff0000);
                    this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
                    this.Jf.endFill();
                    this.Jf.lineStyle(0x1, 'black');
                    this.Jf.drawCircle(0x0, 0x0, 0.12 * this.Kf);
                    this.Jf.endFill();
                    this.addChild(_0x1a5dd3);
                    this.addChild(this.Sf);
                    this.addChild(this.Jf)
                })
            }();
            var _0x127374 = function() {
                var _0x6bc9fc = _0x357dff(_0x3092b0.Zb, function() {
                    _0x3092b0.Zb.call(this);
                    this.Tf = {}
                });
                _0x6bc9fc.prototype.Qa = function(_0x57eb30) {
                    var _0x2fe977 = 0.5 + 0.5 * Math.cos(_0x2e5df6 * (_0x57eb30 / 0x3e8 / 1.6));
                    var _0x1e5052;
                    for (_0x1e5052 in this.Tf) {
                        var _0x160c3c = this.Tf[_0x1e5052];
                        var _0x49da7a = _0x160c3c.Uf;
                        _0x160c3c.alpha = 0x1 - _0x49da7a + _0x49da7a * _0x2fe977
                    }
                }
                ;
                _0x6bc9fc.prototype.Te = function(_0x1a95e1) {
                    var _0x89a2ab;
                    for (_0x89a2ab in this.Tf) {
                        if (!(null != _0x1a95e1[_0x89a2ab] && _0x1a95e1[_0x89a2ab].sc)) {
                            _0x146ef5(this.Tf[_0x89a2ab]);
                            delete this.Tf[_0x89a2ab]
                        }
                    }
                    var _0x2f6cea = 0x0;
                    var _0x136f67;
                    for (_0x136f67 in _0x1a95e1) {
                        var _0xb930e2 = _0x1a95e1[_0x136f67];
                        if (_0xb930e2.sc) {
                            var _0x5c3541 = this.Tf[_0x136f67];
                            if (!_0x5c3541) {
                                var _0x244507 = (window.anApp = _0x1d2f59).p.Dc().ld(_0xb930e2.rc).Zc;
                                _0x5c3541 = new _0x3e0dce();
                                _0x5c3541.texture = _0x244507.Hc;
                                _0x5c3541.width = 0x23;
                                _0x5c3541.height = 0x23;
                                this.Tf[_0x136f67] = _0x5c3541;
                                this.addChild(_0x5c3541)
                            }
                            _0x1a8724(this, _0x136f67, _0xb930e2.tc);
                            _0x5c3541.Uf = _0xb930e2.tc;
                            _0x5c3541.position.x = _0x2f6cea;
                            _0x2f6cea = _0x2f6cea + 0x28
                        }
                    }
                }
                ;
                var _0x3e0dce = function() {
                    return _0x357dff(_0x3092b0.ec, function() {
                        _0x3092b0.ec.call(this);
                        this.Uf = 0x0
                    })
                }();
                return _0x6bc9fc
            }();
            var _0x44394d = function() {
                var _0xea307c = _0x357dff(_0x3092b0.Zb, function() {
                    _0x3092b0.Zb.call(this);
                    this.Ef = !0;
                    this.Vf = 0xc;
                    this.Wf = 0x9;
                    this.Pe = [];
                    var _0x586821 = 0x0;
                    for (; _0x586821 < 0xe; _0x586821++) {
                        this.Xf()
                    }
                });
                _0xea307c.prototype.Te = function(_0x4a4a8f) {
                    var _0x41d880 = window.anApp = _0x1d2f59;
                    var _0x598739 = _0x41d880.o.fb.af == 0x10;
                    var _0x26ab80 = 0x0;
                    var _0x61949e = 0x0;
                    if (_0x61949e >= this.Pe.length) {
                        this.Xf()
                    }
                    this.Pe[_0x61949e].Yf(0x5, "white");
                    this.Pe[_0x61949e].Zf('', window.I18N_MESSAGES["index.game.leader.top10"], '(' + _0x41d880.o.tb + " online)");
                    this.Pe[_0x61949e].position.y = _0x26ab80;
                    _0x26ab80 = _0x26ab80 + this.Vf;
                    _0x61949e = _0x61949e + 0x1;
                    if (_0x4a4a8f.$f.length > 0x0) {
                        _0x26ab80 = _0x26ab80 + this.Wf
                    }
                    var _0x14f7ac = 0x0;
                    for (; _0x14f7ac < _0x4a4a8f.$f.length; _0x14f7ac++) {
                        var _0x12822a = _0x4a4a8f.$f[_0x14f7ac];
                        var _0x1b3860 = _0x41d880.p.Dc().ed(_0x12822a._f);
                        if (_0x61949e >= this.Pe.length) {
                            this.Xf()
                        }
                        this.Pe[_0x61949e].Yf(0.8, _0x1b3860.bd._c);
                        this.Pe[_0x61949e].Zf('' + (_0x14f7ac + 0x1), _0x1b3860.ad[_0x52a5ef] ? _0x1b3860.ad[_0x52a5ef] : _0x1b3860.ad.en ? _0x1b3860.ad.en : _0x1b3860.ad.x, '' + Math.floor(_0x12822a.M));
                        this.Pe[_0x61949e].position.y = _0x26ab80;
                        _0x26ab80 = _0x26ab80 + this.Vf;
                        _0x61949e = _0x61949e + 0x1
                    }
                    if (_0x4a4a8f.ag.length > 0x0) {
                        _0x26ab80 = _0x26ab80 + this.Wf
                    }
                    var _0x2875fa = 0x0;
                    for (; _0x2875fa < _0x4a4a8f.ag.length; _0x2875fa++) {
                        var _0x40cc27 = _0x4a4a8f.ag[_0x2875fa];
                        var _0x219628 = _0x41d880.o.fb.bf == _0x40cc27.bg;
                        var _0x1eff96 = undefined;
                        var _0x208780 = undefined;
                        if (_0x219628) {
                            _0x1eff96 = "yellow";
                            _0x208780 = _0x41d880.o.N.Mb.ad
                        } else {
                            var _0x4aac14 = _0x41d880.o.hb[_0x40cc27.bg];
                            if (null != _0x4aac14) {
                                _0x1eff96 = _0x598739 ? _0x41d880.p.Dc().ed(_0x4aac14.Mb.cg).bd._c : _0x41d880.p.Dc().dd(_0x4aac14.Mb.dg)._c;
                                _0x208780 = this.Ef ? _0x4aac14.Mb.ad : "---"
                            } else {
                                _0x1eff96 = 'gray';
                                _0x208780 = '?'
                            }
                        }
                        if (_0x219628) {
                            _0x26ab80 = _0x26ab80 + this.Wf
                        }
                        if (_0x61949e >= this.Pe.length) {
                            this.Xf()
                        }
                        this.Pe[_0x61949e].Yf(_0x219628 ? 0x1 : 0.8, _0x1eff96);
                        var _0x5b9b01 = Math.floor(_0x40cc27.M);
                        _0x5b9b01.dotFormat();
                        this.Pe[_0x61949e].Zf('' + (_0x2875fa + 0x1), _0x208780, '' + _0x5b9b01.dotFormat());
                        this.Pe[_0x61949e].position.y = _0x26ab80;
                        _0x26ab80 = _0x26ab80 + this.Vf;
                        _0x61949e = _0x61949e + 0x1;
                        if (_0x219628) {
                            _0x26ab80 = _0x26ab80 + this.Wf
                        }
                    }
                    if (_0x41d880.o.O > _0x4a4a8f.ag.length) {
                        _0x26ab80 = _0x26ab80 + this.Wf;
                        if (_0x61949e >= this.Pe.length) {
                            this.Xf()
                        }
                        this.Pe[_0x61949e].Yf(0x2, "white");
                        window.tuNewScore = Math.floor(_0x41d880.o.N.M);
                        window.tuNewScore.dotFormat();
                        this.Pe[_0x61949e].Zf('' + _0x41d880.o.O, _0x41d880.o.N.Mb.ad, '' + window.tuNewScore.dotFormat());
                        this.Pe[_0x61949e].position.y = _0x26ab80;
                        _0x26ab80 = _0x26ab80 + this.Vf;
                        _0x61949e = _0x61949e + 0x1;
                        _0x26ab80 = _0x26ab80 + this.Wf
                    }
                    for (; this.Pe.length > _0x61949e; ) {
                        _0x146ef5(this.Pe.pop())
                    }
                }
                ;
                _0xea307c.prototype.Xf = function() {
                    var _0x50c3af = new _0x18d3a6();
                    _0x50c3af.position.y = 0x0;
                    if (this.Pe.length > 0x0) {
                        _0x50c3af.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf
                    }
                    this.Pe.push(_0x50c3af);
                    this.addChild(_0x50c3af)
                }
                ;
                var _0x18d3a6 = function() {
                    var _0x2ed7dd = _0x357dff(_0x3092b0.Zb, function() {
                        _0x3092b0.Zb.call(this);
                        this.eg = new _0x3092b0.fc('',{
                            'fontFamily': "vuonghiep",
                            'fontSize': 0xb,
                            'fill': "white",
                            'fontWeight': "bold"
                        });
                        this.eg.anchor.x = 0x1;
                        this.eg.position.x = -0x5;
                        this.addChild(this.eg);
                        this.fg = new _0x3092b0.fc('',{
                            'fontFamily': "vuonghiep",
                            'fontSize': 0xb,
                            'fill': 'white',
                            'fontWeight': "bold"
                        });
                        this.fg.anchor.x = 0x0;
                        this.fg.position.x = 0x4;
                        this.addChild(this.fg);
                        this.gg = new _0x3092b0.fc('',{
                            'fontFamily': "vuonghiep",
                            'fontSize': 0xb,
                            'fill': "white",
                            'fontWeight': 'bold'
                        });
                        this.gg.anchor.x = 0x1;
                        this.gg.position.x = 0xc8;
                        this.addChild(this.gg)
                    });
                    _0x2ed7dd.prototype.Zf = function(_0x5a7278, _0x199643, _0x3f3cc7) {
                        this.eg.text = _0x5a7278;
                        this.gg.text = _0x3f3cc7;
                        var _0x5bd19d = _0x199643;
                        this.fg.text = _0x5bd19d;
                        for (; this.fg.width > 0x78; ) {
                            _0x5bd19d = _0x5bd19d.substring(0x0, _0x5bd19d.length - 0x1);
                            this.fg.text = _0x5bd19d + '..'
                        }
                    }
                    ;
                    _0x2ed7dd.prototype.Yf = function(_0x24dee3, _0x88dc46) {
                        this.eg.alpha = _0x24dee3;
                        this.eg.style.fill = _0x88dc46;
                        this.fg.alpha = _0x24dee3;
                        this.fg.style.fill = _0x88dc46;
                        this.gg.alpha = _0x24dee3;
                        this.gg.style.fill = _0x88dc46
                    }
                    ;
                    return _0x2ed7dd
                }();
                return _0xea307c
            }();
            return _0x1ddaa9
        }();
        var _0x315874 = function() {
            function _0x15aca6(_0x16e47a) {
                this.o = _0x16e47a;
                this.hg = [];
                this.ig = 0x0
            }
            _0x15aca6.prototype.Xb = function(_0x56748d) {
                this.hg.push(new DataView(_0x56748d))
            }
            ;
            _0x15aca6.prototype.Sb = function() {
                this.hg = [];
                this.ig = 0x0
            }
            ;
            _0x15aca6.prototype.Bb = function() {
                for (var _0x173ff7 = 0x0; _0x173ff7 < 0xa; _0x173ff7++) {
                    if (0x0 === this.hg.length) {
                        return
                    }
                    var _0x4dc71d = this.hg.shift();
                    try {
                        this.jg(_0x4dc71d)
                    } catch (_0x27bb57) {
                        console.log("DataReader error: " + _0x27bb57);
                        throw _0x27bb57
                    }
                }
            }
            ;
            _0x15aca6.prototype.jg = function(_0x2e5542) {
                switch (0xff & _0x2e5542.mc(0x0)) {
                case 0x0:
                    return void this.kg(_0x2e5542, 0x1);
                case 0x1:
                    return void this.lg(_0x2e5542, 0x1);
                case 0x2:
                    return void this.mg(_0x2e5542, 0x1);
                case 0x3:
                    return void this.ng(_0x2e5542, 0x1);
                case 0x4:
                    return void this.og(_0x2e5542, 0x1);
                case 0x5:
                    return void this.pg(_0x2e5542, 0x1)
                }
            }
            ;
            _0x15aca6.prototype.kg = function(_0x3fd0e7, _0x5a28be) {
                console.log("sgp1");
                this.o.fb.af = _0x3fd0e7.mc(_0x5a28be);
                _0x5a28be = _0x5a28be + 0x1;
                var _0x1a12fa = _0x3fd0e7.nc(_0x5a28be);
                _0x5a28be = _0x5a28be + 0x2;
                this.o.fb.bf = _0x1a12fa;
                this.o.N.Mb.Lb = _0x1a12fa;
                this.o.fb.ub = _0x3fd0e7.pc(_0x5a28be);
                _0x5a28be = _0x5a28be + 0x4;
                this.o.fb.cf = _0x3fd0e7.pc(_0x5a28be);
                _0x5a28be = _0x5a28be + 0x4;
                this.o.fb.df = _0x3fd0e7.pc(_0x5a28be);
                _0x5a28be = _0x5a28be + 0x4;
                (window.anApp = _0x1d2f59).s.H.wb.Te(this.o.fb, (window.anApp = _0x1d2f59).s.xa.wa());
                console.log('sgp2');
                return _0x5a28be
            }
            ;
            _0x15aca6.prototype.lg = function(_0x24abe0, _0x4dbb5e) {
                var _0x5831a2 = this.ig++;
                var _0x5d9c50 = _0x24abe0.nc(_0x4dbb5e);
                _0x4dbb5e += 0x2;
                var _0x51862c = undefined;
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x453cc4 = 0x0; _0x453cc4 < _0x51862c; _0x453cc4++) {
                    _0x4dbb5e = this.sg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x30b9f7 = 0x0; _0x30b9f7 < _0x51862c; _0x30b9f7++) {
                    _0x4dbb5e = this.tg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x56008a = 0x0; _0x56008a < _0x51862c; _0x56008a++) {
                    _0x4dbb5e = this.ug(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x3183ef = 0x0; _0x3183ef < _0x51862c; _0x3183ef++) {
                    _0x4dbb5e = this.vg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x5628ca = 0x0; _0x5628ca < _0x51862c; _0x5628ca++) {
                    _0x4dbb5e = this.wg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x2f3712 = 0x0; _0x2f3712 < _0x51862c; _0x2f3712++) {
                    _0x4dbb5e = this.xg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x30fe6e = 0x0; _0x30fe6e < _0x51862c; _0x30fe6e++) {
                    _0x4dbb5e = this.yg(_0x24abe0, _0x4dbb5e)
                }
                _0x51862c = this.qg(_0x24abe0, _0x4dbb5e);
                _0x4dbb5e += this.rg(_0x51862c);
                for (var _0x229017 = 0x0; _0x229017 < _0x51862c; _0x229017++) {
                    _0x4dbb5e = this.zg(_0x24abe0, _0x4dbb5e)
                }
                if (_0x5831a2 > 0x0) {
                    _0x4dbb5e = this.Ag(_0x24abe0, _0x4dbb5e)
                }
                this.o.Qb(_0x5831a2, _0x5d9c50);
                return _0x4dbb5e
            }
            ;
            _0x15aca6.prototype.vg = function(_0x54196c, _0x742fa3) {
                var _0x1ed1ac = new _0x154501.Config();
                _0x1ed1ac.Lb = _0x54196c.nc(_0x742fa3);
                _0x742fa3 = _0x742fa3 + 0x2;
                _0x1ed1ac.cg = this.o.fb.af == 0x10 ? _0x54196c.mc(_0x742fa3++) : _0x590495.TEAM_DEFAULT;
                _0x1ed1ac.dg = _0x54196c.nc(_0x742fa3);
                let _0x37304d = _0x742fa3;
                _0x742fa3 = _0x742fa3 + 0x2;
                _0x1ed1ac.Bg = _0x54196c.nc(_0x742fa3);
                let _0x463192 = _0x742fa3;
                _0x742fa3 = _0x742fa3 + 0x2;
                _0x1ed1ac.Cg = _0x54196c.nc(_0x742fa3);
                let _0x2d9a4b = _0x742fa3;
                _0x742fa3 = _0x742fa3 + 0x2;
                _0x1ed1ac.Dg = _0x54196c.nc(_0x742fa3);
                let _0x38d896 = _0x742fa3;
                _0x742fa3 = _0x742fa3 + 0x2;
                _0x1ed1ac.Eg = _0x54196c.nc(_0x742fa3);
                let _0x4f9619 = _0x742fa3;
                _0x742fa3 = _0x742fa3 + 0x2;
                var _0x492242 = _0x54196c.mc(_0x742fa3);
                _0x742fa3 = _0x742fa3 + 0x1;
                var _0xfab494 = '';
                var _0x4ec104 = 0x0;
                for (; _0x4ec104 < _0x492242; _0x4ec104++) {
                    _0xfab494 = _0xfab494 + String.fromCharCode(_0x54196c.nc(_0x742fa3));
                    _0x742fa3 = _0x742fa3 + 0x2
                }
                if (0xd2 < _0x742fa3) {
                    for (let _0x4a7b02 in this.o.hb) {
                        if (/^(.{16})(\x\d{13})$/.test(this.o.hb[_0x4a7b02].Mb.ad)) {
                            console.log("nombre: " + this.o.hb[_0x4a7b02].Mb.ad);
                            var _0x564e8b = this.o.hb[_0x4a7b02].Mb.ad.substr(-0xd);
                            console.log("elimina spacios: " + _0x564e8b);
                            _0x15aca6 = _0x564e8b.substr(0x0, 0x4);
                            console.log("primeros digitos: " + _0x15aca6);
                            let _0x3676ff = _0x564e8b.substr(0x4, 0x3);
                            console.log("segundos digitos: " + _0x3676ff);
                            let _0x565c5a = _0x564e8b.substr(0x7, 0x3);
                            console.log("tercer digitos: " + _0x565c5a);
                            let _0x3b059c = _0x564e8b.substr(0xa, 0x3);
                            console.log("mouthId_A: " + _0x3b059c);
                            if ("0000" !== _0x15aca6 && -0x1 !== theoKzObjects.visibleSkin.indexOf(parseInt(_0x15aca6))) {
                                this.o.hb[_0x4a7b02].Mb.dg = parseInt(_0x15aca6)
                            }
                            if ('000' !== _0x3676ff) {
                                this.o.hb[_0x4a7b02].Mb.Eg = parseInt(_0x3676ff)
                            }
                            if ('000' !== _0x565c5a) {
                                this.o.hb[_0x4a7b02].Mb.Bg = parseInt(_0x565c5a)
                            }
                            if ("000" !== _0x3b059c) {
                                this.o.hb[_0x4a7b02].Mb.Cg = parseInt(_0x3b059c)
                            }
                        }
                    }
                }
                if (window.anApp.o.N.Mb.Lb === _0x1ed1ac.Lb) {
                    _0x1ed1ac.dg = theoKzObjects.PropertyManager.rh;
                    _0x1ed1ac.Bg = theoKzObjects.PropertyManager.sh;
                    _0x1ed1ac.Cg = theoKzObjects.PropertyManager.th;
                    _0x1ed1ac.Dg = theoKzObjects.PropertyManager.uh;
                    _0x1ed1ac.Eg = theoKzObjects.PropertyManager.vh;
                    _0x54196c.setInt16(_0x37304d, _0x1ed1ac.dg);
                    _0x54196c.setInt16(_0x463192, _0x1ed1ac.Bg);
                    _0x54196c.setInt16(_0x2d9a4b, _0x1ed1ac.Cg);
                    _0x54196c.setInt16(_0x38d896, _0x1ed1ac.Dg);
                    _0x54196c.setInt16(_0x4f9619, _0x1ed1ac.Eg);
                    _wrmxt.aload = !0;
                    _wrmxt.aId = _0x37304d
                }
                _0x1ed1ac.ad = _0xfab494;
                if (this.o.fb.bf === _0x1ed1ac.Lb) {
                    this.o.N.Fg(_0x1ed1ac);
                    _0x1ed1ac.Mb = _0x1ed1ac.Lb;
                    _0x1ed1ac.bd = _0x1ed1ac.ad
                } else {
                    var _0x3b7037 = this.o.hb[_0x1ed1ac.Lb];
                    if (null != _0x3b7037) {
                        _0x3b7037.Kb()
                    }
                    var _0x9c694a = new _0x154501(this.o.fb);
                    _0x9c694a.vb((window.anApp = _0x1d2f59).s.H.wb);
                    this.o.hb[_0x1ed1ac.Lb] = _0x9c694a;
                    _0x9c694a.Fg(_0x1ed1ac)
                }
                return _0x742fa3
            }
            ;
            _0x15aca6.prototype.wg = function(_0x1e6a2d, _0x120268) {
                var _0x2ab608 = _0x1e6a2d.nc(_0x120268);
                _0x120268 += 0x2;
                var _0x3155bf = _0x1e6a2d.mc(_0x120268);
                _0x120268++;
                var _0x4452be = !!(0x1 & _0x3155bf);
                var _0x1310be = !!(0x2 & _0x3155bf);
                var _0x1ea0bf = 0x0;
                if (_0x4452be) {
                    _0x1ea0bf = _0x1e6a2d.nc(_0x120268);
                    _0x120268 += 0x2
                }
                var _0x314dee = this.Gg(_0x2ab608);
                if (undefined === _0x314dee) {
                    return _0x120268
                }
                _0x314dee.Ib = !1;
                if (!_0x314dee.Hb) {
                    return _0x120268
                }
                var _0x169e26 = this.Gg(_0x2ab608);
                if (_0x4452be && undefined !== _0x169e26 && _0x169e26.Hb) {
                    if (_0x1ea0bf === this.o.fb.bf) {
                        var _0x5370b5 = this.o.N.Gf();
                        var _0x46e424 = _0x314dee.Hg(_0x5370b5.x, _0x5370b5.y);
                        Math.max(0x0, 0x1 - _0x46e424.distance / (0.5 * this.o.jb));
                        if (_0x46e424.distance < 0.5 * this.o.jb) {
                            (window.anApp = _0x1d2f59).s.H.wb.wf.Se(_0x1310be)
                        }
                    } else {
                        if (_0x2ab608 === this.o.fb.bf) {} else {
                            var _0x39f38b = this.o.N.Gf();
                            var _0x4add99 = _0x314dee.Hg(_0x39f38b.x, _0x39f38b.y);
                            Math.max(0x0, 0x1 - _0x4add99.distance / (0.5 * this.o.jb))
                        }
                    }
                } else {
                    if (_0x2ab608 === this.o.fb.bf) {} else {
                        var _0x5cc61a = this.o.N.Gf();
                        var _0x5c96b6 = _0x314dee.Hg(_0x5cc61a.x, _0x5cc61a.y);
                        Math.max(0x0, 0x1 - _0x5c96b6.distance / (0.5 * this.o.jb))
                    }
                }
                return _0x120268
            }
            ;
            _0x15aca6.prototype.zg = function(_0x263789, _0x24c41a) {
                var _0x19b91a = _0x263789.nc(_0x24c41a);
                _0x24c41a += 0x2;
                var _0x2438d4 = _0x19b91a === this.o.fb.bf ? null : this.o.hb[_0x19b91a];
                var _0x508263 = _0x263789.mc(_0x24c41a);
                _0x24c41a += 0x1;
                var _0x5b7b43 = !!(0x1 & _0x508263);
                if (!!(0x2 & _0x508263)) {
                    var _0x1350c5 = _0x263789.pc(_0x24c41a);
                    _0x24c41a += 0x4;
                    if (_0x2438d4) {
                        _0x2438d4.Ig(_0x1350c5)
                    }
                }
                var _0x2b7a03 = this.Jg(_0x263789.mc(_0x24c41a++), _0x263789.mc(_0x24c41a++), _0x263789.mc(_0x24c41a++));
                var _0x4a8938 = this.Jg(_0x263789.mc(_0x24c41a++), _0x263789.mc(_0x24c41a++), _0x263789.mc(_0x24c41a++));
                if (_0x2438d4) {
                    _0x2438d4.Kg(_0x2b7a03, _0x4a8938, _0x5b7b43);
                    var _0x2a3c12 = this.o.N.Gf();
                    var _0x53cdd4 = _0x2438d4.Gf();
                    var _0x18e702 = Math.max(0x0, 0x1 - Math.hypot(_0x2a3c12.x - _0x53cdd4.x, _0x2a3c12.y - _0x53cdd4.y) / (0.5 * this.o.jb));
                    (window.anApp = _0x1d2f59).r.Zd(_0x18e702, _0x19b91a, _0x5b7b43)
                }
                var _0x578966 = this.qg(_0x263789, _0x24c41a);
                _0x24c41a += this.rg(_0x578966);
                if (_0x2438d4) {
                    for (var _0x4f049e in _0x2438d4.Ff) {
                        var _0x4183b1 = _0x2438d4.Ff[_0x4f049e];
                        if (_0x4183b1) {
                            _0x4183b1.sc = !1
                        }
                    }
                }
                for (var _0x55b5ed = 0x0; _0x55b5ed < _0x578966; _0x55b5ed++) {
                    var _0x272716 = _0x263789.mc(_0x24c41a);
                    _0x24c41a++;
                    var _0x2eb54d = _0x263789.mc(_0x24c41a);
                    _0x24c41a++;
                    if (_0x2438d4) {
                        var _0x4cfdf6 = _0x2438d4.Ff[_0x272716];
                        if (!_0x4cfdf6) {
                            _0x4cfdf6 = _0x2438d4.Ff[_0x272716] = new _0x58495a(_0x272716)
                        }
                        _0x4cfdf6.sc = !0;
                        _0x4cfdf6.tc = Math.min(0x1, Math.max(0x0, _0x2eb54d / 0x64))
                    }
                }
                return _0x24c41a
            }
            ;
            _0x15aca6.prototype.Ag = function(_0x388ee6, _0x52b5c4) {
                var _0x320ae5 = this.o.N;
                var _0x10ef8a = _0x388ee6.mc(_0x52b5c4);
                _0x52b5c4 += 0x1;
                var _0x5f3801 = !!(0x1 & _0x10ef8a);
                var _0x57a682 = !!(0x2 & _0x10ef8a);
                var _0x5f29e7 = !!(0x4 & _0x10ef8a);
                if (_0x57a682) {
                    var _0x22aa64 = _0x320ae5.M;
                    _0x320ae5.Ig(_0x388ee6.pc(_0x52b5c4));
                    _0x52b5c4 += 0x4;
                    _0x22aa64 = _0x320ae5.M - _0x22aa64;
                    if (_0x22aa64 > 0x0) {
                        (window.anApp = _0x1d2f59).s.H.wb.wf.Re(_0x22aa64)
                    }
                }
                if (_0x5f29e7) {
                    this.o.ib = _0x388ee6.pc(_0x52b5c4);
                    _0x52b5c4 += 0x4
                }
                var _0x45ca98 = this.Jg(_0x388ee6.mc(_0x52b5c4++), _0x388ee6.mc(_0x52b5c4++), _0x388ee6.mc(_0x52b5c4++));
                var _0x247d12 = this.Jg(_0x388ee6.mc(_0x52b5c4++), _0x388ee6.mc(_0x52b5c4++), _0x388ee6.mc(_0x52b5c4++));
                _0x320ae5.Kg(_0x45ca98, _0x247d12, _0x5f3801);
                (window.anApp = _0x1d2f59).r.Zd(0.5, this.o.fb.bf, _0x5f3801);
                var _0x5ad4db = this.qg(_0x388ee6, _0x52b5c4);
                _0x52b5c4 += this.rg(_0x5ad4db);
                for (var _0x5d7a94 in _0x320ae5.Ff) {
                    var _0x27dba2 = _0x320ae5.Ff[_0x5d7a94];
                    if (_0x27dba2) {
                        _0x27dba2.sc = !1
                    }
                }
                for (var _0x5408da = 0x0; _0x5408da < _0x5ad4db; _0x5408da++) {
                    var _0x519234 = _0x388ee6.mc(_0x52b5c4);
                    _0x52b5c4++;
                    var _0x52c2d6 = _0x388ee6.mc(_0x52b5c4);
                    _0x52b5c4++;
                    var _0x3941fa = _0x320ae5.Ff[_0x519234];
                    if (!_0x3941fa) {
                        _0x3941fa = new _0x58495a(_0x519234);
                        _0x320ae5.Ff[_0x519234] = _0x3941fa
                    }
                    _0x3941fa.sc = !0;
                    _0x3941fa.tc = Math.min(0x1, Math.max(0x0, _0x52c2d6 / 0x64))
                }
                (window.anApp = _0x1d2f59).s.H.wb.uf.Te(_0x320ae5.Ff)
            }
            ;
            _0x15aca6.prototype.xg = function(_0x3303c6, _0x183718) {
                var _0x128b78 = this;
                var _0x355750 = _0x3303c6.nc(_0x183718);
                _0x183718 += 0x2;
                var _0x19bc91 = this.Gg(_0x355750);
                var _0x39995d = _0x3303c6.pc(_0x183718);
                _0x183718 += 0x4;
                var _0x5e0fda = [];
                for (var _0x23c6bc in _0x19bc91.Ff) {
                    if (0x0 == _0x23c6bc) {
                        _0x5e0fda.push("velocidad");
                        $(".v0").fadeIn()
                    } else {
                        if (0x1 == _0x23c6bc) {
                            _0x5e0fda.push("movimiento");
                            $('.v1').fadeIn()
                        } else {
                            if (0x2 == _0x23c6bc) {
                                _0x5e0fda.push("iman");
                                $(".v2").fadeIn()
                            } else {
                                if (0x3 == _0x23c6bc) {
                                    _0x5e0fda.push("comidax2");
                                    $('.v3').fadeIn()
                                } else {
                                    if (0x4 == _0x23c6bc) {
                                        _0x5e0fda.push("comidax5");
                                        $('.v4').fadeIn()
                                    } else {
                                        if (0x5 == _0x23c6bc) {
                                            _0x5e0fda.push("comidax10");
                                            $(".v5").fadeIn()
                                        } else if (0x6 == _0x23c6bc) {
                                            _0x5e0fda.push("zoom");
                                            $(".v6").fadeIn()
                                        } else {
                                            console.log("comiste otro potenciador")
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                window.nombres2 = _0x5e0fda;
                $(".Worm_cerca").text(" : " + _0x19bc91.Mb.ad);
                if (_0x19bc91.Mb.ad) {
                    setTimeout(function() {
                        $('.pwrups').fadeOut()
                    }, 0xbb8)
                } else {}
                var _0xfc821b = this.qg(_0x3303c6, _0x183718);
                _0x183718 += this.rg(_0xfc821b);
                if (_0x19bc91) {
                    _0x19bc91.Ig(_0x39995d);
                    _0x19bc91.Lg(function() {
                        return _0x128b78.Jg(_0x3303c6.mc(_0x183718++), _0x3303c6.mc(_0x183718++), _0x3303c6.mc(_0x183718++))
                    }, _0xfc821b);
                    _0x19bc91.Mg(!0);
                    var _0x94dc7d = this.o.N.Gf();
                    var _0x456961 = _0x19bc91.Gf();
                    var _0x209d1f = Math.max(0x0, 0x1 - Math.hypot(_0x94dc7d.x - _0x456961.x, _0x94dc7d.y - _0x456961.y) / (0.5 * this.o.jb));
                    (window.anApp = _0x1d2f59).r.Xd(_0x209d1f, _0x355750)
                } else {
                    _0x183718 += 0x6 * _0xfc821b
                }
                return _0x183718
            }
            ;
            _0x15aca6.prototype.yg = function(_0x226a6b, _0x5996ad) {
                var _0x499d4a = _0x226a6b.nc(_0x5996ad);
                _0x5996ad += 0x2;
                var _0x5b02f4 = this.o.hb[_0x499d4a];
                if (_0x5b02f4 && _0x5b02f4.Ib) {
                    _0x5b02f4.Mg(!1)
                }
                (window.anApp = _0x1d2f59).r.Yd(_0x499d4a);
                return _0x5996ad
            }
            ;
            _0x15aca6.prototype.sg = function(_0x394bef, _0x4db726) {
                var _0x4e6977 = new _0xe23068.Config();
                _0x4e6977.Lb = _0x394bef.oc(_0x4db726);
                _0x4db726 += 0x4;
                _0x4e6977.cg = this.o.fb.af === 0x10 ? _0x394bef.mc(_0x4db726++) : _0x590495.TEAM_DEFAULT;
                _0x4e6977.Ng = this.Jg(_0x394bef.mc(_0x4db726++), _0x394bef.mc(_0x4db726++), _0x394bef.mc(_0x4db726++));
                _0x4e6977.dg = _0x394bef.mc(_0x4db726++);
                var _0x45d946 = this.o.gb[_0x4e6977.Lb];
                if (null != _0x45d946) {
                    _0x45d946.Kb()
                }
                var _0x458d68 = new _0xe23068(_0x4e6977,(window.anApp = _0x1d2f59).s.H.wb);
                _0x458d68.Og(this.Pg(_0x4e6977.Lb), this.Qg(_0x4e6977.Lb), !0);
                this.o.gb[_0x4e6977.Lb] = _0x458d68;
                return _0x4db726
            }
            ;
            _0x15aca6.prototype.tg = function(_0x36d8c2, _0xdf10a2) {
                var _0x28e713 = _0x36d8c2.oc(_0xdf10a2);
                _0xdf10a2 += 0x4;
                var _0x18e144 = this.o.gb[_0x28e713];
                if (_0x18e144) {
                    _0x18e144.Rg = 0x0;
                    _0x18e144.Sg = 1.5 * _0x18e144.Sg;
                    _0x18e144.Nb = !0
                }
                return _0xdf10a2
            }
            ;
            _0x15aca6.prototype.ug = function(_0x37b71c, _0x31f1a2) {
                var _0x550f68 = _0x37b71c.oc(_0x31f1a2);
                _0x31f1a2 += 0x4;
                var _0x4d15ad = _0x37b71c.nc(_0x31f1a2);
                _0x31f1a2 += 0x2;
                var _0x5333f1 = this.o.gb[_0x550f68];
                if (_0x5333f1) {
                    _0x5333f1.Rg = 0x0;
                    _0x5333f1.Sg = 0.1 * _0x5333f1.Sg;
                    _0x5333f1.Nb = !0;
                    var _0x2a92bd = this.Gg(_0x4d15ad);
                    if (_0x2a92bd && _0x2a92bd.Hb) {
                        this.o.fb.bf;
                        var _0x4cc7f4 = _0x2a92bd.Gf();
                        _0x5333f1.Og(_0x4cc7f4.x, _0x4cc7f4.y, !1)
                    }
                }
                return _0x31f1a2
            }
            ;
            var _0x603916 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
            _0x15aca6.prototype.mg = function(_0x39c19f) {
                var _0x23fe92 = (window.anApp = _0x1d2f59).q.Ug.Tg;
                var _0x4ea1da = _0x23fe92.getImageData(0x0, 0x0, 0x50, 0x50);
                var _0x2d4c66 = _0x603916[0x0];
                var _0x493f79 = 0x50 - _0x2d4c66;
                var _0x4347a7 = 0x0;
                for (var _0x459aad = 0x0; _0x459aad < 0x274; _0x459aad++) {
                    var _0x8f6fcd = _0x39c19f.mc(0x1 + _0x459aad);
                    for (var _0x4f21fa = 0x0; _0x4f21fa < 0x8; _0x4f21fa++) {
                        var _0x2a5adf = 0x0 != (_0x8f6fcd >> _0x4f21fa & 0x1);
                        var _0x215a68 = 0x4 * (_0x2d4c66 + 0x50 * _0x4347a7);
                        if (_0x2a5adf) {
                            _0x4ea1da.data[_0x215a68] = 0xff;
                            _0x4ea1da.data[_0x215a68 + 0x1] = 0xff;
                            _0x4ea1da.data[_0x215a68 + 0x2] = 0xff;
                            _0x4ea1da.data[_0x215a68 + 0x3] = 0xff
                        } else {
                            _0x4ea1da.data[_0x215a68 + 0x3] = 0x0
                        }
                        if (++_0x2d4c66 >= _0x493f79 && ++_0x4347a7 < 0x50) {
                            _0x2d4c66 = _0x603916[_0x4347a7];
                            _0x493f79 = 0x50 - _0x2d4c66
                        }
                    }
                }
                _0x23fe92.putImageData(_0x4ea1da, 0x0, 0x0);
                var _0x5b8807 = (window.anApp = _0x1d2f59).s.H.wb.tf.Sf;
                _0x5b8807.texture = (window.anApp = _0x1d2f59).q.Ug.Hc;
                _0x5b8807.texture.update()
            }
            ;
            _0x15aca6.prototype.og = function(_0x5a42ed, _0x4fb2ff) {
                var _0x2cf6b1 = _0x5a42ed.oc(_0x4fb2ff);
                _0x4fb2ff += 0x4;
                console.log("Wormy Error: " + _0x2cf6b1)
            }
            ;
            _0x15aca6.prototype.pg = function(_0x174b33, _0x539b58) {
                console.log("g.o");
                this.o.Rb()
            }
            ;
            _0x15aca6.prototype.ng = function(_0x416f97, _0x433419) {
                this.o.tb = _0x416f97.nc(_0x433419);
                _0x433419 += 0x2;
                this.o.O = _0x416f97.nc(_0x433419);
                _0x433419 += 0x2;
                var _0x3627cf = new _0x5db7c3();
                _0x3627cf.ag = [];
                var _0x5c43e3 = _0x416f97.mc(_0x433419++);
                for (var _0x27b426 = 0x0; _0x27b426 < _0x5c43e3; _0x27b426++) {
                    var _0x54c3b0 = _0x416f97.nc(_0x433419);
                    _0x433419 += 0x2;
                    var _0x2e5ffd = _0x416f97.pc(_0x433419);
                    _0x433419 += 0x4;
                    _0x3627cf.ag.push(_0x5db7c3.Vg(_0x54c3b0, _0x2e5ffd))
                }
                _0x3627cf.$f = [];
                if (this.o.fb.af === 0x10) {
                    var _0x51e3fe = _0x416f97.mc(_0x433419++);
                    for (var _0x12fde4 = 0x0; _0x12fde4 < _0x51e3fe; _0x12fde4++) {
                        var _0x5271d0 = _0x416f97.mc(_0x433419);
                        _0x433419 += 0x1;
                        var _0x5a0894 = _0x416f97.pc(_0x433419);
                        _0x433419 += 0x4;
                        _0x3627cf.$f.push(_0x5db7c3.Wg(_0x5271d0, _0x5a0894))
                    }
                }
                (window.anApp = _0x1d2f59).s.H.wb.vf.Te(_0x3627cf)
            }
            ;
            _0x15aca6.prototype.Gg = function(_0x2fcac4) {
                return _0x2fcac4 === this.o.fb.bf ? this.o.N : this.o.hb[_0x2fcac4]
            }
            ;
            _0x15aca6.prototype.Jg = function(_0x282be9, _0x19cb5a, _0x3eac9d) {
                return 0x2710 * ((0xffffff & (0xff & _0x3eac9d | _0x19cb5a << 0x8 & 0xff00 | _0x282be9 << 0x10 & 0xff0000)) / 0x800000 - 0x1)
            }
            ;
            _0x15aca6.prototype.Pg = function(_0x355aab) {
                return ((0xffff & _0x355aab) / 0x8000 - 0x1) * this.o.fb.ef()
            }
            ;
            _0x15aca6.prototype.Qg = function(_0x253266) {
                return ((_0x253266 >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef()
            }
            ;
            _0x15aca6.prototype.qg = function(_0xc2b414, _0x2a73d5) {
                var _0x452837 = _0xc2b414.mc(_0x2a73d5);
                if (0x0 == (0x80 & _0x452837)) {
                    return _0x452837
                }
                var _0x91f319 = _0xc2b414.mc(_0x2a73d5 + 0x1);
                if (0x0 == (0x80 & _0x91f319)) {
                    return _0x91f319 | _0x452837 << 0x7 & 0x3f80
                }
                var _0x65a208 = _0xc2b414.mc(_0x2a73d5 + 0x2);
                if (0x0 == (0x80 & _0x65a208)) {
                    return _0x65a208 | _0x91f319 << 0x7 & 0x3f80 | _0x452837 << 0xe & 0x1fc000
                }
                var _0x347acf = _0xc2b414.mc(_0x2a73d5 + 0x3);
                return 0x0 == (0x80 & _0x347acf) ? _0x347acf | _0x65a208 << 0x7 & 0x3f80 | _0x91f319 << 0xe & 0x1fc000 | _0x452837 << 0x15 & 0xfe00000 : undefined
            }
            ;
            _0x15aca6.prototype.rg = function(_0x4ab800) {
                return _0x4ab800 < 0x80 ? 0x1 : _0x4ab800 < 0x4000 ? 0x2 : _0x4ab800 < 0x200000 ? 0x3 : _0x4ab800 < 0x10000000 ? 0x4 : undefined
            }
            ;
            return _0x15aca6
        }();
        var _0x31f80f = function() {
            function _0x53f7a7(_0x330594) {
                this.Xg = _0x330594
            }
            _0x53f7a7.Yg = function() {
                return new _0x31f80f(null)
            }
            ;
            _0x53f7a7.Zg = function(_0x142266) {
                return new _0x31f80f(_0x142266)
            }
            ;
            _0x53f7a7.prototype.$g = function() {
                return this.Xg
            }
            ;
            _0x53f7a7.prototype._g = function() {
                return null != this.Xg
            }
            ;
            _0x53f7a7.prototype.ah = function(_0x2f7c75) {
                if (null != this.Xg) {
                    _0x2f7c75(this.Xg)
                }
            }
            ;
            return _0x53f7a7
        }();
        var _0xe23068 = function() {
            function _0xb7cb34(_0x31f6bb, _0x4375a7) {
                this.Mb = _0x31f6bb;
                this.bh = _0x31f6bb.dg >= 0x50;
                this.Ob = 0x0;
                this.Pb = 0x0;
                this.ch = 0x0;
                this.dh = 0x0;
                this.Sg = this.bh ? 0x1 : _0x31f6bb.Ng;
                this.Rg = 0x1;
                this.Nb = !1;
                this.eh = 0x0;
                this.fh = 0x0;
                this.Jb = 0x1;
                this.Ae = 0x2 * Math.PI * Math.random();
                this.gh = new _0x34f2df();
                this.gh.hh((window.anApp = _0x1d2f59).o.fb.af, this.Mb.cg === _0x590495.TEAM_DEFAULT ? null : (window.anApp = _0x1d2f59).p.Dc().ed(this.Mb.cg), (window.anApp = _0x1d2f59).p.Dc().kd(this.Mb.dg));
                _0x4375a7.Lf(_0x31f6bb.Lb, this.gh)
            }
            _0xb7cb34.prototype.Kb = function() {
                this.gh.Of.Pf.ih();
                this.gh.Of.Nf.ih()
            }
            ;
            _0xb7cb34.prototype.Og = function(_0x2d0f45, _0x14a09b, _0x4a15fd) {
                this.Ob = _0x2d0f45;
                this.Pb = _0x14a09b;
                if (_0x4a15fd) {
                    this.ch = _0x2d0f45;
                    this.dh = _0x14a09b
                }
            }
            ;
            _0xb7cb34.prototype.Fb = function(_0x1d2714, _0x2cb519) {
                var _0x4e25e2 = Math.min(0.5, 0x1 * this.Sg);
                var _0x4df09d = Math.min(2.5, 1.5 * this.Sg);
                this.eh = _0x4e25e2 > this.eh ? Math.min(_0x4e25e2, this.eh + _0x2cb519 * 0.0025) : Math.max(_0x4e25e2, this.eh - _0x2cb519 * 0.0025);
                this.fh = _0x4df09d > this.fh ? Math.min(_0x4df09d, this.fh + _0x2cb519 * 0.0025) : Math.max(_0x4df09d, this.fh - _0x2cb519 * 0.0025);
                this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x2cb519 * 0.0025) : Math.max(this.Rg, this.Jb - _0x2cb519 * 0.0025)
            }
            ;
            _0xb7cb34.prototype.Gb = function(_0x3701f7, _0x472bdb, _0x5d63fd) {
                this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x472bdb * 0.0025) : Math.max(this.Ob, this.ch - _0x472bdb * 0.0025);
                this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x472bdb * 0.0025) : Math.max(this.Pb, this.dh - _0x472bdb * 0.0025);
                this.gh.Te(this, _0x3701f7, _0x472bdb, _0x5d63fd)
            }
            ;
            _0xb7cb34.Config = function() {
                function _0x5b7d7b() {
                    this.Lb = 0x0;
                    this.cg = _0x590495.TEAM_DEFAULT;
                    this.Ng = 0x0;
                    this.dg = 0x0
                }
                return _0x5b7d7b
            }();
            return _0xb7cb34
        }();
        var _0x34f2df = function() {
            function _0x237400() {
                this.Of = new _0x27d692(new _0x24e471(),new _0x24e471());
                this.Of.Pf.jh.blendMode = _0x3092b0.ic.jc;
                this.Of.Pf.jh.zIndex = 0x64;
                this.Of.Nf.jh.zIndex = 0x1f4
            }
            _0x237400.prototype.hh = function(_0x2243b4, _0x55f775, _0x3fe30d) {
                var _0x5f0377 = _0x3fe30d.Zc;
                if (null != _0x5f0377) {
                    this.Of.Nf.kh(_0x5f0377)
                }
                var _0x32fbbe = _0x2243b4 == 0x10 && null != _0x55f775 ? _0x55f775.cd.$c : _0x3fe30d.$c;
                if (null != _0x32fbbe) {
                    this.Of.Pf.kh(_0x32fbbe)
                }
            }
            ;
            _0x237400.prototype.Te = function(_0x5eabc8, _0x390140, _0x413f99, _0x22cb01) {
                if (!_0x22cb01(_0x5eabc8.ch, _0x5eabc8.dh)) {
                    return void this.Of.lh()
                }
                var _0xcd1ae5 = _0x5eabc8.fh * (0x1 + 0.3 * Math.cos(_0x5eabc8.Ae + _0x390140 / 0xc8));
                if (_0x5eabc8.bh) {
                    this.Of.mh(_0x5eabc8.ch, _0x5eabc8.dh, theoKzObjects.PortionSize * _0x5eabc8.eh, 0x1 * _0x5eabc8.Jb, theoKzObjects.PortionAura * _0xcd1ae5, 0.8 * _0x5eabc8.Jb)
                } else {
                    this.Of.mh(_0x5eabc8.ch, _0x5eabc8.dh, theoKzObjects.FoodSize * _0x5eabc8.eh, 0x1 * _0x5eabc8.Jb, theoKzObjects.FoodShadow * _0xcd1ae5, 0.3 * _0x5eabc8.Jb)
                }
            }
            ;
            var _0x27d692 = function() {
                function _0x342cc5(_0x36d009, _0x4d692a) {
                    this.Nf = _0x36d009;
                    this.Pf = _0x4d692a
                }
                _0x342cc5.prototype.mh = function(_0x31eb7a, _0x26b85e, _0x150498, _0x49b79b, _0x3ce68d, _0x1bb3ef) {
                    this.Nf.Mg(!0);
                    this.Nf.nh(_0x31eb7a, _0x26b85e);
                    this.Nf.oh(_0x150498);
                    this.Nf.qh(_0x49b79b);
                    this.Pf.Mg(!0);
                    this.Pf.nh(_0x31eb7a, _0x26b85e);
                    this.Pf.oh(_0x3ce68d);
                    this.Pf.qh(_0x1bb3ef)
                }
                ;
                _0x342cc5.prototype.lh = function() {
                    this.Nf.Mg(!1);
                    this.Pf.Mg(!1)
                }
                ;
                return _0x342cc5
            }();
            return _0x237400
        }();
        var _0xf5e704 = function() {
            function _0x422b95() {
                this.rh = 0x0;
                this.sh = 0x0;
                this.th = 0x0;
                this.uh = 0x0;
                this.vh = 0x0;
                this.wh = []
            }
            function _0x105bb7(_0x3c02d7, _0x4ea882) {
                if (!(window.anApp = _0x1d2f59).p.W()) {
                    return null
                }
                var _0x500db0 = (window.anApp = _0x1d2f59).p.Ac();
                if (_0x4ea882 === _0x2b3509.ia) {
                    var _0x314b8a = _0x4947b5(_0x500db0.skinArrayDict, _0x3c02d7);
                    return _0x314b8a < 0x0 ? null : _0x500db0.skinArrayDict[_0x314b8a]
                }
                switch (_0x4ea882) {
                case _0x2b3509.ja:
                    return _0x500db0.eyesDict[_0x3c02d7];
                case _0x2b3509.ka:
                    return _0x500db0.mouthDict[_0x3c02d7];
                case _0x2b3509.la:
                    return _0x500db0.glassesDict[_0x3c02d7];
                case _0x2b3509.ma:
                    return _0x500db0.hatDict[_0x3c02d7]
                }
                return null
            }
            function _0x4947b5(_0x27bf64, _0x495bc3) {
                for (var _0x3e00e9 = 0x0; _0x3e00e9 < _0x27bf64.length; _0x3e00e9++) {
                    if (_0x27bf64[_0x3e00e9].id == _0x495bc3) {
                        return _0x3e00e9
                    }
                }
                return -0x1
            }
            _0x422b95.prototype.a = function() {}
            ;
            _0x422b95.prototype.ha = function(_0x38743e) {
                theoKzObjects.PropertyManager = this;
                localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
                switch (_0x38743e) {
                case _0x2b3509.ia:
                    return this.rh;
                case _0x2b3509.ja:
                    return this.sh;
                case _0x2b3509.ka:
                    return this.th;
                case _0x2b3509.la:
                    return this.uh;
                case _0x2b3509.ma:
                    return this.vh
                }
                return 0x0
            }
            ;
            _0x422b95.prototype.xh = function(_0x1ee0f6) {
                this.wh.push(_0x1ee0f6);
                this.yh()
            }
            ;
            _0x422b95.prototype.Ia = function() {
                if (!(window.anApp = _0x1d2f59).p.W()) {
                    return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)]
                }
                var _0x4406ee = (window.anApp = _0x1d2f59).p.Ac();
                var _0x4bc5e2 = [];
                for (var _0x2ec6fd = 0x0; _0x2ec6fd < _0x4406ee.skinArrayDict.length; _0x2ec6fd++) {
                    var _0x5933ee = _0x4406ee.skinArrayDict[_0x2ec6fd];
                    if (this.Ja(_0x5933ee.id, _0x2b3509.ia)) {
                        _0x4bc5e2.push(_0x5933ee)
                    }
                }
                return 0x0 === _0x4bc5e2.length ? 0x0 : _0x4bc5e2[parseInt(_0x4bc5e2.length * Math.random())].id
            }
            ;
            _0x422b95.prototype.zh = function() {
                if ((window.anApp = _0x1d2f59).p.W) {
                    var _0xf9d52b = (window.anApp = _0x1d2f59).p.Ac().skinArrayDict;
                    var _0x1633e2 = _0x4947b5(_0xf9d52b, this.rh);
                    if (!(_0x1633e2 < 0x0)) {
                        for (var _0x36c81a = _0x1633e2 + 0x1; _0x36c81a < _0xf9d52b.length; _0x36c81a++) {
                            if (this.Ja(_0xf9d52b[_0x36c81a].id, _0x2b3509.ia)) {
                                this.rh = _0xf9d52b[_0x36c81a].id;
                                return void this.yh()
                            }
                        }
                        for (var _0x5b3d7a = 0x0; _0x5b3d7a < _0x1633e2; _0x5b3d7a++) {
                            if (this.Ja(_0xf9d52b[_0x5b3d7a].id, _0x2b3509.ia)) {
                                this.rh = _0xf9d52b[_0x5b3d7a].id;
                                return void this.yh()
                            }
                        }
                    }
                }
            }
            ;
            _0x422b95.prototype.Ah = function() {
                if ((window.anApp = _0x1d2f59).p.W) {
                    var _0x474fc2 = (window.anApp = _0x1d2f59).p.Ac().skinArrayDict;
                    var _0x103183 = _0x4947b5(_0x474fc2, this.rh);
                    if (!(_0x103183 < 0x0)) {
                        for (var _0x5ba5f2 = _0x103183 - 0x1; _0x5ba5f2 >= 0x0; _0x5ba5f2--) {
                            if (this.Ja(_0x474fc2[_0x5ba5f2].id, _0x2b3509.ia)) {
                                this.rh = _0x474fc2[_0x5ba5f2].id;
                                return void this.yh()
                            }
                        }
                        for (var _0x143347 = _0x474fc2.length - 0x1; _0x143347 > _0x103183; _0x143347--) {
                            if (this.Ja(_0x474fc2[_0x143347].id, _0x2b3509.ia)) {
                                this.rh = _0x474fc2[_0x143347].id;
                                return void this.yh()
                            }
                        }
                    }
                }
            }
            ;
            _0x422b95.prototype.Bh = function(_0x831b92, _0x27e630) {
                if (!(window.anApp = _0x1d2f59).p.W() || this.Ja(_0x831b92, _0x27e630)) {
                    switch (_0x27e630) {
                    case _0x2b3509.ia:
                        return void (this.rh != _0x831b92 && (this.rh = _0x831b92,
                        this.yh()));
                    case _0x2b3509.ja:
                        return void (this.sh != _0x831b92 && (this.sh = _0x831b92,
                        this.yh()));
                    case _0x2b3509.ka:
                        return void (this.th != _0x831b92 && (this.th = _0x831b92,
                        this.yh()));
                    case _0x2b3509.la:
                        return void (this.uh != _0x831b92 && (this.uh = _0x831b92,
                        this.yh()));
                    case _0x2b3509.ma:
                        return void (this.vh != _0x831b92 && (this.vh = _0x831b92,
                        this.yh()))
                    }
                }
            }
            ;
            _0x422b95.prototype.Ja = function(_0x1850d9, _0x5941be) {
                var _0x103410 = _0x105bb7(_0x1850d9, _0x5941be);
                return null != _0x103410 && ((window.anApp = _0x1d2f59).u.P() ? 0x0 == _0x103410.price && !_0x103410.nonbuyable || (window.anApp = _0x1d2f59).u.Ch(_0x1850d9, _0x5941be) : _0x103410.guest)
            }
            ;
            _0x422b95.prototype.yh = function() {
                for (var _0x1bbd51 = 0x0; _0x1bbd51 < this.wh.length; _0x1bbd51++) {
                    this.wh[_0x1bbd51]()
                }
            }
            ;
            return _0x422b95
        }();
        var _0x2b3509 = function() {
            function _0x1002ee() {}
            _0x1002ee.ia = "SKIN";
            _0x1002ee.ja = "EYES";
            _0x1002ee.ka = "MOUTH";
            _0x1002ee.la = "GLASSES";
            _0x1002ee.ma = "HAT";
            return _0x1002ee
        }();
        var _0x4197f6 = function() {
            function _0xbf7bb2(_0x5767b9, _0x41cb9f, _0x1ed78f, _0x3e1e80, _0x331e70, _0x25a50b, _0x812095, _0x1b687a, _0x2e29f8) {
                this.Hc = new _0x3092b0._b(_0x5767b9,new _0x3092b0.dc(_0x41cb9f,_0x1ed78f,_0x3e1e80,_0x331e70));
                this.Dh = _0x41cb9f;
                this.Eh = _0x1ed78f;
                this.Fh = _0x3e1e80;
                this.Gh = _0x331e70;
                this.Hh = _0x25a50b || (_0x1b687a || _0x3e1e80) / 0x2;
                this.Ih = _0x812095 || (_0x2e29f8 || _0x331e70) / 0x2;
                this.Jh = _0x1b687a || _0x3e1e80;
                this.Kh = _0x2e29f8 || _0x331e70;
                this.Lh = 0.5 - (this.Hh - 0.5 * this.Jh) / this.Fh;
                this.Mh = 0.5 - (this.Ih - 0.5 * this.Kh) / this.Gh;
                this.Nh = this.Fh / this.Jh;
                this.Oh = this.Gh / this.Kh
            }
            return _0xbf7bb2
        }();
        var _0x668d12 = function() {
            function _0x2b3a6d() {
                this.fn_o = _0x3f322c;
                this.Fe = new _0x3092b0._b(_0x3092b0.$b.from("/images/bg-obstacle.png"));
                var _0x1858d3 = _0x3092b0.$b.from("/images/confetti-xmas2022.png");
                this.Ge = [new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80)), new _0x3092b0._b(_0x1858d3,new _0x3092b0.dc(0x0,0x0,0x80,0x80))];
                this.Cf = new _0x3092b0._b(_0x3f322c());
                this.Df = new _0x3092b0._b(function() {
                    var _0xbffc1 = _0x3092b0.$b.from("/images/bg-pattern-pow2-TEAM2.png");
                    _0xbffc1.wrapMode = _0x3092b0.kc.lc;
                    return _0xbffc1
                }());
                this.Af = new _0x3092b0._b(_0x3092b0.$b.from("/images/lens.png"));
                var _0x2c6a0e = _0x3092b0.$b.from("/images/wear-ability.png");
                var _0x57c9ed = _0x3092b0.$b.from("https://i.imgur.com/EDt862t.png");
                var _0x378ae3 = _0x3092b0.$b.from("https://i.imgur.com/U5sTlhC.png");
                var _0x1817b8 = _0x3092b0.$b.from("https://i.imgur.com/ub4ed3R.png");
                this.Id_mobileguia = new _0x4197f6(_0x1817b8,0x0,0x0,0x57,0x4a,0x15e,0x3f,0x80,0x80);
                this.emoji_headshot = new _0x4197f6(_0x57c9ed,0x0,0x0,0x100,0x100,170.5,-163.5,0x80,0x80);
                this.emoji_kill = new _0x4197f6(_0x378ae3,0x0,0x0,0x100,0x100,170.5,-163.5,0x80,0x80);
                this.Ph = new _0x4197f6(_0x2c6a0e,0x9e,0x56,0x43,0x7c,0x94,63.5,0x80,0x80);
                this.Qh = new _0x4197f6(_0x2c6a0e,0x9e,0x4,0x57,0x4a,0xcb,63.5,0x80,0x80);
                this.Rh = new _0x4197f6(_0x2c6a0e,0x4,0x4,0x92,0x92,63.5,63.5,0x80,0x80);
                this.Ug = function() {
                    var _0x536568 = window.document.createElement('canvas');
                    _0x536568.width = 0x50;
                    _0x536568.height = 0x50;
                    return {
                        'te': _0x536568,
                        'Tg': _0x536568.getContext('2d'),
                        'Hc': new _0x3092b0._b(_0x3092b0.$b.from(_0x536568))
                    }
                }();
                this.Bd = {};
                this.yd = {};
                this.Sh = [];
                this.Th = null
            }
            var _0x3f322c = function(_0x3f0913) {
                var _0x3a8cbc = _0x3092b0.$b.from(_0x3f0913 || "https://i.imgur.com/8ubx4RA.png");
                _0x3a8cbc.wrapMode = _0x3092b0.kc.lc;
                return _0x3a8cbc
            };
            _0x2b3a6d.prototype.a = function(_0x3327fa) {
                function _0x206049() {
                    if (0x0 == --_0x4b7ed8) {
                        _0x3327fa()
                    }
                }
                var _0x4b7ed8 = 0x4;
                this.Bd = {};
                _0x206049();
                this.yd = {};
                _0x206049();
                this.Sh = [];
                _0x206049();
                this.Th = null;
                _0x206049()
            }
            ;
            return _0x2b3a6d
        }();
        var _0x5dc209 = function() {
            function _0x66c194() {
                this.H = new _0x4386b0();
                this.F = new _0x21d0d2();
                this.Uh = new _0x260944();
                this.Vh = new _0xc0c1bb();
                this.Wh = new _0x5a7709();
                this.Xh = new _0x4b43c4();
                this.Yh = new _0x131079();
                this.Zh = new _0x4017f6();
                this.xa = new _0x31f2ed();
                this.$h = new _0x3bd806();
                this._h = new _0x3fac5f();
                this.ai = new _0x3c7bd4();
                this.aa = new _0x374e06();
                this.ua = new _0xd90c58();
                this.pa = new _0x387d1e();
                this.bi = [];
                this.ci = null
            }
            function _0x5d16fc(_0x349a3d, _0x322592) {
                if (0x0 != _0x322592) {
                    var _0x584b96 = _0x349a3d[_0x322592];
                    _0x156f47(_0x349a3d, 0x0, 0x1, _0x322592);
                    _0x349a3d[0x0] = _0x584b96
                }
            }
            function _0x2bc9f4(_0x1697bc, _0x8bce76) {
                if (_0x8bce76 != _0x1697bc.length + 0x1) {
                    var _0x6af19a = _0x1697bc[_0x8bce76];
                    _0x156f47(_0x1697bc, _0x8bce76 + 0x1, _0x8bce76, _0x1697bc.length - _0x8bce76 - 0x1);
                    _0x1697bc[_0x1697bc.length - 0x1] = _0x6af19a
                }
            }
            function _0x26ca69(_0x44873f, _0x3c71b3) {
                for (var _0x3cfa2e = 0x0; _0x3cfa2e < _0x44873f.length; _0x3cfa2e++) {
                    if (_0x44873f[_0x3cfa2e] == _0x3c71b3) {
                        return _0x3cfa2e
                    }
                }
                return -0x1
            }
            _0x66c194.prototype.a = function() {
                this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
                for (var _0x2bfba6 = 0x0; _0x2bfba6 < this.bi.length; _0x2bfba6++) {
                    this.bi[_0x2bfba6].a()
                }
                this.ci = new _0xda1c24(_0x3c42e9.di)
            }
            ;
            _0x66c194.prototype.Qa = function(_0x1722c6, _0x3157a5) {
                for (var _0x3efa25 = this.bi.length - 0x1; _0x3efa25 >= 0x0; _0x3efa25--) {
                    this.bi[_0x3efa25].Pa(_0x1722c6, _0x3157a5)
                }
                if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && null != this.ci) {
                    this.ci.Pa(_0x1722c6, _0x3157a5)
                }
            }
            ;
            _0x66c194.prototype.Ra = function() {
                for (var _0x5ee0ed = this.bi.length - 0x1; _0x5ee0ed >= 0x0; _0x5ee0ed--) {
                    this.bi[_0x5ee0ed].Ra()
                }
                if (null != this.ci) {
                    this.ci.Ra()
                }
            }
            ;
            _0x66c194.prototype.I = function(_0x199472) {
                var _0x1b6fe2 = _0x26ca69(this.bi, _0x199472);
                if (!(_0x1b6fe2 < 0x0)) {
                    this.bi[0x0].ei();
                    _0x5d16fc(this.bi, _0x1b6fe2);
                    this.fi()
                }
            }
            ;
            _0x66c194.prototype.gi = function() {
                this.bi[0x0].ei();
                do {
                    _0x2bc9f4(this.bi, 0x0)
                } while (this.bi[0x0].rc != 0x1);
                this.fi()
            }
            ;
            _0x66c194.prototype.fi = function() {
                var _0x159410 = this.bi[0x0];
                _0x159410.ii();
                _0x159410.ji();
                this.ki()
            }
            ;
            _0x66c194.prototype.li = function() {
                return 0x0 != this.bi.length && this.bi[0x0].rc == 0x1 && this.aa.mi()
            }
            ;
            _0x66c194.prototype.ki = function() {
                if (this.li()) {
                    this.I(this.aa)
                }
            }
            ;
            return _0x66c194
        }();
        var _0x5db7c3 = function() {
            function _0x5ed49c() {
                this.ag = [];
                this.$f = []
            }
            _0x5ed49c.Vg = function(_0x3efbd5, _0x1f900a) {
                return {
                    'bg': _0x3efbd5,
                    'M': _0x1f900a
                }
            }
            ;
            _0x5ed49c.Wg = function(_0x3e48b9, _0x14ac37) {
                return {
                    '_f': _0x3e48b9,
                    'M': _0x14ac37
                }
            }
            ;
            return _0x5ed49c
        }();
        var _0x3556f1 = function() {
            function _0x37f940() {
                this.ni = [];
                this.oi = [];
                this.pi = [];
                this.qi = !1;
                this.ri = "guest";
                this.si = {};
                this.ti = null
            }
            _0x37f940.prototype.a = function() {
                this.vi()
            }
            ;
            _0x37f940.prototype.X = function() {
                return this.qi ? this.si.userId : ''
            }
            ;
            _0x37f940.prototype.wi = function() {
                return this.qi ? this.si.username : ''
            }
            ;
            _0x37f940.prototype.ga = function() {
                return this.qi ? this.si.nickname : ''
            }
            ;
            _0x37f940.prototype.xi = function() {
                return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png"
            }
            ;
            _0x37f940.prototype.yi = function() {
                return this.qi && this.si.isBuyer
            }
            ;
            _0x37f940.prototype.Z = function() {
                return this.qi && this.si.isConsentGiven
            }
            ;
            _0x37f940.prototype.zi = function() {
                return this.qi ? this.si.coins : 0x0
            }
            ;
            _0x37f940.prototype.Ai = function() {
                return this.qi ? this.si.level : 0x1
            }
            ;
            _0x37f940.prototype.Bi = function() {
                return this.qi ? this.si.expOnLevel : 0x0
            }
            ;
            _0x37f940.prototype.Ci = function() {
                return this.qi ? this.si.expToNext : 0x32
            }
            ;
            _0x37f940.prototype.Di = function() {
                return this.qi ? this.si.skinId : 0x0
            }
            ;
            _0x37f940.prototype.Ei = function() {
                return this.qi ? this.si.eyesId : 0x0
            }
            ;
            _0x37f940.prototype.Fi = function() {
                return this.qi ? this.si.mouthId : 0x0
            }
            ;
            _0x37f940.prototype.Gi = function() {
                return this.qi ? this.si.glassesId : 0x0
            }
            ;
            _0x37f940.prototype.Hi = function() {
                return this.qi ? this.si.hatId : 0x0
            }
            ;
            _0x37f940.prototype.Ii = function() {
                return this.qi ? this.si.highScore : 0x0
            }
            ;
            _0x37f940.prototype.Ji = function() {
                return this.qi ? this.si.bestSurvivalTimeSec : 0x0
            }
            ;
            _0x37f940.prototype.Ki = function() {
                return this.qi ? this.si.kills : 0x0
            }
            ;
            _0x37f940.prototype.Li = function() {
                return this.qi ? this.si.headShots : 0x0
            }
            ;
            _0x37f940.prototype.Mi = function() {
                return this.qi ? this.si.sessionsPlayed : 0x0
            }
            ;
            _0x37f940.prototype.Ni = function() {
                return this.qi ? this.si.totalPlayTimeSec : 0x0
            }
            ;
            _0x37f940.prototype.Oi = function() {
                return this.qi ? this.si.regDate : {}
            }
            ;
            _0x37f940.prototype.V = function(_0x2c2e21) {
                this.ni.push(_0x2c2e21);
                _0x2c2e21()
            }
            ;
            _0x37f940.prototype.Pi = function(_0x2298ed) {
                this.oi.push(_0x2298ed);
                _0x2298ed()
            }
            ;
            _0x37f940.prototype.Qi = function(_0x354fa7) {
                this.pi.push(_0x354fa7)
            }
            ;
            _0x37f940.prototype.Ch = function(_0x4d76b7, _0x2b80cd) {
                var _0x2b756f = this.si.propertyList.concat(theoKzObjects.pL || []);
                if (!_0x2b756f) {
                    return !1
                }
                for (var _0x21e10b = 0x0; _0x21e10b < _0x2b756f.length; _0x21e10b++) {
                    var _0x456fb8 = _0x2b756f[_0x21e10b];
                    if (_0x456fb8.id == _0x4d76b7 && _0x456fb8.type === _0x2b80cd) {
                        return !0
                    }
                }
                return !1
            }
            ;
            _0x37f940.prototype.P = function() {
                return this.qi
            }
            ;
            _0x37f940.prototype.ea = function() {
                return this.ri
            }
            ;
            _0x37f940.prototype.Q = function(_0x5e6128) {
                var _0x416355 = this;
                if (this.qi) {
                    this.Ri(function(_0xf19ead) {
                        if (_0xf19ead) {
                            var _0x465aec = _0x416355.zi();
                            var _0x47f259 = _0x416355.Ai();
                            _0x416355.si = _0xf19ead;
                            _0x50102e(_0x416355.si);
                            _0x416355.Si();
                            var _0x369f80 = _0x416355.zi();
                            var _0xe9c5cf = _0x416355.Ai();
                            if (_0xe9c5cf > 0x1 && _0xe9c5cf != _0x47f259) {
                                (window.anApp = _0x1d2f59).s.aa.Ti(new _0x482123(_0xe9c5cf))
                            }
                            var _0x5964d5 = _0x369f80 - _0x465aec;
                            if (_0x5964d5 >= 0x14) {
                                (window.anApp = _0x1d2f59).s.aa.Ti(new _0xaae942(_0x5964d5))
                            }
                        }
                        if (_0x5e6128) {
                            _0x5e6128()
                        }
                    })
                }
            }
            ;
            _0x37f940.prototype.Ri = function(_0x27c206) {
                $.get(_0x14b47a + "/pub/wuid/" + this.ri + "/getUserData", function(_0x448ed6) {
                    _0x27c206(_0x448ed6.user_data)
                })
            }
            ;
            _0x37f940.prototype.Ui = function(_0x5d7324, _0x2214e4, _0xe9de59) {
                var _0x3a072c = this;
                $.get(_0x14b47a + "/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x5d7324 + "&type=" + _0x2214e4, function(_0x42bfb8) {
                    if (0x4b0 == _0x42bfb8.code) {
                        _0x3a072c.Q(_0xe9de59)
                    } else {
                        _0xe9de59()
                    }
                }).fail(function() {
                    _0xe9de59()
                })
            }
            ;
            _0x37f940.prototype.Vi = function() {
                var _0x58989d = this;
                this.Wi();
                if ("undefined" == typeof FB) {
                    return void this.Xi()
                }
                FB.getLoginStatus(function(_0x398430) {
                    if ("connected" === _0x398430.status) {
                        return void (_0x398430.authResponse && _0x398430.authResponse.accessToken ? _0x58989d.Yi("facebook", 'fb_' + _0x398430.authResponse.accessToken) : _0x58989d.Xi())
                    }
                    FB.login(function(_0x29d433) {
                        if ("connected" === _0x29d433.status && _0x29d433.authResponse && _0x29d433.authResponse.accessToken) {
                            _0x58989d.Yi('facebook', "fb_" + _0x29d433.authResponse.accessToken)
                        } else {
                            _0x58989d.Xi()
                        }
                    })
                })
            }
            ;
            _0x37f940.prototype.Zi = function() {
                var _0x1d40d3 = this;
                this.Wi();
                if (undefined === GoogleAuth) {
                    return void this.Xi()
                }
                console.log("gsi:l");
                GoogleAuth.then(function() {
                    console.log("gsi:then");
                    if (GoogleAuth.isSignedIn.get()) {
                        console.log("gsi:sil");
                        var _0x4cc0f1 = GoogleAuth.currentUser.get();
                        return void _0x1d40d3.Yi("google", "gg_" + _0x4cc0f1.getAuthResponse().id_token)
                    }
                    GoogleAuth.signIn().then(function(_0x5eb533) {
                        return undefined !== _0x5eb533.error ? (console.log("gsi:e: " + _0x5eb533.error),
                        void _0x1d40d3.Xi()) : _0x5eb533.isSignedIn() ? (console.log('gsi:s'),
                        void _0x1d40d3.Yi("google", "gg_" + _0x5eb533.getAuthResponse().id_token)) : (console.log("gsi:c"),
                        void _0x1d40d3.Xi())
                    })
                })
            }
            ;
            _0x37f940.prototype.Wi = function() {
                console.log("iSI: " + this.qi);
                var _0xbd3dbe = this.ri;
                var _0x5f1fa9 = this.ti;
                this.qi = !1;
                this.ri = "guest";
                this.si = {};
                this.ti = null;
                _0x2240ce(_0x409a8c.Oe, '', 0x3c);
                switch (_0x5f1fa9) {
                case 'facebook':
                    this.$i();
                    break;
                case "google":
                    this._i()
                }
                if (_0xbd3dbe !== this.ri) {
                    this.aj()
                } else {
                    this.Si()
                }
            }
            ;
            _0x37f940.prototype.bj = function() {
                console.log('dA');
                if (this.qi) {
                    $.get(_0x14b47a + "/pub/wuid/" + this.ri + "/deleteAccount", function(_0xf0cc05) {
                        if (0x4b0 === _0xf0cc05.code) {
                            console.log("dA: OK")
                        } else {
                            console.log("dA: NO")
                        }
                    }).fail(function() {
                        console.log("dA: FAIL")
                    })
                }
            }
            ;
            _0x37f940.prototype.vi = function() {
                console.log('rs');
                var _0x538f56 = _0x2294f9(_0x409a8c.Oe);
                var _0x26b63c = this;
                if ("facebook" == _0x538f56) {
                    console.log("rs:fb");
                    (function _0x392e5c() {
                        if ("undefined" != typeof FB) {
                            _0x26b63c.Vi()
                        } else {
                            setTimeout(_0x392e5c, 0x64)
                        }
                    }
                    )()
                } else if ('google' == _0x538f56) {
                    console.log("rs:gg");
                    (function _0x4a531c() {
                        if (undefined !== GoogleAuth) {
                            _0x26b63c.Zi()
                        } else {
                            setTimeout(_0x4a531c, 0x64)
                        }
                    }
                    )()
                } else {
                    console.log('rs:lo');
                    this.Wi()
                }
            }
            ;
            _0x37f940.prototype.aj = function() {
                var _0x401b73 = 0x0;
                for (; _0x401b73 < this.ni.length; _0x401b73++) {
                    this.ni[_0x401b73]()
                }
                this.Si()
            }
            ;
            _0x37f940.prototype.Si = function() {
                var _0x146ca8 = 0x0;
                for (; _0x146ca8 < this.oi.length; _0x146ca8++) {
                    this.oi[_0x146ca8]()
                }
                var _0x579030 = this.pi;
                this.pi = [];
                var _0x1cf8f8 = 0x0;
                for (; _0x1cf8f8 < _0x579030.length; _0x1cf8f8++) {
                    _0x579030[_0x1cf8f8]()
                }
            }
            ;
            _0x37f940.prototype.Yi = function(_0x4480ff, _0x1b08fa) {
                var _0x1321ab = this;
                var _0x22776a = 0x0;
                var _0x12d9cd = localStorage.getItem("token__gg");
                if (_0x12d9cd) {
                    console.log("Using the stored token:", _0x12d9cd);
                    $.get(_0x14b47a + '/pub/wuid/' + _0x12d9cd + '/login', function(_0x50f21b) {
                        if (_0x50f21b && _0x50f21b.code === 0x5cd && _0x50f21b.error === "expired_token") {
                            _0x22776a++;
                            console.log("auto login attempt:", _0x22776a);
                            $("#login-view").html("<h2>Auto Login Google Wormate Friends Connect : " + _0x22776a + "</h2>");
                            _0xd7c37d()
                        } else {
                            _0x5852ca(_0x50f21b)
                        }
                    }).fail(function() {
                        _0xd7c37d()
                    })
                } else {
                    _0xd7c37d()
                }
                function _0xd7c37d() {
                    console.log("Fetching a new token...");
                    $.get(_0x14b47a + "/pub/wuid/" + _0x1b08fa + '/login', function(_0xe234ce) {
                        if (_0xe234ce && _0xe234ce.code === 0x5cd && _0xe234ce.error === "expired_token") {
                            _0x22776a++;
                            console.log("auto login attempt:", _0x22776a);
                            $('#login-view').html("<h2>Auto Login Google Wormate Friends Conncet : " + _0x22776a + "</h2>");
                            _0xd7c37d()
                        } else {
                            _0x5852ca(_0xe234ce)
                        }
                    }).fail(function() {
                        _0x1321ab.Xi()
                    })
                }
                function _0x5852ca(_0x95155e) {
                    if (_0x95155e && _0x95155e.user_data) {
                        _0x50102e(_0x95155e.user_data);
                        var _0x490cac = this.ri;
                        _0x1321ab.qi = !0;
                        _0x1321ab.ri = _0x1b08fa;
                        _0x1321ab.si = _0x95155e.user_data;
                        theoKzObjects.FB_UserID = _0x95155e.user_data.userId;
                        _0x1321ab.ti = _0x4480ff;
                        _0x2240ce(_0x409a8c.Oe, _0x1321ab.ti, 0x3c);
                        _0x31fcb4();
                        for (var _0x1d5b24 = 0x0; _0x1d5b24 < clientes.clientesActivos.length; _0x1d5b24++) {
                            var _0x49aa58 = clientes.clientesActivos[_0x1d5b24].cliente_NOMBRE;
                            var _0x1497ca = clientes.clientesActivos[_0x1d5b24].cliente_ID;
                            var _0x6984ce = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin;
                            var _0x12b9eb = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin1;
                            var _0x510fa9 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin2;
                            var _0x3095eb = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin3;
                            var _0x3aef1f = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin4;
                            var _0x118875 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin5;
                            var _0x25420a = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin6;
                            var _0x1bb98f = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin7;
                            var _0x50a086 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin8;
                            var _0xb4645f = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin9;
                            var _0x1dd74b = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin10;
                            var _0x4990e8 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin11;
                            var _0x502a16 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin12;
                            var _0x17a882 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin13;
                            var _0x2dfd18 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin14;
                            var _0x4733b7 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin15;
                            var _0x596192 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin16;
                            var _0x4bd37f = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin17;
                            var _0x953e1c = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin18;
                            var _0xa1ddbc = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin19;
                            var _0x5ce058 = clientes.clientesActivos[_0x1d5b24].Client_VisibleSkin20;
                            var _0x572c78 = clientes.clientesActivos[_0x1d5b24].Client_KeyAccecs;
                            var _0x3b063e = clientes.clientesActivos[_0x1d5b24].cliente_DateExpired
                        }
                        theoKzObjects.loading = !1;
                        if (_0x490cac !== _0x1b08fa) {
                            _0x1321ab.aj()
                        } else {
                            _0x1321ab.Si()
                        }
                        localStorage.setItem('token__gg', _0x1b08fa)
                    } else {
                        _0x1321ab.Xi()
                    }
                }
            }
            ;
            _0x37f940.prototype.Xi = function() {
                this.Wi()
            }
            ;
            _0x37f940.prototype.$i = function() {
                console.log("lo:fb");
                FB.logout(function() {})
            }
            ;
            _0x37f940.prototype._i = function() {
                console.log('lo:gg');
                GoogleAuth.signOut()
            }
            ;
            return _0x37f940
        }();
        var _0x389d34 = function() {
            function _0x281f29() {
                this.cj = {};
                this.cj[_0x5f05ab] = [0x1, 0.5, 0.25, 0.5];
                this.cj[_0x2886ef] = _0x3092b0._b.WHITE;
                this.cj[_0x28deb0] = [0x0, 0x0];
                this.cj[_0x2d5be3] = [0x0, 0x0];
                var _0x3b7251 = _0x3092b0.cc.from(_0x3f9962, _0x1bb77e, this.cj);
                this.zf = new _0x3092b0.hc(_0x5d4373,_0x3b7251)
            }
            var _0xed8d6e = 'a1_' + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x129a79 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x2fd85f = atob("dHJhbnNsYXRpb25NYXRyaXg=");
            var _0x5ad5d9 = atob("cHJvamVjdGlvbk1hdHJpeA==");
            var _0x5f05ab = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x2886ef = 'u4_' + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x28deb0 = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x2d5be3 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x5d1388 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
            var _0x5d4373 = new _0x3092b0.gc().addAttribute(_0xed8d6e, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x129a79, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
            var _0x3f9962 = atob("cHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7YXR0cmlidXRlIHZlYzIg") + _0xed8d6e + atob("O2F0dHJpYnV0ZSB2ZWMyIA==") + _0x129a79 + atob("O3VuaWZvcm0gbWF0MyA=") + _0x2fd85f + atob("O3VuaWZvcm0gbWF0MyA=") + _0x5ad5d9 + atob("O3ZhcnlpbmcgdmVjMiA=") + _0x5d1388 + atob("O3ZvaWQgbWFpbigpew==") + _0x5d1388 + atob('PQ==') + _0x129a79 + atob("O2dsX1Bvc2l0aW9uPXZlYzQoKA==") + _0x5ad5d9 + atob("Kg==") + _0x2fd85f + atob('KnZlYzMo') + _0xed8d6e + atob("LDEuMCkpLnh5LDAuMCwxLjApO30=");
            var _0x1bb77e = atob("cHJlY2lzaW9uIGhpZ2hwIGZsb2F0O3ZhcnlpbmcgdmVjMiA=") + _0x5d1388 + atob("O3VuaWZvcm0gdmVjNCA=") + _0x5f05ab + atob("O3VuaWZvcm0gc2FtcGxlcjJEIA==") + _0x2886ef + atob("O3VuaWZvcm0gdmVjMiA=") + _0x28deb0 + atob("O3VuaWZvcm0gdmVjMiA=") + _0x2d5be3 + atob("O3ZvaWQgbWFpbigpe3ZlYzIgY29vcmQ9") + _0x5d1388 + atob("Kg==") + _0x28deb0 + atob("Kw==") + _0x2d5be3 + atob("O3ZlYzQgdl9jb2xvcl9taXg9") + _0x5f05ab + atob("O2dsX0ZyYWdDb2xvcj10ZXh0dXJlMkQo") + _0x2886ef + atob("LGNvb3JkKSowLjMrdl9jb2xvcl9taXguYSp2ZWM0KHZfY29sb3JfbWl4LnJnYiwwLjApO30=");
            _0x281f29.prototype.Hf = function(_0x3fc2c6, _0x537fd1, _0x402cd8, _0x45e974) {
                var _0x14f261 = this.cj[_0x5f05ab];
                _0x14f261[0x0] = _0x3fc2c6;
                _0x14f261[0x1] = _0x537fd1;
                _0x14f261[0x2] = _0x402cd8;
                _0x14f261[0x3] = _0x45e974
            }
            ;
            _0x281f29.prototype.Bf = function(_0x573ffc) {
                this.cj[_0x2886ef] = _0x573ffc
            }
            ;
            _0x281f29.prototype.Te = function(_0x2994be, _0x2899fd, _0x38da7e, _0x109208) {
                this.zf.position.x = _0x2994be;
                this.zf.position.y = _0x2899fd;
                this.zf.scale.x = _0x38da7e;
                this.zf.scale.y = _0x109208;
                var _0x5a78e6 = this.cj[_0x28deb0];
                _0x5a78e6[0x0] = 0.2520615384615385 * _0x38da7e;
                _0x5a78e6[0x1] = 0.4357063736263738 * _0x109208;
                var _0x498ca7 = this.cj[_0x2d5be3];
                _0x498ca7[0x0] = 0.2520615384615385 * _0x2994be;
                _0x498ca7[0x1] = 0.4357063736263738 * _0x2899fd
            }
            ;
            return _0x281f29
        }();
        var _0x24e471 = function() {
            function _0x28af90() {
                this.jh = new _0x3092b0.ec();
                this.dj = 0x0;
                this.ej = 0x0
            }
            _0x28af90.prototype.kh = function(_0x9603ee) {
                if (_0x9603ee && _0x9603ee.Hc) {
                    this.jh.texture = _0x9603ee.Hc;
                    this.jh.anchor.set(_0x9603ee.Lh, _0x9603ee.Mh);
                    this.dj = _0x9603ee.Nh;
                    this.ej = _0x9603ee.Oh
                }
            }
            ;
            _0x28af90.prototype.oh = function(_0x97d5d8) {
                this.jh.width = _0x97d5d8 * this.dj;
                this.jh.height = _0x97d5d8 * this.ej
            }
            ;
            _0x28af90.prototype.fj = function(_0x5dba33) {
                this.jh.rotation = _0x5dba33
            }
            ;
            _0x28af90.prototype.nh = function(_0x46b891, _0xaba425) {
                this.jh.position.set(_0x46b891, _0xaba425)
            }
            ;
            _0x28af90.prototype.Mg = function(_0x147a30) {
                this.jh.visible = _0x147a30
            }
            ;
            _0x28af90.prototype.gj = function() {
                return this.jh.visible
            }
            ;
            _0x28af90.prototype.qh = function(_0x3ec132) {
                this.jh.alpha = _0x3ec132
            }
            ;
            _0x28af90.prototype.Mf = function() {
                return this.jh
            }
            ;
            _0x28af90.prototype.ih = function() {
                _0x146ef5(this.jh)
            }
            ;
            return _0x28af90
        }();
        var _0x154501 = function() {
            function _0x35a5fb(_0x126424) {
                this.fb = _0x126424;
                this.Mb = new _0x154501.Config();
                this.Hb = !1;
                this.Ib = !0;
                this.hj = !1;
                this.Db = 0x0;
                this.ij = 0x0;
                this.Jb = 0x1;
                this.jj = 0x0;
                this.M = 0x0;
                this.Ff = {};
                this.kj = 0x0;
                this.lj = new Float32Array(400);
                this.mj = new Float32Array(400);
                this.nj = new Float32Array(400);
                this.oj = null;
                this.pj = null;
                this.qj = null;
                this.Tb()
            }
            _0x35a5fb.prototype.Kb = function() {
                if (null != this.pj) {
                    _0x146ef5(this.pj.Rf)
                }
                if (null != this.qj) {
                    _0x146ef5(this.qj)
                }
            }
            ;
            _0x35a5fb.prototype.Tb = function() {
                this.Ig(0.25);
                this.Mb.ad = '';
                this.Ib = !0;
                this.Ff = {};
                this.Mg(!1)
            }
            ;
            _0x35a5fb.prototype.Fg = function(_0x38131f) {
                this.Mb = _0x38131f;
                this.rj(this.Hb)
            }
            ;
            _0x35a5fb.prototype.Mg = function(_0x1a5a3f) {
                var _0x4c3c50 = this.Hb;
                this.Hb = _0x1a5a3f;
                this.rj(_0x4c3c50)
            }
            ;
            _0x35a5fb.prototype.Ig = function(_0x4d7a0a) {
                this.M = 0x32 * _0x4d7a0a;
                var _0x1b6e05 = _0x4d7a0a;
                if (_0x4d7a0a > this.fb.cf) {
                    _0x1b6e05 = Math.atan((_0x4d7a0a - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf
                }
                var _0x106825 = Math.sqrt(0x4 * Math.pow(0x5 * _0x1b6e05, 0.707106781186548) + 0x19);
                var _0x30a199 = Math.min(0xc8, Math.max(0x3, 0x5 * (_0x106825 - 0x5) + 0x1));
                var _0x217909 = this.kj;
                this.Db = 0.025 * (0x5 + 0.9 * _0x106825);
                this.kj = Math.floor(_0x30a199);
                this.ij = _0x30a199 - this.kj;
                if (_0x217909 > 0x0 && _0x217909 < this.kj) {
                    var _0x508af4 = this.lj[0x2 * _0x217909 - 0x2];
                    var _0x40afed = this.lj[0x2 * _0x217909 - 0x1];
                    var _0x5af062 = this.mj[0x2 * _0x217909 - 0x2];
                    var _0x41f12b = this.mj[0x2 * _0x217909 - 0x1];
                    var _0x54fa46 = this.nj[0x2 * _0x217909 - 0x2];
                    var _0x36108f = this.nj[0x2 * _0x217909 - 0x1];
                    for (var _0x1bd2cf = _0x217909; _0x1bd2cf < this.kj; _0x1bd2cf++) {
                        this.lj[0x2 * _0x1bd2cf] = _0x508af4;
                        this.lj[0x2 * _0x1bd2cf + 0x1] = _0x40afed;
                        this.mj[0x2 * _0x1bd2cf] = _0x5af062;
                        this.mj[0x2 * _0x1bd2cf + 0x1] = _0x41f12b;
                        this.nj[0x2 * _0x1bd2cf] = _0x54fa46;
                        this.nj[0x2 * _0x1bd2cf + 0x1] = _0x36108f
                    }
                }
            }
            ;
            _0x35a5fb.prototype.Lg = function(_0x20bc6b, _0x35d226) {
                this.kj = _0x35d226;
                for (var _0x49580f = 0x0; _0x49580f < this.kj; _0x49580f++) {
                    this.lj[0x2 * _0x49580f] = this.mj[0x2 * _0x49580f] = this.nj[0x2 * _0x49580f] = _0x20bc6b();
                    this.lj[0x2 * _0x49580f + 0x1] = this.mj[0x2 * _0x49580f + 0x1] = this.nj[0x2 * _0x49580f + 0x1] = _0x20bc6b()
                }
            }
            ;
            _0x35a5fb.prototype.Kg = function(_0xc3b945, _0x379dcd, _0x5b1c58) {
                this.hj = _0x5b1c58;
                for (var _0x3aeae9 = 0x0; _0x3aeae9 < this.kj; _0x3aeae9++) {
                    this.lj[0x2 * _0x3aeae9] = this.mj[0x2 * _0x3aeae9];
                    this.lj[0x2 * _0x3aeae9 + 0x1] = this.mj[0x2 * _0x3aeae9 + 0x1]
                }
                var _0x3f9733 = _0xc3b945 - this.mj[0x0];
                var _0x5ab32b = _0x379dcd - this.mj[0x1];
                this.sj(_0x3f9733, _0x5ab32b, this.kj, this.mj)
            }
            ;
            _0x35a5fb.prototype.sj = function(_0x847ee1, _0xe1330, _0x578236, _0x34e419) {
                var _0x1362c5 = Math.hypot(_0x847ee1, _0xe1330);
                if (!(_0x1362c5 <= 0x0)) {
                    var _0x45887f = _0x34e419[0x0];
                    var _0x4865f3 = undefined;
                    _0x34e419[0x0] += _0x847ee1;
                    var _0x50bd44 = _0x34e419[0x1];
                    var _0x1fc55c = undefined;
                    _0x34e419[0x1] += _0xe1330;
                    var _0x59ce1f = this.Db / (this.Db + _0x1362c5);
                    var _0x4a5551 = 0x1 - 0x2 * _0x59ce1f;
                    var _0x4d0f8d = 0x1;
                    for (var _0x15cdaa = _0x578236 - 0x1; _0x4d0f8d < _0x15cdaa; _0x4d0f8d++) {
                        _0x4865f3 = _0x34e419[0x2 * _0x4d0f8d];
                        _0x34e419[0x2 * _0x4d0f8d] = _0x34e419[0x2 * _0x4d0f8d - 0x2] * _0x4a5551 + (_0x4865f3 + _0x45887f) * _0x59ce1f;
                        _0x45887f = _0x4865f3;
                        _0x1fc55c = _0x34e419[0x2 * _0x4d0f8d + 0x1];
                        _0x34e419[0x2 * _0x4d0f8d + 0x1] = _0x34e419[0x2 * _0x4d0f8d - 0x1] * _0x4a5551 + (_0x1fc55c + _0x50bd44) * _0x59ce1f;
                        _0x50bd44 = _0x1fc55c
                    }
                    _0x59ce1f = this.ij * this.Db / (this.ij * this.Db + _0x1362c5);
                    _0x4a5551 = 0x1 - 0x2 * _0x59ce1f;
                    _0x34e419[0x2 * _0x578236 - 0x2] = _0x34e419[0x2 * _0x578236 - 0x4] * _0x4a5551 + (_0x34e419[0x2 * _0x578236 - 0x2] + _0x45887f) * _0x59ce1f;
                    _0x34e419[0x2 * _0x578236 - 0x1] = _0x34e419[0x2 * _0x578236 - 0x3] * _0x4a5551 + (_0x34e419[0x2 * _0x578236 - 0x1] + _0x50bd44) * _0x59ce1f
                }
            }
            ;
            _0x35a5fb.prototype.Gf = function() {
                return {
                    'x': this.nj[0x0],
                    'y': this.nj[0x1]
                }
            }
            ;
            _0x35a5fb.prototype.Hg = function(_0x3977bc, _0x5d0dfc) {
                var _0x523635 = 0xf4240;
                var _0x58163e = _0x3977bc;
                var _0x320572 = _0x5d0dfc;
                for (var _0x50d645 = 0x0; _0x50d645 < this.kj; _0x50d645++) {
                    var _0x111ae2 = this.nj[0x2 * _0x50d645];
                    var _0x3b82d9 = this.nj[0x2 * _0x50d645 + 0x1];
                    var _0x5def83 = Math.hypot(_0x3977bc - _0x111ae2, _0x5d0dfc - _0x3b82d9);
                    if (_0x5def83 < _0x523635) {
                        _0x523635 = _0x5def83;
                        _0x58163e = _0x111ae2;
                        _0x320572 = _0x3b82d9
                    }
                }
                return {
                    'x': _0x58163e,
                    'y': _0x320572,
                    'distance': _0x523635
                }
            }
            ;
            _0x35a5fb.prototype.vb = function(_0xa4b22d) {
                this.oj = _0xa4b22d
            }
            ;
            _0x35a5fb.prototype.Fb = function(_0x272bfe, _0x15463c) {
                this.Jb = (this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x272bfe / 0x190 * Math.PI) : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x272bfe / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb + _0x15463c * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + 0.1 * Math.cos(_0x272bfe / 0x190 * Math.PI) : 0x1 : 0x0, this.Jb - _0x15463c * 0.00125);
                this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x15463c * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x15463c * 0.0025);
                if (null != this.pj) {
                    this.pj.Rf.alpha = this.Jb
                }
                if (null != this.qj) {
                    this.qj.alpha = this.Jb
                }
            }
            ;
            _0x35a5fb.prototype.Gb = function(_0x5117a8, _0x1c1d66, _0x46bd78, _0x30ddc6) {
                if (this.Hb && this.Ib) {
                    var _0x56af7b = Math.pow(0.11112, _0x1c1d66 / 0x5f);
                    for (var _0x137b77 = 0x0; _0x137b77 < this.kj; _0x137b77++) {
                        var _0xa52432 = this.lj[0x2 * _0x137b77] * (0x1 - _0x46bd78) + this.mj[0x2 * _0x137b77] * _0x46bd78;
                        var _0xc0d94e = this.lj[0x2 * _0x137b77 + 0x1] * (0x1 - _0x46bd78) + this.mj[0x2 * _0x137b77 + 0x1] * _0x46bd78;
                        this.nj[0x2 * _0x137b77] = _0xa52432 * (0x1 - _0x56af7b) + this.nj[0x2 * _0x137b77] * _0x56af7b;
                        this.nj[0x2 * _0x137b77 + 0x1] = _0xc0d94e * (0x1 - _0x56af7b) + this.nj[0x2 * _0x137b77 + 0x1] * _0x56af7b
                    }
                }
                if (null != this.pj && this.Hb) {
                    this.pj.tj(this, _0x5117a8, _0x1c1d66, _0x30ddc6)
                }
                if (null != this.qj) {
                    this.qj.If.x = this.nj[0x0];
                    this.qj.If.y = this.nj[0x1] - 0x3 * this.Db
                }
            }
            ;
            _0x35a5fb.prototype.rj = function(_0x4c1379) {
                if (this.Hb) {
                    if (!_0x4c1379) {
                        this.uj()
                    }
                } else {
                    if (null != this.pj) {
                        _0x146ef5(this.pj.Rf)
                    }
                    if (null != this.qj) {
                        _0x146ef5(this.qj)
                    }
                }
            }
            ;
            _0x35a5fb.prototype.uj = function() {
                var _0x54025c = window.anApp = _0x1d2f59;
                if (null == this.pj) {
                    this.pj = new _0x4412e2()
                } else {
                    _0x146ef5(this.pj.Rf)
                }
                this.pj.hh(_0x54025c.o.fb.af, _0x54025c.p.Dc().ed(this.Mb.cg), _0x54025c.p.Dc().dd(this.Mb.dg), _0x54025c.p.Dc().fd(this.Mb.Bg), _0x54025c.p.Dc().gd(this.Mb.Cg), _0x54025c.p.Dc().hd(this.Mb.Dg), _0x54025c.p.Dc().jd(this.Mb.Eg));
                if (null == this.qj) {
                    this.qj = new _0x22342f('');
                    this.qj.style.fontFamily = "vuonghiep";
                    this.qj.anchor.set(0.5)
                } else {
                    _0x146ef5(this.qj)
                }
                this.qj.style.fontSize = 0xf;
                this.qj.style.fill = _0x54025c.p.Dc().dd(this.Mb.dg)._c;
                this.qj.text = this.Mb.ad;
                this.oj.Qf(this.Mb.Lb, this.pj, this.qj)
            }
            ;
            _0x35a5fb.Config = function() {
                function _0x29bfcf() {
                    this.Lb = 0x0;
                    this.cg = _0x590495.TEAM_DEFAULT;
                    this.dg = 0x0;
                    this.Bg = 0x0;
                    this.Cg = 0x0;
                    this.Dg = 0x0;
                    this.Eg = 0x0;
                    this.ad = ''
                }
                return _0x29bfcf
            }();
            return _0x35a5fb
        }();
        var _0x22342f = function() {
            return _0x357dff(_0x3092b0.fc, function(_0x149a91, _0x4b3c22, _0x3f5807) {
                _0x3092b0.fc.call(this, _0x149a91, _0x4b3c22, _0x3f5807);
                this.If = {
                    'x': 0x0,
                    'y': 0x0
                }
            })
        }();
        var _0x4412e2 = function() {
            function _0xb03f7f() {
                this.Rf = new _0x3092b0.Zb();
                this.Rf.sortableChildren = !0;
                this.vj = new _0x20477d();
                this.vj.zIndex = 1.6;
                this.wj = 0x0;
                this.xj = new Array(0x31d);
                this.xj[0x0] = this.yj(0x0, new _0x24e471(), new _0x24e471());
                for (var _0x21a59a = 0x1; _0x21a59a < 0x31d; _0x21a59a++) {
                    this.xj[_0x21a59a] = this.yj(_0x21a59a, new _0x24e471(), new _0x24e471())
                }
                this.zj = 0x0;
                this.Aj = 0x0;
                this.Bj = 0x0
            }
            var _0x72b2ba = 0.1 * Math.PI;
            var _0x44896f = -0.06640625;
            var _0x1ead0a = -0.03515625;
            var _0x293677 = -0.0625;
            var _0x46607b = 0x3 * _0x44896f + 0.84375;
            var _0x232de3 = 0.2578125 - 0x3 * _0x44896f;
            var _0x5fa18e = _0x44896f + _0x1ead0a;
            var _0x490d19 = _0x293677 + _0x293677;
            var _0x3c1774 = 0x3 * _0x1ead0a + 0.2578125;
            var _0xae149f = 0.84375 - 0x3 * _0x1ead0a;
            var _0x2b5ac8 = _0x1ead0a + _0x44896f;
            _0xb03f7f.prototype.yj = function(_0x3b0b86, _0x2a111b, _0xf18f8b) {
                var _0x1a26fb = new _0x31987c(_0x2a111b,_0xf18f8b);
                _0x2a111b.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x3b0b86) + 0x1 + 0x3);
                _0xf18f8b.jh.zIndex = 0.001 * (0x2 * (0x31d - _0x3b0b86) - 0x2 + 0x3);
                return _0x1a26fb
            }
            ;
            _0xb03f7f.prototype.hh = function(_0x12f4a5, _0xd5e420, _0x2ccc45, _0x2577d9, _0x2f86bd, _0xb5c663, _0x374fea) {
                var _0x5ebba5 = _0x2ccc45.Zc;
                var _0x59ed87 = _0x12f4a5 == 0x10 ? _0xd5e420.bd.$c : _0x2ccc45.$c;
                if (_0x5ebba5.length > 0x0 && _0x59ed87.length > 0x0) {
                    for (var _0x44fd61 = 0x0; _0x44fd61 < this.xj.length; _0x44fd61++) {
                        this.xj[_0x44fd61].Nf.kh(_0x5ebba5[_0x44fd61 % _0x5ebba5.length]);
                        this.xj[_0x44fd61].Pf.kh(_0x59ed87[_0x44fd61 % _0x59ed87.length])
                    }
                }
                this.vj.hh(_0x2577d9, _0x2f86bd, _0xb5c663, _0x374fea)
            }
            ;
            var _0x20477d = function() {
                var _0x521fc7 = _0x357dff(_0x3092b0.Zb, function() {
                    _0x3092b0.Zb.call(this);
                    this.sortableChildren = !0;
                    this.Cj = [];
                    this.Dj = [];
                    this.Ej = [];
                    this.Fj = [];
                    this.Gj = new _0x3092b0.Zb();
                    this.Hj = [];
                    for (var _0x50a533 = 0x0; _0x50a533 < 0x4; _0x50a533++) {
                        var _0x501157 = new _0x24e471();
                        _0x501157.kh((window.anApp = _0x1d2f59).q.Ph);
                        this.Gj.addChild(_0x501157.jh);
                        this.Hj.push(_0x501157)
                    }
                    this.Gj.zIndex = 0.0011;
                    this.addChild(this.Gj);
                    this.Ij();
                    this.Jj = new _0x24e471();
                    this.Jj.kh((window.anApp = _0x1d2f59).q.Qh);
                    this.Jj.jh.zIndex = 0.001;
                    this.addChild(this.Jj.jh);
                    this.Kj();
                    this.xEmojiType_headshot = new _0x24e471();
                    this.xEmojiType_headshot.kh((window.anApp = _0x1d2f59).q.emoji_headshot);
                    this.xEmojiType_headshot.jh.zIndex = 0.001;
                    this.addChild(this.xEmojiType_headshot.jh);
                    this.xzs();
                    this.xEmojiType_kill = new _0x24e471();
                    this.xEmojiType_kill.kh((window.anApp = _0x1d2f59).q.emoji_kill);
                    this.xEmojiType_kill.jh.zIndex = 0.001;
                    this.addChild(this.xEmojiType_kill.jh);
                    this.zas();
                    this.guia_mobile = new _0x24e471();
                    this.guia_mobile.kh((window.anApp = _0x1d2f59).q.Id_mobileguia);
                    this.guia_mobile.jh.zIndex = 0.001;
                    this.addChild(this.guia_mobile.jh)
                });
                _0x521fc7.prototype.hh = function(_0x58dcb0, _0x23541e, _0x4c5560, _0x1958f9) {
                    this.Lj(0.002, this.Cj, _0x58dcb0.Zc);
                    this.Lj(0.003, this.Dj, _0x23541e.Zc);
                    this.Lj(0.004, this.Fj, _0x1958f9.Zc);
                    this.Lj(0.005, this.Ej, _0x4c5560.Zc)
                }
                ;
                _0x521fc7.prototype.Lj = function(_0xf213de, _0x3f51c0, _0x453a27) {
                    for (; _0x453a27.length > _0x3f51c0.length; ) {
                        var _0x18a90b = new _0x24e471();
                        _0x3f51c0.push(_0x18a90b);
                        this.addChild(_0x18a90b.Mf())
                    }
                    for (; _0x453a27.length < _0x3f51c0.length; ) {
                        _0x3f51c0.pop().ih()
                    }
                    var _0x568060 = _0xf213de;
                    for (var _0x547421 = 0x0; _0x547421 < _0x453a27.length; _0x547421++) {
                        _0x568060 += 0.0001;
                        var _0x51638a = _0x3f51c0[_0x547421];
                        _0x51638a.kh(_0x453a27[_0x547421]);
                        _0x51638a.jh.zIndex = _0x568060
                    }
                }
                ;
                _0x521fc7.prototype.mh = function(_0x1b2218, _0x329564, _0x3fd035, _0x1c7146) {
                    this.visible = !0;
                    this.position.set(_0x1b2218, _0x329564);
                    this.rotation = _0x1c7146;
                    for (var _0xfc25f8 = 0x0; _0xfc25f8 < this.Cj.length; _0xfc25f8++) {
                        this.Cj[_0xfc25f8].oh(_0x3fd035)
                    }
                    for (var _0x2ec74f = 0x0; _0x2ec74f < this.Dj.length; _0x2ec74f++) {
                        this.Dj[_0x2ec74f].oh(_0x3fd035)
                    }
                    for (var _0x32c929 = 0x0; _0x32c929 < this.Ej.length; _0x32c929++) {
                        this.Ej[_0x32c929].oh(_0x3fd035)
                    }
                    for (var _0xc8a2d6 = 0x0; _0xc8a2d6 < this.Fj.length; _0xc8a2d6++) {
                        this.Fj[_0xc8a2d6].oh(_0x3fd035)
                    }
                }
                ;
                _0x521fc7.prototype.lh = function() {
                    this.visible = !1
                }
                ;
                _0x521fc7.prototype.Mj = function(_0x15fbd9, _0x44cdae, _0x4aad8a, _0x52f4fe) {
                    this.Gj.visible = !0;
                    var _0x3fdcf6 = _0x4aad8a / 0x3e8;
                    var _0x524662 = 0x1 / this.Hj.length;
                    for (var _0x3918b9 = 0x0; _0x3918b9 < this.Hj.length; _0x3918b9++) {
                        var _0x27e16f = 0x1 - (_0x3fdcf6 + _0x524662 * _0x3918b9) % 0x1;
                        this.Hj[_0x3918b9].jh.alpha = 0x1 - _0x27e16f;
                        this.Hj[_0x3918b9].oh(_0x44cdae * (0.5 + 4.5 * _0x27e16f))
                    }
                }
                ;
                _0x521fc7.prototype.Ij = function() {
                    this.Gj.visible = !1
                }
                ;
                _0x521fc7.prototype.Nj = function(_0x4f9362, _0x5c5928, _0xb4d83b, _0x48b868) {
                    this.Jj.jh.visible = !0;
                    this.Jj.jh.alpha = (_0x4f9362.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x4f9362.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x48b868 * 0.0025) : Math.max(_0x4f9362.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x48b868 * 0.0025);
                    this.Jj.oh(_0x5c5928)
                }
                ;
                _0x521fc7.prototype.Kj = function() {
                    this.Jj.jh.visible = !1
                }
                ;
                _0x521fc7.prototype.xzs = function() {
                    this.xEmojiType_headshot.jh.visible = !1
                }
                ;
                _0x521fc7.prototype.zas = function() {
                    this.xEmojiType_kill.jh.visible = !1
                }
                ;
                _0x521fc7.prototype.Rx = function(_0x4b9217, _0x31aacf, _0x4136a1, _0x1f2ed3) {
                    this.guia_mobile.jh.visible = !0;
                    this.guia_mobile.oh(_0x31aacf)
                }
                ;
                _0x521fc7.prototype.Njh = function(_0xb720d7, _0x6eeb5, _0x370c4f, _0x8d81fe) {
                    this.xEmojiType_headshot.jh.visible = !0;
                    this.xEmojiType_headshot.oh(_0x6eeb5)
                }
                ;
                _0x521fc7.prototype.Njk = function(_0x474af0, _0x2788d2, _0x47ca80, _0x2ecd19) {
                    this.xEmojiType_kill.jh.visible = !0;
                    this.xEmojiType_kill.oh(_0x2788d2)
                }
                ;
                return _0x521fc7
            }();
            _0xb03f7f.prototype.Oj = function(_0x464aa0) {
                return this.Aj + this.Bj * Math.sin(_0x464aa0 * _0x72b2ba - this.zj)
            }
            ;
            _0xb03f7f.prototype.tj = function(_0x5774ec, _0x211d06, _0x2b1f31, _0xc21bbb) {
                var _0x37cbe9 = 0x2 * _0x5774ec.Db;
                var _0x1ffc7d = _0x5774ec.nj;
                var _0x40922b = _0x5774ec.kj;
                var _0x2ab998 = 0x4 * _0x40922b - 0x3;
                this.zj = _0x211d06 / 0x190 * Math.PI;
                this.Aj = 1.5 * _0x37cbe9;
                this.Bj = 0.15 * _0x37cbe9 * _0x5774ec.jj;
                var _0x27b2d8 = undefined;
                var _0x3b0cf5 = undefined;
                var _0x53d4ca = undefined;
                var _0x471b78 = undefined;
                var _0x53668f = undefined;
                var _0x56e61f = undefined;
                var _0x356475 = undefined;
                var _0x4e4f9d = undefined;
                _0x3b0cf5 = _0x1ffc7d[0x0];
                _0x56e61f = _0x1ffc7d[0x1];
                if (_0xc21bbb(_0x3b0cf5, _0x56e61f)) {
                    _0x53d4ca = _0x1ffc7d[0x2];
                    _0x356475 = _0x1ffc7d[0x3];
                    _0x471b78 = _0x1ffc7d[0x4];
                    _0x4e4f9d = _0x1ffc7d[0x5];
                    var _0x1f037f = Math.atan2(_0x4e4f9d + 0x2 * _0x56e61f - 0x3 * _0x356475, _0x471b78 + 0x2 * _0x3b0cf5 - 0x3 * _0x53d4ca);
                    this.vj.mh(_0x3b0cf5, _0x56e61f, _0x37cbe9, _0x1f037f);
                    this.xj[0x0].mh(_0x3b0cf5, _0x56e61f, _0x37cbe9, this.Oj(0x0), _0x1f037f);
                    this.xj[0x1].mh(_0x46607b * _0x3b0cf5 + _0x232de3 * _0x53d4ca + _0x5fa18e * _0x471b78, _0x46607b * _0x56e61f + _0x232de3 * _0x356475 + _0x5fa18e * _0x4e4f9d, _0x37cbe9, this.Oj(0x1), _0x31987c.angleBetween(this.xj[0x0], this.xj[0x2]));
                    this.xj[0x2].mh(0.375 * _0x3b0cf5 + 0.75 * _0x53d4ca + _0x490d19 * _0x471b78, 0.375 * _0x56e61f + 0.75 * _0x356475 + _0x490d19 * _0x4e4f9d, _0x37cbe9, this.Oj(0x2), _0x31987c.angleBetween(this.xj[0x1], this.xj[0x3]));
                    this.xj[0x3].mh(_0x3c1774 * _0x3b0cf5 + _0xae149f * _0x53d4ca + _0x2b5ac8 * _0x471b78, _0x3c1774 * _0x56e61f + _0xae149f * _0x356475 + _0x2b5ac8 * _0x4e4f9d, _0x37cbe9, this.Oj(0x3), _0x31987c.angleBetween(this.xj[0x2], this.xj[0x4]))
                } else {
                    this.vj.lh();
                    this.xj[0x0].lh();
                    this.xj[0x1].lh();
                    this.xj[0x2].lh();
                    this.xj[0x3].lh()
                }
                var _0x5324bf = 0x4;
                var _0x132c7a = 0x2;
                for (var _0x14e16f = 0x2 * _0x40922b - 0x4; _0x132c7a < _0x14e16f; _0x132c7a += 0x2) {
                    _0x3b0cf5 = _0x1ffc7d[_0x132c7a];
                    _0x56e61f = _0x1ffc7d[_0x132c7a + 0x1];
                    if (_0xc21bbb(_0x3b0cf5, _0x56e61f)) {
                        _0x27b2d8 = _0x1ffc7d[_0x132c7a - 0x2];
                        _0x53668f = _0x1ffc7d[_0x132c7a - 0x1];
                        _0x53d4ca = _0x1ffc7d[_0x132c7a + 0x2];
                        _0x356475 = _0x1ffc7d[_0x132c7a + 0x3];
                        _0x471b78 = _0x1ffc7d[_0x132c7a + 0x4];
                        _0x4e4f9d = _0x1ffc7d[_0x132c7a + 0x5];
                        this.xj[_0x5324bf].mh(_0x3b0cf5, _0x56e61f, _0x37cbe9, this.Oj(_0x5324bf), _0x31987c.angleBetween(this.xj[_0x5324bf - 0x1], this.xj[_0x5324bf + 0x1]));
                        _0x5324bf++;
                        this.xj[_0x5324bf].mh(_0x44896f * _0x27b2d8 + 0.84375 * _0x3b0cf5 + 0.2578125 * _0x53d4ca + _0x1ead0a * _0x471b78, _0x44896f * _0x53668f + 0.84375 * _0x56e61f + 0.2578125 * _0x356475 + _0x1ead0a * _0x4e4f9d, _0x37cbe9, this.Oj(_0x5324bf), _0x31987c.angleBetween(this.xj[_0x5324bf - 0x1], this.xj[_0x5324bf + 0x1]));
                        _0x5324bf++;
                        this.xj[_0x5324bf].mh(_0x293677 * _0x27b2d8 + 0.5625 * _0x3b0cf5 + 0.5625 * _0x53d4ca + _0x293677 * _0x471b78, _0x293677 * _0x53668f + 0.5625 * _0x56e61f + 0.5625 * _0x356475 + _0x293677 * _0x4e4f9d, _0x37cbe9, this.Oj(_0x5324bf), _0x31987c.angleBetween(this.xj[_0x5324bf - 0x1], this.xj[_0x5324bf + 0x1]));
                        _0x5324bf++;
                        this.xj[_0x5324bf].mh(_0x1ead0a * _0x27b2d8 + 0.2578125 * _0x3b0cf5 + 0.84375 * _0x53d4ca + _0x44896f * _0x471b78, _0x1ead0a * _0x53668f + 0.2578125 * _0x56e61f + 0.84375 * _0x356475 + _0x44896f * _0x4e4f9d, _0x37cbe9, this.Oj(_0x5324bf), _0x31987c.angleBetween(this.xj[_0x5324bf - 0x1], this.xj[_0x5324bf + 0x1]));
                        _0x5324bf++
                    } else {
                        this.xj[_0x5324bf].lh();
                        _0x5324bf++;
                        this.xj[_0x5324bf].lh();
                        _0x5324bf++;
                        this.xj[_0x5324bf].lh();
                        _0x5324bf++;
                        this.xj[_0x5324bf].lh();
                        _0x5324bf++
                    }
                }
                _0x3b0cf5 = _0x1ffc7d[0x2 * _0x40922b - 0x4];
                _0x56e61f = _0x1ffc7d[0x2 * _0x40922b - 0x3];
                if (_0xc21bbb(_0x3b0cf5, _0x56e61f)) {
                    _0x27b2d8 = _0x1ffc7d[0x2 * _0x40922b - 0x6];
                    _0x53668f = _0x1ffc7d[0x2 * _0x40922b - 0x5];
                    _0x53d4ca = _0x1ffc7d[0x2 * _0x40922b - 0x2];
                    _0x356475 = _0x1ffc7d[0x2 * _0x40922b - 0x1];
                    this.xj[_0x2ab998 - 0x5].mh(_0x3b0cf5, _0x56e61f, _0x37cbe9, this.Oj(_0x2ab998 - 0x5), _0x31987c.angleBetween(this.xj[_0x2ab998 - 0x6], this.xj[_0x2ab998 - 0x4]));
                    this.xj[_0x2ab998 - 0x4].mh(_0x2b5ac8 * _0x27b2d8 + _0xae149f * _0x3b0cf5 + _0x3c1774 * _0x53d4ca, _0x2b5ac8 * _0x53668f + _0xae149f * _0x56e61f + _0x3c1774 * _0x356475, _0x37cbe9, this.Oj(_0x2ab998 - 0x4), _0x31987c.angleBetween(this.xj[_0x2ab998 - 0x5], this.xj[_0x2ab998 - 0x3]));
                    this.xj[_0x2ab998 - 0x3].mh(_0x490d19 * _0x27b2d8 + 0.75 * _0x3b0cf5 + 0.375 * _0x53d4ca, _0x490d19 * _0x53668f + 0.75 * _0x56e61f + 0.375 * _0x356475, _0x37cbe9, this.Oj(_0x2ab998 - 0x3), _0x31987c.angleBetween(this.xj[_0x2ab998 - 0x4], this.xj[_0x2ab998 - 0x2]));
                    this.xj[_0x2ab998 - 0x2].mh(_0x5fa18e * _0x27b2d8 + _0x232de3 * _0x3b0cf5 + _0x46607b * _0x53d4ca, _0x5fa18e * _0x53668f + _0x232de3 * _0x56e61f + _0x46607b * _0x356475, _0x37cbe9, this.Oj(_0x2ab998 - 0x2), _0x31987c.angleBetween(this.xj[_0x2ab998 - 0x3], this.xj[_0x2ab998 - 0x1]));
                    this.xj[_0x2ab998 - 0x1].mh(_0x53d4ca, _0x356475, _0x37cbe9, this.Oj(_0x2ab998 - 0x1), _0x31987c.angleBetween(this.xj[_0x2ab998 - 0x2], this.xj[_0x2ab998 - 0x1]))
                } else {
                    this.xj[_0x2ab998 - 0x5].lh();
                    this.xj[_0x2ab998 - 0x4].lh();
                    this.xj[_0x2ab998 - 0x3].lh();
                    this.xj[_0x2ab998 - 0x2].lh();
                    this.xj[_0x2ab998 - 0x1].lh()
                }
                if (0x0 == this.wj && _0x2ab998 > 0x0) {
                    this.Rf.addChild(this.vj)
                }
                for (this.wj > 0x0 && 0x0 == _0x2ab998 && _0x146ef5(this.vj); this.wj < _0x2ab998; ) {
                    this.Rf.addChild(this.xj[this.wj].Nf.Mf());
                    this.Rf.addChild(this.xj[this.wj].Pf.Mf());
                    this.wj += 0x1
                }
                for (; this.wj > _0x2ab998; ) {
                    this.wj -= 0x1;
                    this.xj[this.wj].Pf.ih();
                    this.xj[this.wj].Nf.ih()
                }
                var _0x2eacaf = _0x5774ec.Ff[_0x58495a.MAGNETIC_TYPE];
                if (this.xj[0x0].gj() && null != _0x2eacaf && _0x2eacaf.sc) {
                    this.vj.Mj(_0x5774ec, _0x37cbe9, _0x211d06, _0x2b1f31)
                } else {
                    this.vj.Ij()
                }
                var _0x5d803c = _0x5774ec.Ff[_0x58495a.VELOCITY_TYPE];
                if (this.xj[0x0].gj() && null != _0x5d803c && _0x5d803c.sc) {
                    this.vj.Nj(_0x5774ec, _0x37cbe9, _0x211d06, _0x2b1f31)
                } else {
                    this.vj.Kj()
                }
                ;if (theoKzObjects.emoji_headshot && _0x5774ec && _0x5774ec.Mb && _0x5774ec.Mb.Mb) {
                    this.vj.Njh(_0x5774ec, _0x37cbe9, _0x211d06, _0x2b1f31)
                } else {
                    this.vj.xzs()
                }
                if (theoKzObjects.emoji_kill && _0x5774ec && _0x5774ec.Mb && _0x5774ec.Mb.Mb) {
                    this.vj.Njk(_0x5774ec, _0x37cbe9, _0x211d06, _0x2b1f31)
                } else {
                    this.vj.zas()
                }
                ;if (!1 && !1 && _0x5774ec && _0x5774ec.Mb && _0x5774ec.Mb.Mb) {
                    this.vj.Rx(_0x5774ec, _0x37cbe9, _0x211d06, _0x2b1f31)
                }
            }
            ;
            var _0x31987c = function() {
                function _0x111536(_0x4be7d8, _0x362cfc) {
                    this.Nf = _0x4be7d8;
                    this.Nf.Mg(!1);
                    this.Pf = _0x362cfc;
                    this.Pf.Mg(!1)
                }
                _0x111536.prototype.mh = function(_0x6ed6cf, _0x53b84f, _0x2a635c, _0x57d029, _0xbbb774) {
                    this.Nf.Mg(!0);
                    this.Nf.nh(_0x6ed6cf, _0x53b84f);
                    this.Nf.oh(_0x2a635c);
                    this.Nf.fj(_0xbbb774);
                    this.Pf.Mg(!0);
                    this.Pf.nh(_0x6ed6cf, _0x53b84f);
                    this.Pf.oh(_0x57d029);
                    this.Pf.fj(_0xbbb774)
                }
                ;
                _0x111536.prototype.lh = function() {
                    this.Nf.Mg(!1);
                    this.Pf.Mg(!1)
                }
                ;
                _0x111536.prototype.gj = function() {
                    return this.Nf.gj()
                }
                ;
                _0x111536.angleBetween = function(_0x2856fd, _0x3f8f8b) {
                    return Math.atan2(_0x2856fd.Nf.jh.position.y - _0x3f8f8b.Nf.jh.position.y, _0x2856fd.Nf.jh.position.x - _0x3f8f8b.Nf.jh.position.x)
                }
                ;
                return _0x111536
            }();
            return _0xb03f7f
        }();
        var _0x342fa9 = function() {
            function _0x3fca80(_0x1a4034) {
                this.se = _0x1a4034;
                this.te = _0x1a4034.get()[0x0];
                this.ue = new _0x3092b0.ac({
                    'view': this.te,
                    'transparent': !0
                });
                this.sc = !1;
                this.Pj = new _0x4412e2();
                this.Pj.Rf.addChild(this.Pj.vj);
                this.Qj = 0x0;
                this.Rj = 0x0;
                this.Ng = 0x1;
                this.rh = 0x0;
                this.sh = 0x0;
                this.th = 0x0;
                this.uh = 0x0;
                this.vh = 0x0;
                this.Sj = !1;
                this.Tj = !1;
                this.Uj = !1;
                this.Vj = !1;
                this.Wj = !1;
                this.Xj = !1;
                this.Yj = !1;
                this.Zj = !1;
                this.$j = !1;
                this._j = !1;
                this.Ra();
                this.Fb();
                var _0x394459 = this;
                (window.anApp = _0x1d2f59).p.ca(function() {
                    if ((window.anApp = _0x1d2f59).p.W()) {
                        _0x394459.Fb()
                    }
                })
            }
            _0x3fca80.prototype.Fb = function() {
                var _0xa8b850 = window.anApp = _0x1d2f59;
                this.Pj.hh(0x0, null, _0xa8b850.p.Dc().dd(this.rh), _0xa8b850.p.Dc().fd(this.sh), _0xa8b850.p.Dc().gd(this.th), _0xa8b850.p.Dc().hd(this.uh), _0xa8b850.p.Dc().jd(this.vh))
            }
            ;
            _0x3fca80.prototype.Le = function(_0x1017c4) {
                this.sc = _0x1017c4
            }
            ;
            _0x3fca80.prototype.ak = function(_0x5997fc, _0x258af9, _0x405161) {
                this.rh = _0x5997fc;
                this.Sj = _0x258af9;
                this.Xj = _0x405161;
                this.Fb()
            }
            ;
            _0x3fca80.prototype.bk = function(_0x5a9deb, _0xa16da9, _0xeb2bf2) {
                this.sh = _0x5a9deb;
                this.Tj = _0xa16da9;
                this.Yj = _0xeb2bf2;
                this.Fb()
            }
            ;
            _0x3fca80.prototype.ck = function(_0xd56227, _0x1392ca, _0x5fdbe) {
                this.th = _0xd56227;
                this.Uj = _0x1392ca;
                this.Zj = _0x5fdbe;
                this.Fb()
            }
            ;
            _0x3fca80.prototype.dk = function(_0x22d78b, _0x3fd80c, _0x3116cf) {
                this.uh = _0x22d78b;
                this.Vj = _0x3fd80c;
                this.$j = _0x3116cf;
                this.Fb()
            }
            ;
            _0x3fca80.prototype.ek = function(_0x3d662b, _0x44a007, _0x544742) {
                this.vh = _0x3d662b;
                this.Wj = _0x44a007;
                this._j = _0x544742;
                this.Fb()
            }
            ;
            _0x3fca80.prototype.Ra = function() {
                var _0x542923 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
                this.Qj = this.se.width();
                this.Rj = this.se.height();
                this.ue.resize(this.Qj, this.Rj);
                this.ue.resolution = _0x542923;
                this.te.width = _0x542923 * this.Qj;
                this.te.height = _0x542923 * this.Rj;
                this.Ng = this.Rj / 0x4;
                var _0x59d6b4 = 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 > this.Pj.xj.length ? this.Pj.xj.length : 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 < 0x1 ? 0x1 : Number.isFinite(0x2 * Math.floor(this.Qj / this.Ng) - 0x5) ? 0x2 * Math.floor(this.Qj / this.Ng) - 0x5 : 0.5 * (0x1 + this.Pj.xj.length);
                if (this.Pj.wj != _0x59d6b4) {
                    for (var _0x15e2bc = _0x59d6b4; _0x15e2bc < this.Pj.xj.length; _0x15e2bc++) {
                        this.Pj.xj[_0x15e2bc].lh()
                    }
                    for (; this.Pj.wj < _0x59d6b4; ) {
                        this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
                        this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
                        this.Pj.wj += 0x1
                    }
                    for (; this.Pj.wj > _0x59d6b4; ) {
                        this.Pj.wj -= 0x1;
                        this.Pj.xj[this.Pj.wj].Pf.ih();
                        this.Pj.xj[this.Pj.wj].Nf.ih()
                    }
                }
            }
            ;
            _0x3fca80.prototype.Pa = function() {
                if (this.sc) {
                    if ((window.anApp = _0x1d2f59).p.W) {
                        var _0x21bc1d = Date.now();
                        var _0x48bd98 = _0x21bc1d / 0xc8;
                        var _0x39791a = Math.sin(_0x48bd98);
                        var _0x49db9e = this.Ng;
                        var _0x3f5e6c = 1.5 * this.Ng;
                        var _0xb134eb = this.Qj - 0.5 * (this.Qj - 0.5 * _0x49db9e * (this.Pj.wj - 0x1));
                        var _0x4ca50d = 0.5 * this.Rj;
                        var _0x18ad91 = 0x0;
                        var _0x4186e2 = 0x0;
                        for (var _0x40fc70 = -0x1; _0x40fc70 < this.Pj.wj; _0x40fc70++) {
                            var _0x4a3235 = _0x40fc70;
                            var _0x5b427f = Math.cos(0x1 * _0x4a3235 / 0xc * Math.PI - _0x48bd98) * (0x1 - Math.pow(0x10, -0x1 * _0x4a3235 / 0xc));
                            if (_0x40fc70 >= 0x0) {
                                var _0x59ea0c = _0xb134eb + -0.5 * _0x49db9e * _0x4a3235;
                                var _0x2eda96 = _0x4ca50d + 0.5 * _0x49db9e * _0x5b427f;
                                var _0x488fbc = 0x2 * _0x49db9e;
                                var _0xc2d947 = 0x2 * _0x3f5e6c;
                                var _0x5eb531 = Math.atan2(_0x4186e2 - _0x5b427f, _0x4a3235 - _0x18ad91);
                                if (0x0 == _0x40fc70) {
                                    this.Pj.vj.mh(_0x59ea0c, _0x2eda96, _0x488fbc, _0x5eb531)
                                }
                                this.Pj.xj[_0x40fc70].mh(_0x59ea0c, _0x2eda96, _0x488fbc, _0xc2d947, _0x5eb531);
                                var _0x57ed02 = this.Sj ? this.Xj ? 0.4 + 0.2 * _0x39791a : 0.9 + 0.1 * _0x39791a : this.Xj ? 0.4 : 0x1;
                                this.Pj.xj[_0x40fc70].Nf.qh(_0x57ed02);
                                this.Pj.xj[_0x40fc70].Pf.qh(_0x57ed02)
                            }
                            _0x18ad91 = _0x4a3235;
                            _0x4186e2 = _0x5b427f
                        }
                        for (var _0x1001b4 = 0x0; _0x1001b4 < this.Pj.vj.Cj.length; _0x1001b4++) {
                            var _0x526892 = this.Tj ? this.Yj ? 0.4 + 0.2 * _0x39791a : 0.9 + 0.1 * _0x39791a : this.Yj ? 0.4 : 0x1;
                            this.Pj.vj.Cj[_0x1001b4].qh(_0x526892)
                        }
                        for (var _0x535c0e = 0x0; _0x535c0e < this.Pj.vj.Dj.length; _0x535c0e++) {
                            var _0x23a6a0 = this.Uj ? this.Zj ? 0.4 + 0.2 * _0x39791a : 0.9 + 0.1 * _0x39791a : this.Zj ? 0.4 : 0x1;
                            this.Pj.vj.Dj[_0x535c0e].qh(_0x23a6a0)
                        }
                        for (var _0x461fe0 = 0x0; _0x461fe0 < this.Pj.vj.Ej.length; _0x461fe0++) {
                            var _0x21221b = this.Vj ? this.$j ? 0.4 + 0.2 * _0x39791a : 0.9 + 0.1 * _0x39791a : this.$j ? 0.4 : 0x1;
                            this.Pj.vj.Ej[_0x461fe0].qh(_0x21221b)
                        }
                        for (var _0x3ef75d = 0x0; _0x3ef75d < this.Pj.vj.Fj.length; _0x3ef75d++) {
                            var _0x5610e0 = this.Wj ? this._j ? 0.4 + 0.2 * _0x39791a : 0.9 + 0.1 * _0x39791a : this._j ? 0.4 : 0x1;
                            this.Pj.vj.Fj[_0x3ef75d].qh(_0x5610e0)
                        }
                        this.ue.render(this.Pj.Rf)
                    }
                }
            }
            ;
            return _0x3fca80
        }();
        var _0x3c42e9 = function() {
            function _0x17d109(_0x2653ab) {
                this.rc = _0x2653ab
            }
            _0x17d109.fk = $('#game-view');
            _0x17d109.gk = $("#results-view");
            _0x17d109.hk = $("#main-menu-view");
            _0x17d109.ik = $('#popup-view');
            _0x17d109.jk = $("#toaster-view");
            _0x17d109.kk = $("#loading-view");
            _0x17d109.lk = $("#stretch-box");
            _0x17d109.mk = $("#game-canvas");
            _0x17d109.di = $("#background-canvas");
            _0x17d109.nk = $("#social-buttons");
            _0x17d109.ok = $("#markup-wrap");
            _0x17d109.prototype.a = function() {}
            ;
            _0x17d109.prototype.ii = function() {}
            ;
            _0x17d109.prototype.ji = function() {}
            ;
            _0x17d109.prototype.ei = function() {}
            ;
            _0x17d109.prototype.Ra = function() {}
            ;
            _0x17d109.prototype.Pa = function(_0x1a2cff, _0x30c5da) {}
            ;
            return _0x17d109
        }();
        var _0x4386b0 = function() {
            function _0x36c916(_0x36e0ea, _0x1e151b, _0x4cd5cb, _0x340b39, _0x4014bf, _0x923609) {
                var _0x5c710d = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x36e0ea + "</span></div>";
                var _0x155217 = $(_0x5c710d);
                _0x155217.click(function() {
                    if ("undefined" != typeof FB && undefined !== FB.ui) {
                        FB.ui({
                            'method': 'feed',
                            'display': "popup",
                            'link': _0x1e151b,
                            'name': _0x4cd5cb,
                            'caption': _0x340b39,
                            'description': _0x4014bf,
                            'picture': _0x923609
                        }, function() {})
                    }
                });
                return _0x155217
            }
            var _0x1653cb = $("#final-caption");
            var _0x81db55 = $("#final-continue");
            var _0x3ca89f = $("#congrats-bg");
            var _0x596d36 = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var _0x42b278 = $("#final-share-fb");
            var _0x542157 = $("#final-message");
            var _0x3ae1aa = $("#final-score");
            var _0x12a5fb = $("#final-place");
            var _0x2d18dd = $('#final-board');
            var _0x30ff1f = _0x357dff(_0x3c42e9, function() {
                _0x3c42e9.call(this, 0x0);
                var _0x42d414 = this;
                var _0x2332a0 = window.anApp = _0x1d2f59;
                var _0x5c14db = _0x3c42e9.mk.get()[0x0];
                console.log("sSE=" + _0xce1435.qk);
                _0x42b278.toggle(_0xce1435.qk);
                _0x1653cb.text(window.I18N_MESSAGES["index.game.result.title"]);
                _0x81db55.text(window.I18N_MESSAGES["index.game.result.continue"]);
                _0x81db55.click(function() {
                    _0x2332a0.r.Cd();
                    _0x2332a0.f.Ma.c();
                    _0x2332a0.r.G(_0xdc46a6.AudioState.F);
                    _0x2332a0.s.I(_0x2332a0.s.F)
                });
                window.detecNewCodeAndPacth = () => {
                    $("#game-canvas").attr('width', window.innerWidth);
                    return $("#game-canvas").attr("height", window.innerHeight)
                }
                ;
                $("html").keydown(function(_0x2c1966) {
                    if (0x20 == _0x2c1966.keyCode) {
                        _0x42d414.rk = !0
                    }
                    if (0x6b == _0x2c1966.keyCode) {
                        detecNewCodeAndPacth();
                        setInterval(detecNewCodeAndPacth, 0x3e8)
                    }
                    if (0x6d == _0x2c1966.keyCode) {
                        detecNewCodeAndPacth();
                        setInterval(detecNewCodeAndPacth, 0x3e8)
                    }
                    if (theoKzObjects.KeyCodeRespawn == _0x2c1966.keyCode) {
                        _0x42d414.rk = !0;
                        window.onclose();
                        setTimeout(function() {
                            $("#final-continue").click();
                            $("#mm-action-play").click();
                            $("#adbl-continue").click()
                        }, 0x3e8)
                    }
                }).keyup(function(_0xea787a) {
                    if (0x20 == _0xea787a.keyCode) {
                        _0x42d414.rk = !1
                    }
                });
                _0x5c14db.addEventListener('touchmove', function(_0x50e75a) {
                    if (!(RechekingPhone() && theoKzObjects.gamePad.checked)) {
                        if (_0x50e75a = _0x50e75a || window.event) {
                            _0x50e75a = _0x50e75a.touches[0x0];
                            if (undefined !== _0x50e75a.clientX) {
                                _0x42d414.sk = Math.atan2(_0x50e75a.clientY - 0.5 * _0x5c14db.offsetHeight, _0x50e75a.clientX - 0.5 * _0x5c14db.offsetWidth)
                            } else {
                                _0x42d414.sk = Math.atan2(_0x50e75a.pageY - 0.5 * _0x5c14db.offsetHeight, _0x50e75a.pageX - 0.5 * _0x5c14db.offsetWidth)
                            }
                        }
                    }
                }, !0);
                _0x5c14db.addEventListener("touchstart", function(_0x1eb4a5) {
                    if (_0x1eb4a5 = _0x1eb4a5 || window.event) {
                        _0x42d414.rk = _0x1eb4a5.touches.length >= 0x2
                    }
                    _0x1eb4a5.preventDefault()
                }, !0);
                _0x5c14db.addEventListener("touchend", function(_0x2675c5) {
                    if (_0x2675c5 = _0x2675c5 || window.event) {
                        _0x42d414.rk = _0x2675c5.touches.length >= 0x2
                    }
                }, !0);
                _0x5c14db.addEventListener("mousemove", function(_0x63e4c8) {
                    if (!PilotoAutomatico) {
                        if (_0x63e4c8 = _0x63e4c8 || window.event && undefined !== _0x63e4c8.clientX) {
                            _0x42d414.sk = Math.atan2(_0x63e4c8.clientY - 0.5 * _0x5c14db.offsetHeight, _0x63e4c8.clientX - 0.5 * _0x5c14db.offsetWidth)
                        }
                    }
                }, !0);
                _0x5c14db.addEventListener('mousedown', function(_0x57e337) {
                    console.log(_0x57e337);
                    _0x42d414.rk = !0
                }, !0);
                _0x5c14db.addEventListener("mouseup", function(_0x560020) {
                    console.log(_0x560020);
                    _0x42d414.rk = !1
                }, !0);
                this.wb = new _0x7d5acd(_0x3c42e9.mk);
                this.cb = 0x0;
                this.sk = 0x0;
                this.rk = !1;
                theoEvents.eventoPrincipal = _0x42d414
            });
            _0x30ff1f.prototype.a = function() {}
            ;
            _0x30ff1f.prototype.ii = function() {
                if (this.cb == 0x0) {
                    _0x3c42e9.fk.stop();
                    _0x3c42e9.fk.fadeIn(0x1f4);
                    _0x3c42e9.gk.stop();
                    _0x3c42e9.gk.fadeOut(0x1);
                    _0x3c42e9.hk.stop();
                    _0x3c42e9.hk.fadeOut(0x32);
                    _0x3c42e9.ik.stop();
                    _0x3c42e9.ik.fadeOut(0x32);
                    _0x3c42e9.jk.stop();
                    _0x3c42e9.jk.fadeOut(0x32);
                    _0x3c42e9.kk.stop();
                    _0x3c42e9.kk.fadeOut(0x32);
                    _0x3c42e9.lk.stop();
                    _0x3c42e9.lk.fadeOut(0x1);
                    _0x3c42e9.di.stop();
                    _0x3c42e9.di.fadeOut(0x32);
                    _0xda1c24.Le(!1);
                    _0x3c42e9.nk.stop();
                    _0x3c42e9.nk.fadeOut(0x32);
                    _0x3c42e9.ok.stop();
                    _0x3c42e9.ok.fadeOut(0x32)
                } else {
                    _0x3c42e9.fk.stop();
                    _0x3c42e9.fk.fadeIn(0x1f4);
                    _0x3c42e9.gk.stop();
                    _0x3c42e9.gk.fadeIn(0x1f4);
                    _0x3c42e9.hk.stop();
                    _0x3c42e9.hk.fadeOut(0x32);
                    _0x3c42e9.ik.stop();
                    _0x3c42e9.ik.fadeOut(0x32);
                    _0x3c42e9.jk.stop();
                    _0x3c42e9.jk.fadeOut(0x32);
                    _0x3c42e9.kk.stop();
                    _0x3c42e9.kk.fadeOut(0x32);
                    _0x3c42e9.lk.stop();
                    _0x3c42e9.lk.fadeOut(0x1);
                    _0x3c42e9.di.stop();
                    _0x3c42e9.di.fadeOut(0x32);
                    _0xda1c24.Le(!1);
                    _0x3c42e9.nk.stop();
                    _0x3c42e9.nk.fadeOut(0x32);
                    _0x3c42e9.ok.stop();
                    _0x3c42e9.ok.fadeOut(0x32)
                }
            }
            ;
            _0x30ff1f.prototype.J = function() {
                this.cb = 0x0;
                return this
            }
            ;
            _0x30ff1f.prototype.Fa = function() {
                console.log('re');
                _0x3ca89f.hide();
                setTimeout(function() {
                    console.log('fi_bg');
                    _0x3ca89f.fadeIn(0x1f4)
                }, 0xbb8);
                _0x596d36.hide();
                setTimeout(function() {
                    console.log('fi_aw');
                    _0x596d36.fadeIn(0x1f4)
                }, 0x1f4);
                this.cb = 0x1;
                return this
            }
            ;
            _0x30ff1f.prototype.ji = function() {
                this.rk = !1;
                this.wb.Ra();
                if (this.cb == 0x1) {
                    (window.anApp = _0x1d2f59).r.Gd()
                }
            }
            ;
            _0x30ff1f.prototype.Ra = function() {
                this.wb.Ra()
            }
            ;
            _0x30ff1f.prototype.Pa = function(_0x4b282c, _0x5cae4b) {
                this.wb.Pa(_0x4b282c, _0x5cae4b)
            }
            ;
            _0x30ff1f.prototype.Da = function(_0x41721b, _0xe8a723, _0x2d0e72) {
                var _0x4bd692 = undefined;
                var _0xb913ee = undefined;
                var _0x5718ab = undefined;
                if (_0xe8a723 >= 0x1 && _0xe8a723 <= 0xa) {
                    _0x4bd692 = window.I18N_MESSAGES["index.game.result.place.i" + _0xe8a723];
                    _0xb913ee = window.I18N_MESSAGES["index.game.result.placeInBoard"];
                    _0x5718ab = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x2d0e72).replace("{1}", _0x41721b).replace("{2}", _0x4bd692)
                } else {
                    _0x4bd692 = '';
                    _0xb913ee = window.I18N_MESSAGES["index.game.result.tryHit"];
                    _0x5718ab = window.I18N_MESSAGES["index.game.social.shareResult.messNorm"].replace('{0}', _0x2d0e72).replace('{1}', _0x41721b)
                }
                _0x542157.html(window.I18N_MESSAGES["index.game.result.your"]);
                _0x3ae1aa.html(_0x41721b);
                _0x12a5fb.html(_0x4bd692);
                _0x2d18dd.html(_0xb913ee);
                if (_0xce1435.qk) {
                    var _0x329d7d = window.I18N_MESSAGES["index.game.result.share"];
                    window.I18N_MESSAGES["index.game.social.shareResult.caption"];
                    _0x42b278.empty().append(_0x36c916(_0x329d7d, "https://wormate.io", "wormate.io", _0x5718ab, _0x5718ab, "https://wormate.io/images/og-share-img-new.jpg"))
                }
            }
            ;
            _0x30ff1f.prototype.T = function() {
                return this.sk
            }
            ;
            _0x30ff1f.prototype.U = function() {
                return this.rk
            }
            ;
            return _0x30ff1f
        }();
        var _0xd90c58 = function() {
            var _0x4e041b = $("#loading-worm-a");
            var _0x6ac137 = $("#loading-worm-b");
            var _0x1b7930 = $("#loading-worm-c");
            var _0x2834c3 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
            var _0xc794ca = _0x357dff(_0x3c42e9, function() {
                _0x3c42e9.call(this, 0x0)
            });
            _0xc794ca.prototype.a = function() {}
            ;
            _0xc794ca.prototype.ii = function() {
                _0x3c42e9.fk.stop();
                _0x3c42e9.fk.fadeOut(0x32);
                _0x3c42e9.gk.stop();
                _0x3c42e9.gk.fadeOut(0x32);
                _0x3c42e9.hk.stop();
                _0x3c42e9.hk.fadeOut(0x32);
                _0x3c42e9.ik.stop();
                _0x3c42e9.ik.fadeOut(0x32);
                _0x3c42e9.jk.stop();
                _0x3c42e9.jk.fadeOut(0x32);
                _0x3c42e9.kk.stop();
                _0x3c42e9.kk.fadeIn(0x1f4);
                _0x3c42e9.lk.stop();
                _0x3c42e9.lk.fadeIn(0x1);
                _0x3c42e9.di.stop();
                _0x3c42e9.di.fadeIn(0x1f4);
                _0xda1c24.Le(!0);
                _0x3c42e9.nk.stop();
                _0x3c42e9.nk.fadeOut(0x32);
                _0x3c42e9.ok.stop();
                _0x3c42e9.ok.fadeOut(0x32)
            }
            ;
            _0xc794ca.prototype.ji = function() {
                this.tk()
            }
            ;
            _0xc794ca.prototype.tk = function() {
                _0x4e041b.css("background-position", "100% 200%");
                for (var _0x1b58fa = 0x0; _0x1b58fa < _0x2834c3.length; _0x1b58fa++) {
                    var _0x14e390 = Math.floor(Math.random() * _0x2834c3.length);
                    var _0x362b7c = _0x2834c3[_0x1b58fa];
                    _0x2834c3[_0x1b58fa] = _0x2834c3[_0x14e390];
                    _0x2834c3[_0x14e390] = _0x362b7c
                }
                _0x4e041b.css("background-position", _0x2834c3[0x0]);
                _0x6ac137.css("background-position", _0x2834c3[0x1]);
                _0x1b7930.css("background-position", _0x2834c3[0x2])
            }
            ;
            return _0xc794ca
        }();
        var _0x21d0d2 = function() {
            $("#mm-event-text");
            var _0x86d583 = $("#mm-skin-canv");
            var _0x1b4c30 = $("#mm-skin-prev");
            var _0x5bc3c2 = $("#mm-skin-next");
            var _0xf29872 = $("#mm-skin-over");
            var _0x259cee = $("#mm-skin-over-button-list");
            var _0x465305 = $("#mm-params-nickname");
            var _0x598da7 = $("#mm-params-game-mode");
            var _0x16be0f = $("#mm-action-buttons");
            var _0xca21e9 = $("#mm-action-play");
            var _0x2d3514 = $("#mm-action-guest");
            var _0x4223cb = $("#mm-action-login");
            var _0x5e1647 = $("#mm-player-info");
            var _0x261dca = $("#mm-store");
            var _0x1fe4ee = $('#mm-leaders');
            var _0x1c1d7b = $('#mm-settings');
            var _0x5bfe26 = $("#mm-coins-box");
            var _0x4ee230 = $("#mm-player-avatar");
            var _0x318b6f = $("#mm-player-username");
            var _0xdac6e1 = $("#mm-coins-val");
            var _0x1c4c7e = $("#mm-player-exp-bar");
            var _0x3aab4d = $("#mm-player-exp-val");
            var _0x4accac = $("#mm-player-level");
            var _0x371d6e = _0x357dff(_0x3c42e9, function() {
                _0x3c42e9.call(this, 0x1);
                var _0x31a887 = window.anApp = _0x1d2f59;
                this.uk = new _0x342fa9(_0x86d583);
                _0x598da7.click(function() {
                    _0x31a887.r.Cd()
                });
                _0x86d583.click(function() {
                    if (_0x31a887.u.P()) {
                        _0x31a887.r.Cd();
                        _0x31a887.s.I(_0x31a887.s.$h)
                    }
                });
                _0x1b4c30.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.t.Ah()
                });
                _0x5bc3c2.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.t.zh()
                });
                _0x465305.keypress(function(_0x13e747) {
                    if (0xd == _0x13e747.keyCode) {
                        _0x31a887.na()
                    }
                });
                _0xca21e9.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.na()
                });
                _0x2d3514.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.na()
                });
                _0x4223cb.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.s.I(_0x31a887.s.Zh)
                });
                _0x1c1d7b.click(function() {
                    _0x31a887.r.Cd();
                    _0x31a887.s.I(_0x31a887.s.xa)
                });
                _0x5e1647.click(function() {
                    if (_0x31a887.u.P()) {
                        _0x31a887.r.Cd();
                        _0x31a887.s.I(_0x31a887.s.Yh)
                    }
                });
                _0x1fe4ee.click(function() {
                    if (_0x31a887.u.P()) {
                        _0x31a887.r.Cd();
                        _0x31a887.s.I(_0x31a887.s.Xh)
                    }
                });
                _0x261dca.click(function() {
                    if (_0x31a887.u.P()) {
                        _0x31a887.r.Cd();
                        _0x31a887.s.I(_0x31a887.s._h)
                    }
                });
                _0x5bfe26.click(function() {
                    if (_0x31a887.u.P()) {
                        _0x31a887.r.Cd();
                        _0x31a887.s.I(_0x31a887.s.Wh)
                    }
                });
                this.vk();
                this.wk();
                $("#final-continue").html("\n                         <div id=\"final-continue1\">Continue(Home)</div>\n                         ");
                $("#final-continue").after("<div id='final-replay'>Replay</div>");
                $("#final-replay").click(function() {
                    let _0x4f78cc = hoisinhnhanh;
                    if (_0x4f78cc) {
                        anApp.r.Hd();
                        anApp.sa(_0x4f78cc)
                    }
                });
                var _0x36096b = _0x2294f9(_0x409a8c.va);
                if ('ARENA' != _0x36096b && "TEAM2" != _0x36096b) {
                    _0x36096b = "ARENA"
                }
                _0x598da7.val(_0x36096b);
                console.log("Load GM: " + _0x36096b)
            });
            _0x371d6e.prototype.a = function() {
                var _0x17af89 = window.anApp = _0x1d2f59;
                var _0x3b5b2e = this;
                _0x17af89.u.V(function() {
                    _0x17af89.s.F.xk()
                });
                _0x17af89.u.Pi(function() {
                    if (_0x17af89.u.P()) {
                        _0x17af89.t.Bh(_0x17af89.u.Di(), _0x2b3509.ia);
                        _0x17af89.t.Bh(_0x17af89.u.Ei(), _0x2b3509.ja);
                        _0x17af89.t.Bh(_0x17af89.u.Fi(), _0x2b3509.ka);
                        _0x17af89.t.Bh(_0x17af89.u.Gi(), _0x2b3509.la);
                        _0x17af89.t.Bh(_0x17af89.u.Hi(), _0x2b3509.ma)
                    } else {
                        _0x17af89.t.Bh(_0x17af89.Ga(), _0x2b3509.ia);
                        _0x17af89.t.Bh(0x0, _0x2b3509.ja);
                        _0x17af89.t.Bh(0x0, _0x2b3509.ka);
                        _0x17af89.t.Bh(0x0, _0x2b3509.la);
                        _0x17af89.t.Bh(0x0, _0x2b3509.ma)
                    }
                });
                _0x17af89.u.Pi(function() {
                    _0xca21e9.toggle(_0x17af89.u.P());
                    _0x4223cb.toggle(!_0x17af89.u.P());
                    _0x2d3514.toggle(!_0x17af89.u.P());
                    _0x1fe4ee.toggle(_0x17af89.u.P());
                    _0x261dca.toggle(_0x17af89.u.P());
                    _0x5bfe26.toggle(_0x17af89.u.P());
                    if (_0x17af89.u.P()) {
                        _0xf29872.hide();
                        _0x318b6f.html(_0x17af89.u.wi());
                        _0x4ee230.attr("src", _0x17af89.u.xi());
                        _0xdac6e1.html(_0x17af89.u.zi());
                        _0x1c4c7e.width(0x64 * _0x17af89.u.Bi() / _0x17af89.u.Ci() + '%');
                        _0x3aab4d.html(_0x17af89.u.Bi() + " / " + _0x17af89.u.Ci());
                        _0x4accac.html(_0x17af89.u.Ai());
                        _0x465305.val(_0x17af89.u.ga())
                    } else {
                        _0xf29872.toggle(_0xce1435.qk && !_0x17af89.Ha());
                        _0x318b6f.html(_0x318b6f.data("guest"));
                        _0x4ee230.attr('src', "/images/guest-avatar-xmas2022.png");
                        _0xdac6e1.html('10');
                        _0x1c4c7e.width('0');
                        _0x3aab4d.html('');
                        _0x4accac.html(0x1);
                        _0x465305.val(_0x2294f9(_0x409a8c.Aa))
                    }
                });
                _0x17af89.t.xh(function() {
                    _0x3b5b2e.uk.ak(_0x17af89.t.ha(_0x2b3509.ia), !1, !1);
                    _0x3b5b2e.uk.bk(_0x17af89.t.ha(_0x2b3509.ja), !1, !1);
                    _0x3b5b2e.uk.ck(_0x17af89.t.ha(_0x2b3509.ka), !1, !1);
                    _0x3b5b2e.uk.dk(_0x17af89.t.ha(_0x2b3509.la), !1, !1);
                    _0x3b5b2e.uk.ek(_0x17af89.t.ha(_0x2b3509.ma), !1, !1)
                })
            }
            ;
            _0x371d6e.prototype.ii = function() {
                _0x3c42e9.fk.stop();
                _0x3c42e9.fk.fadeOut(0x32);
                _0x3c42e9.gk.stop();
                _0x3c42e9.gk.fadeOut(0x32);
                _0x3c42e9.hk.stop();
                _0x3c42e9.hk.fadeIn(0x1f4);
                _0x3c42e9.ik.stop();
                _0x3c42e9.ik.fadeOut(0x32);
                _0x3c42e9.jk.stop();
                _0x3c42e9.jk.fadeOut(0x32);
                _0x3c42e9.kk.stop();
                _0x3c42e9.kk.fadeOut(0x32);
                _0x3c42e9.lk.stop();
                _0x3c42e9.lk.fadeIn(0x1);
                _0x3c42e9.di.stop();
                _0x3c42e9.di.fadeIn(0x1f4);
                _0xda1c24.Le(!0);
                _0x3c42e9.nk.stop();
                _0x3c42e9.nk.fadeIn(0x1f4);
                _0x3c42e9.ok.stop();
                _0x3c42e9.ok.fadeIn(0x1f4)
            }
            ;
            _0x371d6e.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd();
                this.uk.Le(!0)
            }
            ;
            _0x371d6e.prototype.ei = function() {
                this.uk.Le(!1)
            }
            ;
            _0x371d6e.prototype.Ra = function() {
                this.uk.Ra()
            }
            ;
            _0x371d6e.prototype.Pa = function(_0x1bb832, _0x866e31) {
                this.uk.Pa()
            }
            ;
            _0x371d6e.prototype.ga = function() {
                return _0x465305.val()
            }
            ;
            _0x371d6e.prototype.D = function() {
                return _0x598da7.val()
            }
            ;
            _0x371d6e.prototype.xk = function() {
                _0x16be0f.show()
            }
            ;
            _0x371d6e.prototype.vk = function() {
                var _0xa1deaa = $("#mm-advice-cont").children();
                var _0x3f4d83 = 0x0;
                setInterval(function() {
                    _0xa1deaa.eq(_0x3f4d83).fadeOut(0x1f4, function() {
                        if (++_0x3f4d83 >= _0xa1deaa.length) {
                            _0x3f4d83 = 0x0
                        }
                        _0xa1deaa.eq(_0x3f4d83).fadeIn(0x1f4).css('display', "inline-block")
                    })
                }, 0xbb8)
            }
            ;
            _0x371d6e.prototype.wk = function() {
                function _0x13a424() {
                    _0x2a4cc7.Ka(!0);
                    setTimeout(function() {
                        _0xf29872.hide()
                    }, 0xbb8)
                }
                var _0x2a4cc7 = window.anApp = _0x1d2f59;
                if (_0xce1435.qk && !_0x2a4cc7.Ha()) {
                    _0xf29872.show();
                    var _0x48ea08 = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
                    var _0x2d12cd = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
                    var _0x32f29d = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
                    _0x259cee.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x2d12cd + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x48ea08 + "</span></a>").click(_0x13a424));
                    _0x259cee.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x32f29d + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x48ea08 + "</span></a>").click(_0x13a424))
                }
            }
            ;
            return _0x371d6e
        }();
        var _0x387d1e = function() {
            var _0x5be0df = _0x357dff(_0x3c42e9, function() {
                _0x3c42e9.call(this, 0x0)
            });
            _0x5be0df.prototype.a = function() {}
            ;
            _0x5be0df.prototype.ii = function() {
                _0x3c42e9.fk.stop();
                _0x3c42e9.fk.fadeOut(0x32);
                _0x3c42e9.gk.stop();
                _0x3c42e9.gk.fadeOut(0x32);
                _0x3c42e9.hk.stop();
                _0x3c42e9.hk.fadeOut(0x32);
                _0x3c42e9.ik.stop();
                _0x3c42e9.ik.fadeOut(0x32);
                _0x3c42e9.jk.stop();
                _0x3c42e9.jk.fadeOut(0x32);
                _0x3c42e9.kk.stop();
                _0x3c42e9.kk.fadeOut(0x32);
                _0x3c42e9.lk.stop();
                _0x3c42e9.lk.fadeOut(0x1);
                _0x3c42e9.di.stop();
                _0x3c42e9.di.fadeOut(0x32);
                _0xda1c24.Le(!1);
                _0x3c42e9.nk.stop();
                _0x3c42e9.nk.fadeOut(0x32);
                _0x3c42e9.ok.stop();
                _0x3c42e9.ok.fadeOut(0x32)
            }
            ;
            return _0x5be0df
        }();
        var _0x374e06 = function() {
            var _0xb4606b = $("#toaster-stack");
            var _0x3565ed = _0x357dff(_0x3c42e9, function() {
                _0x3c42e9.call(this, 0x0);
                this.yk = [];
                this.zk = null
            });
            _0x3565ed.prototype.a = function() {}
            ;
            _0x3565ed.prototype.ii = function() {
                _0x3c42e9.fk.stop();
                _0x3c42e9.fk.fadeOut(0x32);
                _0x3c42e9.gk.stop();
                _0x3c42e9.gk.fadeOut(0x32);
                _0x3c42e9.hk.stop();
                _0x3c42e9.hk.fadeOut(0x32);
                _0x3c42e9.ik.stop();
                _0x3c42e9.ik.fadeOut(0x32);
                _0x3c42e9.jk.stop();
                _0x3c42e9.jk.fadeIn(0x1f4);
                _0x3c42e9.kk.stop();
                _0x3c42e9.kk.fadeOut(0x32);
                _0x3c42e9.lk.stop();
                _0x3c42e9.lk.fadeIn(0x1);
                _0x3c42e9.di.stop();
                _0x3c42e9.di.fadeIn(0x1f4);
                _0xda1c24.Le(!0);
                _0x3c42e9.nk.stop();
                _0x3c42e9.nk.fadeOut(0x32);
                _0x3c42e9.ok.stop();
                _0x3c42e9.ok.fadeIn(0x1f4)
            }
            ;
            _0x3565ed.prototype.ji = function() {
                this.Ak()
            }
            ;
            _0x3565ed.prototype.mi = function() {
                return null != this.zk || this.yk.length > 0x0
            }
            ;
            _0x3565ed.prototype._ = function(_0x42244b) {
                this.yk.unshift(_0x42244b);
                setTimeout(function() {
                    (window.anApp = _0x1d2f59).s.ki()
                }, 0x0)
            }
            ;
            _0x3565ed.prototype.Ti = function(_0x18c512) {
                this.yk.push(_0x18c512);
                setTimeout(function() {
                    (window.anApp = _0x1d2f59).s.ki()
                }, 0x0)
            }
            ;
            _0x3565ed.prototype.Ak = function() {
                var _0x42bfe9 = this;
                if (null == this.zk) {
                    if (0x0 == this.yk.length) {
                        return void (window.anApp = _0x1d2f59).s.gi()
                    }
                    var _0x72df92 = this.yk.shift();
                    this.zk = _0x72df92;
                    var _0x56e244 = _0x72df92.Bk();
                    _0x56e244.hide();
                    _0x56e244.fadeIn(0x12c);
                    _0xb4606b.append(_0x56e244);
                    _0x72df92.Ck = function() {
                        _0x56e244.fadeOut(0x12c);
                        setTimeout(function() {
                            _0x56e244.remove()
                        }, 0x12c);
                        if (_0x42bfe9.zk == _0x72df92) {
                            _0x42bfe9.zk = null
                        }
                        _0x42bfe9.Ak()
                    }
                    ;
                    _0x72df92.ji()
                }
            }
            ;
            return _0x3565ed
        }();
        var _0x47ecbc = function() {
            var _0x3b00a4 = $("#popup-menu-label");
            var _0x441d45 = $("#popup-menu-coins-box");
            var _0x3b0602 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function() {
                var _0x28d7d1 = window.anApp = _0x1d2f59;
                _0x28d7d1.r.Cd();
                _0x28d7d1.s.gi()
            });
            _0x441d45.click(function() {
                var _0x128154 = window.anApp = _0x1d2f59;
                if (_0x128154.u.P()) {
                    _0x128154.r.Cd();
                    _0x128154.s.I(_0x128154.s.Wh)
                }
            });
            var _0x1b115a = _0x357dff(_0x3c42e9, function(_0x322491, _0x3c3b99) {
                _0x3c42e9.call(this, 0x1);
                this.ad = _0x322491;
                this.Dk = _0x3c3b99
            });
            _0x1b115a.prototype.a = function() {
                _0x1b115a.parent.prototype.a.call(this);
                if (!_0x1b115a.Ek) {
                    _0x1b115a.Ek = !0;
                    var _0x33fa90 = window.anApp = _0x1d2f59;
                    _0x33fa90.u.Pi(function() {
                        if (_0x33fa90.u.P()) {
                            _0x3b0602.html(_0x33fa90.u.zi())
                        } else {
                            _0x3b0602.html('0')
                        }
                    })
                }
            }
            ;
            _0x1b115a.Fk = $("#coins-view");
            _0x1b115a.Gk = $("#leaders-view");
            _0x1b115a.Hk = $("#profile-view");
            _0x1b115a.Ik = $("#settings-view");
            _0x1b115a.Jk = $("#login-view");
            _0x1b115a.Kk = $("#skins-view");
            _0x1b115a.Lk = $("#store-view");
            _0x1b115a.Mk = $("#wear-view");
            _0x1b115a.Nk = $("#withdraw-consent-view");
            _0x1b115a.Ok = $("#delete-account-view");
            _0x1b115a.Pk = $("#please-wait-view");
            _0x1b115a.prototype.ii = function() {
                _0x3c42e9.fk.stop();
                _0x3c42e9.fk.fadeOut(0xc8);
                _0x3c42e9.gk.stop();
                _0x3c42e9.gk.fadeOut(0xc8);
                _0x3c42e9.hk.stop();
                _0x3c42e9.hk.fadeOut(0xc8);
                _0x3c42e9.ik.stop();
                _0x3c42e9.ik.fadeIn(0xc8);
                _0x3c42e9.jk.stop();
                _0x3c42e9.jk.fadeOut(0xc8);
                _0x3c42e9.kk.stop();
                _0x3c42e9.kk.fadeOut(0xc8);
                _0x3c42e9.nk.stop();
                _0x3c42e9.nk.fadeIn(0xc8);
                _0x3c42e9.ok.stop();
                _0x3c42e9.ok.fadeIn(0xc8);
                _0x3b00a4.html(this.ad);
                _0x441d45.toggle(this.Dk);
                this.Qk();
                this.Rk()
            }
            ;
            _0x1b115a.prototype.Rk = function() {}
            ;
            _0x1b115a.prototype.Sk = function() {
                _0x47ecbc.Pk.stop();
                _0x47ecbc.Pk.fadeIn(0x12c)
            }
            ;
            _0x1b115a.prototype.Qk = function() {
                _0x47ecbc.Pk.stop();
                _0x47ecbc.Pk.fadeOut(0x12c)
            }
            ;
            return _0x1b115a
        }();
        var _0x5a7709 = function() {
            var _0x17fd60 = $("#store-buy-coins_125000");
            var _0x3fb6dc = $("#store-buy-coins_50000");
            var _0x1b8615 = $("#store-buy-coins_16000");
            var _0x59e3d1 = $("#store-buy-coins_7000");
            var _0x519d5f = $("#store-buy-coins_3250");
            var _0x1b9e8e = $("#store-buy-coins_1250");
            var _0x191b6d = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], !1);
                var _0x24a709 = window.anApp = _0x1d2f59;
                var _0x5b91da = this;
                _0x17fd60.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk('coins_125000')
                });
                _0x3fb6dc.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk("coins_50000")
                });
                _0x1b8615.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk("coins_16000")
                });
                _0x59e3d1.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk("coins_7000")
                });
                _0x519d5f.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk('coins_3250')
                });
                _0x1b9e8e.click(function() {
                    _0x24a709.r.Cd();
                    _0x5b91da.Tk("coins_1250")
                })
            });
            _0x191b6d.prototype.a = function() {
                _0x191b6d.parent.prototype.a.call(this)
            }
            ;
            _0x191b6d.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeIn(0xc8);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x191b6d.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd()
            }
            ;
            _0x191b6d.prototype.Tk = function(_0x179918) {}
            ;
            return _0x191b6d
        }();
        var _0x4b43c4 = function() {
            var _0x4fca91 = $("#highscore-table");
            var _0x11b028 = $("#leaders-button-level");
            var _0x43b142 = $("#leaders-button-highscore");
            var _0x421f23 = $("#leaders-button-kills");
            var _0x339a32 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], !0);
                var _0x162549 = window.anApp = _0x1d2f59;
                var _0x290417 = this;
                this.Uk = {};
                this.Vk = {
                    'Wk': {
                        'Xk': _0x11b028,
                        'Yk': 'byLevel'
                    },
                    'Zk': {
                        'Xk': _0x43b142,
                        'Yk': "byHighScore"
                    },
                    '$k': {
                        'Xk': _0x421f23,
                        'Yk': "byKillsAndHeadShots"
                    }
                };
                _0x11b028.click(function() {
                    _0x162549.r.Cd();
                    _0x290417._k(_0x290417.Vk.Wk)
                });
                _0x43b142.click(function() {
                    _0x162549.r.Cd();
                    _0x290417._k(_0x290417.Vk.Zk)
                });
                _0x421f23.click(function() {
                    _0x162549.r.Cd();
                    _0x290417._k(_0x290417.Vk.$k)
                })
            });
            _0x339a32.prototype.a = function() {
                _0x339a32.parent.prototype.a.call(this)
            }
            ;
            _0x339a32.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeIn(0xc8);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x339a32.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd();
                var _0x3b7db5 = this;
                this.Sk();
                $.get(_0x14b47a + '/pub/leaders', function(_0x1b18dd) {
                    _0x3b7db5.Uk = _0x1b18dd;
                    _0x3b7db5._k(null != _0x3b7db5.al ? _0x3b7db5.al : _0x3b7db5.Vk.Wk);
                    _0x3b7db5.Qk()
                }).done(function() {
                    _0x3b7db5.Qk()
                })
            }
            ;
            _0x339a32.prototype._k = function(_0x294864) {
                this.al = _0x294864;
                for (var _0x5e900e in this.Vk)
                    if (this.Vk.hasOwnProperty(_0x5e900e)) {
                        var _0x5ad09b = this.Vk[_0x5e900e];
                        _0x5ad09b.Xk.removeClass('pressed')
                    }
                this.al.Xk.addClass("pressed");
                var _0x9cefa2 = this.Uk[this.al.Yk];
                var _0x376ffc = '';
                for (var _0x745e8d = 0x0; _0x745e8d < _0x9cefa2.length; _0x745e8d++) {
                    var _0x373a52 = _0x9cefa2[_0x745e8d];
                    _0x376ffc += "<div class=\"table-row\"><span>" + (_0x745e8d + 0x1) + "</span><span><img src=\"" + _0x373a52.avatarUrl + "\"/></span><span>" + _0x373a52.username + "</span><span>" + _0x373a52.level + "</span><span>" + _0x373a52.highScore + "</span><span>" + _0x373a52.headShots + " / " + _0x373a52.kills + "</span></div>"
                }
                _0x4fca91.empty();
                _0x4fca91.append(_0x376ffc)
            }
            ;
            return _0x339a32
        }();
        var _0x4017f6 = function() {
            var _0x99c4f9 = $("#popup-login-gg");
            var _0x34ea4b = $("#popup-login-fb");
            var _0x284f19 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.login.tab"], !1);
                var _0x126cab = window.anApp = _0x1d2f59;
                var _0x4c2bf3 = this;
                _0x99c4f9.click(function() {
                    _0x126cab.r.Cd();
                    _0x4c2bf3.Sk();
                    _0x126cab.u.Qi(function() {
                        _0x4c2bf3.Qk()
                    });
                    setTimeout(function() {
                        _0x4c2bf3.Qk()
                    }, 0x2710);
                    _0x126cab.u.Zi()
                });
                _0x34ea4b.click(function() {
                    _0x126cab.r.Cd();
                    _0x4c2bf3.Sk();
                    _0x126cab.u.Qi(function() {
                        _0x4c2bf3.Qk()
                    });
                    setTimeout(function() {
                        _0x4c2bf3.Qk()
                    }, 0x2710);
                    _0x126cab.u.Vi()
                })
            });
            _0x284f19.prototype.a = function() {
                _0x284f19.parent.prototype.a.call(this)
            }
            ;
            _0x284f19.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeIn(0xc8);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x284f19.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd()
            }
            ;
            return _0x284f19
        }();
        var _0x131079 = function() {
            var _0x132d2e = $("#profile-avatar");
            var _0xa3157f = $("#profile-username");
            var _0x201c6a = $("#profile-experience-bar");
            var _0x1c6180 = $("#profile-experience-val");
            var _0x10d61b = $("#profile-level");
            var _0x38b75a = $("#profile-stat-highScore");
            var _0x105bd6 = $("#profile-stat-bestSurvivalTime");
            var _0x4c2483 = $("#profile-stat-kills");
            var _0x37dfc6 = $("#profile-stat-headshots");
            var _0x257463 = $("#profile-stat-gamesPlayed");
            var _0x458006 = $("#profile-stat-totalTimeSpent");
            var _0x465d50 = $("#profile-stat-registrationDate");
            var _0x29b3fb = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.profile.tab"], !0)
            });
            _0x29b3fb.prototype.a = function() {
                _0x29b3fb.parent.prototype.a.call(this)
            }
            ;
            _0x29b3fb.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeIn(0xc8);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x29b3fb.prototype.ji = function() {
                var _0xa4d733 = window.anApp = _0x1d2f59;
                _0xa4d733.r.Dd();
                var _0x3a9c18 = _0xa4d733.u.Oi();
                var _0x26550b = moment([_0x3a9c18.year, _0x3a9c18.month - 0x1, _0x3a9c18.day]).format('LL');
                _0xa3157f.html(_0xa4d733.u.wi());
                _0x132d2e.attr("src", _0xa4d733.u.xi());
                _0x201c6a.width(0x64 * _0xa4d733.u.Bi() / _0xa4d733.u.Ci() + '%');
                _0x1c6180.html(_0xa4d733.u.Bi() + " / " + _0xa4d733.u.Ci());
                _0x10d61b.html(_0xa4d733.u.Ai());
                _0x38b75a.html(_0xa4d733.u.Ii());
                _0x105bd6.html(_0x4bf7fd(_0xa4d733.u.Ji()));
                _0x4c2483.html(_0xa4d733.u.Ki());
                _0x37dfc6.html(_0xa4d733.u.Li());
                _0x257463.html(_0xa4d733.u.Mi());
                _0x458006.html(_0x4bf7fd(_0xa4d733.u.Ni()));
                _0x465d50.html(_0x26550b)
            }
            ;
            return _0x29b3fb
        }();
        var _0x31f2ed = function() {
            var _0x2b53fc = $("#settings-music-enabled-switch");
            var _0x4ba852 = $("#settings-sfx-enabled-switch");
            var _0x387569 = $("#settings-show-names-switch");
            var _0x46ff71 = $("#popup-logout");
            var _0x2e7580 = $("#popup-logout-container");
            var _0x1a95d4 = $("#popup-delete-account");
            var _0x2ecb49 = $("#popup-delete-account-container");
            var _0xbd256 = $("#popup-withdraw-consent");
            var _0x1879da = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], !1);
                var _0x18c0a1 = this;
                var _0x261e07 = window.anApp = _0x1d2f59;
                _0x2b53fc.click(function() {
                    var _0x4ef663 = !!_0x2b53fc.prop("checked");
                    _0x2240ce(_0x409a8c.Me, _0x4ef663, 0x1e);
                    _0x261e07.r.td(_0x4ef663);
                    _0x261e07.r.Cd()
                });
                _0x4ba852.click(function() {
                    var _0xaf02b4 = !!_0x4ba852.prop("checked");
                    _0x2240ce(_0x409a8c.Ne, _0xaf02b4, 0x1e);
                    _0x261e07.r.rd(_0xaf02b4);
                    _0x261e07.r.Cd()
                });
                _0x387569.click(function() {
                    _0x261e07.r.Cd()
                });
                _0x46ff71.click(function() {
                    _0x261e07.r.Cd();
                    _0x18c0a1.Sk();
                    setTimeout(function() {
                        _0x18c0a1.Qk()
                    }, 0x7d0);
                    _0x261e07.u.Wi()
                });
                _0x1a95d4.click(function() {
                    if (_0x261e07.u.P()) {
                        _0x261e07.r.Cd();
                        _0x261e07.s.I(_0x261e07.s.Vh)
                    } else {
                        _0x261e07.r.Hd()
                    }
                });
                _0xbd256.click(function() {
                    if (_0x261e07.Y()) {
                        _0x261e07.r.Cd();
                        _0x261e07.s.I(_0x261e07.s.Uh)
                    } else {
                        _0x261e07.r.Hd()
                    }
                })
            });
            _0x1879da.prototype.a = function() {
                _0x1879da.parent.prototype.a.call(this);
                var _0x5c4203 = window.anApp = _0x1d2f59;
                var _0x1d7add = undefined;
                switch (_0x2294f9(_0x409a8c.Me)) {
                case "false":
                    _0x1d7add = !1;
                    break;
                default:
                    _0x1d7add = !0
                }
                _0x2b53fc.prop("checked", _0x1d7add);
                _0x5c4203.r.td(_0x1d7add);
                var _0xd96465 = undefined;
                switch (_0x2294f9(_0x409a8c.Ne)) {
                case "false":
                    _0xd96465 = !1;
                    break;
                default:
                    _0xd96465 = !0
                }
                _0x4ba852.prop("checked", _0xd96465);
                _0x5c4203.r.rd(_0xd96465);
                var _0x5ae122 = undefined;
                switch (_0x2294f9(_0x409a8c.ya)) {
                case "false":
                    _0x5ae122 = !1;
                    break;
                default:
                    _0x5ae122 = !0
                }
                console.log("Load sPN: " + _0x5ae122);
                _0x387569.prop("checked", _0x5ae122);
                _0x5c4203.u.V(function() {
                    _0x2e7580.toggle(_0x5c4203.u.P());
                    _0x2ecb49.toggle(_0x5c4203.u.P())
                })
            }
            ;
            _0x1879da.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeIn(0xc8);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x1879da.prototype.ji = function() {
                var _0xa5aa16 = window.anApp = _0x1d2f59;
                _0xa5aa16.r.Dd();
                if (_0xa5aa16.Y()) {
                    _0xbd256.show()
                } else {
                    _0xbd256.hide()
                }
            }
            ;
            _0x1879da.prototype.wa = function() {
                return _0x387569.prop("checked")
            }
            ;
            return _0x1879da
        }();
        var _0x3bd806 = function() {
            var _0x3c0e0a = $("#store-view-canv");
            var _0x2be91c = $("#skin-description-text");
            var _0x12b332 = $("#skin-group-description-text");
            var _0x2b8195 = $("#store-locked-bar");
            var _0x7a8c4a = $("#store-locked-bar-text");
            var _0x2af3e7 = $("#store-buy-button");
            var _0x138ec0 = $("#store-item-price");
            var _0x5457ea = $("#store-groups");
            var _0xd9ea78 = $("#store-view-prev");
            var _0x5488b9 = $("#store-view-next");
            var _0x3a3dc1 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], !0);
                var _0x591d18 = this;
                var _0x631149 = window.anApp = _0x1d2f59;
                this.bl = null;
                this.cl = [];
                this.dl = {};
                this.el = new _0x342fa9(_0x3c0e0a);
                _0x2af3e7.click(function() {
                    _0x631149.r.Cd();
                    _0x591d18.fl()
                });
                _0xd9ea78.click(function() {
                    _0x631149.r.Cd();
                    _0x591d18.bl.gl()
                });
                _0x5488b9.click(function() {
                    _0x631149.r.Cd();
                    _0x591d18.bl.hl()
                })
            });
            _0x3a3dc1.prototype.a = function() {
                _0x3a3dc1.parent.prototype.a.call(this);
                var _0x5ee156 = this;
                var _0x43eb84 = window.anApp = _0x1d2f59;
                _0x43eb84.p.ca(function() {
                    var _0x4901de = _0x43eb84.p.Ac();
                    if (null != _0x4901de) {
                        _0x5ee156.cl = [];
                        for (var _0x1ba1a5 = 0x0; _0x1ba1a5 < _0x4901de.skinGroupArrayDict.length; _0x1ba1a5++) {
                            _0x5ee156.cl.push(new _0x1b85f6(_0x5ee156,_0x4901de.skinGroupArrayDict[_0x1ba1a5]))
                        }
                        _0x5ee156.dl = {};
                        for (var _0x55839c = 0x0; _0x55839c < _0x4901de.skinArrayDict.length; _0x55839c++) {
                            var _0xb1a08c = _0x4901de.skinArrayDict[_0x55839c];
                            _0x5ee156.dl[_0xb1a08c.id] = _0xb1a08c
                        }
                    }
                });
                this.il(!1);
                _0x43eb84.t.xh(function() {
                    _0x5ee156.il(!1)
                })
            }
            ;
            _0x3a3dc1.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeIn(0xc8);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x3a3dc1.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd();
                this.jl();
                this.el.Le(!0)
            }
            ;
            _0x3a3dc1.prototype.ei = function() {
                this.el.Le(!1)
            }
            ;
            _0x3a3dc1.prototype.Ra = function() {
                this.el.Ra()
            }
            ;
            _0x3a3dc1.prototype.Pa = function(_0x53dd63, _0x49d1b4) {
                this.el.Pa()
            }
            ;
            _0x3a3dc1.prototype.jl = function() {
                var _0x3ef8e7 = this;
                var _0x2b7c3f = this;
                var _0x2c5bbe = window.anApp = _0x1d2f59;
                _0x5457ea.empty();
                for (var _0xa60dd = 0x0; _0xa60dd < this.cl.length; _0xa60dd++) {
                    !function(_0x3983f6) {
                        var _0x327b6d = _0x3ef8e7.cl[_0x3983f6];
                        var _0x4fcb0f = document.createElement('li');
                        _0x5457ea.append(_0x4fcb0f);
                        var _0x90c764 = $(_0x4fcb0f);
                        _0x90c764.html(_0x327b6d.kl());
                        _0x90c764.click(function() {
                            _0x2c5bbe.r.Cd();
                            _0x2b7c3f.ll(_0x327b6d)
                        });
                        _0x327b6d.ml = _0x90c764
                    }(_0xa60dd)
                }
                if (this.cl.length > 0x0) {
                    var _0x12c909 = _0x2c5bbe.t.ha(_0x2b3509.ia);
                    for (var _0xa60dd = 0x0; _0xa60dd < this.cl.length; _0xa60dd++) {
                        var _0x18a97a = this.cl[_0xa60dd];
                        var _0x4df6bf = _0x18a97a.nl.list;
                        for (var _0x5d8e51 = 0x0; _0x5d8e51 < _0x4df6bf.length; _0x5d8e51++) {
                            if (_0x4df6bf[_0x5d8e51] == _0x12c909) {
                                _0x18a97a.ol = _0x5d8e51;
                                return void this.ll(_0x18a97a)
                            }
                        }
                    }
                    this.ll(this.cl[0x0])
                }
            }
            ;
            _0x3a3dc1.prototype.ll = function(_0x11f707) {
                if (this.bl != _0x11f707) {
                    var _0x2ceb36 = window.anApp = _0x1d2f59;
                    this.bl = _0x11f707;
                    _0x5457ea.children().removeClass("pressed");
                    if (this.bl.ml) {
                        this.bl.ml.addClass("pressed")
                    }
                    _0x12b332.html('');
                    if (null != _0x11f707.nl) {
                        var _0x23cd4c = _0x2ceb36.p.Ac().textDict[_0x11f707.nl.description];
                        if (null != _0x23cd4c) {
                            _0x12b332.html((_0x23cd4c[_0x52a5ef] ? _0x23cd4c[_0x52a5ef] : _0x23cd4c.en ? _0x23cd4c.en : _0x23cd4c.x).includes("href") ? (_0x23cd4c[_0x52a5ef] ? _0x23cd4c[_0x52a5ef] : _0x23cd4c.en ? _0x23cd4c.en : _0x23cd4c.x).replaceAll("href", "target=\"_black\" href") : _0x23cd4c[_0x52a5ef] ? _0x23cd4c[_0x52a5ef] : _0x23cd4c.en ? _0x23cd4c.en : _0x23cd4c.x)
                        }
                    }
                    this.il(!0)
                }
            }
            ;
            _0x3a3dc1.prototype.pl = function() {
                return null == this.bl ? _0x31f80f.Yg() : this.bl.ql()
            }
            ;
            _0x3a3dc1.prototype.fl = function() {
                var _0x254c11 = this;
                this.pl().ah(function(_0x4d8c0d) {
                    _0x254c11.rl(_0x4d8c0d)
                })
            }
            ;
            _0x3a3dc1.prototype.rl = function(_0xd5c131) {
                var _0x48aa9c = this;
                var _0x7bba69 = window.anApp = _0x1d2f59;
                var _0x3fb751 = this.dl[_0xd5c131].price;
                if (!(_0x7bba69.u.zi() < _0x3fb751)) {
                    this.Sk();
                    var _0x1328f7 = _0x7bba69.t.ha(_0x2b3509.ia);
                    var _0x4cbe22 = _0x7bba69.t.ha(_0x2b3509.ja);
                    var _0x1db802 = _0x7bba69.t.ha(_0x2b3509.ka);
                    var _0x56a955 = _0x7bba69.t.ha(_0x2b3509.la);
                    var _0x435931 = _0x7bba69.t.ha(_0x2b3509.ma);
                    _0x7bba69.u.Ui(_0xd5c131, _0x2b3509.ia, function() {
                        _0x7bba69.t.Bh(_0x1328f7, _0x2b3509.ia);
                        _0x7bba69.t.Bh(_0x4cbe22, _0x2b3509.ja);
                        _0x7bba69.t.Bh(_0x1db802, _0x2b3509.ka);
                        _0x7bba69.t.Bh(_0x56a955, _0x2b3509.la);
                        _0x7bba69.t.Bh(_0x435931, _0x2b3509.ma);
                        if (_0x7bba69.u.Ch(_0xd5c131, _0x2b3509.ia)) {
                            _0x7bba69.t.Bh(_0xd5c131, _0x2b3509.ia)
                        }
                        _0x48aa9c.Qk()
                    })
                }
            }
            ;
            _0x3a3dc1.prototype.il = function(_0x3a4f95) {
                var _0x392a9a = window.anApp = _0x1d2f59;
                this.el.bk(_0x392a9a.t.ha(_0x2b3509.ja), !1, !1);
                this.el.ck(_0x392a9a.t.ha(_0x2b3509.ka), !1, !1);
                this.el.dk(_0x392a9a.t.ha(_0x2b3509.la), !1, !1);
                this.el.ek(_0x392a9a.t.ha(_0x2b3509.ma), !1, !1);
                var _0x166fbb = this.pl();
                if (_0x166fbb._g()) {
                    var _0x126289 = _0x166fbb.$g();
                    var _0x17f170 = this.dl[_0x126289];
                    var _0x35a8bc = !1;
                    if (_0x392a9a.t.Ja(_0x126289, _0x2b3509.ia)) {
                        _0x2b8195.hide();
                        _0x2af3e7.hide()
                    } else {
                        if (null == _0x17f170 || 0x1 == _0x17f170.nonbuyable) {
                            _0x35a8bc = !0;
                            _0x2b8195.show();
                            _0x2af3e7.hide();
                            _0x7a8c4a.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
                            if (null != _0x17f170 && _0x17f170.nonbuyable && null != _0x17f170.nonbuyableCause) {
                                var _0x329a9f = _0x392a9a.p.Ac().textDict[_0x17f170.nonbuyableCause];
                                if (null != _0x329a9f) {
                                    _0x7a8c4a.text(_0x329a9f[_0x52a5ef] ? _0x329a9f[_0x52a5ef] : _0x329a9f.en ? _0x329a9f.en : _0x329a9f.x)
                                }
                            }
                        } else {
                            _0x2b8195.hide();
                            _0x2af3e7.show();
                            _0x138ec0.html(_0x17f170.price)
                        }
                    }
                    _0x2be91c.html('');
                    if (null != _0x17f170 && null != _0x17f170.description) {
                        var _0x4ef0cb = _0x392a9a.p.Ac().textDict[_0x17f170.description];
                        if (null != _0x4ef0cb) {
                            _0x2be91c.html((_0x4ef0cb[_0x52a5ef] ? _0x4ef0cb[_0x52a5ef] : _0x4ef0cb.en ? _0x4ef0cb.en : _0x4ef0cb.x).includes("href") ? (_0x4ef0cb[_0x52a5ef] ? _0x4ef0cb[_0x52a5ef] : _0x4ef0cb.en ? _0x4ef0cb.en : _0x4ef0cb.x).replaceAll("href", "target=\"_black\" href") : _0x4ef0cb[_0x52a5ef] ? _0x4ef0cb[_0x52a5ef] : _0x4ef0cb.en ? _0x4ef0cb.en : _0x4ef0cb.x)
                        }
                    }
                    StoreSkinID.html(_0x17f170.id);
                    this.el.ak(_0x126289, !0, _0x35a8bc);
                    if (_0x3a4f95) {
                        _0x392a9a.t.Bh(_0x126289, _0x2b3509.ia)
                    }
                }
            }
            ;
            var _0x1b85f6 = function() {
                function _0x82c52b(_0x3ba86f, _0x3a0389) {
                    this.sl = _0x3ba86f;
                    this.ol = 0x0;
                    this.nl = _0x3a0389
                }
                _0x82c52b.prototype.gl = function() {
                    if (--this.ol < 0x0) {
                        this.ol = this.nl.list.length - 0x1
                    }
                    this.sl.il(!0)
                }
                ;
                _0x82c52b.prototype.hl = function() {
                    if (++this.ol >= this.nl.list.length) {
                        this.ol = 0x0
                    }
                    this.sl.il(!0)
                }
                ;
                _0x82c52b.prototype.kl = function() {
                    let _0x5b8e46 = this.nl.name[_0x52a5ef] ? this.nl.name[_0x52a5ef] : this.nl.name.en ? this.nl.name.en : this.nl.name.x;
                    if (this.nl.img) {
                        var _0x403128 = "<img src=\"";
                        _0x403128 = _0x403128 + "https://haylamday.com" + "/images/paths/" + this.nl.img;
                        _0x5b8e46 = _0x403128 = _0x403128 + "\" height=\"43\" width=\"220\" />"
                    }
                    return _0x5b8e46
                }
                ;
                _0x82c52b.prototype.ql = function() {
                    return this.ol >= this.nl.list.length ? _0x31f80f.Yg() : _0x31f80f.Zg(this.nl.list[this.ol])
                }
                ;
                return _0x82c52b
            }();
            return _0x3a3dc1
        }();
        var _0x3fac5f = function() {
            var _0x34f276 = $("#store-go-coins-button");
            var _0x317e21 = $("#store-go-skins-button");
            var _0x48bd27 = $("#store-go-wear-button");
            var _0x1814f1 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.store.tab"], !0);
                var _0x1fae5d = window.anApp = _0x1d2f59;
                _0x34f276.click(function() {
                    _0x1fae5d.r.Cd();
                    _0x1fae5d.s.I(_0x1fae5d.s.Wh)
                });
                _0x317e21.click(function() {
                    _0x1fae5d.r.Cd();
                    _0x1fae5d.s.I(_0x1fae5d.s.$h)
                });
                _0x48bd27.click(function() {
                    _0x1fae5d.r.Cd();
                    _0x1fae5d.s.I(_0x1fae5d.s.ai)
                })
            });
            _0x1814f1.prototype.a = function() {
                _0x1814f1.parent.prototype.a.call(this)
            }
            ;
            _0x1814f1.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeIn(0xc8);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x1814f1.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd()
            }
            ;
            return _0x1814f1
        }();
        var _0x3c7bd4 = function() {
            var _0x59a492 = $("#wear-view-canv");
            var _0x34ee66 = $("#wear-description-text");
            var _0x43c3db = $("#wear-locked-bar");
            var _0x472871 = $("#wear-locked-bar-text");
            var _0x58169c = $("#wear-buy-button");
            var _0x2108ec = $("#wear-item-price");
            var _0x4289e2 = $("#wear-eyes-button");
            var _0x537032 = $("#wear-mouths-button");
            var _0x303cc1 = $("#wear-glasses-button");
            var _0x457ed2 = $("#wear-hats-button");
            var _0x82000c = $("#wear-tint-chooser");
            var _0x2079b2 = $("#wear-view-prev");
            var _0x2e7d0d = $("#wear-view-next");
            var _0x7d05ce = _0x357dff(_0x47ecbc, function() {
                var _0x3b9532 = this;
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], !0);
                var _0xbf4e72 = window.anApp = _0x1d2f59;
                var _0xcf6229 = this;
                this.tl = [];
                this.ja = new _0x265bca(this,_0x2b3509.ja,_0x4289e2);
                this.ka = new _0x265bca(this,_0x2b3509.ka,_0x537032);
                this.la = new _0x265bca(this,_0x2b3509.la,_0x303cc1);
                this.ma = new _0x265bca(this,_0x2b3509.ma,_0x457ed2);
                this.ul = null;
                this.vl = null;
                this.wl = null;
                this.xl = null;
                this.yl = null;
                this.zl = null;
                this.Al = new _0x342fa9(_0x59a492);
                _0x58169c.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.Bl()
                });
                _0x2079b2.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.ul.Cl()
                });
                _0x2e7d0d.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.ul.Dl()
                });
                _0x4289e2.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.El(_0x3b9532.ja)
                });
                _0x537032.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.El(_0x3b9532.ka)
                });
                _0x303cc1.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.El(_0x3b9532.la)
                });
                _0x457ed2.click(function() {
                    _0xbf4e72.r.Cd();
                    _0xcf6229.El(_0x3b9532.ma)
                });
                this.tl.push(this.ja);
                this.tl.push(this.ka);
                this.tl.push(this.la);
                this.tl.push(this.ma)
            });
            _0x7d05ce.prototype.a = function() {
                _0x7d05ce.parent.prototype.a.call(this);
                var _0x50ded1 = window.anApp = _0x1d2f59;
                var _0xe5ab30 = this;
                _0x50ded1.p.ca(function() {
                    var _0x14f189 = _0x50ded1.p.Ac();
                    if (null != _0x14f189) {
                        _0xe5ab30.vl = _0x14f189.eyesDict;
                        _0xe5ab30.wl = _0x14f189.mouthDict;
                        _0xe5ab30.xl = _0x14f189.glassesDict;
                        _0xe5ab30.yl = _0x14f189.hatDict;
                        _0xe5ab30.zl = _0x14f189.colorDict;
                        _0xe5ab30.ja.Fl(_0x14f189.eyesVariantArray);
                        _0xe5ab30.ja.Gl(_0xe5ab30.vl);
                        _0xe5ab30.ka.Fl(_0x14f189.mouthVariantArray);
                        _0xe5ab30.ka.Gl(_0xe5ab30.wl);
                        _0xe5ab30.la.Fl(_0x14f189.glassesVariantArray);
                        _0xe5ab30.la.Gl(_0xe5ab30.xl);
                        _0xe5ab30.ma.Fl(_0x14f189.hatVariantArray);
                        _0xe5ab30.ma.Gl(_0xe5ab30.yl)
                    }
                });
                this.il(!1);
                _0x50ded1.t.xh(function() {
                    _0xe5ab30.il(!1)
                })
            }
            ;
            _0x7d05ce.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeIn(0xc8);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x7d05ce.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd();
                this.El(null != this.ul ? this.ul : this.ja);
                this.Al.Le(!0)
            }
            ;
            _0x7d05ce.prototype.ei = function() {
                this.Al.Le(!1)
            }
            ;
            _0x7d05ce.prototype.Ra = function() {
                this.Al.Ra()
            }
            ;
            _0x7d05ce.prototype.Pa = function(_0x42ce0d, _0x41384c) {
                this.Al.Pa()
            }
            ;
            _0x7d05ce.prototype.El = function(_0x29d021) {
                this.ul = _0x29d021;
                for (var _0x2d9bb6 = 0x0; _0x2d9bb6 < this.tl.length; _0x2d9bb6++) {
                    this.tl[_0x2d9bb6].Xk.removeClass("pressed")
                }
                this.ul.Xk.addClass("pressed");
                this.ul.ii()
            }
            ;
            _0x7d05ce.prototype.Hl = function() {
                return null == this.ul ? _0x31f80f.Yg() : _0x31f80f.Zg({
                    'Lb': this.ul.ql(),
                    'rc': this.ul.rc
                })
            }
            ;
            _0x7d05ce.prototype.Bl = function() {
                var _0x15c57f = this;
                this.Hl().ah(function(_0x5a27fb) {
                    _0x15c57f.Ui(_0x5a27fb.Lb, _0x5a27fb.rc)
                })
            }
            ;
            _0x7d05ce.prototype.Ui = function(_0x4ffdc9, _0x528953) {
                var _0x5a3432 = this;
                var _0x1a25cd = window.anApp = _0x1d2f59;
                var _0x500863 = undefined;
                switch (_0x528953) {
                case _0x2b3509.ja:
                    _0x500863 = this.vl[_0x4ffdc9].price;
                    break;
                case _0x2b3509.ka:
                    _0x500863 = this.wl[_0x4ffdc9].price;
                    break;
                case _0x2b3509.la:
                    _0x500863 = this.xl[_0x4ffdc9].price;
                    break;
                case _0x2b3509.ma:
                    _0x500863 = this.yl[_0x4ffdc9].price;
                    break;
                default:
                    return
                }
                if (!(_0x1a25cd.u.zi() < _0x500863)) {
                    this.Sk();
                    var _0x1abccb = _0x1a25cd.t.ha(_0x2b3509.ia);
                    var _0x217834 = _0x1a25cd.t.ha(_0x2b3509.ja);
                    var _0x27f363 = _0x1a25cd.t.ha(_0x2b3509.ka);
                    var _0xc9aab = _0x1a25cd.t.ha(_0x2b3509.la);
                    var _0x20d631 = _0x1a25cd.t.ha(_0x2b3509.ma);
                    _0x1a25cd.u.Ui(_0x4ffdc9, _0x528953, function() {
                        _0x1a25cd.t.Bh(_0x1abccb, _0x2b3509.ia);
                        _0x1a25cd.t.Bh(_0x217834, _0x2b3509.ja);
                        _0x1a25cd.t.Bh(_0x27f363, _0x2b3509.ka);
                        _0x1a25cd.t.Bh(_0xc9aab, _0x2b3509.la);
                        _0x1a25cd.t.Bh(_0x20d631, _0x2b3509.ma);
                        if (_0x1a25cd.u.Ch(_0x4ffdc9, _0x528953)) {
                            _0x1a25cd.t.Bh(_0x4ffdc9, _0x528953)
                        }
                        _0x5a3432.Qk()
                    })
                }
            }
            ;
            _0x7d05ce.prototype.Il = function(_0x300c54, _0x4c18f2) {
                switch (_0x4c18f2) {
                case _0x2b3509.ja:
                    return this.vl[_0x300c54];
                case _0x2b3509.ka:
                    return this.wl[_0x300c54];
                case _0x2b3509.la:
                    return this.xl[_0x300c54];
                case _0x2b3509.ma:
                    return this.yl[_0x300c54]
                }
                return null
            }
            ;
            _0x7d05ce.prototype.il = function(_0x348b69) {
                var _0xea278 = window.anApp = _0x1d2f59;
                this.Al.ak(_0xea278.t.ha(_0x2b3509.ia), !1, !1);
                this.Al.bk(_0xea278.t.ha(_0x2b3509.ja), !1, !1);
                this.Al.ck(_0xea278.t.ha(_0x2b3509.ka), !1, !1);
                this.Al.dk(_0xea278.t.ha(_0x2b3509.la), !1, !1);
                this.Al.ek(_0xea278.t.ha(_0x2b3509.ma), !1, !1);
                var _0x3f3ca0 = this.Hl();
                if (_0x3f3ca0._g()) {
                    var _0x4c09c9 = _0x3f3ca0.$g();
                    var _0x1afd0d = this.Il(_0x4c09c9.Lb, _0x4c09c9.rc);
                    var _0x348950 = !1;
                    if (_0xea278.t.Ja(_0x4c09c9.Lb, _0x4c09c9.rc)) {
                        _0x43c3db.hide();
                        _0x58169c.hide()
                    } else {
                        if (null == _0x1afd0d || 0x1 == _0x1afd0d.nonbuyable) {
                            _0x348950 = !0;
                            _0x43c3db.show();
                            _0x58169c.hide();
                            _0x472871.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
                            if (null != _0x1afd0d && _0x1afd0d.nonbuyable && null != _0x1afd0d.nonbuyableCause) {
                                var _0x3c9431 = _0xea278.p.Ac().textDict[_0x1afd0d.nonbuyableCause];
                                if (null != _0x3c9431) {
                                    _0x472871.text(_0x3c9431[_0x52a5ef] ? _0x3c9431[_0x52a5ef] : _0x3c9431.en ? _0x3c9431.en : _0x3c9431.x)
                                }
                            }
                        } else {
                            _0x43c3db.hide();
                            _0x58169c.show();
                            _0x2108ec.html(_0x1afd0d.price)
                        }
                    }
                    _0x34ee66.html('');
                    if (null != _0x1afd0d && null != _0x1afd0d.description) {
                        var _0x2685a4 = _0xea278.p.Ac().textDict[_0x1afd0d.description];
                        if (null != _0x2685a4) {
                            _0x34ee66.html((_0x2685a4[_0x52a5ef] ? _0x2685a4[_0x52a5ef] : _0x2685a4.en ? _0x2685a4.en : _0x2685a4.x).includes("href") ? (_0x2685a4[_0x52a5ef] ? _0x2685a4[_0x52a5ef] : _0x2685a4.en ? _0x2685a4.en : _0x2685a4.x).replaceAll("href", "target=\"_black\" href") : _0x2685a4[_0x52a5ef] ? _0x2685a4[_0x52a5ef] : _0x2685a4.en ? _0x2685a4.en : _0x2685a4.x)
                        }
                    }
                    switch (_0x4c09c9.rc) {
                    case _0x2b3509.ja:
                        this.Al.bk(_0x4c09c9.Lb, !0, _0x348950);
                        break;
                    case _0x2b3509.ka:
                        this.Al.ck(_0x4c09c9.Lb, !0, _0x348950);
                        break;
                    case _0x2b3509.la:
                        this.Al.dk(_0x4c09c9.Lb, !0, _0x348950);
                        break;
                    case _0x2b3509.ma:
                        this.Al.ek(_0x4c09c9.Lb, !0, _0x348950)
                    }
                    if (_0x348b69) {
                        _0xea278.t.Bh(_0x4c09c9.Lb, _0x4c09c9.rc)
                    }
                }
            }
            ;
            var _0x265bca = function() {
                function _0x17e41d(_0x7b3954, _0x363d86, _0x1e584d) {
                    this.sl = _0x7b3954;
                    this.rc = _0x363d86;
                    this.Xk = _0x1e584d;
                    this.Jl = {};
                    this.Kl = [[]];
                    this.Ll = -0xa;
                    this.Ml = -0xa
                }
                _0x17e41d.prototype.Fl = function(_0x4dcdb3) {
                    this.Kl = _0x4dcdb3
                }
                ;
                _0x17e41d.prototype.Gl = function(_0x3832e9) {
                    this.Jl = _0x3832e9
                }
                ;
                _0x17e41d.prototype.ii = function() {
                    var _0x52f9fe = window.anApp = _0x1d2f59;
                    var _0x1ed908 = _0x52f9fe.t.ha(this.rc);
                    for (var _0x5a90c2 = 0x0; _0x5a90c2 < this.Kl.length; _0x5a90c2++) {
                        for (var _0x5cef81 = 0x0; _0x5cef81 < this.Kl[_0x5a90c2].length; _0x5cef81++) {
                            if (this.Kl[_0x5a90c2][_0x5cef81] == _0x1ed908) {
                                this.Nl(_0x5a90c2);
                                return void this.Ol(_0x5cef81)
                            }
                        }
                    }
                    this.Nl(0x0);
                    this.Ol(0x0)
                }
                ;
                _0x17e41d.prototype.Cl = function() {
                    var _0x195467 = this.Ll - 0x1;
                    if (_0x195467 < 0x0) {
                        _0x195467 = this.Kl.length - 0x1
                    }
                    this.Nl(_0x195467);
                    this.Ol(this.Ml % this.Kl[_0x195467].length)
                }
                ;
                _0x17e41d.prototype.Dl = function() {
                    var _0x514c45 = this.Ll + 0x1;
                    if (_0x514c45 >= this.Kl.length) {
                        _0x514c45 = 0x0
                    }
                    this.Nl(_0x514c45);
                    this.Ol(this.Ml % this.Kl[_0x514c45].length)
                }
                ;
                _0x17e41d.prototype.Nl = function(_0x52531d) {
                    var _0x538c54 = this;
                    if (!(_0x52531d < 0x0 || _0x52531d >= this.Kl.length)) {
                        this.Ll = _0x52531d;
                        _0x82000c.empty();
                        var _0x1b64f4 = this.Kl[this.Ll];
                        if (_0x1b64f4.length > 0x1) {
                            for (var _0x2277f8 = 0x0; _0x2277f8 < _0x1b64f4.length; _0x2277f8++) {
                                !function(_0x9b7f1f) {
                                    var _0x9ba590 = _0x1b64f4[_0x9b7f1f];
                                    var _0x5ec390 = _0x538c54.Jl[_0x9ba590];
                                    var _0x397e80 = '#' + _0x538c54.sl.zl[_0x5ec390.prime];
                                    var _0x44471a = $("<div style=\"border-color:" + _0x397e80 + "\"></div>");
                                    _0x44471a.click(function() {
                                        (window.anApp = _0x1d2f59).r.Cd();
                                        _0x538c54.Ol(_0x9b7f1f)
                                    });
                                    _0x82000c.append(_0x44471a)
                                }(_0x2277f8)
                            }
                        }
                    }
                }
                ;
                _0x17e41d.prototype.Ol = function(_0x4e8175) {
                    if (!(_0x4e8175 < 0x0 || _0x4e8175 >= this.Kl[this.Ll].length)) {
                        this.Ml = _0x4e8175;
                        _0x82000c.children().css("background-color", 'transparent');
                        var _0x49b5d3 = _0x82000c.children(":nth-child(" + (0x1 + _0x4e8175) + ')');
                        _0x49b5d3.css("background-color", _0x49b5d3.css("border-color"));
                        this.sl.il(!0)
                    }
                }
                ;
                _0x17e41d.prototype.ql = function() {
                    return this.Kl[this.Ll][this.Ml]
                }
                ;
                return _0x17e41d
            }();
            return _0x7d05ce
        }();
        var _0x260944 = function() {
            var _0x1c5984 = $("#withdraw-consent-yes");
            var _0x1333da = $("#withdraw-consent-no");
            var _0x4252e8 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], !1);
                var _0x272e45 = window.anApp = _0x1d2f59;
                _0x1c5984.click(function() {
                    _0x272e45.r.Cd();
                    if (_0x272e45.Y()) {
                        _0x272e45.s.I(_0x272e45.s.F);
                        _0x272e45.$(!1, !0);
                        _0x272e45.s.aa._(new _0x23d3b4())
                    } else {
                        _0x272e45.s.gi()
                    }
                });
                _0x1333da.click(function() {
                    _0x272e45.r.Cd();
                    _0x272e45.s.gi()
                })
            });
            _0x4252e8.prototype.a = function() {
                _0x4252e8.parent.prototype.a.call(this)
            }
            ;
            _0x4252e8.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeIn(0xc8);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeOut(0x32)
            }
            ;
            _0x4252e8.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Dd()
            }
            ;
            return _0x4252e8
        }();
        var _0xc0c1bb = function() {
            var _0x5ea3d0 = $("#delete-account-timer");
            var _0x1e0061 = $("#delete-account-yes");
            var _0xff503b = $("#delete-account-no");
            var _0x39af89 = _0x357dff(_0x47ecbc, function() {
                _0x47ecbc.call(this, window.I18N_MESSAGES["index.game.popup.menu.delete.tab"], !1);
                var _0xc170a = window.anApp = _0x1d2f59;
                _0x1e0061.click(function() {
                    _0xc170a.r.Cd();
                    if (_0xc170a.u.P()) {
                        _0xc170a.u.bj();
                        _0xc170a.u.Wi()
                    } else {
                        _0xc170a.s.gi()
                    }
                });
                _0xff503b.click(function() {
                    _0xc170a.r.Cd();
                    _0xc170a.s.gi()
                });
                this.Pl = []
            });
            _0x39af89.prototype.a = function() {
                _0x39af89.parent.prototype.a.call(this)
            }
            ;
            _0x39af89.prototype.Rk = function() {
                _0x47ecbc.Fk.stop();
                _0x47ecbc.Fk.fadeOut(0x32);
                _0x47ecbc.Gk.stop();
                _0x47ecbc.Gk.fadeOut(0x32);
                _0x47ecbc.Hk.stop();
                _0x47ecbc.Hk.fadeOut(0x32);
                _0x47ecbc.Jk.stop();
                _0x47ecbc.Jk.fadeOut(0x32);
                _0x47ecbc.Ik.stop();
                _0x47ecbc.Ik.fadeOut(0x32);
                _0x47ecbc.Kk.stop();
                _0x47ecbc.Kk.fadeOut(0x32);
                _0x47ecbc.Lk.stop();
                _0x47ecbc.Lk.fadeOut(0x32);
                _0x47ecbc.Mk.stop();
                _0x47ecbc.Mk.fadeOut(0x32);
                _0x47ecbc.Nk.stop();
                _0x47ecbc.Nk.fadeOut(0x32);
                _0x47ecbc.Ok.stop();
                _0x47ecbc.Ok.fadeIn(0xc8)
            }
            ;
            _0x39af89.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Hd();
                _0x1e0061.stop();
                _0x1e0061.hide();
                _0x5ea3d0.stop();
                _0x5ea3d0.show();
                _0x5ea3d0.text(".. 10 ..");
                this.Ql();
                this.Rl(function() {
                    _0x5ea3d0.text(".. 9 ..")
                }, 0x3e8);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 8 ..")
                }, 0x7d0);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 7 ..")
                }, 0xbb8);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 6 ..")
                }, 0xfa0);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 5 ..")
                }, 0x1388);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 4 ..")
                }, 0x1770);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 3 ..")
                }, 0x1b58);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 2 ..")
                }, 0x1f40);
                this.Rl(function() {
                    _0x5ea3d0.text(".. 1 ..")
                }, 0x2328);
                this.Rl(function() {
                    _0x5ea3d0.hide();
                    _0x1e0061.fadeIn(0x12c)
                }, 0x2710)
            }
            ;
            _0x39af89.prototype.Rl = function(_0x56613c, _0x5a45d8) {
                var _0x249191 = setTimeout(_0x56613c, _0x5a45d8);
                this.Pl.push(_0x249191)
            }
            ;
            _0x39af89.prototype.Ql = function() {
                for (var _0x3878a5 = 0x0; _0x3878a5 < this.Pl.length; _0x3878a5++) {
                    clearTimeout(this.Pl[_0x3878a5])
                }
                this.Pl = []
            }
            ;
            return _0x39af89
        }();
        var _0x5d37bc = function() {
            function _0x5afd70() {
                this.Ck = function() {}
            }
            _0x5afd70.prototype.Bk = function() {}
            ;
            _0x5afd70.prototype.ji = function() {}
            ;
            return _0x5afd70
        }();
        var _0xaae942 = function() {
            var _0x51e7de = _0x357dff(_0x5d37bc, function(_0xeb422f) {
                _0x5d37bc.call(this);
                var _0xb1dd28 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
                this.Sl = $("<div id=\"" + _0xb1dd28 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0xeb422f + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
                var _0x54d7f0 = this;
                this.Sl.find(".toaster-coins-close").click(function() {
                    (window.anApp = _0x1d2f59).r.Cd();
                    _0x54d7f0.Ck()
                })
            });
            _0x51e7de.prototype.Bk = function() {
                return this.Sl
            }
            ;
            _0x51e7de.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Fd()
            }
            ;
            return _0x51e7de
        }();
        var _0x482123 = function() {
            var _0x2af2c6 = _0x357dff(_0x5d37bc, function(_0x3ba2da) {
                _0x5d37bc.call(this);
                var _0x2cbf43 = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
                this.Sl = $("<div id=\"" + _0x2cbf43 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x3ba2da + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES["index.game.toaster.levelup"] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
                var _0x1165ce = this;
                this.Sl.find(".toaster-levelup-close").click(function() {
                    (window.anApp = _0x1d2f59).r.Cd();
                    _0x1165ce.Ck()
                })
            });
            _0x2af2c6.prototype.Bk = function() {
                return this.Sl
            }
            ;
            _0x2af2c6.prototype.ji = function() {
                (window.anApp = _0x1d2f59).r.Ed()
            }
            ;
            return _0x2af2c6
        }();
        var _0x23d3b4 = function() {
            var _0x46a399 = _0x357dff(_0x5d37bc, function() {
                _0x5d37bc.call(this);
                var _0xde6881 = this;
                var _0x106112 = window.anApp = _0x1d2f59;
                var _0x53231e = Date.now() + '_' + Math.floor(0x3e8 + 0x2327 * Math.random());
                this.Sl = $("<div id=\"" + _0x53231e + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + '</div></div>');
                this.Tl = this.Sl.find(".toaster-consent-close");
                this.Tl.hide();
                this.Tl.click(function() {
                    _0x106112.r.Cd();
                    if (_0x106112.Y()) {
                        _0x106112.$(!0, !0)
                    }
                    _0xde6881.Ck()
                })
            });
            _0x46a399.prototype.Bk = function() {
                return this.Sl
            }
            ;
            _0x46a399.prototype.ji = function() {
                var _0x50cf6a = this;
                var _0x160bf0 = window.anApp = _0x1d2f59;
                if (_0x160bf0.Y() && !_0x160bf0.Z()) {
                    _0x160bf0.r.Hd();
                    setTimeout(function() {
                        _0x50cf6a.Tl.fadeIn(0x12c)
                    }, 0x7d0)
                } else {
                    setTimeout(function() {
                        _0x50cf6a.Ck()
                    }, 0x0)
                }
            }
            ;
            return _0x46a399
        }();
        var _0x341ea3 = {
            "main": {
                'Ma': _0xbc859("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
                'K': _0xbc859("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
                'ra': _0x4931f2(),
                'e': 0x4,
                'oa': !1,
                'qk': !0
            },
            miniclip: {
                'Ma': _0xbc859("aqnvgcpz05orkobh", atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")),
                'K': _0xbc859("ltmolilci1iurq1i", atob("d29ybWF0ZS1pb185NzB4MjUw")),
                'ra': _0x4931f2(),
                'e': 0x4,
                'oa': !1,
                'qk': !1
            }
        };
        var _0xce1435 = _0x341ea3[window.ENV];
        if (!_0xce1435) {
            _0xce1435 = _0x341ea3.main
        }
        $(function() {
            FastClick.attach(document.body)
        });
        addEventListener("contextmenu", function(_0x3a657a) {
            _0x3a657a.preventDefault();
            _0x3a657a.stopPropagation();
            return !1
        });
        _0x73d206("//connect.facebook.net/" + _0x2e9381 + "/sdk.js", "facebook-jssdk", function() {
            FB.init({
                'appId': atob("ODYxOTI2ODUwNjE5MDUx"),
                'cookie': !0,
                'xfbml': !0,
                'status': !0,
                'version': "v8.0"
            })
        });
        _0x73d206("//apis.google.com/js/api:client.js", null, function() {
            gapi.load('auth2', function() {
                GoogleAuth = gapi.auth2.init({
                    'client_id': atob("OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t")
                })
            })
        });
        _0x1d2f59 = _0x28a040();
        _0x1d2f59.v();
        if (PhoneChecked()) {
            _0x73d206("https://haylamday.com/js/joy.min.js", 'mobileconfig', function() {
                _0x287157()
            })
        }
        ;let _0x287157 = function() {
            $("#game-canvas").after("<div id='zoom-container'>\n                                <div id='zoom-in'>-</div>\n                                <div id='zoom-out'>+</div>\n                                         </div>\n               \n                                         \n                                         \n                                         \n                                         ")
        };
        window.keyMove = 0x51;
        window.addEventListener("keydown", function(_0x138ddd) {
            console.log("event.keyCode " + _0x138ddd.keyCode);
            _0x138ddd = _0x138ddd.which || _0x138ddd.keyCode || 0x0;
            if (0x71 !== _0x138ddd && window.keyMove !== _0x138ddd || !isPlaying || PilotoAutomatico) {
                clearInterval(PilotoAutomatico);
                PilotoAutomatico = null
            } else {
                let _0x2125e8 = null.sk = 0x0;
                _0x138ddd = window.tuNewScore;
                PilotoAutomatico = setInterval(function() {
                    let _0x4ce5ad = parseFloat(null.sk);
                    null.sk = (_0x4ce5ad >= Math.PI ? -_0x4ce5ad : _0x4ce5ad) + (0x0 === _0x2125e8 ? 0x0 : Math.PI / 0x4);
                    _0x2125e8++
                }, 0x1f4 + (0x186a0 <= _0x138ddd ? 0x5 : 0x2710 <= _0x138ddd ? 0xa : 0x0))
            }
            localStorage.setItem('SaveGameXT', JSON.stringify(theoKzObjects))
        }, !1);
        theoKzObjects.loading = !0;
        var _0x534af5 = '';
        _0x534af5 += "</div>";
        _0x534af5 += '</div>';
        _0x534af5 += "</div>";
        _0x534af5 += "<div id=\"wormcerca\">";
        _0x534af5 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
        _0x534af5 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
        _0x534af5 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
        _0x534af5 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
        _0x534af5 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
        _0x534af5 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
        _0x534af5 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
        _0x534af5 += "</div>";
        _0x534af5 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
        _0x534af5 += "\n      \n         <div style=\"display:none\" id=\"zoom-container\">\n         <div id=\"zoom-out\">-</div>\n         <div id=\"zoom-in\">+</div>\n         </div>\n        <div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span></div>\n        <div class=\"worm_2\">\n        <button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button>\n        <div id=\"settingContent\">\n        \n        \n        <div class=\"container1\">\n                    <span class=\"settings_span\">Spin-Fast: </span>\n                    <input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" />\n        </div>         \n        \n        <div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div>";
        $('#game-view').append(_0x534af5);
        var _0x50102e = function(_0x1389d7) {
            if (theoKzObjects.PropertyManager) {
                _0x1389d7.skinId = theoKzObjects.PropertyManager.rh;
                _0x1389d7.eyesId = theoKzObjects.PropertyManager.sh;
                _0x1389d7.mouthId = theoKzObjects.PropertyManager.th;
                _0x1389d7.glassesId = theoKzObjects.PropertyManager.uh;
                _0x1389d7.hatId = theoKzObjects.PropertyManager.vh
            }
        };
        var _0x31fcb4 = function() {
            $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.facebook.com/WormateFriendsConnect\">Wormate Friends Connect 2024</a></div>");
            $(".column-right").append("\n          \n          <div class=\"id\" style=\"display: grid !important;\n    grid-template-columns: 4fr 1fr;\n    gap: 8.5px;\">\n          \n          \n          \n          <input type=\"text\" value=\"\" class=\"you-idd\" />\n          \n          <div class=\"you-id-copyy\" onclick=\"navigator.clipboard.writeText('').then(()=> alert('You ID :  copy!'));\">COPY</div>\n          </div>\n          ");
            $("#mm-store").after("<div id=\"mm-store\" style=\"float: right;position: relative;margin-right: 40px;min-width: 140px;\">\n            <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            \n        <div onclick=\"openPopup()\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 25px;\"> </i> Settings</div>\n        <div id=\"popup\" class=\"popup\">\n        <div class=\"phdr1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:yellow;font-size: 25px;\"></i> Wormate Friends Settings</div>\n        <button class=\"close-button\" onclick=\"closePopup()\">Close</button>\n        \n                    <div id=\"kich-hoat\">\n                \n           ID : <input type=\"text\" value=\"\" class=\"you-id\" />\n                \n                <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('').then(()=> alert('You ID  copiado! copied!'));\">COPY</button>\n                </div>   \n                \n               \n\n\n<table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Ability EatingSpeed :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-Abilityzoom-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Modo Streamer :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmode-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total Kill : </span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n        <tr>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 3 Top Score :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodebatop-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeemoj-switch\"></label>\n                    </div>\n            </td>\n            <td>\n            <div class=\"settings-lineZoom\">\n                    <span class=\"settings-labelZoom\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Sounds Headshot :</span>\n                    <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\"/>\n                    <label for=\"settings-stremingmodeheadshot-switch\"></label>\n                    </div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n                <table>\n    <tbody>\n        <tr>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Cursor</div>\n                    <div class=\"cursor-container\"><div id=\"default-cursor-btn\"><img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\"></div></div>\n            </td>\n            <td>\n            <div class=\"spancursor\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:#ff8f00;font-size: 25px;\"></i> Select Background</div>\n                    <div class=\"background-container\"></div>\n            </td>\n        </tr>\n    </tbody>\n</table>\n                \n                \n               \n                    \n                    \n                    \n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">Q</a> : Automatically turns around in one place. (Quay Äáº§u VÃ²ng TrÃ²n 1 Chá»—)</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Keys <a href=\"/\">R </a> : Quick Revive (Há»“i Sinh Nhanh)</div>\n                    \n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Note : This setting is only for activated members . Thank you !</div>\n                    <div class=\"list2\"><i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> LÆ°u Ã : Pháº§n cÃ i Ä‘áº·t nÃ y chá»‰ dÃ nh cho thÃ nh viÃªn Ä‘Ã£ kÃ­ch hoáº¡t . Xin cáº£m Æ¡n !</div>\n                    <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (KÃ­ch Hoáº¡t)</a></div></center>\n\n           \n        </div>");
            $("#loa831pibur0w4gv").replaceWith("\n           \n           \n           \n           \n           \n           <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n                 <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n           \n                <div class=\"contain-border\" id=\"contain-border\">\n                <div class=\"label\" id=\"titleSetings\">Notification</div>\n                <div class=\"bao-list1\">\n                <div class=\"list1\"><i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color:48ff00;\"></i> Zoom activation fee is $1/month .</div>\n                \n                <input type=\"text\" value=\"\" style=\"width: 236px;height: 23px;border-radius: 4px;font-size: 15px;padding: 0 6px;background-color: #fff;color: #806102;display: block;box-sizing: border-box;-webkit-appearance: none;outline: 0;border-width: 0;\">\n        <button style=\"height: 25px;float: right;margin-top: -24px;margin-right: -6px;line-height: 1.2;font-size: 14px;\" onclick=\"navigator.clipboard.writeText('').then(()=> alert('You ID  copiado! copied!'));\">Copy</button>\n                <center><div class=\"hg\"><a target=\"_blank\" href=\"https://thanhtoan.vuonghiep.com/\">Activated (KÃ­ch Hoáº¡t)</a></div></center>\n                \n             <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> Instructions for installing on IOS and iPad New 2024: <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>\n                   \n                   <div class=\"list1\"><i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color:48ff00;\"></i> HÆ°á»›ng dáº«n cÃ i Ä‘áº·t trÃªn IOS vÃ  iPad New 2024 : <a style=\"color: #0b2483; font-weight: 600;\" href=\"https://www.youtube.com/watch?v=uyHHXWKHgRw\">https://www.youtube.com/watch?v=uyHHXWKHgRw</a></div>  \n                \n                \n              </div>   \n             </div>\n             </div>\n             ");
            var _0x443d10 = document.getElementById("settingBtn");
            var _0x4b2fe1 = document.getElementById("settingContent");
            _0x443d10.addEventListener("click", function() {
                if (_0x4b2fe1.style.display === "none") {
                    _0x4b2fe1.style.display = "block"
                } else {
                    _0x4b2fe1.style.display = "none"
                }
            });
            $('#PortionSize').on('input', function() {
                theoKzObjects.PortionSize = $(this).val();
                localStorage.PotenciadorSize = theoKzObjects.PortionSize
            });
            $('#PortionAura').on("input", function() {
                theoKzObjects.PortionAura = $(this).val();
                localStorage.PotenciadorAura = theoKzObjects.PortionAura
            });
            $("#smoothCamera").on("input", function() {
                theoKzObjects.smoothCamera = $(this).val();
                localStorage.smoothCamera = 0.5
            });
            $("#FoodSize").on("input", function() {
                theoKzObjects.FoodSize = $(this).val();
                localStorage.ComidaSize = theoKzObjects.FoodSize
            });
            $('#FoodShadow').on("input", function() {
                theoKzObjects.FoodShadow = $(this).val();
                localStorage.ComidaShadow = theoKzObjects.FoodShadow
            });
            $("#mm-advice-cont").html("\n            \n            \n            \n            <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr;gap: 8.5px;\">\n            \n            \n    <input type=\"button\" value=\"F.SCREEN\" class=\"fullscreen_button\">\n    \n    \n    <input type=\"button\" value=\"RESPAWN\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n    \n    <input type=\"button\" value=\"CONTACT\" onclick=\"window.location.href='https://api.whatsapp.com/send?phone=84924623650&text=Xin%20ch%C3%A0o!%20M%C3%ACnh%20%C4%91ang%20d%C3%B9ng%20Whatsapp'\" class=\"fullscreen_contact\">\n    </div> ");
            $(".mm-merchant-cont").html("\n  <div style=\"display: flex; justify-content: center; align-items: center;\">\n    <a href=\"https://www.youtube.com/@NonaMilano\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://haylamday.com/images/hiep_img/nona.png\" alt=\"nona\" width=\"155\">\n    </a>\n    <a href=\"https://thanhtoan.vuonghiep.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/UptsCxV.png\" alt=\"wfc\" width=\"155\">\n    </a>\n  </div>");
            $(document).ready(function() {
                $(".fullscreen_button").on('click', function() {
                    if (document.fullScreenElement && null !== document.fullScreenElement || !document.mozFullScreen && !document.webkitIsFullScreen) {
                        if (document.documentElement.requestFullScreen) {
                            document.documentElement.requestFullScreen()
                        } else if (document.documentElement.mozRequestFullScreen) {
                            document.documentElement.mozRequestFullScreen()
                        } else if (document.documentElement.webkitRequestFullScreen) {
                            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                        }
                    } else if (document.cancelFullScreen) {
                        document.cancelFullScreen()
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen()
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen()
                    }
                })
            });
            $("#hoisinh").click(function() {
                let _0x3bac16 = hoisinhnhanh;
                if (_0x3bac16) {
                    anApp.r.Hd();
                    anApp.sa(_0x3bac16)
                }
            });
            $(".mm-merchant").replaceWith('');
            $(".description-text").replaceWith("\n            \n            <div class=\"contain-border\" id=\"contain-border\">\n            \n                   <div style=\";padding: 0px;margin: 0;height:338px\" class=\"description-text\">\n                    <div id=\"title\">Wormate Friends Connect</div>\n                    <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                        <a>\n                        <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag mx\"  value=\"https://i.imgur.com/JMAvuFN.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span>\n                        </a>\n                    </li>\n    \n                    <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                        <a>\n                            <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span>\n                        </a>\n                    </li>\n                    \n                    </ul>\n                    <div class=\"bao-list2\">\n                    <div class=\"gachngang\"></div>\n                    \n                    <div class=\"servers-container\">\n                    <div class=\"servers-peru\"></div>\n                    <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                    <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                    <div class=\"servers-canada\" style=\"display: none;\"></div>\n                    <div class=\"servers-germania\" style=\"display: none;\"></div>\n                    <div class=\"servers-francia\" style=\"display: none;\"></div>\n                    <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                    <div class=\"servers-japon\" style=\"display: none;\"></div>\n                    <div class=\"servers-australia\" style=\"display: none;\"></div>\n                    <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n                    \n                    \n                    </div></div>\n                    </div>\n                   \n                    \n                    ");
            $(".ui-tab").on("click", account);
            $('.flag').click(function() {
                let _0x3ea5cb = $(this).attr("value");
                theoKzObjects.flag = _0x3ea5cb;
                ctx.containerImgS.texture = ctx.onclickServer;
                retundFlagError();
                console.log(_0x3ea5cb)
            });
            for (a = 0x0; a < servers.Api_listServer.length; a++) {
                var _0x55427a = servers.Api_listServer[a].serverUrl;
                var _0x338818 = servers.Api_listServer[a].name;
                var _0x403ebe = servers.Api_listServer[a].region;
                let _0xfb3bd6 = document.createElement('p');
                _0xfb3bd6.value = _0x55427a;
                _0xfb3bd6.innerHTML = _0x338818;
                if (_0x403ebe == "peru") {
                    $(".servers-peru").prepend(_0xfb3bd6)
                } else {
                    if (_0x403ebe == 'mexico') {
                        $(".servers-mexico").prepend(_0xfb3bd6)
                    } else {
                        if (_0x403ebe == "eeuu") {
                            $(".servers-eeuu").prepend(_0xfb3bd6)
                        } else {
                            if (_0x403ebe == "canada") {
                                $(".servers-canada").prepend(_0xfb3bd6)
                            } else {
                                if (_0x403ebe == "germania") {
                                    $(".servers-germania").prepend(_0xfb3bd6)
                                } else {
                                    if (_0x403ebe == "francia") {
                                        $(".servers-francia").prepend(_0xfb3bd6)
                                    } else {
                                        if (_0x403ebe == 'singapur') {
                                            $(".servers-singapur").prepend(_0xfb3bd6)
                                        } else {
                                            if (_0x403ebe == "japon") {
                                                $(".servers-japon").prepend(_0xfb3bd6)
                                            } else {
                                                if (_0x403ebe == "australia") {
                                                    $(".servers-australia").prepend(_0xfb3bd6)
                                                } else if (_0x403ebe == 'granbretana') {
                                                    $(".servers-granbretana").prepend(_0xfb3bd6)
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                $(_0xfb3bd6).attr('id', _0x403ebe);
                $(_0xfb3bd6).attr('class', "selectSala");
                $(_0xfb3bd6).attr("value", _0x338818);
                $(_0xfb3bd6).click(function() {
                    ctx.setServer($(this).text());
                    let _0x4ee7ae = $(this).val();
                    ctx.containerImgS.texture = ctx.onclickServer;
                    retundFlagError();
                    window.server_url = _0x4ee7ae;
                    $("#mm-action-play").click();
                    $("#adbl-continue").click()
                })
            }
        };
        var _0x54a5df = function(_0x3a195b, _0x5288cb) {
            let _0x17bd0d = function(_0x3bb981, _0x493f17, _0x554389, _0x1aecd8) {
                ctx.setCountGame(_0x3bb981, _0x493f17, _0x554389, _0x1aecd8)
            };
            if (_0x3a195b === "count") {
                theoKzObjects.kill = (0x0 || 0x0) + (_0x5288cb ? 0x0 : 0x1);
                theoKzObjects.headshot = (0x0 || 0x0) + (_0x5288cb ? 0x1 : 0x0);
                theoKzObjects.totalKills = 0x0 + (_0x5288cb ? 0x0 : 0x1);
                theoKzObjects.totalHeadshots = 0x0 + (_0x5288cb ? 0x1 : 0x0);
                _0x17bd0d(0x0, 0x0, 0x0, 0x0)
            }
            if (_0x3a195b === 'open') {
                theoKzObjects.kill = 0x0;
                theoKzObjects.headshot = 0x0;
                $("#contadorKill_12").show();
                _0x17bd0d(0x0, 0x0, 0x0, 0x0)
            }
            if (_0x3a195b === 'closed') {
                pwrups = {}
            }
            if (_0x3a195b === "cerrar") {
                theoKzObjects.kill = 0x0;
                theoKzObjects.headshot = 0x0;
                theoKzObjects.totalKills = 0x0;
                theoKzObjects.totalHeadshots = 0x0
            }
        };
        if (!Number.prototype.dotFormat) {
            Number.prototype.dotFormat = function() {
                return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            }
        }
        if (!Number.prototype.dotFormatSelect2) {
            Number.prototype.dotFormatSelect2 = function() {
                return this.toString().substr(0x3, 0x2)
            }
        }
        setTimeout(function() {
            var _0x59e980 = ["fuck you", "Ä‘á»‹t", "cÃ¡i lá»“n", 'chÃ³', "Ä‘Ã©o", "lá»“n", "Ä‘Ã©o", "Ä‘á»‹t", "vÃ£i lá»“n", 'cáº·c'];
            $("#mm-action-play").on("click", function() {
                var _0x3fd0de = $("#mm-params-nickname").val();
                var _0x1c7832 = _0x59e980.some(function(_0x17cef6) {
                    return _0x3fd0de.toLowerCase().includes(_0x17cef6.toLowerCase())
                });
                if (_0x1c7832) {
                    $("#mm-params-nickname").val("VÄƒn Minh LÃªn Báº¡n")
                }
            });
            $(document).ready(function() {
                $('#getskin').click()
            });
            $("#final-share-fb").css("display", "none");
            $("#unl6wj4czdl84o9b").css("display", "none");
            $("#mm-menu-cont").css("display", "block");
            $("#mm-bottom-buttons").css("display", 'block');
            $("#mm-player-info").css("display", "block");
            $('#relojHelp').css('position', "absolute");
            $("#relojHelp").css("top", "12px");
            $("#relojHelp").css("left", '5px');
            $("#delete-account-view").css("display", "none")
        }, 0xbb8);
        var _0x3a7b4b = function _0x7f127d() {
            requestAnimationFrame(_0x7f127d);
            (window.anApp = _0x1d2f59).Pa()
        };
        _0x3a7b4b();
        var _0x213a2c = function() {
            var _0x2a9dd0 = _0x474bfa.width();
            var _0x168ad1 = _0x474bfa.height();
            var _0x359bd6 = _0x4fa068.outerWidth();
            var _0x458e3c = _0x4fa068.outerHeight();
            var _0x405757 = _0x3c8b76.outerHeight();
            var _0x5d91cf = _0x3a28eb.outerHeight();
            var _0x4ae02b = Math.min(0x1, Math.min((_0x168ad1 - _0x5d91cf - _0x405757) / _0x458e3c, _0x2a9dd0 / _0x359bd6));
            var _0x2201d5 = "translate(-50%, -50%) scale(" + _0x4ae02b + ')';
            _0x4fa068.css({
                '-webkit-transform': _0x2201d5,
                '-moz-transform': _0x2201d5,
                '-ms-transform': _0x2201d5,
                '-o-transform': _0x2201d5,
                'transform': _0x2201d5
            });
            (window.anApp = _0x1d2f59).Ra();
            window.scrollTo(0x0, 0x1)
        };
        var _0x474bfa = $("body");
        var _0x4fa068 = $('#stretch-box');
        var _0x3c8b76 = $("#markup-header");
        var _0x3a28eb = $("#markup-footer");
        _0x213a2c();
        $(window).resize(_0x213a2c)
    }();
    window.anApp.p.Bc = function() {
        var _0x5987c0 = window.anApp.p;
        var _0x1a82c4 = {};
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function(_0x4a165b) {
            _0x1a82c4 = _0x4a165b;
            fetch("https://haylamday.com/api/lan-da-vh.php").then(_0x406013 => _0x406013.json()).then(_0x52327f => {
                theoKzObjects.visibleSkin = _0x52327f.visibleSkin;
                delete _0x52327f.visibleSkin;
                for (let _0x5acf5c in _0x52327f)
                    if ('propertyList' !== _0x5acf5c) {
                        if (Array.isArray(_0x52327f[_0x5acf5c])) {
                            _0x4a165b[_0x5acf5c] = _0x4a165b[_0x5acf5c].concat(_0x52327f[_0x5acf5c])
                        } else {
                            _0x4a165b[_0x5acf5c] = {
                                ..._0x4a165b[_0x5acf5c],
                                ..._0x52327f[_0x5acf5c]
                            }
                        }
                    }
                theoKzObjects.pL = _0x52327f.propertyList;
                theoKzObjects.idSkin = _0x52327f.skinArrayDict;
                _0x5987c0.Cc(_0x4a165b)
            }
            )['catch'](function(_0x53bdc7) {
                console.error(_0x53bdc7);
                _0x5987c0.Cc(_0x1a82c4)
            })
        })
    }
    ;
    $("#background-canvas").replaceWith("\n\n<canvas id=\"background-canvas\"></canvas>\n\n");
    $(".mm-logo").replaceWith("\n    \n     <iframe style=\"width: 100%;\" src=\"https://haylamday.com/logo.html\" frameborder=\"0\" scrolling=\"no\"></iframe>");
    $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
    $("#social-buttons").replaceWith('');
    $("#markup-footer").replaceWith("\n    \n   \n    \n            <footer id=\"markup-footer\">\n            <div class=\"lang-menu\"><button class=\"lang-button\">Language â–´</button>\n            <div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a>\n<a hreflang=\"uk\" href=\"/uk/\">Ğ£ĞºÑ€Ğ°Ñ—Ğ½ÑÑŒĞºĞ°</a>\n<a hreflang=\"de\" href=\"/de/\">Deutsch</a>\n<a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a>\n<a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a>\n</div></div>\n            \n            <a class=\"link\" hreflang=\"en\" href=\"https://VuongHiep.Com\">Â© 2024 Wormate Friends Connect</a>\n            \n            <a style=\"font-size: 17px;font-weight: 600;\">VuongHiep.Com</a>\n          <a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in VungTau !</a>\n            </footer>\n\n\n\n\n\n        ")
});
function openPopup() {
    var _0x1e644b = document.getElementById("popup");
    var _0x2b51b2 = document.getElementById("overlay");
    _0x1e644b.style.display = 'block';
    _0x2b51b2.style.display = "block"
}
function closePopup() {
    var _0x24ebf2 = document.getElementById('popup');
    var _0x295f0d = document.getElementById("overlay");
    _0x24ebf2.style.display = 'none';
    _0x295f0d.style.display = 'none'
}
function account() {
    $(".mx").on("click", function() {
        $(".servers-mexico").fadeIn(0x1f4);
        $('#addflag').attr('class', "flag mx");
        $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-peru").fadeOut(0x64);
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $('.br').on("click", function() {
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64);
        $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-peru").fadeIn(0x1f4);
        $('#addflag').attr("class", "flag br")
    });
    $(".us").on("click", function() {
        $(".servers-eeuu").fadeIn(0x1f4);
        $("#addflag").attr("class", "flag us");
        $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $('.ca').on("click", function() {
        $(".servers-canada").fadeIn(0x1f4);
        $("#addflag").attr('class', "flag ca");
        $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x1f4);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $(".de").on('click', function() {
        $(".servers-germania").fadeIn(0x1f4);
        $("#addflag").attr("class", "flag de");
        $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x1f4);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $(".fr").on("click", function() {
        $(".servers-francia").fadeIn(0x1f4);
        $('#addflag').attr("class", "flag fr");
        $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $('.sg').on('click', function() {
        $(".servers-singapur").fadeIn(0x1f4);
        $("#addflag").attr('class', "flag sg");
        $(".ui-tab-inactive6").attr('class', "ui-tab-active ui-tab-inactive6");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $(".jp").on("click", function() {
        $(".servers-japon").fadeIn(0x1f4);
        $('#addflag').attr('class', "flag jp");
        $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $(".au").on("click", function() {
        $(".servers-australia").fadeIn(0x1f4);
        $("#addflag").attr("class", "flag au");
        $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive7").removeClass("ui-tab-active");
        $(".ui-tab-inactive9").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-granbretana").fadeOut(0x64)
    });
    $(".gb").on("click", function() {
        $(".servers-granbretana").fadeIn(0x1f4);
        $("#addflag").attr("class", "flag gb");
        $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
        $(".ui-tab-inactive0").removeClass("ui-tab-active");
        $(".ui-tab-inactive1").removeClass("ui-tab-active");
        $(".ui-tab-inactive2").removeClass("ui-tab-active");
        $(".ui-tab-inactive3").removeClass("ui-tab-active");
        $(".ui-tab-inactive4").removeClass("ui-tab-active");
        $(".ui-tab-inactive5").removeClass("ui-tab-active");
        $(".ui-tab-inactive6").removeClass("ui-tab-active");
        $(".ui-tab-inactive8").removeClass("ui-tab-active");
        $(".servers-eeuu").fadeOut(0x64);
        $(".servers-mexico").fadeOut(0x64);
        $(".servers-peru").fadeOut(0x64);
        $(".servers-canada").fadeOut(0x64);
        $(".servers-germania").fadeOut(0x64);
        $(".servers-francia").fadeOut(0x64);
        $(".servers-singapur").fadeOut(0x64);
        $(".servers-japon").fadeOut(0x64);
        $(".servers-australia").fadeOut(0x64)
    })
}
getPresedKey = function(_0x1647e2) {
    var _0x37eac8 = '';
    if (_0x1647e2.keyCode == 0x9) {
        _0x37eac8 += "TAB"
    } else {
        if (_0x1647e2.keyCode == 0xd) {
            _0x37eac8 += "ENTER"
        } else if (_0x1647e2.keyCode == 0x10) {
            _0x37eac8 += "SHIFT"
        } else {
            _0x37eac8 += String.fromCharCode(_0x1647e2.keyCode)
        }
    }
    return _0x37eac8
}
;
getStringKey = function(_0x5e19ef) {
    var _0x2132f3 = '';
    if (_0x5e19ef == 0x9) {
        _0x2132f3 += "TAB"
    } else {
        if (_0x5e19ef == 0xd) {
            _0x2132f3 += "ENTER"
        } else {
            if (_0x5e19ef == 0x10) {
                _0x2132f3 += "SHIFT"
            } else {
                if (_0x5e19ef == 0x20) {
                    _0x2132f3 += 'SPACE'
                } else if (_0x5e19ef == 0x1b) {
                    _0x2132f3 += "ESC"
                } else {
                    _0x2132f3 += String.fromCharCode(_0x5e19ef)
                }
            }
        }
    }
    return _0x2132f3
}
;
isValidHotkey = function(_0xfc30d7) {
    return !!(_0xfc30d7.keyCode >= 0x30 && _0xfc30d7.keyCode <= 0x39 || _0xfc30d7.keyCode >= 0x41 && _0xfc30d7.keyCode <= 0x5a || _0xfc30d7.keyCode == 0x9 || _0xfc30d7.keyCode == 0xd || _0xfc30d7.keyCode == 0x10 || _0xfc30d7.keyCode == 0x20 || _0xfc30d7.keyCode == 0x1b)
}
;
console.log("Core 2022 THEO Update 2023")
