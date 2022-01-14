import WifiSelector from './views/WifiSelector'

import store from './store';
let ServicePlugin =
{ 
  install:function (Vue) {
    Vue.prototype.$showWifiSelector = function () {
      var ComponentClass = Vue.extend(WifiSelector)
      var instance = new ComponentClass({store: store})
      instance.$mount()
    }
  }
} 
export default ServicePlugin