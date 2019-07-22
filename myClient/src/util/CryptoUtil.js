let crypto = require('crypto')
//生成加密密码
export default function usePasswordEncode(psw,salt){
    let md5 = crypto.createHash('md5');

    md5.update(psw);

    md5 = crypto.createHash('md5');
    if(!salt){
        salt = genRandomNum(24);
    }
    md5.update(psw + salt);
    let encodePassword = md5.digest('hex');

    return {salt,encodePassword}

    //生成盐
    function genRandomNum(pwd_len){
        let str = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
            'x', 'y', 'z', '0','1', '2', '3', '4', '5', '6', '7', '8', '9' 
        ]

        let count = 0
        let i
        let pwd
        while(count < pwd_len){
            i = Math.round(Math.abs(Math.random()*36))

            if(i >= 0 && i < str.length){
                if (!!pwd){
                    pwd+=str[i]
                }else{
                    pwd=str[i]
                }
                
                count++
            }
        }

        return pwd
    }
}

