window._ = require("lodash");
window.store = require("store2");

window.axios = require('axios').default;

window.moment = require('moment');
// require("moment/locale/en");

// Wnumb - Number & Money formatting. Learn more: https://refreshless.com/wnumb/
window.wNumb = require("wnumb");

// Waypoints - is the easiest way to trigger a function when you scroll to an element: http://imakewebthings.com/waypoints/
require('waypoints/lib/jquery.waypoints.js');

// Clipboard - Copy text to the clipboard shouldn't be hard. It shouldn't require dozens of steps to configure or hundreds of KBs to load: https://clipboardjs.com/
window.ClipboardJS = require('clipboard/dist/clipboard.min.js');

// The autosize - function accepts a single textarea element, or an array or array-like object (such as a NodeList or jQuery collection) of textarea elements: https://www.jacklmoore.com/autosize/
window.autosize = require('autosize/dist/autosize.js');

// jQuery BlockUI - The jQuery BlockUI Plugin lets you simulate synchronous behavior when using AJAX: http://malsup.com/jquery/block/
require('block-ui/jquery.blockUI.js');

// Popper.js - Tooltip & Popover Positioning Engine used by Bootstrap. Learn more: https://popper.js.org
window.Popper = require('@popperjs/core').default;

// Bootstrap - The most popular framework uses as the foundation. Learn more: http://getbootstrap.com
require("bootstrap");

import bootbox from 'bootbox';
window.bootbox = bootbox;
import 'bootbox/dist/bootbox.locales.min';

// Select2 - Select2 is a jQuery based replacement for select boxes: https://select2.org/
require('select2/dist/js/select2.full.js');

// require("select2/dist/js/i18n/en");

// Typeahead.js - a flexible JavaScript library that provides a strong foundation for building robust typeaheads: https://twitter.github.io/typeahead.js/
window.Bloodhound = require('typeahead.js/dist/typeahead.bundle');

// Toastr - is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended: https://github.com/CodeSeven/toastr
window.toastr = require('toastr/build/toastr.min.js');


// Sticky-js - A library for sticky elements written in vanilla javascript. Learn more: https://rgalus.github.io/sticky-js/
window.Sticky = require('sticky-js');

// DropzoneJS -  is an open source library that provides drag'n'drop file uploads with image previews: https://www.dropzonejs.com/
window.Dropzone = require('dropzone/dist/dropzone.js');
// require('@/src/js/vendors/plugins/dropzone.init.js');

// Perfect-Scrollbar - Minimalistic but perfect custom scrollbar plugin.  Learn more:  https://github.com/mdbootstrap/perfect-scrollbar
window.PerfectScrollbar = require('perfect-scrollbar/dist/perfect-scrollbar');

// FormValidation - Best premium validation library for JavaScript. Zero dependencies. Learn more: https://formvalidation.io/
// window.FormValidation = require("@/src/plugins/formvalidation/dist/js/FormValidation.full.min.js");
// window.FormValidation.plugins.Bootstrap = require("@/src/plugins/formvalidation/dist/amd/plugins/Bootstrap.js").default;

// JQuery Mask Plugin - is a jQuery plugin which create an input mask. An input mask helps the user with the input by ensuring a predefined format: https://igorescobar.github.io/jQuery-Mask-Plugin/
// require('jquery-mask-plugin');

// Bootstrap Datepicker - Bootstrap-datepicker provides a flexible datepicker widget in the Bootstrap style: https://bootstrap-datepicker.readthedocs.io/en/latest/
require('bootstrap-datepicker/dist/js/bootstrap-datepicker.js');
// require('@/src/js/vendors/plugins/bootstrap-datepicker.init.js');

// Bootstrap Timepicker - Easily select a time for a text input using your mouse or keyboards arrow keys: https://jdewit.github.io/bootstrap-timepicker/
require('bootstrap-timepicker/js/bootstrap-timepicker.js');
// require('@/src/js/vendors/plugins/bootstrap-timepicker.init.js');

// Date Range Picker - A JavaScript component for choosing date ranges, dates and times: https://www.daterangepicker.com/
require('bootstrap-daterangepicker/daterangepicker.js');

// Bootstrap Touchspin - A mobile and touch friendly input spinner component for Bootstrap 3: https://www.virtuosoft.eu/code/bootstrap-touchspin/
// require('bootstrap-touchspin/dist/jquery.bootstrap-touchspin.js');

// Bootstrap Maxlength - This plugin integrates by default with Twitter bootstrap using badges to display the maximum length of the field where the user is inserting text: https://github.com/mimo84/bootstrap-maxlength
require('bootstrap-maxlength/src/bootstrap-maxlength.js');

// Bootstrap Switch - Bootstrap switch/toggle is a simple component used for activating one of two predefined options: https://mdbootstrap.com/docs/jquery/forms/switch/
// require('bootstrap-switch/dist/js/bootstrap-switch.js');
// require('@/src/js/vendors/plugins/bootstrap-switch.init.js');

// Inputmask - is a javascript library which creates an input mask: https://github.com/RobinHerbots/Inputmask
// require('inputmask/dist/jquery.inputmask.js');
