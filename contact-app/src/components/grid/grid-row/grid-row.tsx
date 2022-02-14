import React, { useState } from "react";
import { Accordion, Form, InputGroup, ToggleButton } from "react-bootstrap";
import { Contact } from "../../../models/contact";
import { HeaderButton } from "../../form/form-header/header-button/header-button";
import { FlexContainer } from "../../shared/flex-container/flex-container";
import { Image } from "../../shared/image/image";
import { TextInput } from "../../shared/text-input/text-input";

interface GridRowProps {
  contact: Contact;
  newRow?: boolean;
  readonly insertClicked?: (contact: Contact) => void;
  readonly saveClicked?: (contact: Contact) => void;
  readonly deleteClicked?: (id: number) => void;
}

export const GridRow = ({
  contact,
  newRow,
  insertClicked,
  saveClicked,
  deleteClicked,
}: GridRowProps): JSX.Element => {
  const [disabled, setDisabled] = useState(newRow !== true);
  const [contactData, setContactData] = useState(contact);

  const onEditClicked = (): void => {
    setDisabled(false);
  };

  const onSaveClicked = (): void => {
    setDisabled(true);
    saveClicked && saveClicked(contactData);
    console.log("Save");
  };

  const onInsertClicked = (): void => {
    insertClicked && insertClicked(contactData);
    setContactData(contact);
    console.log("Insert");
  };

  const onDeleteClicked = (): void => {
    deleteClicked && deleteClicked(contactData.id);
    console.log("Delete");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var className = event.currentTarget.className;
    if (className.includes("Name")) {
      let newContact: Contact = {
        ...contactData,
        name: event.currentTarget.value,
      };
      setContactData(newContact);
    } else if (className.includes("Email")) {
      let newContact: Contact = {
        ...contactData,
        email: event.currentTarget.value,
      };
      setContactData(newContact);
    } else if (className.includes("Phone")) {
      let newContact: Contact = {
        ...contactData,
        phone: event.currentTarget.value,
      };
      setContactData(newContact);
    } else if (className.includes("Birthday")) {
      let newContact: Contact = {
        ...contactData,
        birthday: new Date(event.currentTarget.value)
          .toISOString()
          .slice(0, 10),
      };
      setContactData(newContact);
    } else if (className.includes("Avatar")) {
      let newContact: Contact = {
        ...contactData,
        avatar: `${event.currentTarget.value}`,
      };
      setContactData(newContact);
    }
  };

  return (
    <Accordion.Item eventKey={contactData.id.toString()}>
      <Accordion.Header>
        <FlexContainer justifyContext={true}>
          <React.Fragment>
            <Image url={contactData.avatar}></Image>
            <div>{contactData.name}</div>
          </React.Fragment>
        </FlexContainer>
      </Accordion.Header>
      <Accordion.Body>
        <Form>
          <TextInput
            label={"Name"}
            text={contactData.name}
            id={contactData.id}
            disabled={disabled}
            onChange={handleChange}
          />
          <TextInput
            label={"Phone"}
            text={contactData.phone}
            id={contactData.id}
            disabled={disabled}
            onChange={handleChange}
          />
          <TextInput
            label={"Birthday"}
            text={contactData.birthday.toString()}
            id={contactData.id}
            disabled={disabled}
            onChange={handleChange}
            type={"date"}
          />
          <TextInput
            label={"Email Address"}
            text={contactData.email}
            id={contactData.id}
            disabled={disabled}
            onChange={handleChange}
          />
          <TextInput
            label={"Avatar URL"}
            text={contactData.avatar}
            id={contactData.id}
            disabled={disabled}
            onChange={handleChange}
          />
          <FlexContainer justifyContext>
            <React.Fragment>
              {!newRow && (
                <HeaderButton
                  disabled={!disabled}
                  onClick={onEditClicked}
                  text={"Edit"}
                />
              )}
              {!newRow ? (
                <HeaderButton
                  onClick={onSaveClicked}
                  disabled={disabled}
                  text={"Save"}
                />
              ) : (
                <HeaderButton
                  onClick={onInsertClicked}
                  disabled={disabled}
                  text={"Insert"}
                />
              )}
              {!newRow && (
                <HeaderButton onClick={onDeleteClicked} text={"Delete"} />
              )}
            </React.Fragment>
          </FlexContainer>
        </Form>
      </Accordion.Body>
    </Accordion.Item>
  );
};
