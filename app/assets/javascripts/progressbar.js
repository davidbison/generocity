var level = function() {
	var totalCount = [];
	var finalnumber = 0;
	var count = $('#amount li').length;
	$('#test li').each(function() {
		totalCount.push(parseFloat($(this).html()));
		finalnumber = eval(totalCount.join("+"));
	});
	return ((finalnumber/10) + count) + "%";
}


var hovers = function() {
	$('li').hover(function(){
		$(this).fadeOut(100);
		$(this).fadeIn(500);
	})
}



$(document).ready(function() {
	if ($("#bar").length > 0) {
		$("#bar").css({'background-image': 'none', 'background-color': 'orange'});
		$("#bar").attr("aria-valuenow", level());
		$("#bar").css("width", level());
		$("#bar").append(level());
		var x = $('.mt1').attr('value');
		var sum = [];
		var val = 0;
		$('#test li').each(function() {
			var y = sum.push(parseFloat($(this).html()) );
		});
		val = eval(sum.join("+")).toFixed(2);
		$('#total').append(val + " dollars! YOU'RE A SUPERSTAR!");
			$('a.button').on('click', function() {
			var x = $('#center option:selected').text();
			var ident = $('#asin').html();
			var quant = $('#quantity').html();
		})
	}
})