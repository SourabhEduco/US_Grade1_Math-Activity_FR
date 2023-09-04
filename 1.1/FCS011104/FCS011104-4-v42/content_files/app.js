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
	end=Number(0)
	
	//var total1=start-end;
	
	var total = start - end;
	
		if(total>=0 && total<=20){window.totalNew = (total);}
		else if(total>=21 && total<=29){window.totalNew = (total-20);}
		else if(total>=31 && total<=39){window.totalNew = (total-30);}
		else if(total>=41 && total<=49){window.totalNew = (total-40);}
		else if(total>=51 && total<=59){window.totalNew = (total-50);}
		else if(total>=61 && total<=69){window.totalNew = (total-60);}
		else if(total>=71 && total<=79){window.totalNew = (total-70);}
		else if(total>=81 && total<=89){window.totalNew = (total-80);}
		else if(total>=91 && total<=99){window.totalNew = (total-90);}
	
	//alert(total+" "+start+" "+end)
	
	rect_leftCons = (total*30)+70;
	
	rect_left = rect_leftCons;
	
	rect_widthCons = (end)*30;
	
	rect_width = rect_widthCons;
	
	New_rect_width = (total-start)*30;
	
	
	$(".hide_curve").css("x",rect_leftCons)
	$(".hide_curve").css("width",rect_widthCons)
	
	total1=total+1;
	
	/*for(i=total1; i<=start; i++){
		$(".curve"+i).attr("stroke","red");
		$(".curve"+i).show();
		 
	}*/
	
	
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
		
		//alert(totalNew+" ==totalNew");
		
		$(".linedA"+Number(totalNew-1)).css({ fill: "red" });
		$(".linedA"+Number(totalNew-1)).css({ stroke: "red" });
		$(".Nlined_"+(Number(totalNew))).css({ fill: "red"});
		$(".Nlined_"+(totalNew)).css({ stroke: "red"});
		$(".curve"+totalNew).attr("stroke","red");
		$(".curve"+totalNew).show();
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