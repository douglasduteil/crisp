//

import type { OperatorsRouter } from "./operators";

//

export type Router = OperatorsRouter;

export type Route<
  TRequest,
  TRoute = Router
> = TRequest extends Router["request"]
  ? TRoute extends { request: TRequest; response: infer TResponse }
    ? { request: TRequest; response: TResponse }
    : never
  : never;
