function updateCaseNumber(isIncrese) {
    const prevCaseText = document.getElementById('case-input-value');
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
function updateCaseTotal(newCaseNumber) {
    const newCaseTotal = newCaseNumber * 59;
    console.log(parseInt(newCaseNumber));
    const prevCasetotal = document.getElementById('case_total');
    prevCasetotal.innerText = newCaseTotal;
}


document.getElementById('case-plus-btn').addEventListener('click', function () {

    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotal(newCaseNumber);
})

document.getElementById('case-minus-btn').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotal(newCaseNumber);

})