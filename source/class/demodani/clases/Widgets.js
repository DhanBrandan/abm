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

        /*
        //- List
        var lblWidList = new qx.ui.basic.Label("Horizontal, Icons only");
        lblWidList.setFont("bold");
        this.add(lblWidList);

        //Creo la lista
        var WidList = new qx.ui.form.List(true);
        var WidList1;

        var WidIcon = [
            "Icono 1.png",
            "Icono 2.png",
            "Icono 3.png",
            "Icono 4.png",
            "Icono 5.png",
            "Icono 6.png",
            "Icono 7.png"
        ];

        var Img = "demodani/iconos/";

        for (var i = 0; i < WidIcon.length; i++) {
            //console.log(i);
            //console.log(WidIcon[i]);

            WidList1 = new qx.ui.form.ListItem("Icono "+ i, Img + WidIcon[i]);

            WidList.add(WidList1); 

            if (i == 12) {

                WidList.setSelection([WidList1]);

            } 
        }
        
        this.add(WidList);*/
        
          ////////////////////////////////////////////////////////////////
        
        //- Toolbar

        var mainContainer = new qx.ui.container.Composite(new qx.ui.layout.VBox(20));
        mainContainer.setPadding(20);

        let toolbar = new qx.ui.toolbar.ToolBar();
        toolbar.setSpacing(5);
        mainContainer.add(toolbar);


        var part1 = new qx.ui.toolbar.Part();

        var newButton = new qx.ui.toolbar.Button("NUEVO");
        var copyButton = new qx.ui.toolbar.Button("COPIAR",);
        var cutButton = new qx.ui.toolbar.Button("CORTAR",);
        var pasteButton = new qx.ui.toolbar.Button("PEGAR");

        part1.add(newButton);
        part1.add(new qx.ui.toolbar.Separator());
        part1.add(copyButton);
        part1.add(new qx.ui.toolbar.Separator());
        part1.add(cutButton);
        part1.add(new qx.ui.toolbar.Separator());
        part1.add(pasteButton);
        part1.add(new qx.ui.toolbar.Separator());
        toolbar.add(part1);

        //----------------------------------------------------

        /*
        - Menu
        - RadioButton
        - RadioButtonGroup
        - SelectBox
        - Slider
        - Spinner
        - TabView
        - TextField
        - Menu
        - Tree
        - Window
        - Table (Este para el final, aunque ya lo usamos pero veremos??otras??opciones)*/



    },
});

