export const authCookieKey = "_accessToken";

export const authenticatedPaths = ["/home", "/search", "/messages", "/reels"];

export const authenticatedPathRegex = [
  /^\/home/,
  /^\/search/,
  /^\/posts/,
  /^\/reels/,
  /^\/account/,
];

export const authenticatedPathsRegex = new RegExp(
  authenticatedPathRegex.map((r) => r.source).join("|")
);
