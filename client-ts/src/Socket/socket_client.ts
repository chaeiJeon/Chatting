export const webSocket = new WebSocket("ws://localhost:1234/ws");

export const s_send = (data: string) => {
  if (webSocket.readyState === webSocket.OPEN) {
    // 연결 상태 확인
    console.log("socket data : ", data);
    webSocket.send(data); // 웹소켓 서버에게 메시지 전송
  } else {
    alert("연결된 웹소켓 서버가 없습니다.");
  }
};

// 3-2) 웹소켓 서버와 연결 끊기
export const s_close = () => {
  if (webSocket.readyState === webSocket.OPEN) {
    // 연결 상태 확인
    webSocket.close(); // 연결 종료
  } else {
    alert("연결된 웹소켓 서버가 없습니다.");
  }
};
