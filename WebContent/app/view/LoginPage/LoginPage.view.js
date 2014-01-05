
jQuery.sap.require("sap.ui.ux3.Shell");

sap.ui.jsview("app.view.LoginPage.LoginPage", {
	
	getControllerName : function() {
		return "app.controller.LoginPage";
	},

	createContent : function(oController) {
	
		//Create a panel instance
		this._panel = new sap.ui.commons.Panel({width: "350px"});	
		
		
		//Set the title of the panel , can add icon using icon Json field
		this._panel.setTitle(new sap.ui.core.Title({text: "Sign In"}));

		
		//Horizontal Layout for userName
		this._userName = new sap.ui.commons.Label({text:"Username or Email"});
		this._userNameLayout = new sap.ui.layout.HorizontalLayout({
			content: [this._userName]
		});
		this._userNameTxtField = new sap.ui.commons.TextField("userNameTextField", {value:"",width: '100%'});
		this._userName.setLabelFor(this._userNameTxtField);
		
		
		this._userNameTxtFieldLayout = new sap.ui.layout.HorizontalLayout({
			content: [this._userNameTxtField]
		});
		
		//Horizontal Layout for password
		this._password = new sap.ui.commons.Label({text:"Password"});
		this._passwordLayout = new sap.ui.layout.HorizontalLayout({
			content: [this._password]
		});
		this._passwordField = new sap.ui.commons.PasswordField("passwordField", {value:"",width: '100%'});
		this._userName.setLabelFor(this._passwordField);

		this._passwordTxtFieldLayout = new sap.ui.layout.HorizontalLayout({
			content: [this._passwordField]
		});
		
		//Horizontal Layout for Sign in and Sign up buttons
		
		this._signInButton = new sap.ui.commons.Button({text:"Sign In"});
		this._signUpButton = new sap.ui.commons.Button({text:"Sign Up"});
		
		this._signInButton.attachPress(this.oController.onSignInButton,oController);
		this._signUpButton.attachPress(this.oController.onSignUpButton,oController);
		
		this._buttonLayout = new sap.ui.layout.HorizontalLayout({
			content : [this._signInButton,this._signUpButton]
		});
		
		//create a vertical layout consisting of the above horizontal layouts
		this._loginLayout = new sap.ui.layout.VerticalLayout({
			content:[this._userNameLayout,this._userNameTxtFieldLayout,this._passwordLayout,this._passwordTxtFieldLayout,this._buttonLayout]
		});

		//Add the login layout to the panels content area
		this._panel.addContent(this._loginLayout);	
		return this._panel;
	},

});