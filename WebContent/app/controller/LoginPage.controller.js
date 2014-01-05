sap.ui.controller("app.controller.LoginPage", {

    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app.controller.SignUpPopup
    */
	onInit: function() {
		
    },
    

    onSignInButton:function(){
    	alert("Sign In button pressed");
    },
    
    onSignUpButton:function(){
		var view = sap.ui.view({viewName:"app.view.Popup.SignUpPopup", type:sap.ui.core.mvc.ViewType.JS});
		var sideBaritems= view.getSideBarItems();
		jQuery.sap.require("app.view.BaseControl.BasePopupContainer");
		var overlayContainer = new app.view.BaseControl.BasePopupContainer({
    		contentView: view
    	});
		overlayContainer.addSideBarItems(sideBaritems);
		overlayContainer.open();	
    },
    
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.controller.SignUpPopup
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.controller.SignUpPopup
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.controller.SignUpPopup
*/
//	onExit: function() {
//
//	}

});