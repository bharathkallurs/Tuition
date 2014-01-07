jQuery.sap.require("app.util.Utility");
sap.ui.controller("app.controller.SignUpPopup", {

    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app.controller.SignUpPopup
    */
	onInit: function() {
		
    },
    
    /*
     * method called when save button is pressed on the UI
     * @memberOf {app.controller.SignUpPopup}
     */
    onSaveButtonPress:function(){
    	var view = this.getView();
    	var requiredFields= view.getRequiredFields();
    	if(app.util.Utility.validateFields(requiredFields)){
    		//TODO call the webservice here
    		alert("validation passed");
    	}
    	else{
    		app.util.Utility.showMessageBox("Please enter all the required fields","2");
    	}
    },
    
    /*
     * method called when redo button is pressed on the UI
     * @memberOf {app.controller.SignUpPopup}
     */
    onRedoButtonPress:function(){
    	var view = this.getView();
    	var allFields= view.getAllFields();
    	for(var i=0;i<allFields.length;i++){
    		var currentField = allFields[i];
    		currentField.setValue("");
    	}
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