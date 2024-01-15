import React from 'react';

const BlogPagination = () => {
    return (
        <div className="flex gap-5 h-[51px] max-sm:gap-2.5">
            <a href="#" className="pagination__elem w-[50px] hover:border rounded-full text-center py-[13px] bg-[#F2F2F2]">1</a>
            <a href="#" className="pagination__elem w-[50px] hover:border rounded-full text-center py-[13px]">2</a>
            <a href="#" className="pagination__elem w-[50px] hover:border rounded-full text-center py-[13px]">3</a>
            <a href="#"
               className="pagination__elem w-[50px] hover:border rounded-full text-center py-[13px] max-sm:hidden">4</a>
            <p className="py-[13px] w-[50px] text-center">...</p>
            <a href="#"
               className="pagination__elem w-[50px] hover:border rounded-full  text-center py-[13px] leading-[150%]">85</a>
        </div>
    );
};

export default BlogPagination;