import React from 'react'
import 'boxicons'

const categories = [
  {
    name: 'Ahorros',
    color: '#f9c74f',
  },
  {
    name: 'Inversión',
    color: 'rgb(54, 162, 235)',
  },
  {
    name: 'Gasto',
    color: 'rgb(255, 99, 132)',
  },
]

export default function List() {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">Historial</h1>
      {categories.map((c, idx) => (
        <Transaction key={idx} category={c} />
      ))}
    </div>
  )
}

function Transaction({ category }) {
  if (!category) return null
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color ?? '#e5e5e5'}` }}
    >
      <button className="px-3">
        <box-icon
          name="trash"
          size="15px"
          color={category.color ?? '#e5e5e5'}
        />
      </button>
      <span className="block w-full">{category.name}</span>
    </div>
  )
}
