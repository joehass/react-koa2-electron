
class LoginController {
    
    static async register(ctx){
        console.log(ctx.data)
        const books = [
            {
              title: 'Harry Potter and the Chamber of Secrets',
              author: 'J.K. Rowling',
            },
            {
              title: 'Jurassic Park',
              author: 'Michael Crichton',
            },
          ];
        ctx.body = books;
    }
}

export default LoginController