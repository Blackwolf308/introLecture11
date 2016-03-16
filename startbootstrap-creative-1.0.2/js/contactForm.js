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
//------------------------------------------
//this is the main review from class #11

$(document).ready(function(){
    $("#thehidingform").addClass("hide");
    $("#finalexam").on("click", function(){
        $("#thehidingform").removeClass("hide");
        $("#finalexam").addClass("hide");
    })
    $("#btnSubmit2").on("click", function(){
        $.ajax({
            url: "http://www.fakedoamin.com/formpost",
            method: "POST",
            data: $("#btnSubmit2").serialize(),
            success: function(){
                $("#btnSubmit2").text("Submitted");
                alert("Congrats on the form!!!");
            },
            beforeSent: function(){
                $("#btnSubmit2").text("Submitting");
            },
            error: function(){
                $("#btnSubmit2").text("Retry");
                alert("Form Submission Failed. Please try again");
            }
        });
    });
});