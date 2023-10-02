const { SAML } = require('@node-saml/node-saml');

const { samlConfig } = require('../authConfig');

class AuthProvider {

    _samlInstance;

    constructor(samlConfig) {
        this._samlInstance = new SAML(samlConfig);
    }

    login() {
        return async (req, res, next) => {
            const samlRequest = await this._samlInstance.getAuthorizeUrlAsync('',null,{});
            res.redirect( samlRequest );
        }
    }

    verifyResponse() {
        return async (req, res, next) => {
            const samlResponse = req.body.SAMLResponse;
            const user = await this._samlInstance.validatePostResponseAsync( samlResponse );

            req.session.nameID = user.profile.nameID;
            req.session.email = user.profile.emailaddress;
            req.session.displayname = user.profile.displayname;
            req.session.isAuthenticated = true;

            res.redirect('/')
        }
    }

}

const authProvider = new AuthProvider(samlConfig);

module.exports = authProvider;