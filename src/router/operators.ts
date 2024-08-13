//

import type { Operator } from "../types";

//

export type OperatorsRouter = {
  request: {
    endpoint: `/v1/website/${string}/operators/list`;
    method: "GET";
    searchParams: {};
  };
  response: {
    data: Operator[];
  };
};
