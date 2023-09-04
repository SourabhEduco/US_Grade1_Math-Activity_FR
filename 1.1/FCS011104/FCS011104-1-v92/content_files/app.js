$(document).ready(function(){




			window.textfont = $(".quesStatment").css("font-size");
				
				$('input[type="text"]').css("font-size",textfont);
				textfont = parseInt(textfont);
				$('.symbol').css("font-size",textfont*.70+"px");
				$('.ThreeCommonBtns').css("font-size",textfont*.65+"px");
				$('.font').css("font-size",textfont*.85+"px");
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


	time=220;
	
	
	
	$(".newSet").click(function(){
		clas=$(".hide_curve");
			$(".New_lined").text("");	
		clas.stop();	
		
	});	   
						   
	
sol=function(){	
	
			clas=$(".hide_curve");
		clas.stop();					   
       

	
	$(".tickMark").show();
	
	$(".curve").hide();
	start=Number(val1)
	end=Number(val2)
	
	//var total1=start-end;
	
	var total = start - end;
	
	
	
	//alert(total+" "+start+" "+end)
	
	rect_leftCons = (total*30)+70;
	
	rect_left = rect_leftCons;
	
	rect_widthCons = (end)*30;
	
	rect_width = rect_widthCons;
	
	New_rect_width = (total-start)*30;
	
	
	$(".hide_curve").css("x",rect_leftCons)
	$(".hide_curve").css("width",rect_widthCons)
	
	total1=total+1;
	
	for(i=total1; i<=start; i++){
		$(".curve"+i).attr("stroke","red");
		$(".curve"+i).show();
		//$(".curve").show();
	}
	
	
	clas=$(".hide_curve");
	
     iPlusPlus=0

	fun=function(){
	
	//alert(rect_left+" "+rect_width)	
     iPlusPlus++;
	

	
	if(rect_width>0){
		
		rect_left=rect_left+15;
		rect_width=rect_width-15;
		
		
		//$(clas).attr("x",rect_left+"px");
		
		$(clas).attr("width",rect_width+"px");
	
		checkingX=$(clas).css("x")
		checkingWidth=$(clas).css("width")
	
	if(iPlusPlus<=1){
		
			fun();
			

		}else{
		
		clas.animate({
			width : rect_width,		 
			//x : rect_left	  				  
			},time,function(){
				
			
				fun();
			})
	
		}
	
	}else{
		rect_left=rect_leftCons;
		rect_width=rect_widthCons;
		 $(".lined"+total).css({ fill: "red" });
		$(".lined"+total).css({ stroke: "red" });
		}
	
	}
	fun()
	
	
ForNumbers=function(){
	num_check=1;
	numStart=(start)
	
for(j=start; j>=total;j--){
	
	numStart--;

if(num_check<=end){
	$(".lined_"+numStart).text(num_check);	
	
	}
		num_check++;
	//alert(".lined_"+start)
	
	}	
}	
	
ForNumbers();	
	
	
		
};




});