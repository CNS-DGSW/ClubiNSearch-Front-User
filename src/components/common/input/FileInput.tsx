import Image from "next/image";
import React, { Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import * as S from "../../../styles/FileInputStyle";
import fileImage from "../../../../asset/file.svg";
interface IPortfolioValue {
  name: string | null;
  url: string | null;
}
interface IFileInputProps {
  value: IPortfolioValue;
  setValue: Dispatch<SetStateAction<IPortfolioValue>>;
  title: string;
  isEssential: boolean;
  placehorderContext: string;
  errorAlertContext: string;
  isExplane?: boolean;
  explaneContent?: string[];
}

const FileInput = (props: IFileInputProps) => {
  const [isContext, setIsContext] = useState<boolean>(false);
  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files;
      console.log(file);

      if (file) {
        const fileResource = file[0];

        const Image = URL.createObjectURL(fileResource);
        props.setValue({ name: fileResource.name, url: Image });
        setIsContext(true);
      }
    } catch {}
  };

  return (
    <S.FileInputWrap>
      <S.FileInputTitleWrap>
        <p>{props.title}</p>
        {props.isEssential ? <S.EssentialContent>*</S.EssentialContent> : null}
      </S.FileInputTitleWrap>
      <S.FileInputLabel isError={true}>
        <S.FileInputStyle type="file" onChange={ImageOnChangeHandler} />
        <S.FileImageStyle src={fileImage} alt="file" />
        <S.FileInputContext isContext={isContext}>
          {props.value.name ? props.value.name : props.placehorderContext}
        </S.FileInputContext>
      </S.FileInputLabel>
      <S.ErrorAlert isError={true}>{props.errorAlertContext}</S.ErrorAlert>
      {props.isExplane ? (
        <ul>
          {props.explaneContent?.map((explaneValue, i) => {
            return <S.ExplaneContext key={i}>{explaneValue}</S.ExplaneContext>;
          })}
        </ul>
      ) : null}
    </S.FileInputWrap>
  );
};

export default FileInput;

/*
<S.FileInputLabel isError={true}>
    <S.FileInputStyle type="file" />
    <S.FileImageStyle src={fileImage} alt="file" width={16} height={16} />
    <S.FileInputContext>{props.placehorderContext}</S.FileInputContext>
</S.FileInputLabel>
*/
