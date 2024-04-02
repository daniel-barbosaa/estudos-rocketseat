import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Factory, Model, createServer} from 'miragejs'

createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelancer",
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2024-03-25 09:00:00')
        },
        {
          id: 2,
          title: "IPVA",
          type: 'withdraw',
          amount: 4000,
          category: 'Carro',
          createdAt: new Date('2024-02-11 10:00:00')
        }
      ]
    })
  },


  routes () {
    this.namespace = "api"

    this.get('/transactions', (schema) => {
      return schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
    })

    interface Transaction {
      id: number,
      title: string,
      amount: number,
      type: string,
      category: string
      createdAt: string
  
  }

    this.patch('/transactions/:id', (schema, request) => {
      const id = JSON.parse(request.params.id)
      const attrs = JSON.parse(request.requestBody) as Partial<Transaction>

      let findItemThisId = schema.find('transaction', id)

      if(findItemThisId){
        findItemThisId.update(attrs)
        return schema.all('transaction')
      }else {
        return {error: 'Esse id não corresponde a uma transação no banco de dados!'}
      } 
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
