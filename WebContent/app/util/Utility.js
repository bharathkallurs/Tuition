/**
 * Utility Class
 * 
 */
jQuery.sap.declare("app.util.Utility");
jQuery.sap.require("sap.ui.commons.MessageBox");

app.util.Utility = {
		
	/*
	 * validate if all the fields sent as parameters are filled with data
	 * @param {Array} array of fields which is to be validated
	 * @returns {Boolean} 'true' if all the fields are non-empty, 'false' if one of them is empty   
	 */
	validateFields:function(fieldArray){
		for(var i=0;i<fieldArray.length;i++){
			var field=fieldArray[i];
			if(field.getValue() == "")
				//if even one of the fields is empty return false 
				return false;
		}
		//if none of the fileds were empty then return true
		return true;
	},
	
	/*
	 * show message box 
	 * @param {String} the text which is to be show 
	 * @praram {String} "1" represents warning symbol is shown , "2" represents error symbol is shown
	 */
	showMessageBox:function(messageBoxString,imageFlag){
		
		if(imageFlag=="1"){
		sap.ui.commons.MessageBox.show(
				messageBoxString,
                sap.ui.commons.MessageBox.Icon.WARNING,
                "Warning",
                [sap.ui.commons.MessageBox.Action.OK]);
		}
		else{
			sap.ui.commons.MessageBox.show(
					messageBoxString,
	                sap.ui.commons.MessageBox.Icon.ERROR,
	                "Error",
	                [sap.ui.commons.MessageBox.Action.OK]);
	    }
	}
	
};
