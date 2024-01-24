module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/list/1',
                permanent: true,
            },
        ]
    },
}