<?php
global $_W,$_GPC;
$t = new SmsTable();
$list = $t->getall(array('uniacid'=>$_W['uniacid']));
$json = json_encode($list);
if ($this->isDev) {
    load()->func('file');
    $file = IA_ROOT . "/addons/imeepos_opensms/data/{$_W['uniacid']}/web/getallsms.json";
    mkdirs(dirname($file));
    file_put_contents($file, $json);
}
die($json);
