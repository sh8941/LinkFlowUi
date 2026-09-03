// import React from 'react';

// const ShortUrlCard = ({generatedUrl, handleCopy, copied}) => {
//     return (
//         <div className=" p-4 border border-gray-300 rounded-xl bg-white shadow">

//             <p className="text-sm text-gray-500 mb-2">
//                 Your shortened URL
//             </p>

//             <div className="flex items-center gap-3">

//                 <input
//                     type="text"
//                     value={`http://localhost:8080/go/${generatedUrl}`}
//                     readOnly
//                     className="flex-1 p-3 bg-gray-100 rounded-lg border
//                            border-gray-200"
//                 />

//                 <button
//                     type="button"
//                     onClick={handleCopy}
//                     className="px-4 py-3 bg-violet-600 text-white rounded-lg cursor-pointer"
//                 >
//                     {copied ? "Copied!" : "Copy"}
//                 </button>

//             </div>

//         </div>
//     );
// }

// export default ShortUrlCard;



function ShortUrlCard({
  generatedUrl,
  copied,
  handleCopy
}) {

  const shortUrl = `https://linkflow-1.onrender.com/go/${generatedUrl}`;

  return (
    <div className="border border-gray-300 rounded-lg p-4">

      <p className="text-sm text-gray-500">
        Your short URL
      </p>

      <div className="flex items-center gap-2 mt-2">

        <input
          type="text"
          value={shortUrl}
          readOnly
          className="
            flex-1
            px-3
            py-2
            border
            border-gray-300
            rounded-md
            bg-gray-50
          "
        />

        <button
          type="button"
          onClick={handleCopy}
          className="
            px-4
            py-2
            bg-violet-700
            text-white
            rounded-md
            cursor-pointer
          "
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>

      </div>

    </div>
  );
}

export default ShortUrlCard;