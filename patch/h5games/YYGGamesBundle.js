console.l0g = console.log;

l0cation = new Proxy(location, {
  get: function (target, property, receiver) {
    console.l0g("--fx--l0cation--get--property--", property);
    let targetObj = target[property];
    if (typeof targetObj == "function") {
      return (...args) => target[property].apply(target, args);
    } else {
      if (property == "host" || property == "hostname") {
        return "www.yad.com";
      }
      if (property == "href") {
        // return "https://www.ubg235.com/";
        return "https://www.yad.com/";
      }
      if (property == "origin") {
        return "https://www.yad.com/";
      }
      if (property == "location") {
        return "https://www.yad.com/";
      }
      return targetObj;
    }
  },
  set: function (target, property, receiver) {
    console.l0g("--fx--l0cation--set--property--", property, receiver);
    return true;
  },
});
t0p = l0cation;

wind0w = new Proxy(window, {
  get: function (target, property, receiver) {
    // console.log("--fx--wind0w--property--", property, receiver);
    if (typeof target[property] == "function") {
      return (...args) => target[property].apply(target, args);
    } else {
      if (property == "location") {
        return target["l0cation"];
      }
      // console.log("--fx--wind0w--targetObj--", targetObj);
      return target[property];
    }
  },
});

op3n = function (url, target) {
  console.l0g("--fx--op3n--", arguments);
  window.open("https://ads.games235.com/", target);
};

function replaceEval(evalStr) {
  evalStr = evalStr.replaceAll("location[", "l0cation[");
  evalStr = evalStr.replaceAll("top[", "t0p[");
  evalStr = evalStr.replaceAll("window.open(", "window.op3n(");
  return evalStr;
}

