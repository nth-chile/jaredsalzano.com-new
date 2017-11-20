$(document).ready(function() {
	//canvii
	const race_cv = document.getElementById('race-cv');
	const gender_cv = document.getElementById('gender-cv');
	const english_cv = document.getElementById('english-cv');

	const race = {
		canvas: race_cv,
		lines: [
			{
				from: {x: 245, y: 115},
				to: {x: 245, y: 135}
			},
			{
				from: {x: 187, y: 122},
				to: {x: 200, y: 145}
			},
			{
				from: {x: 130, y: 155},
				to: {x: 150, y: 175}
			},
			{
				from: {x: 75, y: 245},
				to: {x: 100, y: 250}
			},
			{
				from: {x: 90, y: 360},
				to: {x: 115, y: 345}
			},
			{
				from: {x: 320, y: 340},
				to: {x: 360, y: 380}
			}
		]
	};
	const gender = {
		canvas: gender_cv,
		lines: [
			{
				from: {x: 295, y: 55},
				to: {x: 295, y: 80}
			},
			{
				from: {x: 155, y: 180},
				to: {x: 210, y: 210}
			},
			{
				from: {x: 380, y: 300},
				to: {x: 430, y: 340}
			}
		]
	};
	const english = {
		canvas: english_cv,
		lines: [
			{
				from: {x: 120, y: 225},
				to: {x: 170, y: 225}
			},
			{
				from: {x: 350, y: 225},
				to: {x: 400, y: 225}
			}
		]
	};


	const canvii = [race, gender, english];

	canvii.forEach(function(item, i, arr) {
		draw(item);
	});

	function draw(item) {
		const canvas = item.canvas;
		if (canvas.getContext) {
			var ctx = canvas.getContext('2d');

			item.lines.forEach(function(line) {
				ctx.beginPath();
				ctx.moveTo(line.from.x, line.from.y);
				ctx.lineTo(line.to.x, line.to.y);
				ctx.strokeStyle = '#5e6481';
				ctx.stroke();
			});
		}
	}

});