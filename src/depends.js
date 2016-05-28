let Depends = {
    create (PubSubObj) {
        return Object.assign(Object.create({}), {
            fetch (url, callback) {
                PubSubObj.fetch(url, callback);
            }
        });
    }
};

export default Depends;

