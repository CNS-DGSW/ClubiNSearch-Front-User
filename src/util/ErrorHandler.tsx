import React, { useState } from "react";
import { IContentsValue } from "@/types/IContentsValue";
import { IErrorValue } from "@/types/IErrorValue";

const ErrorHandler = (props: IContentsValue) => {
  const [errorValue, setErrorvalue] = useState<IErrorValue | null>(null);
  const regPhone = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
  const regSchoolNumber = /[1-3][1-4][0-2][0-9]/;
  const regUrl =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/;

  return errorValue;
};

export default ErrorHandler;
