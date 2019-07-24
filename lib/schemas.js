module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      // apiToken: {
      //   type: 'string'
      // },
      tokenIssuer: {
        type: 'integer'
      },
      serverType: {
        enum: ['production', 'sandbox']
      }
    },
    required: [],
    additionalProperties: false
  },

  // #1
  addUserAndBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
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
          type: 'string'
        },
        tagTrees: {
          type: 'string'
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
      required: ['_token_', '_token_issuer_', 'username', 'businessName', 'email', 'guildCode', 'country', 'state', 'city', 'address', 'description', 'agentFirstName', 'agentLastName', 'agentCellphoneNumber'],
      additionalProperties: false
    }
  },

  // #2
  listUserCreatedBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
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
      required: ['_token_', '_token_issuer_'],
      additionalProperties: false
    }
  },

  // #3
  updateBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
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
          type: 'string'
        },
        tagTrees: {
          type: 'string'
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
      required: ['_token_', '_token_issuer_', 'bizId', 'businessName', 'guildCode', 'country', 'state', 'city', 'address', 'description'],
      additionalProperties: false
    }
  },

  // #4
  subBusinessList: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        name: {
          type: 'string'
        },
        nationalCode: {
          type: 'string'
        },
        cellphoneNumber: {
          mobile: []
        },
        email: {
          type: 'string',
          format: 'email'
        },
        registrationNumber: {
          type: 'string'
        },
        economicCode: {
          type: 'string'
        }
      },
      required: ['_token_', '_token_issuer_', 'offset', 'size'],
      additionalProperties: false
    }
  },

  // #5
  getApiTokenForCreatedBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        businessId: {
          type: 'integer'
        }
      },
      required: ['_token_', '_token_issuer_', 'businessId'],
      additionalProperties: false
    }
  },

  // #6
  rateBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
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
      required: ['_token_', '_token_issuer_', 'businessId', 'rate'],
      additionalProperties: false
    }
  },

  // #7
  commentBusiness: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        businessId: {
          type: 'integer'
        },
        text: {
          type: 'string'
        }
      },
      required: ['_token_', '_token_issuer_', 'businessId', 'text'],
      additionalProperties: false
    }
  },

  // #8
  businessFavorite: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        businessId: {
          type: 'integer'
        },
        disfavorite: {
          type: 'boolean'
        }
      },
      required: ['_token_', '_token_issuer_', 'businessId', 'disfavorite'],
      additionalProperties: false
    }
  },

  // #9
  userBusinessInfos: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        id: {
          type: 'array',
          items: {
            type: 'integer'
          }
        }
      },
      required: ['_token_', '_token_issuer_', 'id'],
      additionalProperties: false
    }
  },

  // #10
  commentBusinessList: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
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
      required: ['_token_', '_token_issuer_', 'businessId', 'offset'],
      additionalProperties: false
    }
  },

  // #11
  confirmComment: {
    body: {
      type: 'object',
      properties: {
        _token_: {
          type: 'string'
        },
        _token_issuer_: {
          type: 'integer'
        },
        commentId: {
          type: 'integer'
        }
      },
      required: ['_token_', '_token_issuer_', 'commentId'],
      additionalProperties: false
    }
  }

};
