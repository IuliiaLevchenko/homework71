// Object ClientBin with initial properties
let ClientBin = {
  apples: 25,
  orange: 45,
  lemon: 50,
  // Function getClientBinInfo for getting information about Client Bin which was in the begining
  getClientBinInfo: function () {
    return `apple: ${this.apples} UAN, orange: ${this.orange} UAN, lemon: ${this.lemon} UAN`;
  },

  // Function to calculate the total price of all items which are in Client Bin
  allPrice: function () {
    return this.apples + this.orange + this.lemon + this.spaghetti + this.salt;
  },

  // Function to find the minimum price among all items in Client Bin
  minPrice: function () {
    return Math.min(
      this.apples,
      this.orange,
      this.lemon,
      this.spaghetti,
      this.salt
    );
  },

  // Function to find the maximum price among all items in Client Bin
  maxPrice: function () {
    return Math.max(
      this.apples,
      this.orange,
      this.lemon,
      this.spaghetti,
      this.salt
    );
  },
};

// Function to display ClientBin information
function displayClientBinInfo() {
  let infoDiv = document.getElementById("ClientBinInfo");

  // Add new properties to ClientBin
  ClientBin.spaghetti = 30;
  ClientBin.salt = 5;

  // Display initial information of Client Bin
  infoDiv.innerHTML =
    "<b>Initial Information:</b> " + ClientBin.getClientBinInfo();

  // Display updated information of in Client Bin
  infoDiv.innerHTML +=
    "<br><b>Updated Information:</b> " +
    ClientBin.getClientBinInfo() +
    `, Spaghetti: ${ClientBin.spaghetti} UAN, Salt: ${ClientBin.salt} UAN`;

  // Calculate and display total price, minimum price, and maximum price
  infoDiv.innerHTML += `<br><b>Total Price:</b> ${ClientBin.allPrice()} UAN`;
  infoDiv.innerHTML += `<br><b>Minimum Price:</b> ${ClientBin.minPrice()} UAN`;
  infoDiv.innerHTML += `<br><b>Maximum Price:</b> ${ClientBin.maxPrice()} UAN`;
}
