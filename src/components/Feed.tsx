import { RouteComponentProps, withRouter } from "react-router-dom"
import { Alert, FeedWrapper } from '../styled-components/styled-components';
import { getPageQueryParam } from "../util/search-utils";
import { useEffect, useState } from "react";
import { IFeedComponentState } from "../model/questions-model";

const Feed: React.FC<RouteComponentProps> = (props) => {
    const page = Number(getPageQueryParam(props)); 
    const initialFeedState: IFeedComponentState = {
        data: [],
        page,
        loading: true,
        error: ''
    }
    const [ feedState, setFeedState ] = useState(initialFeedState);
    const ROOT_API = 'https://api.stackexchange.com/2.2/';
    useEffect(() => {
        (async () => {
            try {
                const result = await fetch(
                    `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow${
                        page ? `&page=${page}` : ''
                    }`,
                    );
                    const data = await result.json();
                    if (data) {
                        setFeedState({...feedState, data, loading: false })
                    }
                } catch(error) {
                    const { message } = error;
                    setFeedState({...feedState, error: message })
                }
        })();
    })
    return (
       <>
         {( feedState.loading || feedState.error ) && <Alert>{feedState.loading ? 'Loading...' : feedState.error}</Alert>}
         <FeedWrapper>
             
         </FeedWrapper>
       </>
    )
}

export default withRouter(Feed);