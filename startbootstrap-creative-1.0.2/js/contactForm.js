$("#contactFormSubmit").click(submitContactForm);
function submitContactForm(){
    console.log("whatever");
    $.ajax({
        url: "http://fvi-grad.com:4004/email",
        method: "POST",
        data: $("#contactForm").serialize(),
        success: function(){
            $("#contactFormSubmit").text("Submitted");
        },
        beforeSend: function(){
            $("#contactFormSubmit").text("Submitting");
            $("#contactFormSubmit").off("click")
        },
        error: function(){
            $("#contactFormSubmit").text("Resubmit");
            $("#contactFormSubmit").on("click", submitContactForm);
        }
    })
}