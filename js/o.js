window.detectLog = null
const ___worm25 = {
  BETAisSkinCustom(_0x3c5be2) {
    return typeof _0x3c5be2 === 'string' && /[a-zA-Z]/.test(_0x3c5be2)
  },
  testSkinCustom: function (_0x3e08ab) {
    return ___worm25.BETAisSkinCustom(_0x3e08ab) ? 34 || 33 : _0x3e08ab
  },
  testSkinMod: function (_0x3b9c72) {
    return _0x3b9c72 >= 399 && _0x3b9c72 < 999
  },
  testWear: function (_0x134a91) {
    return _0x134a91 >= 399 && _0x134a91 < 999
  },
  isNumberValid: function (_0x1bbe57) {
    return (
      _0x1bbe57 !== '' &&
      _0x1bbe57 !== null &&
      _0x1bbe57 !== undefined &&
      !isNaN(_0x1bbe57)
    )
  },
  validInput: function (_0x36d911) {
    if (
      !___worm25.testSkinMod(_0x36d911) &&
      !___worm25.BETAisSkinCustom(_0x36d911)
    ) {
      return _0x36d911
    }
    try {
      let _0x1825ae = $('#inputReplaceSkin').val()
      return encodeURI(___worm25.isNumberValid(_0x1825ae) ? _0x1825ae : 35)
    } catch (_0x40b061) {
      return encodeURI(35)
    }
  },
  aload: false,
  aId: 0,
}
var inputReplaceSkin = localStorage.getItem('inputReplaceSkin')
var hoisinhnhanh
var PilotoAutomatico = null
var isPlaying = false
var pwrups = {}
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
}
var thewftyildoobj = {
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
if (saveGameLocal && saveGameLocal !== 'null') {
  let t = JSON.parse(saveGameLocal)
  for (let e in t) {
    thewftyildoobj[e] = t[e]
  }
}
thewftyildoobj.loading = true
const PhoneChecked = function () {
  let _0x1eb200 = false
  thewftyildoobj.mobile = false
  const _0x4d66bd = navigator.userAgent || navigator.vendor || window.opera
  const _0x1469b3 = [
    'android',
    'bb',
    'meego',
    'avantgo',
    'bada',
    'blackberry',
    'blazer',
    'compal',
    'elaine',
    'fennec',
    'hiptop',
    'iemobile',
    'iphone',
    'ipod',
    'iris',
    'kindle',
    'lge',
    'maemo',
    'midp',
    'mmp',
    'mobile',
    'firefox',
    'netfront',
    'opera',
    'palm',
    'phone',
    'plucker',
    'pocket',
    'psp',
    'symbian',
    'treo',
    'vodafone',
    'wap',
    'windows ce',
    'xda',
    'ipad',
    'playbook',
    'silk',
  ]
  if (
    _0x1469b3.some((_0x4399e0) => _0x4d66bd.toLowerCase().includes(_0x4399e0))
  ) {
    thewftyildoobj.mobile = true
    _0x1eb200 = true
  }
  return _0x1eb200
}
const RechekingPhone = function () {
  let _0x486b45 = false
  var _0x5d3bdd = navigator.userAgent || navigator.vendor || window.opera
  const _0x2cb8a2 = [
    'android',
    'bb',
    'meego',
    'avantgo',
    'bada',
    'blackberry',
    'blazer',
    'compal',
    'elaine',
    'fennec',
    'hiptop',
    'iemobile',
    'iphone',
    'ipod',
    'iris',
    'kindle',
    'lge',
    'maemo',
    'midp',
    'mmp',
    'mobile',
    'firefox',
    'netfront',
    'opera',
    'palm',
    'phone',
    'plucker',
    'pocket',
    'psp',
    'symbian',
    'treo',
    'vodafone',
    'wap',
    'windows ce',
    'xda',
    'ipad',
    'playbook',
    'silk',
  ]
  _0x486b45 = _0x2cb8a2.some((_0x8f26ba) =>
    _0x5d3bdd.toLowerCase().includes(_0x8f26ba)
  )
  return _0x486b45
}
const loadJoy = function (_0x3c2cc6) {
  let _0x4df1c5
  try {
    if (!thewftyildoobj.gamePad) {
      thewftyildoobj.gamePad = theoEvents.joystick
    }
    if (RechekingPhone() && (_0x3c2cc6 || thewftyildoobj.gamePad.checked)) {
      _0x4df1c5 = nipplejs.create(thewftyildoobj.gamePad)
      _0x4df1c5.on('move', function (_0x546722, _0x23fd78) {
        theoEvents.eventoPrincipal.sk =
          _0x23fd78.angle.radian <= Math.PI
            ? -1 * _0x23fd78.angle.radian
            : Math.PI - (_0x23fd78.angle.radian - Math.PI)
      })
    }
    return _0x4df1c5
  } catch (_0x3de758) {
    console.log(_0x3de758)
  }
}
if (typeof PIXI === 'undefined') {
  var script = document.createElement('script')
  script.src = 'https://pixijs.download/release/pixi.js'
  script.type = 'text/javascript'
  script.onload = function () {
    initializeGame()
  }
  document.head.appendChild(script)
} else {
  initializeGame()
}
function initializeGame() {
  let _0x455690 = new PIXI.Application()
  document.body.appendChild(_0x455690.view)
  let _0x8d0e94 = new PIXI.Graphics()
  _0x8d0e94.beginFill(16711680)
  _0x8d0e94.drawCircle(400, 300, 50)
  _0x8d0e94.endFill()
  _0x455690.stage.addChild(_0x8d0e94)
}
let clientes = {
  clientesVencidos: [],
  clientesActivos: [],
}
let servers = { Api_listServer: [] }
async function loadUsers() {
  await fetch('https://25servan.github.io/Worm25/api/users.php')
    .then((_0x1acaf1) => _0x1acaf1.json())
    .then((_0x5cf014) => {
      if (_0x5cf014.success) {
        let _0x2fb61f = _0x5cf014.Users
        const _0x39841e = new Date()
        _0x39841e.setHours(0, 0, 0, 0)
        clientes.clientesActivos = _0x2fb61f.filter((_0x1f28c0) => {
          if (_0x1f28c0.cliente_DateExpired) {
            const _0x188dc4 = new Date(_0x1f28c0.cliente_DateExpired)
            return _0x188dc4 >= _0x39841e
          }
          return true
        })
      } else {
        clientes = {
          clientesVencidos: [],
          clientesActivos: [],
        }
        alert('Revision1 Error page !')
      }
    })
    .catch((_0x3cec70) => {
      console.error('Error loading users:', _0x3cec70)
      alert('Revision1 Error page F5.')
    })
}
async function fetchServersWithRetry(
  _0x30ea00,
  _0x2da977 = 3,
  _0x283f2d = 2000
) {
  for (let _0x567a3a = 1; _0x567a3a <= _0x2da977; _0x567a3a++) {
    try {
      const _0x35cdcb = await fetch(_0x30ea00)
      if (!_0x35cdcb.ok) {
        throw new Error('HTTP error! status: ' + _0x35cdcb.status)
      }
      const _0x21abef = await _0x35cdcb.json()
      return _0x21abef
    } catch (_0x5b3682) {
      console.error('Attempt ' + _0x567a3a + ' failed: ' + _0x5b3682.message)
      if (_0x567a3a < _0x2da977) {
        await new Promise((_0xfad718) => setTimeout(_0xfad718, _0x283f2d))
      } else {
        throw _0x5b3682
      }
    }
  }
}
async function loadServers() {
  try {
    const _0x3dab4b = await fetchServersWithRetry(
      'https://wormatefriendsturkey.com/extension/api/revision2'
    )
    if (_0x3dab4b.success) {
      let _0x150f8a = _0x3dab4b.servers
      servers.Api_listServer = _0x150f8a.filter(
        (_0x4dd268) => _0x4dd268.serverUrl
      )
    } else {
      servers = { Api_listServer: [] }
      alert('Reload Please Revision2 Error!')
    }
  } catch (_0x3bb0c8) {
    console.error('Failed to load servers after multiple attempts:', _0x3bb0c8)
    servers = { Api_listServer: [] }
    alert('Revision2 Page Reload f5')
  }
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
      fontFamily: '___worm25',
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
      fontFamily: '___worm25',
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
      fontFamily: 'wo___worm25rmup',
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
      fontFamily: '___worm25',
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
      fontFamily: '___worm25',
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
      fontFamily: '___worm25',
      wordWrap: true,
    }),
  },
}
ctx.clock = PIXI.Sprite.fromImage(
  'https://asserts.wormworld.io/images/clock.png'
)
ctx.clock.width = 100
ctx.clock.height = 100
ctx.clock.x = -50
ctx.clock.y = -50
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
})
document.body.appendChild(app.view)
ctx.hoisinhnhanh = PIXI.Sprite.from('https://i.imgur.com/QZfm7vv.png')
ctx.hoisinhnhanh.width = 23
ctx.hoisinhnhanh.height = 23
ctx.top10sv = PIXI.Sprite.fromImage('https://i.imgur.com/UbRiUYr.png')
ctx.top10sv.height = 25
ctx.top10sv.width = 100
ctx.top10sv.x = 60
ctx.top10sv.y = -50
ctx.quaytron = PIXI.Sprite.from('https://i.imgur.com/a7lVOy5.png')
ctx.quaytron.width = -23
ctx.quaytron.height = -23
app.stage.addChild(ctx.hoisinhnhanh)
app.stage.addChild(ctx.quaytron)
function updateSpritePositions() {
  const _0x109364 = -90
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - 300
  ctx.hoisinhnhanh.y = _0x109364
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 10
  ctx.quaytron.y = _0x109364
}
updateSpritePositions()
window.addEventListener('resize', () => {
  app.renderer.resize(window.innerWidth, window.innerHeight)
  updateSpritePositions()
})
ctx.value_server = new PIXI.Text('W-25', ctx.fontStyle.name)
ctx.value_server.x = 17
ctx.value_server.y = 3
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo)
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo)
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado)
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado)
if (thewftyildoobj.ModeStremersaveheadshot) {
  ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1)
  ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1)
} else {
  ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1)
  ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1)
}
ctx.label_kill.x = 11
ctx.label_kill.y = 127
ctx.label_hs.x = 66
ctx.label_hs.y = 127
ctx.value1_kill.x = 11
ctx.value1_kill.y = 142
ctx.value1_hs.x = 66
ctx.value1_hs.y = 142
ctx.value2_kill.x = 11
ctx.value2_kill.y = 158
ctx.value2_hs.x = 66
ctx.value2_hs.y = 158
ctx.containerCountInfo = new PIXI.Container()
ctx.containerCountInfo.x = -45
ctx.containerCountInfo.y = -76
ctx.containerCountInfo.addChild(ctx.value_server)
ctx.containerCountInfo.addChild(ctx.label_kill)
ctx.containerCountInfo.addChild(ctx.value1_kill)
ctx.containerCountInfo.addChild(ctx.value2_kill)
ctx.containerCountInfo.addChild(ctx.label_hs)
ctx.containerCountInfo.addChild(ctx.value1_hs)
ctx.containerCountInfo.addChild(ctx.value2_hs)
ctx.imgServerbase = PIXI.Texture.fromImage('https://i.imgur.com/EkbSd65.png')
ctx.borderurl = PIXI.Texture.fromImage('https://i.imgur.com/wYJAfmO0.png')
ctx.onclickServer = PIXI.Texture.fromImage(thewftyildoobj.flag)
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase)
ctx.containerImgS.anchor.set(0.5)
ctx.containerImgS.x = 0
ctx.containerImgS.y = 18
ctx.containerImgS.width = 25
ctx.containerImgS.height = 20
ctx.borderImg = new PIXI.Sprite(ctx.borderurl)
ctx.borderImg.anchor.set(0.5)
ctx.borderImg.x = -2
ctx.borderImg.y = 78
ctx.borderImg.width = 110
ctx.borderImg.height = 60
ctx.setServer = function (_0x387464) {
  ctx.value_server.text = _0x387464 || 'WFT'
}
ctx.setCountGame = function (_0x4e0494, _0x9c1f65, _0x6dec52, _0x4e22e7) {
  ctx.value1_hs.text = _0x9c1f65
  ctx.value1_kill.text = _0x4e0494
  if (thewftyildoobj.ModeStremersaveheadshot) {
    ctx.value2_hs.text = _0x4e22e7
    ctx.value2_kill.text = _0x6dec52
  }
}
;('use strict')
var _typeof =
  typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
    ? function (_0x593f44) {
        return typeof _0x593f44
      }
    : function (_0x49ea33) {
        return _0x49ea33 &&
          typeof Symbol == 'function' &&
          _0x49ea33.constructor === Symbol &&
          _0x49ea33 !== Symbol.prototype
          ? 'symbol'
          : typeof _0x49ea33
      }
