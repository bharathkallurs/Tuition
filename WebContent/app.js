//
// Application.
// @abstract The main Application class.
//
jQuery.sap.declare("Application");

jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {
	main: function(){

		var view = sap.ui.view({viewName:"app.view.LoginPage.LoginPage", type:sap.ui.core.mvc.ViewType.JS});
		var rootContainer = this.getRoot();
		view.placeAt(rootContainer);
	},
	
	/*
	 * setting the main shell view once the sigining in is done. there might be a 
	 * better way of doing this. will have to check 
	 */
	setMainShellView:function(){
		var view = sap.ui.view({viewName:"app.view.MainShellView", type:sap.ui.core.mvc.ViewType.JS});
		var rootContainer = this.getRoot();
		view.placeAt(rootContainer,"only");
	},
	
	runPavantest: function(){
		var view = sap.ui.view({viewName:"app.view.Popup.SignUpPopup", type:sap.ui.core.mvc.ViewType.JS});
		var sideBaritems= view.getSideBarItems();
		jQuery.sap.require("app.view.BaseControl.BasePopupContainer");
		var overlayContainer = new app.view.BaseControl.BasePopupContainer({
    		contentView: view
    	});
		overlayContainer.addSideBarItems(sideBaritems);
		overlayContainer.open();	
    },
	
	runAvitest: function(){
		
		
	},
	
	runBharathtest:function(){
		
	}
});