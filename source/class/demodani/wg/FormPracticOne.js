qx.Class.define("demodani.wg.FormPracticOne", {
    extend: qx.ui.window.Window,
    construct: function () {
       this.base(arguments);

        
        this.setShowMaximize(true);
        
        this.setLayout(new qx.ui.layout.VBox(5));
        this.setCaption("");    
            
        var boton = new qx.ui.form.Button("MODIFICAR TITULO");
        this.add(boton);

        boton.addListener("execute", function () {
            var titmod = prompt("Ingrese TITULO ");
            this.setCaption(titmod);

        },this);
    
            
        var boton1 = new qx.ui.form.Button("DATOS DE USUARIO");    
        this.add(boton1);

            boton1.addListener("execute", function() {
                var nom = prompt("Ingrese su Nombre")
                var ap = prompt("Ingrese su Apellido")
                var mail = prompt("Ingrese su Mail")
           
            
            var txt = new qx.ui.form.TextField(nom);
            var etiqueta = new qx.ui.basic.Label("Nombre");
            this.add(etiqueta);
            this.add(txt);
        
            var txt = new qx.ui.form.TextField(ap);
            var etiqueta = new qx.ui.basic.Label("Apellido");
            this.add(etiqueta);
            this.add(txt);
            
            var txt = new qx.ui.form.TextField(mail);
            var etiqueta = new qx.ui.basic.Label("Mail");
            this.add(etiqueta);
            this.add(txt);
        
        }, this);
            //btn.addListener("execute", function () {
                //var nom = prompt("Ingrese su Nombre")
                //var ap = prompt("Ingrese su Apellido")}            
                //var mail = promp("Ingrese su @Mail")

        var btnMostrarValor = new qx.ui.form.Button("Valor");    
        this.add(btnMostrarValor);

        
},

members : {
        tomatumate : function (d2, d3) {
            var etq1 = new qx.ui.basic.Label(d2);
            //var etq2 = new qx.ui.basic.Label("Apellido"); 
            //var etq3 = new qx.ui.basic.Label("Mail");
            
            var txt1 = new qx.ui.form.TextField(d3);
            //var txt2 = new qx.ui.form.TextField(d2);
            //var txt3 = new qx.ui.form.TextField(d2);
            
            this.add(etq1) 
            this.add(txt1);
    
        }
    }
});

