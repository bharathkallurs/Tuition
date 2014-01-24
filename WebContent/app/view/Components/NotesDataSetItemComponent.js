jQuery.sap.declare("app.view.Components.NotesDataSetItemComponent");
sap.ui.core.Control.extend("app.view.Components.NotesDataSetItemComponent", {
    metadata : {
        aggregations : {
			"link" : {type : "sap.ui.commons.Link", multiple : false},
			"image" : {type : "sap.ui.commons.Image", multiple : false},
			"form" : {type : "sap.ui.commons.form.Form", multiple : false},
        }
    },

	renderer: function(rm, ctrl){
		rm.write("<div");
		rm.writeControlData(ctrl);
		rm.writeAttribute("class", "CustomItemLayout");
		rm.write("><div");
		rm.writeAttribute("class", "CustomItemLayoutInner");
		rm.write("><div");
		rm.writeAttribute("class", "CustomItemLayoutTitle");
		rm.write(">");
		rm.renderControl(ctrl.getImage());
		rm.write("<div>");
		rm.renderControl(ctrl.getLink());
		rm.write("</div></div><div");
		rm.writeAttribute("class", "CustomItemLayoutCntnt");
		rm.write(">");
		rm.renderControl(ctrl.getForm());
		rm.write("</div></div></div>");
    },
    
    onBeforeRendering : function(){
    	if(this.resizeTimer){
    		clearTimeout(this.resizeTimer);
    		this.resizeTimer = null;
    	}
    },
    
    onAfterRendering : function(){
    	var $This = this.$();
    	if($This.parent().parent().hasClass("sapUiUx3DSSVSingleRow")){
    		this._resize();
    	}else{
    		$This.addClass("CustomItemLayoutSmall");
    	}
    },
    
    _resize: function(){
    	if(!this.getDomRef()){
    		return;
    	}
    	var $This = this.$();
    	if($This.outerWidth() >= 440){
    		$This.removeClass("CustomItemLayoutSmall").addClass("CustomItemLayoutLarge");
    	}else{
    		$This.removeClass("CustomItemLayoutLarge").addClass("CustomItemLayoutSmall");
    	}
    	setTimeout(jQuery.proxy(this._resize, this), 300);
    }
});