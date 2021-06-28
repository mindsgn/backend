import { RequestHandler } from "express";
import { connect } from '../database';

export const postOrder: RequestHandler = async (req, res) => {
  try {
    console.log(req)
    const connection = await connect();
    const posts = await connection.query(`select * from cards`);
    await connection.end;
    return res.status(200).json({success: true, data: posts[0], message: "message successfully posted"});
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false,  message: "message failed"});
  }
};

export const putOrder: RequestHandler = async (req, res) => {
  try {
    console.log(req)
    const connection = await connect();
    const posts = await connection.query(`select * from cards`);
    await connection.end;
    return res.status(200).json({success: true, data: posts[0], message: `message successfully posted`});
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false,  message: "message failed"});
  }
};
  
export const getOrder: RequestHandler = async (req, res) => {
  try {
    console.log(req)
    const connection = await connect();
    const posts = await connection.query(`select * from cards`);
    await connection.end;
    return res.status(200).json({success: true, data: posts[0], message: `message successfully posted`});
  } catch (error) {
    console.log(error);
    return res.status(303).json({success: false,  message: `message failed`});
  }
};