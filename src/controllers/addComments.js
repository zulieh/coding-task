const { validationResult } = require('express-validator');
const { Comment } = require('../models')

exports.addComments = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).send({ status: 'fail', errors: errors.array() });
    }
    try {
        const { episodeId, content} = req.body

        const Id = req.Id;

        //add comment
        const comment = await Comment.create({
          episodeId: episodeId,
          Id: Id,
          content: content  
        });
    
        //response status
        return res.status(200).json({
            status: 'success',
            id: comment.id,
            content: comment.content,
        })
        
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({
            status: 'fail',
            message:'internal server error'
            
        });
      }
}
