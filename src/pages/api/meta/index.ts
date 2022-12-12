import { NextApiRequest, NextApiResponse } from 'next';

import { connectionMeta } from '../../../../utils/connection';
import { ResponseFuncs } from '../../../../utils/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

  // function for catch errors
  const catcher = (error: Error) => res.status(400).json({ error });

  // Potential Responses
  const handleCase: ResponseFuncs = {
    // RESPONSE FOR GET REQUESTS
    GET: async (res2: NextApiResponse) => {
      // @ts-ignore
      const { Meta } = await connectionMeta(); // connect to database
      // @ts-ignore
      const response = await Meta.find().sort({ tokenId: -1 }).catch(catcher);
      // res2.statusCode= 200;

      res2.json(response);
      console.log(res2);
      // res2.send();
      // return res2;
    },
  };

  // Check if there is a response for the particular method, if so invoke it, if not response with an error
  const response = handleCase[method];
  if (response) {
    response(req, res);
  } else {
    res.status(400).json({ error: 'No Response for This Request' });
  }
};

export default handler;
