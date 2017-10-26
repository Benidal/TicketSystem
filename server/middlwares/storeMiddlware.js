exports.myMiddlware = ( req,res,next) => {
    req.name = 'Afaf' ;
    req.cookie('name','Afaf',)
    console.log(' this is  from middleware ! ');
    next();
}