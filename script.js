
let loanAmount = document.getElementById("amount");
let interestRate = document.getElementById("Interest");
let loanDuration = document.getElementById("loantenure");
let submit = document.getElementById("calculate");

submit.addEventListener('click', (e) => {
    e.preventDefault();
    calculateEMI();
    loanAmount.value=""
    interestRate.value=""
    loanDuration.value=""
});

function calculateEMI() {
    let isYear = document.getElementById("year").checked;
    let isMonth = document.getElementById("month").checked;
    let noOfMonths = 0;

    if (!isYear && !isMonth) {
        alert("Please select loan tenure type -> month or year");
    } else {
        if(isYear){
            noOfMonths = loanDuration.value * 12;
        } else {
            noOfMonths = loanDuration.value;
        }

        let r = parseFloat(interestRate.value)/12/100;
        let p = parseFloat(loanAmount.value);
        let n = noOfMonths;
        
        let EMI = (p * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
        let totalInterest = (EMI * n) - p;
        let totalPayment = totalInterest + p;

        document.getElementById("emi").innerText = parseInt(EMI);
        document.getElementById("totalInterest").innerText = parseInt(totalInterest);
        document.getElementById("totalpayment").innerText = parseInt(totalPayment);
    }
}
