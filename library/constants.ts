export const authCookieKey = "_accessToken";

export const authenticatedPaths = ["/live", "/location", "/ticket", "/train"];

export const authenticatedPathsRegex = [
  /^\/live/,
  /^\/location/,
  /^\/ticket/,
  /^\/train/,
  /^\/account/,
];
export const authenticatedPathRegex = new RegExp(
  authenticatedPathsRegex.map((r) => r.source).join("|")
);
