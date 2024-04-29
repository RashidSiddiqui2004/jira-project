
const PriorityPallete = () => {
    return (
        <div className="grid grid-cols-5 w-full h-full">
            <div className="bg-slate-600 w-full h-full cursor-pointer rounded-full" title="high"></div>
            <div className="bg-green-600 w-full h-full cursor-pointer rounded-full" title="medium"></div>
            <div className="bg-red-600 w-full cursor-pointer rounded-full" title="critical"></div>
            <div className="bg-yellow-600 w-full cursor-pointer rounded-full" title="significant"></div>
            <div className="bg-pink-600 w-full cursor-pointer rounded-full" title="moderate"></div>
            {/* pointer-events-none -> for restricted users */}
        </div>
    )
}

export default PriorityPallete