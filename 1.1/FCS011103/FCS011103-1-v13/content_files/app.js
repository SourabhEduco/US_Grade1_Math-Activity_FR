$(document).ready(function(){
						   
				  
				          
			window.textfont = $(".quesStatment").css("font-size");
				
				$('input[type="text"]').css("font-size",textfont);
				textfont = parseInt(textfont);
				$('.symbol').css("font-size",textfont*.70+"px");
				$('.ThreeCommonBtns').css("font-size",textfont*.65+"px");
				
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
			
			var oldval = $(".input").val();
			temp_str = String(className).split(" ")
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
			 
 			
			
window.w_Set = $(window).innerWidth();
window.h_Set = $(window).innerHeight();	 
		
		
		
		
		function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile = isMobileDevice();		
	
	
	$(".forPort").hide();
if(checkMobile){
	
	$(".forPort").show();
	$(".forDesktop").hide();
	
	if(w_Set > h_Set)
	{
		$(".forPort").hide();
		$(".forDesktop").show();
	}
	
	}else{
		$(".forPort").hide();
		$(".forDesktop").show();
		
		}				
			
			
				
		var  image_div=$(".image_div").height();
						var  image_div_margin=$(".image_div").css("margin-top");
						
						image_div_margin=parseInt(image_div_margin);
						
						var fixToCenter1=$(".fixToCenter1").height();
						var fixToCenter2=0;//$(".fixToCenter2").outerHeight(true);
						
						var fixToCenter=fixToCenter1+fixToCenter2;
						
						var margin=(image_div-fixToCenter)/2;
						if(image_div>fixToCenter){
						
						$(".fixToCenter1").css("margin-top",(margin+image_div_margin)+"px");
						
						}else{
						$(".fixToCenter1").css("margin-top",image_div_margin+"px");
						}
							  
				
					  
						   });