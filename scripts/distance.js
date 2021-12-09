var places_info = [
  {
    place: "health",
    name: "헬스장",
    desc: `<ul style="padding-bottom:10px;"><li>시설면적 8㎡당 1명 (체육도장, GX류는 6㎡당 1명)</li>
    <li>운동종목별 경기 인원 수는 사적모임 인원 제한 기준 적용</li>
    <li>(탁구) 시설 내 머무는 시간 최대 2시간 이내, 복식경기 및 대회 금지, 샤워실 운영금지, 탁구대 간격 2m 유지</li>
    <li>(배드민턴, 테니스, 스쿼시 등) 시설 내 머무는 시간 최대 2시간 이내, 샤워실 운영금지</li>
    <li>(실내풋살, 실내농구 등) 시설 내 무는 시간 최대 2시간 이내, 대회 금지, 샤워실 운영금지</li>
    <li>(GX류) 음악속도 100~120bpm 유지(고강도 유산소 운동→저강도 또는 유연성 운동으로 대체), 샤워실 운영금지</li>
    <li>(체육도장) 상대방과 직접 접촉이 일어나는 운동(겨루기, 대련, 시합 등) 금지, 샤워실 운영금지</li>
    <li> (피트니스) 러닝머신 속도 6㎞ 이하 유지(고강도 유산소 운동→저강도 유산소 운동으로 대체), 샤워실 운영금지</li>
    <li>22시 이후 운영 제한</li></ul>
    `,
  },
  {
    place: "res",
    name: "식당",
    desc: `<ul style="padding-bottom:10px;"><li>테이블 간 1m 거리두기 또는 좌석/테이블 간 한 칸 띄우기 또는 테이블 간 칸막이 설치</li>
    <li>21시이후 포장배달만 허용</li>
    <li>식당·카페 이용 시 예방접종 완료자를 추가하는 경우 18시 이후 4인까지 사적모임 가능(21시까지)</li></ul>`,
  },
  {
    place: "cafe",
    name: "카페",
    desc: `<ul style="padding-bottom:10px;"><li>테이블 간 1m 거리두기 또는 좌석/테이블 간 한 칸 띄우기 또는 테이블 간 칸막이 설치</li>
    <li>21시이후 포장배달만 허용</li>
    <li>식당·카페 이용 시 예방접종 완료자를 추가하는 경우 18시 이후 4인까지 사적모임 가능(21시까지)</li></ul>`,
  },
  {
    place: "alcohol",
    name: "술집",
    desc: `<ul style="padding-bottom:10px;">`,
  },
];
function info(place) {
  var item = places_info.find((item) => item.place === place);
  var p = document.getElementById("text_box");
  p.innerHTML =
    "<h1 style='text-align:center; padding-top:10px; margin-bottom:0px'>" +
    item.name +
    "</h1><br>" +
    item.desc;
}
