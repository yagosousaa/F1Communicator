export interface BaseMessage {
  id: string;
  typeMessage: string;
  title: string;
  message: string;
  author: string;
  data: string;
  recipients: number;
}

export interface SendMessage extends BaseMessage {
  typeMessage: "SendMessage";
  status: {
    error: string;
    sending: string;
    send: string;
  };
}

export interface DraftMessage extends BaseMessage {
  typeMessage: "DraftMessage";
}

export interface ScheduledMessage extends BaseMessage {
  typeMessage: "ScheduledMessage";
  scheduledDate: string;
}

export type IMessage = SendMessage | DraftMessage | ScheduledMessage;
