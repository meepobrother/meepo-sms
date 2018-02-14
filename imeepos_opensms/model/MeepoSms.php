<?php
use Overtrue\EasySms\EasySms;
class MeepoSms
{
    public static $instance;

    public static function get()
    {
        if (self::$instance) {
            return self::$instance;
        } else {
            $config = array(
                'timeout' => 5.0,
                'default' => array(
                    'strategy' => \Overtrue\EasySms\Strategies\OrderStrategy::class,
                    'gateways' => array(
                        'aliyun',
                    ),
                ),
                'gateways' => [
                    'errorlog' => array(
                        'file' => '/tmp/easy-sms.log',
                    ),
                    'aliyun' => array(
                        'access_key_id' => 'ItYV5FaAYY7PXvXn',
                        'access_key_secret' => 'D6FGgyuusmOIAUh6PPpfSq24HEX5ds',
                        'sign_name' => '小明跑腿',
                    ),
                ],
            );
            self::$instance = new EasySms($config);
            return self::$instance;
        }
    }
}
