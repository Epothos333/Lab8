function groceryList() {

			var grocList = [
				{
					gro: "potatoes",
					price: 0.99
				},
				{
					gro: "bananas",
					price: 0.71
				},
				{	gro: "hamburgers",
					price: 2.89
				},
				{	gro: "apples",
					price: 0.50
				},
				{	gro: "dogs",
					price: 30.00
				},
				{	
					gro: "cats",
					price: 29.99
				},
				{
					gro: "leopards",
					price: 59.99
				}
			];
				var totalz = 0;
				var listItems = document.getElementById("theList");
				grocList.forEach(function(element) {
					totalz += element.price;
					var newItem = document.createElement('li');
					newItem.innerHTML = element.gro + " $ " + element.price.toFixed(2);
					listItems.appendChild(newItem);
				})
				var totally = document.getElementById("theTotal");
				totally.innerHTML = "Total Price: $ " + totalz;

			function more() {
				var itemADD = document.getElementById("addgro").value;
				var priceADD = document.getElementById("addprice").value;
				priceADD = parseFloat(priceADD);
				var newItem = document.createElement('li');
				newItem.innerHTML = itemADD + " $ " + priceADD.toFixed(2);
				listItems.appendChild(newItem);
				totalz += priceADD;
				totally.innerHTML ="New Total: " + totalz.toFixed(2);
			}


	 	var adding = document.getElementById("thebtn");
		adding.addEventListener("click", more);
};

groceryList();