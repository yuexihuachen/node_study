define(["cModel", "cCoreInherit", 'TourStore', 'Util'],
    function(cModel, cBase, store, util) {
        var evn = util.getEnvCode();
        //evn==2?evn=3:'';
        var _ret = {};
        //接口地址 0:测试地址,1:堡垒地址,2:uat地址,3:生产地址,4:lpt环境
        var modelUrl = ['http://gateway.m.fws.qa.nt.ctripcorp.com', 'http://10.8.14.28:8080', 'http://gateway.m.uat.qa.nt.ctripcorp.com', 'http://m.ctrip.com', 'http://gateway.m.lpt.qa.nt.ctripcorp.com'];
        var httpsUrl = ['https://gateway.m.fws.qa.nt.ctripcorp.com', 'https://sec-m.ctrip.com', 'https://gateway.m.uat.qa.nt.ctripcorp.com', 'https://sec-m.ctrip.com', 'https://gateway.m.lpt.qa.nt.ctripcorp.com'];
        /*
        设置Model
        @param obj{object}
        */
        var setModel = function(obj) {
            return new cBase.Class(cModel, {
                __propertys__: function() {
                    var url = obj.url;
                    this.param = {};
                    this.domain = modelUrl[evn];
                    if(evn > 0 && (window.location.protocol === 'https:' || obj.protocol === 'https')){
                        this.domain = httpsUrl[evn];
                    }
                    this.path = '/restapi/soa2/';
                    if(evn === 0 && obj.subEnv){
                        url+=("?subEnv=" + obj.subEnv)
                    }
                    for(var _i in obj){
                        this[_i] = obj[_i];
                    }
                    this.url = this.domain + this.path + url;
                    this.checkAuth = false;
                    //给我们自己的model增加统一的参数
                    (function(excute) {
                        this.excute = function() {
                            this.result = this.result && this.result.getInstance();
                            return excute.apply(this, arguments);
                        }
                    }).call(this, this.excute);
                }
            })
        };

        //获取压缩打包版本号
        _ret.getAppVersion = {
            url:'10124/Config',
            param:{
                "ConfigKey":["getPGuiderVer"]
            },
            dataformat:function(data){
                if(data.ResponseStatus.Ack === 'Success'){
                    var _ref = data.Data.AppSettingList;
                    return _ref.length && _ref[0].Value;
                }
            }
        };

        //获取用户信息
        _ret.getUserInfoModel = {
            url:'10124/GetUserInfo'
        }

        //获取人贷产品列表信息(张海成接口  OLD 三期之前使用)
        _ret.getGuiderListInfoModel = {
            url: '10882/SearchGuide'
        }

        //获取人贷产品列表信息(张海成接口   NEW 四期开始用)
        _ret.getIndexListInfoModel = {
            url: '12568/search',
            subEnv:'fws'
        }

        //选择目的地页（张海成接口）
        _ret.getSearchPosInfoModel = {
            url: '10882/SearchRdhPoi'
        }

        // 目的地搜索列表（张海亮接口）
        _ret.DestSearchListV2 = {
            url: '10124/AddressSelectorIntelliSenseV2',
            param: {
                "Keyword": "",
                "DepartureCityId": 2,
                "TabType": "AGG"
            }
        };

        //产品详情页（获取向导信息 杨阔接口）
        _ret.getAdvisorInfoModel = {
            url: '11419/getAdvisorInfo',
            subEnv: 'fat1'
        }

        //单个产品详情页（获取向导信息 张海亮接口）
        _ret.getSingDetailInfoModel = {
            url: '10124/ProductDetailV3'
        }

        //详情页实时接口（获取向导信息 张海亮接口）
        _ret.getDetailTimingModel = {
            url: '10124/ProductDetailTimingV3'
        };

        //通过advisorId查到guideUid（ 杨阔接口）
        _ret.getAdvisorUserToken = {
            url: '11419/getAdvisorUserToken',
            subEnv: 'fat1'
        }
        

        //订单填写页（肖英杰接口）
        _ret.getBookingInfoModel = {
            url: '12048/GetBookingInfo'
        }

        //订单填写页（肖英杰接口）
        _ret.saveOrderModel = {
            url: '12048/SaveOrder'
        }

        //选择日期页（王平接口）
        _ret.productXResourceModel = {
            url: '10705/ProductXResource',
            subEnv: 'fat3'
        }

        //更新shoppingid（涂宏亮接口）
        _ret.shoppingUpdate = {
            url: '10705/ShoppingDetailUpdate',
            subEnv: 'fat3'
        }

        //人带货点评接口 （陈东接口）
         _ret.getAdvisorCommentListModel = {
            url: '11419/getAdvisorCommentList',
            subEnv: 'fat1'
        }

        //人带货-列表页卡片服务次数，“联系我”点击后，服务次数+1没有生效
        _ret.getAddAdvisorServeLog = {
            url: '11419/addAdvisorServeLog',
            param: {
                "advisorId": "",
                "advisorRoleId": 10,
                "serveType": 2
            }
        };

        //人带货-获取用户所有的订单目的地   zkj祝孔杰
        _ret.GetUserOrderCityInfoModel = {
            url: '10124/GetLocalGuide'
        };

        //人带货-进入群聊前加入该群   lqf李其仿 
        _ret.VtmImHomeApplyJoinGroupModel = {
            url: '11372/VtmImHomeApplyJoinGroup'
        };

        //人带货-判断当前的产品是否是微领队发布的产品   wyj王言杰 
        _ret.VtmImGetGuideProductInfoModel = {
            url: '11372/VtmImGetGuideProductInfo'
        };

        //人带货-创建事件   vcbb崔冰冰
        _ret.CreateOrderEventModel = {
            url: '11380/CreateOrderEvent'
        };

        return function(){
            var _ref;
            for (var i in _ret) {
                _ref = _ret[i];
                if (!_ref.domain || !_ref.path) {
                    _ref.url += '.json';
                }               
                _ret[i].getInstance = (function(x) {
                    return x.getInstance.bind(x);
                })(setModel(_ret[i]));
            }
            return _ret
        }();
    });
