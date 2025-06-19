var SITE_XTHOST = 'https://haylamday.com'
window.detectLog = null
const _wrmxt = {
  BETAisSkinCustom(_0x59c271) {
    return 'string' === typeof _0x59c271 && /[a-zA-Z]/.test(_0x59c271)
  },
  testSkinCustom: function (_0x3078c0) {
    return _wrmxt.BETAisSkinCustom(_0x3078c0) ? 34 || 33 : _0x3078c0
  },
  testSkinMod: function (_0x20265e) {
    return 399 <= _0x20265e && 999 > _0x20265e
  },
  testWear: function (_0x506ce6) {
    return 399 <= _0x506ce6 && 999 > _0x506ce6
  },
  isNumberValid: function (_0x464977) {
    return (
      '' !== _0x464977 &&
      null !== _0x464977 &&
      void 0 !== _0x464977 &&
      !isNaN(_0x464977)
    )
  },
  validInput: function (_0x482bbb) {
    if (!_wrmxt.testSkinMod(_0x482bbb) && !_wrmxt.BETAisSkinCustom(_0x482bbb)) {
      return _0x482bbb
    }
    try {
      let _0x3298be = $('#inputReplaceSkin').val()
      return encodeURI(_wrmxt.isNumberValid(_0x3298be) ? _0x3298be : 35)
    } catch (_0x479e8a) {
      return encodeURI(35)
    }
  },
  aload: false,
  aId: 0,
}
var inputReplaceSkin = localStorage.getItem('inputReplaceSkin'),
  hoisinhnhanh,
  PilotoAutomatico = null,
  isPlaying = false,
  pwrups = {}
window.keyMove = 81
var theoEvents = {
    eventoPrincipal: null,
    joystick: {
      positionMode: 'L',
      checked: true,
      size: 90,
      mode: 'dynamic',
      position: {
        left: '110px',
        bottom: '110px',
      },
      color: '#FF3B3B',
      pxy: 110,
    },
  },
  theoKzObjects = {
    FB_UserID: '',
    smoothCamera: 0.5,
    eat_animation: 0.0025,
    flag: 'https://i.imgur.com/EkbSd65.png',
    PortionSize: localStorage.PotenciadorSize || 2,
    PortionAura: localStorage.PotenciadorAura || 1.2,
    PortionTransparent: 0.8,
    FoodTransparent: 0.3,
    ModeStremer: false,
    ModeStremerbatop: false,
    ModeStremeremoj: false,
    ModeStremerheadshot: false,
    ModeStremersaveheadshot: false,
    arrow: false,
    KeyCodeRespawn: localStorage.KeyRespawn || 82,
    KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
    AbilityZ: false,
    FoodShadow: localStorage.ComidaShadow || 2,
    FoodSize: localStorage.ComidaSize || 2,
    headshot: 0,
    visibleSkin: [],
    pL: [],
    gamePad: theoEvents.joystick,
    mobile: false,
    loading: false,
    kill: 0,
    totalKills: 0,
    totalHeadshots: 0,
    adblock: false,
    CLIENTE_ADMIN: 1,
    CLIENTE_ACTIVO: 3,
    CLIENTE_INACTIVO: 4,
  }
saveGameLocal = localStorage.getItem('SaveGameXT')
if (saveGameLocal && 'null' !== saveGameLocal) {
  let t = JSON.parse(saveGameLocal)
  for (let e in t) theoKzObjects[e] = t[e]
}
theoKzObjects.loading = true
const PhoneChecked = function () {
    let _0x52e7ce = false
    theoKzObjects.mobile = false
    var _0x2ac00d = navigator.userAgent || navigator.vendor || window.opera
    return (
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        _0x2ac00d
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          _0x2ac00d.substr(0, 4)
        )) &&
        ((theoKzObjects.mobile = true), (_0x52e7ce = true)),
      _0x52e7ce
    )
  },
  RechekingPhone = function () {
    let _0x527a1c = false
    var _0x486265 = navigator.userAgent || navigator.vendor || window.opera
    return (
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        _0x486265
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          _0x486265.substr(0, 4)
        )) &&
        (_0x527a1c = true),
      _0x527a1c
    )
  },
  loadJoy = function (_0x2d04ed) {
    let _0x18129c
    try {
      return (
        console.log(_0x2d04ed),
        (theoKzObjects.gamePad || (theoKzObjects.gamePad = theoEvents.joystick),
        RechekingPhone() &&
          (_0x2d04ed || theoKzObjects.gamePad.checked) &&
          ((_0x18129c = nipplejs.create(theoKzObjects.gamePad)),
          _0x18129c.on('move', function (_0x5e9dcb, _0x159a8b) {
            theoEvents.eventoPrincipal.sk =
              _0x159a8b.angle.radian <= Math.PI
                ? -1 * _0x159a8b.angle.radian
                : Math.PI - (_0x159a8b.angle.radian - Math.PI)
            console.log(_0x159a8b)
          })),
        _0x18129c)
      )
    } catch (_0x12ff0b) {
      console.log(_0x12ff0b)
    }
  }
let clientes = {
    clientesVencidos: [],
    clientesActivos: [],
  },
  servers = { Api_listServer: [] }
async function loadUsers() {
  await fetch('https://25servan.github.io/Worm25/api/users.php')
    .then((_0x548d17) => _0x548d17.json())
    .then((_0x2d8575) => {
      if (_0x2d8575.success) {
        let _0x41147c = _0x2d8575.Users
        clientes.clientesActivos = _0x41147c.filter((_0x5147b2) => {
          return _0x5147b2.cliente_ID
        })
      } else {
        clientes = {
          clientesVencidos: [],
          clientesActivos: [],
        }
        alert('An error occurred while loading clients')
      }
    })
}
async function loadServers() {
  await fetch('https://25servan.github.io/Worm25/api/server.php')
    .then((_0x55aef3) => _0x55aef3.json())
    .then((_0x551e93) => {
      if (_0x551e93.success) {
        let _0x3898cc = _0x551e93.servers
        servers.Api_listServer = _0x3898cc.filter((_0x4123d3) => {
          return _0x4123d3.serverUrl
        })
      } else {
        servers = { Api_listServer: [] }
        alert('An error occurred while loading the servers')
      }
    })
}
loadUsers()
loadServers()
$('.store-view-cont').append('<div id="idReplaceSkin"></div>')
var StoreSkinID = $('#idReplaceSkin')
const ctx = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: '#FFFF00',
      fontSize: 12,
      lineJoin: 'round',
      stroke: '#EFFA45',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
    }),
    blanco: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFF',
      fontSize: 12,
      lineJoin: 'round',
      stroke: '#FFF',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    morado: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFFF00',
      fontSize: 10,
      lineJoin: 'round',
      stroke: '#FAA845',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    morado1: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFF',
      fontSize: 10,
      lineJoin: 'round',
      stroke: '#FAA845',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    amarillo: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFFF00',
      fontSize: 10,
      lineJoin: 'round',
      stroke: '#FAA845',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    amarillo1: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFF',
      fontSize: 10,
      lineJoin: 'round',
      stroke: '#FAA845',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    anheadshot: new PIXI.TextStyle({
      align: 'center',
      fill: '#FFF',
      fontSize: 0,
      lineJoin: 'round',
      stroke: '#FAA845',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
      wordWrap: true,
    }),
    keysColor: new PIXI.TextStyle({
      align: 'center',
      fill: '#fff009',
      fontSize: 10,
      lineJoin: 'round',
      stroke: '#fff009',
      strokeThickness: 1,
      whiteSpace: 'normal',
      fontWeight: 'bold',
      fontFamily: 'vuonghiep',
      wordWrap: true,
    }),
  },
}
ctx.clock = PIXI.Sprite.fromImage('https://i.imgur.com/v6szE9c.png')
ctx.clock.width = 100
ctx.clock.height = 100
ctx.clock.x = -50
ctx.clock.y = -50
ctx.value_server = new PIXI.Text('WFC', ctx.fontStyle.name)
ctx.value_server.x = 25
ctx.value_server.y = -18
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo)
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo)
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado)
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado)
theoKzObjects.ModeStremersaveheadshot
  ? ((ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1)),
    (ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1)))
  : ((ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1)),
    (ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1)))
ctx.label_hs.x = 65
ctx.label_hs.y = 100
ctx.label_kill.x = 15
ctx.label_kill.y = 100
ctx.value1_hs.x = 65
ctx.value1_hs.y = 116
ctx.value1_kill.x = 15
ctx.value1_kill.y = 116
ctx.value2_hs.x = 65
ctx.value2_hs.y = 133
ctx.value2_kill.x = 15
ctx.value2_kill.y = 133
ctx.containerCountInfo = new PIXI.Container()
ctx.containerCountInfo.x = -45
ctx.containerCountInfo.y = -52
ctx.containerCountInfo.addChild(ctx.value_server)
ctx.containerCountInfo.addChild(ctx.label_hs)
ctx.containerCountInfo.addChild(ctx.value1_hs)
ctx.containerCountInfo.addChild(ctx.value2_hs)
ctx.containerCountInfo.addChild(ctx.label_kill)
ctx.containerCountInfo.addChild(ctx.value1_kill)
ctx.containerCountInfo.addChild(ctx.value2_kill)
ctx.imgServerbase = PIXI.Texture.fromImage('https://i.imgur.com/EkbSd65.png')
ctx.borderurl = PIXI.Texture.fromImage('https://i.imgur.com/wYJAfmO0.png')
ctx.onclickServer = PIXI.Texture.fromImage(theoKzObjects.flag)
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase)
ctx.containerImgS.anchor.set(0.5)
ctx.containerImgS.x = 0
ctx.containerImgS.y = -10
ctx.containerImgS.width = 25
ctx.containerImgS.height = 20
ctx.borderImg = new PIXI.Sprite(ctx.borderurl)
ctx.borderImg.anchor.set(0.5)
ctx.borderImg.x = -2
ctx.borderImg.y = 78
ctx.borderImg.width = 110
ctx.borderImg.height = 60
ctx.setServer = function (_0x3317ec) {
  ctx.value_server.text = _0x3317ec || 'WFC'
}
ctx.setCountGame = function (_0xf30bcf, _0x35d243, _0x3111c5, _0x5ad36c) {
  ctx.value1_hs.text = _0x35d243
  ctx.value1_kill.text = _0xf30bcf
  if (theoKzObjects.ModeStremersaveheadshot) {
    ctx.value2_hs.text = _0x5ad36c
    ctx.value2_kill.text = _0x3111c5
  } else {
  }
}
;('use strict')
var _typeof =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function (_0x41c6f8) {
          return typeof _0x41c6f8
        }
      : function (_0x2d5f06) {
          return _0x2d5f06 &&
            'function' == typeof Symbol &&
            _0x2d5f06.constructor === Symbol &&
            _0x2d5f06 !== Symbol.prototype
            ? 'symbol'
            : typeof _0x2d5f06
        },
  GoogleAuth
