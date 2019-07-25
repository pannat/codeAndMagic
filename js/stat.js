'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_GAP = 10;
var GAP = 30;
var FONT_GAP = 22;
var MAX_BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var splitStroke = function (ctx, text) {
  var arr = text.split(', ');
  for (var i = 0; i < arr.length; i++) {
    ctx.fillText(arr[i], CLOUD_X + GAP, CLOUD_Y + FONT_GAP * (i + 1));
  }
};

var equalizeArr = function (arr1, arr2) {
  var arr = arr1;
  if (arr1.length > arr2.length) {
    arr = arr2;
  }
  for (var i = 0; i < arr.length; i++) {
    if (arr1.length > arr2.length) {
      arr1.pop();
    } else if (arr1.length !== arr2.length) {
      arr2.pop();
    }
  }
};

equalizeArr(['Маша', 'Даша', 'Саша', 'Ваня'], [100, 200]);

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'top';
  splitStroke(ctx, 'Ура вы победили!, Список результатов:');

  for (var i = 0; i < names.length; i++) {
    var barHeight = (MAX_BAR_HEIGHT * times[i]) / getMaxElement(times);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillText(parseInt(times[i], 10), CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - MAX_BAR_HEIGHT - FONT_GAP * 2 + (MAX_BAR_HEIGHT - barHeight));
    ctx.fillStyle = 'hsl(233,' + getRandomInt(1, 100) + '%, 30%)';
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - MAX_BAR_HEIGHT - GAP + (MAX_BAR_HEIGHT - barHeight), BAR_WIDTH, barHeight);
  }
};
