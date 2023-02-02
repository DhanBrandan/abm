qx.Class.define("demodani.wg.Usuarios", {
    extend: qx.ui.window.Window,
    construct: function () {
        this.base(arguments);

        //SETEO A LA VENTANA LAS PROPIEDADES INICIALES.
        this.setShowMinimize(false);
        this.setShowMaximize(false);
        this.setWidth(400);
        this.setCaption("USUARIOS");
       
        //ASIGNO UN LAYOUT VBOX A LA VENTANA
        this.setLayout(new qx.ui.layout.VBox(10));

        var usuario = new qx.ui.form.TextField("");
        var titulouser = new qx.ui.basic.Label("Usuarios")
        this.add(titulouser)
        usuario.setPlaceholder("INGRESE SU NOMBRE");
    
        this.add(usuario);

        var Password = new qx.ui.form.PasswordField("");
        var titulopass = new qx.ui.basic.Label("Contraseña")
        
        this.add(titulopass)
        
        Password.setPlaceholder("INGRESE SU PASSWORD");
        this.add(Password);

        var GUARDAR = new qx.ui.form.Button("GUARDAR");
        this.add(GUARDAR);

        GUARDAR.addListener("execute", function() {
            var AreaTexto = new qx.ui.form.TextArea();
            
            this.add(AreaTexto);

            AreaTexto.setValue("Usted Ingreso con:"+ usuario.getValue()+ " y " + Password.getValue() );

            var Paginas = new demodani.wg.TabviewDANI();
            this.add(Paginas);

            var Field  = new demodani.wg.TextField();
            this.add(Field)
        }, this);   
        
            /*
            usuario.setTextColor("blue");
            var ValorUsuario = usuario.getValue();
            var ValorPassword = Password.getValue();   
            this.setCaption(ValorUsuario);  
            */
        this.usuario = usuario;
        this.password = Password;
        //this.tabPags = demodani.wg.TabviewDANI;
    },
    members : {
        setAncho : function (numero) {
            this.setWidth(numero);
        },
        saludarAlUsuario : function () {
            //alert("Hola, estas usando la clase: demodani.wg.Usuarios");
            alert(this.getWidth());
        },
        agregarCalendario : function () {
            var calen = new qx.ui.form.DateField();
            this.add(calen);
        },
        agrandar : function(){
            var anchonuevo = this.getWidth()+1;
            
            
            if (anchonuevo < 400) {
                this.setWidth(anchonuevo);
            } else {
                alert (this.usuario.getValue());
            }          
            

        

        }
    }
});