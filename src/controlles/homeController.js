

const getHomePage = (req, res) => {
    res.send('sadsfsdfs mrdung')
}
const getMrdungPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomePage,
    getMrdungPage
}