// JavaScript Document
$(document).ready(function(){
						 
						   

/*var lined12 = 0;
var lined13 = 1;
var lined14 = 2;
var lined15 = 3;
var lined16 = 4;
var lined17 = 5;
var lined18 = 6;
var lined19 = 7;
var lined20 = 8;
var lined21 = 9;
var lined22 = 10;
var lined23 = 11;*/





////////////for click control //////////////////////
var clickControl = 6;
/////////////////////////////////////////////////////
var clickedByUser = 1;


window.clickedArray = new Array();
greenFunction = function(class1,class2,class3){
	
if(clickedByUser<=clickControl)	{
clickedByUser++;
$(class1).show();
$(class3).hide();
$(class2).show();

var val = $(class1).html();
clickedArray.push(val)	

if(clickedByUser>clickControl)	{
$(".greenDot").css("cursor","default")
}else{
$(".greenDot").css("cursor","pointer")
	
	}
	}
	}


redFunction = function(class1,class2,class3){
$(class1).hide();
$(class3).hide();
$(class2).show();
clickedByUser--;
	 var val = $(class1).html();
	var indexIS = clickedArray.indexOf(val);
	clickedArray.splice(indexIS,1);
	$(".greenDot").css("cursor","pointer")

	}


////////////////////////new set function/////////////////////////////////////////////

Reset = function(){
	alert(clickedArray)
clickedArray = [];	
$(".greenDot").show();
$(".redDot,.Newlined").hide();
	clickedByUser = 1;
	$(".greenDot").css("cursor","pointer")

	}


////////////////////////end new set function/////////////////////////////////////////////
                                
////////////////////////ans checking///////////////////////////////////////////////////////
//var anscheck = new Array("1","-2");

forAnsChecking = function(arry){
	
	var finalAns = arry.length;
    var userAns = clickedArray.length;
	var ReturnTrueFalse = 2;
	if(userAns == finalAns){
		var chekforTrue = 0;
		var chekforFalse = 0;
		
		for(var i=0;i<userAns;i++){
			
		if(arry.includes(clickedArray[i]))	{
			chekforTrue++;
			}else{
			chekforFalse++;	
				
				}

			}
		
		if(chekforFalse>0){
			ReturnTrueFalse = 0;	
			}else{
				ReturnTrueFalse = 1;	
				}
	
		}else{
			
			if(finalAns==0){
					ReturnTrueFalse = 2;	
				}else{
					ReturnTrueFalse = 0;	
	
					
					}
			
			
			}
	
	return ReturnTrueFalse;
	
	}

	//alert(forAnsChecking(anscheck))


//////////////////////////////////end ans cheking /////////////////////////////////////////////////

});