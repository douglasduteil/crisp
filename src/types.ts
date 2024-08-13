//

export interface Operator {
  type: "operator" | "invite" | "sandbox";
  details: {
    email: string;
    first_name: string;
    last_name: string;
    role?: "owner" | "member";
    user_id: string;
  };
}

export interface Conversation {
  created_at: Number;
  last_message: string;
  meta: ConversationMeta;
}

export interface ConversationMeta {
  address?: string;
  avatar: string;
  data: object;
  email: string;
  ip: string;
  nickname: string;
  phone: string;
  segments: string[];
  device: object;
  subject?: string;
}

export type ConversationState = "pending" | "resolved" | "unresolved";
