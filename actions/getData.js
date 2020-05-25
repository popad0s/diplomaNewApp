const url = '';

export function handlingDataSuccess(campuses) {
    return {
        type: 'CAMPUSES_FETCH_DATA_SUCCESS',
        campuses
    };
}

export function dataFetch() {
    return (dispatch)=> {
        fetch(url)
            .then(response=> {
                if(!response.ok) {
                throw new Error(response.statusText);
            }
            return response;
            })
            .then(response=> response.json())
            .then(campuses=> dispatch(handlingDataSuccess(campuses)));
            
        };
}