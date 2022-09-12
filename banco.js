/*Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, 
saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e 
número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.*/

class Conta {
    constructor (cont, sal, tip, ag){
        this._conta = cont
        this._saldo = sal    
        this._tipo = tip
        this._agencia = ag         
    }

    deposito(dep){
        this._saldo += dep        
        console.log(`Seu depósito foi realizado com sucesso! Seu novo saldo é R$${this._saldo}`)
    }

    saldo(){
        console.log(`Seu saldo é R$${this._saldo}`)
    }

    saque(saq){
        this._saldo-=saq
        console.log(`Saque realizado com sucesso! Seu novo saldo é R$${this._saldo}`)
    }

    numeroConta(){
        console.log(`O número da conta é ${this._conta}`)
    }
}

var banco = new Conta("001", 100, "poupança", "007")
banco.saldo()
banco.deposito(10)
banco.saque(30)
banco.numeroConta()
