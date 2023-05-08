import styled from "styled-components";
import Image from "next/image";

export const MemberContainer = styled.div`
  width: 90%;
  margin: 5%;
`;

export const MemberContents = styled.div`
  width: 88%;
  height: 7rem;
  background-color: white;
  border-radius: 5px;
  padding: 6%;
  box-shadow: 0rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const MemberDeleteButton = styled(Image)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0;
  margin-right: 1rem;
  &:hover {
    filter: opacity(50%);
  }
`;

export const MemberContentsContainer = styled.nav`
  display: flex;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  font-size: 0.875rem;
  color: #394050;
`;

export const MemberName = styled.p`
  font-size: 1.125rem;
  color: #394050;
  font-weight: bold;
`;

export const MemberEachContent = styled.p`
  color: #7a7878;
  font-weight: bold;
  font-size: 0.875rem;
`;
