(function () {
  'use strict';

  function parse(x) {
    return Number.parseFloat(x).toFixed(1);
  }

  // ml to teaspoon
  const ML_TO_TS = 1/5;
  // ml to cup
  const ML_TO_CUP = 1/250;

  // how much ml water is needed for 1 gram of fabric
  const WATER_RATIO = 24.2; // 7.5;
  // Rit says you should use 2.5x, but it's crazy, as you'd never be able to
  // submerge whole fabric in it.

  // how much ml dye is needed for 1 gram of fabric
  const DYE_RATIO = 0.26;
  // Rit says you should use x0.033, but again: crazy AF.

  // how much salt is needed for 1 gram of fabric
  const SALT_RATIO = 1.452;
  // Same story: Rit crazily suggest x0.16.

  const nodes = {};
  nodes.fabricWeight = document.getElementById("fabric-weight");
  nodes.waterMl = document.getElementById("water-ml");
  nodes.dyeMl = document.getElementById("dye-ml");
  nodes.dyeTs = document.getElementById("dye-ts");
  nodes.saltMl = document.getElementById("salt-ml");
  nodes.saltCup = document.getElementById("salt-cup");
  nodes.detergentTs = document.getElementById("detergent-ts");

  nodes.fabricWeight.addEventListener("input", (evt) => {
    const fabricGrams = parseInt(evt.target.value);

    nodes.waterMl.innerText = parse(fabricGrams * WATER_RATIO)

    nodes.dyeMl.innerText = parse(fabricGrams * DYE_RATIO)
    nodes.dyeTs.innerText = parse(fabricGrams * DYE_RATIO * ML_TO_TS)

    nodes.saltMl.innerText = parse(fabricGrams * SALT_RATIO)
    nodes.saltCup.innerText = parse(fabricGrams * SALT_RATIO * ML_TO_CUP)
  });
}());
