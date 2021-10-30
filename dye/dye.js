(function () {
  'use strict';

  // Returns rounded number value
  function parse(x) {
    const parsed = Number.parseFloat(x);
    if (parsed !== NaN) {
      let fixed = String(parsed.toFixed(1));
      // Don't display useless ending.
      return fixed.replace(".0", "");
    } else {
      return 0;
    }
  }

  // ml to teaspoon
  const ML_TO_TS = 1/5;
  // ml to cup
  const ML_TO_CUP = 1/250;

  // how much ml water is needed for 1 gram of fabric
  const WATER_RATIO = 12;
  // Rit suggested ratio is 24.2.

  // how much ml dye is needed for 1 gram of fabric
  const DYE_RATIO = 0.25;
  // Rit suggested ratio is 0.26.

  // how much salt is needed for 1 gram of fabric
  const SALT_RATIO = 0.75;
  // Rit suggested ratio is 1.45.

  const nodes = {};
  nodes.fabricWeight = document.getElementById("fabric-weight");
  nodes.waterMl = document.getElementById("water-ml");
  nodes.dyeMl = document.getElementById("dye-ml");
  nodes.dyeTs = document.getElementById("dye-ts");
  nodes.saltMl = document.getElementById("salt-ml");
  nodes.saltCup = document.getElementById("salt-cup");
  nodes.detergentTs = document.getElementById("detergent-ts");

  nodes.fabricWeight.addEventListener("input", (evt) => {
    let fabricGrams = parseInt(evt.target.value) || 0;

    nodes.waterMl.innerText = parse(fabricGrams * WATER_RATIO)

    nodes.dyeMl.innerText = parse(fabricGrams * DYE_RATIO)
    nodes.dyeTs.innerText = parse(fabricGrams * DYE_RATIO * ML_TO_TS)

    nodes.saltMl.innerText = parse(fabricGrams * SALT_RATIO)
    nodes.saltCup.innerText = parse(fabricGrams * SALT_RATIO * ML_TO_CUP)

    nodes.detergentTs.innerText = parse(Math.ceil(fabricGrams * WATER_RATIO / 2000))
  });
}());
