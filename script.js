document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const form = event.target;
    const alertError = document.getElementById('alert-error');
    let isValid = true;

    const inputs = form.querySelectorAll('input[required], select[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('is-invalid');
            isValid = false;
        } else {
            input.classList.remove('is-invalid');
        }
    });

    if (!isValid) {
        alertError.classList.remove('d-none');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        alertError.classList.add('d-none');
        alert("¡Formulario enviado correctamente!");
        form.reset();
    }
});