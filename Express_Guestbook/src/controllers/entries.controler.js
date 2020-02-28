const entries = []

const renderIndex = (req, res)=>{
    res.render('index',{entries});
};

const renderNewEntries = (req, res)=>{
    res.render('new-entry')
};

const createNewEntries = (req, res)=>{
    const newEntry = {
        title: req.body.title,
        content: req.body.body,
        published:new Date()

    }

    console.log(req.body)
    entries.push(newEntry)
    res.redirect('/')
};


module.exports = {
    renderIndex,
    renderNewEntries,
    createNewEntries
}