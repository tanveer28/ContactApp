import { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HeaderButton } from "./header-button/header-button";

interface FormHeaderProps {
  selectedRows: Array<number>;
}

export const FormHeader = ({ selectedRows }: FormHeaderProps): JSX.Element => {
  const [deleteEnabled, setDeleteEnabled] = useState(false);

  useEffect(() => {
    setDeleteEnabled(CalculateDeleteEnabled);
  }, [selectedRows]);

  const CalculateDeleteEnabled = () => selectedRows.length > 0;

  return (
    <Container>
      <Row xs="auto">
        <HeaderButton disabled={!deleteEnabled} text={"Delete"} />
      </Row>
    </Container>
  );
};
