import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';
import { projectCreateReducer, projectDeleteReducer, projectListReducer, projectUpdateReducer } from './reducers/projectReducers';
import { taskListReducer} from './reducers/taskReducers';
import { sectionOrderListReducer, sectionListReducer ,sectionUpdateTaskReducer,SectionOrderUpdateReducer,sectionUpdateReducer,sectionCreateReducer,sectionDeleteReducer} from './reducers/sectionReducers';
import {noteListReducer,noteCreateReducer,noteUpdateReducer} from './reducers/noteReducers';
import { teamCreateReducer, teamDeleteReducer, teamtListReducer, teamUpdateReducer } from './reducers/teamReducers';
import {taskDeleteReducer,taskCreateReducer} from './reducers/taskReducers';
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    projectList: projectListReducer,
    projectCreate: projectCreateReducer,
    projectUpdate: projectUpdateReducer,
    projectDelete: projectDeleteReducer,
    teamList: teamtListReducer,
    teamCreate: teamCreateReducer,
    teamUpdate: teamUpdateReducer,
    teamDelete: teamDeleteReducer,
    taskList: taskListReducer,
    sectionOrderList: sectionOrderListReducer,
    sectionList: sectionListReducer,
    sectionTasksUpdate: sectionUpdateTaskReducer,
    SectionOrderUpdate:SectionOrderUpdateReducer,
    sectionUpdate:sectionUpdateReducer,
    sectionCreate:sectionCreateReducer,
    sectionDelete:sectionDeleteReducer,
    noteList: noteListReducer,
    noteCreate: noteCreateReducer,
    noteUpdate: noteUpdateReducer,
    taskDelete: taskDeleteReducer,
    taskCreate: taskCreateReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
    ?JSON.parse(localStorage.getItem('userInfo'))
    : null;

const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;