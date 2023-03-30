import FileInput from "@/components/common/input/FileInput";
import Footer from "@/components/common/Footer";
import InfoInput from "@/components/common/input/InfoInput";
import ErrorHandler from "@/util/ErrorHandler";
import { useEffect, useState } from "react";
import cnsComputer from "../../../asset/cnsComputer.svg";
import * as S from "./apply.style";
import { IContentsValue } from "@/types/IContentsValue";

import React from "react";


interface IPortfolioValue {
    name: string | null;
    url: string | null;
  }
  
const useApply = () => {
  const [contentsValue, setContentsValue] = useState<IContentsValue>({
    name: "",
    schoolNumber: "",
    phoneNumber: "",
    introduce: "",
    portfolio: null,
    link: "",
  });

  const [name, setName] = useState<string>("");
  const [schoolNumber, setSchoolNumber] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [introduce, setIntroduce] = useState<string>("");
  const [portfolio, setPortfolio] = useState<IPortfolioValue>({
    name: null,
    url: null,
  });

  const [link, setLink] = useState<string>("https://");
  const [check, setCheck] = useState<boolean>();

  useEffect(() => {
    setContentsValue({
      name: name,
      schoolNumber: schoolNumber,
      phoneNumber: phoneNumber,
      introduce: introduce,
      link: link,
    });
  }, [name, schoolNumber, phoneNumber, introduce, link]);

  return;
};

export default useApply;
