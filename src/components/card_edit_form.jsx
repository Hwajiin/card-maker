import React from "react";
import styled from "styled-components";
import Button from "./button";
import ImageFileInput from "./image_file_input";

const Form = styled.form`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 20px 0;
`;

const Select = styled.select`
  flex: 1 1 30%;
`;

const Input = styled.input`
  width: 100%;
  flex: 1 1 30%;
`;

const Textarea = styled.textarea`
  flex: 1 1 100%;
`;

const FileInputContainer = styled.div`
  flex: 1 1 50%;
`;

const CardEditForm = ({ card }) => {
  const { name, company, email, message, fileURL, fileName, theme, title } =
    card;

  const onClick = () => {};

  return (
    <Form>
      <Input type="text" name="name" value={name} />
      <Input type="text" name="company" value={company} />
      <Select name="theme" value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </Select>
      <Input type="text" name="email" value={email} />
      <Input type="text" name="title" value={title} />
      <Textarea name="message" value={message}></Textarea>
      <FileInputContainer>
        <ImageFileInput />
      </FileInputContainer>
      <Button name="Delete" onClick={onClick} />
    </Form>
  );
};

export default CardEditForm;
