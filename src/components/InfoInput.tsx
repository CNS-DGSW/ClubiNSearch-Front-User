import { ChangeEvent, Dispatch, SetStateAction } from "react";
import fileImage from "../../asset/file.svg";
import * as S from "../styles/InfoInputStyle";

interface IContentsValue {
  name: string;
  schoolNumber: string;
  phoneNumber: string;
  introduce: string;
  portfolio?: File | null;
  link: string;
}

interface IInformationProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  entrieValue: IContentsValue;
  index: number;
  title: string;
  isEssential: boolean;
  placehorderContext: string;
  errorAlertContext: string;
  isFile?: boolean;
  isExplane?: boolean;
  explaneContent?: string[];
}

const InfoInput = (props: IInformationProps) => {
  const OnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.setValue(event.target.value);
  };

  return (
    <S.InputWrap>
      <S.InputTitleWrap>
        <p>{props.title}</p>
        {props.isEssential ? <S.EssentialContent>*</S.EssentialContent> : null}
      </S.InputTitleWrap>
      {props.isFile ? (
        <S.FileInputLabel isError={true}>
          <S.FileInputStyle type="file" />
          <S.FileImageStyle src={fileImage} alt="file" width={16} height={16} />
          <S.FileInputContext>{props.placehorderContext}</S.FileInputContext>
        </S.FileInputLabel>
      ) : (
        <S.InputStyle
          isError={true}
          type="text"
          placeholder={props.placehorderContext}
          value={props.value}
          onChange={OnChangeHandler}
        />
      )}
      <S.ErrorAlert isError={true}>{props.errorAlertContext}</S.ErrorAlert>
      {props.isExplane ? (
        <ul>
          {props.explaneContent?.map((explaneValue, i) => {
            return <S.ExplaneContext key={i}>{explaneValue}</S.ExplaneContext>;
          })}
        </ul>
      ) : null}
    </S.InputWrap>
  );
};

export default InfoInput;
