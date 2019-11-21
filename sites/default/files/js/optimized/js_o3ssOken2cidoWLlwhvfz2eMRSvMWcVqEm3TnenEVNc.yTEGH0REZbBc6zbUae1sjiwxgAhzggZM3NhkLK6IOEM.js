/* Source and licensing information for the line(s) below can be found at http://localhost/DrupalWebsite/core/modules/views_ui/js/views-admin.js. */
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function ($, Drupal, drupalSettings) {
  Drupal.viewsUi = {};

  Drupal.behaviors.viewsUiEditView = {
    attach: function attach() {
      $('[data-drupal-selector="edit-query-options-disable-sql-rewrite"]').on('click', function () {
        $('.sql-rewrite-warning').toggleClass('js-hide');
      });
    }
  };

  Drupal.behaviors.viewsUiAddView = {
    attach: function attach(context) {
      var $context = $(context);

      var exclude = new RegExp('[^a-z0-9\\-]+', 'g');
      var replace = '-';
      var suffix = void 0;

      var $fields = $context.find('[id^="edit-page-title"], [id^="edit-block-title"], [id^="edit-page-link-properties-title"]');
      if ($fields.length) {
        if (!this.fieldsFiller) {
          this.fieldsFiller = new Drupal.viewsUi.FormFieldFiller($fields);
        } else {
          this.fieldsFiller.rebind($fields);
        }
      }

      var $pathField = $context.find('[id^="edit-page-path"]');
      if ($pathField.length) {
        if (!this.pathFiller) {
          this.pathFiller = new Drupal.viewsUi.FormFieldFiller($pathField, exclude, replace);
        } else {
          this.pathFiller.rebind($pathField);
        }
      }

      var $feedField = $context.find('[id^="edit-page-feed-properties-path"]');
      if ($feedField.length) {
        if (!this.feedFiller) {
          suffix = '.xml';
          this.feedFiller = new Drupal.viewsUi.FormFieldFiller($feedField, exclude, replace, suffix);
        } else {
          this.feedFiller.rebind($feedField);
        }
      }
    }
  };

  Drupal.viewsUi.FormFieldFiller = function ($target, exclude, replace, suffix) {
    this.source = $('#edit-label');

    this.target = $target;

    this.exclude = exclude || false;

    this.replace = replace || '';

    this.suffix = suffix || '';

    var self = this;

    this.populate = function () {
      return self._populate.call(self);
    };

    this.unbind = function () {
      return self._unbind.call(self);
    };

    this.bind();
  };

  $.extend(Drupal.viewsUi.FormFieldFiller.prototype, {
    bind: function bind() {
      this.unbind();

      this.source.on('keyup.viewsUi change.viewsUi', this.populate);

      this.target.on('focus.viewsUi', this.unbind);
    },
    getTransliterated: function getTransliterated() {
      var from = this.source.val();
      if (this.exclude) {
        from = from.toLowerCase().replace(this.exclude, this.replace);
      }
      return from;
    },
    _populate: function _populate() {
      var transliterated = this.getTransliterated();
      var suffix = this.suffix;
      this.target.each(function (i) {
        var maxlength = $(this).attr('maxlength') - suffix.length;
        $(this).val(transliterated.substr(0, maxlength) + suffix);
      });
    },
    _unbind: function _unbind() {
      this.source.off('keyup.viewsUi change.viewsUi', this.populate);
      this.target.off('focus.viewsUi', this.unbind);
    },
    rebind: function rebind($fields) {
      this.target = $fields;
      this.bind();
    }
  });

  Drupal.behaviors.addItemForm = {
    attach: function attach(context) {
      var $context = $(context);
      var $form = $context;

      if (!$context.is('form[id^="views-ui-add-handler-form"]')) {
        $form = $context.find('form[id^="views-ui-add-handler-form"]');
      }
      if ($form.once('views-ui-add-handler-form').length) {
        new Drupal.viewsUi.AddItemForm($form);
      }
    }
  };

  Drupal.viewsUi.AddItemForm = function ($form) {
    this.$form = $form;
    this.$form.find('.views-filterable-options :checkbox').on('click', $.proxy(this.handleCheck, this));

    this.$selected_div = this.$form.find('.views-selected-options').parent();
    this.$selected_div.hide();

    this.checkedItems = [];
  };

  Drupal.viewsUi.AddItemForm.prototype.handleCheck = function (event) {
    var $target = $(event.target);
    var label = $.trim($target.closest('td').next().html());

    if ($target.is(':checked')) {
      this.$selected_div.show().css('display', 'block');
      this.checkedItems.push(label);
    } else {
      var position = $.inArray(label, this.checkedItems);

      for (var i = 0; i < this.checkedItems.length; i++) {
        if (i === position) {
          this.checkedItems.splice(i, 1);
          i--;
          break;
        }
      }

      if (this.checkedItems.length === 0) {
        this.$selected_div.hide();
      }
    }
    this.refreshCheckedItems();
  };

  Drupal.viewsUi.AddItemForm.prototype.refreshCheckedItems = function () {
    this.$selected_div.find('.views-selected-options').html(this.checkedItems.join(', ')).trigger('dialogContentResize');
  };

  Drupal.behaviors.viewsUiRenderAddViewButton = {
    attach: function attach(context) {
      var $menu = $(context).find('#views-display-menu-tabs').once('views-ui-render-add-view-button');
      if (!$menu.length) {
        return;
      }

      var $addDisplayDropdown = $('<li class="add"><a href="#"><span class="icon add"></span>' + Drupal.t('Add') + '</a><ul class="action-list" style="display:none;"></ul></li>');
      var $displayButtons = $menu.nextAll('input.add-display').detach();
      $displayButtons.appendTo($addDisplayDropdown.find('.action-list')).wrap('<li>').parent().eq(0).addClass('first').end().eq(-1).addClass('last');

      $displayButtons.each(function () {
        var label = $(this).val();
        if (label.substr(0, 4) === 'Add ') {
          $(this).val(label.substr(4));
        }
      });
      $addDisplayDropdown.appendTo($menu);

      $menu.find('li.add > a').on('click', function (event) {
        event.preventDefault();
        var $trigger = $(this);
        Drupal.behaviors.viewsUiRenderAddViewButton.toggleMenu($trigger);
      });

      $('li.add', $menu).on('mouseleave', function (event) {
        var $this = $(this);
        var $trigger = $this.children('a[href="#"]');
        if ($this.children('.action-list').is(':visible')) {
          Drupal.behaviors.viewsUiRenderAddViewButton.toggleMenu($trigger);
        }
      });
    }
  };

  Drupal.behaviors.viewsUiRenderAddViewButton.toggleMenu = function ($trigger) {
    $trigger.parent().toggleClass('open');
    $trigger.next().slideToggle('fast');
  };

  Drupal.behaviors.viewsUiSearchOptions = {
    attach: function attach(context) {
      var $context = $(context);
      var $form = $context;

      if (!$context.is('form[id^="views-ui-add-handler-form"]')) {
        $form = $context.find('form[id^="views-ui-add-handler-form"]');
      }

      if ($form.once('views-ui-filter-options').length) {
        new Drupal.viewsUi.OptionsSearch($form);
      }
    }
  };

  Drupal.viewsUi.OptionsSearch = function ($form) {
    this.$form = $form;

    this.$form.on('click', 'td.title', function (event) {
      var $target = $(event.currentTarget);
      $target.closest('tr').find('input').trigger('click');
    });

    var searchBoxSelector = '[data-drupal-selector="edit-override-controls-options-search"]';
    var controlGroupSelector = '[data-drupal-selector="edit-override-controls-group"]';
    this.$form.on('formUpdated', searchBoxSelector + ',' + controlGroupSelector, $.proxy(this.handleFilter, this));

    this.$searchBox = this.$form.find(searchBoxSelector);
    this.$controlGroup = this.$form.find(controlGroupSelector);

    this.options = this.getOptions(this.$form.find('.filterable-option'));

    this.$searchBox.on('keypress', function (event) {
      if (event.which === 13) {
        event.preventDefault();
      }
    });
  };

  $.extend(Drupal.viewsUi.OptionsSearch.prototype, {
    getOptions: function getOptions($allOptions) {
      var $title = void 0;
      var $description = void 0;
      var $option = void 0;
      var options = [];
      var length = $allOptions.length;
      for (var i = 0; i < length; i++) {
        $option = $($allOptions[i]);
        $title = $option.find('.title');
        $description = $option.find('.description');
        options[i] = {
          searchText: $title.text().toLowerCase() + ' ' + $description.text().toLowerCase(),

          $div: $option
        };
      }
      return options;
    },
    handleFilter: function handleFilter(event) {
      var search = this.$searchBox.val().toLowerCase();
      var words = search.split(' ');

      var group = this.$controlGroup.val();

      this.options.forEach(function (option) {
        function hasWord(word) {
          return option.searchText.indexOf(word) !== -1;
        }

        var found = true;

        if (search) {
          found = words.every(hasWord);
        }
        if (found && group !== 'all') {
          found = option.$div.hasClass(group);
        }

        option.$div.toggle(found);
      });

      $(event.target).trigger('dialogContentResize');
    }
  });

  Drupal.behaviors.viewsUiPreview = {
    attach: function attach(context) {
      var $contextualFiltersBucket = $(context).find('.views-display-column .views-ui-display-tab-bucket.argument');
      if ($contextualFiltersBucket.length === 0) {
        return;
      }

      var $contextualFilters = $contextualFiltersBucket.find('.views-display-setting a');
      if ($contextualFilters.length) {
        $('#preview-args').parent().show();
      } else {
        $('#preview-args').parent().hide();
      }

      if ($('#edit-displays-live-preview').once('edit-displays-live-preview').is(':checked')) {
        $('#preview-submit').once('edit-displays-live-preview').trigger('click');
      }
    }
  };

  Drupal.behaviors.viewsUiRearrangeFilter = {
    attach: function attach(context) {
      if (typeof Drupal.tableDrag === 'undefined' || typeof Drupal.tableDrag['views-rearrange-filters'] === 'undefined') {
        return;
      }
      var $context = $(context);
      var $table = $context.find('#views-rearrange-filters').once('views-rearrange-filters');
      var $operator = $context.find('.js-form-item-filter-groups-operator').once('views-rearrange-filters');
      if ($table.length) {
        new Drupal.viewsUi.RearrangeFilterHandler($table, $operator);
      }
    }
  };

  Drupal.viewsUi.RearrangeFilterHandler = function ($table, $operator) {
    this.table = $table;

    this.operator = $operator;

    this.hasGroupOperator = this.operator.length > 0;

    this.draggableRows = $table.find('.draggable');

    this.addGroupButton = $('input#views-add-group');

    this.removeGroupButtons = $table.find('input.views-remove-group');

    this.insertAddRemoveFilterGroupLinks();

    if (this.hasGroupOperator) {
      this.dropdowns = this.duplicateGroupsOperator();
      this.syncGroupsOperators();
    }

    this.modifyTableDrag();

    this.redrawOperatorLabels();
    $table.find('.views-group-title select').once('views-rearrange-filter-handler').on('change.views-rearrange-filter-handler', $.proxy(this, 'redrawOperatorLabels'));

    $table.find('a.views-groups-remove-link').once('views-rearrange-filter-handler').on('click.views-rearrange-filter-handler', $.proxy(this, 'updateRowspans')).on('click.views-rearrange-filter-handler', $.proxy(this, 'redrawOperatorLabels'));
  };

  $.extend(Drupal.viewsUi.RearrangeFilterHandler.prototype, {
    insertAddRemoveFilterGroupLinks: function insertAddRemoveFilterGroupLinks() {
      $('<ul class="action-links"><li><a id="views-add-group-link" href="#">' + this.addGroupButton.val() + '</a></li></ul>').prependTo(this.table.parent()).once('views-rearrange-filter-handler').find('#views-add-group-link').on('click.views-rearrange-filter-handler', $.proxy(this, 'clickAddGroupButton'));

      var length = this.removeGroupButtons.length;
      var i = void 0;
      for (i = 0; i < length; i++) {
        var $removeGroupButton = $(this.removeGroupButtons[i]);
        var buttonId = $removeGroupButton.attr('id');
        $('<a href="#" class="views-remove-group-link">' + Drupal.t('Remove group') + '</a>').insertBefore($removeGroupButton).once('views-rearrange-filter-handler').on('click.views-rearrange-filter-handler', { buttonId: buttonId }, $.proxy(this, 'clickRemoveGroupButton'));
      }
    },
    clickAddGroupButton: function clickAddGroupButton(event) {
      this.addGroupButton.trigger('mousedown');
      event.preventDefault();
    },
    clickRemoveGroupButton: function clickRemoveGroupButton(event) {
      this.table.find('#' + event.data.buttonId).trigger('mousedown');
      event.preventDefault();
    },
    duplicateGroupsOperator: function duplicateGroupsOperator() {
      var newRow = void 0;
      var titleRow = void 0;

      var titleRows = $('tr.views-group-title').once('duplicateGroupsOperator');

      if (!titleRows.length) {
        return this.operator;
      }

      this.operator.find('label').add('div.description').addClass('visually-hidden');
      this.operator.find('select').addClass('form-select');

      var dropdowns = this.operator;

      titleRow = $('tr#views-group-title-2');
      newRow = $('<tr class="filter-group-operator-row"><td colspan="5"></td></tr>');
      newRow.find('td').append(this.operator);
      newRow.insertBefore(titleRow);
      var length = titleRows.length;

      for (var i = 2; i < length; i++) {
        titleRow = $(titleRows[i]);

        var fakeOperator = this.operator.clone();
        fakeOperator.attr('id', '');
        newRow = $('<tr class="filter-group-operator-row"><td colspan="5"></td></tr>');
        newRow.find('td').append(fakeOperator);
        newRow.insertBefore(titleRow);
        dropdowns.add(fakeOperator);
      }

      return dropdowns;
    },
    syncGroupsOperators: function syncGroupsOperators() {
      if (this.dropdowns.length < 2) {
        return;
      }

      this.dropdowns.on('change', $.proxy(this, 'operatorChangeHandler'));
    },
    operatorChangeHandler: function operatorChangeHandler(event) {
      var $target = $(event.target);
      var operators = this.dropdowns.find('select').not($target);

      operators.val($target.val());
    },
    modifyTableDrag: function modifyTableDrag() {
      var tableDrag = Drupal.tableDrag['views-rearrange-filters'];
      var filterHandler = this;

      tableDrag.row.prototype.onSwap = function () {
        if (filterHandler.hasGroupOperator) {
          var thisRow = $(this.group);
          var previousRow = thisRow.prev('tr');
          if (previousRow.length && !previousRow.hasClass('group-message') && !previousRow.hasClass('draggable')) {
            var next = thisRow.next();
            if (next.is('tr')) {
              this.swap('after', next);
            }
          }
          filterHandler.updateRowspans();
        }

        filterHandler.redrawOperatorLabels();
      };

      tableDrag.onDrop = function () {
        var changeMarker = $(this.oldRowElement).find('.tabledrag-changed');
        if (changeMarker.length) {
          var operatorLabel = changeMarker.prevAll('.views-operator-label');
          if (operatorLabel.length) {
            operatorLabel.insertAfter(changeMarker);
          }
        }

        var groupRow = $(this.rowObject.element).prevAll('tr.group-message').get(0);
        var groupName = groupRow.className.replace(/([^ ]+[ ]+)*group-([^ ]+)-message([ ]+[^ ]+)*/, '$2');
        var groupField = $('select.views-group-select', this.rowObject.element);
        if (!groupField.is('.views-group-select-' + groupName)) {
          var oldGroupName = groupField.attr('class').replace(/([^ ]+[ ]+)*views-group-select-([^ ]+)([ ]+[^ ]+)*/, '$2');
          groupField.removeClass('views-group-select-' + oldGroupName).addClass('views-group-select-' + groupName);
          groupField.val(groupName);
        }
      };
    },
    redrawOperatorLabels: function redrawOperatorLabels() {
      for (var i = 0; i < this.draggableRows.length; i++) {
        var $draggableRow = $(this.draggableRows[i]);
        var $firstCell = $draggableRow.find('td').eq(0);
        if ($firstCell.length) {
          var operatorValue = $draggableRow.prevAll('.views-group-title').find('option:selected').html();
          var operatorLabel = '<span class="views-operator-label">' + operatorValue + '</span>';

          var $nextRow = $draggableRow.nextAll(':visible').eq(0);
          var $existingOperatorLabel = $firstCell.find('.views-operator-label');
          if ($nextRow.hasClass('draggable')) {
            if ($existingOperatorLabel.length) {
              $existingOperatorLabel.replaceWith(operatorLabel);
            } else {
                $firstCell.append(operatorLabel);
              }
          } else {
              $existingOperatorLabel.remove();
            }
        }
      }
    },
    updateRowspans: function updateRowspans() {
      var $row = void 0;
      var $currentEmptyRow = void 0;
      var draggableCount = void 0;
      var $operatorCell = void 0;
      var rows = $(this.table).find('tr');
      var length = rows.length;
      for (var i = 0; i < length; i++) {
        $row = $(rows[i]);
        if ($row.hasClass('views-group-title')) {
          $operatorCell = $row.find('td.group-operator');

          draggableCount = 0;
          $currentEmptyRow = $row.next('tr');
          $currentEmptyRow.removeClass('group-populated').addClass('group-empty');

          $operatorCell.attr('rowspan', 2);
        } else if ($row.hasClass('draggable') && $row.is(':visible')) {
          draggableCount++;
          $currentEmptyRow.removeClass('group-empty').addClass('group-populated');

          $operatorCell.attr('rowspan', draggableCount + 1);
        }
      }
    }
  });

  Drupal.behaviors.viewsFilterConfigSelectAll = {
    attach: function attach(context) {
      var $context = $(context);

      var $selectAll = $context.find('.js-form-item-options-value-all').once('filterConfigSelectAll');
      var $selectAllCheckbox = $selectAll.find('input[type=checkbox]');
      var $checkboxes = $selectAll.closest('.form-checkboxes').find('.js-form-type-checkbox:not(.js-form-item-options-value-all) input[type="checkbox"]');

      if ($selectAll.length) {
        $selectAll.show();
        $selectAllCheckbox.on('click', function () {
          $checkboxes.prop('checked', $(this).is(':checked'));
        });

        $checkboxes.on('click', function () {
          if ($(this).is('checked') === false) {
            $selectAllCheckbox.prop('checked', false);
          }
        });
      }
    }
  };

  Drupal.behaviors.viewsRemoveIconClass = {
    attach: function attach(context) {
      $(context).find('.dropbutton').once('dropbutton-icon').find('.icon').removeClass('icon');
    }
  };

  Drupal.behaviors.viewsUiCheckboxify = {
    attach: function attach(context, settings) {
      var $buttons = $('[data-drupal-selector="edit-options-expose-button-button"], [data-drupal-selector="edit-options-group-button-button"]').once('views-ui-checkboxify');
      var length = $buttons.length;
      var i = void 0;
      for (i = 0; i < length; i++) {
        new Drupal.viewsUi.Checkboxifier($buttons[i]);
      }
    }
  };

  Drupal.behaviors.viewsUiChangeDefaultWidget = {
    attach: function attach(context) {
      var $context = $(context);

      function changeDefaultWidget(event) {
        if ($(event.target).prop('checked')) {
          $context.find('input.default-radios').parent().hide();
          $context.find('td.any-default-radios-row').parent().hide();
          $context.find('input.default-checkboxes').parent().show();
        } else {
          $context.find('input.default-checkboxes').parent().hide();
          $context.find('td.any-default-radios-row').parent().show();
          $context.find('input.default-radios').parent().show();
        }
      }

      $context.find('input[name="options[group_info][multiple]"]').on('change', changeDefaultWidget).trigger('change');
    }
  };

  Drupal.viewsUi.Checkboxifier = function (button) {
    this.$button = $(button);
    this.$parent = this.$button.parent('div.views-expose, div.views-grouped');
    this.$input = this.$parent.find('input:checkbox, input:radio');

    this.$button.hide();
    this.$parent.find('.exposed-description, .grouped-description').hide();

    this.$input.on('click', $.proxy(this, 'clickHandler'));
  };

  Drupal.viewsUi.Checkboxifier.prototype.clickHandler = function (e) {
    this.$button.trigger('click').trigger('submit');
  };

  Drupal.behaviors.viewsUiOverrideSelect = {
    attach: function attach(context) {
      $(context).find('[data-drupal-selector="edit-override-dropdown"]').once('views-ui-override-button-text').each(function () {
        var $context = $(context);
        var $submit = $context.find('[id^=edit-submit]');
        var oldValue = $submit.val();

        $submit.once('views-ui-override-button-text').on('mouseup', function () {
          $(this).val(oldValue);
          return true;
        });

        $(this).on('change', function () {
          var $this = $(this);
          if ($this.val() === 'default') {
            $submit.val(Drupal.t('Apply (all displays)'));
          } else if ($this.val() === 'default_revert') {
            $submit.val(Drupal.t('Revert to default'));
          } else {
            $submit.val(Drupal.t('Apply (this display)'));
          }
          var $dialog = $context.closest('.ui-dialog-content');
          $dialog.trigger('dialogButtonsChange');
        }).trigger('change');
      });
    }
  };

  Drupal.behaviors.viewsUiHandlerRemoveLink = {
    attach: function attach(context) {
      var $context = $(context);

      $context.find('a.views-remove-link').once('views').on('click', function (event) {
        var id = $(this).attr('id').replace('views-remove-link-', '');
        $context.find('#views-row-' + id).hide();
        $context.find('#views-removed-' + id).prop('checked', true);
        event.preventDefault();
      });

      $context.find('a.display-remove-link').once('display').on('click', function (event) {
        var id = $(this).attr('id').replace('display-remove-link-', '');
        $context.find('#display-row-' + id).hide();
        $context.find('#display-removed-' + id).prop('checked', true);
        event.preventDefault();
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
/* Source and licensing information for the above line(s) can be found at http://localhost/DrupalWebsite/core/modules/views_ui/js/views-admin.js. */