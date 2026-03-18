
 export default class HttpError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
  ) {
    super(message);
    this.statusCode = statusCode;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError);
    }
  }
}


export interface RateLimiterError extends Error {
  msBeforeNext: number;
}

export function isRateLimiterError(err: unknown): err is RateLimiterError {
  return typeof err === "object" && err !== null && "msBeforeNext" in err;
}

