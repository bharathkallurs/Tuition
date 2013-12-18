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
	}
});