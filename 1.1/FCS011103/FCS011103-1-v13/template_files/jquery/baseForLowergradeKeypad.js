$(document).ready(function(){
			
			
			
			
						   
		 TimerInitialize();
						  
	
	window.h = $(window).innerHeight();
	window.width1 = $(window).width();
	window.w_Set = $(window).innerWidth();
	window.h_Set = $(window).innerHeight();


	
							
				window.headerHeight = $(".header").innerHeight();
				window.headerMarginTop = $(".header").css("margin-top")
				headerMarginTop = parseInt(headerMarginTop)
				window.footerHeight = $(".footer").innerHeight();
				window.footerMarginTop = $(".footer").css("margin-top")
				footerMarginTop = parseInt(footerMarginTop)
				window.containerMarginTop = $(".container").css("margin-top")
				containerMarginTop = parseInt(containerMarginTop)
				window.containerfluidHeight = $(".container-fluid").innerHeight();
				window.containerHeight = containerfluidHeight-(footerHeight+headerMarginTop+containerMarginTop+footerMarginTop+2)
				window.quesPartHeight = $(".quesPart").innerHeight();
				window.SolutionPartHeight = containerHeight-(quesPartHeight+5)
				window.textfont = $(".quesvalues").css("font-size");
				$('input[type="text"]').css("font-size",textfont);
				
				
				
				window.containerfluidWidtht = $(".container-fluid").innerWidth();
				window.containerHeaderQuesWidtht = $(".containerHeaderQues").innerWidth();
				
				
				window.AreaLeft = Number(Number(containerfluidWidtht) - Number(containerHeaderQuesWidtht))/2  			
				
				
				$(".LeftSpace,.RightSpace").css({"width":AreaLeft+"px","height":containerfluidHeight+"px","background-size":"cover","-webkit-filter":"blur(2px)","-moz-filter":"blur(2px)","-ms-filter":"blur(2px)","-o-filter":"blur(2px)","filter":"blur(2px)"})
				
/*var img = document.createElement("img");
img.src = "image/background.png";
var src = document.getElementById("BgImage");
src.appendChild(img);*/



	
	
	
				
				/*<!--$(".ForBlurEffect").css({"background-size":"cover","-webkit-filter":"blur(5px)","-moz-filter":"blur(5px)","-ms-filter":"blur(5px)","-o-filter":"blur(5px)","filter":"blur(5px)"});-->*/
				

setTimeout(function(){
					$(".Handcursor").hide();
					},1400);		

	
	
  	$('.container-fluid').prepend('<img class="background" src="image/background.png" />')


	
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.checkMobile = isMobileDevice();		
				



 		
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
				$(".print,.autorun").css("width",footerHeight+"px");
				$(".print,.autorun").css("height",footerHeight+"px");
				window.textFontSize = $(".container-fluid").css("font-size");
				$(".input").css("font-size",textFontSize);
				
				window.textupdated = parseInt(textFontSize)*.85;
				
				$(".done,.newSet,.solution").css("font-size",textupdated-1+"px")
 				$(".button,.keypadNote").css("font-size",textupdated-3+"px");
				
			$(".input").keydown(function(e){if( e.which==13){window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}}});

$(".done").click(function(){
 
		window.promptDisplay = $(".prompt,.prompt_New").css("display")
		 
		if(promptDisplay != "none"||promptDisplay != "block")
		{
			
			$(".prompt,.prompt_New").delay(2500).hide(0);	
		}

	});

 
 
  if(checkMobile){
 	 
			 $(".ForPortMode").show().css({"display":"inline-block"});
			 $(".containerRight").hide();
			 $(".containerLeft").css({"width":"100%"});
			 $(".input").css("border","1px solid black");
			 $('input[type="text"], textarea').each(function(){
 			 $(this).attr('readonly','readonly');}); 
			
			}else{
				
			$(".Desktop").show();
 			$(".containerLeft").css({"width":"100%"});
			
			}
 
  
 
 PromptWidth = $(".prompt").width();
 solutionBoxWidth = $(".SolutionPart").width();
 marginLeft = (solutionBoxWidth-PromptWidth)/2;
 $(".prompt").css("margin-left",marginLeft+"px");
 
 
 PromptHeight = $(".prompt").height();
 solutionBoxHeight = $(".SolutionPart").height();
 marginTop = (solutionBoxHeight-PromptHeight)/4;
 $(".prompt").css("margin-top",marginTop+"px");

 $(".newSet").val("New Version")
 $(".header").css("visibility","hidden");
 $(".footer h5").html("Copyright @ 2019, Educo International, Inc.");
 
 	window.CommonAreaQuesNdKeypad = $(".CommonAreaQuesNdKeypad").innerHeight();
	$(".SolutionPart").css("height",containerfluidHeight-(CommonAreaQuesNdKeypad+footerHeight)+"px");
	
	//alert(containerfluidHeight+" ==containerfluidHeight||footerHeight== "+footerHeight);

 $(".containerLeft").css("height",containerfluidHeight - footerHeight+"px")
 
	
 
 
 
 
 
						   });

