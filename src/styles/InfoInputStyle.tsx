import styled from "styled-components";

interface IErrorProps {
  isError: boolean | null;
}

export const ErrorAlert = styled.p`
  margin: 0.4rem;
  color: #ff4f4f;
  font-size: 0.7rem;
  opacity: ${(props: IErrorProps) =>
    props.isError == null ? "0" : !props.isError ? "1" : "0"};
`;

export const InputWrap = styled.nav`
  margin-bottom: 0.5rem;
`;

export const InputTitleWrap = styled.nav`
  display: flex;
  margin-bottom: 0.5rem;
  margin-top: 2.375rem;
  font-size: 13px;
  color: #666;
`;

export const EssentialContent = styled.p`
  color: #e03b3b;
  margin-left: 0.2rem;
  font-size: 1rem;
`;

export const InputStyle = styled.input`
  display: flex;
  padding: 0.8rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  border: ${(props: IErrorProps) =>
    props.isError == null
      ? "1px solid #c0c0c0"
      : props.isError
      ? "1px solid #c0c0c0"
      : "1px solid #FF4F4F"};
  border-radius: 5px;
  color: #666;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  &:hover {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #a9c0f6"
        : props.isError
        ? "1px solid #a9c0f6"
        : "1px solid #FF4F4F"};
  }
  &:active {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #1556F7"
        : props.isError
        ? "1px solid #1556F7"
        : "1px solid #FF4F4F"};
  }
`;

export const FileInputStyle = styled.input`
  position: absolute;
  opacity: 0;
`;

export const FileInputContext = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const FileInputLabel = styled.label`
  display: flex;
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  border: ${(props: IErrorProps) =>
    props.isError == null
      ? "1px solid #c0c0c0"
      : !props.isError
      ? "1px solid #c0c0c0"
      : "1px solid #FF4F4F"};
  border-radius: 5px;
  color: #c0c0c0;
  &:hover {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #a9c0f6"
        : !props.isError
        ? "1px solid #a9c0f6"
        : "1px solid #FF4F4F"};
  }
  &:active {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #1556F7"
        : !props.isError
        ? "1px solid #1556F7"
        : "1px solid #FF4F4F"};
  }
`;

export const FileImageStyle = styled.img`
  width: 1rem;
  height: 1rem;
  margin: 0rem 0.5rem;
`;

export const ButtonStyle = styled.button`
  background-color: rgba(21, 86, 247, 0.8);
  padding: 1rem;
  box-shadow: none;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgba(21, 86, 247, 0.9);
  }
  &:active {
    background-color: rgba(21, 86, 247);
  }
  margin-top: 3rem;
`;

export const EntireWrapTag = styled.div`
  margin-left: 38%;
`;
