$(document).ready(function(){
			//alert(window.innerHeight)			   
			if(window.innerHeight<window.innerWidth){
				var Minheight = $(".NwvrsnAdDolBtn").height();
				$(".NwvrsnAdDolBtn").css("min-height",3.2+"em")
			}
			
			
			if(checkMobile==false){
				var Fnt = parseInt($(".container-fluid").css("font-size"));
				var FntRight1 = $(".input1").width();
				var FntRight2 = $(".input2").width();
				$(".cross,.tick").css("top",Number(Number(Fnt)+Number(8))+"px")
				$(".cross1,.tick1").css("right",FntRight1*0.5+"px")
				$(".cross2,.tick2").css("right",FntRight2*0.55+"px")
				$(".NumberS,.Word").css("top",Number(-1)*Number(Number(Fnt)+Number(4))+"px")
				$(".NumberS").css("left",FntRight1*0.25+"px")
				$(".Word").css("left",FntRight2*0.4+"px")
			}else{
				if(window.innerHeight<window.innerWidth){
					var Fnt = parseInt($(".container-fluid").css("font-size"));
					var FntRight1 = $(".input1").width();
					var FntRight2 = $(".input2").width();
					$(".cross,.tick").css("top",Number(Number(Fnt)+Number(8))+"px")
					$(".cross1,.tick1").css("right",FntRight1*0.5+"px")
					$(".cross2,.tick2").css("right",FntRight2*0.55+"px")
					$(".NumberS,.Word").css("top",Number(-1)*Number(Number(Fnt)+Number(4))+"px")
					$(".NumberS").css("left",FntRight1*0.25+"px")
					$(".Word").css("left",FntRight2*0.4+"px")	
				}else{
					//alert()
					var Fnt = parseInt($(".input1").css("height"));
					var FntRight1 = $(".input1").width();
					var FntRight2 = $(".input2").width();
					$(".cross,.tick").css("top",Number(Number(Fnt)+Number(4))+"px")
					$(".cross1,.tick1").css("right",FntRight1*0.5+"px")
					$(".cross2,.tick2").css("right",FntRight2*0.55+"px")
					$(".NumberS,.Word").css("top",Number(-1)*Number(Number(Fnt)*0.5)+"px")
					$(".NumberS").css("left",FntRight1*0.25+"px")
					$(".Word").css("left",FntRight2*0.4+"px")
				}
			}
				          
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
			
			
			temp_str = String(className).split(" ")
			if(temp_str[0]=="input1")
			{
			var oldval = $(".input1").val();
			}
			if(temp_str[0]=="input2")
			{
			var oldval = $(".input2").val();
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
			
			
			
        }
    });
 			 
				
					  
						   });