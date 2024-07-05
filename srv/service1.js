const cds = require("@sap/cds");
 

//1. Action to Calcuate Administrative Leaves Between two given days;
//2. Action to calculate Open Event Count
//3. Action to calculate closed event count


//1. Action to Calcuate Administrative Leaves Between two given days;
class AdminLeaveData extends cds.ApplicationService {
 
    init() {
 
        this.on("AdminLeaves", async (req) => {
            try {
                const db = await cds.connect.to("db");
                const dbClass = require('sap-hdbext-promisfied');
                let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
 
                var statementpreparation = 'SELECT DAYS_BETWEEN(\'' + req.data.AdLvStDate + '\',\'' + req.data.AdLvEndDate + '\') as Adminleaves FROM DUMMY';
               
 
                const sp = await dbConn.preparePromisified(statementpreparation);
 
                var SalesData = await dbConn.statementExecPromisified(sp, []);
 
                console.log(SalesData);
                return {SalesData};
 
              }catch (error) {
                console.error(error)
                return {}
            }
        });
                return super.init();
            }
 
}

//2. Action to calculate Open Event Count

class OpenKPIData extends cds.ApplicationService {
 
    init() {
 
        this.on("KPI", async (req) => {
            try {
                const db = await cds.connect.to("db");
                const dbClass = require('sap-hdbext-promisfied');
                let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
 
                var statementpreparation = 'SELECT COUNT(DSCID) as OpenEvent FROM DUMMY WHERE EveStatus = 1';
               
                const sp = await dbConn.preparePromisified(statementpreparation);
 
                var SalesData = await dbConn.statementExecPromisified(sp, []);
 
                console.log(SalesData);
                return {SalesData};
 
              }catch (error) {
                console.error(error)
                return {}
            }
        });
                return super.init();
            }
 
}

//3. Action to calculate closed event count
class ClosedKPIData extends cds.ApplicationService {
 
    init() {
 
        this.on("KPI", async (req) => {
            try {
                const db = await cds.connect.to("db");
                const dbClass = require('sap-hdbext-promisfied');
                let dbConn = new dbClass(await dbClass.createConnection(db.options.credentials));
 
                var statementpreparation = 'SELECT COUNT(DSCID) as OpenEvent FROM DUMMY WHERE EveStatus = 2';
               
                const sp = await dbConn.preparePromisified(statementpreparation);
 
                var SalesData = await dbConn.statementExecPromisified(sp, []);
 
                console.log(SalesData);
                return {SalesData};
 
              }catch (error) {
                console.error(error)
                return {}
            }
        });
                return super.init();
            }
 
}
 
module.exports = { AdminLeaveData };

module.exports = { OpenKPIData };

module.exports = { ClosedKPIData };