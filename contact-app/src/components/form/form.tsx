import { useState } from "react";
import { Container } from "react-bootstrap";
import { Grid } from "../grid/grid";
import { FormHeader } from "./form-header/form-header";

export const Form = (): JSX.Element => {
  const [selectedRows, setSelectedRows] = useState<Array<number>>([]);

  const onRowClicked = (primary: number) => {
    setSelectedRows([...selectedRows, primary]);
  };

  return (
    <Container>
      <Grid onRowClicked={onRowClicked}></Grid>
    </Container>
  );
};
