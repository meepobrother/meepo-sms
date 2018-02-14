<?php

$sql = "DROP TABLE IF EXISTS " . tablename('imeepos_sms') . ";
CREATE TABLE " . tablename('imeepos_sms') . " (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL DEFAULT '',
  `code` varchar(32) NOT NULL DEFAULT '',
  `url` varchar(320) NOT NULL DEFAULT '',
  `setting` text NOT NULL,
  `uniacid` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uniacid_code` (`uniacid`,`code`),
  KEY `uniacid_code_index` (`uniacid`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;";

pdo_query($sql);
