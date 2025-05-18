 $(document).ready( function() {

        // When site loaded, load the Popupbox First
        loadPopupBox();
    
        $('#popupBoxClose').click( function() {            
            unloadPopupBox();
        });
		
		
        
      //  $('.dd-inner').click( function() {
      //     unloadPopupBox();
       // });

        function unloadPopupBox() {    // TO Unload the Popupbox
		$("#main").css('background-color','#fff');
		$("#footer").css('background-color','');
		$("#nav").css('background-color','#fff');
				$("#wrapper,#main").css('opacity','1');
				$("#wrapper,#footer").css('opacity','1');
				$("#wrapper,#nav").css('opacity','1');
			$("a").unbind();
  
			
		
            $('#popup_box').fadeOut("slow");
            $("#popup_box").css({ // this is just for style        
                "opacity": "1"  
            }); 
        }    
        
        function loadPopupBox() {    // To Load the Popupbox
			
			$("#wrapper,#main").css('background-color','#999999');
			
			$("#wrapper,#main").css('opacity','0.1');
			$("#wrapper,#footer").css('background-color','#999999');	
			$("#wrapper,#footer").css('opacity','0.1');
			$("#wrapper,#nav").css('background-color','#999999');	
			$("#wrapper,#nav").css('opacity','0.1');
					//$("#pageCover").css('overflow','show');
			$("a").click(function(event) {
 				 event.preventDefault();
  
			});
			$("#readMore").unbind();
  
						
				  
            $('#popup_box').fadeIn("slow");
            $("#popup_box").css({ // this is just for style
                "opacity": "0.3"  
            });         
			//// FOR TIME SET
					setTimeout(function() {
						  unloadPopupBox();
					}, 12000);			
			// 
			////////
			  
        }        
    });