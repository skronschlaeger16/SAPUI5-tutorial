sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/Device"
  ],
  function (UIComponent, JSONModel, ResourceModel, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.walkthrough.Component", {
      metadata: {     
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      },
      init : function () {
        UIComponent.prototype.init.apply(this, arguments);

        var oData = {
          recipient: {
            name: "UI5",
          },
        };

        var oModel = new JSONModel(oData);
        this.setModel(oModel);


        var oDeviceModel = new JSONModel(Device);
        oDeviceModel.setDefaultBindingMode("OneWay");
        this.setModel(oDeviceModel, "device");

        this.getRouter().initialize();


        // var i18nModel = new ResourceModel({
        //   bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //   supportedLocales: [""],
        //   fallbackLocale: "",
        // });

        // this.setModel(i18nModel, "i18n");
      },
      getContentDensityClass : function () {
        if(!this._sContentDensityClass) {
          if(!Device.support.touch) {
            this._sContentDensityClass = "sapUiSizeCompact";
      
          } else
          {
            this._sContentDensityClass = "sapUiSizeCozy";
          }
        }
        return this._sContentDensityClass;
      }
    });
  }
);
