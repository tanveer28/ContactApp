import { Contact } from "../contact";
import { ContactResponse } from "../response/contact-response";

export const MapContact = (contact: ContactResponse): Contact =>
({
    id: Number(contact.id),
    birthday : new Date(contact.birthday).toISOString().slice(0, 10),
    createdAt: new Date(contact.createdAt),
    name: contact.name,
    avatar: contact.avatar.replace(/[<>]/g, ''),
    email: contact.email,
    phone: contact.phone,
});