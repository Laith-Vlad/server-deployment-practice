'use strict';
module.exports = (req,res) => 
{res.status(404).json({code: 404,message: 'page not found!',route:req.originalUrl})  }; //  404 error
