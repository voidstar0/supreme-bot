function doIt() {
  var inputTags = document.getElementsByTagName("input");
  console.log(inputTags.length);
  for (var i = 0; i < inputTags.length; i++) {
    console.log(inputTags[i].getAttribute("name"));
    if(inputTags[i].getAttribute("name") === "order[terms]")
    {
      inputTags[i].value = "1";
    }
  }

  setTimeout(function(){
        document.querySelector('#cart-footer .checkout').click();
  }, 100);
}

doIt();
