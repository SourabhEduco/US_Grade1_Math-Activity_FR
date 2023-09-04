// Functions
$(document).ready(function(){

	uniqueArray0 = function(array) {
	
  var result = Array.from(new Set(array));
  return result    
}

 			randRange = function(min,max)  {
    						var randomNum = Math.floor(Math.random()*(max-min))+min;
	                		return randomNum                        
			};
///////////////////////////////////////////////////////////////////////////////////				
					Remove_Duplicate_Entry = function(str)  {
	arr = str.split(",");
	var Final_Arr = new Array();
	for (var i = 0; i<arr.length; i++) {
		for (var j = i+1; j<arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j,1);
			}
		}
		Final_Arr.push(arr[i]);
	}
	return Final_Arr;
};
	
			Answer_Function1 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"tenthousandth"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
//////////////////////////////////////////////////////////////////////////////////
pround = function(n, m)  {
	if (m == 0) {
		var pr11 = Math.round(n);
		return pr11;
	} else {
		var stp1 = String(n);
		var st1 = "";
		var len = stp1.length;
		var dec = stp1.indexOf(".");
		if (dec == -1) {
			st1 = stp1.concat(".0000000");
			dec = st1.indexOf(".");
		} else {
			st1 = st1.concat(stp1);
		}
		var rd = 0;
		var prd = 0;
		var st2 = "";
		//if (m<dec) {
		if ((m<dec) && (m != 0)) {
			if (m>0) {
				var rd = dec-m;
			} else {
				var rd = dec-(m-1);
			}
			if ((len-dec-1)<=-m) {
				st2 = st2.concat(st1);
			} else {
				var p1 = Number(st1.charAt(rd));
				var p11 = Number(st1.charAt(rd-1));
				if (p1>=5) {
					var p2 = p11+1;
				} else {
					var p2 = p11;
				}
				if (p2<10) {
					for (i1=0; i1<rd-1; i1++) {
						st2 = st2.concat(st1.charAt(i1));
					}
					st2 = st2.concat(String(p2));
					for (i2=rd; i2<dec; i2++) {
						st2 = st2.concat("0");
					}
				} else {
					//if((st1.charAt(rd-2)!='.')
					for (ia1=rd-1; ia1>0; ia1--) {
						if ((st1.charAt(ia1) == 9) || (st1.charAt(ia1) == '.')) {
							prd = ia1;
						} else {
							break;
						}
					}
					if (st1.charAt(prd-1) != '.') {
						for (ia2=0; ia2<prd-1; ia2++) {
							st2 = st2.concat(st1.charAt(ia2));
						}
						pp1 = Number(st1.charAt(prd-1))+1;
						st2 = st2.concat(String(pp1));
						for (ip3=prd; ip3<dec; ip3++) {
							st2 = st2.concat("0");
						}
					}
				}
			}
		} else {
			if ((m-dec) == 0) {
				if (Number(st1.charAt(0))>=5) {
					st2 = st2.concat("1");
				}
				for (ip1=0; ip1<m; ip1++) {
					st2 = st2.concat("0");
				}
			} else {
				for (ip2=0; ip2<m; ip2++) {
					st2 = st2.concat("0");
				}
			}
		}
		
		return (Number(st2));
	}
};
			Answer_Function2 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"ten-thousandths"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
//////////////////////////////////////////////////////////////////////////////////

			Answer_Function3 = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousand", a1:"hundred", a2:"ten", a3:"one", a5:"tenth", a6:"hundredth", a7:"thousandth", a8:"ten-thousandth"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}
			
						   
///////////////////////////////////////////////////////////////////////////////////	

			trimspaces_new = function(str) {
			var nI;
			for (nI=0; nI<str.length; nI++) {
				if (str.charAt(nI) == ' ') {
					str = str.substring(0, nI)+str.substring(nI+1, str.length);
					nI--;
				}
			}
			return (str);
		}			   
						   
						   
///////////////////////////////////////////////////////////////////////////////////							   
		
			trimWords = function(str) {
			var nI;
			for (nI=0; nI<str.length; nI++) {
				if (str.charAt(nI) == 'n' || str.charAt(nI) == 'N') {
					str = trimspaces_new(str.substring(0, nI+1))+" "+trimspaces_new(str.substring(nI+1, str.length));
					break;
				}
			}
			return (str);
		}
			
