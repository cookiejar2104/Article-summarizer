import React, { useEffect, useState } from 'react'
import { useLazyGetSummaryQuery } from '../api/article';
import { FiCopy } from 'react-icons/fi';
import { MdDensityMedium } from "react-icons/md";
import { Link } from 'react-router-dom';
import { loader } from '../assets'

const Ai = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  })
  const [all, setAll] = useState([]);
  const [sopied, setCopied] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const articlesFromlocal = JSON.parse(
      localStorage.getItem('articles')
    )
    if (articlesFromlocal) {
      setAll(articlesFromlocal)
    }
  }, []);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAll = [newArticle, ...all]
      setArticle(newArticle);
      setAll(updateAll);

      localStorage.setItem('articles', JSON.stringify(updateAll))
    }
  }
  const copy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000)
  }


  return (
    <>
      <div className=''>
        <form action="" className='flex flex-row sm:flex-cols cols-2 justify-center max-w-[800px]  p-6 rounded-lg mx-auto mt-6 my-0' onSubmit={handleSubmit}>

          <input type="url" value={article.url} name="url" placeholder='Enter article URL here...' className='m-2 p-4 w-full shadow-md shadow-slate-500 rounded-full' onChange={(e) => setArticle({ ...article, url: e.target.value })} />

          <button type='submit' className='bg-red-600 m-2 p-4 px-8 text-white shadow-md shadow-slate-500 rounded-full  hover:bg-red-400 border border-red-800 font-satoshi font-bold'>GO</button>

        </form>

        {/* search history */}

        <div className='flex-row px-10 justify-center max-w-[400px] sm:max-w-[600px] md:max-w-[800px]  p-2 rounded-lg mx-auto my-1'>
          <div className="font-bold">
          <button className='flex bg-red-600 p-1 px-4 text-white rounded-full shadow-md shadow-slate-500 font-satoshi  hover:bg-red-400 border border-red-800 ' onClick={()=>setOpen((prev)=>!prev)}>History<MdDensityMedium className='mt-1 mx-1'/></button>
          
          </div>
          {
            open && 
          
          <div>
            {
              all.map((item, index) => (
                <div className='bg-red-400 text-white p-4 rounded-full flex flex-cols my-1 max-w-[400px] md:max-w-[600px]'>
                  <div key={`link-${index}`} onClick={() => setArticle(item)} className=''>
                    <div onClick={() => copy(item.url)}>
                      <Link>
                        <FiCopy className='mt-1' />
                      </Link>
                    </div>

                  </div>
                  <p className='mx-2 font-satoshi truncate text-amber-800 font-bold'>{item.url}</p>
                </div>
              ))
            }</div>
            }


        </div>

        {/* response  */}
        <div className='justify-center max-w-[400px] sm:max-w-[600px] md:max-w-[800px]  p-2 rounded-lg mx-auto my-1'>
          {isFetching ? (
            <img src={loader} alt="loading.." className='w-20 h-20' />
          ) : error ? (
            <p>Oops! Something went wrong.</p>
          ) :
            (
              article.summary && (
                <div className="">
                  <h2 className='text-red-600 font-bold font-satoshi sm:text-2xl'>
                    Article summary:
                  </h2>
                  <p className='my-4 font-satoshi'>
                    {article.summary}
                  </p>
                </div>
              )
            )
          }
        </div>

      </div>

    </>
  )
}

export default Ai