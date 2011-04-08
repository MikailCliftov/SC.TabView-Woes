// ==========================================================================
// Project:   MyApp.aController
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
MyApp.aController = SC.ObjectController.create(
/** @scope MyApp.aController.prototype */ {

someAction: function(something){
  console.log('You clicked me! I am: '+something);
  console.log('You expect me to have a value of "otherStepsView" but surprise: I am: '+something.get('value'));
  var theOtherView = MyApp.mainPage.get('otherStepsView');
  MyApp.mainPage.mainPane.mainView.set('nowShowing', theOtherView);
  return true;
}

}) ;
