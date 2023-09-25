module.exports.timeChecker = function (req,res,next){
    let day=new Date().getDate()
    let hour=new Date().getHours()
    day>=4 || hour>=17 || hour<=9?res.status(405).send('ERROR 404 : we are closed today') : next()
}

