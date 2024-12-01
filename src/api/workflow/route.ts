import type {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import myWorkflow from "../../workflows/hello-world"
import myWorkflowCount from "../../workflows/product-count";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {
    const r1 = await myWorkflow(req.scope)
        .run({
            input: {
                name: req.query.name as string,
            },
        })

    const r2 = await myWorkflowCount()
        .run({
            input: {
                id: req.query.id as string
            }
        })

    res.json({
        r1: r1.result,
        r2: r2.result,
    })
}
