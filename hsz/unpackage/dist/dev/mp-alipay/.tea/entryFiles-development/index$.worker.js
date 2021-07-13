/**! __CODEPLACEHOLDER_START__ */ /*[PositionForHostEntryCodeBegin]*/ /**! __CODEPLACEHOLDER_END__ */
if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');
require('./importScripts$');

      function getUserAgentInPlatformWeb() {
        return typeof navigator !== 'undefined' ? navigator.swuserAgent || navigator.userAgent || '' : '';
      }
      if(getUserAgentInPlatformWeb() && (getUserAgentInPlatformWeb().indexOf('LyraVM') > 0 || getUserAgentInPlatformWeb().indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../compoents/head/headPage/headPage?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/homepage/banner/banner?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/homepage/tabrNumber/tabrNumber?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/homepage/phoneNumber-list/phoneNumber-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/homepage/like/like?hash=b951195a683c0e0f38191a323bf6a4845a66e6a2');
require('../../compoents/collect/collect-list/collect-list?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/category/operatorLeft/operatorLeft?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../compoents/category/operatorRightTop/operatorRightTop?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/tabbar/home/home?hash=19f42a0e3ae14fcbe0e3005edd93d35ff4179ad3');
require('../../pages/tabbar/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabbar/collect/collect?hash=47ad4ccf751d3f39c8bfb72f45bf9072ff935b9d');
require('../../pages/tabbar/category/category?hash=e85054c9ed66cbe05aed2b903e41ddaa3dcb18b2');
require('../../pages/tabbar/consult/consult?hash=3da259dc9931ea265c2d5d679d3dec09ecb1985e');
require('../../pages/filtrate/filtrate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}