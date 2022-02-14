import { useEffect, useState } from "react";
import { Accordion, Container } from "react-bootstrap";
import { Contact } from "../../models/contact";
import ContactService from "../../services/contact-service";
import { GridRow } from "./grid-row/grid-row";
import { NewGridRow } from "./new-grid-row/new-grid-row";

interface GridProps {
  onRowClicked: (primary: number) => void;
}

// const data: Contact[] = [
//   {
//     createdAt: new Date("2021-12-22T07:11:08.136Z"),
//     name: "Olive Sawayn",
//     avatar: "https://i.pravatar.cc/300",
//     email: "Chadd_MacGyver0@hotmail.com",
//     phone: "(264) 221-8092 x4383",
//     birthday: new Date("2021-01-14T01:43:04.943Z"),
//     id: 5,
//   },
// ];

export const Grid = ({ onRowClicked }: GridProps): JSX.Element => {
  const [contactData, setContactData] = useState<Array<Contact>>([]);

  useEffect(() => {
    fetchNewData();
  }, []);

  const fetchNewData = (): void => {
    ContactService.get().then((response: any) => {
      setContactData(response.data);
    });
  };

  const saveClicked = (contact: Contact): void => {
    ContactService.update(contact.id, contact).then((response: any) => {
      fetchNewData();
    });
  };

  const insertClicked = (contact: Contact): void => {
    ContactService.create(contact).then((response: any) => {
      fetchNewData();
    });
  };

  const deleteClicked = (id: number): void => {
    ContactService.remove(id).then((response: any) => {
      fetchNewData();
    });
  };

  return (
    <Accordion flush defaultActiveKey="0">
      <NewGridRow insertClicked={insertClicked} />
      {contactData.length > 0 &&
        contactData.map((x, index) => (
          <GridRow
            saveClicked={saveClicked}
            deleteClicked={deleteClicked}
            contact={x}
            key={index}
          ></GridRow>
        ))}
    </Accordion>
  );
};
