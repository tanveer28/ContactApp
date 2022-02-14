import { Contact } from "../../../models/contact";
import { GridRow } from "../grid-row/grid-row";

interface NewGridRowProps {
  readonly insertClicked: (contact: Contact) => void;
}

export const NewGridRow = ({ insertClicked }: NewGridRowProps): JSX.Element => {
  const contact: Contact = {
    id: 0,
    name: "",
    createdAt: new Date(),
    birthday: new Date().toISOString().slice(0, 10),
    email: "",
    phone: "",
    avatar: "",
  };

  return (
    <GridRow
      insertClicked={insertClicked}
      contact={contact}
      newRow={true}
    ></GridRow>
  );
};
