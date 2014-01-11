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
		this._videoLayout =  new sap.ui.commons.layout.VerticalLayout({
			width:"1230px",
			height:"500px"
		});
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
		this._videoHtmlPlayer.addStyleClass("tutVideoplayer");
		this._videoLayout.addContent(this._videoHtmlPlayer);
		
		
		this._commentsSection= new sap.ui.commons.Panel();
		this._commentsSection.setShowCollapseIcon(false);
		this._commentsSection.setTitle(new sap.ui.core.Title({text: "Comments"}));
		this._commentsSection.addStyleClass("tutCommentsSection");
		
		this._bottomHorizontalLayout = new sap.ui.commons.layout.HorizontalLayout();
		this._commentsBox = new sap.ui.commons.TextArea({
			width:"615px",
			rows:5
		});
		this._commentsBox.setRows(12);
		this._commentsSection.addContent(this._commentsBox);

		this._descriptionSection = new sap.ui.commons.Panel({
			width:"600px"
		});
		this._descriptionSection.setShowCollapseIcon(false);
		this._descriptionSection.setTitle(new sap.ui.core.Title({text: "Description"}));
		this._descriptionSection.addStyleClass("tutDescriptionSection");
		
		
		//TODO demo text to be replaced by actual text
		this._demoText = 'Aliquam erat volutpat. Vivamus vitae felis nec lacus ultricies dapibus condimentum quis felis.';
		this._demoText+= '<span class="sapUiFTVBold">Donec sit</span> amet <em>justo sem</em>, eget laoreet velit.<br>';
		this._demoText += 'Some link goes here: <embed data-index=\"0\"><br>';
		this._demoText += '<ul><li>vehicula vitae eleifend luctus, ultrices quis metus.</li><li>Vestibulum tristique nulla pellentesque</li>';
		this._demoText += '<li>tellus posuere ac imperdiet nulla viverra.</li><li>Aenean eu dolor lacus.</li></ul>';
		
		this._descTextView = new sap.ui.commons.FormattedTextView();
		this._descTextView.setHtmlText(this._demoText);
		this._descriptionSection.addContent(this._descTextView);

		this._likeIndicator = new sap.ui.commons.RatingIndicator({
			maxValue: 1,
			visualMode: sap.ui.commons.RatingIndicatorVisualMode.Continuous
		});
    	this._likeIndicator.addStyleClass("tutLikeIndicator");
		
    	
    	this._bottomHorizontalLayout.addContent(this._commentsSection);
    	this._bottomHorizontalLayout.addContent(this._descriptionSection);
    	this._viewContentLayout.addContent(this._videoLayout);
		this._viewContentLayout.addContent(this._bottomHorizontalLayout);
		
	    return this._viewContentLayout;
	},

});