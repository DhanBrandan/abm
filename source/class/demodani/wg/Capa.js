qx.Class.define("demodani.wg.Capa", {
extend: qx.ui.container.Composite,
construct: function () {
    this.base(arguments);
    //this.setWidth(500);
    //this.setHeight(500);
    this.setBackgroundColor("green");

    //var boton = new qx.ui.form.Button("Boton");
    var slider = new qx.ui.form.Slider();
    var txt = new qx.ui.form.TextField("");
   
    
    
    //boton.setWidth(100);

    this.setLayout(new qx.ui.layout.Grid(3, 3));

    //this.add(new qx.ui.form.ToggleButton("ToggleButton"), {row:0, column:0, rowSpan:3});
    this.add(slider, {row:0, column:1, colSpan:2});
    //this.add(boton, {row:1, column:1});
    this.add(txt, {row:2, column:2});

    /*boton.addListener("execute", function () {
        alert(slider.getValue());
    }, this);*/

    slider.addListener("changeValue", function () {
        txt.setValue("Edad: " + slider.getValue());
        //boton.setWidth(slider.getValue());
    }, this);

    //SelectBox
    
    /*var selectBox = qx.ui.form.SelectBox();
    
    selectBox.addListener("changeSelection", function(){
       selectBox = new qx.ui.form.ListItem("Item 1");
       this.add(selectBox);
    }, this);
    */
    var btnFORM1 = new qx.ui.form.Button("FORMULARIO");
    this.add(btnFORM1);

    btnFORM1.addListener("execute", function() {
      var FORM1 = new demodani.clases.abmdocentes();
      this.add(FORM1);

      }, this);
      

}
});
