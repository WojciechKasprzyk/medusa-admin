import { defineMiddlewares } from "@medusajs/medusa"
import { z } from "zod"
import { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export default defineMiddlewares({
    routes: [
        {
            matcher: "/admin/products",
            method: ["POST"],
            additionalDataValidator: {
                brand_id: z.string().optional(),
            },
        },
        {
            matcher: "*",
            middlewares: [
                (
                    req: MedusaRequest,
                    res: MedusaResponse,
                    next: MedusaNextFunction
                ) => {
                    console.log("Received a request!")

                    req.params = {
                        ...req.params,
                        hello: "world",
                    }

                    next()
                },
            ]
        }
    ],
})
