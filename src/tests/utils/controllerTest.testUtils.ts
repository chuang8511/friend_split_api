import express from "express";

export const createRequest = (body: any): express.Request<any, any, any> => {
  return {
    body,
  } as any;
};

export const createResponse = (): express.Response<any> => {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as any;
};
