var extLinks = document.querySelectorAll('a[href^="http"]');
console.log("program started");
console.log(extLinks);

for( var i = 0; i < extLinks.length; i++ ) {
  if ( !extLinks[i].hasAttribure("target") ) {
    extLinks[i].setAttribute("target", "_blank");
  }
}
