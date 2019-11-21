/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/modules/views_slideshow/modules/views_slideshow_cycle/js/formoptions.js. */

/**
 *  @file
 *  Javascript to enhance the views slideshow cycle form options.
 */

/**
 * This will set our initial behavior, by starting up each individual slideshow.
 */
(function ($) {
  
  // Since Drupal 7 doesn't support having a field based on one of 3 values of
  // a select box we need to add our own JavaScript handling.
  Drupal.behaviors.viewsSlideshowCycleAmountAllowedVisible = {
    attach: function (context) {
      
      // If necessary at start hide the amount allowed visible box.
      var type = $(":input[name='style_options[views_slideshow_cycle][pause_when_hidden_type]']").val();
      if (type == 'full') {
        $(":input[name='style_options[views_slideshow_cycle][amount_allowed_visible]']").parent().hide();
      }
      
      // Handle dependency on action advanced checkbox.
      $(":input[name='style_options[views_slideshow_cycle][action_advanced]']").change(function() {
        processValues('action_advanced');
      });
      
      // Handle dependency on pause when hidden checkbox.
      $(':input[name="style_options[views_slideshow_cycle][pause_when_hidden]"]').change(function() {
        processValues('pause_when_hidden');
      });
      
      // Handle dependency on pause when hidden type select box.
      $(":input[name='style_options[views_slideshow_cycle][pause_when_hidden_type]']").change(function() {
        processValues('pause_when_hidden_type');
      });
      
      // Process our dependencies.
      function processValues(field) {
        switch (field) {
          case 'action_advanced':
            if (!$(':input[name="style_options[views_slideshow_cycle][action_advanced]"]').is(':checked')) {
              $(":input[name='style_options[views_slideshow_cycle][amount_allowed_visible]']").parent().hide();
              break;
            }
          case 'pause_when_hidden':
            if (!$(':input[name="style_options[views_slideshow_cycle][pause_when_hidden]"]').is(':checked')) {
              $(":input[name='style_options[views_slideshow_cycle][amount_allowed_visible]']").parent().hide();
              break;
            }
          case 'pause_when_hidden_type':
            if ($(":input[name='style_options[views_slideshow_cycle][pause_when_hidden_type]']").val() == 'full') {
              $(":input[name='style_options[views_slideshow_cycle][amount_allowed_visible]']").parent().hide();
            }
            else {
              $(":input[name='style_options[views_slideshow_cycle][amount_allowed_visible]']").parent().show();
            }
        }
      }
    }
  }
  
  // Manage advanced options 
  Drupal.behaviors.viewsSlideshowCycleOptions = {
    attach: function (context) {
      if ($(":input[name='style_options[views_slideshow_cycle][advanced_options]']").length) {
        $(":input[name='style_options[views_slideshow_cycle][advanced_options]']").parent().hide();
        
        $(":input[name='style_options[views_slideshow_cycle][advanced_options_entry]']").parent().after(
          '<div style="margin-left: 10px; padding: 10px 0;">' + 
            '<a id="edit-style-options-views-slideshow-cycle-advanced-options-update-link" href="#">' + Drupal.t('Update Advanced Option') + '</a>' +
          '</div>'
        );
        
        $("#edit-style-options-views-slideshow-cycle-advanced-options-table").append('<tr><th colspan="2">' + Drupal.t('Applied Options') + '</th><tr>')
        
        var initialValue = $(":input[name='style_options[views_slideshow_cycle][advanced_options]']").val();
        var advancedOptions = JSON.parse(initialValue);
        for (var option in advancedOptions) {
          viewsSlideshowCycleAdvancedOptionsAddRow(option);
        }
        
        // Add the remove event to the advanced items.
        viewsSlideshowCycleAdvancedOptionsRemoveEvent();
        
        $(":input[name='style_options[views_slideshow_cycle][advanced_options_choices]']").change(function() {
          var selectedValue = $(":input[name='style_options[views_slideshow_cycle][advanced_options_choices]'] option:selected").val();
          if (typeof advancedOptions[selectedValue] !== 'undefined') {
            $(":input[name='style_options[views_slideshow_cycle][advanced_options_entry]']").val(advancedOptions[selectedValue]);
          }
          else {
            $(":input[name='style_options[views_slideshow_cycle][advanced_options_entry]']").val('');
          }
        });
    
        $('#edit-style-options-views-slideshow-cycle-advanced-options-update-link').click(function() {
          var option = $(":input[name='style_options[views_slideshow_cycle][advanced_options_choices]']").val();
          if (option) {
            var value = $(":input[name='style_options[views_slideshow_cycle][advanced_options_entry]']").val();
          
            if (typeof advancedOptions[option] == 'undefined') {
              viewsSlideshowCycleAdvancedOptionsAddRow(option);
              viewsSlideshowCycleAdvancedOptionsRemoveEvent()
            }
            advancedOptions[option] = value;
            viewsSlideshowCycleAdvancedOptionsSave();
          }
          
          return false;
        });
      }
      
      function viewsSlideshowCycleAdvancedOptionsAddRow(option) {
        $("#edit-style-options-views-slideshow-cycle-advanced-options-table").append(
          '<tr id="views-slideshow-cycle-advanced-options-table-row-' + option + '">' +
            '<td>' + option + '</td>' +
            '<td style="width: 20px;">' +
              '<a style="margin-top: 6px" title="Remove ' + option + '" alt="Remove ' + option + '" class="views-hidden views-button-remove views-slideshow-cycle-advanced-options-table-remove" id="views-slideshow-cycle-advanced-options-table-remove-' + option + '" href="#"><span>Remove</span></a>' +
            '</td>' +
          '</tr>'
        );
      }
      
      function viewsSlideshowCycleAdvancedOptionsRemoveEvent() {
        $('.views-slideshow-cycle-advanced-options-table-remove').unbind().click(function() {
          var itemID = $(this).attr('id');
          var uniqueID = itemID.replace('views-slideshow-cycle-advanced-options-table-remove-', '');
          delete advancedOptions[uniqueID];
          $('#views-slideshow-cycle-advanced-options-table-row-' + uniqueID).remove();
          viewsSlideshowCycleAdvancedOptionsSave();
          return false;
        });
      }
      
      function viewsSlideshowCycleAdvancedOptionsSave() {
        var advancedOptionsString = JSON.stringify(advancedOptions);
        $(":input[name='style_options[views_slideshow_cycle][advanced_options]']").val(advancedOptionsString);
      }
    }
  }
})(jQuery, Drupal);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/modules/views_slideshow/modules/views_slideshow_cycle/js/formoptions.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/modal.js. */
/**
 * @file
 * Bootstrap Modals.
 *
 * @param {jQuery} $
 * @param {Drupal} Drupal
 * @param {Drupal.bootstrap} Bootstrap
 * @param {Attributes} Attributes
 */
