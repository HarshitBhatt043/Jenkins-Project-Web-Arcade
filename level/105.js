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
    ZName: [
      oCZombie,
      oCZombie2,
      oCZombie3,
      oCConeheadZombie,
      oCBucketheadZombie,
      oDuckyTubeZombie1,
      oCJackinTheBoxZombie,
      oCSnorkelZombie,
      oCDolphinRiderZombie,
      oScreenDoorZombie,
      oDuckyTubeZombie2,
      oDuckyTubeZombie3,
    ],
    PicArr: ["images/interface/backgroundX1.jpg"],
    LF: [0, 2, 3, 3, 2, 2, 0],
    backgroundImage: "images/interface/backgroundX1.jpg",
    CanSelectCard: 1,
    LevelName: "Water sports",
    LvlEName: 9,
    SunNum: 525,
    coord: 2,
    InitLawnMower: function () {
      CustomSpecial(oPoolCleaner, 1, -1);
      CustomSpecial(oCleaner, 2, -1);
      CustomSpecial(oCleaner, 3, -1);
      CustomSpecial(oPoolCleaner, 4, -1);
      CustomSpecial(oPoolCleaner, 5, -1);
    },
    LargeWaveFlag: { 10: $("imgFlag3"), 20: $("imgFlag2"), 30: $("imgFlag1") },
    StartGameMusic: "The Great Wall",
  },
  {
    AZ: [
      [oCZombie, 1, 1],
      [oCZombie2, 1, 2],
      [oCZombie3, 2, 3],
      [oCConeheadZombie, 1, 3],
      [oCJackinTheBoxZombie, 1, 9],
      [oCBucketheadZombie, 1, 10],
      [oDuckyTubeZombie1, 2, 5],
      [oCSnorkelZombie, 1, 10],
      [oCDolphinRiderZombie, 1, 13],
      [oScreenDoorZombie, 1, 9],
      [oDuckyTubeZombie2, 1, 7],
      [oDuckyTubeZombie3, 1, 10],
    ],
    FlagNum: 30,
    FlagToSumNum: {
      a1: [3, 5, 7, 10, 13, 15, 19, 20, 23, 25, 29],
      a2: [1, 2, 3, 8, 4, 5, 6, 15, 7, 8, 9, 25],
    },
    FlagToMonitor: {
      9: [ShowLargeWave, 0],
      19: [ShowLargeWave, 0],
      29: [ShowFinalWave, 0],
    },
    FlagToEnd: function () {
      NewImg(
        "imgSF",
        "images/interface/trophy.png",
        "left:260px;top:233px",
        EDAll,
        {
          onclick: function () {
            SelectModal(106);
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
