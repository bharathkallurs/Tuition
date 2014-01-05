
jQuery.sap.require("sap.ui.ux3.Shell");

sap.ui.jsview("app.view.LoginPage.LoginPage", {
	
	getControllerName : function() {
		return "app.controller.LoginPage";
	},

	createContent : function(oController) {
	
		//Create a panel instance
		this._panel = new sap.ui.commons.Panel({width: "350px"});	
		
		
		//Set the title of the panel , can add icon using icon Json field
		this._panel.setTitle(new sap.ui.core.Title({text: "SignIn"}));

		
		//Horizontal Layout for userName
		this._userName = new sap.ui.commons.Label({text:"UserName or Email"});
		this._userNameLayout = new sap.ui.layout.HorizontalLayout("Layout1", {
			content: [this._userName]
		});
		this._userNameTxtField = new sap.ui.commons.TextField("userNameTextField", {value:"",width: '100%'});
		this._userName.setLabelFor(this._userNameTxtField)
		// oButton = new sap.ui.commons.Button({text:"Submit", tooltip:"Submit value"});

		this._userNameTxtFieldLayout = new sap.ui.layout.HorizontalLayout("Layout2", {
			content: [this._userNameTxtField]
		});
		
		//Horizontal Layout for password
		this._password = new sap.ui.commons.Label({text:"Passowrd"});
		this._passwordLayout = new sap.ui.layout.HorizontalLayout("Layout3", {
			content: [this._password]
		});
		this._passwordTxtField = new sap.ui.commons.TextField("passwordTxtField", {value:"",width: '100%'});
		this._userName.setLabelFor(this._passwordTxtField)
		// oButton = new sap.ui.commons.Button({text:"Submit", tooltip:"Submit value"});

		this._passwordTxtFieldLayout = new sap.ui.layout.HorizontalLayout("Layout4", {
			content: [this._passwordTxtField]
		});
		
		//Horizontal Layout for Sign in and Sign up buttons
		
		this._signInButton = new sap.ui.commons.Button({text:"Sign In"});
		this._signUpButton = new sap.ui.commons.Button({text:"Sign Up"});
		
		this._signInButton.attachPress(this.oController.onSignInButton,oController);
		this._signUpButton.attachPress(this.oController.onSignUpButton,oController);
		
		this._buttonLayout = new sap.ui.layout.HorizontalLayout("Layout5",{
			content : [this._signInButton,this._signUpButton]
		});
		
		//create a vertical layout consisting of these horizontal layouts
		this._loginLayout = new sap.ui.layout.VerticalLayout("Layout6", {
			content:[this._userNameLayout,this._userNameTxtFieldLayout,this._passwordLayout,this._passwordTxtFieldLayout,this._buttonLayout]
		});

		//Add the login layout to the panels content area
		this._panel.addContent(this._loginLayout);	
		return this._panel;
	},		

});