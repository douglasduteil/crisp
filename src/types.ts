//

export interface Operator {
  type: "operator" | "invite" | "sandbox";
  details: {
    user_id: string;
    email: string;
    role: "owner" | "member";
  };
}
