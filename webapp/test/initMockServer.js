sap.ui.define([
    "../localService/mockserver"
], function(mockserver){
    "use strict";

    // mock server initialise
    mockserver.init();

    // embedded component on HTML page
    sap.ui.require(["sap/ui/core/ComponentSupport"]);
})