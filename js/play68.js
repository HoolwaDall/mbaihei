function play68_init() {
	updateShare(0, 0);
}

function goHome() {
	window.location.href = HOME_PATH;
}

function play68_submitScore(highVal, score) {
	updateShareScore(highVal, score);
	setTimeout( function() { show_share(); }, 1500 )
}

function updateShare(highVal, bestScore) {
	imgUrl = 'http://game.play68.com/flappy2048/flappy2048icon.png';
	lineLink = 'http://game.play68.com/flappy2048/';
	descContent = "还可以再残酷虐心吗？！";
	updateShareScore(highVal, bestScore);
	appid = '';
}

function updateShareScore(highVal, bestScore) {
	if(bestScore > 0) {
		shareTitle = "最变态组合《Flappy 2048》我得了" + bestScore + "分，合出了" + highVal + "！";
	}
	else{
		shareTitle = "最变态组合《Flappy 2048》出来啦！自虐的巅峰之作，小伙伴们快来比一比！";
	}
}