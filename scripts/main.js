
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/google-logo.png') {
      myImage.setAttribute ('src','images/google2.png');
    } else {
      myImage.setAttribute ('src','images/google-logo.png');
    }
}
