jQuery.sap.require("app.util.Utility");
sap.ui.controller("app.controller.NotesList", {

    /**
    * Called when a controller is instantiated and its View controls (if available) are already created.
    * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
    * @memberOf app.controller.NotesList
    */
	onInit: function() {
		if(!this.getView().getModel("Notes")) {
			var model = new sap.ui.model.json.JSONModel();
			this.getView().setModel(model,"Notes");
		}
		//TODO:Initialize the real data and model now
		var data = {notes:[]};
		var aTitles = ["Notes_1", "Notes_2", "Notes_3", "Notes_4",
		               "Notes_5"];
		for(var i=0; i<aTitles.length; i++){
			var sTitle = aTitles[i];
			var oNote = {id: ""+i, subTitle_1:"Subtitle 1 goes here", subTitle_2: "Subtitle 1 goes here",
					title: sTitle, subTitle_3:"Subtitle 3 goes here" };
			oNote.image = "resources-project/images/note-icon.png";
			data.notes.push(oNote);
		}
		var view= this.getView();
		var notesDataSet= view.getNotesDataSetComponent();
    	var notesModel= view.getModel("Notes");
    	notesModel.setData(data);
    	notesDataSet.setModel(notesModel);
    },
    
    /*
     * search function of the dataset component
     * @param {Event} the event passed by the component itself
     */
    notesDataSetSearch:function(oEvent){
    	var sQuery = oEvent.getParameter("query");
        var oBinding =this.getBinding("items");
        oBinding.filter(!sQuery ? [] : [new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, sQuery)]);
        this.setLeadSelection(-1);
    },
    
    /*
     * click handler for the dataSetitem component
     * @param {Event} the event passed by the component itself
     */
    notesDataSetComponentClick:function(oEvent){
    	var idx = oEvent.getParameter("newLeadSelectedIndex");
        alert("Product '"+this.getItems()[idx].getTitle()+"' selected.'");
    },
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf app.controller.NotesList
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf app.controller.NotesList
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf app.controller.NotesList
*/
//	onExit: function() {
//
//	}

});