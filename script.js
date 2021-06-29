var total = 0;
var income = 0;
var expense = 0;
localStorage.clear();

document.addEventListener("click",function(){
    event.preventDefault();
    var incomeName = document.getElementById('text').value
    var amount = document.getElementById('amount').value
    console.log(income);
    console.log(amount);
    amount = parseInt(amount)
    localStorage.setItem(income,amount)
    if(amount>0){
        total  += amount;
        income += amount;
    }
    else{
        total += amount;
        expense -= amount;
    }
    document.getElementById('money-plus').innerHTML = '+$ '+ income;
    document.getElementById('money-minus').innerHTML = '-$ '+ expense;
    document.getElementById('balance').innerHTML = '$ '+total;
    var li = document.createElement('li');
    var txt = document.createTextNode(incomeName);
    li.appendChild(txt);
    if(amount > 0){
        li.className = 'plus'
    }
    else{
        li.className = 'minus'
    }
    document.getElementById('list').appendChild(li);
    var span = document.createElement("SPAN");
    var amount = document.createTextNode(amount);
    span.appendChild(amount);
    li.appendChild(span);
})