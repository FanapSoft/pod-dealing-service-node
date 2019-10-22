// External Modules
const expect = require('chai').expect;

// Main Module
const PodDealingService = require('../lib/main');

let apiToken = 'e801898dced840248b0325facb863d8b';
let guildCode = 'INFORMATION_TECHNOLOGY_GUILD';
let podDealingService = new PodDealingService({
  apiToken: apiToken
});
// let accessToken = 'ACCESS TOKEN';
let otherBizId = 3612;
let productId = 15530;

// #1
describe('API: addUserAndBusiness ', function () {
  this.timeout(10000);
  let addUserAndBusinessData = {
    // ------ REQUIRED ------
    username: 'USERNAME21020',
    businessName: 'NAME230026',
    email: 'TEST2@TEST.COM',
    guildCode: [guildCode],
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
  };
  it('correct request', function (done) {
    podDealingService.addUserAndBusiness(addUserAndBusinessData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('ott');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('API: listUserCreatedBusiness ', function () {
  this.timeout(10000);
  let listUserCreatedBusinessData = {
    // ------ REQUIRED ------

    // ------ OPTIONAL ------
    bizId: [5605],
    guildCode: [guildCode]
    // offset: 0
    // size: 0
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
  };
  it('correct request', function (done) {
    podDealingService.listUserCreatedBusiness(listUserCreatedBusinessData)
      .then(function (result) {
        console.log(result, '=======', result.result.length, '=======', result.count);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #3
describe('API: updateBusiness ', function () {
  this.timeout(10000);
  let updateBusinessData = {
    // ------ REQUIRED ------
    bizId: 4766,
    businessName: 'NAME!!!!',
    guildCode: [guildCode, 'TOILETRIES_GUILD'],
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
    // changeLogo: true,
    // changeCover: true | false
    // logoImage: 'IMAGE!!!@@'
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
  };
  it('correct request', function (done) {
    podDealingService.updateBusiness(updateBusinessData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function () {
        // console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('API: getApiTokenForCreatedBusiness ', function () {
  this.timeout(10000);
  let getApiTokenForCreatedBusinessData = {
    // ------ REQUIRED ------
    businessId: 4766

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.getApiTokenForCreatedBusiness(getApiTokenForCreatedBusinessData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('API: rateBusiness ', function () {
  this.timeout(10000);
  let getApiTokenForCreatedBusinessData = {
    // ------ REQUIRED ------
    businessId: 3612,
    rate: 5

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.rateBusiness(getApiTokenForCreatedBusinessData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('API: commentBusiness ', function () {
  this.timeout(10000);
  let commentBusinessData = {
    // ------ REQUIRED ------
    businessId: 4766,
    text: 'THIS IS MY COMMENT!!!'

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.commentBusiness(commentBusinessData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('API: businessFavorite ', function () {
  this.timeout(10000);
  let businessFavoriteData = {
    // ------ REQUIRED ------
    businessId: 4766,
    disfavorite: false

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.businessFavorite(businessFavoriteData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #8
describe('API: userBusinessInfos ', function () {
  this.timeout(10000);
  let userBusinessInfosData = {
    // ------ REQUIRED ------
    id: [4766]

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.userBusinessInfos(userBusinessInfosData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #9
describe('API: commentBusinessList ', function () {
  this.timeout(10000);
  let commentBusinessListData = {
    // ------ REQUIRED ------
    businessId: 4766,
    offset: 0

    // ------ OPTIONAL ------
    // size: 0
    // firstId: 0
    // lastId: 0
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.commentBusinessList(commentBusinessListData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #10
describe('API: confirmComment ', function () {
  this.timeout(10000);
  let confirmCommentData = {
    // ------ REQUIRED ------
    commentId: 743

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.confirmComment(confirmCommentData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #11
describe('API: unconfirmComment ', function () {
  this.timeout(10000);
  let unconfirmCommentData = {
    // ------ REQUIRED ------
    commentId: 743

    // ------ OPTIONAL ------
    // scVoucherHash: ['HASH#1', 'HASH#2']
    // token: 'API TOKEN'
    // tokenIssuer: 0 | 1
  };
  it('correct request', function (done) {
    podDealingService.unconfirmComment(unconfirmCommentData)
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #12
describe('API: addDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.addDealer({ dealerBizId: otherBizId })
      .then(function (result) {
        console.log(result);
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #13
describe('API: dealerList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.dealerList({})
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #14
describe('API: enableDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.enableDealer({ dealerBizId: otherBizId })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #15
describe('API: disableDealer ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.disableDealer({ dealerBizId: otherBizId })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #16
describe('API: businessDealingList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.businessDealingList({})
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #17
describe('API: addDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.addDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #18
describe('API: dealerProductPermissionList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.dealerProductPermissionList({})
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #19
describe('API: dealingProductPermissionList ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.dealingProductPermissionList({})
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #20
describe('API: disableDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.disableDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #21
describe('API: enableDealerProductPermission ', function () {
  this.timeout(10000);
  it('correct request', function (done) {
    podDealingService.enableDealerProductPermission({ dealerBizId: otherBizId, productId: productId })
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});
