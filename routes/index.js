
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title1: 'Julie Edwards', title2: 'Handmade Jewellery' });
};