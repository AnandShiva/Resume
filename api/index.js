import express from 'express';
const router = express.Router();
router.get('/apiurl', (req,res)=>{
	res.send({where : 'inside api with the help of route grouping'})
});

export default router;