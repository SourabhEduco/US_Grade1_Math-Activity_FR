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
							
 						    
							//$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							$(".input1").val('');
					        $(".input2").val('');
							$(".input3").val('');
 							$(".tick,.cross").css("visibility","hidden");
							
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
					$(".input1").focus();
					$(".input").val('');
					$(".tick,.cross").css("visibility","hidden");
					////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2,.input3").val('')
									$(".remark").hide()
									$(".done1,.done").css("pointer-events","auto")
									$(".input1,.input2,.input3").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2,.input3").attr("disabled",false)
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
					
					Q1_Arr[0] = {Q:"1",q1:"4",q2:"8",q3:"48"}					
					Q1_Arr[1] = {Q:"2",q1:"4",q2:"6",q3:"46"}					
					Q1_Arr[2] = {Q:"3",q1:"4",q2:"4",q3:"44"}										
					Q1_Arr[3] = {Q:"4",q1:"4",q2:"2",q3:"42"}
					Q1_Arr[4] = {Q:"5",q1:"3",q2:"8",q3:"38"}
					Q1_Arr[5] = {Q:"6",q1:"3",q2:"6",q3:"36"}
					Q1_Arr[6] = {Q:"7",q1:"3",q2:"4",q3:"34"}
					Q1_Arr[7] = {Q:"8",q1:"3",q2:"2",q3:"32"}
					Q1_Arr[8] = {Q:"9",q1:"2",q2:"8",q3:"28"}					
					Q1_Arr[9] = {Q:"10",q1:"2",q2:"6",q3:"26"}
					Q1_Arr[10] = {Q:"11",q1:"2",q2:"4",q3:"24"}
					Q1_Arr[11] = {Q:"12",q1:"2",q2:"2",q3:"22"}
					Q1_Arr[12] = {Q:"13",q1:"1",q2:"8",q3:"18"}
					Q1_Arr[13] = {Q:"14",q1:"1",q2:"6",q3:"16"}
					Q1_Arr[14] = {Q:"15",q1:"1",q2:"4",q3:"14"}
					
					
					
					//alert(Q1_Arr.length)
					
					/*for(i=1;i<16;i++)
		{
			randomArr.push(i)	
		}
					
					randomArr = shuffle((randomArr))
					
				changeimage=0;	*/
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
		next_val = 0;
	}
	
	 $(".shape").hide()
         
		 
		
		Q = Q1_Arr[next_val]['Q'] 
	
			$(".shape"+Q).show();				
		
		window.A =  Q1_Arr[next_val]['A']
		q1a =  Q1_Arr[next_val]['q1']
		q2 =  Q1_Arr[next_val]['q2']
		q3 =  Q1_Arr[next_val]['q3']
		//alert(q1a)
		$(".A").html(A)
		$(".q1").html(q1a)
		$(".q2").html(q2)
		$(".q3").html(q3)
		
		}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
			next_val = randRange(1, Q1_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			
				doneButton111 = function(){
					  
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
 					$(".Handcursor").hide();
					
					var k1_text1 = document.getElementById("inputText").value;
					var k1_text2 = document.getElementById("inputText1").value;
					var k1_text3 = document.getElementById("inputText2").value;
				 
					ent_ans1 = trimzero(k1_text1);
					ent_ans2 = trimzero(k1_text2);
					ent_ans3 = trimzero(k1_text3);
					
					
					    if(trimzero(ent_ans1) == (trimzero(Number(q1)))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(Number(q2))){
							//alert("in3")
							score2=1;
						}else{
							score2=0;
						}
						
						if(trimzero(ent_ans3) == trimzero(Number(q3))){
							//alert("in3")
							score3=1;
						}else{
							score3=0;
						}
						
					
						Finalscore=Number(Number(score1)+Number(score2)+Number(score3))/3;
						
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
						
						if(score3==1){
							$(".tick3").css('visibility','visible');
							$(".cross3").css('visibility','hidden');
							
						}else{
							
							$(".tick3").css('visibility','hidden');
							$(".cross3").css('visibility','visible');
						}
						
						



                   var final_score=(Number(score1)+Number(score2)+Number(score3))/3;
  					
 					
					if(ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == "") {
						
							$(".blankMessage_New").show().css("display","inline-block");
							$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3").css('visibility','hidden');
						
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
					    /*SOpt = 3; 
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
								$(".input1,.input2,.input3").css("pointer-events","none")
								$(".input1,.input2,.input3").attr("disabled",true)
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
								$(".input1,.input2,.input3").css("pointer-events","auto");
								DoneClicked = 1;
								//$(".input1,.input2").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							/*$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1,.done").css("pointer-events","none");
							$(".input1,.input2,.input3").css("pointer-events","none");*/
					
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
					   //////////alert(document.getElementById("inputText").value)
						/*$(".input1").val()=String(tx1[0]);
						$(".input2").val()=String(tx1[1]);*/
						//////////alert(String(tx1[0])+"  String(tx1[0])")
   						//temp_str = String(tx1[3]).split(",");
						
						score1=String(tx1[4])
						score2=String(tx1[5])
						score3=String(tx1[6])
		             
					       $(".shape").hide()
						
						Q = tx1[7]
					
							$(".shape"+Q).show();				
						
						window.A =   tx1[8]
						q1a =  tx1[9]
						q2 =  tx1[10]
						q3 =  tx1[11]
						//alert(A)
						$(".A").html(A)
						$(".q1").html(q1a)
						$(".q2").html(q2)
						$(".q3").html(q3)
								
					
						
						//////////////NFR////////////////////
						final_score = String(tx1[12]);
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
						
						if(score3==1){
							$(".tick3").css('visibility','visible');
							$(".cross3").css('visibility','hidden');
							
						}else{
							
							$(".tick3").css('visibility','hidden');
							$(".cross3").css('visibility','visible');
						}
						
						}
							
	
 						Attempted_score = String(tx1[12]);
						finalScore = String(tx1[13])

						//ans1 = String(tx1[6]);
						//ans2 = String(tx1[7]);
						//ClickToAnsDiv = String(tx1[19]);
						
						
						
						
					//////// For NFR //////////////
					
				
						if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1,.done").css("pointer-events","none")
								$(".input1,.input2,.input3").css("pointer-events","none")
								$(".input1,.input2,.input3").attr("disabled",true)
								
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
								$(".input1,.input2,.input3").css("pointer-events","auto")
								$(".input1,.input2,.input3").attr("disabled",false)
								
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
					
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt_New").hide();
					$(".Handcursor").hide();
					$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3").css('visibility','hidden');
				
					var k1_text1 = document.getElementById("inputText").value;
					var k1_text2 = document.getElementById("inputText1").value;
					var k1_text3 = document.getElementById("inputText2").value;
				 
					ent_ans1 = trimzero(k1_text1);
					ent_ans2 = trimzero(k1_text2);
					ent_ans3 = trimzero(k1_text3);
					
					 
				
					 

			
			
			
			

//////////////////////////////////////////////////////////////////////////
						score1 = 0;
						score2 = 0;
	                    score3 = 0;
						
						if(trimzero(ent_ans1) == (trimzero(Number(q1a)))){
							score1=1;
						}else{
							score1=0;
						}
						
						if(trimzero(ent_ans2) == trimzero(Number(q2))){
							//alert("in3")
							score2=1;
						}else{
							score2=0;
						}
						
						if(trimzero(ent_ans3) == trimzero(Number(q3))){
							//alert("in3")
							score3=1;
						}else{
							score3=0;
						}
					
						
					
						finalScore=Number(Number(score1)+Number(score2)+Number(score3))/3;
						
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
						
						if(score3==1){
							$(".tick3").css('visibility','visible');
							$(".cross3").css('visibility','hidden');
							
						}else{
							
							$(".tick3").css('visibility','hidden');
							$(".cross3").css('visibility','visible');
						}
					
						}
						



                   
						
						
						if ((finalScore<1) && (finalScore>0)) {
		                     FeedbackText = "";
		                     FeedbackFlag = "partial";
	                    }
	
	
		
				//////////alert("")
						if (ent_ans1 == "" && ent_ans2 == "" && ent_ans3 == "") {
						
						$(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3").css('visibility','hidden');

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
						
				
					if (ent_ans1 == "" || ent_ans2 == "" || ent_ans3 == "") {
						
					    $(".blankMessage_New").show().css("display","inline-block");
						$(".cross1,.cross2,.cross3,.tick1,.tick2,.tick3").css('visibility','hidden');

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
						
						if ((score1 == 1) && (score2 == 1) && (score3 == 1)) {
								
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
							
						}else { 
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
										$(".input1,.input2,.input3").css({"pointer-events":"none"})
										$(".input1,.input2,.input3").attr("disabled",true)
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
								$(".input1,.input2,.input3").css("pointer-events","auto")
								$(".input1,.input2,.input3").attr("disabled",false)
								
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
						 
						
						
						
						
					}else{

						
					 	//alert(q1a)
					
					/*localStorage.removeItem("key")
					
					localStorage.setItem("key",$(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+Q1_Arr+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+Q+"@serverString@"+A+"@serverString@"+q1a+"@serverString@"+q2+"@serverString@"+q3+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore);
				
					localStorage.getItem("key"); */
					
					
					//////////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					
					
					
					var answerString = $(".input1").val()+"@serverString@"+$(".input2").val()+"@serverString@"+$(".input3").val()+"@serverString@"+Q1_Arr+"@serverString@"+score1+"@serverString@"+score2+"@serverString@"+score3+"@serverString@"+Q+"@serverString@"+A+"@serverString@"+q1a+"@serverString@"+q2+"@serverString@"+q3+"@serverString@"+final_score+"@serverString@"+Attempted_score+"@serverString@"+finalScore;
					
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
					
 					

 					$(".SolutionPartContent").show().css("display","inline-block");

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
						
/*/////////////////////////////////////////////////////////////////////////*/
	if(String(navigator.userAgent).indexOf("Mobile") != -1 ){
	 
	
   $(".middle").css("margin-top",10+"px")
   
   
	}
$(".calc_btn,.back,.delete,.clear,.solution,.done1,.done").each(function (i) { $(this).attr('tabindex', -1); })

}); //////end of Main/////////


