var siteNameInput = document.getElementById("SiteName");
var siteURLInput = document.getElementById("SiteURL");
var productList;
if (localStorage.getItem("myproduct") != null) {
  productList = JSON.parse(localStorage.getItem("myproduct"));
  display(productList);
} else {
  productList = [];
}
function submit() {
  var product = {
    Name: siteNameInput.value,
    URL: siteURLInput.value,
  };
  productList.push(product);
  console.log(product);
  localStorage.setItem("myproduct", JSON.stringify(productList));
  clearForm();
  display(productList);
}
function clearForm() {
  siteNameInput.value = "";
  siteURLInput.value = "";
}
function display(productList) {
  var cartona = ``;
  for (var i = 0; i < productList.length; i++) {
    cartona += `<h3>${productList[i].Name}</h3>
    <a class="btn btn-primary" href="${productList[i].URL}" target="_blank">Visit</a>
    <button onclick="deleteProduct(${i})" class="btn btn-danger btndelete" >Delete</button>`;
  }
  document.getElementById("visit").innerHTML = cartona;
}
function deleteProduct(index) {
  productList.splice(index, 1); //[{}]
  localStorage.setItem("myproduct", JSON.stringify(productList));
  display(productList);
}


