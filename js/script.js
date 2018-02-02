perCirc($('#skills-circle-web-desingn'), 90, 0, "#30bae7");
perCirc($('#skills-circle-html-css'), 75, 0, "#d74680");
perCirc($('#skills-circle-graphic-design'), 70, 0, "#15c7a8");
perCirc($('#skills-circle-ui-ux'), 85, 0, "#eb7d4b");

function perCirc($el, end, i, color) {
	if (end < 0)
		end = 0;
	else if (end > 100)
		end = 100;
	if (typeof i === 'undefined')
		i = 0;
  if (color === 'undefined') {
    color = "#30bae7";
  }
	var curr = (100 * i) / 360;
	$el.find(".section-skills-circle-procent-value").html(Math.round(curr) + "%");
	if (i <= 180) {
		$el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, #dfe8ed 50%),linear-gradient(90deg, #dfe8ed 50%, transparent 50%)');
	} else {
		$el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, '+color+' 50%),linear-gradient(90deg, #dfe8ed 50%, transparent 50%)');
	}
	if (curr < end) {
		setTimeout(function () {
			perCirc($el, end, ++i, color);
		}, 1);
	}
}
