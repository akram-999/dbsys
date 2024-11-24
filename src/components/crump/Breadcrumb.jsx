import React from 'react'
import { Link } from 'react-router-dom';

const Breadcrumb = ({
    pageName,
    
  }) => {
    return (
      <>
        <div className=" relative overflow-hidden  bg-yellow-50 p-20 dark:bg-yellow-400">
          <div className="from-stroke/0  via-stroke to-stroke/0 dark:via-dark-3 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r"></div>
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4">
                <div className="text-center">
                  <h1 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                    {pageName}
                  </h1>
                  
  
                  <ul className="flex  justify-center gap-[10px]">
                    <li>
                      <Link
                        to="/"
                        className="text-dark flex items-center gap-[10px] text-base font-medium dark:text-white"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <p className="text-body-color flex items-center gap-[10px] text-base font-medium">
                        <span className="text-body-color dark:text-dark-6">
                          {" "}
                          /{" "}
                        </span>
                        {pageName}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Breadcrumb;
  