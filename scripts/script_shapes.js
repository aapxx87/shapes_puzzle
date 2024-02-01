const shapes = {

  castle: {

    square: {
      top: 203,
      left: 151,
      rotation_angle: 0,
    },

    triangle_1_big: {
      top: 400,
      left: 180,
      rotation_angle: 135,
    },

    triangle_2_big: {
      top: 302,
      left: 81,
      rotation_angle: -135,
    },

    triangle_1_medium: {
      top: 273,
      left: 150,
      rotation_angle: -180,
    },

    triangle_1_small: {
      top: 168,
      left: 150,
      rotation_angle: 135,
    },

    triangle_2_small: {
      top: 332,
      left: 278,
      rotation_angle: -180,
    },

    parallelepiped: {
      top: 376,
      left: 267,
      rotation_angle: -135,
      skew: 45,
    },

  },

  camel: {

    square: {
      top: 236,
      left: 227,
      rotation_angle: 45,
    },

    triangle_1_big: {
      top: 320,
      left: 121,
      rotation_angle: 90,
    },

    triangle_2_big: {
      top: 300,
      left: 239,
      rotation_angle: 45,
    },

    triangle_1_medium: {
      top: 270,
      left: 142,
      rotation_angle: 135,
    },

    triangle_1_small: {
      top: 138,
      left: 325,
      rotation_angle: -45,
    },

    triangle_2_small: {
      top: 186,
      left: 276,
      rotation_angle: -135,
    },

    parallelepiped: {
      top: 268,
      left: 286,
      rotation_angle: -90,
      skew: 45,
    },

  },

  rabbit: {

    square: {
      top: 182,
      left: 281,
      rotation_angle: 0,
    },

    triangle_1_big: {
      top: 280,
      left: 211,
      rotation_angle: 45,
    },

    triangle_2_big: {
      top: 349,
      left: 183,
      rotation_angle: 0,
    },

    triangle_1_medium: {
      top: 62,
      left: 232,
      rotation_angle: 45,
    },

    triangle_1_small: {
      top: 337,
      left: 294,
      rotation_angle: 45,
    },

    triangle_2_small: {
      top: 287,
      left: 246,
      rotation_angle: 225,
    },

    parallelepiped: {
      top: 84,
      left: 276,
      rotation_angle: 90,
      skew: 45,
    },

  },

  bear: {
    "square": {
      "top": 222,
      "left": 107,
      "rotation_angle": 0
    },
    "triangle_1_big": {
      "top": 250,
      "left": 245,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": 222,
      "left": 175,
      "rotation_angle": 180
    },
    "triangle_1_medium": {
      "top": 223,
      "left": 177,
      "rotation_angle": 0
    },
    "triangle_1_small": {
      "top": 371,
      "left": 292,
      "rotation_angle": -90
    },
    "triangle_2_small": {
      "top": 222,
      "left": 37,
      "rotation_angle": -90
    },
    "parallelepiped": {
      "top": 331,
      "left": 132,
      "rotation_angle": 135,
      "skew": 45
    }
  },

  ship: {
    "square": {
      "top": 385,
      "left": 273,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 400,
      "left": 141,
      "rotation_angle": 135
    },
    "triangle_2_big": {
      "top": 301,
      "left": 43,
      "rotation_angle": -45
    },
    "triangle_1_medium": {
      "top": 321,
      "left": 260,
      "rotation_angle": 135
    },
    "triangle_1_small": {
      "top": 336,
      "left": 322,
      "rotation_angle": -45
    },
    "triangle_2_small": {
      "top": 336,
      "left": 224,
      "rotation_angle": -45
    },
    "parallelepiped": {
      "top": 272,
      "left": 70,
      "rotation_angle": 90,
      "skew": 45
    }
  },

  pram: {
    "square": {
      "top": 379,
      "left": 116,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 225,
      "left": 150,
      "rotation_angle": 0
    },
    "triangle_2_big": {
      "top": 155,
      "left": 166,
      "rotation_angle": 135
    },
    "triangle_1_medium": {
      "top": 245,
      "left": 240,
      "rotation_angle": -45
    },
    "triangle_1_small": {
      "top": 377,
      "left": 258,
      "rotation_angle": 45
    },
    "triangle_2_small": {
      "top": 378,
      "left": 256,
      "rotation_angle": -135,
    },
    "parallelepiped": {
      "top": 273,
      "left": 70,
      "rotation_angle": 45,
      "skew": 45
    }
  },

  sailing: {
    "square": {
      "top": 335,
      "left": 86,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 251,
      "left": 149,
      "rotation_angle": 45
    },
    "triangle_2_big": {
      "top": 280,
      "left": 219,
      "rotation_angle": 0
    },
    "triangle_1_medium": {
      "top": 172,
      "left": 99,
      "rotation_angle": -135
    },
    "triangle_1_small": {
      "top": 384,
      "left": 135,
      "rotation_angle": 135
    },
    "triangle_2_small": {
      "top": 385,
      "left": 229,
      "rotation_angle": -45,
    },
    "parallelepiped": {
      "top": 419,
      "left": 146,
      "rotation_angle": 0,
      "skew": 45
    }
  },

  fox: {
    "square": {
      "top": 141,
      "left": 125,
      "rotation_angle": 45
    },
    "triangle_1_big": {
      "top": 254,
      "left": 88,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": 324,
      "left": 116,
      "rotation_angle": -90
    },
    "triangle_1_medium": {
      "top": 246,
      "left": 109,
      "rotation_angle": 45
    },
    "triangle_1_small": {
      "top": 93,
      "left": 174,
      "rotation_angle": 45
    },
    "triangle_2_small": {
      "top": 92,
      "left": 76,
      "rotation_angle": -135
    },
    "parallelepiped": {
      "top": 405,
      "left": 278,
      "rotation_angle": 135,
      "skew": 45,
    }
  },

  men_falling: {
    "square": {
      "top": 182,
      "left": 120,
      "rotation_angle": 15
    },
    "triangle_1_big": {
      "top": 280,
      "left": 140,
      "rotation_angle": -45
    },
    "triangle_2_big": {
      "top": 280,
      "left": 72,
      "rotation_angle": 135
    },
    "triangle_1_medium": {
      "top": 300,
      "left": 260,
      "rotation_angle": 135
    },
    "triangle_1_small": {
      "top": 129,
      "left": 256,
      "rotation_angle": -135
    },
    "triangle_2_small": {
      "top": 314,
      "left": 340,
      "rotation_angle": -45
    },
    "parallelepiped": {
      "top": 254,
      "left": 217,
      "rotation_angle": 90,
      "skew": 45
    }
  },

  men_2: {
    "square": {
      "top": 36,
      "left": 260,
      "rotation_angle": 32
    },
    "triangle_1_big": {
      "top": 130,
      "left": 202,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": 250,
      "left": 276,
      "rotation_angle": 45
    },
    "triangle_1_medium": {
      "top": 340,
      "left": 200,
      "rotation_angle": 135
    },
    "triangle_1_small": {
      "top": 390,
      "left": 116,
      "rotation_angle": 90
    },
    "triangle_2_small": {
      "top": 414,
      "left": 344,
      "rotation_angle": 0
    },
    "parallelepiped": {
      "top": 254,
      "left": 201,
      "rotation_angle": 90,
      "skew": 45
    }
  },

  cat_1:
    { "square": { "top": 111, "left": 65, "rotation_angle": 45 }, "triangle_1_big": { "top": 195, "left": 100, "rotation_angle": 0 }, "triangle_2_big": { "top": 334, "left": 100, "rotation_angle": 180 }, "triangle_1_medium": { "top": 423, "left": 119, "rotation_angle": 135 }, "triangle_1_small": { "top": 62, "left": 114, "rotation_angle": 45 }, "triangle_2_small": { "top": 62, "left": 16, "rotation_angle": -135 }, "parallelepiped": { "top": 424, "left": 266, "rotation_angle": 0, "skew": -45 } },

  men_3:
    { "square": { "top": 333, "left": 154, "rotation_angle": 0 }, "triangle_1_big": { "top": 128, "left": 152, "rotation_angle": 0 }, "triangle_2_big": { "top": 36, "left": 135, "rotation_angle": 108 }, "triangle_1_medium": { "top": 267, "left": 125, "rotation_angle": 90 }, "triangle_1_small": { "top": 405, "left": 165, "rotation_angle": 0 }, "triangle_2_small": { "top": 72, "left": 164, "rotation_angle": -72 }, "parallelepiped": { "top": 275, "left": 175, "rotation_angle": -45, "skew": 45 } },

  walking:
    { "square": { "top": 65, "left": 200, "rotation_angle": 45 }, "triangle_1_big": { "top": 140, "left": 105, "rotation_angle": -90 }, "triangle_2_big": { "top": 280, "left": 105, "rotation_angle": 180 }, "triangle_1_medium": { "top": 360, "left": 194, "rotation_angle": -135 }, "triangle_1_small": { "top": 439, "left": 146, "rotation_angle": 135 }, "triangle_2_small": { "top": 42, "left": 227, "rotation_angle": 180 }, "parallelepiped": { "top": 380, "left": 149, "rotation_angle": 45, "skew": 45 } },

  cat_2:
    { "square": { "top": 90, "left": 125, "rotation_angle": 45 }, "triangle_1_big": { "top": 315, "left": 160, "rotation_angle": 180 }, "triangle_2_big": { "top": 175, "left": 160, "rotation_angle": 0 }, "triangle_1_medium": { "top": 404, "left": 178, "rotation_angle": 135 }, "triangle_1_small": { "top": 41, "left": 76, "rotation_angle": -45 }, "triangle_2_small": { "top": 40, "left": 174, "rotation_angle": 45 }, "parallelepiped": { "top": 360, "left": 285, "rotation_angle": -45, "skew": -45 } },

  men_5: {
    "square": {
      "top": 98,
      "left": 248,
      "rotation_angle": 0
    },
    "triangle_1_big": {
      "top": 157,
      "left": 175,
      "rotation_angle": 45
    },
    "triangle_2_big": {
      "top": 245,
      "left": 160,
      "rotation_angle": 0
    },
    "triangle_1_medium": {
      "top": 46,
      "left": 237,
      "rotation_angle": 135
    },
    "triangle_1_small": {
      "top": 405,
      "left": 235,
      "rotation_angle": 45
    },
    "triangle_2_small": {
      "top": 405,
      "left": 150,
      "rotation_angle": 45
    },
    "parallelepiped": {
      "top": 229,
      "left": 225,
      "rotation_angle": -90,
      "skew": 90
    }
  },

  men_and_umbrella: {
    "square": {
      "top": 76,
      "left": 258,
      "rotation_angle": 0
    },
    "triangle_1_big": {
      "top": 81,
      "left": -21,
      "rotation_angle": -135
    },
    "triangle_2_big": {
      "top": -20,
      "left": 80,
      "rotation_angle": -45
    },
    "triangle_1_medium": {
      "top": 150,
      "left": 155,
      "rotation_angle": 180
    },
    "triangle_1_small": {
      "top": 397,
      "left": 133,
      "rotation_angle": -90
    },
    "triangle_2_small": {
      "top": 386,
      "left": 194,
      "rotation_angle": -135
    },
    "parallelepiped": {
      "top": 298,
      "left": 181,
      "rotation_angle": -90,
      "skew": 45,
    }
  },
  men_in_the_boat: {
    "square": {
      "top": 133,
      "left": 108,
      "rotation_angle": 15
    },
    "triangle_1_big": {
      "top": 231,
      "left": 44,
      "rotation_angle": -45
    },
    "triangle_2_big": {
      "top": 330,
      "left": 145,
      "rotation_angle": 135
    },
    "triangle_1_medium": {
      "top": 200,
      "left": 111,
      "rotation_angle": 0
    },
    "triangle_1_small": {
      "top": 317,
      "left": 283,
      "rotation_angle": -45
    },
    "triangle_2_small": {
      "top": 266,
      "left": 331,
      "rotation_angle": -45
    },
    "parallelepiped": {
      "top": 301,
      "left": 243,
      "rotation_angle": 180,
      "skew": -135
    }
  },
  horse_rider: {
    "square": {
      "top": 132,
      "left": 208,
      "rotation_angle": -45
    },
    "triangle_1_big": {
      "top": 226,
      "left": 79,
      "rotation_angle": 0
    },
    "triangle_2_big": {
      "top": 300,
      "left": 155,
      "rotation_angle": 180
    },
    "triangle_1_medium": {
      "top": 198,
      "left": 166,
      "rotation_angle": -90
    },
    "triangle_1_small": {
      "top": 227,
      "left": 7,
      "rotation_angle": -90
    },
    "triangle_2_small": {
      "top": 368,
      "left": 85,
      "rotation_angle": 90
    },
    "parallelepiped": {
      "top": 249,
      "left": 307,
      "rotation_angle": 180,
      "skew": 135
    }
  },







}