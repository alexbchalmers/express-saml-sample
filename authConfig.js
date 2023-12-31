require('dotenv').config({ path: '.env.dev' });

const samlConfig = {
    issuer: process.env.SAML_SP_ENTITY_ID,
    audience: process.env.SAML_SP_AUDIENCE || process.env.SAML_SP_ENTITY_ID,
    callbackUrl: process.env.SAML_SP_ACS_URL,

    entryPoint: process.env.SAML_IDP_SSO_SERVICE_URL,
    authnRequestBinding: process.env.SAML_IDP_SSO_SERVICE_BINDING || 'HTTP-Redirect',
    cert: process.env.SAML_IDP_TOKEN_SIGNING_CERT,

    acceptedClockSkewMs: 5 * 60 * 1000,             // 5 minutes in ms
    requestIdExpirationPeriodMs: 15 * 60 * 1000,    // 15 minutes in ms
    wantAssertionsSigned: true,                     // AAD signs assertions
    wantAuthnResponseSigned: false,                 // AAD does not sign responses by default
    disableRequestedAuthnContext: true,
    validateInResponseTo: 'ifPresent',

    forceAuthn: process.env.SAML_OPT_FORCEAUTHN || false
};

module.exports = { samlConfig };