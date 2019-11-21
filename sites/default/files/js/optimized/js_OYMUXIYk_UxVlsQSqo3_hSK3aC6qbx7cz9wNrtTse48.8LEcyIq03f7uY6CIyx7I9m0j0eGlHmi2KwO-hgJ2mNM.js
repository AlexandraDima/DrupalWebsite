/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/assets/vendor/jquery.ui/ui/unique-id-min.js. */
/*! jQuery UI - v1.12.1 - 2017-03-31
* http://jqueryui.com
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(a){"function"==typeof define&&define.amd?define(["jquery","./version"],a):a(jQuery)}(function(a){return a.fn.extend({uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}})});
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/assets/vendor/jquery.ui/ui/unique-id-min.js. */