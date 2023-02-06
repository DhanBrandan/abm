qx.Class.define("demodani.clases.TABLABM", {
    extend: qx.ui.window.Window,
    events : {
        "sePresionoGuardar" : "qx.event.type.Event",
    },
    
    construct: function () {
        this.base(arguments);

        this.setShowMinimize(true);
        this.setShowMaximize(true);
        this.setWidth(1500);
        this.setCaption("TABLA ABM");
        this.addListenerOnce("resize", this.center, this);
        this.setModal(false);

        this.setLayout(new qx.ui.layout.VBox(20));


        var modeloTabla = new qx.ui.table.model.Simple();
        this.modeloTabla = modeloTabla;
        

        modeloTabla.setColumns(
        [
            "Apellido",
            "Nombre",
            "Fecha",
            "DNI",
            "Domicilio",
            "NumeroCasa",
            "Localidad",
            "Pais",
            "Celular",
            "OtroDomicilio",
            "PaisNacimiento",
            "TiempoArgentina"

        ],
        [
            "Apellido",
            "Nombre",
            "Fecha",
            "DNI",
            "Domicilio",
            "NumeroCasa",
            "Localidad",
            "Pais",
            "Celular",
            "OtroDomicilio",
            "PaisNacimiento",
            "TiempoArgentina"
        ]);

        var apiRest = new qx.io.rest.Resource();

            apiRest.map("traerDatosABM", "GET", 'backend/GET.php?dni={DNI}');

            apiRest.addListener("success", function (e) {
            
            //console.log(e.getData());
            modeloTabla.setDataAsMapArray([e.getData()]);

        });

        apiRest.traerDatosABM();

        //------------------------------------------------------------------------

        var tabla = new qx.ui.table.Table(modeloTabla);
        
        tabla.setContextMenuFromDataCellsOnly(false)
        
        this.add(tabla);

        tabla.setHeight(200);
        

        var menu = new qx.ui.menu.Menu();

        var mbtAgregar = new qx.ui.menu.Button("Agregar");
        var mbtModificar = new qx.ui.menu.Button("Modificar");
        var mbtBorrar = new qx.ui.menu.Button("Borrar");
        var mbtSubsanacion = new qx.ui.menu.Button("Subsanacion");

        menu.add(mbtAgregar);
        menu.add(mbtModificar);
        menu.add(mbtBorrar);
        menu.add(mbtSubsanacion);

        tabla.setContextMenu(menu);

        var window = new qx.ui.window.Window("ABM Ventana de Prueba");
        window.setLayout(new qx.ui.layout.VBox(15));

        var modeloSeleccion = tabla.getSelectionModel();

        //----------------------------------------------------------------------------------------
        

        mbtAgregar.addListener("execute", function () {
            var ABMFORM = new demodani.clases.ABM("ABM: PROBANDO");
            window.add(ABMFORM);
            window.open();
            
            
            ABMFORM.addListener("sePresionoGuardar", function () {
              
                var valoresFormulario = ABMFORM.getDPersonales();

                console.log("estos datos estan en valores del formulario" + valoresFormulario);

                modeloTabla.addRowsAsMapArray([valoresFormulario]);

                window.close();
    
            }, this);
        }, this);
    },

members: {

    AddValoresTable: function (jSonData){
        this.modeloTabla.addRowsAsMapArray([jSonData]);
    },
}

});