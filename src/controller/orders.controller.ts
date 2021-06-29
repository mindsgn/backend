import { RequestHandler } from "express";
import { connect } from '../database';

//post new order
export const postOrder: RequestHandler = async (req, res) => {
  try {
    const status: string = "pending";
    let details: any = req.query.deliveryAddress;

    details = JSON.parse(details);

    if(!req.query.simId  || !req.query.customerId  || !req.query.deliveryAddress || !details.address || !details.city || !details.zipCode || !details.country ){
      return res.status(303).json({success: false,  error: "inomplete details"});
    }

    //check if card not taken
    const connection: any = await connect();

    //check if simcard exits and check if customer exists
    const queryCustomer: any = await connection.query(`SELECT id FROM customer WHERE id = ${req.query.customerId}`);
    const querySim: any = await connection.query(`SELECT id FROM cards WHERE id = ${req.query.simId}`);
    
    if(queryCustomer[0].length == 1 && querySim[0].length == 1){
      const queryCard: any = await connection.query(`SELECT CardID FROM orders WHERE cardID = ${req.query.simId}`);
      if(queryCard[0].length == 0 ){
        //create new order
        const posts: any = await connection.query(`insert into orders (customerID, cardID, address, city, zipCode, country ) values ("${req.query.customerId}", "${req.query.simId}", "${details.address}", "${details.city}", "${details.zipCode}", "${details.country}")`);
        const results = posts[0];
        await connection.end;
        return res.status(200).json({success: true, status: "pending", orderID: results.insertId});
      }else{
        return res.status(303).json({success: false,  error: "simcard has been taken" });
      }
    }else{
      return res.status(303).json({success: false,  error: "simcard or customer doesnt exist" });
    }
  } catch (error) {
    return res.status(303).json({success: false,  error: error });
  }
};

export const putOrder: RequestHandler = async (req, res) => {
  try {
    const connection: any = await connect();
    const posts: any = await connection.query(`UPDATE orders SET status='${req.query.status}' where id ='${req.query.orderId}'`);
    await connection.end;
    return res.status(200).json({success: true});
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false,  error: "error updating record on database"});
  }
};
  
export const getOrder: RequestHandler = async (req, res) => {
  try {
    if(req.query.page || req.query.limit){
      const limit: any = req.query.limit;
      const page: any = req.query.page;

      const offset: number = (page - 1) * limit;

      const connection: any = await connect();

      const posts: any = await connection.query(`SELECT * FROM orders LIMIT ${limit} OFFSET ${offset}`);
      await connection.end;
      if(posts[0].length==0){
        return res.status(303).json({success: false,  error: `page over limit`});
      }else{
        return res.status(200).json({success: true, data: posts[0]});
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false,  error: `message failed`});
  }
}