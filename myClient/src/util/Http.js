import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

export default class HttpUtil {

    getRequest = () =>{
        const client = new ApolloClient({
            uri: "http://localhost:2222"
        });

        client.query({
            query: gql`{
                    books1 {
                        title
                        author
                    }
              
            }`}).then(result => console.log(result));
    }
}
