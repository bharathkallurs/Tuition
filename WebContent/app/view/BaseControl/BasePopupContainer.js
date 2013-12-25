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
        	"contentView": "sap.ui.core.mvc.View"
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
    	
    	//Adding any content that was added before applySettings was called
    	if(this._deferredContent) {
    		for(var i=0; i < this._deferredContent.length; ++i) {
    			this._content.addContent(this._deferredContent[i]);
    		}
    	}
	    
    	this._content.getContent().forEach(function(content){
        	if(content.setOverlayContainer) {
        		content.setOverlayContainer(me);	
        	}
        	
        	//If the user didn't define this function we add it to the view
        	if(!content.getOverlayContainer) {
        		content.getOverlayContainer = function() {
        			return me;
        		};
        	}
    	});
    	
    	
    	
    	this._title = this.createTitlebar();
    	this._toolbar = this.createToolbar();
    	
    	this._content.addStyleClass("tutPopupContent");
    	
    	this._horizontalLayout= new sap.ui.commons.layout.HorizontalLayout({
    		content:[this._toolbar,this._content]
    	});
    	
    	this.addContent(this._horizontalLayout);
    	this.addContent(this._toolbar);    	
    	this.addContent(this._content);
    },
    
    
    /*
     * add the side bar contents passed as parameters 
     * @param sidebarItems {array}
     */
    addSideBarItems: function (items) {
       if(items){
    	 for(var i=0;i<items.length;i++){
    	      var item = items[i];
    	      this._toolbar.addContent(item);
         }
       }
    },
    
        
    /**
     * Add a SAPUI5 view to the overlay container's layout
     * @param content {sap.ui.core.mvc.View} the view to add
     */
    addContentView: function(content) {
    	var me = this;
    	this._toolbar = this.createToolbar();
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
    	return defaultLayout;
    },
    
    /**
     * Create the center area of the container 
     * @returns {sap.ui.commons.layout.BorderLayout}
     */
    createCenter: function() {
    	var defaultLayout = new sap.ui.commons.layout.BorderLayout();
    	return defaultLayout;
    },
    
    /**
     * Create the container's bottom bar
     * @returns {sap.ui.commons.layout.VerticalLayout}
     */
    createToolbar: function() {
    	this.sidetoolBar= new sap.ui.commons.layout.VerticalLayout();
    	this.sidetoolBar.addStyleClass("tutSideToolBar");
    	return this.sidetoolBar;
    }
    
});
