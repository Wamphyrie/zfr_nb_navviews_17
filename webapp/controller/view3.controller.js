sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("phoenix.zfr_nb_navviews_17.controller.view3", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf phoenix.zfr_nb_navviews_17.view.view3
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf phoenix.zfr_nb_navviews_17.view.view3
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf phoenix.zfr_nb_navviews_17.view.view3
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf phoenix.zfr_nb_navviews_17.view.view3
		 */
		//	onExit: function() {
		//
		//	}
		EH_b2o : function()
		{
			this.getOwnerComponent().getRouter().navTo("object",{objectId:"1001"}, true);
		},
		
		EH_2V4  : function ()
		{
			this.getOwnerComponent().getRouter().navTo("view4", {}, false);
		}
	});

});