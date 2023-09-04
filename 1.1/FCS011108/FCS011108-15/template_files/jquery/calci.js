$(window).load(function(){
						  
			//alert(NumberName1)			  
						  
							$(".tab,.tabDevice").on("click",function(){
 									tabRotation();
							}); 
 			   
  /*////////////////////////////////////////////////Code Calculator ///////////////////////////////////////////////////////////////////*/						   						  
					  /* $(".input1").val('');
					   $(".input2").val('');*/

						   //var $txt = null; // Keep track of currently active input
						   window.maxLength =11;
						   
						   $(".input1,.input2").prop('maxlength',maxLength);
					
						
						  $txt = $(".input1"); 
							$(".input1").focus(); 
							//$(".input2").focus();
							$(".input1").on("focus", function(e) {
										
								$txt = $(".input1");
								$(".input1").focus(); 
								keyPressed();
								tabindex="1";
				
	
	   					 });
							
						 $(".input2").on("focus", function(e) {
														   
														  // alert("a")
									
							$txt = $(".input2");
							$(".input2").focus(); 
							keyPressed();
							tabindex="2";
				
	
	   					 });
						  
						     if(String(navigator.userAgent).indexOf("Mobile") != -1){
							
							
							 
						  }else{
						        $(".KeypadArea").on("focus", function(e) {
								$(".input1").focus().val($(".input1").val()); 
	
	   					 });
								
						  }
						  
	  
$('.One').click(function(){window.textValue = "Two";});						  
$('.Two').click(function(){window.textValue = "Three";});
$('.Three').click(function(){window.textValue = "Four";});
$('.Four').click(function(){window.textValue = "Five";});
$('.Five').click(function(){window.textValue = "Six";});
$('.Six').click(function(){window.textValue = "Seven";});
$('.Seven').click(function(){window.textValue = "Eight";});
$('.Eight').click(function(){window.textValue = "Nine";});
$('.Nine').click(function(){window.textValue = "Ten";});
$('.Ten').click(function(){window.textValue = "Eleven";});
$('.Eleven').click(function(){window.textValue = "Twelve";});
$('.Tweleve').click(function(){window.textValue = "Thirteen";});
$('.Thirteen').click(function(){window.textValue = "Fourteen";});
$('.Fourteen').click(function(){window.textValue = "Fifteen";});
$('.Fifteen').click(function(){window.textValue = "Sixteen";});
$('.Sixteen').click(function(){window.textValue = "Seventeen";});
$('.Seventeen').click(function(){window.textValue = "Eighteen";});
$('.Eighteen').click(function(){window.textValue = "Nineteen";});
$('.Nineteen').click(function(){window.textValue = "Twenty";});
$('.Twenty-New1').click(function(){window.textValue = `${NumberName1}`;});
$('.Twenty-New2').click(function(){window.textValue = `${NumberName2}`;});
$('.Twenty-New3').click(function(){window.textValue = `${NumberName3}`;});
$('.Twenty-New4').click(function(){window.textValue = `${NumberName4}`;});

$('.one1').click(function(){window.textValue = 1;});
$('.two1').click(function(){window.textValue = 2;});
$('.three1').click(function(){window.textValue = 3;});
$('.four1').click(function(){window.textValue = 4;});
$('.five1').click(function(){window.textValue = 5;});
$('.six1').click(function(){window.textValue = 6;});
$('.seven1').click(function(){window.textValue = 7;});
$('.eight1').click(function(){window.textValue = 8;});
$('.nine1').click(function(){window.textValue = 9;});
$('.ten1').click(function(){window.textValue = 0;});


/*$('.decimal').click(function(){window.textValue = '.';});*/


/////////////////////////////////////////////////////////////////////////////////////

 
						   $(".calc_btn").on("click", function(e) {
 								$txt .focus();
 								if (! $txt) return false; // If tracker is cleared, just return
 								var prev = $txt.val();
 								var bt = textValue;
								var pos = $txt[0].selectionStart;
								
 								if(pos>maxLength-1)
								{
									bt.val()=""
								}
								
								
 								 if(bt == "Two"){
 									 bt = "Two";
									 
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
 								 }
								 else if(bt == "Three"){
									 bt == "Three";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+5, pos+5);
 								 }
								  else if(bt == "Four"){
									 bt == "Four";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+4, pos+4);
 								 }
								  else if(bt == "Five"){
									 bt == "Five";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+4, pos+4);
 								 }
								  else if(bt == "Six"){
									 bt == "Six";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
 								 }
								  else if(bt == "Seven"){
									 bt == "Seven";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+5, pos+5);
 								 }
								  else if(bt == "Eight"){
									 bt == "Eight";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+5, pos+5);
 								 }
								  else if(bt == "Nine"){
									 bt == "Nine";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+4, pos+4);
 								 }
								  else if(bt == "Ten"){
									 bt == "Ten";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+3, pos+3);
 								 }
								  else if(bt == "Eleven"){
									 bt == "Eleven";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+6, pos+6);
 								 }
								  else if(bt == "Twelve"){
									 bt == "Twelve";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+6, pos+6);
 								 }
								  else if(bt == "Thirteen"){
									 bt == "Thirteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+8, pos+8);
 								 }
								  else if(bt == "Fourteen"){
									 bt == "Fourteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+8, pos+8);
 								 }
								  else if(bt == "Fifteen"){
									 bt == "Fifteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+7, pos+7);
 								 }
								  else if(bt == "Sixteen"){
									 bt == "Sixteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+7, pos+7);
 								 }
								  else if(bt == "Seventeen"){
									 bt == "Seventeen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+9, pos+9);
 								 }
								  else if(bt == "Eighteen"){
									 bt == "Eighteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+8, pos+8);
 								 }
								  else if(bt == "Nineteen"){
									 bt == "Nineteen";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+8, pos+8);
 								 }
								  else if(bt == "Twenty"){
									 bt == "Twenty";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+6, pos+6);
 								 }
								  else if(bt == "Twenty-one"){
									 bt == "Twenty-one";
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+10, pos+10);
 								 }else if(bt==`${NumberName1}`){
									// alert()
									 bt = `${NumberName1}`;
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+Number(String(NumberName1).length), pos+Number(String(NumberName1).length));
								 }else if(bt==`${NumberName2}`){
									// alert()
									 bt = `${NumberName2}`;
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+Number(String(NumberName2).length), pos+Number(String(NumberName2).length));
								 }else if(bt==`${NumberName3}`){
									// alert()
									 bt = `${NumberName3}`;
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+Number(String(NumberName3).length), pos+Number(String(NumberName3).length));
								 }else if(bt==`${NumberName4}`){
									// alert()
									 bt = `${NumberName4}`;
									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									 $txt.val(newValue);
									 $txt[0].setSelectionRange(pos+Number(String(NumberName4).length), pos+Number(String(NumberName4).length));
								 }
								 else{
 									 var newValue = prev.substring(0, pos) + bt + prev.substring(pos);
									$txt.val(newValue);
									$txt[0].setSelectionRange(pos+1, pos+1);
								 }
 								 $txt.focus();
 								});  
						   
