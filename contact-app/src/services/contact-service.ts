import http from "../http-common";
import { Contact } from "../models/contact";

const get = () => {
  return http.get<Contact>(`/contacts`);
};
const create = (data: Contact) => {
  return http.post<Contact>("/contacts", data);
};
const update = (id: any, data: Contact) => {
  return http.put<any>(`/contacts/${id}`, data);
};
const remove = (id: any) => {
  return http.delete<any>(`/contacts/${id}`);
};
const ContactService = {
  get,
  create,
  update,
  remove,
};
export default ContactService;