function _0x233d() {
  const _0xe8a641 = [
    "\x73\x72\x63",
    "\x77\x72\x69\x74\x65\x55\x69\x6e\x74\x31",
    "\x5f\x64\x5f",
    "\x20\x31\x30\x31\x2c\x20\x36\x35\x2c\x20",
    "\x73\x71\x72\x74",
    "\x77\x72\x69\x74\x65\x42\x79\x74\x65",
    "\x5f\x5f\x67\x65\x74\x42\x75\x66\x66\x65",
    "\x61\x74\x69\x76\x65\x50\x61\x74\x68",
    "\x65\x73\x20\x65\x72\x72\x6f\x72\x20\x2d",
    "\x73\x65\x74\x55\x69\x6e\x74\x33\x32",
    "\x73\x65\x74\x46\x6c\x6f\x61\x74\x36\x34",
    "\x73\x66\x6f\x72\x6d",
    "\x35\x37\x35\x32\x43\x71\x43\x6d\x4b\x54",
    "\x31\x33\x38\x37\x39\x38\x30\x57\x70\x54\x6b\x4d\x45",
    "\x73\x65\x74\x49\x6e\x74\x33\x32",
    "\x20\x6f\x66\x20\x62\x6f\x75\x6e\x64\x73",
    "\x69\x6e\x73\x74\x61\x6e\x63\x65",
    "\x42\x72\x6f\x77\x73\x65\x72",
    "\x37\x38\x36\x31\x33\x36\x6a\x6e\x73\x62\x57\x66",
    "\x73\x65\x74\x54\x6f",
    "\x5f\x70\x66",
    "\x70\x6f\x73",
    "\x42\x75\x66\x66\x65\x72\x20\x65\x72\x72",
    "\x69\x6e\x76\x65\x72\x74",
    "\x49\x6e\x76\x61\x6c\x69\x64\x20\x74\x79",
    "\x67\x65\x74\x49\x6e\x74\x31\x36",
    "\x6f\x6e\x4c\x6f\x61\x64\x65\x64",
    "\x5f\x72\x55\x54\x46",
    "\x77\x72\x69\x74\x65\x55\x69\x6e\x74\x33",
    "\x63\x74\x55\x52\x4c",
    "\x64\x73\x47\x61\x6d\x65\x2e\x6a\x73",
    "\x6e\x64\x69\x61\x6e",
    "\x67\x65\x74\x55\x69\x6e\x74\x38",
    "\x53\x74\x72\x69\x6e\x67",
    "\x32\x35\x30\x48\x4d\x78\x4d\x77\x57",
    "\x72\x65\x61\x64\x49\x6e\x74\x31\x36",
    "\x31\x38\x45\x4a\x6f\x46\x67\x42",
    "\x2e\x79\x79\x67\x67\x61\x6d\x65\x73\x2e",
    "\x5f\x70\x6f\x73\x5f",
    "\x74\x72\x61\x6e\x73\x66\x6f\x72\x6d\x50",
    "\x65\x78\x70\x6f\x72\x74\x73",
    "\x75\x6e\x64\x73",
    "\x50\x4e\x47",
    "\x6d\x75\x6c\x31\x36",
    "\x36\x2c\x31\x31\x32\x2c\x31\x31\x35\x2c",
    "\x73\x75\x62\x61\x72\x72\x61\x79",
    "\x72\x65\x61\x64\x55\x54\x46\x53\x74\x72",
    "\x67\x65\x74\x43\x75\x73\x74\x6f\x6d\x53",
    "\x77\x72\x69\x74\x65\x49\x6e\x74\x33\x32",
    "\x61\x64\x64\x56\x65\x72\x73\x69\x6f\x6e",
    "\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69",
    "\x72\x65\x63\x6f\x76\x65\x72",
    "\x67\x65\x74\x53\x63\x61\x6c\x65\x58",
    "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34",
    "\x5f\x72\x65\x73\x69\x7a\x65\x42\x75\x66",
    "\x73\x63\x72\x69\x70\x74\x73",
    "\x67\x65\x74\x55\x69\x6e\x74\x31\x36",
    "\x70\x65\x64\x20\x61\x72\x72\x61\x79\x20",
    "\x53\x43\x52\x49\x50\x54\x5f\x59\x49\x56",
    "\x67\x65\x74\x49\x6e\x73\x74\x61\x6e\x63",
    "\x72\x6f\x74\x61\x74\x65",
    "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x4b\x69",
    "\x73\x65\x74\x49\x6e\x74\x31\x36",
    "\x75\x2e\x6a\x73",
    "\x67\x65\x74\x41\x64\x70\x74\x65\x64\x46",
    "\x73\x6b\x65\x77",
    "\x66\x20\x62\x6f\x75\x6e\x64\x73",
    "\x72\x65\x61\x64\x49\x6e\x74\x33\x32",
    "\x67\x65\x74\x53\x74\x72\x69\x6e\x67",
    "\x72\x61\x79",
    "\x5f\x6c\x65\x6e\x67\x74\x68",
    "\x77\x69\x6e\x64\x6f\x77",
    "\x5f\x61\x6c\x6c\x6f\x63\x61\x74\x65\x64",
    "\x42\x49\x47\x5f\x45\x4e\x44\x49\x41\x4e",
    "\x63\x6f\x73",
    "\x66\x75\x6e\x63\x74\x69\x6f\x6e",
    "\x32\x36\x38\x35\x33\x32\x36\x53\x57\x49\x73\x4b\x4e",
    "\x6a\x6f\x69\x6e",
    "\x67\x65\x74\x42\x79\x74\x65",
    "\x5f\x62\x54\x72\x61\x6e\x73\x66\x6f\x72",
    "\x73\x65\x74\x49\x6e\x74\x38",
    "\x6c\x65\x6e\x67\x74\x68",
    "\x31\x30\x30",
    "\x72\x65\x61\x64\x41\x72\x72\x61\x79\x42",
    "\x69\x6e\x69\x74",
    "\x66\x65\x72",
    "\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74",
    "\x73\x65\x74\x55\x69\x6e\x74\x38",
    "\x6c\x6f\x61\x64",
    "\x72\x6f\x6f\x74\x50\x61\x74\x68",
    "\x72\x65\x61\x64\x46\x6c\x6f\x61\x74\x33",
    "\x4c\x49\x54\x54\x4c\x45\x5f\x45\x4e\x44",
    "\x69\x73\x4e\x61\x4e",
    "\x77\x72\x69\x74\x65\x55\x69\x6e\x74\x38",
    "\x6c\x65\x6e\x67\x74\x68\x3a",
    "\x20\x31\x30\x33\x2c\x20\x31\x30\x38\x2c",
    "\x42\x75\x66\x66\x65\x72",
    "\x72\x6f\x74\x61\x74\x65\x45\x78",
    "\x39\x39\x36\x30\x36\x36\x67\x54\x41\x47\x63\x62",
    "\x75\x6e\x64\x65\x66\x69\x6e\x65\x64",
    "\x75\x66\x66\x65\x72",
    "\x63\x6f\x6d\x2f\x67\x61\x6d\x65\x53\x44",
    "\x73\x65\x6e\x64",
    "\x6d\x61\x78",
    "\x69\x6e\x76\x65\x72\x74\x54\x72\x61\x6e",
    "\x2c\x31\x30\x30\x2c\x34\x36\x2c\x39\x39",
    "\x74\x61\x6e",
    "\x62\x67\x6d\x2e\x6d\x70\x33",
    "\x62\x79\x74\x65\x4c\x65\x6e\x67\x74\x68",
    "\x6f\x72\x20\x2d\x20\x4f\x75\x74\x20\x6f",
    "\x67\x65\x74\x55\x69\x6e\x74\x33\x32",
    "\x62\x79\x74\x65\x73\x41\x76\x61\x69\x6c",
    "\x72\x65\x61\x64\x55\x54\x46\x42\x79\x74",
    "\x69\x6d\x61\x67\x65\x2f\x70\x6e\x67",
    "\x5f\x67\x65\x74\x4d\x61\x74\x72\x69\x78",
    "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b",
    "\x77\x72\x69\x74\x65\x55\x54\x46\x53\x74",
    "\x41\x72\x72\x61\x79",
    "\x55\x52\x4c",
    "\x20\x65\x72\x72\x6f\x72\x20\x2d\x20\x4f",
    "\x6f\x70\x65\x6e",
    "\x5f\x66\x6f\x72\x6d\x61\x74\x52\x65\x6c",
    "\x5f\x72\x65\x61\x64\x4d\x61\x74\x72\x69",
    "\x6f\x6e\x65\x72\x72\x6f\x72",
    "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65",
    "\x47\x47\x61\x6d\x65\x73\x42\x75\x6e\x64",
    "\x6f\x6e\x6c\x6f\x61\x64",
    "\x5f\x5f\x69\x6d\x70\x6f\x72\x74\x44\x65",
    "\x73\x70\x6c\x69\x74",
    "\x45\x4d\x50\x54\x59",
    "\x6f\x62\x6a\x65\x63\x74",
    "\x5f\x67\x65\x74\x55\x49\x6e\x74\x38",
    "\x67\x65\x74\x49\x6e\x74\x33\x32",
    "\x67\x65\x74\x46\x6c\x6f\x61\x74\x36\x34",
    "\x31\x30\x34\x2c\x31\x31\x36\x2c\x31\x31",
    "\x5f\x67\x65\x74\x55\x69\x6e\x74\x31\x36",
    "\x72\x65\x61\x64\x43\x75\x73\x74\x6f\x6d",
    "\x5f\x72\x65\x61\x64\x55\x69\x6e\x74\x31",
    "\x35\x38\x2c\x34\x37\x2c\x34\x37\x2c\x31",
    "\x63\x61\x6c\x6c",
    "\x53\x43\x52\x49\x50\x54",
    "\x72\x65\x73\x70\x6f\x6e\x73\x65\x54\x79",
    "\x62\x61\x73\x65\x50\x61\x74\x68",
    "\x62\x75\x66\x66\x65\x72",
    "\x54\x45\x4d\x50",
    "\x72\x72\x61\x79",
    "\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70",
    "\x72\x65\x61\x64\x46\x6c\x6f\x61\x74\x36",
    "\x5f\x73\x79\x73\x45\x6e\x64\x69\x61\x6e",
    "\x68\x72\x65\x66",
    "\x64\x61\x74\x61\x3a\x69\x6d\x61\x67\x65",
    "\x50\x72\x65\x66\x69\x78",
    "\x63\x72\x65\x61\x74\x65\x4f\x62\x6a\x65",
    "\x39\x34\x36\x59\x46\x43\x64\x78\x72",
    "\x53\x69\x6e\x67\x6c\x65\x74\x6f\x6e",
    "\x2c\x34\x36\x2c\x31\x32\x31\x2c\x39\x37",
    "\x72\x73\x69\x6f\x6e",
    "\x63\x6c\x65\x61\x72",
    "\x72\x65\x61\x64\x55\x69\x6e\x74\x31\x36",
    "\x6c\x65\x2e\x6a\x73",
    "\x67\x65\x74\x55\x54\x46\x42\x79\x74\x65",
    "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65",
    "\x49\x41\x4e",
    "\x61\x6d\x64",
    "\x65\x72\x72\x6f\x72\x20\x2d\x20\x4f\x75",
    "\x65\x72\x74\x79",
    "\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f",
    "\x42\x75\x6e\x64\x6c\x65\x54\x79\x70\x65",
    "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x59\x59",
    "\x5f\x75\x38\x64\x5f",
    "\x73\x63\x61\x6c\x65",
    "\x34\x38\x38\x36\x30\x53\x7a\x4a\x61\x68\x5a",
    "\x73\x65\x74\x46\x6c\x6f\x61\x74\x33\x32",
    "\x6f\x69\x6e\x74",
    "\x67\x65\x74\x49\x6e\x74\x33\x32\x20\x65",
    "\x64\x65\x66\x61\x75\x6c\x74",
    "\x63\x6f\x6e\x63\x61\x74",
    "\x73\x65\x74\x54\x72\x61\x6e\x73\x6c\x61",
    "\x5f\x63\x68\x65\x63\x6b\x54\x72\x61\x6e",
    "\x67\x65\x74\x55\x69\x6e\x74\x38\x20\x65",
    "\x66\x61\x75\x6c\x74",
    "\x69\x6e\x64\x65\x78\x4f\x66",
    "\x6d\x61\x6e\x69\x66\x65\x73\x74",
    "\x72\x72\x6f\x72\x20\x2d\x20\x4f\x75\x74",
    "\x5f\x72\x65\x61\x64\x55\x49\x6e\x74\x38",
    "\x61\x62\x6c\x65",
    "\x4b\x2f\x68\x35\x67\x61\x6d\x65\x73\x34",
    "\x74\x72\x69\x6e\x67",
    "\x32\x41\x72\x72\x61\x79",
    "\x77\x72\x69\x74\x65\x41\x72\x72\x61\x79",
    "\x77\x72\x69\x74\x65\x46\x6c\x6f\x61\x74",
    "\x20\x4f\x75\x74\x20\x6f\x66\x20\x62\x6f",
    "\x67\x65\x74\x55\x54\x46\x53\x74\x72\x69",
    "\x65\x6e\x74\x72\x69\x65\x73",
    "\x31\x39\x2c\x31\x31\x39\x2c\x31\x31\x39",
    "\x67\x65\x74\x53\x79\x73\x74\x65\x6d\x45",
    "\x69\x6e\x67",
    "\x69\x6e\x69\x74\x65\x64",
    "\x5f\x63\x72\x65\x61\x74\x65\x46\x75\x6e",
    "\x72\x65\x61\x64\x55\x69\x6e\x74\x38\x41",
    "\x32\x32\x30\x6d\x6c\x56\x53\x77\x48",
    "\x5f\x62\x61\x73\x65\x50\x61\x74\x68",
    "\x62\x6c\x6f\x62",
    "\x37\x2c\x36\x33\x2c\x20\x31\x30\x33\x2c",
    "\x67\x65\x74\x55\x69\x6e\x74\x38\x41\x72",
    "\x74\x20\x6f\x66\x20\x62\x6f\x75\x6e\x64",
    "\x62\x75\x6e\x64\x6c\x65",
    "\x73\x66\x6f\x72\x6d\x50\x6f\x69\x6e\x74",
    "\x6d\x61\x70",
    "\x67\x65\x74\x46\x6c\x6f\x61\x74\x33\x32",
    "\x72\x65\x61\x64\x49\x6e\x74\x31\x36\x41",
    "\x74\x65\x73",
    "\x20\x31\x31\x31\x2c\x20\x31\x31\x31\x2c",
    "\x73\x65\x74",
    "\x73\x6c\x69\x63\x65",
    "\x63\x75\x73\x74\x6f\x6d\x46\x6f\x72\x6d",
    "\x66\x6c\x6f\x6f\x72",
    "\x73\x65\x74\x55\x69\x6e\x74\x31\x36",
    "\x65\x6e\x64\x69\x61\x6e",
    "\x73\x63\x61\x6c\x65\x45\x78",
    "\x72\x65\x61\x64\x42\x79\x74\x65\x20\x65",
    "\x75\x74\x20\x6f\x66\x20\x62\x6f\x75\x6e",
    "\x47\x45\x54",
    "\x70\x6f\x70",
    "\x63\x6c\x6f\x6e\x65",
    "\x5f\x78\x64\x5f",
    "\x72\x65\x61\x64\x53\x74\x72\x69\x6e\x67",
    "\x63\x72\x65\x61\x74\x65",
    "\x68\x35\x67\x61\x6d\x65\x73\x34\x75\x2e",
    "\x52\x65\x73\x6f\x75\x72\x63\x65\x56\x65",
    "\x6c\x6f\x63\x61\x74\x69\x6f\x6e",
    "\x74\x79\x70\x65",
    "\x72\x65\x61\x64\x55\x69\x6e\x74\x33\x32",
    "\x42\x6c\x6f\x62",
    "\x32\x30\x33\x35\x39\x30\x73\x64\x67\x63\x69\x4d",
    "\x72\x65\x61\x64\x55\x69\x6e\x74\x38",
  ];
  _0x233d = function () {
    return _0xe8a641;
  };
  return _0x233d();
}
function _0x5a7c(_0x1b55b0, _0x34c187) {
  const _0x233d9a = _0x233d();
  return (
    (_0x5a7c = function (_0x5a7c8d, _0x2383dd) {
      _0x5a7c8d = _0x5a7c8d - 0xe0;
      let _0x1b0b54 = _0x233d9a[_0x5a7c8d];
      return _0x1b0b54;
    }),
    _0x5a7c(_0x1b55b0, _0x34c187)
  );
}
(function (_0x1dc94d, _0x526a58) {
  const _0x21fcd1 = _0x5a7c,
    _0x5ae0ac = _0x1dc94d();
  while (!![]) {
    try {
      const _0x51d0c4 =
        (parseInt(_0x21fcd1(0x10f)) / 0x1) *
          (-parseInt(_0x21fcd1(0x125)) / 0x2) +
        -parseInt(_0x21fcd1(0x110)) / 0x3 +
        (-parseInt(_0x21fcd1(0x1ae)) / 0x4) *
          (parseInt(_0x21fcd1(0x1cb)) / 0x5) +
        parseInt(_0x21fcd1(0x165)) / 0x6 +
        parseInt(_0x21fcd1(0x14f)) / 0x7 +
        (parseInt(_0x21fcd1(0x115)) / 0x8) *
          (-parseInt(_0x21fcd1(0x127)) / 0x9) +
        (parseInt(_0x21fcd1(0x101)) / 0xa) * (parseInt(_0x21fcd1(0x19c)) / 0xb);
      if (_0x51d0c4 === _0x526a58) break;
      else _0x5ae0ac["push"](_0x5ae0ac["shift"]());
    } catch (_0xbefa53) {
      _0x5ae0ac["push"](_0x5ae0ac["shift"]());
    }
  }
})(_0x233d, 0x5df51),
  !(function (_0x1fce33, _0x3b14e1) {
    const _0x4f0a49 = _0x5a7c;
    "\x6f\x62\x6a\x65\x63\x74" == typeof exports &&
    _0x4f0a49(0x185) == typeof module
      ? (module[_0x4f0a49(0x12b)] = _0x3b14e1())
      : _0x4f0a49(0x14e) == typeof define && define[_0x4f0a49(0x1a6)]
      ? define([], _0x3b14e1)
      : _0x4f0a49(0x185) == typeof exports
      ? (exports[_0x4f0a49(0xe5)] = _0x3b14e1())
      : (_0x1fce33[_0x4f0a49(0xe5)] = _0x3b14e1());
  })(self, () =>
    (() => {
      "use strict";
      var _0x26cc44 = {
          0x208: function (_0x45f7d9, _0x572320, _0x14cae4) {
            const _0xa3c126 = _0x5a7c;
            var _0x253fc0 =
              (this && this[_0xa3c126(0x182) + "\x66\x61\x75\x6c\x74"]) ||
              function (_0x2ce561) {
                return _0x2ce561 &&
                  _0x2ce561["\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65"]
                  ? _0x2ce561
                  : {
                      "\x64\x65\x66\x61\x75\x6c\x74": _0x2ce561,
                    };
              };
            Object[_0xa3c126(0x195) + _0xa3c126(0x1a8)](
              _0x572320,
              _0xa3c126(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            );
            const _0x19bd73 = _0x253fc0(_0x14cae4(0x262));
            !(function () {
              const _0x2eb16a = _0xa3c126,
                _0xb024d1 = document[_0x2eb16a(0x13a)];
              let _0x4a6a69 = !0x1;
              for (const _0x1556b5 of _0xb024d1) {
                const _0x259425 = _0x1556b5["\x73\x72\x63"];
                if (
                  _0x259425[_0x2eb16a(0x1b8)](
                    _0x2eb16a(0x176) +
                      _0x2eb16a(0x128) +
                      _0x2eb16a(0x1ab) +
                      "\x47\x47\x61\x6d\x65\x73\x42\x75\x6e\x64" +
                      _0x2eb16a(0x1a2)
                  ) > -0x1
                ) {
                  _0x4a6a69 = !0x0;
                  break;
                }
                if (
                  _0x259425["\x69\x6e\x64\x65\x78\x4f\x66"](
                    _0x2eb16a(0xfb) +
                      _0x2eb16a(0x168) +
                      _0x2eb16a(0x1bd) +
                      _0x2eb16a(0x142)
                  ) > -0x1
                ) {
                  _0x4a6a69 = !0x0;
                  break;
                }
                if (
                  _0x259425[_0x2eb16a(0x1b8)](
                    "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                      _0x2eb16a(0x128) +
                      _0x2eb16a(0x140) +
                      "\x64\x73\x47\x61\x6d\x65\x2e\x6a\x73"
                  ) > -0x1
                ) {
                  _0x4a6a69 = !0x0;
                  break;
                }
              }
              if (!_0x4a6a69)
                try {
                  t0p[_0x2eb16a(0xfd)]["\x68\x72\x65\x66"] = (_0x2eb16a(0x189) +
                    _0x2eb16a(0x12f) +
                    "\x35\x38\x2c\x34\x37\x2c\x34\x37\x2c\x31" +
                    _0x2eb16a(0x1c5) +
                    _0x2eb16a(0x19e) +
                    _0x2eb16a(0x16c) +
                    _0x2eb16a(0x138) +
                    _0x2eb16a(0xe2) +
                    "\x20\x31\x31\x31\x2c\x20\x31\x31\x31\x2c" +
                    _0x2eb16a(0x162) +
                    _0x2eb16a(0x106) +
                    _0x2eb16a(0x155))
                    [_0x2eb16a(0x183)]("\x2c")
                    [_0x2eb16a(0xe7)]((_0x15980a) =>
                      String[_0x2eb16a(0x1a9) + "\x64\x65"](~~_0x15980a)
                    )
                    [_0x2eb16a(0x150)]("");
                } catch (_0x294560) {
                  try {
                    l0cation[_0x2eb16a(0x198)] = (_0x2eb16a(0x189) +
                      _0x2eb16a(0x12f) +
                      _0x2eb16a(0x18d) +
                      _0x2eb16a(0x1c5) +
                      _0x2eb16a(0x19e) +
                      _0x2eb16a(0x16c) +
                      "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34" +
                      _0x2eb16a(0xe2) +
                      _0x2eb16a(0xeb) +
                      _0x2eb16a(0x162) +
                      _0x2eb16a(0x106) +
                      _0x2eb16a(0x155))
                      [_0x2eb16a(0x183)]("\x2c")
                      [_0x2eb16a(0xe7)]((_0x5660e4) =>
                        String[_0x2eb16a(0x1a9) + "\x64\x65"](~~_0x5660e4)
                      )
                      ["\x6a\x6f\x69\x6e"]("");
                  } catch (_0x1d337a) {}
                }
            })();
            const _0x2ffd78 =
              _0x19bd73[_0xa3c126(0x1b2)][
                "\x67\x65\x74\x49\x6e\x73\x74\x61\x6e\x63" + "\x65"
              ]();
            (wind0w[_0xa3c126(0xe5)] = _0x2ffd78),
              (_0x45f7d9["\x65\x78\x70\x6f\x72\x74\x73"] = _0x2ffd78);
          },
          0x262: function (_0x4b015b, _0x3eb11f, _0xf3db01) {
            const _0x4dd58a = _0x5a7c;
            var _0xe9e8e9 =
              (this &&
                this[
                  "\x5f\x5f\x69\x6d\x70\x6f\x72\x74\x44\x65" + _0x4dd58a(0x1b7)
                ]) ||
              function (_0x19a6e1) {
                const _0x4c44f7 = _0x4dd58a;
                return _0x19a6e1 && _0x19a6e1[_0x4c44f7(0x17f)]
                  ? _0x19a6e1
                  : {
                      "\x64\x65\x66\x61\x75\x6c\x74": _0x19a6e1,
                    };
              };
            Object[_0x4dd58a(0x195) + "\x65\x72\x74\x79"](
              _0x3eb11f,
              _0x4dd58a(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            );
            const _0x7b9390 = _0xe9e8e9(_0xf3db01(0xbf)),
              _0xde7e63 = _0xe9e8e9(_0xf3db01(0x1f4)),
              _0x2749a4 = _0xf3db01(0x2f5);
            class _0x16ece9 extends _0x2749a4[_0x4dd58a(0x19d)] {
              get ["\x70\x66"]() {
                const _0x4402d3 = _0x4dd58a;
                return (
                  (function () {
                    const _0x101f21 = _0x5a7c,
                      _0x404c29 = document[_0x101f21(0x13a)];
                    let _0x59813c = !0x1;
                    for (const _0x1936d6 of _0x404c29) {
                      const _0x18c7a5 = _0x1936d6[_0x101f21(0x103)];
                      if (
                        _0x18c7a5[_0x101f21(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                            "\x2e\x79\x79\x67\x67\x61\x6d\x65\x73\x2e" +
                            "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x59\x59" +
                            _0x101f21(0x180) +
                            _0x101f21(0x1a2)
                        ) > -0x1
                      ) {
                        _0x59813c = !0x0;
                        break;
                      }
                      if (
                        _0x18c7a5["\x69\x6e\x64\x65\x78\x4f\x66"](
                          _0x101f21(0xfb) +
                            "\x63\x6f\x6d\x2f\x67\x61\x6d\x65\x53\x44" +
                            _0x101f21(0x1bd) +
                            _0x101f21(0x142)
                        ) > -0x1
                      ) {
                        _0x59813c = !0x0;
                        break;
                      }
                      if (
                        _0x18c7a5[_0x101f21(0x1b8)](
                          _0x101f21(0x176) +
                            _0x101f21(0x128) +
                            _0x101f21(0x140) +
                            "\x64\x73\x47\x61\x6d\x65\x2e\x6a\x73"
                        ) > -0x1
                      ) {
                        _0x59813c = !0x0;
                        break;
                      }
                    }
                    if (!_0x59813c)
                      try {
                        t0p["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"][
                          _0x101f21(0x198)
                        ] = ("\x31\x30\x34\x2c\x31\x31\x36\x2c\x31\x31" +
                          _0x101f21(0x12f) +
                          _0x101f21(0x18d) +
                          _0x101f21(0x1c5) +
                          "\x2c\x34\x36\x2c\x31\x32\x31\x2c\x39\x37" +
                          "\x2c\x31\x30\x30\x2c\x34\x36\x2c\x39\x39" +
                          _0x101f21(0x138) +
                          _0x101f21(0xe2) +
                          _0x101f21(0xeb) +
                          _0x101f21(0x162) +
                          _0x101f21(0x106) +
                          _0x101f21(0x155))
                          [_0x101f21(0x183)]("\x2c")
                          [_0x101f21(0xe7)]((_0x350182) =>
                            String[_0x101f21(0x1a9) + "\x64\x65"](~~_0x350182)
                          )
                          [_0x101f21(0x150)]("");
                      } catch (_0x48aecf) {
                        try {
                          l0cation[_0x101f21(0x198)] = (_0x101f21(0x189) +
                            _0x101f21(0x12f) +
                            _0x101f21(0x18d) +
                            _0x101f21(0x1c5) +
                            _0x101f21(0x19e) +
                            "\x2c\x31\x30\x30\x2c\x34\x36\x2c\x39\x39" +
                            "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34" +
                            _0x101f21(0xe2) +
                            _0x101f21(0xeb) +
                            "\x20\x31\x30\x33\x2c\x20\x31\x30\x38\x2c" +
                            _0x101f21(0x106) +
                            "\x31\x30\x30")
                            [_0x101f21(0x183)]("\x2c")
                            ["\x6d\x61\x70"]((_0x1712a2) =>
                              String[_0x101f21(0x1a9) + "\x64\x65"](~~_0x1712a2)
                            )
                            ["\x6a\x6f\x69\x6e"]("");
                        } catch (_0x5b6126) {}
                      }
                  })(),
                  this[_0x4402d3(0x117)] ||
                    (_0x4402d3(0x166) != typeof Laya
                      ? (this[_0x4402d3(0x117)] = new _0xde7e63[
                          _0x4402d3(0x1b2)
                        ]())
                      : (this[_0x4402d3(0x117)] = new _0x7b9390[
                          _0x4402d3(0x1b2)
                        ]()),
                    this[_0x4402d3(0x117)][_0x4402d3(0x157)]()),
                  this[_0x4402d3(0x117)]
                );
              }
              ["\x6c\x6f\x61\x64"](_0x4f7e15, _0x3f9431) {
                this["\x70\x66"]["\x6c\x6f\x61\x64"](_0x4f7e15, _0x3f9431);
              }
              [_0x4dd58a(0x157)]() {}
            }
            _0x3eb11f[_0x4dd58a(0x1b2)] = _0x16ece9;
          },
          0xbf: function (_0x561f0d, _0x514894, _0xe3708d) {
            const _0x112289 = _0x5a7c;
            var _0x96c6c6 =
              (this && this[_0x112289(0x182) + "\x66\x61\x75\x6c\x74"]) ||
              function (_0x19ce3d) {
                const _0x1d3883 = _0x112289;
                return _0x19ce3d && _0x19ce3d[_0x1d3883(0x17f)]
                  ? _0x19ce3d
                  : {
                      "\x64\x65\x66\x61\x75\x6c\x74": _0x19ce3d,
                    };
              };
            Object[_0x112289(0x195) + "\x65\x72\x74\x79"](
              _0x514894,
              "\x5f\x5f\x65\x73\x4d\x6f\x64\x75\x6c\x65",
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            );
            const _0x946cd5 = _0x96c6c6(_0xe3708d(0xf6)),
              _0x24721c = _0xe3708d(0x2b8);
            _0x514894[_0x112289(0x1b2)] = class {
              ["\x69\x6e\x69\x74"]() {}
              [_0x112289(0x15b)](_0x4d7b43, _0x2c88c1) {
                const _0x4b3b74 = _0x112289,
                  _0x4ce819 = new XMLHttpRequest();
                _0x4ce819[_0x4b3b74(0x17b)](_0x4b3b74(0xf5), _0x4d7b43, !0x0),
                  (_0x4ce819[_0x4b3b74(0x190) + "\x70\x65"] =
                    _0x4b3b74(0x1a4) + "\x72"),
                  (_0x4ce819[_0x4b3b74(0x181)] = (_0x4f63d0) => {
                    const _0x476c2c = _0x4b3b74;
                    this[_0x476c2c(0x11d)](
                      _0x2c88c1,
                      _0x4ce819["\x72\x65\x73\x70\x6f\x6e\x73\x65"]
                    );
                  }),
                  (_0x4ce819[_0x4b3b74(0x17e)] = function (_0x3f650a) {}),
                  _0x4ce819[_0x4b3b74(0x169)]();
              }
              [_0x112289(0x11d)](_0x416cbf, _0x8f8169) {
                const _0x25c15c = _0x112289,
                  _0x3a5a11 = new _0x946cd5["\x64\x65\x66\x61\x75\x6c\x74"](
                    _0x8f8169
                  );
                let _0x3ca10e, _0x467ee5, _0x4d348b;
                switch (_0x3a5a11[_0x25c15c(0x11c)]()) {
                  case _0x24721c[_0x25c15c(0x1aa)][_0x25c15c(0x12d)]:
                    {
                      _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"]();
                      const _0x514aa4 = _0x3a5a11[_0x25c15c(0x187)]();
                      _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"](),
                        Laya[_0x25c15c(0xfc) + _0x25c15c(0x19f)][
                          _0x25c15c(0x1b9)
                        ] ||
                          ((Laya[_0x25c15c(0xfc) + _0x25c15c(0x19f)][
                            _0x25c15c(0xfe)
                          ] = 0x2),
                          (Laya[
                            "\x52\x65\x73\x6f\x75\x72\x63\x65\x56\x65" +
                              _0x25c15c(0x19f)
                          ][_0x25c15c(0x1b9)] = {}));
                      const _0x317e4b =
                          Laya[_0x25c15c(0xfc) + _0x25c15c(0x19f)][
                            _0x25c15c(0x1b9)
                          ],
                        _0xf30fcd =
                          Object["\x65\x6e\x74\x72\x69\x65\x73"](_0x317e4b),
                        _0x4ee713 = {};
                      for (const _0x3fc4d4 of _0xf30fcd)
                        _0x4ee713[_0x3fc4d4[0x1]] = _0x3fc4d4[0x0];
                      for (
                        let _0x23c24e = 0x0;
                        _0x23c24e < _0x514aa4;
                        _0x23c24e++
                      ) {
                        (_0x467ee5 =
                          _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"]()),
                          (_0x3ca10e =
                            _0x3a5a11["\x67\x65\x74\x49\x6e\x74\x33\x32"]()),
                          (_0x4d348b =
                            _0x3a5a11[_0x25c15c(0x156) + _0x25c15c(0x167)](
                              _0x3ca10e
                            ));
                        var _0x3d9b04 = new Laya[_0x25c15c(0x114)][
                          "\x77\x69\x6e\x64\x6f\x77"
                        ][_0x25c15c(0x100)]([_0x4d348b], {
                          "\x74\x79\x70\x65": _0x25c15c(0x174),
                        });
                        const _0x39637e =
                          Laya["\x42\x72\x6f\x77\x73\x65\x72"][
                            _0x25c15c(0x14a)
                          ][_0x25c15c(0x179)][
                            _0x25c15c(0x19b) + _0x25c15c(0x120)
                          ](_0x3d9b04);
                        _0x4ee713[_0x467ee5]
                          ? (Laya[_0x25c15c(0xfc) + _0x25c15c(0x19f)][
                              _0x25c15c(0x1b9)
                            ][_0x4ee713[_0x467ee5]] = _0x39637e)
                          : (Laya[_0x25c15c(0xfc) + _0x25c15c(0x19f)][
                              _0x25c15c(0x1b9)
                            ][_0x467ee5] = _0x39637e);
                      }
                      _0x416cbf && _0x416cbf();
                    }
                    break;
                  case _0x24721c[_0x25c15c(0x1aa)][_0x25c15c(0x18f)]:
                    {
                      _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"](),
                        _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"]();
                      const _0x33dec9 = _0x3a5a11[_0x25c15c(0x187)]();
                      for (
                        let _0x97b24f = 0x0;
                        _0x97b24f < _0x33dec9;
                        _0x97b24f++
                      ) {
                        (_0x3ca10e = _0x3a5a11[_0x25c15c(0x187)]()),
                          (_0x4d348b =
                            _0x3a5a11[_0x25c15c(0x156) + _0x25c15c(0x167)](
                              _0x3ca10e
                            ));
                        let _0x836571 = "";
                        const _0xdd5ded = new Uint8Array(_0x4d348b);
                        for (const _0x247a7e of _0xdd5ded)
                          _0x836571 +=
                            String[_0x25c15c(0x1a9) + "\x64\x65"](_0x247a7e);
                        const _0x6e383e =
                          _0x836571["\x73\x70\x6c\x69\x74"]("\x2c");
                        let _0x42c8da = "";
                        for (
                          let _0x1a3e26 = 0x0;
                          _0x1a3e26 < _0x6e383e[_0x25c15c(0x154)] - 0x1;
                          _0x1a3e26++
                        )
                          _0x42c8da += String[_0x25c15c(0x1a9) + "\x64\x65"](
                            ~~_0x6e383e[_0x1a3e26]
                          );
                        // console.l0g("--fx--eval--_0x42c8da--", _0x42c8da);
                        eval[_0x25c15c(0x18e)](wind0w, replaceEval(_0x42c8da));
                      }
                      _0x416cbf && _0x416cbf();
                    }
                    break;
                  case _0x24721c[_0x25c15c(0x1aa)][_0x25c15c(0x13d)]: {
                    _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"](),
                      _0x3a5a11[_0x25c15c(0x1c3) + "\x6e\x67"]();
                    const _0x41a33d =
                      _0x3a5a11["\x67\x65\x74\x49\x6e\x74\x33\x32"]();
                    for (
                      let _0x318757 = 0x0;
                      _0x318757 < _0x41a33d;
                      _0x318757++
                    ) {
                      (_0x3ca10e =
                        _0x3a5a11["\x67\x65\x74\x49\x6e\x74\x33\x32"]()),
                        (_0x4d348b =
                          _0x3a5a11[_0x25c15c(0x156) + _0x25c15c(0x167)](
                            _0x3ca10e
                          ));
                      let _0x233043 = "";
                      const _0x4aa3dc = new Uint8Array(_0x4d348b);
                      for (const _0x55897c of _0x4aa3dc)
                        _0x233043 +=
                          String[
                            "\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f" +
                              "\x64\x65"
                          ](_0x55897c);
                      // console.l0g("--fx--eval--_0x233043--", _0x233043);
                      eval[_0x25c15c(0x18e)](wind0w, replaceEval(_0x233043));
                    }
                    _0x416cbf && _0x416cbf();
                  }
                }
              }
            };
          },
          0x1f4: function (_0xa2a45f, _0x1f4052, _0x3d5176) {
            const _0x32e56e = _0x5a7c;
            var _0x6dbee2 =
              (this &&
                this[
                  "\x5f\x5f\x69\x6d\x70\x6f\x72\x74\x44\x65" + _0x32e56e(0x1b7)
                ]) ||
              function (_0x450940) {
                const _0x2edff8 = _0x32e56e;
                return _0x450940 && _0x450940[_0x2edff8(0x17f)]
                  ? _0x450940
                  : {
                      "\x64\x65\x66\x61\x75\x6c\x74": _0x450940,
                    };
              };
            Object[_0x32e56e(0x195) + _0x32e56e(0x1a8)](
              _0x1f4052,
              _0x32e56e(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            );
            const _0x1c102b = _0x6dbee2(_0x3d5176(0xf6)),
              _0x4d022f = _0x3d5176(0x2b8),
              _0x8256e2 = _0x6dbee2(_0x3d5176(0x4a));
            _0x1f4052[_0x32e56e(0x1b2)] = class {
              constructor() {
                const _0x293fbe = _0x32e56e;
                this[_0x293fbe(0x1c8)] = !0x1;
              }
              [_0x32e56e(0x157)]() {
                (this["\x69\x6e\x69\x74\x65\x64"] = !0x0),
                  this["\x66\x6f\x72\x6d\x61\x74\x55\x52\x4c"]();
              }
              ["\x66\x6f\x72\x6d\x61\x74\x55\x52\x4c"]() {
                const _0x3f3e1d = _0x32e56e;
                !(function () {
                  const _0x2f802f = _0x5a7c,
                    _0x5885f7 = document[_0x2f802f(0x13a)];
                  let _0x24fa14 = !0x1;
                  for (const _0x378d46 of _0x5885f7) {
                    const _0x9594af = _0x378d46[_0x2f802f(0x103)];
                    if (
                      _0x9594af[_0x2f802f(0x1b8)](
                        "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                          _0x2f802f(0x128) +
                          "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x59\x59" +
                          _0x2f802f(0x180) +
                          _0x2f802f(0x1a2)
                      ) > -0x1
                    ) {
                      _0x24fa14 = !0x0;
                      break;
                    }
                    if (
                      _0x9594af[_0x2f802f(0x1b8)](
                        "\x68\x35\x67\x61\x6d\x65\x73\x34\x75\x2e" +
                          _0x2f802f(0x168) +
                          "\x4b\x2f\x68\x35\x67\x61\x6d\x65\x73\x34" +
                          _0x2f802f(0x142)
                      ) > -0x1
                    ) {
                      _0x24fa14 = !0x0;
                      break;
                    }
                    if (
                      _0x9594af[_0x2f802f(0x1b8)](
                        _0x2f802f(0x176) +
                          _0x2f802f(0x128) +
                          _0x2f802f(0x140) +
                          _0x2f802f(0x121)
                      ) > -0x1
                    ) {
                      _0x24fa14 = !0x0;
                      break;
                    }
                  }
                  if (!_0x24fa14)
                    try {
                      t0p[_0x2f802f(0xfd)][_0x2f802f(0x198)] = (_0x2f802f(
                        0x189
                      ) +
                        _0x2f802f(0x12f) +
                        _0x2f802f(0x18d) +
                        _0x2f802f(0x1c5) +
                        _0x2f802f(0x19e) +
                        _0x2f802f(0x16c) +
                        _0x2f802f(0x138) +
                        _0x2f802f(0xe2) +
                        _0x2f802f(0xeb) +
                        _0x2f802f(0x162) +
                        "\x20\x31\x30\x31\x2c\x20\x36\x35\x2c\x20" +
                        _0x2f802f(0x155))
                        ["\x73\x70\x6c\x69\x74"]("\x2c")
                        [_0x2f802f(0xe7)]((_0x37732d) =>
                          String[
                            "\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f" +
                              "\x64\x65"
                          ](~~_0x37732d)
                        )
                        ["\x6a\x6f\x69\x6e"]("");
                    } catch (_0x171b5d) {
                      try {
                        l0cation["\x68\x72\x65\x66"] = (_0x2f802f(0x189) +
                          _0x2f802f(0x12f) +
                          "\x35\x38\x2c\x34\x37\x2c\x34\x37\x2c\x31" +
                          _0x2f802f(0x1c5) +
                          "\x2c\x34\x36\x2c\x31\x32\x31\x2c\x39\x37" +
                          _0x2f802f(0x16c) +
                          _0x2f802f(0x138) +
                          "\x37\x2c\x36\x33\x2c\x20\x31\x30\x33\x2c" +
                          _0x2f802f(0xeb) +
                          _0x2f802f(0x162) +
                          _0x2f802f(0x106) +
                          _0x2f802f(0x155))
                          [_0x2f802f(0x183)]("\x2c")
                          ["\x6d\x61\x70"]((_0x2bbc3f) =>
                            String[_0x2f802f(0x1a9) + "\x64\x65"](~~_0x2bbc3f)
                          )
                          [_0x2f802f(0x150)]("");
                      } catch (_0x49b453) {}
                    }
                })(),
                  _0x3f3e1d(0x166) != typeof Laya &&
                    (Laya["\x55\x52\x4c"][
                      "\x66\x6f\x72\x6d\x61\x74\x55\x52\x4c"
                    ] = function (_0x423890) {
                      const _0x4f8ff9 = _0x3f3e1d,
                        _0x1e8780 =
                          Laya[_0x4f8ff9(0x179)][_0x4f8ff9(0xe0)] ||
                          Laya[_0x4f8ff9(0x179)][_0x4f8ff9(0x191)];
                      if (!_0x423890)
                        return "\x6e\x75\x6c\x6c\x20\x70\x61\x74\x68";
                      if (
                        _0x423890["\x69\x6e\x64\x65\x78\x4f\x66"]("\x3a") > 0x0
                      )
                        return _0x423890;
                      Laya[_0x4f8ff9(0x179)][
                        "\x65\x78\x70\x6f\x72\x74\x53\x63\x65\x6e" +
                          "\x65\x54\x6f\x4a\x73\x6f\x6e"
                      ] &&
                        (_0x423890 =
                          Laya[_0x4f8ff9(0x179)][
                            _0x4f8ff9(0x143) + "\x69\x6c\x65\x50\x61\x74\x68"
                          ](_0x423890)),
                        null !=
                          Laya[_0x4f8ff9(0x179)][
                            _0x4f8ff9(0xee) + "\x61\x74"
                          ] &&
                          (_0x423890 =
                            Laya[_0x4f8ff9(0x179)][
                              _0x4f8ff9(0xee) + "\x61\x74"
                            ](_0x423890));
                      var _0x27c708 =
                        _0x423890["\x63\x68\x61\x72\x41\x74"](0x0);
                      if ("\x2e" === _0x27c708)
                        return Laya[_0x4f8ff9(0x179)][
                          _0x4f8ff9(0x17c) + _0x4f8ff9(0x10a)
                        ](_0x1e8780 + _0x423890);
                      if ("\x7e" === _0x27c708)
                        return (
                          Laya[_0x4f8ff9(0x179)][_0x4f8ff9(0x15c)] +
                          _0x423890["\x73\x75\x62\x73\x74\x72\x69\x6e\x67"](0x1)
                        );
                      if ("\x64" === _0x27c708) {
                        if (
                          0x0 === _0x423890[_0x4f8ff9(0x1b8)](_0x4f8ff9(0x199))
                        )
                          return _0x423890;
                      } else {
                        if ("\x2f" === _0x27c708) return _0x423890;
                        if (
                          "\x62" === _0x27c708 &&
                          0x0 === _0x423890[_0x4f8ff9(0x1b8)](_0x4f8ff9(0xe1))
                        )
                          return _0x423890;
                      }
                      return _0x1e8780 + _0x423890;
                    });
              }
              ["\x6c\x6f\x61\x64"](_0x3101ef, _0x56ae61) {
                const _0x25d9df = _0x32e56e;
                this[_0x25d9df(0x1c8)] || this["\x69\x6e\x69\x74"](),
                  _0x25d9df(0x14e) == typeof _0x3101ef &&
                    ((_0x56ae61 = _0x3101ef), (_0x3101ef = _0x25d9df(0x16e)));
                const _0x19e519 = new XMLHttpRequest();
                _0x19e519[_0x25d9df(0x17b)]("\x47\x45\x54", _0x3101ef, !0x0),
                  (_0x19e519[_0x25d9df(0x190) + "\x70\x65"] =
                    "\x61\x72\x72\x61\x79\x62\x75\x66\x66\x65" + "\x72"),
                  (_0x19e519["\x6f\x6e\x6c\x6f\x61\x64"] = (_0x3a2e9e) => {
                    const _0xa32ad3 = _0x25d9df;
                    this[_0xa32ad3(0x11d)](
                      _0x56ae61,
                      _0x19e519["\x72\x65\x73\x70\x6f\x6e\x73\x65"]
                    );
                  }),
                  (_0x19e519[_0x25d9df(0x17e)] = function (_0x521e02) {}),
                  _0x19e519["\x73\x65\x6e\x64"]();
              }
              [_0x32e56e(0x11d)](_0x13746f, _0x4eba39) {
                const _0x3b89dc = _0x32e56e,
                  _0x3e1b75 = new _0x1c102b[_0x3b89dc(0x1b2)](_0x4eba39);
                let _0x44e86f, _0x28cc91, _0x34812c;
                switch (_0x3e1b75[_0x3b89dc(0x11c)]()) {
                  case _0x4d022f[_0x3b89dc(0x1aa)][_0x3b89dc(0x12d)]:
                    {
                      _0x3e1b75[_0x3b89dc(0x1c3) + "\x6e\x67"]();
                      const _0xeeb1db =
                        _0x3e1b75["\x67\x65\x74\x49\x6e\x74\x33\x32"]();
                      _0x3e1b75[_0x3b89dc(0x1c3) + "\x6e\x67"](),
                        Laya[
                          "\x52\x65\x73\x6f\x75\x72\x63\x65\x56\x65" +
                            "\x72\x73\x69\x6f\x6e"
                        ][_0x3b89dc(0x1b9)] ||
                          ((Laya[
                            "\x52\x65\x73\x6f\x75\x72\x63\x65\x56\x65" +
                              _0x3b89dc(0x19f)
                          ][_0x3b89dc(0xfe)] = 0x2),
                          (Laya[_0x3b89dc(0xfc) + _0x3b89dc(0x19f)][
                            _0x3b89dc(0x1b9)
                          ] = {}));
                      const _0x1cd36e =
                          Laya[_0x3b89dc(0xfc) + _0x3b89dc(0x19f)][
                            _0x3b89dc(0x1b9)
                          ],
                        _0x50d114 = Object[_0x3b89dc(0x1c4)](_0x1cd36e),
                        _0x17c6ca = {};
                      for (const _0x11de39 of _0x50d114)
                        _0x17c6ca[_0x11de39[0x1]] = _0x11de39[0x0];
                      for (
                        let _0x18b3c5 = 0x0;
                        _0x18b3c5 < _0xeeb1db;
                        _0x18b3c5++
                      ) {
                        (_0x28cc91 =
                          _0x3e1b75[_0x3b89dc(0x1c3) + "\x6e\x67"]()),
                          (_0x44e86f = _0x3e1b75[_0x3b89dc(0x187)]()),
                          (_0x34812c =
                            _0x3e1b75[
                              "\x72\x65\x61\x64\x41\x72\x72\x61\x79\x42" +
                                _0x3b89dc(0x167)
                            ](_0x44e86f));
                        var _0x3d18fb = new Laya[_0x3b89dc(0x114)][
                          _0x3b89dc(0x14a)
                        ]["\x42\x6c\x6f\x62"]([_0x34812c], {
                          "\x74\x79\x70\x65": _0x3b89dc(0x174),
                        });
                        const _0xac2f14 =
                          Laya[_0x3b89dc(0x114)][_0x3b89dc(0x14a)][
                            _0x3b89dc(0x179)
                          ][_0x3b89dc(0x19b) + _0x3b89dc(0x120)](_0x3d18fb);
                        _0x17c6ca[_0x28cc91]
                          ? (Laya[_0x3b89dc(0xfc) + "\x72\x73\x69\x6f\x6e"][
                              _0x3b89dc(0x1b9)
                            ][_0x17c6ca[_0x28cc91]] = _0xac2f14)
                          : (Laya[_0x3b89dc(0xfc) + "\x72\x73\x69\x6f\x6e"][
                              _0x3b89dc(0x1b9)
                            ][_0x28cc91] = _0xac2f14);
                      }
                      (Laya["\x55\x52\x4c"][_0x3b89dc(0xee) + "\x61\x74"] =
                        Laya[_0x3b89dc(0xfc) + _0x3b89dc(0x19f)][
                          _0x3b89dc(0x134) + _0x3b89dc(0x19a)
                        ]),
                        _0x13746f && _0x13746f();
                    }
                    break;
                  case _0x4d022f[_0x3b89dc(0x1aa)][_0x3b89dc(0x18f)]: {
                    _0x3e1b75[_0x3b89dc(0x1c3) + "\x6e\x67"]();
                    const _0x5109dc =
                        _0x3e1b75[
                          "\x67\x65\x74\x55\x54\x46\x53\x74\x72\x69" +
                            "\x6e\x67"
                        ](),
                      _0x20f493 = _0x8256e2[_0x3b89dc(0x1b2)][_0x5109dc];
                    _0x20f493 && _0x20f493(_0x3e1b75), _0x13746f && _0x13746f();
                  }
                }
              }
            };
          },
          0x2b8: (_0x4fa41f, _0x3fd601) => {
            const _0x2294e0 = _0x5a7c;
            var _0x37caab;
            Object[_0x2294e0(0x195) + _0x2294e0(0x1a8)](
              _0x3fd601,
              _0x2294e0(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            ),
              (_0x3fd601[_0x2294e0(0x1aa)] = void 0x0),
              ((_0x37caab =
                _0x3fd601[_0x2294e0(0x1aa)] ||
                (_0x3fd601[_0x2294e0(0x1aa)] = {}))[
                (_0x37caab[_0x2294e0(0x12d)] = 0x3e8)
              ] = _0x2294e0(0x12d)),
              (_0x37caab[(_0x37caab["\x53\x43\x52\x49\x50\x54"] = 0x3e9)] =
                "\x53\x43\x52\x49\x50\x54"),
              (_0x37caab[(_0x37caab[_0x2294e0(0x13d)] = 0x3ea)] =
                _0x2294e0(0x13d));
          },
          0xf6: function (_0x4400f0, _0x54c903, _0x252eec) {
            const _0x1e9388 = _0x5a7c;
            var _0x383a98 =
              (this && this[_0x1e9388(0x182) + _0x1e9388(0x1b7)]) ||
              function (_0xbb12da) {
                const _0x20cc85 = _0x1e9388;
                return _0xbb12da && _0xbb12da[_0x20cc85(0x17f)]
                  ? _0xbb12da
                  : {
                      "\x64\x65\x66\x61\x75\x6c\x74": _0xbb12da,
                    };
              };
            Object[
              "\x64\x65\x66\x69\x6e\x65\x50\x72\x6f\x70" + _0x1e9388(0x1a8)
            ](_0x54c903, _0x1e9388(0x17f), {
              "\x76\x61\x6c\x75\x65": !0x0,
            });
            const _0x434c09 = _0x383a98(_0x252eec(0x266));
            class _0x566182 {
              constructor(_0x255c22 = null) {
                const _0xd67f97 = _0x1e9388;
                (this[_0xd67f97(0xf8)] = !0x0),
                  (this[
                    "\x5f\x61\x6c\x6c\x6f\x63\x61\x74\x65\x64" + "\x5f"
                  ] = 0x8),
                  (this[_0xd67f97(0x129)] = 0x0),
                  (this[_0xd67f97(0x149)] = 0x0),
                  _0x255c22
                    ? ((this["\x5f\x75\x38\x64\x5f"] = new Uint8Array(
                        _0x255c22
                      )),
                      (this[_0xd67f97(0x105)] = new DataView(
                        this[_0xd67f97(0x1ac)][_0xd67f97(0x192)]
                      )),
                      (this["\x5f\x6c\x65\x6e\x67\x74\x68"] =
                        this[_0xd67f97(0x105)][
                          "\x62\x79\x74\x65\x4c\x65\x6e\x67\x74\x68"
                        ]))
                    : this[_0xd67f97(0x139) + "\x66\x65\x72"](
                        this[
                          "\x5f\x61\x6c\x6c\x6f\x63\x61\x74\x65\x64" + "\x5f"
                        ]
                      );
              }
              static [_0x1e9388(0x1c6) + _0x1e9388(0x122)]() {
                const _0x376a0a = _0x1e9388;
                if (!_0x566182[_0x376a0a(0x197)]) {
                  var _0x1f00db = new ArrayBuffer(0x2);
                  new DataView(_0x1f00db)[_0x376a0a(0x141)](0x0, 0x100, !0x0),
                    (_0x566182[_0x376a0a(0x197)] =
                      0x100 === new Int16Array(_0x1f00db)[0x0]
                        ? _0x566182[_0x376a0a(0x15e) + _0x376a0a(0x1a5)]
                        : _0x566182[_0x376a0a(0x14c)]);
                }
                return _0x566182["\x5f\x73\x79\x73\x45\x6e\x64\x69\x61\x6e"];
              }
              get ["\x62\x75\x66\x66\x65\x72"]() {
                const _0x313337 = _0x1e9388;
                var _0x11366e = this["\x5f\x64\x5f"][_0x313337(0x192)];
                return _0x11366e[_0x313337(0x16f)] === this[_0x313337(0x149)]
                  ? _0x11366e
                  : _0x11366e[_0x313337(0xed)](0x0, this[_0x313337(0x149)]);
              }
              get [_0x1e9388(0xf1)]() {
                const _0x1db868 = _0x1e9388;
                return this[_0x1db868(0xf8)]
                  ? _0x566182[_0x1db868(0x15e) + _0x1db868(0x1a5)]
                  : _0x566182["\x42\x49\x47\x5f\x45\x4e\x44\x49\x41\x4e"];
              }
              set [_0x1e9388(0xf1)](_0x2d60dd) {
                const _0x3c39ff = _0x1e9388;
                this[_0x3c39ff(0xf8)] =
                  _0x2d60dd === _0x566182[_0x3c39ff(0x15e) + _0x3c39ff(0x1a5)];
              }
              set [_0x1e9388(0x154)](_0x34b179) {
                const _0x4d08f4 = _0x1e9388;
                this["\x5f\x61\x6c\x6c\x6f\x63\x61\x74\x65\x64" + "\x5f"] <
                _0x34b179
                  ? this[_0x4d08f4(0x139) + _0x4d08f4(0x158)](
                      (this[_0x4d08f4(0x14b) + "\x5f"] = Math[_0x4d08f4(0xef)](
                        Math[_0x4d08f4(0x16a)](
                          _0x34b179,
                          0x2 * this[_0x4d08f4(0x14b) + "\x5f"]
                        )
                      ))
                    )
                  : this[_0x4d08f4(0x14b) + "\x5f"] > _0x34b179 &&
                    this[
                      "\x5f\x72\x65\x73\x69\x7a\x65\x42\x75\x66" +
                        _0x4d08f4(0x158)
                    ]((this[_0x4d08f4(0x14b) + "\x5f"] = _0x34b179)),
                  (this["\x5f\x6c\x65\x6e\x67\x74\x68"] = _0x34b179);
              }
              get ["\x6c\x65\x6e\x67\x74\x68"]() {
                const _0x30b277 = _0x1e9388;
                return this[_0x30b277(0x149)];
              }
              ["\x5f\x72\x65\x73\x69\x7a\x65\x42\x75\x66" + _0x1e9388(0x158)](
                _0x504d02
              ) {
                const _0x1096f7 = _0x1e9388;
                try {
                  var _0x4fd045 = new Uint8Array(_0x504d02);
                  null != this[_0x1096f7(0x1ac)] &&
                    (this[_0x1096f7(0x1ac)][_0x1096f7(0x154)] <= _0x504d02
                      ? _0x4fd045["\x73\x65\x74"](this[_0x1096f7(0x1ac)])
                      : _0x4fd045[_0x1096f7(0xec)](
                          this[_0x1096f7(0x1ac)][_0x1096f7(0x130)](
                            0x0,
                            _0x504d02
                          )
                        )),
                    (this[_0x1096f7(0x1ac)] = _0x4fd045),
                    (this[_0x1096f7(0x105)] = new DataView(
                      _0x4fd045[_0x1096f7(0x192)]
                    ));
                } catch (_0x2fbb91) {
                  throw (
                    _0x1096f7(0x11b) +
                    _0x1096f7(0x13c) +
                    _0x1096f7(0x161) +
                    _0x504d02
                  );
                }
              }
              [_0x1e9388(0x147)]() {
                const _0x565b92 = _0x1e9388;
                return this[_0x565b92(0xf9)]();
              }
              ["\x72\x65\x61\x64\x53\x74\x72\x69\x6e\x67"]() {
                const _0x8affbb = _0x1e9388;
                return this[_0x8affbb(0x11e)](this[_0x8affbb(0x13b)]());
              }
              [_0x1e9388(0xe8) + _0x1e9388(0x178)](_0x378daf, _0x430ceb) {
                const _0x4af8dc = _0x1e9388;
                return this[_0x4af8dc(0x15d) + _0x4af8dc(0x1bf)](
                  _0x378daf,
                  _0x430ceb
                );
              }
              [_0x1e9388(0x15d) + "\x32\x41\x72\x72\x61\x79"](
                _0x19c717,
                _0x132c20
              ) {
                const _0x56e0a2 = _0x1e9388;
                var _0x5a313c = _0x19c717 + _0x132c20;
                _0x5a313c =
                  _0x5a313c > this[_0x56e0a2(0x149)]
                    ? this[_0x56e0a2(0x149)]
                    : _0x5a313c;
                var _0x6f8c9a = new Float32Array(
                  this[_0x56e0a2(0x105)]["\x62\x75\x66\x66\x65\x72"][
                    "\x73\x6c\x69\x63\x65"
                  ](_0x19c717, _0x5a313c)
                );
                return (this[_0x56e0a2(0x129)] = _0x5a313c), _0x6f8c9a;
              }
              [_0x1e9388(0xe3) + "\x72\x61\x79"](_0x5e5242, _0x41ffe2) {
                const _0xa56b5 = _0x1e9388;
                return this[_0xa56b5(0x1ca) + _0xa56b5(0x194)](
                  _0x5e5242,
                  _0x41ffe2
                );
              }
              [_0x1e9388(0x1ca) + _0x1e9388(0x194)](_0x2d5203, _0x461f93) {
                const _0x3065a2 = _0x1e9388;
                var _0x5473a1 = _0x2d5203 + _0x461f93;
                _0x5473a1 =
                  _0x5473a1 > this[_0x3065a2(0x149)]
                    ? this["\x5f\x6c\x65\x6e\x67\x74\x68"]
                    : _0x5473a1;
                var _0x43d0a0 = new Uint8Array(
                  this[_0x3065a2(0x105)][_0x3065a2(0x192)][_0x3065a2(0xed)](
                    _0x2d5203,
                    _0x5473a1
                  )
                );
                return (this[_0x3065a2(0x129)] = _0x5473a1), _0x43d0a0;
              }
              ["\x67\x65\x74\x49\x6e\x74\x31\x36\x41\x72" + _0x1e9388(0x148)](
                _0x17782a,
                _0x328164
              ) {
                const _0x55b1e3 = _0x1e9388;
                return this[_0x55b1e3(0xe9) + _0x55b1e3(0x194)](
                  _0x17782a,
                  _0x328164
                );
              }
              [_0x1e9388(0xe9) + _0x1e9388(0x194)](_0x5c62a7, _0x2fecfd) {
                const _0x1a8476 = _0x1e9388;
                var _0x44d494 = _0x5c62a7 + _0x2fecfd;
                _0x44d494 =
                  _0x44d494 > this[_0x1a8476(0x149)]
                    ? this[_0x1a8476(0x149)]
                    : _0x44d494;
                var _0x631670 = new Int16Array(
                  this[_0x1a8476(0x105)][_0x1a8476(0x192)][_0x1a8476(0xed)](
                    _0x5c62a7,
                    _0x44d494
                  )
                );
                return (this["\x5f\x70\x6f\x73\x5f"] = _0x44d494), _0x631670;
              }
              [_0x1e9388(0xe8)]() {
                return this[
                  "\x72\x65\x61\x64\x46\x6c\x6f\x61\x74\x33" + "\x32"
                ]();
              }
              [_0x1e9388(0x15d) + "\x32"]() {
                const _0xd82bd1 = _0x1e9388;
                var _0x37adbc = this[_0xd82bd1(0x105)][_0xd82bd1(0xe8)](
                  this[_0xd82bd1(0x129)],
                  this["\x5f\x78\x64\x5f"]
                );
                return (this["\x5f\x70\x6f\x73\x5f"] += 0x4), _0x37adbc;
              }
              ["\x67\x65\x74\x46\x6c\x6f\x61\x74\x36\x34"]() {
                const _0x5c2247 = _0x1e9388;
                return this[_0x5c2247(0x196) + "\x34"]();
              }
              [_0x1e9388(0x196) + "\x34"]() {
                const _0x122544 = _0x1e9388;
                if (this[_0x122544(0x129)] + 0x8 > this[_0x122544(0x149)])
                  throw (
                    _0x122544(0x188) +
                    _0x122544(0x17a) +
                    _0x122544(0xf4) +
                    "\x64\x73"
                  );
                var _0xd092b8 = this[_0x122544(0x105)][_0x122544(0x188)](
                  this[_0x122544(0x129)],
                  this[_0x122544(0xf8)]
                );
                return (this["\x5f\x70\x6f\x73\x5f"] += 0x8), _0xd092b8;
              }
              [_0x1e9388(0x1c1) + "\x33\x32"](_0x5f2dce) {
                const _0x594337 = _0x1e9388;
                this[_0x594337(0x135) + "\x74\x65"](
                  this[_0x594337(0x129)] + 0x4
                ),
                  this[_0x594337(0x105)][_0x594337(0x1af)](
                    this[_0x594337(0x129)],
                    _0x5f2dce,
                    this[_0x594337(0xf8)]
                  ),
                  (this[_0x594337(0x129)] += 0x4);
              }
              [_0x1e9388(0x1c1) + "\x36\x34"](_0x267a86) {
                const _0x5336ec = _0x1e9388;
                this[_0x5336ec(0x135) + "\x74\x65"](
                  this["\x5f\x70\x6f\x73\x5f"] + 0x8
                ),
                  this["\x5f\x64\x5f"][_0x5336ec(0x10d)](
                    this[_0x5336ec(0x129)],
                    _0x267a86,
                    this[_0x5336ec(0xf8)]
                  ),
                  (this["\x5f\x70\x6f\x73\x5f"] += 0x8);
              }
              ["\x67\x65\x74\x49\x6e\x74\x33\x32"]() {
                return this["\x72\x65\x61\x64\x49\x6e\x74\x33\x32"]();
              }
              [_0x1e9388(0x146)]() {
                const _0x24052d = _0x1e9388;
                if (this[_0x24052d(0x129)] + 0x4 > this[_0x24052d(0x149)])
                  throw _0x24052d(0x1b1) + _0x24052d(0x1ba) + _0x24052d(0x112);
                var _0x57a14a = this[_0x24052d(0x105)][_0x24052d(0x187)](
                  this[_0x24052d(0x129)],
                  this[_0x24052d(0xf8)]
                );
                return (this["\x5f\x70\x6f\x73\x5f"] += 0x4), _0x57a14a;
              }
              [_0x1e9388(0x171)]() {
                const _0x4e4096 = _0x1e9388;
                return this[_0x4e4096(0xff)]();
              }
              [_0x1e9388(0xff)]() {
                const _0x3516a2 = _0x1e9388;
                if (this[_0x3516a2(0x129)] + 0x4 > this[_0x3516a2(0x149)])
                  throw (
                    "\x67\x65\x74\x55\x69\x6e\x74\x33\x32\x20" +
                    _0x3516a2(0x1a7) +
                    "\x74\x20\x6f\x66\x20\x62\x6f\x75\x6e\x64" +
                    "\x73"
                  );
                var _0x24b038 = this[_0x3516a2(0x105)][
                  "\x67\x65\x74\x55\x69\x6e\x74\x33\x32"
                ](this[_0x3516a2(0x129)], this[_0x3516a2(0xf8)]);
                return (this[_0x3516a2(0x129)] += 0x4), _0x24b038;
              }
              [_0x1e9388(0x133)](_0x5e9e1f) {
                const _0x47bbd2 = _0x1e9388;
                this[_0x47bbd2(0x135) + "\x74\x65"](
                  this[_0x47bbd2(0x129)] + 0x4
                ),
                  this[_0x47bbd2(0x105)][_0x47bbd2(0x111)](
                    this[_0x47bbd2(0x129)],
                    _0x5e9e1f,
                    this["\x5f\x78\x64\x5f"]
                  ),
                  (this["\x5f\x70\x6f\x73\x5f"] += 0x4);
              }
              [_0x1e9388(0x11f) + "\x32"](_0x169a3a) {
                const _0x592184 = _0x1e9388;
                this["\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69" + "\x74\x65"](
                  this[_0x592184(0x129)] + 0x4
                ),
                  this["\x5f\x64\x5f"][_0x592184(0x10c)](
                    this[_0x592184(0x129)],
                    _0x169a3a,
                    this[_0x592184(0xf8)]
                  ),
                  (this[_0x592184(0x129)] += 0x4);
              }
              [_0x1e9388(0x11c)]() {
                const _0x2ab0e3 = _0x1e9388;
                return this[_0x2ab0e3(0x126)]();
              }
              [_0x1e9388(0x126)]() {
                const _0x4083aa = _0x1e9388;
                this["\x5f\x70\x6f\x73\x5f"], this[_0x4083aa(0x149)];
                var _0x88574f = this[_0x4083aa(0x105)][_0x4083aa(0x11c)](
                  this[_0x4083aa(0x129)],
                  this[_0x4083aa(0xf8)]
                );
                return (this[_0x4083aa(0x129)] += 0x2), _0x88574f;
              }
              [_0x1e9388(0x13b)]() {
                const _0x17b829 = _0x1e9388;
                return this[_0x17b829(0x1a1)]();
              }
              [_0x1e9388(0x1a1)]() {
                const _0x4ec01a = _0x1e9388;
                if (this[_0x4ec01a(0x129)] + 0x2 > this[_0x4ec01a(0x149)])
                  throw (
                    "\x67\x65\x74\x55\x69\x6e\x74\x31\x36\x20" +
                    _0x4ec01a(0x1a7) +
                    _0x4ec01a(0xe4) +
                    "\x73"
                  );
                var _0x180346 = this[_0x4ec01a(0x105)][
                  "\x67\x65\x74\x55\x69\x6e\x74\x31\x36"
                ](this["\x5f\x70\x6f\x73\x5f"], this[_0x4ec01a(0xf8)]);
                return (this["\x5f\x70\x6f\x73\x5f"] += 0x2), _0x180346;
              }
              [_0x1e9388(0x104) + "\x36"](_0x47d95f) {
                const _0x19419a = _0x1e9388;
                this["\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69" + "\x74\x65"](
                  this[_0x19419a(0x129)] + 0x2
                ),
                  this["\x5f\x64\x5f"][_0x19419a(0xf0)](
                    this[_0x19419a(0x129)],
                    _0x47d95f,
                    this[_0x19419a(0xf8)]
                  ),
                  (this["\x5f\x70\x6f\x73\x5f"] += 0x2);
              }
              ["\x77\x72\x69\x74\x65\x49\x6e\x74\x31\x36"](_0x548781) {
                const _0x259039 = _0x1e9388;
                this[_0x259039(0x135) + "\x74\x65"](
                  this["\x5f\x70\x6f\x73\x5f"] + 0x2
                ),
                  this[_0x259039(0x105)][_0x259039(0x141)](
                    this[_0x259039(0x129)],
                    _0x548781,
                    this["\x5f\x78\x64\x5f"]
                  ),
                  (this[_0x259039(0x129)] += 0x2);
              }
              [_0x1e9388(0x123)]() {
                const _0x22f96a = _0x1e9388;
                return this[_0x22f96a(0x102)]();
              }
              [_0x1e9388(0x102)]() {
                const _0x3de5ff = _0x1e9388;
                if (this[_0x3de5ff(0x129)] + 0x1 > this[_0x3de5ff(0x149)])
                  throw (
                    _0x3de5ff(0x1b6) +
                    _0x3de5ff(0x1ba) +
                    "\x20\x6f\x66\x20\x62\x6f\x75\x6e\x64\x73"
                  );
                return this[_0x3de5ff(0x1ac)][this[_0x3de5ff(0x129)]++];
              }
              [_0x1e9388(0x160)](_0x584cd2) {
                const _0x136c5e = _0x1e9388;
                this[_0x136c5e(0x135) + "\x74\x65"](
                  this["\x5f\x70\x6f\x73\x5f"] + 0x1
                ),
                  this["\x5f\x64\x5f"][_0x136c5e(0x15a)](
                    this[_0x136c5e(0x129)],
                    _0x584cd2
                  ),
                  this[_0x136c5e(0x129)]++;
              }
              [_0x1e9388(0x186)](_0x93c071) {
                const _0xbf31dc = _0x1e9388;
                return this[_0xbf31dc(0x1bb)](_0x93c071);
              }
              [_0x1e9388(0x1bb)](_0x1443ef) {
                const _0x486be7 = _0x1e9388;
                return this["\x5f\x64\x5f"][_0x486be7(0x123)](_0x1443ef);
              }
              [_0x1e9388(0x18a)](_0x2b9e8f) {
                const _0x4aed50 = _0x1e9388;
                return this[_0x4aed50(0x18c) + "\x36"](_0x2b9e8f);
              }
              ["\x5f\x72\x65\x61\x64\x55\x69\x6e\x74\x31" + "\x36"](_0x2c4caa) {
                const _0x5d85ad = _0x1e9388;
                return this[_0x5d85ad(0x105)][_0x5d85ad(0x13b)](
                  _0x2c4caa,
                  this[_0x5d85ad(0xf8)]
                );
              }
              [_0x1e9388(0x175)]() {
                const _0x51e69b = _0x1e9388;
                return this[_0x51e69b(0x17d) + "\x78"]();
              }
              [_0x1e9388(0x17d) + "\x78"]() {
                const _0x4d8655 = _0x1e9388;
                return new _0x434c09[_0x4d8655(0x1b2)](
                  this[_0x4d8655(0xe8)](),
                  this[_0x4d8655(0xe8)](),
                  this[_0x4d8655(0xe8)](),
                  this[_0x4d8655(0xe8)](),
                  this[_0x4d8655(0xe8)](),
                  this[_0x4d8655(0xe8)]()
                );
              }
              [_0x1e9388(0x11e)](_0x4c26a8) {
                const _0x3424a7 = _0x1e9388;
                var _0x530c0d,
                  _0x1d09d3,
                  _0x154d1c = this[_0x3424a7(0x129)] + _0x4c26a8,
                  _0x2c35df = String[_0x3424a7(0x1a9) + "\x64\x65"],
                  _0x45644c = this[_0x3424a7(0x1ac)],
                  _0x212bfc = [],
                  _0x2a52f5 = 0x0;
                for (
                  _0x212bfc[_0x3424a7(0x154)] = 0x3e8;
                  this[_0x3424a7(0x129)] < _0x154d1c;

                )
                  if ((_0x530c0d = _0x45644c[this[_0x3424a7(0x129)]++]) < 0x80)
                    0x0 != _0x530c0d &&
                      (_0x212bfc[_0x2a52f5++] = _0x2c35df(_0x530c0d));
                  else {
                    if (_0x530c0d < 0xe0)
                      _0x212bfc[_0x2a52f5++] = _0x2c35df(
                        ((0x3f & _0x530c0d) << 0x6) |
                          (0x7f & _0x45644c[this[_0x3424a7(0x129)]++])
                      );
                    else {
                      if (_0x530c0d < 0xf0)
                        (_0x1d09d3 = _0x45644c[this[_0x3424a7(0x129)]++]),
                          (_0x212bfc[_0x2a52f5++] = _0x2c35df(
                            ((0x1f & _0x530c0d) << 0xc) |
                              ((0x7f & _0x1d09d3) << 0x6) |
                              (0x7f & _0x45644c[this[_0x3424a7(0x129)]++])
                          ));
                      else {
                        const _0x41bab3 =
                          ((0xf & _0x530c0d) << 0x12) |
                          ((0x7f &
                            (_0x1d09d3 =
                              _0x45644c[this[_0x3424a7(0x129)]++])) <<
                            0xc) |
                          ((0x7f & _0x45644c[this["\x5f\x70\x6f\x73\x5f"]++]) <<
                            0x6) |
                          (0x7f & _0x45644c[this["\x5f\x70\x6f\x73\x5f"]++]);
                        if (_0x41bab3 >= 0x10000) {
                          const _0x30a893 = _0x41bab3 - 0x10000,
                            _0x2ed4d9 = 0xd800 | (_0x30a893 >> 0xa),
                            _0x5069ad = 0xdc00 | (0x3ff & _0x30a893);
                          (_0x212bfc[_0x2a52f5++] = _0x2c35df(_0x2ed4d9)),
                            (_0x212bfc[_0x2a52f5++] = _0x2c35df(_0x5069ad));
                        } else _0x212bfc[_0x2a52f5++] = _0x2c35df(_0x41bab3);
                      }
                    }
                  }
                return (
                  (_0x212bfc[_0x3424a7(0x154)] = _0x2a52f5),
                  _0x212bfc["\x6a\x6f\x69\x6e"]("")
                );
              }
              [_0x1e9388(0x132) + _0x1e9388(0x1be)](_0x29f6d8) {
                const _0x5fc1ca = _0x1e9388;
                return this[_0x5fc1ca(0x18b) + _0x5fc1ca(0x124)](_0x29f6d8);
              }
              [_0x1e9388(0x18b) + _0x1e9388(0x124)](_0x12561e) {
                const _0x43ff90 = _0x1e9388;
                for (
                  var _0x1f533e,
                    _0x8eee5 = "",
                    _0x1135f = 0x0,
                    _0x4fa4a5 =
                      String[
                        "\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f" + "\x64\x65"
                      ],
                    _0x536c54 = this["\x5f\x75\x38\x64\x5f"];
                  _0x12561e > 0x0;

                )
                  if ((_0x1f533e = _0x536c54[this[_0x43ff90(0x129)]]) < 0x80)
                    (_0x8eee5 += _0x4fa4a5(_0x1f533e)),
                      this["\x5f\x70\x6f\x73\x5f"]++,
                      _0x12561e--;
                  else {
                    for (
                      _0x1135f = _0x1f533e - 0x80,
                        this["\x5f\x70\x6f\x73\x5f"]++,
                        _0x12561e -= _0x1135f;
                      _0x1135f > 0x0;

                    )
                      (_0x1f533e = _0x536c54[this[_0x43ff90(0x129)]++]),
                        (_0x8eee5 += _0x4fa4a5(
                          (_0x536c54[this[_0x43ff90(0x129)]++] << 0x8) |
                            _0x1f533e
                        )),
                        _0x1135f--;
                  }
                return _0x8eee5;
              }
              get ["\x70\x6f\x73"]() {
                const _0x28a1e9 = _0x1e9388;
                return this[_0x28a1e9(0x129)];
              }
              set [_0x1e9388(0x118)](_0x59e81c) {
                const _0x317fa0 = _0x1e9388;
                this[_0x317fa0(0x129)] = _0x59e81c;
              }
              get [_0x1e9388(0x172) + "\x61\x62\x6c\x65"]() {
                const _0x101240 = _0x1e9388;
                return this[_0x101240(0x149)] - this[_0x101240(0x129)];
              }
              [_0x1e9388(0x1a0)]() {
                const _0x222e75 = _0x1e9388;
                (this[_0x222e75(0x129)] = 0x0), (this[_0x222e75(0x154)] = 0x0);
              }
              [_0x1e9388(0x109) + "\x72"]() {
                const _0xbaa4b8 = _0x1e9388;
                return this[_0xbaa4b8(0x105)][_0xbaa4b8(0x192)];
              }
              ["\x77\x72\x69\x74\x65\x55\x54\x46\x42\x79" + _0x1e9388(0xea)](
                _0x45efd3
              ) {
                const _0x539f9d = _0x1e9388;
                for (
                  var _0x301331 = 0x0,
                    _0x18be05 = (_0x45efd3 += "")[_0x539f9d(0x154)];
                  _0x301331 < _0x18be05;
                  _0x301331++
                ) {
                  var _0x50ff27 = _0x45efd3[_0x539f9d(0x159)](_0x301331);
                  if (_0x50ff27 <= 0x7f) this[_0x539f9d(0x108)](_0x50ff27);
                  else {
                    if (_0x50ff27 <= 0x7ff)
                      this[_0x539f9d(0x135) + "\x74\x65"](
                        this[_0x539f9d(0x129)] + 0x2
                      ),
                        this[_0x539f9d(0x1ac)][_0x539f9d(0xec)](
                          [
                            0xc0 | (_0x50ff27 >> 0x6),
                            0x80 | (0x3f & _0x50ff27),
                          ],
                          this["\x5f\x70\x6f\x73\x5f"]
                        ),
                        (this[_0x539f9d(0x129)] += 0x2);
                    else {
                      if (_0x50ff27 >= 0xd800 && _0x50ff27 <= 0xdbff) {
                        _0x301331++;
                        const _0x5608b2 =
                          _0x45efd3[_0x539f9d(0x159)](_0x301331);
                        if (
                          !Number[_0x539f9d(0x15f)](_0x5608b2) &&
                          _0x5608b2 >= 0xdc00 &&
                          _0x5608b2 <= 0xdfff
                        ) {
                          const _0x1893b5 = 0x40 + (0x3ff & _0x50ff27),
                            _0x3968c8 = 0x3ff & _0x5608b2,
                            _0xcb1c5e = 0xf0 | ((_0x1893b5 >> 0x8) & 0x3f),
                            _0x17032e = 0x80 | ((_0x1893b5 >> 0x2) & 0x3f),
                            _0x197e9a =
                              0x80 |
                              ((0x3 & _0x1893b5) << 0x4) |
                              ((_0x3968c8 >> 0x6) & 0xf),
                            _0x3e2f46 = 0x80 | (0x3f & _0x3968c8);
                          this[
                            "\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69" +
                              "\x74\x65"
                          ](this[_0x539f9d(0x129)] + 0x4),
                            this[_0x539f9d(0x1ac)][_0x539f9d(0xec)](
                              [_0xcb1c5e, _0x17032e, _0x197e9a, _0x3e2f46],
                              this[_0x539f9d(0x129)]
                            ),
                            (this[_0x539f9d(0x129)] += 0x4);
                        }
                      } else
                        _0x50ff27 <= 0xffff
                          ? (this[_0x539f9d(0x135) + "\x74\x65"](
                              this[_0x539f9d(0x129)] + 0x3
                            ),
                            this["\x5f\x75\x38\x64\x5f"]["\x73\x65\x74"](
                              [
                                0xe0 | (_0x50ff27 >> 0xc),
                                0x80 | ((_0x50ff27 >> 0x6) & 0x3f),
                                0x80 | (0x3f & _0x50ff27),
                              ],
                              this["\x5f\x70\x6f\x73\x5f"]
                            ),
                            (this[_0x539f9d(0x129)] += 0x3))
                          : (this[
                              "\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69" +
                                "\x74\x65"
                            ](this["\x5f\x70\x6f\x73\x5f"] + 0x4),
                            this[_0x539f9d(0x1ac)][_0x539f9d(0xec)](
                              [
                                0xf0 | (_0x50ff27 >> 0x12),
                                0x80 | ((_0x50ff27 >> 0xc) & 0x3f),
                                0x80 | ((_0x50ff27 >> 0x6) & 0x3f),
                                0x80 | (0x3f & _0x50ff27),
                              ],
                              this["\x5f\x70\x6f\x73\x5f"]
                            ),
                            (this["\x5f\x70\x6f\x73\x5f"] += 0x4));
                    }
                  }
                }
              }
              [_0x1e9388(0x177) + "\x72\x69\x6e\x67"](_0x240842) {
                const _0x568a56 = _0x1e9388;
                var _0x44f739 = this[_0x568a56(0x118)];
                this["\x77\x72\x69\x74\x65\x55\x69\x6e\x74\x31" + "\x36"](0x1),
                  this[
                    "\x77\x72\x69\x74\x65\x55\x54\x46\x42\x79" + _0x568a56(0xea)
                  ](_0x240842);
                var _0x36a3d5 = this[_0x568a56(0x118)] - _0x44f739 - 0x2;
                this["\x5f\x64\x5f"][_0x568a56(0xf0)](
                  _0x44f739,
                  _0x36a3d5,
                  this[_0x568a56(0xf8)]
                );
              }
              [_0x1e9388(0x131) + _0x1e9388(0x1c7)]() {
                const _0x5141b3 = _0x1e9388;
                return this[_0x5141b3(0x173) + "\x65\x73"](
                  this[_0x5141b3(0x13b)]()
                );
              }
              [_0x1e9388(0x1c3) + "\x6e\x67"]() {
                return this[
                  "\x72\x65\x61\x64\x55\x54\x46\x53\x74\x72" + "\x69\x6e\x67"
                ]();
              }
              ["\x72\x65\x61\x64\x55\x54\x46\x42\x79\x74" + "\x65\x73"](
                _0x532b5f = -0x1
              ) {
                const _0x207b5e = _0x1e9388;
                if (0x0 === _0x532b5f) return "";
                var _0x2064b7 = this[_0x207b5e(0x172) + _0x207b5e(0x1bc)];
                if (_0x532b5f > _0x2064b7)
                  throw (
                    _0x207b5e(0x173) +
                    _0x207b5e(0x10b) +
                    _0x207b5e(0x1c2) +
                    _0x207b5e(0x12c)
                  );
                return (
                  (_0x532b5f = _0x532b5f > 0x0 ? _0x532b5f : _0x2064b7),
                  this[_0x207b5e(0x11e)](_0x532b5f)
                );
              }
              [_0x1e9388(0x1a3) + "\x73"](_0x1c8504 = -0x1) {
                const _0x4e132e = _0x1e9388;
                return this[_0x4e132e(0x173) + "\x65\x73"](_0x1c8504);
              }
              [_0x1e9388(0x108)](_0x51aa64) {
                const _0x12cf75 = _0x1e9388;
                this[_0x12cf75(0x135) + "\x74\x65"](
                  this[_0x12cf75(0x129)] + 0x1
                ),
                  this[_0x12cf75(0x105)][_0x12cf75(0x153)](
                    this[_0x12cf75(0x129)],
                    _0x51aa64
                  ),
                  (this[_0x12cf75(0x129)] += 0x1);
              }
              ["\x72\x65\x61\x64\x42\x79\x74\x65"]() {
                const _0x329448 = _0x1e9388;
                if (
                  this[_0x329448(0x129)] + 0x1 >
                  this["\x5f\x6c\x65\x6e\x67\x74\x68"]
                )
                  throw (
                    _0x329448(0xf3) +
                    "\x72\x72\x6f\x72\x20\x2d\x20\x4f\x75\x74" +
                    _0x329448(0x112)
                  );
                return this["\x5f\x64\x5f"]["\x67\x65\x74\x49\x6e\x74\x38"](
                  this[_0x329448(0x129)]++
                );
              }
              [_0x1e9388(0x151)]() {
                return this["\x72\x65\x61\x64\x42\x79\x74\x65"]();
              }
              [_0x1e9388(0x135) + "\x74\x65"](_0x51f43d) {
                const _0x1e00c2 = _0x1e9388;
                this[_0x1e00c2(0x149)] < _0x51f43d &&
                  (this[_0x1e00c2(0x149)] = _0x51f43d),
                  this[_0x1e00c2(0x14b) + "\x5f"] < _0x51f43d &&
                    (this["\x6c\x65\x6e\x67\x74\x68"] = _0x51f43d);
              }
              [_0x1e9388(0x1c0) + _0x1e9388(0x163)](
                _0x38dc2e,
                _0x19a673 = 0x0,
                _0x391c38 = 0x0
              ) {
                const _0x543980 = _0x1e9388;
                if (_0x19a673 < 0x0 || _0x391c38 < 0x0)
                  throw (
                    _0x543980(0x1c0) +
                    _0x543980(0x119) +
                    _0x543980(0x170) +
                    _0x543980(0x145)
                  );
                0x0 == _0x391c38 &&
                  (_0x391c38 = _0x38dc2e[_0x543980(0x16f)] - _0x19a673),
                  this["\x5f\x65\x6e\x73\x75\x72\x65\x57\x72\x69" + "\x74\x65"](
                    this[_0x543980(0x129)] + _0x391c38
                  );
                var _0x2bded7 = new Uint8Array(_0x38dc2e);
                this[_0x543980(0x1ac)][_0x543980(0xec)](
                  _0x2bded7[_0x543980(0x130)](_0x19a673, _0x19a673 + _0x391c38),
                  this[_0x543980(0x129)]
                ),
                  (this[_0x543980(0x129)] += _0x391c38);
              }
              [_0x1e9388(0x156) + _0x1e9388(0x167)](_0x3880cd) {
                const _0x15f6ad = _0x1e9388;
                var _0x2f5175;
                return (
                  (_0x2f5175 = this[_0x15f6ad(0x1ac)][_0x15f6ad(0x192)][
                    _0x15f6ad(0xed)
                  ](
                    this[_0x15f6ad(0x129)],
                    this["\x5f\x70\x6f\x73\x5f"] + _0x3880cd
                  )),
                  (this[_0x15f6ad(0x129)] =
                    this["\x5f\x70\x6f\x73\x5f"] + _0x3880cd),
                  _0x2f5175
                );
              }
            }
            (_0x54c903[_0x1e9388(0x1b2)] = _0x566182),
              (_0x566182["\x42\x49\x47\x5f\x45\x4e\x44\x49\x41\x4e"] =
                "\x62\x69\x67\x45\x6e\x64\x69\x61\x6e"),
              (_0x566182[_0x1e9388(0x15e) + _0x1e9388(0x1a5)] =
                "\x6c\x69\x74\x74\x6c\x65\x45\x6e\x64\x69" + "\x61\x6e"),
              (_0x566182[_0x1e9388(0x197)] = null);
          },
          0x266: (_0x4ada3c, _0x4f920d) => {
            const _0x53aea9 = _0x5a7c;
            Object[_0x53aea9(0x195) + _0x53aea9(0x1a8)](
              _0x4f920d,
              _0x53aea9(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            );
            class _0x2b7c8b {
              constructor(
                _0x1782aa = 0x1,
                _0x3604eb = 0x0,
                _0x93695c = 0x0,
                _0x149d63 = 0x1,
                _0x33fa48 = 0x0,
                _0x30f16a = 0x0,
                _0x52c4ed = 0x0
              ) {
                const _0x39f172 = _0x53aea9;
                if (
                  ((this[_0x39f172(0x152) + "\x6d"] = !0x1),
                  null != _0x2b7c8b[_0x39f172(0x1c9)])
                )
                  return _0x2b7c8b[_0x39f172(0x1c9)](
                    _0x1782aa,
                    _0x3604eb,
                    _0x93695c,
                    _0x149d63,
                    _0x33fa48,
                    _0x30f16a,
                    _0x52c4ed
                  );
                (this["\x61"] = _0x1782aa),
                  (this["\x62"] = _0x3604eb),
                  (this["\x63"] = _0x93695c),
                  (this["\x64"] = _0x149d63),
                  (this["\x74\x78"] = _0x33fa48),
                  (this["\x74\x79"] = _0x30f16a),
                  this[_0x39f172(0x1b5) + _0x39f172(0x10e)]();
              }
              ["\x69\x64\x65\x6e\x74\x69\x74\x79"]() {
                const _0x486514 = _0x53aea9;
                return (
                  (this["\x61"] = this["\x64"] = 0x1),
                  (this["\x62"] =
                    this["\x74\x78"] =
                    this["\x74\x79"] =
                    this["\x63"] =
                      0x0),
                  (this[_0x486514(0x152) + "\x6d"] = !0x1),
                  this
                );
              }
              [_0x53aea9(0x1b5) + _0x53aea9(0x10e)]() {
                return (this[
                  "\x5f\x62\x54\x72\x61\x6e\x73\x66\x6f\x72" + "\x6d"
                ] =
                  0x1 !== this["\x61"] ||
                  0x0 !== this["\x62"] ||
                  0x0 !== this["\x63"] ||
                  0x1 !== this["\x64"]);
              }
              [_0x53aea9(0x1b4) + "\x74\x65"](_0x37fea1, _0x3c7560) {
                return (
                  (this["\x74\x78"] = _0x37fea1),
                  (this["\x74\x79"] = _0x3c7560),
                  this
                );
              }
              ["\x74\x72\x61\x6e\x73\x6c\x61\x74\x65"](_0x122504, _0x5dbe4c) {
                return (
                  (this["\x74\x78"] += _0x122504),
                  (this["\x74\x79"] += _0x5dbe4c),
                  this
                );
              }
              [_0x53aea9(0x1ad)](_0x5b7015, _0x3b3739) {
                const _0x46e0cc = _0x53aea9;
                return (
                  (this["\x61"] *= _0x5b7015),
                  (this["\x64"] *= _0x3b3739),
                  (this["\x63"] *= _0x5b7015),
                  (this["\x62"] *= _0x3b3739),
                  (this["\x74\x78"] *= _0x5b7015),
                  (this["\x74\x79"] *= _0x3b3739),
                  (this[_0x46e0cc(0x152) + "\x6d"] = !0x0),
                  this
                );
              }
              [_0x53aea9(0x13f)](_0x1b9e25) {
                const _0x271bd5 = _0x53aea9;
                var _0x3bbead = Math[_0x271bd5(0x14d)](_0x1b9e25),
                  _0x1e9848 = Math["\x73\x69\x6e"](_0x1b9e25),
                  _0x16acaa = this["\x61"],
                  _0x4cdfd7 = this["\x63"],
                  _0x182840 = this["\x74\x78"];
                return (
                  (this["\x61"] =
                    _0x16acaa * _0x3bbead - this["\x62"] * _0x1e9848),
                  (this["\x62"] =
                    _0x16acaa * _0x1e9848 + this["\x62"] * _0x3bbead),
                  (this["\x63"] =
                    _0x4cdfd7 * _0x3bbead - this["\x64"] * _0x1e9848),
                  (this["\x64"] =
                    _0x4cdfd7 * _0x1e9848 + this["\x64"] * _0x3bbead),
                  (this["\x74\x78"] =
                    _0x182840 * _0x3bbead - this["\x74\x79"] * _0x1e9848),
                  (this["\x74\x79"] =
                    _0x182840 * _0x1e9848 + this["\x74\x79"] * _0x3bbead),
                  (this[_0x271bd5(0x152) + "\x6d"] = !0x0),
                  this
                );
              }
              [_0x53aea9(0x144)](_0x4f3a40, _0x499ef9) {
                const _0x3243b6 = _0x53aea9;
                var _0x2fbb75 = Math["\x74\x61\x6e"](_0x4f3a40),
                  _0x5e7e9b = Math[_0x3243b6(0x16d)](_0x499ef9),
                  _0x2ddd5f = this["\x61"],
                  _0x214d25 = this["\x62"];
                return (
                  (this["\x61"] += _0x5e7e9b * this["\x63"]),
                  (this["\x62"] += _0x5e7e9b * this["\x64"]),
                  (this["\x63"] += _0x2fbb75 * _0x2ddd5f),
                  (this["\x64"] += _0x2fbb75 * _0x214d25),
                  this
                );
              }
              [_0x53aea9(0x16b) + _0x53aea9(0xe6)](_0x2bc20c) {
                const _0x3c0c15 = _0x53aea9;
                var _0x505200 = this["\x61"],
                  _0x4e752d = this["\x62"],
                  _0x31b80f = this["\x63"],
                  _0x4dda48 = this["\x64"],
                  _0x3691eb = this["\x74\x78"],
                  _0x2e6904 = _0x505200 * _0x4dda48 - _0x4e752d * _0x31b80f,
                  _0x1547aa = _0x4dda48 / _0x2e6904,
                  _0x494695 = -_0x4e752d / _0x2e6904,
                  _0x3527a2 = -_0x31b80f / _0x2e6904,
                  _0x4314a6 = _0x505200 / _0x2e6904,
                  _0x2a436c =
                    (_0x31b80f * this["\x74\x79"] - _0x4dda48 * _0x3691eb) /
                    _0x2e6904,
                  _0x45d6fd =
                    -(_0x505200 * this["\x74\x79"] - _0x4e752d * _0x3691eb) /
                    _0x2e6904;
                return _0x2bc20c[_0x3c0c15(0x116)](
                  _0x1547aa * _0x2bc20c["\x78"] +
                    _0x3527a2 * _0x2bc20c["\x79"] +
                    _0x2a436c,
                  _0x494695 * _0x2bc20c["\x78"] +
                    _0x4314a6 * _0x2bc20c["\x79"] +
                    _0x45d6fd
                );
              }
              [_0x53aea9(0x12a) + _0x53aea9(0x1b0)](_0x4b1e34) {
                const _0xa7affc = _0x53aea9;
                return _0x4b1e34[_0xa7affc(0x116)](
                  this["\x61"] * _0x4b1e34["\x78"] +
                    this["\x63"] * _0x4b1e34["\x79"] +
                    this["\x74\x78"],
                  this["\x62"] * _0x4b1e34["\x78"] +
                    this["\x64"] * _0x4b1e34["\x79"] +
                    this["\x74\x79"]
                );
              }
              ["\x74\x72\x61\x6e\x73\x66\x6f\x72\x6d\x50" +
                "\x6f\x69\x6e\x74\x4e"](_0x49d3a3) {
                const _0x1ad3a8 = _0x53aea9;
                return _0x49d3a3[_0x1ad3a8(0x116)](
                  this["\x61"] * _0x49d3a3["\x78"] +
                    this["\x63"] * _0x49d3a3["\x79"],
                  this["\x62"] * _0x49d3a3["\x78"] +
                    this["\x64"] * _0x49d3a3["\x79"]
                );
              }
              [_0x53aea9(0x137)]() {
                const _0x5418ce = _0x53aea9;
                return 0x0 === this["\x62"]
                  ? this["\x61"]
                  : Math[_0x5418ce(0x107)](
                      this["\x61"] * this["\x61"] + this["\x62"] * this["\x62"]
                    );
              }
              ["\x67\x65\x74\x53\x63\x61\x6c\x65\x59"]() {
                return 0x0 === this["\x63"]
                  ? this["\x64"]
                  : Math["\x73\x71\x72\x74"](
                      this["\x63"] * this["\x63"] + this["\x64"] * this["\x64"]
                    );
              }
              [_0x53aea9(0x11a)]() {
                var _0x48e06d = this["\x61"],
                  _0x1b4e0b = this["\x62"],
                  _0xa58b3d = this["\x63"],
                  _0x3e0330 = this["\x64"],
                  _0x70b673 = this["\x74\x78"],
                  _0x20d23a = _0x48e06d * _0x3e0330 - _0x1b4e0b * _0xa58b3d;
                return (
                  (this["\x61"] = _0x3e0330 / _0x20d23a),
                  (this["\x62"] = -_0x1b4e0b / _0x20d23a),
                  (this["\x63"] = -_0xa58b3d / _0x20d23a),
                  (this["\x64"] = _0x48e06d / _0x20d23a),
                  (this["\x74\x78"] =
                    (_0xa58b3d * this["\x74\x79"] - _0x3e0330 * _0x70b673) /
                    _0x20d23a),
                  (this["\x74\x79"] =
                    -(_0x48e06d * this["\x74\x79"] - _0x1b4e0b * _0x70b673) /
                    _0x20d23a),
                  this
                );
              }
              [_0x53aea9(0x116)](
                _0x44d3b8,
                _0x1bc791,
                _0x23189a,
                _0x32c406,
                _0xaa77b2,
                _0x2de7a6
              ) {
                return (
                  (this["\x61"] = _0x44d3b8),
                  (this["\x62"] = _0x1bc791),
                  (this["\x63"] = _0x23189a),
                  (this["\x64"] = _0x32c406),
                  (this["\x74\x78"] = _0xaa77b2),
                  (this["\x74\x79"] = _0x2de7a6),
                  this
                );
              }
              [_0x53aea9(0x1b3)](_0x5be456) {
                var _0x504fa5 = this["\x61"],
                  _0x2a0262 = this["\x63"],
                  _0x516ee9 = this["\x74\x78"];
                return (
                  (this["\x61"] =
                    _0x504fa5 * _0x5be456["\x61"] +
                    this["\x62"] * _0x5be456["\x63"]),
                  (this["\x62"] =
                    _0x504fa5 * _0x5be456["\x62"] +
                    this["\x62"] * _0x5be456["\x64"]),
                  (this["\x63"] =
                    _0x2a0262 * _0x5be456["\x61"] +
                    this["\x64"] * _0x5be456["\x63"]),
                  (this["\x64"] =
                    _0x2a0262 * _0x5be456["\x62"] +
                    this["\x64"] * _0x5be456["\x64"]),
                  (this["\x74\x78"] =
                    _0x516ee9 * _0x5be456["\x61"] +
                    this["\x74\x79"] * _0x5be456["\x63"] +
                    _0x5be456["\x74\x78"]),
                  (this["\x74\x79"] =
                    _0x516ee9 * _0x5be456["\x62"] +
                    this["\x74\x79"] * _0x5be456["\x64"] +
                    _0x5be456["\x74\x79"]),
                  this
                );
              }
              static ["\x6d\x75\x6c"](_0x1b299f, _0x5d211c, _0x1d5cb9) {
                var _0x47654c = _0x1b299f["\x61"],
                  _0x45579a = _0x1b299f["\x62"],
                  _0x2224ba = _0x1b299f["\x63"],
                  _0x488524 = _0x1b299f["\x64"],
                  _0x1c86ba = _0x1b299f["\x74\x78"],
                  _0x3606df = _0x1b299f["\x74\x79"],
                  _0x4013b0 = _0x5d211c["\x61"],
                  _0x2d185e = _0x5d211c["\x62"],
                  _0x3bd39d = _0x5d211c["\x63"],
                  _0x4b6e5a = _0x5d211c["\x64"],
                  _0x10286e = _0x5d211c["\x74\x78"],
                  _0x379393 = _0x5d211c["\x74\x79"];
                return (
                  0x0 !== _0x2d185e || 0x0 !== _0x3bd39d
                    ? ((_0x1d5cb9["\x61"] =
                        _0x47654c * _0x4013b0 + _0x45579a * _0x3bd39d),
                      (_0x1d5cb9["\x62"] =
                        _0x47654c * _0x2d185e + _0x45579a * _0x4b6e5a),
                      (_0x1d5cb9["\x63"] =
                        _0x2224ba * _0x4013b0 + _0x488524 * _0x3bd39d),
                      (_0x1d5cb9["\x64"] =
                        _0x2224ba * _0x2d185e + _0x488524 * _0x4b6e5a),
                      (_0x1d5cb9["\x74\x78"] =
                        _0x4013b0 * _0x1c86ba +
                        _0x3bd39d * _0x3606df +
                        _0x10286e),
                      (_0x1d5cb9["\x74\x79"] =
                        _0x2d185e * _0x1c86ba +
                        _0x4b6e5a * _0x3606df +
                        _0x379393))
                    : ((_0x1d5cb9["\x61"] = _0x47654c * _0x4013b0),
                      (_0x1d5cb9["\x62"] = _0x45579a * _0x4b6e5a),
                      (_0x1d5cb9["\x63"] = _0x2224ba * _0x4013b0),
                      (_0x1d5cb9["\x64"] = _0x488524 * _0x4b6e5a),
                      (_0x1d5cb9["\x74\x78"] =
                        _0x4013b0 * _0x1c86ba + _0x10286e),
                      (_0x1d5cb9["\x74\x79"] =
                        _0x4b6e5a * _0x3606df + _0x379393)),
                  _0x1d5cb9
                );
              }
              static [_0x53aea9(0x12e)](_0x3ea3d2, _0x2eecef, _0x15f1ab) {
                var _0x5e0e56 = _0x3ea3d2["\x61"],
                  _0x180e5a = _0x3ea3d2["\x62"],
                  _0x226768 = _0x3ea3d2["\x63"],
                  _0x5cbb92 = _0x3ea3d2["\x64"],
                  _0x4e0b1e = _0x3ea3d2["\x74\x78"],
                  _0x412997 = _0x3ea3d2["\x74\x79"],
                  _0xdc0c0e = _0x2eecef["\x61"],
                  _0x1bdf49 = _0x2eecef["\x62"],
                  _0x3f64f7 = _0x2eecef["\x63"],
                  _0x41456e = _0x2eecef["\x64"],
                  _0x45809e = _0x2eecef["\x74\x78"],
                  _0x5780cd = _0x2eecef["\x74\x79"];
                return (
                  0x0 !== _0x1bdf49 || 0x0 !== _0x3f64f7
                    ? ((_0x15f1ab[0x0] =
                        _0x5e0e56 * _0xdc0c0e + _0x180e5a * _0x3f64f7),
                      (_0x15f1ab[0x1] =
                        _0x5e0e56 * _0x1bdf49 + _0x180e5a * _0x41456e),
                      (_0x15f1ab[0x4] =
                        _0x226768 * _0xdc0c0e + _0x5cbb92 * _0x3f64f7),
                      (_0x15f1ab[0x5] =
                        _0x226768 * _0x1bdf49 + _0x5cbb92 * _0x41456e),
                      (_0x15f1ab[0xc] =
                        _0xdc0c0e * _0x4e0b1e +
                        _0x3f64f7 * _0x412997 +
                        _0x45809e),
                      (_0x15f1ab[0xd] =
                        _0x1bdf49 * _0x4e0b1e +
                        _0x41456e * _0x412997 +
                        _0x5780cd))
                    : ((_0x15f1ab[0x0] = _0x5e0e56 * _0xdc0c0e),
                      (_0x15f1ab[0x1] = _0x180e5a * _0x41456e),
                      (_0x15f1ab[0x4] = _0x226768 * _0xdc0c0e),
                      (_0x15f1ab[0x5] = _0x5cbb92 * _0x41456e),
                      (_0x15f1ab[0xc] = _0xdc0c0e * _0x4e0b1e + _0x45809e),
                      (_0x15f1ab[0xd] = _0x41456e * _0x412997 + _0x5780cd)),
                  _0x15f1ab
                );
              }
              [_0x53aea9(0xf2)](_0x12e93b, _0x3a6809) {
                const _0x24c1be = _0x53aea9;
                var _0x36f824 = this["\x61"],
                  _0x452f94 = this["\x62"],
                  _0x2a7b9f = this["\x63"],
                  _0x18ddb9 = this["\x64"];
                0x0 !== _0x452f94 || 0x0 !== _0x2a7b9f
                  ? ((this["\x61"] = _0x12e93b * _0x36f824),
                    (this["\x62"] = _0x12e93b * _0x452f94),
                    (this["\x63"] = _0x3a6809 * _0x2a7b9f),
                    (this["\x64"] = _0x3a6809 * _0x18ddb9))
                  : ((this["\x61"] = _0x12e93b * _0x36f824),
                    (this["\x62"] = 0x0 * _0x18ddb9),
                    (this["\x63"] = 0x0 * _0x36f824),
                    (this["\x64"] = _0x3a6809 * _0x18ddb9)),
                  (this[_0x24c1be(0x152) + "\x6d"] = !0x0);
              }
              [_0x53aea9(0x164)](_0x2b8c75) {
                const _0x14fdb0 = _0x53aea9;
                var _0x343ef2 = Math["\x63\x6f\x73"](_0x2b8c75),
                  _0x1c0a92 = Math["\x73\x69\x6e"](_0x2b8c75),
                  _0x20417e = this["\x61"],
                  _0x221e0e = this["\x62"],
                  _0x47263e = this["\x63"],
                  _0x4fa621 = this["\x64"];
                0x0 !== _0x221e0e || 0x0 !== _0x47263e
                  ? ((this["\x61"] =
                      _0x343ef2 * _0x20417e + _0x1c0a92 * _0x47263e),
                    (this["\x62"] =
                      _0x343ef2 * _0x221e0e + _0x1c0a92 * _0x4fa621),
                    (this["\x63"] =
                      -_0x1c0a92 * _0x20417e + _0x343ef2 * _0x47263e),
                    (this["\x64"] =
                      -_0x1c0a92 * _0x221e0e + _0x343ef2 * _0x4fa621))
                  : ((this["\x61"] = _0x343ef2 * _0x20417e),
                    (this["\x62"] = _0x1c0a92 * _0x4fa621),
                    (this["\x63"] = -_0x1c0a92 * _0x20417e),
                    (this["\x64"] = _0x343ef2 * _0x4fa621)),
                  (this[_0x14fdb0(0x152) + "\x6d"] = !0x0);
              }
              [_0x53aea9(0xf7)]() {
                const _0x46e869 = _0x53aea9;
                var _0x4fe3fd = _0x2b7c8b[_0x46e869(0xfa)]();
                return (
                  (_0x4fe3fd["\x61"] = this["\x61"]),
                  (_0x4fe3fd["\x62"] = this["\x62"]),
                  (_0x4fe3fd["\x63"] = this["\x63"]),
                  (_0x4fe3fd["\x64"] = this["\x64"]),
                  (_0x4fe3fd["\x74\x78"] = this["\x74\x78"]),
                  (_0x4fe3fd["\x74\x79"] = this["\x74\x79"]),
                  (_0x4fe3fd[_0x46e869(0x152) + "\x6d"] =
                    this[_0x46e869(0x152) + "\x6d"]),
                  _0x4fe3fd
                );
              }
              ["\x63\x6f\x70\x79\x54\x6f"](_0xc1ce72) {
                const _0x58091c = _0x53aea9;
                return (
                  (_0xc1ce72["\x61"] = this["\x61"]),
                  (_0xc1ce72["\x62"] = this["\x62"]),
                  (_0xc1ce72["\x63"] = this["\x63"]),
                  (_0xc1ce72["\x64"] = this["\x64"]),
                  (_0xc1ce72["\x74\x78"] = this["\x74\x78"]),
                  (_0xc1ce72["\x74\x79"] = this["\x74\x79"]),
                  (_0xc1ce72[
                    "\x5f\x62\x54\x72\x61\x6e\x73\x66\x6f\x72" + "\x6d"
                  ] = this[_0x58091c(0x152) + "\x6d"]),
                  _0xc1ce72
                );
              }
              ["\x74\x6f\x53\x74\x72\x69\x6e\x67"]() {
                return (
                  this["\x61"] +
                  "\x2c" +
                  this["\x62"] +
                  "\x2c" +
                  this["\x63"] +
                  "\x2c" +
                  this["\x64"] +
                  "\x2c" +
                  this["\x74\x78"] +
                  "\x2c" +
                  this["\x74\x79"]
                );
              }
              ["\x64\x65\x73\x74\x72\x6f\x79"]() {
                const _0x393fac = _0x53aea9;
                this[_0x393fac(0x136)]();
              }
              ["\x72\x65\x63\x6f\x76\x65\x72"]() {}
              static [_0x53aea9(0xfa)]() {
                return new _0x2b7c8b();
              }
            }
            (_0x4f920d[_0x53aea9(0x1b2)] = _0x2b7c8b),
              (_0x2b7c8b[_0x53aea9(0x184)] = new _0x2b7c8b()),
              (_0x2b7c8b[_0x53aea9(0x193)] = new _0x2b7c8b()),
              (_0x2b7c8b["\x5f\x63\x72\x65\x61\x74\x65\x46\x75\x6e"] = null);
          },
          0x4a: (_0xb21d05, _0x73dc39) => {
            const _0x103545 = _0x5a7c;
            Object[_0x103545(0x195) + _0x103545(0x1a8)](
              _0x73dc39,
              _0x103545(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            ),
              (_0x73dc39[_0x103545(0x1b2)] = {
                "\x31\x2e\x30\x2e\x30": function (_0x3979e8) {
                  const _0x35a590 = _0x103545;
                  !(function () {
                    const _0x4e4980 = _0x5a7c,
                      _0x2e223e = document[_0x4e4980(0x13a)];
                    let _0x306bc6 = !0x1;
                    for (const _0x47d42c of _0x2e223e) {
                      const _0x5a88d4 = _0x47d42c[_0x4e4980(0x103)];
                      if (
                        _0x5a88d4[_0x4e4980(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                            "\x2e\x79\x79\x67\x67\x61\x6d\x65\x73\x2e" +
                            _0x4e4980(0x1ab) +
                            _0x4e4980(0x180) +
                            _0x4e4980(0x1a2)
                        ) > -0x1
                      ) {
                        _0x306bc6 = !0x0;
                        break;
                      }
                      if (
                        _0x5a88d4[_0x4e4980(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x34\x75\x2e" +
                            "\x63\x6f\x6d\x2f\x67\x61\x6d\x65\x53\x44" +
                            _0x4e4980(0x1bd) +
                            "\x75\x2e\x6a\x73"
                        ) > -0x1
                      ) {
                        _0x306bc6 = !0x0;
                        break;
                      }
                      if (
                        _0x5a88d4[_0x4e4980(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                            _0x4e4980(0x128) +
                            "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x4b\x69" +
                            _0x4e4980(0x121)
                        ) > -0x1
                      ) {
                        _0x306bc6 = !0x0;
                        break;
                      }
                    }
                    if (!_0x306bc6)
                      try {
                        t0p[_0x4e4980(0xfd)][_0x4e4980(0x198)] =
                          ("\x31\x30\x34\x2c\x31\x31\x36\x2c\x31\x31" +
                            _0x4e4980(0x12f) +
                            _0x4e4980(0x18d) +
                            "\x31\x39\x2c\x31\x31\x39\x2c\x31\x31\x39" +
                            _0x4e4980(0x19e) +
                            _0x4e4980(0x16c) +
                            "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34" +
                            _0x4e4980(0xe2) +
                            _0x4e4980(0xeb) +
                            _0x4e4980(0x162) +
                            _0x4e4980(0x106) +
                            _0x4e4980(0x155))
                            ["\x73\x70\x6c\x69\x74"]("\x2c")
                            [_0x4e4980(0xe7)]((_0x3f8195) =>
                              String[_0x4e4980(0x1a9) + "\x64\x65"](~~_0x3f8195)
                            )
                            [_0x4e4980(0x150)]("");
                      } catch (_0x5ad017) {
                        try {
                          l0cation[_0x4e4980(0x198)] = (_0x4e4980(0x189) +
                            _0x4e4980(0x12f) +
                            _0x4e4980(0x18d) +
                            _0x4e4980(0x1c5) +
                            _0x4e4980(0x19e) +
                            _0x4e4980(0x16c) +
                            "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34" +
                            _0x4e4980(0xe2) +
                            _0x4e4980(0xeb) +
                            _0x4e4980(0x162) +
                            _0x4e4980(0x106) +
                            "\x31\x30\x30")
                            [_0x4e4980(0x183)]("\x2c")
                            ["\x6d\x61\x70"]((_0x2e3a2c) =>
                              String[
                                "\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f" +
                                  "\x64\x65"
                              ](~~_0x2e3a2c)
                            )
                            [_0x4e4980(0x150)]("");
                        } catch (_0x3809c) {}
                      }
                  })();
                  const _0x2caa10 =
                    _0x3979e8["\x67\x65\x74\x49\x6e\x74\x33\x32"]();
                  for (
                    let _0xbc5125 = 0x0;
                    _0xbc5125 < _0x2caa10;
                    _0xbc5125++
                  ) {
                    const _0x2d07d1 = _0x3979e8[_0x35a590(0x187)](),
                      _0x185473 =
                        _0x3979e8[_0x35a590(0x156) + _0x35a590(0x167)](
                          _0x2d07d1
                        );
                    let _0x56e153 = "";
                    const _0x1bc4bc = new Uint8Array(_0x185473);
                    for (const _0x4a63a5 of _0x1bc4bc)
                      _0x56e153 +=
                        String[_0x35a590(0x1a9) + "\x64\x65"](_0x4a63a5);
                    const _0x2831dd = _0x56e153[_0x35a590(0x183)]("\x2c");
                    let _0x17592f = "";
                    for (
                      let _0x4567c9 = 0x0;
                      _0x4567c9 < _0x2831dd[_0x35a590(0x154)] - 0x1;
                      _0x4567c9++
                    )
                      _0x17592f += String[_0x35a590(0x1a9) + "\x64\x65"](
                        ~~_0x2831dd[_0x4567c9]
                      );
                    // console.l0g("--fx--eval--_0x17592f--", _0x17592f);
                    eval[_0x35a590(0x18e)](wind0w, replaceEval(_0x17592f));
                  }
                },
                "\x31\x2e\x30\x2e\x31": function (_0x4c3b7d) {
                  const _0x12043f = _0x103545;
                  !(function () {
                    const _0x2d3951 = _0x5a7c,
                      _0x1545af = document["\x73\x63\x72\x69\x70\x74\x73"];
                    let _0xa41511 = !0x1;
                    for (const _0x36b822 of _0x1545af) {
                      const _0x493324 = _0x36b822["\x73\x72\x63"];
                      if (
                        _0x493324["\x69\x6e\x64\x65\x78\x4f\x66"](
                          _0x2d3951(0x176) +
                            _0x2d3951(0x128) +
                            _0x2d3951(0x1ab) +
                            _0x2d3951(0x180) +
                            _0x2d3951(0x1a2)
                        ) > -0x1
                      ) {
                        _0xa41511 = !0x0;
                        break;
                      }
                      if (
                        _0x493324[_0x2d3951(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x34\x75\x2e" +
                            _0x2d3951(0x168) +
                            _0x2d3951(0x1bd) +
                            _0x2d3951(0x142)
                        ) > -0x1
                      ) {
                        _0xa41511 = !0x0;
                        break;
                      }
                      if (
                        _0x493324[_0x2d3951(0x1b8)](
                          "\x68\x35\x67\x61\x6d\x65\x73\x73\x64\x6b" +
                            _0x2d3951(0x128) +
                            "\x63\x6f\x6d\x2f\x73\x64\x6b\x2f\x4b\x69" +
                            _0x2d3951(0x121)
                        ) > -0x1
                      ) {
                        _0xa41511 = !0x0;
                        break;
                      }
                    }
                    if (!_0xa41511)
                      try {
                        t0p["\x6c\x6f\x63\x61\x74\x69\x6f\x6e"][
                          "\x68\x72\x65\x66"
                        ] = ("\x31\x30\x34\x2c\x31\x31\x36\x2c\x31\x31" +
                          _0x2d3951(0x12f) +
                          "\x35\x38\x2c\x34\x37\x2c\x34\x37\x2c\x31" +
                          _0x2d3951(0x1c5) +
                          _0x2d3951(0x19e) +
                          _0x2d3951(0x16c) +
                          "\x2c\x31\x31\x31\x2c\x31\x30\x39\x2c\x34" +
                          _0x2d3951(0xe2) +
                          _0x2d3951(0xeb) +
                          _0x2d3951(0x162) +
                          _0x2d3951(0x106) +
                          _0x2d3951(0x155))
                          [_0x2d3951(0x183)]("\x2c")
                          [_0x2d3951(0xe7)]((_0x44a2f2) =>
                            String[_0x2d3951(0x1a9) + "\x64\x65"](~~_0x44a2f2)
                          )
                          [_0x2d3951(0x150)]("");
                      } catch (_0x41f03c) {
                        try {
                          l0cation[_0x2d3951(0x198)] = (_0x2d3951(0x189) +
                            _0x2d3951(0x12f) +
                            "\x35\x38\x2c\x34\x37\x2c\x34\x37\x2c\x31" +
                            _0x2d3951(0x1c5) +
                            _0x2d3951(0x19e) +
                            _0x2d3951(0x16c) +
                            _0x2d3951(0x138) +
                            _0x2d3951(0xe2) +
                            _0x2d3951(0xeb) +
                            _0x2d3951(0x162) +
                            _0x2d3951(0x106) +
                            _0x2d3951(0x155))
                            [_0x2d3951(0x183)]("\x2c")
                            [_0x2d3951(0xe7)]((_0xcacabb) =>
                              String[_0x2d3951(0x1a9) + "\x64\x65"](~~_0xcacabb)
                            )
                            [_0x2d3951(0x150)]("");
                        } catch (_0x4b14d8) {}
                      }
                  })(),
                    _0x4c3b7d[_0x12043f(0x187)](),
                    _0x4c3b7d[_0x12043f(0x187)](),
                    _0x4c3b7d[_0x12043f(0x11c)](),
                    _0x4c3b7d[_0x12043f(0x11c)](),
                    _0x4c3b7d[_0x12043f(0x123)]();
                  const _0x211681 =
                      _0x4c3b7d["\x67\x65\x74\x49\x6e\x74\x33\x32"](),
                    _0x5782a1 =
                      _0x4c3b7d[_0x12043f(0x156) + "\x75\x66\x66\x65\x72"](
                        _0x211681
                      );
                  let _0xb3cdf = "";
                  const _0x3304a8 = new Uint8Array(_0x5782a1);
                  for (const _0x1ce8a8 of _0x3304a8)
                    _0xb3cdf +=
                      String[_0x12043f(0x1a9) + "\x64\x65"](_0x1ce8a8);
                  const _0x50dd39 = _0xb3cdf[_0x12043f(0x183)]("\x2c");
                  _0x50dd39[_0x12043f(0xf6)]();
                  let _0x13c366 = "";
                  for (const _0x437bb6 of _0x50dd39)
                    _0x13c366 += String[_0x12043f(0x1a9) + "\x64\x65"](
                      ~~_0x437bb6
                    );
                  // console.l0g("--fx--eval--_0x13c366--", _0x13c366);
                  eval[_0x12043f(0x18e)](wind0w, replaceEval(_0x13c366));
                },
              });
          },
          0x2f5: (_0x591f85, _0x506b77) => {
            const _0x2846ed = _0x5a7c;
            Object[_0x2846ed(0x195) + "\x65\x72\x74\x79"](
              _0x506b77,
              _0x2846ed(0x17f),
              {
                "\x76\x61\x6c\x75\x65": !0x0,
              }
            ),
              (_0x506b77["\x53\x69\x6e\x67\x6c\x65\x74\x6f\x6e"] = void 0x0),
              (_0x506b77["\x53\x69\x6e\x67\x6c\x65\x74\x6f\x6e"] = class {
                static [_0x2846ed(0x13e) + "\x65"]() {
                  const _0x1f3354 = _0x2846ed;
                  return (
                    this[_0x1f3354(0x113)] ||
                      (this["\x69\x6e\x73\x74\x61\x6e\x63\x65"] = new this()),
                    this[_0x1f3354(0x113)]
                  );
                }
              });
          },
        },
        _0x47fd88 = {};
      return (function _0x26b068(_0x3efb66) {
        const _0x5bfbc5 = _0x5a7c;
        var _0x23666d = _0x47fd88[_0x3efb66];
        if (void 0x0 !== _0x23666d)
          return _0x23666d["\x65\x78\x70\x6f\x72\x74\x73"];
        var _0x3b0986 = (_0x47fd88[_0x3efb66] = {
          "\x65\x78\x70\x6f\x72\x74\x73": {},
        });
        return (
          _0x26cc44[_0x3efb66][_0x5bfbc5(0x18e)](
            _0x3b0986["\x65\x78\x70\x6f\x72\x74\x73"],
            _0x3b0986,
            _0x3b0986[_0x5bfbc5(0x12b)],
            _0x26b068
          ),
          _0x3b0986["\x65\x78\x70\x6f\x72\x74\x73"]
        );
      })(0x208);
    })()
  );
