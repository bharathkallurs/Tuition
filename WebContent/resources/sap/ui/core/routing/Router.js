/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * (c) Copyright 2009-2013 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.routing.Router");jQuery.sap.require("sap.ui.base.EventProvider");jQuery.sap.require("sap.ui.base.ManagedObject");jQuery.sap.require("sap.ui.thirdparty.signals");jQuery.sap.require("sap.ui.thirdparty.crossroads");jQuery.sap.require("sap.ui.core.routing.Route");jQuery.sap.require("sap.ui.core.routing.HashChanger");(function(){var r={};sap.ui.base.EventProvider.extend("sap.ui.core.routing.Router",{constructor:function(R,c,o){sap.ui.base.EventProvider.apply(this);this._oConfig=c;this._oRouter=crossroads.create();this._oRouter.ignoreState=true;this._oRoutes={};this._oViews={};this._oOwner=o;var t=this;if(!R){R={}}if(jQuery.isArray(R)){var a=R;R={};jQuery.each(a,function(i,b){R[b.name]=b})}jQuery.each(R,function(s,b){if(b.name==undefined){b.name=s}t.addRoute(b)})},metadata:{publicMethods:["initialize","getURL","register"]}});sap.ui.core.routing.Router.M_EVENTS={RouteMatched:"routeMatched",RoutePatternMatched:"routePatternMatched",ViewCreated:"viewCreated"};sap.ui.core.routing.Router.prototype.addRoute=function(c,p){if(!c.name){jQuery.sap.log.error("A name has to be specified for every route")}if(this._oRoutes[c.name]){jQuery.sap.log.error("Route with name "+c.name+" already exists")}this._oRoutes[c.name]=new sap.ui.core.routing.Route(this,c,p)};sap.ui.core.routing.Router.prototype.parse=function(n,o){this._oRouter.parse(n)};sap.ui.core.routing.Router.prototype.initialize=function(){var t=this,h=this.oHashChanger=sap.ui.core.routing.HashChanger.getInstance();this.fnHashChanged=jQuery.proxy(function(e){t.parse(e.getParameter("newHash"),e.getParameter("oldHash"))},this);h.attachEvent("hashChanged",this.fnHashChanged);if(!h.init()){this.parse(h.getHash())}return this};sap.ui.core.routing.Router.prototype.destroy=function(){sap.ui.base.EventProvider.prototype.destroy.apply(this);if(!this.fnHashChanged){jQuery.sap.log.warning("Router is not initialized.");return this}this._oOwner=null;this._oRouter.removeAllRoutes();this._oRouter=null;this.oHashChanger.detachEvent("hashChanged",this.fnHashChanged);return this};sap.ui.core.routing.Router.prototype.getURL=function(n,p){if(p===undefined){p={}}var R=this._oRoutes[n];if(!R){jQuery.sap.log.warning("Route with name "+n+" does not exist");return}return R.getURL(p)};sap.ui.core.routing.Router.prototype.getView=function(v,V){if(!v){jQuery.sap.log.error("A name for the view has to be defined")}if(!this._oViews[v]){var c=function(){return sap.ui.view({type:V,viewName:v,})};if(this._oOwner){var t=this;sap.ui.base.ManagedObject.runWithOwner(function(){t._oViews[v]=c()},this._oOwner)}else{this._oViews[v]=c()}this.fireViewCreated({view:this._oViews[v],viewName:v,type:V})}return this._oViews[v]};sap.ui.core.routing.Router.prototype.navTo=function(n,p,R){if(R){this.oHashChanger.replaceHash(this.getURL(n,p))}else{this.oHashChanger.setHash(this.getURL(n,p))}};sap.ui.core.routing.Router.prototype.attachRouteMatched=function(d,f,l){this.attachEvent("routeMatched",d,f,l);return this};sap.ui.core.routing.Router.prototype.detachRouteMatched=function(d,f,l){this.detachEvent("routeMatched",d,f,l);return this};sap.ui.core.routing.Router.prototype.fireRouteMatched=function(a){this.fireEvent("routeMatched",a);return this};sap.ui.core.routing.Router.prototype.attachViewCreated=function(d,f,l){this.attachEvent("viewCreated",d,f,l);return this};sap.ui.core.routing.Router.prototype.detachViewCreated=function(d,f,l){this.detachEvent("viewCreated",d,f,l);return this};sap.ui.core.routing.Router.prototype.fireViewCreated=function(a){this.fireEvent("viewCreated",a);return this};sap.ui.core.routing.Router.prototype.attachRoutePatternMatched=function(d,f,l){this.attachEvent("routePatternMatched",d,f,l);return this};sap.ui.core.routing.Router.prototype.detachRoutePatternMatched=function(d,f,l){this.detachEvent("routePatternMatched",d,f,l);return this};sap.ui.core.routing.Router.prototype.fireRoutePatternMatched=function(a){this.fireEvent("routePatternMatched",a);return this};sap.ui.core.routing.Router.prototype.register=function(n){r[n]=this;return this};sap.ui.core.routing.Router.getRouter=function(n){return r[n]}}());
