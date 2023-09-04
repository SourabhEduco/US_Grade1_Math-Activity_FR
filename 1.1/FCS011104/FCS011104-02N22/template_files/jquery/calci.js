$(document).ready(function(){
						  
						  
			

				$(".input1").focus();
		
		//alert(hasi)
			   
			   
function new_isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	window.new_checkMobile = new_isMobileDevice();		
		


var clickedNumber = "";
window.textValue;

	 var specialEventType;
	
	  	if( new_checkMobile ) {
    specialEventType = "touchstart";
} else {
    specialEventType = "click";
//alert(typeof specialEventType)


}

var checking = document.querySelector(".keypadKeys");

	//alert(checking)
checking.addEventListener('touchstart', onTouchStart,false);
checking.addEventListener('touchend', onTouchEnd,false);	
	
var timer;
function onTouchStart(e) {
    touchStartTimeStamp = e.timeStamp;
	
}

function onTouchEnd(e) {
    touchEndTimeStamp = e.timeStamp;

  var totalTime = (touchEndTimeStamp - touchStartTimeStamp);// in miliseconds
  // alert();
  if(totalTime<110){

var has_KeypadArea_Focus1 = $('.KeypadArea').is(':focus');

if(!has_KeypadArea_Focus1){
	  calc_btn();
		clickedNumber = "";
}

  }else{
	clickedNumber = "";  
	  
	  }
	
}	
	
	var tabVar = Number(1);			
		
  $(".newSet").on(specialEventType,function(){
							//alert()
						clickedNumber = ""
								tabVar = 1;
								 $(".input").css("border","1px solid black")		
								 $txt.css("border","1px solid red")	
								
							}); 


  $(".done").on(specialEventType,function(){
							//alert()
						
								
								 $(".input").css("border","1px solid black")		
								
								
							}); 

  $(".KeypadArea").on(specialEventType,function(){
						//clickedNumber = ""
								 $(".KeypadArea").blur();
								
							}); 




	
//	alert(specialEventType+"  hiiii")	   	
		
		function forFocus(){
			$txt.focus();		
			
			}
									//
		
			 
			 	$(".tab,.tabDevice").on(specialEventType,function(){
							//alert()
								tabRotation();
								calc_btn();
							}); 




			// alert(specialEventType)
			    
			   
  /*////////////////////////////////////////////////Code Calculator ///////////////////////////////////////////////////////////////////*/						   						  
					/*   $(".input1").val('');
					   $(".input2").val('');
					   $(".input3").val('');*/

						   //var $txt = null; // Keep track of currently active input
						   window.maxLength =5;
						   
						   $(".input1,.input2,.input3").prop('maxlength',maxLength);
					
						
						  $txt = $(".input1"); 
							//$(".input1").focus(); 
							 $(".input1").css("border","1px solid red")			
							//$(".input2").focus();
							$(".input1").on("focus", function(e) {
								$(".input").css("border","1px solid black")
								 $(".input1").css("border","1px solid red")			
								$txt = $(".input1");
								
							
								tabindex="1";
							tabVar = 1;
							$(".input1").focus(); 
							keyPressed();
	   					 });
							
						 $(".input2").on("focus", function(e) {
								//alert("hiiii")						   
									$(".input").css("border","1px solid black")						  // alert("a")
							 $(".input2").css("border","1px solid red")		
							$txt = $(".input2");
					
							
							tabindex="2";
							
							tabVar = 2;
							//alert("hiii")
							$(".input2").focus(); 
							keyPressed();
								
	   					 });
						 
						 $(".input3").on("focus", function(e) {
								$(".input").css("border","1px solid black")							   
							 $(".input3").css("border","1px solid red")								  // alert("a")
									
							$txt = $(".input3");
						
							
							tabindex="3";
							tabVar = 3;
						$(".input3").focus(); 
						keyPressed();
	   					 });
						  
						     if(String(navigator.userAgent).indexOf("Mobile") != -1){
							 /*$(".KeypadArea").on("focus", function(e) {
								$(".input1").focus().val($(".input1").val()); 

	   					 });*/
							
							 
						  }else{
						        $(".KeypadArea").on("focus", function(e) {
								$(".input1").focus().val($(".input1").val()); 

	   					 });
						  }
					

					
$('.Zero').on(specialEventType, function(e){clickedNumber = 0;
									
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										 
										 });		
$('.One').on(specialEventType, function(e){clickedNumber = 1;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										
										
										});
$('.Two').on(specialEventType, function(e){clickedNumber = 2;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										});
$('.Three').on(specialEventType, function(e){clickedNumber = 3;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										  });
$('.Four').on(specialEventType, function(e){clickedNumber = 4;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										 
										 });
$('.Five').on(specialEventType, function(e){clickedNumber = 5;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										 });
$('.Six').on(specialEventType, function(e){clickedNumber = 6;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										
										});
$('.Seven').on(specialEventType, function(e){clickedNumber = 7;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										  });
$('.Eight').on(specialEventType, function(e){clickedNumber = 8;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										  
										  });
$('.Nine').on(specialEventType, function(e){clickedNumber = 9;
	if(!new_checkMobile){
		
		calc_btn();
		}									 
										 
										 
										 });
/*$('.Dollar').click(function(){window.textValue = '$';});
$('.decimal').click(function(){window.textValue = '.';});*/


/////////////////////////////////////////////////////////////////////////////////////
                           function calc_btn(){
						
						  // $(".calc_btn").on(specialEventType, function(e) {
							//alert(!$txt)										
										$txt.focus();
					 $(".input").css("border","1px solid black")
									//alert(ismoving)
								//alert(textValue)
								
							  textValue =  clickedNumber 		
						
 								if (! $txt) return false; // If tracker is cleared, just return
 								var prev = $txt.val();
 								var bt = textValue;
								var pos = $txt[0].selectionStart;
 								if(pos>maxLength-1)
								{
									bt.val()=""
								}
 								 if(bt == "-"){
 									 bt = "– ";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+2, pos+2);
 								 }
								 else if(bt == "hours"){
									 bt == "&nbsp;hours";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+6, pos+6);
 								 }
								 else{
 									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+5, pos+5);
								 }
						
								// alert("wh")
								 $txt.css("border","1px solid red")	
 							setTimeout(forFocus,100)
 								//});  
						   }
