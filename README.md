# MegaventoryShortProject

This project involves the insertion of some initial data (client, warehouse, etc) and an order with these details:
 * Product:
   * SKU: 1112256
   * Description: Nike shoes
   * Sales Price: 99.99
   * Purchase Price: 44.99
 * Client:
   * Name: babis   
   * E-mail: babis@exampletest.com
   * Shipping Address: Example 8, Athens
   * Phone: 1235698967
 * Warehouse:
   * Abbreviation: Main
   * Name: Main Location
   * Address: Example 20, Athens  
 The shop we maintain automatically applies a 24% taxation on each sale. Also, our store applies a 50% discount on loyalty customers only.
 * Babis as a loyalty client bought 2 pairs of Nike shoes from your store.

to a Megaventory account of my own.

I use the framework NodeJS and the Fetch API to communicate with the Megaventory API.
The directory DataInsertion includes four important files:
 * `package.json`: There lie our dependencies. You can install them by running the command
```
npm install
```
 * `apiCall.js` : There are 2 functions for the communication with the Megaventory API, one for the insertion and one for the retrieval of existing data.
 * `insertInitialData.js` : There are the initial data provided above and a function for their insertion.
 * `insertOrder.js` : There is the specified above order, a function for the insertion of orders and another one for the insertion of this specific order.

The implementation is pretty straightforward i.e. we build the data, and simply insert them.  
This project can relate to a project executed from my team in the course 'Databases' in 2020, where we had to create a database for a chain store and show statistics based on the concluded transactions.  

##Note
In order to run this project correctly you must create a `.env` file in the `DataInsertion` directory which will look like this:
```
APIKEY=your_apikey_for_the_megaventory_api
```