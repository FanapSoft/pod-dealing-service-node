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
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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

  // ------ OPTIONAL ------
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
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  bizId: 0,
  businessName: 'NAME2',
  guildCode: ['GUILD CODE'],
  country: 'COUNTRY',
  state: 'STATE',
  city: 'CITY',
  address: 'ADDRESS',
  description: 'DESCRIPTION'

  // ------ OPTIONAL ------
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
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  businessId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  businessId: 0,
  rate: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  businessId: 0,
  text: 'THIS IS MY COMMENT!!!'

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  businessId: 0,
  disfavorite: false // or true

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'

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
  id: [0]

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
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
  businessId: 0,
  offset: 0

  // ------ OPTIONAL ------
  // size: SIZE
  // firstId: 0
  // lastId: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.commentBusinessList(commentBusinessListData)
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
  commentId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podDealingService.confirmComment(confirmCommentData)
  .then(function (result) {
    console.log('function: confirmComment ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error confirmComment ============>', error);
  });

// *****************************************************************
// #11
// function: confirmComment
let unconfirmCommentData = {
  // ------ REQUIRED ------
  commentId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podDealingService.unconfirmComment(unconfirmCommentData)
  .then(function (result) {
    console.log('function: unconfirmComment ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error unconfirmComment ============>', error);
  });
// *****************************************************************
// #12
// function: addDealer
let addDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
  // allProductAllow: true | false
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podDealingService.addDealer(addDealerData)
  .then(function (result) {
    console.log('function: addDealer ============>', result, '\n');
  })
  .catch(function (error) {
    console.log('error addDealer ============>', error);
  });

// *****************************************************************
// #13
// function: dealerList
let dealerListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // dealerBizId: ID
  // enable: true | false
  // offset: 0
  // size: 1
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.dealerList(dealerListData)
  .then(function (result) {
    console.log('function: dealerList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealerList ============>', error);
  });

// *****************************************************************
// #14
// function: enableDealer

let enableDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podDealingService.enableDealer(enableDealerData)
  .then(function (result) {
    console.log('function: enableDealer ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error enableDealer ============>', error);
  });

// *****************************************************************
// #15
// function: disenableDealer

let disableDealerData = {
  // ------ REQUIRED ------
  dealerBizId: 0 // ID

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};
podDealingService.disableDealer(disableDealerData)
  .then(function (result) {
    console.log('function: disableDealer ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error disableDealer ============>', error);
  });

// *****************************************************************
// #16
// function: businessDealingList

let businessDealingListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // dealingBusinessId: ID
  // enable: true | false
  // offset: 0
  // size: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.businessDealingList(businessDealingListData)
  .then(function (result) {
    console.log('function: businessDealingList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error businessDealingList ============>', error);
  });

// *****************************************************************
// #17
// function: addDealerProductPermission
let addDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.addDealerProductPermission(addDealerProductPermissionData)
  .then(function (result) {
    console.log('function: addDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error addDealerProductPermission ============>', error);
  });

// *****************************************************************
// #18
// function: dealerProductPermissionList
let dealerProductPermissionListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // productId: ID
  // dealerBizId: ID
  // enable: true | false
  // offset: 0
  // size: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.dealerProductPermissionList(dealerProductPermissionListData)
  .then(function (result) {
    console.log('function: dealerProductPermissionList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealerProductPermissionList ============>', error);
  });

// *****************************************************************
// #19
// function: dealingProductPermissionList
let dealingProductPermissionListData = {
  // ------ REQUIRED ------

  // ------ OPTIONAL ------
  // productId: 0 
  // dealerBizId: 0 
  // enable: true | false
  // offset: 0
  // size: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.dealingProductPermissionList(dealingProductPermissionListData)
  .then(function (result) {
    console.log('function: dealingProductPermissionList ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error dealingProductPermissionList ============>', error);
  });

// *****************************************************************
// #20
// function: disableDealerProductPermission

let disableDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.disableDealerProductPermission(disableDealerProductPermissionData)
  .then(function (result) {
    console.log('function: disableDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error disableDealerProductPermission ============>', error);
  });

// *****************************************************************
// #21
// function: enableDealerProductPermissionData

let enableDealerProductPermissionData = {
  // ------ REQUIRED ------
  dealerBizId: 0,
  productId: 0

  // ------ OPTIONAL ------
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiKey: ' SC API KEY'
};

podDealingService.enableDealerProductPermission(enableDealerProductPermissionData)
  .then(function (result) {
    console.log('function: enableDealerProductPermission ============>', JSON.stringify(result, null, 2), '\n');
  })
  .catch(function (error) {
    console.log('error enableDealerProductPermission ============>', error);
  });
