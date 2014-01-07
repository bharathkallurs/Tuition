
jQuery.sap.require("sap.ui.ux3.Shell");

sap.ui.jsview("app.view.LoginPage.LoginPage", {
	
	getControllerName : function() {
		return "app.controller.LoginPage";
	},

	createContent : function(oController) {
	
		//creating base Horizontal layout so that we can add the "drawer" UI later 
		
		this._viewContentLayout = new sap.ui.layout.HorizontalLayout();
		this._viewContentLayout.addStyleClass("tutLoginPage");
		
		//Create a panel instance
		this._panel = new sap.ui.commons.Panel({width: "350px"});	
		this._panel.setShowCollapseIcon(false);
		this._panel.addStyleClass("tutLoginPanel");
		
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
		
		this._passwordTxtFieldLayout.addStyleClass("tutBottomMargin");
		
		//Horizontal Layout for Sign in and Sign up buttons
		
		this._signInButton = new sap.ui.commons.Button({text:"Sign In"});
		this._signUpButton = new sap.ui.commons.Button({text:"Sign Up"});
		
		this._signInButton.attachPress(this.oController.onSignInButton,oController);
		this._signUpButton.attachPress(this.oController.onSignUpButton,oController);
		this._signUpButton.addStyleClass("tutButtonHorizontalMargin");
		
		this._buttonLayout = new sap.ui.layout.HorizontalLayout({
			content : [this._signInButton,this._signUpButton]
		});
		
		//create a vertical layout consisting of the above horizontal layouts
		this._loginLayout = new sap.ui.layout.VerticalLayout({
			content:[this._userNameLayout,this._userNameTxtFieldLayout,this._passwordLayout,this._passwordTxtFieldLayout,this._buttonLayout]
		});

		//create a button for About 
		this._aboutButton= new sap.ui.commons.Button({
	        icon : "resources-project/images/Expand-icon.png",
	        height:"48px"
	    });
		this._aboutButton.addStyleClass("tutAboutButton");
		
		
		//create a button for FAQ
		this._faqButton= new sap.ui.commons.Button({
	        icon : "resources-project/images/Expand-icon.png",
	        height:"48px"
	    });
		this._faqButton.addStyleClass("tutfaqButton");
		
		
		//Add the login layout to the panels content area
		this._panel.addContent(this._loginLayout);
		
		this._viewContentLayout.addContent(this._aboutButton);
		this._viewContentLayout.addContent(this._panel);
		this._viewContentLayout.addContent(this._faqButton);
		
		return this._viewContentLayout;
	},

});