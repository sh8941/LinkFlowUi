
const LinkCard = (props) => {
    return (

        <tr className="border-t border-gray-200 hover:bg-gray-50 ">

            <td className="px-4 py-3">
                {props.data.shortCode}
            </td>

            <td className="px-4 py-3 max-w-[75]">
                <div className="truncate">
                    {props.data.originalUrl}
                </div>
            </td>

            <td className="px-4 py-3">
                {props.data.type}
            </td>

            <td className="px-4 py-3">
                {props.data.clickCount}
            </td>

            <td className="px-4 py-3 whitespace-nowrap">
                {props.data.createAt}
            </td>

            <td className="px-4 py-3">
                <div className="flex justify-center items-center gap-4">

                    <button
                        className="cursor-pointer text-gray-600 hover:text-black"
                        onClick={() =>
                            navigator.clipboard.writeText(
                                `https://linkflow-1.onrender.com/go/${props.data.shortCode}`
                            )
                        }
                    >
                        <i className="ri-file-copy-line"></i>
                    </button>

                    <button
                        className="cursor-pointer text-red-800 hover:text-red-600"
                        onClick={() =>
                            props.onDeleteHandler(props.data.shortCode)
                        }
                    >
                        <i className="ri-delete-bin-6-line"></i>
                    </button>

                </div>
            </td>

        </tr>
    );
}

export default LinkCard;
