var capacitorBranchDeepLinks = (function (exports, core) {
    'use strict';

    const BranchDeepLinks = core.registerPlugin('BranchDeepLinks', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.BranchDeepLinksWeb()),
    });

    class BranchDeepLinksWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'BranchDeepLinks',
                platforms: ['web'],
            });
        }
        handleUrl(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        generateShortUrl(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        showShareSheet(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        getStandardEvents() {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        sendBranchEvent(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        handleATTAuthorizationStatus(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        disableTracking(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        setIdentity(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        logout() {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        getBranchQRCode(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        getLatestReferringParams() {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        getFirstReferringParams() {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
        setDMAParamsForEEA(_) {
            return Promise.reject(new Error('BranchDeepLinks does not have web implementation'));
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        BranchDeepLinksWeb: BranchDeepLinksWeb
    });

    exports.BranchDeepLinks = BranchDeepLinks;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
