(function () {
    'use strict';

    const config = {
        behavior: ['scroll', 'alternate'],
        direction: ['up', 'down', 'left', 'right'],
        scrollamount: [1, 5, 25, 50, 100, 1000],
        scrolldelay: [60, 120, 240, 1600]
    };

    function _getRandomHsl() {
        const hue = Math.round(Math.random() * 360);
        const values = [hue, '100%', '50%'].join(', ');
        return 'hsl(' + values + ')';
    }

    function _getRandomArrayElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    function _getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function _getRandomBehavior() {
        return _getRandomArrayElement(config.behavior);
    }

    function _getRandomDirection() {
        return _getRandomArrayElement(config.direction);
    }

    function _getRandomScrollamount() {
        return _getRandomInt(1, 100);
    }

    function _getRandomScrolldelay() {
        return _getRandomInt(60, 240);
    }

    function _getRandomMarqueeEl() {
        const el = document.createElement('marquee');

        el.style.backgroundColor = _getRandomHsl();

        const behaviorAttr = document.createAttribute('behavior');
        behaviorAttr.value = _getRandomBehavior();
        el.setAttributeNode(behaviorAttr);

        const directionAttr = document.createAttribute('direction');
        directionAttr.value = _getRandomDirection();
        el.setAttributeNode(directionAttr);

        const scrollamountAttr = document.createAttribute('scrollamount');
        scrollamountAttr.value = _getRandomScrollamount();
        el.setAttributeNode(scrollamountAttr);

        const scrolldelayAttr = document.createAttribute('scrolldelay');
        scrolldelayAttr.value = _getRandomScrolldelay();
        el.setAttributeNode(scrolldelayAttr);

        return el;
    }

    const marquees = [];

    for (let i = 0; i < 10; i++) {
        marquees[i] = _getRandomMarqueeEl();

        if (typeof marquees[i - 1] !== 'undefined') {
            marquees[i].appendChild(marquees[i - 1]);
        }
    }

    document.body.appendChild(marquees[marquees.length - 1]);
}());
