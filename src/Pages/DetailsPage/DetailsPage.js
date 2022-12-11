import React from "react";
import {useParams} from 'react-router-dom';
import Data from '../../Data.json';

const DetailsPage = () => {
  const params = useParams();
  
  const x = Data.find(v=>v.id===params.id);
  console.log(x);

  const arr = new Array(10);
  const fetaures = new Array(10);
  const others = new Array(5);
  
  return (
    <section className="m-10">
      <h1 className="text-center text-4xl font-bold">{x.name}</h1>
      <p className="text-center">By <span className="text-red-600">Ahsan Sayeed</span></p>

      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl text-white font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {x.shortDesc}
            </h3>
            <span className="text-xs dark:text-gray-400">
              February 19, 2021
            </span>
            <br /><br />
            <button type="button" className="px-8 py-3 font-semibold rounded-full dark:bg-gray-100 dark:text-gray-800 hover:text-red-800"><a href={x.link}>Preview Page</a></button>
          </div>
        </a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {
            [...arr].map((v,i)=>{

              return <a
              key={i}
              rel="noopener noreferrer"
              href=""
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
            >
              <img
                role="presentation"
                className="object-cover w-full h-full rounded h-44 dark:bg-gray-500"
                src="https://source.unsplash.com/random/480x360?1"
              />
            </a>  
            })
          }
          

        </div>
          <h1 className="text-center text-2xl">Main Features</h1>
          <hr />
          <ul className="">
            {
              x.main.map((v,i)=>{
                return <li key={i}>{v}</li>
              })
            }
          </ul>
          <br />
          <h1 className="text-center text-2xl">Other Features</h1>
          <hr />
          <ul className="">
            {
              x.other.map((v,i)=>{
                return <li key={i}>{v}</li>
              })
            }
          </ul>
      </div>
    </section>
  );
};

export default DetailsPage;
