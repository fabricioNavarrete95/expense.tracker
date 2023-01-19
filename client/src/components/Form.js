import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List'
import api from '../store/api'

export default function Form() {
  const { register, handleSubmit, resetField } = useForm()
  const [addTransaction] = api.useAddTransactionMutation()
  const onSubmit = async (data) => {
    try {
      if (!data) return {}
      await addTransaction(data).unwrap()
    } catch (error) {
      if (error.data) {
        alert(error.data.message)
        return
      }
      console.error(error)
    } finally {
      resetField('name')
      resetField('amount')
    }
  }
  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transacción</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register('name')}
              placeholder="Salario, alquiler de vivienda, factura"
              className="form-input"
            />
          </div>
          <select className="form-input" {...register('type')}>
            <option value="Inversion" defaultValue>
              Inversión
            </option>
            <option value="Gasto">Gasto</option>
            <option value="Ahorros">Ahorros</option>
          </select>
          <div className="input-group">
            <input
              type="number"
              {...register('amount')}
              placeholder="Monto"
              className="form-input"
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full">
              Guardar Transacción
            </button>
          </div>
        </div>
      </form>
      <List />
    </div>
  )
}
