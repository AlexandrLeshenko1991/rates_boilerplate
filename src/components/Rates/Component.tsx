import React, { useEffect } from 'react'
import Chart from "react-apexcharts";
import { TReduxProps } from './Container'
import { StyledContainer } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { IAppState } from 'src/store/models'
import Loader from 'components/Loader/Loader'
import { START_FETCHING, getChartSeries, startFetching, stopFetching } from 'actions/common'

export type TComponentProps = {
} & TReduxProps

const Rates: React.FC<TComponentProps> = () => {
  const dispatch = useDispatch();
  const fetching = useSelector((state: IAppState) => state.common.fetching);

  const chartOptions = {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  }

  const chartSeries = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
  const type = 'line'

  useEffect(() => {
    dispatch(getChartSeries(145))
  }, []);


  return (
    <StyledContainer>
      {fetching ? <Loader /> : <>
            {
                <Chart
                options={chartOptions}
                series={chartSeries}
                type="line"
                width="500"
              />
            }
        </>
      }
    </StyledContainer>
  )
}

export default Rates