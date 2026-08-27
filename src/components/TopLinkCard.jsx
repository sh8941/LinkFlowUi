import React from 'react';

const TopLinkCard = (props) => {
    const data = props.linkData;


    return (
        // <div className='w-full flex justify-between px-8 py-4  border border-gray-300'>
        //     <h4>{data.originalUrl}</h4>
        //     <h4 className='text-blue-700 cursor-pointer'>{data.shortLink}</h4>
        //     <h4>{data.clicks}</h4>
        //     {/* <h4>16 Aug, 2026</h4> */}
        //     <h4>{new Date(data.createdAt).toLocaleString()}</h4>
        //     <h4>Actions</h4>
        // </div>
        <div className="
            grid grid-cols-[2fr_1fr_0.5fr_1fr_0.8fr]
            gap-4
            px-8 py-4
            border-x border-b border-gray-300
        ">

            <h4 className="truncate">
                {data.originalUrl}
            </h4>

            <h4 className="truncate text-blue-700 cursor-pointer" onClick={() => navigator.clipboard.writeText(`http://localhost:8080/go/${data.shortLink}`)}>
                {data.shortLink}
            </h4>

            <h4>
                {data.clicks}
            </h4>

            <h4 className="truncate">
                {new Date(data.createdAt).toLocaleString()}
            </h4>

            <h4 className='text-center flex gap-4'>
                <button className='cursor-pointer text-gray-600 ' onClick={() => {navigator.clipboard.writeText(`http://localhost:8080/go/${data.shortLink}`)}}><i className="ri-file-copy-line"></i></button>
                <button className='cursor-pointer text-red-700' onClick={() => {props.onDeleteHandler(data.shortLink)}}><i className="ri-delete-bin-6-line"></i></button>
            </h4>

        </div>
    );
}

export default TopLinkCard;
