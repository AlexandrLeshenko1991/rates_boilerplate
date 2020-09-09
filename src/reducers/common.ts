import { AnyAction } from 'redux'
import {
  START_FETCHING,
  STOP_FETCHING,
  SET_CHART_SERIES
} from 'actions/common'

const initState = {
  fetching: true,
  chartSeries: []
}

export interface ICommonState {
  fetching: boolean,
  chartSeries?: string[]
}

function commonReducer(state: ICommonState = initState, { type, payload = null }: AnyAction) {
  switch (type) {
    case START_FETCHING: {
      return {...state,
        fetching: true,
      }
    }
    case STOP_FETCHING: {
      return {...state,
        fetching: false,
      }
    }
    case SET_CHART_SERIES: {
      return {...state,
        chartSeries: payload,
        fetching: false,
      }
    }
    default:
      return state
  }
}



export default commonReducer