///////////////////////////////////////////////////////////////////////////////////							   
						   
		Postion_Function = function(str)
				{
					var Final_Str = ""
					var obj = new Object()
						obj = {a5:"1", a6:"2", a7:"3", a8:"4"}
						for (var i in obj) {
							if(str == (String("obj."+i)).charAt(5))
							{
								Final_Str = obj[i]
								break;
							}
						}
					return Final_Str
				}				   
						   
///////////////////////////////////////////////////////////////////////////////////							   
						   
			Answer_Function = function(str)
			{
				var Final_Str = ""
				var obj = new Object()
					obj = {a0:"thousands", a1:"hundreds", a2:"tens", a3:"ones", a5:"tenths", a6:"hundredths", a7:"thousandths", a8:"ten-thousandths"}
					for (var i in obj) {
						if(str == (String("obj."+i)).charAt(5))
						{
							Final_Str = obj[i]
							break;
						}
					}
				return Final_Str
			}						   
						   
						   
///////////////////////////////////////////////////////////////////////////////////							   
			chkPrime = function(chkprime_n1) {
				flag = 1;
				for (p_i=2; p_i<chkprime_n1; p_i++) {
					if (chkprime_n1%p_i == 0) {
						flag = 0;
						break;
					}
				}
				if (flag == 1 || chkprime_n1 == 2) {
					return true;
				} else {
					return false;
				}
			};			   
						   
///////////////////////////////////////////////////////////////////////////////////						   
	
	pround = function(n, m)  {
	if (m == 0) {
		var pr11 = Math.round(n);
		return pr11;
	} else {
		var stp1 = String(n);
		var st1 = "";
		var len = stp1.length;
		var dec = stp1.indexOf(".");
		if (dec == -1) {
			st1 = stp1.concat(".0000000");
			dec = st1.indexOf(".");
		} else {
			st1 = st1.concat(stp1);
		}
		var rd = 0;
		var prd = 0;
		var st2 = "";
		//if (m<dec) {
		if ((m<dec) && (m != 0)) {
			if (m>0) {
				var rd = dec-m;
			} else {
				var rd = dec-(m-1);
			}
			if ((len-dec-1)<=-m) {
				st2 = st2.concat(st1);
			} else {
				var p1 = Number(st1.charAt(rd));
				var p11 = Number(st1.charAt(rd-1));
				if (p1>=5) {
					var p2 = p11+1;
				} else {
					var p2 = p11;
				}
				if (p2<10) {
					for (i1=0; i1<rd-1; i1++) {
						st2 = st2.concat(st1.charAt(i1));
					}
					st2 = st2.concat(String(p2));
					for (i2=rd; i2<dec; i2++) {
						st2 = st2.concat("0");
					}
				} else {
					//if((st1.charAt(rd-2)!='.')
					for (ia1=rd-1; ia1>0; ia1--) {
						if ((st1.charAt(ia1) == 9) || (st1.charAt(ia1) == '.')) {
							prd = ia1;
						} else {
							break;
						}
					}
					if (st1.charAt(prd-1) != '.') {
						for (ia2=0; ia2<prd-1; ia2++) {
							st2 = st2.concat(st1.charAt(ia2));
						}
						pp1 = Number(st1.charAt(prd-1))+1;
						st2 = st2.concat(String(pp1));
						for (ip3=prd; ip3<dec; ip3++) {
							st2 = st2.concat("0");
						}
					}
				}
			}
		} else {
			if ((m-dec) == 0) {
				if (Number(st1.charAt(0))>=5) {
					st2 = st2.concat("1");
				}
				for (ip1=0; ip1<m; ip1++) {
					st2 = st2.concat("0");
				}
			} else {
				for (ip2=0; ip2<m; ip2++) {
					st2 = st2.concat("0");
				}
			}
		}
		
		return (Number(st2));
	}
};
//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////						   
						   
