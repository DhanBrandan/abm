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



      var btnABM  = new qx.ui.form.Button("ABM");

      var btnTABLA = new qx.ui.form.Button("TABLA");

   
      app.add(btnABM, {left:0, top:0});


      app.add(btnTABLA,{left: 320, top: 0});



      
      var modeloTabla = new qx.ui.table.model.Simple();
     /*
      btnFORM.addListener("execute", function () {
        
        var winSub = new demodani.clases.SubsanacionForm("SUB-SANACION: PROBANDO");
        winSub.open();

        winSub.addListener("sePresionoGuardar", function () {
          
          var valForm = winSub.getDatos();
          
          Tabla.AddValoresTable(valForm);

          winSub.close();

        }, this);
      }, this);
      */

      //
      //
      var TablABM = new demodani.clases.TABLABM("TABLA PRUEBA");

      btnTABLA.addListener("execute", function () {
        
        TablABM.open();

      }, this);

      //--------------------------------------------------------------------------

      var apiRestGral = new qx.io.rest.Resource();
      // Aqui configuramos para que lo que se envia vaya en formato JSON
      apiRestGral.configureRequest(function (req) {
        req.setRequestHeader("Content-Type", "application/json");
      });

      apiRestGral.map("traerDatosABM", "GET", 'backend/GET.php?dni={DNI}');

      apiRestGral.map("altaDatosABM", "POST", 'backend/POST.php');

      apiRestGral.map("modificarDatosABM", "PUT", 'backend/PUT.php?dni={DNI}');
       
      apiRestGral.map("borrarDatosABM", "DELETE", 'backend/DELETE.php?dni={DNI}');
          
      apiRestGral.addListener("success", function (DATOSBACKEND) {
        
                //alert("VOLVIO INFO BACKEND");
                console.log(DATOSBACKEND.getData());

      }, this);

      //--------------------------------------------------------------------------
      btnABM.addListener("execute", function () {

        var btnGuardar = new qx.ui.form.Button("GUARDAR");

        //ENVIAMOS PARAMETRO "DNI" A LA CLASE ABM
        var DNIIngresado = prompt("Ingrese el DNI a modificar sino se dara de ALTA");

        var tabABM = new demodani.clases.ABM(DNIIngresado);
        /*
        var datosPrueba = {
          DNI:321321,
          Apellido:"Paz",
          Nombre:"Alejandro"
        };
        tabABM.setDatos(datosPrueba);*/

        btnGuardar.addListener("execute", function (){

          
          var TODOS = [
            tabABM.getDPersonales(),
            tabABM.getDInstitucion(),
            tabABM.getMConsulta(),
            tabABM.getFDiagnostico(),
            tabABM.getEDiagnostico(),
            tabABM.getLocalizacion(),
            tabABM.getTPaciente(),
            tabABM.getPeso()
          ];
          
          if (tabABM.getEstado() == "Alta") { //alta | modificacion
            // aqui haces lo que tenga que ver con alta
            apiRestGral.altaDatosABM({}, TODOS);
          } else {
          
            // aqui haces lo que tenga que ver con modificacion
            apiRestGral.modificarDatosABM({}, TODOS);

          }
          
          //console.log(TODOS);

        }, this);
        
        var window = new qx.ui.window.Window("Ventana de Prueba");
        
        window.setLayout(new qx.ui.layout.VBox(15));
        window.add(tabABM);
        window.add(btnGuardar)
        window.open();
        
        //apiRestGral.modificarDatosABM();

      }, this);
      //btnABM.execute();
   },
}  

});
