import { http, graphql, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.deepspacestore.com/offers/001", () => {
    return HttpResponse.json({
      code: "001",
      name: "Análise de Sistema",
      price: "5.500,00",
      quantity: "1",
    });
  }),
  http.post("https://api.deepspacestore.com/offers/001/create_order", () => {
    return HttpResponse.json({

    });
  }),
];