var GoogleAuth
;(function () {
  try {
    console.log(
      (function (_0x5ad4a6, _0x4be036) {
        for (var _0x523285 = 0; _0x523285 < _0x4be036.length; _0x523285 += 2) {
          _0x5ad4a6 = _0x5ad4a6.replaceAll(
            _0x4be036[_0x523285],
            _0x4be036[_0x523285 + 1]
          )
        }
        return _0x5ad4a6
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
  } catch (_0x4ea45b) {}
})()
window.addEventListener('load', function () {
  function _0x4c25be() {
    ;(function (_0x20517c, _0x4d2345, _0x4f2bb4) {
      function _0x596b43() {
        if (typeof _0x4d2345.createElement != 'function') {
          return _0x4d2345.createElement(arguments[0])
        } else {
          return _0x53e16d
            ? _0x4d2345.createElementNS.call(
                _0x4d2345,
                'http://www.w3.org/2000/svg',
                arguments[0]
              )
            : _0x4d2345.createElement.apply(_0x4d2345, arguments)
        }
      }
      var _0x44a3f9 = []
      var _0x3a1895 = []
      var _0x4488ab = {
        _version: '3.3.1',
        _config: {
          classPrefix: '',
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true,
        },
        _q: [],
        on: function (_0x4797bb, _0x2acbd2) {
          var _0x3cf05e = this
          setTimeout(function () {
            _0x2acbd2(_0x3cf05e[_0x4797bb])
          }, 0)
        },
        addTest: function (_0x3fcb77, _0x51c2c0, _0x13c5cc) {
          _0x3a1895.push({
            name: _0x3fcb77,
            fn: _0x51c2c0,
            options: _0x13c5cc,
          })
        },
        addAsyncTest: function (_0x3d59f1) {
          _0x3a1895.push({
            name: null,
            fn: _0x3d59f1,
          })
        },
      }
      function _0x52be75() {}
      _0x52be75.prototype = _0x4488ab
      _0x52be75 = new _0x52be75()
      var _0x16eb2c = false
      try {
        _0x16eb2c =
          'WebSocket' in _0x20517c && _0x20517c.WebSocket.CLOSING === 2
      } catch (_0x5419a7) {}
      _0x52be75.addTest('websockets', _0x16eb2c)
      var _0x4e9846 = _0x4d2345.documentElement
      var _0x53e16d = _0x4e9846.nodeName.toLowerCase() === 'svg'
      _0x52be75.addTest('canvas', function () {
        var _0x47915a = _0x596b43('canvas')
        return !!_0x47915a.getContext && !!_0x47915a.getContext('2d')
      })
      _0x52be75.addTest('canvastext', function () {
        return (
          _0x52be75.canvas !== false &&
          typeof _0x596b43('canvas').getContext('2d').fillText == 'function'
        )
      })
      ;(function () {
        var _0x2f61e5
        var _0x2b67e4
        var _0x5edd68
        var _0x21e100
        var _0x37fed5
        var _0x252f5f
        var _0xee4da2
        for (var _0x57d43a in _0x3a1895) {
          if (_0x3a1895.hasOwnProperty(_0x57d43a)) {
            _0x2f61e5 = []
            _0x2b67e4 = _0x3a1895[_0x57d43a]
            if (
              _0x2b67e4.name &&
              (_0x2f61e5.push(_0x2b67e4.name.toLowerCase()),
              _0x2b67e4.options &&
                _0x2b67e4.options.aliases &&
                _0x2b67e4.options.aliases.length)
            ) {
              for (
                _0x5edd68 = 0;
                _0x5edd68 < _0x2b67e4.options.aliases.length;
                _0x5edd68++
              ) {
                _0x2f61e5.push(
                  _0x2b67e4.options.aliases[_0x5edd68].toLowerCase()
                )
              }
            }
            _0x21e100 =
              (_0x2b67e4.fn === _0x4f2bb4
                ? 'undefined'
                : _typeof(_0x2b67e4.fn)) === 'function'
                ? _0x2b67e4.fn()
                : _0x2b67e4.fn
            _0x37fed5 = 0
            for (; _0x37fed5 < _0x2f61e5.length; _0x37fed5++) {
              _0x252f5f = _0x2f61e5[_0x37fed5]
              _0xee4da2 = _0x252f5f.split('.')
              if (_0xee4da2.length === 1) {
                _0x52be75[_0xee4da2[0]] = _0x21e100
              } else {
                if (
                  !!_0x52be75[_0xee4da2[0]] &&
                  !(_0x52be75[_0xee4da2[0]] instanceof Boolean)
                ) {
                  _0x52be75[_0xee4da2[0]] = new Boolean(_0x52be75[_0xee4da2[0]])
                }
                _0x52be75[_0xee4da2[0]][_0xee4da2[1]] = _0x21e100
              }
              _0x44a3f9.push((_0x21e100 ? '' : 'no-') + _0xee4da2.join('-'))
            }
          }
        }
      })()
      ;(function (_0x3ed931) {
        var _0x13b8de = _0x4e9846.className
        var _0x367428 = _0x52be75._config.classPrefix || ''
        if (_0x53e16d) {
          _0x13b8de = _0x13b8de.baseVal
        }
        if (_0x52be75._config.enableJSClass) {
          var _0x2c0cd7 = new RegExp('(^|\\s)' + _0x367428 + 'no-js(\\s|$)')
          _0x13b8de = _0x13b8de.replace(_0x2c0cd7, '$1' + _0x367428 + 'js$2')
        }
        if (_0x52be75._config.enableClasses) {
          _0x13b8de += ' ' + _0x367428 + _0x3ed931.join(' ' + _0x367428)
          if (_0x53e16d) {
            _0x4e9846.className.baseVal = _0x13b8de
          } else {
            _0x4e9846.className = _0x13b8de
          }
        }
      })(_0x44a3f9)
      delete _0x4488ab.addTest
      delete _0x4488ab.addAsyncTest
      for (var _0x377de0 = 0; _0x377de0 < _0x52be75._q.length; _0x377de0++) {
        _0x52be75._q[_0x377de0]()
      }
      _0x20517c.Modernizr = _0x52be75
    })(window, document)
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
  }
  function _0x2f06a2(_0x99c88b, _0x442a50, _0x1fd4a) {
    const _0x251532 = [38, 38, 38, 120, 38, 25, 38]
    const _0x4b6bf9 = [
      '#FFD500',
      '#FFC75A',
      '#00B2ED',
      '#FF4544',
      '#0094D7',
      '#CCCF81',
      '#ff0999',
    ]
    let _0x52828f =
      _0x251532[_0x442a50] -
      parseInt(((_0x1fd4a == 0.99 ? 1 : _0x1fd4a) * _0x251532[_0x442a50]) / 1)
    const _0x32600e = new PIXI.TextStyle({
      align: 'center',
      fill: _0x4b6bf9[_0x442a50],
      fontSize: 25,
      lineJoin: 'round',
      whiteSpace: 'normal',
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: '___worm25',
      fontWeight: 'bold',
    })
    let _0x2e25b1 = 'pwr_clock' + _0x442a50
    if (!pwrups[_0x2e25b1] && _0x251532[_0x442a50] === _0x52828f) {
      pwrups[_0x2e25b1] = new PIXI.Text(_0x52828f, _0x32600e)
      pwrups[_0x2e25b1].y = 61
      _0x99c88b.Tf[_0x442a50].addChild(pwrups[_0x2e25b1])
    }
    if (pwrups[_0x2e25b1]) {
      pwrups[_0x2e25b1].x = _0x52828f >= 100 ? 11 : _0x52828f >= 10 ? 18 : 26
      pwrups[_0x2e25b1].text = _0x52828f
      if (_0x52828f === 0) {
        delete pwrups[_0x2e25b1]
      }
    }
  }
  document.getElementById('game-wrap').style.display = 'block'
  if (!_0x4c25be()) {
    document.getElementById('error-view').style.display = 'block'
    return
  }
  ;(function () {
    function _0x22dc20(_0x3a528e) {
      const _0x3f5927 = _0x3a528e + '='
      const _0x296fc3 = document.cookie.split(';')
      for (let _0x494dfc = 0; _0x494dfc < _0x296fc3.length; _0x494dfc++) {
        let _0x434dd9 = _0x296fc3[_0x494dfc]
        while (_0x434dd9.charAt(0) === ' ') {
          _0x434dd9 = _0x434dd9.substring(1)
        }
        if (_0x434dd9.indexOf(_0x3f5927) === 0) {
          return _0x434dd9.substring(_0x3f5927.length, _0x434dd9.length)
        }
      }
      return ''
    }
    function _0x1b7784(_0x50ccd4, _0x5b3c21, _0x18da75) {
      var _0x4657c9 = new Date()
      _0x4657c9.setTime(_0x4657c9.getTime() + _0x18da75 * 86400000)
      var _0x50938e = 'expires=' + _0x4657c9.toUTCString()
      document.cookie =
        _0x50ccd4 + '=' + _0x5b3c21 + '; ' + _0x50938e + '; path=/'
    }
    function _0x3b767e(_0x54be55) {
      if (_0x54be55[_0x5573e5]) {
        return _0x54be55[_0x5573e5]
      } else {
        return _0x54be55.en ? _0x54be55.en : _0x54be55.x
      }
    }
    function _0x449275(_0x1db5ee) {
      var _0x24b81c = (Math.floor(_0x1db5ee) % 60).toString()
      var _0x284c30 = (Math.floor(_0x1db5ee / 60) % 60).toString()
      var _0x2f2005 = (Math.floor(_0x1db5ee / 3600) % 24).toString()
      var _0x3865c7 = Math.floor(_0x1db5ee / 86400).toString()
      var _0x51a91f = window.I18N_MESSAGES['util.time.days']
      var _0x1aacfd = window.I18N_MESSAGES['util.time.hours']
      var _0x264424 = window.I18N_MESSAGES['util.time.min']
      var _0x805323 = window.I18N_MESSAGES['util.time.sec']
      if (_0x3865c7 > 0) {
        return (
          _0x3865c7 +
          ' ' +
          _0x51a91f +
          ' ' +
          _0x2f2005 +
          ' ' +
          _0x1aacfd +
          ' ' +
          _0x284c30 +
          ' ' +
          _0x264424 +
          ' ' +
          _0x24b81c +
          ' ' +
          _0x805323
        )
      } else {
        if (_0x2f2005 > 0) {
          return (
            _0x2f2005 +
            ' ' +
            _0x1aacfd +
            ' ' +
            _0x284c30 +
            ' ' +
            _0x264424 +
            ' ' +
            _0x24b81c +
            ' ' +
            _0x805323
          )
        } else {
          return _0x284c30 > 0
            ? _0x284c30 + ' ' + _0x264424 + ' ' + _0x24b81c + ' ' + _0x805323
            : _0x24b81c + ' ' + _0x805323
        }
      }
    }
    function _0x1e3f1e(_0x439297, _0x2c4cad, _0xbccb82) {
      var _0x5a50da = document.createElement('script')
      var _0x5e76c6 = true
      if (_0x2c4cad) {
        _0x5a50da.id = _0x2c4cad
      }
      _0x5a50da.async = 'async'
      _0x5a50da.type = 'text/javascript'
      _0x5a50da.src = _0x439297
      if (_0xbccb82) {
        _0x5a50da.onload = _0x5a50da.onreadystatechange = function () {
          _0x5e76c6 = false
          try {
            _0xbccb82()
          } catch (_0x4666c3) {
            console.log(_0x4666c3)
          }
          _0x5a50da.onload = _0x5a50da.onreadystatechange = null
        }
      }
      ;(document.head || document.getElementsByTagName('head')[0]).appendChild(
        _0x5a50da
      )
    }
    function _0x30b30d(_0x31bbc7, _0xcb4243) {
      _0xcb4243.prototype = Object.create(_0x31bbc7.prototype)
      _0xcb4243.prototype.constructor = _0xcb4243
      _0xcb4243.parent = _0x31bbc7
      return _0xcb4243
    }
    function _0x263d65(_0x50dd71) {
      _0x50dd71 %= _0x2692a8
      return _0x50dd71 < 0 ? _0x50dd71 + _0x2692a8 : _0x50dd71
    }
    function _0x1fa2f7(_0x534db1, _0x32ad5b, _0x2b137a) {
      if (_0x534db1 > _0x2b137a) {
        return _0x2b137a
      } else {
        if (_0x534db1 < _0x32ad5b) {
          return _0x32ad5b
        } else {
          return Number.isFinite(_0x534db1)
            ? _0x534db1
            : (_0x32ad5b + _0x2b137a) * 0.5
        }
      }
    }
    function _0x4d4737(_0x338eb0, _0x3c72c2, _0x22eba3, _0x35b967) {
      var _0x2a24d9 = _0x3c72c2 + _0x35b967
      if (_0x338eb0 == null) {
        throw new TypeError('this is null or not defined')
      }
      var _0x4cdec9 = _0x338eb0.length >>> 0
      var _0x35aea3 = _0x22eba3 >> 0
      var _0x51b0e0 =
        _0x35aea3 < 0
          ? Math.max(_0x4cdec9 + _0x35aea3, 0)
          : Math.min(_0x35aea3, _0x4cdec9)
      var _0x3cda0c = _0x3c72c2 >> 0
      var _0x42c0b0 =
        _0x3cda0c < 0
          ? Math.max(_0x4cdec9 + _0x3cda0c, 0)
          : Math.min(_0x3cda0c, _0x4cdec9)
      var _0x28defd = _0x2a24d9 === undefined ? _0x4cdec9 : _0x2a24d9 >> 0
      var _0x25be3d =
        _0x28defd < 0
          ? Math.max(_0x4cdec9 + _0x28defd, 0)
          : Math.min(_0x28defd, _0x4cdec9)
      var _0x5bb0f5 = Math.min(_0x25be3d - _0x42c0b0, _0x4cdec9 - _0x51b0e0)
      var _0xfd60ef = 1
      for (
        _0x42c0b0 < _0x51b0e0 &&
        _0x51b0e0 < _0x42c0b0 + _0x5bb0f5 &&
        ((_0xfd60ef = -1),
        (_0x42c0b0 += _0x5bb0f5 - 1),
        (_0x51b0e0 += _0x5bb0f5 - 1));
        _0x5bb0f5 > 0;

      ) {
        if (_0x42c0b0 in _0x338eb0) {
          _0x338eb0[_0x51b0e0] = _0x338eb0[_0x42c0b0]
        } else {
          delete _0x338eb0[_0x51b0e0]
        }
        _0x42c0b0 += _0xfd60ef
        _0x51b0e0 += _0xfd60ef
        _0x5bb0f5--
      }
      return _0x338eb0
    }
    function _0x4cedc9(_0x4e3bc2) {
      if (_0x4e3bc2.parent != null) {
        _0x4e3bc2.parent.removeChild(_0x4e3bc2)
      }
    }
    function _0x10dff9(_0x4e9b72, _0x535a05, _0x849a0f) {
      var _0x580e3e = (1 - Math.abs(_0x849a0f * 2 - 1)) * _0x535a05
      var _0x108011 = _0x580e3e * (1 - Math.abs(((_0x4e9b72 / 60) % 2) - 1))
      var _0x2ec3dc = _0x849a0f - _0x580e3e / 2
      if (_0x4e9b72 >= 0 && _0x4e9b72 < 60) {
        return [_0x2ec3dc + _0x580e3e, _0x2ec3dc + _0x108011, _0x2ec3dc + 0]
      } else {
        if (_0x4e9b72 >= 60 && _0x4e9b72 < 120) {
          return [_0x2ec3dc + _0x108011, _0x2ec3dc + _0x580e3e, _0x2ec3dc + 0]
        } else {
          if (_0x4e9b72 >= 120 && _0x4e9b72 < 180) {
            return [_0x2ec3dc + 0, _0x2ec3dc + _0x580e3e, _0x2ec3dc + _0x108011]
          } else {
            if (_0x4e9b72 >= 180 && _0x4e9b72 < 240) {
              return [
                _0x2ec3dc + 0,
                _0x2ec3dc + _0x108011,
                _0x2ec3dc + _0x580e3e,
              ]
            } else {
              return _0x4e9b72 >= 240 && _0x4e9b72 < 300
                ? [_0x2ec3dc + _0x108011, _0x2ec3dc + 0, _0x2ec3dc + _0x580e3e]
                : [_0x2ec3dc + _0x580e3e, _0x2ec3dc + 0, _0x2ec3dc + _0x108011]
            }
          }
        }
      }
    }
    function _0x30b678() {
      function _0x46e89b() {
        let _0x5b7cbe = thewftyildoobj.adblock ? 1 : 5
        $('#adbl-1').text(window.I18N_MESSAGES['index.game.antiadblocker.msg1'])
        $('#adbl-2').text(window.I18N_MESSAGES['index.game.antiadblocker.msg2'])
        $('#adbl-3').text(window.I18N_MESSAGES['index.game.antiadblocker.msg3'])
        $('#adbl-4').text(
          window.I18N_MESSAGES['index.game.antiadblocker.msg4'].replace(
            '{0}',
            10
          )
        )
        $('#adbl-continue span').text(
          window.I18N_MESSAGES['index.game.antiadblocker.continue']
        )
        $('#adbl-continue').hide()
        $('#JDHnkHtYwyXyVgG9').fadeIn(500)
        var _0x43209c = _0x5b7cbe
        for (var _0x2473a7 = 0; _0x2473a7 < _0x5b7cbe; _0x2473a7++) {
          setTimeout(function () {
            _0x43209c--
            $('#adbl-4').text(
              window.I18N_MESSAGES['index.game.antiadblocker.msg4'].replace(
                '{0}',
                _0x43209c
              )
            )
            if (_0x43209c === 0) {
              try {
                ga(
                  'send',
                  'event',
                  'antiadblocker',
                  window.runtimeHash + '_complete'
                )
              } catch (_0x3db427) {}
              $('#adbl-continue').fadeIn(200)
            }
          }, (_0x2473a7 + 1) * 1000)
        }
      }
      var _0x221799 = false
      function _0x4bd890() {}
      var _0x4fe8e7 = {
        a: function (_0x55c4c4) {
          _0x4bd890 = _0x55c4c4
          if (!_0x221799) {
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
                  AIP_COMPLETE: function (_0x42b4d4) {
                    console.log('aipC')
                    _0x4bd890(true)
                    $('#1eaom01c3pxu9wd3').hide()
                    $('#JDHnkHtYwyXyVgG9').hide()
                    try {
                      ga(
                        'send',
                        'event',
                        'preroll',
                        window.runtimeHash + '_complete'
                      )
                    } catch (_0x59a14c) {}
                  },
                  AIP_REMOVE: function () {},
                })
              })
              _0x221799 = true
            } catch (_0x3f4b4b) {}
          }
        },
        b: function () {
          if (aiptag.adplayer !== undefined) {
            try {
              ga('send', 'event', 'preroll', window.runtimeHash + '_request')
            } catch (_0x2259f0) {}
            _0x46e89b()
          } else {
            console.log('aipAABS')
            try {
              ga(
                'send',
                'event',
                'antiadblocker',
                window.runtimeHash + '_start'
              )
            } catch (_0x5cc392) {}
            _0x46e89b()
          }
        },
      }
      $('#adbl-continue').click(function () {
        $('#JDHnkHtYwyXyVgG9').fadeOut(500)
        _0x4bd890(false)
      })
      return _0x4fe8e7
    }
    function _0x5a45f1(_0x132e47, _0xaa47ac) {
      var _0x43d01a = $('#' + _0x132e47)
      var _0x4b71d0 = {
        a: function () {
          if (!_0x88559e) {
            _0x43d01a.empty()
            _0x43d01a.append("<div id='" + _0xaa47ac + "'></div>")
            try {
              try {
                ga('send', 'event', 'banner', window.runtimeHash + '_display')
              } catch (_0x3beb3b) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(_0xaa47ac)
              })
              _0x88559e = true
            } catch (_0x5957a4) {}
          }
        },
        c: function () {
          try {
            try {
              ga('send', 'event', 'banner', window.runtimeHash + '_refresh')
            } catch (_0x286629) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0xaa47ac)
            })
          } catch (_0xe3c700) {}
        },
      }
      var _0x88559e = false
      return _0x4b71d0
    }
    function _0x501e69() {
      function _0x113a6b(_0x41e2fd) {
        var _0x2d4a39 = _0x41e2fd + Math.floor(Math.random() * 65535) * 37
        _0x1b7784(_0x301e0d.d, _0x2d4a39, 30)
      }
      return (function () {
        var _0x35304f = parseInt(_0x22dc20(_0x301e0d.d)) % 37
        if (!(_0x35304f >= 0) || !(_0x35304f < _0xdf83.e)) {
          _0x35304f = Math.max(0, _0xdf83.e - 2)
        }
        var _0x3b8ec1 = {
          f: _0xdf83,
          g: false,
          i: Date.now(),
          j: 0,
          k: 0,
          l: null,
          m: _0xfacdf6,
          n: _0x5573e5,
          o: null,
          p: null,
          q: null,
          r: null,
          s: null,
          t: null,
          u: null,
          l: _0x466cdb,
          p: new _0x1782e7(),
          q: new _0x5647dd(),
          r: new _0x37099e(),
          s: new _0x3b48be(),
          t: new _0x13c952(),
          u: new _0x150fb3(),
          o: new _0xdc9614(),
          v: function () {
            _0x3b8ec1.o.z = new _0x26fb45(_0x3b8ec1.o)
            _0x3b8ec1.a()
          },
          a: function () {
            try {
              ga('send', 'event', 'app', window.runtimeHash + '_init')
            } catch (_0x5dffa4) {}
            _0x3b8ec1.o.A = function () {
              _0x3b8ec1.o.B()
            }
            _0x3b8ec1.o.C = function () {
              var _0x415b21 = _0x3b8ec1.s.F.D()
              try {
                ga(
                  'send',
                  'event',
                  'game',
                  window.runtimeHash + '_start',
                  _0x415b21
                )
              } catch (_0x26a739) {}
              _0x3b8ec1.r.G(_0x37099e.AudioState.H)
              _0x3b8ec1.s.I(_0x3b8ec1.s.H.J())
            }
            _0x3b8ec1.o.B = function () {
              try {
                ga('send', 'event', 'game', window.runtimeHash + '_end')
              } catch (_0x2ec70e) {}
              if ($('body').height() >= 430) {
                _0x3b8ec1.f.K.c()
              }
              _0x3b8ec1.p.L()
              ;(function () {
                var _0xf574b4 = Math.floor(_0x3b8ec1.o.N.M)
                var _0x480ae8 = _0x3b8ec1.o.O
                if (_0x3b8ec1.u.P()) {
                  _0x3b8ec1.u.Q(function () {
                    _0x3b8ec1.R(_0xf574b4, _0x480ae8)
                  })
                } else {
                  _0x3b8ec1.R(_0xf574b4, _0x480ae8)
                }
              })()
            }
            _0x3b8ec1.o.S = function (_0x5716e2) {
              _0x5716e2(_0x3b8ec1.s.H.T(), _0x3b8ec1.s.H.U())
            }
            _0x3b8ec1.u.V(function () {
              if (_0x3b8ec1.p.W) {
                _0x3b8ec1.r.G(_0x37099e.AudioState.F)
                _0x3b8ec1.s.I(_0x3b8ec1.s.F)
              }
              if (_0x3b8ec1.u.P()) {
                try {
                  var _0x4ab6c9 = _0x3b8ec1.u.X()
                  ga('set', 'userId', _0x4ab6c9)
                } catch (_0x499309) {}
              }
              if (_0x3b8ec1.Y() && _0x3b8ec1.u.P() && !_0x3b8ec1.u.Z()) {
                _0x3b8ec1.$(false, false)
                _0x3b8ec1.s.aa._(new _0x3e218c())
              } else {
                _0x3b8ec1.ba(true)
              }
            })
            _0x3b8ec1.p.ca(function () {
              _0x3b8ec1.r.G(_0x37099e.AudioState.F)
              _0x3b8ec1.s.I(_0x3b8ec1.s.F)
            })
            _0x3b8ec1.q.a(function () {
              _0x3b8ec1.o.a()
              _0x3b8ec1.r.a()
              _0x3b8ec1.s.a()
              _0x3b8ec1.t.a()
              _0x3b8ec1.p.a()
              _0x3b8ec1.u.a()
              if (_0x3b8ec1.Y() && !_0x3b8ec1.Z()) {
                _0x3b8ec1.s.aa._(new _0x3e218c())
              } else {
                _0x3b8ec1.ba(true)
              }
            })
          },
          da: function (_0x3097ef) {
            if (_0x3b8ec1.u.P()) {
              var _0xb95e28 = _0x3b8ec1.u.ea()
              $.get(
                'https://gateway.wormate.io/pub/wuid/' +
                  _0xb95e28 +
                  '/consent/change?value=' +
                  encodeURI(_0x3097ef),
                function (_0x50e9b0) {}
              )
            }
          },
          fa: function (_0x55d434) {
            var _0x3339d7 = _0x3b8ec1.u.ea()
            var _0x2b67e3 = _0x3b8ec1.s.F.D()
            var _0x1f973b = _0x3b8ec1.s.F.ga()
            var _0x1dad4a = _0x3b8ec1.t.ha(_0xc00eb6.ia)
            var _0x23a1fa = _0x3b8ec1.t.ha(_0xc00eb6.ja)
            var _0x4dc0f4 = _0x3b8ec1.t.ha(_0xc00eb6.ka)
            var _0x23a2b0 = _0x3b8ec1.t.ha(_0xc00eb6.la)
            var _0x17b444 = _0x3b8ec1.t.ha(_0xc00eb6.ma)
            var _0x1e2653 = 0
            if (_0x3b8ec1.l != null) {
              var _0x156b14 = _0x3b8ec1.l.coords.latitude
              var _0xeb5066 = _0x3b8ec1.l.coords.longitude
              _0x1e2653 =
                (Math.max(
                  0,
                  Math.min(32767, ((_0x156b14 + 90) / 180) * 32768)
                ) <<
                  1) |
                1 |
                (Math.max(
                  0,
                  Math.min(65535, ((_0xeb5066 + 180) / 360) * 65536)
                ) <<
                  16)
            }
            ___worm25.testSkinCustom(_0x1dad4a)
            let _0x1561c3 =
              'A_' +
              (_0x1dad4a > 9999
                ? '0000'
                : _0x1dad4a.toString().padStart(4, 0)) +
              (_0x17b444 > 999 ? '000' : _0x17b444.toString().padStart(3, 0)) +
              (_0x23a1fa > 999 ? '000' : _0x23a1fa.toString().padStart(3, 0)) +
              (_0x4dc0f4 > 999 ? '000' : _0x4dc0f4.toString().padStart(3, 0))
            _0x1f973b =
              (_0x1f973b.length >= 32
                ? _0x1f973b.substr(0, 16)
                : _0x1f973b.substr(0, 16).padEnd(16, '_')) + _0x1561c3
            _0x1f973b = _0x1f973b.trim()
            var _0x54a20c =
              'https://gateway.wormate.io/pub/wuid/' +
              _0x3339d7 +
              '/start?gameMode=' +
              encodeURI(_0x2b67e3) +
              '&gh=' +
              _0x1e2653 +
              '&nickname=' +
              encodeURI(_0x1f973b) +
              '&skinId=' +
              ___worm25.validInput(_0x1dad4a) +
              '&eyesId=' +
              encodeURI(_0x23a1fa) +
              '&mouthId=' +
              encodeURI(_0x4dc0f4) +
              '&glassesId=' +
              encodeURI(_0x23a2b0) +
              '&hatId=' +
              encodeURI(_0x17b444)
            $.get(_0x54a20c, function (_0x479e37) {
              var _0x223951 = _0x479e37.server_url
              _0x55d434(_0x223951)
            })
          },
          na: function () {
            _0x35304f++
            if (!_0x3b8ec1.f.oa && _0x35304f >= _0x3b8ec1.f.e) {
              _0x3b8ec1.s.I(_0x3b8ec1.s.pa)
              _0x3b8ec1.r.G(_0x37099e.AudioState.qa)
              _0x3b8ec1.f.ra.b()
            } else {
              _0x113a6b(_0x35304f)
              _0x3b8ec1.sa()
            }
          },
          sa: function (_0x5e1709) {
            if (_0x3b8ec1.o.ta()) {
              _0x3b8ec1.s.I(_0x3b8ec1.s.ua)
              _0x3b8ec1.r.G(_0x37099e.AudioState.ua)
              var _0x4b4257 = _0x3b8ec1.s.F.D()
              _0x1b7784(_0x301e0d.va, _0x4b4257, 30)
              var _0x28acbc = _0x3b8ec1.s.xa.wa()
              _0x1b7784(_0x301e0d.ya, _0x28acbc, 30)
              if (_0x3b8ec1.u.P()) {
                _0x3b8ec1.fa(function (_0x22e90a) {
                  hoisinhnhanh = _0x5e1709 ? _0x5e1709 : _0x22e90a
                  _0x3b8ec1.o.za(
                    window.server_url || _0x22e90a,
                    _0x3b8ec1.u.ea()
                  )
                })
              } else {
                var _0x53b003 = _0x3b8ec1.s.F.ga()
                _0x1b7784(_0x301e0d.Aa, _0x53b003, 30)
                var _0x3512c7 = _0x3b8ec1.t.ha(_0xc00eb6.ia)
                _0x1b7784(_0x301e0d.Ba, _0x3512c7, 30)
                _0x3b8ec1.fa(function (_0x34eb44) {
                  hoisinhnhanh = _0x5e1709 ? _0x5e1709 : _0x34eb44
                  _0x3b8ec1.o.Ca(_0x34eb44, _0x53b003, _0x3512c7)
                })
              }
            }
          },
          R: function (_0x3c0ba6, _0x4073de) {
            var _0x132cba = _0x3b8ec1.s.F.ga()
            _0x3b8ec1.s.H.Da(_0x3c0ba6, _0x4073de, _0x132cba)
            _0x3b8ec1.r.G(_0x37099e.AudioState.Ea)
            _0x3b8ec1.s.I(_0x3b8ec1.s.H.Fa())
          },
          Ga: function () {
            if (!_0x3b8ec1.Ha()) {
              return _0x3b8ec1.t.Ia()
            }
            var _0x52e61 = parseInt(_0x22dc20(_0x301e0d.Ba))
            return _0x52e61 != null && _0x3b8ec1.t.Ja(_0x52e61, _0xc00eb6.ia)
              ? _0x52e61
              : _0x3b8ec1.t.Ia()
          },
          Ka: function (_0x4eaf0b) {
            _0x1b7784(_0x301e0d.La, !!_0x4eaf0b, 1800)
          },
          Ha: function () {
            return _0x22dc20(_0x301e0d.La) === 'true'
          },
          g: _0x5beafc,
          ba: function (_0x5beafc) {
            if (_0x5beafc != _0x3b8ec1.g) {
              var _0xf68e1b = _0xf68e1b || {}
              _0xf68e1b.consented = _0x5beafc
              _0xf68e1b.gdprConsent = _0x5beafc
              _0x3b8ec1.f.Ma.a()
              _0x3b8ec1.f.K.a()
              _0x3b8ec1.f.ra.a(function (_0x4cbcaf) {
                if (_0x4cbcaf) {
                  _0x113a6b((_0x35304f = 0))
                }
                _0x3b8ec1.sa()
              })
            }
          },
          $: function (_0x1ca83b, _0x4a54f6) {
            _0x1b7784(_0x301e0d.Na, _0x1ca83b ? 'true' : 'false')
            if (_0x4a54f6) {
              _0x3b8ec1.da(_0x1ca83b)
            }
            _0x3b8ec1.ba(_0x1ca83b)
          },
          Z: function () {
            switch (_0x22dc20(_0x301e0d.Na)) {
              case 'true':
                return true
              default:
                return false
            }
          },
          Y: function () {
            try {
              return (
                !!window.isIPInEEA ||
                (_0x3b8ec1.l != null &&
                  !!_0x1bc192.Oa(
                    _0x3b8ec1.l.coords.latitude,
                    _0x3b8ec1.l.coords.longitude
                  ))
              )
            } catch (_0x50df4b) {
              return true
            }
          },
          j: Date.now(),
          k: _0x3b8ec1.j - _0x3b8ec1.i,
          i: _0x3b8ec1.j,
          Pa: function () {
            _0x3b8ec1.o.Qa(_0x3b8ec1.j, _0x3b8ec1.k)
            _0x3b8ec1.s.Qa(_0x3b8ec1.j, _0x3b8ec1.k)
          },
          Ra: function () {
            _0x3b8ec1.s.Ra()
          },
        }
        _0x47002d = _0x3b8ec1
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              function (_0x466cdb) {
                if (_0x466cdb.coords !== undefined) {
                  var _0x273716 = _0x466cdb.coords
                  if (
                    _0x273716.latitude !== undefined &&
                    _0x273716.longitude !== undefined
                  ) {
                  }
                }
              },
              function (_0x16116e) {}
            )
          }
        } catch (_0x3145b2) {}
        return _0x3b8ec1
      })()
    }
    function _0xdc9614() {
      var _0x18e8f6 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new _0x2d1252(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500,
      }
      _0x18e8f6.fb.ub = 500
      _0x18e8f6.N = new _0x26f19e(_0x18e8f6.fb)
      _0x18e8f6.a = function () {
        _0x18e8f6.N.vb((window.anApp = _0x47002d).s.H.wb)
        setInterval(function () {
          _0x18e8f6.S(function (_0x30bb3c, _0x1d523c) {
            _0x18e8f6.xb(_0x30bb3c, _0x1d523c)
          })
        }, 10)
      }
      _0x18e8f6.yb = function (_0x4f17ce, _0x57d47f, _0x1325d4, _0x43201c) {
        _0x18e8f6.lb = _0x4f17ce
        _0x18e8f6.mb = _0x57d47f
        _0x18e8f6.nb = _0x1325d4
        _0x18e8f6.ob = _0x43201c
        _0x18e8f6.zb()
      }
      _0x18e8f6.Ab = function (_0x3aa3d0) {
        _0x18e8f6.kb = _0x3aa3d0
        _0x18e8f6.zb()
      }
      _0x18e8f6.zb = function () {
        _0x18e8f6.pb = _0x18e8f6.lb - _0x18e8f6.kb
        _0x18e8f6.qb = _0x18e8f6.mb + _0x18e8f6.kb
        _0x18e8f6.rb = _0x18e8f6.nb - _0x18e8f6.kb
        _0x18e8f6.sb = _0x18e8f6.ob + _0x18e8f6.kb
      }
      _0x18e8f6.Qa = function (_0x195607, _0x347781) {
        _0x18e8f6.$a += _0x347781
        _0x18e8f6.Za -= _0x18e8f6.Ya * 0.2 * _0x347781
        _0x18e8f6.z.Bb()
        if (
          _0x18e8f6.db != null &&
          (_0x18e8f6.cb === 2 || _0x18e8f6.cb === 3)
        ) {
          _0x18e8f6.Cb(_0x195607, _0x347781)
          _0x18e8f6.jb = 4 + _0x18e8f6.ib * _0x18e8f6.N.Db
        }
        var _0x5c1138 = 1000 / Math.max(1, _0x347781)
        var _0x346162 = 0
        var _0x26f313 = 0
        for (; _0x26f313 < _0x18e8f6.Xa.length - 1; _0x26f313++) {
          _0x346162 = _0x346162 + _0x18e8f6.Xa[_0x26f313]
          _0x18e8f6.Xa[_0x26f313] = _0x18e8f6.Xa[_0x26f313 + 1]
        }
        _0x18e8f6.Xa[_0x18e8f6.Xa.length - 1] = _0x5c1138
        _0x18e8f6.Wa = (_0x346162 + _0x5c1138) / _0x18e8f6.Xa.length
      }
      _0x18e8f6.Eb = function (_0x58a96b, _0x2d8c20) {
        return (
          _0x58a96b > _0x18e8f6.pb &&
          _0x58a96b < _0x18e8f6.qb &&
          _0x2d8c20 > _0x18e8f6.rb &&
          _0x2d8c20 < _0x18e8f6.sb
        )
      }
      _0x18e8f6.Cb = function (_0x2a7ae5, _0x367fa7) {
        var _0x4a9885 = _0x18e8f6.$a + _0x18e8f6.Za
        var _0x2111dd =
          (_0x4a9885 - _0x18e8f6._a) / (_0x18e8f6.ab - _0x18e8f6._a)
        _0x18e8f6.N.Fb(_0x2a7ae5, _0x367fa7)
        _0x18e8f6.N.Gb(_0x2a7ae5, _0x367fa7, _0x2111dd, _0x18e8f6.Eb)
        var _0x2c46eb = 0
        var _0x4f0e9e
        for (_0x4f0e9e in _0x18e8f6.hb) {
          var _0x1f7624 = _0x18e8f6.hb[_0x4f0e9e]
          _0x1f7624.Fb(_0x2a7ae5, _0x367fa7)
          _0x1f7624.Gb(_0x2a7ae5, _0x367fa7, _0x2111dd, _0x18e8f6.Eb)
          if (_0x1f7624.Hb && _0x1f7624.Db > _0x2c46eb) {
            _0x2c46eb = _0x1f7624.Db
          }
          if (!_0x1f7624.Ib && (!!(_0x1f7624.Jb < 0.005) || !_0x1f7624.Hb)) {
            _0x1f7624.Kb()
            delete _0x18e8f6.hb[_0x1f7624.Mb.Lb]
          }
        }
        _0x18e8f6.Ab(_0x2c46eb * 3)
        var _0x13d66c
        for (_0x13d66c in _0x18e8f6.gb) {
          var _0x20d29a = _0x18e8f6.gb[_0x13d66c]
          _0x20d29a.Fb(_0x2a7ae5, _0x367fa7)
          _0x20d29a.Gb(_0x2a7ae5, _0x367fa7, _0x18e8f6.Eb)
          if (
            _0x20d29a.Nb &&
            (_0x20d29a.Jb < 0.005 || !_0x18e8f6.Eb(_0x20d29a.Ob, _0x20d29a.Pb))
          ) {
            _0x20d29a.Kb()
            delete _0x18e8f6.gb[_0x20d29a.Mb.Lb]
          }
        }
      }
      _0x18e8f6.Qb = function (_0x536af6, _0x427494) {
        if (_0x18e8f6.cb === 1) {
          _0x18e8f6.cb = 2
          _0x18e8f6.C()
        }
        var _0x1c2975 = (window.anApp = _0x47002d).j
        _0x18e8f6.bb = _0x536af6
        if (_0x536af6 === 0) {
          _0x18e8f6._a = _0x1c2975 - 95
          _0x18e8f6.ab = _0x1c2975
          _0x18e8f6.$a = _0x18e8f6._a
          _0x18e8f6.Za = 0
        } else {
          _0x18e8f6._a = _0x18e8f6.ab
          _0x18e8f6.ab = _0x18e8f6.ab + _0x427494
        }
        var _0x9fab7a = _0x18e8f6.$a + _0x18e8f6.Za
        _0x18e8f6.Ya =
          (_0x9fab7a - _0x18e8f6._a) / (_0x18e8f6.ab - _0x18e8f6._a)
      }
      _0x18e8f6.Rb = function () {
        if (_0x18e8f6.cb === 1 || _0x18e8f6.cb === 2) {
          _0x18e8f6.cb = 3
          var _0x250afc = _0x18e8f6.db
          setTimeout(function () {
            if (_0x18e8f6.cb === 3) {
              _0x18e8f6.cb = 0
            }
            if (_0x250afc != null && _0x250afc === _0x18e8f6.db) {
              _0x18e8f6.db.close()
              _0x18e8f6.db = null
            }
          }, 5000)
          _0x18e8f6.B()
        }
      }
      _0x18e8f6.ta = function () {
        return (
          _0x18e8f6.cb !== 2 &&
          ((_0x18e8f6.cb = 1),
          _0x18e8f6.z.Sb(),
          (_0x18e8f6.gb = {}),
          (_0x18e8f6.hb = {}),
          _0x18e8f6.N.Tb(),
          _0x18e8f6.db != null && (_0x18e8f6.db.close(), (_0x18e8f6.db = null)),
          true)
        )
      }
      _0x18e8f6.Ub = function () {
        _0x18e8f6.db = null
        _0x18e8f6.z.Sb()
        if (_0x18e8f6.cb !== 3) {
          _0x18e8f6.A()
        }
        _0x18e8f6.cb = 0
      }
      _0x18e8f6.za = function (_0x30f090, _0x15ee74) {
        _0x18e8f6.Vb(_0x30f090, function () {
          var _0x4886b = Math.min(2048, _0x15ee74.length)
          var _0x26ecf5 = new ArrayBuffer(6 + _0x4886b * 2)
          var _0x2d57d4 = new DataView(_0x26ecf5)
          var _0x49b74b = 0
          _0x2d57d4.setInt8(_0x49b74b, 129)
          _0x49b74b = _0x49b74b + 1
          _0x2d57d4.setInt16(_0x49b74b, 2800)
          _0x49b74b = _0x49b74b + 2
          _0x2d57d4.setInt8(_0x49b74b, 1)
          _0x49b74b = _0x49b74b + 1
          _0x2d57d4.setInt16(_0x49b74b, _0x4886b)
          _0x49b74b = _0x49b74b + 2
          var _0x4bdde2 = 0
          for (; _0x4bdde2 < _0x4886b; _0x4bdde2++) {
            _0x2d57d4.setInt16(_0x49b74b, _0x15ee74.charCodeAt(_0x4bdde2))
            _0x49b74b = _0x49b74b + 2
          }
          _0x18e8f6.Wb(_0x26ecf5)
        })
      }
      _0x18e8f6.Ca = function (_0x53b12c, _0x562fc4, _0x3f27c5) {
        _0x18e8f6.Vb(_0x53b12c, function () {
          var _0x770486 = Math.min(32, _0x562fc4.length)
          var _0x4db31d = new ArrayBuffer(7 + _0x770486 * 2)
          var _0x19c5c9 = new DataView(_0x4db31d)
          var _0x3c37e7 = 0
          _0x19c5c9.setInt8(_0x3c37e7, 129)
          _0x3c37e7 = _0x3c37e7 + 1
          _0x19c5c9.setInt16(_0x3c37e7, 2800)
          _0x3c37e7 = _0x3c37e7 + 2
          _0x19c5c9.setInt8(_0x3c37e7, 0)
          _0x3c37e7 = _0x3c37e7 + 1
          _0x19c5c9.setInt16(_0x3c37e7, _0x3f27c5)
          _0x3c37e7 = _0x3c37e7 + 2
          _0x19c5c9.setInt8(_0x3c37e7, _0x770486)
          _0x3c37e7++
          var _0x32d966 = 0
          for (; _0x32d966 < _0x770486; _0x32d966++) {
            _0x19c5c9.setInt16(_0x3c37e7, _0x562fc4.charCodeAt(_0x32d966))
            _0x3c37e7 = _0x3c37e7 + 2
          }
          _0x18e8f6.Wb(_0x4db31d)
        })
      }
      _0x18e8f6.Wb = function (_0x50966b) {
        try {
          if (
            _0x18e8f6.db != null &&
            _0x18e8f6.db.readyState === WebSocket.OPEN
          ) {
            _0x18e8f6.db.send(_0x50966b)
          }
        } catch (_0x48371c) {
          console.log('Socket send error: ' + _0x48371c)
          _0x18e8f6.Ub()
        }
      }
      _0x18e8f6.xb = function (_0x42607c, _0x13212d) {
        var _0x5cea69 = _0x13212d ? 128 : 0
        var _0x143993 = ((_0x263d65(_0x42607c) / _0x2692a8) * 128) & 127
        var _0x151848 = (_0x5cea69 | _0x143993) & 255
        if (_0x18e8f6.eb !== _0x151848) {
          var _0xc2f54b = new ArrayBuffer(1)
          new DataView(_0xc2f54b).setInt8(0, _0x151848)
          _0x18e8f6.Wb(_0xc2f54b)
          _0x18e8f6.eb = _0x151848
        }
      }
      _0x18e8f6.Vb = function (_0x2539e8, _0x35ac56) {
        let _0x3a193f = loadJoy(!thewftyildoobj.mobile)
        var _0x4827ea = (_0x18e8f6.db = new WebSocket(_0x2539e8))
        _0x4827ea.binaryType = 'arraybuffer'
        window.onOpen = _0x4827ea.onopen = function () {
          _0x3da684('open')
          if (_0x18e8f6.db === _0x4827ea) {
            _0x35ac56()
          }
          isPlaying = true
        }
        window.onclose = _0x4827ea.onclose = function () {
          _0x3da684('closed')
          ___worm25.aload = false
          if (_0x18e8f6.db === _0x4827ea) {
            console.log('Socket closed')
            _0x18e8f6.Ub()
          }
          isPlaying = false
          if (_0x3a193f) {
            _0x3a193f.destroy()
          }
        }
        _0x4827ea.onerror = function (_0x3f1707) {
          if (_0x18e8f6.db === _0x4827ea) {
            console.log('Socket error')
            _0x18e8f6.Ub()
          }
          isPlaying = false
          if (_0x3a193f) {
            _0x3a193f.destroy()
          }
        }
        _0x4827ea.onmessage = function (_0x5e7ea3) {
          if (_0x18e8f6.db === _0x4827ea) {
            _0x18e8f6.z.Xb(_0x5e7ea3.data)
          }
        }
      }
      return _0x18e8f6
    }
    var _0x5573e5 = window.I18N_LANG;
        _0x5573e5 ||= 'en';
        var _0xfacdf6 = undefined;
        switch (_0x5573e5) {
        case 'uk':
            _0xfacdf6 = 'uk_UA';
            break;
        case 'de':
            _0xfacdf6 = "de_DE";
            break;
        case 'fr':
            _0xfacdf6 = "fr_FR";
            break;
        case 'ru':
            _0xfacdf6 = "ru_RU";
            break;
        case 'es':
            _0xfacdf6 = "es_ES";
            break;
        default:
            _0xfacdf6 = "en_US"
        }
        moment.locale(_0xfacdf6);
        var _0x47002d = undefined;
        var _0x33b7ba = function() {
            var _0x176e6b = {
                'Yb': eval('PIXI;')
            };
            var _0x394e9e = _0x176e6b.Yb.BLEND_MODES;
            var _0x1cde82 = _0x176e6b.Yb.WRAP_MODES;
            return {
                'Zb': _0x176e6b.Yb.Container,
                '$b': _0x176e6b.Yb.BaseTexture,
                '_b': _0x176e6b.Yb.Texture,
                'ac': _0x176e6b.Yb.Renderer,
                'bc': _0x176e6b.Yb.Graphics,
                'cc': _0x176e6b.Yb.Shader,
                'dc': _0x176e6b.Yb.Rectangle,
                'ec': _0x176e6b.Yb.Sprite,
                'fc': _0x176e6b.Yb.Text,
                'gc': _0x176e6b.Yb.Geometry,
                'hc': _0x176e6b.Yb.Mesh,
                'ic': {
                    'jc': _0x394e9e.ADD
                },
                'kc': {
                    'lc': _0x1cde82.REPEAT
                }
            }
        }();
    _0x248efb.main = {
      Ma: _0x5a45f1('aqnvgcpz05orkobh', 'WRM_wormate-io_300x250'),
      K: _0x5a45f1('ltmolilci1iurq1i', 'wormate-io_970x250'),
      ra: _0x30b678(),
      e: 4,
      oa: false,
      qk: true,
    }
    _0x248efb.miniclip = {
      Ma: _0x5a45f1('aqnvgcpz05orkobh', 'WRM_wormate-io_300x250'),
      K: _0x5a45f1('ltmolilci1iurq1i', 'wormate-io_970x250'),
      ra: _0x30b678(),
      e: 4,
      oa: false,
      qk: false,
    }
    _0xdf83 ||= _0x248efb.main
    $(function () {
      FastClick.attach(document.body)
    })
    addEventListener('contextmenu', function (_0x2306f1) {
      _0x2306f1.preventDefault()
      _0x2306f1.stopPropagation()
      return false
    })
    _0x1e3f1e(
      '//connect.facebook.net/' + _0xfacdf6 + '/sdk.js',
      'facebook-jssdk',
      function () {
        FB.init({
          appId: '861926850619051',
          cookie: true,
          xfbml: true,
          status: true,
          version: 'v8.0',
        })
      }
    )
    _0x1e3f1e('//apis.google.com/js/api:client.js', null, function () {
      gapi.load('auth2', function () {
        GoogleAuth = gapi.auth2.init({
          client_id:
            '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com',
        })
      })
    })
    _0x47002d = _0x501e69()
    _0x47002d.v()
    if (PhoneChecked()) {
      _0x1e3f1e(
        'https://wormmedia.com.tr/extension/js/joy.min.js',
        'mobileconfig',
        function () {
          _0x1728b9()
        }
      )
    }
    window.keyMove = 'q'
    window.addEventListener(
      'keydown',
      function (_0xa1c97) {
        if (_0xa1c97.key.toLowerCase() !== 'q' || !isPlaying) {
          return
        }
        if (isTurning) {
          clearInterval(PilotoAutomatico)
          PilotoAutomatico = null
          isTurning = false
          console.log('Dönüş durdu')
        } else {
          const _0x1019a0 = window.tuNewScore
          PilotoAutomatico = setInterval(function () {
            let _0x314b64 = Math.PI / 80
            theoEvents.eventoPrincipal.sk += _0x314b64
            if (theoEvents.eventoPrincipal.sk >= 2 * Math.PI) {
              theoEvents.eventoPrincipal.sk -= 2 * Math.PI
            } else {
              if (theoEvents.eventoPrincipal.sk <= -2 * Math.PI) {
                theoEvents.eventoPrincipal.sk += 2 * Math.PI
              }
            }
            let _0x58f9b3 = document.getElementById('elementId')
            if (_0x58f9b3) {
              _0x58f9b3.style.transform =
                'rotate(' + theoEvents.eventoPrincipal.sk + 'rad)'
            }
          }, 20)
          isTurning = true
          console.log('Dönüş başladı')
        }
        localStorage.setItem('SaveGameXT', JSON.stringify(thewftyildoobj))
      },
      false
    )
    thewftyildoobj.loading = true
    _0x19664f += '</div>'
    _0x19664f += '</div>'
    _0x19664f += '</div>'
    _0x19664f += '<div id="wormcerca">'
    _0x19664f +=
      '<img class="pwrups v0" style="display: none;" src="https://i.imgur.com/M1LFPpp.png">'
    _0x19664f +=
      '<img class="pwrups v1" style="display: none;" src="https://i.imgur.com/z162iYa.png">'
    _0x19664f +=
      '<img class="pwrups v2" style="display: none;" src="https://i.imgur.com/kXlF32q.png">'
    _0x19664f +=
      '<img class="pwrups v3" style="display: none;" src="https://i.imgur.com/kJ6oz7e.png">'
    _0x19664f +=
      '<img class="pwrups v4" style="display: none;" src="https://i.imgur.com/l3ds43O.png">'
    _0x19664f +=
      '<img class="pwrups v5" style="display: none;" src="https://i.imgur.com/FqA56k6.png">'
    _0x19664f +=
      '<img class="pwrups v6" style="display: none;" src="https://i.imgur.com/mSCZeEp.png">'
    _0x19664f += '</div>'
    _0x19664f +=
      '<img class="worm_1" src="https://i.imgur.com/iekrYYm.png"><span class="Worm_cerca"></span>'
    _0x19664f +=
      '</div><div class="worm_2"><button id="settingBtn"><img src="https://i.imgur.com/bKAe6W9.png"/></button><div id="settingContent"><div class="container1"><span class="settings_span">Spin-Fast: </span><input id="smoothCamera" class="range" type="range" min="0.3" max="0.6" value="\' + thewftyildoobj.smoothCamera + \'" step="0.1" onmousemove="smoothCameraValue.value=value" /></div><div class="container1">\n        <span class="settings_span">Power-ups-Size: </span>\n        <input id="PortionSize" class="range" type="range" min="1" max="6" value="\' + thewftyildoobj.PortionSize + \'" step="1" onmousemove="rangevalue1.value=value" />\n        </div>\n        \n      <div class="container1">\n      <span class="settings_span">Power-ups-Aura: </span>\n      <input id="PortionAura" class="range" type="range" min="1.2" max="3.2" value="\' + thewftyildoobj.PortionAura + \'" step="0.2" onmousemove="PortionAuravalue.value=value" />\n      </div>\n       \n      <div class="container1">\n                    <span class="settings_span">Food-Size: </span>\n                    <input id="FoodSize" class="range" type="range" min="0.5" max="3" value="\' + thewftyildoobj.FoodSize + \'" step="0.5" onmousemove="rangevalue2.value=value" />\n                    </div>\n                    <div class="container1">\n                    <span class="settings_span">Food-Shadow: </span>\n                    <input id="FoodShadow" class="range" type="range" min="0.5" max="3" value="\' + thewftyildoobj.FoodShadow + \'" step="0.5" onmousemove="FoodShadowvalue.value=value" />\n                    </div>\n    </div>\n    </div><div style="display:none" id="zoom-container"><div id="zoom-out">-</div><div id="zoom-in">+</div><div class="worm_3">x.<span id="zoom-percentage"></span>'
    $('#game-view').append(_0x19664f)
    function _0x3f9d14(_0x12dcb8) {
      if (thewftyildoobj.PropertyManager) {
        _0x12dcb8.skinId = thewftyildoobj.PropertyManager.rh
        _0x12dcb8.eyesId = thewftyildoobj.PropertyManager.sh
        _0x12dcb8.mouthId = thewftyildoobj.PropertyManager.th
        _0x12dcb8.glassesId = thewftyildoobj.PropertyManager.uh
        _0x12dcb8.hatId = thewftyildoobj.PropertyManager.vh
      }
    }
    function _0x15cab6() {
      $(document).ready(function () {
        $('#mm-event-text').replaceWith(
          '<div class="text-vnxx"><a href="https://www.wormate.io">هل أنت مستعد للمغامرة\u061F \uD83D\uDC32</a></div>'
        )
      })
      $('#mm-store').after(
        `<div id="mm-store"style="float: right; position: relative; margin-right: 10px; min-width: 140px;"><div style="margin: 0;"id="loa831pibur0w4gv"><div onclick="openPopup()"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: yellow; font-size: 25px;"></i>إعدادات</div><div id="popup"class="popup"><div class="phdr1"style="display: flex; justify-content: center; align-items: center;"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: yellow; font-size: 25px; margin-right: 10px;"></i><span>إعدادات اللاعب<span></div><button class="close-button"onclick="closePopup()">يغلق</button><!--Tab navigation--><div class="tab-buttons"style="display: flex; justify-content: space-around; margin-bottom: 10px;"><button class="tab-button active"onclick="openTab('gameSettings')">🔧الإعدادات العامة للعبة</button><button class="tab-button"onclick="openTab('backgroundSettings')">🐶خلفية الفأر</button></div><!--Game Settings tab--><div id="gameSettings"class="tab-content active"><div id="kich-hoat">ID:<input type="text"value="${thewftyildoobj.FB_UserID}"class="you-id"/><button class="you-id-copy"onclick="navigator.clipboard.writeText('${thewftyildoobj.FB_UserID}').then(() => alert('Your ID ${thewftyildoobj.FB_UserID} نسخ!'));">COPY</button></div><table><tbody><tr><td><div class="settings-lineZoom"><span class="settings-labelZoom"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #0d7aef; font-size: 22px;"></i>Eat Fast:</span><input class="settings-switchZoom"id="settings-Abilityzoom-switch"type="checkbox"/><label for="settings-Abilityzoom-switch"></label></div></td><td><div class="settings-lineZoom"><span class="settings-labelZoom"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #0d7aef; font-size: 22px;"></i>Streamer Mode:</span><input class="settings-switchZoom"id="settings-stremingmode-switch"type="checkbox"/><label for="settings-stremingmode-switch"></label></div></td><td><div class="settings-lineZoom"><span class="settings-labelZoom"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #0d7aef; font-size: 22px;"></i>Total HS:</span><input class="settings-switchZoom"id="settings-stremingmodesaveheadshot-switch"type="checkbox"/><label for="settings-stremingmodesaveheadshot-switch"></label></div></td></tr><tr><td><div class="settings-lineZoom"><span class="settings-labelZoom"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #0d7aef; font-size: 22px;"></i>3 Top:</span><input class="settings-switchZoom"id="settings-stremingmodebatop-switch"type="checkbox"/><label for="settings-stremingmodebatop-switch"></label></div></td><td><div class="settings-lineZoom"><span class="settings-labelZoom"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #0d7aef; font-size: 22px;"></i>Off Emoj:</span><input class="settings-switchZoom"id="settings-stremingmodeemoj-switch"type="checkbox"/><label for="settings-stremingmodeemoj-switch"></label></div></td><td><div class="settings-lineZoom"><span class="settings-labelZoom">🔊</span><select id="sound-selector"><option value="https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3">Head Shot</option><option value="https://www.myinstants.com/media/sounds/sniper-shot.mp3">Sniper</option><option value="https://www.myinstants.com/media/sounds/headshot_6.mp3">Head Shot2</option><option value="https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3">Bye Bye</option><option value="https://wormatefriendsturkey.com/extension/video/mario-jump.mp3">Mario Jump</option><option value="https://wormatefriendsturkey.com/extension/video/pew.mp3">Pew</option><option value="https://wormatefriendsturkey.com/extension/video/pingo.mp3">Pingo</option><option value="https://wormatefriendsturkey.com/extension/video/wak-wak.mp3">wak wak</option></select><input class="settings-switchZoom"id="settings-stremingmodeheadshot-switch"type="checkbox"/><label for="settings-stremingmodeheadshot-switch"></label><label for="sound-selector"></label></div></td></tr></tbody></table></div><!-- Ä°FRAME BURAYA EKLENDÄ° --><div class="iframe-container" style="margin-top: 135px;"><div class="ssscursır"><i aria-hidden="true" class="fa fa-upload" style="color:#ffffff; font-size: 25px; margin-right: 10px;"></i>إعدادات الرسومات</div><div id="graphics-settings"><button onclick="applyGraphicsSettings('low', this)">قليل</button><button onclick="applyGraphicsSettings('medium', this)">وسط</button><button onclick="applyGraphicsSettings('high', this)">عالي</button></div><center><div class="hg"><a target="_blank" href="###">Active(I love You 25 YT)</a></div></center><!--Message Settings tab--><div id="messageSettings"class="tab-content"style="display:none;"><h3>Oyunİçerisinde Attıgınız KafalarınÜzerindeÇıkan YazılarıBuradan Değiştirebilirsiniz.</h3><div style="display: flex; justify-content: center; align-items: center; flex-direction: row;"><div style="margin-bottom: 15px; width: 100%; max-width: 200px;"><label for="killSelect">Çarpma Yazısı</label><select id="killSelect"style="width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;"><option value="Well Done!">Well Done!</option><option value="Galiba Tır Çarptı🤣">Galiba TırÇarptı🤣</option><option value="Depremmi Oldu">🤣Depremmi Oldu🤣</option><option value="Aha Araba Çarptı🤣">Aha ArabaÇarptı🤣</option><option value="O Neydi  qızz!🙀">O Neydi qızz!🙀</option></select></div><div style="margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;"><label for="headshotSelect">Headshot YazısıSeç</label><select id="headshotSelect"style="width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;"><option value="HEADSHOT">HEADSHOT</option><option value="إNoldu Yapram">NolduYapram🤣</option><option value="Nasıl Vurdum Ama🤣 🔪">Nasıl Vurdum Ama🤣🔪</option><option value="HEADSHOT ☠️">HEADSHOT☠️</option></select></div></div><button onclick="saveMessages()"style="margin-top: 5px;">Sıfırla</button></div><!--Background Settings tab--><div id="backgroundSettings"class="tab-content"style="display:none;"><table><tbody><tr><td><div class="spancursor"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #ff8f00; font-size: 25px;"></i>Select Curos</div><div class="cursor-container"><div id="default-cursor-btn"><img style="margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;"class="img"alt="Imgur-Upload"src="https://i.imgur.com/rI522o3.png"></div></div></td><td><div class="spancursor"><i aria-hidden="true"class="fa fa-cog fa-spin"style="color: #ff8f00; font-size: 25px;"></i>Select Background</div><div class="background-container"></div></td></tr></tbody></table></div></div></div></div><style>.tab-buttons button{padding:10px;background-color:#ddd;border:none;cursor:pointer;flex:1;text-align:center}.tab-buttons button.active{background-color:#0d7aef;color:white}.tab-content{display:none}.tab-content.active{display:block}.background-options{margin-top:20px}.settings-labelZoom{font-size:16px}#messageSettings{display:flex;flex-direction:row;justify-content:center;align-items:center}#messageSettings div{width:100%;max-width:100%}</style><script>function openTab(tabId){const contents=document.querySelectorAll('.tab-content');const buttons=document.querySelectorAll('.tab-button');contents.forEach(content=>content.style.display='none');buttons.forEach(button=>button.classList.remove('active'));document.getElementById(tabId).style.display='block';event.target.classList.add('active')}function saveMessages(){const headshotMessage=document.getElementById("headshotSelect").value;const killMessage=document.getElementById("killSelect").value;localStorage.setItem("headshotMessage",headshotMessage);localStorage.setItem("killMessage",killMessage);alert("Başarılı şekilde kayıt edilmiştir!");console.log("Headshot Message: "+headshotMessage);console.log("Kill Message: "+killMessage)}function loadMessages(){const savedHeadshot=localStorage.getItem("headshotMessage");const savedKill=localStorage.getItem("killMessage");if(savedHeadshot){const headshotSelect=document.getElementById("headshotSelect");if(headshotSelect){headshotSelect.value=savedHeadshot}}if(savedKill){const killSelect=document.getElementById("killSelect");if(killSelect){killSelect.value=savedKill}}}function initializeSettings(){setTimeout(()=>{loadMessages()},100)}initializeSettings();</script>`
      )
      $('#loa831pibur0w4gv').replaceWith(
        `<div style="margin: 0;"id="loa831pibur0w4gv"><link rel="stylesheet"href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><div class="label"id="titleSetings">🚫 لا يوجد تفعيل"/><button style="height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;"onclick="navigator.clipboard.writeText('${thewftyildoobj.FB_UserID}').then(() => alert('تم نسخ معرفك ${thewftyildoobj.FB_UserID}!'));">نسخ</button><center><div class="hg"><a target="_blank"href="https://wormatefriendsturkey.com/">✅التنشيط</a><br><br><a>⚠يرجى التنشيط، وإلا فسيتم تعطيل التكبير والعديد من ميزاتك.</a></div></center></div></div>`
      )
      const soundSelector = document.getElementById('sound-selector')
      function applyGraphicsSettings(level, button) {
        console.log(`${level} FPS ayarlarÄ± uygulanÄ±yor...`)
        const buttons = document.querySelectorAll('#graphics-settings button')
        buttons.forEach((btn) => btn.classList.remove('active'))
        button.classList.add('active')
        switch (level) {
          case 'low':
            console.log('DÃ\xBCÅŸÃ\xBCk FPS grafik ayarlarÄ\xB1 uygulandÄ\xB1.')
            break
          case 'medium':
            console.log('Orta FPS grafik ayarlarÄ\xB1 uygulandÄ\xB1.')
            break
          case 'high':
            console.log('YÃ\xBCksek FPS grafik ayarlarÄ\xB1 uygulandÄ\xB1.')
            break
          default:
            console.error('Bilinmeyen grafik seviyesi:', level)
        }
      }
      let audio = new Audio()
      soundSelector.addEventListener('change', (event) => {
        const selectedSound = event.target.value
        audio.src = selectedSound
        audio
          .play()
          .catch((err) => console.error('Ses çalarken hata oluştu: ', err))
      })
      var _0x59cd3c = document.getElementById('settingBtn')
      var _0x16bc5e = document.getElementById('settingContent')
      _0x59cd3c.addEventListener('click', function () {
        if (_0x16bc5e.style.display === 'none') {
          _0x16bc5e.style.display = 'block'
        } else {
          _0x16bc5e.style.display = 'none'
        }
      })
      $('#PortionSize').on('input', function () {
        thewftyildoobj.PortionSize = $(this).val()
        localStorage.PotenciadorSize = thewftyildoobj.PortionSize
      })
      $('#PortionAura').on('input', function () {
        thewftyildoobj.PortionAura = $(this).val()
        localStorage.PotenciadorAura = thewftyildoobj.PortionAura
      })
      $('#smoothCamera').on('input', function () {
        thewftyildoobj.smoothCamera = $(this).val()
        localStorage.smoothCamera = thewftyildoobj.smoothCamera
      })
      $('#FoodSize').on('input', function () {
        thewftyildoobj.FoodSize = $(this).val()
        localStorage.ComidaSize = thewftyildoobj.FoodSize
      })
      $('#FoodShadow').on('input', function () {
        thewftyildoobj.FoodShadow = $(this).val()
        localStorage.ComidaShadow = thewftyildoobj.FoodShadow
      })
      $('#mm-advice-cont').html(
        `<div class="vietnam"style="display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;"><input type="button"value="TAM EKRAN"class="fullscreen_button"><input type="button"value="TEKRAR"id="hoisinh"class="fullscreen_respawn"><input type="button"value="İLETİŞİM"onclick="window.location.href='https://api.whatsapp.com/send?phone=+905544655080&amp;text=Merhaba%20Aktivasyon%20Yaptırmak%20İstiyorum!%20Id%20İsmim%20bu.'"class="fullscreen_contact"></div>`
      )
      $(document).ready(function () {
        $('#fullscreen_button').on('click', function () {
          if (
            !document.fullscreenElement &&
            !document.mozFullScreen &&
            !document.webkitIsFullScreen
          ) {
            if (document.documentElement.requestFullscreen) {
              document.documentElement.requestFullscreen()
            } else {
              if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen()
              } else {
                if (document.documentElement.webkitRequestFullscreen) {
                  document.documentElement.webkitRequestFullscreen()
                }
              }
            }
          } else {
            if (document.exitFullscreen) {
              document.exitFullscreen()
            } else {
              if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
              } else {
                if (document.webkitExitFullscreen) {
                  document.webkitExitFullscreen()
                }
              }
            }
          }
        })
      })
      $('#hoisinh').click(function () {
        let _0x5467d1 = hoisinhnhanh
        if (_0x5467d1) {
          anApp.r.Hd()
          anApp.sa(_0x5467d1)
        }
      })
      $('.mm-merchant').replaceWith('')
      $('.mm-merchant').replaceWith('')
      $('.description-text').replaceWith(
        `<div class="description-text"><div id="title"></div><div class="description-text-test"><ul style="margin-top: 5px;"class="ui-tabs-nav"><li class="ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('peru')"><span class="flag br"value="https://i.imgur.com/dixYLjk.png"><div class="title-wormate-yildo-flag"style="position: absolute; top: 0; z-index: 1; width: 92%"><img src="https://i.imgur.com/g70S8tr.png"width="20"align="center"alt="">Worm 25 Connect</div></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive1"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('mexico')"><span class="flag mx"value="https://i.imgur.com/JMAvuFN.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive2"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('us')"><span class="flag us"value="https://i.imgur.com/Jb2FF0y.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive3"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('canada')"><span class="flag ca"value="https://i.imgur.com/m1skEsB.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive4"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('germany')"><span class="flag de"value="https://i.imgur.com/VgCH8iy.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive5"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('france')"><span class="flag fr"value="https://i.imgur.com/QuEjBr0.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive6"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('singapore')"><span class="flag sg"value="https://i.imgur.com/ErLcgXP.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive7"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('japan')"><span class="flag jp"value="https://i.imgur.com/P2rYk1k.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive8"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('australia')"><span class="flag au"value="https://i.imgur.com/12e0wp4.png"></span></a></li><li class="ui-tabs-tab ui-tab ui-tab-inactive9"style="margin: -5px"><a href="javascript:void(0);"onclick="changeServer('uk')"><span class="flag gb"value="https://i.imgur.com/8pQY6RW.png"></span></a></li></ul><div class="bao-list2"><div class="gachngang"></div><div class="servers-container"><div class="servers-peru"></div><div class="servers-mexico"style="display: none;"></div><div class="servers-eeuu"style="display: none;"></div><div class="servers-canada"style="display: none;"></div><div class="servers-germania"style="display: none;"></div><div class="servers-francia"style="display: none;"></div><div class="servers-singapur"style="display: none;"></div><div class="servers-japon"style="display: none;"></div><div class="servers-australia"style="display: none;"></div><div class="servers-granbretana"style="display: none;"></div></div><script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js"></script></div></div></div>`
      )
      document.addEventListener('DOMContentLoaded', function () {
        window.changeServer = function (country) {
          $('.servers-container > div').hide()
          $(`.servers-${country}`).show()
        }
      })
      $('.ui-tab').on('click', account)
      $('.flag').click(function () {
        let _0x38609e = $(this).attr('value')
        thewftyildoobj.flag = _0x38609e
        ctx.containerImgS.texture = ctx.onclickServer
        retundFlagError()
        console.log(_0x38609e)
      })
      for (a = 0; a < servers.Api_listServer.length; a++) {
        var _0x2b1e9b = servers.Api_listServer[a].serverUrl
        var _0x49615b = servers.Api_listServer[a].name
        var _0x14214a = servers.Api_listServer[a].region
        let _0x153d0d = document.createElement('p')
        _0x153d0d.value = _0x2b1e9b
        _0x153d0d.innerHTML = _0x49615b
        if (_0x14214a == 'peru') {
          $('.servers-peru').prepend(_0x153d0d)
        } else {
          if (_0x14214a == 'mexico') {
            $('.servers-mexico').prepend(_0x153d0d)
          } else {
            if (_0x14214a == 'eeuu') {
              $('.servers-eeuu').prepend(_0x153d0d)
            } else {
              if (_0x14214a == 'canada') {
                $('.servers-canada').prepend(_0x153d0d)
              } else {
                if (_0x14214a == 'germania') {
                  $('.servers-germania').prepend(_0x153d0d)
                } else {
                  if (_0x14214a == 'francia') {
                    $('.servers-francia').prepend(_0x153d0d)
                  } else {
                    if (_0x14214a == 'singapur') {
                      $('.servers-singapur').prepend(_0x153d0d)
                    } else {
                      if (_0x14214a == 'japon') {
                        $('.servers-japon').prepend(_0x153d0d)
                      } else {
                        if (_0x14214a == 'australia') {
                          $('.servers-australia').prepend(_0x153d0d)
                        } else {
                          if (_0x14214a == 'granbretana') {
                            $('.servers-granbretana').prepend(_0x153d0d)
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        $(_0x153d0d).attr('id', _0x14214a)
        $(_0x153d0d).attr('class', 'selectSala')
        $(_0x153d0d).attr('value', _0x49615b)
        $(_0x153d0d).click(function () {
          ctx.setServer($(this).text())
          let _0x4c285c = $(this).val()
          ctx.containerImgS.texture = ctx.onclickServer
          retundFlagError()
          window.server_url = _0x4c285c
          $('#mm-action-play').click()
          $('#adbl-continue').click()
        })
      }
    }
    function _0xcca65c() {
      $('#getskin').on('click', function () {
        for (
          var _0x1dea18 = 0;
          _0x1dea18 < clientes.clientesActivos.length;
          _0x1dea18++
        ) {
          var _0x5d9115 = clientes.clientesActivos[_0x1dea18].cliente_NOMBRE
          var _0x117ad3 = clientes.clientesActivos[_0x1dea18].cliente_ID
          var _0x5090a6 = clientes.clientesActivos[_0x1dea18].Client_VisibleSkin
          var _0x7831f = clientes.clientesActivos[_0x1dea18].Client_VisibleSkin1
          var _0x4f7fef =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin2
          var _0x3143c0 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin3
          var _0x2c45a1 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin4
          var _0x439bda =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin5
          var _0x4792f5 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin6
          var _0x2b566d =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin7
          var _0x4884c2 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin8
          var _0x39ec86 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin9
          var _0xc7435b =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin10
          var _0x329f5e =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin11
          var _0x115a2c =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin12
          var _0x5be3da =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin13
          var _0x6d71d6 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin14
          var _0x1d160d =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin15
          var _0xa66192 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin16
          var _0x3ec786 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin17
          var _0x240caf =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin18
          var _0x29a4a6 =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin19
          var _0x23764c =
            clientes.clientesActivos[_0x1dea18].Client_VisibleSkin20
          var _0x2911d7 = clientes.clientesActivos[_0x1dea18].Client_KeyAccecs
          if (thewftyildoobj.FB_UserID == 0) {
          } else {
            if (thewftyildoobj.FB_UserID == _0x117ad3) {
              if (_0x2911d7 == 'XTPRIVATESKIN') {
                for (
                  let _0x319919 = 0;
                  _0x319919 < thewftyildoobj.idSkin.length;
                  _0x319919++
                ) {
                  const _0x3e698c = thewftyildoobj.idSkin[_0x319919]
                  if (
                    _0x3e698c.id == _0x5090a6 ||
                    _0x3e698c.id == _0x7831f ||
                    _0x3e698c.id == _0x4f7fef ||
                    _0x3e698c.id == _0x3143c0 ||
                    _0x3e698c.id == _0x2c45a1 ||
                    _0x3e698c.id == _0x439bda ||
                    _0x3e698c.id == _0x4792f5 ||
                    _0x3e698c.id == _0x2b566d ||
                    _0x3e698c.id == _0x4884c2 ||
                    _0x3e698c.id == _0x39ec86 ||
                    _0x3e698c.id == _0xc7435b ||
                    _0x3e698c.id == _0x329f5e ||
                    _0x3e698c.id == _0x115a2c ||
                    _0x3e698c.id == _0x5be3da ||
                    _0x3e698c.id == _0x6d71d6 ||
                    _0x3e698c.id == _0x1d160d ||
                    _0x3e698c.id == _0xa66192 ||
                    _0x3e698c.id == _0x3ec786 ||
                    _0x3e698c.id == _0x240caf ||
                    _0x3e698c.id == _0x29a4a6 ||
                    _0x3e698c.id == _0x23764c
                  ) {
                    _0x3e698c.nonbuyable = false
                  }
                }
              } else {
              }
            } else {
            }
          }
        }
      })
    }
    function _0x1f8004() {
      thewftyildoobj.adblock = true
      $('#loa831pibur0w4gv').replaceWith(
        '\n        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />\n         <div style="margin: 0;" id="loa831pibur0w4gv">\n          <div class="label" id="titleSetings"></div>\n          <div class="bao-list1">\n            <div class="list1">\n              <i class="fa fa-book" aria-hidden="true" style="color: #48ff00;"></i>\n              تم التحديث: 20/06/2025\n            </div>\n            <br>\n            <div class="list1">\n            <i class="fa fa-volume-off" aria-hidden="true" style="color: #ff0000;"></i>\n- يستمر بأقصى سرعة لتزويدك بأداء جيد للعبة. - النشاط سهل الاستخدام للغاية ويمكن استخدامه بسرعة. - يمكنك أيضًا استخدامه لمعرفة المزيد.</div>\n<br> \n<br> <br> <br> <br>  \n<div class="list1">\n              <i class="" aria-hidden="true" style="color: #48ff00;"></i>\n\n              <a href="https://discord.gg/"></a>\n            </div>\n          </div>\n        </div>\n      '
      )
      $('#mm-coins-box').replaceWith(
        `<div style="margin: 0;"id="mm-coins-box"><button style="width:90px;height:32px;float:right;border-radius:10px;border:solid#fac 2px;"id="getskin">🔐Skins</button></div>`
      )
      $('#mm-coins-box').replaceWith(
        '\n                <div style="margin: 0;" id="mm-coins-box">\n          <button \n            style="\n              width: 90px;\n              height: 32px;\n              float: right;\n              border-radius: 10px;\n              border: solid #fac 2px;\n            " \n            id="getskin">جلود </button>\n        </div>\n      '
      )
      $(document).on('click', '#getskin', function () {
        alert('تم فتح النمط!')
      })
      window.multiplier = 1
      window.zoomLevel = 5
      window.onwheel = (_0x3c5446) => {
        if (_0x3c5446.deltaY > 0) {
          window.multiplier *= 0.8
        } else {
          window.multiplier /= 0.8
        }
        window.changedNf()
      }
      function _0x3794cb() {
        window.zoomLevel++
        window.multiplier *= 0.8
        changedNf()
        _0x40f925()
      }
      function _0xdc410d() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--
          window.multiplier /= 0.8
          changedNf()
          _0x40f925()
        }
      }
      function _0x40f925() {
        var _0x4b5752 = Math.round((window.multiplier / 0.625) * 100)
        _0x4b5752 = Math.min(100, _0x4b5752)
        var _0x499e6e = document.getElementById('zoom-percentage')
        _0x499e6e.textContent = _0x4b5752 + '%'
      }
      document
        .getElementById('zoom-in')
        .addEventListener('touchstart', _0x3794cb, { passive: false })
      document
        .getElementById('zoom-out')
        .addEventListener('touchstart', _0xdc410d, { passive: false })
      window.onwheel = function (_0x311529) {
        _0x311529.preventDefault()
        if (_0x311529.deltaY < 0) {
          _0x3794cb()
        } else {
          _0xdc410d()
        }
      }
      $('#settings-Abilityzoom-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.eat_animation = 1
          localStorage.setItem('mySwitch', 'on')
        } else {
          thewftyildoobj.eat_animation = 0.0025
          localStorage.setItem('mySwitch', 'off')
        }
      })
      $(document).ready(function () {
        var _0x29752d = localStorage.getItem('mySwitch')
        if (_0x29752d === 'on') {
          $('#settings-Abilityzoom-switch').prop('checked', true)
          thewftyildoobj.eat_animation = 1
        } else {
          $('#settings-Abilityzoom-switch').prop('checked', false)
          thewftyildoobj.eat_animation = 0.0025
        }
      })
      $('#settings-stremingmode-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremer = true
          localStorage.setItem('ModeStremer', 'true')
        } else {
          thewftyildoobj.ModeStremer = false
          localStorage.setItem('ModeStremer', 'false')
        }
      })
      $(document).ready(function () {
        var _0x314ba9 = localStorage.getItem('ModeStremer')
        if (_0x314ba9 === 'true') {
          thewftyildoobj.ModeStremer = true
          $('#settings-stremingmode-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremer = false
          $('#settings-stremingmode-switch').prop('checked', false)
        }
      })
      $('#settings-stremingmodebatop-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremerbatop = true
          localStorage.setItem('ModeStremerbatop', 'true')
        } else {
          thewftyildoobj.ModeStremerbatop = false
          localStorage.setItem('ModeStremerbatop', 'false')
        }
      })
      $(document).ready(function () {
        var _0x39db5f = localStorage.getItem('ModeStremerbatop')
        if (_0x39db5f === 'true') {
          thewftyildoobj.ModeStremerbatop = true
          $('#settings-stremingmodebatop-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremerbatop = false
          $('#settings-stremingmodebatop-switch').prop('checked', false)
        }
      })
      $('#settings-stremingmodesaveheadshot-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremersaveheadshot = true
          localStorage.setItem('ModeStremersaveheadshot', 'true')
        } else {
          thewftyildoobj.ModeStremersaveheadshot = false
          localStorage.setItem('ModeStremersaveheadshot', 'false')
        }
        location.reload()
      })
      $(document).ready(function () {
        var _0x419c4f = localStorage.getItem('ModeStremersaveheadshot')
        if (_0x419c4f === 'true') {
          thewftyildoobj.ModeStremersaveheadshot = true
          $('#settings-stremingmodesaveheadshot-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremersaveheadshot = false
          $('#settings-stremingmodesaveheadshot-switch').prop('checked', false)
        }
      })
      $('#settings-stremingmodeheadshot-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremerheadshot = true
          localStorage.setItem('ModeStremerheadshot', 'true')
        } else {
          thewftyildoobj.ModeStremerheadshot = false
          localStorage.setItem('ModeStremerheadshot', 'false')
        }
      })
      $(document).ready(function () {
        var _0x1aa4e6 = localStorage.getItem('ModeStremerheadshot')
        if (_0x1aa4e6 === 'true') {
          thewftyildoobj.ModeStremerheadshot = true
          $('#settings-stremingmodeheadshot-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremerheadshot = false
          $('#settings-stremingmodeheadshot-switch').prop('checked', false)
        }
      })
      $('#settings-stremingmodeheadshot-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremerheadshot = true
          localStorage.setItem('ModeStremerheadshot', 'true')
        } else {
          thewftyildoobj.ModeStremerheadshot = false
          localStorage.setItem('ModeStremerheadshot', 'false')
        }
      })
      $(document).ready(function () {
        var _0x46c580 = localStorage.getItem('ModeStremerheadshot')
        if (_0x46c580 === 'true') {
          thewftyildoobj.ModeStremerheadshot = true
          $('#settings-stremingmodeheadshot-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremerheadshot = false
          $('#settings-stremingmodeheadshot-switch').prop('checked', false)
        }
      })
      $('#settings-stremingmodeemoj-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.ModeStremeremoj = true
          localStorage.setItem('ModeStremeremoj', 'true')
        } else {
          thewftyildoobj.ModeStremeremoj = false
          localStorage.setItem('ModeStremeremoj', 'false')
        }
      })
      $(document).ready(function () {
        var _0x50fc77 = localStorage.getItem('ModeStremeremoj')
        if (_0x50fc77 === 'true') {
          thewftyildoobj.ModeStremeremoj = true
          $('#settings-stremingmodeemoj-switch').prop('checked', true)
        } else {
          thewftyildoobj.ModeStremeremoj = false
          $('#settings-stremingmodeemoj-switch').prop('checked', false)
        }
      })
      $('#settings-arrowmobile-switch').on('click', function () {
        if (this.checked) {
          thewftyildoobj.arrow = false
        } else {
          thewftyildoobj.arrow = true
        }
      })
      $('#PortionSize').on('input', function () {
        thewftyildoobj.PortionSize = $(this).val()
        localStorage.PotenciadorSize = thewftyildoobj.PortionSize
      })
      $('#PortionAura').on('input', function () {
        thewftyildoobj.PortionAura = $(this).val()
        localStorage.PotenciadorAura = thewftyildoobj.PortionAura
      })
      $('#smoothCamera').on('input', function () {
        thewftyildoobj.smoothCamera = $(this).val()
        localStorage.smoothCamera = thewftyildoobj.smoothCamera
      })
      $('#FoodSize').on('input', function () {
        thewftyildoobj.FoodSize = $(this).val()
        localStorage.ComidaSize = thewftyildoobj.FoodSize
      })
      $('#FoodShadow').on('input', function () {
        thewftyildoobj.FoodShadow = $(this).val()
        localStorage.ComidaShadow = thewftyildoobj.FoodShadow
      })
      $('#KeyRespawn,#KeyAutoMov').on('keydown', function (_0x1e28db) {
        if (isValidHotkey(_0x1e28db)) {
          var _0x499192 = $(this)
          var _0x4175a0 = getPresedKey(_0x1e28db)
          var _0x388d37 = _0x1e28db.keyCode
          _0x499192.val(_0x4175a0)
          _0x499192.blur()
          window.keyMove = _0x388d37
          window.localStorage.setItem(_0x499192.attr('id'), _0x388d37)
        } else {
          _0x1e28db.preventDefault()
        }
      })
      for (a = 0; a < _0x360fe1.length; a++) {
        var _0x548158 = _0x360fe1[a].url
        var _0x4e9a37 = _0x360fe1[a].nombre
        let _0x25ec15 = document.createElement('img')
        _0x25ec15.src = _0x548158
        $('.cursor-container').prepend(_0x25ec15)
        $(_0x25ec15).attr('class', 'cursor')
        $(_0x25ec15).click(function () {
          let _0x49927d = $(this).attr('src')
          localStorage.cursorSeleccionado = _0x49927d
          $('#game-cont').css({ cursor: 'url(' + _0x49927d + '), default' })
          $('#game-canvas').css({ cursor: 'url(' + _0x49927d + '), default' })
          $('body').css({ cursor: 'url(' + _0x49927d + '), default' })
        })
        $('#default-cursor-btn').click(function () {
          delete localStorage.cursorSeleccionado
          $('#game-cont, #game-canvas, body').css('cursor', 'default')
        })
      }
      $('#game-cont').css({
        cursor: 'url(' + localStorage.cursorSeleccionado + '), default',
      })
      $('#game-canvas').css({
        cursor: 'url(' + localStorage.cursorSeleccionado + '), default',
      })
      $('body').css({
        cursor: 'url(' + localStorage.cursorSeleccionado + '), default',
      })
      for (a = 0; a < _0x57c173.length; a++) {
        var _0xca86d0 = _0x57c173[a].url
        var _0x4da21a = _0x57c173[a].nombre
        let _0x1212db = document.createElement('img')
        _0x1212db.src = _0xca86d0
        $('.background-container').prepend(_0x1212db)
        $(_0x1212db).attr('class', 'background')
        $(_0x1212db).attr('value', _0x4da21a)
        $(_0x1212db).click(function () {
          let _0x511466 = $(this).attr('src')
          let _0x2f5b7d = $(this).attr('value')
          backgroundIMG = _0x511466
          localStorage.fondoSeleccionado = backgroundIMG
          alert('You selected the background: ' + _0x2f5b7d)
          _0x47002d.q.Cf = new _0x33b7ba._b(_0x47002d.q.fn_o(_0x511466))
        })
      }
      $('.background-container').prepend('')
      _0x47002d.q.Cf = new _0x33b7ba._b(
        _0x47002d.q.fn_o(localStorage.fondoSeleccionado)
      )
    }
    function _0x3da684(_0x3bd11f, _0x24ad93) {
      let _0x72095e = function (_0x93e77f, _0x579231, _0x1f64dc, _0x1f80d3) {
        ctx.setCountGame(_0x93e77f, _0x579231, _0x1f64dc, _0x1f80d3)
      }
      if (_0x3bd11f === 'count') {
        thewftyildoobj.kill = (thewftyildoobj.kill || 0) + (_0x24ad93 ? 0 : 1)
        thewftyildoobj.headshot =
          (thewftyildoobj.headshot || 0) + (_0x24ad93 ? 1 : 0)
        thewftyildoobj.totalKills =
          thewftyildoobj.totalKills + (_0x24ad93 ? 0 : 1)
        thewftyildoobj.totalHeadshots =
          thewftyildoobj.totalHeadshots + (_0x24ad93 ? 1 : 0)
        _0x72095e(
          thewftyildoobj.kill,
          thewftyildoobj.headshot,
          thewftyildoobj.totalKills,
          thewftyildoobj.totalHeadshots
        )
      }
      if (_0x3bd11f === 'open') {
        thewftyildoobj.kill = 0
        thewftyildoobj.headshot = 0
        $('#contadorKill_12').show()
        _0x72095e(
          thewftyildoobj.kill,
          thewftyildoobj.headshot,
          thewftyildoobj.totalKills,
          thewftyildoobj.totalHeadshots
        )
      }
      if (_0x3bd11f === 'closed') {
        pwrups = {}
      }
      if (_0x3bd11f === 'cerrar') {
        thewftyildoobj.kill = 0
        thewftyildoobj.headshot = 0
        thewftyildoobj.totalKills = 0
        thewftyildoobj.totalHeadshots = 0
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      }
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2)
      }
    }
    setTimeout(function () {
      var _0x5e3d91 = [
        'ÙƒØ\xB3',
        'fuck',
        'Ø\xB4ÙŠØ\xB9Ø\xA9',
        'Ø\xA3Ù\u2020 Ø\xA7Ù\u201EÙ\u201EÙ\u2021 ÙŠØ\xB1Ø\xA7Ùƒ',
        'Ø\xB9Ø\xB1Ø\xB6Ùƒ',
        'Ù\u2020Ø\xB8ÙŠÙ\x81',
        'Ø\xB7ÙŠØ\xA8Ø\xA9',
        'Ø\xA7Ø\xAEÙˆÙƒ',
        'Ø\xA7Ø\xAEØªÙƒ',
        'Ø\xA7Ù\u2026Ùƒ',
        'Ø\xA7Ø\xA8ÙˆÙƒ',
        'Ù\u201AÙˆØ\xA7Ø\xAF',
      ]
      $('#mm-action-play').on('click', function () {
        var _0x4d5fe6 = $('#mm-params-nickname').val()
        var _0x1aa21f = _0x5e3d91.some(function (_0x31a83a) {
          return _0x4d5fe6.toLowerCase().includes(_0x31a83a.toLowerCase())
        })
        if (_0x1aa21f) {
          $('#mm-params-nickname').val('Küfürlü*')
        }
      })
      $('#final-share-fb').css('display', 'none')
      $('#unl6wj4czdl84o9b').css('display', 'none')
      $('#mm-menu-cont').css('display', 'block')
      $('#mm-bottom-buttons').css('display', 'block')
      $('#mm-player-info').css('display', 'block')
      $('#mm-bottom-buttons').addClass('buttonNavidad')
      var _0x2a8c78 = $('<img>', {
        id: 'gold-crown',
        src: 'https://i.imgur.com/z2o76Xe.png',
        alt: 'gold-crown',
      })
      $('#mm-player-avatar').after(_0x2a8c78)
      $('#gold-crown').css({
        position: 'absolute',
        top: '-23px',
        transform: 'translateX(-2%)',
        width: '50px',
        height: 'auto',
      })
      $('#relojHelp').css('position', 'absolute')
      $('#relojHelp').css('top', '12px')
      $('#relojHelp').css('left', '5px')
      $('#delete-account-view').css('display', 'none')
    }, 3000)
    _0x4f57e2()
    function _0xc4f71d() {
      var _0x22a9b9 = _0x25c1dc.width()
      var _0x54c724 = _0x25c1dc.height()
      var _0x4f37a0 = _0x3a1c0a.outerWidth()
      var _0x2d4ae1 = _0x3a1c0a.outerHeight()
      var _0x784e08 = _0x169d6f.outerHeight()
      var _0x39442c = _0x1a481d.outerHeight()
      var _0x14b8cd = Math.min(
        1,
        Math.min(
          (_0x54c724 - _0x39442c - _0x784e08) / _0x2d4ae1,
          _0x22a9b9 / _0x4f37a0
        )
      )
      var _0xa94817 = 'translate(-50%, -50%) scale(' + _0x14b8cd + ')'
      _0x3a1c0a.css({
        '-webkit-transform': _0xa94817,
        '-moz-transform': _0xa94817,
        '-ms-transform': _0xa94817,
        '-o-transform': _0xa94817,
        transform: _0xa94817,
      })
      ;(window.anApp = _0x47002d).Ra()
      window.scrollTo(0, 1)
    }
    _0xc4f71d()
    $(window).resize(_0xc4f71d)
  })()
  window.anApp.p.Bc = function () {
    var _0x18b813 = window.anApp.p
    var _0x30834f = {}
    $.get(
      'https://resources.wormate.io/dynamic/assets/registry.json',
      function (_0x390583) {
        _0x30834f = _0x390583
        $.ajax({
          url: 'https://25servan.github.io/Worm25/api/skins.php',
          method: 'GET',
          dataType: 'json',
          success: function (_0x995db5) {
            thewftyildoobj.visibleSkin = _0x995db5.visibleSkin
            delete _0x995db5.visibleSkin
            for (let _0x1f1f4d in _0x995db5) {
              if ('propertyList' !== _0x1f1f4d) {
                if (Array.isArray(_0x995db5[_0x1f1f4d])) {
                  _0x390583[_0x1f1f4d] = _0x390583[_0x1f1f4d].concat(
                    _0x995db5[_0x1f1f4d]
                  )
                } else {
                  _0x390583[_0x1f1f4d] = {
                    ..._0x390583[_0x1f1f4d],
                    ..._0x995db5[_0x1f1f4d],
                  }
                }
              }
            }
            thewftyildoobj.pL = _0x995db5.propertyList
            thewftyildoobj.idSkin = _0x995db5.skinArrayDict
            _0x18b813.Cc(_0x390583)
          },
          error: function (_0x5d5bfd, _0x2e8934, _0x4ff366) {
            console.error(_0x4ff366)
            _0x18b813.Cc(_0x30834f)
          },
        })
      }
    )
  }
  $('#background-canvas').replaceWith(
    '<canvas id="background-canvas"></canvas>'
  )
  $('#popup-login-gg').html(
    '<div class="settings-line" id="popup-login-gg1">Login via Google</div>'
  )
  $('#social-buttons').replaceWith('')
  $('#markup-footer').replaceWith(
    '<footer id="markup-footer"><div class="lang-menu"><button class="lang-button">Language </button><div class="lang-list"><a hreflang="en" href="/">English</a><a hreflang="de" href="/de/">Deutsch</a><a hreflang="fr" href="/fr/">FranÃƒÂ\xA7ais</a><a hreflang="es" href="/es/">EspaÃƒÂ\xB1ol</a></div></div><a class="link" hreflang="en" href="https://wormate.io">2025 Wormate İo</a><a style="font-size: 17px;font-weight: 600;">Wormate Friends Turkey</a><a style="font-size: 17px;font-weight: 500;color: #ff0;"> Made with <i class=\'fa fa-heart animated infinite pulse\' style=\'color:red\'></i> in Wormate.io Team 2025 !</a></footer>'
  )
})
function openPopup() {
  var _0x119cf9 = document.getElementById('popup')
  var _0x5acdb3 = document.getElementById('overlay')
  _0x119cf9.style.display = 'block'
  _0x5acdb3.style.display = 'block'
}
function closePopup() {
  var _0x565175 = document.getElementById('popup')
  var _0x3c9113 = document.getElementById('overlay')
  _0x565175.style.display = 'none'
  _0x3c9113.style.display = 'none'
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
var getPresedKey = function (_0xccff2c) {
  var _0x544e35 = ''
  if (_0xccff2c.keyCode === 9) {
    _0x544e35 += 'TAB'
  } else {
    if (_0xccff2c.keyCode === 13) {
      _0x544e35 += 'ENTER'
    } else {
      if (_0xccff2c.keyCode === 16) {
        _0x544e35 += 'SHIFT'
      } else {
        _0x544e35 += String.fromCharCode(_0xccff2c.keyCode)
      }
    }
  }
  return _0x544e35
}
getStringKey = function (_0xb5ac86) {
  var _0xab04a6 = ''
  if (_0xb5ac86 == 9) {
    _0xab04a6 += 'TAB'
  } else {
    if (_0xb5ac86 == 13) {
      _0xab04a6 += 'ENTER'
    } else {
      if (_0xb5ac86 == 16) {
        _0xab04a6 += 'SHIFT'
      } else {
        if (_0xb5ac86 == 32) {
          _0xab04a6 += 'SPACE'
        } else {
          if (_0xb5ac86 == 27) {
            _0xab04a6 += 'ESC'
          } else {
            _0xab04a6 += String.fromCharCode(_0xb5ac86)
          }
        }
      }
    }
  }
  return _0xab04a6
}
const isValidHotkey = function (_0x1124dc) {
  const _0x442fd7 = _0x1124dc.key
  return (
    (_0x442fd7 >= '0' && _0x442fd7 <= '9') ||
    (_0x442fd7 >= 'A' && _0x442fd7 <= 'Z') ||
    _0x442fd7 === 'Tab' ||
    _0x442fd7 === 'Enter' ||
    _0x442fd7 === 'Shift' ||
    _0x442fd7 === ' ' ||
    _0x442fd7 === 'Escape'
  )
}
eval(function (
  _0x160aa2,
  _0x5b62dd,
  _0x2e47a4,
  _0x249ac8,
  _0x25a359,
  _0x5873f5
) {
  _0x25a359 = function (_0x1b8eda) {
    return (
      (_0x1b8eda < _0x5b62dd
        ? ''
        : _0x25a359(parseInt(_0x1b8eda / _0x5b62dd))) +
      ((_0x1b8eda = _0x1b8eda % _0x5b62dd) > 35
        ? String.fromCharCode(_0x1b8eda + 29)
        : _0x1b8eda.toString(36))
    )
  }
  if (!''.replace(/^/, String)) {
    while (_0x2e47a4--) {
      _0x5873f5[_0x25a359(_0x2e47a4)] =
        _0x249ac8[_0x2e47a4] || _0x25a359(_0x2e47a4)
    }
    _0x249ac8 = [
      function (_0x2733e9) {
        return _0x5873f5[_0x2733e9]
      },
    ]
    _0x25a359 = function () {
      return '\\w+'
    }
    _0x2e47a4 = 1
  }
  while (_0x2e47a4--) {
    if (_0x249ac8[_0x2e47a4]) {
      _0x160aa2 = _0x160aa2.replace(
        new RegExp('\\b' + _0x25a359(_0x2e47a4) + '\\b', 'g'),
        _0x249ac8[_0x2e47a4]
      )
    }
  }
  return _0x160aa2
})
function stopZoom(_0xa66930) {
  if (_0xa66930.key === 'z') {
    window.w = 0.625
    window.render()
  }
}
window.addEventListener('wheel', stopZoom)
document.addEventListener('DOMContentLoaded', () => {
  let _0x431233 = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 7,
  }
  let _0x1e5c45 = _0x431233.x
  let _0x201ab4 = _0x431233.y
  let _0x4793e0 = 0
  function _0xbce318() {
    let _0x3de832 = Date.now()
    fetch(window.location.href)
      .then(() => {
        let _0x24c8ea = Date.now()
        _0x4793e0 = _0x24c8ea - _0x3de832
        if (_0x4793e0 > 149) {
          _0x5c25f5.style.color = 'red'
        } else {
          if (_0x4793e0 > 99) {
            _0x5c25f5.style.color = 'yellow'
          } else {
            _0x5c25f5.style.color = 'green'
          }
        }
      })
      .catch(() => {
        _0x4793e0 = 'Error'
        _0x5c25f5.style.color = 'red'
      })
  }
  let _0x5c25f5 = document.createElement('div')
  _0x5c25f5.style.position = 'fixed'
  _0x5c25f5.style.right = '5px'
  _0x5c25f5.style.bottom = '5px'
  _0x5c25f5.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  _0x5c25f5.style.color = 'white'
  _0x5c25f5.style.padding = '2px 5px'
  _0x5c25f5.style.fontSize = '12px'
  _0x5c25f5.style.borderRadius = '3px'
  _0x5c25f5.style.fontWeight = 'bold'
  _0x5c25f5.style.textShadow = '1px 1px 2px rgba(0,0,0,0.5)'
  document.body.appendChild(_0x5c25f5)
  document.addEventListener('mousemove', (_0x3672d2) => {
    _0x1e5c45 = _0x3672d2.clientX
    _0x201ab4 = _0x3672d2.clientY
  })
  function _0x2f3735() {
    let _0x1378e5 = _0x1e5c45 - _0x431233.x
    let _0x3c633a = _0x201ab4 - _0x431233.y
    let _0x55545c = Math.sqrt(_0x1378e5 * _0x1378e5 + _0x3c633a * _0x3c633a)
    if (_0x55545c > _0x431233.radius) {
      _0x431233.x += (_0x1378e5 / _0x55545c) * _0x431233.radius
      _0x431233.y += (_0x3c633a / _0x55545c) * _0x431233.radius
    } else {
      _0x431233.x = _0x1e5c45
      _0x431233.y = _0x201ab4
    }
    let _0x4b6326 = document.getElementById('solucan')
    if (_0x4b6326) {
      _0x4b6326.style.left = _0x431233.x + 'px'
      _0x4b6326.style.top = _0x431233.y + 'px'
    }
    _0x5c25f5.textContent = 'Ping: ' + _0x4793e0 + 'ms'
    requestAnimationFrame(_0x2f3735)
  }
  _0x2f3735()
  setInterval(_0xbce318, 1000)
})
document.addEventListener(
  'keydown',
  (_0x43bfbb) => {
    if (_0x43bfbb.key === 'F12') {
      _0x43bfbb.preventDefault()
    }
  },
  false
)
document.addEventListener(
  'contextmenu',
  (_0x52279b) => {
    _0x52279b.preventDefault()
  },
  false
)
window.addEventListener('keydown', (_0x54f692) => {
  const _0x11200c = _0x54f692.key.toLowerCase()
  if (_0x11200c === 'z' || _0x11200c === 'Ø\xA6') {
    window.multiplier = 0.625
    if (typeof window.changedNf === 'function') {
      window.changedNf()
    } else {
      console.warn("Function 'changedNf' is not defined.")
    }
  }
})
