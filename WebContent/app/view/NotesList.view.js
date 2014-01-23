sap.ui.jsview("app.view.NotesList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.NotesList
	*/ 
	
	/*
	 * get the controller name 
	 * @memberOf {app.view.NotesList}
	 */
	/*getControllerName : function() {
		return "app.controller.NotesList";
	},*/
	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.view.NotesList
	*/ 
	createContent : function(oController) {
		this._viewContentLayout = new sap.ui.commons.layout.VerticalLayout();
		this._viewContentLayout.setWidth("100%");
		return this._viewContentLayout;
	},

});