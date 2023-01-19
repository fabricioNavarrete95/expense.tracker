import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Labels from './Labels'
import Spinner from './Spinner'
import { chartData, getTotal } from '../helper/helper'
import api from '../store/api'

Chart.register(ArcElement)

export default function Graph() {
  const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
  let graphData
  if (isFetching) {
    graphData = <Spinner />
  } else if (isSuccess) {
    graphData = <Doughnut {...chartData(data)} />
  } else if (isError) {
    graphData = <div>Error</div>
  }
  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4 font-bold title">
            Total{' '}
            <span className="block text-3xl text-emerald-400">
              {isFetching && '0.00'}
              {isSuccess && `$ ${getTotal(data).toFixed(2)}`}
            </span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  )
}
