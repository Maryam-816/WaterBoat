$(document).ready(function () {
    $(".book-btn").click( () => {
        $('.booking .row').valid();
    });
    jQuery.validator.addMethod("allNumbers", function(value, element) {
        return this.optional(element) || /\d/g.test(value);
      }, ("This field should include only numbers"));

      $('.booking .row').validate({
       rules: {
            name:{
                required: true,
                rangelength: [1, 20]
            },

            numberOfPeople:{
                required: true,
                rangelength: [1, 3]
            },

            dateFrom:{
                required: true,
                rangelength: [10, 10]
            },

            dateTo:{
                required: true,
                rangelength: [10, 10]
            },

            email: {
                required: true,
                email: true
            },

            phoneNumber: {
                required: true,
                allNumbers: true,
                rangelength: [9, 11]
            }
       },
       messages: {
           name: {
            required: "Please, enter your name, here!",
           },
           numberOfPeople: {
            required: "Please, enter your numberof people, here!",
           },
           dateFrom: {
            required: "Please, enter your date from, here!",
           },
           dateTo: {
            required: "Please, enter your date to, here!",
           },
           email: {
            required: "Please, enter your email, here!",
           },
           phoneNumber:{
            required: "Please, enter your phone number, here!",
           }
       }
   });

   
});