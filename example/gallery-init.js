(function() {

	function showGalerie_ID() {
		const $frescoLinks = $('.demonstrations a');
		$frescoLinks.bind('click', function(event) {
			event.preventDefault()
			let clickedIndex = 1;
			$frescoLinks.each((i, el) => {
				if ($(el).is($(event.currentTarget))) {
					clickedIndex = i + 1;
					return;
				}
			})
			Fresco.show(
				[
					{
					 	url: 'images/frans_hals.jpg',
						caption: "Frans Hals, Banquet of the Officers of the St George Civic Guard, 1627",
						download: {
							text: 'Klick mich an!',
							link: 'images/frans_hals.jpg'
						},
						options: {
							thumbnail: 'images/thumbnails/frans_hals.jpg'
						}
					},
					{
						url: 'images/reynolds.jpg',
						caption: "Sir Joshua Reynolds, The Countess of Dartmouth, 1757",
						download: {
							text: 'Klick mich an!',
							link: 'images/reynolds.jpg'
						},
						options: {
							thumbnail: 'images/thumbnails/reynolds.jpg'
						}
					}
				],
				{
					thumbnails: true,
					effects: {
						content: {show: 0, hide: 0},
						spinner: {show: 150, hide: 150},
						window: {show: 440, hide: 300},
						thumbnail: {show: 300, delay: 150},
						thumbnails: {slide: 0}
					}
				},
				clickedIndex
			)
		})
	}

	window.onload = function() {
		showGalerie_ID()
	}
})()
