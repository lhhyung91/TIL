import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

const Appblock = styled.div`
  width: 521px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595",
};

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    setDialog(false);
    console.log("확인");
  };

  const onCancel = () => {
    setDialog(false);
    console.log("취소");
  };

  return (
    <ThemeProvider theme={{ palette }}>
      <>
        <Appblock>
          <Button color="pink" size="large" onClick={onClick}>
            삭제
          </Button>
        </Appblock>
        <Dialog
          title="정말 삭제?"
          confirmText="당연 삭제"
          cancelText="아냐 잠깐만.."
          visible={dialog}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          데이터 진짜 삭제?
        </Dialog>
      </>
    </ThemeProvider>
  );
}

export default App;