(function ($, Drupal, Bootstrap, Attributes) {
  'use strict';

  /**
   * Document jQuery object.
   *
   * @type {jQuery}
   */
  var $document = $(document);

  /**
   * Finds the first available and visible focusable input element.
   *
   * This is abstracted from the main code below so sub-themes can override
   * this method to return their own element if desired.
   *
   * @param {Modal} modal
   *   The Bootstrap modal instance.
   *
   * @return {jQuery}
   *   A jQuery object containing the element that should be focused. Note: if
   *   this object contains multiple elements, only the first visible one will
   *   be used.
   */
  Bootstrap.modalFindFocusableElement = function (modal) {
    return modal.$dialogBody.find(':input,:button,.btn').not('.visually-hidden,.sr-only');
  };

  $document.on('shown.bs.modal', function (e) {
    var $modal = $(e.target);
    var modal = $modal.data('bs.modal');

    // Focus the first input element found.
    if (modal && modal.options.focusInput) {
      var $focusable = Bootstrap.modalFindFocusableElement(modal);
      if ($focusable && $focusable[0]) {
        var $input = $focusable.filter(':visible:first').focus();

        // Select text if input is text.
        if (modal.options.selectText && $input.is(':text')) {
          $input[0].setSelectionRange(0, $input[0].value.length)
        }
      }
      else if (modal.$close.is(':visible')) {
        modal.$close.focus();
      }
    }
  });

  /**
   * Only process this once.
   */
  Bootstrap.once('modal', function (settings) {

    /**
     * Replace the Bootstrap Modal jQuery plugin definition.
     *
     * This adds a little bit of functionality so it works better with Drupal.
     */
    Bootstrap.replacePlugin('modal', function () {
      var BootstrapModal = this;

      // Override the Modal constructor.
      Bootstrap.Modal = function (element, options) {
        this.$body               = $(document.body);
        this.$element            = $(element);
        this.$dialog             = this.$element.find('.modal-dialog');
        this.$header             = this.$dialog.find('.modal-header');
        this.$title              = this.$dialog.find('.modal-title');
        this.$close              = this.$header.find('.close');
        this.$footer             = this.$dialog.find('.modal-footer');
        this.$content            = this.$dialog.find('.modal-content');
        this.$dialogBody         = this.$dialog.find('.modal-body');
        this.$backdrop           = null;
        this.isShown             = null;
        this.originalBodyPad     = null;
        this.scrollbarWidth      = 0;
        this.ignoreBackdropClick = false;
        this.options             = this.mapDialogOptions(options);
      };

      // Extend defaults to take into account for theme settings.
      Bootstrap.Modal.DEFAULTS = $.extend({}, BootstrapModal.DEFAULTS, {
        animation: !!settings.modal_animation,
        backdrop: settings.modal_backdrop === 'static' ? 'static' : !!settings.modal_backdrop,
        focusInput: !!settings.modal_focus_input,
        selectText: !!settings.modal_select_text,
        keyboard: !!settings.modal_keyboard,
        remote: null,
        show: !!settings.modal_show,
        size: settings.modal_size
      });

      // Copy over the original prototype methods.
      Bootstrap.Modal.prototype = BootstrapModal.prototype;

      /**
       * Handler for $.fn.modal('destroy').
       */
      Bootstrap.Modal.prototype.destroy = function () {
        this.hide();
        Drupal.detachBehaviors(this.$element[0]);
        this.$element.removeData('bs.modal').remove();
      };

      /**
       * Initialize the modal.
       */
      Bootstrap.Modal.prototype.init = function () {
        if (this.options.remote) {
          this.$content.load(this.options.remote, $.proxy(function () {
            this.$element.trigger('loaded.bs.modal');
          }, this));
        }
      };

      /**
       * Map dialog options.
       *
       * Note: this is primarily for use in modal.jquery.ui.bridge.js.
       *
       * @param {Object} options
       *   The passed options.
       */
      Bootstrap.Modal.prototype.mapDialogOptions = function (options) {
        return options || {};
      }

      // Modal jQuery Plugin Definition.
      var Plugin = function () {
        // Extract the arguments.
        var args = Array.prototype.slice.call(arguments);
        var method = args[0];
        var options = args[1] || {};
        var relatedTarget = args[2] || null;
        // Move arguments down if no method was passed.
        if ($.isPlainObject(method)) {
          relatedTarget = options || null;
          options = method;
          method = null;
        }
        var ret = void 0;
        this.each(function () {
          var $this   = $(this);
          var data    = $this.data('bs.modal');
          var initialize = false;

          // Immediately return if there's no instance to invoke a valid method.
          var showMethods = ['open', 'show', 'toggle'];
          if (!data && method && showMethods.indexOf(method) === -1) {
            return;
          }

          options = Bootstrap.normalizeObject($.extend({}, Bootstrap.Modal.DEFAULTS, data && data.options, $this.data(), options));
          delete options['bs.modal'];

          if (!data) {
            $this.data('bs.modal', (data = new Bootstrap.Modal(this, options)));
            initialize = true;
          }

          // Initialize the modal.
          if (initialize || (!method && !args.length)) {
            data.init();
          }

          // Explicit method passed.
          if (method) {
            if (typeof data[method] === 'function') {
              try {
                ret = data[method].apply(data, args.slice(1));
              }
              catch (e) {
                Drupal.throwError(e);
              }
            }
            else {
              Bootstrap.unsupported('method', method);
            }
          }
          // No method, set options and open if necessary.
          else {
            data.option(options);
            if (options.show && !data.isShown) {
              data.show(relatedTarget);
            }
          }
        });

        // If just one element and there was a result returned for the option passed,
        // then return the result. Otherwise, just return the jQuery object.
        return this.length === 1 && ret !== void 0 ? ret : this;
      };

      // Replace the plugin constructor with the new Modal constructor.
      Plugin.Constructor = Bootstrap.Modal;

      // Replace the data API so that it calls $.fn.modal rather than Plugin.
      // This allows sub-themes to replace the jQuery Plugin if they like with
      // out having to redo all this boilerplate.
      $document
        .off('click.bs.modal.data-api')
        .on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
          var $this   = $(this);
          var href    = $this.attr('href');
          var target  = $this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')); // strip for ie7
          var $target = $document.find(target);
          var options  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data());

          if ($this.is('a')) e.preventDefault();

          $target.one('show.bs.modal', function (showEvent) {
            // Only register focus restorer if modal will actually get shown.
            if (showEvent.isDefaultPrevented()) return;
            $target.one('hidden.bs.modal', function () {
              $this.is(':visible') && $this.trigger('focus');
            });
          });
          $target.modal(options, this);
        });

      return Plugin;
    });

    /**
     * Extend Drupal theming functions.
     */
    $.extend(Drupal.theme, /** @lend Drupal.theme */ {
      /**
       * Theme function for a Bootstrap Modal.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal.
       */
      bootstrapModal: function (variables) {
        var output = '';
        var settings = drupalSettings.bootstrap || {};
        var defaults = {
          attributes: {
            class: ['modal'],
            tabindex: -1,
            role: 'dialog'
          },
          body: '',
          closeButton: true,
          description: {
            attributes: {
              class: ['help-block']
            },
            content: null,
            position: 'before'
          },
          footer: '',
          id: 'drupal-modal',
          size: settings.modal_size ? settings.modal_size : '',
          title: {
            attributes: {
              class: ['modal-title']
            },
            content: Drupal.t('Loading...'),
            html: false,
            tag: 'h4'
          }
        };
        variables = $.extend(true, {}, defaults, variables);

        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        attributes.set('id', attributes.get('id', variables.id));

        if (settings.modal_animation) {
          attributes.addClass('fade');
        }

        // Build the modal wrapper.
        output += '<div' + attributes + '>';

        // Build the modal-dialog wrapper.
        output += Drupal.theme('bootstrapModalDialog', _.omit(variables, 'attributes'));

        // Close the modal wrapper.
        output += '</div>';

        // Return the constructed modal.
        return output;
      },

      /**
       * Theme function for a Bootstrap Modal dialog markup.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal close button.
       */
      bootstrapModalDialog: function (variables) {
        var output = '';

        var defaults = {
          attributes: {
            class: ['modal-dialog'],
            role: 'document'
          },
          id: 'drupal-modal'
        };
        variables = $.extend(true, {}, defaults, variables);

        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        attributes.set('id', attributes.get('id', variables.id + '--dialog'));

        if (variables.size) {
          attributes.addClass(variables.size);
        }
        output += '<div' + attributes + '>';

        // Build the modal-content wrapper.
        output += Drupal.theme('bootstrapModalContent', _.omit(variables, 'attributes'));

        // Close the modal-dialog wrapper.
        output += '</div>';
        return output;
      },

      /**
       * Theme function for a Bootstrap Modal content markup.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal close button.
       */
      bootstrapModalContent: function (variables) {
        var output = '';

        var defaults = {
          attributes: {
            class: ['modal-content']
          },
          id: 'drupal-modal'
        };
        variables = $.extend(true, {}, defaults, variables);

        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        attributes.set('id', attributes.get('id', variables.id + '--content'));

        // Build the modal-content wrapper.
        output += '<div' + attributes + '>';
        variables = _.omit(variables, 'attributes');

        // Build the header wrapper and title.
        output += Drupal.theme('bootstrapModalHeader', variables);

        // Build the body.
        output += Drupal.theme('bootstrapModalBody', variables);

        // Build the footer.
        output += Drupal.theme('bootstrapModalFooter', variables);

        // Close the modal-content wrapper.
        output += '</div>';

        return output;
      },

      /**
       * Theme function for a Bootstrap Modal body markup.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal close button.
       */
      bootstrapModalBody: function (variables) {
        var output = '';

        var defaults = {
          attributes: {
            class: ['modal-body']
          },
          body: '',
          description: {
            attributes: {
              class: ['help-block']
            },
            content: null,
            position: 'before'
          },
          id: 'drupal-modal'
        };
        variables = $.extend(true, {}, defaults, variables);

        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        attributes.set('id', attributes.get('id', variables.id + '--body'));

        output += '<div' + attributes + '>';

        if (typeof variables.description === 'string') {
          variables.description = $.extend({}, defaults.description, { content: variables.description });
        }

        var description = variables.description;
        description.attributes = Attributes.create(defaults.description.attributes).merge(description.attributes);

        if (description.content && description.position === 'invisible') {
          description.attributes.addClass('sr-only');
        }

        if (description.content && description.position === 'before') {
          output += '<p' + description.attributes + '>' + description.content + '</p>';
        }

        output += variables.body;

        if (description.content && (description.position === 'after' || description.position === 'invisible')) {
          output += '<p' + description.attributes + '>' + description.content + '</p>';
        }

        output += '</div>';

        return output;
      },

      /**
       * Theme function for a Bootstrap Modal close button.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal close button.
       */
      bootstrapModalClose: function (variables) {
        var defaults = {
          attributes: {
            'aria-label': Drupal.t('Close'),
            class: ['close'],
            'data-dismiss': 'modal',
            type: 'button'
          }
        };
        variables = $.extend(true, {}, defaults, variables);
        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        return '<button' + attributes + '><span aria-hidden="true">&times;</span></button>';
      },

      /**
       * Theme function for a Bootstrap Modal footer.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       * @param {boolean} [force]
       *   Flag to force rendering the footer, regardless if there's content.
       *
       * @return {string}
       *   The HTML for the modal footer.
       */
      bootstrapModalFooter: function (variables, force) {
        var output = '';
        var defaults = {
          attributes: {
            class: ['modal-footer']
          },
          footer: '',
          id: 'drupal-modal'
        };

        variables = $.extend(true, {}, defaults, variables);

        if (force || variables.footer) {
          var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
          attributes.set('id', attributes.get('id', variables.id + '--footer'));
          output += '<div' + attributes + '>';
          output += variables.footer;
          output += '</div>';
        }

        return output;
      },

      /**
       * Theme function for a Bootstrap Modal header.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal header.
       */
      bootstrapModalHeader: function (variables) {
        var output = '';

        var defaults = {
          attributes: {
            class: ['modal-header']
          },
          closeButton: true,
          id: 'drupal-modal',
          title: {
            attributes: {
              class: ['modal-title']
            },
            content: Drupal.t('Loading...'),
            html: false,
            tag: 'h4'
          }
        };
        variables = $.extend(true, {}, defaults, variables);

        if (typeof variables.title === 'string') {
          variables.title = $.extend({}, defaults, { content: variables.title });
        }

        variables.title.attributes = Attributes.create(defaults.title.attributes).merge(variables.title.attributes);

        var title = Drupal.theme('bootstrapModalTitle', variables.title);
        if (title) {
          var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
          attributes.set('id', attributes.get('id', variables.id + '--header'));

          output += '<div' + attributes + '>';

          if (variables.closeButton) {
            output += Drupal.theme('bootstrapModalClose', _.omit(variables, 'attributes'));
          }

          output += title;

          output += '</div>';
        }

        return output;
      },

      /**
       * Theme function for a Bootstrap Modal title.
       *
       * @param {Object} [variables]
       *   An object containing key/value pairs of variables.
       *
       * @return {string}
       *   The HTML for the modal title.
       */
      bootstrapModalTitle: function (variables) {
        var output = '';

        var defaults = {
          attributes: {
            class: ['modal-title']
          },
          closeButton: true,
          id: 'drupal-modal',
          content: Drupal.t('Loading...'),
          html: false,
          tag: 'h4'
        };

        if (typeof variables === 'string') {
          variables = $.extend({}, defaults, { content: title });
        }

        variables = $.extend(true, {}, defaults, variables);

        var attributes = Attributes.create(defaults.attributes).merge(variables.attributes);
        attributes.set('id', attributes.get('id', variables.id + '--title'));

        output += '<' + Drupal.checkPlain(variables.tag) + Attributes.create(defaults.attributes).merge(variables.attributes) + '>';

        if (variables.closeButton) {
          output += Drupal.theme('bootstrapModalClose', _.omit(variables, 'attributes'));
        }

        output += (variables.html ? variables.content : Drupal.checkPlain(variables.content));

        output += '</' + Drupal.checkPlain(variables.tag) + '>';

        return output;
      }

    })

  });

})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/modal.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/dialog.js. */
/**
 * @file
 * dialog.js
 */
