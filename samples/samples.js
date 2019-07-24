const PodDealingService = require('../lib/main');

// Variable Declaration & Initialization
let podDealingService = new PodDealingService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: addUserAndBusiness
let addUserAndBusinessData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN',
  username: 'USERNAME',
  businessName: 'NAME',
  email: 'TEST@TEST.COM',
  guildCode: ['GUILDCODE'],
  country: 'COUNTRY',
  state: 'STATE',
  city: 'CITY',
  address: 'ADDRESS',
  description: 'DESCRIPTION',
  agentFirstName: 'AGENT FIRST NAME',
  agentLastName: 'AGENT LAST NAME',
  agentCellphoneNumber: '09151111111'

  // ------ OPTIONAL ------
  // _token_issuer_: 1
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA WITHOUT IR'
  // nationalCode: 'CODE'
  // economicCode: 'CODE'
  // registrationNumber: 'REGISTER NUMBER'
  // cellphone: 'MOBILE'
  // phone: 'PHONE'
  // fax: 'FAX'
  // postalCode: 'POSTAL CODE'
  // description: 'DESCRIPTION'
  // newsReader: 'NEWS READER'
  // logoImage: 'LOGO'
  // coverImage: 'COVER'
  // tags: 'TAG1,TAG2'
  // tagTrees: 'TREE1,TREE2'
  // tagTreeCategoryName: 'CATEGORY'
  // link: 'LINK'
  // lat: 0
  // lng: 0
  // agentNationalCode: 'CODE'
};

podDealingService.addUserAndBusiness(addUserAndBusinessData)
  .then(function (result) {
    console.log('function: addUserAndBusiness ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addUserAndBusiness ============>', error);
  });

// *****************************************************************
// #2
// function: listUserCreatedBusiness
let listUserCreatedBusinessData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN'

  // ------ OPTIONAL ------
  // _token_issuer_: 1
  // bizId: ID
  // guildCode: 'GUILD CODE'
  // offset: OFFSET
  // size: SIZE
  // query: 'query'
  // tags: ['TAG1', 'TAG2']
  // tagTrees: ['TREE1', 'TREE2']
  // active: 'ACTIVE'
  // country: 'COUNTRY'
  // city: 'CITY'
  // ssoId: ID
  // username: 'USERNAME'
  // businessName: 'BUSINESS NAME'
  // nationalCode: 'CODE'
  // email: 'TEST@TEST.COM'
  // cellphone: 'MOPBILE'
};
podDealingService.listUserCreatedBusiness(listUserCreatedBusinessData)
  .then(function (result) {
    console.log('function: listUserCreatedBusiness ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error listUserCreatedBusiness ============>', error);
  });

// *****************************************************************
// #3
// function: updateBusiness
let updateBusinessData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN',
  bizId: 0,
  businessName: 'NAME2',
  guildCode: ['GUILD CODE'],
  country: 'COUNTRY',
  state: 'STATE',
  city: 'CITY',
  address: 'ADDRESS',
  description: 'DESCRIPTION'

  // ------ OPTIONAL ------
  // _token_issuer_: 1
  // companyName: 'COMPANY NAME'
  // shopName: 'NAME'
  // shopNameEn: 'NAME'
  // website: 'SITE'
  // dateEstablishing: 'YYYY/MM/DD'
  // firstName: 'FIRST NAME'
  // lastName: 'LAST NAME'
  // sheba: 'SHEBA'
  // nationalCode: 'CODE'
  // economicCode: 'CODE'
  // email: 'TEST@TEST.COM'
  // registrationNumber: 'REGISTRETION NUMBER'
  // cellphone: 'MOBILE'
  // phone: 'PHONE'
  // fax: 'FAX'
  // postalCode: 'CODE'
  // changeLogo: true | false
  // changeCover: true | false
  // logoImage: 'IMAGE'
  // coverImage: 'IMAGE'
  // tags: 'TAG1, TAG2'
  // tagTrees: 'TREE1, TREE2'
  // tagTreeCategoryName: 'CATEGORY'
  // link: 'LINK'
  // lat: LAT
  // lng: LNG
  // agentFirstName: 'FIRST NAME'
  // agentLastName: 'LAST NAME'
  // agentCellphoneNumber: 'MOBILE'
  // agentNationalCode: 'CODE'
  // changeAgent: true | false
};
podDealingService.updateBusiness(updateBusinessData)
  .then(function (result) {
    console.log('function: createPreInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error createPreInvoice ============>', error);
  });

// *****************************************************************
// #4
// function: getApiTokenForCreatedBusiness
let getApiTokenForCreatedBusinessData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN',
  businessId: 0

  // ------ OPTIONAL ------
  // _token_issuer_: 1
};

podDealingService.getApiTokenForCreatedBusiness(getApiTokenForCreatedBusinessData)
  .then(function (result) {
    console.log('function: getApiTokenForCreatedBusiness ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getApiTokenForCreatedBusiness ============>', error);
  });

// *****************************************************************
// #5
// function: rateBusiness
let rateBusinessData = {
  // ------ REQUIRED ------
  _token_: 'ACCESS TOKEN',
  businessId: 0,
  rate: 0

  // ------ OPTIONAL ------
  // _token_issuer_: 1
};

podDealingService.rateBusiness(rateBusinessData)
  .then(function (result) {
    console.log('function: rateBusiness ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error rateBusiness ============>', error);
  });

// *****************************************************************
// #6
// function: commentBusiness
let commentBusinessData = {
  // ------ REQUIRED ------
  _token_: 'ACCESS TOKEN',
  businessId: 0,
  text: 'THIS IS MY COMMENT!!!'

  // ------ OPTIONAL ------
  // _token_issuer_: 1

};

podDealingService.commentBusiness(commentBusinessData)
  .then(function (result) {
    console.log('function: commentBusiness ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error commentBusiness ============>', error);
  });

// *****************************************************************
// #7
// function: businessFavorite

let businessFavoriteData = {
  // ------ REQUIRED ------
  _token_: 'ACCESS TOKEN',
  businessId: 0,
  disfavorite: false // or true

  // ------ OPTIONAL ------
  // _token_issuer_: 1
};
podDealingService.businessFavorite(businessFavoriteData)
  .then(function (result) {
    console.log('function: getInvoiceListAsFile ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error getInvoiceListAsFile ============>', error);
  });

// *****************************************************************
// #8
// function: userBusinessInfos

let userBusinessInfosData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN or ACCESS TOKEN',
  id: [0]

  // ------ OPTIONAL ------
  // _token_issuer_: 1
};

podDealingService.userBusinessInfos(userBusinessInfosData)
  .then(function (result) {
    console.log('function: userBusinessInfos ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error userBusinessInfos ============>', error);
  });

// *****************************************************************
// # 9
// function: commentBusinessList

let commentBusinessListData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN OR ACCESS TOKEN',
  businessId: 0,
  offset: 0

  // ------ OPTIONAL ------
  // _token_issuer_: 1
  // size: SIZE
  // firstId: ID
  // lastId: ID
};

podDealingService.confirmComment(commentBusinessListData)
  .then(function (result) {
    console.log('function: commentBusinessList ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error commentBusinessList ============>', error);
  });

// *****************************************************************
// #10
// function: confirmComment
let confirmCommentData = {
  // ------ REQUIRED ------
  _token_: 'API TOKEN', // API TOKEN OF SUB BUSINESS
  commentId: 0

  // ------ OPTIONAL ------
  // _token_issuer_: 1
};
podDealingService.confirmComment(confirmCommentData)
  .then(function (result) {
    console.log('function: reduceInvoice ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error reduceInvoice ============>', error);
  });
