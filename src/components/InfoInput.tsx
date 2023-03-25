import styles from "../styles/InfoInputStyle.module.css";
import Image from "next/image";
import fileImage from "../../asset/file.svg";

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
    <nav className={styles.InputWrap}>
      <nav className={styles.InputTitleWrap}>
        <p>{props.title}</p>
        {props.isEssential ? (
          <p className={styles.EssentialContent}>*</p>
        ) : null}
      </nav>
      {props.isFile ? (
        <label className={styles.FileInputLabel}>
          <input type="file" className={styles.FileInputStyle} />
          <Image
            src={fileImage}
            alt="file"
            width={16}
            height={16}
            className={styles.FileImageStyle}
          />
          <p className={styles.FileInputContext}>{props.placehorderContext}</p>
        </label>
      ) : (
        <input
          type="text"
          placeholder={props.placehorderContext}
          className={styles.InputStyle}
        />
      )}
      <p className={styles.ErrorAlert}>{props.errorAlertContext}</p>
      {props.isExplane ? (
        <ul>
          {props.explaneContent?.map((explaneValue, i) => {
            return (
              <li key={i} className={styles.ExplaneContext}>
                {explaneValue}
              </li>
            );
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default InfoInput;
