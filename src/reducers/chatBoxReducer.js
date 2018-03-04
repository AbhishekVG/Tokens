import { MESSAGES_SYNC } from '../constants/Contants';
import _ from 'lodash';

const INITIAL_STATE = [];

export default (state=INITIAL_STATE, action) => {
    const object = action.payload;
    switch(action.type){
        case MESSAGES_SYNC:
            return object instanceof Object ? Object.values(object): state
        default:
            return state;
    }
}