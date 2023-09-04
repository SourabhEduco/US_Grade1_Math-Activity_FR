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
									inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											
											// prevent default tab action
											e.preventDefault();
								
											if (e.shiftKey) {
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
									});
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
					
 					
					$(".input1").val('');
				    $(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt,.prompt,.promptComma").hide();
					//$(".input1").focus();
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
									////////// for NFR //////
					
					
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
				
					var temp1;
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
					
	/*	for (var i = 0; i<array_Range; i++) {
			
		var val1 = randRange(2, 19)
		
		
		
		if(val1!=10 )
		Q1_Arr.push(val1+"@");
		}
		Q1_Arr = uniqueArray0(Q1_Arr);
		console.log(Q1_Arr+"  Q1_Arr")*/
		
	Q1_Arr = 	["17@","6@","5@","7@","18@","16@","3@","12@","8@","9@","14@","15@","4@","13@","19@","2@"]
		//unique array
		//alert(Q1_Arr)		
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
						
						
	
				temp1 = String(Q1_Arr[next_val]).split("@")
				 val1 = temp1[0];
				
				$(".button").hide();
			if(val1 < 11){
				$(".btn11").show();
				$(".val1").html("<span class='hidden'>0</span>"+val1);
				}else {
					$(".btn12").show();
					$(".val1").html(val1);
					}
			val2 = NumberToWord_FirstCapital(val1)
			//alert(val1+" "+val2)
				
				
				$(".val2").html(val2);
				
				finalAns = (val2);
				
}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(0, Q1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton1111 = function(){
					  
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					var k1_text = document.getElementById("inputText").value;
 					ent_ans1 = trimzero(k1_text);
					
					
					
					//alert(ent_ans1+""+finalAns)
					
					//ans_1 = _root.ta1;
					if(ent_ans1 == "") {
						
							$(".blankMessage_New").show().css("display","inline-block");
						
						} else if (trimzero(finalAns) == trimSpaces(ent_ans1)){
 													$(".correct").show().delay(2500).hide(0);	
													$(".blankMessage_New,.incorrect").hide();	
												 
								
								} else{
 									$(".incorrect").show().delay(2500).hide(0);
									$(".blankMessage_New,.correct").hide();
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
								DoneClicked = 1;
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
				////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					////////alert(Qid.length+"  == Qid.length")
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
					
					////////alert(FBOpt+" == FBOpt")
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
						////////alert("setQuesIndex:" + QuesIndex)
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
						////////alert(sQid+"  == sQid")
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
					//////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					//////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
					if(strfrmServer != undefined){
						//////////alert("strfrmServer 2 == "+strfrmServer);
						
						
						var tx1 = strfrmServer.split('@serverString@');
						
						//////////alert("tx1  == "+tx1);
				 
						//document.getElementById("inputText").value = String(tx1[0]);
 
						$(".input1").val(tx1[0])
					
					
				
					 temp1 = String(tx1[1]).split(",");
						
						///alert(temp1)
						//////////////NFR////////////////////
						final_score = String(tx1[2]);
						//////////////NFR//////////////////
						
				 val1 = temp1[0];
				
				$(".button").hide();
			if(val1 < 11){
				$(".btn11").show();
				$(".val1").html("<span class='hidden'>0</span>"+val1);
				}else {
					$(".btn12").show();
					$(".val1").html(val1);
					}
			val2 = NumberToWord_FirstCapital(val1)
			//alert(val1+" "+val2)
				
				
				$(".val2").html(val2);
				
				finalAns = val2;
			
	
 						Attempted_score = String(tx1[3]);
							
						
						
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
						   
						 
						   
						//alert("innnn")
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
			//alert($(".input1").val())
			
			
			
			
							}
							
							
					}
						
					 
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							//////alert("hi")
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1,.done").css("pointer-events","auto")
								$(".input1,.input2").css("pointer-events","auto")
								$(".input1,.input2").attr("disabled",false)
							/*	
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})*/
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
				doneButton = function() {
				
					//////////alert("In Final Submit")
					//////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					//document.getElementById("FB_TxtBox").innerHTML = "";
					/// make changes here according to question 
					var feed_flag = 0;
					
					//////// For NFR //////////////
					var final_score = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					
					
					
						$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
							var k1_text = document.getElementById("inputText").value;
 					ent_ans1 = trimzero(k1_text);

					 ent_ans1 = String(ent_ans1).toLowerCase()
					
					 finalAns = String(finalAns).toLowerCase()

					 
					
					//alert(ent_ans1+""+finalAns)
					
					//ans_1 = _root.ta1;
					if(ent_ans1 == "") {
						
						

						Responseflag="false";
						
						FeedbackText = "";
				
						 $(".respond").html('')

					//}else{
					
				
					 
					//}
					

						//alert("  in resonce flag false  ")
					
						$(".blankMessage_New").show().css("display","inline-block");
					  
						//alert()
						
						////////// for NFR //////
						$(".done").click(function(){ 
 									   $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
									
												});
						/////////////for NFR/////////////
				  
						  						
						
						
					}
					
					
					else {
					
						
						Responseflag="true";
						$(".remark,.respond").show().css("display","inline-block")
			if (trimzero(finalAns) == trimSpaces(ent_ans1)){
						 $(".Comma_prompt").hide()
						 
							FeedbackFlag = "true";
							FeedbackText = "Correct";
							
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#339966');
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////
						}/*else if (trimzero(comma(trimSpaces(ent_ans1))) == trimzero(bb1)){
						       //alert("incomp")
							  	$(".remark").hide(); 
							   $(".Comma_prompt").show().css("display","inline-block");
							
							
							 FeedbackFlag = "false";
							 FeedbackText = "";
							 feed_flag = 1;
					
				        }*/  else {
							 $(".Comma_prompt").hide()
							FeedbackFlag = "false";
							FeedbackText = "Incorrect";
							$(".remark").show().css("display","inline-block")
							$(".respond").css('color','#FF0000');
						}
						
						if(feed_flag==1) {
							
						$(".done").click(function(){
 									 $(".done").css({"background-color":"rgb(40, 167, 69)","border-color":"green","border-bottom-color":"rgb(40, 167, 69)","color":"white"})
												   })
				
							}	
							/////////////////////////////////////////////
						///////////////////////////////
						//////// For NFR //////////////
						if(feed_flag!=1){					
				if (SOpt == 2) {
							//alert()
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
									////alert('')
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
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								//alert()
							 //document.getElementById("FB_TxtBox").innerHTML = FeedbackText;
							 $(".respond").html(FeedbackText)
							} else {

								//document.getElementById("FB_TxtBox").innerHTML = "Responded";
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
					////////alert(ta1+" == ta1")
					
					
					
				/*	localStorage.removeItem("key")
					//////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					//////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 				
				
		//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						 $(".respond").html('')
						 $(".input1").html('')
						 $(".input2").html('')
					
					/*document.getElementById("inputText").innerHTML="";
					document.getElementById("FB_TxtBox").innerHTML="";
*/					
					
					}else{
						////alert(q1+" ")
					/*localStorage.removeItem("key")
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
				
					localStorage.getItem("key");
					*/
			
		//alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
	var answerString = $(".input1").val()+"@serverString@"+temp1+"@serverString@"+final_score+"@serverString@"+Attempted_score;
					
					
				
					
					
				
					////////alert("answerString == "+answerString);
				   //writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					var score = 0;
					if (FeedbackFlag == 'true')
						score = 1;
					 parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score); 
					
					}
					
					//End
					
				};
						
						
		//preloadans(localStorage.getItem("key"));	
				   
			/////////////////////	   NFR END  /////////////////////////////////////
				   
				   
				   
				   
				   
				   
				
		
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


