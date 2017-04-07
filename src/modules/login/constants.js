import ActionUtils from 'jampot/src/common/utils/ActionUtils.js';

export const NAME = 'login';

const actionUtils = new ActionUtils(NAME);

export const FETCH_LOGIN_REDIRECT = actionUtils.generateActionConstant('FETCH_LOGIN_REDIRECT')
export const RECEIVE_LOGIN_REDIRECT = actionUtils.generateActionConstant('RECEIVE_LOGIN_REDIRECT')
export const REQUEST_LOGIN_REDIRECT = actionUtils.generateActionConstant('REQUEST_LOGIN_REDIRECT')
