export default function projectFetch(apiMethods, methods, params, url) {

    return fetch(url, apiMethods, {
        methods: methods,
        mode: 'cors',
        headers: new Headers( {
            /// 
        }),
        params: params
    });

}
