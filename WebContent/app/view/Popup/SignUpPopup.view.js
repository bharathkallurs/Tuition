sap.ui.jsview("app.view.Popup.SignUpPopup", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.Popup.SignUpPopup
	*/ 
	
	/*
	 * get the Side tool bar items 
	 * @returns {array}
	 */
	getSideBarItems:function() {
		return [this._saveButton];
	},
	/**
	 * Get the current overlay container for this view
	 * @returns {app.view.BaseControl.BasePopupContainer}
	 */
	getOverlayContainer: function() {
		return this._overlayContainer;
	},
    
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.view.Popup.SignUpPopup
	*/ 
	createContent : function(oController) {
		
		this._viewContentLayout = new sap.ui.commons.layout.VerticalLayout();
		this._viewContentLayout.setWidth("100%");
		
		this._saveButton=new sap.ui.commons.Button({
	        icon : "resources-project/images/save.png",
	        lite:true,
	        height:"32px"
	    });
		
	    return this._viewContentLayout;
	},

});