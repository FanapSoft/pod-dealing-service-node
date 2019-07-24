// External Modules
const expect = require('chai').expect;

// Main Module
const PodDealingService = require('../lib/main');

let apiToken = 'API TOKEN';
let accessToken = 'ACCESS TOKEN';
let guildCode = 'INFORMATION_TECHNOLOGY_GUILD';
let podDealingService = new PodDealingService({});
// 4766
// #1
describe('API: addUserAndBusiness ', function () {
  this.timeout(10000);
  let addUserAndBusinessData = {
    // ------ REQUIRED ------
    _token_: apiToken,
    username: 'USERNAME2',
    businessName: 'NAME23',
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
  it('correct request', function (done) {
    podDealingService.addUserAndBusiness(addUserAndBusinessData)
      .then(function (result) {
        console.log(result);
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
    _token_: apiToken

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
  it('correct request', function (done) {
    podDealingService.listUserCreatedBusiness(listUserCreatedBusinessData)
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

// #3
describe('API: updateBusiness ', function () {
  this.timeout(10000);
  let updateBusinessData = {
    // ------ REQUIRED ------
    _token_: apiToken,
    bizId: 4766,
    businessName: 'NAME22222',
    guildCode: [guildCode, 'TOILETRIES_GUILD'],
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
    _token_: apiToken,
    businessId: 4766

    // ------ OPTIONAL ------
    // _token_issuer_: 1
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
    _token_: accessToken,
    businessId: 4766,
    rate: 10

    // ------ OPTIONAL ------
    // _token_issuer_: 1
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
    _token_: accessToken,
    businessId: 4766,
    text: 'THIS IS MY COMMENT!!!'

    // ------ OPTIONAL ------
    // _token_issuer_: 1

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
    _token_: accessToken,
    businessId: 4766,
    disfavorite: false

    // ------ OPTIONAL ------
    // _token_issuer_: 1
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
    _token_: apiToken, // or access token
    id: [4766]

    // ------ OPTIONAL ------
    // _token_issuer_: 1
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
describe.only('API: commentBusinessList ', function () {
  this.timeout(10000);
  let commentBusinessListData = {
    // ------ REQUIRED ------
    _token_: apiToken, // or access token
    businessId: 4766,
    offset: 0

    // ------ OPTIONAL ------
    // _token_issuer_: 1
    // size: SIZE
    // firstId: ID
    // lastId: ID
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
describe.only('API: confirmComment ', function () {
  this.timeout(10000); // 743 744
  let confirmCommentData = {
    // ------ REQUIRED ------
    _token_: 'c2dcd1855ecd489097fc0f20970cc672',
    commentId: 743

    // ------ OPTIONAL ------
    // _token_issuer_: 1
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
