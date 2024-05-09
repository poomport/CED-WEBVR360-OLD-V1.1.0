const scriptURL = 'https://script.google.com/macros/s/AKfycbxsDXe_kBuVNqk-CfaC325HVNpsixP1Z1OMADKexU77EqxEAbhCpYxS-Rpg9Hdk4Zw3/exec'
const form = document.forms['myForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'บันทึกข้อมูลเรียบร้อย',
            showConfirmButton: false,
            timer: 1500
        }))
        .catch(error => console.error('Error!', error.message))
        .finally(() => form.reset());
})