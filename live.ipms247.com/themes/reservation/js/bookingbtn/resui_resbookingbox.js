// JavaScript Document
(function($) {  
      $.bb_resBookingBox = {  
      defaultsBookingBoxParam: {  
        btnContainer: "bb_resBookingBox",
		headerColor: "#DDDDDD",  
		bodyColor: "#F9F9F9",  		
		showborder: true,		
		BorderColor: "#BBBBBB",
		BorderWidth:1,
		BodyLanguage:'en',
		BorderType:"solid",			
		FontFamily: 'Arial, Helvetica, sans-serif',
		FontSize:'12',		
		TextColor: "#000000",	
		InputBorderColor: "#CCCCCC",	
		InputbackColor: "#FFFFFF",		
		InputTextColor: "#000000",		
		ButnBackColor:"#FFFFFF",
		ButnBorderColor:"#FFFFFF",
		ButnTextColor:"#FFFFFF",		
		HeaderTextColor: "#000000",	
		HeaderFontSize: '20',			
		boxwidth:240,
		type:'htype',		
		acr:true,
		ShowChild:true,
		ShowNights:true,		
		rooms:true,
		promotion:false,
                defaultadult:15,
                defaultchild:15,
                defaultroom:15,                         
                Nonights:50,		
		HTextCaption:'Reservation',
		BtnTextCaption:'Book Now',	
		LblPromoCaption:"Promo",
		Calinit:true,
		CalShowOn:"both",
		CalDefaultDt: "+0w",
		CalChangeMonth: true,
		CalMinDate:1,
		CalMaxDate:"",
		CalDtFormat:"mm-dd-yy",
		CalCutoffDays:2,		
		CalImage:"1px -25px",
		CalBackColor: "#cccccc",	
		CalHeaderColor: "#cccccc",	
		CalCellActiveColor: "#eeeeee",	
		CalCellInActiveColor: "#F4f4f4",
		LblArrivalCaption:"Arrival",
		LblNightsCaption:"Nights",
		LblAdultsCaption:"Adult",
		LblChildsCaption:"Child",
		LblRoomsCaption:"Rooms",
		LblChkOutCaption:"Check Out",
		LblPerRoomCaption:"Per Room",
                boxwidthtype:"px",
                ShowHeader:true,
                ShowInlineCSS:true,
		//serverurl:'http://192.168.20.65/booking/'
		//serverurl:'http://107.20.176.226/booking/'
		serverurl:'https://live.ipms247.com/booking/',
            pricewidget:false,
      }  
    };  
	
	$.fn.extend({  
      bb_resBookingBox:function(bbBtnConfig) {
		
		if(typeof(bbBtnConfig.ButnBackColor)=='undefined')
		{
			$.bb_resBookingBox.defaultsBookingBoxParam.ButnBackColor=bbBtnConfig.InputbackColor;
		}
		if(typeof(bbBtnConfig.ButnBorderColor)=='undefined')
		{
			$.bb_resBookingBox.defaultsBookingBoxParam.ButnBorderColor=bbBtnConfig.InputBorderColor;
		}
		if(typeof(bbBtnConfig.ButnTextColor)=='undefined')
		{
			$.bb_resBookingBox.defaultsBookingBoxParam.ButnTextColor=bbBtnConfig.InputTextColor;
		}
		if(typeof(bbBtnConfig.ShowChild)=='undefined')
		{
			if(bbBtnConfig.acr==true || bbBtnConfig.acr=='true') 
				$.bb_resBookingBox.defaultsBookingBoxParam.ShowChild=true;
			if(bbBtnConfig.acr==false || bbBtnConfig.acr=='false') 
				$.bb_resBookingBox.defaultsBookingBoxParam.ShowChild=false;				
		}		
		
                var bbBtnConfig = $.extend({}, $.bb_resBookingBox.defaultsBookingBoxParam, bbBtnConfig);  
		
                bbBtnConfig.btnContainer = this.attr("id");
		jQuery('#'+bbBtnConfig.btnContainer).html('');
		
		if (bbBtnConfig.BodyLanguage=='') {
            bbBtnConfig.BodyLanguage='en';
        }
		
		var _jsName=bbBtnConfig.serverurl+"/templates/js/";                
                jQuery.getScript(_jsName+"datepicker_lang/jquery.ui.datepicker-"+bbBtnConfig.BodyLanguage+".js");
                
                var cmn_nights="<p class='bbres_fieldset bbres_fieldset1'><label class='aclabelrm'>"+bbBtnConfig.LblNightsCaption+"</label><select name='eZ_Nights' id='eZ_Nights' class='bb_combobox rescmbx2' style='width:45px;'></select></p>";				
		var cmnnights_hidden="<input name='eZ_Nights' id='eZ_Nights' type='hidden' class='txtbox res_nights2' />";						
		
                
                if(bbBtnConfig.ShowHeader==true || bbBtnConfig.ShowHeader=='true')
                        var cmnContent="<h2>"+bbBtnConfig.HTextCaption+"</h2>"
                else
                        var cmnContent="";
                        
		if(bbBtnConfig.ShowNights==true || bbBtnConfig.ShowNights=='true')
		{
		var cmnContent=cmnContent+""//"<h2>"+bbBtnConfig.HTextCaption+"</h2>"
			+ "<p class='bbres_fieldset bbres_fieldset2'><label class='cilabel'>"+bbBtnConfig.LblArrivalCaption+"</label><input name='eZ_chkin' type='text' id='eZ_chkin' class='bbres_fieldset datepicker res_chkin2'"
			+ "placeholder='"+bbBtnConfig.CalDtFormat+"' readonly='readonly'/></p>" + cmn_nights;			
		}
		else
		{
			var cmnContent=cmnContent+""//"<h2>"+bbBtnConfig.HTextCaption+"</h2>"
			+ "<p class='bbres_fieldset bbres_fieldset3'><label class='cilabel'>"+bbBtnConfig.LblArrivalCaption+"</label><input name='eZ_chkin' type='text' id='eZ_chkin' class='bbres_fieldset datepicker res_chkin2'"
			+ "placeholder='"+bbBtnConfig.CalDtFormat+"' readonly='readonly'/></p>" 
			+ "<p class='bbres_fieldset bbres_fieldset4'><label class='cilabel'>"+bbBtnConfig.LblChkOutCaption+"</label><input name='eZ_chkout' type='text' id='eZ_chkout' class='bbres_fieldset datepicker res_chkout2'"
			+ "placeholder='"+bbBtnConfig.CalDtFormat+"' readonly='readonly'/></p>" + cmnnights_hidden;	
		}

      var cmnAcr_show="<p class='bbres_fieldset bbres_fieldset5'><label class='aclabel'>"+bbBtnConfig.LblAdultsCaption+"</label><select name='eZ_adult' id='eZ_adult' class='bb_combobox rescmbx2' style='width:45px;'></select></p>"
		     + "<p class='bbres_fieldset bbres_fieldset6'><label class='aclabel'>"+bbBtnConfig.LblChildsCaption+"</label><select name='eZ_child' id='eZ_child' class='bb_combobox rescmbx2' style='width:45px;'></select></p>";
	
      var cmnAcrOnly_show="<p class='bbres_fieldset bbres_fieldset7'><label class='aclabel'>"+bbBtnConfig.LblAdultsCaption+"</label><select name='eZ_adult' id='eZ_adult' class='bb_combobox rescmbx2' style='width:45px;'></select></p>"
	+ "<input name='eZ_child' id='eZ_child' type='hidden' value='0' class='txtbox res_child2'/>";

	var cmnChildOnly_show="<p class='bbres_fieldset bbres_fieldset8'><label class='aclabel'>"+bbBtnConfig.LblChildsCaption+"</label><select name='eZ_child' id='eZ_child' class='bb_combobox rescmbx2' style='width:45px;'></select></p>"
	+"<input name='eZ_adult' id='eZ_adult' type='hidden' class='txtbox' value='1'/>";

	var cmnAcr_hidden="<input name='eZ_adult' id='eZ_adult' type='hidden' class='txtbox' value='1'/>"
					 + "<input name='eZ_child' id='eZ_child' type='hidden' value='0' class='txtbox'/>";
	
	var cmnRoom_show="<p class='bbres_fieldset bbres_fieldset9'><label class='aclabelrm'>"+bbBtnConfig.LblRoomsCaption+"</label><select name='eZ_room' id='eZ_room' class='bb_combobox rescmbx2' style='width:45px;'></select></p>";
	
	var cmnRooms_hidden="<input name='eZ_room' id='eZ_room' type='hidden' class='txtbox' value='1'/>";
	var cmnCalDtFmt_hidden="<input name='calformat' id='calformat' type='hidden' class='txtbox' value='"+bbBtnConfig.CalDtFormat+"'/>";
	
	var cmnBtn= "<input name='hidBodyLanguage' id='hidBodyLanguage' type='hidden' class='txtbox' value='"+bbBtnConfig.BodyLanguage+"'/>"
				+"<p class='bbres_fieldset bbres_fieldset10 bb_btn'><input type='button' name='bb_resBtn'  id='bb_resBtn'"
				  + " value='"+bbBtnConfig.BtnTextCaption+"' class='bbres_booknow bb_resBtn resbtn234'"
	  			  + ' onClick="BB_valiDateFomData();"></p>';		    
		
		if(bbBtnConfig.promotion==true || bbBtnConfig.promotion=='true')
		{
		var cmnPromo=""
			+ "<p class='bbres_fieldset bbres_fieldset11'><label class='cilabel'>"+bbBtnConfig.LblPromoCaption+"</label><input name='promotioncode' type='text' id='promotioncode' class='bbres_fieldset res_promo2'" 
			+ "/></p>" ;			
		}
		
		if((bbBtnConfig.acr==true || bbBtnConfig.acr=='true') && (bbBtnConfig.ShowChild==true || bbBtnConfig.ShowChild=='true'))
			var cmbAdultChildComponent=cmnAcr_show;
		else if((bbBtnConfig.acr==true || bbBtnConfig.acr=='true') && (bbBtnConfig.ShowChild==false || bbBtnConfig.ShowChild=='false'))
			var cmbAdultChildComponent=cmnAcrOnly_show;
		else if((bbBtnConfig.acr==false || bbBtnConfig.acr=='false') && (bbBtnConfig.ShowChild==true || bbBtnConfig.ShowChild=='true') )
			var cmbAdultChildComponent=cmnChildOnly_show;
		else if((bbBtnConfig.acr==false || bbBtnConfig.acr=='false') && (bbBtnConfig.ShowChild==false || bbBtnConfig.ShowChild=='false') )
			var cmbAdultChildComponent=cmnAcr_hidden;
		
		//class='bb_resBtn'
		if(bbBtnConfig.type=='htype')
		{			
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrbox');
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrheadlbox');
            jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_vrbox');
			if(bbBtnConfig.rooms==true ||  bbBtnConfig.rooms=='true')
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRoom_show;
			else
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRooms_hidden;				
		}			
		else if(bbBtnConfig.type=='vtype')
		{
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrbox');
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrheadlbox');	
			jQuery('#'+bbBtnConfig.btnContainer).addClass('bb_hrbox');
            jQuery('#'+bbBtnConfig.btnContainer).addClass('bb_vrbox');
			if(bbBtnConfig.rooms==true ||  bbBtnConfig.rooms=='true')
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRoom_show;
			else
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRooms_hidden;
		}		
		else if(bbBtnConfig.type=='vleftcaptype')
		{
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrbox');
			jQuery('#'+bbBtnConfig.btnContainer).removeClass('bb_hrheadlbox');			
			jQuery('#'+bbBtnConfig.btnContainer).addClass('bb_hrheadlbox');
			if(bbBtnConfig.rooms==true ||  bbBtnConfig.rooms=='true')
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRoom_show;
			else
				var cmnAppendData=cmnContent+cmbAdultChildComponent+cmnRooms_hidden;
		}
		
		if(bbBtnConfig.promotion==true || bbBtnConfig.promotion=='true')
			var cmnComponenent=cmnAppendData+cmnPromo+cmnBtn+cmnCalDtFmt_hidden;
		else
			var cmnComponenent=cmnAppendData+cmnBtn+cmnCalDtFmt_hidden;		
		
		//Fill Data
		jQuery('#'+bbBtnConfig.btnContainer).append(cmnComponenent);
		if(bbBtnConfig.acr==true || bbBtnConfig.acr=='true')
		{
			_fillStaticCombo(1,bbBtnConfig.defaultadult,"eZ_adult",'');
		}
		if(bbBtnConfig.ShowChild==true || bbBtnConfig.ShowChild=='true')
		{
			_fillStaticCombo(0,bbBtnConfig.defaultchild,"eZ_child",'');
		}
		if(bbBtnConfig.rooms==true || bbBtnConfig.rooms=='true')
			_fillStaticCombo(1,bbBtnConfig.defaultroom,"eZ_room",'');
		
		if(bbBtnConfig.ShowNights==true || bbBtnConfig.ShowNights=='true')
		{
			_fillStaticCombo(1,bbBtnConfig.Nonights,"eZ_Nights",'');
		}
		
                 if (bbBtnConfig.ShowInlineCSS==true || bbBtnConfig.ShowInlineCSS=='true') {
                  
		if(bbBtnConfig.type=='htype')
                {		  
                    setTimeout(function() {                      
                      var wid2=parseInt(jQuery(".bb_resbox").width());
                        //alert(wid2);
                        //if (wid2<237) {
                        if (wid2<205) {                      
                        jQuery('#bb_resBtn').css('margin-left','0px');
                        jQuery('p.bbres_fieldset label').css('width','100%');
                      }
                      else
                        jQuery('#bb_resBtn').css('margin-left','80px');
                  }, 600);
                }
		else
		   jQuery('#bb_resBtn').css('margin-left','0px');	
		
                if (bbBtnConfig.boxwidthtype=='TYPE_PER') {
                 
                   var widthtype='%';
                   var boxwidth_per='100';
                }
                else
                {
                  var widthtype='px';
                  var boxwidth_per=bbBtnConfig.boxwidth;
                }
                
		if(bbBtnConfig.type=='htype')
			jQuery('#'+bbBtnConfig.btnContainer).css({'width':boxwidth_per+widthtype});
		else
		{
			jQuery('#'+bbBtnConfig.btnContainer).css({'width':boxwidth_per+widthtype});	
		}
                                           
                
		 jQuery('.bb_resbox h2').css({
							   	  'background':bbBtnConfig.headerColor,
								  'color':bbBtnConfig.HeaderTextColor,
							   	  'font-size':bbBtnConfig.HeaderFontSize+'px'
							   });
		 jQuery('.bb_resbox').css({
								'background':bbBtnConfig.bodyColor,
								'fontFamily':bbBtnConfig.FontFamily,
								'font-size':bbBtnConfig.FontSize+'px'
							});
		 jQuery('.bbres_fieldset').css({
								'fontFamily':bbBtnConfig.FontFamily,
								'color':bbBtnConfig.TextColor
							});
	         jQuery('.bbres_fieldset input').css({
							  	 'background':bbBtnConfig.InputbackColor,
								 'border': '1px solid '+bbBtnConfig.InputBorderColor,
							 	 'color':bbBtnConfig.InputTextColor
							   });
                  jQuery('.bb_combobox').css({
							  	 'background':bbBtnConfig.InputbackColor,
								 'border': '1px solid '+bbBtnConfig.InputBorderColor,
							 	 'color':bbBtnConfig.InputTextColor
							   });
		
		  jQuery('.bb_resBtn').css({
							  	 'background':bbBtnConfig.ButnBackColor,
								 'border': '1px solid '+bbBtnConfig.ButnBorderColor,
							 	 'color':bbBtnConfig.ButnTextColor,
								 'fontFamily':bbBtnConfig.FontFamily,
								 'font-size':bbBtnConfig.FontSize+'px'
							   });		
		
		//Display Border if ShowBorder true
		if(bbBtnConfig.showborder==true || bbBtnConfig.showborder=='true') 
			{
				jQuery('.bb_resbox').css({ 'border':bbBtnConfig.BorderWidth+'px '+bbBtnConfig.BorderType+' '+bbBtnConfig.BorderColor});
				if(bbBtnConfig.type!='vleftcaptype')
					jQuery('.bb_resbox h2').css({ 'border-bottom':bbBtnConfig.BorderWidth+'px '+bbBtnConfig.BorderType+' '+bbBtnConfig.BorderColor});
			}
		else
			{
				jQuery('.bb_resbox').css('border', 'none');
				jQuery('.bb_resbox h2').css('border-bottom', 'none');
			}
		
                }//inline css on
                else{
                        _res_hideAllElements();
                }
                
		  /*Calender Setings - start*/
                  
		if(bbBtnConfig.Calinit==true || bbBtnConfig.Calinit=='true')
	  	{
                  //Chinmay Gandhi - 1.0.54.62 - 16th mar 2018 - Start
                  //Purpose : Cut off time not working for more than 0 days - [bbBtnConfig.CalMinDate==0 &&] - [ CutOffDayIssue ]
                  if(typeof(bbBtnConfig.HotelId)!='undefined' && bbBtnConfig.HotelId!='') //Pinal - 1.0.47.52 - 16 January 2016 - Purpose - Cut off time
                  {
                        var days=checkcutofftime(bbBtnConfig.CalMinDate,bbBtnConfig.HotelId);
                    
						//kishna Tailor 20 March 2021 purpose:Multiple connection issue RES-2721 START
//							  if (days!='' && days!=undefined)
//                                    bbBtnConfig.CalMinDate=days;
							  if (days.defaultday!='' && days.defaultday!=undefined)
                                    bbBtnConfig.CalMinDate=days.defaultday;
							 //kishna Tailor 20 March 2021 END
                  }
                  
                  //Priyanka Maurya - 10 Jun 2019 - Purpose : Some times date picker not showing the date properly Booking Box Widget - START
				  //kishna Tailor 20 March 2021 purpose:Multiple connection issue RES-2721 START
					//var initial_date  = getcurrentdate(bbBtnConfig.HotelId);
					var initial_date  = days.currentdate;
				  //kishna Tailor 20 March 2021 purpose:Multiple connection issue RES-2721 END
                  var check_in_date = initial_date.split("-");
                  var today = new Date(check_in_date[0],check_in_date[1]-1,check_in_date[2]);
                  //Priyanka Maurya - END
      
			   if(bbBtnConfig.ShowNights==true || bbBtnConfig.ShowNights=='true')
                     {
			 	 _setNights(bbBtnConfig.CalCutoffDays);// For default cut off days settings
                         callpricewidget(bbBtnConfig.pricewidget,bbBtnConfig.CalDtFormat); //Pinal - 1.0.53.61 - 9 November 2017
                     }
			  today.setDate(today.getDate()+(parseInt(bbBtnConfig.CalMinDate)));
			  jQuery("#eZ_chkin").datepicker({  
					showOn: bbBtnConfig.CalShowOn,		
					defaultDate: bbBtnConfig.CalDefaultDt ,	
					changeMonth: bbBtnConfig.CalChangeMonth,	
					changeYear: true,
					minDate:today,	//Priyanka Maurya - 11 Jun 2019 - Purpose : Some times date picker not showing the date properly Booking Box Widget [Change bbBtnConfig.CalMinDate to today's date ]- START  
					maxDate:"",	
					dateFormat: bbBtnConfig.CalDtFormat, 
					onSelect: function(selectedDate) {  
					if(jQuery("#eZ_chkin").attr("id")==jQuery(this).attr("id")) 
						{
							if(bbBtnConfig.ShowNights==true || bbBtnConfig.ShowNights=='true')
								_setNights(bbBtnConfig.CalCutoffDays);
							else
							{ 
								var checkout_date=new Date(jQuery.datepicker.parseDate(bbBtnConfig.CalDtFormat,jQuery("#eZ_chkin").val()));
							 	checkout_date.setDate(checkout_date.getDate() + parseInt(bbBtnConfig.CalCutoffDays));
                                                                checkout_date = jQuery.datepicker.formatDate(bbBtnConfig.CalDtFormat, checkout_date);							    
								jQuery("input[id$='eZ_chkout']").val(checkout_date);	
								_setChkNights();
							}
                                          callpricewidget(bbBtnConfig.pricewidget,bbBtnConfig.CalDtFormat); //Pinal - 1.0.53.61 - 9 November 2017
						}	
					  }
					}).datepicker('setDate',today);	
			  if(bbBtnConfig.ShowNights==false || bbBtnConfig.ShowNights=='false')
			  {
				  var checkout_date=new Date(jQuery.datepicker.parseDate(bbBtnConfig.CalDtFormat,jQuery("#eZ_chkin").val()));
			 	  checkout_date.setDate(checkout_date.getDate() + parseInt(bbBtnConfig.CalCutoffDays));
				  checkout_date = jQuery.datepicker.formatDate(bbBtnConfig.CalDtFormat, checkout_date);
				  jQuery("input[id$='eZ_Nights']").val(parseInt(bbBtnConfig.CalCutoffDays));
				  
				  jQuery("#eZ_chkout").datepicker({  
						showOn: bbBtnConfig.CalShowOn,		
						defaultDate: bbBtnConfig.CalDefaultDt ,	
						changeMonth: bbBtnConfig.CalChangeMonth,	
						changeYear: true,
						minDate:bbBtnConfig.CalMinDate,	
						maxDate:"",	
						dateFormat: bbBtnConfig.CalDtFormat, 
						onSelect: function(selectedDate) {  
						if(jQuery("#eZ_chkout").attr("id")==jQuery(this).attr("id")) 
							{
								 _setChkNights();
                                                 callpricewidget(bbBtnConfig.pricewidget,bbBtnConfig.CalDtFormat); //Pinal - 1.0.53.61 - 9 November 2017
							}	
						  }
						}).datepicker('setDate',checkout_date)
			  }
			  
      setTimeout(function() {
                       setCalenderCss(bbBtnConfig.CalImage,bbBtnConfig.CalBackColor,bbBtnConfig.CalHeaderColor,bbBtnConfig.headerColor,bbBtnConfig.CalCellActiveColor,bbBtnConfig.CalCellInActiveColor,bbBtnConfig.InputTextColor,bbBtnConfig);
                       callpricewidget(bbBtnConfig.pricewidget,bbBtnConfig.CalDtFormat); //Pinal - 1.0.53.61 - 9 November 2017
               }, 600);			  
			  
	 jQuery("input[id$='eZ_chkin'],input[id$='eZ_chkout'],.ui-datepicker-trigger,.ui-datepicker-next,.ui-datepicker-prev,.ui-datepicker-month,.ui-datepicker-year,#bb_resBtn").on('click', function() {
                     setCalenderCss(bbBtnConfig.CalImage,bbBtnConfig.CalBackColor,bbBtnConfig.CalHeaderColor,bbBtnConfig.headerColor,bbBtnConfig.CalCellActiveColor,bbBtnConfig.CalCellInActiveColor,bbBtnConfig.InputTextColor,bbBtnConfig);
                });
				
				jQuery(".ui-datepicker-month,.ui-datepicker-year").on('change', function() {
                     setCalenderCss(bbBtnConfig.CalImage,bbBtnConfig.CalBackColor,bbBtnConfig.CalHeaderColor,bbBtnConfig.headerColor,bbBtnConfig.CalCellActiveColor,bbBtnConfig.CalCellInActiveColor,bbBtnConfig.InputTextColor,bbBtnConfig);
                });
				
				jQuery(".ui-datepicker-trigger").button().click(function() {
                    setCalenderCss(bbBtnConfig.CalImage,bbBtnConfig.CalBackColor,bbBtnConfig.CalHeaderColor,bbBtnConfig.headerColor,bbBtnConfig.CalCellActiveColor,bbBtnConfig.CalCellInActiveColor,bbBtnConfig.InputTextColor,bbBtnConfig);
                });
                                
               $("input[id$='eZ_chkin'],input[id$='eZ_chkout']").on('focus', function() {
                    setCalenderCss(bbBtnConfig.CalImage,bbBtnConfig.CalBackColor,bbBtnConfig.CalHeaderColor,bbBtnConfig.headerColor,bbBtnConfig.CalCellActiveColor,bbBtnConfig.CalCellInActiveColor,bbBtnConfig.InputTextColor,bbBtnConfig);		   
                });
               
                  if(bbBtnConfig.pricewidget) //Pinal - 1.0.53.61 - 9 November 2017
                  {
                     $("select[id$='eZ_Nights']").on('change', function() {
                        callpricewidget(bbBtnConfig.pricewidget,bbBtnConfig.CalDtFormat);
                     });
                  }
                                
			}
      /*Calender Setings - end*/		
      }
	  
 });  
})(jQuery); 

