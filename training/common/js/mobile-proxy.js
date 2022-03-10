/* ユーザーエージェント取得 */
var userAgent = window.navigator.userAgent.toLowerCase();

if((navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1) || navigator.userAgent.indexOf('A1_07') > 0 || navigator.userAgent.indexOf('SC-01C') > 0 || navigator.userAgent.indexOf('iPad') > 0){
	document.write('<meta name="viewport" content="width=1245">');
} else if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)){
	document.write('<meta name="viewport" content="width=device-width">');
}

