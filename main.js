alert('created by lorenz --__--')

var url = document.getElementById("url")
var go = document.getElementById("go")
var browser = document.getElementById("browser")

go.addEventListener("click", LoadPage)

function LoadPage(){
  var newUrl = url.value 
  browser.src = newUrl
}
