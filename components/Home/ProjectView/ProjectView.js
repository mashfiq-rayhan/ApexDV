import React from "react";

const ProjectView = () => {
  const dataView = [
    ["projectDone", "1300+", "Project Done"],
    ["HappyClients", "10505+", "Happy Clients"],
    ["Trophy", "17+", "Award Winner"],
  ];

  return (
    <div className="bg-[#222429] flex flex-wrap justify-around py-8">
      {dataView.map((data, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row items-center my-6 lg:my-0">
          <div className="h-16 w-16 bg-white rounded-md flex items-center justify-center my-6 lg:my-[106px]">
            <img
              className="p-4"
              alt="projectDone"
              src={`/images/LandingPage/ProjectView/${data[0]}.svg`}
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-white text-5xl font-teko font-normal ml-6 lg:ml-7.5">
              {data[1]}
            </p>
            <p className="text-white text-2xl font-teko ml-6 lg:ml-7.5">
              {data[2]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectView;

{
  /* <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/projectDone.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>1300+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Project Done</Typography>
            </Box>
        </Stack>
        <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/HappyClients.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>10505+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Happy Clients</Typography>
            </Box>
        </Stack>
        <Stack item sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box sx={{ height: '64px', width: '64px', background: '#FFFFFF', borderRadius: '6px', m: { xs: '25px',lg:'106px 0px'} }}>
                <Box sx={{ m:'16px'}} component="img" alt="projectDone" src="/images/LandingPage/ProjectView/Trophy.svg" />
            </Box>
            <Box>
                <Typography sx={{ color: 'white', fontSize: '50px', fontFamily: 'Teko', fontWeight: '400', mt:{xs:'15px', lg:'80px'}, ml: {xs:'25px', lg:'30px'} }}>17+</Typography>
                <Typography sx={{ color: 'white', fontSize: '25px', fontFamily: 'Teko', ml:{xs:'25px', lg:'30px'} }}>Award Winner</Typography>
            </Box>
        </Stack> */
}
