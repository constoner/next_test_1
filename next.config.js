module.exports = {
    async redirects() {
        return [
            {
                source: '/list',
                destination: '/list/1',
                permanent: true,
            },
        ]
    },
}