qx.Class.define("demodani.wg.TabviewDANI", {
extend: qx.ui.tabview.TabView,
construct: function () {
    this.base(arguments);

    var tabPage1 = new qx.ui.tabview.Page("Pagina 1");
    var tabPage2 = new qx.ui.tabview.Page("Pagina 2");

    this.add(tabPage1);
    this.add(tabPage2);
    
    tabPage1.setWidth(300);
    tabPage1.setHeight(100);

    tabPage1.setLayout(new qx.ui.layout.VBox(5));
    tabPage2.setLayout(new qx.ui.layout.HBox(5));

    
    tabPage1.addListener("click", function() {
        tabPage1.setBackgroundColor("blue");

    },this);
    
        tabPage2.addListener("click", function() {
        tabPage2.setBackgroundColor("green");
    },this);
    
    
},
members: {
    

}
});
    