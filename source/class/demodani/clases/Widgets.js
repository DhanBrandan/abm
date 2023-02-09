qx.Class.define("demodani.clases.Widgets", {
    extend: qx.ui.window.Window,

    construct: function () {
        this.base(arguments);

        this.setShowMinimize(true);
        this.setShowMaximize(true);
        this.setWidth(500);
        this.setCaption("PRACTICANDO WIDGETS");
        this.addListenerOnce("resize", this.center, this);
        this.setModal(false);

        this.setLayout(new qx.ui.layout.VBox(20));


        //-------------AGREGAMOS LOS MALDITOS WIDGETS-----------------------------
        
        //Button
        var lblWid = new qx.ui.basic.Label("Boton del Widget");
        var btnWidget = new qx.ui.form.Button("BTN-WID");

        this.add(lblWid);
        this.add(btnWidget);

        //------------------------------------------------------------------------

        //- Checkbock
        var lblChk = new qx.ui.basic.Label("Chkbox del Widget");

        var Chk = new qx.ui.form.CheckBox("Chk-Widgs");

        this.add(lblChk);
        this.add(Chk);

        //- ComboBox
        var lblCBox = new qx.ui.basic.Label("CBox del Widget");
        var CBox = new qx.ui.form.ComboBox("C-Box");

        this.add(lblCBox);
        this.add(CBox);

        
        //- DateField
        var lblDField = new qx.ui.basic.Label("Date del Widget");

        var DField = new qx.ui.form.DateField("Fecha");

        this.add(lblDField);
        this.add(DField);

        //- GroupBox

        var lblGBox = new qx.ui.basic.Label("GBox del Widget");
        var GBOX = new qx.ui.groupbox.GroupBox("G-BOX");

        this.add(lblGBox);
        this.add(GBOX);

        //- Image
        var lblWidImg = new qx.ui.basic.Label("A TOMA POL CULO");
        var WidImg = new qx.ui.basic.Image("demodani/Pibe.png");

        WidImg.setScale(true);
        WidImg.setWidth(200);
        WidImg.setHeight(200);

        this.add(lblWidImg);
        this.add(WidImg);


        //- List
      
        var lblWidList = new qx.ui.basic.Label("Horizontal, Icons only");

        lblWidList.setFont("bold");

        this.add(lblWidList);
  
        var WidLis = new qx.ui.form.List(true);
        var WidLis;
  
        l4.set({ width: 550, selectionMode: "multi", height: null });

        var l4l = [
            "Folder.png"
        ];
        this.add(l4l);
        this.add(WidLis);

        
        
        /*
        
        
        - Menu
        - RadioButton
        - RadioButtonGroup
        - SelectBox
        - Slider
        - Spinner
        - TabView
        - TextField
        - Toolbar
        - Tree
        - Window
        - Table (Este para el final, aunque ya lo usamos pero veremos otras opciones)*/



    },
});

