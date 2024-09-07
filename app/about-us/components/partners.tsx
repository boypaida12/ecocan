const logos = [
    {
      name: 'YPB',
      url: '/assets/images/about/support-1.svg',
    },
    {
      name: 'Pure Recycle',
      url: '/assets/images/about/support-2.svg',
    },
    {
      name: 'EBIKES AFRICA',
      url: '/assets/images/about/support-3.svg',
    },
    {
      name: 'Business Finland',
      url: '/assets/images/about/support-4.svg',
    },
    {
      name: 'NEFCO',
      url: '/assets/images/about/support-5.svg',
    },
  ]
  
  const Partners = () => {
    return (
      <div className="w-full py-12">
        <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
          <div className="grid grid-cols-3 gap-x-6 md:grid-cols-5">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.url}
                className="h-10 w-28 px-2"
                alt={`${logo.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default Partners