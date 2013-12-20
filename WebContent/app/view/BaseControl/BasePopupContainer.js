/*
 * Base Popup container used in the application. It adds functionality to the 
 * SAPUI5 overlay container ux3 component
 */
jQuery.sap.require("sap.ui.ux3.OverlayDialog");

sap.ui.ux3.OverlayDialog.extend("app.view.BaseControl.BasePopupContainer", {
	metadata : {                              
		properties : { 
			"title": "string",
			"keepAfterClose": "boolean",
			"skipClosePrompt": "boolean",
			"width": {type: "sap.ui.core.CSSSize",defaultValue:"80%"},
			"height": {type: "sap.ui.core.CSSSize",defaultValue:"95%"}
        },
        
        aggregations: {
        	"contentView": "sap.ui.core.mvc.View",
        	"leftTitlebarItems": "sap.ui.commons.ToolbarItem",
        	"rightTitlebarItems": "sap.ui.commons.ToolbarItem",
        	"leftToolbarItems": "sap.ui.commons.ToolbarItem",
        	"rightToolbarItems": "sap.ui.commons.ToolbarItem"
        },
        
        events: {
        	"save": {}
        }
    },
    
    renderer: {},
    
    getTitle: function() {
    	return this._title;
    },
    
    setTitle: function(title) {
    	this._title = title;
    	    	
    	return this;
    },
    
    //overriding the applySettings function to initialize the component
    applySettings: function() {
    	var me = this;
    	
    	if(sap.ui.ux3.OverlayDialog.prototype.applySettings) {
    		sap.ui.ux3.OverlayDialog.prototype.applySettings.apply(this,arguments);
    	}

    	this.setOpenButtonVisible(false);
	    	    
    	this._center = this.createCenter();
    	
    	//Creating the middle area
    	this._content = this.createContent();

    	//Creating the middle area
    	this._center = this.createCenter();
    	this._content = this.createContent();
    	this._center.createArea(sap.ui.commons.layout.BorderLayoutAreaTypes.center,this._content);
    	this._center.setAreaData(sap.ui.commons.layout.BorderLayoutAreaTypes.center,{size:"100%"});
    	
    	
    	this._title = this.createTitlebar();
    	this._toolbar = this.createToolbar();
    	
    	//The container's layout
    	this._borderLayout = new sap.ui.commons.layout.BorderLayout();
    	this.addContent(this._borderLayout);    	
    },
    
    
        
    /**
     * Add a SAPUI5 view to the overlay container's layout
     * @param content {sap.ui.core.mvc.View} the view to add
     */
    addContentView: function(content) {
    	var me = this;
    	
    	if(this._content) {
        	this._content.addContent(content);    		
    	}
    	else {
    		//If add content is called before apply settings we defer adding the content
    		if(!this._deferredContent) {
    			this._deferredContent = [];
    		}
    		
    		this._deferredContent.push(content);
    	}
    	
    	//Setting the toolbar and titlebar items when provided by the content view itself
    	if(content && content.getLeftTitlebarItems) {
    		content.getLeftTitlebarItems().forEach(function(item){
    			me.addLeftTitlebarItem(item);	
    		});
    	}

    	if(content && content.getRightTitlebarItems) {
    		content.getRightTitlebarItems().forEach(function(item){
    			me.addRightTitlebarItem(item);	
    		});
    	}
    	
    	if(content && content.getLeftToolbarItems) {
    		content.getLeftToolbarItems().forEach(function(item){
    			me.addLeftToolbarItem(item);
    		});
    	}
    	
    	if(content && content.getRightToolbarItems) {
    		content.getRightToolbarItems().forEach(function(item){
    			me.addRightToolbarItem(item);
    		});
    	}
    	
    	if(content && content.getTitle) {
    		 this.setTitle(content.getTitle());
    	}
    	    	
    	if(content && content.getSaveButton) {
    		content.getSaveButton().attachPress(function(){
    			this.fireSave();
    		},this);
    	}
    },

    /**
     * Create a scrollbar for the scrollable area in the overlay container
     */
    createScrollBar: function() {
    	var sb = new sap.ui.commons.layout.AbsoluteLayout({
    		width: "5px",
    		height: "100%"
    	});
    	
    	this._scrollBar = new sap.ui.core.ScrollBar();
    	this._scrollBar.setVertical(true);
    	this._scrollBar.setSize("100%");
    	this._scrollBar.setScrollPosition(0);
    	this._scrollBar.setSteps(100);
        this._scrollBar.placeAt(sb.getId());    		
    	
    	return sb;
    },
        
    /**
     * Create the container's title bar
     * @returns {sap.ui.commons.Toolbar} 
     */
    createTitlebar: function() {
        
     },
    
    /**
     * Create the container's default layout
     * @returns {sap.ui.commons.layout.VerticalLayout}
     */
    createContent: function() {
    	var defaultLayout = new sap.ui.commons.layout.VerticalLayout();
    	defaultLayout.addStyleClass("sapRMContent");
    	return defaultLayout;
    },
    
    /**
     * Create the center area of the container 
     * @returns {sap.ui.commons.layout.BorderLayout}
     */
    createCenter: function() {
    	var defaultLayout = new sap.ui.commons.layout.BorderLayout();
    	defaultLayout.addStyleClass("sapRMCenter");
    	return defaultLayout;
    },
    
    /**
     * Create the container's bottom bar
     * @returns {sap.ui.commons.Toolbar}
     */
    createToolbar: function() {
    	
    }
    
});