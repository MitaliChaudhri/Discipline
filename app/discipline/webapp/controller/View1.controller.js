sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
	"sap/m/MessageToast",
    "sap/ui/core/routing/History"
],
function (Controller ,  MessageBox, MessageToast , History) {
    "use strict";

    return Controller.extend("discipline.controller.View1", {
        onInit: function () {
            const model = new sap.ui.model.json.JSONModel({
                department: [{
                    name : "Building Standards",
                    key : "Building Standards"
                },
                {
                    name : "City Clerk",
                    key : "City Clerk"
                },
                {
                    name : "City Solicitor",
                    key : "City Solicitor"
                },
                {
                    name : "Communication and Public Engagement",
                    key : "Communication and Public Engagement"
                },
                {
                    name : "Community Standards",
                    key : "Community Standards"
                },
                {
                    name : "Construction & Design",
                    key : "Construction & Design"
                },
                {
                    name : "Corporate Revenue",
                    key : "Corporate Revenue"
                },
                {
                    name : "Facilities Management",
                    key : "Facilities Management"
                }
            
            ],
            union : [{
                text:"ATU 615"
            },
            {
                text:"CUPE 47"
            },
            {
                text:"CUPE 59"
            },
            {
                text:"CUPE 859"
            },
            {
                text:"ESA 292"
            },
            {
                text:"IAFF 80"
            },
            {
                text:"IBEW 319"
            },
            {
                text:"SCMMA 222"
            }
        ],
       vis : 1,
       employee:[{
        name1: "Keyur",
        id : "idpl21",
        manager : "Sagar V.",
        HRBP : "John"
       },{
       name1: "Varun",
       id : "idpl31",
       manager : "Naman V.",
       HRBP : "John"
      },{
      name1: "Tushar",
      id : "idpl22",
      manager : "roman c.",
      HRBP : "John"
     }],
     dateT : [

     ],
     textarea : ""
            });
            this.getView().setModel(model , "localmodel");
            this._oRouter = this.getOwnerComponent().getRouter();
        },
        getid: function(oEvent){
          let localmodel = this.getView().getModel("localmodel")
            let dataid = oEvent.getParameters().selectedItem.getBindingContext("localmodel").getObject().id;
            let datamanager = oEvent.getParameters().selectedItem.getBindingContext("localmodel").getObject().manager;
            let datahrbp = oEvent.getParameters().selectedItem.getBindingContext("localmodel").getObject().HRBP;
            localmodel.setProperty("/id" , dataid);
            localmodel.setProperty("/manager" , datamanager);
            localmodel.setProperty("/HRBP" , datahrbp);
        },
        cancelb: function(o){
            MessageBox.confirm("Do you want to cancel Reporting?",{
            onClose : function(event){
                if(event == "OK"){
                    const oHistory = History.getInstance();
                    const sPreviousHash = oHistory.getPreviousHash();
        
                  
                        window.history.go(-1);
                   
                }
            }
        }
        );
        },
        submitb : function(o){
            
        },
        onOpenDialog : function(o) {
           
      var oView = this.getView();
      var oDialog = oView.byId("confirmationDialog");
      
      if (!oDialog) {
        oDialog = sap.ui.xmlfragment(oView.getId(), "discipline.view.load", this);
        oView.addDependent(oDialog);
      }

      oDialog.open();
        }
    });
});
