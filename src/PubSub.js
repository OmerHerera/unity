let PubSub = {
    create () {
        let events = {};
        const data = [
            {
                name: 'Omer',
                company: 'Appsflyer'
            },
            {
                name: 'Omer2',
                company: 'Appsflyer2'
            }
        ]

        return Object.assign(Object.create({}), {
            subscribe (event, callback) {
                events[event] = callback;
            },
            publishSync (event) {
                events[event]();
            },
            getJSONData (index) {
                return data [index];
            },
            fetch (url, callback) {
                let err = null;
                if (!url) {
                    err = 'Wrong URL ! ! ! !';
                    callback(err);
                    return;
                }
                callback(err, "This is Ok!");
            }
        });
    }
};

export default PubSub;
