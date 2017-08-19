goog.provide('rf.passgen.view.PassgenView');

goog.require('goog.ui.Component');
goog.require('goog.ui.Control');
goog.require('goog.events');
goog.require('rf.passgen.model.PassgenModel');

/**
 * @constructor
 * @extends {goog.ui.Component}
 * @return {rf.passgen.view.PassgenView} the newly created instance
 */
rf.passgen.view.PassgenView = function() {
  // Call "parent" constructor initializing it's state. Needs to come first
  goog.base(this);

  // Closure code has a convention of _ as suffix for "private" methods
  // however the following annotations are documentation for compiler to
  // enable it to verify the "private" scope

  /** @private {goog.ui.Component} */
  this.passwordDiv_ = new goog.ui.Component();
  /** @private {goog.ui.Control} */
  this.generateButton_ = new goog.ui.Control();
};

/*
 * This is actual code that implements inheritance. The jsdoc annotations on above
 * method is merily documentation to help the compiler and tools to check code validity
 * and help during compilation.
 */
goog.inherits(rf.passgen.view.PassgenView, goog.ui.Component);

/* Could use @override but using @inheritDoc does this plus includes other annotations and docs */
/** @inheritDoc */
rf.passgen.view.PassgenView.prototype.decorateInternal = function(element) {
  //Call parent class implementation of decorateInternal
  goog.base(this, 'decorateInternal', element);

  //Get exiting dom elements from the document
  var passwordElement = this.getElement().querySelector(rf.passgen.view.PassgenView.Selector.PASSWORD);
  var generateElement = this.getElement().querySelector(rf.passgen.view.PassgenView.Selector.GENERATE);

  //Decorate the existing dom elements with components
  if (passwordElement) {
    this.passwordDiv_.decorate(passwordElement);
  }

  if (generateElement) {
    this.generateButton_.decorate(generateElement);
  }
};

/**
 * @enum {string}
 */
rf.passgen.view.PassgenView.Selector = {
  PASSWORD: '.password',
  GENERATE: '.generate'
};

/** @inheritDoc */
rf.passgen.view.PassgenView.prototype.enterDocument = function() {
  //Call super implementation of method
  goog.base(this, 'enterDocument');

  goog.events.listen(this.generateButton_, goog.ui.Component.EventType.ACTION, this.handleGenerate_, false, this);
};

/** @inheritDoc */
rf.passgen.view.PassgenView.prototype.exitDocument = function() {
  goog.events.unlisten(this.generateButton_, goog.ui.Component.EventType.ACTION, this.handleGenerate_, false, this);

  //Call super implementation of method
  goog.base(this, 'exitDocument');
};

/** @private */
rf.passgen.view.PassgenView.prototype.handleGenerate_ = function() {
  this.passwordDiv_.getElement().innerHTML = new rf.passgen.model.PassgenModel().randomString(8);
};
