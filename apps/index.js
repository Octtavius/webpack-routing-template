var angular = require("angular");
import uiRoute from 'angular-ui-router';

var ConfigRouter = require("./routing");

angular.module("codeSplitApp", [uiRoute])
    .config(ConfigRouter);

require("./main/m-index");
// require("./viewer/viewer-index");

