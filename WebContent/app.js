//
// Application.
// @abstract The main Application class.
//
jQuery.sap.declare("Application");

jQuery.sap.require("sap.ui.app.Application");

sap.ui.app.Application.extend("Application", {
	main: function(){
		var rootContainer = this.getRoot();
		var view = sap.ui.view({viewName:"app.view.MainShellView", type:sap.ui.core.mvc.ViewType.JS});
		view.placeAt(rootContainer);
		
		this.runPavantest();
	},
	
	runPavantest: function(){
		var videoview = sap.ui.view({viewName:"app.view.Popup.VideoPopup", type:sap.ui.core.mvc.ViewType.JS});
		var sideBaritems= videoview.getSideBarItems();
		jQuery.sap.require("app.view.BaseControl.BasePopupContainer");
		var overlayContainer = new app.view.BaseControl.BasePopupContainer({
    		contentView: videoview
    	});
		overlayContainer.addSideBarItems(sideBaritems);
		overlayContainer.open();	
    },
	
	runAvitest: function(){
		
	},
	
	runBharathtest:function(){
		
	}
});