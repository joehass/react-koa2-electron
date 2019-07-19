
class PasswordUtil{

    public static genRandomNum(pwd_len:number){
        let str = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
            'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w',
            'x', 'y', 'z', '0','1', '2', '3', '4', '5', '6', '7', '8', '9' 
        ]

        let count = 0
        let i :number
        let pwd:string
        while(count < pwd_len){
            i = Math.abs(Math.random()*36)

            if(i >= 0 && i < str.length){
                pwd+=str[i]
                count++
            }
        }

        return pwd
    }
}