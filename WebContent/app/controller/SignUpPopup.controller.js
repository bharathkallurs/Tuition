sap.ui.controller("app.controller.SignUpPopup", {

    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app.view.popup.role.RoleDetails
    */
	onInit: function() {
		
    },
    
    /*
     * method called when save button is pressed on the UI
     * @memberOf {app.controller.SignUpPopup}
     */
    onSaveButtonPress:function(){
    	alert("save button pressed");
    },
    
    /*
     * method called when redo button is pressed on the UI
     * @memberOf {app.controller.SignUpPopup}
     */
    onRedoButtonPress:function(){
    	alert("redo button pressed");
    },
    
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.view.popup.role.RoleDetails
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.view.popup.role.RoleDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.view.popup.role.RoleDetails
*/
//	onExit: function() {
//
//	}

});