/////////////////////////////////////////////////////////////////////////////////////

			
 							tabRotation = function(){
 								tabVar++;
									
							
								
								var hasFocus1 = $('.input1').is(':focus');
								var hasFocus2 = $('.input2').is(':focus');
								var hasFocus3 = $('.input3').is(':focus');

								
								
								//alert(hasFocus1+" "+hasFocus2+" "+hasFocus3)
								if(hasFocus1){
									 tabVar = 2;
									
									}else if(hasFocus2){
										 tabVar = 3;
										}else if(hasFocus3){
											 tabVar = 1;
											}
								
								 $(".input").css("border","1px solid black")
								
								if(tabVar >= 2){
 									 tabVar = 1;
								}
 								if(tabVar == 1){
									 $(".input1").focus().val($(".input1").val()); 
							 $(".input1").css("border","1px solid red")
									 tabVar = 0; 
								}else if(tabVar == 2){
									 $(".input2").focus().val($(".input2").val()); 
									 	// $txt  = $(".input2");
									  $(".input2").css("border","1px solid red")
								}else if(tabVar == 3){
									 $(".input3").focus().val($(".input3").val()); 
									 	// $txt  = $(".input3");
										 $(".input3").css("border","1px solid red")
									 
								}else if(tabVar == 4){
									 $(".input4").focus().val($(".input4").val()); 
									 	// $txt  = $(".input4");
									
								}
								setTimeout(forFocus,100)
									//$txt.focus();		
				
								
							}
							
							
////////////////////////////////////////////////////////////////
						
/////////////////////////////////////////////////////////////////
			
/////////////////////////////////////////////////////////////////////////////////////
			
		
			
							$('.back').on(specialEventType,function() {
 								var $myInput = String($txt.val()).split("").join("ris");
								var position = $txt[0].selectionStart;
  								if(position!=0){
									var $myInput1 = String($myInput).split("ris");
									$myInput1.splice(position-1,1);
									$myInput = $myInput1.join("ris")
								}
								$txt.val(String($myInput).split("ris").join(""))
								$txt[0].setSelectionRange(position-1, position-1);
								$txt.focus();
								//setTimeout(forFocus,100)
							});
							
							$('.clear').on(specialEventType,function() {
								
								
								$txt.val('');
								$txt.focus();
								//setTimeout(forFocus,100)
							});
							
 							$('.delete').on(specialEventType,function() {
							   
							var $myInput = String($txt.val()).split("").join("ris");
							var position = $txt[0].selectionStart;
						    var $myInput1 = String($myInput).split("ris");
								$myInput1.splice(position,1);
								$myInput = $myInput1.join("ris")
								$txt.val(String($myInput).split("ris").join(""))
								$txt[0].setSelectionRange(position, position);
								$txt.focus();
									//setTimeout(forFocus,100)
							});
							
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/

							
							$(".input1").keypress(function(e){
									 inputKeyRestrict(e);
								
								// keyPressed();
									 $txt = $(".input1"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
										$(".input").css("border","1px solid black")
										doneButton()
										document.getElementById("inputText").value;
 										$txt.focus();
									}
								$txt.focus();
								
						  });
							$(".input2").keypress(function(e){
									inputKeyRestrict(e);
								// keyPressed();
									 $txt = $(".input2"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
											$(".input").css("border","1px solid black")
										doneButton();
										document.getElementById("inputText1").value;
										
			
										$txt.focus();
									}
									
								 	
								$txt.focus();
								
								
								 
						  });
							
							$(".input3").keypress(function(e){
									inputKeyRestrict(e);
								// keyPressed();
									 $txt = $(".input3"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
											$(".input").css("border","1px solid black")
										doneButton();
										document.getElementById("inputText2").value;
										
			
										$txt.focus();
									}
									
								 	
								$txt.focus();
								
								
								 
						  });
							
	////////////////////Restrict the values/////////////////////////////////						
	inputKeyRestrict = function(e) {
		//	alert("e.which == "+e.which)		
			
			  var restrict = (e.which == 8 || e.which == 9 || e.which == 186  || e.which == 189  || e.which == undefined || e.which == 0   ) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
            if (restrict) {e.preventDefault();}
			
     };
 
 
/*//////////////////////////////////////////////////////////////////////////////////////////////////////*/

keyPressed = function(event){
 
								 var x = event.which || event.keyCode;
 								 var rClick = String($txt.val()).length+1
 								 if(x==45 && maxLength >= rClick){
 									var secondValue = document.querySelector("#minus");
									var bt1 = secondValue.getAttribute("data-value"); 
 									var prev = $txt.val();
 									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+2, pos+2);
 								 }
								 
								 /////////////////////////////////////////////////////
								 
								 if(x==43 && maxLength >= rClick){
 									var secondValue = document.querySelector("#plus");
									var bt1 = secondValue.getAttribute("data-value"); 
 									var prev = $txt.val();
 									var pos = $txt[0].selectionStart;
									event.preventDefault();
									var newValue = prev.substring(0, pos) + bt1 + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+3, pos+3);
 								 }
							}
							
	
					
			
					
			//alert()		
		
 									
		//alert("hiiiii")					
		
}); 

