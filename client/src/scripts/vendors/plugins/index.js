window._ = require("lodash");
window.store = require("store2");

window.axios = require('axios').default;

import './metronic.js'

// jQuery BlockUI - The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX: http://malsup.com/jquery/block/
require('block-ui/jquery.blockUI.js');

import bootbox from 'bootbox';
window.bootbox = bootbox;
import 'bootbox/dist/bootbox.locales.min';

// Typeahead.js - a flexible JavaScript library that provides a strong foundation for building robust typeaheads: https://twitter.github.io/typeahead.js/
window.Bloodhound = require('typeahead.js/dist/typeahead.bundle');
