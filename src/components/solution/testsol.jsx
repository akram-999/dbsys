import React, { useState } from 'react';

const Features = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16 ">
        {/* Grid */}
        
            <h1 className="text-lg text-center  text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400 dark:bg-gradient-to-r  dark:from-orange-300 dark:to-yellow-400   mb-5  " data-aos="zoom-in" >
            NOS SOLUTIONS
            </h1>
           
          
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center  ">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2 bg-gray-100 dark:bg-gray-700 px-6 rounded-lg">
            

            {/* Tab Navs */}
            <nav className="grid gap-4 mt-3 md:mt-10 " aria-label="Tabs" role="tablist" aria-orientation="vertical">
              {[
                {
                  id: 1,
                  title: 'TPV POS',
                  description: 'Une large gamme de caisses enregistreuses adaptée à chaque type de commerce.',
                  icon: (
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                    </svg>
                  ),
                },
                {
                  id: 2,
                  title: 'BORNES',
                  description: 'Bornes de commande ou interactive , personnalisable selon le besoin.',
                  icon: (
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 14 4-4" />
                      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                    </svg>
                  ),
                },
                {
                  id: 3,
                  title: 'DRIVE THRU',
                  description: 'Nos solutions permettent aux clients de prendre les commandes avec precision et rapidité , le client est en contact directe avec le caissier.',
                  icon: (
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  ),
                },
                {
                  id: 4,
                  title: 'DIGITAL SIGNAGE',
                  description: 'Diffusez vos messages au clients en un seul clic , notre solution vous fait gagner du temps.',
                  icon: (
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500 dark:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  ),
                },
                {
                  id: 5,
                  title: 'PAGERS & SERVICE A TABLE',
                  description: 'Expérience client: les clients ne se rassemblent plus au comptoir. Cela crée une expérience plus calme et plus agréable.',
                  icon: (
                    <svg
                      className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600  dark:hs-tab-active:text-blue-500   dark:text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                      <path d="M5 3v4" />
                      <path d="M19 17v4" />
                      <path d="M3 5h4" />
                      <path d="M17 19h4" />
                    </svg>
                  ),
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={` text-start hover:bg-white dark:hover:bg-gray-400  focus:outline-none focus:bg-white focus:text-yellow-400  p-4 md:p-5 rounded-xl ${
                    activeTab === tab.id
                      ? '  dark:focus:bg-gray-400 active'
                      : ''
                  }`}
                  id={`tabs-with-card-item-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  
                >
                  <span className="flex gap-x-6">
                    {tab.icon}
                    <span className="grow">
                      <span className="block text-lg font-semibold hs-tab-active:text-yellow-600  dark:focus:text-white dark:text-yellow-400">
                        {tab.title}
                      </span>
                      <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-white">
                        {tab.description}
                      </span>
                    </span>
                  </span>
                </button>
              ))}
            </nav>
            {/* End Tab Navs */}
          </div>
          {/* End Col */}

          <div className="lg:col-span-6" data-aos="fade-right">
            <div className="relative">
              {/* Tab Content */}
              <div>
                {[1, 2, 3,4,5].map((id) => (
                  <div
                    key={id}
                    id={`tabs-with-card-${id}`}
                    className={activeTab === id ? '' : 'hidden'}
                    role="tabpanel"
                    aria-labelledby={`tabs-with-card-item-${id}`}
                  >
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20"
                      src={`https://images.unsplash.com/photo-${
                        id === 1
                          ? '1605629921711-2f6b00c6bbf4'
                          : id === 2
                          ? '1665686306574-1ace09918530'
                          : id === 3 
                          ? '1598929213452-52d72f63e307'
                          : id === 4 
                          ? '1665686306574-1ace09918530'
                          : '1605629921711-2f6b00c6bbf4'
                      }?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&h=720&q=80`}
                      alt="Features Image"
                    />
                  </div>
                ))}
              </div>
              {/* End Tab Content */}
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Features;
