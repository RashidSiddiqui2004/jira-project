import ProjectDetails from "../ProjectDetails"
import AddButton from "./AddButton"
import PriorityPallete from "./PriorityPallete"
import RemoveButton from "./RemoveButton"

const Toolbar = () => {
    return (

        <>
            <div className="sm:hidden flex justify-end my-2">
                <ProjectDetails />
            </div>
            <div className="grid grid-cols-12 my-4">

                <div className="col-span-12 sm:col-span-5 h-3 sm:h-[4vh] mb-3 sm:my-0">
                    <PriorityPallete />
                </div>
                <div className="col-span-4 sm:col-span-2">
                    <AddButton />
                </div>
                <div className="col-span-2">
                    <RemoveButton />
                </div>

                <div className="hidden sm:col-span-1">
                </div>

                <div className="hidden col-span-5 sm:flex justify-end sm:col-span-3">
                    <ProjectDetails />
                </div>
            </div>
        </>

    )
}

export default Toolbar