function _fillStaticCombo(iLimitStart,iLimitEnd,controlName,selectedValue){	
	var comboArr = [];
	for(ilmt=iLimitStart;ilmt<=iLimitEnd;ilmt++)
		comboArr.push('<option value="'+ ilmt +'">'+ ilmt  +'</option>');
	jQuery("select[id$='"+controlName+"']").html(comboArr.join(''));
	if(selectedValue!='')
	{
		jQuery("select[id$='"+controlName+"']").val(selectedValue);
	}
}
function setCalenderCss(CalImage,CalBackColor,CalHeaderColor,headerColor,CalCellActiveColor,CalCellInActiveColor,InputTextColor,bbtnObj)
{
        jQuery('#bb_resBookingBox').find('.ui-datepicker-trigger').css('background-position',CalImage);
	
         if (bbtnObj.ShowInlineCSS==true || bbtnObj.ShowInlineCSS=='true') {        
	 jQuery('#ui-datepicker-div').find('.ui-datepicker-header').css('background',CalHeaderColor);
	 jQuery('#ui-datepicker-div').find('.ui-datepicker td a.ui-state-hover').css('background-color',CalCellActiveColor);
	 jQuery('#ui-datepicker-div').find('.ui-datepicker td.ui-datepicker-today a').css('background-color',CalCellActiveColor);
	 jQuery('#ui-datepicker-div').find('.ui-datepicker .ui-datepicker-next').css('color',headerColor);
	 jQuery('#ui-datepicker-div').find('.ui-datepicker .ui-datepicker-prev').css('color',headerColor);
         }
}