getLCM = function() {
	var n1 = 1;
	var aa_getLCM = new Array();
	for (i_getLCM=0; i_getLCM<arguments.length; i_getLCM++) {
		aa_getLCM.push(arguments[i_getLCM]);
}
	//aa_getLCM.sort(Array.NUMERIC);
	aa_getLCM.sort(function(a,b){
			return a-b;
					});
	
	for (t=0; t<aa_getLCM.length; t++) {
		n1 = n1*aa_getLCM[t];
	}
	
	var a2 = aa_getLCM[(aa_getLCM.length)-1];
	for (i=a2; i<=n1; i++) {
		count = 0;
		for (j=0; j<aa_getLCM.length; j++) {
			if (i%aa_getLCM[j] == 0) {
				count++;
			}
		}
		if (count == aa_getLCM.length) {
			return i;
		}
	}
	
};			   
						   

						   
///////////////////////////////////////////////////////////////////						   
	  
	   Checking_prime_divisiblty = function(N1) {
					divisble_num = [13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 6];
					num1a = N1;
					flag_prime = 1;
					for (i=0; i<divisble_num.length; i++) {
						if (num1a%Number(String(divisble_num[i])) == 0) {
							flag_prime = 0;
							break;
						}
					}
					if (flag_prime == 1) {
						return true;
					} else {
						return false;
					}
				};
						   
///////////////////////////////////////////////////////////////////

getGCF1x = function(a, b) {
	var hcf = 1;
	var small;
	i = 2;
	small = a<b ? a : b;
	for (i; i<=small; ) {
		if ((a%i == 0) && (b%i == 0)) {
			hcf *= i;
			this.small /= i;
			a = a/i;
			b = b/i;
			i = 2;
		} else {
			i++;
			continue;
		}
	}//alert("hcf is:"+hcf);
	return hcf;
	
};

///////////////////////////////////////////////////////////////
////////////////////////////END////////////////////////////////						   
						   
						   
						   
						   
////////////////////////////////////////To get first Prime Factor/////////////////////

fpmFactor = function(fchk_n1) {
	fchk_abc = fchk_n1;
	fchk_a1 = new Array();
	for (i=2; i<=fchk_abc; i++) {
		if (fchk_abc%i == 0) {
			fchk_abc = fchk_abc/i;
			fchk_a1.push(i);
			i--;
		}
	}
	return fchk_a1;
};

/////////////////////////////////////////////////////////END/////////////////////////////////////////////////////////////////////////////
////////////////////////////////			

						   
						getGCF = function() {
						var aa_getGCF = new Array();
						for (i_getGCF=0; i_getGCF<arguments.length; i_getGCF++) {
							aa_getGCF.push(arguments[i_getGCF]);
						}
						//aa_getGCF.sort(Array.NUMERIC);
						aa_getGCF.sort(function(a,b){
							return a-b;
							});
						max_getGCF = aa_getGCF[aa_getGCF.length-1];
						min_getGCF = aa_getGCF[0];
						for (kk=min_getGCF; kk>=1; kk--) {
							count_getGCF = 0;
							for (kj=aa_getGCF.length-1; kj>=0; kj--) {
								if (aa_getGCF[kj]%kk == 0) {
									count_getGCF++;
								}
							}
							if (count_getGCF == aa_getGCF.length) {
								return kk;
								break;
							}
						}
					};
					
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						  round_place = function(Mnum,Pnum) {
							var numb1 = Mnum;
							var numb2 = Pnum;
							final_num = "";
							Fnum = Number(String(numb1).length)-numb2;
							
							inter_num1 = String(numb1).substr(0, (Fnum-1));
							inter_num = String(numb1).substr(Fnum-1, 1);
						
							if (Number(inter_num)>=5) {
								final_num = Number(inter_num1)+1;
							} else {
								final_num = Number(inter_num1);
							}
							inter_num2 = String(numb1).substr(Fnum-1, String(numb1).length-1);
						
							for (var i = 0; i<String(inter_num2).length; i++) {
								final_num += "0";
							}
							return final_num;
						};
						
						
						
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	


						space_between_num = function(num) {
							var final_num = String(num);
							Fnum = Number(final_num.length);
							final_num1 = "";
							
							for (var i = 0; i<Fnum; i++) {
								//final_num = final_num.charAt(i)
								final_num1 += final_num.charAt(i)+" ";
							}
							return final_num1;
						};
						
						   
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


trimzero = function(theString) {
	theString = String(theString);
	for (trim_i=0; trim_i<theString.length; trim_i++) {
		if (theString.charAt(trim_i) == " ") {
			theString = theString.substring(0, trim_i)+theString.substring(trim_i+1, theString.length);
			trim_i--;
		}
	}
	if (theString != "") {
		while (theString.charAt(0) == "0" || theString.charAt(0) == " ") {
			theString = theString.substring(1, theString.length);
		}
		while (theString.charAt(theString.length-1) == " ") {
			theString = theString.substring(0, theString.length-1);
		}
		trim_id = theString.indexOf(".");
		if (trim_id != -1) {
			for (trim_i=theString.length-1; trim_i>trim_id; trim_i--) {
				if (theString.charAt(trim_i) == "0" || theString.charAt(trim_i) == " ") {
					theString = theString.substring(0, trim_i);
				} else {
					break;
				}
			}
			if (trim_id == theString.length-1) {
				theString = theString.substring(0, trim_id);
			}
		}
		if (theString == "") {
			theString = "0";
		}
	}
	return theString;
};



