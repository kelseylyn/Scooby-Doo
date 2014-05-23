$('#scooby').hide();
$('#shaggy').hide();
$('#fred').hide();
$('#daphne').hide();
$('#velma').hide();
$('#monsters').hide();

$('li>a').click(function(){
	hideAll();
	
	var divToShow = $(this).attr('target');
	$('#' + divToShow).show();
	
});

$('li').mouseenter(function(){
	$(this).addClass('hilite');
	});

	$('li').mouseleave(function(){
		$(this).removeClass('hilite');
		});
		
function hideAll(){
$('#scooby').hide();
$('#shaggy').hide();
$('#fred').hide();
$('#daphne').hide();
$('#velma').hide();
$('#monsters').hide();
}