// console.log('This is Project 4 js');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#failure').hide();
$('#success').hide();


// console.log(name, email, phone);
name.addEventListener('blur', () => {
    // console.log('Name is blured');
    //validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your name is valid');
        name.classList.remove('is-invalid')
        validName = true;
    }
    else {
        // console.log('Your name is valid');
        name.classList.add('is-invalid')
        validName = false;
    }

})
email.addEventListener('blur', () => {
    // console.log('Email is blured');
    //validate Email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        // console.log('Your email is valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})
phone.addEventListener('blur', () => {
    // console.log('phone is blured');
    //validate phone here
    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    // console.log(regex, str);
    if (regex.test(str)) {
        // console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        // console.log('Your phone is valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    console.log(validEmail, validName, validPhone);

    e.preventDefault();

    // Submit your form here
    if (validEmail && validName && validPhone) {
        // console.log('User, email and phone is valid. Submitting the form');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#success').css({ 'display': 'block' });
        $('#failure').css({ 'display': 'none' });

        // Reset form
        $("#subform").trigger("reset");
    }
    else {
        // console.log('one of User, email and phone is not valid. hence not submitting the form. Please correct the error and try again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').css({ 'display': 'none' });
        $('#failure').css({ 'display': 'block' });

    }
})


// alery hide and show
$(document).on('click', '.btn-close', function () {
    $(this).parents('.alert').hide();
}); 