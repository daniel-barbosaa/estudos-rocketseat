import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Model, createServer} from 'miragejs'

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
          createdAt: new Date('2024-03-25 09:00:00')
        },
        {
          id: 2,
          title: "IPVA",
          type: 'withdraw',
          amount: 4000,
          createdAt: new Date('2024-02-11 10:00:00')
        }
      ]
    })
  },


  routes () {
    this.namespace = "api"

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
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
