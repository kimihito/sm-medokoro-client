$(function () {
	$('.movie-nav .movie-nav-tab').click(function () {
		var statuses = $('.movie-nav .movie-nav-tab').map(function () {
			return $(this).data('status');
		}).toArray().join(' ');
		$('.movie-nav').removeClass(statuses).addClass($(this).data('status'));
		$('.movie-nav .movie-nav-tab').removeClass('is-active');
		$(this).addClass('is-active');
	});
});