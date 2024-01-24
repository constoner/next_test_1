module.exports = {
    async rewrites() {
        return [
            {
                source: '/item/:itemId',
                destination: '/list/1/item/:itemId',
            },
        ]
    },

    async redirects() {
        return [
            {
                source: '/',
                destination: '/list/1',
                permanent: true,
            },
        ]
    },

    reactStrictMode: false,
}