import { graphql } from 'msw';

export const handlers = [
  graphql.query('ListShopping', (req, res, ctx) => {
    return res(
      ctx.data({
        acquisitions: [
          {
            code: '#001',
            name: 'Análise de Negócios',
            price: 'R$5300,00',
          },
          {
            code: '#002',
            name: 'Automação de sistemas',
            price: 'R$15300,00',
          },
        ],
      })
    );
  }),
];
