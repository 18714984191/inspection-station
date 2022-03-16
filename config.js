/*
 * @Description: 全局配置
 * @Autor: JF
 * @Date: 2021-06-16 09:59:55
 * @LastEditors: JF
 * @LastEditTime: 2022-03-16 14:21:52
 */

//接口地址配置
window.$SERVER = {
    socketUrl: "ws://192.168.0.81:11236/station.ws",
    //socketUrl : "ws://117.71.57.82:11236/station.ws",
    baseUrl : "http://192.168.0.81:11236",
    // baseUrl: ""
  };
  
  //开发环境下子项目部署地址
  window.$MICRO_APP_DEV = {
    //   用于本地构建测试
    VUE_APP_MICRO_APP_DASHBOARD: "//dashaboard.cn1.utools.club/",
    VUE_APP_MICRO_APP_WARNING: "//warning.cn1.utools.club/",
    VUE_APP_MICRO_APP_INSPECTION: "//inspection.cn1.utools.club",
    VUE_APP_MICRO_APP_STATISTICS: "//statistics.cn1.utools.club",
    VUE_APP_MICRO_APP_RECORD: "//record.cn1.utools.club",
    VUE_APP_MICRO_APP_CONFIGURATION: "//configuration.cn1.utools.club",
    VUE_APP_MICRO_APP_MANAGEMENT: "//management.cn1.utools.club",
  
    //   VUE_APP_MICRO_APP_DASHBOARD: "//localhost:8081/",
    //   VUE_APP_MICRO_APP_WARNING: "//localhost:8082/",
    //   VUE_APP_MICRO_APP_INSPECTION: "//localhost:8083/",
    //   VUE_APP_MICRO_APP_STATISTICS: "//localhost:8084/",
    //   VUE_APP_MICRO_APP_RECORD: "//localhost:8085/",
    //   VUE_APP_MICRO_APP_CONFIGURATION: "//localhost:8086/",
    //   VUE_APP_MICRO_APP_MANAGEMENT: "//localhost:8087/",
  
    VUE_APP_ROUTER_BASE: ""
  };
  
  //生产环境下子项目部署地址
  window.$MICRO_APP_PRO = {
    //   用于线上构建，下面这些域名是真实域名
    VUE_APP_MICRO_APP_DASHBOARD:
      "./sub-app/dashboard/index.html",
    VUE_APP_MICRO_APP_WARNING:
      "./sub-app/warning/index.html",
    VUE_APP_MICRO_APP_INSPECTION:
      "./sub-app/inspection/index.html",
    VUE_APP_MICRO_APP_STATISTICS:
      "./sub-app/statistics/index.html",
    VUE_APP_MICRO_APP_RECORD:
      "./sub-app/record/index.html",
    VUE_APP_MICRO_APP_CONFIGURATION:
      "./sub-app/configuration/index.html",
    VUE_APP_MICRO_APP_MANAGEMENT:
      "./sub-app/management/index.html",
  
    VUE_APP_ROUTER_BASE: ""
  };
  