/////////////////////////////////////////////////////////////////////////////////////

				var tabVar = Number(1);
 							tabRotation = function(){
 								tabVar++;
								if(tabVar >= 3){
 									 tabVar = 1;
								}
 								if(tabVar == 1){
									 $(".input1").focus().val($(".input1").val()); 
								}else if(tabVar == 2){
									 $(".input2").focus().val($(".input2").val()); 
									 tabVar = 0;
								}
							}
////////////////////////////////////////////////////////////////
						
/////////////////////////////////////////////////////////////////
			
							/////////////////////////////////////////////////////////////////////////////////////
			
							$('.back').on('click',function() {
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
							});
							
							$('.clear').on('click',function() {
								
								
								$txt.val('');
								$txt.focus();
							});
							
 							$('.delete').on('click',function() {
							   
							var $myInput = String($txt.val()).split("").join("ris");
							var position = $txt[0].selectionStart;
						    var $myInput1 = String($myInput).split("ris");
								$myInput1.splice(position,1);
								$myInput = $myInput1.join("ris")
								$txt.val(String($myInput).split("ris").join(""))
								$txt[0].setSelectionRange(position, position);
								$txt.focus();
								
							});
							
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/
							
/*/////////////////////////////////////// Code on KeyPress ////////////////////////////////////////////////*/

							
							$(".input1").keypress(function(e){
									 inputKeyRestrict(e);
								
								 
									 $txt = $(".input1"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
									
										doneButton()
										document.getElementById("inputText").value;
 										$txt.focus();
									}
								$txt.focus();
								
						  });
							$(".input2").keypress(function(e){
									inputKeyRestrict(e);
								 
									 $txt = $(".input2"); 
									if( e.which==27){
										$(".prompt").hide();
										$(".Procedure_banner").hide();
										$(".ReducePromt").hide();
										$(".blankMessage").hide();
									}
									if( e.which==13){
										
										doneButton();
										document.getElementById("inputText1").value;
										
			
										$txt.focus();
									}
									
								 	
								$txt.focus();
								
								
								 
						  });
							
	////////////////////Restrict the values/////////////////////////////////						
	
			
			//alert("e.which == "+e.which)		
			
			inputKeyRestrict = function(e) {
	//		  alert("e.which == "+e.which)					 
            var restrict = (e.which == 8 ||e.which == 47 || e.which == 46 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^a-z||A-Z||^0-9 ]/);
            if (restrict) {e.preventDefault();}
    };//restrict alphabets
			
    
 
 
 
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
}); 