function _res_hideAllElements()
{
       jQuery( "div#bb_resBookingBox").removeAttr("class");
                  jQuery( "div#bb_resBookingBox > * ").each(function( event ) {                                    
                                    jQuery(this).removeAttr("class");
                                     var kids = jQuery(this).children();
                                      jQuery(kids).each(function(  ) {                                          
                                          jQuery(this).removeAttr("class");
                                         });  
                  });
}

function setChkoutNight()
{
	var fromDate = jQuery("input[id$='eZ_chkin']").datepicker('getDate'); 
	var toDate = jQuery("input[id$='eZ_chkout']").datepicker('getDate');

	if (toDate && fromDate) {
	var difference = 0;
		var oneDay = 1000*60*60*24;
		var difference = Math.ceil((toDate.getTime() - fromDate.getTime()) / oneDay);
		}
	return 	difference;
}

function _setChkNights()
{
 jQuery("input[id$='eZ_Nights']").val(parseInt(setChkoutNight()));	
}

function checkcutofftime(CalMinDefaultDate,HotelId) //Pinal - 1.0.47.52 - 16 January 2016 - Purpose - Cut off time
{
      var param='action=getDefaultDays&HotelId='+HotelId+'&DefaultDays='+CalMinDefaultDate+'&callfrom=BookingButtonWidget';//kishan Tailor 20 March 2021 purpose:Multiple connection issue RES-2721
      var days=CalMinDefaultDate;
      jQuery.ajax({
            type: "POST",
            async:false,
            url: 'https://live.ipms247.com/booking/service.php',
            data: param, 
            success: function(response) {
                  //kishan Tailor 20 March 2021 purpose:Multiple connection issue RES-2721 START
				  //days=response.trim();
				  days=JSON.parse(response.trim());
				  //Kishan Tailor 20 March 2021 END
            }
      });
      return days;
}

