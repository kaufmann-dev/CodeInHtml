$(document).ready(function() {
	$('textarea').each(function() {
		$(this).css("height", "0px");
		$(this).css("height", $(this).prop('scrollHeight') + 8);
	});
	$(window).resize(function() {
		$('textarea').each(function() {
			$(this).css("height", "0px");
			$(this).css("height", $(this).prop('scrollHeight') + 8);
		});
	});
	$('button.select').click(function() {
		$(this).parent().children('textarea').select();
	});
});