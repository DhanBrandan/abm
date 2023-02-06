qx.Class.define("demodani.clases.ABM", {
    //extend: qx.ui.window.Window,
    extend: qx.ui.tabview.TabView,
    events : {
        "sePresionoGuardar" : "qx.event.type.Event",
         "Nuevo" : "qx.event.type.Event",
    },
    construct: function (DNI = null) {
        this.base(arguments);
        
//--------------------------------------------------------------------------------------------

        this.pagDatos = new qx.ui.tabview.Page("Datos Personales");
        this.pagDatos.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagDatos);

        this.pagInstitucion = new qx.ui.tabview.Page("Datos De La Institucion");
        this.pagInstitucion.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagInstitucion);

        this.pagMotivoConsulta = new qx.ui.tabview.Page("Motivo de Consulta");
        this.pagMotivoConsulta.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagMotivoConsulta);

        this.pagFechaDiagnostico = new qx.ui.tabview.Page("Fecha De Diagnostico");
        this.pagFechaDiagnostico.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagFechaDiagnostico);

        this.pagExamenDiagnostico = new qx.ui.tabview.Page("Examen De Diagnostico");
        this.pagExamenDiagnostico.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagExamenDiagnostico);
        
        this.pagLocalizacion = new qx.ui.tabview.Page("Localizacion");
        this.pagLocalizacion.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagLocalizacion);

        this.pagTipoPaciente = new qx.ui.tabview.Page("Tipo de Paciente");
        this.pagTipoPaciente.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagTipoPaciente);

        this.pagPeso = new qx.ui.tabview.Page("Peso");
        this.pagPeso.setLayout(new qx.ui.layout.VBox(5));
        this.add(this.pagPeso);

        /*btnGuardar0 = new qx.ui.form.Button("Guardar");
        this.add(btnGuardar0);*/

        //-------------------------------------------------------------------------              
        
        var apiRest = new qx.io.rest.Resource();
        // Aqui configuramos para que lo que se envia vaya en formato JSON
        apiRest.configureRequest(function (req) {
                req.setRequestHeader("Content-Type", "application/json");

        });

        apiRest.map("traerDatosABM", "GET", 'backend/GET.php?dni={DNI}');

        apiRest.map("altaDatosABM", "POST", 'backend/POST.php');

        apiRest.map("modificarDatosABM", "PUT", 'backend/PUT.php?dni={DNI}');
        
        apiRest.map("borrarDatosABM", "DELETE", 'backend/DELETE.php?dni={DNI}');
                
        apiRest.addListener("success", function (DATOSBACKEND) {
                
                //alert("VOLVIO INFO BACKEND");
                //console.log(DATOSBACKEND.getData());
                //this.txtApe.setValue(DATOSBACKEND.getData().apellido);
                //this.spiDni.setValue(DATOSBACKEND.getData().dni);

                //-----------TRAE TODA LA INFORMACION DEL BACKEND PARA MANIPULAR DESDE EL FRONT END 
                this.setDatos(DATOSBACKEND.getData())

        }, this);

        //-----------------------------------------------------------------------------
        
        this.getFormDatos();
        
        if ((DNI > 0)) {
                alert("Modificar DNI:"+ DNI);
                apiRest.modificarDatosABM({DNI:DNI});  
                
        } else {

                alert("INGRESE LOS DATOS PARA DAR DE ALTA AL USUARIO");     
        }  
        
        this.Estado = DNI;

    },

        //-----------------------------------------------------------------------------

    members : { 
        getEstado: function(){
        
                if( this.Estado > 0 ){
                        return "Modificacion";
                }else{
                        return "Alta";
                }

        },

        getDPersonales : function (){  

            var Apellido = this.txtApe.getValue();
            var Nombre = this.txtNom.getValue();
            var Fecha = this.DateField.getDateFormat().format(this.DateField.getValue());
            var DNI = this.spiDni.getValue();
            var Domicilio = this.txtDom.getValue();
            var NumeroCasa = this.spiNumCasSpi.getValue();
            var Localidad = this.txtLoc.getValue();
            var Pais = this.txtPais.getValue();
            var Celular = this.txtCel.getValue();
            var OtroDomicilio = this.txtOtrDom.getValue();
            var PaisNacimiento = this.txtPaiNac.getValue();
            var TiempoArgentina = this.txtTieArg.getValue();

            
            var json = {}

            json.Ape = Apellido;
            json.Nom = Nombre;
            json.Dat = Fecha;
            json.DNI = DNI;
            json.Dom = Domicilio;
            json.NumCas = NumeroCasa;
            json.Loc = Localidad;
            json.Pais = Pais;
            json.Cel = Celular;
            json.OtrDom = OtroDomicilio;
            json.PaiNac = PaisNacimiento;
            json.TieArg = TiempoArgentina;
             
            //console.log(json);

            return json;
        }, //----------------------------------------------------------------------------------

        getDInstitucion : function (){  
        
                var Institucion = this.Institucion.getModelSelection().toArray()[0];
                var Direccion = this.txtInstitucion.getValue();

                var json = {}
                
                json.Inst = Institucion;
                json.Direc = Direccion;
              
                //console.log(json);
    
                return json;
        },

        getMConsulta : function (){  
        
                var jCHKConsulta1 = this.CHKConsulta1.getValue();
                var jCHKConsulta2 = this.CHKConsulta2.getValue();
                var jCHKConsulta3 = this.CHKConsulta3.getValue();
                var jCHKConsulta4 = this.CHKConsulta4.getValue();
                var jCHKConsulta5 = this.CHKConsulta5.getValue();
                var jCHKConsulta6 = this.CHKConsulta6.getValue();

                var json = {}
                
                json.jCHKConsulta1 = jCHKConsulta1;
                json.jCHKConsulta2 = jCHKConsulta2;
                json.jCHKConsulta3 = jCHKConsulta3;
                json.jCHKConsulta4 = jCHKConsulta4;
                json.jCHKConsulta5 = jCHKConsulta5;
                json.jCHKConsulta6 = jCHKConsulta6;

              
                //console.log(json);
    
                return json;
        },

        getFDiagnostico : function (){  
        
                var jDateFecha = this.DateFecha.getValue();
                
                var json = {}
                
                json.jDateFecha = jDateFecha;
                
                //console.log(json);
    
                return json;
        },

        getEDiagnostico : function (){  
        
                var jFecha1 = this.Fecha1.getValue();
                var jFecha2 = this.Fecha2.getValue();
                var jFecha3 = this.Fecha3.getValue();
                var jFecha4 = this.Fecha4.getValue();
                var jFecha5 = this.Fecha5.getValue();

                var jResultado1 = this.resultado1.getValue();
                var jResultado2 = this.resultado2.getValue();
                var jResultado3 = this.resultado3.getValue();
                var jResultado4 = this.resultado4.getValue();
                var jResultado5 = this.resultado5.getValue();

                
                var jradiobtn1 = this.RadioButtonEx1.getValue();
                var jradiobtn2 = this.RadioButtonEx2.getValue();

                var json = {}
                
                json.jFecha1 = jFecha1;
                json.jFecha2 = jFecha2;
                json.jFecha3 = jFecha3;
                json.jFecha4 = jFecha4;
                json.jFecha5 = jFecha5;

                json.resultado1 = jResultado1;
                json.resultado2 = jResultado2;
                json.resultado3 = jResultado3;
                json.resultado4 = jResultado4;
                json.resultado5 = jResultado5;

                json.jradiobtn1 = jradiobtn1;
                json.jradiobtn2 = jradiobtn2;
                

              
                return json;
        },

        getLocalizacion : function () {

                var jradioGP1 = this.radioGroupLoc1.getValue();
                var jradiobGP2 = this.radioGroupLoc2.getValue();

                var jTxtArea = this.txtAreaLoc.getValue();

                var json = {}
                
                json.jradioGP1 = jradioGP1;
                json.jradiobGP2 = jradiobGP2;

                json.jTxtArea = jTxtArea;
    
                return json;
        
        },

        getTPaciente : function () {

                var jradioGroupNew = this.radioGroupNew.getValue();
                var jradioGroupTras = this.radioGroupTras.getValue();
                var jradioGroupRec = this.radioGroupRec.getValue();
                var jradioGroupAban = this.radioGroupAban.getValue();
                var jradioGroupFrac = this.radioGroupFrac.getValue();

                var jtxtPaciente = this.txtPaciente.getValue();


                var json = {}
                
                json.jradioGroupNew = jradioGroupNew;
                json.jradioGroupTras = jradioGroupTras;
                json.jradioGroupRec = jradioGroupRec;
                json.jradioGroupAban = jradioGroupAban;
                json.jradioGroupFrac = jradioGroupFrac;

                json.jtxtPaciente = jtxtPaciente;
    
                return json;

        },

        getPeso : function () {

                var jPeso = this.SpinnerPeso.getValue();

                var json = {}

                json.jPeso = jPeso;

                return json;
        },

        setDatos : function (jSonData){
                
                this.txtApe.setValue(jSonData.Apellido);
                this.txtNom.setValue(jSonData.Nombre);
                this.spiDni.setValue(jSonData.DNI);
                this.txtDom.setValue(jSonData.Domicilio);
                this.spiNumCasSpi.setValue(jSonData.NumeroCasa);
                this.txtLoc.setValue(jSonData.Localidad);
                this.txtPais.setValue(jSonData.Pais);
                this.txtCel.setValue(jSonData.Celular);
                this.txtOtrDom.setValue(jSonData.OtroDomicilio);
                this.txtPaiNac.setValue(jSonData.PaisNacimiento);
                this.txtTieArg.setValue(jSonData.TiempoArgentina);

                console.log(jSonData);
        },

getFormDatos : function () {
        var lblApe = new qx.ui.basic.Label("APELLIDO:");
        var lblNom = new qx.ui.basic.Label("NOMBRES:");
        var lblDat = new qx.ui.basic.Label("FECHA:");
        var lblDNI = new qx.ui.basic.Label("DNI:");
        var lblDom = new qx.ui.basic.Label("DOMICILIO PERSONAL - CALLE:");
        var lblNumCas = new qx.ui.basic.Label("NRO CASA:");
        var lblLoc = new qx.ui.basic.Label("LOCALIDAD:");
        var lblPais = new qx.ui.basic.Label("PAIS:");
        var lblCel = new qx.ui.basic.Label("CEL / TEL:");
        var lblOtrDom = new qx.ui.basic.Label("OTRO DOMICILIO (LABORAL, FAMILIAR, ETC):");
        var lblPaiNac = new qx.ui.basic.Label("PAIS NACIMIENTO:");
        var lblTieArg = new qx.ui.basic.Label("TIEMPO EN ARGENTINA:");

//-------------------------------------------------------------------------------------------

       this.estadoClase = {
        a: "Alta",
        b: "Modificacion"
       }

//-------------------------------------------------------------------------------------------
        this.txtApe = new qx.ui.form.TextField("");
        this.txtNom = new qx.ui.form.TextField("");

        this.DateField = new qx.ui.form.DateField(); // new qx.ui.form.DateField();

        this.DateField.setDateFormat(new qx.util.format.DateFormat("dd/MM/yyyy")); // error en el formato-
        this.DateField.setValue(new Date());

        this.spiDni =  new qx.ui.form.Spinner(0, 0, 99999999);

        this.txtDom = new qx.ui.form.TextField("");

        this.spiNumCasSpi =  new qx.ui.form.Spinner(0, 0, 99999999);

        this.txtLoc = new qx.ui.form.TextField("");
        this.txtPais = new qx.ui.form.TextField("");
        this.txtCel = new qx.ui.form.TextField("");
        this.txtOtrDom = new qx.ui.form.TextField("");
        this.txtPaiNac = new qx.ui.form.TextField("");
        this.txtTieArg = new qx.ui.form.TextField("");

        this.pagDatos.add(lblApe);
        this.pagDatos.add(this.txtApe);

        this.pagDatos.add(lblNom);
        this.pagDatos.add(this.txtNom);

        this.pagDatos.add(lblDat);
        this.pagDatos.add(this.DateField);

        this.pagDatos.add(lblDNI);
        this.pagDatos.add(this.spiDni);

        this.pagDatos.add(lblDom);
        this.pagDatos.add(this.txtDom);

        this.pagDatos.add(lblNumCas);
        this.pagDatos.add(this.spiNumCasSpi);

        this.pagDatos.add(lblLoc);
        this.pagDatos.add(this.txtLoc);

        this.pagDatos.add(lblPais);
        this.pagDatos.add(this.txtPais);

        this.pagDatos.add(lblCel);
        this.pagDatos.add(this.txtCel);

        this.pagDatos.add(lblOtrDom);
        this.pagDatos.add(this.txtOtrDom);

        this.pagDatos.add(lblPaiNac);
        this.pagDatos.add(this.txtPaiNac);

        this.pagDatos.add(lblTieArg);
        this.pagDatos.add(this.txtTieArg);

        var btnGuardar = new qx.ui.form.Button("Guadar");
        this.pagDatos.add(btnGuardar);




        //----------------------------DATOS------------------------------------------

        var apiRest = new qx.io.rest.Resource();
        apiRest.configureRequest(function (req) {

                req.setRequestHeader("Content-Type", "application/json");
        
        });
        
        //traemos los datos del back end - ej. nombre pertenece al backend y nom es el dato que envio "pertenece este caso a un jSon"
        apiRest.map("traerDatosABM", "GET", 'backend/GET.php?dni={DNI}');
        
        apiRest.addListener("success", function (DATOSBACKEND) {

                
                this.fireEvent("sePresionoGuardar");
                alert("SE ESTA PRESIONANDO GUARDAR getDPersonales")
                console.log(DATOSBACKEND.getData());

        
        }, this);

            //----------------------------------------------------------------------

        btnGuardar.addListener("execute", function() {
    
        
                //se muestra por consola usando el metodo getDPersonales todos los datos del jSon
                console.log(this.getDPersonales());

                //enviamos al back end los datos del form a travez del metodo getDPersonales.-
                apiRest.traerDatosABM(this.getDPersonales());   

                //console.log();


        }, this);



    //-------------------DATOS DE LA INSTITUCION----------------------------
            
            var lblInstitucion = new qx.ui.basic.Label("Institucion");
            this.pagInstitucion.add(lblInstitucion);

            this.Institucion = new qx.ui.form.SelectBox();
            this.pagInstitucion.add(this.Institucion);
            
            this.Institucion.add(new qx.ui.form.ListItem("Seleccione Una Institucion", null, 0));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 1", null, 1));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 2", null, 2));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 3", null, 3));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 4", null, 4));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 5", null, 5));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 6", null, 6));
            this.Institucion.add(new qx.ui.form.ListItem("Institucion 7", null, 7));


            this.lblInstitucion2 = new qx.ui.basic.Label("Direccion");
            this.pagInstitucion.add(this.lblInstitucion2);

            this.txtInstitucion = new qx.ui.form.TextField("");
            this.pagInstitucion.add(this.txtInstitucion);

            //--------------BOTON GUARDAR TAB-------------------------

            var Guardar1 = new qx.ui.form.Button("GUARDAR");

            Guardar1.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getDInstitucion());
            }, this);
            
            this.pagInstitucion.add(Guardar1);
            
    //-------------------MOTIVOS CONSULTA----------------------------------       

            this.lblConsulta = new qx.ui.basic.Label("Motivo de Consulta");
            this.pagMotivoConsulta.add(this.lblConsulta);

            this.CHKConsulta1 = new qx.ui.form.CheckBox("Sintomatico Respiratorio");
            this.CHKConsulta2 = new qx.ui.form.CheckBox("Contacto");
            this.CHKConsulta3 = new qx.ui.form.CheckBox("Examen de Salud");
            this.CHKConsulta4 = new qx.ui.form.CheckBox("Traslado");
            this.CHKConsulta5 = new qx.ui.form.CheckBox("Contacto de TB MDR");
            this.CHKConsulta6 = new qx.ui.form.CheckBox("Otros");
            
            this.pagMotivoConsulta.add(this.CHKConsulta1);
            this.pagMotivoConsulta.add(this.CHKConsulta2);
            this.pagMotivoConsulta.add(this.CHKConsulta3);
            this.pagMotivoConsulta.add(this.CHKConsulta4);
            this.pagMotivoConsulta.add(this.CHKConsulta5);
            this.pagMotivoConsulta.add(this.CHKConsulta6);

            //--------------BOTON GUARDAR TAB-------------------------

            var Guardar2 = new qx.ui.form.Button("GUARDAR");

            Guardar2.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getMConsulta());
            }, this);
            
            this.pagMotivoConsulta.add(Guardar2);


    //--------------------FECHA DE DIAGNOSTICO-----------------------------------------------
            var FechaDiagnostico = new qx.ui.basic.Label("Fecha de Diagnostico:");
            this.pagFechaDiagnostico.add(FechaDiagnostico);

            this.DateFecha = new qx.ui.form.DateField();
            this.pagFechaDiagnostico.add(this.DateFecha);

            //--------------BOTON GUARDAR TAB-------------------------

            var Guardar3 = new qx.ui.form.Button("GUARDAR");

            Guardar3.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getFDiagnostico());
            }, this);
            
            this.pagFechaDiagnostico.add(Guardar3);
            
     //-------------------EXAMEN DE DIAGNOSTICO----------------------------------------------   
            //Creo una Capa
            var capaContenedora1 = new qx.ui.container.Composite(new qx.ui.layout.VBox(15));
            //Agrego una Capa al Tab
            this.pagExamenDiagnostico.add(capaContenedora1);
            
            //Creo un Label
            var FecTxt = new qx.ui.basic.Label("Bactereologia");
            capaContenedora1.add(FecTxt);

            //Agrego Capa Principal
            var PrimerComposite = new qx.ui.container.Composite(new qx.ui.layout.HBox(15));

            //Agrego Capas a la Capa Principal
            var SegundoComposite = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
            var TercerComposite = new qx.ui.container.Composite(new qx.ui.layout.HBox(5));
            
            capaContenedora1.add(PrimerComposite);
            PrimerComposite.add(SegundoComposite);
            PrimerComposite.add(TercerComposite);

    //---------------------------------------------------------------------------------------
            SegundoComposite.setLayout(new qx.ui.layout.VBox(10));
            
            SegundoComposite.add(new qx.ui.basic.Label("ED Fecha"))

            this.Fecha1 = (new qx.ui.form.DateField());
            SegundoComposite.add(this.Fecha1);
            
            SegundoComposite.add(new qx.ui.basic.Label("Cultivo Fecha"))

            this.Fecha2 = (new qx.ui.form.DateField());
            SegundoComposite.add(this.Fecha2);
            
            SegundoComposite.add(new qx.ui.basic.Label("PSD Fecha"))

            this.Fecha3 = (new qx.ui.form.DateField());
            SegundoComposite.add(this.Fecha3);

            SegundoComposite.add(new qx.ui.basic.Label("Rayos X Fecha"))

            this.Fecha4 = (new qx.ui.form.DateField());
            SegundoComposite.add(this.Fecha4);

            SegundoComposite.add(new qx.ui.basic.Label("PPD Fecha"))

            this.Fecha5 = (new qx.ui.form.DateField());
            SegundoComposite.add(this.Fecha5);
    //----------------------------------------------------------------------------------------

            TercerComposite.setLayout(new qx.ui.layout.VBox(10));

            TercerComposite.add(new qx.ui.basic.Label("Resultado:"))

            this.resultado1 = new qx.ui.form.TextField("");
            TercerComposite.add(this.resultado1);
            
            TercerComposite.add(new qx.ui.basic.Label("Resultado:"))

            this.resultado2 = new qx.ui.form.TextField("");
            TercerComposite.add(this.resultado2);
            
            TercerComposite.add(new qx.ui.basic.Label("Resultado:"))
            
            this.resultado3 = new qx.ui.form.TextField("");
            TercerComposite.add(this.resultado3);

            TercerComposite.add(new qx.ui.basic.Label("Resultado:"))

            this.resultado4 = new qx.ui.form.TextField("");
            TercerComposite.add(this.resultado4);

            TercerComposite.add(new qx.ui.basic.Label("Resultado:"))

            this.resultado5 = new qx.ui.form.TextField("");
            TercerComposite.add(this.resultado5);

    //----------------------------------------------------------------------------------------
            var FecTxt2 = new qx.ui.basic.Label("Antecedentes de BCG");
            capaContenedora1.add(FecTxt2);
    //----------------------------------------------------------------------------------------
            
            this.radioGroupEx = new qx.ui.form.RadioButtonGroup();
            capaContenedora1.add(this.radioGroupEx);

            this.RadioButtonEx1 = new qx.ui.form.RadioButton("Si");
            this.radioGroupEx.add(this.RadioButtonEx1);

            this.RadioButtonEx2 = new qx.ui.form.RadioButton("No");
            this.radioGroupEx.add(this.RadioButtonEx2);
            

            //--------------BOTON GUARDAR TAB-------------------------

            var Guardar4 = new qx.ui.form.Button("GUARDAR");

            Guardar4.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getEDiagnostico());
            }, this);
            
            this.pagExamenDiagnostico.add(Guardar4);


     //----------------LOCALIZACION-----------------------------------------------------------

            this.radioGroupLoc = new qx.ui.form.RadioButtonGroup();
            this.pagLocalizacion.add(this.radioGroupLoc);

            this.radioGroupLoc1 = new qx.ui.form.RadioButton("Pulmonar");
            this.radioGroupLoc.add(this.radioGroupLoc1)

            this.radioGroupLoc2 = new qx.ui.form.RadioButton("Extra Pulmonar");
            this.radioGroupLoc.add(this.radioGroupLoc2);

            var lblArea = new qx.ui.basic.Label("Especificar");
            this.pagLocalizacion.add(lblArea);

            this.txtAreaLoc =  new qx.ui.form.TextArea();
            this.pagLocalizacion.add(this.txtAreaLoc);

            //--------------BOTON GUARDAR TAB-------------------------

            var Guardar5 = new qx.ui.form.Button("GUARDAR");

            Guardar5.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getLocalizacion());
                
            }, this);
            
            this.pagLocalizacion.add(Guardar5);


    //-----------------TIPOS DE PACIENTES-------------------------------------------------------

            var capaPacientes = new qx.ui.container.Composite(new qx.ui.layout.HBox(20));
            this.pagTipoPaciente.add(capaPacientes);

            this.radioGroupTipo = new qx.ui.form.RadioButtonGroup();
            this.pagTipoPaciente.add(this.radioGroupTipo);

            this.radioGroupNew = new qx.ui.form.RadioButton("Nuevo");
            this.radioGroupTipo.add(this.radioGroupNew);
            

            this.radioGroupTras = new qx.ui.form.RadioButton("Traslado");
            this.radioGroupTipo.add(this.radioGroupTras);


            this.radioGroupRec = new qx.ui.form.RadioButton("Recaida");
            this.radioGroupTipo.add(this.radioGroupRec);


            this.radioGroupAban = new qx.ui.form.RadioButton("Abandono");
            this.radioGroupTipo.add(this.radioGroupAban);

            this.radioGroupFrac = new qx.ui.form.RadioButton("Fracaso");
            this.radioGroupTipo.add(this.radioGroupFrac);

            this.radioGroupOtro = new qx.ui.form.RadioButton("Otros");
            this.radioGroupTipo.add(this.radioGroupOtro);



            var lblPaciente = new qx.ui.basic.Label("Especificar:");
            this.pagTipoPaciente.add(lblPaciente);

            this.txtPaciente =  new qx.ui.form.TextArea();
            this.pagTipoPaciente.add(this.txtPaciente);

        //--------------BOTON GUARDAR TAB-------------------------

        var Guardar6 = new qx.ui.form.Button("GUARDAR");

        Guardar6.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getTPaciente());

        }, this);
        
        this.pagTipoPaciente.add(Guardar6);


    //----------------------PESO-----------------------------------------------------------------
            
            var lblPeso = new qx.ui.basic.Label("PESO (KG.):");
            this.pagPeso.add(lblPeso);

            this.SpinnerPeso = new qx.ui.form.Spinner();
            this.pagPeso.add(this.SpinnerPeso);

            //--------------BOTON GUARDAR TAB-------------------------

        var Guardar7 = new qx.ui.form.Button("GUARDAR");

        Guardar7.addListener("execute", function() {
                this.fireEvent("sePresionoGuardar");
                console.log(this.getPeso());
                
                }, this);
        
        this.pagPeso.add(Guardar7);
        
        },
    },
});




