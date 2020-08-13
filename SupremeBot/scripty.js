  var count = 0;
  function doIt() {

	var size = false;
  
    var sizePref = ["Medium", "Large", "XLarge", "Small"];

    var searchText = "backpack";
    var color = "black";

    count++;
    if(document.title != "Supreme") {
      var sel = document.getElementById("size");
      var opTags = document.getElementsByTagName("option");

	  if(size) {
		  for(var i = 0; i < sizePref.length; i++) {
			for(var j = 0; j < opTags.length; j++) {
			  if(sizePref[i] === opTags[j].textContent) {
				sel.value = opTags[j].value;
				break;
			  }
			}
			break;
		  }
	  }

      setTimeout(function(){
        document.querySelector('#details form input[type="submit"]').click();
      }, 200);

    setTimeout(function(){
      window.location.href = 'https://supremenewyork.com/checkout';
    }, 450);

    window.setInterval(function () {
      setTimeout(function(){
           document.querySelector('#cart-footer .checkout').click();
      }, 370);
      setTimeout(function(){
           document.querySelector('#cart-footer .checkout').click();
      }, 500);
    }, 500);

    }
    else {
      var aTags = document.getElementsByTagName("a");
      var found;
      var theLink;
      var theColorLink;
      var items = [];

      for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent.toLowerCase().includes(searchText)) {
          theLink = aTags[i].getAttribute("href");
          items.push(theLink);
        }
      }

      for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].textContent.toLowerCase().includes(color)) {
          if(items.indexOf(aTags[i].getAttribute("href")) > -1) {
            found = aTags[i];
          }
        }
      }

      if(found != null) {
        console.log("Lets go!");
        window.location.href = found.getAttribute("href");
      }
    }
  }
  doIt();

  window.setInterval(function () {
    setTimeout(function(){
      if(count < 3)
      doIt();
    }, 370);
  }, 200);
