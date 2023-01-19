import 'boxicons'
import React from 'react'
import api from '../store/api'
import Spinner from './Spinner'

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
  const [deleteTransaction] = api.useDeleteTransactionMutation()
  const deleteHandler = (e) => {
    if (!e.target.dataset.id) return
    deleteTransaction(e.target.dataset.id)
  }
  let Transactions
  if (isFetching) {
    Transactions = <Spinner />
  } else if (isSuccess) {
    Transactions = data.map((c, idx) => (
      <Transaction key={idx} category={c} deleteHandler={deleteHandler} />
    ))
  } else if (isError) {
    Transactions = <div>Error</div>
  }
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">Historial</h1>
      {Transactions}
    </div>
  )
}

function Transaction({ category, deleteHandler }) {
  if (!category) return null
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? '#e5e5e5'}` }}
    >
      <button className="px-3" onClick={deleteHandler}>
        <box-icon
          data-id={category._id ?? ''}
          name="trash"
          size="15px"
          color={category.color ?? '#e5e5e5'}
        />
      </button>
      <span className="block w-2/3 text-xs">{category.name}</span>
      <span className="block w-1/3 text-xs">${category.amount.toFixed(2)}</span>
    </div>
  )
}
