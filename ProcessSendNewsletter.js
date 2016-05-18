$(document).ready(function(){

	//change template preview
	$("#Inputfield_newsletter_template").change(function() {
		request= $.ajax({
	        url: './TemplatePreview/',
		    type: "post",
		    data: "templateName=" + $(this).val()
		});
		console.log($(this).val());
	    request.done(function (response, textStatus, jqXHR){
			//empty response 
	        // show successfully for submit message
	     //   if (response) {
	        	$("#Inputfield_template_preview img").attr('src', response);
			//	$("#TemplatePrevieFrame").attr('srcdoc', response);
	            
	     //   } 
	    });


	    request.fail(function (jqXHR, textStatus, errorThrown){
	        console.error("The following error occurred: " + errorThrown);
	    });

	    request.always(function () {
	    });
	});

	//init wireTabs
	$('#NewsletterModule').WireTabs({
		items : $('#NewsletterModule  > .Inputfields > .InputfieldWrapper'),
		id: 'ProcessExampleTabs',
	});

	//delete page from history
	$('.NewsletterTrashPage').on('click', function(e) {
    	e.preventDefault();
    	$.get($(this).attr("href"));
    	$(this).closest("tr").css( "text-decoration", "line-through" ).fadeOut(1000);
    	return false;
    });

	//show page details from history tab
	$('.NewsletterDetails').on('click', function(e) {
    	e.preventDefault();
    	var url = $(this).attr("href");
    	$.magnificPopup.open({
            items: {
                src: url
            },
            type: 'iframe',
            disableOn: 0,
    	}); 
    	return false;
    });

    //show current newsletter preview
    $('#button_preview').parent().on('click', function(e) {
    	e.preventDefault();
    	var url = $(this).attr("href") + "&template="+ $("#Inputfield_newsletter_template").val() + "&"
    				+ $("form#NewsletterModule").serialize();
    	$.magnificPopup.open({
            items: {
                src: url
            },
            type: 'iframe',
            disableOn: 0,
    	}); 
    	return false;
    });

   // $.trumbowyg.svgPath = ProcessWire.config.iconPath; 
    $('#Inputfield_newsletter_body').trumbowyg({
        resetCss: true,
        btns: [
            ['formatting'],
            ['strong'],
            ['em'],
            ['underline'],
            ['superscript', 'subscript'],
            ['link'],
            ['justifyLeft'],
            ['justifyCenter'],
            ['justifyRight'],
            'btnGrp-lists',
            ['horizontalRule'],
            ['removeformat'],
            ['viewHTML'],
            ['fullscreen']
        ]
    });

});