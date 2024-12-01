import {
    createStep,
    StepResponse,
    createWorkflow,
    WorkflowResponse,
} from "@medusajs/framework/workflows-sdk"
import { IProductModuleService } from "@medusajs/framework/types"
import { Modules } from "@medusajs/framework/utils"

const step1 = createStep("step-1", async (_, context) => {
    const productModuleService: IProductModuleService =
        context.container.resolve(Modules.PRODUCT)

    const [, count] = await productModuleService.listAndCountProducts()

    return new StepResponse(count)
})

const myWorkflowCount = createWorkflow(
    "product-count",
    function () {
        const count = step1()

        return new WorkflowResponse({
            count,
        })
    }
)

export default myWorkflowCount
