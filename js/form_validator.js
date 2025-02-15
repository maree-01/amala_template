
$(document).ready(function () {
    $("#ContactForm").validate({
    	rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			mobile: {
				required: true,
				number: true,
				minlength: 10
			},
			message: {
				required: true
			},
			captcha: {
				required: true,
				number: true,
				minlength: 5
			},
			select_box: "required"
		},
		messages: {
			name: {
				required: "Please enter a name",
				minlength: "Your name must be atleast 2 characters"
			},
			email: {
				required: "Please enter a email",
				email: "Please enter a valid email address"
			},
			mobile: {
				required: "Please enter your mobile no.",
				number: "Your mobile no. must be numeric value",
				minlength: "Your mobile no. must be atleast 10 characters"
			},
			message: {
				required: "Please enter your message"
			},
			captcha: {
				required: "Please enter captcha code",
				number: "Your captcha code. must be numeric value",
				minlength: "Your captcha code. must be atleast 5 characters"
			},
			select_box: "Please select"
		},
        submitHandler : function () {
            // your function if, validate is success
            $.ajax({
                type : "POST",
                url : "EmailConatct.php",
                data : $('#ContactForm').serialize(),
                success : function (response) {
                	alert(response);
                  // $('#alert_message').html(response);
                  // $('#ContactForm').hide();
					if (response == 1)
					{
						//alert(response);
						document.getElementById("alert_message").style.display = "";
						document.getElementById("alert_message").innerHTML = "<center ><img src='images/thankyou.png'><br><div style='padding:5px; margin-top:50px;  background:#3B6800; color:#fff;'>Thank You For Submitting Enquiry Form. We Will Get Back To You Soon !!!</div></center>";
						document.getElementById("ContactForm").style.display= "none";
					}else if(response == 2){
						//$('#alert_message').hide();
						document.getElementById("alert_message").innerHTML = "<center ><br><div style='padding:5px; margin-top:50px;  background:#f00; color:#fff;'>Error: Please enter valid captcha code.. !!! </div> <br><br></center>";
						//$('#ContactForm').hide();
					}else{
						
						document.getElementById("alert_message").innerHTML = "<center ><br><div style='padding:5px; margin-top:50px;  background:#f00; color:#fff;'>Error: Mail Not sent Please resend !!! </div> <br><br></center>";
					}
                }
            });
        }
    });
});



$(document).ready(function () {
    $("#contactBooking").validate({
    	rules: {
			name: {
				required: true,
				minlength: 2
			},
			email: {
				required: true,
				email: true
			},
			mobile: {
				required: true,
				number: true,
				minlength: 10
			},
			message: {
				required: true
			},
			captcha: {
				required: true,
				number: true,
				minlength: 5
			},
			select_box: "required"
		},
		messages: {
			name: {
				required: "Please enter a name",
				minlength: "Your name must be atleast 2 characters"
			},
			email: {
				required: "Please enter a email",
				email: "Please enter a valid email address"
			},
			mobile: {
				required: "Please enter your mobile no.",
				number: "Your mobile no. must be numeric value",
				minlength: "Your mobile no. must be atleast 10 characters"
			},
			message: {
				required: "Please enter your message"
			},
			captcha: {
				required: "Please enter captcha code",
				number: "Your captcha code. must be numeric value",
				minlength: "Your captcha code. must be atleast 5 characters"
			},
			select_box: "Please select"
		},
        submitHandler : function () {
            // your function if, validate is success
            $.ajax({
                type : "POST",
                url : "EmailConatct.php",
                data : $('#contactBooking').serialize(),
                success : function (response) {
                	//alert(response);
                  // $('#alert_message').html(response);
                  // $('#ContactForm').hide();
					if (response == 1)
					{
						//alert(response);
						document.getElementById("alert_message").style.display = "";
						document.getElementById("alert_message").innerHTML = "<center ><img src='images/thankyou.png'><br><div style='padding:5px; margin-top:50px;  background:#3B6800; color:#fff;'>Thank You For Submitting Enquiry Form. We Will Get Back To You Soon !!!</div></center>";
						document.getElementById("contactBooking").style.display= "none";
					}else if(response == 2){
						//$('#alert_message').hide();
						document.getElementById("alert_message").innerHTML = "<center ><br><div style='padding:5px; margin-top:50px;  background:#f00; color:#fff;'>Error: Please enter valid captcha code.. !!! </div> <br><br></center>";
						//$('#contactBooking').hide();
					}else{
						
						document.getElementById("alert_message").innerHTML = "<center ><br><div style='padding:5px; margin-top:50px;  background:#f00; color:#fff;'>Error: Mail Not sent Please resend !!! </div> <br><br></center>";
					}
                }
            });
        }
    });
});
