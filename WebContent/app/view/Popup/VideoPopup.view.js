sap.ui.jsview("app.view.Popup.VideoPopup", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.Popup.VideoPopup
	*/ 
	
	/*
	 * get the Side tool bar items 
	 * @returns {array}
	 */
	getSideBarItems:function() {
		return [this._likeIndicator];
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
	* @memberOf app.view.Popup.VideoPopup
	*/ 
	createContent : function(oController) {
		
		this._viewContentLayout = new sap.ui.commons.layout.VerticalLayout();
		this._viewContentLayout.addStyleClass("tutvideoPopup");
		this._viewContentLayout.setWidth("100%");
		this._videoHtmlPlayer = new sap.ui.core.HTML({
			 content:"<embed style='position:absolute;top:0px;width:1230px;float:right'"+
			 " height='500'"+
				 "src='http://www.youtube.com/v/XGSy3_Czz8k'"+
				 "type='application/x-shockwave-flash'>"+
				 "</embed>",
         preferDOM : false,                      
            afterRendering : function(e) {
                  //some work to be done after rendering 
            }
        });
		this._viewContentLayout.addContent(this._videoHtmlPlayer);
		
		this._commentsSection= new sap.ui.commons.Panel({
			width:"1230px"
		});
		this._commentsSection.setTitle(new sap.ui.core.Title({text: "Comments"}));
		this._commentsSection.addStyleClass("tutCommentsSection");
		
		this._commentsBox = new sap.ui.commons.TextArea();
		this._commentsBox.setRows(3);
		this._commentsSection.addContent(this._commentsBox);


		this._likeIndicator = new sap.ui.commons.RatingIndicator({
			maxValue: 1,
			visualMode: sap.ui.commons.RatingIndicatorVisualMode.Continuous
		});
    	this._likeIndicator.addStyleClass("tutLikeIndicator");
		
		this._viewContentLayout.addContent(this._commentsSection);
		
	    return this._viewContentLayout;
	},

});