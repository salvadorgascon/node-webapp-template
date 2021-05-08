import 'styles/vendors/vendors.scss'
import 'styles/core/core.scss'
import 'styles/shared/shared.scss'

import 'scripts/vendors/plugins/index.js'
import 'scripts/vendors/includes/index.js'

// import setDefaults from 'scripts/core/functions/set-defaults'
// setDefaults();

import { Application } from "stimulus";
// import { definitionsFromContext } from "stimulus/webpack-helpers";

import StartIndexController from 'scripts/core/controllers/start-index-controller'
import Error404Controller from 'scripts/core/controllers/error-404-controller'
import Error500Controller from 'scripts/core/controllers/error-500-controller'

const application = Application.start();

application.register("start-index", StartIndexController);
application.register("error-404", Error404Controller);
application.register("error-500", Error500Controller);