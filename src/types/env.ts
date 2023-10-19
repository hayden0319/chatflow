export enum EnvironmentVariables {
    BASE_WELCOMEMESSAGEFORJOINROOM = 'BASE_WELCOMEMESSAGEFORJOINROOM',
    BASE_WELCOMEMESSAGEFORADDFRIEND = 'BASE_WELCOMEMESSAGEFORADDFRIEND',
    BASE_BOT_ID = 'BASE_BOT_ID',
    WECHATY_PUPPET = 'WECHATY_PUPPET',
    WECHATY_TOKEN = 'WECHATY_TOKEN',
    WXOPENAI_APPID = 'WXOPENAI_APPID',
    WXOPENAI_MANAGERID = 'WXOPENAI_MANAGERID',
    VIKA_SPACE_NAME = 'VIKA_SPACE_NAME',
    VIKA_TOKEN = 'VIKA_TOKEN',
    ADMINROOM_ADMINROOMID = 'ADMINROOM_ADMINROOMID',
    ADMINROOM_ADMINROOMTOPIC = 'ADMINROOM_ADMINROOMTOPIC',
    WXOPENAI_TOKEN = 'WXOPENAI_TOKEN',
    WXOPENAI_ENCODINGAESKEY = 'WXOPENAI_ENCODINGAESKEY',
    CHATGPT_KEY = 'CHATGPT_KEY',
    CHATGPT_ENDPOINT = 'CHATGPT_ENDPOINT',
    CHATGPT_MODEL='CHATGPT_MODEL',
    ERNIE_AK='ERNIE_AK',
    ERNIE_SK='ERNIE_SK',
    MQTT_USERNAME = 'MQTT_USERNAME',
    MQTT_PASSWORD = 'MQTT_PASSWORD',
    MQTT_ENDPOINT = 'MQTT_ENDPOINT',
    MQTT_PORT = 'MQTT_PORT',
    WEBHOOK_URL = 'WEBHOOK_URL',
    WEBHOOK_TOKEN = 'WEBHOOK_TOKEN',
    WEBHOOK_USERNAME = 'WEBHOOK_USERNAME',
    WEBHOOK_PASSWORD = 'WEBHOOK_PASSWORD',
    YUQUE_TOKEN = 'YUQUE_TOKEN',
    YUQUE_NAMESPACE = 'YUQUE_NAMESPACE',
    AUTOQA_AUTOREPLY = 'AUTOQA_AUTOREPLY',
    VIKA_USEVIKA = 'VIKA_USEVIKA',
    VIKA_UPLOADMESSAGETOVIKA = 'VIKA_UPLOADMESSAGETOVIKA',
    VIKA_AUTOMATICCLOUD = 'VIKA_AUTOMATICCLOUD',
    WEBHOOK_WEBHOOKMESSAGEPUSH = 'WEBHOOK_WEBHOOKMESSAGEPUSH',
    MQTT_MQTTMESSAGEPUSH = 'MQTT_MQTTMESSAGEPUSH',
    MQTT_MQTTCONTROL = 'MQTT_MQTTCONTROL',
    IM_IMCHAT = 'IM_IMCHAT',
  }

export interface ProcessEnv {
    // 维格表配置
    VIKA_SPACE_NAME: string;
    VIKA_TOKEN: string;

    // Wechaty配置
    WECHATY_PUPPET: string;
    WECHATY_TOKEN: string;

    // 基础配置
    ADMINROOM_ADMINROOMID: string;
    ADMINROOM_ADMINROOMTOPIC: string;
    BASE_BOT_ID: string;
    BASE_WELCOM_EMESSAGE_FOR_JOIN_ROOM: string;
    BASE_WELCOME_MESSAGE_FOR_ADD_FRIEND: string;

    // 智能问答配置
    WXOPENAI_TOKEN: string;
    WXOPENAI_ENCODINGAESKEY: string;
    WXOPENAI_APPID: string;
    WXOPENAI_MANAGERID: string;

    // ChatGPT
    CHATGPT_KEY: string;
    CHATGPT_ENDPOINT: string;
    CHATGPT_MODEL:string;

    // ERNIE
    ERNIE_AK:string;
    ERNIE_SK:string;

    // MQTT配置
    MQTT_USERNAME: string;
    MQTT_PASSWORD: string;
    MQTT_ENDPOINT: string;
    MQTT_PORT: string;

    // 消息推送目的地配置
    WEBHOOK_URL: string;
    WEBHOOK_TOKEN: string;
    WEBHOOK_USERNAME: string;
    WEBHOOK_PASSWORD: string;

    // 语雀配置
    YUQUE_TOKEN: string;
    YUQUE_NAMESPACE: string;

    // 系统消息推送
    MESSAGE_ENCRYPT: string | boolean;
    MESSAGE_ENCODINGAESKEY: string;
    MESSAGE_WEB_HOOK: string;

    // 功能开关
    AUTOQA_AUTOREPLY: string | boolean;

    // 维格表配置
    VIKA_USEVIKA: string | boolean;
    VIKA_UPLOADMESSAGETOVIKA: string | boolean;
    VIKA_AUTOMATICCLOUD: string | boolean;

    WEBHOOK_WEBHOOKMESSAGEPUSH: string | boolean;

    MQTT_MQTTMESSAGEPUSH: string | boolean;
    MQTT_MQTTCONTROL: string | boolean;

    IM_IMCHAT: string | boolean;
  }
