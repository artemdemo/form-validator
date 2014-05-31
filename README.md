# Form Validator - ClientSide


## Features

* Simple and lightweight
* Multiple instances on one page
* Useful options to customize your form validation


## Basic Usage

### 1. Include the latest jQuery library and jQuery slider Plugin on the page
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="jquery.formvalidator.js"></script>
```

### 2. Create a form you want to validate
```html
<form id="test-form">
	<h3>Test Form</h3>
	<div class="input-wrap"><input type="text" name="input-fname" data-mandatory="true" value="" size="40" class="" aria-invalid="false" placeholder="First name"></div>
	<div class="input-wrap"><input type="text" name="input-lname" value="" size="40" class="" aria-invalid="false" placeholder="Last name"></div>
	<div class="input-wrap"><input type="tel" name="input-tel" value="" size="40" class="" aria-invalid="false" placeholder="Phone number"></div>
	<div class="input-wrap"><input type="email" name="input-femail" data-mandatory="true" value="" size="40" class="" aria-invalid="false" placeholder="First Email"></div>
	<div class="input-wrap"><input type="email" name="input-semail" value="" size="40" class="" aria-invalid="false" placeholder="Second Email"></div>
	<textarea name="message" cols="32" rows="5" class=""></textarea>
	<input type="submit" value="Send" class="button">
</form>
```

### 3. Initialization
```js
	$(document).ready(function(){
		$('#test-form').formvalidator();
	});
```

## License

jQuery Form Validartor is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
