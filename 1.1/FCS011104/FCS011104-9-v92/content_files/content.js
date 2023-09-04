//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team




$(document).ready(function(){
						  ////////////Start Code for NFR////////////////
						     $(document).keydown(function(objEvent) {
												 
							
						  if(DoneClicked == 1)
						  {
							  
							 $(function() {
					  
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc,.done'), inputTo;
									
									// bind on keydown
									//inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (objEvent.keyCode == 9 || objEvent.which == 9) {
											
											// prevent default tab action
											objEvent.preventDefault();
								
											if (objEvent.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
								
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									//});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").hide()
						   $(".FtrTab_Td1").css("pointer-events","none");
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////		
						  
						    var sb=-10000;
							var autorunVar = 0
							$(".tick,.cross").css("visibility","hidden");	
 						    
							//$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							$(".input1").val('');
					   		$(".input2").val('');
 							
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 $(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..
											 
				 					$(".Procedure_banner,.SolutionPartContent").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").val('');			
					$(".Handcursor").hide();
					$(".prompt,.prompt_New").hide();	
					$(".tick,.cross").css("visibility","hidden");		
 					
					$(".input").val('');
				    $(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt,.prompt,.promptComma").hide();
					
					////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2").val('')
									$(".remark").hide()
									$(".done1,.done").css("pointer-events","auto")
									$(".input1,.input2").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2").attr("disabled",false)
									//document.getElementById("FB_TxtBox").innerHTML =""
									////////// for NFR End//////
									
 																	
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner, .solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									
								$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
				
	
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".input1").focus();
									////////// for NFR /////
									
											});


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						
						    $(".solution").click(function(){ 
									$(".SolutionPart").css("display","inline-block")				  
									$(".input1").focus();
									$(".Procedure_banner").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									
									$(".Handcursor").hide();
												        
														});
							
							 $(".Procedure").click(function(){ 
															
									$(".input1").focus();
									 autorunVar = 1; 
									 sb=-1;
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
				randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 1000000;
					var range_finX2 = 9999999;
					var range_startX3 = 100000;
					var range_finX3 = 999999;
					var range_startX4 = 1000;
					var range_finX4 = 9999;
					var array_Range = 600;
					
					///////////////////////////////////////////////////
					
					var next_val = 0;
				
					var array_Range = 599;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();

					var R5_Arr = new Array();
					var R11_Arr = new Array();
					var R1_indexArr = new Array();
					
Q1_Arr = new Array();
Q2_Arr = new Array();
Q3_Arr = new Array();
Q4_Arr = new Array();	
Q5_Arr = new Array();	
Q6_Arr = new Array();
Q7_Arr = new Array();	
				
					var temp_str;
					var ta1;
					var ta2;
					var ta3;
					var ta4;
					var ta5;
					var ta6;
					var ta7;
					var ta8;
					var q1_txt;
					var counter = 0;
					var wt_id1;
		
				
				quesGeneration = function(){
					
			/* 		var srb = [20,30,40,50,60,70,80,90]
			 for (var i = 0; i<array_Range; i++) {
					 	
				
					 	
				var num1 = randRange(0, 91);
				var num2 = Number(num1) + 3;
				window.finalAns = Number(num1) + 1;
				window.finalAns1 = Number(num1)+ 2;
							
				
				 var aj = num1+1
				
			  if(!srb.includes(aj)){
				Q1_Arr.push(num1+"@"+num2+"@"+finalAns+"@"+finalAns1);
			 }

				 }
		
				 Q1_Arr = uniqueArray0(Q1_Arr)
				 console.log(Q1_Arr+" Q1_Arr") */
				 
				Q1_Arr = ["33@36@34@35","46@49@47@48","43@46@44@45","7@10@8@9","3@6@4@5","24@27@25@26","26@29@27@28","0@3@1@2","13@16@14@15","77@80@78@79","21@24@22@23","81@84@82@83","61@64@62@63","37@40@38@39","32@35@33@34","57@60@58@59","28@31@29@30","51@54@52@53","16@19@17@18","18@21@19@20","68@71@69@70","85@88@86@87","27@30@28@29","41@44@42@43","1@4@2@3","88@91@89@90","65@68@66@67","53@56@54@55","30@33@31@32","62@65@63@64","4@7@5@6","40@43@41@42","55@58@56@57","84@87@85@86","73@76@74@75","35@38@36@37","78@81@79@80","2@5@3@4","36@39@37@38","5@8@6@7","54@57@55@56","91@94@92@93","83@86@84@85","72@75@73@74","71@74@72@73","75@78@76@77","17@20@18@19","11@14@12@13","25@28@26@27","56@59@57@58","58@61@59@60","31@34@32@33","34@37@35@36","48@51@49@50","22@25@23@24","52@55@53@54","82@85@83@84","9@12@10@11","67@70@68@69","10@13@11@12","15@18@16@17","70@73@71@72","14@17@15@16","42@45@43@44","76@79@77@78","38@41@39@40","6@9@7@8","80@83@81@82","12@15@13@14","74@77@75@76","8@11@9@10","64@67@65@66","50@53@51@52","23@26@24@25","60@63@61@62","87@90@88@89","47@50@48@49","44@47@45@46","66@69@67@68","45@48@46@47","90@93@91@92","86@89@87@88","63@66@64@65","20@23@21@22"]	
				//alert(Q1_Arr.length)
						};
					
			/*/////////////////////////R1_Arr////////////////////////////////*/
			
			
			var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					//////alert(next_val+"  == next_val")
					return loadingString;
				}	
			
		
			nextQuesGeneration = function(){

			
					if (CurrQuestionIndex != 0) {
							next_val = Number(CurrQuestionIndex);
						}
						else {
							next_val = next_val;
						}
				
	if (next_val>=((Q1_Arr.length)-1)) {
		next_val = 1;
	}
	temp_str = String(Q1_Arr[next_val]).split("@")
	
				val1 = temp_str[0];
				val2 = temp_str[1];
				window.finalAns = temp_str[2];
				window.finalAns1 = temp_str[3];
				
		if(val1<19){
				
				
				window.lined0 = 0;
				window.lined1 = 1;
				window.lined2 = 2;
				window.lined3 = 3;
				window.lined4 = 4;
				window.lined5 = 5;
				window.lined6 = 6;
				window.lined7 = 7;
				window.lined8 = 8;
				window.lined9 = 9;
				window.lined10 = 10;
				window.lined11 = 11;
				window.lined12 = 12;
				window.lined13 = 13;
				window.lined14 = 14;
				window.lined15 = 15;
				window.lined16 = 16;
				window.lined17 = 17;
				window.lined18 = 18;
				window.lined19 = 19;
				window.lined20 = 20;
				
		}else{
				
				window.SS1 =  val1.split("");
				window.SS1a =  Number(SS1[0])*10;
			 
				window.lined0 = SS1a;
				window.lined1 = SS1a+1;
				window.lined2 = SS1a+2;
				window.lined3 = SS1a+3;
				window.lined4 = SS1a+4;
				window.lined5 = SS1a+5;
				window.lined6 = SS1a+6;
				window.lined7 = SS1a+7;
				window.lined8 = SS1a+8;
				window.lined9 = SS1a+9;
				window.lined10 = SS1a+10;
				window.lined11 = SS1a+11;
				window.lined12 = SS1a+12;
				window.lined13 = SS1a+13;
				window.lined14 = SS1a+14;
				window.lined15 = SS1a+15;
				window.lined16 = SS1a+16;
				window.lined17 = SS1a+17;
				window.lined18 = SS1a+18;
				window.lined19 = SS1a+19;
				window.lined20 = SS1a+20;	
					
					
					
					
		}
			 
				
		
				$(".lined").css({ fill: "blue" });
				$(".lined").css({ stroke: "blue" });
				
				$(".val1").html(val1)
				$(".val2").html(val2)
				$(".finalAns").html(finalAns)
				$(".finalAns1").html(finalAns1)
				
				
				
$(".lined0,.Nlined_0").html(lined0);				
$(".lined1,.Nlined_1").html(lined1);
$(".lined2,.Nlined_2").html(lined2);
$(".lined3,.Nlined_3").html(lined3);
$(".lined4,.Nlined_4").html(lined4);
$(".lined5,.Nlined_5").html(lined5);
$(".lined6,.Nlined_6").html(lined6);
$(".lined7,.Nlined_7").html(lined7);
$(".lined8,.Nlined_8").html(lined8);
$(".lined9,.Nlined_9").html(lined9);
$(".lined10,.Nlined_10").html(lined10);
$(".lined11,.Nlined_11").html(lined11);
$(".lined12,.Nlined_12").html(lined12);
$(".lined13,.Nlined_13").html(lined13);
$(".lined14,.Nlined_14").html(lined14);
$(".lined15,.Nlined_15").html(lined15);
$(".lined16,.Nlined_16").html(lined16);
$(".lined17,.Nlined_17").html(lined17);
$(".lined18,.Nlined_18").html(lined18);
$(".lined19,.Nlined_19").html(lined19);
$(".lined20,.Nlined_20").html(lined20);




					
			}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(0, Q1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton1111 = function(){
					  
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
					
 					ent_ans1 = trimzero(k1_text);
  					ent_ans2 = trimzero(k2_text);
				
			
				
				if((trimzero(ent_ans1) == (trimzero(finalAns)))||(trimzero(ent_ans2) == trimzero(finalAns1))){
				
					if(trimzero(ent_ans1) == (trimzero(finalAns))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(finalAns1)){
							//alert("in3") 
							score2=1;
						}else{
							score2=0;
						}
						
						
				}else if((trimzero(ent_ans1) == (trimzero(finalAns1)))||(trimzero(ent_ans2) == trimzero(finalAns))){
					
					
					if(trimzero(ent_ans1) == (trimzero(finalAns1))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(finalAns)){
							//alert("in3")
							score2=1;
						}else{
							score2=0;
						}
					
					
					
					
					}
						
						
						
					Finalscore=Number(Number(score1)+Number(score2))/2;
					
					if(score1==1){
							$(".tick1").css('visibility','visible');
							$(".cross1").css('visibility','hidden');
							
						}else{
							
							$(".tick1").css('visibility','hidden');
							$(".cross1").css('visibility','visible');
						}
						
						if(score2==1){
							$(".tick2").css('visibility','visible');
							$(".cross2").css('visibility','hidden');
							
						}else{
							
							$(".tick2").css('visibility','hidden');
							$(".cross2").css('visibility','visible');
						}
 					
					var final_score=(Number(score1)+Number(score2))/2;
  				
 					
					if(ent_ans1 == "" || ent_ans2 == "") {
						
							$(".blankMessage_New").show().css("display","inline-block");
							$(".cross1,.cross2,.tick1,.tick2").css('visibility','hidden');
						
					} else if (Finalscore==1){
 													$(".correct").show().delay(2500).hide(0);
													//$(".tick1,.tick2").css("visibility","visible");
													//$(".cross1,.cross2").css("visibility","hidden");
												 
					}else if (Finalscore>0 && Finalscore<1){
 													$(".Partial").show().delay(2500).hide(0);
													//$(".cross1,.tick2").css("visibility","visible");
													//$(".tick1,.cross2").css("visibility","hidden");
												 
					} else{
 									$(".incorrect").show().delay(2500).hide(0);
									//$(".cross1,.cross2").css("visibility","visible");
									//$(".tick1,.tick2").css("visibility","hidden");
											}
								
							 }
				
				
				//////////////////////////////////For FR///////////////////////////////////////////////
				//////////////////////////////////For NFR///////////////////////////////////////////////
				reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					
					/*if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
						$(".solution").show();
						//show solution button
					} else {
						$(".solution").hide();
						// hide solution button
						//$(".newSet").hide();
						
					}*/
					//////////Fot NFR //////////
					   /* SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1; */
						if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							///////quiz mode///////////////////
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							///////////////practice mode///////////////
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							//////////////home work///////////////////
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							//////////////////NFR/////////////////////////
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  ////////////////after submit solution mode////////
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1,.done").css("pointer-events","none")
								$(".input1,.input2").css("pointer-events","none")
								$(".input1,.input2").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done").click(function(){ 
                      		   	$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})		
                        });
						      	$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        ////////////////educo testing mode////////
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1,.done").css("pointer-events","auto");
								$(".input1,.input2").css("pointer-events","auto");
								//DoneClicked = 1;
								//$(".input1,.input2").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1,.done").css("pointer-events","none");
							$(".input1,.input2").css("pointer-events","none");
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				//////////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					//////////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					
					$("#BgImage").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					//////////////alert(FBOpt+" == FBOpt")
					$(".remark,.respond").show()
					if (FBOpt == 2) {
						
						if (evals == "true") {
								$(".respond").html("Correct")
									$(".respond").css('color','#339966');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 	else if (evals == "partial") {
								$(".respond").html("Partially Correct")
									$(".respond").css('color','#0000CC');
								//	document.getElementById("FB_TxtBox").innerHTML = "Correct";
														
					     }
						 
						 else {
							 	$(".respond").html("Incorrect")
								$(".respond").css('color','#FF0000');
									//document.getElementById("FB_TxtBox").innerHTML = "Incorrect";
							
						 }
					}
					if (FBOpt == 1) {
						$(".respond").html("Responded")
					$(".respond").css('color','#339966');
						//document.getElementById("FB_TxtBox").innerHTML = "Responded";
						
						
						
					}
				preloadans(ans);
				}
				
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						//////////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
					
						
						 $("#BgImage").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					//$(".done1").css('cursor', 'default').prop('disabled',true);
					//$("#inputText").prop("disabled",true);//or we can use document.getElementById("inputText").disabled = true;
					
					//$(".done1").css('cursor','pointer').prop('disabled',false);
					//$("#inputText").prop("disabled",false);
				
					// disable done button in review mode
					//reset.enabled = false;
					// wherever applicable
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				//ExternalInterface.addCallback("setPreviewMode",this,setPreviewMode);
				//PageMethods.setPreviewMode();
				//setPreviewMode();
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						//////////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#BgImage").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);
					} catch (ex) {
					}
				}
				
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					////////////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					////////////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						//////////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
					if(strfrmServer != undefined){
						////////////////alert("strfrmServer 2 == "+strfrmServer);
						
						
						var tx1 = strfrmServer.split('@serverString@');
						////////////////alert("tx1  == "+tx1);
						
						$(".input1").val(tx1[0])
						$(".input2").val(tx1[1])
					   //////////alert(document.getElementById("inputText").value)
						/*$(".input1").val()=String(tx1[0]);
						$(".input2").val()=String(tx1[1]);*/
						//////////alert(String(tx1[0])+"  String(tx1[0])")
   						temp_str = String(tx1[2]).split(",");
						
						score1=String(tx1[3])
						score2=String(tx1[4])
						
	
						
				val1 = temp_str[0];
				val2 = temp_str[1];
				window.finalAns = temp_str[2];
				window.finalAns1 = temp_str[3];
				
		if(val1<19){
				
				
				window.lined0 = 0;
				window.lined1 = 1;
				window.lined2 = 2;
				window.lined3 = 3;
				window.lined4 = 4;
				window.lined5 = 5;
				window.lined6 = 6;
				window.lined7 = 7;
				window.lined8 = 8;
				window.lined9 = 9;
				window.lined10 = 10;
				window.lined11 = 11;
				window.lined12 = 12;
				window.lined13 = 13;
				window.lined14 = 14;
				window.lined15 = 15;
				window.lined16 = 16;
				window.lined17 = 17;
				window.lined18 = 18;
				window.lined19 = 19;
				window.lined20 = 20;
				
		}else{
				
				window.SS1 =  val1.split("");
				window.SS1a =  Number(SS1[0])*10;
			 
				window.lined0 = SS1a;
				window.lined1 = SS1a+1;
				window.lined2 = SS1a+2;
				window.lined3 = SS1a+3;
				window.lined4 = SS1a+4;
				window.lined5 = SS1a+5;
				window.lined6 = SS1a+6;
				window.lined7 = SS1a+7;
				window.lined8 = SS1a+8;
				window.lined9 = SS1a+9;
				window.lined10 = SS1a+10;
				window.lined11 = SS1a+11;
				window.lined12 = SS1a+12;
				window.lined13 = SS1a+13;
				window.lined14 = SS1a+14;
				window.lined15 = SS1a+15;
				window.lined16 = SS1a+16;
				window.lined17 = SS1a+17;
				window.lined18 = SS1a+18;
				window.lined19 = SS1a+19;
				window.lined20 = SS1a+20;	
					
					
					
					
		}
			 
				
		
				$(".lined").css({ fill: "blue" });
				$(".lined").css({ stroke: "blue" });
				
				$(".val1").html(val1)
				$(".val2").html(val2)
				$(".finalAns").html(finalAns)
				$(".finalAns1").html(finalAns1)
				
				
				
$(".lined0,.Nlined_0").html(lined0);				
$(".lined1,.Nlined_1").html(lined1);
$(".lined2,.Nlined_2").html(lined2);
$(".lined3,.Nlined_3").html(lined3);
$(".lined4,.Nlined_4").html(lined4);
$(".lined5,.Nlined_5").html(lined5);
$(".lined6,.Nlined_6").html(lined6);
$(".lined7,.Nlined_7").html(lined7);
$(".lined8,.Nlined_8").html(lined8);
$(".lined9,.Nlined_9").html(lined9);
$(".lined10,.Nlined_10").html(lined10);
$(".lined11,.Nlined_11").html(lined11);
$(".lined12,.Nlined_12").html(lined12);
$(".lined13,.Nlined_13").html(lined13);
$(".lined14,.Nlined_14").html(lined14);
$(".lined15,.Nlined_15").html(lined15);
$(".lined16,.Nlined_16").html(lined16);
$(".lined17,.Nlined_17").html(lined17);
$(".lined18,.Nlined_18").html(lined18);
$(".lined19,.Nlined_19").html(lined19);
$(".lined20,.Nlined_20").html(lined20);
					
					
						
						//////////////NFR////////////////////
						final_score = String(tx1[5]);
						//////////////NFR//////////////////
						
 						
					  
						if (FBOpt != 1) {
							 if(score1==1){
							$(".tick1").css('visibility','visible');
							$(".cross1").css('visibility','hidden');
						
						}else{
						
							$(".tick1").css('visibility','hidden');
							$(".cross1").css('visibility','visible');
						}
						
						if(score2==1){
							$(".tick2").css('visibility','visible');
							$(".cross2").css('visibility','hidden');
							
						}else{
							
							$(".tick2").css('visibility','hidden');
							$(".cross2").css('visibility','visible');
						}
						
						}
							
	
 						Attempted_score = String(tx1[6]);
						finalScore = String(tx1[7])
						//ans1 = String(tx1[6]);
						//ans2 = String(tx1[7]);
						//ClickToAnsDiv = String(tx1[19]);
						
						
						
						
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1,.done").css("pointer-events","none")
								$(".input1,.input2").css("pointer-events","none")
								$(".input1,.input2").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done").click(function(){ 
								$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})	
								});
								$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})
						
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								
								}
		
							}
						}
						

					 
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							////////////alert("hi")
								
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1,.done").css("pointer-events","auto")
								$(".input1,.input2").css("pointer-events","auto")
								$(".input1,.input2").attr("disabled",false)
								
                                DoneClicked = 1;
								$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
								$(".done1").click(function(){
 									$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
								})
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								}*/
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				
				
				////////////////////////////////////////////////////
				doneButton = function() {
					////////////////alert("In Final Submit")
					////////////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					
					/// make changes here according to question 
					feed_flag = 0;
					
					//////// For NFR //////////////
					final_score = 0;
					finalScore = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					$(".cross1,.cross2,.tick1,.tick2").css('visibility','hidden');
				
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
				 
					ent_ans1 = trimzero(k1_text);
  					ent_ans2 = trimzero(k2_text);
					
					 
				
					 

			
			
			
			

//////////////////////////////////////////////////////////////////////////
						score1 = 0;
						score2 = 0;
	
	
					
				if((trimzero(ent_ans1) == (trimzero(finalAns)))||(trimzero(ent_ans2) == trimzero(finalAns1))){
				
					if(trimzero(ent_ans1) == (trimzero(finalAns))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(finalAns1)){
							//alert("in3") 
							score2=1;
						}else{
							score2=0;
						}
						
						
				}else if((trimzero(ent_ans1) == (trimzero(finalAns1)))||(trimzero(ent_ans2) == trimzero(finalAns))){
					
					
					if(trimzero(ent_ans1) == (trimzero(finalAns1))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(finalAns)){
							//alert("in3")
							score2=1;
						}else{
							score2=0;
						}
					
					
					
					
					}
						
			
					//	alert(score1+" "+score2)
					
						Finalscore=Number(Number(score1)+Number(score2))/2;
						finalScore=(Number(score1)+Number(score2))/2;	
						//alert(final_score)
						if (FBOpt != 1) {
						if(score1==1){
							$(".tick1").css('visibility','visible');
							$(".cross1").css('visibility','hidden');
							
						}else{
							
							$(".tick1").css('visibility','hidden');
							$(".cross1").css('visibility','visible');
						}
						
						if(score2==1){
							$(".tick2").css('visibility','visible');
							$(".cross2").css('visibility','hidden');
							
						}else{
							
							$(".tick2").css('visibility','hidden');
							$(".cross2").css('visibility','visible');
						}
						}
						



                   
						
						
						if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
	
	
	
				//////////alert("")
						if (ent_ans1 == "" && ent_ans2 == "") {
						
						$(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.tick1,.tick2").css('visibility','hidden');

						Responseflag="false";
						var FeedbackText = "";
						 $(".respond").html('')
					//	$(".blankMessage_New").show();
						////////// for NFR //////
						$(".done").click(function(){ 
 									   $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
									
												});
						/////////////for NFR/////////////
						
					}else {
						
						
					if (ent_ans1 == "" || ent_ans2 == "") {
						
					    $(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.tick1,.tick2").css('visibility','hidden');

						Responseflag="true";
						var FeedbackText = "";
						 $(".respond").html('')
					//	$(".blankMessage_New").show();
						////////// for NFR //////
						$(".done").click(function(){ 
 									   $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
									
												});
							
							
						}else{
					//	alert(finalScore)
						
						Responseflag="true";
						$(".remark,.respond").show().css("display","inline-block")
						
						if ((score1 == 1) && (score2 == 1)) {
							
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#339966');
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////
						}
						
						else if ((finalScore>0) && (finalScore<1)) {
			
							FeedbackText = "Partially Correct";
			                FeedbackFlag = "partial";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#0000CC');
							score = finalScore;
							
						}  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#FF0000');
						}
									
							/////////////////////////////////////////////
						///////////////////////////////
						
						if(feed_flag==1){
								$(".done").click(function(){
 									 $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
												   })
							
						}
						
						//////// For NFR //////////////
						if(feed_flag!=1){
					
				  if (SOpt == 2) {
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1,.done").css("pointer-events","none")
										$(".input1,.input2").css({"pointer-events":"none"})
										$(".input1,.input2").attr("disabled",true)
										DoneClicked = 1;
								$(".done").click(function(){ 
									$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})	
								});
									$(".done").css({"background-color":"#e6e6e6","border-color":"#e6e6e6","color":"#000000"})	
											
								$(".tab").focus();		
								
										
										
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {
									//////////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
					}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
							
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1,.done").css("pointer-events","auto")
								$(".input1,.input2").css("pointer-events","auto")
								$(".input1,.input2").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
								$(".done").click(function(){
 									$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
								});
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								 }*/
						}   
							}
						}
						
						/////// Closed NFR //////////////
					if (feed_flag != 1) {
							//////////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								 $(".respond").html(FeedbackText)
							} else {
								$(".respond").html("Responded")
							    $(".respond").css('color','#339966');
							}
					}
					}
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					//////////////For Checking Through 'Local Storage' ///ss_an1////////////////////////
					//////////////alert(ta1+" == ta1")
					
					
					
					/*localStorage.removeItem("key")
					////////////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+val1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					//////////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					////////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						
						
						
						$(".respond").html('')
						$(".input1").html('')
						$(".input2").html('')
						 
						
						
						
						
					}else{

						
					//	alert(temp_str)
					
					/* localStorage.removeItem("key")
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+temp_str+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore);
				
					localStorage.getItem("key"); */
					
					
					//////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					
					
					
				var answerString = $(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+temp_str+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore;
					
					//ExternalInterface.call("writeans",Qid,answerString,FeedbackFlag);
					//////////////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					//////////alert(final_score+"  final_score")
					//////alert(finalScore)
					score = finalScore;
				   //	if (FeedbackFlag == 'true'){
					//	score = finalScore;
					//}else if (FeedbackFlag == 'partial'){
					//	score = finalScore;
					//}else{
					//	score = finalScore;
					//}
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score);
					
					}
					
					//End
					
				};
						
						
			//preloadans(localStorage.getItem("key"));
				
				
				
				
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					$(".lined"+val1).css({ fill: "red" });
					   $(".lined"+val1).css({ stroke: "red" });
					  $(".curve").hide();
					  sol()
					// myVar = setTimeout(sol, 1000);
 					

 					$(".SolutionPartContent").show();

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
						
/*/////////////////////////////////////////////////////////////////////////*/
	if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
	
   $(".middle").css("margin-top",10+"px")
   
   
	}
$(".calc_btn,.back,.delete,.clear,.solution,.done1,.done").each(function (i) { $(this).attr('tabindex', -1); })
}); //////end of Main/////////