///////////////////FUNCTION trimzero main////////////////////////////
///////////////////FUNCTION trimzero NEW  Start////////////////////////////
//alert("trimzero(096262) == "+trimzero("0       00000000000000000000.9626200000"));  
						   
						   
						   
						//////////Digits in the Numbers are different (Not Equal)//////////////////////  
						   NonRepeat = function(chk_n1) {
							chk_value = String(chk_n1);
							count1 = 0;
							for (ii=0; ii<String(chk_value).length; ii++) {
								for (jj=0; jj<String(chk_value).length; jj++) {
									if (String(chk_value).charAt(ii) == String(chk_value).charAt(jj)) {
										count1++;
									}
								}
							}
							////alert(count1+"== "+chk_value.length);
							if (count1 == chk_value.length) {
								return chk_n1;
							} else {
								return null;
								count1 = 0;
							}
						};
/////////////////////Remove duplicate entry/////////////////////////
	Remove_Duplicate_Entry = function(str)  {
	arr = str.split(",");
	var Final_Arr = new Array();
	for (var i = 0; i<arr.length; i++) {
		for (var j = i+1; j<arr.length; j++) {
			if (arr[i] == arr[j]) {
				arr.splice(j,1);
			}
		}
		Final_Arr.push(arr[i]);
	}
	return Final_Arr;
};
////////////////////////////////////////Find Comma/////////////////////////////
	findcoma = function(theString)  {
	coma_arr = [];
	//for (space_i=0; space_i<=5; space_i++) {
	for (space_m=0; space_m<=theString.length; space_m++) {
		if (theString.charAt(space_m) == ",") {
			coma_arr.push(space_m);
		}
	}
	//}
	return coma_arr;
};

/////////////////////////////////////////////////////Remove spaces////////////////////////////////////
trimSpaces = function(spc_theString) {
	spc_theString = String(spc_theString);
	for (space_m=0; space_m<=spc_theString.length; space_m++) {
		if (spc_theString.substring(space_m, space_m+1) == " ") {
			spc_theString = spc_theString.substring(0, space_m)+spc_theString.substring(space_m+1, spc_theString.length);
			space_m--;
		}
	}
	return spc_theString;
};

/////////////////////////////////////////////////////Spellchecker/////////////////////////////////////////////////////////////////////////////////////////////////////
Spell_chk_condition = function(sp_txt) {
	sp_txt2 = sp_txt.value;
	var final_status = true;
	var chk_arr = [];
	chk_arr = ["thousands", "hundreds", "tens", "ones", "tenths", "hundredths", "thousandths", "ten thousandths", "thousands", "hundreds", "ten", "one", "tenth", "hundredth", "thousandth", "ten thousandth", "ten-thousandth", "ten-thousandths"];
	for (i=0; i<chk_arr.length; i++) {
		
		if (sp_txt2 == chk_arr[i]) {
			final_status = false;
			break;
		}
	}
	return final_status;
};



