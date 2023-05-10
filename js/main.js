


// phone btn   ----------------------------------------------------------------
// ----------------------------------------------------------------------------

document.getElementById('phone-plus-btn').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true, 'phone-input-value');
    updateCaseTotal(newCaseNumber, 'phone-tatal');
    updateSubTotal();

})

document.getElementById('phone-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'phone-input-value');
    updateCaseTotal(newCaseNumber, 'phone-tatal');
    updateSubTotal();


})