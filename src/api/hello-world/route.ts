import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { IProductModuleService } from "@medusajs/types";
import { Modules } from "@medusajs/framework/utils";

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const productModuleService: IProductModuleService = req.scope.resolve(
        Modules.PRODUCT
    )

    const [list, count] = await productModuleService
        .listAndCountProducts()

    res.json({
        list,
        count,


        // res.json({
        // message: "Hello, world!",
    })
}
