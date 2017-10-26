exports.homePage = (req,res) => {
    //res.render('index');
    console.log(req.name);
    console.log(' this is  from storeCntorller! ');
    res.render('index');
}