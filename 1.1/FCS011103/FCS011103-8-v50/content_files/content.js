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
							$(".tick,.cross").hide();
 						    
							//$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							
							
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
					
 					
					$(".input").val('');
					$(".tick,.cross").hide();
				    $(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt,.prompt,.promptComma").hide();
					////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3,.input4").val('')
									$(".remark").hide()
									$(".done1,.done").css("pointer-events","auto")
									$(".input1,.input2,.input3,.input4").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3,.input4").attr("disabled",false)
									//document.getElementById("FB_TxtBox").innerHTML =""
									////////// for NFR End//////
									
 																	
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner, .solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									
								$(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
				
	
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                          ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".input1").focus();
									////////// for NFR /////
									////////// for NFR /////
									$(".cross,.tick").hide();
					
					
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
					
			/* for (var i = 0; i<array_Range; i++) {
					 	
				
					 	
				var num1 = randRange(11, 95);
					
					
					var num2 = num1-1;
					var num3 = num2-1;
					var num4 = num3-1;
					var num5 = num4-1;
				
				Q1_Arr.push(num1+"@"+num2+"@"+num3+"@"+num4+"@"+num5);
			
				 }
				 Q1_Arr = uniqueArray0((Q1_Arr))*/
				//alert(Q1_Arr.length)
				
			Q1_Arr = ["80@79@78@77@76","86@85@84@83@82","60@59@58@57@56","48@47@46@45@44","15@14@13@12@11","24@23@22@21@20","65@64@63@62@61","90@89@88@87@86","71@70@69@68@67","29@28@27@26@25","17@16@15@14@13","45@44@43@42@41","68@67@66@65@64","92@91@90@89@88","39@38@37@36@35","52@51@50@49@48","12@11@10@9@8","51@50@49@48@47","75@74@73@72@71","64@63@62@61@60","67@66@65@64@63","44@43@42@41@40","66@65@64@63@62","43@42@41@40@39","19@18@17@16@15","91@90@89@88@87","85@84@83@82@81","20@19@18@17@16","83@82@81@80@79","42@41@40@39@38","88@87@86@85@84","87@86@85@84@83","73@72@71@70@69","28@27@26@25@24","40@39@38@37@36","13@12@11@10@9","79@78@77@76@75","22@21@20@19@18","62@61@60@59@58","95@94@93@92@91","35@34@33@32@31","31@30@29@28@27","55@54@53@52@51","78@77@76@75@74","82@81@80@79@78","70@69@68@67@66","93@92@91@90@89","74@73@72@71@70","58@57@56@55@54","37@36@35@34@33"]
				
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
						
						if (next_val>=Q1_Arr.length-1) {
							next_val = 0;
						}
	temp_str = String(Q1_Arr[next_val]).split("@")
				
	
			var val1 = temp_str[0];
			window.val2 = temp_str[1];
			window.val3 = temp_str[2];
			window.val4 = temp_str[3];
			window.val5 = temp_str[4];
		
			
			$(".val1").html(val1)
			$(".val2").html(val2)
			$(".val3").html(val3)
			$(".val4").html(val4)
			$(".val5").html(val5)
					
					
					
					
			}
			
			
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(0, Q1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton111 = function(){
					  
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					var k4_text = document.getElementById("inputText3").value;
					
 						
 					ent_ans1 = trimzero(k1_text);
					ent_ans2 = trimzero(k2_text);
					ent_ans3 = trimzero(k3_text);
					ent_ans4 = trimzero(k4_text);
					
					
					window.bb1 = (val2);
					window.bb2 = (val3);
					window.bb3 = (val4);
					window.bb4 = (val5);
					//ans_1 = _root.ta1;
				
				var score1 = 0;
				var score2 = 0;
				var score3 = 0;
				var score4 = 0;
				
				
		     	if(trimzero(ent_ans1) == (trimzero(val2)) ){score1=1;}else{score1=0;}
				if(trimzero(ent_ans2) == (trimzero(val3)) ){score2=1;}else{score2=0;}
				if(trimzero(ent_ans3) == (trimzero(val4)) ){score3=1;}else{score3=0;}
				if(trimzero(ent_ans4) == (trimzero(val5)) ){score4=1;}else{score4=0;}
				
						
					finalScore=Number(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;
					final_score=(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;
					
					if (FBOpt != 1) {
					
					if(score1==1){
							$(".tick1").show();
							$(".cross1").hide();
							
						}else{
							
							$(".tick1").hide();
							$(".cross1").show();
						}
						
					if(score2==1){
							$(".tick2").show();
							$(".cross2").hide();
							
						}else{
							
							$(".tick2").hide();
							$(".cross2").show();
						}
						
				if(score3==1){
							$(".tick3").show();
							$(".cross3").hide();
							
						}else{
							
							$(".tick3").hide();
							$(".cross3").show();
						}
						
						
				if(score4==1){
							$(".tick4").show();
							$(".cross4").hide();
							
						}else{
							
							$(".tick4").hide();
							$(".cross4").show();
						}
						
						
					}
					
 					
					if(ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == ""|| ent_ans4 == "") {
						
							$(".blankMessage_New").show().css("display","inline-block");
							$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3,.tick4,.cross4").hide();
						
					}else if(score1==1 && score2==2 && score3==3 && score4==4){
						
												$(".remark,.partialcorrect1").show().fadeOut(2000);
												$(".tick,.cross").hide();

						}else if (Finalscore==1){
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
					    /*SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;*/
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
								$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6").attr("disabled",true)
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
								$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","auto");
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
							$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","none");
					
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
						$(".input3").val(tx1[2])
						$(".input4").val(tx1[3])
				
						//////alert(document.getElementById("inputText").value)
						/*$(".input1").val()=String(tx1[0]);
						$(".input2").val()=String(tx1[1]);*/
						//////////alert(String(tx1[0])+"  String(tx1[0])")
   						temp_str = String(tx1[4]).split(",");
						
						score1=String(tx1[5])
						score2=String(tx1[6])
						score3=String(tx1[7])
						score4=String(tx1[8])


		var val1 = temp_str[0];
			window.val2 = temp_str[1];
			window.val3 = temp_str[2];
			window.val4 = temp_str[3];
			window.val5 = temp_str[4];
		
			
			$(".val1").html(val1)
			$(".val2").html(val2)
			$(".val3").html(val3)
			$(".val4").html(val4)
			$(".val5").html(val5)
					
					
	





					
						
						//////////////NFR////////////////////
						final_score = String(tx1[9]);
						//////////////NFR//////////////////
						
 						
						if (FBOpt != 1) {
					
					if(score1==1){
							$(".tick1").show();
							$(".cross1").hide();
							
						}else{
							
							$(".tick1").hide();
							$(".cross1").show();
						}
						
					if(score2==1){
							$(".tick2").show();
							$(".cross2").hide();
							
						}else{
							
							$(".tick2").hide();
							$(".cross2").show();
						}
						
				if(score3==1){
							$(".tick3").show();
							$(".cross3").hide();
							
						}else{
							
							$(".tick3").hide();
							$(".cross3").show();
						}
						
				if(score4==1){
							$(".tick4").show();
							$(".cross4").hide();
							
						}else{
							
							$(".tick4").hide();
							$(".cross4").show();
						}
						
						
					}
							
	
 						Attempted_score = String(tx1[10]);
						finalScore = String(tx1[11])
						//ans1 = String(tx1[6]);
						//ans2 = String(tx1[7]);
						//ClickToAnsDiv = String(tx1[19]);
						
						
						
						
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1,.done").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","none")
								$(".input1,.input2,.input3,.input4,.input5,.input6").attr("disabled",true)
								
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
								$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6").attr("disabled",false)
								
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
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.partialcorrect").hide();
					$(".tick,.cross").hide();
 					$(".Handcursor").hide();
					var k1_text = document.getElementById("inputText").value;
					var k2_text = document.getElementById("inputText1").value;
					var k3_text = document.getElementById("inputText2").value;
					var k4_text = document.getElementById("inputText3").value;
					
				
					
					
 					ent_ans1 = trimzero(k1_text);
					ent_ans2 = trimzero(k2_text);
					ent_ans3 = trimzero(k3_text);
					ent_ans4 = trimzero(k4_text);
					
					
					window.bb1 = (val2);
					window.bb2 = (val3);
					window.bb3 = (val4);
					window.bb4 = (val5);
					//ans_1 = _root.ta1;
				
				var score1 = 0;
				var score2 = 0;
				var score3 = 0;
				var score4 = 0;
				
				
		     	if(trimzero(ent_ans1) == (trimzero(val2)) ){score1=1;}else{score1=0;}
				if(trimzero(ent_ans2) == (trimzero(val3)) ){score2=1;}else{score2=0;}
				if(trimzero(ent_ans3) == (trimzero(val4)) ){score3=1;}else{score3=0;}
				if(trimzero(ent_ans4) == (trimzero(val5)) ){score4=1;}else{score4=0;}
				
						
					finalScore=Number(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;
					final_score=(Number(score1)+Number(score2)+Number(score3)+Number(score4))/4;
					
					
					if (FBOpt != 1) {
					
					if(score1==1){
							$(".tick1").show();
							$(".cross1").hide();
							
						}else{
							
							$(".tick1").hide();
							$(".cross1").show();
						}
						
					if(score2==1){
							$(".tick2").show();
							$(".cross2").hide();
							
						}else{
							
							$(".tick2").hide();
							$(".cross2").show();
						}
						
				if(score3==1){
							$(".tick3").show();
							$(".cross3").hide();
							
						}else{
							
							$(".tick3").hide();
							$(".cross3").show();
						}
						
				if(score4==1){
							$(".tick4").show();
							$(".cross4").hide();
							
						}else{
							
							$(".tick4").hide();
							$(".cross4").show();
						}
								
						
						
					}

                   
							
					if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
						
					
	
	
	
				//////////alert("")
						if (ent_ans1 == "" && ent_ans2 == "" && ent_ans3 == ""&& ent_ans4 == "") {
						
						$(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3,.tick4,.cross4").hide();

						Responseflag="false";
						var FeedbackText = "";
						 $(".respond").html('')
					//	$(".blankMessage_New").show();
						////////// for NFR //////
						$(".done").click(function(){ 
 									   $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
									
												});
						/////////////for NFR/////////////
						
					}
					
					
					
					
					
					else {
						
						
					if (ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == ""|| ent_ans4 == "") {
						
					    $(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3,.tick4,.cross4").hide();

						Responseflag="true";
						var FeedbackText = "";
						 $(".respond").html('')
					//	$(".blankMessage_New").show();
						////////// for NFR //////
						$(".done").click(function(){ 
 									   $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
									
												});
							
							
						}else{
						
						
						Responseflag="true";
						$(".remark,.respond").show().css("display","inline-block")
						
						if (finalScore == 1) {
							
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
										$(".input1,.input2,.input3,.input4,.input5,.input6").css({"pointer-events":"none"})
										$(".input1,.input2,.input3,.input4,.input5,.input6").attr("disabled",true)
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
								$(".input1,.input2,.input3,.input4,.input5,.input6").css("pointer-events","auto")
								$(".input1,.input2,.input3,.input4,.input5,.input6").attr("disabled",false)
								
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
						$(".input3").html('')
						$(".input4").html('')
						
						
						
					}else{

						
						
					/*
					localStorage.removeItem("key")
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+$(".input4").val()+"@serverString@"+temp_str+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore);
				
					localStorage.getItem("key");
					*/
					
					//////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					
					
					
			var answerString = $(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+$(".input4").val()+"@serverString@"+temp_str+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+score4+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore;
					
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


          