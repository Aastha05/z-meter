const SET_ALL_READINGS = 'GET_ALL_READINGS';
const SET_ACTIVE_READING_INDEX = 'SET_ACTIVE_READING_INDEX';

export function setAllReadings(readings) {
  return {
    type: SET_ALL_READINGS,
    payload: {
      readings
    }
  };
}

export function setActiveReadingIndex(activeReadingIndex) {
  return {
    type: SET_ACTIVE_READING_INDEX,
    payload: {
      activeReadingIndex
    }
  };
}


export function applicationReducer(state = {}, action) {
  switch (action.type) {
    case SET_ALL_READINGS: {
      const { readings } = action.payload;
      return {
        ...state,
        readings
      };
    }
    case SET_ACTIVE_READING_INDEX: {
      const { activeReadingIndex } = action.payload;
      return {
        ...state,
        activeReadingIndex
      };
    }
    default: return state;
  }
}