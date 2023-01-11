import React from 'react'

const labels = [
  {
    type: 'Ahorros',
    color: '#f9c74f',
    percent: 45,
  },
  {
    type: 'Inversión',
    color: 'rgb(54, 162, 235)',
    percent: 20,
  },
  {
    type: 'Gasto',
    color: 'rgb(255, 99, 132)',
    percent: 10,
  },
]

export default function Labels() {
  return (
    <>
      {labels.map((label, idx) => (
        <LabelComponent key={idx} {...label} />
      ))}
    </>
  )
}

function LabelComponent({ color = '', type = '', percent = 0 }) {
  if (!color || !type || !percent) return null
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: color ?? '#f9c74f' }}
        ></div>
        <h3 className="text-md">{type}</h3>
      </div>
      <h3 className="font-bold">{percent}%</h3>
    </div>
  )
}
