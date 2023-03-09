// $(document).ready(function(){
//     $(".fancybox").fancybox({
//           openEffect: "none",
//           closeEffect: "none"
//       });
      
//       $(".zoom").hover(function(){
          
//           $(this).addClass('transition');
//       }, function(){
          
//           $(this).removeClass('transition');
//       });
//   });
const fs = require('fs'); 
 
var directory = './pictures/gamta'; 
 
fs.readdir(directory, (err, files) => { 
	if(err) { 
    console.log('error')
		// handle error; e.g., folder didn't exist 
	} else {
    const list = files;
    console.log(list)
    directory.forEach(file => {
      gallery.innerHTML += `<a href="pictures/gamta/${picture}"><img src="pictures/gamta/${picture}"></a>`
console.log(gallery)
    })
  }
	// 'files' is an array of the files found in the directory 
}); 
