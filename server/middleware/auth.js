import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const auth = async(req, res, next) => {
    try{

        const token = req.headers.authorization.split(" ")[1];
        
        let decodedData;

        if(token) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET);
            req.employeeId = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;