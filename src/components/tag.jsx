export function Tag({content}){
    return (
        <p className="text-sm hover:bg-[var(--primary-color)] cursor-default rounded-full px-2 py-1 bg-white border-black border-[1px] text-black transition-all">{content}</p>
    )
}