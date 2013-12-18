/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.LocaleData");jQuery.sap.require("sap.ui.base.Object");jQuery.sap.require("sap.ui.core.Locale");jQuery.sap.require("sap.ui.core.Configuration");(function(){sap.ui.base.Object.extend("sap.ui.core.LocaleData",{constructor:function(L){sap.ui.base.Object.apply(this);this.mData=g(L)},_get:function(k){return this.mData[k]},getOrientation:function(){return this._get("orientation")},getLanguages:function(){return this._get("languages")},getScripts:function(){return this._get("scripts")},getTerritories:function(){return this._get("territories")},getMonths:function(w){return this._get("months-format-"+w)},getMonthsStandAlone:function(w){return this._get("months-standAlone-"+w)},getDays:function(w){return this._get("days-format-"+w)},getDaysStandAlone:function(w){return this._get("days-standAlone-"+w)},getQuarters:function(w){return this._get("quarters-format-"+w)},getDayPeriods:function(w){return this._get("dayPeriods-format-"+w)},getDatePattern:function(s){return this._get("dateFormat-"+s)},getTimePattern:function(s){return this._get("timeFormat-"+s)},getDateTimePattern:function(s){return this._get("dateTimeFormat-"+s)},getNumberSymbol:function(t){return this._get("symbols-latn-"+t)},getFirstDayOfWeek:function(){return this._get("weekData-firstDay")},getWeekendStart:function(){return this._get("weekData-weekendStart")},getWeekendEnd:function(){return this._get("weekData-weekendEnd")},getIntervalPattern:function(i){return(i&&this._get("intervalFormat-"+i))||this._get("intervalFormatFallback")}});var M={"orientation":"left-to-right","languages":{},"scripts":{},"territories":{},"dateFormat-full":"EEEE, MMMM d, y","dateFormat-long":"MMMM d, y","dateFormat-medium":"MMM d, y","dateFormat-short":"M/d/yy","timeFormat-full":"h:mm:ss a zzzz","timeFormat-long":"h:mm:ss a z","timeFormat-medium":"h:mm:ss a","timeFormat-short":"h:mm a","dateTimeFormat-full":"{1} {0}","dateTimeFormat-long":"{1} {0}","dateTimeFormat-medium":"{1} {0}","dateTimeFormat-short":"{1} {0}","months-format-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"months-format-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"months-format-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"months-standAlone-abbreviated":["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"months-standAlone-wide":["January","February","March","April","May","June","July","August","September","October","November","December"],"months-standAlone-narrow":["1","2","3","4","5","6","7","8","9","10","11","12"],"days-format-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"days-format-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"days-format-narrow":["S","M","T","W","T","F","S"],"days-standAlone-abbreviated":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"days-standAlone-wide":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"days-standAlone-narrow":["S","M","T","W","T","F","S"],"quarters-format-narrow":["1","2","3","4"],"quarters-format-abbreviated":["Q1","Q2","Q3","Q4"],"quarters-format-wide":["1st quarter","2nd quarter","3rd quarter","4th quarter"],"quarters-standAlone-narrow":["1","2","3","4"],"symbols-latn-decimal":".","symbols-latn-group":",","symbols-latn-plusSign":"+","symbols-latn-minusSign":"-","dayPeriods-format-narrow":["AM","PM"],"dayPeriods-format-wide":["AM","PM"],"dayPeriods-format-abbreviated":["AM","PM"],"weekData-minDays":4,"weekData-firstDay":1,"weekData-weekendStart":6,"weekData-weekendEnd":0,"intervalFormatFallback":"{0} – {1}"};var a={"iw":"he","ji":"yi","in":"id","sh":"sr"};var b=(function(){var L="ar,ar_AE,ar_EG,ar_SA,bg,bg_BG,br,ca_ES,cs,cs_CZ,da,da_DK,de,de_AT,de_BE,de_CH,de_DE,de_LU,el,el_CY,el_GR,en,en_AU,en_CA,en_GB,en_HK,en_IE,en_IN,en_NZ,en_SG,en_US,en_ZA,es,es_AR,es_BO,es_CL,es_CO,es_ES,es_MX,es_PE,es_UY,es_VE,et,et_EE,fa,fa_IR,fi,fi_FI,fr,fr_BE,fr_CA,fr_CH,fr_FR,fr_LU,he,he_IL,hi,hi_IN,hr,hr_HR,hu,hu_HU,id,id_ID,it,it_CH,it_IT,ja,ja_JP,ko,ko_KR,lt,lt_LT,lv,lv_LV,nb,nb_NO,nl,nl_BE,nl_NL,nn,nn_NO,pl,pl_PL,pt,pt_BR,pt_PT,ro,ro_RO,ru,ru_RU,ru_UA,sk_SK,sl,sl_SI,sr,sv,sv_SE,th,th_TH,tr,tr_TR,uk,uk_UA,vi,vi_VN,zh_CN,zh_HK,zh_SG,zh_TW".split(","),i,r;if(L.length!=1||L[0].indexOf("@")<0){r={};for(i=0;i<L.length;i++){r[L[i]]=true}}return r}());var l={};function g(L){var s=L.getLanguage()||"",S=L.getScript()||"",r=L.getRegion()||"",d;function c(i){var u,R;if(!l[i]&&(!b||b[i]===true)){u=sap.ui.resource("sap.ui.core.cldr",i+".json");R=jQuery.sap.sjax({url:u,dataType:"json"});if(R.success){l[i]=R.data}}return l[i]}s=(s&&a[s])||s;if(s==="zh"&&!r){if(S==="Hans"){r="CN"}else if(S==="Hant"){r="TW"}}var i=s+"_"+r;if(s&&r){d=c(i)}if(!d&&s){d=c(s)}l[i]=d||M;return l[i]};sap.ui.core.LocaleData.extend("sap.ui.core.CustomLocaleData",{constructor:function(L){sap.ui.core.LocaleData.apply(this,arguments);this.mCustomData=sap.ui.getCore().getConfiguration().getFormatSettings().getCustomLocaleData()},_get:function(i){return this.mCustomData[i]||this.mData[i]}});sap.ui.core.LocaleData.getInstance=function(L){return L.hasPrivateUseSubtag("sapufmt")?new sap.ui.core.CustomLocaleData(L):new sap.ui.core.LocaleData(L)}}());
