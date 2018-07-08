const RET_OK = 0; // 操作成功
const DATABASE_ERROR = 1; // 数据库异常
const SERVER_ERROR = 2; // 服务器异常
const SERVER_NO_RESPONSE = 3; // 服务无应答，请等待结果
const CONTENT_NOT_PARSABLE = 4; // 内容无法解析
const MESSAGE_SERVER_ERROR = 5; // 消息服务异常
const SERVER_PROCESS_TIMEOUT = 6; // 服务器处理超时
const REQUEST_TOO_OFTEN = 7; // 请求太频繁，请等待返回结果
const EXCHANGE_NOT_TRADING = 8; // 交易所未开市

// 通用错误
const INVALID_PAGE_INFO = 101; // 无效分页查询信息

// 用户管理错误码
const USER_OR_PASSWORD_ERROR = 10001; // 帐号或者密码错误
const PERMISSION_DENIED = 10002; // 没有权限
const OUTMONEY_NOT_ENOUGH = 10003; // 可出资金不够
const USER_NOT_EXISTS = 10004; // 用户不存在
const USER_NOT_LOGIN_NOW = 10005; // 用户未登录
const FILE_UPLOAD_FAILED = 10006; // 文件上传失败
const INVALID_IMAGE_FILE_TYPE = 10007; // 无效的图片文件类型
const BAD_IMAGE_FILE = 10008; // 破损的图片文件
const INVALID_SMS_CODE = 10009; // 验证码已经失效

const USER_ALREADY_EXISTS = 11001; // 用户已存在
const INVALID_ACCOUNT = 11002; // 无效帐号名
const INVALID_PASSWORD = 11003; // 无效密码
const INVALID_EMAIL = 11004; // 无效邮箱
const INVALID_BIRTHDAY = 11005; // 无效出生日期
const INVALID_SEX = 11006; // 无效性别
const INVALID_AGE = 11007; // 无效年龄
const INVALID_ADDRESS = 11008; // 无效地址
const INVALID_POSTALCODE = 11009; // 无效邮编
const INVALID_NAME = 11010; // 无效姓名
const INVALID_CARDINFO = 11011; // 无效证件信息
const INVALID_TELEPHONE = 11012; // 无效电话
const INVALID_AMOUNT = 11013; // 无效资金
const INVALID_LOGINTYPE = 11014; // 无效的登录类型
const VILLAGEID_NOT_NULLABLE = 11015; // 区域ID不能为空
const INVALID_VILLAGEID = 11015; // 无效的区域ID

// 订单错误
const INVALID_INPUT = 20000; // 无效输入
const INVALID_ORDER_TYPE = 20001; // 无效订单类型
const INVALID_BUYORSELL = 20002; // 无效买卖方向
const MONEY_NOT_ENOUGH = 20003; // 资金不足
const INVALID_GOODS = 20004; // 无效商品
const INVALID_BUILDTYPE = 20005; // 无效建平类型
const INVALID_PRICE = 20006; // 无效输入价格
const INVALID_ORDERQTY = 20007; // 无效输入数量
const POSITION_NOT_ENOUGH = 20008; // 头寸不足
const POSITION_EXCEEDED = 20009; // 头寸超出限制
const INVALID_MEMBER_CODE = 20010; // 错误的会员代码
const QUOTE_SERVER_EXCEPTION = 20011; // 行情服务异常
const PRICE_OUT_OFFSETSCOPE = 20012; // 价格超出点差范围
const INVALID_CURRENTPRICE = 20013; // 无效的当前价
const INVALID_PRICEOFFSET = 20014; // 无效的价格点差
const INVALID_EXTERNALORDERID = 20015; // 无效的外部订单号
const INVALID_VALIDATETYPE = 20016; // 无效的效力类型
const INVALID_SLPRICE = 20017; // 无效止损价
const INVALID_TPPRICE = 20018; // 无效止盈价
const INVALID_QUOTEPOINT = 20019; // 无效的报价点差
const HOLD_ORDER_NOT_EXISTS = 20020; // 持仓单不存在
const INVALID_QTY = 20021; // 无效数量
const QUOTE_EXPIRED = 20022; // 行情超时
const TRADEACCOUNT_NOT_EXISTS = 20023; // 资金帐号不存在
const INVALID_ORDER_TIME = 20024; // 无效的委托时间
const ORDER_TIME_EXPIRED = 20025; // 委托超时
const HOLDQTY_NOT_ENOUGH = 20026; // 持仓数量不足
const GOODS_NOT_TRADING = 20027; // 商品未开市，不允许下单
const INVALID_OPERATORCODE = 20028; // 无效的操作员代码

