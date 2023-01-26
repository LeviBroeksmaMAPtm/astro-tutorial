"use strict";

import Alpine from "alpinejs";

Alpine.data("headerData", () => ({

  show: {
    respMenu: false
  },

  init() {
     console.log('header');
  },

  test() {
    console.log('test');
  }
}));
