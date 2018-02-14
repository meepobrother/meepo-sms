import { MeepoSmsPreviewComponent, MeepoSmsDefault } from './meepo-sms-preview/meepo-sms-preview';
import { MeepoSmsSettingComponent } from './meepo-sms-setting/meepo-sms-setting';

export const both = {
    'meepo-sms': {
        setting: MeepoSmsSettingComponent,
        view: MeepoSmsPreviewComponent,
        default: MeepoSmsDefault
    }
};

export const preview = {
    'meepo-sms': MeepoSmsPreviewComponent
};

export const entrys = [
    MeepoSmsSettingComponent,
    MeepoSmsPreviewComponent
];

