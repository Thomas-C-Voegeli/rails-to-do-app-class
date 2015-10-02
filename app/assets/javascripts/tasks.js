$(document).ready(function() {
	console.log("INSIDE TASKS")
	bindEventListeners();
})

var bindEventListeners = function(){
	$('.new_task').on('submit', createTask)
	$('.list').on('click', "a[data-method='delete']", deleteTask);
	$('.list').on('click', "a[data-method='patch']", completeTask);
}

var createTask = function(event){
	event.preventDefault()
	var data = $(this).serialize()
	var url = $(this).attr('action')
	var method = $(this).attr('method')
	addTaskRequest(method, url, data)
}

var deleteTask = function(event){
	console.log("HIT DELETE");
	event.preventDefault();
	event.stopPropagation();
}

var completeTask = function(event){
	console.log("HIT COMPLETE")
	event.preventDefault()
	event.stopPropagation();
}

var addTaskRequest = function(method, url, data){

	$.ajax({

			method: method,
			url: url,
			data: data

	})

	.done(function(response){
		$('.list').append(response)
		$('#new_task').trigger('reset')
	})

	.fail(function(response){
		$('.flash-error-area').append("<p>description must be at least 6 characters in length</p>")
	})
}