(function ($, Drupal, Bootstrap, Attributes) {

  Bootstrap.Dialog = Bootstrap.Dialog || {};

  /**
   * A collection of Drupal dialog handlers.
   *
   * @type {Object<String, Drupal.bootstrap.Dialog.Handler>}
   */
  Bootstrap.Dialog.handlers = {};

  /**
   * @class Drupal.bootstrap.Dialog.Handler
   *
   * @param type
   * @param data
   */
  Bootstrap.Dialog.Handler = function (type, data) {
    this.ctor = $.fn.modal;
    this.extend = null;
    this.plugin = 'modal';
    this.prefix = 'modal';
    this.themeHooks = {
      modal: 'bootstrapModal',
      dialog: 'bootstrapModalDialog',
      header: 'bootstrapModalHeader',
      title: 'bootstrapModalTitle',
      close: 'bootstrapModalClose',
      content: 'bootstrapModalContent',
      body: 'bootstrapModalBody',
      footer: 'bootstrapModalFooter',
    };
    this.type = type;
    this.selectors = {
      dialog: '.modal-dialog',
      header: '.modal-header',
      title: '.modal-title',
      close: '.close',
      content: '.modal-content',
      body: '.modal-body',
      footer: '.modal-footer',
      buttons: '.modal-buttons'
    };

    // Extend the object with subclassed data.
    $.extend(this, data);

    // Extend the jQuery plugin.
    if (this.extend) {
      Bootstrap.extend(this.plugin, this.extend);
    }
  };

  /**
   * Retrieves a Drupal dialog type handler.
   *
   * @param {String|HTMLElement|jQuery} type
   *   The dialog type to retrieve.
   *
   * @return {Drupal.bootstrap.Dialog.Handler}
   *   A Bootstrap.Dialog.Handler instance.
   */
  Bootstrap.Dialog.Handler.get = function (type) {
    if (type instanceof $) {
      type = type[0];
    }
    if (type instanceof HTMLElement) {
      type = type.dialogType;
    }
    if (!type) {
      type = 'modal';
    }
    if (!Bootstrap.Dialog.handlers[type]) {
      Bootstrap.Dialog.handlers[type] = new Bootstrap.Dialog.Handler();
    }
    return Bootstrap.Dialog.handlers[type];
  };

  /**
   * Registers a Drupal dialog type handler.
   *
   * @param {String} type
   *   The dialog type to
   * @param {Object} [data]
   *   Optional. Additional data to use to create the dialog handler. By
   *   default, this assumes values relative to the Bootstrap Modal plugin.
   */
  Bootstrap.Dialog.Handler.register = function (type, data) {
    Bootstrap.Dialog.handlers[type] = new Bootstrap.Dialog.Handler(type, data);
  };

  Bootstrap.Dialog.Handler.prototype.invoke = function (context) {
    var args = Array.prototype.slice.call(arguments);
    return this.ctor.apply(context, args.slice(1));
  };

  Bootstrap.Dialog.Handler.prototype.theme = function (hook) {
    var args = Array.prototype.slice.call(arguments);
    return $(Drupal.theme.apply(Drupal.theme, [this.themeHooks[hook]].concat(args.slice(1))));
  };

  /**
   * Ensures a DOM element has the appropriate structure for a modal.
   *
   * Note: this can get a little tricky. Core potentially already
   * semi-processes a "dialog" if was created using an Ajax command
   * (i.e. prepareDialogButtons in drupal.ajax.js). Because of this, the
   * contents (HTML) of the existing element cannot simply be dumped into a
   * newly created modal. This would destroy any existing event bindings.
   * Instead, the contents must be "moved" (appended) to the new modal and
   * then "moved" again back to the to the existing container as needed.
   *
   * @param {HTMLElement|jQuery} element
   *   The element to ensure is a modal structure.
   * @param {Object} options
   *   THe dialog options to use to construct the modal.
   */
  Bootstrap.Dialog.Handler.prototype.ensureModalStructure = function (element, options) {
    var $element = $(element);

    // Immediately return if the modal was already converted into a proper modal.
    if ($element.is('[data-drupal-theme="' + this.themeHooks.modal + '"]')) {
      return;
    }

    options = $.extend(true, {}, options, {
      attributes: Attributes.create(element).remove('style').set('data-drupal-theme', this.themeHooks.modal),
    });

    // Create a new modal.
    var $modal = this.theme('modal', options);

    // Store a reference to the content inside the existing element container.
    // This references the actual DOM node elements which will allow
    // jQuery to "move" then when appending below. Using $.fn.children()
    // does not return any text nodes present and $.fn.html() only returns
    // a string representation of the content, which effectively destroys
    // any prior event bindings or processing.
    var $body = $element.find(this.selectors.body);
    var $existing = $body[0] ? $body.contents() : $element.contents();

    // Set the attributes of the dialog to that of the newly created modal.
    $element.attr(Attributes.create($modal).toPlainObject());

    // Append the newly created modal markup.
    $element.append($modal.html());

    // Move the existing HTML into the modal markup that was just appended.
    $element.find(this.selectors.body).append($existing);
  };

})(jQuery, Drupal, Drupal.bootstrap, Attributes);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/dialog.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/modal.jquery.ui.bridge.js. */
/**
 * @file
 * Bootstrap Modals.
 *
 * @param {jQuery} $
 * @param {Drupal} Drupal
 * @param {Drupal.bootstrap} Bootstrap
 * @param {Attributes} Attributes
 * @param {drupalSettings} drupalSettings
 */
