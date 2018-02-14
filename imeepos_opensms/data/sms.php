<?php
global $_W;
$data = array();
$data[] = array(
    'title' => '阿里云',
    'code' => 'aliyun',
    'url' => 'https://www.aliyun.com/',
    'setting' => array(
        'access_key_id' => '',
        'access_key_secret' => '',
        'sign_name' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);
$data[] = array(
    'title' => '阿里大于',
    'code' => 'alidayu',
    'url' => 'https://dayu.aliyun.com/',
    'setting' => array(
        'app_key' => '',
        'app_secret' => '',
        'sign_name' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '云片',
    'code' => 'yunpian',
    'url' => 'https://www.yunpian.com/',
    'setting' => array(
        'api_key' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => 'Submail',
    'code' => 'submail',
    'url' => 'https://www.mysubmail.com/',
    'setting' => array(
        'app_id' => '',
        'app_key' => '',
        'project' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '螺丝帽',
    'code' => 'luosimao',
    'url' => 'https://luosimao.com/',
    'setting' => array(
        'api_key' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '容联云通讯',
    'code' => 'yuntongxun',
    'url' => 'http://www.yuntongxun.com/',
    'setting' => array(
        'app_id' => '',
        'account_sid' => '',
        'account_token' => '',
        'is_sub_account' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '互亿无线',
    'code' => 'huyi',
    'url' => 'http://www.ihuyi.com/',
    'setting' => array(
        'api_id' => '',
        'api_key' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '聚合数据',
    'code' => 'juhe',
    'url' => 'http://www.juhe.cn/',
    'setting' => array(
        'app_key' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => 'SendCloud',
    'code' => 'sendcloud',
    'url' => 'https://www.sendcloud.net/',
    'setting' => array(
        'sms_user' => '',
        'sms_key' => '',
        'timestamp' => false,
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '百度云',
    'code' => 'baidu',
    'url' => 'https://cloud.baidu.com/',
    'setting' => array(
        'ak' => '',
        'sk' => '',
        'invoke_id' => '',
        'domain' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '华信短信平台',
    'code' => 'huaxin',
    'url' => 'http://www.ipyy.com/',
    'setting' => array(
        'user_id' => '',
        'password' => '',
        'account' => '',
        'ip' => '',
        'ext_no' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '253云通讯（创蓝）',
    'code' => 'chuanglan',
    'url' => 'https://www.253.com/',
    'setting' => array(
        'username' => '',
        'password' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '融云',
    'code' => 'rongcloud',
    'url' => 'http://www.rongcloud.cn/',
    'setting' => array(
        'app_key' => '',
        'app_secret' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '天毅无线',
    'code' => 'tianyiwuxian',
    'url' => 'http://www.85hu.com/',
    'setting' => array(
        'username' => '',
        'password' => '',
        'gwid' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => 'twilio',
    'code' => 'twilio',
    'url' => 'https://www.twilio.com/',
    'setting' => array(
        'account_sid' => '',
        'from' => '',
        'token' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

$data[] = array(
    'title' => '腾讯云SMS',
    'code' => 'qcloud',
    'url' => 'https://cloud.tencent.com/product/sms',
    'setting' => array(
        'sdk_app_id' => '',
        'app_key' => '',
        'enable' => false,
    ),
    'uniacid' => $_W['uniacid'],
);

foreach ($data as $da) {
    $da['setting'] = serialize($da['setting']);
    try {
        pdo_insert('imeepos_sms', $da);
    } catch (Exception $e) {
        // print_r($e);
    }
}
