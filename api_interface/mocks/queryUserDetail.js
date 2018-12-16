/**
 * 分页查询用户信息列表
 * @url /web/uc/queryUserDetail
 */
module.exports = function() {
    return {
        code: "2000",
        message: "成功",
        "data": {
            "list": [
              {
                "city": " 浙江上虞",
                "gender": 0,
                "userStatus": 0,
                "isVip": false,
                "level": 1,
                "merType": 1,
                "mobile": "18668493013",
                "power": 1,
                "registerTime": 1536067410571,
                "registerType": 1,
                "uid": 100020,
                "userName": "小王"
              },
              {
                "city": " 浙江上虞",
                "gender": 1,
                "userStatus": 1,
                "isVip": false,
                "level": 2,
                "merType": 2,
                "mobile": "18668493013",
                "power": 1,
                "registerTime": 1536067410571,
                "registerType": 2,
                "uid": 100022,
                "userName": "小张"
              },
              {
                "city": " 浙江上虞",
                "gender": 1,
                "userStatus": 1,
                "isVip": true,
                "level": 5,
                "merType": 3,
                "mobile": "18668493013",
                "power": 1,
                "registerTime": 1536067410571,
                "registerType": 3,
                "uid": 100023,
                "userName": "小李"
              }
            ],
            "total": 1
        }
    }
}
  