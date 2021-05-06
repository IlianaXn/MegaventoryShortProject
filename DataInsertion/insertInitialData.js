const {apiCall} = require('./apiCall')

//insert Client
const client = {
    "SupplierClientType": "Client",
    "SupplierClientName": "babis",
    "SupplierClientShippingAddress1": "Example 8, Athens",
    "SupplierClientEmail": "babis@exampletest.com",
    "SupplierClientPhone1": "1235698967",
    "SupplierClientPaymentTermsEnum": ["LoyaltyCustomer"]       //not really sure about this
}

//insert Product
const product = {
    "ProductSKU": "1112256",
    "ProductDescription": "Nike shoes",
    "ProductSellingPrice": 99.99,
    "ProductPurchasePrice": 44.99
}

//insert Warehouse
const warehouse = {
    "InventoryLocationName": "Main Location",
    "InventoryLocationAbbreviation": "Main",
    "InventoryLocationAddress": "Example 20, Athens"
}

//insert Tax
const tax = {
    "TaxName": "CustomTax",
    "TaxValue": 24
}

//insert Discount
const discount = {
    "DiscountName": "Discount for Loyalty members",
    "DiscountValue": 50
}

const insertData = async () => {
    await apiCall("/SupplierClient/SupplierClientUpdate","POST", "InsertOrUpdate", {"mvSupplierClient": client})
    await apiCall("/Product/ProductUpdate","POST", "InsertOrUpdate", {"mvProduct": product})
    await apiCall("/InventoryLocation/InventoryLocationUpdate","POST", "InsertOrUpdate", {"mvInventoryLocation": warehouse})
    await apiCall("/Discount/DiscountUpdate","POST", "InsertOrUpdate", {"mvDiscount": discount})
    await apiCall("/Tax/TaxUpdate","POST", "InsertOrUpdate", {"mvTax": tax})
}

module.exports = insertData

