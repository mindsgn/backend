import { RequestHandler } from "express";
import { connect } from '../database';

export const getCards: RequestHandler = async (req, res) => {
  try {
    const connection = await connect();
    const posts = await connection.query(`select * from cards`);
    await connection.end;
    return res.status(200).json({success: true, data: posts[0]});
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false, message: "database error please try again"});
  }
};