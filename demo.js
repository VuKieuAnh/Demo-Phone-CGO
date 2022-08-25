let dtCuaPhong = new Mobile();
let dtCuaManh = new Mobile();

function phongSentManh(){
    //dt phong soan thu
    let mess = document.getElementById("phong").value;
    dtCuaPhong.writeMessage(mess);
    //dt cua phong gui tin nhan
    dtCuaPhong.sentMessage(dtCuaManh);
    //hien thi
    showInbox();
}

function manhSentPhong(){
    //dt phong soan thu
    let mess = document.getElementById("manh").value;
    dtCuaManh.writeMessage(mess);
    //dt cua phong gui tin nhan
    dtCuaManh.sentMessage(dtCuaPhong);
    //hien thi
    showInbox();
}

function showInbox(){
    let content= "";
    for (const iterator of dtCuaPhong.inbox) {
        content += iterator + ",";
    }
    document.getElementById("inboxPhong").innerText = content;

    let content1= "";
    for (const iterator of dtCuaManh.inbox) {
        content1 += iterator + ",";
    }
    document.getElementById("inboxManh").innerText = content1;
}