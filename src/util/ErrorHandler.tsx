import { IContentsValue } from "@/types/IContentsValue";

const ErrorHandler = (props: IContentsValue) => {
  const regName = /\s/g;
  const regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  const regSchoolNumber = /[1-3][1-4][0-2][0-9]/;
  const regUrl =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;
  return [
    !(props.name === "") || regName.test(props.name),
    regSchoolNumber.test(props.schoolNumber) && props.schoolNumber.length === 4,
    regPhone.test(props.phoneNumber),
    !(props.introduce === "") || props.introduce.length > 3,
    props.link === "https://" || regUrl.test(props.link),
  ];
};

export default ErrorHandler;
