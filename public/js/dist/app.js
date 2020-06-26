// GET REQUEST - this 'gets' a page view from the server/backend and displays it on the client/frontend through the browser
// $(function() {
// 	$('.btn1').on('click', function() {
// 		var request = $.ajax({
// 			url: 'https://jsonplaceholder.typicode.com/posts',
// 			method: 'GET'
// 			// data: { id: 'menuId' },
// 			// dataType: 'html'
// 		});

// 		request.done(function(msg) {
// 			console.log(msg);
// 		});

// 		request.fail(function(textStatus) {
// 			alert('Request failed.' + textStatus);
// 		});
// 	});
// });
// POST - this posts user input into the server/database
// $(function() {
// 	$('.btn1').on('click', function() {
// 		var request = $.ajax({
// 			url: 'https://jsonplaceholder.typicode.com/posts',
// 			method: 'POST',
// 			data: {
// 				title: 'title',
// 				body:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime officiis harum assumenda omnis expedita quibusdam molestiae repellendus facilis pariatur voluptatem fuga quae inventore sequi id ipsam alias minima, sed cum!',
// 				userId: 20
// 			}
// 			// dataType: 'html'
// 		});

// 		request.done(function(msg) {
// 			console.log(msg);
// 		});

// 		request.fail(function(textStatus) {
// 			alert('Request failed.' + textStatus);
// 		});
// 	});
// });
// // PUT - this acts similarly to POST but instead it updates an entire existing post - a new verb PATCH - acts like this but replaces one property or method without having to replace the entire post
// $(function() {
// 	$('.btn1').on('click', function() {
// 		var request = $.ajax({
// 			url: 'https://jsonplaceholder.typicode.com/posts',
// 			method: 'PUT',
// 			data: {
// 				title: 'title',
// 				body:
// 					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime officiis harum assumenda omnis expedita quibusdam molestiae repellendus facilis pariatur voluptatem fuga quae inventore sequi id ipsam alias minima, sed cum!',
// 				userId: 30
// 			}
// 			// dataType: 'html'
// 		});

// 		request.done(function(msg) {
// 			console.log(msg);
// 		});

// 		request.fail(function(textStatus) {
// 			alert('Request failed.' + textStatus);
// 		});
// 	});
// });
// // DELETE
$(function() {
	$('.btn1').on('click', function() {
		var request = $.ajax({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'DELETE'
			// data: { id: 'menuId' },
			// dataType: 'html'
		});

		request.done(function(msg) {
			console.log(msg);
		});

		request.fail(function(textStatus) {
			alert('Request failed.' + textStatus);
		});
	});
});