const ORDER_NOT_EXISTS = 20101; // 订单不存在
const ORDER_NOT_CHANGEABLE = 20102; // 订单不可修改
const ORDER_ALREADY_EXISTS = 20103; // 订单已存在
const ORDER_NOT_CLOSABLE = 20104; // 订单不可平
const SL_TP_PRICE_NOT_SUITABLE = 20105; // 止损止盈价不合适
const INVALID_TRANSPORT_CONTENT = 20106; // 无效的数据内容

// 管理员服务错误
const MEMBER_NOT_EXISTS = 30001; // 会员不存在
const CUSTGROUP_NOT_EXISTS = 30002; // 客户组不存在
const INOUTMONEY_APP_NOT_EXISTS = 30003; // 出入金请求不存在
const CUSTGROUP_ALREADY_EXISTS = 30004; // 客户组已存在
const INSTGROUP_NOT_EXISTS = 30005; // 商品组不存在
const INSTGROUP_ALREADY_EXISTS = 30006; // 商品组已存在
const INSTRUMENT_NOT_EXISTS = 30007; // 商品不存在
const INSTRUMENT_ALREADY_EXISTS = 30008; // 商品已存在
const PARENT_INSTGROUP_NOT_EXISTS = 30009; // 父商品组不存在
const ADMINISTRATOR_ALREADY_EXISTS = 30010; // 管理员已存在

const ROLE_ALREADY_EXISTS = 30013; // 角色已存在
const ROLE_NOT_EXISTS = 30014; // 角色不存在
const ADMINISTRATOR_NOT_EXISTS = 30015; // 管理员不存在

