const TOOLTIP = document.querySelector('.tooltip');


TOOLTIP.addEventListener('mouseenter', function () {

    TOOLTIP.querySelector('.tooltip-text').style.visibility = 'visible';
    TOOLTIP.querySelector('.tooltip-text').style.opacity = '1';

});

TOOLTIP.addEventListener('mouseleave', function () {

    TOOLTIP.querySelector('.tooltip-text').style.visibility = 'hidden';
    TOOLTIP.querySelector('.tooltip-text').style.opacity = '0';

});
