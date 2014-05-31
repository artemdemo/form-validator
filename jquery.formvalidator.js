/*!
 * jQuery lazyLoadSlider
 * (c) 2013 Artem Demo <artemdemo@gmail.com>
 * MIT Licensed.
 *
 * http://github.com/artemdemo/...
 */

// http://stackoverflow.com/questions/10649869/jquery-selector-inputtype-text

(function($) {

	$.fn.formvalidator = function(config) {

		var defConfig = {
			all_mandatory: false,
			email_mandatory: true,
			unvalid_input_color: '#fff7d5'
		}
		config = $.extend(defConfig, config);

		// I need this variable, because I'm going to call to this from inside of other functions
		var $mainForm = $(this);

		// I don't know how many email fields has this form, therefor I'm creating an array of inputs
		var $email_arr = [];
		// I want to change elements inside of selected form only
		$mainForm.find('input[type=email]').each(function(){
			$email_arr.push( $(this) );
		});

		var email_arr_length = $email_arr.length;
		for (var i = 0; i < email_arr_length; i++) {
			$email_arr[i].after('<div class="fv-incorrect-email" id="fv-incorrect-email-'+ i +'" style="display: none;">Email is incorrect</div>');
		};

		$mainForm.find('input[type=submit]').click(function(){
			event.preventDefault();
			var may_submit = true;

			if (config.all_mandatory){
				var input_counter = 0;
				$mainForm.find('input').each(function(){
					var type = $(this).attr('type');
					if( type != 'email' && type != 'submit' ) {
						$(this).after('<div class="fv-incorrect-input" id="fv-incorrect-input-'+ input_counter +'" style="display: none;">This field is mandatory</div>');
						input_counter++;
						if ( $(this).val() == '' ){}
					}
				});
			}

			if (may_submit) {
				if (config.all_mandatory || config.email_mandatory) {
					if ($email_arr.length) {
						result = validateEmails($email_arr);
						var result_length = result.length;
						for (var i = 0; i < result_length; i++) {
							if ( result[i].valid == false ) {
								var id = "#fv-incorrect-email-" + i;
								$(id).slideToggle('fast');
								$(id).attr('aria-invalid', true);
								$email_arr[i].css('background', config.unvalid_input_color);
								may_submit = false;
							}
						}
					}
				}
			}

			if( may_submit ) $mainForm.submit();
		});

		function validateEmails( $email_arr ) {
			var email_arr_length = $email_arr.length;
			var result = [];
			for (var i = 0; i < email_arr_length; i++) {
				var email_str = $email_arr[i].val();
				var atpos = email_str.indexOf("@");
				var dotpos = email_str.lastIndexOf(".");
				if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=email_str.length) {
					result.push({
						email_str: email_str,
						valid: false
					});
				} else {
					result.push({
						email_str: email_str,
						valid: true
					});
				}
			}
			return result;
		}


		// ToDo:
		// by default it is searching for email & phone and check if they are correct
		// add attribute for required elements OR it could be parameter in cinfiguration that say that all elements are required, or it could be an array of ID of elements that should be required

		// http://api.jquery.com/blur/
		
	}
}(jQuery));