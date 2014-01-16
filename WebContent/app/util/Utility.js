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
		//if none of the fields were empty then return true
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
	},
	
	/*
	 * Authentication method 
	 * @param {sap.ui.Model.Json} the json model which has both the username and password
	 * @param {success} the sucess callback
	 * @param {failure} the failure callback
	 */
	callAuthentication:function(loginModel,success,failure){
		var loginData= loginModel.getData();
		var username= loginData.values.UserName;
		var password=loginData.values.Password;
		
		var onLoadSuccess = function(response) {
			debugger;
			//Call the success callback if any
			if(success) {
				success(response);
			}
		};
		
		//Load failure callback
		var onLoadFailure = function(response) {
			debugger;
		    //Call the failure callback
			if(failure) {
				failure(response);
			}
		};
		var csrftoken = this._getCookie('csrftoken');
		
		$.ajaxSetup({
		    beforeSend: function(xhr, settings) {
		       //TODO : Only set crsfttoken if url is same-origin url ) url could be relative or scheme relative or absolute )
		       xhr.setRequestHeader("X-CSRFToken", csrftoken);
		       xhr.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password));
		   }
		});
		
		//TODO give the proper URL and test it out 
		$.ajax
		({
		  type: "GET",
		  url: "http://localhost:8000",
		  dataType: 'json',
		  async: false,
		  success:onLoadSuccess,
		  error:onLoadFailure
		});
	},
	
	/*
	 * generates the cookie required 
	 * @param {String} 
	 */
	_getCookie:function(name) {
	    var cookieValue = null;
	    if (document.cookie && document.cookie != '') {
	        var cookies = document.cookie.split(';');
	        for (var i = 0; i < cookies.length; i++) {
	            var cookie = jQuery.trim(cookies[i]);
	            // Does this cookie string begin with the name we want?
	            if (cookie.substring(0, name.length + 1) == (name + '=')) {
	                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
	                break;
	            }
	        }
	    }
	    return cookieValue;
	}
};
