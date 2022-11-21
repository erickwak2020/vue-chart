import {Chart} from "chart.js/auto";

export default {
  install(app, options) {
    //app.prototype.$_Chart = Chart;
    app.config.globalProperties.$Chart = Chart;
    console.log(app.config.globalProperties, options);

  },
}