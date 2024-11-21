export const authCookieKey = "_accessToken";

export const authenticatedPaths = ["/home", "/location", "/ticket", "/train"];

export const authenticatedPathsRegex = [
  /^\/home/,
  /^\/location/,
  /^\/ticket/,
  /^\/train/,
  /^\/account/,
];
export const authenticatedPathRegex = new RegExp(
  authenticatedPathsRegex.map((r) => r.source).join("|")
);
