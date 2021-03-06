/*
 * Copyright (c) 2016
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {
	/**
	 * @namespace
	 */
	OC.SystemTags = {
		/**
		 *
		 * @param {OC.SystemTags.SystemTagModel|Object|String} tag
		 * @return {jQuery}
		 */
		getDescriptiveTag: function(tag) {
			if (_.isUndefined(tag.name) && !_.isUndefined(tag.toJSON)) {
				tag = tag.toJSON();
			}

			if (_.isUndefined(tag.name)) {
				return $('<span>').addClass('non-existing-tag').text(
					t('core', 'Non-existing tag #{tag}', {
						tag: tag
					})
				);
			}

			var $span = $('<span>');
			$span.append(escapeHTML(tag.name));

			var scope;
			if (!tag.userAssignable) {
				scope = t('core', 'restricted');
			}
			if (!tag.userVisible) {
				// invisible also implicitly means not assignable
				scope = t('core', 'invisible');
			}
			if (scope) {
				var $tag = $('<em>').text(' ' +
					t('core', '({scope})', {
						scope: scope
					})
				);
				$span.append($tag);
			}
			return $span;
		}
	};
})(OC);



(function() {
  var template = Handlebars.template, templates = OC.SystemTags.Templates = OC.SystemTags.Templates || {};
templates['result'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " new-item";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "		<span class=\"label\">"
    + ((stack1 = ((helper = (helper = helpers.tagMarkup || (depth0 != null ? depth0.tagMarkup : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tagMarkup","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<span class=\"label\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<span class=\"systemtags-actions\">\n			<a href=\"#\" class=\"rename icon icon-rename\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.renameTooltip || (depth0 != null ? depth0.renameTooltip : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"renameTooltip","hash":{},"data":data}) : helper)))
    + "\"></a>\n		</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", buffer = 
  "<span class=\"systemtags-item"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isNew : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-id=\""
    + container.escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n<span class=\"checkmark icon icon-checkmark\"></span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAdmin : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers.allowActions || (depth0 != null ? depth0.allowActions : depth0)) != null ? helper : alias2),(options={"name":"allowActions","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.allowActions) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</span>\n";
},"useData":true});
templates['result_form'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<a href=\"#\" class=\"delete icon icon-delete\" title=\""
    + container.escapeExpression(((helper = (helper = helpers.deleteTooltip || (depth0 != null ? depth0.deleteTooltip : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"deleteTooltip","hash":{},"data":data}) : helper)))
    + "\"></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"systemtags-rename-form\">\n	 <label class=\"hidden-visually\" for=\""
    + alias4(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cid","hash":{},"data":data}) : helper)))
    + "-rename-input\">"
    + alias4(((helper = (helper = helpers.renameLabel || (depth0 != null ? depth0.renameLabel : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"renameLabel","hash":{},"data":data}) : helper)))
    + "</label>\n	<input id=\""
    + alias4(((helper = (helper = helpers.cid || (depth0 != null ? depth0.cid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cid","hash":{},"data":data}) : helper)))
    + "-rename-input\" type=\"text\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.isAdmin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</form>\n";
},"useData":true});
templates['selection'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "	<span class=\"label\">"
    + ((stack1 = ((helper = (helper = helpers.tagMarkup || (depth0 != null ? depth0.tagMarkup : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"tagMarkup","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "	<span class=\"label\">"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data}) : helper)))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.isAdmin : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});
})();

/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {

	_.extend(OC.Files.Client, {
		PROPERTY_FILEID:	'{' + OC.Files.Client.NS_OWNCLOUD + '}id',
		PROPERTY_CAN_ASSIGN:'{' + OC.Files.Client.NS_OWNCLOUD + '}can-assign',
		PROPERTY_DISPLAYNAME:	'{' + OC.Files.Client.NS_OWNCLOUD + '}display-name',
		PROPERTY_USERVISIBLE:	'{' + OC.Files.Client.NS_OWNCLOUD + '}user-visible',
		PROPERTY_USERASSIGNABLE:'{' + OC.Files.Client.NS_OWNCLOUD + '}user-assignable',
	});

	/**
	 * @class OCA.SystemTags.SystemTagsCollection
	 * @classdesc
	 *
	 * System tag
	 *
	 */
	var SystemTagModel = OC.Backbone.Model.extend(
		/** @lends OCA.SystemTags.SystemTagModel.prototype */ {
		sync: OC.Backbone.davSync,

		defaults: {
			userVisible: true,
			userAssignable: true,
			canAssign: true
		},

		davProperties: {
			'id':	OC.Files.Client.PROPERTY_FILEID,
			'name': OC.Files.Client.PROPERTY_DISPLAYNAME,
			'userVisible': 	OC.Files.Client.PROPERTY_USERVISIBLE,
			'userAssignable': 	OC.Files.Client.PROPERTY_USERASSIGNABLE,
			// read-only, effective permissions computed by the server,
			'canAssign': OC.Files.Client.PROPERTY_CAN_ASSIGN
		},

		parse: function(data) {
			return {
				id: data.id,
				name: data.name,
				userVisible: data.userVisible === true || data.userVisible === 'true',
				userAssignable: data.userAssignable === true || data.userAssignable === 'true',
				canAssign: data.canAssign === true || data.canAssign === 'true'
			};
		}
	});

	OC.SystemTags = OC.SystemTags || {};
	OC.SystemTags.SystemTagModel = SystemTagModel;
})(OC);


/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {
	/**
	 * @class OC.SystemTags.SystemTagsMappingCollection
	 * @classdesc
	 *
	 * Collection of tags assigned to a an object
	 *
	 */
	var SystemTagsMappingCollection = OC.Backbone.Collection.extend(
		/** @lends OC.SystemTags.SystemTagsMappingCollection.prototype */ {

		sync: OC.Backbone.davSync,

		/**
		 * Use PUT instead of PROPPATCH
		 */
		usePUT: true,

		/**
		 * Id of the file for which to filter activities by
		 *
		 * @var int
		 */
		_objectId: null,

		/**
		 * Type of the object to filter by
		 *
		 * @var string
		 */
		_objectType: 'files',

		model: OC.SystemTags.SystemTagModel,

		url: function() {
			return OC.linkToRemote('dav') + '/systemtags-relations/' + this._objectType + '/' + this._objectId;
		},

		/**
		 * Sets the object id to filter by or null for all.
		 *
		 * @param {int} objectId file id or null
		 */
		setObjectId: function(objectId) {
			this._objectId = objectId;
		},

		/**
		 * Sets the object type to filter by or null for all.
		 *
		 * @param {int} objectType file id or null
		 */
		setObjectType: function(objectType) {
			this._objectType = objectType;
		},

		initialize: function(models, options) {
			options = options || {};
			if (!_.isUndefined(options.objectId)) {
				this._objectId = options.objectId;
			}
			if (!_.isUndefined(options.objectType)) {
				this._objectType = options.objectType;
			}
		},

		getTagIds: function() {
			return this.map(function(model) {
				return model.id;
			});
		}
	});

	OC.SystemTags = OC.SystemTags || {};
	OC.SystemTags.SystemTagsMappingCollection = SystemTagsMappingCollection;
})(OC);



/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {

	function filterFunction(model, term) {
		return model.get('name').substr(0, term.length).toLowerCase() === term.toLowerCase();
	}

	/**
	 * @class OCA.SystemTags.SystemTagsCollection
	 * @classdesc
	 *
	 * Collection of tags assigned to a file
	 *
	 */
	var SystemTagsCollection = OC.Backbone.Collection.extend(
		/** @lends OC.SystemTags.SystemTagsCollection.prototype */ {

		sync: OC.Backbone.davSync,

		model: OC.SystemTags.SystemTagModel,

		url: function() {
			return OC.linkToRemote('dav') + '/systemtags/';
		},

		filterByName: function(name) {
			return this.filter(function(model) {
				return filterFunction(model, name);
			});
		},

		reset: function() {
			this.fetched = false;
			return OC.Backbone.Collection.prototype.reset.apply(this, arguments);
		},

		/**
		 * Lazy fetch.
		 * Only fetches once, subsequent calls will directly call the success handler.
		 *
		 * @param options
		 * @param [options.force] true to force fetch even if cached entries exist
		 *
		 * @see Backbone.Collection#fetch
		 */
		fetch: function(options) {
			var self = this;
			options = options || {};
			if (this.fetched || options.force) {
				// directly call handler
				if (options.success) {
					options.success(this, null, options);
				}
				// trigger sync event
				this.trigger('sync', this, null, options);
				return Promise.resolve();
			}

			var success = options.success;
			options = _.extend({}, options);
			options.success = function() {
				self.fetched = true;
				if (success) {
					return success.apply(this, arguments);
				}
			};

			return OC.Backbone.Collection.prototype.fetch.call(this, options);
		}
	});

	OC.SystemTags = OC.SystemTags || {};
	OC.SystemTags.SystemTagsCollection = SystemTagsCollection;

	/**
	 * @type OC.SystemTags.SystemTagsCollection
	 */
	OC.SystemTags.collection = new OC.SystemTags.SystemTagsCollection();
})(OC);



/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

/* global Handlebars */

(function(OC) {

	/**
	 * @class OC.SystemTags.SystemTagsInputField
	 * @classdesc
	 *
	 * Displays a file's system tags
	 *
	 */
	var SystemTagsInputField = OC.Backbone.View.extend(
		/** @lends OC.SystemTags.SystemTagsInputField.prototype */ {

		_rendered: false,

		_newTag: null,

		_lastUsedTags: [],

		className: 'systemTagsInputFieldContainer',

		template: function(data) {
			return '<input class="systemTagsInputField" type="hidden" name="tags" value=""/>';
		},

		/**
		 * Creates a new SystemTagsInputField
		 *
		 * @param {Object} [options]
		 * @param {string} [options.objectType=files] object type for which tags are assigned to
		 * @param {bool} [options.multiple=false] whether to allow selecting multiple tags
		 * @param {bool} [options.allowActions=true] whether tags can be renamed/delete within the dropdown
		 * @param {bool} [options.allowCreate=true] whether new tags can be created
		 * @param {bool} [options.isAdmin=true] whether the user is an administrator
		 * @param {Function} options.initSelection function to convert selection to data
		 */
		initialize: function(options) {
			options = options || {};

			this._multiple = !!options.multiple;
			this._allowActions = _.isUndefined(options.allowActions) || !!options.allowActions;
			this._allowCreate = _.isUndefined(options.allowCreate) || !!options.allowCreate;
			this._isAdmin = !!options.isAdmin;

			if (_.isFunction(options.initSelection)) {
				this._initSelection = options.initSelection;
			}

			this.collection = options.collection || OC.SystemTags.collection;

			var self = this;
			this.collection.on('change:name remove', function() {
				// refresh selection
				_.defer(self._refreshSelection);
			});

			_.defer(_.bind(this._getLastUsedTags, this));

			_.bindAll(
				this,
				'_refreshSelection',
				'_onClickRenameTag',
				'_onClickDeleteTag',
				'_onSelectTag',
				'_onDeselectTag',
				'_onSubmitRenameTag'
			);
		},

		_getLastUsedTags: function() {
			var self = this;
			$.ajax({
				type: 'GET',
				url: OC.generateUrl('/apps/systemtags/lastused'),
				success: function (response) {
					self._lastUsedTags = response;
				}
			});
		},

		/**
		 * Refreshes the selection, triggering a call to
		 * select2's initSelection
		 */
		_refreshSelection: function() {
			this.$tagsField.select2('val', this.$tagsField.val());
		},

		/**
		 * Event handler whenever the user clicked the "rename" action.
		 * This will display the rename field.
		 */
		_onClickRenameTag: function(ev) {
			var $item = $(ev.target).closest('.systemtags-item');
			var tagId = $item.attr('data-id');
			var tagModel = this.collection.get(tagId);

			var oldName = tagModel.get('name');
			var $renameForm = $(OC.SystemTags.Templates['result_form']({
				cid: this.cid,
				name: oldName,
				deleteTooltip: t('core', 'Delete'),
				renameLabel: t('core', 'Rename'),
				isAdmin: this._isAdmin
			}));
			$item.find('.label').after($renameForm);
			$item.find('.label, .systemtags-actions').addClass('hidden');
			$item.closest('.select2-result').addClass('has-form');

			$renameForm.find('[title]').tooltip({
				placement: 'bottom',
				container: 'body'
			});
			$renameForm.find('input').focus().selectRange(0, oldName.length);
			return false;
		},

		/**
		 * Event handler whenever the rename form has been submitted after
		 * the user entered a new tag name.
		 * This will submit the change to the server. 
		 *
		 * @param {Object} ev event
		 */
		_onSubmitRenameTag: function(ev) {
			ev.preventDefault();
			var $form = $(ev.target);
			var $item = $form.closest('.systemtags-item');
			var tagId = $item.attr('data-id');
			var tagModel = this.collection.get(tagId);
			var newName = $(ev.target).find('input').val().trim();
			if (newName && newName !== tagModel.get('name')) {
				tagModel.save({'name': newName});
				// TODO: spinner, and only change text after finished saving
				$item.find('.label').text(newName);
			}
			$item.find('.label, .systemtags-actions').removeClass('hidden');
			$form.remove();
			$item.closest('.select2-result').removeClass('has-form');
		},

		/**
		 * Event handler whenever a tag must be deleted
		 *
		 * @param {Object} ev event
		 */
		_onClickDeleteTag: function(ev) {
			var $item = $(ev.target).closest('.systemtags-item');
			var tagId = $item.attr('data-id');
			this.collection.get(tagId).destroy();
			$(ev.target).tooltip('hide');
			$item.closest('.select2-result').remove();
			// TODO: spinner
			return false;
		},

		_addToSelect2Selection: function(selection) {
			var data = this.$tagsField.select2('data');
			data.push(selection);
			this.$tagsField.select2('data', data);
		},

		/**
		 * Event handler whenever a tag is selected.
		 * Also called whenever tag creation is requested through the dummy tag object.
		 *
		 * @param {Object} e event
		 */
		_onSelectTag: function(e) {
			var self = this;
			var tag;
			if (e.object && e.object.isNew) {
				// newly created tag, check if existing
				// create a new tag
				tag = this.collection.create({
					name: e.object.name.trim(),
					userVisible: true,
					userAssignable: true,
					canAssign: true
				}, {
					success: function(model) {
						self._addToSelect2Selection(model.toJSON());
						self._lastUsedTags.unshift(model.id);
						self.trigger('select', model);
					},
					error: function(model, xhr) {
						if (xhr.status === 409) {
							// re-fetch collection to get the missing tag
							self.collection.reset();
							self.collection.fetch({
								success: function(collection) {
									// find the tag in the collection
									var model = collection.where({
										name: e.object.name.trim(),
										userVisible: true,
										userAssignable: true
									});
									if (model.length) {
										model = model[0];
										// the tag already exists or was already assigned,
										// add it to the list anyway
										self._addToSelect2Selection(model.toJSON());
										self.trigger('select', model);
									}
								}
							});
						}
					}
				});
				this.$tagsField.select2('close');
				e.preventDefault();
				return false;
			} else {
				tag = this.collection.get(e.object.id);
				this._lastUsedTags.unshift(tag.id);
			}
			this._newTag = null;
			this.trigger('select', tag);
		},

		/**
		 * Event handler whenever a tag gets deselected.
		 *
		 * @param {Object} e event
		 */
		_onDeselectTag: function(e) {
			this.trigger('deselect', e.choice.id);
		},

		/**
		 * Autocomplete function for dropdown results
		 *
		 * @param {Object} query select2 query object
		 */
		_queryTagsAutocomplete: function(query) {
			var self = this;
			this.collection.fetch({
				success: function(collection) {
					var tagModels = collection.filterByName(query.term.trim());
					if (!self._isAdmin) {
						tagModels = _.filter(tagModels, function(tagModel) {
							return tagModel.get('canAssign');
						});
					}
					query.callback({
						results: _.invoke(tagModels, 'toJSON')
					});
				}
			});
		},

		_preventDefault: function(e) {
			e.stopPropagation();
		},

		/**
		 * Formats a single dropdown result
		 *
		 * @param {Object} data data to format
		 * @return {string} HTML markup
		 */
		_formatDropDownResult: function(data) {
			return OC.SystemTags.Templates['result'](_.extend({
				renameTooltip: t('core', 'Rename'),
				allowActions: this._allowActions,
				tagMarkup: this._isAdmin ? OC.SystemTags.getDescriptiveTag(data)[0].innerHTML : null,
				isAdmin: this._isAdmin
			}, data));
		},

		/**
		 * Formats a single selection item
		 *
		 * @param {Object} data data to format
		 * @return {string} HTML markup
		 */
		_formatSelection: function(data) {
			return OC.SystemTags.Templates['selection'](_.extend({
				tagMarkup: this._isAdmin ? OC.SystemTags.getDescriptiveTag(data)[0].innerHTML : null,
				isAdmin: this._isAdmin
			}, data));
		},

		/**
		 * Create new dummy choice for select2 when the user
		 * types an arbitrary string
		 *
		 * @param {string} term entered term
		 * @return {Object} dummy tag
		 */
		_createSearchChoice: function(term) {
			term = term.trim();
			if (this.collection.filter(function(entry) {
					return entry.get('name') === term;
				}).length) {
				return;
			}
			if (!this._newTag) {
				this._newTag = {
					id: -1,
					name: term,
					userAssignable: true,
					userVisible: true,
					canAssign: true,
					isNew: true
				};
			} else {
				this._newTag.name = term;
			}

			return this._newTag;
		},

		_initSelection: function(element, callback) {
			var self = this;
			var ids = $(element).val().split(',');

			function modelToSelection(model) {
				var data = model.toJSON();
				if (!self._isAdmin && !data.canAssign) {
					// lock static tags for non-admins
					data.locked = true;
				}
				return data;
			}

			function findSelectedObjects(ids) {
				var selectedModels = self.collection.filter(function(model) {
					return ids.indexOf(model.id) >= 0 && (self._isAdmin || model.get('userVisible'));
				});
				return _.map(selectedModels, modelToSelection);
			}

			this.collection.fetch({
				success: function() {
					callback(findSelectedObjects(ids));
				}
			});
		},

		/**
		 * Renders this details view
		 */
		render: function() {
			var self = this;
			this.$el.html(this.template());

			this.$el.find('[title]').tooltip({placement: 'bottom'});
			this.$tagsField = this.$el.find('[name=tags]');
			this.$tagsField.select2({
				placeholder: t('core', 'Collaborative tags'),
				containerCssClass: 'systemtags-select2-container',
				dropdownCssClass: 'systemtags-select2-dropdown',
				closeOnSelect: false,
				allowClear: false,
				multiple: this._multiple,
				toggleSelect: this._multiple,
				query: _.bind(this._queryTagsAutocomplete, this),
				id: function(tag) {
					return tag.id;
				},
				initSelection: _.bind(this._initSelection, this),
				formatResult: _.bind(this._formatDropDownResult, this),
				formatSelection: _.bind(this._formatSelection, this),
				createSearchChoice: this._allowCreate ? _.bind(this._createSearchChoice, this) : undefined,
				sortResults: function(results) {
					var selectedItems = _.pluck(self.$tagsField.select2('data'), 'id');
					results.sort(function(a, b) {
						var aSelected = selectedItems.indexOf(a.id) >= 0;
						var bSelected = selectedItems.indexOf(b.id) >= 0;
						if (aSelected === bSelected) {
							var aLastUsed = self._lastUsedTags.indexOf(a.id);
							var bLastUsed = self._lastUsedTags.indexOf(b.id);

							if (aLastUsed !== bLastUsed) {
								if (bLastUsed === -1) {
									return -1;
								}
								if (aLastUsed === -1) {
									return 1;
								}
								return aLastUsed < bLastUsed ? -1 : 1;
							}

							// Both not found
							return OC.Util.naturalSortCompare(a.name, b.name);
						}
						if (aSelected && !bSelected) {
							return -1;
						}
						return 1;
					});
					return results;
				},
				formatNoMatches: function() {
					return t('core', 'No tags found');
				}
			})
				.on('select2-selecting', this._onSelectTag)
				.on('select2-removing', this._onDeselectTag);

			var $dropDown = this.$tagsField.select2('dropdown');
			// register events for inside the dropdown
			$dropDown.on('mouseup', '.rename', this._onClickRenameTag);
			$dropDown.on('mouseup', '.delete', this._onClickDeleteTag);
			$dropDown.on('mouseup', '.select2-result-selectable.has-form', this._preventDefault);
			$dropDown.on('submit', '.systemtags-rename-form', this._onSubmitRenameTag);

			this.delegateEvents();
		},

		remove: function() {
			if (this.$tagsField) {
				this.$tagsField.select2('destroy');
			}
		},

		getValues: function() {
			this.$tagsField.select2('val');
		},

		setValues: function(values) {
			this.$tagsField.select2('val', values);
		},

		setData: function(data) {
			this.$tagsField.select2('data', data);
		}
	});

	OC.SystemTags = OC.SystemTags || {};
	OC.SystemTags.SystemTagsInputField = SystemTagsInputField;

})(OC);



