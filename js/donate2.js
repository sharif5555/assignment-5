document.getElementById('btn-donate-now2').addEventListener('click',function(event){
    event.preventDefault();
   
    const addMoney = document.getElementById('input-add-money2').value;
    const addMoneyNumber = parseFloat(addMoney);

   const balance = document.getElementById('account-balance2').innerText;
   const balanceNumber = parseFloat(balance);
   const newBlance = balanceNumber + addMoneyNumber;
   console.log(newBlance);
   document.getElementById('account-balance2').innerText = newBlance;

   const updateBalance = document.getElementById('donate-balance').innerText;
   const updateBalanceNumber =parseFloat(updateBalance);
   const remainingBalance = updateBalanceNumber - addMoneyNumber;
   console.log(remainingBalance);
   document.getElementById('donate-balance').innerText = remainingBalance;

   if(addMoney <= 0 || NaN ){
    alert('Failed to the Donate')
   }
  
 

})