<?php

class SmsLogTable extends We7Table
{
    public $table = 'imeepos_opensms_log';

    public function getall($params)
    {
        global $_W;
        $this->query->from($this->table);
        if (!empty($params['uniacid'])) {
            $this->query->where('uniacid', $params['uniacid']);
        }
        $list = $this->query->getall();
        return $list;
    }
}
