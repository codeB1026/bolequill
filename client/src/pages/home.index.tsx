import{ useState } from 'react';
import { Heading, Heading2, SubHeading, TopicSelect } from '../assets';
import { InputField, ReusableButton } from '../components';
import ButtonList from '../components/button_list';

import { Loader } from '../assets/loaders';


const Home = () => {
 
 
  const [loading, setLoading] = useState(false);


 
   

  const handleGenerate = async () => {
    setLoading(false)
    console.log('clicked')
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full">
          <div className="mt-1">
            <h1 className="title_text">{Heading}</h1>
            <h1 className="title_text_2">{Heading2}</h1>
            <h1 className="sub_text">{SubHeading}</h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <img
                src="src\assets\img\hero.png"
                alt="quote generating tool "
                className="w-[40vw] h-[80vh] fixed top-40 -left-[3.5rem] transform -scale-x-100 z-10"
              />
            </div>

            <div className="flex-1 flex-col items-center justify-center gap-4 mt-10 z-30 ">
              <div className="flex items-center justify-center">
                <InputField />
              </div>
              <div className="flex items-center justify-center my-6 relative">
                <ReusableButton
                  style="btn"
                  btntitle="generate now"
                  onClick={handleGenerate}
                />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col items-center justify-center z-50 w-full ">
            <h1 className="sub_text">{TopicSelect}</h1>
            <div className="relative flex items-center justify-center z-50 w-[50vw] ">
              <ButtonList />
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
