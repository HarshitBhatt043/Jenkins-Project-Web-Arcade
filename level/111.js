oS.Init(
  {
    PName: [
      oPeashooter,
      oSunFlower,
      oCherryBomb,
      oWallNut,
      oPotatoMine,
      oSnowPea,
      oChomper,
      oRepeater,
      oPuffShroom,
      oSunShroom,
      oFumeShroom,
      oGraveBuster,
      oHypnoShroom,
      oScaredyShroom,
      oIceShroom,
      oDoomShroom,
      oLilyPad,
      oSquash,
      oThreepeater,
      oTangleKlep,
      oJalapeno,
      oSpikeweed,
      oTorchwood,
      oTallNut,
      oCactus,
      oPlantern,
      oSplitPea,
      oStarfruit,
      oPumpkinHead,
      oFlowerPot,
      oCoffeeBean,
      oGarlic,
      oSeaShroom,
      oOxygen,
      ostar,
      oTTS,
      oSeaAnemone,
      oGatlingPea,
      oGloomShroom,
      oTwinSunflower,
      oSpikerock,
      oTenManNut,
      oSnowRepeater,
      oLing,
      oLotusRoot,
      oMagneticmuShroom,
      oLaserBean,
      oBigChomper,
      oFlamesMushroom,
    ],
    ZName: [oCZombie, oCZombie2, oCZombie3, oCZomboni, oCConeheadZombie],
    PicArr: ["images/interface/backgroundX4.jpg"],
    LF: [0, 3, 0, 3, 0, 3, 0],
    ZF: [0, 3, 0, 3, 0, 3, 0],
    backgroundImage: "images/interface/backgroundX4.jpg",
    CanSelectCard: 1,
    LevelName: "Corpse siege",
    LvlEName: 1,
    SunNum: 850,
    DKind: 0,
    LargeWaveFlag: { 20: $("imgFlag2"), 30: $("imgFlag1") },
    InitLawnMower: function () {
      CustomSpecial(oCleaner, 1, -1);
      CustomSpecial(oCleaner, 3, -1);
      CustomSpecial(oCleaner, 5, -1);
    },
    StartGameMusic: "The Great Wall1",
  },
  {
    AZ: [
      [oCZombie, 1, 1],
      [oCZombie2, 3, 3],
      [oCZombie3, 1, 5],
      [oCConeheadZombie, 1, 6],
      [oCZomboni, 1, 16, [16, 20]],
    ],
    FlagNum: 30,
    FlagToSumNum: {
      a1: [3, 3, 7, 10, 13, 15, 19, 20, 23, 25, 29],
      a2: [1, 3, 3, 8, 4, 5, 13, 15, 18, 1, 24, 25, 48],
    },
    FlagToMonitor: { 19: [ShowLargeWave, 0], 29: [ShowFinalWave, 0] },
    FlagToEnd: function () {
      NewImg(
        "imgSF",
        "images/interface/trophy.png",
        "left:260px;top:233px",
        EDAll,
        {
          onclick: function () {
            SelectModal(112);
          },
        }
      );
      NewImg(
        "PointerUD",
        "images/interface/PointerDown.gif",
        "top:185px;left:676px",
        EDAll
      );
    },
  }
);
