module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        notEmpty: []
      },
      tokenIssuer: {
        type: 'integer',
        enum: [0, 1]
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  addUserAndBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        username: {
          type: 'string'
        },
        businessName: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        sheba: {
          sheba: []
        },
        nationalCode: {
          type: 'string'
        },
        economicCode: {
          type: 'string'
        },
        email: {
          type: 'string',
          format: 'email'
        },
        registrationNumber: {
          type: 'string'
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        cellphone: {
          mobile: []
        },
        phone: {
          phone: []
        },
        fax: {
          type: 'string'
        },
        postalCode: {
          postalCode: []
        },
        country: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        address: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        newsReader: {
          type: 'boolean'
        },
        logoImage: {
          type: 'string'
        },
        coverImage: {
          type: 'string'
        },
        tags: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTrees: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTreeCategoryName: {
          type: 'string'
        },
        link: {
          type: 'string'
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        agentFirstName: {
          type: 'string'
        },
        agentLastName: {
          type: 'string'
        },
        agentCellphoneNumber: {
          mobile: []
        },
        agentNationalCode: {
          nationalCode: []
        }
      },
      required: ['token', 'tokenIssuer', 'username', 'businessName', 'email', 'guildCode', 'country', 'state', 'city', 'address', 'description', 'agentFirstName', 'agentLastName', 'agentCellphoneNumber'],
      additionalProperties: false
    }
  },

  // #2
  listUserCreatedBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        bizId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string',
            minLength: 1
          },
          minItems: 1
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        query: {
          type: 'string'
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        tagTrees: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        active: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'boolean'
            }
          ]
        },
        country: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        city: {
          type: 'string',
          minLength: 1
        },
        ssoId: {
          type: 'integer'
        },
        username: {
          type: 'string'
        },
        businessName: {
          type: 'string'
        },
        sheba: {
          sheba: []
        },
        nationalCode: {
          type: 'string'
        },
        email: {
          type: 'string',
          format: 'email'
        },
        cellphone: {
          mobile: []
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #3
  updateBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        bizId: {
          type: 'integer'
        },
        businessName: {
          type: 'string'
        },
        companyName: {
          type: 'string'
        },
        shopName: {
          type: 'string'
        },
        shopNameEn: {
          type: 'string'
        },
        website: {
          type: 'string'
        },
        dateEstablishing: {
          shamsiDate: []
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        sheba: {
          sheba: []
        },
        nationalCode: {
          type: 'string'
        },
        economicCode: {
          type: 'string'
        },
        email: {
          type: 'string',
          format: 'url'
        },
        registrationNumber: {
          type: 'string'
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string',
            minLength: 1
          },
          minItems: 1
        },
        cellphone: {
          mobile: []
        },
        phone: {
          phone: []
        },
        fax: {
          type: 'string'
        },
        postalCode: {
          postalCode: []
        },
        country: {
          type: 'string'
        },
        state: {
          type: 'string'
        },
        city: {
          type: 'string'
        },
        address: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        changeLogo: {
          type: 'boolean'
        },
        changeCover: {
          type: 'boolean'
        },
        logoImage: {
          type: 'string'
        },
        coverImage: {
          type: 'string'
        },
        tags: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTrees: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTreeCategoryName: {
          type: 'string'
        },
        link: {
          type: 'string'
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        agentFirstName: {
          type: 'string'
        },
        agentLastName: {
          type: 'string'
        },
        agentCellphoneNumber: {
          mobile: []
        },
        agentNationalCode: {
          nationalCode: []
        },
        changeAgent: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'bizId', 'businessName', 'guildCode', 'country', 'state', 'city', 'address', 'description'],
      additionalProperties: false
    }
  },

  // #4
  getApiTokenForCreatedBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'businessId'],
      additionalProperties: false
    }
  },

  // #5
  rateBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        rate: {
          type: 'integer',
          maximum: 10,
          minimum: 0
        }
      },
      required: ['token', 'tokenIssuer', 'businessId', 'rate'],
      additionalProperties: false
    }
  },

  // #6
  commentBusiness: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        text: {
          type: 'string'
        }
      },
      required: ['token', 'tokenIssuer', 'businessId', 'text'],
      additionalProperties: false
    }
  },

  // #7
  businessFavorite: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        disfavorite: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'businessId', 'disfavorite'],
      additionalProperties: false
    }
  },

  // #8
  userBusinessInfos: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        id: {
          type: 'array',
          items: {
            type: 'integer'
          }
        }
      },
      required: ['token', 'tokenIssuer', 'id'],
      additionalProperties: false
    }
  },

  // #9
  commentBusinessList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'businessId', 'offset'],
      additionalProperties: false
    }
  },

  // #10
  confirmComment: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        commentId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'commentId'],
      additionalProperties: false
    }
  },

  // #11
  unconfirmComment: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        commentId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'commentId'],
      additionalProperties: false
    }
  },

  // #12
  addDealer: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealerBizId: {
          type: 'integer'
        },
        allProductAllow: {
          type: 'boolean'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId'],
      additionalProperties: false
    }
  },

  // #13
  dealerList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealerBizId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          'type': 'integer'
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #14
  enableDealer: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId'],
      additionalProperties: false
    }
  },

  // #15
  disableDealer: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId'],
      additionalProperties: false
    }
  },

  // #16
  businessDealingList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealingBusinessId: {
          type: 'integer'
        },
        enable: {
          type: 'string'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #17
  addDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        dealerBizId: {
          type: 'integer'
        },
        productId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId', 'productId'],
      additionalProperties: false
    }
  },

  // #18
  dealerProductPermissionList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #19
  dealingProductPermissionList: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        productId: {
          type: 'integer'
        },
        dealingBusinessId: {
          type: 'integer'
        },
        enable: {
          type: 'boolean'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer'],
      additionalProperties: false
    }
  },

  // #20
  disableDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId', 'productId'],
      additionalProperties: false
    }
  },

  // #21
  enableDealerProductPermission: {
    body: {
      type: 'object',
      properties: {
        token: {
          notEmpty: []
        },
        tokenIssuer: {
          type: 'integer',
          enum: [0, 1]
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        productId: {
          type: 'integer'
        },
        dealerBizId: {
          type: 'integer'
        }
      },
      required: ['token', 'tokenIssuer', 'dealerBizId', 'productId'],
      additionalProperties: false
    }
  }
};