const getReturnCodeMessage = code => {
    if (code === RET_OK) {
        return '操作成功';
    }
    if (code === DATABASE_ERROR) return '数据库异常';

    if (code === SERVER_ERROR) return '服务器异常';
    if (code === SERVER_NO_RESPONSE) return '服务无应答，请等待结果';
    if (code === CONTENT_NOT_PARSABLE) return '内容无法解析';
    if (code === MESSAGE_SERVER_ERROR) return '消息服务异常';

    if (code === SERVER_PROCESS_TIMEOUT) return '服务器处理超时';
    if (code === REQUEST_TOO_OFTEN) return '请求太频繁，请等待返回结果';
    if (code === EXCHANGE_NOT_TRADING) return '交易所未开市';

    if (code === INVALID_PAGE_INFO) return '无效分页查询信息';

    if (code === USER_OR_PASSWORD_ERROR) return '帐号或者密码错误';
    if (code === PERMISSION_DENIED) return '没有权限';
    if (code === OUTMONEY_NOT_ENOUGH) return '可出资金不够';
    if (code === USER_NOT_EXISTS) return '用户不存在';
    if (code === INVALID_SMS_CODE) return '验证码已经失效';
    if (code === USER_NOT_LOGIN_NOW) return '用户未登录';
    if (code === FILE_UPLOAD_FAILED) return '文件上传失败';
    if (code === INVALID_IMAGE_FILE_TYPE) return '无效的图片文件类型';
    if (code === BAD_IMAGE_FILE) return '破损的图片文件';
    if (code === USER_ALREADY_EXISTS) return '用户已存在';
    if (code === USER_ALREADY_EXISTS) return '用户已存在';
    if (code === INVALID_ACCOUNT) return ' 无效帐号名';
    if (code === INVALID_PASSWORD) return ' 无效密码';
    if (code === INVALID_EMAIL) return ' 无效邮箱';
    if (code === INVALID_BIRTHDAY) return '无效出生日期';
    if (code === INVALID_SEX) return ' 无效性别';
    if (code === INVALID_AGE) return ' 无效年龄';
    if (code === INVALID_ADDRESS) return ' 无效地址';
    if (code === INVALID_POSTALCODE) return ' 无效邮编';
    if (code === INVALID_NAME) return ' 无效姓名';
    if (code === INVALID_CARDINFO) return ' 无效证件信息';
    if (code === INVALID_TELEPHONE) return ' 无效电话';
    if (code === INVALID_AMOUNT) return ' 无效资金';
    if (code === INVALID_LOGINTYPE) return ' 无效的登录类型';
    if (code === VILLAGEID_NOT_NULLABLE) return ' 区域ID不能为空';
    if (code === INVALID_VILLAGEID) return ' 无效的区域ID';

    // 订单错误
    if (code === INVALID_INPUT) return ' 无效输入';
    if (code === INVALID_ORDER_TYPE) return ' 无效订单类型';
    if (code === INVALID_BUYORSELL) return ' 无效买卖方向';
    if (code === MONEY_NOT_ENOUGH) return ' 资金不足';
    if (code === INVALID_GOODS) return ' 无效商品';
    if (code === INVALID_BUILDTYPE) return ' 无效建平类型';
    if (code === INVALID_PRICE) return ' 无效输入价格';
    if (code === INVALID_ORDERQTY) return ' 无效输入数量';
    if (code === POSITION_NOT_ENOUGH) return '头寸不足';
    if (code === POSITION_EXCEEDED) return ' 头寸超出限制';
    if (code === INVALID_MEMBER_CODE) return ' 错误的会员代码';
    if (code === QUOTE_SERVER_EXCEPTION) return ' 行情服务异常';
    if (code === PRICE_OUT_OFFSETSCOPE) return ' 价格超出点差范围';
    if (code === INVALID_CURRENTPRICE) return ' 无效的当前价';
    if (code === INVALID_PRICEOFFSET) return ' 无效的价格点差';
    if (code === INVALID_EXTERNALORDERID) return ' 无效的外部订单号';
    if (code === INVALID_VALIDATETYPE) return ' 无效的效力类型';
    if (code === INVALID_SLPRICE) return ' 无效止损价';
    if (code === INVALID_TPPRICE) return ' 无效止盈价';
    if (code === INVALID_QUOTEPOINT) return ' 无效的报价点差';
    if (code === HOLD_ORDER_NOT_EXISTS) return ' 持仓单不存在';
    if (code === INVALID_QTY) return ' 无效数量';
    if (code === QUOTE_EXPIRED) return ' 行情超时';
    if (code === TRADEACCOUNT_NOT_EXISTS) return ' 资金帐号不存在';
    if (code === INVALID_ORDER_TIME) return ' 无效的委托时间';
    if (code === ORDER_TIME_EXPIRED) return ' 委托超时';
    if (code === HOLDQTY_NOT_ENOUGH) return ' 持仓数量不足';
    if (code === GOODS_NOT_TRADING) return ' 商品未开市，不允许下单';
    if (code === INVALID_OPERATORCODE) return ' 无效的操作员代码';

    if (code === ORDER_NOT_EXISTS) return '订单不存在';
    if (code === ORDER_NOT_CHANGEABLE) return '订单不可修改';
    if (code === ORDER_ALREADY_EXISTS) return '订单已存在';
    if (code === ORDER_NOT_CLOSABLE) return '订单不可平';
    if (code === SL_TP_PRICE_NOT_SUITABLE) return '止损止盈价不合适';
    if (code === INVALID_TRANSPORT_CONTENT) return '无效的数据内容';

    // 管理员服务错误
    if (code === MEMBER_NOT_EXISTS) return '会员不存在';
    if (code === CUSTGROUP_NOT_EXISTS) return '客户组不存在';
    if (code === INOUTMONEY_APP_NOT_EXISTS) return '出入金请求不存在';
    if (code === CUSTGROUP_ALREADY_EXISTS) return '客户组已存在';
    if (code === INSTGROUP_NOT_EXISTS) return '商品组不存在';
    if (code === INSTGROUP_ALREADY_EXISTS) return '商品组已存在';
    if (code === INSTRUMENT_NOT_EXISTS) return '商品不存在';
    if (code === INSTRUMENT_ALREADY_EXISTS) return '商品已存在';
    if (code === PARENT_INSTGROUP_NOT_EXISTS) return '父商品组不存在';
    if (code === ADMINISTRATOR_ALREADY_EXISTS) return '管理员已存在';
    if (code === ROLE_ALREADY_EXISTS) return '角色已存在';
    if (code === ROLE_NOT_EXISTS) return '角色不存在';
    if (code === ADMINISTRATOR_NOT_EXISTS) return '管理员不存在';

    return code;
};

export default getReturnCodeMessage;
