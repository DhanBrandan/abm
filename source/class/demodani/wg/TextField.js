qx.Class.define("demodani.wg.TextField", {
 extend: qx.ui.window.Window,
 construct: function () {
    this.base(arguments); // = this = new qx.ui.window.Window();

    //SETEO A LA VENTANA LAS PROPIEDADES INICIALES.
    this.setShowMinimize(false);
    this.setShowMaximize(false);
    this.setWidth(600);
    this.setCaption("Clase de Prueba");

    //ASIGNO UN LAYOUT VBOX A LA VENTANA
    this.setLayout(new qx.ui.layout.VBox(10));

    var cant = 1;

    var txt = new qx.ui.form.TextField("");
            
    var boton = new qx.ui.form.Button("Boton");
            
    this.add(txt);
            
    this.add(boton);
            
    boton.addListener("execute", function () {
              
      var nroingresado = prompt("Ingrese un nro: ");
                  
                /*
                if (nroingresado >= 3) {
                  txt.setValue(nroingresado);
                  } else {
                  txt.setValue(nroingresado);
                }
                
                alert("Ud debe mostrar " + nroingresado);
                */
                //Deben decir c/Textfield: Soy el TextField Nro: 
                
                                  
      while (cant <= nroingresado) {
        var txt = new qx.ui.form.TextField("Soy el TextField Nro:" + cant);
        this.add(txt);
                    
        cant = cant + 1 ;
      }
                       
    }, this);

},
members : {
  agregarTexto : function (p1, p2) {
    var etiqueta = new qx.ui.basic.Label(p1);
    var texto = new qx.ui.form.TextField(p2);
    
    this.add(etiqueta);
    this.add(texto);

  }
}  
});