(function ($, Drupal, Bootstrap, Attributes, drupalSettings) {
  'use strict';

  /**
   * Only process this once.
   */
  Bootstrap.once('modal.jquery.ui.bridge', function (settings) {
    // RTL support.
    var rtl = document.documentElement.getAttribute('dir').toLowerCase() === 'rtl';

    // Override drupal.dialog button classes. This must be done on DOM ready
    // since core/drupal.dialog technically depends on this file and has not
    // yet set their default settings.
    $(function () {
      drupalSettings.dialog.buttonClass = 'btn';
      drupalSettings.dialog.buttonPrimaryClass = 'btn-primary';
    });

    // Create the "dialog" plugin bridge.
    Bootstrap.Dialog.Bridge = function (options) {
      var args = Array.prototype.slice.call(arguments);
      var $element = $(this);
      var type = options && options.dialogType || $element[0].dialogType || 'modal';

      $element[0].dialogType = type;

      var handler = Bootstrap.Dialog.Handler.get(type);

      // When only options are passed, jQuery UI dialog treats this like a
      // initialization method. Destroy any existing Bootstrap modal and
      // recreate it using the contents of the dialog HTML.
      if (args.length === 1 && typeof options === 'object') {
        this.each(function () {
          handler.ensureModalStructure(this, options);
        });

        // Proxy to the Bootstrap Modal plugin, indicating that this is a
        // jQuery UI dialog bridge.
        return handler.invoke(this, {
          dialogOptions: options,
          jQueryUiBridge: true
        });
      }

      // Otherwise, proxy all arguments to the Bootstrap Modal plugin.
      var ret;
      try {
        ret = handler.invoke.apply(handler, [this].concat(args));
      }
      catch (e) {
        Bootstrap.warn(e);
      }

      // If just one element and there was a result returned for the option passed,
      // then return the result. Otherwise, just return the jQuery object.
      return this.length === 1 && ret !== void 0 ? ret : this;
    };

    // Assign the jQuery "dialog" plugin to use to the bridge.
    Bootstrap.createPlugin('dialog', Bootstrap.Dialog.Bridge);

    // Create the "modal" plugin bridge.
    Bootstrap.Modal.Bridge = function () {
      var Modal = this;

      return {
        DEFAULTS: {
          // By default, this option is disabled. It's only flagged when a modal
          // was created using $.fn.dialog above.
          jQueryUiBridge: false
        },
        prototype: {

          /**
           * Handler for $.fn.dialog('close').
           */
          close: function () {
            var _this = this;

            this.hide.apply(this, arguments);

            // For some reason (likely due to the transition event not being
            // registered properly), the backdrop doesn't always get removed
            // after the above "hide" method is invoked . Instead, ensure the
            // backdrop is removed after the transition duration by manually
            // invoking the internal "hideModal" method shortly thereafter.
            setTimeout(function () {
              if (!_this.isShown && _this.$backdrop) {
                _this.hideModal();
              }
            }, (Modal.TRANSITION_DURATION !== void 0 ? Modal.TRANSITION_DURATION : 300) + 10);
          },

          /**
           * Creates any necessary buttons from dialog options.
           */
          createButtons: function () {
            var handler = Bootstrap.Dialog.Handler.get(this.$element);
            this.$footer.find(handler.selectors.buttons).remove();

            // jQuery UI supports both objects and arrays. Unfortunately
            // developers have misunderstood and abused this by simply placing
            // the objects that should be in an array inside an object with
            // arbitrary keys (likely to target specific buttons as a hack).
            var buttons = this.options.dialogOptions && this.options.dialogOptions.buttons || [];
            if (!Array.isArray(buttons)) {
              var array = [];
              for (var k in buttons) {
                // Support the proper object values: label => click callback.
                if (typeof buttons[k] === 'function') {
                  array.push({
                    label: k,
                    click: buttons[k],
                  });
                }
                // Support nested objects, but log a warning.
                else if (buttons[k].text || buttons[k].label) {
                  Bootstrap.warn('Malformed jQuery UI dialog button: @key. The button object should be inside an array.', {
                    '@key': k
                  });
                  array.push(buttons[k]);
                }
                else {
                  Bootstrap.unsupported('button', k, buttons[k]);
                }
              }
              buttons = array;
            }

            if (buttons.length) {
              var $buttons = $('<div class="modal-buttons"/>').appendTo(this.$footer);
              for (var i = 0, l = buttons.length; i < l; i++) {
                var button = buttons[i];
                var $button = $(Drupal.theme('bootstrapModalDialogButton', button));

                // Invoke the "create" method for jQuery UI buttons.
                if (typeof button.create === 'function') {
                  button.create.call($button[0]);
                }

                // Bind the "click" method for jQuery UI buttons to the modal.
                if (typeof button.click === 'function') {
                  $button.on('click', button.click.bind(this.$element));
                }

                $buttons.append($button);
              }
            }

            // Toggle footer visibility based on whether it has child elements.
            this.$footer[this.$footer.children()[0] ? 'show' : 'hide']();
          },

          /**
           * Initializes the Bootstrap Modal.
           */
          init: function () {
            var handler = Bootstrap.Dialog.Handler.get(this.$element);
            if (!this.$dialog) {
              this.$dialog = this.$element.find(handler.selectors.dialog);
            }
            this.$dialog.addClass('js-drupal-dialog');

            if (!this.$header) {
              this.$header = this.$dialog.find(handler.selectors.header);
            }
            if (!this.$title) {
              this.$title = this.$dialog.find(handler.selectors.title);
            }
            if (!this.$close) {
              this.$close = this.$header.find(handler.selectors.close);
            }
            if (!this.$footer) {
              this.$footer = this.$dialog.find(handler.selectors.footer);
            }
            if (!this.$content) {
              this.$content = this.$dialog.find(handler.selectors.content);
            }
            if (!this.$dialogBody) {
              this.$dialogBody = this.$dialog.find(handler.selectors.body);
            }

            // Relay necessary events.
            if (this.options.jQueryUiBridge) {
              this.$element.on('hide.bs.modal',   Bootstrap.relayEvent(this.$element, 'dialogbeforeclose', false));
              this.$element.on('hidden.bs.modal', Bootstrap.relayEvent(this.$element, 'dialogclose', false));
              this.$element.on('show.bs.modal',   Bootstrap.relayEvent(this.$element, 'dialogcreate', false));
              this.$element.on('shown.bs.modal',  Bootstrap.relayEvent(this.$element, 'dialogopen', false));
            }

            // Create a footer if one doesn't exist.
            // This is necessary in case dialog.ajax.js decides to add buttons.
            if (!this.$footer[0]) {
              this.$footer = handler.theme('footer', {}, true).insertAfter(this.$dialogBody);
            }

            // Map the initial options.
            $.extend(true, this.options, this.mapDialogOptions(this.options));

            // Update buttons.
            this.createButtons();

            // Now call the parent init method.
            this.super();

            // Handle autoResize option (this is a drupal.dialog option).
            if (this.options.dialogOptions && this.options.dialogOptions.autoResize && this.options.dialogOptions.position) {
              this.position(this.options.dialogOptions.position);
            }

            // If show is enabled and currently not shown, show it.
            if (this.options.jQueryUiBridge && this.options.show && !this.isShown) {
              this.show();
            }
          },

          /**
           * Handler for $.fn.dialog('instance').
           */
          instance: function () {
            Bootstrap.unsupported('method', 'instance', arguments);
          },

          /**
           * Handler for $.fn.dialog('isOpen').
           */
          isOpen: function () {
            return !!this.isShown;
          },

          /**
           * Maps dialog options to the modal.
           *
           * @param {Object} options
           *   The options to map.
           */
          mapDialogOptions: function (options) {
            // Retrieve the dialog handler for this type.
            var handler = Bootstrap.Dialog.Handler.get(this.$element);

            var mappedOptions = {};
            var dialogOptions = options.dialogOptions || {};

            // Remove any existing dialog options.
            delete options.dialogOptions;

            // Separate Bootstrap modal options from jQuery UI dialog options.
            for (var k in options) {
              if (Modal.DEFAULTS.hasOwnProperty(k)) {
                mappedOptions[k] = options[k];
              }
              else {
                dialogOptions[k] = options[k];
              }
            }


            // Handle CSS properties.
            var cssUnitRegExp = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)?$/;
            var parseCssUnit = function (value, defaultUnit) {
              var parts = ('' + value).match(cssUnitRegExp);
              return parts && parts[1] !== void 0 ? parts[1] + (parts[2] || defaultUnit || 'px') : null;
            };
            var styles = {};
            var cssProperties = ['height', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'width'];
            for (var i = 0, l = cssProperties.length; i < l; i++) {
              var prop = cssProperties[i];
              if (dialogOptions[prop] !== void 0) {
                var value = parseCssUnit(dialogOptions[prop]);
                if (value) {
                  styles[prop] = value;

                  // If there's a defined height of some kind, enforce the modal
                  // to use flex (on modern browsers). This will ensure that
                  // the core autoResize calculations don't cause the content
                  // to overflow.
                  if (dialogOptions.autoResize && (prop === 'height' || prop === 'maxHeight')) {
                    styles.display = 'flex';
                    styles.flexDirection = 'column';
                    this.$dialogBody.css('overflow', 'scroll');
                  }
                }
              }
            }

            // Apply mapped CSS styles to the modal-content container.
            this.$content.css(styles);

            // Handle deprecated "dialogClass" option by merging it with "classes".
            var classesMap = {
              'ui-dialog': 'modal-content',
              'ui-dialog-titlebar': 'modal-header',
              'ui-dialog-title': 'modal-title',
              'ui-dialog-titlebar-close': 'close',
              'ui-dialog-content': 'modal-body',
              'ui-dialog-buttonpane': 'modal-footer'
            };
            if (dialogOptions.dialogClass) {
              if (dialogOptions.classes === void 0) {
                dialogOptions.classes = {};
              }
              if (dialogOptions.classes['ui-dialog'] === void 0) {
                dialogOptions.classes['ui-dialog'] = '';
              }
              var dialogClass = dialogOptions.classes['ui-dialog'].split(' ');
              dialogClass.push(dialogOptions.dialogClass);
              dialogOptions.classes['ui-dialog'] = dialogClass.join(' ');
              delete dialogOptions.dialogClass;
            }

            // Add jQuery UI classes to elements in case developers target them
            // in callbacks.
            for (k in classesMap) {
              this.$element.find('.' + classesMap[k]).addClass(k);
            }

            // Bind events.
            var events = [
              'beforeClose', 'close',
              'create',
              'drag', 'dragStart', 'dragStop',
              'focus',
              'open',
              'resize', 'resizeStart', 'resizeStop'
            ];
            for (i = 0, l = events.length; i < l; i++) {
              var event = events[i].toLowerCase();
              if (dialogOptions[event] === void 0 || typeof dialogOptions[event] !== 'function') continue;
              this.$element.on('dialog' + event, dialogOptions[event]);
            }

            // Support title attribute on the modal.
            var title;
            if ((dialogOptions.title === null || dialogOptions.title === void 0) && (title = this.$element.attr('title'))) {
              dialogOptions.title = title;
            }

            // Handle the reset of the options.
            for (var name in dialogOptions) {
              if (!dialogOptions.hasOwnProperty(name) || dialogOptions[name] === void 0) continue;

              switch (name) {
                case 'appendTo':
                  Bootstrap.unsupported('option', name, dialogOptions.appendTo);
                  break;

                case 'autoOpen':
                  mappedOptions.show = dialogOptions.show = !!dialogOptions.autoOpen;
                  break;

                case 'classes':
                  if (dialogOptions.classes) {
                    for (var key in dialogOptions.classes) {
                      if (dialogOptions.classes.hasOwnProperty(key) && classesMap[key] !== void 0) {
                        // Run through Attributes to sanitize classes.
                        var attributes = Attributes.create().addClass(dialogOptions.classes[key]).toPlainObject();
                        var selector = '.' + classesMap[key];
                        this.$element.find(selector).addClass(attributes['class']);
                      }
                    }
                  }
                  break;

                case 'closeOnEscape':
                  mappedOptions.keyboard = !!dialogOptions.closeOnEscape;
                  if (!dialogOptions.closeOnEscape && dialogOptions.modal) {
                    mappedOptions.backdrop = 'static';
                  }
                  break;

                case 'closeText':
                  Bootstrap.unsupported('option', name, dialogOptions.closeText);
                  break;

                case 'draggable':
                  this.$content
                    .draggable({
                      handle: handler.selectors.header,
                      drag: Bootstrap.relayEvent(this.$element, 'dialogdrag'),
                      start: Bootstrap.relayEvent(this.$element, 'dialogdragstart'),
                      end: Bootstrap.relayEvent(this.$element, 'dialogdragend')
                    })
                    .draggable(dialogOptions.draggable ? 'enable' : 'disable');
                  break;

                case 'hide':
                  if (dialogOptions.hide === false || dialogOptions.hide === true) {
                    this.$element[dialogOptions.hide ? 'addClass' : 'removeClass']('fade');
                    mappedOptions.animation = dialogOptions.hide;
                  }
                  else {
                    Bootstrap.unsupported('option', name + ' (complex animation)', dialogOptions.hide);
                  }
                  break;

                case 'modal':
                  if (!dialogOptions.closeOnEscape && dialogOptions.modal) {
                    mappedOptions.backdrop = 'static';
                  }
                  else {
                    mappedOptions.backdrop = dialogOptions.modal;
                  }

                  // If not a modal and no initial position, center it.
                  if (!dialogOptions.modal && !dialogOptions.position) {
                    this.position({ my: 'center', of: window });
                  }
                  break;

                case 'position':
                  this.position(dialogOptions.position);
                  break;

                // Resizable support (must initialize first).
                case 'resizable':
                  this.$content
                    .resizable({
                      resize: Bootstrap.relayEvent(this.$element, 'dialogresize'),
                      start: Bootstrap.relayEvent(this.$element, 'dialogresizestart'),
                      end: Bootstrap.relayEvent(this.$element, 'dialogresizeend')
                    })
                    .resizable(dialogOptions.resizable ? 'enable' : 'disable');
                  break;

                case 'show':
                  if (dialogOptions.show === false || dialogOptions.show === true) {
                    this.$element[dialogOptions.show ? 'addClass' : 'removeClass']('fade');
                    mappedOptions.animation = dialogOptions.show;
                  }
                  else {
                    Bootstrap.unsupported('option', name + ' (complex animation)', dialogOptions.show);
                  }
                  break;

                case 'title':
                  this.$title.text(dialogOptions.title);
                  break;

              }
            }

            // Add the supported dialog options to the mapped options.
            mappedOptions.dialogOptions = dialogOptions;

            return mappedOptions;
          },

          /**
           * Handler for $.fn.dialog('moveToTop').
           */
          moveToTop: function () {
            Bootstrap.unsupported('method', 'moveToTop', arguments);
          },

          /**
           * Handler for $.fn.dialog('option').
           */
          option: function () {
            var clone = {options: {}};

            // Apply the parent option method to the clone of current options.
            this.super.apply(clone, arguments);

            // Merge in the cloned mapped options.
            $.extend(true, this.options, this.mapDialogOptions(clone.options));

            // Update buttons.
            this.createButtons();
          },

          position: function(position) {
            // Reset modal styling.
            this.$element.css({
              bottom: 'initial',
              overflow: 'visible',
              right: 'initial'
            });

            // Position the modal.
            this.$element.position(position);
          },

          /**
           * Handler for $.fn.dialog('open').
           */
          open: function () {
            this.show.apply(this, arguments);
          },

          /**
           * Handler for $.fn.dialog('widget').
           */
          widget: function () {
            return this.$element;
          }
        }
      };
    };

    // Extend the Bootstrap Modal plugin constructor class.
    Bootstrap.extendPlugin('modal', Bootstrap.Modal.Bridge);

    // Register default core dialog type handlers.
    Bootstrap.Dialog.Handler.register('dialog');
    Bootstrap.Dialog.Handler.register('modal');

    /**
     * Extend Drupal theming functions.
     */
    $.extend(Drupal.theme, /** @lend Drupal.theme */ {

      /**
       * Renders a jQuery UI Dialog compatible button element.
       *
       * @param {Object} button
       *   The button object passed in the dialog options.
       *
       * @return {String}
       *   The modal dialog button markup.
       *
       * @see http://api.jqueryui.com/dialog/#option-buttons
       * @see http://api.jqueryui.com/button/
       */
      bootstrapModalDialogButton: function (button) {
        var attributes = Attributes.create();

        var icon = '';
        var iconPosition = button.iconPosition || 'beginning';
        iconPosition = (iconPosition === 'end' && !rtl) || (iconPosition === 'beginning' && rtl) ? 'after' : 'before';

        // Handle Bootstrap icons differently.
        if (button.bootstrapIcon) {
          icon = Drupal.theme('icon', 'bootstrap', button.icon);
        }
        // Otherwise, assume it's a jQuery UI icon.
        // @todo Map jQuery UI icons to Bootstrap icons?
        else if (button.icon) {
          var iconAttributes = Attributes.create()
            .addClass(['ui-icon', button.icon])
            .set('aria-hidden', 'true');
          icon = '<span' + iconAttributes + '></span>';
        }

        // Label. Note: jQuery UI dialog has an inconsistency where it uses
        // "text" instead of "label", so both need to be supported.
        var value = button.label || button.text;

        // Show/hide label.
        if (icon && ((button.showLabel !== void 0 && !button.showLabel) || (button.text !== void 0 && !button.text))) {
          value = '<span' + Attributes.create().addClass('sr-only') + '>' + value + '</span>';
        }
        attributes.set('value', iconPosition === 'before' ? icon + value : value + icon);

        // Handle disabled.
        attributes[button.disabled ? 'set' :'remove']('disabled', 'disabled');

        if (button.classes) {
          attributes.addClass(Object.keys(button.classes).map(function(key) { return button.classes[key]; }));
        }
        if (button['class']) {
          attributes.addClass(button['class']);
        }
        if (button.primary) {
          attributes.addClass('btn-primary');
        }

        return Drupal.theme('button', attributes);
      }

    });

  });


})(window.jQuery, window.Drupal, window.Drupal.bootstrap, window.Attributes, window.drupalSettings);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/modal.jquery.ui.bridge.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  drupalSettings.dialog = {
    autoOpen: true,
    dialogClass: '',

    buttonClass: 'button',
    buttonPrimaryClass: 'button--primary',
    close: function close(event) {
      Drupal.dialog(event.target).close();
      Drupal.detachBehaviors(event.target, null, 'unload');
    }
  };

  Drupal.dialog = function (element, options) {
    var undef = void 0;
    var $element = $(element);
    var dialog = {
      open: false,
      returnValue: undef
    };

    function openDialog(settings) {
      settings = $.extend({}, drupalSettings.dialog, options, settings);

      $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
      $element.dialog(settings);
      dialog.open = true;
      $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
    }

    function closeDialog(value) {
      $(window).trigger('dialog:beforeclose', [dialog, $element]);
      $element.dialog('close');
      dialog.returnValue = value;
      dialog.open = false;
      $(window).trigger('dialog:afterclose', [dialog, $element]);
    }

    dialog.show = function () {
      openDialog({ modal: false });
    };
    dialog.showModal = function () {
      openDialog({ modal: true });
    };
    dialog.close = closeDialog;

    return dialog;
  };
})(jQuery, Drupal, drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.position.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings, debounce, displace) {
  drupalSettings.dialog = $.extend({ autoResize: true, maxHeight: '95%' }, drupalSettings.dialog);

  function resetPosition(options) {
    var offsets = displace.offsets;
    var left = offsets.left - offsets.right;
    var top = offsets.top - offsets.bottom;

    var leftString = (left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)) + 'px';
    var topString = (top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)) + 'px';
    options.position = {
      my: 'center' + (left !== 0 ? leftString : '') + ' center' + (top !== 0 ? topString : ''),
      of: window
    };
    return options;
  }

  function resetSize(event) {
    var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
    var adjustedOptions = {};
    var windowHeight = $(window).height();
    var option = void 0;
    var optionValue = void 0;
    var adjustedValue = void 0;
    for (var n = 0; n < positionOptions.length; n++) {
      option = positionOptions[n];
      optionValue = event.data.settings[option];
      if (optionValue) {
        if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
          windowHeight -= displace.offsets.top + displace.offsets.bottom;
          adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);

          if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
            adjustedValue = 'auto';
          }
          adjustedOptions[option] = adjustedValue;
        }
      }
    }

    if (!event.data.settings.modal) {
      adjustedOptions = resetPosition(adjustedOptions);
    }
    event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
  }

  $(window).on({
    'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
      var autoResize = debounce(resetSize, 20);
      var eventData = { settings: settings, $element: $element };
      if (settings.autoResize === true || settings.autoResize === 'true') {
        $element.dialog('option', { resizable: false, draggable: false }).dialog('widget').css('position', 'fixed');
        $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
        $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
      }
    },
    'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
      $(window).off('.dialogResize');
      $(document).off('.dialogResize');
    }
  });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.position.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.ajax.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal) {
  Drupal.behaviors.dialog = {
    attach: function attach(context, settings) {
      var $context = $(context);

      if (!$('#drupal-modal').length) {
        $('<div id="drupal-modal" class="ui-front"/>').hide().appendTo('body');
      }

      var $dialog = $context.closest('.ui-dialog-content');
      if ($dialog.length) {
        if ($dialog.dialog('option', 'drupalAutoButtons')) {
          $dialog.trigger('dialogButtonsChange');
        }

        $dialog.dialog('widget').trigger('focus');
      }

      var originalClose = settings.dialog.close;

      settings.dialog.close = function (event) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        originalClose.apply(settings.dialog, [event].concat(args));
        $(event.target).remove();
      };
    },
    prepareDialogButtons: function prepareDialogButtons($dialog) {
      var buttons = [];
      var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
      $buttons.each(function () {
        var $originalButton = $(this).css({
          display: 'block',
          width: 0,
          height: 0,
          padding: 0,
          border: 0,
          overflow: 'hidden'
        });
        buttons.push({
          text: $originalButton.html() || $originalButton.attr('value'),
          class: $originalButton.attr('class'),
          click: function click(e) {
            if ($originalButton.is('a')) {
              $originalButton[0].click();
            } else {
              $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
              e.preventDefault();
            }
          }
        });
      });
      return buttons;
    }
  };

  Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
    if (!response.selector) {
      return false;
    }
    var $dialog = $(response.selector);
    if (!$dialog.length) {
      $dialog = $('<div id="' + response.selector.replace(/^#/, '') + '" class="ui-front"/>').appendTo('body');
    }

    if (!ajax.wrapper) {
      ajax.wrapper = $dialog.attr('id');
    }

    response.command = 'insert';
    response.method = 'html';
    ajax.commands.insert(ajax, response, status);

    if (!response.dialogOptions.buttons) {
      response.dialogOptions.drupalAutoButtons = true;
      response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
    }

    $dialog.on('dialogButtonsChange', function () {
      var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
      $dialog.dialog('option', 'buttons', buttons);
    });

    response.dialogOptions = response.dialogOptions || {};
    var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
    if (response.dialogOptions.modal) {
      dialog.showModal();
    } else {
      dialog.show();
    }

    $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
  };

  Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      Drupal.dialog($dialog.get(0)).close();
      if (!response.persist) {
        $dialog.remove();
      }
    }

    $dialog.off('dialogButtonsChange');
  };

  Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
    var $dialog = $(response.selector);
    if ($dialog.length) {
      $dialog.dialog('option', response.optionName, response.optionValue);
    }
  };

  $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
    $element.on('click.dialog', '.dialog-cancel', function (e) {
      dialog.close('cancel');
      e.preventDefault();
      e.stopPropagation();
    });
  });

  $(window).on('dialog:beforeclose', function (e, dialog, $element) {
    $element.off('.dialog');
  });
})(jQuery, Drupal);
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/misc/dialog/dialog.ajax.js. */;
/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/misc/dialog.ajax.js. */
/**
 * @file
 * dialog.ajax.js
 */
