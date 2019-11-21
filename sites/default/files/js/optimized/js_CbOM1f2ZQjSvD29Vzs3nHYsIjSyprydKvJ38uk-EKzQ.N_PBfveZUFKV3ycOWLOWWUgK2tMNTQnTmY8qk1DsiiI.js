/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.on(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}})});
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/assets/vendor/jquery.ui/ui/disable-selection-min.js. */