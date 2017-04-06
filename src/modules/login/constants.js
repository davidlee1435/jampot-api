import ActionUtils from 'jampot/src/common/utils/ActionUtils.js';

export const NAME = 'login';

const actionUtils = new ActionUtils(NAME);

export const FETCH_LOGIN = actionUtils.generateActionConstant('FETCH_LOGIN')
export const RECEIVE_LOGIN = actionUtils.generateActionConstant('RECEIVE_LOGIN')
export const REQUEST_LOGIN = actionUtils.generateActionConstant('REQUEST_LOGIN')
