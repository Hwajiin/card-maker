import React from "react";
import styled from "styled-components";
import Button from "./button";

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

const CardEditForm = ({ FileInput, card, updateCards, deleteCards }) => {
  const { name, company, email, message, fileURL, fileName, theme, title } =
    card;

  const onFileChange = (file) => {
    updateCards({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = (e) => {
    if (e.currentTarget == null) return;
    e.preventDefault();
    updateCards({
      ...card,
      [e.currentTarget.name]: [e.currentTarget.value],
    });
  };

  const onSubmit = () => {
    deleteCards(card);
  };

  return (
    <Form>
      <Input type="text" name="name" value={name} onChange={onChange} />
      <Input type="text" name="company" value={company} onChange={onChange} />
      <Select name="theme" onChange={onChange} value={theme}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </Select>
      <Input type="text" name="email" value={email} onChange={onChange} />
      <Input type="text" name="title" value={title} onChange={onChange} />
      <Textarea name="message" value={message} onChange={onChange}></Textarea>
      <FileInputContainer>
        <FileInput onFileChange={onFileChange} name={fileName} />
      </FileInputContainer>
      <Button name="Delete" onClick={onSubmit} />
    </Form>
  );
};

export default CardEditForm;
