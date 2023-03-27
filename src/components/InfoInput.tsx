import styles from "../styles/InfoInputStyle.module.css";
import Image from "next/image";
import fileImage from "../../asset/file.svg";
import * as S from "../styles/InfoInputStyle";

interface IInformationProps {
  title: string;
  isEssential: boolean;
  placehorderContext: string;
  errorAlertContext: string;
  isFile?: boolean;
  isExplane?: boolean;
  explaneContent?: string[];
}

const InfoInput = (props: IInformationProps) => {
  return (
    <S.InputWrap>
      <S.InputTitleWrap>
        <p>{props.title}</p>
        {props.isEssential ? <S.EssentialContent>*</S.EssentialContent> : null}
      </S.InputTitleWrap>
      {props.isFile ? (
        <S.FileInputLabel isError={false}>
          <S.FileInputStyle type="file" />
          <Image
            src={fileImage}
            alt="file"
            width={16}
            height={16}
            className={styles.FileImageStyle}
          />
          <S.FileInputContext>{props.placehorderContext}</S.FileInputContext>
        </S.FileInputLabel>
      ) : (
        <S.InputStyle
          isError={false}
          type="text"
          placeholder={props.placehorderContext}
        />
      )}
      <S.ErrorAlert isError={false}>{props.errorAlertContext}</S.ErrorAlert>
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
