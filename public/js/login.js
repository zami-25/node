

 $(document).ready(function(){
  document.getElementById("bt").addEventListener("click",function()
  {
    if(document.getElementById("user").value=="")
    {

      document.getElementById("error").style.display="block"
    } 
   
     else if(document.getElementById("zz").value=="")
    {

      document.getElementById("err").style.display="block"

    }

    else{
      document.getElementById("error").style.display="none"
      document.getElementById("err").style.display="none"
      document.getElementById("bt").innerHTML="update"
s
      //document.getElementById("myModal").style.display="block"


    
    }
  
 })
  
 })
//  document.getElementById("close").addEventListener("click",function () {
//   document.getElementById("myModal").style.display="none"

//  })
//  window.onclick = function(event) {
//   if (event.target == document.getElementById("myModal")
// ) {
//     document.getElementById("myModal").style.display="none"

//   }}
 
  
/*  
*/
