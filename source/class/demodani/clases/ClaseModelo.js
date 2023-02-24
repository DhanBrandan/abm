qx.Class.define("demodani.clases.ClaseModelo", {
    extend: qx.ui.window.Window,

    construct: function () {
        this.base(arguments);

        this.setShowMinimize(true);
        this.setShowMaximize(true);
        this.setWidth(500);
        this.setCaption("CLASE MODELO");
        this.addListenerOnce("resize", this.center, this);
        this.setModal(false);

        this.setLayout(new qx.ui.layout.VBox(20));

        var personas = [
            {
                id: 1,
                nombre: "Uno",
                apellido: "ApeUno",
                edad : 5
            },
            {
                id: 2,
                nombre: "Dos",
                apellido: "ApeDos",
                edad : 10
            },
            {
                id: 3,
                nombre: "Tres",
                apellido: "ApeTres",
                edad : 15
            },
            {
                id: 4,
                nombre: "Cuatro",
                apellido: "ApeCuatro",
                edad : 20
            }
        ];

        //console.log(personas);

        var otroGrp = new qx.ui.groupbox.GroupBox("Otro de prueba");
        otroGrp.setLayout(new qx.ui.layout.HBox(2));
        this.add(otroGrp);

        //var i = 0;
        for (var i=0; i<personas.length; i++) {
            this.agregarGroupBox(personas[i], i, otroGrp);
        }
        
        //console.log(this.EsFinDeSemana());
        var Dani = new qx.ui.form.TextField();
        var btn = new qx.ui.form.Button("Probar");
        this.add(Dani);
        this.add(btn);

        btn.addListener("execute", function () {

            alert(5*2);
        }, this);


       
    },
    members : {
        agregarGroupBox : function (registro, h, contexto) {
            var grpPersona = new qx.ui.groupbox.GroupBox("Persona Del Array: " + h);
            grpPersona.setLayout(new qx.ui.layout.VBox(5));
            grpPersona.add(new qx.ui.basic.Label("ID: " + registro.id));
            grpPersona.add(new qx.ui.basic.Label("Apellido: " + registro.nombre));
            grpPersona.add(new qx.ui.basic.Label("Nombre: " + registro.apellido));
            grpPersona.add(new qx.ui.basic.Label("Edad: " + registro.edad));
            contexto.add(grpPersona);
        },
        elDobleDe : function (numero) {
            return numero*2;
        },
        EsFinDeSemana : function () {
            var dia = new Date();
            if ((dia.getDay() === 6) || (dia.getDay() === 7)) {
                return true
            } else {
                return false
            }
        },
        altaDeUsuario : function (dni, apellido, nombre, edad) {
           
        }
    }
});
