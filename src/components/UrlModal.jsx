// import React from 'react';

// const UrlModal = ({ isOpen, onClose, children }) => {

//     if (!isOpen) {
//         return null;
//     }

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">

//             <div className="w-1/2 h-4/5 rounded-xl bg-white shadow-xl">

//                 {/* Header */}
//                 <div className="flex justify-end items-center px-4">

//                     <button onClick={onClose} className='text-4xl'>
//                         ×
//                     </button>
//                 </div>

//                 {/* Content */}
//                 <div className="h-full w-full">
//                     {children}
//                 </div>

//             </div>

//         </div>
//     );
// }

// export default UrlModal;



function UrlModal({ isOpen, onClose, children }) {

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
      "
    >

      <div
        className="
          bg-white
          rounded-xl
          w-full
          max-w-3xl
          p-6
        "
      >

        <button
          onClick={onClose}
          className="float-right text-xl cursor-pointer"
        >
          ×
        </button>

        {children}

      </div>

    </div>
  );
}

export default UrlModal;