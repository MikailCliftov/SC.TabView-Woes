MyApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane : SC.MainPane.design({
    childViews : 'mainView'.w(),

    mainView : SC.TabView.design({
      layout : {
        top : 36,
        left : 40,
        right : 40,
        bottom : 40
      },
      nowShowing : 'otherStepsView',
      itemTitleKey : 'title',
      itemValueKey : 'value',
      itemIconKey : 'icon',
      itemActionKey : 'action',
      itemTargetKey : 'target',
      items : [ {
        title : 'Steps',
        value : 'stepsView',
        icon : 'sc-icon-folder-16'
      }, {
        title : 'otherSteps',
        value : 'otherStepsView',
        icon : 'sc-icon-folder-16',
        action : 'someAction',
        target : 'MyApp.aController'
      } ]
    })
  }),
  stepsView : SC.View.design({
    childViews : 'label1'.w(),
    label1 : SC.LabelView.design({
      layout : {
        width : 100,
        height : 16,
        centerX : 0,
        centerY : 0
      },
      value : 'Hello World'
    })
  }),
  otherStepsView : SC.View.design({
    childViews : 'label2'.w(),
    label2 : SC.LabelView.design({
      layout : {
        width : 100,
        height : 16,
        centerX : 0,
        centerY : 0
      },
      value : 'Hello Mars'
    })
  })

});; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_app');