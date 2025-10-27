import NavigationBar from './components/NavigationBar';
import Project from './components/Project';



const Home = () => {
  return (
    //root
    <div className='flex flex-col justify-center items-center bg-neutral-900 p-[3vw] '>
      {/* hero */}
      <div className=" text-[#d4d4d4] font-medium h-[85vh] sm:h-screen w-full flex flex-col justify-between pb-[4vw]  max-w-[1500px]">
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
                Queen's University. I recently finished a 16 month work term at Ericsson Ottawa where I contributed to two seperate teams as an Embedded Software Developer and an AI/ML Developer. I expect to graduate in December and am currently looking for work.
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
      <div className='flex flex-col xl:w-4/5  max-w-[1200px]'>
        <Project  
            title={"Image Denoising Model | PyTorch"}
            description={"This project was the development of a Convolutional Neural Network which denoises images using a U-Net architecture built with PyTorch. While this is not a niche project on its own, the purpose was to test the compression to performance trade offs of structured/unstructured pruning and quantization-aware-training. The project is currently underway as the compression techniques have not been implemented yet. Currently the main structure of the project is complete including the model, training, data loading, and evaluation. Here you can see a couple visual outputs of the base model in action with a short training window."}
            photoLink={"/denoise_example_2.png"}
            videoTitleTitle={"Denoise Example     "}
            gitHubLink = {"https://github.com/colincockburn/QU-landlords"}
        />   
        <Project  
            title={"Depth Map AI | Python, TensorFlow"}
            description={"This AI is a custom-built depth map model overlaid with an existing object classification model named YOLO. The depth map model takes in a 2D image and predicts each pixel's distance from the camera. This was accomplished using a CNN U-Net architecture. The model is trained on two datasets of 3D images and their corresponding 2D images using approximately 8000 indoor images from the DIODE Dataset and 10,000 images from our custom-made dataset. Our custom dataset was created using a RealSense camera to gather image and depth map pairs inside a Vex robotics competition field. The purpose of this project is to apply computer vision capabilities to Vex competition robots. The YOLO model allows the robot to understand what objects are in its field of view, while the depth map model gives it context to how far away the objects are. This can be used to identify and act on game pieces in the field, and gather information about its location within the field. In this demo video you can see it operating within a bedroom and living room."}
            videoLink={"https://www.youtube.com/embed/LT3b4AtN6-o?si=-v9j311sKAYHZrmS"}
            videoTitle={"Depth Map AI Demo"}
            gitHubLink = {"https://github.com/theol0403/QMIND-CV-Robot-Vision"}
        />
        <Project 
            title={"Host | Unity, C#"}
            description={"Host is a fast paced 2D platformer video game The goal of the game is to go from start to finish while overcoming obstacles and enemies stronger than the player. The twist is that you have the ability to take control of the enemies, and use them against each other. The core game mechanics of the game are complete, and the game is currently in the process of being polished and refined. In this demo video, I showcase the mechanics of the game, and the progress I've made so far. This project was originally part of a course project, but I have continued working on it since completing the course. All character models and animations were designed my self and free assets were used to build the game world."}
            videoLink={"https://www.youtube.com/embed/S7Hy0AoY2SM?si=8waAf4gv1g0IqNPp"}
            videoTitle={"Host Demo"}
            gitHubLink = {"https://github.com/colincockburn/Host"}
        />
        <Project 
          title={"Chess Engine | C++, SFML"}
          description={"A chess engine built from the ground up using C++, enhanced by the graphical and interactive capabilities of the SFML framework. The engine contains a AI for the user to play against. The AI is built around a min max algorithm with alpha beta pruning for efficiency. Using material value and positioning for evaluation, the AI is capable of playing well above the average chess player."}
          videoLink={"https://www.youtube.com/embed/cqcyE2_q9Hw?si=lBC8W4tHwb3yQKYT"}
          videoTitle={"Chess Engine Demo"}
          gitHubLink = {"https://github.com/colincockburn/chess-engine"}
        />
        <Project  
            title={"Full Stack Webpage - QU Landloards"}
            description={"QU Landlords is full stack web page which enables Queen's University students to post anonymous reviews of their landlords in order to inform future tenants. This application is built using the MERN stack - MongoDB, Express.js, React + tailwind, and Node.js. This was a personal project taken on by myself and my roommate after our dissatisfaction with our current landlord left us with no way to effectively warn our peers from making the same mistake."}
            photoLink={"/home_page_new.png"}
            videoTitleTitle={"QU Landlords"}
            gitHubLink = {"https://github.com/colincockburn/QU-landlords"}
        />      
          <Project 
          title={"Wordle Calculator | Python, Tkinter"}
          description={"A python program that takes in a user's guess and coloured result for their previous attempt, and calculates next best options. The calculator sorts possible guesses based on the average information entropy each guess will provide as well as the frequency of usage in the english language. You can find a demo of the calculator on a few previous wordle games here, and after recreating wordle in python for testing, it scores an average of 3.65 attempts on all 2315 possible games of wordle."}
          videoLink={"https://www.youtube.com/embed/OOmZ5D4Vdbo?si=ZurXf8ee1KRASEEF"}
          videoTitle={"Chess Engine Demo"}
          gitHubLink = {"https://github.com/colincockburn/Wordle-solver"}
        />
      </div>
    </div>
  );
};

export default Home;
