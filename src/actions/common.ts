import { IAction, IAppState, TAppDispatchThunk } from 'store'
import RequestService from '../api/RequestService'

const MODULE_NAME = 'COMMON'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const STOP_FETCHING = `${MODULE_NAME}/STOP_FETCHING`
export const SET_CHART_SERIES = `${MODULE_NAME}/SET_CHART_SERIES`

export const startFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: START_FETCHING,
  })
}
export const stopFetching = (): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  dispatch({
    type: STOP_FETCHING,
  })
}

export const getChartSeries = (currency : number ): any => async (dispatch: TAppDispatchThunk<never>): Promise<void> => {
  const chartSeries = await RequestService.getChartSeries(currency);
  
  dispatch({
    type: SET_CHART_SERIES,
    payload: chartSeries
  });
  
};

const setChartSeries = data => ({
  type: SET_CHART_SERIES,
  data
});
