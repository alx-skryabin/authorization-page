
(function () {
	$('.auth-container_form').on('submit', (e) => {
		e.preventDefault();
		let form = e.target;
		let typeForm = form.getAttribute('data-type'); 
		let dataForm = {};

		if (typeForm === 'auth') {
			dataForm = {
				type: typeForm,
				login: form[0].value,
				pass: form[1].value
			};
		}
		else {
			dataForm = {
				type: typeForm,
				mail: form[0].value
			};
		}

		console.log("dataForm", dataForm);
	});
})()