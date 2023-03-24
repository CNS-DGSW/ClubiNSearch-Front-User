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
    <nav>
      <nav>
        <p>{props.title}</p>
        {props.isEssential ? <p>*</p> : null}
      </nav>
      {props.isFile ? (
        <label>
          <input type="file" />
          <img src="" alt="파일" />
          <p>{props.placehorderContext}</p>
        </label>
      ) : (
        <input type="text" placeholder={props.placehorderContext} />
      )}
      <p>{props.errorAlertContext}</p>
      {props.isExplane ? (
        <ul>
          {props.explaneContent?.map((explaneValue, i) => {
            return <li key={i}>{explaneValue}</li>;
          })}
        </ul>
      ) : null}
    </nav>
  );
};

export default InfoInput;
