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
					 	url: 'https://placeimg.com/1024/800/arch',
						caption: "Frans Hals, Banquet of the Officers of the St George Civic Guard, 1627",
						options: {
							thumbnail: 'https://placeimg.com/240/240/arch',
							download: {
								text: 'Klick mich an!',
								link: 'https://placeimg.com/1024/800/arch'
							}
						}
					},
					{
						url: 'https://placeimg.com/800/1024/nature',
						caption: "Sir Joshua Reynolds, The Countess of Dartmouth, 1757",
						options: {
							thumbnail: 'https://placeimg.com/240/240/nature',
							download: {
								text: 'Klick mich an!',
								link: 'https://placeimg.com/1024/800/nature'
							}
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
