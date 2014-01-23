/**
 * MainShellView Controller
 * 
 */
sap.ui.controller("app.controller.MainShellView", {
	
	/**
	* Called before the view starts the initialization
	* @memberOf app.view.MainShellView
	*/
	onBeforeInit:function(){
		var view = this.getView();
		var shell = view.getShell();
		var navigationNotesItem = view.getNavigationNotesItem();
		this._notesView= sap.ui.jsview("app.view.NotesList");
		shell.addWorksetItem(navigationNotesItem);
		shell.setContent(this._notesView);
	},
	
	
	/**
	* Called when a controller is instantiated and its View controls (if available) are already created.
	* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	* @memberOf app.view.MainShellView
	*/
	onInit: function() {

	},
	
	/**
	 * triggered when navigation items in mainShell is selected
	 * sets New Content for mainShell View
	 * @param oEvent
	 */
	setItemSelected: function(oEvent){
	    var sId = oEvent.getParameter("id");
        var oShell = oEvent.oSource;
     
        switch (sId) {
        	case "NotesItem":
        		if(this._notesView){
        			oShell.setContent(this._notesView);
        		}
        	default:
        		break;
        };
	}

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf app.view.MainShellView
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.view.MainShellView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.view.MainShellView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.view.MainShellView
*/
//	onExit: function() {
//
//	}

});