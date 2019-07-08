import Query from "react-apollo/Query";
import {gql} from "apollo-boost";

export default () =>{

    return (
        <Query query={
            gql`{
                    books1 {
                        title
                        author
                    }

            }`}
        >
            {
                ({loading, error, data}) => {
                    return (
                        <div>
                            {data.books1.title}

                        </div>
                    )
                }
            }
        </Query>
    )
}
