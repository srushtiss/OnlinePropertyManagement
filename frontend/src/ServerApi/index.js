import { callApi } from './callApi';
import sha1 from 'sha1';
import ObjectsToArray from './';

export const UserSignUp = async ({ firstName, lastName, phone, email, passHash }) => {
  console.log("here")
  return await callApi({ endpoint: 'user/register', method: 'post', body: { firstName: String(firstName), lastName: String(lastName), email: String(email), phone: String(phone), passHash: String(sha1(passHash)) } })
}

export const UserLogin = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'user/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const HostLogin = async ({ email, passHash }) => {
  return await callApi({ endpoint: 'host/login', method: 'post', body: { email: String(email), passHash: String(sha1(passHash)) } })
}

export const HostSignUp = async ({ firstName, lastName, phone, email, passHash }) => {
  return await callApi({ endpoint: 'host/register', method: 'post', body: { firstName: String(firstName), lastName: String(lastName), email: String(email), phone: String(phone), passHash: String(sha1(passHash)) } })
}

export const RegisterHostProperty = async ({ email, title, city, category, description, nightly_fee, cleaning_fee, service_fee, amenities, bedrooms, img, map_address, deleted }) => {
  return await callApi({ endpoint: 'properties/add', method: 'post', body: { email: String(email), title: String(title), city: String(city), category: String(category), description: String(description), nightly_fee: String(nightly_fee), cleaning_fee: String(cleaning_fee), service_fee: String(service_fee), amenities: String(amenities), bedrooms: String(bedrooms), cleaning_fee: String(cleaning_fee), img: String(img), map_address: String(map_address) ,deleted: String(deleted)} })
}

export const AddToFavorites = async ({ email, title }) => {
  return await callApi({ endpoint: 'host/login', method: 'post', body: { email: String(email), title: (title) } })
}

export const GetProperties = async () => {
  return await callApi({ endpoint: 'properties', method: 'get' })
}


export const UpdateProperty = async ({ id,email, title, city, category, description, nightly_fee, cleaning_fee, service_fee, amenities, bedrooms, img, map_address, deleted }) => {
  return await callApi({ endpoint: 'properties/update/'+id, method: 'post', body: { email: String(email), title: String(title), city: String(city), category: String(category), description: String(description), nightly_fee: String(nightly_fee), cleaning_fee: String(cleaning_fee), service_fee: String(service_fee), amenities: String(amenities), bedrooms: String(bedrooms), cleaning_fee: String(cleaning_fee), img: String(img), map_address: String(map_address),deleted: String(deleted) } })
}