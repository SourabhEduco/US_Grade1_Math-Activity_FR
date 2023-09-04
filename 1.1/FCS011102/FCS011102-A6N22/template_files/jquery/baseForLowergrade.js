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
				$(".container").css("height",containerHeight+"px");
				
				
				
				window.quesPartHeight = $(".quesPart").innerHeight();
				window.SolutionPartHeight = containerHeight-(quesPartHeight+5)
				$(".SolutionPart").css("height",SolutionPartHeight+"px");
				
				window.textfont = $(".quesvalues").css("font-size");
				$('input[type="text"]').css("font-size",textfont)
				
				
				
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/							
				$(".print,.autorun").css("width",footerHeight+"px");
				$(".print,.autorun").css("height",footerHeight+"px");
				window.textFontSize = $(".container-fluid").css("font-size");
				$(".input").css("font-size",textFontSize);
				
				window.textupdated = parseInt(textFontSize)*.85;
				
				$(".done,.newSet,.solution").css("font-size",textupdated+"px")
				

				
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

 
 
  if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
 	
			 $(".ForPortMode").show().css({"display":"inline-block"});
			 
			 $(".containerRight").hide();
			 $(".containerLeft").css({"width":"100%"});
			
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
 $(".footer h5").html("Copyright @ 2019, Educo International, Inc.")
 
						   });

