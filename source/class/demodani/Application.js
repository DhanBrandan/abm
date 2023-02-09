/* ************************************************************************

   Copyright: 2022 

   License: GPLv3.0

   Authors: Ing. Alejandro Paz
            pazalejandro
            pazalejandro@gmail.com

************************************************************************ */

/**
 * This is the main application class of "demodani"
 *
 * @asset(demodani/*)
 * 
 * #asset(demodani/*)
 */
qx.Class.define("demodani.Application",
{
  extend : qx.application.Standalone,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      INICIAMOS EL PROYECTO
      */

      var app = this.getRoot();

      this.getRoot().set({ blockerColor: '#bfbfbf', blockerOpacity: 0.6 });



      var btnWidget  = new qx.ui.form.Button("Widgets");

      
      app.add(btnWidget, {left:0, top:0});

    

      btnWidget.addListener("execute", function () {
        
        var Widgets = new demodani.clases.Widgets("Widgets");

        Widgets.setLayout(new qx.ui.layout.VBox(15));

        Widgets.open();

      }, this);
   },
}  

});
