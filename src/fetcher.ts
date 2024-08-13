//

import type { Config } from "./config";
import type { Route, Router } from "./router";

//

export async function fetch_crisp<
  TRequest extends Router["request"],
  TRoute extends Route<TRequest>,
  TResponse extends TRoute["response"],
  TData extends TResponse["data"],
>(config: Config, options: TRequest): Promise<TData> {
  const searchParams = new URLSearchParams(options.searchParams).toString();
  const headers = new Headers({
    Authorization: `Basic ${btoa(`${config.identifier}:${config.key}`)}`,
    "Content-Type": "application/json",
    "X-Crisp-Tier": "plugin",
  });
  const url = `${config.base_url}${options.endpoint}${
    searchParams !== "" ? `?${searchParams}` : ""
  }`;

  config.debug && console.info(`  <<-- ${options.method} ${url}`);

  const body = (options as any as { body: unknown }).body;
  const response = await fetch(url, {
    body: options.method === "GET" ? null : JSON.stringify(body),
    headers,
    method: options.method,
  });

  config.debug &&
    console.info(
      `  -->> ${options.method} ${url} ${response.status} ${response.statusText}`,
    );

  if (!response.ok) {
    throw new Error(`${url} ${response.status} ${response.statusText}`);
  }
  const crisp_response: CrispResponse<TData> = await response.json();
  if (crisp_response.error) {
    throw new Error(
      `${url} ${response.status} ${response.statusText} - ${crisp_response.reason}`,
    );
  }

  return crisp_response.data;
}

//

interface CrispErrorResponse {
  error: true;
  reason: string;
}

interface CrispSuccessResponse<TData> {
  data: TData;
  error: false;
}
type CrispResponse<TData> = CrispErrorResponse | CrispSuccessResponse<TData>;
