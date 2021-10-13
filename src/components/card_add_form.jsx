import React, { useRef, useState } from "react";
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

const CardAddForm = ({ FileInput, addCards }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const emailRef = useRef();
  const titleRef = useRef();
  const messageRef = useRef();
  const themeRef = useRef();

  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: "" || nameRef.current.value,
      company: "" || companyRef.current.value,
      email: "" || emailRef.current.value,
      title: "" || titleRef.current.value,
      message: "" || messageRef.current.value,
      theme: "" || themeRef.current.value,
      fileName: "" || file.fileName,
      fileURL: "" || file.fileURL,
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addCards(card);
  };

  return (
    <Form ref={formRef}>
      <Input type="text" name="name" placeholder="name" ref={nameRef} />
      <Input
        type="text"
        name="company"
        placeholder="company"
        ref={companyRef}
      />
      <Select name="theme" ref={themeRef}>
        <option value="dark">dark</option>
        <option value="light">light</option>
        <option value="colorful">colorful</option>
      </Select>
      <Input type="text" name="email" placeholder="email" ref={emailRef} />
      <Input type="text" name="title" placeholder="title" ref={titleRef} />
      <Textarea
        name="message"
        placeholder="message"
        ref={messageRef}
      ></Textarea>
      <FileInputContainer>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </FileInputContainer>
      <Button name="ADD" onClick={onSubmit} />
    </Form>
  );
};

export default CardAddForm;
