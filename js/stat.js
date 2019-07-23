var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

var getMaxElement = function(arr) {
    var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'top';
    ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 3, CLOUD_Y + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + GAP * 3, CLOUD_Y + FONT_GAP * 2)

    for (var i = 0; i < names.length; i++) {
        ctx.fillStyle = 'rgba(3, 136, 252, 1)'
        if (names[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }

        //  MAX_BAR             BAR[I]
        // __________    =    __________
        // BAR WIDTH              // X

        // X = (BAR_WIDTH * BAR[I]) / MAX_BAR

        ctx.fillText(names[i], CLOUD_X + BAR_GAP * i, CLOUD_HEIGHT - GAP);
        ctx.fillRect(CLOUD_X + BAR_GAP * i, CLOUD_Y + CLOUD_HEIGHT - BAR_HEIGHT - FONT_GAP - GAP, BAR_WIDTH, BAR_HEIGHT);

    }
}
