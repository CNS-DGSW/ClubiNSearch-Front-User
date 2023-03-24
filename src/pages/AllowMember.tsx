const AllowMember = () => {
  return (
    <div>
      <nav>
        <p>지원서 작성하기</p>
        <p>CNS 프론트 엔드 ( 아이다 신개발 론칭 )</p>
      </nav>
      <nav>
        <nav>
          <p>이름</p>
          <p>*</p>
        </nav>
        <input type="text" placeholder="이름을 입력해주세요." />
        <p>ErrorAlret</p>
      </nav>
      <nav>
        <nav>
          <p>학번</p>
          <p>*</p>
        </nav>
        <input type="text" placeholder="학번을 입력해주세요." />
        <p>ErrorAlret</p>
      </nav>
      <nav>
        <nav>
          <p>연락처</p>
          <p>*</p>
        </nav>
        <input type="text" placeholder='"-"를 제외한 연락처를 입력해주세요.' />
        <p>ErrorAlret</p>
      </nav>
      <nav>
        <nav>
          <p>한줄 자기소개</p>
          <p>*</p>
        </nav>
        <input type="text" placeholder="자유롭게 입력해주세요." />
        <p>ErrorAlret</p>
      </nav>
      <nav>
        <nav>
          <p>포트폴리오 (선택사항)</p>
        </nav>
        <label>
          <input type="text" placeholder="이름을 입력해주세요." />
          <img src="" alt="파일" />
          <p>pdf형식을 권장합니다.</p>
        </label>
        <p>ErrorAlret</p>
        <ul>
          <li>포트폴리오는 필수가 아닌 선택사항입니다.</li>
          <li>
            파일은 pdf형식을 권장하며 최대 50mb까지 업로드 하실 수 있습니다.
          </li>
          <li>
            파일은 면접이 끝나는 즉시 삭제될 예정이며 외부 공유를 금지합니다.
          </li>
        </ul>
      </nav>
      <nav>
        <nav>
          <p>링크 (선택사항)</p>
        </nav>
        <input type="text" placeholder="https://" />
        <p>ErrorAlret</p>
        <ul>
          <li>링크 또한 필수가 아닌 선택사항입니다.</li>
          <li>
            자신을 드러낼 수 있는 깃허브, 개인 블로그 등 자유롭게 입력해주세요.
          </li>
        </ul>
      </nav>
      <img src="" alt="CNS 저거 무슨 사진이야 (컴퓨터)" />
      <nav>
        <input type="checkbox" />
        <p>개인정보 수집 및 이용에 동의합니다.</p>
      </nav>
      <p>
        <button>제출하기</button>
      </p>
    </div>
  );
};

export default AllowMember;
