
export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_AGE = "CHANGE_AGE";

export const CHANGE_AIRLINE = "CHANGE_AIRLINE";
export const CHANGE_DESTINATION = "CHANGE_DESTINATION";

const userReducer = (state = {name:"Vibhuti",age:25}, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
              ...state,
              name: action.payload ? action.payload.name ? action.payload.name : "Shubham" : "Shubham"
            };
        case CHANGE_AGE:
            return {
              ...state,
              age: action.payload.age ? action.payload.age : state.age
            };
        default:
            return state;
    }
};

export const flightReducer = (state = {from:"Delhi",to:"Mumbai",airline:"UK"}, action) => {
    switch (action.type) {
        case CHANGE_AIRLINE:
            return {
              ...state,
                airline: action.payload ? action.payload.airline ? action.payload.airline : "6E" : "6E"
            };
        case CHANGE_DESTINATION:
            return {
              ...state,
                to: action.payload.to ? action.payload.to : state.to
            };
        default:
            return state;
    }
};

export default userReducer;