!(function () {
  try {
    console.log(
      (function (_0x536dd2, _0x52bd69) {
        for (var _0x316f16 = 0; _0x316f16 < _0x52bd69.length; _0x316f16 += 2) {
          _0x536dd2 = _0x536dd2.replaceAll(
            _0x52bd69[_0x316f16],
            _0x52bd69[_0x316f16 + 1]
          )
        }
        return _0x536dd2
      })(
        'N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN',
        [
          'W',
          'hhhh',
          'Q',
          'ssss',
          'M',
          'mmm',
          'Y',
          'yyy',
          'H',
          'hh',
          'S',
          'ss',
          '6',
          '      ',
          '3',
          '   ',
          '2',
          '  ',
          'N',
          '\n',
        ]
      )
    )
  } catch (_0x3fb030) {}
})()
window.addEventListener('load', function () {
  function _0x22b666() {
    return (
      (function (_0x1f412d, _0x5dcf38, _0x57e58b) {
        function _0x2ac487(_0x1d0a67, _0x5478bd) {
          return (
            (void 0 === _0x1d0a67 ? 'undefined' : _typeof(_0x1d0a67)) ===
            _0x5478bd
          )
        }
        function _0x38aedf() {
          return 'function' != typeof _0x5dcf38.createElement
            ? _0x5dcf38.createElement(arguments[0])
            : _0x4de755
            ? _0x5dcf38.createElementNS.call(
                _0x5dcf38,
                'http://www.w3.org/2000/svg',
                arguments[0]
              )
            : _0x5dcf38.createElement.apply(_0x5dcf38, arguments)
        }
        var _0x42d6b0 = [],
          _0x38582e = [],
          _0x4302b3 = {
            _version: '3.3.1',
            _config: {
              classPrefix: '',
              enableClasses: true,
              enableJSClass: true,
              usePrefixes: true,
            },
            _q: [],
            on: function (_0x45b05e, _0x3298cd) {
              var _0x43896c = this
              setTimeout(function () {
                _0x3298cd(_0x43896c[_0x45b05e])
              }, 0)
            },
            addTest: function (_0x2ca4cf, _0x4b8d03, _0x482657) {
              _0x38582e.push({
                name: _0x2ca4cf,
                fn: _0x4b8d03,
                options: _0x482657,
              })
            },
            addAsyncTest: function (_0x59d101) {
              _0x38582e.push({
                name: null,
                fn: _0x59d101,
              })
            },
          },
          _0x1420d2 = function () {}
        _0x1420d2.prototype = _0x4302b3
        _0x1420d2 = new _0x1420d2()
        var _0x25005e = false
        try {
          _0x25005e =
            'WebSocket' in _0x1f412d && 2 === _0x1f412d.WebSocket.CLOSING
        } catch (_0xd20204) {}
        _0x1420d2.addTest('websockets', _0x25005e)
        var _0x1e4703 = _0x5dcf38.documentElement,
          _0x4de755 = 'svg' === _0x1e4703.nodeName.toLowerCase()
        _0x1420d2.addTest('canvas', function () {
          var _0x185150 = _0x38aedf('canvas')
          return !(!_0x185150.getContext || !_0x185150.getContext('2d'))
        })
        _0x1420d2.addTest('canvastext', function () {
          return (
            false !== _0x1420d2.canvas &&
            'function' == typeof _0x38aedf('canvas').getContext('2d').fillText
          )
        })
        ;(function () {
          var _0x29c038,
            _0x2914b5,
            _0x29586c,
            _0x3952b8,
            _0x50b201,
            _0x1d1ff5,
            _0x4cd520
          for (var _0x1ddbb0 in _0x38582e)
            if (_0x38582e.hasOwnProperty(_0x1ddbb0)) {
              if (
                ((_0x29c038 = []),
                (_0x2914b5 = _0x38582e[_0x1ddbb0]),
                _0x2914b5.name &&
                  (_0x29c038.push(_0x2914b5.name.toLowerCase()),
                  _0x2914b5.options &&
                    _0x2914b5.options.aliases &&
                    _0x2914b5.options.aliases.length))
              ) {
                for (
                  _0x29586c = 0;
                  _0x29586c < _0x2914b5.options.aliases.length;
                  _0x29586c++
                ) {
                  _0x29c038.push(
                    _0x2914b5.options.aliases[_0x29586c].toLowerCase()
                  )
                }
              }
              for (
                _0x3952b8 = _0x2ac487(_0x2914b5.fn, 'function')
                  ? _0x2914b5.fn()
                  : _0x2914b5.fn,
                  _0x50b201 = 0;
                _0x50b201 < _0x29c038.length;
                _0x50b201++
              ) {
                _0x1d1ff5 = _0x29c038[_0x50b201]
                _0x4cd520 = _0x1d1ff5.split('.')
                1 === _0x4cd520.length
                  ? (_0x1420d2[_0x4cd520[0]] = _0x3952b8)
                  : (!_0x1420d2[_0x4cd520[0]] ||
                      _0x1420d2[_0x4cd520[0]] instanceof Boolean ||
                      (_0x1420d2[_0x4cd520[0]] = new Boolean(
                        _0x1420d2[_0x4cd520[0]]
                      )),
                    (_0x1420d2[_0x4cd520[0]][_0x4cd520[1]] = _0x3952b8))
                _0x42d6b0.push((_0x3952b8 ? '' : 'no-') + _0x4cd520.join('-'))
              }
            }
        })()
        ;(function (_0xbbbfa6) {
          var _0x4a644b = _0x1e4703.className,
            _0x1193ed = _0x1420d2['_config'].classPrefix || ''
          if (
            (_0x4de755 && (_0x4a644b = _0x4a644b.baseVal),
            _0x1420d2['_config'].enableJSClass)
          ) {
            var _0x154e36 = new RegExp('(^|\\s)' + _0x1193ed + 'no-js(\\s|$)')
            _0x4a644b = _0x4a644b.replace(_0x154e36, '$1' + _0x1193ed + 'js$2')
          }
          _0x1420d2['_config'].enableClasses &&
            ((_0x4a644b += ' ' + _0x1193ed + _0xbbbfa6.join(' ' + _0x1193ed)),
            _0x4de755
              ? (_0x1e4703.className.baseVal = _0x4a644b)
              : (_0x1e4703.className = _0x4a644b))
        })(_0x42d6b0)
        delete _0x4302b3.addTest
        delete _0x4302b3.addAsyncTest
        for (
          var _0x10e28b = 0;
          _0x10e28b < _0x1420d2['_q'].length;
          _0x10e28b++
        ) {
          _0x1420d2['_q'][_0x10e28b]()
        }
        _0x1f412d.Modernizr = _0x1420d2
      })(window, document),
      Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
    )
  }
  function _0x1a8724(_0x4f4155, _0x3a2263, _0x1320dc) {
    const _0x3305be = [38, 38, 38, 120, 38, 25, 38],
      _0x238974 = [
        '#FFD500',
        '#FFC75A',
        '#00B2ED',
        '#FF4544',
        '#0094D7',
        '#CCCF81',
        '#ff0999',
      ]
    let _0x1f005c =
      _0x3305be[_0x3a2263] -
      parseInt(((0.99 == _0x1320dc ? 1 : _0x1320dc) * _0x3305be[_0x3a2263]) / 1)
    const _0x563c51 = new PIXI.TextStyle({
      align: 'center',
      fill: _0x238974[_0x3a2263],
      fontSize: 25,
      lineJoin: 'round',
      whiteSpace: 'normal',
      wordWrap: true,
      fontFamily: 'vuonghiep',
      fontWeight: 'bold',
    })
    let _0x4d5c25 = 'pwr_clock' + _0x3a2263
    !pwrups[_0x4d5c25] &&
      _0x3305be[_0x3a2263] === _0x1f005c &&
      ((pwrups[_0x4d5c25] = new PIXI.Text(_0x1f005c, _0x563c51)),
      (pwrups[_0x4d5c25].y = 61),
      _0x4f4155.Tf[_0x3a2263].addChild(pwrups[_0x4d5c25]))
    pwrups[_0x4d5c25] &&
      ((pwrups[_0x4d5c25].x =
        _0x1f005c >= 100 ? 11 : _0x1f005c >= 10 ? 18 : 26),
      (pwrups[_0x4d5c25].text = _0x1f005c),
      _0x1f005c === 0 && delete pwrups[_0x4d5c25])
  }
  if (
    ((document[_0x41a0af(1448) + 'Id'](_0x41a0af(1056)).style[_0x41a0af(1264)] =
      _0x41a0af(380)),
    !_0x22b666())
  ) {
    return void (document.getElementById(_0x41a0af(822))[_0x41a0af(1557)][
      _0x41a0af(1264)
    ] = _0x41a0af(380))
  }
  !(function () {
    function _0x1d7a2d() {
      return (window.anApp = _0x1d2f59)
    }
    function _0x2294f9(_0x248405) {
      const _0x586a1a = _0x248405 + '=',
        _0x2dc417 = document.cookie.split(';')
      for (let _0x137b7c = 0; _0x137b7c < _0x2dc417.length; _0x137b7c++) {
        let _0x4d751b = _0x2dc417[_0x137b7c]
        while (_0x4d751b.charAt(0) === ' ') {
          _0x4d751b = _0x4d751b.substring(1)
        }
        if (_0x4d751b.indexOf(_0x586a1a) === 0) {
          return _0x4d751b.substring(_0x586a1a.length, _0x4d751b.length)
        }
      }
      return ''
    }
    function _0x2240ce(_0x57e604, _0x4c0976, _0x1e9565) {
      var _0xf8cf2f = new Date()
      _0xf8cf2f.setTime(_0xf8cf2f.getTime() + 86400000 * _0x1e9565)
      var _0x451261 = 'expires=' + _0xf8cf2f.toUTCString()
      document.cookie =
        _0x57e604 + '=' + _0x4c0976 + '; ' + _0x451261 + '; path=/'
    }
    function _0x57543a(_0x5a9ef1) {
      return window.I18N_MESSAGES[_0x5a9ef1]
    }
    function _0x47a663(_0x85011d) {
      return _0x85011d[_0x52a5ef]
        ? _0x85011d[_0x52a5ef]
        : _0x85011d.en
        ? _0x85011d.en
        : _0x85011d.x
    }
    function _0x4bf7fd(_0x3f85f4) {
      var _0x3c449f = (Math.floor(_0x3f85f4) % 60).toString(),
        _0x295f4a = (Math.floor(_0x3f85f4 / 60) % 60).toString(),
        _0x153698 = (Math.floor(_0x3f85f4 / 3600) % 24).toString(),
        _0xa72d7d = Math.floor(_0x3f85f4 / 86400).toString(),
        _0x37251e = _0x57543a('util.time.days'),
        _0x6163c2 = _0x57543a('util.time.hours'),
        _0x812217 = _0x57543a('util.time.min'),
        _0x590be0 = _0x57543a('util.time.sec')
      return _0xa72d7d > 0
        ? _0xa72d7d +
            ' ' +
            _0x37251e +
            ' ' +
            _0x153698 +
            ' ' +
            _0x6163c2 +
            ' ' +
            _0x295f4a +
            ' ' +
            _0x812217 +
            ' ' +
            _0x3c449f +
            ' ' +
            _0x590be0
        : _0x153698 > 0
        ? _0x153698 +
          ' ' +
          _0x6163c2 +
          ' ' +
          _0x295f4a +
          ' ' +
          _0x812217 +
          ' ' +
          _0x3c449f +
          ' ' +
          _0x590be0
        : _0x295f4a > 0
        ? _0x295f4a + ' ' + _0x812217 + ' ' + _0x3c449f + ' ' + _0x590be0
        : _0x3c449f + ' ' + _0x590be0
    }
    function _0x19eabd(_0x1911ce) {
      return _0x1911ce.includes('href')
        ? _0x1911ce.replaceAll('href', 'target="_black" href')
        : _0x1911ce
    }
    function _0x73d206(_0x53b549, _0x13ca7d, _0x305c12) {
      var _0x31e051 = document.createElement('script'),
        _0x489731 = true
      _0x13ca7d && (_0x31e051.id = _0x13ca7d)
      _0x31e051.async = 'async'
      _0x31e051.type = 'text/javascript'
      _0x31e051.src = _0x53b549
      _0x305c12 &&
        (_0x31e051.onload = _0x31e051.onreadystatechange =
          function () {
            _0x489731 = false
            try {
              _0x305c12()
            } catch (_0x228b6f) {
              console.log(_0x228b6f)
            }
            _0x31e051.onload = _0x31e051.onreadystatechange = null
          })
      ;(document.head || document.getElementsByTagName('head')[0]).appendChild(
        _0x31e051
      )
    }
    function _0x357dff(_0x18b57d, _0x56eaf0) {
      var _0x57485c = _0x56eaf0
      return (
        (_0x57485c.prototype = Object.create(_0x18b57d.prototype)),
        (_0x57485c.prototype.constructor = _0x57485c),
        (_0x57485c.parent = _0x18b57d),
        _0x57485c
      )
    }
    function _0x30b6a2(_0x56726e) {
      return (
        (_0x56726e %= _0x2e5df6),
        _0x56726e < 0 ? _0x56726e + _0x2e5df6 : _0x56726e
      )
    }
    function _0x28358d(_0x463f6e, _0x307cd0, _0x2bebce) {
      return _0x42e6fa(_0x2bebce, _0x463f6e, _0x307cd0)
    }
    function _0x42e6fa(_0x414d3a, _0x418b42, _0x423105) {
      return _0x414d3a > _0x423105
        ? _0x423105
        : _0x414d3a < _0x418b42
        ? _0x418b42
        : Number.isFinite(_0x414d3a)
        ? _0x414d3a
        : 0.5 * (_0x418b42 + _0x423105)
    }
    function _0x320818(_0x4857c2, _0x5ac06a, _0x4663e9, _0x52cfaa) {
      return _0x5ac06a > _0x4857c2
        ? Math.min(_0x5ac06a, _0x4857c2 + _0x4663e9 * _0x52cfaa)
        : Math.max(_0x5ac06a, _0x4857c2 - _0x4663e9 * _0x52cfaa)
    }
    function _0x117727(_0x40c9b2, _0x9a1005, _0x4afea6, _0x311e50, _0xc4f1b1) {
      return (
        _0x9a1005 +
        (_0x40c9b2 - _0x9a1005) * Math.pow(1 - _0x311e50, _0x4afea6 / _0xc4f1b1)
      )
    }
    function _0x5b4a7d(_0xf76bfb, _0xbb20a8, _0x24a8e0) {
      return _0xf76bfb * (1 - _0x24a8e0) + _0xbb20a8 * _0x24a8e0
    }
    function _0x156f47(_0xf5e236, _0x1d1e19, _0x443c3f, _0x2c250b) {
      var _0x5e8b9c = _0x443c3f,
        _0x461fc9 = _0x1d1e19,
        _0x2222a6 = _0x1d1e19 + _0x2c250b
      if (null == _0xf5e236) {
        throw new TypeError('this is null or not defined')
      }
      var _0x478c53 = _0xf5e236.length >>> 0,
        _0x3f1a21 = _0x5e8b9c >> 0,
        _0x1cf3fe =
          _0x3f1a21 < 0
            ? Math.max(_0x478c53 + _0x3f1a21, 0)
            : Math.min(_0x3f1a21, _0x478c53),
        _0x6e69b9 = _0x461fc9 >> 0,
        _0x408775 =
          _0x6e69b9 < 0
            ? Math.max(_0x478c53 + _0x6e69b9, 0)
            : Math.min(_0x6e69b9, _0x478c53),
        _0x5686e4 = void 0 === _0x2222a6 ? _0x478c53 : _0x2222a6 >> 0,
        _0x4b8448 =
          _0x5686e4 < 0
            ? Math.max(_0x478c53 + _0x5686e4, 0)
            : Math.min(_0x5686e4, _0x478c53),
        _0x45a94f = Math.min(_0x4b8448 - _0x408775, _0x478c53 - _0x1cf3fe),
        _0x433731 = 1
      for (
        _0x408775 < _0x1cf3fe &&
        _0x1cf3fe < _0x408775 + _0x45a94f &&
        ((_0x433731 = -1),
        (_0x408775 += _0x45a94f - 1),
        (_0x1cf3fe += _0x45a94f - 1));
        _0x45a94f > 0;

      ) {
        _0x408775 in _0xf5e236
          ? (_0xf5e236[_0x1cf3fe] = _0xf5e236[_0x408775])
          : delete _0xf5e236[_0x1cf3fe]
        _0x408775 += _0x433731
        _0x1cf3fe += _0x433731
        _0x45a94f--
      }
      return _0xf5e236
    }
    function _0x3408d0(_0x27f8b4) {
      return _0x27f8b4.getContext('2d')
    }
    function _0x146ef5(_0x499718) {
      null != _0x499718.parent && _0x499718.parent.removeChild(_0x499718)
    }
    function _0x500ccf(_0x425608) {
      return _0x425608[parseInt(Math.random() * _0x425608.length)]
    }
    function _0x2bdaf8() {
      return Math.random().toString(36).substring(2, 15)
    }
    function _0x396102(_0x221461, _0x588ed7, _0x2a6b0a) {
      var _0x35b467 = (1 - Math.abs(2 * _0x2a6b0a - 1)) * _0x588ed7,
        _0x3199c2 = _0x35b467 * (1 - Math.abs(((_0x221461 / 60) % 2) - 1)),
        _0x372af7 = _0x2a6b0a - _0x35b467 / 2
      return 0 <= _0x221461 && _0x221461 < 60
        ? [_0x372af7 + _0x35b467, _0x372af7 + _0x3199c2, _0x372af7 + 0]
        : 60 <= _0x221461 && _0x221461 < 120
        ? [_0x372af7 + _0x3199c2, _0x372af7 + _0x35b467, _0x372af7 + 0]
        : 120 <= _0x221461 && _0x221461 < 180
        ? [_0x372af7 + 0, _0x372af7 + _0x35b467, _0x372af7 + _0x3199c2]
        : 180 <= _0x221461 && _0x221461 < 240
        ? [_0x372af7 + 0, _0x372af7 + _0x3199c2, _0x372af7 + _0x35b467]
        : 240 <= _0x221461 && _0x221461 < 300
        ? [_0x372af7 + _0x3199c2, _0x372af7 + 0, _0x372af7 + _0x35b467]
        : [_0x372af7 + _0x35b467, _0x372af7 + 0, _0x372af7 + _0x3199c2]
    }
    function _0x4931f2() {
      function _0x3579ef() {
        let _0x54b02f = theoKzObjects.adblock ? 1 : 5
        $('#adbl-1').text(_0x57543a('index.game.antiadblocker.msg1'))
        $('#adbl-2').text(_0x57543a('index.game.antiadblocker.msg2'))
        $('#adbl-3').text(_0x57543a('index.game.antiadblocker.msg3'))
        $('#adbl-4').text(
          _0x57543a('index.game.antiadblocker.msg4').replace('{0}', 10)
        )
        $('#adbl-continue span').text(
          _0x57543a('index.game.antiadblocker.continue')
        )
        $('#adbl-continue').hide()
        $('#' + _0xa24b5).fadeIn(500)
        for (
          var _0x1e6c08 = _0x54b02f, _0xca7053 = 0;
          _0xca7053 < _0x54b02f;
          _0xca7053++
        ) {
          setTimeout(function () {
            if (
              (_0x1e6c08--,
              $('#adbl-4').text(
                _0x57543a('index.game.antiadblocker.msg4').replace(
                  '{0}',
                  _0x1e6c08
                )
              ),
              0 === _0x1e6c08)
            ) {
              console.log('aipAABC')
              try {
                ga(
                  'send',
                  'event',
                  'antiadblocker',
                  window.runtimeHash + '_complete'
                )
              } catch (_0x15cfb7) {}
              $('#adbl-continue').fadeIn(200)
            }
          }, 1000 * (_0xca7053 + 1))
        }
      }
      var _0x143d93 = false,
        _0x81cafd = function () {},
        _0x6b8910 = {},
        _0xa24b5 = 'JDHnkHtYwyXyVgG9'
      return (
        $('#adbl-continue').click(function () {
          $('#' + _0xa24b5).fadeOut(500)
          _0x81cafd(false)
        }),
        (_0x6b8910.a = function (_0x24eca0) {
          if (((_0x81cafd = _0x24eca0), !_0x143d93)) {
            try {
              aiptag.cmd.player.push(function () {
                aiptag.adplayer = new aipPlayer({
                  AD_WIDTH: 960,
                  AD_HEIGHT: 540,
                  AD_FULLSCREEN: true,
                  AD_CENTERPLAYER: false,
                  LOADING_TEXT: 'loading advertisement',
                  PREROLL_ELEM: function () {
                    return document.getElementById('1eaom01c3pxu9wd3')
                  },
                  AIP_COMPLETE: function (_0x551474) {
                    console.log('aipC')
                    _0x81cafd(true)
                    $('#1eaom01c3pxu9wd3').hide()
                    $('#' + _0xa24b5).hide()
                    try {
                      ga(
                        'send',
                        'event',
                        'preroll',
                        window.runtimeHash + '_complete'
                      )
                    } catch (_0x31edc5) {}
                  },
                  AIP_REMOVE: function () {},
                })
              })
              _0x143d93 = true
            } catch (_0xd415cf) {}
          }
        }),
        (_0x6b8910.b = function () {
          if (void 0 !== aiptag.adplayer) {
            console.log('aipS')
            try {
              ga('send', 'event', 'preroll', window.runtimeHash + '_request')
            } catch (_0x342501) {}
            _0x3579ef()
          } else {
            console.log('aipAABS')
            try {
              ga(
                'send',
                'event',
                'antiadblocker',
                window.runtimeHash + '_start'
              )
            } catch (_0x467d7e) {}
            _0x3579ef()
          }
        }),
        _0x6b8910
      )
    }
    function _0xbc859(_0x5c7872, _0x35a389) {
      var _0x1caa94 = $('#' + _0x5c7872),
        _0x26d090 = _0x35a389,
        _0x1707d0 = {},
        _0x15ccc5 = false
      return (
        (_0x1707d0.a = function () {
          if (!_0x15ccc5) {
            _0x1caa94.empty()
            _0x1caa94.append("<div id='" + _0x26d090 + "'></div>")
            try {
              try {
                ga('send', 'event', 'banner', window.runtimeHash + '_display')
              } catch (_0x1d9d12) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0x26d090)
              })
              _0x15ccc5 = true
            } catch (_0x50c536) {}
          }
        }),
        (_0x1707d0.c = function () {
          try {
            try {
              ga('send', 'event', 'banner', window.runtimeHash + '_refresh')
            } catch (_0x136041) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0x26d090)
            })
          } catch (_0x505d5a) {}
        }),
        _0x1707d0
      )
    }
    function _0x28a040() {
      function _0x2e3c0c(_0x3b5acb) {
        var _0x4d00db = _0x3b5acb + 37 * Math.floor(65535 * Math.random())
        _0x2240ce(_0x409a8c.d, _0x4d00db, 30)
      }
      function _0xaf30a9() {
        return parseInt(_0x2294f9(_0x409a8c.d)) % 37
      }
      return (function () {
        var _0x2f8369 = _0xaf30a9()
        console.log('init1 pSC: ' + _0x2f8369)
        !(_0x2f8369 >= 0 && _0x2f8369 < _0xce1435.e) &&
          ((_0x2f8369 = Math.max(0, _0xce1435.e - 2)),
          console.log('init2 pSC: ' + _0x2f8369))
        var _0x4ee8e0 = {
          f: _0xce1435,
          g: false,
          i: Date.now(),
          j: 0,
          k: 0,
          l: null,
          m: _0x2e9381,
          n: _0x52a5ef,
          o: null,
          p: null,
          q: null,
          r: null,
          s: null,
          t: null,
          u: null,
          p: new _0xe69664(),
          q: new _0x668d12(),
          r: new _0xdc46a6(),
          s: new _0x5dc209(),
          t: new _0xf5e704(),
          u: new _0x3556f1(),
          o: new _0x5e8a85(),
          g: _0x1485e6,
          j: Date.now(),
          k: _0x4ee8e0.j - _0x4ee8e0.i,
          i: _0x4ee8e0.j,
        }
        _0x1d2f59 = _0x4ee8e0
        try {
          navigator &&
            navigator.geolocation &&
            navigator.geolocation.getCurrentPosition(
              function (_0x54f73e) {
                if (void 0 !== _0x54f73e.coords) {
                  var _0x51992c = _0x54f73e.coords
                  void 0 !== _0x51992c.latitude &&
                    void 0 !== _0x51992c.longitude &&
                    (_0x4ee8e0.l = _0x54f73e)
                }
              },
              function (_0x4f87da) {}
            )
        } catch (_0x3c2268) {}
        return (
          (_0x4ee8e0.v = function () {
            _0x4ee8e0.o.z = new _0x315874(_0x4ee8e0.o)
            _0x4ee8e0.a()
          }),
          (_0x4ee8e0.a = function () {
            try {
              ga('send', 'event', 'app', window.runtimeHash + '_init')
            } catch (_0x1868af) {}
            _0x4ee8e0.o.A = function () {
              _0x4ee8e0.o.B()
            }
            _0x4ee8e0.o.C = function () {
              var _0xc1f2cc = _0x4ee8e0.s.F.D()
              try {
                ga(
                  'send',
                  'event',
                  'game',
                  window.runtimeHash + '_start',
                  _0xc1f2cc
                )
              } catch (_0x193887) {}
              _0x4ee8e0.r.G(_0xdc46a6.AudioState.H)
              _0x4ee8e0.s.I(_0x4ee8e0.s.H.J())
            }
            _0x4ee8e0.o.B = function () {
              try {
                ga('send', 'event', 'game', window.runtimeHash + '_end')
              } catch (_0xbf44f6) {}
              $('body').height() >= 430 && _0x4ee8e0.f.K.c()
              _0x4ee8e0.p.L()
              ;(function () {
                var _0x26f914 = Math.floor(_0x4ee8e0.o.N.M),
                  _0x185a17 = _0x4ee8e0.o.O
                _0x4ee8e0.u.P()
                  ? _0x4ee8e0.u.Q(function () {
                      _0x4ee8e0.R(_0x26f914, _0x185a17)
                    })
                  : _0x4ee8e0.R(_0x26f914, _0x185a17)
              })()
            }
            _0x4ee8e0.o.S = function (_0x4250b4) {
              _0x4250b4(_0x4ee8e0.s.H.T(), _0x4ee8e0.s.H.U())
            }
            _0x4ee8e0.u.V(function () {
              if (
                (_0x4ee8e0.p.W &&
                  (_0x4ee8e0.r.G(_0xdc46a6.AudioState.F),
                  _0x4ee8e0.s.I(_0x4ee8e0.s.F)),
                _0x4ee8e0.u.P())
              ) {
                try {
                  var _0x461c93 = _0x4ee8e0.u.X()
                  ga('set', 'userId', _0x461c93)
                } catch (_0x27a83b) {}
              }
              _0x4ee8e0.Y() && _0x4ee8e0.u.P() && !_0x4ee8e0.u.Z()
                ? (_0x4ee8e0['$'](false, false),
                  _0x4ee8e0.s.aa['_'](new _0x23d3b4()))
                : _0x4ee8e0.ba(true)
            })
            _0x4ee8e0.p.ca(function () {
              _0x4ee8e0.r.G(_0xdc46a6.AudioState.F)
              _0x4ee8e0.s.I(_0x4ee8e0.s.F)
            })
            _0x4ee8e0.q.a(function () {
              _0x4ee8e0.o.a()
              _0x4ee8e0.r.a()
              _0x4ee8e0.s.a()
              _0x4ee8e0.t.a()
              _0x4ee8e0.p.a()
              _0x4ee8e0.u.a()
              _0x4ee8e0.Y() && !_0x4ee8e0.Z()
                ? _0x4ee8e0.s.aa['_'](new _0x23d3b4())
                : _0x4ee8e0.ba(true)
            })
          }),
          (_0x4ee8e0.da = function (_0x58686e) {
            if (_0x4ee8e0.u.P()) {
              var _0x246c7b = _0x4ee8e0.u.ea()
              $.get(
                _0x14b47a +
                  '/pub/wuid/' +
                  _0x246c7b +
                  '/consent/change?value=' +
                  encodeURI(_0x58686e),
                function (_0x298b5a) {}
              )
            }
          }),
          (_0x4ee8e0.fa = function (_0x19979a) {
            var _0x3c5b11 = _0x4ee8e0.u.ea(),
              _0x451b4b = _0x4ee8e0.s.F.D(),
              _0x1b95d3 = _0x4ee8e0.s.F.ga(),
              _0x3648fa = _0x4ee8e0.t.ha(_0x2b3509.ia),
              _0x2f2fa9 = _0x4ee8e0.t.ha(_0x2b3509.ja),
              _0xd94f64 = _0x4ee8e0.t.ha(_0x2b3509.ka),
              _0x54141a = _0x4ee8e0.t.ha(_0x2b3509.la),
              _0xf152c0 = _0x4ee8e0.t.ha(_0x2b3509.ma),
              _0x3d2068 = 0
            if (null != _0x4ee8e0.l) {
              var _0x499b14 = _0x4ee8e0.l.coords.latitude,
                _0x1ab160 = _0x4ee8e0.l.coords.longitude
              _0x3d2068 =
                1 |
                (Math.max(
                  0,
                  Math.min(32767, ((_0x499b14 + 90) / 180) * 32768)
                ) <<
                  1) |
                (Math.max(
                  0,
                  Math.min(65535, ((_0x1ab160 + 180) / 360) * 65536)
                ) <<
                  16)
            }
            _wrmxt.testSkinCustom(_0x3648fa)
            let _0x4a3872 =
              'x' +
              (9999 < _0x3648fa
                ? '0000'
                : _0x3648fa.toString().padStart(4, 0)) +
              (999 < _0xf152c0 ? '000' : _0xf152c0.toString().padStart(3, 0)) +
              (999 < _0x2f2fa9 ? '000' : _0x2f2fa9.toString().padStart(3, 0)) +
              (999 < _0xd94f64 ? '000' : _0xd94f64.toString().padStart(3, 0))
            _0x1b95d3 =
              (32 <= _0x1b95d3.length
                ? _0x1b95d3.substr(0, 16)
                : _0x1b95d3.substr(0, 16).padEnd(16, '_')) + _0x4a3872
            _0x1b95d3 = _0x1b95d3.trim()
            console.log(_0x1b95d3)
            var _0x40b8ef =
              _0x14b47a +
              '/pub/wuid/' +
              _0x3c5b11 +
              '/start?gameMode=' +
              encodeURI(_0x451b4b) +
              '&gh=' +
              _0x3d2068 +
              '&nickname=' +
              encodeURI(_0x1b95d3) +
              '&skinId=' +
              _wrmxt.validInput(_0x3648fa) +
              '&eyesId=' +
              encodeURI(_0x2f2fa9) +
              '&mouthId=' +
              encodeURI(_0xd94f64) +
              '&glassesId=' +
              encodeURI(_0x54141a) +
              '&hatId=' +
              encodeURI(_0xf152c0)
            console.log('urlRequest: ' + _0x40b8ef)
            $.get(_0x40b8ef, function (_0x44730d) {
              var _0x443fe0 = _0x44730d.server_url
              _0x19979a(_0x443fe0)
            })
          }),
          (_0x4ee8e0.na = function () {
            _0x2f8369++
            console.log('start pSC: ' + _0x2f8369)
            !_0x4ee8e0.f.oa && _0x2f8369 >= _0x4ee8e0.f.e
              ? (_0x4ee8e0.s.I(_0x4ee8e0.s.pa),
                _0x4ee8e0.r.G(_0xdc46a6.AudioState.qa),
                _0x4ee8e0.f.ra.b())
              : (_0x2e3c0c(_0x2f8369), _0x4ee8e0.sa())
          }),
          (_0x4ee8e0.sa = function (_0x466ef2) {
            if (_0x4ee8e0.o.ta()) {
              _0x4ee8e0.s.I(_0x4ee8e0.s.ua)
              _0x4ee8e0.r.G(_0xdc46a6.AudioState.ua)
              var _0x2f7e6e = _0x4ee8e0.s.F.D()
              _0x2240ce(_0x409a8c.va, _0x2f7e6e, 30)
              console.log('save gm: ' + _0x2f7e6e)
              var _0x3fda7c = _0x4ee8e0.s.xa.wa()
              if (
                (_0x2240ce(_0x409a8c.ya, _0x3fda7c, 30),
                console.log('save sPN: ' + _0x3fda7c),
                _0x4ee8e0.u.P())
              ) {
                _0x4ee8e0.fa(function (_0x383c57) {
                  hoisinhnhanh = _0x466ef2 ? _0x466ef2 : _0x383c57
                  _0x4ee8e0.o.za(
                    window.server_url || _0x383c57,
                    _0x4ee8e0.u.ea()
                  )
                })
              } else {
                var _0x19f32f = _0x4ee8e0.s.F.ga()
                _0x2240ce(_0x409a8c.Aa, _0x19f32f, 30)
                var _0x2e3fa4 = _0x4ee8e0.t.ha(_0x2b3509.ia)
                _0x2240ce(_0x409a8c.Ba, _0x2e3fa4, 30)
                _0x4ee8e0.fa(function (_0x23e237) {
                  hoisinhnhanh = _0x466ef2 ? _0x466ef2 : _0x23e237
                  _0x4ee8e0.o.Ca(_0x23e237, _0x19f32f, _0x2e3fa4)
                })
              }
            }
          }),
          (_0x4ee8e0.R = function (_0x44298d, _0x1ab34f) {
            var _0x49bc6d = _0x4ee8e0.s.F.ga()
            _0x4ee8e0.s.H.Da(_0x44298d, _0x1ab34f, _0x49bc6d)
            _0x4ee8e0.r.G(_0xdc46a6.AudioState.Ea)
            _0x4ee8e0.s.I(_0x4ee8e0.s.H.Fa())
          }),
          (_0x4ee8e0.Ga = function () {
            if (!_0x4ee8e0.Ha()) {
              return _0x4ee8e0.t.Ia()
            }
            var _0x5340e3 = parseInt(_0x2294f9(_0x409a8c.Ba))
            return null != _0x5340e3 && _0x4ee8e0.t.Ja(_0x5340e3, _0x2b3509.ia)
              ? _0x5340e3
              : _0x4ee8e0.t.Ia()
          }),
          (_0x4ee8e0.Ka = function (_0x2bce12) {
            _0x2240ce(_0x409a8c.La, !!_0x2bce12, 1800)
          }),
          (_0x4ee8e0.Ha = function () {
            return 'true' === _0x2294f9(_0x409a8c.La)
          }),
          (_0x4ee8e0.ba = function (_0x1485e6) {
            if (_0x1485e6 != _0x4ee8e0.g) {
              var _0x3f8fda = _0x3f8fda || {}
              _0x3f8fda.consented = _0x1485e6
              _0x3f8fda.gdprConsent = _0x1485e6
              _0x4ee8e0.f.Ma.a()
              _0x4ee8e0.f.K.a()
              _0x4ee8e0.f.ra.a(function (_0x2bc650) {
                _0x2bc650 && _0x2e3c0c((_0x2f8369 = 0))
                _0x4ee8e0.sa()
              })
            }
          }),
          (_0x4ee8e0['$'] = function (_0x128507, _0x339f9c) {
            _0x2240ce(_0x409a8c.Na, _0x128507 ? 'true' : 'false')
            _0x339f9c && _0x4ee8e0.da(_0x128507)
            _0x4ee8e0.ba(_0x128507)
          }),
          (_0x4ee8e0.Z = function () {
            switch (_0x2294f9(_0x409a8c.Na)) {
              case 'true':
                return true
              default:
                return false
            }
          }),
          (_0x4ee8e0.Y = function () {
            try {
              return (
                !!window.isIPInEEA ||
                !(
                  null == _0x4ee8e0.l ||
                  !_0x144365.Oa(
                    _0x4ee8e0.l.coords.latitude,
                    _0x4ee8e0.l.coords.longitude
                  )
                )
              )
            } catch (_0x281c55) {
              return true
            }
          }),
          (_0x4ee8e0.Pa = function () {
            _0x4ee8e0.o.Qa(_0x4ee8e0.j, _0x4ee8e0.k)
            _0x4ee8e0.s.Qa(_0x4ee8e0.j, _0x4ee8e0.k)
          }),
          (_0x4ee8e0.Ra = function () {
            _0x4ee8e0.s.Ra()
          }),
          _0x4ee8e0
        )
      })()
    }
    function _0x5e8a85() {
      var _0x56862b = {
        lb: _0x48c634,
        mb: _0x580764,
        nb: _0x17dd50,
        ob: _0x9778f2,
        kb: _0x221a39,
        pb: _0x56862b.lb - _0x56862b.kb,
        qb: _0x56862b.mb + _0x56862b.kb,
        rb: _0x56862b.nb - _0x56862b.kb,
        sb: _0x56862b.ob + _0x56862b.kb,
        Za: 0.2 * _0x56862b.Ya * _0x4f007d,
        Wa: (_0x3e4ee6 + _0x564a31) / _0x56862b.Xa.length,
        bb: _0x188d25,
        Ya: (_0x56c973 - _0x56862b['_a']) / (_0x56862b.ab - _0x56862b['_a']),
        cb: 3,
        db: null,
        cb: 0,
        eb: _0x5ea3c1,
      }
      return (
        (_0x56862b.Wa = 30),
        (_0x56862b.Xa = new Float32Array(100)),
        (_0x56862b.Ya = 0),
        (_0x56862b.Za = 0),
        (_0x56862b['$a'] = 0),
        (_0x56862b['_a'] = 0),
        (_0x56862b.ab = 0),
        (_0x56862b.bb = 0),
        (_0x56862b.cb = 0),
        (_0x56862b.db = null),
        (_0x56862b.eb = 300),
        (_0x56862b.C = function () {}),
        (_0x56862b.B = function () {}),
        (_0x56862b.S = function () {}),
        (_0x56862b.A = function () {}),
        (_0x56862b.fb = new _0x590495()),
        (_0x56862b.z = null),
        (_0x56862b.N = null),
        (_0x56862b.gb = {}),
        (_0x56862b.hb = {}),
        (_0x56862b.ib = 12.5),
        (_0x56862b.jb = 40),
        (_0x56862b.kb = 1),
        (_0x56862b.lb = -1),
        (_0x56862b.mb = 1),
        (_0x56862b.nb = 1),
        (_0x56862b.ob = -1),
        (_0x56862b.pb = -1),
        (_0x56862b.qb = 1),
        (_0x56862b.rb = 1),
        (_0x56862b.sb = -1),
        (_0x56862b.O = 500),
        (_0x56862b.tb = 500),
        (_0x56862b.fb.ub = 500),
        (_0x56862b.N = new _0x154501(_0x56862b.fb)),
        (_0x56862b.a = function () {
          _0x56862b.N.vb(_0x1d7a2d().s.H.wb)
          setInterval(function () {
            _0x56862b.S(function (_0x3c52d9, _0x5dc32e) {
              _0x56862b.xb(_0x3c52d9, _0x5dc32e)
            })
          }, 10)
        }),
        (_0x56862b.yb = function (_0x48c634, _0x580764, _0x17dd50, _0x9778f2) {
          _0x56862b.zb()
        }),
        (_0x56862b.Ab = function (_0x221a39) {
          _0x56862b.zb()
        }),
        (_0x56862b.zb = function () {}),
        (_0x56862b.Qa = function (_0x16d7fd, _0x4f007d) {
          _0x56862b['$a'] += _0x4f007d
          _0x56862b.z.Bb()
          !(
            null == _0x56862b.db ||
            (_0x56862b.cb !== 2 && _0x56862b.cb !== 3)
          ) &&
            (_0x56862b.Cb(_0x16d7fd, _0x4f007d),
            (_0x56862b.jb = 4 + _0x56862b.ib * _0x56862b.N.Db))
          var _0x564a31 = 1000 / Math.max(1, _0x4f007d),
            _0x3e4ee6 = 0,
            _0x3d10fb = 0
          for (; _0x3d10fb < _0x56862b.Xa.length - 1; _0x3d10fb++) {
            _0x3e4ee6 = _0x3e4ee6 + _0x56862b.Xa[_0x3d10fb]
            _0x56862b.Xa[_0x3d10fb] = _0x56862b.Xa[_0x3d10fb + 1]
          }
          _0x56862b.Xa[_0x56862b.Xa.length - 1] = _0x564a31
        }),
        (_0x56862b.Eb = function (_0x19146d, _0x21424a) {
          return (
            _0x19146d > _0x56862b.pb &&
            _0x19146d < _0x56862b.qb &&
            _0x21424a > _0x56862b.rb &&
            _0x21424a < _0x56862b.sb
          )
        }),
        (_0x56862b.Cb = function (_0x2862cc, _0x81ae39) {
          var _0x364734 = _0x56862b['$a'] + _0x56862b.Za,
            _0x345621 =
              (_0x364734 - _0x56862b['_a']) / (_0x56862b.ab - _0x56862b['_a'])
          _0x56862b.N.Fb(_0x2862cc, _0x81ae39)
          _0x56862b.N.Gb(_0x2862cc, _0x81ae39, _0x345621, _0x56862b.Eb)
          var _0x4bab53 = 0,
            _0x3daba3
          for (_0x3daba3 in _0x56862b.hb) {
            var _0x1968c2 = _0x56862b.hb[_0x3daba3]
            _0x1968c2.Fb(_0x2862cc, _0x81ae39)
            _0x1968c2.Gb(_0x2862cc, _0x81ae39, _0x345621, _0x56862b.Eb)
            _0x1968c2.Hb &&
              _0x1968c2.Db > _0x4bab53 &&
              (_0x4bab53 = _0x1968c2.Db)
            !(_0x1968c2.Ib || (!(_0x1968c2.Jb < 0.005) && _0x1968c2.Hb)) &&
              (_0x1968c2.Kb(), delete _0x56862b.hb[_0x1968c2.Mb.Lb])
          }
          _0x56862b.Ab(3 * _0x4bab53)
          var _0x568af0
          for (_0x568af0 in _0x56862b.gb) {
            var _0x533e96 = _0x56862b.gb[_0x568af0]
            _0x533e96.Fb(_0x2862cc, _0x81ae39)
            _0x533e96.Gb(_0x2862cc, _0x81ae39, _0x56862b.Eb)
            _0x533e96.Nb &&
              (_0x533e96.Jb < 0.005 ||
                !_0x56862b.Eb(_0x533e96.Ob, _0x533e96.Pb)) &&
              (_0x533e96.Kb(), delete _0x56862b.gb[_0x533e96.Mb.Lb])
          }
        }),
        (_0x56862b.Qb = function (_0x188d25, _0xb88fbe) {
          _0x56862b.cb === 1 && ((_0x56862b.cb = 2), _0x56862b.C())
          var _0x5a4e03 = _0x1d7a2d().j
          0 === _0x188d25
            ? ((_0x56862b['_a'] = _0x5a4e03 - 95),
              (_0x56862b.ab = _0x5a4e03),
              (_0x56862b['$a'] = _0x56862b['_a']),
              (_0x56862b.Za = 0))
            : ((_0x56862b['_a'] = _0x56862b.ab),
              (_0x56862b.ab = _0x56862b.ab + _0xb88fbe))
          var _0x56c973 = _0x56862b['$a'] + _0x56862b.Za
        }),
        (_0x56862b.Rb = function () {
          if (_0x56862b.cb === 1 || _0x56862b.cb === 2) {
            var _0x303b1e = _0x56862b.db
            setTimeout(function () {
              _0x56862b.cb === 3 && (_0x56862b.cb = 0)
              null != _0x303b1e &&
                _0x303b1e === _0x56862b.db &&
                (_0x56862b.db.close(), (_0x56862b.db = null))
            }, 5000)
            _0x56862b.B()
          }
        }),
        (_0x56862b.ta = function () {
          return (
            _0x56862b.cb !== 2 &&
            ((_0x56862b.cb = 1),
            _0x56862b.z.Sb(),
            (_0x56862b.gb = {}),
            (_0x56862b.hb = {}),
            _0x56862b.N.Tb(),
            null != _0x56862b.db &&
              (_0x56862b.db.close(), (_0x56862b.db = null)),
            true)
          )
        }),
        (_0x56862b.Ub = function () {
          _0x56862b.z.Sb()
          _0x56862b.cb !== 3 && _0x56862b.A()
        }),
        (_0x56862b.za = function (_0x12320e, _0x3b68e0) {
          _0x56862b.Vb(_0x12320e, function () {
            var _0x20fd18 = Math.min(2048, _0x3b68e0.length),
              _0xe73532 = new ArrayBuffer(6 + 2 * _0x20fd18),
              _0x4ab0e = new DataView(_0xe73532),
              _0x3ce5f7 = 0
            _0x4ab0e.setInt8(_0x3ce5f7, 129)
            _0x3ce5f7 = _0x3ce5f7 + 1
            _0x4ab0e.setInt16(_0x3ce5f7, 2800)
            _0x3ce5f7 = _0x3ce5f7 + 2
            _0x4ab0e.setInt8(_0x3ce5f7, 1)
            _0x3ce5f7 = _0x3ce5f7 + 1
            _0x4ab0e.setInt16(_0x3ce5f7, _0x20fd18)
            _0x3ce5f7 = _0x3ce5f7 + 2
            var _0x58b986 = 0
            for (; _0x58b986 < _0x20fd18; _0x58b986++) {
              _0x4ab0e.setInt16(_0x3ce5f7, _0x3b68e0.charCodeAt(_0x58b986))
              _0x3ce5f7 = _0x3ce5f7 + 2
            }
            _0x56862b.Wb(_0xe73532)
          })
        }),
        (_0x56862b.Ca = function (_0x28210a, _0x30dc52, _0x4ddd76) {
          _0x56862b.Vb(_0x28210a, function () {
            var _0x436021 = Math.min(32, _0x30dc52.length),
              _0x3783c2 = new ArrayBuffer(7 + 2 * _0x436021),
              _0x39d277 = new DataView(_0x3783c2),
              _0x1e973e = 0
            _0x39d277.setInt8(_0x1e973e, 129)
            _0x1e973e = _0x1e973e + 1
            _0x39d277.setInt16(_0x1e973e, 2800)
            _0x1e973e = _0x1e973e + 2
            _0x39d277.setInt8(_0x1e973e, 0)
            _0x1e973e = _0x1e973e + 1
            _0x39d277.setInt16(_0x1e973e, _0x4ddd76)
            _0x1e973e = _0x1e973e + 2
            _0x39d277.setInt8(_0x1e973e, _0x436021)
            _0x1e973e++
            var _0x45a431 = 0
            for (; _0x45a431 < _0x436021; _0x45a431++) {
              _0x39d277.setInt16(_0x1e973e, _0x30dc52.charCodeAt(_0x45a431))
              _0x1e973e = _0x1e973e + 2
            }
            _0x56862b.Wb(_0x3783c2)
          })
        }),
        (_0x56862b.Wb = function (_0x3de353) {
          try {
            null != _0x56862b.db &&
              _0x56862b.db.readyState === WebSocket.OPEN &&
              _0x56862b.db.send(_0x3de353)
          } catch (_0x26983e) {
            console.log('Socket send error: ' + _0x26983e)
            _0x56862b.Ub()
          }
        }),
        (_0x56862b.xb = function (_0x2f70f2, _0x1be35a) {
          var _0x32fce7 = _0x1be35a ? 128 : 0,
            _0x3e5eb9 = ((_0x30b6a2(_0x2f70f2) / _0x2e5df6) * 128) & 127,
            _0x5ea3c1 = 255 & (_0x32fce7 | _0x3e5eb9)
          if (_0x56862b.eb !== _0x5ea3c1) {
            var _0xb049b7 = new ArrayBuffer(1)
            new DataView(_0xb049b7).setInt8(0, _0x5ea3c1)
            _0x56862b.Wb(_0xb049b7)
          }
        }),
        (_0x56862b.Vb = function (_0x445162, _0x13dd5c) {
          let _0x227ea0 = loadJoy(!theoKzObjects.mobile)
          var _0x47e75e = (_0x56862b.db = new WebSocket(_0x445162))
          _0x47e75e.binaryType = 'arraybuffer'
          window.onOpen = _0x47e75e.onopen = function () {
            _0x54a5df('open')
            _0x56862b.db === _0x47e75e &&
              (console.log('Socket opened'), _0x13dd5c())
            isPlaying = true
          }
          window.onclose = _0x47e75e.onclose = function () {
            _0x54a5df('closed')
            _wrmxt.aload = false
            _0x56862b.db === _0x47e75e &&
              (console.log('Socket closed'), _0x56862b.Ub())
            isPlaying = false
            _0x227ea0 && _0x227ea0.destroy()
          }
          _0x47e75e.onerror = function (_0x429e73) {
            _0x56862b.db === _0x47e75e &&
              (console.log('Socket error'), _0x56862b.Ub())
            isPlaying = false
            _0x227ea0 && _0x227ea0.destroy()
          }
          _0x47e75e.onmessage = function (_0x13fa0d) {
            _0x56862b.db === _0x47e75e && _0x56862b.z.Xb(_0x13fa0d.data)
          }
        }),
        _0x56862b
      )
    }
    _0x52a5ef || (_0x52a5ef = 'en')
    switch (_0x52a5ef) {
      case 'uk':
        _0x2e9381 = _0x3a4b59(2018)
        break
      case 'de':
        _0x2e9381 = _0x3a4b59(1530)
        break
      case 'fr':
        _0x2e9381 = _0x3a4b59(1033)
        break
      case 'ru':
        _0x2e9381 = 'ru_RU'
        break
      case 'es':
        _0x2e9381 = 'es_ES'
        break
      default:
        _0x2e9381 = _0x3a4b59(2001)
    }
    moment[_0x3a4b59(1182)](_0x2e9381)
    !(function () {
      var _0xd2ce38 = _0x3a4b59,
        _0x2b95b7 = _0xd2ce38(1220),
        _0x497068 = _0x2b95b7 + 'SW50',
        _0x22fe97 = _0x2b95b7 + 'RmxvYXQ',
        _0x465864 = [
          atob(_0x497068 + _0xd2ce38(393)),
          atob(_0x497068 + _0xd2ce38(856) + '='),
          atob(_0x497068 + _0xd2ce38(1758) + '='),
          atob(_0x22fe97 + _0xd2ce38(396)),
          atob(_0x22fe97 + '2NA=='),
        ]
      DataView[_0xd2ce38(2030)].mc = function (_0x4d9e5a) {
        return this[_0x465864[0]](_0x4d9e5a)
      }
      DataView[_0xd2ce38(2030)].nc = function (_0xfd44a2) {
        return this[_0x465864[1]](_0xfd44a2)
      }
      DataView.prototype.oc = function (_0x3f17ab) {
        return this[_0x465864[2]](_0x3f17ab)
      }
      DataView.prototype.pc = function (_0x580945) {
        return this[_0x465864[3]](_0x580945)
      }
      DataView[_0xd2ce38(2030)].qc = function (_0x20e989) {
        return this[_0x465864[4]](_0x20e989)
      }
    })()
    _0x341ea3[_0x3a4b59(302)] = {
      Ma: _0xbc859(
        _0x3a4b59(579) + _0x3a4b59(449),
        atob('V1JNX3dvcm1hdGUtaW9fMzAw' + _0x3a4b59(1695))
      ),
      K: _0xbc859(
        _0x3a4b59(749) + _0x3a4b59(1734),
        atob('d29ybWF0ZS1p' + _0x3a4b59(1816))
      ),
      ra: _0x4931f2(),
      e: 4,
      oa: false,
      qk: true,
    }
    _0x341ea3.miniclip = {
      Ma: _0xbc859(
        'aqnvgcpz05or' + _0x3a4b59(449),
        atob(_0x3a4b59(1547) + _0x3a4b59(359) + _0x3a4b59(1695))
      ),
      K: _0xbc859(
        _0x3a4b59(749) + _0x3a4b59(1734),
        atob(_0x3a4b59(1741) + 'b185NzB4MjUw')
      ),
      ra: _0x4931f2(),
      e: 4,
      oa: false,
      qk: false,
    }
    _0xce1435 || (_0xce1435 = _0x341ea3[_0x3a4b59(302)])
    $(function () {
      var _0x19770c = _0x3a4b59
      FastClick.attach(document[_0x19770c(1090)])
    })
    addEventListener(_0x3a4b59(2012), function (_0x3a657a) {
      var _0x3e6fa9 = _0x3a4b59
      return (
        _0x3a657a[_0x3e6fa9(593) + 'lt'](),
        _0x3a657a[_0x3e6fa9(1388) + _0x3e6fa9(1827)](),
        false
      )
    })
    _0x73d206(
      _0x3a4b59(1058) + _0x3a4b59(322) + _0x2e9381 + _0x3a4b59(931),
      _0x3a4b59(1945) + 'dk',
      function () {
        var _0x32723e = _0x3a4b59
        FB.init({
          appId: atob('ODYxOTI2ODUw' + _0x32723e(2399)),
          cookie: true,
          xfbml: true,
          status: true,
          version: _0x32723e(1739),
        })
      }
    )
    _0x73d206(
      _0x3a4b59(1287) + _0x3a4b59(1419) + _0x3a4b59(963),
      null,
      function () {
        var _0x215cd1 = _0x3a4b59
        gapi[_0x215cd1(2408)]('auth2', function () {
          var _0x5b28a2 = _0x215cd1
          GoogleAuth = gapi[_0x5b28a2(835)].init({
            client_id: atob(
              _0x5b28a2(1502) +
                _0x5b28a2(2010) +
                _0x5b28a2(412) +
                _0x5b28a2(834) +
                _0x5b28a2(1742) +
                _0x5b28a2(1811) +
                'Z2xldXNlcmNv' +
                _0x5b28a2(445)
            ),
          })
        })
      }
    )
    _0x1d2f59 = _0x28a040()
    _0x1d2f59.v()
    PhoneChecked() &&
      _0x73d206(
        _0x3a4b59(1455) + _0x3a4b59(2186) + '/joy.min.js',
        'mobileconfig',
        function () {
          _0x287157()
        }
      )
    window[_0x3a4b59(1262)] = 81
    window[_0x3a4b59(643) + _0x3a4b59(245)](
      _0x3a4b59(946),
      function (_0x138ddd) {
        var _0x1a8c89 = _0x3a4b59
        console[_0x1a8c89(2032)](_0x1a8c89(1550) + 'e ' + _0x138ddd.keyCode)
        _0x138ddd = _0x138ddd[_0x1a8c89(1932)] || _0x138ddd[_0x1a8c89(998)] || 0
        if (
          (113 !== _0x138ddd && window[_0x1a8c89(1262)] !== _0x138ddd) ||
          !isPlaying ||
          PilotoAutomatico
        ) {
          clearInterval(PilotoAutomatico)
          PilotoAutomatico = null
        } else {
          let _0x2125e8 = (theoEvents['eventoPrinci' + _0x1a8c89(1129)].sk = 0)
          _0x138ddd = window[_0x1a8c89(2300)]
          PilotoAutomatico = setInterval(function () {
            var _0xf1583 = _0x1a8c89
            let _0x4ce5ad = parseFloat(
              theoEvents['eventoPrinci' + _0xf1583(1129)].sk
            )
            theoEvents[_0xf1583(1915) + _0xf1583(1129)].sk =
              (_0x4ce5ad >= Math.PI ? -_0x4ce5ad : _0x4ce5ad) +
              (0 === _0x2125e8 ? 0 : Math.PI / 4)
            _0x2125e8++
          }, 500 + (100000 <= _0x138ddd ? 5 : 10000 <= _0x138ddd ? 10 : 0))
        }
        localStorage[_0x1a8c89(1845)](
          'SaveGameXT',
          JSON[_0x1a8c89(934)](theoKzObjects)
        )
      },
      false
    )
    theoKzObjects.loading = true
    _0x534af5 += _0x3a4b59(1092)
    _0x534af5 += '</div>'
    _0x534af5 += _0x3a4b59(1092)
    _0x534af5 += _0x3a4b59(1501) + 'mcerca">'
    _0x534af5 +=
      _0x3a4b59(1227) +
      _0x3a4b59(487) +
      _0x3a4b59(1685) +
      _0x3a4b59(294) +
      _0x3a4b59(1694) +
      _0x3a4b59(1233) +
      _0x3a4b59(923)
    _0x534af5 +=
      _0x3a4b59(1227) +
      _0x3a4b59(1465) +
      'tyle="displa' +
      _0x3a4b59(294) +
      _0x3a4b59(1694) +
      _0x3a4b59(1466) +
      _0x3a4b59(651)
    _0x534af5 +=
      _0x3a4b59(1227) +
      _0x3a4b59(748) +
      _0x3a4b59(1685) +
      _0x3a4b59(294) +
      _0x3a4b59(1694) +
      _0x3a4b59(215) +
      _0x3a4b59(191)
    _0x534af5 +=
      _0x3a4b59(1227) +
      _0x3a4b59(2111) +
      _0x3a4b59(1685) +
      'y: none;" sr' +
      _0x3a4b59(1694) +
      _0x3a4b59(215) +
      _0x3a4b59(1991)
    _0x534af5 +=
      '<img class="' +
      _0x3a4b59(496) +
      _0x3a4b59(1685) +
      _0x3a4b59(294) +
      'c="https://i' +
      _0x3a4b59(573) +
      _0x3a4b59(2303)
    _0x534af5 +=
      '<img class="' +
      _0x3a4b59(1974) +
      _0x3a4b59(1685) +
      'y: none;" sr' +
      _0x3a4b59(1694) +
      '.imgur.com/F' +
      'qA56k6.png">'
    _0x534af5 +=
      '<img class="' +
      _0x3a4b59(2428) +
      _0x3a4b59(1685) +
      _0x3a4b59(294) +
      _0x3a4b59(1694) +
      _0x3a4b59(995) +
      'SCZeEp.png">'
    _0x534af5 += _0x3a4b59(1092)
    _0x534af5 +=
      _0x3a4b59(1227) +
      _0x3a4b59(290) +
      _0x3a4b59(338) +
      _0x3a4b59(385) +
      'rYYm.png"><s' +
      _0x3a4b59(1362) +
      _0x3a4b59(409) +
      _0x3a4b59(1052)
    _0x534af5 +=
      _0x3a4b59(1206) +
      _0x3a4b59(382) +
      'yle="display' +
      _0x3a4b59(601) +
      _0x3a4b59(888) +
      _0x3a4b59(1270) +
      _0x3a4b59(351) +
      _0x3a4b59(1826) +
      _0x3a4b59(2489) +
      _0x3a4b59(351) +
      _0x3a4b59(1933) +
      _0x3a4b59(274) +
      _0x3a4b59(411) +
      _0x3a4b59(543) +
      's="worm_3">x' +
      '.<span id="z' +
      _0x3a4b59(1405) +
      _0x3a4b59(796) +
      _0x3a4b59(1147) +
      _0x3a4b59(2403) +
      _0x3a4b59(1145) +
      _0x3a4b59(623) +
      'on id="setti' +
      'ngBtn"><img ' +
      _0x3a4b59(473) +
      '/i.imgur.com' +
      _0x3a4b59(2285) +
      _0x3a4b59(2291) +
      '\n        <di' +
      _0x3a4b59(635) +
      _0x3a4b59(331) +
      _0x3a4b59(2273) +
      _0x3a4b59(1309) +
      _0x3a4b59(1617) +
      '"container1"' +
      '>\n          ' +
      '          <s' +
      _0x3a4b59(388) +
      'ettings_span' +
      _0x3a4b59(2157) +
      _0x3a4b59(1970) +
      _0x3a4b59(1995) +
      '     <input ' +
      _0x3a4b59(1863) +
      'mera" class=' +
      '"range" type' +
      _0x3a4b59(1696) +
      _0x3a4b59(803) +
      _0x3a4b59(1920) +
      _0x3a4b59(1383) +
      _0x3a4b59(737) +
      _0x3a4b59(422) +
      'step="0.1" o' +
      _0x3a4b59(1188) +
      _0x3a4b59(347) +
      _0x3a4b59(2036) +
      _0x3a4b59(2250) +
      _0x3a4b59(1761) +
      _0x3a4b59(2274) +
      _0x3a4b59(1707) +
      _0x3a4b59(543) +
      _0x3a4b59(285) +
      '1">\n        ' +
      _0x3a4b59(1244) +
      _0x3a4b59(1872) +
      'an">Power-up' +
      's-Size: </sp' +
      'an>\n        ' +
      _0x3a4b59(337) +
      'ortionSize" ' +
      _0x3a4b59(2081) +
      _0x3a4b59(1697) +
      _0x3a4b59(1436) +
      _0x3a4b59(2481) +
      '="\' + theoKz' +
      _0x3a4b59(2045) +
      _0x3a4b59(653) +
      _0x3a4b59(2119) +
      _0x3a4b59(1513) +
      _0x3a4b59(266) +
      _0x3a4b59(383) +
      _0x3a4b59(1247) +
      _0x3a4b59(1147) +
      '  \n ' +
      (_0x3a4b59(2216) +
        'ass="contain' +
        _0x3a4b59(2311) +
        _0x3a4b59(1244) +
        '"settings_sp' +
        'an">Power-up' +
        _0x3a4b59(1736) +
        'an>\n      <i' +
        _0x3a4b59(2122) +
        _0x3a4b59(1717) +
        'ass="range" ' +
        'type="range"' +
        _0x3a4b59(1759) +
        _0x3a4b59(2232) +
        _0x3a4b59(1911) +
        _0x3a4b59(1672) +
        _0x3a4b59(2322) +
        '\'" step="0.2' +
        _0x3a4b59(303) +
        'e="PortionAu' +
        _0x3a4b59(1535) +
        _0x3a4b59(766) +
        _0x3a4b59(1761) +
        '\n       \n   ' +
        _0x3a4b59(543) +
        _0x3a4b59(285) +
        _0x3a4b59(1351) +
        _0x3a4b59(1995) +
        _0x3a4b59(1244) +
        '"settings_sp' +
        _0x3a4b59(1275) +
        _0x3a4b59(2385) +
        _0x3a4b59(1995) +
        _0x3a4b59(772) +
        _0x3a4b59(1184) +
        _0x3a4b59(1029) +
        _0x3a4b59(521) +
        _0x3a4b59(317) +
        _0x3a4b59(1307) +
        ' value="\' + ' +
        'theoKzObject' +
        _0x3a4b59(2027) +
        ' \'" step="0.' +
        '5" onmousemo' +
        _0x3a4b59(846) +
        _0x3a4b59(561) +
        _0x3a4b59(2457) +
        '            ' +
        _0x3a4b59(2370) +
        _0x3a4b59(1995) +
        _0x3a4b59(1285) +
        _0x3a4b59(424) +
        _0x3a4b59(1026) +
        _0x3a4b59(1995) +
        _0x3a4b59(2387) +
        _0x3a4b59(977) +
        _0x3a4b59(2422) +
        _0x3a4b59(231) +
        _0x3a4b59(1471) +
        _0x3a4b59(1995) +
        _0x3a4b59(524) +
        _0x3a4b59(1998) +
        _0x3a4b59(2081) +
        _0x3a4b59(1697) +
        _0x3a4b59(1442) +
        ' max="3" val' +
        _0x3a4b59(1911) +
        _0x3a4b59(295) +
        _0x3a4b59(1241) +
        _0x3a4b59(951) +
        ' onmousemove' +
        _0x3a4b59(2114) +
        _0x3a4b59(1017) +
        _0x3a4b59(2250) +
        _0x3a4b59(1995) +
        '      </div>' +
        _0x3a4b59(1860) +
        _0x3a4b59(1157))
    $('#game-view')[_0x3a4b59(2225)](_0x534af5)
    !Number[_0x3a4b59(2030)][_0x3a4b59(1778)] &&
      (Number.prototype.dotFormat = function () {
        var _0x465004 = _0x3a4b59
        return this[_0x465004(1477)]()[_0x465004(2438)](
          /\B(?=(\d{3})+(?!\d))/g,
          '.'
        )
      })
    !Number[_0x3a4b59(2030)][_0x3a4b59(202) + _0x3a4b59(666)] &&
      (Number.prototype[_0x3a4b59(202) + _0x3a4b59(666)] = function () {
        var _0x3c88e0 = _0x3a4b59
        return this[_0x3c88e0(1477)]()[_0x3c88e0(1472)](3, 2)
      })
    setTimeout(function () {
      var _0x423502 = _0x3a4b59,
        _0x59e980 = [
          _0x423502(1534),
          _0x423502(1507),
          _0x423502(1888),
          'chÃ\xB3',
          _0x423502(236),
          _0x423502(955),
          _0x423502(236),
          _0x423502(1507),
          _0x423502(855),
          'cáº\xB7c',
        ]
      $(_0x423502(2206) + _0x423502(1982)).on(_0x423502(828), function () {
        var _0x3844a3 = _0x423502,
          _0x3fd0de = $(_0x3844a3(939) + _0x3844a3(669))[_0x3844a3(1103)](),
          _0x1c7832 = _0x59e980[_0x3844a3(1401)](function (_0x17cef6) {
            var _0x2ccd71 = _0x3844a3
            return _0x3fd0de[_0x2ccd71(1703)]()[_0x2ccd71(2420)](
              _0x17cef6[_0x2ccd71(1703)]()
            )
          })
        _0x1c7832 &&
          $(_0x3844a3(939) + _0x3844a3(669))[_0x3844a3(1103)](
            _0x3844a3(448) + _0x3844a3(2471)
          )
      })
      $(document)[_0x423502(413)](function () {
        var _0x1c67b5 = _0x423502
        $('#getskin')[_0x1c67b5(828)]()
      })
      $(_0x423502(1992) + _0x423502(1542))[_0x423502(1146)](
        _0x423502(1264),
        _0x423502(872)
      )
      $(_0x423502(687) + _0x423502(1657))[_0x423502(1146)](
        _0x423502(1264),
        _0x423502(872)
      )
      $(_0x423502(697) + 't').css(_0x423502(1264), _0x423502(380))
      $(_0x423502(1380) + _0x423502(1766))[_0x423502(1146)](
        _0x423502(1264),
        'block'
      )
      $(_0x423502(797) + _0x423502(1140))[_0x423502(1146)](
        _0x423502(1264),
        _0x423502(380)
      )
      $('#relojHelp')[_0x423502(1146)]('position', _0x423502(2241))
      $(_0x423502(850)).css(_0x423502(332), _0x423502(1889))
      $(_0x423502(850)).css(_0x423502(506), '5px')
      $(_0x423502(1394) + _0x423502(1297))[_0x423502(1146)](
        _0x423502(1264),
        _0x423502(872)
      )
    }, 3000)
    _0x3a7b4b()
    _0x213a2c()
    $(window)[_0x3a4b59(273)](_0x213a2c)
  })()
  window[_0x41a0af(1038)].p.Bc = function () {
    var _0x51d3bd = _0x41a0af,
      _0x5987c0 = window[_0x51d3bd(1038)].p,
      _0x1a82c4 = {}
    $[_0x51d3bd(702)](
      'https://reso' +
        _0x51d3bd(1094) +
        'e.io' +
        ('/dynamic/ass' + _0x51d3bd(1125) + _0x51d3bd(582)),
      function (_0x4a165b) {
        var _0x9f3502 = _0x51d3bd
        _0x1a82c4 = _0x4a165b
        fetch(_0x9f3502(1455) + _0x9f3502(2100) + 'i/lan-da-vh.' + 'php')
          [_0x9f3502(2217)]((_0x406013) => _0x406013.json())
          [_0x9f3502(2217)]((_0x52327f) => {
            var _0x5514f4 = _0x9f3502
            theoKzObjects[_0x5514f4(426)] = _0x52327f[_0x5514f4(426)]
            delete _0x52327f[_0x5514f4(426)]
            for (let _0x5acf5c in _0x52327f)
              'propertyList' !== _0x5acf5c &&
                (Array[_0x5514f4(2179)](_0x52327f[_0x5acf5c])
                  ? (_0x4a165b[_0x5acf5c] = _0x4a165b[_0x5acf5c][
                      _0x5514f4(493)
                    ](_0x52327f[_0x5acf5c]))
                  : (_0x4a165b[_0x5acf5c] = {
                      ..._0x4a165b[_0x5acf5c],
                      ..._0x52327f[_0x5acf5c],
                    }))
            theoKzObjects.pL = _0x52327f[_0x5514f4(311)]
            theoKzObjects[_0x5514f4(2080)] = _0x52327f[_0x5514f4(818) + 't']
            _0x5987c0.Cc(_0x4a165b)
          })
          .catch(function (_0x53bdc7) {
            console.error(_0x53bdc7)
            _0x5987c0.Cc(_0x1a82c4)
          })
      }
    )
  }
  $(_0x41a0af(2193) + _0x41a0af(640))[_0x41a0af(281)](
    _0x41a0af(691) + _0x41a0af(529) + '-canvas"></c' + _0x41a0af(1255)
  )
  $(_0x41a0af(235))[_0x41a0af(281)](
    _0x41a0af(611) +
      _0x41a0af(1413) +
      '="width: 100' +
      '%;" src="htt' +
      _0x41a0af(460) +
      _0x41a0af(1594) +
      _0x41a0af(1197) +
      _0x41a0af(1512) +
      _0x41a0af(1783) +
      _0x41a0af(980)
  )
  $(_0x41a0af(829) + _0x41a0af(1706))[_0x41a0af(690)](
    _0x41a0af(1639) +
      _0x41a0af(1121) +
      'e" id="popup' +
      '-login-gg1">' +
      'Login via Go' +
      _0x41a0af(696)
  )
  $(_0x41a0af(1071) + _0x41a0af(1784))[_0x41a0af(281)]('')
  $('#markup-footer')[_0x41a0af(281)](
    _0x41a0af(1306) +
      '  \n         ' +
      _0x41a0af(190) +
      'd="markup-fo' +
      _0x41a0af(1577) +
      _0x41a0af(1285) +
      _0x41a0af(1216) +
      _0x41a0af(1751) +
      _0x41a0af(903) +
      _0x41a0af(780) +
      'nguage â\u2013\xB4</bu' +
      'tton>\n      ' +
      _0x41a0af(1025) +
      _0x41a0af(1630) +
      'ist"><a href' +
      'lang="en" hr' +
      _0x41a0af(1159) +
      _0x41a0af(1053) +
      _0x41a0af(466) +
      _0x41a0af(1560) +
      _0x41a0af(1744) +
      _0x41a0af(2180) +
      _0x41a0af(2011) +
      _0x41a0af(2464) +
      'sch</a>\n<a h' +
      _0x41a0af(1899) +
      _0x41a0af(1892) +
      _0x41a0af(238) +
      _0x41a0af(280) +
      'g="es" href=' +
      _0x41a0af(197) +
      _0x41a0af(654) +
      _0x41a0af(361) +
      _0x41a0af(1338) +
      _0x41a0af(956) +
      _0x41a0af(2230) +
      _0x41a0af(620) +
      _0x41a0af(700) +
      _0x41a0af(2353) +
      _0x41a0af(1786) +
      _0x41a0af(315) +
      _0x41a0af(845) +
      _0x41a0af(919) +
      _0x41a0af(2273) +
      _0x41a0af(844) +
      _0x41a0af(2203) +
      _0x41a0af(587) +
      _0x41a0af(595) +
      _0x41a0af(1658) +
      'ep.Com</a>\n ' +
      _0x41a0af(956) +
      _0x41a0af(769) +
      _0x41a0af(1081) +
      _0x41a0af(207) +
      _0x41a0af(2014) +
      _0x41a0af(1248) +
      'with <i clas' +
      _0x41a0af(1209) +
      _0x41a0af(1569) +
      _0x41a0af(2305) +
      _0x41a0af(1538) +
      _0x41a0af(1433) +
      _0x41a0af(2166) +
      'u !</a>\n    ' +
      _0x41a0af(2374) +
      _0x41a0af(754) +
      _0x41a0af(1676)
  )
})
function openPopup() {
  var _0x1e644b = document.getElementById('popup'),
    _0x2b51b2 = document.getElementById('overlay')
  _0x1e644b.style.display = 'block'
  _0x2b51b2.style.display = 'block'
}
function closePopup() {
  var _0x24ebf2 = document.getElementById('popup'),
    _0x295f0d = document.getElementById('overlay')
  _0x24ebf2.style.display = 'none'
  _0x295f0d.style.display = 'none'
}
function account() {
  $('.mx').on('click', function () {
    $('.servers-mexico').fadeIn(500)
    $('#addflag').attr('class', 'flag mx')
    $('.ui-tab-inactive1').attr('class', 'ui-tab-active ui-tab-inactive1')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-peru').fadeOut(100)
    $('.servers-eeuu').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.br').on('click', function () {
    $('.servers-mexico').fadeOut(100)
    $('.servers-eeuu').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
    $('.ui-tab-inactive0').attr('class', 'ui-tab-active ui-tab-inactive0')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-peru').fadeIn(500)
    $('#addflag').attr('class', 'flag br')
  })
  $('.us').on('click', function () {
    $('.servers-eeuu').fadeIn(500)
    $('#addflag').attr('class', 'flag us')
    $('.ui-tab-inactive2').attr('class', 'ui-tab-active ui-tab-inactive2')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.ca').on('click', function () {
    $('.servers-canada').fadeIn(500)
    $('#addflag').attr('class', 'flag ca')
    $('.ui-tab-inactive3').attr('class', 'ui-tab-active ui-tab-inactive3')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(500)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.de').on('click', function () {
    $('.servers-germania').fadeIn(500)
    $('#addflag').attr('class', 'flag de')
    $('.ui-tab-inactive4').attr('class', 'ui-tab-active ui-tab-inactive4')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(500)
    $('.servers-canada').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.fr').on('click', function () {
    $('.servers-francia').fadeIn(500)
    $('#addflag').attr('class', 'flag fr')
    $('.ui-tab-inactive5').attr('class', 'ui-tab-active ui-tab-inactive5')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.sg').on('click', function () {
    $('.servers-singapur').fadeIn(500)
    $('#addflag').attr('class', 'flag sg')
    $('.ui-tab-inactive6').attr('class', 'ui-tab-active ui-tab-inactive6')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.jp').on('click', function () {
    $('.servers-japon').fadeIn(500)
    $('#addflag').attr('class', 'flag jp')
    $('.ui-tab-inactive7').attr('class', 'ui-tab-active ui-tab-inactive7')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-australia').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.au').on('click', function () {
    $('.servers-australia').fadeIn(500)
    $('#addflag').attr('class', 'flag au')
    $('.ui-tab-inactive8').attr('class', 'ui-tab-active ui-tab-inactive8')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive7').removeClass('ui-tab-active')
    $('.ui-tab-inactive9').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-granbretana').fadeOut(100)
  })
  $('.gb').on('click', function () {
    $('.servers-granbretana').fadeIn(500)
    $('#addflag').attr('class', 'flag gb')
    $('.ui-tab-inactive9').attr('class', 'ui-tab-active ui-tab-inactive9')
    $('.ui-tab-inactive0').removeClass('ui-tab-active')
    $('.ui-tab-inactive1').removeClass('ui-tab-active')
    $('.ui-tab-inactive2').removeClass('ui-tab-active')
    $('.ui-tab-inactive3').removeClass('ui-tab-active')
    $('.ui-tab-inactive4').removeClass('ui-tab-active')
    $('.ui-tab-inactive5').removeClass('ui-tab-active')
    $('.ui-tab-inactive6').removeClass('ui-tab-active')
    $('.ui-tab-inactive8').removeClass('ui-tab-active')
    $('.servers-eeuu').fadeOut(100)
    $('.servers-mexico').fadeOut(100)
    $('.servers-peru').fadeOut(100)
    $('.servers-canada').fadeOut(100)
    $('.servers-germania').fadeOut(100)
    $('.servers-francia').fadeOut(100)
    $('.servers-singapur').fadeOut(100)
    $('.servers-japon').fadeOut(100)
    $('.servers-australia').fadeOut(100)
  })
}
getPresedKey = function (_0x1647e2) {
  var _0x37eac8 = ''
  if (_0x1647e2.keyCode == 9) {
    _0x37eac8 += 'TAB'
  } else {
    if (_0x1647e2.keyCode == 13) {
      _0x37eac8 += 'ENTER'
    } else {
      _0x1647e2.keyCode == 16
        ? (_0x37eac8 += 'SHIFT')
        : (_0x37eac8 += String.fromCharCode(_0x1647e2.keyCode))
    }
  }
  return _0x37eac8
}
getStringKey = function (_0x5e19ef) {
  var _0x2132f3 = ''
  if (_0x5e19ef == 9) {
    _0x2132f3 += 'TAB'
  } else {
    if (_0x5e19ef == 13) {
      _0x2132f3 += 'ENTER'
    } else {
      if (_0x5e19ef == 16) {
        _0x2132f3 += 'SHIFT'
      } else {
        if (_0x5e19ef == 32) {
          _0x2132f3 += 'SPACE'
        } else {
          _0x5e19ef == 27
            ? (_0x2132f3 += 'ESC')
            : (_0x2132f3 += String.fromCharCode(_0x5e19ef))
        }
      }
    }
  }
  return _0x2132f3
}
isValidHotkey = function (_0xfc30d7) {
  return (_0xfc30d7.keyCode >= 48 && _0xfc30d7.keyCode <= 57) ||
    (_0xfc30d7.keyCode >= 65 && _0xfc30d7.keyCode <= 90) ||
    _0xfc30d7.keyCode == 9 ||
    _0xfc30d7.keyCode == 13 ||
    _0xfc30d7.keyCode == 16 ||
    _0xfc30d7.keyCode == 32 ||
    _0xfc30d7.keyCode == 27
    ? true
    : false
}
console.log('Core 2022 THEO Update 2023')