spl_chk = function(spl_txt1, spl_txt) {
	spl_txt2 = spl_txt.value;
	var spl_a1 = new Array();
	var spl_a2= new Array();
	for (spl_i=0; spl_i<spl_txt1.length; spl_i++) {
		spl_a1.push(spl_txt1.charAt(spl_i));
	}
	for (j=0; j<spl_txt2.length; j++) {
		spl_a2.push(spl_txt2.charAt(j));
	}
	spl_len1 = spl_txt1.length;
	spl_len2 = spl_txt2.length;
	spl_count = 0;
	for (spl_i=0; spl_i<spl_len1; spl_i++) {
		flag = 0;
		for (spl_j=0; spl_j<spl_len2; spl_j++) {
			if (spl_a1[spl_i] == spl_a2[spl_j]) {
				spl_count++;
				spl_a2.splice(spl_j,1);
				break;
			}
		}
	}
	
	if ((Number(spl_count) < Number(spl_len1)) && (Number(spl_count) > Number(spl_len1-3)) && Spell_chk_condition(spl_txt) && (Number(spl_count)>2)) {
		$(".incorrect").doTimeout(".incorrect" )
		$(".SpelPromt").doTimeout(".SpelPromt") 
		$(".SpelPromt").doTimeout(".SpelPromt" ,200, function(){
								  $(".SpelPromt").show();
								  return false;
								  //alert("SPEL");
						});
		//Selection.setFocus(spl_txt);
	} else {
					$(".incorrect").show();
					$(".input1,.input2").blur()///used for remove focus from input texts.....
					document.getElementById("subBtn").disabled = true;
					setTimeout(function(){$(".incorrect").hide();document.getElementById("subBtn").disabled = false;$(".input1").focus();}, 2000);
	}
};
/////////////////// FUNCTION SPL_CHK END  ////////////////////////////////////////////
/////////////////// FUNCTION MAKEANSFORMAT START  ////////////////////////////////////////////
makeansformat = function(make_ans_txt) {
	
	make_ans_text = make_ans_txt.value;
	
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.substring(sc_a, sc_a+1) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a+1)+" "+make_ans_text.substring(sc_a+1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	/***********************************************/
	for (sc_l=0; sc_l<=5; sc_l++) {
		for (sc_m=0; sc_m<=make_ans_text.length; sc_m++) {
			if (make_ans_text.substring(sc_m, sc_m+2) == "  ") {
				make_ans_text = make_ans_text.substring(0, sc_m)+make_ans_text.substring(sc_m+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_n=0; sc_n<=5; sc_n++) {
		//THIS IS FOR REMOVING SPACE IN THE BEGINING
		if (make_ans_text.charAt(0) == " ") {
			make_ans_text = make_ans_text.substring(1, make_ans_text.length);
			document.getElementById("inputText").value = make_ans_text;
		}
		//THIS IS FOR REMOVING SPACE IN THE LAST                                    
		if (make_ans_text.charAt(make_ans_text.length-1) == " ") {
			make_ans_text = make_ans_text.substring(0, make_ans_text.length-1);
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	//for removing space in the begining and end of the dash(-) symbol
	for (sc_h=0; sc_h<=5; sc_h++) {
		for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
			if (make_ans_text.substring(sc_a, sc_a+2) == " -") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == " ,") {
				make_ans_text = make_ans_text.substring(0, sc_a)+make_ans_text.substring(sc_a+1, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
			if (make_ans_text.substring(sc_a, sc_a+2) == "- ") {
				make_ans_text = make_ans_text.substring(0, sc_a+1)+make_ans_text.substring(sc_a+2, make_ans_text.length);
				document.getElementById("inputText").value = make_ans_text;
			}
		}
	}
	for (sc_a=0; sc_a<=make_ans_text.length; sc_a++) {
		if (make_ans_text.charAt(sc_a) == ",") {
			make_ans_text = make_ans_text.substring(0, sc_a)+" "+make_ans_text.substring(sc_a, make_ans_text.length);
			sc_a++;
			document.getElementById("inputText").value = make_ans_text;
		}
	}
	/*//alert("make_ans_text == "+make_ans_text)
	//alert("make_ans_text.value == "+document.getElementById("inputText").value)*/
};
/////////////////// FUNCTION MAKEANSFORMAT END  ////////////////////////////////////////////
/////////////////// FUNCTION SPELLCHECKER START  ////////////////////////////////////////////
spellchecker = function(spl_arr_or, spl_arr_wa, spl_chk_txt) {
	
	correct_count = 0;
	for (correct_i=0; correct_i<spl_arr_or.length; correct_i++) {
		if (spl_arr_wa.join(" ") == spl_arr_or[correct_i].join(" ")) {
			correct_count = 1;
			break;
		}
	}
	if (spl_chk_txt.value == "") {
		
		$(".blankMessage").show();
	} else if (correct_count == 1) {
		
		
		$(".correct").doTimeout(".correct" ,500, function(){
			$(".correct").fadeIn(500).fadeOut(1500);
			return false;
		});
	} else {
		//spl_choose_index = hkbspellchecker(spl_arr_or, spl_arr_wa);
		hspellchecker(spl_arr_or,spl_arr_wa,spl_chk_txt);
	}
};
hspellchecker = function(spel_arr_or, spel_arr_wa, spel_chk_txt) {
	hkb_crt_count = -100;
	for (hkb_spl=0; hkb_spl<spel_arr_or.length; hkb_spl++) {
		hkb_spl_temp = 0;
		hkb_count_or = spel_arr_or[hkb_spl].length;
		hkb_count_wa = spel_arr_wa.length;
		hkb_crt_count = 0;
		if (hkb_count_or == hkb_count_wa) {
			for (ii=0; ii<hkb_count_wa; ii++) {
				hkb_inc_count = 0;
				if (spel_arr_or[hkb_spl][ii] == spel_arr_wa[ii]) {
					hkb_crt_count++;
				} else {
					if (spl_chk(spel_arr_or[hkb_spl][ii], spel_arr_wa[ii])) {
						if (hkb_spl_temp == 0) {
							hkb_spl_temp = ii+1;
							hkb_spl_wrong = spel_arr_wa[ii];
						}
					} else {
						hkb_crt_count = -10;
						hkb_inc_count = 1;
						break;
					}
				}
				/*trace("ii"+spel_arr_or[hkb_spl][ii]);
				trace("ii"+spel_arr_wa[ii]);
				trace("count"+hkb_crt_count);*/
			}
			if (hkb_crt_count+2>=hkb_count_wa) {
				//_root.inc_mc.msgBox.value = "word "+(hkb_spl_temp);

				
					document.getElementById("whatValue").innerHTML = "word "+(hkb_spl_temp);
					$(".prompt").fadeIn();
			
				//trace(hkb_spl_wrong);
				hk_count = 0;
				for (hk=0; hk<spel_chk_txt.value.length; hk++) {
					if (spel_chk_txt.value.charAt(hk) == " ") {
						hk_count++;
					}
					if (hk_count+1 == hkb_spl_temp) {
						//hkb_spl_index = spel_chk_txt.value.indexOf(hkb_spl_wrong);
						if (hk_count!=0) {
							hkb_spl_index = hk+1;
						} else {
							hkb_spl_index = hk;
						}
						break;
					}
				}
				//alert("setSelection1")
				//$(".input1").focus();
				
				//Selection.setFocus(spel_chk_txt);
				$txt = $(".input1");
				$txt[0].setSelectionRange(hkb_spl_index,hkb_spl_index+hkb_spl_wrong.length);
				//alert("setSelection")
				break;
			} else {
				if (hkb_spl+1 == spel_arr_or.length) {
					var_for_increct = 1;
					//Selection.setFocus(null);
				}
			}
		} else if (hkb_spl+1 == spel_arr_or.length) {
			var_for_increct = 1;
			//Selection.setFocus(null);
		}
	}
};
////////////////////////////////////////////////////////////////////////////////////
hkbspellchecker = function(hkbspel_arr_or, hkbspel_arr_wa)  {
	var max_arr = new Array();
	for (p=0; p<hkbspel_arr_or.length; p++) {
		this["cc"+(p+1)] = 0;
		hkbcount_or = hkbspel_arr_or[p].length;
		hkbcount_wa = hkbspel_arr_wa.length;
		hkbcrt_count = 0;
		if (hkbcount_or == hkbcount_wa) {
			for (hii=0; hii<hkbcount_wa; hii++) {
				if (hkbspel_arr_or[p][hii] == hkbspel_arr_wa[hii]) {
					this["cc"+(p+1)]++;
				}
			}
		}
		max_arr.push(this["cc"+(p+1)]);
	}
	htemp_max = -1;
	htemp_max_index = -1;
	for (oo=0; oo<max_arr.length; oo++) {
		if (htemp_max<max_arr[oo]) {
			htemp_max = max_arr[oo];
			htemp_max_index = oo+1;
		}
	}
	return htemp_max_index;
};
///////////////////////////////////////////////////////////FUNCTION SPELLCHECKER END  ////////////////////////////////////////////
/*////////////////////////////////////////////////////////////Convert to comma string///////////////////*/

				comma_Convert = function(num) {
					var temp_num = String(num);
					var temp_str = "";
					for (var i=0; i<temp_num.length; i++) {
						if (temp_num.length <= 3) {
							
								temp_str += temp_num.charAt(i);
						
						}else if (temp_num.length == 4) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str = temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 5) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 6) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 7) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 8) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 9) {
							if (i == 2) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 5) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 10) {
							if (i == 0) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 3) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 6) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						} else if (temp_num.length == 11) {
							if (i == 1) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 4) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else if (i == 7) {
								//trace(temp_num.charAt(i));
								temp_str += temp_num.charAt(i)+",";
							} else {
								temp_str += temp_num.charAt(i);
							}
						}
					}
					return temp_str;
				}
				
				
					comma_Convert = function(num){
	var temp_num = String(num);
	var temp_str = "";
	var temp = "";
	var count = 0;
	for (i=temp_num.length; i>=0; i--) {
		////trace(temp_num.charAt(i));
		count++;
		if (count == 5 || count == 7 || count == 9) {
			temp_str += ","+temp_num.charAt(i);
		} else {
			temp_str += temp_num.charAt(i);
		}
	}
	for (i=temp_str.length; i>=0; i--) {
		temp += temp_str.charAt(i);
	}
	return temp;
};
				/////////////////////////////////////////////
				
				 Remove_Comma = function(str){
				var Final_Str = "";
				for (var i = 0; i<str.length; i++) {
					if (str.charAt(i) == ",") {
						continue;
					}
					Final_Str += str.charAt(i);
				}
				return Final_Str;
			}

				/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
			trimcomma = function(theString) {
					var ab_str = "";
					var enterans = String(theString);
					if (enterans.length == "19") {
						//trace("19");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",") && (enterans.charAt(15) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3)+enterans.substr(16, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "18") {
						//	trace("18");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",") && (enterans.charAt(14) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3)+enterans.substr(15, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "17") {
						//trace("17");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",") && (enterans.charAt(13) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3)+enterans.substr(14, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "15") {
						//trace("15");
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",") && (enterans.charAt(11) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3)+enterans.substr(12, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "14") {
						//trace("14");
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",") && (enterans.charAt(10) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3)+enterans.substr(11, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "13") {
						//trace("13");
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",") && (enterans.charAt(9) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3)+enterans.substr(10, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "11") {
						if ((enterans.charAt(3) == ",") && (enterans.charAt(7) == ",")) {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3)+enterans.substr(8, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "10") {
						if ((enterans.charAt(2) == ",") && (enterans.charAt(6) == ",")) {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3)+enterans.substr(7, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "9") {
						if ((enterans.charAt(1) == ",") && (enterans.charAt(5) == ",")) {
							ab_str = enterans.charAt(0)+enterans.substr(2, 3)+enterans.substr(6, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "7") {
						if (enterans.charAt(3) == ",") {
							ab_str = enterans.substr(0, 3)+enterans.substr(4, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "6") {
						if (enterans.charAt(2) == ",") {
							ab_str = enterans.substr(0, 2)+enterans.substr(3, 3);
						} else {
							ab_str = enterans;
						}
					} else if (enterans.length == "5") {
						if (enterans.charAt(1) == ",") {
							ab_str = enterans.substr(0, 1)+enterans.substr(2, 3);
						} else {
							ab_str = enterans;
						}
					} else {
						ab_str = enterans;
					}
					return (ab_str);
		};
/*////////////////////////////////////////////////////////////////////////////////*/
				comma= function(k_str) {
					var fin_str = "";
					for (j=0; j<k_str.length; j++) {
						if ((k_str.charAt(j)!=",")){
							fin_str += k_str.charAt(j);
						}
					}
					return fin_str;
				}
/*////////////////////////////////////////////*/
trimcoma = function(theString) {
	//for (space_i=0; space_i<=5; space_i++) {
	for (space_m=0; space_m<=theString.length; space_m++) {
		if (theString.substring(space_m, space_m+1) == ",") {
			coma_count++;
			theString = theString.substring(0, space_m)+theString.substring(space_m+1, theString.length);
			space_m--;
		}                            
	}
	//}
	return theString;
};
	/*////////////////////////////////////////////////////////////////////////////////*/
/* randRange = function(min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				}	
				*/

random_Array = function(str)  {
							var cnt = 0;
							var temp_Int_Arr = str.split(",");
							var random_index_temp= [];
							var temp_arr = [];
							var int_count = 0;
							do {
								var temp_num = randRange(0, temp_Int_Arr.length-1);
								temp_arr.push(temp_Int_Arr.splice(temp_num, 1));
							} while (temp_Int_Arr.length>0);
							///////////////////////////////////// 
							return temp_arr;
						}

						  
	TimerInitialize = function(){  
						  	var timer;
							timer = new _timer
							timer.mode(1);
							timer.start(1000);
					}					  




window.range01 = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);




}); //////end of Main/////////


