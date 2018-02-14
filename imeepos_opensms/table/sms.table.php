<?php

class SmsTable extends We7Table
{
    public $table = 'imeepos_sms';

    public function getall($params)
    {
        global $_W;
        $this->query->from($this->table);
        if (!empty($params['uniacid'])) {
            $this->query->where('uniacid', $params['uniacid']);
        }
        $list = $this->query->getall();
        foreach($list as &$li){
            $li['setting'] = unserialize($li['setting']);
        }
        unset($li);
        return $list;
    }

    public function set()
    {
        global $_W, $_GPC;
        $input = $_GPC['__input'];
        foreach ($input as $key => $int) {
            pdo_update($this->table, array('setting' => serialize($int)), array('uniacid' => $_W['uniacid'], 'code' => $key));
        }
    }
}
