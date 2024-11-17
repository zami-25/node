

$(document).ready(function(){
    document.getElementById("bt").addEventListener("click",function()
    {
      if(document.getElementById("user").value=="")
      {
  
        document.getElementById("error1").style.display="block"
      } 
     
       else if(document.getElementById("age").value==0)
      {
  
        document.getElementById("error2").style.display="block"
  
      }
      else if(document.getElementById("zz").value=="")
        {
    
          document.getElementById("error3").style.display="block"
        }

      else
      {
        document.getElementById("error1").style.display="none"
        document.getElementById("error2").style.display="none"
         document.getElementById("error3").style.display="none"
        document.getElementById("myModal").style.display="block"

      }
    
   })
    
   })
   document.getElementById("zarbdar").addEventListener("click",function () {
    document.getElementById("myModal").style.display="none"
  
   })
   window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")
  ) {
      document.getElementById("myModal").style.display="none"
  
    }}
   
    
  /*  
  */
  