jQuery.sap.require("app.view.Components.NotesDataSetItemComponent");
sap.ui.jsview("app.view.NotesList", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf app.view.NotesList
	*/ 
	
	/*
	 * get the controller name 
	 * @memberOf {app.view.NotesList}
	 */
	getControllerName : function() {
		return "app.controller.NotesList";
	},
	
	/*
	 * get the Notes Data set component
	 * @memberOf {app.view.NotesList}
	 */
	getNotesDataSetComponent: function() {
		return this._notesDataSet;
	},
	
	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf app.view.NotesList
	*/ 
	createContent : function(oController) {
		this._viewContentLayout = new sap.ui.commons.layout.VerticalLayout();
		this._viewContentLayout.setWidth("100%");
		this._notesDataSet = new sap.ui.ux3.DataSet({
	        items: {
	                path: "/notes",
	                template: new sap.ui.ux3.DataSetItem({
	                        title : "Some title"
	                })
	        },
	        views: [
	                new sap.ui.ux3.DataSetSimpleView({
	                        name: "Floating, non-responsive View",
	                        icon: "images/tiles.png",
	                        iconHovered: "images/tiles2_hover.png",
	                        iconSelected: "images/tiles2_hover.png",
	                        floating: true,
	                        responsive: false,
	                        itemMinWidth: 0,
	                        template: this.createTemplate()
	                })
	        ],
	        search: function search(oEvent) {
	                var sQuery = oEvent.getParameter("query");
	                var oBinding = this._notesDataSet.getBinding("items");
	                oBinding.filter(!sQuery ? [] : [new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, sQuery)]);
	                this._notesDataSet.setLeadSelection(-1);
	        },
	        selectionChanged: function search(oEvent) {
	                var idx = oEvent.getParameter("newLeadSelectedIndex");
	                alert("Product '"+this._notesDataSet.getItems()[idx].getTitle()+"' selected.'");
	        }
	    });
		this._viewContentLayout.addContent(this._notesDataSet);
		return this._viewContentLayout;
	},
	
    createTemplate:function(){
		var c = sap.ui.commons;
		return new app.view.Components.NotesDataSetItemComponent({
			link: new c.Link({text: "{title}"}),
			image: new c.Image({src: "{image}"}),
			form: new c.form.Form({
				width: "100%",
				layout: new c.form.GridLayout(),
				formContainers: [
					new c.form.FormContainer({
						formElements: [
							new c.form.FormElement({
								label: new c.Label({text: "subTitle_1", layoutData: new c.form.GridElementData({hCells: "5"})}),
								fields: [new c.TextField({value: "{subTitle_1}", editable: false})]
							}),
							new c.form.FormElement({
								label: new c.Label({text: "subTitle_2", layoutData: new c.form.GridElementData({hCells: "5"})}),
								fields: [new c.TextField({value: "{subTitle_2}", editable: false})]
							}),
							new c.form.FormElement({
								label: new c.Label({text: "subTitle_3", layoutData: new c.form.GridElementData({hCells: "5"})}),
								fields:[new c.TextField({value: "{subTitle_3}", editable: false})]
							})
						]
					})
				]
			})
		});
	}

});