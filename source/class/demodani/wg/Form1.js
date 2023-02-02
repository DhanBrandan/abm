qx.Class.define("demodani.wg.Form1", {
    extend: qx.ui.container.Composite,

    construct: function (layout, parametro_nom, parametro_ap, parametro_mail) {
        this.base(arguments);

        if (layout == "V") {
            this.setLayout(new qx.ui.layout.VBox(5));
        } else {
            this.setLayout(new qx.ui.layout.HBox(5));
        }


        this.nom = new qx.ui.form.TextField(parametro_nom);
        var etiqueta = new qx.ui.basic.Label("Nombre");
        this.add(etiqueta);
        this.add(this.nom);
        
        this.ap = new qx.ui.form.TextField(parametro_ap);
        var etiqueta = new qx.ui.basic.Label("Apellido");
        this.add(etiqueta);
        this.add(this.ap);
            
        this.mail = new qx.ui.form.TextField(parametro_mail);
        var etiqueta = new qx.ui.basic.Label("Mail");
        this.add(etiqueta);
        this.add(this.mail);     
        
        var botonM = new qx.ui.form.Button("Mostrar");    
        this.add(botonM);

        botonM.addListener("execute", function() {
            var MostrarTex = new qx.ui.form.TextArea();
            
            this.add(MostrarTex);

            MostrarTex.setValue("Usted Ingreso:"+ this.nom.getValue()+ " - " + this.ap.getValue()+ " - " + this.mail.getValue() );

            var Field  = new demodani.wg.TextField();
            this.add(Field)
        }, this); 
    
    },

    members: {
        metodo1 : function (color) {
            this.setBackgroundColor(color);
        },

        metodo2 : function ( P1, P2, P3 ) {
            this.nom.setValue(P1);
            this.ap.setValue(P2);
            this.mail.setValue(P3);
        }

    }
});
