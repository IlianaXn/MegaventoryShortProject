const {apiCall, apiCallGet} = require('./apiCall')
const insertData = require('./insertInitialData')

//insert Order (Babis as a loyalty client bought 2 pairs of Nike shoes from our store)
const order = {
    "SalesOrderStatus": "Verified",
    "SalesOrderClientID": 0,
    "SalesOrderClientName": "babis",
    "SalesOrderDetails": [{
        "SalesOrderRowProductSKU": "1112256",
        "SalesOrderRowQuantity": 2,
        "SalesOrderRowShippedQuantity": 0,              //this is assumed
        "SalesOrderRowInvoicedQuantity": 0,             //also assumed
        "SalesOrderRowUnitPriceWithoutTaxOrDiscount": 99.99,
    }]
}

const insertOrder = async(order) => {
    await apiCall('/SalesOrder/SalesOrderUpdate', 'POST', "InsertOrUpdate", {"mvSalesOrder": order})
}

const orderForBabis = async (order) => {
    const tax = await apiCallGet('/Tax/TaxGet', 'POST', {"Filters": [
            {
                "FieldName": "TaxName",
                "SearchValue": "CustomTax"
            }
            ]})
    const disc = await apiCallGet('/Discount/DiscountGet', 'POST', {"Filters": [
            {
                "FieldName": "DiscountName",
                "SearchValue": "Discount for Loyalty members"
            }
        ]})
    const inv = await apiCallGet('/InventoryLocation/InventoryLocationGet', 'POST', {"Filters": [
            {
                "FieldName": "InventoryLocationAbbreviation",
                "SearchValue": "Main"
            }
        ]})
    order["SalesOrderDetails"][0]["SalesOrderRowTaxID"] = `${tax["mvTaxes"][0]["TaxID"]}`
    order["SalesOrderDetails"][0]["SalesOrderRowDiscountID"] = `${disc["mvDiscounts"][0]["DiscountID"]}`
    order["SalesOrderInventoryLocationID"] = inv["mvInventoryLocations"][0]["InventoryLocationID"]
    await insertOrder(order)
}

//insert initial data and DataInsertion for babis through helper function

const helper = async () => {
    await insertData();
    await orderForBabis(order);
}
//call that function
helper()