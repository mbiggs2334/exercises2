const INITIAL_STATE = {face: ''};
const faceReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type){
        case 'wwwy':
            return {...state, face: 'ಠ_ಠ'};
        case 'wut':
            return {...state, face: '●︿●'};
        case 'fp':
            return {...state, face: '(－‸ლ)'};
        case 'kp':
                return {...state, face: '(¬‿¬)'};
        default:
            return state
    };
};

const faceStore = Redux.createStore(faceReducer);