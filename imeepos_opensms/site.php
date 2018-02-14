<?php
/**
 * 米波消息提醒模块微站定义
 *
 * @author imeepos
 * @url http://bbs.we7.cc/
 */
defined('IN_IA') or exit('Access Denied');
require __DIR__ . "/_init.php";
load()->classs('table');

// ini_set('display_errors', true);
// error_reporting(E_ALL);

class Imeepos_opensmsModuleSite extends WeModuleSite
{
    public $isDev = true;

    public function doMobileIndex()
    {
        //这个操作被定义用来呈现 功能封面
    }

    public function doWebSetting()
    {
        global $_W, $_GPC;
        if (!isset($_GET['do'])) {
            $url = $this->createWebUrl('setting');
            header("location: " . $url);
            exit();
        }
        $this->init();
        include $this->template('web/index');
    }

    public function doWebLog()
    {
        global $_W, $_GPC;
        if (!isset($_GET['do'])) {
            $url = $this->createWebUrl('log');
            header("location: " . $url);
            exit();
        }
        include $this->template('web/index');
    }

    public function doWebTest()
    {
        global $_W, $_GPC;
        if (!isset($_GET['do'])) {
            $url = $this->createWebUrl('log');
            header("location: " . $url);
            exit();
        }
        $sms = MeepoSms::get();
        $sms->send(13140415408, array(
            'content' => '验证码为：6379，您正在登录，若非本人操作，请勿泄露。',
            'template' => 'SMS_126315015',
            'data' => array(
                'code' => 6379,
            ),
        ));
        include $this->template('web/index');
    }

    private function init()
    {
        $file = IA_ROOT . "/addons/imeepos_opensms/data/install_loc.json";
        $install = file_get_contents($file);
        $installData = json_decode($install, true);
        if ($installData['sms'] != 1) {
            require IA_ROOT . "/addons/imeepos_opensms/data/sms.php";
            $data = array();
            $data['sms'] = 1;
            file_put_contents($file, json_encode($data));
        }
    }

}
