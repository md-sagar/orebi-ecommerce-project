import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import Product from '../products/Product';
import best1 from '../../assets/best1.png'
import best2 from '../../assets/best2.png'
import best3 from '../../assets/best3.png'
import best4 from '../../assets/best4.png'
import new1 from '../../assets/new1.png'
import new2 from '../../assets/new2.png'
import new3 from '../../assets/new3.png'
import new4 from '../../assets/new4.png'
import specil1 from '../../assets/specil1.png'
import specil2 from '../../assets/specil2.png'
import specil3 from '../../assets/specil3.png'
import specil4 from '../../assets/specil4.png'


const items = [best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2, best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2, best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4,specil1,specil2,specil3,specil4,best1,best2,best3,best4,new1,new2,new3,new4];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item,index) => (
          <div key={index} className=' md:w-[45%] lg:w-[32%] my-5'>
            <Product img={item}/>
          </div>
        ))}
    </>
  );
}


const Pagination = ({itemsPerPage }) => {

    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
    
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

  return (
    <>
      <div className='flex flex-wrap justify-center '>
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="page-item"
        pageLinkClassName="page-link border border-solid border-gray-500 px-2 py-1 md:py-2 md:px-3.5 inline-block font-dm font-normal fonr-sm"
        previousClassName="hidden"
        nextClassName="hidden"
        breakLabel="..."
        containerClassName="flex flex-wrap gap-2 md:gap-5 mt-10 "
        activeClassName="active bg-black text-white"
        renderOnZeroPageCount={null}
      />
       <p className='mt-5 md:absolute right-0 bottom-0 font-dm font-normal text-secoundary text-sm'>Products from {itemOffset} to {endOffset} of {items.length}</p>
    </>
  )
}

export default Pagination