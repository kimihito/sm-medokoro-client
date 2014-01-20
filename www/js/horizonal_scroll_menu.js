$(function () {
	$('.movie-nav .movie-nav-tab').click(function () {
		var statuses = $('.movie-nav .movie-nav-tab').map(function () {
			return $(this).data('status');
		}).toArray().join(' ');
		//カテゴリの下線部分の色を変更する
		$('.movie-nav').removeClass(statuses);
		$('.movie-nav').addClass($(this).data('status'));
		//アクティブであるカテゴリの高さを変更する
		$('.movie-nav .movie-nav-tab').removeClass('is-active');
		$(this).addClass('is-active');
		//アクティブのときに表示されるカテゴリ
		associateCategorytoList(this);
	});

	//カテゴリとlistviewを紐付ける
	function associateCategorytoList(element){
		$('.movielist').css('display', 'none');
		if($(element).hasClass('youtube')){
			$('#youtube-content').css('display', 'block');
		}else if($(element).hasClass('niconico')){
			$('#niconico-content').css('display', 'block');
		}else if($(element).hasClass('vimeo')){
			$('#vimeo-content').css('display', 'block');
		}else if($(element).hasClass('fc2')){
			$('#fc2-content').css('display', 'block');
		}else if($(element).hasClass('all')){
			$('#top-content').css('display', 'block');
		}else {
			console.log('no element');
		}
	}

});