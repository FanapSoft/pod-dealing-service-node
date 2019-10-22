/**
 * @namespace podDealingService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

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
    super(schemas, apiUrls, confObj, 'pod-dealing-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken || null;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer;
  }

  // #1 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.tags && Array.isArray(data.tags)) {
      data.tags = data.tags.join(',');
    }

    if (data.tagTrees && Array.isArray(data.tagTrees)) {
      data.tagTrees = data.tagTrees.join(',');
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { guildCode: true }, true);
  }

  // #2 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { guildCode: true }, true);
  }

  // #3 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.tags && Array.isArray(data.tags)) {
      data.tags = data.tags.join(',');
    }

    if (data.tagTrees && Array.isArray(data.tagTrees)) {
      data.tagTrees = data.tagTrees.join(',');
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { guildCode: true }, true);
  }

  // #4 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #5 Access Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #6 Access Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #7 Access Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #8 Access Token | API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { id: true }, true);
  }

  // #9 Access Token | API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #10 API Token
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

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #11 API Token
  /**
   * @description This function search and lists invoices
   * @param {confirmCommentObj} data
   * @returns {Promise}
   */
  unconfirmComment (data) {
    let apiName = 'unconfirmComment';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #12 API Token
  /**
   * @description This function adds a dealer for a business
   * @param {addDealerObj} data
   * @returns {Promise}
   */
  addDealer (data) {
    let apiName = 'addDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #13 API Token
  /**
   * @description This function lists the dealers
   * @param {dealerListObj} data
   * @returns {Promise}
   */
  dealerList (data) {
    let apiName = 'dealerList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #14 API Token
  /**
   * @description This function enables a dealer
   * @param {enableDealerObj} data
   * @returns {Promise}
   */
  enableDealer (data) {
    let apiName = 'enableDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #15 API Token
  /**
   * @description This function disables a dealer
   * @param {disableDealerObj} data
   * @returns {Promise}
   */
  disableDealer (data) {
    let apiName = 'disableDealer';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #16 API Token
  /**
   * @description This function list dealing businesses
   * @param {businessDealingListObj} data
   * @returns {Promise}
   */
  businessDealingList (data) {
    let apiName = 'businessDealingList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #17 API Token
  /**
   * @description This function gives the permission to a dealer for a specific product
   * @param {addDealerProductPermissionObj} data
   * @returns {Promise}
   */
  addDealerProductPermission (data) {
    let apiName = 'addDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #18 API Token
  /**
   * @description This function lists the dealer product list
   * @param {dealerProductPermissionListObj} data
   * @returns {Promise}
   */
  dealerProductPermissionList (data) {
    let apiName = 'dealerProductPermissionList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #19 API Token
  /**
   * @description This function lists dealing product list
   * @param {dealingProductPermissionListObj} data
   * @returns {Promise}
   */
  dealingProductPermissionList (data) {
    let apiName = 'dealingProductPermissionList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #20 API Token
  /**
   * @description This function diasbles dealer permission for a product
   * @param {disableDealerProductPermissionObj} data
   * @returns {Promise}
   */
  disableDealerProductPermission (data) {
    let apiName = 'disableDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #21 API Token
  /**
   * @description This function enables dealer permission for a product
   * @param {enableDealerProductPermissionObj} data
   * @returns {Promise}
   */
  enableDealerProductPermission (data) {
    let apiName = 'enableDealerProductPermission';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    data = utils.trimNestedObject(data);

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;
    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }
}

module.exports = PodDealingService;
