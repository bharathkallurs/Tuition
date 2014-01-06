sap.ui.jsview("app.view.Popup.SignUpPopup", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.Popup.SignUpPopup
	*/ 
	
	/*
	 * get all the required fields for this view
	 * @returns {Array} array of required fields 
	 * @memberOf {app.view.Popup.SignUpPopup}
	 */
	getRequiredFields :function(){
		return [this._firstNameField,this._emailField,this._passwordField,this._confpasswordField,this._schoolNameField,this._classDropDown,this._schoolIdField];
	},
	
	/*
	 * get the controller name 
	 * @memberOf {app.view.Popup.SignUpPopup}
	 */
	getControllerName : function() {
		return "app.controller.SignUpPopup";
	},
	
	/*
	 * get the Side tool bar items 
	 * @returns {array}
	 */
	getSideBarItems:function() {
		return [this._saveButton,this._redoButton];
	},
	/**
	 * Get the current overlay container for this view
	 * @returns {app.view.BaseControl.BasePopupContainer}
	 */
	getOverlayContainer: function() {
		return this._overlayContainer;
	},
    
	/**
	 * Sets the overlay container when this view is used 
	 * @param overlayContainer {} the overlay container 
	 * @returns {app.view.Popup.SignUpPopup}
	 */
	setOverlayContainer: function(overlayContainer) {
		this._overlayContainer = overlayContainer;
		this._overlayContainer.setWidth("600px");
		this._overlayContainer.setHeight("600px");
		return this;
	},
	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.view.Popup.SignUpPopup
	*/ 
	createContent : function(oController) {
		
		
		this._viewContentLayout = new sap.ui.commons.layout.VerticalLayout();
		this._viewContentLayout.setWidth("100%");
		this._viewContentLayout.addStyleClass("tutSignupPopup");
		
		this._personalInfoPanel= new sap.ui.commons.Panel({
			width:"550px"
		});
		this._personalInfoPanel.setTitle(new sap.ui.core.Title({text: "Enter your personal details here"}));
		
		this._personalInfoLayout = new sap.ui.commons.layout.VerticalLayout();
		this._personalInfoLayout.addStyleClass("tutSignUpViewPanels");
		
		//create the first name label and field 
		this._firstNameLabel=  new sap.ui.commons.Label({
			text:"First Name",
			required:true
		});
		this._firstNameField =  new sap.ui.commons.TextField();
		this._firstNameField.addStyleClass("tutBottomMargin");
		this._personalInfoLayout.addContent(this._firstNameLabel);
		this._personalInfoLayout.addContent(this._firstNameField);
		
		//create the last name label and field 
		this._lastNameLabel=  new sap.ui.commons.Label({
			text:"Last Name"
		});
		this._lastNameField =  new sap.ui.commons.TextField();
		this._lastNameField.addStyleClass("tutBottomMargin");
		this._personalInfoLayout.addContent(this._lastNameLabel);
		this._personalInfoLayout.addContent(this._lastNameField);
		
		
		//create the email label and field 
		this._emailLabel=  new sap.ui.commons.Label({
			text:"Email Address",
			required:true	
		});
		this._emailField =  new sap.ui.commons.TextField({
			width:"250px"
		});
		this._emailField.addStyleClass("tutBottomMargin");
		this._personalInfoLayout.addContent(this._emailLabel);
		this._personalInfoLayout.addContent(this._emailField);
		
		//create the password label and field
		this._passwordLabel=  new sap.ui.commons.Label({
			text:"Password",
			required:true
		});
		this._passwordField =  new sap.ui.commons.PasswordField();
		this._passwordField.addStyleClass("tutBottomMargin");
		this._personalInfoLayout.addContent(this._passwordLabel);
		this._personalInfoLayout.addContent(this._passwordField);
		
		//create the confirm password label and field
		this._confpasswordLabel=  new sap.ui.commons.Label({
			text:"Confirm Password",
			required:true
		});
		this._confpasswordField =  new sap.ui.commons.PasswordField();
		this._confpasswordField.addStyleClass("tutBottomMargin");
		this._personalInfoLayout.addContent(this._confpasswordLabel);
		this._personalInfoLayout.addContent(this._confpasswordField);
		
		this._personalInfoPanel.addContent(this._personalInfoLayout);
		this._viewContentLayout.addContent(this._personalInfoPanel);
		
		
		
		this._eduInfoPanel= new sap.ui.commons.Panel({
			width:"550px"
		});
		this._eduInfoPanel.setTitle(new sap.ui.core.Title({text: "Enter your educational details here"}));
		
		this._eduInfoLayout = new sap.ui.commons.layout.VerticalLayout();
		this._eduInfoLayout.addStyleClass("tutSignUpViewPanels");
		
		//create school name label and field 
		this._shcoolNameLabel=  new sap.ui.commons.Label({
			text:"School Name",
			required:true
		});
		this._schoolNameField =  new sap.ui.commons.PasswordField();
		this._schoolNameField.addStyleClass("tutBottomMargin");
		this._eduInfoLayout.addContent(this._shcoolNameLabel);
		this._eduInfoLayout.addContent(this._schoolNameField);
		
		this._personalInfoPanel.addContent(this._personalInfoLayout);
		this._viewContentLayout.addContent(this._personalInfoPanel);
		
		//create class lable and drop down 
		this._classNameLabel=  new sap.ui.commons.Label({
			text:"Class",
			required:true
		});
		this._classDropDown =   new sap.ui.commons.DropdownBox({
			width:"50px"
		});
		
		
		this._eightClassItem = new sap.ui.core.ListItem();
		this._eightClassItem.setText("8");
		this._classDropDown.addItem(this._eightClassItem);
		this._nineClassItem = new sap.ui.core.ListItem();
		this._nineClassItem.setText("9");
		this._classDropDown.addItem(this._nineClassItem);
		this._tenClassItem = new sap.ui.core.ListItem();
		this._tenClassItem.setText("10");
		this._classDropDown.addItem(this._tenClassItem);
		
		this._classDropDown.addStyleClass("tutBottomMargin");
		this._eduInfoLayout.addContent(this._classNameLabel);
		this._eduInfoLayout.addContent(this._classDropDown);
		
		this._personalInfoPanel.addContent(this._personalInfoLayout);
		this._viewContentLayout.addContent(this._personalInfoPanel);
		
		//create Subjects of Interest label and checkBoxes 
		this._subsLabel=  new sap.ui.commons.Label({
			text:"Subjects you are interested in"
		});
		this._subsScienceCheckBox = new sap.ui.commons.CheckBox({
	        text : 'Science',
	        tooltip : 'Science checkbox',
	        checked : false
	    });
		this._subsMathCheckBox = new sap.ui.commons.CheckBox({
	        text : 'Maths',
	        tooltip : 'Maths checkbox',
	        checked : false
	    });
		this._eduInfoLayout.addContent(this._subsLabel);
		this._eduInfoLayout.addContent(this._subsScienceCheckBox);
		this._eduInfoLayout.addContent(this._subsMathCheckBox);
		this._subsMathCheckBox.addStyleClass("tutBottomMargin");
		
		//create the school id lable and field 
		this._schoolIdLabel= new sap.ui.commons.Label({
			text:"Enter your unique School ID",
			required:true
		});
		this._schoolIdField =  new sap.ui.commons.TextField({
			width:"250px"
		});
		this._eduInfoLayout.addContent(this._schoolIdLabel);
		this._eduInfoLayout.addContent(this._schoolIdField);
		
		this._personalInfoPanel.addContent(this._personalInfoLayout);
		this._viewContentLayout.addContent(this._personalInfoPanel);
		
		
		
		this._eduInfoPanel.addContent(this._eduInfoLayout);
		this._viewContentLayout.addContent(this._eduInfoPanel);
		
		this._saveButton=new sap.ui.commons.Button({
	        icon : "resources-project/images/save_bw.png",
	        lite:true,
	        height:"32px"
	    });
		this._saveButton.addStyleClass("tutSaveButton");
		this._saveButton.attachPress(this.oController.onSaveButtonPress,oController);
		
		
		this._redoButton=new sap.ui.commons.Button({
	        icon : "resources-project/images/undo_bw.png",
	        lite:true,
	        height:"32px"
	    });
		this._redoButton.addStyleClass("tutRedoButton");
		this._redoButton.attachPress(this.oController.onRedoButtonPress,oController);
		
		
	    return this._viewContentLayout;
	},

});