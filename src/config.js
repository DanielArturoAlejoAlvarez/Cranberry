const config = module.exports = {
    port: process.env.PORT || 3000,
    db: process.env.MONGODB || 'stackmeandb',
    collection1: process.env.TABLE1 || 'tasks',
    collection2: process.env.TABLE2 || 'users'
}