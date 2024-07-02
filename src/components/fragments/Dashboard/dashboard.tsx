const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-row space-x-2 mt-5 md:ml-8">
        <p className="font-bold">Dashboard</p>
        <i data-feather="chevron-right"></i>
        <p className="text-[#222222]">Dashboard</p>
      </div>
      <div className="flex mt-10 md:ml-8">
        <h1 className="font-bold text-xl">Dashboard</h1>
      </div>
      {/* <section id="listOrder" className="flex mt-10 ml-8">
             <div className="flex flex-row space-x-1">
              <div className="w-[4px] h-[24px] bg-[#0D28A6]"></div>
              <p className="font-bold">List Order</p>
             </div> 
          </section> */}
    </>
  )
}

export default Dashboard
