import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List'

export default function Form() {
  const { register, resetField, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
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
            <option value="investment" defaultValue>
              Inversión
            </option>
            <option value="expense">Gasto</option>
            <option value="saving">Ahorro</option>
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
