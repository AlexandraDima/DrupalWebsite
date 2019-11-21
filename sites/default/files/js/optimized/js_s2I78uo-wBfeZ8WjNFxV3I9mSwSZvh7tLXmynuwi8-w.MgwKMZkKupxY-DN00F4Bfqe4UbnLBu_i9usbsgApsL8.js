/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/misc/tableheader.js. */
/**
 * @file
 * Overrides core/misc/vertical-tabs.js.
 */

(function ($, Drupal) {
  "use strict";

  var createSticky = Drupal.TableHeader.prototype.createSticky;
  Drupal.TableHeader.prototype.createSticky = function () {
    createSticky.call(this);
    this.$stickyTable.addClass(this.$originalTable.attr('class')).removeClass('sticky-enabled sticky-table');
  };

})(window.jQuery, window.Drupal);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/misc/tableheader.js. */