/** @license
 * crossroads <http://millermedeiros.github.com/crossroads.js/>
 * Author: Miller Medeiros | MIT License
 * v0.12.0 (2013/01/21 13:47)
 */
(function(){var f=function(s){var c,_,U;_=(/t(.+)?/).exec('t')[1]==='';function a(i,v){if(i.indexOf){return i.indexOf(v)}else{var n=i.length;while(n--){if(i[n]===v){return n}}return-1}}function b(l,m){var i=a(l,m);if(i!==-1){l.splice(i,1)}}function d(v,i){return'[object '+i+']'===Object.prototype.toString.call(v)}function e(v){return d(v,'RegExp')}function g(v){return d(v,'Array')}function h(v){return typeof v==='function'}function t(v){var r;if(v===null||v==='null'){r=null}else if(v==='true'){r=true}else if(v==='false'){r=false}else if(v===U||v==='undefined'){r=U}else if(v===''||isNaN(v)){r=v}else{r=parseFloat(v)}return r}function j(v){var n=v.length,r=[];while(n--){r[n]=t(v[n])}return r}function k(i,l){var q=(i||'').replace('?','').split('&'),n=q.length,o={},m,v;while(n--){m=q[n].split('=');v=l?t(m[1]):m[1];o[m[0]]=(typeof v==='string')?decodeURIComponent(v):v}return o}function C(){this.bypassed=new s.Signal();this.routed=new s.Signal();this._routes=[];this._prevRoutes=[];this._piped=[];this.resetState()}C.prototype={greedy:false,greedyEnabled:true,ignoreCase:true,ignoreState:false,shouldTypecast:false,normalizeFn:null,resetState:function(){this._prevRoutes.length=0;this._prevMatchedRequest=null;this._prevBypassedRequest=null},create:function(){return new C()},addRoute:function(p,i,l){var r=new R(p,i,l,this);this._sortedInsert(r);return r},removeRoute:function(r){b(this._routes,r);r._destroy()},removeAllRoutes:function(){var n=this.getNumRoutes();while(n--){this._routes[n]._destroy()}this._routes.length=0},parse:function(r,l){r=r||'';l=l||[];if(!this.ignoreState&&(r===this._prevMatchedRequest||r===this._prevBypassedRequest)){return}var m=this._getMatchedRoutes(r),i=0,n=m.length,o;if(n){this._prevMatchedRequest=r;this._notifyPrevRoutes(m,r);this._prevRoutes=m;while(i<n){o=m[i];o.route.matched.dispatch.apply(o.route.matched,l.concat(o.params));o.isFirst=!i;this.routed.dispatch.apply(this.routed,l.concat([r,o]));i+=1}}else{this._prevBypassedRequest=r;this.bypassed.dispatch.apply(this.bypassed,l.concat([r]))}this._pipeParse(r,l)},_notifyPrevRoutes:function(m,r){var i=0,p;while(p=this._prevRoutes[i++]){if(p.route.switched&&this._didSwitch(p.route,m)){p.route.switched.dispatch(r)}}},_didSwitch:function(r,m){var l,i=0;while(l=m[i++]){if(l.route===r){return false}}return true},_pipeParse:function(r,l){var i=0,m;while(m=this._piped[i++]){m.parse(r,l)}},getNumRoutes:function(){return this._routes.length},_sortedInsert:function(r){var i=this._routes,n=i.length;do{--n}while(i[n]&&r._priority<=i[n]._priority);i.splice(n+1,0,r)},_getMatchedRoutes:function(r){var i=[],l=this._routes,n=l.length,m;while(m=l[--n]){if((!i.length||this.greedy||m.greedy)&&m.match(r)){i.push({route:m,params:m._getParamsArray(r)})}if(!this.greedyEnabled&&i.length){break}}return i},pipe:function(o){this._piped.push(o)},unpipe:function(o){b(this._piped,o)},toString:function(){return'[crossroads numRoutes:'+this.getNumRoutes()+']'}};c=new C();c.VERSION='0.12.0';c.NORM_AS_ARRAY=function(r,v){return[v.vals_]};c.NORM_AS_OBJECT=function(r,v){return[v]};function R(p,i,l,r){var m=e(p),n=r.patternLexer;this._router=r;this._pattern=p;this._paramsIds=m?null:n.getParamIds(p);this._optionalParamsIds=m?null:n.getOptionalParamsIds(p);this._matchRegexp=m?p:n.compilePattern(p,r.ignoreCase);this.matched=new s.Signal();this.switched=new s.Signal();if(i){this.matched.add(i)}this._priority=l||0}R.prototype={greedy:false,rules:void(0),match:function(r){r=r||'';return this._matchRegexp.test(r)&&this._validateParams(r)},_validateParams:function(r){var i=this.rules,v=this._getParamsObject(r),l;for(l in i){if(l!=='normalize_'&&i.hasOwnProperty(l)&&!this._isValidParam(r,l,v)){return false}}return true},_isValidParam:function(r,p,v){var i=this.rules[p],l=v[p],m=false,n=(p.indexOf('?')===0);if(l==null&&this._optionalParamsIds&&a(this._optionalParamsIds,p)!==-1){m=true}else if(e(i)){if(n){l=v[p+'_']}m=i.test(l)}else if(g(i)){if(n){l=v[p+'_']}m=this._isValidArrayRule(i,l)}else if(h(i)){m=i(l,r,v)}return m},_isValidArrayRule:function(i,v){if(!this._router.ignoreCase){return a(i,v)!==-1}if(typeof v==='string'){v=v.toLowerCase()}var n=i.length,l,m;while(n--){l=i[n];m=(typeof l==='string')?l.toLowerCase():l;if(m===v){return true}}return false},_getParamsObject:function(r){var i=this._router.shouldTypecast,v=this._router.patternLexer.getParamValues(r,this._matchRegexp,i),o={},n=v.length,p,l;while(n--){l=v[n];if(this._paramsIds){p=this._paramsIds[n];if(p.indexOf('?')===0&&l){o[p+'_']=l;l=k(l,i);v[n]=l}if(_&&l===''&&a(this._optionalParamsIds,p)!==-1){l=void(0);v[n]=l}o[p]=l}o[n]=l}o.request_=i?t(r):r;o.vals_=v;return o},_getParamsArray:function(r){var n=this.rules?this.rules.normalize_:null,p;n=n||this._router.normalizeFn;if(n&&h(n)){p=n(r,this._getParamsObject(r))}else{p=this._getParamsObject(r).vals_}return p},interpolate:function(r){var i=this._router.patternLexer.interpolate(this._pattern,r);if(!this._validateParams(i)){throw new Error('Generated string doesn\'t validate against `Route.rules`.')}return i},dispose:function(){this._router.removeRoute(this)},_destroy:function(){this.matched.dispose();this.switched.dispose();this.matched=this.switched=this._pattern=this._matchRegexp=null},toString:function(){return'[Route pattern:"'+this._pattern+'", numListeners:'+this.matched.getNumListeners()+']'}};C.prototype.patternLexer=(function(){var E=/[\\.+*?\^$\[\](){}\/'#]/g,L=/^\/|\/$/g,i=/\/$/g,P=/(?:\{|:)([^}:]+)(?:\}|:)/g,T={'OS':{rgx:/([:}]|\w(?=\/))\/?(:|(?:\{\?))/g,save:'$1{{id}}$2',res:'\\/?'},'RS':{rgx:/([:}])\/?(\{)/g,save:'$1{{id}}$2',res:'\\/'},'RQ':{rgx:/\{\?([^}]+)\}/g,res:'\\?([^#]+)'},'OQ':{rgx:/:\?([^:]+):/g,res:'(?:\\?([^#]*))?'},'OR':{rgx:/:([^:]+)\*:/g,res:'(.*)?'},'RR':{rgx:/\{([^}]+)\*\}/g,res:'(.+)'},'RP':{rgx:/\{([^}]+)\}/g,res:'([^\\/?]+)'},'OP':{rgx:/:([^:]+):/g,res:'([^\\/?]+)?\/?'}},l=1,S=2,m=3,n=l;function p(){var y,z;for(y in T){if(T.hasOwnProperty(y)){z=T[y];z.id='__CR_'+y+'__';z.save=('save'in z)?z.save.replace('{{id}}',z.id):z.id;z.rRestore=new RegExp(z.id,'g')}}}p();function o(y,z){var A=[],B;y.lastIndex=0;while(B=y.exec(z)){A.push(B[1])}return A}function q(y){return o(P,y)}function r(y){return o(T.OP.rgx,y)}function u(y,z){y=y||'';if(y){if(n===l){y=y.replace(L,'')}else if(n===m){y=y.replace(i,'')}y=v(y,'rgx','save');y=y.replace(E,'\\$&');y=v(y,'rRestore','res');if(n===l){y='\\/?'+y}}if(n!==S){y+='\\/?'}return new RegExp('^'+y+'$',z?'i':'')}function v(y,z,A){var B,D;for(D in T){if(T.hasOwnProperty(D)){B=T[D];y=y.replace(B[z],B[A])}}return y}function w(y,z,A){var B=z.exec(y);if(B){B.shift();if(A){B=j(B)}}return B}function x(y,z){if(typeof y!=='string'){throw new Error('Route pattern should be a string.')}var A=function(B,D){var F;D=(D.substr(0,1)==='?')?D.substr(1):D;if(z[D]!=null){if(typeof z[D]==='object'){var G=[];for(var H in z[D]){G.push(encodeURI(H+'='+z[D][H]))}F='?'+G.join('&')}else{F=String(z[D])}if(B.indexOf('*')===-1&&F.indexOf('/')!==-1){throw new Error('Invalid value "'+F+'" for segment "'+B+'".')}}else if(B.indexOf('{')!==-1){throw new Error('The segment '+B+' is required.')}else{F=''}return F};if(!T.OS.trail){T.OS.trail=new RegExp('(?:'+T.OS.id+')+$')}return y.replace(T.OS.rgx,T.OS.save).replace(P,A).replace(T.OS.trail,'').replace(T.OS.rRestore,'/')}return{strict:function(){n=S},loose:function(){n=l},legacy:function(){n=m},getParamIds:q,getOptionalParamsIds:r,getParamValues:w,compilePattern:u,interpolate:x}}());return c};if(typeof define==='function'&&define.amd){define(['signals'],f)}else if(typeof module!=='undefined'&&module.exports){module.exports=f(require('signals'))}else{window['crossroads']=f(window['signals'])}}());
