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
