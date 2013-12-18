/**
 * MainShellView Class
 * 
 */
jQuery.sap.require("sap.ui.ux3.Shell");

sap.ui.jsview("app.view.MainShellView", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.MainShellView
	*/ 
	/*getControllerName : function() {
		return "app.controller.MainShellView";
	},*/
	/**
	 * 
	 * @returns {sap.ui.ux3.Shell}
	 */
	getShell: function(){
		var result = null;
		if(this._appShell){
			result = this._appShell;
		}
		return result;
	},
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.view.MainShellView
	*/ 
	createContent : function(oController) {
		 // create the top navigation bar
		this._oController = oController;
		this._appShell = new sap.ui.ux3.Shell({
            id: "mainshell",
            appTitle:"Site_title",
             appIconTooltip: "Logo",
            showLogoutButton: false,
            showSearchTool: false,
            showInspectorTool: false,
            showFeederTool: false,
            showPane: true,
            showTools: true,
            //worksetItemSelected: [oController.setItemSelected,oController]
        });
        this._navigationRequestItem = 
            new sap.ui.ux3.NavigationItem("item1", {
                key:"item1",
                text:"Item 1"
            });
       this._appShell.addWorksetItem(this._navigationRequestItem);
        
		
		
        
        return this._appShell;
	},
	

});