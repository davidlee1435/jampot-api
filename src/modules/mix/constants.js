import ActionUtils from 'jampot/src/common/utils/ActionUtils.js';
export const NAME = 'mix';

const actionUtils = new ActionUtils(NAME);

export const FETCH_ACCOUNT_MIXES = actionUtils.generateActionConstant('FETCH_ACCOUNT_MIXES');
export const RECEIVE_ACCOUNT_MIXES = actionUtils.generateActionConstant('RECEIVE_ACCOUNT_MIXES');
export const REQUEST_ACCOUNT_MIXES = actionUtils.generateActionConstant('REQUEST_ACCOUNT_MIXES');