(function ($, Drupal, Bootstrap) {

  Drupal.behaviors.dialog.ajaxCurrentButton = null;
  Drupal.behaviors.dialog.ajaxOriginalButton = null;

  // Intercept the success event to add the dialog type to commands.
  var success = Drupal.Ajax.prototype.success;
  Drupal.Ajax.prototype.success = function (response, status) {
    if (this.dialogType) {
      for (var i = 0, l = response.length; i < l; i++) {
        if (response[i].dialogOptions) {
          response[i].dialogType = response[i].dialogOptions.dialogType = this.dialogType;
          response[i].$trigger = response[i].dialogOptions.$trigger = $(this.element);
        }
      }
    }
    return success.apply(this, [response, status]);
  };

  var beforeSerialize = Drupal.Ajax.prototype.beforeSerialize;
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Add the dialog type currently in use.
    if (this.dialogType) {
      options.data['ajax_page_state[dialogType]'] = this.dialogType;

      // Add the dialog element ID if it can be found (useful for closing it).
      var id = $(this.element).parents('.js-drupal-dialog:first').attr('id');
      if (id) {
        options.data['ajax_page_state[dialogId]'] = id;
      }
    }
    return beforeSerialize.apply(this, arguments);
  };

  /**
   * Synchronizes a faux button with its original counterpart.
   *
   * @param {Boolean} [reset = false]
   *   Whether to reset the current and original buttons after synchronizing.
   */
  Drupal.behaviors.dialog.ajaxUpdateButtons = function (reset) {
    if (this.ajaxCurrentButton && this.ajaxOriginalButton) {
      this.ajaxCurrentButton.html(this.ajaxOriginalButton.html());
      this.ajaxCurrentButton.prop('disabled', this.ajaxOriginalButton.prop('disabled'));
    }
    if (reset) {
      this.ajaxCurrentButton = null;
      this.ajaxOriginalButton = null;
    }
  };

  $(document)
    .ajaxSend(function () {
      Drupal.behaviors.dialog.ajaxUpdateButtons();
    })
    .ajaxComplete(function () {
      Drupal.behaviors.dialog.ajaxUpdateButtons(true);
    })
  ;

  /**
   * {@inheritdoc}
   */
  Drupal.behaviors.dialog.prepareDialogButtons = function prepareDialogButtons($dialog) {
    var _this = this;
    var buttons = [];
    var $buttons = $dialog.find('.form-actions').find('button, input[type=submit], a.button, .btn');
    $buttons.each(function () {
      var $originalButton = $(this)
        // Prevent original button from being tabbed to.
        .attr('tabindex', -1)
        // Visually make the original button invisible, but don't actually hide
        // or remove it from the DOM because the click needs to be proxied from
        // the faux button created in the footer to its original counterpart.
        .css({
          display: 'block',
          width: 0,
          height: 0,
          padding: 0,
          border: 0,
          overflow: 'hidden'
        });

      buttons.push({
        // Strip all HTML from the actual text value. This value is escaped.
        // It actual HTML value will be synced with the original button's HTML
        // below in the "create" method.
        text: Bootstrap.stripHtml($originalButton),
        class: $originalButton.attr('class').replace('use-ajax-submit', ''),
        click: function click(e) {
          e.preventDefault();
          e.stopPropagation();
          _this.ajaxCurrentButton = $(e.target);
          _this.ajaxOriginalButton = $originalButton;
          // Some core JS binds dialog buttons to the mousedown or mouseup
          // events instead of click; all three events must be simulated here.
          // @see https://www.drupal.org/project/bootstrap/issues/3016254
          Bootstrap.simulate($originalButton, ['mousedown', 'mouseup', 'click']);
        },
        create: function () {
          _this.ajaxCurrentButton = $(this);
          _this.ajaxOriginalButton = $originalButton;
          _this.ajaxUpdateButtons(true);
        }
      });
    });

    return buttons;
  };

})(window.jQuery, window.Drupal, window.Drupal.bootstrap);

/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/themes/bootstrap/js/misc/dialog.ajax.js. */;
