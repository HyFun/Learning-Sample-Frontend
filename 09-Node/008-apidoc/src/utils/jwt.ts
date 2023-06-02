import jwt from "jsonwebtoken";

const SECRET_KEY = "abcdefg";

export function generate(payload: string | object, expiresIn: string) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

export function verify(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return false;
  }
}
