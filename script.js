document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let form = event.target;
    let alertError = document.getElementById('alert-error');
    let isValid = true;

    let inputs = form.querySelectorAll('input[required], select[required]');

    inputs.forEach(input => {
        if (!input.value || input.value.trim() === "") {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        alertError.classList.remove('d-none');
        window.scrollTo(0, 0);
    } else {
        alertError.classList.add('d-none');
        alert("¡Formulario enviado con éxito!");
        form.reset();
    }
});