import headerLogo from "../../../asset/headerLogo.svg";
import Image from "next/image";
import * as S from "./Header.style";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <S.Nav>
        <S.headerLogo>
          <Link href="/">
            <Image src={headerLogo} alt="logo" width={179} height={35} />
          </Link>
        </S.headerLogo>
        <Link href="/AnnouncementWrite" style={{ textDecoration: "none" }}>
          <S.NavItem>채용 공고</S.NavItem>
        </Link>
        <S.NavItem>팀 문화</S.NavItem>
        <S.NavItem>지원서 작성</S.NavItem>
        <S.NavItem>자주 묻는 질문</S.NavItem>
        <S.NavItem>
          <S.StyledLink href="/signin">
          로그인
          </S.StyledLink>
        </S.NavItem>
        
      </S.Nav>
    </header>
  );
}
