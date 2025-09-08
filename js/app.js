const members = [
  { 
    id: 1, 
    name: "WE WANT", 
    profileImgs: [
      "images/eum1.jpeg", 
      "images/eum2.jpeg", 
      "images/eum3.jpeg", 
    ], 
    detailImg: "images/eump1.jpeg", 
    bio: "한음이가 생각한 한음이의 이미지는 보컬짱" 
  },
  { 
    id: 2, 
    name: "JANG HAN EUM'S", 
    profileImgs: [
      "images/eum4.jpeg", 
      "images/eum5.jpeg"
    ], 
    detailImg: "images/eump2.jpeg", 
    bio: "한음이가 연습하며 생긴 습관은 행복하기" 
  },
  { 
    id: 3, 
    name: "DEBUT", 
    profileImgs: [
      "images/eum6.jpeg", 
      "images/eum7.jpeg",
      "images/eum8.jpeg", 
    ], 
    detailImg: "images/eump3.jpeg", 
    bio: "한음이가 도전하고 싶은 무대 컨셉은 동양풍" 
  },
  { 
    id: 4, 
    name: "張瀚音", 
    profileImgs: [
      "images/eum9.jpeg", 
      "images/eum10.jpeg"
    ], 
    detailImg: "images/eump4.jpeg", 
    bio: "한음이의 최대 강점은 보컬" 
  },
  { 
    id: 5, 
    name: "장한음", 
    profileImgs: [
      "images/eum11.jpeg", 
      "images/eum12.jpeg"
    ], 
    detailImg: "images/eump5.jpeg", 
    bio: "완벽해질 때까지 끝없이 노력하여 결과로 보여드리겠습니다." 
  },
  { 
    id: 6, 
    name: "JANG HAN EUM", 
    profileImgs: [
      "images/eum13.jpeg", 
      "images/eum14.jpeg"
    ], 
    detailImg: "images/eump6.jpeg", 
    bio: "과거 지원서 쓰던 한음이에게 한마디 잘 버티길." 
  },
  { 
    id: 7, 
    name: "#8등신 사슴", 
    profileImgs: [
      "images/eum15.jpeg", 
      "images/eum16.jpeg", 
      "images/eum17.jpeg"
    ], 
    detailImg: "images/eump7.jpeg", 
    bio: "지금 한음이에게 힘이 되는 한마디는 얼마 안남았다!!" 
  },
  { 
    id: 8, 
    name: "#노래짱한음", 
    profileImgs: [
      "images/eum18.jpeg", 
      "images/eum19.jpeg"
    ], 
    detailImg: "images/eump8.jpeg", 
    bio: "미래 파이널을 앞둔 한음이에게 한마디 기분이 어때?" 
  },
  { 
    id: 9, 
    name: "#AI 비주얼 ㅎ", 
    profileImgs: [
      "images/eum20.jpeg", 
      "images/eum21.jpeg"
    ], 
    detailImg: "images/eump9.jpeg", 
    bio: "제가 누구인지 확실히 보여드리겠습니다!" 
  }
];

// 스크롤 등장 훅
function useScrollAnimation() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.unobserve(ref.current); };
  }, []);

  return [ref, visible];
}

// 카드
function MemberCard({ member, onClick }) {
  const [ref, visible] = useScrollAnimation();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!member.profileImgs || member.profileImgs.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % member.profileImgs.length);
    }, 3000); // 3초마다 변경
    return () => clearInterval(interval);
  }, [member.profileImgs.length]);

  return React.createElement(
    "div",
    {
      ref: ref,
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-500 ${
        visible ? "animate-fadeInUp" : "opacity-0"
      }`,
      onClick: () => onClick(member)
    },
    React.createElement("img", {
      src: member.profileImgs[index],
      alt: member.name,
      loading: "lazy",
      className: "w-52 h-72 mx-auto rounded-lg object-cover transition duration-700 ease-in-out"
    }),
    React.createElement("h2", {
      className: "text-lg sm:text-xl font-semibold mt-2",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, member.name)
  );
}

// SNS 아이콘 섹션
function SocialSection() {
  const [ref, visible] = useScrollAnimation();
  return React.createElement(
    "div",
    { ref: ref, className: `mt-12 flex justify-center space-x-6 opacity-0 transform translate-y-10 transition duration-700 ${visible ? "opacity-100 translate-y-0" : ""}` },
    React.createElement("a", { href: "https://youtube.com/@boysplanet.official?si=uWoML6FSkZG1qDg1", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/youtube.png", alt: "YouTube", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://www.instagram.com/boysplanet.official?igsh=MXJpYzVjeGljdzVyeg==", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/instagram.png", alt: "Instagram", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://x.com/_mnetboysplanet?s=21", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/x.png", alt: "X", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    )
  );
}

// 메인 앱
function App() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const handleCloseModal = () => setSelectedMember(null);

  return React.createElement(
    "div",
    { className: "container mx-auto p-4" },

    // 제목 (왼쪽 상단 고정)
    React.createElement("h1", {
      className: "text-2xl sm:text-3xl font-bold mb-6 fixed top-4 left-4 z-50",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, "JANG HAN EUM"),

    // 카드 그리드
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16" },
      members.map(member =>
        React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember })
      )
    ),

    React.createElement(SocialSection),

    // 모달
selectedMember &&
React.createElement("div", {
  className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
  onClick: handleCloseModal
},
  React.createElement("div", {
    className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative animate-fadeInModal",
    onClick: e => e.stopPropagation()
  },
    React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
    React.createElement("img", { src: selectedMember.detailImg, alt: selectedMember.name, className: "w-full h-72 mx-auto rounded-lg object-cover" }),
    React.createElement("h2", {
      className: "text-2xl sm:text-3xl font-bold mt-4 text-center",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, selectedMember.name),
    React.createElement("p", { className: "mt-2 text-gray-600 text-center text-sm sm:text-base" }, selectedMember.bio)
  )
)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
