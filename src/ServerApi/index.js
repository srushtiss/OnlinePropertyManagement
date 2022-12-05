import { callApi } from './callApi';
import sha1 from 'sha1';
import ObjectsToArray from './';

export const UserSignUp = async ({ firstName, lastName,phone, email, passHash }) => {
  return await callApi({ endpoint: 'user', method: 'post', body: { firstName: String(firstName),lastName: String(lastName),email: String(email),phone: String(phone), password: String(sha1(passHash)) } })
}

export const UserLogin = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'user/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const HostLogin = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'host/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const HostSignUp = async ({ firstName, lastName,phone, email, passHash }) => {
  return await callApi({ endpoint: 'host', method: 'post', body: { firstName: String(firstName),lastName: String(lastName),email: String(email),phone: String(phone), password: String(sha1(passHash)) } })
}