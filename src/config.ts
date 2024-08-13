//

export interface Config {
  base_url: string;
  debug?: boolean;
  identifier: string;
  key: string;
  plugin_urn: `urn:${string}` | string;
  user_nickname: string;
  website_id: string;
}
