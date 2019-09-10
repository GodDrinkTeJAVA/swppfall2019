class Form {
    constructor(
      email,
      password,
      password_confirmation,
      phone_number,
      fname,
      lname,
      age,
      birth_month,
      birth_day,
      birth_year) {
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
        this.phone_number = phone_number;
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.birth_month = birth_month;
        this.birth_day = birth_day;
        this.birth_year = birth_year;
      }
    // TODO: You may fill in functions in the class.

    // function to check the form and return adequate message for popup
    checkForm() {
      // set empty string to make it easy to return + boolean to check whether it's successful
      var isSuccess = true;
      var message = "";

      var patt = new RegExp("@")
      if (!patt.test(this.email)) {
        isSuccess = false;
        message += "Email\n"
      }

      // return it with appropriate message
      if (isSuccess) {
        return "Successfully Submitted!";
      }
      else {
        return "You must correct:\n" + message;
      }
    }

  }

  var but = document.createElement('button');
  but.innerHTML = "Check";
  but.onclick = function() {
      var email = document.forms["form"]["email"].value;
      // TODO: Fill in the rest of the function. Use the Form class defined above
      var password = document.forms["form"]["password"].value;
      var password_confirmation = document.forms["form"]["password-confirmation"].value;
      var phone_number = document.forms["form"]["phone-number"].value;
      var fname = document.forms["form"]["fname"].value;
      var lname = document.forms["form"]["lname"].value;
      var age = document.forms["form"]["age"].value;
      var birth_month = document.forms["form"]["birth-month"].value;
      var birth_day = document.forms["form"]["birth-day"].value;
      var birth_year = document.forms["form"]["birth-year"].value;

      var form = new Form(
        email,
        password,
        password_confirmation,
        phone_number,
        fname,
        lname,
        age,
        birth_month,
        birth_day,
        birth_year);

      let alertMessage = '';
      // TODO: Fill the alert message according to the validation result by following the form in README.md.
      alertMessage = form.checkForm();
      alert(alertMessage);

      // Hint: you can use the RegExp class for matching a string with the `test` method.
      // Hint: you can set contents of elements by finding it with `document.getElementById`, and fixing the `innerHTML`.
      // Hint: modify 'title' attribute of each label to display your message
      // Hint: Ask Google to do things you don't know yet! There should be others who have already done what you are to encounter.
  };
  document.body.appendChild(but);