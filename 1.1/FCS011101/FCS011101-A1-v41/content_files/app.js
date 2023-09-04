$(document).ready(function(){




			window.textfont = $(".quesStatment").css("font-size");
				
				$('input[type="text"]').css("font-size",textfont);
				textfont = parseInt(textfont);
				$('.symbol').css("font-size",textfont*.70+"px");
				$('.ThreeCommonBtns').css("font-size",textfont*.65+"px");
				$('.IncorrectText,.CorrectText').css("font-size",textfont+"px");
	/*------------------------------------------------------------------------------------------------------------------------*/			
				
			 
			    			
					  
				$(".draggable").draggable({
										 
        revert: false,
        helper: 'clone',
        start: function(event, ui) {
			
            $(this).fadeTo('fast', 0.5);
        },
        stop: function(event, ui) {
            $(this).fadeTo(0, 1);
        }
    });

     $(".droppable").droppable({
        drop: function(event, ui) {
			
			var className = $(this).attr('class');
			
			
			temp_str = String(className).split(" ")
			if(temp_str[0]=="input1")
			{
			var oldval = $(".input1").val();
			}
			if(temp_str[0]=="input2")
			{
			var oldval = $(".input2").val();
			}
			if(temp_str[0]=="input3")
			{
			var oldval = $(".input3").val();
			}
			//alert(temp_str[0])
			var val = $("."+temp_str[0]).val();
			
			var disabledvar = $("."+temp_str[0]).prop("disabled");
			
			if(disabledvar==false)
			{
            this.value = $(ui.draggable).text();
			}
			else
			{
				 this.value = val
			}
			var newval = oldval+""+this.value
			$("."+temp_str[0]).val(newval);
			
			if(temp_str[0] == "input1"){
				
				$(".input1").focus();
				
			}
			
			if(temp_str[0] == "input2"){
				
				$(".input2").focus();
				
			}
			
			if(temp_str[0] == "input3"){
				
				$(".input3").focus();
				
			}
        }
    });
			 





   	  
					if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
 	
			
			
			if (window.innerHeight > window.innerWidth)
			{
				var imageH = $(".AllImages").css("height");
				var RadioH = $(".DivForRadioBtns ").css("height");
				
				imageH = parseInt(imageH)
				RadioH = parseInt(RadioH)
				
				$(".ImgA").css("margin-top",(RadioH-imageH)/2.2+"px")
			}
			}else{
				
		
			
			
			
			} 
				
					  




});