import NavigationBar from './components/NavigationBar';
import Project from './components/Project';



const Home = () => {
  return (
    //root
    <div className='flex flex-col justify-center items-center bg-neutral-900 p-[3vw] '>
      {/* hero */}
      <div className=" text-[#d4d4d4] font-medium h-[85vh] sm:h-screen w-full flex flex-col justify-between pb-[4vw]">
        {/* Navbar */}
        <NavigationBar />
        
        {/* Outer Wrapper */}
        <div className="flex flex-row justify-center ">
          {/* First Child */}
          <div className="w-full px-[2vw] md:mr-10 md:w-3/4 xl:w-1/2">
            <p className='mono text-[#48b8a0]'>hello world! my name is</p>
            <div className='border-l-2 border-[#48b8a0] pl-2'>
              <div>
                <h1 
                  className='Exo text-4xl sm:text-7xl text-[#ededed] font-black'
                >
                Colin Cockburn
                </h1>
                <p className='Exo pl-1'> 
                I am a software developer currently pursuing a computer 
                science degree with a focus in artificial intelligence at 
                Queen's University. I am currently completing my 4th year of studies and look forward to my Co-op with Ericsson starting in May.
                </p>
              </div>
            </div>
          </div>
     
        </div>
        <div className='flex  justify-center'>
          <div className='Exo flex-shrink text-xl border-b font-medium text-[#48b8a0] border-[#48b8a0] '>Projects
          </div>
        </div>
      </div>
      {/* projects */}
      <div className='flex flex-col xl:w-4/5'>
        <Project  
            title={"Depth Map AI | Python, TensorFlow"}
            description={"This AI is a custom-built depth map model overlaid with an existing object classification model named YOLO. The depth map model takes in a 2D image and predicts each pixel's distance from the camera. This was accomplished using a CNN U-Net architecture. The model is trained on two datasets of 3D images and their corresponding 2D images using approximately 8000 indoor images from the DIODE Dataset and 10,000 images from our custom-made dataset. Our custom dataset was created using a RealSense camera to gather image and depth map pairs inside a Vex robotics competition field. The purpose of this project is to apply computer vision capabilities to Vex competition robots. The YOLO model allows the robot to understand what objects are in its field of view, while the depth map model gives it context to how far away the objects are. This can be used to identify and act on game pieces in the field, and gather information about its location within the field. In this demo video you can see it opperating within a bedroom and living room."}
            videoLink={"https://www.youtube.com/embed/LT3b4AtN6-o?si=-v9j311sKAYHZrmS"}
            videoTitle={"Depth Map AI Demo"}
            gitHubLink = {"https://github.com/theol0403/QMIND-CV-Robot-Vision"}
        />
        <Project 
            title={"Host | Unity, C#"}
            description={"Host is a fast paced 2D platformer currently in development using Unity game engine. the goal of the game is to go from start to finish while overcoming obstacles and enemies stronger than the player. The twist is that you have the ability to take control of the enemies, and use them against each other. The core game mechanics of the game are complete, and the game is currently in the process of being polished and refined. In this demo video, I showcase the mechanics of the game, and the progress I've made so far."}
            videoLink={"https://www.youtube.com/embed/S7Hy0AoY2SM?si=8waAf4gv1g0IqNPp"}
            videoTitle={"Host Demo"}
            gitHubLink = {"https://github.com/colincockburn/Host"}
        />
        <Project 
          title={"Chess Engine | C++, SFML"}
          description={"A chess engine built from the ground up using C++, enhanced by the graphical and interactive capabilities of the SFML framework. The engine contains a AI for the user to play against. The AI is built around a min max alogorithm with alpha beta pruning for efficieny. Using material value and positioning for evaluation, the AI is caple of playing well above the average chess player."}
          videoLink={"https://www.youtube.com/embed/cqcyE2_q9Hw?si=lBC8W4tHwb3yQKYT"}
          videoTitle={"Chess Engine Demo"}
          gitHubLink = {"https://github.com/colincockburn/chess-engine"}
        />
          <Project 
          title={"Wordle Calculator | Python, Tkinter"}
          description={"A python program that takes in a user's guess and coloured result for said guess, and calculates next best options. The calculator sorts possible guesses based on the average information entropy each guess will provide as well as the frequncy of usage in the english language. You can find a demo of the calculator on a few previous wordle games here, and after recreating wordle in python for testing, it scores a average of 3.65 attempts on all 2315 possible games of wordle."}
          videoLink={"https://www.youtube.com/embed/OOmZ5D4Vdbo?si=ZurXf8ee1KRASEEF"}
          videoTitle={"Chess Engine Demo"}
          gitHubLink = {"https://github.com/colincockburn/Wordle-solver"}
        />
      </div>
    </div>
  );
};

export default Home;
