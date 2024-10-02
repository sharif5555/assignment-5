document.getElementById('btn-donate-now').addEventListener('click',function(event){
    event.preventDefault();
   
    const addMoney = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoney);

   const balance = document.getElementById('account-balance').innerText;
   const balanceNumber = parseFloat(balance);
   const newBlance = balanceNumber + addMoneyNumber;
   console.log(newBlance);
   document.getElementById('account-balance').innerText = newBlance;

   const updateBalance = document.getElementById('donate-balance').innerText;
   const updateBalanceNumber =parseFloat(updateBalance);
   const remainingBalance = updateBalanceNumber - addMoneyNumber;
   console.log(remainingBalance);
   document.getElementById('donate-balance').innerText = remainingBalance;

   
 

})
