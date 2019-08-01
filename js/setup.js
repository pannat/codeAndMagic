'use strict';

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.wizard-coat');
var wizardEyes = setup.querySelector('.wizard-eyes');
var wizardFireball = setup.querySelector('.setup-fireball-wrap');
var inputUserName = setup.querySelector('input[name="username"]');
var inputWizardCoatColor = setup.querySelector('input[name="coat-color"]');
var inputWizardEyesColor = setup.querySelector('input[name="eyes-color"]');
var inputWizardFireballColor = setup.querySelector('input[name="fireball-color"]');
var wizards = [];
var wizardsElements = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
                            .content
                            .querySelector('.setup-similar-item');
var WIZARD_OPTIONS = {
  firstNames: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристорф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
  lastNames: ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
  coatColors: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
  eyesColors: ['red', 'black', 'blue', 'yellow', 'green'],
  fireballColors: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};
var COUNT_WIZARDS = 4;
var namesCount = WIZARD_OPTIONS.firstNames.length;
var coatColorsCount = WIZARD_OPTIONS.coatColors.length;
var eyesColorsCount = WIZARD_OPTIONS.eyesColors.length;
var fireballColorsCount = WIZARD_OPTIONS.fireballColors.length;

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var fillWizardsCoatColor = function () {
  wizardCoat.style.fill = WIZARD_OPTIONS.coatColors[getRandomInt(0, coatColorsCount)];
  inputWizardCoatColor.value = wizardCoat.style.fill;
};

var fillWizardsEyesColor = function () {
  wizardEyes.style.fill = WIZARD_OPTIONS.eyesColors[getRandomInt(0, eyesColorsCount)];
  inputWizardEyesColor.value = wizardEyes.style.fill;
};

var fillWizardsFireballColor = function () {
  var color = WIZARD_OPTIONS.fireballColors[getRandomInt(0, fireballColorsCount)];
  wizardFireball.style.backgroundColor = color;
  inputWizardFireballColor.value = color;
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', popupEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

inputUserName.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

wizardCoat.addEventListener('click', function () {
  fillWizardsCoatColor();
});

wizardEyes.addEventListener('click', function () {
  fillWizardsEyesColor();
});

wizardFireball.addEventListener('click', function () {
  fillWizardsFireballColor();
});

// document.querySelector('.setup-similar').classList.remove('hidden');

var generateRandomWizards = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    wizards[i] = {
      firstName: WIZARD_OPTIONS.firstNames[getRandomInt(0, namesCount)],
      lastName: WIZARD_OPTIONS.lastNames[getRandomInt(0, namesCount)],
      coatColor: WIZARD_OPTIONS.coatColors[getRandomInt(0, coatColorsCount)],
      eyesColor: WIZARD_OPTIONS.eyesColors[getRandomInt(0, eyesColorsCount)]
    };
  }
};

var generateWizardsElements = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].firstName + ' ' + wizards[i].lastName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    wizardsElements[i] = wizardElement;
  }
};

var fillSimilarList = function () {
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    similarListElement.appendChild(wizardsElements[i]);
  }
};

generateRandomWizards();
generateWizardsElements();
fillSimilarList();
