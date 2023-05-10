function updateCaseNumber(isIncrese, elemenInputId) {
    const prevCaseText = document.getElementById(elemenInputId);
    const prevCaseNumber = parseInt(prevCaseText.value);
    let newCaseNumber;
    if (isIncrese) {
        newCaseNumber = prevCaseNumber + 1;
    }
    else {
        newCaseNumber = prevCaseNumber - 1;
    }
    prevCaseText.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotal(newCaseNumber, totalId) {
    const prevCasetotal = document.getElementById(totalId);
    let newCaseTotal;
    if (totalId == 'case_total') {
        newCaseTotal = newCaseNumber * 59;
        prevCasetotal.innerText = newCaseTotal;
    }
    else if (totalId == 'phone-tatal') {
        newCaseTotal = newCaseNumber * 1219;
        prevCasetotal.innerText = newCaseTotal;
    }

}

function updateSubTotal() {
    const phoneTotal = document.getElementById('phone-tatal');
    const caseTotal = document.getElementById('case_total');
    const newSubTotal = parseInt(phoneTotal.innerText) + parseInt(caseTotal.innerText);
    const preSubTotal = document.getElementById('sub-total');
    preSubTotal.innerText = newSubTotal;


    const newTax = parseInt((newSubTotal / 100) * 15);

    const tax = document.getElementById('tax');
    tax.innerText = newTax;

    const preTotal = document.getElementById('total');
    const newTotal = newSubTotal + newTax;
    preTotal.innerText = newTotal;
}

document.getElementById('case-plus-btn').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true, 'case-input-value');
    updateCaseTotal(newCaseNumber, 'case_total');
    updateSubTotal();
})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false, 'case-input-value');
    updateCaseTotal(newCaseNumber, 'case_total');
    updateSubTotal();

})