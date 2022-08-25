class Mobile{
    battery;
    draft;
    inbox;
    sent;

    // tao ra dt, 100 % pin, draft, inbox, sent trong rong
    constructor(){
        this.battery = 100;
        this.draft="";
        this.sent =[];
        this.inbox = [];
    }

    checkStatus(){
        return this.battery>0;
    }

    charge(){
        this.battery = 100;
    }

    writeMessage(mess){
        this.draft = mess;
        this.battery--;
    }

    sentMessage(mobile){
        let draft = this.draft;
        //chuyen thu nhap cua doi tuong hien tai -> hop thu den cua mobile
        mobile.inbox.push(draft);
        //chuyen thu nhap cua doi tuong hien tai -> hop thu da gui cua dt hien tai
        this.sent.push(draft);
        //lam rong thu nhap
        this.draft="";
        //giam pim
        this.battery--;
    }
}