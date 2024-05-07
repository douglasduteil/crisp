//

import type { Operator } from "../types";

//

export type OperatorsRouter = {
  request: {
    method: "GET";
    endpoint: `/v1/website/${string}/operators/list`;
    searchParams: {};
  };
  response: {
    data: Operator[];
  };
};
