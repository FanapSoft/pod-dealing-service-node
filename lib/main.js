/**
 * @namespace podDealingService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');

/**
 * podDealingService
 * @memberOf podDealingService
 */
class PodDealingService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    let validateResult = utils.validate(schemas.moduleConfig, confObj);
    if (!validateResult.status) {
      throw utils.invalidConfigParam('pod-billing-service');
    }
    super(schemas, apiUrls, confObj.serverType);
    this.clientInfo = {};
    // this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer || 1;
  }

  // #1 apiToken
  /**
   * @description This function search and lists invoices
   * @param {addUserAndBusinessObj} data
   * @returns {Promise}
   */
  addUserAndBusiness (data) {
    let apiName = 'addUserAndBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #2 apiToken
  /**
   * @description This function search and lists invoices
   * @param {listUserCreatedBusinessObj} data
   * @returns {Promise}
   */
  listUserCreatedBusiness (data) {
    let apiName = 'listUserCreatedBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #3 apiToken
  /**
   * @description This function search and lists invoices
   * @param {updateBusinessObj} data
   * @returns {Promise}
   */
  updateBusiness (data) {
    let apiName = 'updateBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #4 apiToken
  /**
   * @description This function search and lists invoices
   * @param {getApiTokenForCreatedBusinessObj} data
   * @returns {Promise}
   */
  getApiTokenForCreatedBusiness (data) {
    let apiName = 'getApiTokenForCreatedBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #5 accessToken
  /**
   * @description This function search and lists invoices
   * @param {rateBusinessObj} data
   * @returns {Promise}
   */
  rateBusiness (data) {
    let apiName = 'rateBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #6 access token
  /**
   * @description This function search and lists invoices
   * @param {commentBusinessObj} data
   * @returns {Promise}
   */
  commentBusiness (data) {
    let apiName = 'commentBusiness';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #7 access token
  /**
   * @description This function search and lists invoices
   * @param { businessFavoriteObj} data
   * @returns {Promise}
   */
  businessFavorite (data) {
    let apiName = 'businessFavorite';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #8 access token or api token
  /**
   * @description This function search and lists invoices
   * @param { userBusinessInfosObj} data
   * @returns {Promise}
   */
  userBusinessInfos (data) {
    let apiName = 'userBusinessInfos';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data);
  }

  // #9 access token or api token
  /**
   * @description This function search and lists invoices
   * @param {commentBusinessListObj} data
   * @returns {Promise}
   */
  commentBusinessList (data) {
    let apiName = 'commentBusinessList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }

  // #10 api token
  /**
   * @description This function search and lists invoices
   * @param {confirmCommentObj} data
   * @returns {Promise}
   */
  confirmComment (data) {
    let apiName = 'confirmComment';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    // data._token_ = data._token_ || this.clientInfo.apiToken;
    data._token_issuer_ = data._token_issuer_ || this.clientInfo.tokenIssuer;

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    headers._token_ = data._token_;
    headers._token_issuer_ = data._token_issuer_;
    delete data._token_;
    delete data._token_issuer_;

    return this.callService(apiName, headers, data, true);
  }
}

module.exports = PodDealingService;
