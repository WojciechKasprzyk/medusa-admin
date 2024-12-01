import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import HelloModuleService from "../../modules/hello/service"
import { HELLO_MODULE } from "../../modules/hello"
import BrandModuleService from "../../modules/brand/service";
import { BRAND_MODULE } from "../../modules/brand";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const helloModuleService: HelloModuleService = req.scope.resolve(
        HELLO_MODULE
    )

    const brandsModuleService: BrandModuleService = req.scope.resolve(
        BRAND_MODULE
    )



    // const my_custom = await helloModuleService.createMyCustoms({
    //     name: "test"
    // })

    res.json({
        my_customs: await helloModuleService.listMyCustoms(),
        brands: await brandsModuleService.listBrands()
    })
}
