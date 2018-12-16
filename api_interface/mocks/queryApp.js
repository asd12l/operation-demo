/**
 * 分页查询APP
 * @url /web/app/queryApp
 */
module.exports = function() {
    return {
        code: "2000",
        message: "成功",
        "data": {
            "list": [
              {
                "appId": "1038317483932385282",
                "appName": "乐客APP",
                "ctime": "1536389153802",
                "osType": 1,
                "pkgPath": "https://baidu.com",
                "remark": "创业",
                "size": 20.55,
                "utime": "1536389153802",
                "version": "1.0.0"
              },
              {
                "appId": "1038317483932385282",
                "appName": "其它APP",
                "ctime": "1536389153802",
                "osType": 2,
                "pkgPath": "https://baidu.com",
                "remark": "创业",
                "size": 20.55,
                "utime": "1536389153802",
                "version": "2.0.0"
              }
            ],
            "total": 2
        }
    }
}
  