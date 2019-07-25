'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var wizards = [];
var WIZARD_OPTIONS = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристорф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['red', 'black', 'blue', 'yellow', 'green']
};
var COUNT_WIZARDS = 4;
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
                            .content
                            .querySelector('.setup-similar-item');
var wizardElements = [];


var generateRandomPlayers = function (players, options) {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    players[i] = {
      firstName: options.firstNames[getRandomInt(0, options.firstNames.length - 1)],
      lastName: options.lastNames[getRandomInt(0, options.lastNames.length - 1)],
      coatColor: options.coatColors[getRandomInt(0, options.coatColors.length - 1)],
      eyesColor: options.eyesColors[getRandomInt(0, options.eyesColors.length - 1)]
    };
  }
};

var generatePlayersElements = function (players, template, playersElements) {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    var playerElement = template.cloneNode(true);
    playerElement.querySelector('.setup-similar-label').textContent = players[i].firstName + ' ' + players[i].lastName;
    playerElement.querySelector('.wizard-coat').style.fill = players[i].coatColor;
    playerElement.querySelector('.wizard-eyes').style.fill = players[i].eyesColor;
    playersElements[i] = playerElement;
  }
};

var fillSimilarList = function (list, elements) {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    list.appendChild(elements[i]);
  }
};

generateRandomPlayers(wizards, WIZARD_OPTIONS);
generatePlayersElements(wizards, similarWizardTemplate, wizardElements);
fillSimilarList(similarListElement, wizardElements);
