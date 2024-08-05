import {defineConfig} from "sanity"
import { structureTool } from "sanity/structure"
import schemas from "./sanity/schemas"

const config = defineConfig({
    projectId: "4l1y2qz5",
    dataset: "production",
    title: "My Portfolio",
    apiVersion: "2024-08-03",
    // must be the same as the adminstudio folder
    basePath: "/adminstudio",
    // deskTool is deprecated and is now structureTool
    plugins: [structureTool() ],
    schema: {types: schemas}
})

export default config