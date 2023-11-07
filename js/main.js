var a=parseInt(prompt("entrer a deposit amount"))
var b=parseInt(prompt("entrer a withdraw amount"))


class BankAccount{
    constructor(accNumber,balance){

        this.accNumber=accNumber;
        this.balance=balance;
        // this.withDraw=withDraw;
    }

    deposit(amount){

          this.balance+=amount
        document.write(`your account number is ${this.accNumber} <br> Your deposited amount : ${this.balance} <br>`);
        // this.amount=a
    };

    withDraw(b){
     
        // this.balance-=b;
        document.write(`You withdraw the amount : ${b} <br>`);
    
}

     displayBalance(amounts){
     this.balance-=amounts
        document.write(`Balance:${this.balance} <br>`);
     }
}

let sum=new BankAccount("SBIN0012",a);
sum.deposit(a);


sum.withDraw(b)
sum.displayBalance(b)