//Priyanka Maurya - 10 Jun 2019 - Purpose : Some times date picker not showing the date properly Booking Box Widget - START
function getcurrentdate(HotelId)
{
      var param='action=getcurrentdate&HotelId='+HotelId;
      var current_date = new Date();
      var dd = String(current_date.getDate()); //Chirag 02 Aug 2019 RES-2130 Purpose:removed padstart as it's not working in IE[.padStart(2, '0')].
      var mm = String(current_date.getMonth() + 1); //January is 0! //Chirag 02 Aug 2019 RES-2130 Purpose:removed padstart as it's not working in IE[.padStart(2, '0')].
	  var yyyy = current_date.getFullYear();
	  dd = ("0" + dd).slice(-2); //Chirag 02 Aug 2019 RES-2130 Purpose:used Slice.
      mm = ("0" + mm).slice(-2); //Chirag 02 Aug 2019 RES-2130 Purpose:used Slice.
      current_date = yyyy + '-' + mm + '-' + dd;
      jQuery.ajax({
            type: "POST",
            async:false,
            url: 'https://live.ipms247.com/booking/service.php',
            data: param, 
            success: function(response) {
                  current_date=response.trim();
            }
      });
      return current_date;
}
//Priyanka Maurya - END

//Pinal - 1.0.53.61 - 9 November 2017 - START
//Purpose : Set checkin and checkout and reload price widget automatically on changes in booking box.
function callpricewidget(pricewidget,CalDtFormat)
{
      try
      {
            if(pricewidget)
            {
                  var checkin=new Date(jQuery.datepicker.parseDate(CalDtFormat,jQuery("#eZ_chkin").val()));
                  var chkout=checkin;
                  
                  checkin=jQuery.datepicker.formatDate('yy-mm-dd', checkin);
                  
                  var nights=jQuery("select[id$='eZ_Nights']").val();
                  if(nights==undefined)
                        nights=jQuery("input[id$='eZ_Nights']").val();
                  
                  chkout.setDate(chkout.getDate() + parseInt(nights));
                  chkout = jQuery.datepicker.formatDate("yy-mm-dd", chkout);
                  
                  loadpricewidget(checkin,chkout);
            }
      }
      catch(e)
      {
            console.log("callpricewidget _Error : "+e);
      }
}
//Pinal - 1.0.53.61 - 9 November 2017 - END