function viewProduct(productID) {
  product = potionD.potions[productID];
  document.getElementById('ingredients').innerHTML = "";
  document.getElementById('imgProduct').src ="img/"+product.image;
  document.getElementById('name').innerHTML = product.name;
  document.getElementById('description').innerHTML = product.effect;
  document.getElementById('price').innerHTML = "$"+product.price;
  document.getElementById('productModal').style.display='block';
	for(I in product.ingredients) {
  	document.getElementById('ingredients').innerHTML += "<li>"+product.ingredients[I]+"</li>";
  	I++;
  }  

}
