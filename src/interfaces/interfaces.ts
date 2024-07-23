export interface BaseMessage {
  id: string;
  typeMessage: string;
  title: string;
  message: string;
  author: string;
  date: string;
  recipients: number;
  status: string;
  imageProfile: string;
}

export interface SendMessage extends BaseMessage {
  typeMessage: "SendMessage";
}

export interface DraftMessage extends BaseMessage {
  typeMessage: "DraftMessage";
}

export interface ScheduledMessage extends BaseMessage {
  typeMessage: "ScheduledMessage";
  scheduledDate: string;
}

export type IMessage = SendMessage | DraftMessage | ScheduledMessage;
